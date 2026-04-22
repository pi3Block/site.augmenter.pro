# Backlog — polissage & nettoyage (post-refonte bento)

**Créé** : 2026-04-22
**Scope** : tâches cosmétiques 🟢 non-bloquantes issues de la refonte bento. Aucune ne casse la prod ni ne bloque le SEO. À prendre par ordre d'utilité.

---

## 1. Supprimer les 4 sections legacy non importées

Depuis la refonte bento des pages internes, ces 4 fichiers ne sont plus importés nulle part :

| Fichier | Ancien usage | Remplacé par |
|---------|--------------|--------------|
| [src/components/sections/approach.tsx](../src/components/sections/approach.tsx) | `/approche` | [approche-view.tsx](../src/app/approche/approche-view.tsx) |
| [src/components/sections/ideas.tsx](../src/components/sections/ideas.tsx) | `/idees` | [idees-view.tsx](../src/app/idees/idees-view.tsx) |
| [src/components/sections/pricing.tsx](../src/components/sections/pricing.tsx) | `/prestations` (route supprimée) | Intégré dans [approche-view.tsx](../src/app/approche/approche-view.tsx) |
| [src/components/sections/blog-preview.tsx](../src/components/sections/blog-preview.tsx) | Home + `/blog showAll` | [blog-view.tsx](../src/app/blog/blog-view.tsx) + [resources.tsx](../src/components/sections/resources.tsx) |

**⚠️ À conserver** : [src/components/sections/cta.tsx](../src/components/sections/cta.tsx) — toujours utilisé par `/audit-informatique-yvelines`, `/audit-informatique-val-doise`, `/integration-mcp`, `/strategie-ia-pme` et `article-layout.tsx`.

**Étapes** :
1. `grep -r 'from "@/components/sections/\(approach\|ideas\|pricing\|blog-preview\)"' src/` — doit retourner vide.
2. `rm src/components/sections/{approach,ideas,pricing,blog-preview}.tsx`
3. `npm run build` pour confirmer.

**Effort** : 15 min · **Gain** : -4 fichiers morts, moins de confusion pour les prochains contributeurs.

---

## 2. Mesurer Lighthouse mobile (RAF loops cumulés)

La homepage lance **jusqu'à 10 `requestAnimationFrame` simultanés** via le hook `useMorph` de [blobs.tsx](../src/components/widgets/blobs.tsx) (4 TrustStatCard + 3 ServiceCardStat + 3 IdeaCardBigNumber). Les pages bento internes en ajoutent 4 (`/idees`) à 1 (`/blog`).

**Non mesuré en conditions réelles**. Probablement OK desktop moderne, potentiellement lourd mobile M1 / bas de gamme.

**Étapes** :
1. `npm run build && npm run start` — server prod local.
2. Lighthouse mobile sur `/`, `/approche`, `/idees`, `/blog` — viser ≥ 85 perf, ≥ 95 accessibilité/SEO.
3. Si perf < 85 sur mobile, wrapper `useMorph` avec un `IntersectionObserver` :
   - ticker uniquement quand le widget est visible
   - ou passer à un ticker global partagé (1 RAF pour tous les widgets)

**Effort** : 20 min mesure, +1 h si optimisation nécessaire.

---

## 3. Risque double-padding de BentoCard

Si on oublie `variant="flush"` en passant un widget Bionova (`ServiceCardStat`, `IdeaCardBigNumber`, `TrustStatCard` — ils ont déjà leur propre `CardShell`), on obtient un double cadre disgracieux : border BentoCard + padding BentoCard + border CardShell + padding CardShell.

**Fix possibles** (par ordre de sophistication) :

1. **Simple** : garder le status quo, compter sur la convention documentée dans [docs/README.md](README.md) et [CLAUDE.md](../CLAUDE.md).
2. **Guard statique** : typer la prop `children` de `BentoCard` pour rejeter les widgets Bionova hors `variant="flush"` (trop rigide).
3. **Détection runtime** : `React.Children.only` + check `displayName === "ServiceCardStat"` et forcer `flush` automatiquement. Implicite, peut surprendre.

**Recommandation** : rester sur (1) tant qu'on n'a pas eu de régression réelle. Si le bug se produit, passer à (3).

**Effort** : 0 (status quo) ou 30 min (option 3).

---

## 4. Réviser les docs éditoriaux (février 2026)

[docs/prevision_contenu.md](prevision_contenu.md) et [docs/STRATEGIE-EDITORIALE.md](STRATEGIE-EDITORIALE.md) datent de février 2026. Depuis :

- La refonte bento a changé la hiérarchie visuelle (ex : le hero met `/approche#prestations` en CTA primaire).
- La route `/prestations` a été absorbée par `/approche`.
- Le nombre d'articles est passé de X à 12.

**À vérifier dans ces docs** :
- Les priorités éditoriales (quels sujets traiter en priorité) sont-elles toujours alignées avec l'offre actuelle (Audit 180° / 360°) ?
- Les mots-clés ciblés sont-ils toujours pertinents en 2026 ?
- La charte ton (pas de « gratuit », provocateur, orienté douleurs PME) y figure-t-elle ?

**Effort** : 30 min lecture + révisions ciblées si besoin.

---

## Ordre suggéré

1. **1 — Suppression legacy** (15 min, gain immédiat)
2. **2 — Lighthouse mobile** (20 min mesure, action seulement si besoin)
3. **4 — Révision docs éditoriaux** (30 min, utile avant de relancer une campagne de contenu)
4. **3 — Double-padding BentoCard** (à reporter tant qu'il n'y a pas de régression)
