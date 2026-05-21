---
adr: 0002
title: Refonte de la home en expérience narrative scroll WebGL
status: proposed
date: 2026-05-21
deciders: Pierre Legrand
consulted: Claude Code
informed: —
follows: 0001-approche-narrative-scroll
---

# ADR 0002 — Refonte de la home en expérience narrative scroll WebGL

## Contexte

La home `/` est aujourd'hui un layout bento ([src/components/sections/](../../src/components/sections/)) en 4 blocs : `Hero` · `ApproachServices` · `Resources` · `Convert`. Elle partage sa grammaire avec le reste du site et porte les JSON-LD critiques globaux : `Organization`, `LocalBusiness`, `WebSite`, `AggregateRating` + `Review[]` (déclarés dans [src/app/layout.tsx](../../src/app/layout.tsx)).

[ADR 0001](0001-approche-narrative-scroll.md) a établi le pattern narrative scroll WebGL sur `/approche`. Le résultat conversionne et plaît visuellement. On veut maintenant porter le **même pattern** sur la home, mais avec une **structure éditoriale propre** — la home ne raconte pas la même histoire que /approche.

## Décision

On refait `/` en **scroll narrative full-bleed 6 chapitres**, avec :
- Réutilisation 1:1 de l'infrastructure narrative (`BackgroundCanvas`, `SmoothScrollProvider`, `CustomCursor`, `NavFixed`, `ChapterRail`, `ProgressBar`, primitives `Chapter`/`Pill`/`Lede`/`useWordSplitter`)
- 6 chapitres avec un story arc complémentaire à /approche
- Strip du Footer global (le colophon du CH.06 le remplace)
- Conservation des JSON-LDs critiques + ajout d'un `CreativeWork` pour positionner la page comme contenu éditorial

### Chapitres retenus (rail 6 boutons, dans cet ordre)

| # | Section | Mood | Theme | Lava lamps | Story arc |
|---|---------|------|-------|------------|-----------|
| 01 | Cover | `dawn` | light | — | Value prop d'entrée — différenciée de /approche, sur le **gain** (« Reprenez le contrôle… ») plutôt que la méthode |
| 02 | Le constat | `reality` | light | — | Pain points PME au ton provocateur (cf. [feedback_tone_provocateur](../../C:/Users/black/.claude/projects/d--SourceFast-coolify-linux-site-augmenter-pro/memory/feedback_tone_provocateur.md)) — la home est l'entrée du tunnel, doit accrocher fort |
| 03 | Trois disciplines | `violet` | DARK | ✅ 3 cards | IA · Digitalisation · Robotique-IoT (les 3 disciplines du handoff original — pas les 4 piliers de /approche, **différenciation claire**) |
| 04 | Les preuves | `night` | DARK | ✅ 4 cards | Stats chiffrées (peut réutiliser celles de /approche CH.05 ou en avoir des propres) + bandeau témoignages (1 quote mise en avant) |
| 05 | Le récit continue | `amber` | light | ✅ 3-6 cards | 3 articles featured (depuis [/blog](../../src/app/blog/)) + 3 idées featured (depuis [/idees](../../src/app/idees/)) — la home pointe vers le contenu, pas l'inverse |
| 06 | La suite | `ember` | DARK | — | Audit 180° offert + CTA contact + contact strip + colophon (remplace le footer global) |

### Différenciation /approche ↔ home

| Aspect | /approche | / |
|--------|-----------|---|
| Nombre de chapitres | 8 | 6 (plus dense) |
| Disciplines | 4 piliers transformation (Tech/Process/Humain/Vision) | 3 disciplines (IA/Digi/Robotique) |
| Preuves | 4 stats mono-thème | Stats + témoignage en bandeau |
| Audits | 2 cards 180°/360° dédiées + FAQ | 1 card 180° dans le CH.06 (le 360° n'est pas un produit d'entrée) |
| Storytelling | « voici notre méthode » | « voici votre situation et ce qu'on apporte » |

### SEO — décisions

