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

## 🟢 Legacy à nettoyer

Les sections suivantes ne sont plus importées nulle part depuis la refonte des pages internes, mais restent conservées pour faciliter un éventuel rollback :

- [src/components/sections/approach.tsx](../src/components/sections/approach.tsx) — ancien composant 4-piliers de `/approche`
- [src/components/sections/ideas.tsx](../src/components/sections/ideas.tsx) — ancienne grille 3-col de `/idees`
- [src/components/sections/pricing.tsx](../src/components/sections/pricing.tsx) — ancien pricing de `/prestations` (route supprimée)
- [src/components/sections/blog-preview.tsx](../src/components/sections/blog-preview.tsx) — ancien bloc home + `/blog showAll`
- [src/components/sections/cta.tsx](../src/components/sections/cta.tsx) — toujours utilisé par `/audit-informatique-*`, `/integration-mcp`, `/strategie-ia-pme`, `article-layout.tsx` → à **conserver**

**Fix** (~15 min) : supprimer `approach.tsx`, `ideas.tsx`, `pricing.tsx`, `blog-preview.tsx` une fois la refonte validée en prod.

Vérifier d'abord avec `grep -r 'from "@/components/sections/{approach,ideas,pricing,blog-preview}"' src/` — doit retourner vide.

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

## 🟢 Performance — RAF loops cumulés

La homepage lance désormais **jusqu'à 10 `requestAnimationFrame` simultanés** (4 TrustStatCard Hero + 3 ServiceCardStat + 3 IdeaCardBigNumber). La page `/blog` n'en lance qu'1, `/idees` 4 (1 TrustStat + 3 Ideas), `/approche` en lance aussi plusieurs. Chaque hook `useMorph` dans [blobs.tsx](../src/components/widgets/blobs.tsx) tourne en continu tant que le composant est monté (hors `prefers-reduced-motion`).

**Non mesuré en conditions réelles** — probablement OK desktop moderne, potentiellement lourd mobile/M1 bas de gamme.

**Fix si besoin** : wrapper `useMorph` avec un `IntersectionObserver` pour ne ticker que les widgets visibles. Mesurer d'abord Lighthouse avant d'optimiser.

---

## 🟢 `BentoCard` — double padding risque

Si on oublie `variant="flush"` en passant un widget Bionova (qui a déjà son `CardShell`), on obtient : border BentoCard + padding BentoCard + border CardShell + padding CardShell = double cadre disgracieux.

**Mitigation possible** : détecter automatiquement via `React.Children.only` si l'enfant a un `displayName` de widget Bionova, et forcer `flush`. Mais l'explicite est probablement mieux ici.

**Alternative** : documenter clairement la convention dans [docs/README.md](README.md) (déjà fait, section "Widgets animés").

---

## 🟢 Autres incohérences documentaires

- [docs/prevision_contenu.md](prevision_contenu.md) et [docs/STRATEGIE-EDITORIALE.md](STRATEGIE-EDITORIALE.md) datent de février 2026, à réviser si les priorités éditoriales ont bougé depuis avril.

---

## Prochaines actions suggérées (ordre)

1. 🟢 Supprimer les 4 fichiers legacy non importés (15 min) — voir section "Legacy à nettoyer".
2. 🟢 Mesurer Lighthouse mobile pour valider la perf des RAF loops (et ajouter un IntersectionObserver si nécessaire).
3. 🟠 Décider si on implémente les variantes ServiceCard/IdeaCard supplémentaires pour plus de diversité visuelle.
4. 🟢 Réviser `prevision_contenu.md` et `STRATEGIE-EDITORIALE.md`.
