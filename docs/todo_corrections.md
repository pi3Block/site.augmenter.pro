# Dette technique — état post-refonte bento

**Date** : 2026-04-21
**Contexte** : refonte de la homepage en 4 sections bento (Hero, ApproachServices, Resources, Convert) remplaçant les 9 sections précédentes.

Priorité : 🔴 bloquant · 🟠 important · 🟢 cosmétique.

---

## 🔴 Régression SEO — AggregateRating/Review JSON-LD perdu

**Problème** : [testimonials.tsx](../src/components/sections/testimonials.tsx) contenait le JSON-LD `AggregateRating` + 5 `Review` (5 étoiles × 5 avis clients) injecté dans la page d'accueil. Depuis la refonte, ce composant n'est plus importé nulle part — **le schema est absent du site**. Conséquence : perte des étoiles dans les SERP Google.

**Fix possible** :
- Option A (min) : injecter le JSON-LD directement dans [convert.tsx](../src/components/sections/convert.tsx) — la section affiche déjà la note 5.0 avec 5 étoiles, c'est l'emplacement sémantiquement cohérent.
- Option B (global) : déplacer le JSON-LD dans [src/app/layout.tsx](../src/app/layout.tsx) à côté des schemas Organization/LocalBusiness, de sorte qu'il apparaisse sur toutes les pages.

**Effort** : ~15 min. Copier le bloc `reviewsJsonLd` + `<script type="application/ld+json">` depuis testimonials.tsx.

---

## 🟠 Fichiers de section orphelins à trancher

**Non importés nulle part** depuis la refonte :
- [src/components/sections/trust.tsx](../src/components/sections/trust.tsx) — remplacé par les `TrustStatCard` inline dans le Hero
- [src/components/sections/services.tsx](../src/components/sections/services.tsx) — remplacé par `approach-services.tsx`
- [src/components/sections/testimonials.tsx](../src/components/sections/testimonials.tsx) — témoignages distribués dans Hero (mini-quote) et Approach×Services (pull-quote)

**Décision à prendre** :
- Supprimer les 3 fichiers (propre, mais perte du JSON-LD de testimonials — voir point précédent) ;
- Ou les garder comme bibliothèque de blocs réutilisables en documentant leur statut dans [docs/README.md](README.md) (déjà fait).

**Recommandation** : supprimer `trust.tsx` et `services.tsx` après merge ; extraire le JSON-LD de `testimonials.tsx` vers `layout.tsx` puis supprimer aussi.

---

## 🟠 Route `/prestations` dépréciée vers `/approche#prestations`

Les liens du Hero et des ServiceCardStat pointent désormais vers `/approche#prestations` au lieu de `/prestations`. À vérifier :
1. L'ancre `#prestations` existe bien sur [/approche](../src/app/approche/page.tsx).
2. La page [/prestations](../src/app/prestations/page.tsx) est toujours indexée dans [public/sitemap.xml](../public/sitemap.xml), [public/llms.txt](../public/llms.txt) et le [Header](../src/components/layout/header.tsx) — décider si on la conserve, on la redirige vers `/approche#prestations`, ou on la supprime.

Incohérence actuelle : le `Header` envoie toujours vers `/prestations` alors que le Hero envoie vers `/approche#prestations`.

**Fix** : choisir une seule URL canonique pour l'offre, mettre en place des redirects si besoin dans [next.config.ts](../next.config.ts).

---

## 🟠 Incohérence visuelle — pages internes restées en layout classique

La homepage est bento, mais les pages [/approche](../src/app/approche/page.tsx), [/idees](../src/app/idees/page.tsx), [/prestations](../src/app/prestations/page.tsx) et [/blog](../src/app/blog/page.tsx) utilisent toujours les anciennes sections avec grilles 3-colonnes classiques (`approach.tsx`, `ideas.tsx`, `pricing.tsx`, `blog-preview.tsx`).

Le visiteur passe d'un univers visuel dense/éditorial (homepage) à un univers flat/utilitaire (pages internes). Incohérence qui dilue la proposition de valeur.

**Fix** : porter les pages internes au bento. Priorité suggérée : `/approche` (nouvelle URL de l'offre) > `/idees` (showcase) > `/blog`.

**Effort** : ~1 h par page.

---

## 🟠 `whileInView` flaky sur scrolls rapides

**Contexte** : `whileInView={{ opacity: 1 }}` + `viewport={{ once: true, margin: "-80px" }}` ne se déclenche pas toujours quand le scroll est programmatique (Playwright, prerender SSR qui flash le viewport). Les éléments restent à `opacity: 0`.

**Où ça reste problématique** (déjà corrigé dans `convert.tsx`) :
- [approach-services.tsx](../src/components/sections/approach-services.tsx) — `motion.div` wrapping les 4 step-cards et les 3 ServiceCardStat
- [resources.tsx](../src/components/sections/resources.tsx) — `motion.div` wrapping les 3 IdeaCardBigNumber

**Fix recommandé** : remplacer `margin: "-80px"` par `amount: 0.2` (se déclenche dès 20% visible, plus fiable), ou virer les wrappers motion non critiques (la section marche sans).

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

La homepage lance désormais **jusqu'à 10 `requestAnimationFrame` simultanés** (4 TrustStatCard Hero + 3 ServiceCardStat + 3 IdeaCardBigNumber). Chaque hook `useMorph` dans [blobs.tsx](../src/components/widgets/blobs.tsx) tourne en continu tant que le composant est monté (hors `prefers-reduced-motion`).

**Non mesuré en conditions réelles** — probablement OK desktop moderne, potentiellement lourd mobile/M1 bas de gamme.

**Fix si besoin** : wrapper `useMorph` avec un `IntersectionObserver` pour ne ticker que les widgets visibles. Mesurer d'abord Lighthouse avant d'optimiser.

---

## 🟢 Incohérences documentaires mineures

- [CLAUDE.md](../CLAUDE.md) section "Structured Data" mentionne "5 services with pricing (0€ and 225€)" pour [prestations/page.tsx](../src/app/prestations/page.tsx) — vérifier que c'est bien le compte exact (Audit 180° + Audit 360° + 3 autres ?).
- [docs/prevision_contenu.md](prevision_contenu.md) et [docs/STRATEGIE-EDITORIALE.md](STRATEGIE-EDITORIALE.md) datent de février 2026, à réviser si les priorités éditoriales ont bougé depuis avril.

---

## 🟢 `BentoCard` — double padding risque

Si on oublie `variant="flush"` en passant un widget Bionova (qui a déjà son `CardShell`), on obtient : border BentoCard + padding BentoCard + border CardShell + padding CardShell = double cadre disgracieux.

**Mitigation possible** : détecter automatiquement via `React.Children.only` si l'enfant a un `displayName` de widget Bionova, et forcer `flush`. Mais l'explicite est probablement mieux ici.

**Alternative** : documenter clairement la convention dans [docs/README.md](README.md) (déjà fait, section "Widgets animés").

---

## Prochaines actions suggérées (ordre)

1. 🔴 Restaurer le JSON-LD `AggregateRating` (15 min) — fix SEO critique.
2. 🟠 Trancher le sort de l'URL `/prestations` vs `/approche#prestations` + redirects (20 min).
3. 🟠 Trancher le sort des 3 fichiers orphelins (30 min).
4. 🟠 Basculer les `whileInView` vers `amount: 0.2` (30 min).
5. 🟠 Décider de la refonte bento des pages internes (estimation : 4-5 h au total si toutes).
6. 🟢 Mesurer Lighthouse mobile pour valider la perf des RAF loops.
