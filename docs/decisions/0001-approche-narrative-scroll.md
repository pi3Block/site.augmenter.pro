---
adr: 0001
title: Refonte /approche en expérience narrative scroll WebGL
status: accepted
date: 2026-05-21
deciders: Pierre Legrand
consulted: Claude Code, Claude Design (handoff)
informed: —
---

# ADR 0001 — Refonte /approche en expérience narrative scroll WebGL

## Contexte

La page [/approche](../../src/app/approche/) est aujourd'hui un layout bento Tailwind classique (hero · 4 piliers · audits 180°/360° · FAQ) qui partage sa grammaire visuelle avec le reste du site. Elle absorbe la route historique `/prestations` via une redirect 308 et porte une partie significative du SEO de l'offre (FAQPage JSON-LD, Service + OfferCatalog JSON-LD).

Claude Design a livré le **8 mai 2026** un handoff `narrative.html` — prototype d'expérience éditoriale 7 chapitres avec :

- Background WebGL Three.js (shader fragment FBM 5 octaves, domain warping, smear curseur)
- Smooth scroll Lenis + timelines GSAP ScrollTrigger
- Curseur custom, rail vertical fixe, progress bar
- Palette qui morph entre 7 moods (`dawn`, `reality`, `violet`, `amber`, `night`, `light`, `ember`)

Le brief est de tester ce format **sur /approche uniquement** (pas la home), tout en :

1. **Conservant les widgets « lava lamps »** existants ([LiquidBlob](../../src/components/widgets/blobs.tsx), `MeshAurora`, `ServiceCardStat`, `IdeaCardBigNumber`, `TrustStatCard`) — signature visuelle déjà installée
2. **Préservant le SEO** (FAQPage JSON-LD, servicesJsonLd, redirect 308 `/prestations` → `/approche#prestations`)
3. **Adoptant la stack Three.js + GSAP + Lenis** plutôt qu'un compromis Framer Motion

## Décision

On refait `/approche` en **scroll narrative full-bleed 8 sections**, avec adoption complète de la stack du handoff et fallback statique reduce-motion.

### Sections retenues (rail 8 boutons, dans cet ordre)

