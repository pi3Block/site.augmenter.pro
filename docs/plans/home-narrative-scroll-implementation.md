# Plan d'implémentation — Refonte narrative scroll de la home

> Décision portée par [ADR 0002](../decisions/0002-home-narrative-scroll.md). Lire d'abord.
> Pattern de référence : [ADR 0001](../decisions/0001-approche-narrative-scroll.md) — déjà livré sur `/approche`.

Date : 2026-05-21
Branche de travail : `feat/home-narrative-scroll`

## Objectif

Remplacer l'implémentation bento actuelle de [/](../../src/app/page.tsx) par une expérience scroll narrative 6 sections — réutilise toute l'infrastructure narrative déjà installée pour /approche, avec un contenu de chapitres propre à la home.

## Stratégie de réutilisation

L'infrastructure narrative (canvas, lenis, GSAP, primitives, store, mood observer, chrome fixe) reste **dans `src/app/approche/narrative/`** mais on l'importe depuis la home. Trois options envisagées, choix retenu en gras :

- ❌ Cloner sous `src/app/(home)/narrative/` → duplication, 2× les bugs à fixer
- ❌ Déplacer dans `src/components/narrative/` → casse les paths utilisés par /approche
- ✅ **Refactor de `src/app/approche/narrative/` → `src/components/narrative/`** dans une PR 0 dédiée, avec tests visuels /approche pour s'assurer qu'on n'a rien cassé

Décision finale : on garde l'infra dans `src/app/approche/narrative/` pour l'instant et on importe en cross-route. Si maintenance devient lourde, on extraira dans une PR ultérieure (YAGNI).

## Découpage en PRs (séquentielles)

### PR 1 — Scaffolding home + reuse narrative infra (~0.5 j)

**Objectif** : créer la structure des chapitres home, sans toucher à `/`.

**Actions** :

1. Créer la structure :
   ```
   src/app/(home-narrative)/    ← route group, n'apparaît pas dans l'URL
     home-narrative.tsx          ← orchestrateur client, imports depuis ../approche/narrative
     chapters/
       ch01-cover.tsx
       ch02-constat.tsx
       ch03-disciplines.tsx
       ch04-preuves.tsx
       ch05-recit.tsx
       ch06-suite.tsx
     home-moods.ts               ← 6 ChapterMeta pour le rail (différent de approche/moods.ts)
   ```
2. Implémenter `home-narrative.tsx` qui assemble :
   - `BackgroundCanvas`, `SmoothScrollProvider`, `CustomCursor`, `NavFixed`, `ProgressBar` (imports de `@/app/approche/narrative/`)
   - Un nouveau `HomeChapterRail` qui utilise `HOME_CHAPTERS` (6 entrées au lieu de 8)
   - `useMoodObserver` adapté à `HOME_CHAPTERS`
3. Tous les chapitres en stubs vides
4. **NE PAS** modifier `src/app/page.tsx` encore — la home reste sur le bento

**Critère de done** : `npm run build` passe, narrative home est compilée mais pas livrée.

---

### PR 2 — Adapter mood-observer et chapter-rail pour être agnostiques aux chapitres (~0.5 j)

**Objectif** : rendre le mood observer + rail réutilisables avec n'importe quel set de chapitres (pour pouvoir les utiliser depuis /approche ET depuis la home sans dupliquer).

**Actions** :

1. Refactor `useMoodObserver` → prend `chapters: ChapterMeta[]` en argument
2. Refactor `ChapterRail` → prop `chapters: ChapterMeta[]`
3. Refactor `ProgressBar` → idem
4. Pour `/approche`, créer un wrapper qui passe `CHAPTERS` (les 8 actuels)
5. Pour la home, on passe `HOME_CHAPTERS` (les 6)

**Critère de done** : `/approche` continue à fonctionner identique sur le dev server. Rien de visible n'a changé.

---

### PR 3 — Chapitres 01 Cover + 06 Suite (~1 j)

**Objectif** : les 2 bookends — l'ouverture et la fermeture. Pas de lava lamps ici.

**Actions** :

1. **CH.01 Cover** ([ch01-cover.tsx](../../src/app/(home-narrative)/chapters/ch01-cover.tsx)) :
   - Pill : *« Consultant IA & digital · PME française »*
   - Lede : différent de /approche. Proposition : *« Reprenez le contrôle. Votre PME a un cran d'<em>avance</em>. »* (ou variante à discuter)
   - Sub : pitch court de la valeur, mentionne Pierre Legrand
   - Signoff : avatar + lien `/auteur/pierre-legrand`
2. **CH.06 Suite** ([ch06-suite.tsx](../../src/app/(home-narrative)/chapters/ch06-suite.tsx)) :
   - Lede : *« Pas de promesse à vie, des résultats <em>vérifiables</em>. »* (ou autre — angle conversion)
   - Pill : `Prochain pas · le vôtre`
   - 1 grosse card Audit 180° + lava lamp violet (réutilise le pattern Ch06 audit de /approche en plus compact)
   - CTA primary `/contact` + CTA ghost `/approche`
   - Contact strip (Pierre + email + tél)
   - **CRITIQUE** : Colophon enrichi avec les liens du footer global qu'on perd :
     - `Mentions légales` → `/mentions-legales`
     - `CGV` → `/cgv`
     - `Confidentialité` → `/politique-confidentialite`
     - `augmenter.PRO · 2026`

