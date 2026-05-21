# Plan d'implémentation — Refonte narrative scroll de /approche

> Décision portée par [ADR 0001](../decisions/0001-approche-narrative-scroll.md). Lire d'abord.

Date : 2026-05-21
Auteur : Pierre Legrand + Claude Code
Branche de travail proposée : `feat/approche-narrative-scroll`

## Objectif

Remplacer l'implémentation bento actuelle de [/approche](../../src/app/approche/) par une expérience scroll narrative 8 sections, avec background WebGL, smooth scroll Lenis et timelines GSAP — tout en préservant le SEO et les widgets lava lamps existants.

## Découpage en PRs (séquentielles)

### PR 1 — Scaffolding & dépendances (~0.5 j)

**Objectif** : installer la stack, créer la structure de fichiers vide, vérifier le build.

**Actions** :

1. `npm install three gsap lenis @react-three/fiber` (optionnel `zustand` si pas déjà présent)
2. `npm install --save-dev @types/three`
3. Vérifier la compatibilité avec Next.js 16 / React 19 RSC
4. Créer la structure :
   ```
   src/app/approche/
     page.tsx                          ← server (metadata, JSON-LD)
     approche-view.tsx                 ← DEPRECATED, à supprimer en PR 8
     narrative/                        ← nouveau
       index.tsx                       ← orchestrateur client
       store.ts                        ← Zustand store {mood, blend, progress}
       background-canvas.tsx           ← Three.js shader
       smooth-scroll-provider.tsx      ← Lenis wrapper
       custom-cursor.tsx               ← dot + ring
       nav-fixed.tsx                   ← brand + meta strip
       chapter-rail.tsx                ← 8 boutons numérotés
       progress-bar.tsx                ← track + ticks + label
       moods.ts                        ← palettes + shader configs par mood
       chapters/
         ch01-preambule.tsx
         ch02-terrain.tsx
         ch03-piliers.tsx
         ch04-methode.tsx
         ch05-preuves.tsx
         ch06-audits.tsx
         ch07-questions.tsx            ← FAQ
         ch08-suite.tsx                ← CTA final
       primitives/
         chapter.tsx                   ← scaffold .chapter + .wrap + .chapter-head
         lede.tsx                      ← h2 avec gradient em + highlighter u
         word-splitter.tsx             ← walker récursif pour data-anim=words
         pill.tsx                      ← eyebrow violet/amber
         annot.tsx                     ← bloc kicker + caption
   ```
5. Hook Lenis + GSAP en bas niveau dans `smooth-scroll-provider.tsx`
6. `npm run build` doit passer sans warning ni erreur SSR

**Critère de done** : la page `/approche` est blanche mais le build passe et les imports dynamiques ne plantent pas.

**Fichiers touchés** : `package.json`, `package-lock.json`, structure ci-dessus (fichiers vides ou stubs)

---

### PR 2 — Tokens, primitives, word splitter (~0.5 j)

**Objectif** : porter les tokens manquants du handoff et bâtir les primitives partagées.

**Actions** :

1. Comparer `colors_and_type.css` du handoff avec [globals.css](../../src/app/globals.css). Si tous les tokens y sont déjà → 0 changement. Sinon, ajouter ce qui manque (`--font-mono` JetBrains Mono notamment).
2. Charger JetBrains Mono via `next/font` (pas Google Fonts CSS import) :
   ```ts
   import { JetBrains_Mono } from "next/font/google";
   ```
3. Implémenter `primitives/chapter.tsx` — scaffold `.chapter` avec props `{ id, mood, theme?: "light"|"dark", children }`
4. Implémenter `primitives/lede.tsx` — gère le pattern `<em>` gradient + `<u>` highlighter avec **le fix CSS du handoff lignes 446-464** (background-clip remappé après word split)
5. Implémenter `primitives/word-splitter.tsx` — walker qui recurse dans `<em>`/`<u>`, wrap chaque mot dans `<span class="word"><span>word</span></span>`. Doit s'appliquer **client-side après mount** pour ne pas casser l'hydratation
6. Implémenter `primitives/pill.tsx` et `primitives/annot.tsx`