| # | Section | Mood | Theme | Lava lamps | Origine |
|---|---------|------|-------|------------|---------|
| 01 | Préambule | `dawn` | light | — | CH.01 handoff (cover « Votre approche, augmentée par l'IA ») |
| 02 | Le terrain | `reality` | light | — | CH.02 handoff (78/95, profil client, carte SVG) |
| 03 | Les 4 piliers | `violet` | **DARK** | ✅ 4× (1/card) | CH.03 handoff **adapté** — 4 piliers actuels (Technique · Process · Humain · Vision Globale & Stratégique) au lieu des 3 disciplines du proto |
| 04 | La méthode | `amber` | light | ✅ 4× (1/card) | CH.04 handoff (Diagnostic · Solutions · Accompagnement · Itération — copy existante de [/approche](../../src/app/approche/approche-view.tsx)) |
| 05 | Les preuves | `night` | **DARK** | ✅ 4× (1/card) | CH.05 handoff (−30 % · 48 h · 2 h → 15 min · 0 engagement) |
| 06 | Audits 180° / 360° | custom (violet→amber) | DARK | ✅ 2× signature | **Section custom** — pas dans le handoff. Pattern visuel = tes screenshots (icône + grand chiffre + lava lamp décalée). Préserve `id="prestations"`, servicesJsonLd, redirect 308 |
| 07 | Les questions | `light` | light | — | **Section custom** — FAQ existante (accordion + FAQPage JSON-LD préservé) |
| 08 | La suite | `ember` | **DARK** | — | CH.07 handoff (CTA « Quel est votre prochain niveau ? » + audit 180° + contact) |

### Stack adoptée

| Lib | Version | Rôle | Montage |
|-----|---------|------|---------|
| `three` | ^0.160.0 | Shader fragment background | Client component unique mounté à la racine de `/approche` (pas dans `app/layout.tsx` global) |
| `gsap` | ^3.12.5 | Timelines + parallax scrub | Client component, imports dynamiques |
| `gsap/ScrollTrigger` | ^3.12.5 | Triggers scroll-bound | idem |
| `lenis` | ^1.1.13 | Smooth scroll momentum | Client component, monté au niveau de la page |
| `zustand` | déjà ? (à vérifier) | Store `{ currentMood, blendFraction, scrollProgress }` | Sinon `useSyncExternalStore` ou `useReducer` lifted |

Tout import est encapsulé dans `'use client'` + `next/dynamic` avec `ssr: false` pour éviter les erreurs SSR (WebGL et `window` ne sont pas disponibles).

### Stratégie a11y

Implementation **complète** du fallback `prefers-reduced-motion: reduce` :

- Pas de canvas Three.js → background = gradient CSS statique mood-aware
- Pas de Lenis → scroll natif
- Pas de timelines GSAP ScrollTrigger → fade-in CSS simples ou rien
- Pas de curseur custom (déjà désactivé < 620px)
- Pas de parallax scrub
- Labels ARIA sur rail (7 buttons), progress bar (`role="progressbar"`, `aria-valuenow`), nav, sections (`aria-labelledby`)
- Le rail nav reste navigable au clavier (Tab + Enter)

## Alternatives considérées

### A. Hybride : hero narrative + bento conservé (rejetée)

Garder le bento existant (piliers, audits, FAQ) et n'ajouter qu'un hero scroll narrative au-dessus.

- **Pour** : effort moindre, SEO préservé sans effort, conserve les composants existants
- **Contre** : casse la continuité éditoriale promise par le handoff. Deux formats différents = deux dettes UI. Le « manifeste » perd sa force quand il atterrit dans un bento standard juste en dessous.

### B. Bento + effets narratifs (background WebGL global, rejetée)

Garder la structure bento mais ajouter par-dessus le background WebGL, Lenis, et le morphing palette.

- **Pour** : refonte légère, structure connue, SEO 0 risque
- **Contre** : l'expérience perd 80 % de la signature du handoff (les chapitres full-bleed, les transitions cinématographiques entre moods). Bento + paint WebGL = visuel saturé, deux systèmes de hiérarchie qui se concurrencent.

### C. Stack Framer Motion + CSS scroll-driven animations (rejetée)

Pas de Three.js, pas de GSAP, pas de Lenis. Background = blur + gradient animés CSS.

- **Pour** : ~80 Ko économisés (Three.js gzippé), pas de WebGL, accessible plus simplement
- **Contre** : on perd le smear curseur, la signature « peinture impasto » du shader, et le morphing inter-mood naturel. La promesse du handoff est précisément ce que le navigateur natif ne sait pas faire.

### D. Adopter les 3 piliers du narrative (rejetée)

Le handoff propose 3 piliers disciplinaires (IA · Digitalisation · Robotique-IoT) au lieu des 4 piliers actuels.

- **Pour** : grille 3-cols parfaite, copy déjà rédigée dans le handoff
- **Contre** : casse le positionnement éditorial déjà construit sur l'axe transformation (Technique · Process · Humain · Vision). Renoncer aux 4 piliers = refonte du discours commercial et SEO bien au-delà de cette page.

## Conséquences

### Positives

- **Différenciation forte** : /approche devient l'expérience pitch, distincte du reste du site qui reste utilitaire
- **Continuité visuelle** : lava lamps déjà installées, palette OKLCH déjà alignée (tokens 1:1 entre handoff et `globals.css`)
- **SEO préservé** : FAQPage + Service JSON-LD intacts, redirect 308 conservée
- **Le test est isolé** : si l'expérience ne convertit pas, rollback ne touche qu'une seule page

### Négatives / risques

- **+~120 Ko gzippé** sur le bundle de `/approche` (Three.js 80 Ko + GSAP 35 Ko + Lenis 5 Ko). Mitigation : dynamic import + tout dans `'use client'`, donc 0 impact sur les autres routes
- **LCP et CLS à surveiller** : le canvas + le shader paint peuvent retarder le First Contentful Paint. Mitigation : canvas en `position: fixed; z-index: 0`, le texte du CH.01 doit s'afficher avant le shader
- **A11y non-triviale** : reduce-motion doit être testé manuellement, plus la nav clavier sur le rail. Pas de cours sur Lighthouse ne capturera ces régressions
- **Maintenance** : Three.js + GSAP + Lenis ajoutent 3 dépendances avec leurs propres cycles de release et CVEs à suivre
- **Dette éditoriale** : si on refait d'autres pages plus tard avec ce pattern, il faut factoriser. Première instance = composants inline OK ; à la 2e page narrative, il faudra extraire un `<NarrativePage>` réutilisable

### Neutres

- Le rail vertical et le curseur custom ne fonctionnent pas en dessous de 980/620 px → mobile garde un scroll standard avec animations dégradées
- `mix-blend-mode: difference` sur la nav peut surprendre sur certains tons de violet → test visuel obligatoire

## Plan d'implémentation

Voir [docs/plans/approche-narrative-scroll-implementation.md](../plans/approche-narrative-scroll-implementation.md) pour le découpage en PRs et la séquence détaillée.

## Références

- Handoff source : [docs/ClaudeDesign_handoff/.../narrative.html](../ClaudeDesign_handoff/augmenter.PRO%20Design%20Narrative%20three%20js/design_handoff_narrative_site/narrative.html)
- Page actuelle : [src/app/approche/approche-view.tsx](../../src/app/approche/approche-view.tsx)
- Widgets lava lamps : [src/components/widgets/blobs.tsx](../../src/components/widgets/blobs.tsx)
- Redirect 308 : [next.config.ts](../../next.config.ts)