**Critère de done** : visite de la home affiche les 2 chapitres bookends finalisés, les 4 du milieu sont des stubs.

---

### PR 4 — CH.02 Le constat + CH.05 Le récit continue (~1 j)

**Objectif** : 2 chapitres éditoriaux. Lava lamps légères dans CH.05.

**Actions** :

1. **CH.02 Le constat** ([ch02-constat.tsx](../../src/app/(home-narrative)/chapters/ch02-constat.tsx)) :
   - Ton provocateur (cf. [feedback_tone_provocateur](../../C:/Users/black/.claude/projects/d--SourceFast-coolify-linux-site-augmenter-pro/memory/feedback_tone_provocateur.md))
   - Pill : `Le constat`
   - Lede : ex. *« Pendant qu'on vous vend des slides, vos concurrents <em>livrent</em>. »*
   - Body : 3 douleurs PME en colonnes (kicker + body) — style `Annot` de /approche
     - « Vous avez essayé un truc IA pour voir. Vous attendez encore le ROI. »
     - « Votre prestataire parle un dialecte. Vous signez. Vous comprenez pas. »
     - « Vos équipes ont peur de l'outil. L'outil n'est jamais utilisé. »
   - Pas de lava lamps — chapitre texte pur
2. **CH.05 Le récit continue** ([ch05-recit.tsx](../../src/app/(home-narrative)/chapters/ch05-recit.tsx)) :
   - Pill : `Le récit continue`
   - Lede : *« Trois lectures, trois <em>idées</em> à tester demain. »*
   - 2 sous-blocs :
     - **3 articles featured** depuis `/blog` (les plus récents ou hand-picked) — cards avec lava lamps amber + lien vers l'article
     - **3 idées featured** depuis `/idees` (les plus signées) — cards avec lava lamps duo
   - Lien « Tout voir » vers `/blog` et `/idees` sous chaque sous-bloc

**Critère de done** : 4 chapitres finalisés sur 6.

---

### PR 5 — CH.03 Trois disciplines + CH.04 Les preuves (~1.5 j)

**Objectif** : les 2 chapitres signature avec lava lamps majeures.

**Actions** :

