# Commande : Audit documentation

Tu es un expert en documentation technique. Tu vas auditer et améliorer la documentation du projet **augmenter.pro** pour garantir la maintenabilité et l'onboarding facile.

## Phase 1 — Inventaire de la documentation existante

Lis et analyse tous les fichiers de documentation :

1. **CLAUDE.md** — Instructions pour Claude Code
2. **README.md** (s'il existe)
3. **package.json** — Scripts, description, metadata
4. **next.config.ts** — Commentaires et configuration documentée
5. **components.json** — Configuration shadcn/ui
6. **tsconfig.json** — Configuration TypeScript
7. `.claude/` — Commandes et configuration

## Phase 2 — Audit du code source

### 2.1 Composants

Pour chaque composant dans `src/components/`, vérifie :
- [ ] Props documentées (interface TypeScript avec descriptions si complexe)
- [ ] Commentaires sur la logique métier non évidente
- [ ] Nommage clair et auto-documenté des variables/fonctions

**Fichiers à analyser :**
- `src/components/sections/*.tsx` (9 sections)
- `src/components/layout/*.tsx` (header, footer, article-layout)
- `src/components/ui/*.tsx` (composants shadcn)

### 2.2 Pages & routes

Pour chaque route dans `src/app/`, vérifie :
- [ ] Metadata exportée et complète
- [ ] Structure claire du composant page
- [ ] Données inline bien organisées (tableaux, objets)

### 2.3 API Routes

Pour chaque route dans `src/app/api/`, vérifie :
- [ ] Méthodes HTTP documentées
- [ ] Format de requête/réponse documenté
- [ ] Codes d'erreur et cas limites documentés

### 2.4 Utilitaires

- `src/lib/utils.ts` — Fonctions utilitaires documentées

## Phase 3 — Évaluation CLAUDE.md

Le fichier `CLAUDE.md` est critique pour ce projet (il guide Claude Code). Vérifie :

- [ ] Commandes de build/dev/lint à jour et correctes
- [ ] Stack technique exacte et versions correctes
- [ ] Architecture des dossiers complète et à jour
- [ ] Contraintes de développement claires
- [ ] Patterns de code documentés (composants client vs server, imports, etc.)
- [ ] Liste des routes à jour
- [ ] Convention de nommage documentée

Compare le CLAUDE.md avec l'état réel du projet et identifie les écarts.

## Phase 4 — Documentation manquante

Identifie ce qui devrait être documenté mais ne l'est pas :

### Documentation projet
- [ ] Guide de contribution / workflow de développement
- [ ] Procédure de déploiement (Hostinger via GitHub)
- [ ] Variables d'environnement requises
- [ ] Guide d'ajout d'un article de blog
- [ ] Guide d'ajout d'un nouveau service/prestation

### Documentation technique
- [ ] Architecture des composants (graphe de dépendances)
- [ ] Flux de données (comment les données circulent dans l'app)
- [ ] Conventions CSS/Tailwind (palette, classes custom, breakpoints)
- [ ] Intégrations externes (email, analytics, etc.)

### Documentation métier
- [ ] Personas cibles et leur parcours sur le site
- [ ] Objectifs de conversion par page
- [ ] Processus éditorial pour le blog

## Phase 5 — Rapport

Génère un rapport structuré :

```
## Score documentation : X/100

## Résumé
- Fichiers documentés : X/Y
- Composants avec props typées : X/Y
- Pages avec metadata complète : X/Y
- CLAUDE.md : X écarts identifiés

## CLAUDE.md — Écarts détectés
| Section | État actuel | État réel | Action |
|---------|-------------|-----------|--------|
| ...     | ...         | ...       | ...    |

## Documentation manquante (par priorité)
| Priorité | Document | Impact | Effort |
|----------|----------|--------|--------|
| HAUTE    | ...      | ...    | ...    |
| MOYENNE  | ...      | ...    | ...    |
| FAIBLE   | ...      | ...    | ...    |

## Code sous-documenté
| Fichier | Problème | Suggestion |
|---------|----------|------------|
| ...     | ...      | ...        |

## Plan d'action
1. [IMMÉDIAT] Corriger CLAUDE.md...
2. [COURT TERME] ...
3. [MOYEN TERME] ...
```

### Corrections automatiques

Si l'utilisateur le demande, implémente directement :
- Mise à jour du CLAUDE.md avec les écarts corrigés
- Ajout des metadata manquantes sur les pages
- Ajout des types/interfaces manquants sur les composants
- Mise à jour des commandes .claude si nécessaire
