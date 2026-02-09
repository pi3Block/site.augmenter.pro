# Commande : Rapport de dette technique

Tu es un architecte logiciel senior. Tu vas analyser le projet **augmenter.pro** (Next.js 16 / React 19 / Tailwind 4) et produire un rapport complet de dette technique.

## Phase 1 — Analyse de l'architecture

### 1.1 Structure du projet

Lis l'arborescence complète du projet et vérifie :
- [ ] Organisation des dossiers cohérente et scalable
- [ ] Séparation des responsabilités (pages, composants, utils, types)
- [ ] Pas de fichiers orphelins ou inutilisés
- [ ] Convention de nommage cohérente (kebab-case fichiers, PascalCase composants)

### 1.2 Patterns & anti-patterns

Lis tous les fichiers source dans `src/` et identifie :
- [ ] Duplication de code entre composants
- [ ] Données hardcodées qui devraient être factorisées
- [ ] Logique métier mélangée avec la présentation
- [ ] Composants trop volumineux qui devraient être découpés
- [ ] Imports non utilisés ou circulaires
- [ ] Incohérences de style entre composants similaires

### 1.3 Composants client vs server

Audite l'utilisation des directives `"use client"` :
- [ ] Composants marqués client sans raison (pas d'interactivité/hooks)
- [ ] Composants qui pourraient être partiellement server (extraction de la partie statique)
- [ ] Impact sur le bundle size et les performances

## Phase 2 — Qualité du code

### 2.1 TypeScript

- [ ] Mode strict activé et respecté
- [ ] Types `any` utilisés (à éliminer)
- [ ] Interfaces vs types — cohérence
- [ ] Props typées sur tous les composants
- [ ] Pas de `@ts-ignore` ou `@ts-expect-error`
- Lance `npx tsc --noEmit` pour vérifier les erreurs de type

### 2.2 Linting & formatage

- Lance `npm run lint` et analyse les résultats
- [ ] Règles ESLint appropriées pour Next.js
- [ ] Formatage cohérent (Prettier configuré ?)
- [ ] Pas de warnings ignorés

### 2.3 Données inline

Le site utilise des données hardcodées dans les composants. Évalue :
- [ ] Articles de blog : données dupliquées entre `blog-preview.tsx` et chaque `page.tsx`
- [ ] Témoignages, pricing, services, idées — tout inline dans les sections
- [ ] Risque de désynchronisation entre les listes et les pages réelles
- Propose une stratégie de factorisation si pertinent (fichiers de données centralisés `src/data/`)

## Phase 3 — Dépendances & build

### 3.1 Dépendances

Lis `package.json` et `package-lock.json` :
- [ ] Dépendances obsolètes (versions majeures en retard)
- [ ] Dépendances inutilisées (installées mais non importées)
- [ ] Dépendances qui devraient être en devDependencies (ou inversement)
- [ ] Taille du bundle — dépendances lourdes évitables
- Lance `npm ls --depth=0` pour l'état actuel

### 3.2 Build & performance

- Lance `npm run build` et analyse :
  - [ ] Warnings de build
  - [ ] Taille des bundles par route
  - [ ] Pages statiques vs dynamiques
  - [ ] Temps de build

### 3.3 Configuration

Lis et audite :
- `next.config.ts` — Options optimales ?
- `tsconfig.json` — Configuration stricte et complète ?
- `tailwind.config.*` ou `globals.css` — Classes custom, purge CSS
- `components.json` — Config shadcn à jour ?

## Phase 4 — Maintenabilité & scalabilité

### 4.1 Tests

- [ ] Tests présents ? (unitaires, intégration, e2e)
- [ ] Couverture de code
- [ ] CI/CD configuré pour les tests

### 4.2 Scalabilité du contenu

Évalue la stratégie actuelle (tout hardcodé) vs les alternatives :
- Fichiers MDX pour les articles de blog
- Fichiers de données centralisés (`src/data/articles.ts`, etc.)
- CMS headless (pour le futur)
- Impact sur le DX (Developer Experience) actuel

### 4.3 Accessibilité (a11y)

Vérifie rapidement :
- [ ] Semantic HTML utilisé correctement
- [ ] Aria labels sur les éléments interactifs
- [ ] Contraste des couleurs (palette OKLCH)
- [ ] Navigation au clavier fonctionnelle
- [ ] Skip to content link

## Phase 5 — Rapport

Génère un rapport structuré avec scoring :

```
## Score de dette technique : X/100
(100 = aucune dette, 0 = critique)

## Résumé
- Fichiers analysés : X
- Problèmes critiques : X
- Warnings : X
- Suggestions : X

## Dette critique (impact fort sur la prod ou le dev)
| # | Problème | Fichier(s) | Impact | Effort fix |
|---|----------|------------|--------|------------|
| 1 | ...      | ...        | HAUT   | Xh         |

## Dette moyenne (impact sur la maintenabilité)
| # | Problème | Fichier(s) | Impact | Effort fix |
|---|----------|------------|--------|------------|
| 1 | ...      | ...        | MOYEN  | Xh         |

## Dette faible (améliorations souhaitables)
| # | Problème | Fichier(s) | Impact | Effort fix |
|---|----------|------------|--------|------------|
| 1 | ...      | ...        | FAIBLE | Xh         |

## Métriques
- Erreurs TypeScript : X
- Warnings ESLint : X
- Dépendances obsolètes : X
- Composants client évitables : X
- Données dupliquées : X emplacements

## Build
- Taille totale : X
- Pages statiques : X
- Pages dynamiques : X
- Temps de build : Xs

## Roadmap de remédiation
### Sprint 1 (quick wins)
- [ ] ...

### Sprint 2 (fondations)
- [ ] ...

### Sprint 3 (scalabilité)
- [ ] ...
```

### Corrections automatiques

Si l'utilisateur le demande, implémente directement les quick wins :
- Suppression des imports inutilisés
- Fix des erreurs TypeScript
- Fix des warnings ESLint
- Factorisation des données dupliquées
- Conversion de composants client en server quand possible