**Critère de done** : `<Lede>« Mot <em>gradient</em> et <u>souligné</u> »</Lede>` rend correctement avec timeline GSAP qui anime chaque mot individuellement.

**Fichiers touchés** : `globals.css`, `src/app/layout.tsx` (font), structure narrative/

---

### PR 3 — Background WebGL + store mood (~1 j)

**Objectif** : faire vivre le shader paint + le palette switcher pilotés par le scroll.

**Actions** :

1. Implémenter `store.ts` avec Zustand :
   ```ts
   type Mood = "dawn" | "reality" | "violet" | "amber" | "night" | "light" | "ember" | "audits" | "questions";
   interface NarrativeStore {
     currentMoodIdx: number;
     blendFraction: number;       // 0..1, last 40% of section
     scrollProgress: number;       // 0..1 page total
     activeChapter: number;        // 0..7
     setMood: (idx: number, blend: number) => void;
     setScrollProgress: (p: number) => void;
   }
   ```
2. Implémenter `moods.ts` — exporter les 7 palettes + configs (`uContrast`, `uGrain`, `uMouseStrength`) du handoff lignes 244-264 + 2 moods custom (`audits` dérivé de `ember` light, `questions` dérivé de `light`)
3. Implémenter `background-canvas.tsx` :
   - Mount Three.js scene une seule fois, `position: fixed; inset: 0; z-index: 0; pointer-events: none`
   - Vertex/fragment shaders **copiés tels quels** du handoff lignes 1164-1259
   - Uniforms : `uTime`, `uMouse`, `uMouseVel`, `uRes`, `uC0/1/2`, `uContrast`, `uGrain`, `uMouseStrength`
   - Boucle RAF : `uTime += dt`, smooth mouse `lerp(dt * 6)`, ambient Lissajous drift après 1.4 s idle
   - `pixelRatio` capé à 1.6
   - Subscribe au store : update `uC0/1/2` interpolés selon `currentMoodIdx` et `blendFraction`, tween `uContrast/uGrain/uMouseStrength` sur 1.2 s `power2.out` à chaque changement de chapter
   - **SSR-safe** : import dynamique avec `{ ssr: false }`
4. Implémenter le mood observer dans `narrative/index.tsx` :
   - RAF loop qui détermine le chapitre actif via `getBoundingClientRect()` de chaque section vs `vh * 0.5`
   - Calcule `frac` et `blend` selon les formules du handoff (handoff README section « Mood / palette observer »)
   - Appelle `store.setMood()` à chaque frame
5. **Fallback reduce-motion** : si `prefers-reduced-motion: reduce` → ne pas monter le canvas, render un `<div>` avec gradient CSS qui change de couleur via `data-mood` sur `<body>`

**Critère de done** : on scrolle sur une page de 8 sections vides, le background morph entre 7+ palettes, le curseur smear la peinture localement.

**Fichiers touchés** : `narrative/store.ts`, `narrative/moods.ts`, `narrative/background-canvas.tsx`, `narrative/index.tsx`

---

### PR 4 — Lenis + GSAP timelines + chrome fixe (~0.5 j)

**Objectif** : smooth scroll, animations d'entrée par section, rail et progress bar.

**Actions** :

1. `smooth-scroll-provider.tsx` : init Lenis avec config du handoff (`duration: 1.15`, easing exponentiel), pipe `lenis.on('scroll', ScrollTrigger.update)` et `gsap.ticker.add(t => lenis.raf(t * 1000))`. Disabled si reduce-motion.
2. `nav-fixed.tsx` : brand + meta strip, `mix-blend-mode: difference`. ARIA `role="banner"`.
3. `chapter-rail.tsx` :
   - 8 boutons (un par chapitre)
   - Subscribe au store pour highlight active
   - Click → `lenis.scrollTo(target, { duration: 1.4 })`
   - **ARIA** : `<nav aria-label="Navigation par chapitre">`, chaque bouton `aria-label="Aller au chapitre N : Titre"` et `aria-current="true"` si actif
   - Hidden < 980 px
4. `progress-bar.tsx` :
   - Track + fill scaleX(scrollProgress) + 8 ticks
   - Label gauche `CH.0X — Title`, label droit `0X / 08`
   - `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`
