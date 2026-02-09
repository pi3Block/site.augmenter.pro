# Commande : Audit SEO complet du site

Tu es un consultant SEO expert spécialisé dans les sites vitrine français. Tu vas réaliser un audit SEO exhaustif de **augmenter.pro** et proposer un plan d'action priorisé.

## Contexte cible

- **Site** : augmenter.pro — site vitrine d'une agence IA/transformation digitale
- **Audience** : PME françaises (BTP, immobilier, industrie, artisans) — Yvelines (78) et Val d'Oise (95)
- **Objectif** : Acquisition organique de leads qualifiés via le SEO local et thématique

## Phase 1 — Audit technique on-site

### 1.1 Crawl du site

Analyse chaque page du site en lisant les fichiers source :

**Pages à auditer :**
- `src/app/page.tsx` (accueil)
- `src/app/prestations/page.tsx`
- `src/app/approche/page.tsx`
- `src/app/idees/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/mentions-legales/page.tsx`
- Tous les articles `src/app/blog/*/page.tsx`
- `src/app/layout.tsx` (metadata globale)

**Pour chaque page, vérifie :**
- [ ] `<title>` présent et unique (< 60 caractères)
- [ ] `<meta description>` présente et unique (< 155 caractères)
- [ ] Hiérarchie Hn correcte (un seul H1, H2 structurés, pas de sauts)
- [ ] Mot-clé principal identifiable dans le title et H1
- [ ] Liens internes (quantité, pertinence, texte d'ancrage)
- [ ] Images avec attributs alt (si applicable)
- [ ] Contenu suffisant (> 300 mots par page indexable)
- [ ] Balises Open Graph / structured data

### 1.2 Architecture & maillage interne

- Cartographie des liens entre toutes les pages
- Identifie les pages orphelines (pas de lien entrant interne)
- Vérifie la profondeur de navigation (< 3 clics)
- Analyse le header (`src/components/layout/header.tsx`) et footer (`src/components/layout/footer.tsx`)
- Vérifie la cohérence des liens dans `blog-preview.tsx`, `services.tsx`, `pricing.tsx`

### 1.3 Technique

- Vérifie `next.config.ts` pour les redirections, headers SEO, sitemap
- Vérifie la présence de `robots.txt` et `sitemap.xml` (ou leur génération via Next.js)
- Vérifie le fichier `src/app/layout.tsx` pour les metadata par défaut
- Vérifie la configuration des canonical URLs
- Évalue la performance (composants client vs server, lazy loading)
- Vérifie l'accessibilité basique (aria-labels, semantic HTML)

## Phase 2 — Analyse sémantique & mots-clés

### 2.1 Mapping mots-clés actuel

Pour chaque page, identifie :
- Le mot-clé principal actuel (ou son absence)
- Les mots-clés secondaires couverts
- L'intention de recherche ciblée

### 2.2 Recherche d'opportunités

Utilise la recherche web pour :

1. **Mots-clés prioritaires** à cibler pour augmenter.pro :
   - "consultant IA PME", "audit informatique PME", "transformation digitale PME"
   - "automatisation entreprise", "IA pour artisans", "digitalisation BTP"
   - Variantes locales : "consultant numérique Yvelines", "audit informatique Val d'Oise"

2. **Analyse des tendances** :
   - Recherche les volumes de recherche et tendances pour les mots-clés identifiés
   - Identifie les requêtes "People Also Ask" pertinentes
   - Repère les opportunités saisonnières

3. **Gap analysis** : Mots-clés que le site devrait couvrir mais ne couvre pas encore

## Phase 3 — Analyse concurrentielle

### 3.1 Identification des concurrents

Recherche et identifie les 5-8 concurrents principaux :
- Concurrents directs (consultants IA/digital pour PME en IDF)
- Concurrents SEO (sites qui rankent sur les mêmes mots-clés)

### 3.2 Crawl concurrentiel

Pour chaque concurrent identifié, scrape leur site et analyse :
- Structure du site et nombre de pages
- Stratégie de contenu (blog, ressources, études de cas)
- Mots-clés ciblés (via titres, H1, meta descriptions)
- Backlinks visibles (liens sortants/partenaires)
- Points forts et faiblesses par rapport à augmenter.pro
- Fonctionnalités différenciantes (chat, configurateur, calculateur, etc.)

## Phase 4 — Stratégie de contenu

### 4.1 Calendrier éditorial

Propose 10-15 idées d'articles de blog priorisés par :
- Volume de recherche estimé
- Difficulté de positionnement
- Pertinence pour la conversion (lien avec les services augmenter.pro)
- Facilité de création

Pour chaque article, fournir :
- Titre SEO proposé
- Slug URL
- Mot-clé principal
- Intention de recherche
- Score de priorité (1-5)

### 4.2 Pages manquantes

Identifie les pages ou sections à créer :
- Pages de services détaillées par secteur (BTP, immobilier, etc.)
- Pages locales (SEO local Yvelines, Val d'Oise)
- FAQ / glossaire
- Études de cas / témoignages détaillés
- Pages de comparaison ou d'outils

## Phase 5 — Rapport & plan d'action

### Format du rapport

Génère un rapport structuré avec :

```
## Résumé exécutif
Score SEO global : X/100
Points critiques : X
Opportunités identifiées : X

## Audit technique
| Page | Title | Meta Desc | Hn | Liens internes | Score |
|------|-------|-----------|----|----------------|-------|
| ...  | ...   | ...       | ...| ...            | /10   |

## Problèmes critiques (à corriger immédiatement)
1. ...

## Améliorations prioritaires (impact fort, effort moyen)
1. ...

## Opportunités de contenu (nouveaux articles)
| Priorité | Titre | Mot-clé | Volume estimé | Difficulté |
|----------|-------|---------|---------------|------------|
| ...      | ...   | ...     | ...           | ...        |

## Analyse concurrentielle
| Concurrent | Forces | Faiblesses | Opportunité pour nous |
|------------|--------|------------|----------------------|
| ...        | ...    | ...        | ...                  |

## Quick wins (actions rapides, gros impact)
1. ...

## Plan d'action à 3 mois
- Mois 1 : ...
- Mois 2 : ...
- Mois 3 : ...
```

### Actions automatiques

Si l'utilisateur le demande, implémente directement les quick wins :
- Correction des meta titles/descriptions
- Ajout de liens internes manquants
- Création d'un `sitemap.xml` via Next.js si absent
- Ajout d'un `robots.txt` si absent
- Ajout de structured data (JSON-LD) pour l'organisation
