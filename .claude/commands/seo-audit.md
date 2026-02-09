# Commande : Audit SEO complet du site

Tu es un consultant SEO expert spécialisé dans les sites vitrine français. Tu vas réaliser un audit SEO exhaustif de **augmenter.pro** et proposer un plan d'action priorisé.

## Contexte projet

- **Site** : augmenter.pro — site vitrine Next.js 16, `output: "standalone"`, Node.js sur Hostinger
- **Audience** : PME françaises (BTP, immobilier, industrie, artisans) — Yvelines (78) et Val d'Oise (95)
- **Objectif** : Acquisition organique de leads qualifiés via le SEO local et thématique
- **Conversion** : Audit 180° gratuit (60 min) → Audit 360° IA Booster (225 €) → Prestations sur mesure

### Stack SEO/LLM en place

Le site dispose déjà de :
- **JSON-LD** : Organization, LocalBusiness, WebSite (layout.tsx), Article (article-layout.tsx), FAQPage (approche), Service/OfferCatalog (prestations), AggregateRating/Review (testimonials)
- **llms.txt** : `public/llms.txt` pour les crawlers LLM
- **robots.txt** + **sitemap.xml** statiques dans `public/`
- **Meta titles** optimisés avec power words et géo-ciblage
- **Contact** : split server/client (page.tsx + contact-form.tsx) pour permettre les metadata

## Phase 1 — Audit technique on-site

### 1.1 Crawl du site

Analyse chaque page du site en lisant les fichiers source :

**Pages à auditer :**
- `src/app/page.tsx` (accueil — pas de metadata propre, hérite du layout)
- `src/app/layout.tsx` (metadata globale + JSON-LD Organization/LocalBusiness/WebSite)
- `src/app/prestations/page.tsx` (metadata + JSON-LD Service/OfferCatalog)
- `src/app/approche/page.tsx` (metadata + JSON-LD FAQPage)
- `src/app/idees/page.tsx` (metadata)
- `src/app/blog/page.tsx` (metadata)
- `src/app/contact/page.tsx` (metadata — server component wrapper)
- `src/app/contact/contact-form.tsx` (client component — formulaire)
- `src/app/mentions-legales/page.tsx` (metadata)
- Tous les articles `src/app/blog/*/page.tsx` (metadata + ArticleLayout avec slug)