5. `custom-cursor.tsx` : dot + ring, lerp 0.18, expand sur `[data-hover]` + `a` + `button`. Mounted only ≥ 620 px ET pas reduce-motion.
6. Implémenter les timelines GSAP partagées dans une factory `useChapterTimeline(ref)` :
   - Tous les `data-anim` du handoff README section « Per-section timeline » (lignes 318-328)
   - `once: true` (critique)
   - Easings `power3.out`
7. Parallax scrub (`.lede` yPercent -12, `.chapter-head` xPercent 6) — uniquement si pas reduce-motion

**Critère de done** : on scrolle dans des sections vides, le rail s'illumine, la progress bar avance, et les sections animent leur entrée comme prévu.

**Fichiers touchés** : `narrative/smooth-scroll-provider.tsx`, `narrative/nav-fixed.tsx`, `narrative/chapter-rail.tsx`, `narrative/progress-bar.tsx`, `narrative/custom-cursor.tsx`

---

### PR 5 — Chapitres 01-02-08 (préambule, terrain, CTA) (~1 j)

**Objectif** : chair sur les 3 sections les plus proches du handoff. Pas de lava lamps ici.

**Actions** :

1. **CH.01 Préambule** ([ch01-preambule.tsx](../../src/app/approche/narrative/chapters/ch01-preambule.tsx)) :
   - Copy adaptée : *« Votre approche, augmentée par l'IA. Sans gourou, sans jargon. »*
   - Sub : adapter le pitch handoff (78/95 ancrage + visio nationale, cf. [project_geo_scope](../../C:/Users/black/.claude/projects/d--SourceFast-coolify-linux-site-augmenter-pro/memory/project_geo_scope.md))
   - Signoff : avatar gradient + caption mono « Récit de méthode · Pierre Legrand »
   - Stamp top-right : `Mai 2026` / `Jouy-le-Moutier (95)` / `47°N · 2°E`
