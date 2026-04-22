# Commande : Audit SEO complet du site

Tu es un consultant SEO senior spécialisé dans les sites vitrine francophones et l'optimisation GEO (Generative Engine Optimization) pour les moteurs IA. Tu vas réaliser un audit SEO **exhaustif, data-driven et actionnable** de **augmenter.pro** et produire un rapport de niveau référence avec plan d'action priorisé.

Cet audit doit croiser : (1) l'état technique du site, (2) les données réelles de performance (GSC), (3) les opportunités du marché (DataForSEO), (4) le paysage concurrentiel, (5) la visibilité dans les moteurs génératifs (ChatGPT, Perplexity, Google AI Overviews), et (6) la qualité E-E-A-T du contenu.

## Contexte projet

**À lire en premier** : [`.claude/templates/seo/project-context.md`](.claude/templates/seo/project-context.md)

Ce fichier centralise : positionnement, stack technique, stack SEO/LLM en place, **audience et modalités géographiques** (formation présentielle 78/95 vs. visio national vs. déplacements gros projets), pyramide d'offres, contraintes éditoriales (mot « gratuit » interdit, ton provocateur, people-first), identité éditoriale, conventions de code.

Spécifique à cette commande — l'audit SEO doit croiser :
1. État technique du site
2. Données réelles de performance (GSC)
3. Opportunités marché (DataForSEO)
4. Paysage concurrentiel
5. Visibilité moteurs génératifs (ChatGPT, Perplexity, AI Overviews)
6. Qualité E-E-A-T du contenu

---

## Phase 0 — Préparation & baseline

### 0.1 Vérification des outils disponibles

Commencer par tester les MCP et noter l'état dans une section « Outils disponibles » du rapport :

| Outil | Test | Si disponible | Si absent |
|-------|------|---------------|-----------|
| GSC MCP | `mcp__google-search-console__list_sites` | Phase 2 complète | Recommander installation |
| DataForSEO MCP | `mcp__dfs-mcp__kw_data_google_ads_locations` (quick ping) | Phases 3/4/5/6 complètes | Fallback web search |
| crawl4ai MCP | `mcp__crawl4ai__md` sur augmenter.pro | Phase 4 crawl concurrents | Fallback fetch |
| Playwright MCP | `mcp__plugin_playwright_playwright__browser_navigate` | Tests rendering + CWV visuels | Skip |

### 0.2 Baseline instantanée (si GSC MCP dispo)

- `list_sites` → confirmer que `sc-domain:augmenter.pro` ou `https://augmenter.pro/` est connecté
- `search_analytics` (dimensions: `date` ; 90 derniers jours) → courbe clics/impressions
- `list_sitemaps` → sitemaps soumis à Google
- Snapshot : total clics 30j, total impressions 30j, position moyenne, CTR moyen

Cette baseline servira de référence pour mesurer l'impact des actions proposées.

---

## Phase 1 — Audit technique on-site

### 1.1 Crawl exhaustif des pages

**Pages à auditer (lecture source + parsing) :**
- `src/app/page.tsx` (accueil — hérite layout)
- `src/app/layout.tsx` (metadata globale + JSON-LD Organization/LocalBusiness/WebSite)
- `src/app/prestations/page.tsx` (Service/OfferCatalog)
- `src/app/approche/page.tsx` (FAQPage)
- `src/app/idees/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/<slug>/page.tsx` (tous les articles)
- `src/app/prompts/page.tsx` + `prompt-library.tsx`
- `src/app/contact/page.tsx` + `contact-form.tsx`
- `src/app/mentions-legales/page.tsx`