1. **CH.03 Trois disciplines** ([ch03-disciplines.tsx](../../src/app/(home-narrative)/chapters/ch03-disciplines.tsx)) :
   - **Dark chapter, mood violet**
   - Pill (glass) : `Prestations · Trois disciplines`
   - Lede : *« L'IA ne sert pas qu'à générer des images <em>de chats</em>. »* (handoff verbatim — c'est la phrase signature)
   - 3 cards lava lamp signature :
     - **Intelligence artificielle** (icon Brain, palette violet) — features : Automatisation tâches répétitives / Assistants métier, agents internes / Intégration MCP & API
     - **Digitalisation avancée** (icon Monitor, palette duo) — features : Audit informatique 180° / Choix & intégration d'outils / Formation des équipes
     - **Robotique & IoT** (icon Bot, palette cold) — features : Capture terrain (drones, caméras) / Capteurs & télémétrie / Pilotage d'équipements
   - Footer « — 0X / 03 » mono sur chaque card
   - CTA discret vers `/approche` (« Voir la méthode complète »)
2. **CH.04 Les preuves** ([ch04-preuves.tsx](../../src/app/(home-narrative)/chapters/ch04-preuves.tsx)) :
   - **Dark chapter, mood night**
   - Pill (glass) : `Chiffres + voix de terrain`
   - Lede : *« Pas de buzz. Des <em>résultats</em> mesurés. »*
   - **Block 1** : 4 stats avec `TrustStatCard` (mêmes 4 que /approche CH.05 : −30% / 48h / 2h→15min / 0 engagement) — éviter la duplication exacte de copy, varier les libellés
   - **Block 2** : 1 témoignage MIS EN AVANT (1 quote XL + nom + ville + gain mono) plutôt que 3 petits (différenciation /approche qui aura 3 voix en CH.06 si on rajoute, ou bien on garde 1 ici et on en met d'autres si besoin)
   - Lien « Tous les témoignages » → `/approche#voix` ou `/temoignages` si on crée la page

**Critère de done** : les 6 chapitres sont finalisés, la home narrative est navigable end-to-end sur `/home-preview` (à créer).

---

### PR 6 — Swap final + JSON-LD + cleanup (~0.5 j)

**Objectif** : la home narrative devient `/` pour de vrai.

**Actions** :

1. **Strip Header + Footer** : créer `src/app/(home-narrative)/layout.tsx` qui hide le footer global ET la home Header. **Note** : on a déjà ce pattern sur `/approche/layout.tsx`. Vérifier qu'il marche pour la home aussi (selector body > footer reste valide).
2. **Update [src/app/page.tsx](../../src/app/page.tsx)** :
   - Garder `metadata` actuel
   - Ajouter un nouveau JSON-LD `CreativeWork` pour positionner la page comme récit éditorial :
     ```ts
     const creativeWorkJsonLd = {
       "@context": "https://schema.org",
       "@type": "WebPage",
       url: "https://augmenter.pro/",
       mainEntity: {
         "@type": "CreativeWork",
         name: "Votre PME augmentée par l'IA — récit en 6 chapitres",
         author: { "@id": "https://augmenter.pro/auteur/pierre-legrand#person" },
         inLanguage: "fr-FR",
       },
     };
     ```
   - Render `<><script .../><HomeNarrative /></>`
3. **Delete** :
   - [src/components/sections/hero.tsx](../../src/components/sections/hero.tsx)
   - [src/components/sections/approach-services.tsx](../../src/components/sections/approach-services.tsx)
   - [src/components/sections/resources.tsx](../../src/components/sections/resources.tsx)
   - [src/components/sections/convert.tsx](../../src/components/sections/convert.tsx)
   - Si d'autres fichiers de `src/components/sections/` deviennent unused (legacy mentioned in CLAUDE.md), les supprimer aussi
4. **Vérifier** : les `Organization`, `LocalBusiness`, `WebSite`, `AggregateRating` du [layout.tsx](../../src/app/layout.tsx) racine sont intacts
5. **Update** [public/sitemap.xml](../../public/sitemap.xml) lastmod `/` à la date du jour
6. Build prod + test manuel sur dev server

**Critère de done** : `/` est en narrative scroll, build vert, JSON-LDs validés par Rich Results Test, footer absent visuellement mais ses liens présents dans CH.06 colophon.

---

## Estimation totale

| PR | Étendue | Estimation |
|----|---------|------------|
| PR 1 | Scaffolding | 0.5 j |
| PR 2 | Refactor pour multi-chapter-sets | 0.5 j |
| PR 3 | Ch01 cover + Ch06 suite | 1.0 j |
| PR 4 | Ch02 constat + Ch05 récit | 1.0 j |
| PR 5 | Ch03 disciplines + Ch04 preuves (lava lamps) | 1.5 j |
| PR 6 | Swap + JSON-LD + cleanup | 0.5 j |
| **Total** | **~5 jours-homme** | |

(plus rapide que /approche parce qu'on réutilise toute l'infrastructure)

## Risques et mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Régression SEO sur `/` (la page principale) | Moyenne | **Très élevé** | Test Rich Results avant merge, monitor Search Console J+7 |
| Footer liens RGPD perdus → mise en demeure | Faible | Élevé | Colophon CH.06 obligatoire pour mentions légales / CGV / politique-confidentialite |
| Bundle JS trop gros (Three.js + GSAP + Lenis maintenant sur 2 routes) | Faible | Moyen | Déjà vérifié sur /approche, mais Lighthouse mobile sur la home après merge |
| Conflits visuels home / approche (trop similaires) | Moyenne | Moyen | Différenciation explicite : 6 vs 8 chapitres, 3 vs 4 disciplines, story arc opposé. Si toujours trop proche, varier les palettes / moods sur la home (ex. swap dawn et reality) |
| L'AggregateRating dans `<LocalBusiness>` globale s'affichera-t-elle toujours dans les SERP ? | Faible | Moyen | Vérifier manuellement Google Search après déploiement |

## Questions ouvertes à valider avant PR 1

- [ ] **Copy CH.01** : « Reprenez le contrôle. Votre PME a un cran d'avance. » OK ou autre angle ?
- [ ] **Copy CH.02** : les 3 douleurs PME proposées résonnent ? Ou autre framing ?
- [ ] **Copy CH.04 preuves** : on duplique les stats /approche (risque redondance) ou on en a des spécifiques à la home ?
- [ ] **CH.05 articles featured** : sélection auto (3 derniers) ou hand-picked dans le code ?
- [ ] **CH.05 idées featured** : idem, auto ou hand-picked ?
- [ ] **CH.06 colophon** : on met juste mentions légales / CGV / RGPD ou aussi sitemap / accessibilité ?
- [ ] **Mood d'ouverture** : dawn comme /approche, ou différent (light, reality) pour signaler une autre histoire ?

## Memos pour les prochaines sessions

- Lib infra à NE PAS dupliquer : tout est dans `src/app/approche/narrative/` — on importe cross-route
- Pattern bookend : Ch01 + CH final = lede sans lava lamps, juste signoff / colophon
- Mémoire à respecter : `feedback_no_gratuit` (offert pas gratuit), `feedback_tone_provocateur` (CH.02), `project_geo_scope` (78/95 ancrage + visio nationale)
- Rule confirmée : pas de commit sur main pendant le chantier, tout sur `feat/home-narrative-scroll`, merge FF quand validé