**Pour chaque page, vérifie :**
- [ ] `<title>` présent et unique (< 60 caractères, inclut power word + géo si pertinent)
- [ ] `<meta description>` présente et unique (< 155 caractères, inclut CTA)
- [ ] Hiérarchie Hn correcte (un seul H1, H2 structurés, pas de sauts)
- [ ] Mot-clé principal identifiable dans le title et H1
- [ ] Liens internes (quantité, pertinence, texte d'ancrage)
- [ ] Images avec attributs alt (si applicable)
- [ ] Contenu suffisant (> 300 mots par page indexable)
- [ ] JSON-LD structured data présent et valide

### 1.2 Données structurées (JSON-LD)

Vérifie la validité et la complétude de chaque schema :
- [ ] `layout.tsx` : Organization (@id, name, url, founder, contactPoint, sameAs)
- [ ] `layout.tsx` : LocalBusiness (areaServed, priceRange, knowsAbout)
- [ ] `layout.tsx` : WebSite (publisher ref vers Organization)
- [ ] `article-layout.tsx` : Article (headline, author, publisher, datePublished, keywords, url via slug)
- [ ] `approche/page.tsx` : FAQPage (mainEntity avec questions/answers)
- [ ] `prestations/page.tsx` : Service + OfferCatalog (prix, descriptions, URLs)
- [ ] `testimonials.tsx` : AggregateRating + Review (ratingValue, reviewCount, reviewBody)
- [ ] Tous les articles passent bien le prop `slug` à ArticleLayout

### 1.3 Architecture & maillage interne

- Cartographie des liens entre toutes les pages
- Identifie les pages orphelines (pas de lien entrant interne)
- Vérifie la profondeur de navigation (< 3 clics)
- Analyse le header (`src/components/layout/header.tsx`) : liens Prestations, Approche, Idées PRO, Blog, Contact + CTA "Audit gratuit"
- Analyse le footer (`src/components/layout/footer.tsx`)
- Vérifie la cohérence des liens dans `blog-preview.tsx`, `services.tsx`, `pricing.tsx`

### 1.4 Fichiers SEO

- [ ] `public/robots.txt` — présent, autorise tous les bots, référence sitemap
- [ ] `public/sitemap.xml` — toutes les pages listées, priorités cohérentes
- [ ] `public/llms.txt` — synchronisé avec le contenu réel du site (articles, services, FAQ)
- [ ] Toutes les URLs du sitemap correspondent à des pages réelles
- [ ] Pas de pages existantes manquantes dans le sitemap

### 1.5 Technique

- Vérifie `next.config.ts` : `output: "standalone"`, pas de distDir custom
- Vérifie la configuration des canonical URLs via `metadataBase` dans layout.tsx
- Évalue la performance (composants client vs server, lazy loading)
- Vérifie l'accessibilité basique (aria-labels, semantic HTML)
- Note : les headers HTTP de sécurité doivent être configurés dans `next.config.ts` (pas encore fait)

## Phase 2 — Analyse sémantique & mots-clés

### 2.1 Mapping mots-clés actuel

Pour chaque page, identifie :
- Le mot-clé principal actuel (extrait du title/H1)
- Les mots-clés secondaires couverts
- L'intention de recherche ciblée

### 2.2 Recherche d'opportunités

Utilise la recherche web pour :

1. **Mots-clés prioritaires** à cibler :
   - "consultant IA PME", "audit informatique PME", "transformation digitale PME"
   - "automatisation entreprise", "IA pour artisans", "digitalisation BTP"
   - Variantes locales : "consultant numérique Yvelines", "audit informatique Val d'Oise", "audit informatique 78"
   - Variantes IA Booster : "IA booster PME", "stratégie IA PME"

2. **Analyse des tendances** :
   - Volumes de recherche et tendances
   - Requêtes "People Also Ask" pertinentes
   - Opportunités saisonnières

3. **Gap analysis** : Mots-clés que le site devrait couvrir mais ne couvre pas encore

## Phase 3 — Analyse concurrentielle

### 3.1 Identification des concurrents

Recherche et identifie les 5-8 concurrents principaux :
- **Institutionnels** : Bpifrance (IA Booster), CCI, France Num — autorité forte, titres froids
- **Cabinets de conseil** : agences transformation digitale PME IDF
- **MSP locaux** : sociétés d'infogérance Yvelines/Val d'Oise — sites souvent vieillissants
- Concurrents SEO (sites qui rankent sur les mêmes mots-clés)

### 3.2 Crawl concurrentiel

Pour chaque concurrent identifié, scrape leur site et analyse :
- Structure du site et nombre de pages
- Stratégie de contenu (blog, ressources, études de cas)
- Mots-clés ciblés (via titres, H1, meta descriptions)
- Données structurées utilisées (rich snippets visibles dans les SERP)
- Points forts et faiblesses par rapport à augmenter.pro
- Fonctionnalités différenciantes (chat, configurateur, calculateur, etc.)

## Phase 4 — Optimisation LLM/GEO (Generative Engine Optimization)

### 4.1 Audit de visibilité IA

Vérifie la citabilité du site par les moteurs IA :
- [ ] `llms.txt` complet et à jour (services, articles, FAQ, contact)
- [ ] Contenu factuel, structuré, avec des données chiffrées
- [ ] Questions/réponses directes (FAQ sur /approche)
- [ ] Expertise et autorité (auteur, credentials, exemples locaux)
- [ ] Données structurées JSON-LD complètes sur toutes les pages

### 4.2 Benchmarks IA

Teste la visibilité actuelle :
- Recherche "consultant IA PME Yvelines" sur Perplexity/ChatGPT
- Recherche les services clés sur Google AI Overviews
- Identifie les lacunes de citabilité

## Phase 5 — Stratégie de contenu

### 5.1 Calendrier éditorial

Propose 10-15 idées d'articles de blog priorisés par :
- Volume de recherche estimé
- Difficulté de positionnement
- Pertinence pour la conversion (lien avec les services augmenter.pro)
- Facilité de création

Pour chaque article, fournir :
- Titre SEO proposé (< 60 chars, power words)
- Slug URL court (max 4-5 mots)
- Mot-clé principal
- Intention de recherche
- Score de priorité (1-5)

### 5.2 Pages manquantes

Identifie les pages ou sections à créer :
- Pages de services détaillées par secteur (BTP, immobilier, etc.)
- Pages locales (SEO local Yvelines, Val d'Oise)
- FAQ étendue / glossaire
- Études de cas / témoignages détaillés
- Pages de comparaison ou d'outils

## Phase 6 — Rapport & plan d'action

### Format du rapport

```
## Résumé exécutif
Score SEO global : X/100
Score LLM/GEO : X/100
Points critiques : X
Opportunités identifiées : X

## Audit technique
| Page | Title (chars) | Meta Desc (chars) | Hn | Liens internes | JSON-LD | Score |
|------|---------------|-------------------|----|----------------|---------|-------|
| ...  | ...           | ...               | ...| ...            | ...     | /10   |

## Données structurées
| Schema | Fichier | Statut | Problème |
|--------|---------|--------|----------|
| ...    | ...     | ...    | ...      |

## Problèmes critiques (à corriger immédiatement)
1. ...

## Améliorations prioritaires (impact fort, effort moyen)
1. ...

## Opportunités de contenu (nouveaux articles)
| Priorité | Titre | Slug | Mot-clé | Volume estimé | Difficulté |
|----------|-------|------|---------|---------------|------------|
| ...      | ...   | ...  | ...     | ...           | ...        |

## Analyse concurrentielle
| Concurrent | Type | Forces | Faiblesses | Opportunité pour nous |
|------------|------|--------|------------|----------------------|
| ...        | ...  | ...    | ...        | ...                  |

## Quick wins (actions rapides, gros impact)
1. ...

## Plan d'action à 3 mois
- Mois 1 : ...
- Mois 2 : ...
- Mois 3 : ...
```

### Actions automatiques

Si l'utilisateur le demande, implémente directement les quick wins :
- Correction des meta titles/descriptions (power words, géo-ciblage, longueur)
- Ajout de liens internes manquants
- Mise à jour de `sitemap.xml` et `llms.txt`
- Ajout/correction de structured data JSON-LD
- Ajout de FAQ schema sur des pages pertinentes
- Optimisation des slugs URL trop longs