2. **CH.02 Le terrain** ([ch02-terrain.tsx](../../src/app/approche/narrative/chapters/ch02-terrain.tsx)) :
   - Pill : `78 · 95 · en présentiel ou à distance`
   - Lede : adapter (*« Pas la Silicon Valley. Le Vexin, la vallée de l'Oise, des PME qui veulent avancer. »*)
   - Map SVG : reprendre 1:1 du handoff (dotted grid + blobs régions + pins)
   - 3 annotations : Profil client / Demande type / Promesse
3. **CH.08 La suite** ([ch07-suite.tsx](../../src/app/approche/narrative/chapters/ch07-suite.tsx)) :
   - Lede : *« Quel est votre prochain niveau ? »* (clamp 48-144 px, gradient violet→amber)
   - 2 CTAs : `Réserver l'audit 180°` (primary violet-600) + `Voir les autres pages` (ghost)
   - Contact strip : Pierre Legrand · vite@augmenter.pro · +33 6 79 11 97 74
   - Colophon : `augmenter.PRO · 2026` / `Récit · 8 chapitres · fin`

**Critère de done** : on peut scroller du début à la fin de /approche, voir 3 sections finies avec timelines d'entrée, et atterrir sur un CTA fonctionnel qui redirige vers `/contact`.

---

### PR 6 — Chapitres 03-04-05 avec lava lamps intégrées (~1.5 j)

**Objectif** : intégrer les widgets `LiquidBlob` / `MeshAurora` dans les cards des chapitres piliers, méthode, preuves.

**Actions** :

1. **CH.03 Les 4 piliers** ([ch03-piliers.tsx](../../src/app/approche/narrative/chapters/ch03-piliers.tsx)) :
   - **Adaptation** : 4 piliers actuels (pas les 3 du handoff). Copy depuis [approche-view.tsx](../../src/app/approche/approche-view.tsx) lignes 39-91.
   - Grille `4 × 1` desktop, `2 × 2` tablette, `1 × 4` mobile
   - Chaque card : `BentoCard variant="flush"` enveloppant un widget custom :
     - 44×44 glass tile avec icône Lucide (Monitor / Settings / GraduationCap / Eye — déjà en place)
     - Titre, quote italique, liste features
     - **Lava lamp** : `MeshAurora` en fond avec palette par pilier (violet / amber / duo / cold)
     - Numéro `— 0X / 04` mono bas-droite
2. **CH.04 La méthode** ([ch04-methode.tsx](../../src/app/approche/narrative/chapters/ch04-methode.tsx)) :
   - Pill : `Notre approche · 4 étapes`, style amber (border `amber-500/35%`, bg `amber-400/14%`)
   - Lede : adapter (*« La performance naît de l'équilibre entre l'humain, ses outils, ses habitudes. »*)
   - 4 cards `min-height: 240px` avec lava lamp `LiquidBlob` warm/amber en fond
   - Copy : Diagnostic / Solutions sur mesure / Accompagnement / Itération (depuis approche-view actuel)
   - Icônes : `Search` / `Wrench` / `GraduationCap` / `Repeat`
3. **CH.05 Les preuves** ([ch05-preuves.tsx](../../src/app/approche/narrative/chapters/ch05-preuves.tsx)) :
   - Pill : `Chiffres de terrain · 2025`
   - Lede : *« Ce qui compte n'est pas le buzz, mais ce qu'on mesure. »*
   - 4 cards stat avec **lava lamps signature comme dans tes screenshots** (`TrustStatCard` enveloppé) :
     - `−30 %` Gain de temps moyen
     - `48 h` Délai de premier livrable
     - `2 h → 15 min` Tâche type compressée
     - `0` Engagement long terme
   - Counters animés via GSAP (`data-count`)
   - **Mood `night` = DARK** : les lava lamps adoptent palettes `cold`/`mono` plus saturées

**Critère de done** : visuellement aligné sur les screenshots fournis (grosse carte sombre + lava lamp décalée + texte chiffré).

---

### PR 7 — Audits 180/360 + FAQ (~1 j)

**Objectif** : sections custom hors handoff, critiques SEO.

**Actions** :

1. **CH.06 Audits 180° / 360°** ([ch06-audits.tsx](../../src/app/approche/narrative/chapters/ch06-audits.tsx)) :
   - `id="prestations"` (préserve la redirect 308 depuis [next.config.ts](../../next.config.ts))
   - 2 grandes cards type screenshots :
     - **Audit 180°** : icône `Target` ou `Search`, lava lamp **violet**, big `60 min`, `Diagnostic offert`, `Audit complet de votre SI`
     - **Audit 360°** : icône `MapPin` ou `Brain`, lava lamp **amber→duo**, big `225 €`, `Audit IA Stratégique`, `Feuille de route 6 mois`
   - Liste features sous chaque card (depuis [approche-view.tsx](../../src/app/approche/approche-view.tsx) lignes 120-152)
   - Note bas : *« Offert / 225 € · pas de gratuit »* (cf. [feedback_no_gratuit](../../C:/Users/black/.claude/projects/d--SourceFast-coolify-linux-site-augmenter-pro/memory/feedback_no_gratuit.md))
   - **Conserver le `servicesJsonLd`** du `page.tsx` server (5 services)
2. **CH.07 Les questions** ([ch07-questions.tsx](../../src/app/approche/narrative/chapters/ch07-questions.tsx)) :
   - Pill : `Réponses aux questions fréquentes`
   - Lede : *« Avant de réserver, vous voulez peut-être savoir... »*
   - Accordion FAQ existant — **réutilise les questions actuelles** (depuis [approche-view.tsx](../../src/app/approche/approche-view.tsx))
   - **Conserver le `faqJsonLd`** dans `page.tsx` server
   - Style : `BentoCard variant="light"` pour l'accordion, mood `light`

**Critère de done** : `/prestations` redirige toujours en 308 vers `/approche#prestations` qui scroll fluide au CH.06. FAQPage JSON-LD validable par Rich Results Test.

---

### PR 8 — Polish, a11y manuel, perf, suppression dead code (~1 j)

**Objectif** : finir le travail.

**Actions** :

1. Audit manuel a11y :
   - Test reduce-motion via DevTools (Rendering tab) — la page doit rester utilisable sans canvas/Lenis/GSAP scrub
   - Test navigation clavier complète : Tab parcourt rail (8) → CTA primary CH.08 → CTAs audits
   - VoiceOver / NVDA : chaque section a `<section aria-labelledby="ch-0X-title">`
2. Audit perf :
   - Lighthouse `/approche` mobile : LCP < 2.5 s (le texte du CH.01 doit s'afficher AVANT le shader complet)
   - Bundle size : vérifier que `three`, `gsap`, `lenis` ne contaminent pas les autres routes via les chunks partagés
   - `next/dynamic` partout avec `ssr: false` pour le code WebGL/GSAP/Lenis
3. Mobile :
   - < 980 px : rail masqué ✅
   - < 620 px : curseur natif, lava lamps possiblement allégées (test perf)
4. Supprimer [approche-view.tsx](../../src/app/approche/approche-view.tsx) (l'ancien fichier bento)
5. Mettre à jour [page.tsx](../../src/app/approche/page.tsx) :
   - `metadata` : ajuster la description si besoin (pas le title, déjà optimisé)
   - Conserver `servicesJsonLd` et `faqJsonLd` dans le server component (pas dans le client narrative)
6. Tester `npm run build` et `npm run lint`
7. Mettre à jour [public/llms.txt](../../public/llms.txt) si la description de /approche change
8. Mettre à jour [public/sitemap.xml](../../public/sitemap.xml) avec `<lastmod>` du jour

**Critère de done** : Lighthouse > 90 sur Performance / SEO / Accessibility, build CI vert, page validable Rich Results Test pour FAQPage + Service.

---

## Estimation totale

| PR | Étendue | Estimation |
|----|---------|------------|
| PR 1 | Scaffolding | 0.5 j |
| PR 2 | Primitives + word splitter | 0.5 j |
| PR 3 | Background WebGL + store | 1.0 j |
| PR 4 | Lenis + GSAP + chrome fixe | 0.5 j |
| PR 5 | Chapitres 01-02-08 | 1.0 j |
| PR 6 | Chapitres 03-04-05 lava lamps | 1.5 j |
| PR 7 | Audits + FAQ (SEO critique) | 1.0 j |
| PR 8 | A11y, perf, cleanup | 1.0 j |
| **Total** | **~7 jours-homme** |

## Risques et mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| LCP dégradé par Three.js | Moyenne | Élevé | Canvas chargé en `ssr: false` après hydratation, texte CH.01 visible immédiatement |
| Régression SEO `/prestations` → `/approche#prestations` | Faible | Élevé | Test Rich Results + curl `Location:` header avant merge PR 7 |
| FAQPage JSON-LD perdu | Faible | Moyen | Server component `page.tsx` reste source de vérité, narrative client component ne touche pas |
| Bug GSAP timelines non rejouées | Moyenne | Faible | `once: true` documenté dans le handoff, à respecter strictement |
| Curseur custom inutilisable au clavier | Certaine | Moyen | Détection `matchMedia('(pointer: coarse)')` et désactivation, fallback cursor natif |
| Conflit lava lamps + canvas WebGL (double GPU charge) | Moyenne | Moyen | Profiler GPU sur Chrome perf, dégrader lava lamps si > 16 ms frame |
| Word splitter casse hydratation React | Moyenne | Faible | Apply post-mount via `useEffect`, jamais en SSR |

## Décisions à valider avant PR 1

- [ ] Branche de travail : `feat/approche-narrative-scroll` OK ?
- [ ] On commit après chaque PR ou tout sur la même branche jusqu'à fin ?
- [ ] Audit perf attendu avant ou après PR 8 ?
- [ ] Mobile : on accepte une expérience dégradée (pas de WebGL < 620 px) ou on cherche la parité ?

## Memos pour les prochaines sessions

À l'ouverture de la branche, charger ces points en contexte :

- ADR [0001](../decisions/0001-approche-narrative-scroll.md) — la décision est verrouillée, ne pas reconsulter
- Handoff source : [narrative.html](../ClaudeDesign_handoff/augmenter.PRO%20Design%20Narrative%20three%20js/design_handoff_narrative_site/narrative.html) — source de vérité pour les ambiguïtés
- Gotcha critique : `<em>` gradient + word splitter (handoff README lignes 446-464)
- Fallback reduce-motion obligatoire (cf. ADR — décision a11y complète)
- Contraintes mémoire : audit « offert » (pas « gratuit »), ton non-corporate, ancrage 78/95 + visio nationale