- **Préservés intacts** : `Organization`, `LocalBusiness`, `WebSite`, `AggregateRating` + 5 `Review[]` dans le node LocalBusiness (déjà dans [layout.tsx](../../src/app/layout.tsx), pas touchés)
- **Nouveau** : `CreativeWork` JSON-LD ajouté dans `app/page.tsx` server pour positionner la home comme contenu éditorial (`@type: "WebPage"` avec `mainEntity: { "@type": "CreativeWork", name: "Votre PME augmentée par l'IA — récit en 6 chapitres", author: { "@id": "https://augmenter.pro/auteur/pierre-legrand#person" } }`)
- **Maintenu** : `metadata.title` et `description` actuels (déjà optimisés)
- **Footer global** : sa suppression sur `/` retire les liens mentions légales / CGV / RGPD du bas. Mitigation : ces liens sont ajoutés dans le **colophon du CH.06** en mono compact

## Alternatives considérées

### A. Calque /approche (mêmes 8 chapitres) — rejetée

- **Pour** : effort minimal, cohérence visuelle maximale
- **Contre** : duplication éditoriale. Le visiteur qui passe / → /approche voit la même structure, la même grille de chapitres. Pas d'intérêt à scroller les deux pages.

### B. Hybride narrative + bento conservé — rejetée

- **Pour** : conserve la diversité du layout existant, moins de risque
- **Contre** : casse la promesse de l'expérience pitch. La home doit assumer le format, sinon on dilue l'effet wow déjà installé sur /approche.

### C. 3-discipline framing OU 4-pillar framing sur la home — rejetée

L'hypothèse de réutiliser les 4 piliers (Tech/Process/Humain/Vision) sur la home a été écartée parce que le handoff original prévoit les 3 disciplines (IA/Digi/Robotique). En les plaçant sur la home, on libère /approche pour parler de méthode (les 4 piliers) et la home pour parler d'offre (les 3 disciplines). Couplage symbolique propre.

## Conséquences

### Positives

- **Cohérence stack** : Three.js + GSAP + Lenis déjà installés et payés en performance — pas de coût marginal sur la home
- **Différenciation forte** entre les 2 pages narrative grâce au story arc
- **Lava lamps déjà disponibles** ([src/components/widgets/blobs.tsx](../../src/components/widgets/blobs.tsx)) — pas de nouveau code widget
- **Footer remplacé** par un colophon plus aéré, plus éditorial

### Négatives / risques

- **Plus de risque SEO** : la home concentre l'autorité du domaine. Toute régression touche tout le maillage interne
- **Footer global perdu sur `/`** : les liens mentions légales / CGV / RGPD doivent absolument être réinjectés dans le CH.06 sinon mise en demeure RGPD possible
- **AggregateRating dans le `<LocalBusiness>` global** : ce JSON-LD est dans `layout.tsx` racine, donc présent sur toutes les pages incluant /approche déjà. Pas de duplication mais besoin de vérifier qu'il s'affiche bien dans les SERP Google après refonte
- **+ 6 chapitres × ~250 lignes** = ~1500 lignes de code client supplémentaires. Bundle déjà payé par /approche, mais la home est plus visitée donc TTI à monitorer

### Neutres

- Le menu de navigation reste accessible via `NavFixed` (5 liens + CTA, déjà aligné sur /approche)
- Mobile : même expérience dégradée qu'/approche (pas de WebGL < 620px, scroll natif)

## Plan d'implémentation

Voir [docs/plans/home-narrative-scroll-implementation.md](../plans/home-narrative-scroll-implementation.md).

## Références

- ADR précédent : [0001 — /approche narrative scroll](0001-approche-narrative-scroll.md)
- Source pattern : [docs/ClaudeDesign_handoff/.../narrative.html](../ClaudeDesign_handoff/augmenter.PRO%20Design%20Narrative%20three%20js/design_handoff_narrative_site/narrative.html)
- Implementation /approche : [src/app/approche/narrative/](../../src/app/approche/narrative/)
- Home actuelle : [src/app/page.tsx](../../src/app/page.tsx) + [src/components/sections/](../../src/components/sections/)