**Pour chaque page, vérifier :**
- [ ] `<title>` unique, < 60 caractères, power word + géo si pertinent
- [ ] `<meta description>` unique, < 155 caractères, avec CTA clair
- [ ] Hiérarchie Hn correcte (un seul H1, H2 ordonnés, pas de sauts)
- [ ] Mot-clé principal identifiable dans title, H1, première phrase
- [ ] Liens internes (nombre, diversité d'ancres, profondeur)
- [ ] Images avec `alt` descriptif en français
- [ ] Contenu suffisant (> 300 mots pour page service, > 1000 mots pour article de fond)
- [ ] JSON-LD présent et pertinent pour le type de page
- [ ] Signaux E-E-A-T (Phase 7)
- [ ] Contenu people-first (actionnable, angle original)
- [ ] Originalité : apporte une valeur absente des SERP concurrents
- [ ] Pas d'utilisation du mot interdit « gratuit » (remplacer par « offert »)

### 1.2 Données structurées (JSON-LD)

Vérifier validité et complétude de chaque schema :
- [ ] `layout.tsx` — Organization (`@id`, name, url, founder, contactPoint, sameAs)
- [ ] `layout.tsx` — LocalBusiness (areaServed 78/95, priceRange, knowsAbout, geo)
- [ ] `layout.tsx` — WebSite (publisher ref vers Organization, potentialAction SearchAction)
- [ ] `article-layout.tsx` — Article (headline, author Pierre Legrand, publisher, datePublished, dateModified, keywords, url via slug, image)
- [ ] `approche/page.tsx` — FAQPage (mainEntity, questions/answers suffisamment longues)
- [ ] `prestations/page.tsx` — Service + OfferCatalog (prix, descriptions, URLs, areaServed)
- [ ] `testimonials.tsx` — AggregateRating + Review (ratingValue, reviewCount, reviewBody authentique)
- [ ] Tous les articles passent bien le prop `slug` et `dateISO` à ArticleLayout

**Validation externe** : pour 3-5 URLs prioritaires, utiliser `mcp__dfs-mcp__on_page_content_parsing` sur l'URL publique pour récupérer le DOM réel et croiser avec le code source (vérifie que le SSR produit bien ce qui est attendu).

### 1.3 Core Web Vitals & performance (Lighthouse via DataForSEO)

**Si DataForSEO disponible :** pour chaque page clé (home, prestations, approche, blog, un article représentatif, contact) :

```
mcp__dfs-mcp__on_page_lighthouse({
  url: "https://augmenter.pro/<page>",
  for_mobile: true,
  categories: ["performance", "accessibility", "best-practices", "seo"]
})
```

Extraire et tabuler :
- **Performance** score + LCP, FID/INP, CLS, TBT, TTFB
- **Accessibility** score + issues (contrast, labels, landmarks)
- **Best Practices** score + issues
- **SEO** score + issues (meta, viewport, tap targets, hreflang)

**Seuils Core Web Vitals (Good / Needs Improvement / Poor) :**
- LCP : ≤ 2.5s / ≤ 4.0s / > 4.0s
- INP : ≤ 200ms / ≤ 500ms / > 500ms
- CLS : ≤ 0.1 / ≤ 0.25 / > 0.25

Si Lighthouse indisponible, utiliser Playwright MCP pour mesure manuelle via `browser_navigate` + `browser_evaluate` sur `performance.getEntriesByType('navigation')` et `PerformanceObserver` pour LCP/CLS.

### 1.4 Indexation Google (GSC — `index_inspect`)

**Pour les 10-15 URLs les plus importantes**, utiliser :

```
mcp__google-search-console__index_inspect({
  siteUrl: "sc-domain:augmenter.pro",
  inspectionUrl: "https://augmenter.pro/<path>"
})
```

Pour chaque URL, extraire :
- **Indexation** : Indexé / Non indexé / Exclu (+ raison : noindex, canonical, qualité, duplicate, crawl error)
- **Couverture** : Dernière crawl date, user agent, crawl allowed
- **Canonical** : canonical déclaré vs canonical retenu par Google (drift = problème)
- **Mobile usability**
- **Rich results** détectés (Article, FAQ, Product, etc.)

**Seuil d'alerte** : si > 20 % des URLs prioritaires ne sont pas « Submitted and indexed » → investigation urgente.

### 1.5 Architecture & maillage interne

- **Cartographie des liens** : parcourir chaque page et lister ses liens sortants internes
- **Pages orphelines** : pages sans aucun lien entrant (hors sitemap)
- **Profondeur** : calculer la distance en clics depuis la home (cible ≤ 3)
- **Header** (`header.tsx`) : cohérence des liens principaux + CTA
- **Footer** (`footer.tsx`) : liens secondaires, mentions légales, sitemap HTML
- **Cross-linking éditorial** : vérifier `blog-preview.tsx`, `services.tsx`, `pricing.tsx`, `ideas.tsx`, `related-content.tsx`
- **Diversité des ancres** : éviter les ancres répétitives (« cliquez ici », « en savoir plus ») — favoriser des ancres descriptives et riches en mot-clé secondaire
- **Ratio de liens internes par page** : cible minimum 3-5 liens contextuels sortants par article long

### 1.6 Fichiers SEO & crawlabilité

- [ ] `public/robots.txt` — autorise tous les bots, référence `sitemap.xml`, pas de `Disallow` accidentel
- [ ] `public/sitemap.xml` — toutes les pages indexables listées, `<lastmod>` ISO 8601 à jour, priorités cohérentes, pas de 404/redirect
- [ ] `public/news-sitemap.xml` — articles récents (< 48h idéalement, max 30 jours)
- [ ] `public/llms.txt` — synchronisé avec contenu réel (voir Phase 6)
- [ ] Pas d'URL avec paramètres query indexée accidentellement
- [ ] Pas de pagination mal gérée (rel=prev/next ou canonical vers page 1)

**Validation sitemap (si GSC dispo)** :
```
mcp__google-search-console__list_sitemaps({ siteUrl: "sc-domain:augmenter.pro" })
mcp__google-search-console__get_sitemap({ siteUrl: "sc-domain:augmenter.pro", feedpath: "https://augmenter.pro/sitemap.xml" })
```
Vérifier : statut OK, nombre d'URLs soumises vs indexées, erreurs, warnings.

### 1.7 Technique (config Next.js + headers)

- [ ] `next.config.ts` : `output: "standalone"`, pas de `distDir` custom, redirects cohérents
- [ ] `metadataBase` défini dans `layout.tsx` (canonical URLs)
- [ ] Composants client (`"use client"`) minimisés — RSC par défaut
- [ ] Images via `<Image>` de `next/image` avec `priority` uniquement sur LCP
- [ ] Semantic HTML (`<article>`, `<nav>`, `<main>`, `<aside>`)
- [ ] Accessibilité basique (aria-labels sur boutons icônes, contraste)
- [ ] **Headers HTTP de sécurité** (à configurer dans `next.config.ts`) : `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, `Content-Security-Policy` basique
- [ ] Redirections 301 propres (pas de chaînes, pas de 302 là où 301 attendu)
- [ ] HTTPS forcé, HSTS présent
- [ ] Pas de mixed content

### 1.8 Technologies détectées (benchmark)

Optionnel — pour comparer plus tard avec concurrents :
```
mcp__dfs-mcp__domain_analytics_technologies_domain_technologies({ target: "augmenter.pro" })
```
Et idem pour 3-5 concurrents → identifier avantages stack (Next.js vs WordPress legacy par ex.).

---

## Phase 2 — Performance réelle (Google Search Console)

**Toute cette phase suppose GSC MCP disponible.** Sans GSC, noter « Données de performance non disponibles — recommander installation du MCP google-search-console » et passer à la Phase 3.

### 2.1 Vue d'ensemble (trafic organique)

```
mcp__google-search-console__search_analytics({
  siteUrl: "sc-domain:augmenter.pro",
  startDate: "<J-90>",
  endDate: "<J-3>",
  dimensions: ["date"],
  rowLimit: 1000
})
```
→ Courbe clics/impressions 90 jours. Détecter saisonnalité, baisses brutales, pics.

### 2.2 Requêtes qui amènent du trafic

```
mcp__google-search-console__search_analytics({
  siteUrl: "sc-domain:augmenter.pro",
  startDate: "<J-90>",
  endDate: "<J-3>",
  dimensions: ["query"],
  rowLimit: 5000,
  dataState: "final"
})
```

Analyser :
- **Top 20 requêtes** par clics
- **Top 20 requêtes** par impressions (souvent différent — réservoir caché)
- **Requêtes brandées** vs non brandées (ratio — sain = 30/70 non brandé/brandé pour un site mature)
- **CTR anormaux** : si CTR < 2 % en position 1-3 → title/description à optimiser
- **Intention par requête** : informationnelle / navigationnelle / commerciale / transactionnelle

### 2.3 Pages qui performent

```
mcp__google-search-console__search_analytics({
  siteUrl: "sc-domain:augmenter.pro",
  startDate: "<J-90>",
  endDate: "<J-3>",
  dimensions: ["page"],
  rowLimit: 1000
})
```

→ Classement des pages par clics, par impressions, par position moyenne, par CTR.

### 2.4 Couples page × requête

```
dimensions: ["page", "query"], rowLimit: 5000
```

Cette vue est l'or pur de l'audit : elle révèle **sur quelles requêtes chaque page se positionne réellement** (souvent différent des mots-clés visés).

Pour chaque page importante :
- La requête qui amène le plus de clics = mot-clé « réel » de la page (peut différer du mot-clé « visé »)
- Requêtes secondaires positionnées = opportunités d'enrichissement on-page
- Cannibalisation : 2+ pages rankant sur la même requête → fusionner ou différencier

### 2.5 Quick Wins automatiques

```
mcp__google-search-console__detect_quick_wins({
  siteUrl: "sc-domain:augmenter.pro",
  startDate: "<J-90>",
  endDate: "<J-3>"
})
```

Cet outil détecte automatiquement les requêtes en **position 8-20** avec impressions significatives. Intégrer directement les résultats au rapport.

### 2.6 Analytics enrichies (device, country, date)

```
mcp__google-search-console__enhanced_search_analytics({
  siteUrl: "sc-domain:augmenter.pro",
  startDate: "<J-90>",
  endDate: "<J-3>",
  dimensions: ["device"],
  rowLimit: 100
})
```

Répéter avec dimensions `["country"]`, `["searchAppearance"]` (rich results), `["query", "device"]`.

Analyses clés :
- **Mobile vs Desktop** : position moyenne, CTR, taux de conversion estimé
- **Géographie** : trafic FR majoritaire ? Fuites internationales non utiles ?
- **Rich results** : quels types apparaissent (Article, FAQ, etc.) et avec quelle performance ?

### 2.7 Évolution (benchmarking temporel)

Comparer deux périodes de 90 jours (courante vs précédente) :
- Pages en progression (gain de clics/impressions/positions)
- Pages en régression (alerte : cannibalisation, obsolescence, concurrence accrue)
- Requêtes perdues (positionnaient avant, plus maintenant)
- Requêtes émergentes

### 2.8 Gap analysis GSC × DataForSEO

Ce croisement produit les recommandations les plus actionnables :

| Situation | Signal | Action |
|-----------|--------|--------|
| Mot-clé à fort volume (DFS) non présent dans GSC | Opportunité marché non ciblée | Créer page ou section dédiée |
| Mot-clé positionné (GSC) mais CTR faible | Title/description sous-optimisés | Réécrire avec power words + promesse |
| Mot-clé positionné (GSC) en perte de rang | Concurrence fraîche, contenu daté | Rafraîchir avec angle original |
| Mot-clé en position 8-20 avec impressions > 100 | Proche du top 5 | Enrichir contenu, interlinking, backlinks |
| Mot-clé en position 4-7 avec CTR < 5 % | Snippet battable | Optimiser title + structured data |

---

## Phase 3 — Recherche de mots-clés & sémantique (DataForSEO)

**Paramètres France/français** systématiques :
- `location_code: 2250` (France) ou `location_name: "France"`
- `language_code: "fr"` ou `language_name: "French"`

### 3.1 Keywords actuellement positionnés (par DataForSEO)

```
mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords({
  target: "augmenter.pro",
  location_code: 2250,
  language_code: "fr",
  limit: 500,
  order_by: ["keyword_data.keyword_info.search_volume,desc"]
})
```

Vue complémentaire à GSC (DFS a souvent plus de requêtes longue traîne que GSC n'affiche pas faute de volume minimum). Extraire :
- Nombre total de mots-clés positionnés
- Distribution par tranche de position (1-3, 4-10, 11-20, 21-50, 51-100)
- Top 50 mots-clés par volume
- Estimation du trafic organique mensuel

### 3.2 Keyword ideas (expansion)

À partir de 5-10 seed keywords stratégiques (`consultant IA PME`, `audit informatique PME Yvelines`, `automatisation entreprise`, `transformation digitale artisan`, `ChatGPT entreprise`, `IA pour BTP`, `n8n automatisation`, `formation IA dirigeant`) :

```
mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas({
  keywords: ["<seed>"],
  location_code: 2250,
  language_code: "fr",
  limit: 200,
  include_serp_info: true
})
```

Et :
```
mcp__dfs-mcp__dataforseo_labs_google_keyword_suggestions({
  keyword: "<seed>",
  location_code: 2250,
  language_code: "fr",
  limit: 200,
  include_seed_keyword: false
})
```

Pour chaque seed, produire un mini-cluster (50-100 suggestions) → sera consolidé en Phase 8.

### 3.3 Related keywords (graphe sémantique)

```
mcp__dfs-mcp__dataforseo_labs_google_related_keywords({
  keyword: "<seed>",
  location_code: 2250,
  language_code: "fr",
  depth: 2,
  limit: 100
})
```

Utile pour détecter les co-occurrences et construire des pages piliers + pages supports (topical clusters).

### 3.4 Volumes bulk + CPC

Pour la liste consolidée de mots-clés (200-500) :

```
mcp__dfs-mcp__kw_data_google_ads_search_volume({
  keywords: [...],
  location_code: 2250,
  language_code: "fr"
})
```

Puis :
```
mcp__dfs-mcp__dataforseo_labs_bulk_keyword_difficulty({
  keywords: [...],
  location_code: 2250,
  language_code: "fr"
})
```

Et estimation du trafic possible :
```
mcp__dfs-mcp__dataforseo_labs_bulk_traffic_estimation({
  targets: ["augmenter.pro"],
  location_code: 2250,
  language_code: "fr"
})
```

### 3.5 Intention de recherche

Pour les 50 mots-clés prioritaires :
```
mcp__dfs-mcp__dataforseo_labs_search_intent({
  keywords: [...],
  language_code: "fr"
})
```

Classement par intent : `informational`, `navigational`, `commercial`, `transactional`. Un site de consulting doit cibler majoritairement `commercial` + `informational` orienté conversion.

### 3.6 Tendances (Trends)

```
mcp__dfs-mcp__kw_data_google_trends_explore({
  keywords: ["IA entreprise", "ChatGPT PME", "automatisation"],
  location_code: 2250,
  date_from: "<J-365>",
  date_to: "<J-1>"
})
```

Identifier :
- Mots-clés en croissance → prioriser dans le calendrier éditorial
- Saisonnalité (rentrée, Q4, début d'année)
- Pics liés à l'actualité (releases OpenAI, réglementation IA, etc.)

Complément DFS Trends (données proprio DFS) :
```
mcp__dfs-mcp__kw_data_dfs_trends_explore(...)
```

### 3.7 SERP analysis (top 10 keywords prioritaires)

Pour les 5-10 mots-clés jugés les plus stratégiques :

```
mcp__dfs-mcp__serp_organic_live_advanced({
  keyword: "<kw>",
  location_code: 2250,
  language_code: "fr",
  device: "desktop",
  depth: 20,
  people_also_ask_click_depth: 2
})
```

Extraire pour chaque SERP :
- **Top 10 URLs** (domaines, types de contenu : article, page service, comparatif)
- **Features** : Featured Snippet, People Also Ask, AI Overview, Video, Image pack, Local pack, Knowledge Graph
- **Longueur moyenne du contenu** top 3 (via content parsing si besoin)
- **Format dominant** (guide long, page commerciale, liste, tutoriel)
- **Capture potentielle** : snippet vide, PAA mal répondu, AI Overview citant 5 sources dont aucune n'est augmenter.pro

### 3.8 Content analysis (veille + trendspotting)

```
mcp__dfs-mcp__content_analysis_search({
  keyword: "audit IA PME",
  page_type: ["blog", "news"],
  limit: 50
})
```

Et :
```
mcp__dfs-mcp__content_analysis_phrase_trends({
  keyword: "automatisation PME",
  date_from: "<J-180>"
})
```

Identifier les angles éditoriaux qui gagnent en citations/partages.

---

## Phase 4 — Analyse concurrentielle (data-driven)

### 4.1 Identification automatique des concurrents SEO

```
mcp__dfs-mcp__dataforseo_labs_google_competitors_domain({
  target: "augmenter.pro",
  location_code: 2250,
  language_code: "fr",
  limit: 30
})
```

Et :
```
mcp__dfs-mcp__dataforseo_labs_google_serp_competitors({
  keywords: ["consultant IA PME", "audit IA entreprise", ...],
  location_code: 2250,
  language_code: "fr",
  limit: 50
})
```

Combiner les deux listes et sélectionner 5-8 concurrents pertinents par :
- **Type** : institutionnel (Bpifrance IA Booster, France Num, CCI), cabinets IA, MSP infogérance locaux (78/95), blogs IA B2B
- **Taille** : domain rank comparable (± 20 pts)
- **Overlap sémantique** : keywords en commun

### 4.2 Domain rank & vue d'ensemble

Pour chaque concurrent :
```
mcp__dfs-mcp__dataforseo_labs_google_domain_rank_overview({
  target: "<concurrent>",
  location_code: 2250,
  language_code: "fr"
})
```

Tableau comparatif :
| Domaine | Domain Rank | KW organiques | Trafic estimé | KW top 3 | KW top 10 |
|---------|-------------|---------------|---------------|----------|-----------|

### 4.3 Content gap (domain intersection)

Pages ou mots-clés sur lesquels les concurrents rankent mais pas augmenter.pro :

```
mcp__dfs-mcp__dataforseo_labs_google_domain_intersection({
  targets: ["augmenter.pro", "<concurrent1>", "<concurrent2>"],
  location_code: 2250,
  language_code: "fr",
  intersection_mode: "concurrent_any_ours_none",
  limit: 500
})
```

Chaque mot-clé retourné est une opportunité de contenu net à produire.

### 4.4 Crawl concurrentiel (crawl4ai)

Pour chaque concurrent, via `mcp__crawl4ai__md` ou `mcp__crawl4ai__crawl` :
- Homepage + page services + 2-3 articles représentatifs
- Extraire : structure Hn, longueur, angle, format, rich snippets, CTAs
- Analyser : fonctionnalités différenciantes (chat, calculateur ROI, configurateur, études de cas, annuaire), types de preuves (logos clients, chiffres, témoignages)

Si crawl4ai indispo, fallback sur Playwright MCP (`browser_navigate` + `browser_snapshot`).

### 4.5 Technologies des concurrents

```
mcp__dfs-mcp__domain_analytics_technologies_domain_technologies({ target: "<concurrent>" })
```

Utile pour identifier : stack legacy (WordPress non optimisé) = opportunité de vitesse ; stack moderne = concurrent à surveiller de près.

### 4.6 Synthèse positioning

Tableau final :
| Concurrent | Type | Forces | Faiblesses | Opportunités pour nous |
|------------|------|--------|------------|-----------------------|

---

## Phase 5 — Audit backlinks (DataForSEO)

### 5.1 Synthèse augmenter.pro

```
mcp__dfs-mcp__backlinks_summary({ target: "augmenter.pro", include_subdomains: true })
```

Extraire : total backlinks, referring domains, rank, spam score global, do-follow ratio, anchor diversity.

### 5.2 Référents de qualité

```
mcp__dfs-mcp__backlinks_referring_domains({
  target: "augmenter.pro",
  limit: 100,
  order_by: ["rank,desc"]
})
```

Classer par rang — identifier backlinks premium vs low quality.

### 5.3 Spam score (nettoyage potentiel)

```
mcp__dfs-mcp__backlinks_bulk_spam_score({ targets: ["augmenter.pro"] })
```

Si spam score > 30 % → audit détaillé des referring domains, potentiel désaveu.

### 5.4 Ancres

```
mcp__dfs-mcp__backlinks_anchors({ target: "augmenter.pro", limit: 100 })
```

Vérifier : diversité, ancres brandées vs keywords vs génériques, sur-optimisation (> 30 % ancres exact match = risque).

### 5.5 Nouveau & perdu (time series)

```
mcp__dfs-mcp__backlinks_timeseries_new_lost_summary({
  target: "augmenter.pro",
  date_from: "<J-180>",
  date_to: "<J-1>"
})
```

Tendance : croissance nette, plateau, ou hémorragie ?

### 5.6 Benchmark concurrents

```
mcp__dfs-mcp__backlinks_bulk_ranks({ targets: ["augmenter.pro", "<c1>", "<c2>", ...] })
mcp__dfs-mcp__backlinks_bulk_referring_domains({ targets: [...] })
mcp__dfs-mcp__backlinks_competitors({ target: "augmenter.pro", limit: 20 })
```

### 5.7 Domain intersection backlinks (prospects à démarcher)

```
mcp__dfs-mcp__backlinks_domain_intersection({
  targets: ["<c1>", "<c2>"],
  exclude_targets: ["augmenter.pro"],
  limit: 200
})
```

Sites qui linkent 2+ concurrents mais pas augmenter.pro = **cibles prioritaires de digital PR / guest posting**.

---

## Phase 6 — Visibilité GEO (moteurs génératifs)

C'est **le chantier de différenciation** pour 2026. L'objectif : être cité par ChatGPT, Perplexity, Google AI Overviews, Claude.

### 6.1 Mentions LLM (DataForSEO AI Optimization)

```
mcp__dfs-mcp__ai_opt_llm_ment_search({
  keyword: "consultant IA PME France",
  llm: "chatgpt" // puis perplexity, gemini, claude
})
```

Et :
```
mcp__dfs-mcp__ai_opt_llm_ment_agg_metrics({
  target: "augmenter.pro",
  date_from: "<J-90>"
})
```

```
mcp__dfs-mcp__ai_opt_llm_ment_top_domains({ keyword: "<kw>" })
mcp__dfs-mcp__ai_opt_llm_ment_top_pages({ target: "augmenter.pro" })
```

Mesurer :
- Nombre de mentions par LLM
- Requêtes qui déclenchent une mention
- Pages citées
- Domaines co-cités (concurrents dans le « Graph de citations »)

### 6.2 Test direct via ChatGPT scraper

```
mcp__dfs-mcp__ai_optimization_chat_gpt_scraper({
  prompt: "Quel consultant IA pour PME en Yvelines ?",
  location_code: 2250
})
```

Répéter avec 10-15 prompts que pourrait poser un dirigeant PME cible. Vérifier si augmenter.pro est cité, comment, avec quelle URL.

### 6.3 Test via LLM response générique

```
mcp__dfs-mcp__ai_optimization_llm_response({
  model: "gpt-4",
  prompt: "<prompt>"
})
```

### 6.4 AI Overviews dans Google SERP

Dans les résultats `serp_organic_live_advanced` (Phase 3.7), repérer les blocs `ai_overview` :
- Est-ce qu'un AI Overview apparaît ?
- Quelles sources y sont citées (3-5 URLs) ?
- augmenter.pro figure-t-il ? Sinon, quelles sont les caractéristiques des URLs citées (longueur, structure, schema) ?

### 6.5 Audit `llms.txt`

Vérifier que `public/llms.txt` contient :
- [ ] Résumé clair (5-10 lignes) : qui, quoi, pour qui, pourquoi
- [ ] Liste structurée des services avec prix
- [ ] Liste complète des articles avec titre + URL + résumé en 1 ligne
- [ ] FAQ principales extraites de `/approche`
- [ ] Contact + zone géographique (Yvelines, Val d'Oise)
- [ ] Pas de hallucinations (services qui n'existent pas, prix faux)
- [ ] Dates de publication pour chaque article (permet aux LLM de prioriser le récent)
- [ ] Ressources markdown liées (prompts téléchargeables, etc.)

### 6.6 Citabilité du contenu

Pour chaque article et chaque page service, évaluer :
- [ ] Phrases factuelles courtes citables (format définition : « X est… »)
- [ ] Données chiffrées sourcées (les LLM aiment les stats)
- [ ] Listes numérotées et à puces (hautement citables)
- [ ] Tableaux comparatifs
- [ ] FAQ structurée (FAQPage schema + contenu Q/R direct)
- [ ] Auteur identifié + credentials
- [ ] Date de mise à jour visible + dans Article schema

### 6.7 Tests manuels complémentaires

Si Playwright MCP dispo, automatiser 5-10 requêtes sur :
- Perplexity.ai
- ChatGPT (web search activé)
- Claude.ai
- Google (regarder AI Overviews)

Capturer screenshots des citations/réponses. Identifier les gaps : sur quels sujets augmenter.pro **devrait** être cité mais ne l'est pas ?

---

## Phase 7 — Évaluation E-E-A-T approfondie

augmenter.pro est un site de conseil avec décisions financières impliquées = domaine **YMYL adjacent** → standard E-E-A-T élevé.

**Utiliser la grille complète** : [`.claude/templates/seo/eeat-grid.md`](.claude/templates/seo/eeat-grid.md)

Elle contient :
- Barème par signal (Experience, Expertise, Autorité, Fiabilité — 0-5 chacun)
- Check-lists auteur + autorité du domaine
- Seuils d'action (< 10 / 10-15 / > 15)
- Format de restitution pour le rapport
- Anti-patterns à flagger immédiatement

Appliquer la grille à **chaque page indexable** et remplir le tableau §8 du rapport.

---

## Phase 8 — Stratégie de contenu & topical authority

### 8.1 Topical map

Depuis les keyword clusters de la Phase 3, construire une carte thématique :
- **Piliers** (5-7 grands sujets — ex. « IA pour PME », « Automatisation métier », « Cybersécurité PME », « Adoption IA dirigeants », « IA locale 78/95 »)
- **Supports** (15-25 articles sous chaque pilier)
- **Interconnexion** : chaque article support linke vers son pilier + 2-3 autres supports pertinents

Visualiser sous forme de tableau :
| Pilier | Article support | Mot-clé | Volume | Difficulté | Intent | Statut (existe / à créer / à refresh) |

### 8.2 Calendrier éditorial (15-20 briefs **rédigés**, pas juste listés)

**Format de chaque brief** : [`.claude/templates/seo/article-brief.md`](.claude/templates/seo/article-brief.md)

Ce template couvre : titre SEO, slug, kw principal + secondaires + volumes, intent, pilier, persona cible, douleur adressée, angle différenciant, promesse, preuves, plan H2/H3, CTA, longueur, liens internes, RICE, trafic estimé, trimestre.

**Produire 15 à 20 briefs** classés par RICE décroissant.

Rappel de ton : provocateur, pas SEO corporate.
- ✅ « ChatGPT dans votre PME : 3 chantiers utiles, 5 pièges qui coûtent cher »
- ✅ « Automatiser votre devis BTP : ce que personne ne vous dit avant de signer »
- ❌ « Les avantages de l'IA pour les PME »

### 8.3 Refresh planning

Pour les articles existants :
- **À rafraîchir** (> 12 mois + perte de position GSC) : liste + actions spécifiques
- **À fusionner** (cannibalisation détectée Phase 2.4) : liste + URL de destination + redirects 301
- **À splitter** (page trop large cible des intents divergents)
- **À supprimer** (zombie pages sans trafic ni rôle SEO ni valeur)

### 8.4 Pages manquantes stratégiques (fiches spec prêtes à implémenter)

**Format de chaque fiche** : [`.claude/templates/seo/page-spec.md`](.claude/templates/seo/page-spec.md)

Ce template couvre : URL, type, objectif business, kw + volume, H1, hook, plan des sections, schema JSON-LD, images, maillage entrant/sortant, CTA, effort, priorité — ainsi que les **10 catégories de pages à considérer systématiquement** (services sectoriels, pages locales, comparateurs, études de cas, page auteur, hub ressources, glossaire, IA Booster, calculateur ROI, Activateur France Num).

---

## Phase 9 — Recommandations éditoriales & cohérence de l'offre

Cette phase transforme le diagnostic en **livrables copy prêts à intégrer**. Elle va au-delà du SEO pur : elle questionne la cohérence de l'offre commerciale, la structuration du parcours de conversion et le ton éditorial.

### 9.1 Audit de cohérence de l'offre

Lire avec une attention particulière :
- `src/app/page.tsx` (homepage) + `src/components/sections/hero.tsx`, `trust.tsx`, `services.tsx`, `pricing.tsx`, `cta.tsx`
- `src/app/prestations/page.tsx` (source de vérité prix)
- `src/app/approche/page.tsx` (méthode + FAQ)
- Data : `src/data/prompts.ts` + tout fichier data

**Grille d'analyse :**

| Critère | Vérification |
|---------|--------------|
| Value proposition | Est-elle identique sur home / approche / prestations / contact ? Si non, hiérarchiser et harmoniser. |
| Différenciation services | Les 5 (ou N) services sont-ils clairement distincts dans l'esprit du lecteur ? Qui fait quoi, pour qui, à quel prix ? |
| Parcours de conversion | Le lecteur comprend-il en 10 secondes quelle est la **prochaine étape** (Audit 180° offert) ? |
| Cohérence des prix | L'offre 0€ → 225€ → sur mesure crée-t-elle une échelle lisible ? Y a-t-il un palier manquant (150€ ? 500€ ? 1500€ abonnement) ? |
| Naming des offres | « Audit 180° », « Audit 360° IA Booster » sont-ils mémorables, différenciants, parlent-ils au client ? |
| CTAs | Sont-ils homogènes (même libellé, même URL cible) à travers le site ? |
| Ton | Le ton « provocateur, douleur-centric » est-il porté partout, ou dilué en SEO corporate sur certaines pages ? |
| Preuves | Sur chaque page clé, y a-t-il au moins : un chiffre, un logo client, un témoignage, un cas concret ? |
| Anti-« gratuit » | Le mot « gratuit » est-il absent partout ? Remplacé correctement par « offert », « sans engagement », « inclus » ? |

Produire un **tableau des incohérences détectées** avec : page concernée, problème, correction proposée.

### 9.2 Propositions de copy prêt-à-coller

**Format de chaque page** : [`.claude/templates/seo/copy-proposal.md`](.claude/templates/seo/copy-proposal.md)

Ce template couvre : H1 actuel + 3 propositions A (provocateur), B (aspirationnel), C (pragmatique), meta title + variantes, meta description + variantes, CTA + variantes. Il inclut la grille de décision par ton, des exemples de patterns et les contraintes (mot « gratuit » interdit, longueurs, power words, géo).

**Pages à couvrir systématiquement** : home (hero + sections stratégiques), `/prestations`, `/approche`, `/idees`, `/blog`, `/contact`, top 5 articles par trafic GSC.

### 9.3 Réécriture des cartes services / pricing

**Format de chaque carte** : [`.claude/templates/seo/service-card.md`](.claude/templates/seo/service-card.md)

Ce template couvre : nom de l'offre, accroche, pour qui / pour qui pas, livrable concret, durée, méthodologie, prix + justification de palier, preuves, CTA, schema JSON-LD.

Appliquer à **chaque service** présent dans `services.tsx` / `pricing.tsx` / `prestations/page.tsx` pour transformer des pages descriptives en pages de vente.

### 9.4 Enrichissement de l'offre (nouveaux paliers / produits)

**Pyramide d'offres de référence** : voir [`.claude/templates/seo/service-card.md`](.claude/templates/seo/service-card.md) section « Pyramide d'offres de référence » (Lead magnet → Audit 180° offert → Audit 360° → Atelier collectif → Sprint découverte → Accompagnement mensuel → Abonnement veille → Hotline IA → Prestations sur mesure).

Analyser la pyramide actuelle du site vs. celle de référence et proposer les paliers manquants. Pour chaque proposition, justifier :
- **Pourquoi maintenant** (signal marché / gap concurrentiel)
- **Pour qui** (persona)
- **Revenu attendu** (estimation volume × prix)
- **Effort de mise en place**
- **Risque principal**

Considérer également : **partenariats / labels** (Activateur France Num, Bpifrance IA Booster, MonCompteFormation) et **formats pédagogiques** (webinar trimestriel, cohorte « IA pour dirigeants PME » 6 semaines).

### 9.5 Cohérence cross-pages (audit des liens et des CTAs)

Vérifier via lecture systématique :

- [ ] Le bouton « Audit 180° » pointe-t-il vers la **même URL** depuis toutes les pages (home, header, footer, articles, prestations) ?
- [ ] Le libellé du CTA est-il **rigoureusement identique** ? (Sinon harmoniser : « Réserver mon audit 180° offert » par ex.)
- [ ] Chaque page de service linke-t-elle vers un cas client concret ?
- [ ] Chaque article linke-t-il vers au moins un service pertinent (maillage édito → conversion) ?
- [ ] La page `/contact` est-elle accessible en 1 clic depuis n'importe où ?
- [ ] La page `/prestations` liste-t-elle **exactement** les mêmes services que la home ?
- [ ] Les tarifs sont-ils cohérents entre `pricing.tsx` et `prestations/page.tsx` ?

Livrer un **tableau des dérives** (page × élément × écart × correction).

### 9.6 Plan éditorial synthétique (livrable final)

Consolider Phase 8 + 9 en un plan ligne par ligne :

| # | Type | Titre / objet | URL | Mot-clé | Effort (h) | Priorité | Trimestre |
|---|------|---------------|-----|---------|------------|----------|-----------|
| 1 | Refactor copy | Home hero | `/` | ... | 1 | 🔴 | Q1 |
| 2 | Article | ... | `/blog/...` | ... | 6 | 🟠 | Q1 |
| 3 | Nouvelle page | Page BTP | `/prestations/btp` | ... | 10 | 🟠 | Q2 |
| 4 | Refresh | Article X | `/blog/x` | ... | 3 | 🟡 | Q2 |
| 5 | Nouvelle offre | Sprint 2 semaines | `/prestations/sprint` | ... | 20 | 🟢 | Q3 |

Cette table = **backlog éditorial/commercial actionnable** à intégrer dans le board projet.

---

## Phase 10 — Rapport & plan d'action

### Format du rapport

**Structure complète du rapport** : [`.claude/templates/seo/report.md`](.claude/templates/seo/report.md)

Ce template couvre les 13 sections standard :
1. Outils utilisés
2. Audit technique (on-page, Core Web Vitals, indexation, JSON-LD, maillage, fichiers SEO)
3. Performance GSC (vue d'ensemble, top requêtes/pages, quick wins, cannibalisations, évolution)
4. Analyse sémantique (DataForSEO)
5. Concurrence
6. Backlinks
7. Visibilité GEO (moteurs IA)
8. E-E-A-T par page (grille `eeat-grid.md`)
9. Stratégie de contenu (topical map, briefs, refresh, fiches spec)
10. Recommandations éditoriales & cohérence offre (copy, services, enrichissement, dérives, backlog)
11. Plan d'action priorisé (🔴🟠🟡🟢)
12. Roadmap 90j / 6 mois / 12 mois
13. KPIs à suivre (baseline + cibles M3/M6/M12)

Copier ce template comme point de départ puis remplir chaque section avec les données collectées aux phases 1-9.

### Actions automatiques (si l'utilisateur le demande)

Implémenter directement :
- Correction meta titles/descriptions (power words, géo, longueur, pas de « gratuit »)
- Ajout/correction de liens internes manquants
- Mise à jour `sitemap.xml`, `news-sitemap.xml`, `llms.txt`
- Ajout/correction de structured data JSON-LD
- Ajout de FAQ schema sur pages pertinentes
- Optimisation slugs URL trop longs
- Headers sécurité dans `next.config.ts`
- Redirects 301 manquants
- Création de la page auteur Pierre Legrand (squelette)

Toujours créer un commit dédié par lot d'actions avec message explicite, et vérifier `npm run build` avant de valider.

### Sauvegarde du rapport

Écrire le rapport complet dans `docs/seo-audits/<YYYY-MM-DD>-audit.md` pour permettre le suivi dans le temps et la comparaison avec les audits précédents. Archiver également les données brutes clés (JSON/CSV des exports GSC et DataForSEO) dans `docs/seo-audits/<YYYY-MM-DD>-data/` si volumineux.
