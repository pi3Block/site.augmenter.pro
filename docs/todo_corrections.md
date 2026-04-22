# Dette technique — état post-refonte bento

**Date** : 2026-04-21 (mise à jour 2026-04-22)
**Contexte** : refonte progressive du site en layout bento — d'abord la homepage (4 sections), puis les pages internes `/approche`, `/idees`, `/blog`.

Priorité : 🔴 bloquant · 🟠 important · 🟢 cosmétique.

---

## ✅ Résolus

### Session 1 (2026-04-21)

- **Homepage refondue en 4 sections bento** : [hero.tsx](../src/components/sections/hero.tsx), [approach-services.tsx](../src/components/sections/approach-services.tsx), [resources.tsx](../src/components/sections/resources.tsx), [convert.tsx](../src/components/sections/convert.tsx). Les 9 anciennes sections (Trust, Services, Approach, Pricing, Ideas, Testimonials, BlogPreview, CTA + Hero) sont fusionnées dans ces 4 blocs grille 12-cols.
- **Primitives bento créées** : [src/components/bento/](../src/components/bento/) (`BentoGrid`, `BentoCard`, `SectionHead`, `Pill`, `ArticleBentoCard`, `PullQuoteCard`, `MiniQuoteCard`).

### Session 2 (2026-04-22)

- **JSON-LD `AggregateRating` + `Review`** : migrés dans le nœud `LocalBusiness` du `@graph` de [src/app/layout.tsx](../src/app/layout.tsx). Le tableau `REVIEWS` (5 avis 5★) alimente `aggregateRating` + `review[]`. Le schema apparaît maintenant sur toutes les pages du site. Validé : `curl http://localhost:3000 | grep aggregateRating` retourne bien le node.
- **3 fichiers de section orphelins supprimés** : `trust.tsx`, `services.tsx`, `testimonials.tsx` retirés de [src/components/sections/](../src/components/sections/).
- **Route `/prestations` consolidée vers `/approche#prestations`** : page supprimée, redirect permanent 308 dans [next.config.ts](../next.config.ts), [sitemap.xml](../public/sitemap.xml) et [llms.txt](../public/llms.txt) mis à jour (entrée `/prestations` retirée, priorité 0.9 transférée à `/approche`).
- **`/approche` refondu en bento** : split [page.tsx](../src/app/approche/page.tsx) (server, metadata) + [approche-view.tsx](../src/app/approche/approche-view.tsx) (`"use client"`, UI avec widgets). Convention identique à `/contact`.
- **`/idees` refondu en bento** : split [page.tsx](../src/app/idees/page.tsx) + [idees-view.tsx](../src/app/idees/idees-view.tsx). Layout Hero bento + 3 IdeaCardBigNumber + cartes "Comment décider" / quote + CTA propose-idée / final.
- **`/blog` refondu en bento** : split [page.tsx](../src/app/blog/page.tsx) + [blog-view.tsx](../src/app/blog/blog-view.tsx). Layout Hero bento + featured 6×5 + newsletter accent + grille 12 articles + CTA final.
- **Header nav fixé** : lien `/prestations` remplacé par `/approche#prestations` dans [header.tsx](../src/components/layout/header.tsx) (plus de round-trip via le redirect 308).
- **`whileInView` fiabilisé** : `margin: "-80px"` remplacé par `amount: 0.2` dans [approach-services.tsx](../src/components/sections/approach-services.tsx) et [resources.tsx](../src/components/sections/resources.tsx). Se déclenche dès 20 % visible, robuste aux scrolls programmatiques.
- **CLAUDE.md synchronisé** : routing, Component Organization, Structured Data et Bento Layout System à jour.

---

## 🟠 Variants widgets non implémentées (issue de la maquette Home.html)

Le prototype [Home.html](../Home.html) prévoyait **3 variantes de ServiceCard** (Liquid/Circuit/Mesh) et **3 variantes d'IdeaCard** (BigNumber/Stat/Split) pour varier visuellement. Actuellement une seule variante existe par famille :

- `ServiceCardStat` uniquement (trois palettes différentes pour différencier)
- `IdeaCardBigNumber` uniquement (trois palettes différentes)

**Fix possible** si design souhaité plus varié :

- Créer `ServiceCardLiquid` (blob liquid central), `ServiceCardMesh` (mesh gradient plein-cadre)
- Créer `IdeaCardStat` (grosse stat hero), `IdeaCardSplit` (pros/cons verticaux)

**Effort** : ~1 h par variante. À faire uniquement si le design actuel paraît trop uniforme.

---

---

## Backlog cosmétique 🟢

Les items de polissage/nettoyage non-bloquants ont été déplacés dans [docs/backlog-cleanup.md](backlog-cleanup.md) :

1. Suppression des 4 sections legacy non importées (`approach.tsx`, `ideas.tsx`, `pricing.tsx`, `blog-preview.tsx`)
2. Mesure Lighthouse mobile des RAF loops
3. Risque double-padding de `BentoCard` si on oublie `variant="flush"`
4. Révision des docs éditoriaux (prevision_contenu, STRATEGIE-EDITORIALE — février 2026)

---

## Prochaine action suggérée

🟠 Décider si on implémente les variantes ServiceCard/IdeaCard supplémentaires pour plus de diversité visuelle sur les sections bento. Effort : 1 h par variante, ~4 h au total.
