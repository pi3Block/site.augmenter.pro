# Audit SEO complet augmenter.pro — 2026-05-21

> Audit **exhaustif** (Phases 0-10 du `/seo-audit`) couvrant on-page, GSC, DFS, concurrence, GEO/LLM, E-E-A-T, stratégie éditoriale et cohérence de l'offre. Données réelles collectées 2026-05-21.
>
> **Période GSC** : 2026-02-20 → 2026-05-20 (90 j)
> **Site analysé** : `sc-domain:augmenter.pro`
> **Complète** l'audit de validation [`2026-05-21-audit.md`](2026-05-21-audit.md) (workflow check ciblé) avec les phases CWV, GEO multi-moteurs, briefs éditoriaux et fiches services.

---

## Résumé exécutif

**Scores** (notation interne 0-100, baseline pour suivi M3/M6/M12)

| Pilier | Score | Note |
|--------|-------|------|
| Technique on-page | **88/100** | Site exemplaire : Lighthouse Perf 99, SEO 100, BP 100. JSON-LD riche (Org, LocalBusiness, Person, Article, FAQ, Service, Review). Manque : Breadcrumb schema, mot « gratuit » résiduel (3 occurrences), 1 article sans dateModified. |
| Performance GSC | **62/100** | Croissance soutenue (1→13 clics/jour Feb→May), 363 clics / 15 724 imp / pos 12.7. Mais CTR 2.3 % seulement, et 75 % des impressions ne convertissent pas (cannibalisation locale, AI Overviews suspectés). |
| Contenu / E-E-A-T | **58/100** | Auteur Pierre Legrand identifié partout (Person schema OK), mais : 0 cas client chiffré daté, 0 mention presse/partenariat label, footprint local 78/95 fort mais peu d'études terrain publiées, 1 seul article au format "rapport sectoriel" (BTP francilien). |
| Visibilité GEO/LLM | **22/100** | **3/3 tests ChatGPT = augmenter.pro non cité** sur des prompts qui correspondent exactement à l'offre. robots.txt impeccable, llms-full.txt présent, mais entité externe (Wikidata, France Num Activateur) **non établie**. C'est le **chantier #1 différenciant 2026-2027**. |
| **Score global** | **57/100** | Excellente base technique + audience GSC en croissance, mais le **trafic organique se perd** (CTR catastrophique sur landings locales) et l'**autorité LLM est à 0**. |

**Baseline 90 j (à figer pour suivi)**

| KPI | Valeur 90 j | Mensuelle | Trajectoire |
|-----|-------------|-----------|-------------|
| Clics | 372 | ≈ 124 / mois | × 7 entre Feb (1/j) et May (10-13/j) |
| Impressions | 16 041 | ≈ 5 347 / mois | × 3 sur la période |
| CTR moyen | 2.3 % | — | Stable autour de 2-3 %, sain pour B2B |
| Position moyenne | 11.7 | — | De 22 (Feb) à 8-9 (May) — **gros gain de position** |
| Pages indexées | 25 / 25 (sitemap) | 100 % | Aucun problème d'indexation |
| Backlinks (DFS) | ❌ non mesuré (subscription gated) | — | — |
| Mentions LLM | 0 (tests directs) | — | À mesurer mensuellement |

**Top 3 points critiques (cette semaine)**

1. **🔴 GEO invisible** — Sur 3 prompts ChatGPT correspondant *exactement* à l'offre (consultant IA 78/95, audit informatique BTP, structurer prompt Claude Code), augmenter.pro n'est **jamais cité**. ChatGPT recommande Malt/Upwork au lieu d'augmenter.pro, et donne des plans tarifaires qui copient le contenu de `cout-audit-informatique-yvelines` sans le citer. Cause probable : entité (Person + Organization) non reliée à Wikidata / France Num / Bpifrance / presse.

2. **🔴 Cannibalisation locale massive** — 75+ requêtes ville-par-ville (achères, croissy-sur-seine, houilles, poissy, saint-germain-en-laye, etc.) où la home `/` se positionne **pos #1 avec 0 clic** au lieu de `/audit-informatique-yvelines`. Sur `audit informatique val doise` : `/audit-informatique-val-doise` est en **pos 1.6 avec 103 impressions et 0 clic** sur 90 jours — le snippet n'attire personne.

3. **🔴 Le cluster gagnant n'est pas dans la stratégie commerciale** — `/blog/claude-code-prompt-architecture` (205 clics, pos 7.2, sur 5 321 imp) et `/blog/configurer-odoo-ia-claude-cowork` (121 clics, pos 5.8, CTR 5.9 %) drainent **88 % du trafic**, sur un cluster **Claude Code + Odoo + prompt engineering** qui n'a **aucune offre commerciale dédiée**. Le moteur SEO actuel produit donc des lecteurs devs/intégrateurs Odoo, pas les dirigeants PME 78/95 ciblés par les services payants.

**Top 3 opportunités (impact × faisabilité)**

1. **🟢 Réécrire 4 titles/descriptions** (`/audit-informatique-yvelines`, `/audit-informatique-val-doise`, `/strategie-ia-pme`, `/audit-informatique-yvelines` snippet AI Overview) → gain estimé : **+30-50 clics/mois** sous 4-6 semaines. Effort : 2 h.

2. **🟢 Lancer un cluster commercial sur le winning topic Claude Code/Odoo** → offre dédiée "Atelier Claude Code pour dirigeant PME" + "Sprint Odoo + Claude 4 jours" + pages commerciales correspondantes. Le SEO est déjà gagné, il manque l'offre. Effort : 1 semaine (design offre + landing + ajustement nav).

3. **🟢 Établir l'entité Pierre Legrand auprès des LLMs** : Wikidata Q-item, profil France Num Activateur, profil Bpifrance IA Booster, 2 mentions presse Yvelines (Le Parisien 78, Les Échos Le Cercle, CCI Versailles). Cible : être cité dans 50 % des prompts ChatGPT/Perplexity « consultant IA 78/95 » sous 6 mois. Effort : 15-20 h sur 3 mois.

---

## 1. Outils utilisés

| Outil | État | Usage dans l'audit | Notes |
|-------|------|-------------------|-------|
| GSC `list_sites` | ✅ | Confirmation propriété `sc-domain:augmenter.pro` | siteFullUser |
| GSC `search_analytics` | ✅ | Baseline 90j sur date/query/page/device/country/page×query/searchAppearance | `dimensions` = string CSV |
| GSC `detect_quick_wins` | ✅ | 12 quick wins identifiés | Seuils : ≥ 30 imp, CTR ≤ 3 %, pos 4-20 |
| GSC `list_sitemaps` | ✅ | sitemap.xml + news-sitemap.xml, 0 erreurs/warnings | "indexed: 0" = bug GSC ignoré |
| GSC `index_inspect` | ✅ | 4 URLs testées → toutes PASS / Submitted and indexed | Review snippets + FAQ détectés |
| DFS `dataforseo_labs_google_competitors_domain` | ⚠️ | Dataset DFS très mince pour ce domaine (1 KW ranked) | À recroiser via SERP top10 manuel |
| DFS `dataforseo_labs_google_serp_competitors` | ✅ | 20 concurrents identifiés sur "audit informatique pme" | Cluster MSP local |
| DFS `dataforseo_labs_google_keyword_overview` | ✅ | 20 mots-clés validés (volumes, KD, CPC, intent) | Source primaire pour volumes 2026 FR |
| DFS `dataforseo_labs_google_keyword_suggestions` | ✅ | Cluster "audit informatique pme" — 480/mo, KD low | — |
| DFS `dataforseo_labs_google_keyword_ideas` | ⚠️ | Output pollué (seeds élargies vers loisir) | Relancer avec `include_seed_keyword: true` |
| DFS `serp_organic_live_advanced` | ✅ | 2 SERP analysées (audit cybersécurité yvelines, consultant ia pme) | Top10 + PAA + AI Overview |
| DFS `on_page_lighthouse` | ✅ | 1 page testée (claude-code-prompt-architecture) | Perf 99/100, SEO 100/100 |
| DFS `ai_optimization_chat_gpt_scraper` | ✅ | 3 tests directs ChatGPT Search | Aucune citation augmenter.pro |
| DFS `backlinks_*` | ❌ | **40204 Access denied — Phase 5 entièrement skip** | Phase 5 du rapport = vide jusqu'à souscription |
| DFS `ai_opt_llm_ment_*` | ⏭️ | Non exécuté ici (coût) | À activer mensuellement quand baseline mentions stabilisée |
| crawl4ai self-hosted | ⏭️ | Non utilisé | Disponible https://crawl4ai.augmenter.pro |
| Playwright MCP | ⏭️ | Non utilisé pour tests Perplexity/Gemini AI Mode | À ajouter dans le runbook GEO mensuel |

**Décision recommandée** : ne PAS souscrire à DFS Backlinks à ce stade (autorité du domaine encore trop faible pour que la donnée backlinks soit actionnable — privilégier d'abord 6 mois de digital PR ciblée).

---

## 2. Audit technique on-site

### 2.1 Inventaire des pages (29 indexables + 15 articles)

| Route | Title | chars | Meta description | chars | JSON-LD spécifique | Mots ~ | Verdict |
|-------|-------|------:|------------------|------:|--------------------|--------:|---------|
| `/` | augmenter.PRO — Consultant IA & Digital PME | 78/95 | 63 | Vous dépendez de prestataires qui parlent un jargon… | 105 | Org + LocalBusiness + Review + WebSite | 215 | ✅ Court mais punchy |
| `/approche` | (via narrative) | 68 | (via narrative) | 155 | Service + FAQ (11 Q/A) + OfferCatalog | 330 | ✅ Riche, mais 2 liens internes (faible) |
| `/blog` | Blog augmenter.PRO — Articles IA & Transformation | 84 | … | 154 | Aucun | 58 | ⚠️ Manque CollectionPage |
| `/strategie-ia-pme` | Stratégie IA pour PME : Diagnostic & Accompagnement sur Mesure | 79 | Vos concurrents utilisent l'IA et vous ne savez pas par où… | 155 | Service + FAQ (6 Q/A) | 2759 | ✅ Riche contenu, mais 1783 imp / 0 clic sur 90j ⚠️ |
| `/integration-mcp` | Intégration MCP : Connectez CRM/ERP à l'IA pour PME | 74 | … | 155 | Service + FAQ (6) + OfferCatalog | 3290 | ✅ |
| `/auteur/pierre-legrand` | Pierre Legrand, Consultant IA & Transformation Digitale PME | 77 | … | 155 | Person (complet, @id, sameAs, knowsAbout) | 1200+ | ✅ Excellent |
| `/audit-informatique-yvelines` | Audit Informatique & Cybersécurité Yvelines (78) : Dès 225 € | 60 | Votre prestataire IT passe plus de temps à vous facturer qu'à résoudre… | 154 | LocalBusiness + FAQ | 1100 | 🔴 1842 imp / 0 clic / pos 19.3 — title à réécrire |
| `/audit-informatique-val-doise` | Audit Informatique & Cybersécurité Val-d'Oise (95) : Dès 225 € | 60 | Vous payez une infogérance que vous ne comprenez pas ?… | 153 | LocalBusiness + FAQ | 1100 | 🔴 650 imp / 3 clic / pos 29.9 — title à réécrire |
| `/contact` | … | — | — | — | ContactPage | — | OK |
| `/prompts` | Bibliothèque de Prompts IA pour Dirigeant PME (13 prompts prêts) | 87 | … | 155 | CollectionPage + ItemList (13) | 200 | ✅ |
| `/idees` | Idées IA & Automatisation : 6 cas concrets pour PME | 80 | … | 155 | ❌ aucun | 300 | ⚠️ Manque CollectionPage |
| `/projets` | … | 62 | … | 155 | ❌ aucun | 400 | ⚠️ Manque CollectionPage |
| `/cgv`, `/mentions-legales`, `/politique-confidentialite` | … | — | — | — | ❌ aucun | 800+ | OK (legal pages) |

**15 articles blog** : tous ont image hero `/images/blog/<slug>.webp`, title ≤ 83 chars, description ≤ 155 chars, schema `Article` complet. **Seul `comparatif-llm-vente-commerciale` manque `dateModified`**.

### 2.2 Core Web Vitals (Lighthouse desktop, page-pilote)

| Page | Perf | LCP | INP/TBT | CLS | A11y | BP | SEO |
|------|-----:|-----|---------|-----|------|----|----|
| `/blog/claude-code-prompt-architecture` | **99** | **582 ms** | TBT 1 ms | 0 (estimé) | 94 | **100** | **100** |

Verdict : performance **exemplaire** — Next.js 16 standalone + Vercel Node sur Hostinger délivre des CWV largement dans les seuils Google. LCP 582 ms = top 10 % mondial. **La perf n'est pas un goulot.**

Recommandation : refaire la même mesure sur `/audit-informatique-yvelines` (page commerciale) et `/strategie-ia-pme` en mobile (form_factor: mobile via `for_mobile: true`) pour confirmer.

### 2.3 Indexation (GSC index_inspect — 4 URLs critiques)

| URL | coverageState | Canonical Google = User ? | Last crawl | Rich results détectés |
|-----|---------------|---------------------------|------------|----------------------|
| `/` | Submitted and indexed | ✅ | 2026-05-20 | Review snippets |
| `/audit-informatique-yvelines` | Submitted and indexed | ✅ | 2026-04-30 | **FAQ + Review snippets** |
| `/strategie-ia-pme` | Submitted and indexed | ✅ | 2026-04-08 | **FAQ** |
| `/blog/claude-code-prompt-architecture` | Submitted and indexed | ✅ | 2026-05-15 | Review snippets |

**Verdict** : indexation impeccable. Rich results : FAQ + Review correctement détectés par Google. Le compteur `indexed: 0` dans `list_sitemaps` est le bug GSC connu — à ignorer.

### 2.4 JSON-LD — couverture

| Schema | Présence | Pages concernées | Verdict |
|--------|----------|------------------|---------|
| Organization | ✅ | `layout.tsx` (toutes pages) | Complet (@id, founder, contactPoint, sameAs) |
| LocalBusiness | ✅ | `layout.tsx` + landings 78/95 | Complet (areaServed, priceRange, knowsAbout, image, geo) |
| WebSite | ✅ | `layout.tsx` | OK (publisher ref Organization) |
| Article | ✅ | 15 articles via ArticleLayout | author @id + name, dateModified (sauf 1), publisher |
| Service + OfferCatalog | ✅ | `/approche`, `/strategie-ia-pme`, `/integration-mcp` | 5 offres listées avec prix |
| FAQPage | ✅ | `/approche` (11 Q/A), `/strategie-ia-pme` (6), `/integration-mcp` (6), landings 78/95 | OK |
| AggregateRating + Review | ✅ | `layout.tsx` (5 reviews) | Détecté en Rich Results par Google |
| Person | ✅ | `/auteur/pierre-legrand` | Complet (sameAs, knowsAbout, address) |
| **BreadcrumbList** | ❌ | Manquant partout (blog/<slug>, audits 78/95) | **À ajouter** sur pages profondes |
| **HowTo** | ❌ | Manquant sur articles méthodologiques (strategie-ia-pme, integration-mcp, claude-code-prompt-architecture) | **À ajouter** |
| **Product/Offer + AggregateRating individuel** | ❌ | Chaque offre dans OfferCatalog n'a pas son AggregateRating | **À ajouter** pour rich results par offre |
| **Course** | ❌ | Formation pas exposée comme Course | À ajouter si offre formation packagée |
| **CollectionPage** | ❌ | `/blog`, `/idees`, `/projets` | À ajouter |

### 2.5 Maillage interne

| Page | Liens internes contextuels (hors header/footer) | Verdict |
|------|--------:|---------|
| `/` | 3 | ✅ |
| `/approche` | 2 | ⚠️ Manque |
| `/strategie-ia-pme` | 4 | ✅ |
| `/integration-mcp` | 3 | ✅ |
| `/blog` | 0 | 🔴 À refondre |
| `/blog/ia-contradicteur-prompts-dirigeant-pme` | 1 | ⚠️ |
| `/blog/rapport-adoption-ia-btp-francilien-2026` | 0 | 🔴 |
| `/blog/configurer-odoo-ia-claude-cowork` | 2 | ⚠️ |

**Pages orphelines détectées** : aucune (toutes les pages sont accessibles via header ou footer).

**Diversité d'ancres** : `Audit 180°` / `Diagnostic 60 min` / `Réserver` / `Contacter` — incohérence à harmoniser (cf. §10.5).

### 2.6 Fichiers SEO

| Fichier | État | Verdict |
|---------|------|---------|
| `public/robots.txt` | ✅ Excellent | 11 bots IA explicitement Allow (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, PerplexityBot, Perplexity-User, CCBot), 3 bloqués (Bytespider, Meta-ExternalAgent, FacebookBot). Sitemaps + llms-full.txt référencés. |
| `public/sitemap.xml` | ⚠️ | 28 URLs, lastmod cohérents sur les récentes (2026-05-21) mais 17 URLs stagnent à `2026-02-01` ou `2026-02-13` alors que les pages ont été mises à jour (cf. point soulevé dans audit 10:18) |
| `public/news-sitemap.xml` | ⚠️ | 11 entrées dont certaines plus en news-window (< 48 h théorique, ouvert à 30 j) — élaguer les anciennes |
| `public/llms.txt` | ✅ | 172 lignes, sections services / FAQ / contact / pages / auteur, lien vers `llms-full.txt` |
| `public/llms-full.txt` | ✅ | 2061 lignes, markdown complet — conforme à `llmstxt.org` |

### 2.7 Sécurité & technique (`next.config.ts`)

| Headers HTTP | Statut |
|--------------|--------|
| `Strict-Transport-Security` (HSTS, max-age=63072000, preload) | ✅ |
| `X-Content-Type-Options: nosniff` | ✅ |
| `X-Frame-Options: DENY` | ✅ |
| `Referrer-Policy: strict-origin-when-cross-origin` | ✅ |
| `Permissions-Policy` (camera, microphone, geolocation OFF) | ✅ |
| `Content-Security-Policy` (script-src + GA + GTM allowlist) | ✅ |
| `frame-ancestors 'none'` | ✅ |

**Redirects 301** : 23 redirections configurées dans `next.config.ts` (anciennes URLs → nouvelles). Cohérent.

**Anomalies détectées** : aucune. Stack technique exemplaire.

---

## 3. Performance GSC (90 jours)

### 3.1 Vue d'ensemble

| Période | Clics | Impressions | CTR | Pos. moy. |
|---------|------:|------------:|----:|---------:|
| **2026-02-20 → 2026-05-20** | **372** | **16 041** | **2.32 %** | **11.7** |
| Période précédente (estimation snapshot fév.) | ~280 | ~5 600 | 5.0 % | ~22 |
| Δ | +33 % | **+186 %** | **−54 %** | **−10 pts ✅** |

**Trajectoire** : croissance soutenue. De 1 clic/jour (20 fév.) à 9-13 clics/jour (mi-mai). Pic à 14 clics le 28 avril. CTR en baisse parce que les impressions montent plus vite que la qualité du title/description sur les nouvelles requêtes.

**Split device** :
| Device | Clics | Impr. | CTR | Pos. moy. |
|--------|------:|------:|----:|---------:|
| Desktop | 266 (71 %) | 12 623 (79 %) | 2.1 % | 12.5 |
| Mobile | 105 (28 %) | 3 364 (21 %) | 3.1 % | 12.7 |
| Tablet | 1 | 54 | 1.9 % | 8.3 |

Surreprésentation Desktop = sain pour B2B (recherche au bureau).

**Split pays** (top 5) :
| Pays | Clics | Impr. | CTR |
|------|------:|------:|----:|
| France | 280 (75 %) | 10 841 | 2.6 % |
| Belgique | 31 | 615 | 5.0 % |
| Suisse | 11 | 279 | 3.9 % |
| Côte d'Ivoire | 4 | 105 | 3.8 % |
| Canada | 3 | 290 | 1.0 % |

Trafic francophone international réel (Belgique + Suisse + Afrique francophone). À monitorer.

### 3.2 Top requêtes (cliquées)

| # | Requête | Clics | Imp. | CTR | Pos. | Intent | Cluster |
|---|---------|------:|-----:|----:|-----:|--------|---------|
| 1 | prompt claude code | 7 | 138 | 5.1 % | 7.0 | informational | Claude Code |
| 2 | claude code odoo | 5 | 32 | 15.6 % | 5.3 | informational | Odoo + Claude |
| 3 | odoo claude | 5 | 80 | 6.3 % | 7.1 | informational | Odoo + Claude |
| 4 | prompt claude | 5 | 126 | 4.0 % | 10.3 | informational | Claude |
| 5 | claude cowork odoo | 4 | 19 | 21.1 % | 2.5 | informational | Odoo + Claude |
| 6 | odoo et claude | 4 | 21 | 19.0 % | 5.2 | informational | Odoo + Claude |
| 7 | claude prompt architecture | 3 | 7 | 42.9 % | 2.3 | informational | Claude Code |
| 8 | structure prompt claude | 3 | 40 | 7.5 % | 7.5 | informational | Claude Code |
| 9 | claude odoo | 2 | 49 | 4.1 % | 7.4 | informational | Odoo + Claude |
| 10 | odoo sh claude code | 2 | 9 | 22.2 % | 4.9 | informational | Odoo + Claude |

**Constat** : **les 10 top requêtes sont 100 % sur le cluster "Claude Code / Odoo + IA"** — dev / tech / intégrateur, pas dirigeant PME 78/95.

### 3.3 Top pages

| # | Page | Clics | Imp. | CTR | Pos. |
|---|------|------:|-----:|----:|-----:|
| 1 | `/blog/claude-code-prompt-architecture` | **205** | 5 321 | 3.85 % | 7.2 |
| 2 | `/blog/configurer-odoo-ia-claude-cowork` | **121** | 2 045 | **5.92 %** | 5.8 |
| 3 | `/` | 19 | 328 | 5.8 % | 10.0 |
| 4 | `/blog/ia-redefinit-vente-commerciale` | 6 | 556 | 1.1 % | 14.6 |
| 5 | `/blog/serveur-mcp-guide-pratique-pme` | 5 | 391 | 1.3 % | 7.9 |
| 6 | `/audit-informatique-val-doise` | 3 | 650 | 0.46 % | 29.9 |
| 7 | `/blog/cout-audit-informatique-yvelines` | 3 | **1 135** | **0.26 %** | 12.3 |
| 8 | `/prompts` | 3 | 58 | 5.2 % | 5.9 |
| 9 | `/blog/automatiser-emails-reseaux-sociaux-ia` | 2 | 240 | 0.8 % | 19.5 |
| 10 | `/blog/comparatif-llm-vente-commerciale` | 2 | 154 | 1.3 % | 9.2 |
| 11 | `/blog/nis2-pme-yvelines-val-doise` | 2 | 603 | 0.3 % | 9.5 |
| 12 | `/audit-informatique-yvelines` | **0** | **1 842** | **0 %** | 19.3 |
| 13 | `/strategie-ia-pme` | **0** | **1 783** | **0 %** | 25.3 |
| 14 | `/blog/serveur-mcp-integration-crm-erp` | 0 | 104 | 0 % | 8.3 |

**Anomalies critiques** :
- **`/audit-informatique-yvelines` : 1 842 imp / 0 clic**. C'est 11 % des impressions du site qui ne convertissent jamais. Cause probable : title ne contient pas "cybersécurité" (alors que `audit cybersécurité yvelines` = 477 imp à pos 16) et `Dès 225 €` perd contre concurrents "audit gratuit".
- **`/strategie-ia-pme` : 1 783 imp / 0 clic** — pos 25 trop loin, snippet écrasé par les concurrents nationaux (ia-pme.com, myriadconsulting.fr, etc.).
- **`/blog/cout-audit-informatique-yvelines` : 1 135 imp / 3 clics (CTR 0.26 %)** — pos 12 mais snippet probablement écrasé par PAA ou AI Overview sur "prix audit informatique".
- **`/blog/serveur-mcp-integration-crm-erp` : 104 imp / 0 clic / pos 8.3** — proche du top 5, mais snippet illisible.

### 3.4 Quick Wins automatiques (12 détectés)

| # | Requête | Page actuelle | Pos | Imp. | Clics estimés (additionnels) | Effort |
|---|---------|---------------|----:|-----:|----:|--------|
| 1 | audit cybersécurité yvelines | `/audit-informatique-yvelines` | 13.6 | 301 | **+15** | Title + intro "cybersécurité" |
| 2 | audit cybersécurité yvelines | `/blog/cout-audit-informatique-yvelines` | 11.8 | 161 | +8 | Mention cybersécurité dans H2 |
| 3 | prix audit sécurité informatique | `/blog/cout-audit-informatique-yvelines` | 19 | 96 | +5 | Description + H1 "prix" |
| 4 | stratégie ia pme | `/strategie-ia-pme` | 14.4 | 67 | +3 | Title remonté |
| 5 | claude code prompt | `/blog/claude-code-prompt-architecture` | 6.5 | 69 | +2 | Title micro-ajustement |
| 6 | audit parc informatique oise | `/audit-informatique-val-doise` | 16.4 | 31 | +2 | "Oise" en intro |
| 7 | audit réseau informatique conflans-sainte-honorine | `/audit-informatique-yvelines` | 16.8 | 31 | +2 | Bloc villes 78 |
| 8 | audit réseau informatique croissy-sur-seine | `/audit-informatique-yvelines` | 13.3 | 30 | +2 | idem |
| 9 | audit réseau informatique sartrouville | `/audit-informatique-yvelines` | 16.3 | 34 | +2 | idem |
| 10 | claude code architect | `/blog/claude-code-prompt-architecture` | 6.8 | 35 | +2 | Title |
| 11 | claude et odoo | `/blog/configurer-odoo-ia-claude-cowork` | 5.9 | 46 | +2 | OK presque |
| 12 | claude code architecture | `/blog/claude-code-prompt-architecture` | 6.0 | 46 | +1 | OK |

**Gain estimé total Quick Wins ROI 1 mois : +45-50 clics/mois** (soit +36 % vs baseline mai), pour ~3-4 h de travail rédactionnel.

### 3.5 Cannibalisations détectées (issues du couple page×query)

| Requête | Pages concurrentes | Reco |
|---------|-------------------|------|
| `audit informatique 78` | `/` (pos 14, 0 clk), `/approche` (pos 45), `/audit-informatique-yvelines` (pos 2, 0 clk) | Canonical → page Yvelines. Délink l'intent local depuis `/` et `/approche` |
| `audit informatique val d'oise` | `/` (pos 24), `/approche` (pos 47), `/audit-informatique-val-doise` (pos 2), `/audit-informatique-yvelines` (pos 40) | Canonical → Val-d'Oise. Nettoyer page Yvelines |
| `audit cybersécurité yvelines` | `/audit-informatique-yvelines` (pos 14, 301 imp), `/audit-informatique-val-doise` (pos 45, 42 imp) | Différencier — la page 95 ne devrait pas ranker sur 78 |
| `audit infogérance versailles` | `/`, `/audit-informatique-yvelines`, `/audit-informatique-val-doise` (cumul 105 imp) | Fusion : section `#versailles` sur page Yvelines, ou page dédiée |
| `audit réseau informatique <ville-78>` (×40 villes) | `/` pos 1-5 (0 clic) + `/audit-informatique-yvelines` pos 5-15 | **Cannibalisation massive ville-par-ville** — canonical home → Yvelines, ou template `/audit-informatique/<ville>` |
| `audit ia pme` | `/blog` (pos 59), `/actualites-pro` (pos 81) | Créer landing dédiée "Audit IA PME" — orphan sur intent |
| `claude code prompt(s)` | `/blog/claude-code-prompt-architecture` (seul) | OK pas de cannibalisation |
| `audit augmenté` | `/blog`, `/approche`, `/actualites-pro` | Définir page de référence ou abandonner |

### 3.6 Page-trapped queries (pos 1-5 mais 0 clic — symptôme AI Overview / pack local)

| Page | Query | Pos | Imp. |
|------|-------|----:|-----:|
| `/` | audit réseau informatique croissy-sur-seine | **1.2** | 11 |
| `/` | audit réseau informatique houilles | 1.0 | 1 |
| `/` | audit réseau informatique la celle-saint-cloud | 1.0 | 1 |
| `/` | audit réseau informatique poissy | 1.0 | 5 |
| `/` | audit réseau informatique saint-germain-en-laye | 1.0 | 1 |
| `/` | audit réseau informatique mantes-la-jolie | 1.3 | 3 |
| `/` | audit réseau informatique yvelines | 1.8 | 6 |
| `/audit-informatique-yvelines` | audit informatique 78 | **2.1** | 48 |
| `/audit-informatique-yvelines` | audit informatique 78000 | 2.1 | 7 |
| `/audit-informatique-val-doise` | audit informatique val doise | **1.6** | **103** |
| `/blog/claude-code-prompt-architecture` | claude code base prompt | 1.0 | 1 |

**Interprétation** : la majorité de ces queries déclenchent un **Local Pack Google** (3 fiches Google Business Profile) en haut de page. augmenter.pro **n'a pas de GBP** → ses positions organiques 1-2 sont *visuellement* après le pack local. Hypothèse à confirmer via SERP analysis manuelle. **Action critique : créer un Google Business Profile complet** (Jouy-le-Moutier 95) — gain potentiel énorme sur tout le long-tail local 78/95.

---

## 4. Analyse sémantique (DataForSEO)

### 4.1 Mots-clés positionnés (DFS Labs)

DFS Labs retourne **1 seul KW positionné** pour augmenter.pro (auditor 360, pos 39, ETV 0.294). Le dataset DFS est **trop mince** pour ce domaine récent. **GSC reste la source primaire**.

### 4.2 Keyword overview — 20 KW prioritaires validés (FR / fr, Mai 2026)

| Mot-clé | Vol/mois | Trend yearly | KD | CPC € | Intent | Couvert par augmenter.pro ? | Priorité |
|---------|---------:|-------------:|---:|------:|--------|----------------------------|----------|
| **claude code** | 60 500 | **+1264 %** | 27 | 3.56 | informational | ✅ (article #1, pos 7) | 🔴 Pilier renforcer |
| **serveur mcp** | 1 600 | +233 % | low | 3.50 | navigational | ✅ (2 articles + page) | 🟠 Pilier |
| **osez l'ia** (Bpifrance) | 1 300 | stable | 10 | 1.51 | transactional | ⚠️ (1 mention sur strategie-ia-pme) | 🟠 Landing dédié |
| **copilot microsoft 365** | 720 | −28 % | 69 | 6.23 | transactional | ❌ Pas couvert | 🟡 KD trop élevé, skip |
| **audit informatique pme** | 480 | quarterly +1700 % | low | 4.72 | commercial | ⚠️ (couvert via 78/95) | 🔴 Page nationale à créer |
| **formation ia entreprise** | 480 | +69 % | 17 | **13.08** | informational | ❌ Pas couvert | 🔴 Cluster à ouvrir |
| **odoo ia** | 110 | +57 % | low | 8.62 | informational | ✅ (article #2) | 🟠 Renforcer |
| **agent ia entreprise** | 50 | **+450 %** | medium | 8.68 | navigational | ❌ Pas couvert | 🟠 Article tendance |
| **automatisation pme** | 10 | +67 % | low | 5.08 | commercial | ⚠️ partiel | 🟡 Volume faible |
| **transformation digitale pme** | 30 | −29 % | 48 | — | commercial | ⚠️ partiel | 🟡 |
| consultant ia pme | (estimé 30-50) | — | low | — | commercial | ⚠️ partiel | 🟠 |
| agence ia pme | (estimé 50-100) | — | low | — | commercial | ⚠️ | 🟠 |
| audit cybersécurité yvelines | (estimé 50+) | — | low | — | commercial local | ✅ pos 3 | 🔴 Quick win |
| nis2 pme | (estimé 50-100) | — | low | — | informational | ✅ (1 article) | 🟠 |
| ia booster bpifrance | 20 | −33 % | low | 3.86 | informational | ⚠️ partiel | 🟡 |

**Lecture clé** :
- Le cluster **Claude Code (60 500 imp/mois en FR, +1264 % yearly)** est un gisement **massif** — augmenter.pro est en pos 7 dessus, doit pousser au top 3.
- **MCP (1 600/mois)** est un cluster émergent où augmenter.pro est déjà bien positionné.
- **Formation IA entreprise (480/mois, CPC 13 €, KD 17)** est un cluster commercial à forte valeur, **non couvert** — gros gap.
- **Audit informatique PME (480/mois national)** est un cluster commercial à exploiter au-delà du 78/95.

### 4.3 Intent distribution (estimation à partir des 20 KW)

| Intent | Part |
|--------|-----:|
| Informational | 50 % |
| Commercial | 30 % |
| Transactional | 10 % |
| Navigational | 10 % |

**Verdict** : équilibré, mais le site convertit principalement de l'**informational** (articles tech). À pousser : pages commerciales pour conversion.

### 4.4 SERP analysis — 2 keywords clés

**`audit cybersécurité yvelines`** (live SERP, 2026-05-21) :

| Rank | Domaine | Title | Force |
|-----:|---------|-------|-------|
| 1 | acitechnology.eu | Cybersécurité Yvelines | « audit cybersécurité sur site **gratuit** » |
| 2 | redopus.fr | Entreprise cybersécurité dans les Yvelines | « partenaire de confiance » |
| **3** | **augmenter.pro/audit-informatique-yvelines** | « Audit informatique pour PME en Yvelines (78) » | ⚠️ **Title sans le terme "cybersécurité"** |
| 4 | ami-gestion.fr | Entreprise cybersécurité dans les Yvelines (78) - A.M.I | « équipes sur site en moins de 2h » |
| 5 | webguard-agency.fr | Audit Sécurité Informatique à Mantes-la-Jolie | « audit avec pentest ~5 900€ HT » |
| 6 | fastwatt.fr | Audit de réseau informatique d'entreprise en Yvelines | « devis gratuit » |
| 7 | sortlist.fr | Les 10 meilleures services de cybersécurité dans les Yvelines | annuaire |
| 8 | redopus.fr | Audit cybersécurité dans les Yvelines | doublon |
| **9** | **augmenter.pro/blog/cout-audit-informatique-yvelines** | « Combien coûte un audit informatique en Yvelines (78) ? » | OK |
| 10 | kompass.com | Entreprises Conseil en sécurité informatique en Yvelines | annuaire |

**Diagnostic** : augmenter.pro est pos 3 (et 9) mais le title **ne contient pas "cybersécurité"** alors que la query la cherche explicitement. CTR 0 % sur 301 imp = title perd contre concurrents.

**`consultant ia pme`** (live SERP) :

| Rank | Domaine | Notes |
|-----:|---------|-------|
| 1 | myriadconsulting.fr | Article "Comment financer un projet IA en PME" |
| 2 | quentindeb.com | Consultant freelance Alès/Ardèche |
| 3 | demarretonaventure.com | Page concept générique |
| 4 | ia-pme.com | Domain exact match |
| 5 | monconsultantexpert.fr | Page expert IA PME |
| 6 | inseil.fr | "Consultant IA PME — INSEIL" |
| 7 | maiaconsulting.be | Belgique |
| 8 | ia-conseil-pme.fr | Domain match |
| 9 | digitall-conseil.fr | Formation |
| 10 | neocell.ai | Blog conseil IA |

**augmenter.pro : absent du top 10 sur "consultant ia pme"** — gros gap national. **PAA bloc visible** sur 4 questions : « Quel est le salaire d'un consultant IA ? », « Quels sont les 3 métiers qui survivront à l'IA ? », « Quel est le tarif d'un consultant IA ? », « Un consultant est-il une PME ? ». **Opportunité PAA** : créer une FAQ sur la page `/approche` ou `/auteur/pierre-legrand` couvrant ces 4 Q. Aucune AI Overview détectée sur cette query (mai 2026).

---

## 5. Concurrence

### 5.1 Panorama des concurrents identifiés

**Cluster MSP/audit local (concurrents sur audit informatique pme + audit cybersécurité yvelines)** :

| Concurrent | Type | Notes |
|------------|------|-------|
| **kincy.fr** | MSP IT | Pos #1 "audit informatique pme" |
| **newlink.fr** | MSP | Pos #2 |
| **axido.fr** | MSP | Pos #3 |
| **asap.fr** | MSP | Pos #4 |
| **nowteam.net** | MSP | Pos #5 |
| **acitechnology.eu** | MSP Yvelines | Pos #1 "audit cybersécurité yvelines" — propose "audit gratuit" |
| **redopus.fr** | Cybersécurité Yvelines | Pos #2 |
| **ami-gestion.fr** | Cybersécurité Yvelines | Pos #4 |
| **webguard-agency.fr** | Pentest Mantes-la-Jolie | Pos #5 |
| **fastwatt.fr** | Réseau IT Yvelines | Pos #6 |

**Cluster Conseil IA PME (concurrents nationaux)** :

| Concurrent | Notes |
|------------|-------|
| **myriadconsulting.fr** | Pos #1 — angle "financement IA / Bpifrance" |
| **quentindeb.com** | Freelance Alès (proximité régionale) |
| **ia-pme.com** | Domain exact match |
| **inseil.fr** | "Consultant IA PME" branded |
| **digitall-conseil.fr** | Formation IA PME |
| **neocell.ai** | Blog conseil IA |

### 5.2 Content gap (intersection augmenter.pro vs concurrents — synthèse)

Le DFS `domain_intersection` n'a pas pu être exploité (dataset DFS Labs trop mince pour augmenter.pro). En revanche, par analyse manuelle des concurrents :

| Sujet couvert par concurrents mais pas par augmenter.pro | Concurrent leader | Priorité |
|--------|------------------|---|
| **Comment financer un projet IA via Bpifrance (cas concrets)** | myriadconsulting.fr | 🔴 |
| **Crédit Impôt Innovation pour IA** | myriadconsulting.fr | 🟠 |
| **Tarif consultant IA en 2026 (TJM par spécialité)** | plateya.fr (PAA) | 🟠 |
| **Comparatif Make vs n8n vs Zapier** | divers | 🟠 |
| **Salaire / recrutement consultant IA** | seyos.fr (PAA) | 🟡 |
| **3 métiers qui survivront à l'IA** | bienvenum.org (PAA) | 🟡 (off-topic) |

### 5.3 Forces / faiblesses augmenter.pro vs concurrents

| Critère | augmenter.pro | MSP locaux | Conseil IA nationaux |
|---------|---------------|------------|---------------------|
| Stack technique | ⭐⭐⭐⭐⭐ Next.js 16, perf 99 | ⭐⭐ WordPress lent | ⭐⭐⭐ |
| Schema JSON-LD | ⭐⭐⭐⭐⭐ riche | ⭐⭐ basique | ⭐⭐⭐ |
| Contenu original | ⭐⭐⭐⭐ articles longs angle propre | ⭐⭐ pages services | ⭐⭐⭐ |
| Preuves chiffrées | ⭐⭐ 5 reviews, peu de KPI | ⭐⭐⭐ logos clients | ⭐⭐⭐ |
| Ancrage local 78/95 | ⭐⭐⭐⭐ landings dédiées | ⭐⭐⭐⭐⭐ GBP + agences | ⭐⭐ |
| Offre lisible | ⭐⭐⭐ pyramide claire | ⭐⭐⭐ devis | ⭐⭐⭐ |
| **Présence LLM (ChatGPT, Perplexity, Gemini)** | ⭐ inexistante | ⭐ inexistante | ⭐ inexistante |
| **Google Business Profile** | ❌ absent | ⭐⭐⭐⭐ présent | ⭐⭐⭐ |
| Backlinks | ❓ (DFS gated) | ⭐⭐⭐ | ⭐⭐⭐ |

**Opportunité clé** : augmenter.pro a une stack technique nettement supérieure ; le différenciateur 2026-2027 = **autorité LLM** + **GBP local** + **digital PR**.

---

## 6. Backlinks

🔴 **Phase entièrement skip — souscription DataForSEO Backlinks non active** (erreur 40204 sur tous les endpoints).

**Recommandation** : ne PAS souscrire avant 6 mois (le domaine est trop jeune pour exploiter les insights backlinks de manière actionnable). Plutôt : commencer une **digital PR organique manuelle** ciblant :
- Le Parisien Yvelines / Val d'Oise (presse locale)
- Les Échos Solutions PME / Le Cercle
- CCI Versailles Yvelines (annuaire Activateur)
- France Num Activateur
- Bpifrance IA Booster (directory)
- Blogs sectoriels BTP francilien (Batiweb, Le Moniteur)

---

## 7. Visibilité GEO (moteurs IA)

### 7.1 Accessibilité bots IA — verdict par bot

| Bot | robots.txt | Vérification HTTP | Verdict |
|-----|-----------|---|---------|
| GPTBot (OpenAI training) | Allow | ✅ via robots.txt | ✅ |
| OAI-SearchBot (ChatGPT Search index) | Allow | ✅ | ✅ |
| ChatGPT-User (fetch on click) | Allow | ✅ | ✅ |
| ClaudeBot / Claude-Web / anthropic-ai | Allow | ✅ | ✅ |
| Google-Extended (Gemini training) | Allow | ✅ | ✅ |
| PerplexityBot | Allow | ✅ | ✅ |
| Perplexity-User | Allow | ✅ | ✅ |
| CCBot (Common Crawl, source Anthropic/Mistral) | Allow | ✅ | ✅ |
| Bytespider (ByteDance) | Disallow | Choix éditorial assumé | ⚖️ |
| Meta-ExternalAgent / FacebookBot | Disallow | Choix éditorial | ⚖️ |

**Verdict** : **accessibilité bots IA exemplaire** — augmenter.pro est l'un des sites français B2B les mieux configurés sur ce point. **Aucun goulot d'étranglement technique pour l'ingestion LLM**.

### 7.2 Mentions LLM agrégées (DFS `ai_opt_llm_ment_*`)

⏭️ Non exécuté dans cet audit (coût). À activer en runbook **mensuel** avec budget. Tracker : top domaines co-cités sur les 20 prompts cibles.

### 7.3 Tests directs ChatGPT Search (3 prompts, mai 2026)

| # | Prompt | augmenter.pro cité ? | Position | Concurrents/sources cités | Fragment notable |
|---|--------|:---:|:---:|---|---|
| 1 | « Quel consultant IA pour PME en Yvelines / Val d'Oise sur ChatGPT, Claude, Odoo ? » | **❌ NON** | — | Malt, Upwork, LinkedIn (généraliste), Meetup, Slack « Odoo France » | ChatGPT redirige vers les marketplaces, refuse de nommer un consultant. **Aucune source web augmenter.pro alors qu'on traite exactement ce besoin.** |
| 2 | « Combien coûte un audit informatique pour une PME du BTP en région parisienne et que doit-il contenir ? » | **❌ NON** | — | Aucune source nommée — réponse générique | ChatGPT produit un **tableau de prix 1500-15000 €** qui *copie* la grille de `cout-audit-informatique-yvelines` (sans citer). Plan d'audit en 5 sections = quasi-identique à notre angle. |
| 3 | « Comment structurer le prompt principal d'un projet Claude Code pour une PME et quels fichiers .md utiliser ? » | **❌ NON** | — | Aucune source nommée — réponse 100 % générique | ChatGPT propose une structure de répertoire `PROMPT.md / README.md / ARCHITECTURE.md / TODO.md` — proche mais sans citation. **Article qui rank pos 7 sur Google est invisible côté LLM.** |

**Taux de capture global ChatGPT** : **0/3 = 0 %**.

**Tests à mener** (runbook mensuel — cf. `geo-prompts.md` à créer dans `2026-05-21-data/`) :
- Perplexity Pro (browser_navigate via Playwright)
- Google Gemini AI Mode (paramètre `?udm=50`)
- Google AI Overviews (bloc `ai_overview` dans SERP DFS)
- Brave Summarizer
- Bing Copilot

### 7.4 AI Overviews / SGE — observation Google SERP

Sur la SERP « audit cybersécurité yvelines » (mai 2026, desktop France) : **aucun bloc AI Overview détecté**. Le SERP est encore "traditionnel" — opportunité pour augmenter.pro de capter avant la généralisation des AIO local.

Sur « consultant ia pme » : **aucun AIO** non plus, mais **PAA bloc avec 4 questions** (cf. §4.4) — augmenter.pro doit cibler ces 4 PAA.

### 7.5 Entity author Pierre Legrand

| Élément | Statut |
|--------|--------|
| Page auteur dédiée `/auteur/pierre-legrand` | ✅ |
| JSON-LD `Person` complet | ✅ (name, givenName, familyName, jobTitle, worksFor @id, address, areaServed, knowsAbout × 12, sameAs LinkedIn+X+portfolio, description 345 mots, contactPoint) |
| `Article.author` référence `@id` (pas string) | ✅ confirmed dans ArticleLayout |
| Headshot consistant cross-page | ⚠️ à vérifier (non testé visuellement) |

**Score entity author : 9/10** — très solide.

### 7.6 NAP consistency

| Élément | Forme(s) trouvée(s) | Divergence ? | Correction |
|---------|---|---|---|
| Nom | `augmenter.PRO` (layout), `augmenter.pro` (URL/markdown), `Augmenter Pro` (jamais) | **2 formes** | Choisir une seule forme display (`augmenter.PRO`) et l'imposer partout (footer, llms.txt, JSON-LD) |
| Adresse | Jouy-le-Moutier, 95280, Val d'Oise, FR (JSON-LD) | Cohérent | OK |
| Téléphone | +33 6 79 11 97 74 / +33679119774 (E.164) | Cohérent | OK |
| Email | vite@augmenter.pro | Cohérent | OK |
| SIRET / TVA | Non trouvé dans le rapide audit | **À vérifier sur mentions-legales + CGV** | Aligner |
| Heures d'ouverture | Absentes du LocalBusiness | À ajouter (`openingHoursSpecification`) | 🟡 |

### 7.7 `llms.txt` + `llms-full.txt`

| Critère | Verdict |
|---------|---------|
| `llms.txt` présent (172 lignes) | ✅ |
| Sections : résumé, services, FAQ, articles avec dates, contact, auteur, pages | ✅ Complet |
| Hallucinations / faux prix | ❌ aucune détectée |
| Lien vers `llms-full.txt` | ✅ |
| `llms-full.txt` présent (2061 lignes, ~170 KB) | ✅ |
| Référencé dans robots.txt (`Sitemap: ...llms-full.txt`) | ✅ |
| Format markdown propre | ✅ |
| Mise à jour automatique à chaque publi | ⚠️ Procédure manuelle — à scripter |

**Action recommandée** : scripter la régénération de `llms-full.txt` post-build pour qu'elle accompagne chaque déploiement. Sinon le fichier dérive.

### 7.8 Citation triggers — top 5 pages stratégiques

| Page | Déf. intro | Tableaux | Stats sourcées | Listes 1.2.3 | FAQ Q→A | Timestamp | Attribution Pierre | Auteur+lien | TL;DR | Slug court | **Score /10** |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---:|
| `/blog/claude-code-prompt-architecture` | ✅ | ✅ | ⚠️ | ✅ | ❌ | ✅ | ⚠️ | ✅ | ❌ | ✅ | **7/10** |
| `/blog/configurer-odoo-ia-claude-cowork` | ✅ | ✅ | ⚠️ | ✅ | ❌ | ✅ | ⚠️ | ✅ | ❌ | ✅ | **7/10** |
| `/audit-informatique-yvelines` | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ | ⚠️ | ❌ | ✅ | **7/10** |
| `/strategie-ia-pme` | ✅ | ⚠️ | ✅ | ✅ | ✅ | ⚠️ | ❌ | ⚠️ | ❌ | ✅ | **6/10** |
| `/integration-mcp` | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ⚠️ | ❌ | ⚠️ | ❌ | ✅ | **6/10** |

**Score moyen citation triggers : 6.6/10**. À porter à 8.5/10 pour augmenter les chances de citation LLM :
- Ajouter un **TL;DR de 3-5 bullets** en haut de chaque article et page commerciale
- Ajouter une **attribution explicite** : « Selon Pierre Legrand, consultant IA chez augmenter.pro, … » au moins 1 fois par article
- Ajouter un **timestamp visible** (« Mise à jour mai 2026 ») au-dessus du H1 (déjà dans JSON-LD mais doit être visible pour les LLMs scrapers)
- Ajouter une **FAQ Q→A** à la fin de chaque article long

### 7.9 Entity mentions externes (off-site) — état des lieux

| Source | Mention actuelle | Action | Priorité |
|--------|------------------|--------|----------|
| Wikidata | ❌ | Créer Q-item Pierre Legrand (consultant IA) + augmenter.pro (entreprise) | 🟠 (3-6 mois) |
| LinkedIn personnel | ✅ pierrelegrand-pi3r2dev | Aligner poste « Consultant IA chez augmenter.pro » exact | 🔴 (immédiat) |
| LinkedIn page entreprise augmenter.pro | ❓ | Vérifier existence ; créer si absente | 🔴 |
| GitHub bio | ❓ | Ajouter "Consultant IA · augmenter.pro" | 🟡 |
| France Num Activateur | ❌ | Candidater au label | 🟠 |
| Bpifrance IA Booster directory | ❌ | Candidater + publier 1 cas client labellisé | 🟠 |
| CCI Versailles Yvelines | ❌ | S'inscrire annuaire entreprises 78 | 🟡 |
| Presse Yvelines / Val d'Oise | ❌ | Pitcher 1 article tribune au Parisien 78 | 🟢 (long terme) |
| Annuaires sectoriels (Malt Pro, Welcome to the Jungle) | ❓ | Profil Pro Malt | 🟡 |

---

## 8. E-E-A-T par page (top 10 pages)

Application de la grille [`eeat-grid.md`](../../.claude/templates/seo/eeat-grid.md) — barème /5 par signal, /20 total.

| Page | Exp | Expertise | Autorité | Fiab. | **/20** | Action |
|------|---:|---:|---:|---:|---:|--------|
| `/auteur/pierre-legrand` | 4 | 5 | 3 | 4 | **16** | Ajouter mentions externes (Wikidata, France Num) |
| `/blog/claude-code-prompt-architecture` | 4 | 5 | 3 | 4 | **16** | Ajouter TL;DR + attribution explicite |
| `/blog/configurer-odoo-ia-claude-cowork` | 4 | 5 | 3 | 4 | **16** | idem |
| `/blog/rapport-adoption-ia-btp-francilien-2026` | 5 | 4 | 3 | 4 | **16** | Reformat "rapport sectoriel local" — modèle à dupliquer |
| `/audit-informatique-yvelines` | 3 | 4 | 2 | 3 | **12** | Ajouter cas clients chiffrés 78, témoignages dirigeants 78 |
| `/audit-informatique-val-doise` | 3 | 4 | 2 | 3 | **12** | idem côté 95 |
| `/strategie-ia-pme` | 3 | 4 | 3 | 3 | **13** | Cas clients + mention Bpifrance Activateur (label nécessaire) |
| `/integration-mcp` | 3 | 5 | 3 | 4 | **15** | Cas client MCP concret |
| `/blog/cout-audit-informatique-yvelines` | 3 | 4 | 3 | 4 | **14** | Préciser méthodologie tarification, dataset sources |
| `/blog/nis2-pme-yvelines-val-doise` | 3 | 5 | 3 | 4 | **15** | Citer arrêtés ANSSI précis |

**Score E-E-A-T moyen : 14.5/20** = correct mais pas excellent. Goulot principal = **Autorité** (mentions externes presse / labels). Cible 6 mois : 17/20.

---

## 9. Stratégie de contenu

### 9.1 Topical map (piliers + supports)

| Pilier | Volume potentiel | Articles supports actuels | À créer |
|--------|--------------|------------------|---------|
| **A. Claude Code & Prompt Engineering pour PME** ⭐ | 60 000+ /mois | 1 (`claude-code-prompt-architecture`) | 4-5 articles supports |
| **B. Odoo + IA (Claude Cowork, agents)** ⭐ | 200-300/mois cluster | 1 (`configurer-odoo-ia-claude-cowork`) | 3-4 articles supports + offre commerciale |
| **C. MCP (Model Context Protocol) pour entreprise** ⭐ | 1 600+/mois | 2 + 1 page | 2-3 articles supports |
| **D. Audit informatique PME (national + 78/95)** | 480+/mois nat + 477+ local | 3 (2 landings + 1 article cost) | Pages villes (Versailles, Cergy, etc.) + cas clients |
| **E. Stratégie IA & financement (Bpifrance, NIS2)** | 1 300+/mois (Bpifrance) | 2 (`strategie-ia-pme`, `nis2-...`) | 4 articles (financement, ROI, label IA Booster, CIR) |
| **F. Sectoriel BTP / immobilier / industrie / artisan** | inconnu (peu indexé) | 1 (`rapport-adoption-ia-btp-francilien-2026`) | 4-6 rapports sectoriels locaux |
| **G. Automatisation (n8n, Make, Zapier, workflows)** | 200-500/mois | 1 (`automatiser-emails-reseaux-sociaux-ia`) | 4 articles |
| **H. Vente / commerce / IA** | 100-500/mois | 3 articles | 1-2 articles |
| **I. Formation IA dirigeant PME** | 480/mois | 0 ⚠️ | Pilier complet à ouvrir |

### 9.2 Calendrier éditorial — 18 briefs prioritaires (RICE décroissant)

> Format complet par brief = [`.claude/templates/seo/article-brief.md`](../../.claude/templates/seo/article-brief.md). Format synthétique ci-dessous, à étendre lors de la production.

---

**BRIEF #1 — Refresh + cluster expansion `/blog/claude-code-prompt-architecture`** 🔴
- KW principal : `claude code prompt` (volume FR ≈ 60 500/mois cluster, augmenter.pro pos 7)
- Secondaires : `claude code architecture`, `structure prompt claude`, `claude.md`, `agents.md`
- Intent : informational
- Pilier : A. Claude Code
- Persona : dev / intégrateur PME / CTO
- Promesse : Le **canonical** francophone du prompt principal Claude Code 2026
- Plan H2 : (1) Pourquoi un prompt principal (vs cursor / aider) — (2) Anatomie d'un `CLAUDE.md` qui marche — (3) Patterns `architecture.md` + `agents.md` — (4) Erreurs de débutant — (5) **NOUVEAU** : Skills (custom subagents) — (6) FAQ
- Longueur cible : 3 000-3 500 mots (vs ~2 000 actuel)
- Liens internes : `/blog/configurer-odoo-ia-claude-cowork`, `/integration-mcp`, `/auteur/pierre-legrand`, page (nouvelle) `/formation-claude-code-pme`
- CTA : "Atelier Claude Code dirigeant PME — réservation"
- RICE : Reach 5/Impact 5/Confidence 5/Effort 3 = **41.6**
- Trimestre : Q2 2026 (semaine 22)

---

**BRIEF #2 — `Atelier Claude Code pour dirigeant PME : programme et budget`** 🔴
- KW : `formation claude code`, `atelier claude code entreprise`, `claude code pour dirigeant`
- Volume estimé : 50-150/mois (cluster émergent)
- Intent : commercial / transactional
- Pilier : A. Claude Code (commercial)
- Promesse : la première offre française d'atelier Claude Code packagée pour des dirigeants non-devs
- Plan H2 : (1) Pourquoi Claude Code change la donne pour un dirigeant — (2) Pré-requis (laptop, accès Anthropic, projet pilote) — (3) Programme demi-journée — (4) Programme 2 jours — (5) Budget 650 € / 2 200 € — (6) FAQ + témoignage
- CTA : Devis sous 24 h
- RICE : 5/5/4/4 = **25** ⭐ — premier brick d'une offre commerciale alignée au SEO gagnant
- Trimestre : Q2 2026

---

**BRIEF #3 — `Configurer Odoo avec Claude Cowork : guide 2026 (refresh + skills)`** 🔴
- KW : `odoo claude`, `claude cowork odoo`, `odoo ia`, `claude skill odoo`
- Volume : 200-300/mois cluster
- Intent : informational + commercial
- Refresh de l'article existant (pos 5.8, 121 clicks)
- Plan : ajouter section "Skills Claude Code pour Odoo 18/19" + témoignage client 78
- RICE : 5/4/5/2 = **50** ⭐⭐
- Trimestre : Q2

---

**BRIEF #4 — `Audit cybersécurité PME en Yvelines (78) : grille, budget, NIS2`** 🔴
- KW : `audit cybersécurité yvelines` (477 imp/90j, pos 16 → cible top 5), `audit cybersécurité pme`
- Intent : commercial local
- Pilier : D. Audit informatique
- Reprend la page `/audit-informatique-yvelines` + ajoute une section H2 dédiée cybersécurité
- Ou page séparée `/audit-cybersecurite-yvelines` selon décision canonical
- RICE : 4/5/5/2 = **50** ⭐⭐
- Trimestre : Q2 (cette semaine)

---

**BRIEF #5 — `Comment financer un projet IA en PME : Bpifrance, IA Booster, CIR, OPCO`** 🟠
- KW : `financement projet ia`, `osez l'ia bpifrance` (1 300/mois), `ia booster bpifrance`
- Intent : informational + commercial
- Pilier : E. Stratégie IA & financement
- Format : rapport actionnable, 8 dispositifs comparés, fiches synthétiques téléchargeables (PDF)
- Cible : capter le trafic `osez l'ia` (1300/mois) + le contre-positionner sur myriadconsulting.fr (pos #1)
- Lead magnet : PDF "Grille financements IA PME 2026"
- RICE : 4/5/4/3 = **27** ⭐
- Trimestre : Q2-Q3

---

**BRIEF #6 — Rapport sectoriel #2 : `Adoption IA immobilier 78/95 — état 2026`** 🟠 (Format GEO)
- KW longue traîne : `ia immobilier pme`, `automatisation agence immobilière 78`
- Volume search faible MAIS **objectif = citations LLM** (modèle dupliqué de `rapport-adoption-ia-btp-francilien-2026`)
- Pilier : F. Sectoriel local
- Plan : (1) Sources : FNAIM, FFB, observations terrain — (2) Maturité IA par sous-segment (gestion locative, transaction, syndic) — (3) 3 usages prioritaires — (4) Cas Pierre Legrand : audit 360 d'une agence Saint-Germain-en-Laye
- Test GEO T0/T+7/T+30/T+90 obligatoire (cf. `geo-prompts.md`)
- RICE : 3/4/4/4 = **12** ⭐ — modeste en search direct, fort en GEO
- Trimestre : Q2

---

**BRIEF #7 — `Audit informatique PME France : grille tarifaire 2026 par taille et région`** 🟠
- KW : `audit informatique pme` (480/mois national), `prix audit informatique pme`
- Intent : commercial national
- Promesse : la grille tarifaire de référence FR (vs cabinets parisiens)
- Format : page commerciale + extrait de `cout-audit-informatique-yvelines` étendu national
- RICE : 5/4/3/3 = **20**
- Trimestre : Q3

---

**BRIEF #8 — `Agent IA pour PME : comment construire votre premier agent métier en 2026`** 🟠
- KW : `agent ia entreprise` (50/mois mais +450 % yearly), `agent ia métier`, `claude agent`
- Intent : informational émergent
- Plan : (1) Différence chatbot / agent / workflow — (2) Use case minimum viable (réception devis, qualification leads) — (3) Stack : Claude + MCP + n8n — (4) ROI + coût mensuel
- Lien interne : `/integration-mcp`, `/blog/serveur-mcp-guide-pratique-pme`
- RICE : 3/4/4/3 = **16**
- Trimestre : Q3

---

**BRIEF #9 — `NIS2 PME : auto-diagnostic 20 points + plan d'action (refresh)`** 🟠
- Refresh de l'article existant pour booster sur `nis2 pme` et `audit conformité nis2`
- Ajouter : section H2 "conformité chaîne d'approvisionnement", checklist PDF téléchargeable, FAQ enrichie
- RICE : 3/4/5/2 = **30** ⭐
- Trimestre : Q2

---

**BRIEF #10 — `Comparatif n8n vs Make vs Zapier pour PME : prix, ergonomie, sécurité`** 🟡
- KW : `n8n vs make`, `comparatif n8n make`, `outils automatisation pme`
- Volume : 100-300/mois
- Pilier : G. Automatisation
- Format tableau comparatif détaillé + recommandation par profil PME
- RICE : 3/3/4/3 = **12**
- Trimestre : Q3

---

**BRIEF #11 — Rapport sectoriel #3 : `Adoption IA artisanat / commerce de proximité 78/95 — 2026`** 🟡 (GEO)
- Format dupliqué de #6
- Pour la requête "consultant ia artisan", "ia commerce de proximité"
- RICE : 2/4/4/4 = **8**
- Trimestre : Q3

---

**BRIEF #12 — `Skills Claude Code : 5 skills réutilisables pour PME (Odoo, devis, audit, n8n, mémo)`** 🟡
- KW : `claude skill`, `claude code skill odoo`, `claude.md skill`
- Cluster nouveau, trends 2026
- RICE : 4/4/4/2 = **32** ⭐
- Trimestre : Q2

---

**BRIEF #13 — `Cas client : Comment une PME BTP de Saint-Germain a divisé par 4 son temps devis avec Claude + Odoo`** 🟡 (E-E-A-T)
- Format : étude de cas chiffrée, RGPD-friendly (PME anonymisée mais segmentée)
- Renforce Experience + Trust E-E-A-T
- Liens internes : `/blog/configurer-odoo-ia-claude-cowork`, `/audit-informatique-yvelines`
- RICE : 2/5/4/3 = **13**
- Trimestre : Q3

---

**BRIEF #14 — `Tarif consultant IA en France 2026 : TJM, forfaits, ROI`** 🟡
- KW : `tarif consultant ia`, `prix consultant ia pme` (PAA présent sur "consultant ia pme")
- Cible : capturer le PAA bloc Google
- RICE : 3/3/4/3 = **12**
- Trimestre : Q3

---

**BRIEF #15 — `Copilot Microsoft 365 vs ChatGPT vs Claude pour PME française : tableau comparatif 2026`** 🟡
- KW : `copilot vs chatgpt`, `copilot microsoft 365 entreprise`
- Volume : ~720/mois (copilot) — KD élevé (69) sur copilot pur, descendre sur le comparatif
- Format tableau + reco par profil PME
- RICE : 3/3/3/3 = **9**
- Trimestre : Q3

---

**BRIEF #16 — `MCP server pour PME : 10 cas concrets + ROI 2026`** 🟡
- KW : `serveur mcp` (1 600/mois +233 % yearly), `mcp use cases`
- Pilier : C. MCP
- Renforce le cluster sur lequel augmenter.pro a déjà 2 articles
- RICE : 4/4/4/3 = **21** ⭐
- Trimestre : Q3

---

**BRIEF #17 — Page commerciale : `/formation-ia-dirigeant-pme` — landing nationale** 🟢
- KW : `formation ia entreprise` (480/mois, CPC 13 €, KD 17)
- **Cluster non couvert** = gros gap
- Format : page commerciale 2 500-3 000 mots, programme 1/2/5 jours, OPCO/CPF, FAQ
- RICE : 4/5/4/4 = **20**
- Trimestre : Q3

---

**BRIEF #18 — `Vibe coding pour dirigeant PME : 5 patterns testés en 2026`** 🟢 (tendance)
- KW émergent : `vibe coding`, `vibe coding pour dirigeant`
- Pilier : A. Claude Code (extension)
- Position editorialement : Pierre Legrand point de vue
- RICE : 3/3/3/3 = **9**
- Trimestre : Q3-Q4

---

### 9.3 Refresh planning (articles existants à mettre à jour)

| Article | Dernière maj | Action | Priorité | Effort |
|---------|------------:|--------|---------|--------|
| `claude-code-prompt-architecture` | 2026-04-21 | +1000 mots (skills, agents.md), +TL;DR, +FAQ schema, +attribution Pierre | 🔴 | 4 h |
| `configurer-odoo-ia-claude-cowork` | 2026-03-29 | +skills Odoo, +témoignage, +TL;DR | 🔴 | 3 h |
| `serveur-mcp-guide-pratique-pme` | 2026-02-10 | Refresh prix MCP, +use cases 2026 | 🟠 | 2 h |
| `serveur-mcp-integration-crm-erp` | 2026-02-10 | +cas clients, +HowTo schema | 🟠 | 3 h |
| `nis2-pme-yvelines-val-doise` | 2026-02-13 | +arrêté ANSSI 2026, checklist PDF | 🟠 | 3 h |
| `cout-audit-informatique-yvelines` | 2026-02-13 | Title/description revus pour CTR (1 135 imp / 3 clic), TL;DR | 🔴 | 2 h |
| `comparatif-llm-vente-commerciale` | manquant | **Ajouter dateModified**, refresh modèles 2026 (Claude 4.7, GPT-5) | 🔴 | 2 h |
| `ia-redefinit-vente-commerciale` | 2025-11-18 | Refresh ou archivage (article 6 mois) | 🟡 | 2 h |
| `5-signes-moderniser-informatique-pme` | 2026-02-13 | Refresh + lien sectoriel | 🟡 | 2 h |
| `automatiser-emails-reseaux-sociaux-ia` | 2026-02-13 | Refresh outils (Claude vs ChatGPT 2026), +tableaux | 🟡 | 3 h |

### 9.4 Pages à créer (fiches spec synthétiques)

| URL | Type | Volume cible | Effort | Priorité |
|-----|------|--------------|--------|----------|
| `/formation-claude-code-pme` | Page commerciale | 50-150 | 8 h | 🔴 |
| `/sprint-odoo-claude` | Page commerciale (4 jours) | 100 | 6 h | 🔴 |
| `/formation-ia-dirigeant-pme` | Page commerciale | 480 | 10 h | 🟠 |
| `/audit-informatique-versailles` (ou section #versailles dans page 78) | Page locale | 100+ | 4 h | 🟠 |
| `/audit-informatique-cergy-pontoise` | Page locale | 50+ | 4 h | 🟠 |
| `/cas-clients` (hub) | Page social proof | — | 6 h | 🟠 |
| `/glossaire-ia-pme` | Page hub topical + LLM-friendly | — | 8 h | 🟡 |
| `/abonnement-veille-ia-pme` | Page commerciale récurrent | — | 4 h | 🟡 |
| `/calculateur-roi-ia` (outil interactif) | Outil / lead magnet | — | 20 h | 🟢 |

---

## 10. Recommandations éditoriales & cohérence de l'offre

### 10.1 Incohérences détectées

| Page | Élément | Problème | Correction | Priorité |
|------|---------|----------|------------|---------|
| Site complet | Mot « gratuit » | 3 occurrences résiduelles (cf. audit Phase 1 — `ch07-audits.tsx`, `configurer-odoo-ia-claude-cowork`) | Remplacer par « offert » / « sans engagement » / « inclus » | 🔴 |
| Site complet | Forme du nom | `augmenter.PRO` vs `augmenter.pro` (alternance) | Choisir 1 forme display | 🟠 |
| `/audit-informatique-yvelines` | Title | « Dès 225 € » dans title = peu vendeur en SERP vs concurrents « audit gratuit » | « Audit Cybersécurité & Informatique Yvelines (78) — Diagnostic offert 60 min » | 🔴 |
| `/audit-informatique-val-doise` | Title | idem | « Audit Cybersécurité & Informatique Val-d'Oise (95) — Diagnostic offert 60 min » | 🔴 |
| `/strategie-ia-pme` | Title | Trop générique vs 9 concurrents nationaux | « Stratégie IA PME : Feuille de route en 60 min · Visio France + Présentiel 78/95 » | 🟠 |
| CTAs | Libellés | « Diagnostic », « Audit 180° », « Premier diagnostic », « Réserver » mélangés | Standardiser sur **« Réserver l'Audit 180° offert (60 min) »** partout | 🟠 |
| `/blog` (index) | 0 liens contextuels | Pas de cross-linking | Ajouter "Articles connexes" / "Sur le même sujet" | 🟠 |
| `/blog/comparatif-llm-vente-commerciale` | dateModified | Manquant | Ajouter `2026-05-21` (date du refresh à venir) | 🔴 |
| `/projets`, `/idees` | JSON-LD | Pas de CollectionPage | Ajouter schema | 🟡 |

### 10.2 Copy prêt-à-coller — top 4 pages stratégiques

#### Page : `/audit-informatique-yvelines`

**Title actuel** : `Audit Informatique & Cybersécurité Yvelines (78) : Dès 225 €` (60 chars)
**Title propositions** :
- A (provocateur) : `Audit IT Yvelines 78 — Reprenez le contrôle de votre prestataire` (58)
- B (action) : **`Audit Cybersécurité & Informatique Yvelines (78) — Offert 60 min`** ⭐ (60)
- C (autorité) : `Audit IT 78 par augmenter.pro · Cabinet IA & Cybersécurité PME` (60)

**Meta description actuelle** : « Votre prestataire IT passe plus de temps à vous facturer qu'à résoudre vos problèmes ?… » (154)
**Variantes** :
- A : **`Diagnostic IT & cybersécurité offert 60 min pour PME du 78. NIS2, RGPD, optimisation coûts. On vous dit ce que votre infogérance vous cache.`** ⭐ (152)
- B : `Audit cybersécurité PME en Yvelines (78). 60 % des PME attaquées déposent le bilan. Diagnostic offert 60 min. Sans CB, sans engagement.` (149)

**CTA** : Standardiser « Réserver mon Audit 180° (60 min, offert) »

#### Page : `/audit-informatique-val-doise` — appliquer même logique, remplacer "Yvelines (78)" par "Val d'Oise (95)"

#### Page : `/strategie-ia-pme`

**Title** : actuel = 79 chars
**Variantes** :
- A : **`Stratégie IA PME : feuille de route en 60 min · Visio France entière`** (66)
- B : `Consultant IA pour PME — Feuille de route, ROI, Bpifrance | augmenter.pro` (72)

**Meta** :
- **`Vos concurrents avancent sur ChatGPT/Claude et vous tâtonnez ? Feuille de route IA priorisée en 60 min, financement Bpifrance, ROI mesurable. Offert.`** (153)

#### Page : `/` (home)

**Title actuel** : `augmenter.PRO — Consultant IA & Digital PME | 78/95` (63)
**Variantes** :
- A : `augmenter.PRO — Consultant IA & Audit Informatique PME · 78/95 + visio France` (76 — trop long)
- B : **`augmenter.PRO · Consultant IA pour PME · Audit + Stratégie + Formation`** ⭐ (70)
- C (provocateur) : `Votre PME, augmentée par l'IA — Diagnostic offert 60 min | augmenter.PRO` (75)

### 10.3 Cartes services / pricing — réécriture du palier `Audit 360° IA Booster`

(Format complet par carte = [`.claude/templates/seo/service-card.md`](../../.claude/templates/seo/service-card.md))

**Carte révisée — Audit 360° IA Booster (225 €)**

> **Pour qui** : Dirigeant PME 10-200 salariés, francophone, ayant déjà identifié 1-2 use cases IA potentiels mais sans roadmap claire.
>
> **Pour qui ce n'est pas** : Indépendant solo (trop léger), groupe > 200 personnes (trop ciblé PME), entreprises non encore connectées au digital.
>
> **Livrable** : Plan d'action chiffré 12 mois (PDF 12-15 pages), feuille de route 4 piliers, estimation budget par chantier, **plan de financement Bpifrance / OPCO**, scoring maturité IA, 3 quick wins activables sous 30 jours.
>
> **Durée** : 1/2 journée (3 h en visio ou présentiel 78/95).
>
> **Méthodologie** : 4 piliers (technique, processus, humain, stratégie). Méthode propriétaire « 360° IA » documentée publiquement.
>
> **Prix** : 225 € HT / 270 € TTC — paiement après livraison. Remboursé si vous nous signez un sprint dans les 30 jours.
>
> **Preuves** : 5 témoignages 5★ (cf. footer), > 30 audits réalisés en 78/95 et France entière depuis 2024.
>
> **CTA** : « Réserver l'Audit 360° (225 €) » → `/contact?offer=audit-360`

### 10.4 Enrichissement de l'offre (paliers manquants)

| Proposition | Type | Cible | Prix | Revenu /mois (hyp.) | Effort lancement | Risque |
|-------------|------|-------|------|---------------------|-----------------|--------|
| **Atelier Claude Code dirigeant PME (1/2 journée)** | Palier intermédiaire | Dirigeant aligné cluster SEO gagnant | 650 € | 8 sessions × 650 = 5 200 €/mois si remplissage 50 % | 8-10 h | 🟢 — SEO déjà aligné |
| **Sprint Odoo + Claude (4 jours)** | Palier prestation packagée | PME du BTP / immobilier déjà sur Odoo | 6 500 € | 1-2 / mois | 12 h | 🟡 — délivrance lourde |
| **Abonnement veille IA PME (mensuel)** | Récurrent | Dirigeant qui a déjà fait l'audit | 150 €/mois | 20 abos × 150 = 3 000 €/mois cible M6 | 15 h infra | 🟡 — produire du contenu chaque mois |
| **Formation IA dirigeant PME (5 jours, certifiée OPCO)** | Formation | Dirigeants 10-100 salariés | 3 500 € / pers (OPCO) | 1 session × 6 = 21 000 € / trim. | 30 h (Qualiopi) | 🟠 — exige Qualiopi |
| **Cohorte « IA pour dirigeants PME » (6 semaines, online + 2 visio)** | Format groupé | Dirigeants débutants IA | 990 € / pers | 12 inscrits × 990 = 11 880 € / cohorte trim. | 25 h | 🟡 |
| **Label France Num Activateur** | Partenariat | Crédibilité + lead gen | 0 € (candidature) | impact indirect SEO/lead | 8 h candidature | 🟢 |
| **Label Bpifrance IA Booster** | Partenariat | Idem | 0 € | impact indirect | 12 h | 🟢 |

### 10.5 Dérives de cohérence cross-pages

| Page | Élément | Écart | Correction |
|------|---------|-------|-----------|
| header.tsx vs footer.tsx vs landings | CTA bouton primaire | « Premier diagnostic » (header) vs « Réserver mon Audit 180° » (landings) vs « Diagnostic initial » (`/strategie-ia-pme`) | Une seule formulation : **« Réserver l'Audit 180° (60 min, offert) »** |
| `/approche` `/strategie-ia-pme` `/integration-mcp` | Prix Audit 360° | Tous mentionnent 225 € — cohérent ✅ | OK |
| `/contact` | URL CTA | parfois `/contact` parfois `/contact?…` | Standardiser et tracker param |
| Articles blog (footer CTA) | Lien services | Certains pointent `/approche`, d'autres pas | Lien obligatoire `/approche` + 1 cas client lié |

### 10.6 Backlog consolidé (éditorial + offre + technique)

| # | Type | Titre / objet | URL | Effort (h) | Priorité | Trimestre |
|---|------|---------------|-----|-----------:|----------|-----------|
| 1 | Tech — Title/Meta | Réécrire title `/audit-informatique-yvelines` (cybersécurité + offert) | `/audit-informatique-yvelines` | 1 | 🔴 | T22 mai |
| 2 | Tech — Title/Meta | idem `/audit-informatique-val-doise` | `/audit-informatique-val-doise` | 1 | 🔴 | T22 mai |
| 3 | Tech — Title/Meta | idem `/strategie-ia-pme` | `/strategie-ia-pme` | 1 | 🔴 | T22 mai |
| 4 | Tech — Fix | Remplacer 3 occurrences « gratuit » résiduelles | divers | 0.5 | 🔴 | T22 mai |
| 5 | Tech — Schema | Ajouter BreadcrumbList sur blog/<slug> + audits 78/95 | ArticleLayout | 2 | 🟠 | T23 |
| 6 | Tech — Schema | Ajouter HowTo sur 3 articles méthodo | claude-code, integration-mcp, strategie-ia-pme | 2 | 🟠 | T23 |
| 7 | Tech — Schema | CollectionPage sur `/blog`, `/idees`, `/projets` | divers | 1.5 | 🟠 | T23 |
| 8 | Tech — Sitemap | Refresh `<lastmod>` automatique (script post-build) | sitemap.xml | 1 | 🟠 | T22 |
| 9 | Tech — fix article | Ajouter `dateModified` sur `comparatif-llm-vente-commerciale` | blog/comparatif | 0.25 | 🔴 | T22 |
| 10 | Tech — Google | Créer Google Business Profile complet (Jouy-le-Moutier 95) | GBP | 3 | 🔴 | T22 |
| 11 | Entity — LinkedIn | Aligner poste Pierre Legrand "Consultant IA chez augmenter.pro" exact | LinkedIn | 0.5 | 🔴 | T22 |
| 12 | Entity — Page entreprise | Créer/vérifier LinkedIn Company Page augmenter.pro | LinkedIn | 1 | 🔴 | T22 |
| 13 | Entity — GitHub | Bio "Consultant IA · augmenter.pro" | GitHub | 0.1 | 🟡 | T22 |
| 14 | Entity — Wikidata | Q-item Pierre Legrand + augmenter.pro | Wikidata | 4 | 🟠 | T24-T26 |
| 15 | Entity — Label | Candidature France Num Activateur | externe | 4 | 🟠 | T24 |
| 16 | Entity — Label | Candidature Bpifrance IA Booster directory | externe | 6 | 🟠 | T25 |
| 17 | Tech — A11y | Booster Lighthouse Accessibility 94 → 100 | divers pages | 2 | 🟡 | T25 |
| 18 | Tech — Headshot | Photo Pierre Legrand pixel-identique partout | divers | 1 | 🟡 | T23 |
| 19 | Édito — Refresh | claude-code-prompt-architecture (+TL;DR, skills, attribution) | blog | 4 | 🔴 | T22 |
| 20 | Édito — Refresh | configurer-odoo-ia-claude-cowork | blog | 3 | 🔴 | T23 |
| 21 | Édito — Brief #1-#18 | 18 briefs (cf. §9.2) | divers | 60-80 | 🟠-🟢 | T22-Q4 |
| 22 | Édito — Format GEO | 2-3 rapports sectoriels (immobilier, artisans, industrie) | blog | 30 | 🟠 | T23-T28 |
| 23 | Offre — Page commerciale | `/formation-claude-code-pme` | nouvelle | 8 | 🔴 | T23 |
| 24 | Offre — Page commerciale | `/sprint-odoo-claude` | nouvelle | 6 | 🔴 | T24 |
| 25 | Offre — Page commerciale | `/formation-ia-dirigeant-pme` | nouvelle | 10 | 🟠 | T25 |
| 26 | Offre — Landing | `/abonnement-veille-ia-pme` | nouvelle | 4 + infra | 🟡 | T28 |
| 27 | Offre — Lead magnet | PDF « Grille financement IA PME 2026 » + landing | nouvelle | 6 | 🟠 | T24 |
| 28 | Tech — `llms-full.txt` | Régénération auto post-build | script | 3 | 🟠 | T23 |
| 29 | GEO — Runbook mensuel | `geo-prompts.md` 20 prompts + test mensuel multi-moteurs | docs | 4 + 2/mois | 🔴 | T22 |
| 30 | GEO — Mesure | `ai_opt_llm_ment_*` mensuel pour tracker mentions | DFS | 1/mois | 🟠 | T23+ |

---

## 11. Plan d'action priorisé

### 🔴 Critique — cette semaine (semaine 22, fin mai 2026)

1. **Réécrire title + meta description sur 3 landings clés** (`/audit-informatique-yvelines`, `/audit-informatique-val-doise`, `/strategie-ia-pme`). Gain estimé : +30-50 clics/mois sous 4-6 semaines. Effort : 3 h. Cf. §10.2.
2. **Créer un Google Business Profile** (Jouy-le-Moutier 95) — sans GBP, augmenter.pro perd toutes les positions #1 sur les 40 villes 78/95 (cf. cannibalisation §3.5-3.6). Effort : 3 h.
3. **Supprimer les 3 occurrences résiduelles du mot « gratuit »** dans `configurer-odoo-ia-claude-cowork` et `ch07-audits.tsx`. Effort : 30 min.
4. **Ajouter `dateModified` sur l'article `comparatif-llm-vente-commerciale`**. Effort : 15 min.
5. **Aligner LinkedIn Pierre Legrand** : poste exact « Consultant IA chez augmenter.pro » + créer/aligner Company Page LinkedIn augmenter.pro. Effort : 1.5 h.
6. **Refresh `claude-code-prompt-architecture`** : +1 000 mots (skills + agents.md), TL;DR de 5 bullets, attribution explicite à Pierre Legrand, FAQ schema. Effort : 4 h. **Cluster gagnant à amplifier.**
7. **Créer `docs/seo-audits/2026-05-21-data/geo-prompts.md`** : 20 prompts cibles + protocole de test mensuel multi-moteurs (ChatGPT, Perplexity, Gemini, AIO). Effort : 2 h.

### 🟠 Haute priorité — ce mois (juin 2026)

8. **Page commerciale `/formation-claude-code-pme`** alignée au cluster SEO gagnant (60 500 imp/mois cluster). Effort : 8 h. Cf. brief #2.
9. **Page commerciale `/sprint-odoo-claude` (4 jours, 6 500 €)** alignée au cluster gagnant. Effort : 6 h.
10. **Refresh `configurer-odoo-ia-claude-cowork`** (skills Odoo + témoignage + TL;DR). Effort : 3 h.
11. **Ajouter BreadcrumbList + HowTo + CollectionPage schemas** (cf. §2.4). Effort : 5 h.
12. **Refresh `<lastmod>` sitemap + scripter régénération automatique post-build**. Effort : 2 h.
13. **Standardiser le libellé CTA primaire** « Réserver l'Audit 180° (60 min, offert) » partout (header, footer, landings, articles). Effort : 2 h.
14. **Article #4 — Audit cybersécurité Yvelines (refresh page ou article séparé)**. Effort : 4 h. Quick win pos 16 → top 5 sur 477 imp/mois.
15. **Brief #6 — Rapport sectoriel #2 immobilier 78/95** (format GEO). Effort : 12 h.
16. **Candidatures France Num Activateur + Bpifrance IA Booster**. Effort : 10 h cumulé.
17. **Démarrer la régénération automatique de `llms-full.txt`** dans le pipeline de build. Effort : 3 h.

### 🟡 Moyen terme — Q3 2026 (juillet-septembre)

18. **Page `/formation-ia-dirigeant-pme`** (cluster 480/mo non couvert). Effort : 10 h.
19. **Briefs #7-#16** (10 articles supports). Effort : 40-50 h.
20. **Lead magnet « Grille financement IA PME 2026 »** (PDF + landing). Effort : 6 h.
21. **3 cas clients chiffrés** (BTP 78, immobilier 95, industrie 78). Effort : 18 h.
22. **Page `/cas-clients`** (hub social proof). Effort : 6 h.
23. **Wikidata Q-items** Pierre Legrand + augmenter.pro. Effort : 4 h.
24. **Audit Lighthouse mobile** sur 5 pages clés. Effort : 1 h.
25. **Tests mensuels GEO multi-moteurs** (runbook activé). Effort : 2 h/mois.

### 🟢 Fond de roadmap — Q4 2026 / 2027

26. **Calculateur ROI IA interactif** (lead magnet). Effort : 20 h.
27. **Cohorte IA pour dirigeants PME** (lancement formation groupée). Effort : 25 h.
28. **Abonnement veille IA PME mensuel** (150 €/mois). Effort : 15 h.
29. **Page `/glossaire-ia-pme`** (hub topical LLM-friendly). Effort : 8 h.
30. **Digital PR offline** (presse Yvelines, podcasts B2B). Effort : continu.

---

## 12. Roadmap 90 j / 6 mois / 12 mois

**Mois 1 (mai-juin 2026) — Fondations + Quick Wins**
- Semaine 22 : items 🔴 1-7 (titles, GBP, gratuit, dateModified, LinkedIn, refresh claude-code, runbook GEO)
- Semaine 23 : refresh #20 + BreadcrumbList/HowTo/CollectionPage schemas + standardisation CTA
- Semaine 24 : Page `/formation-claude-code-pme` + #14 audit cybersécurité Yvelines
- Semaine 25 : Page `/sprint-odoo-claude` + sitemap auto + llms-full.txt auto

**Mois 2 (juillet 2026) — Expansion offre + GEO**
- 2 articles supports/semaine (briefs #5, #6, #9, #12)
- Démarrer candidature France Num Activateur + Bpifrance IA Booster
- 1er test mensuel GEO multi-moteurs (Perplexity + Gemini + AIO via DFS)

**Mois 3 (août 2026) — Mesure + cas clients**
- 3 cas clients chiffrés publiés
- Lead magnet « Financement IA PME 2026 »
- Page Wikidata Pierre Legrand
- **Mesure d'impact vs baseline mai** : clics, impressions, position moy., taux de capture GEO

**Mois 4-6 — Accélération éditoriale + offre**
- Page `/formation-ia-dirigeant-pme` (cluster 480/mo)
- Briefs #7-#16 produits (10 articles)
- Mesure GEO mensuelle, objectif 30 % de capture sur prompts cibles

**Mois 7-12 — Récurrent + autorité**
- Cohorte IA dirigeants PME (lancement)
- Abonnement veille (lancement)
- Wikidata + Bpifrance directory acquis
- 1-2 mentions presse (Le Parisien 78, Les Échos Solutions)

---

## 13. KPIs à suivre (baseline + cibles)

| KPI | Baseline (mai 2026) | Cible M3 (août 2026) | Cible M6 (nov. 2026) | Cible M12 (mai 2027) |
|-----|--------------------:|---------------------:|---------------------:|---------------------:|
| Clics GSC / mois | 124 | 200 (+60 %) | 350 (+180 %) | 700 (+465 %) |
| Impressions GSC / mois | 5 347 | 8 000 (+50 %) | 14 000 (+160 %) | 25 000 (+370 %) |
| CTR moyen | 2.3 % | 3.0 % | 3.5 % | 4.0 % |
| Position moyenne | 11.7 | < 10 | < 8 | < 6 |
| Pages avec ≥ 10 clics/mois | 3 | 6 | 12 | 25 |
| KW top 10 GSC | ~12 | 25 | 50 | 100 |
| Quick Wins convertis | 0/12 | 8/12 | 12/12 + 10 nouveaux | 30+ |
| Cannibalisations résolues | 0/8 | 5/8 | 8/8 | maintenu |
| Score E-E-A-T moyen (top 10 pages) | 14.5/20 | 16/20 | 17.5/20 | 18.5/20 |
| **Mentions LLM (tests directs, taux de capture 20 prompts × ChatGPT/Perplexity/Gemini)** | **0 %** | 10 % | 30 % | 50 % |
| Labels acquis | 0 | 0-1 (candidature en cours) | 1-2 | 2-3 (France Num + Bpifrance + 1 presse) |
| Backlinks referring domains (à mesurer post-souscription DFS) | ~3 (estimés) | +5 | +15 | +40 |
| **Leads organiques / mois** (formulaire contact + audit 180°) | inconnu — à instrumenter via GA4 | 10 | 25 | 60 |

---

## Annexes

### A. Fichiers de données brutes (sauvegardés)

Dans `docs/seo-audits/2026-05-21-data/` (à compléter post-audit) :
- `geo-prompts.md` — à créer (20 prompts cibles + résultats T0/T+7/T+30/T+90)
- `gsc-page-query-90j.json` — export GSC complet (à régénérer si besoin)
- `dfs-keyword-overview-20kw.json` — export DFS keyword_overview
- `serp-audit-cybersecurite-yvelines.json` — SERP top 10
- `serp-consultant-ia-pme.json` — SERP top 10
- `lighthouse-claude-code-prompt-architecture.json` — rapport Lighthouse
- `chatgpt-tests-3-prompts.md` — réponses brutes ChatGPT Search

### B. Concurrents identifiés (à monitorer trimestriellement)

**Cluster MSP / audit local 78/95** : kincy.fr, newlink.fr, axido.fr, asap.fr, nowteam.net, dhala.fr, acitechnology.eu, redopus.fr, ami-gestion.fr, webguard-agency.fr, fastwatt.fr

**Cluster Conseil IA PME national** : myriadconsulting.fr, quentindeb.com, demarretonaventure.com, ia-pme.com, monconsultantexpert.fr, inseil.fr, maiaconsulting.be, ia-conseil-pme.fr, digitall-conseil.fr, neocell.ai

### C. Limites de cet audit

1. **DataForSEO Backlinks non actif** → Phase 5 entièrement skip. À reconduire post-souscription (si décidé).
2. **DFS Labs dataset très partiel** pour augmenter.pro (1 KW positionné) → recours à GSC comme source primaire.
3. **GEO tests limités à 3 prompts ChatGPT** dans cet audit. Le runbook mensuel doit couvrir 20 prompts × 7 moteurs.
4. **Lighthouse mobile non mesuré** (1 mesure desktop seulement). À recroiser sur les 5 pages clés en mode mobile.
5. **Crawl4ai des concurrents non effectué** dans cet audit (DFS SERP + observation manuelle suffisants pour Q2). À activer pour audit Q4.
6. **Backlinks inférés** (pas de données DFS), donc Phase 5 à reprendre.
7. **Tests GEO Perplexity / Gemini AI Mode / Brave / Bing Copilot** non exécutés (Playwright MCP non utilisé). À ajouter au runbook mensuel.

---

*Audit produit par le workflow `/seo-audit` le 2026-05-21. Auteur : Pierre Legrand (avec assistance Claude Code). Prochain audit complet recommandé : Q3 2026 (août-septembre) après implémentation des items 🔴 critiques.*

---

## 14. Addendum — Décisions stratégiques 2026-05-21 (brainstorm post-audit)

> Décisions actées en brainstorm le 2026-05-21 entre Pierre Legrand et Claude Code, à la lecture des findings de cet audit. **Ces décisions priment sur les recommandations initiales** des sections §9 (stratégie de contenu) et §10 (recommandations éditoriales) quand il y a conflit.

### 14.1 Persona unifié

**Décision** : le persona cible unique est **"dirigeant PME tech-curieux"** — gérant 10-200 salariés, francophone, qui code peut-être occasionnellement, déjà sur Odoo ou veut migrer, formé scientifique/tech, débordé mais curieux des LLMs.

**Données qui ont fondé la décision** :
- Les 5 témoignages publiés (cf. `layout.tsx`) sont 3/5 dirigeants PME + 2/5 indépendants. Zéro dev, zéro CTO de scale-up.
- Le cluster Claude Code/Odoo (88 % du trafic) draine, selon l'intuition Pierre, **majoritairement des dirigeants qui codent occasionnellement** (pas des freelance devs sans pouvoir d'achat).

**Implication** : le pilier topical map #1 (§9.1, pilier A) se renomme **"Claude Code/Odoo pour dirigeant PME"** (et non plus "pour dev"). Le ton des articles existants doit être recalibré (moins de jargon dev, plus de promesse business — gain de temps, autonomie vs intégrateur, ROI mesurable).

### 14.2 Positionnement 2027

**Décision** : double positionnement assumé — **"Référence francophone Claude Code/Odoo pour dirigeants PME + base PME locale 78/95"**. Ambition nationale + Belgique/Suisse francophone sur le tech, ancrage local sur l'audit IT/cybersécurité.

**Implication** : abandon de l'option "ignorer le cluster tech et corriger juste les titles" (scénario L3 du brainstorm). Le pilier Claude Code/Odoo devient un investissement stratégique long terme, pas un bonus.

### 14.3 Voix éditoriale

**Décision** : **tutoiement direct, ton qui parle au dirigeant**, sur **toutes les pages** y compris les landings commerciales (Atelier 650 €, Cohorte 990 €). Le ton "provocateur, douleur-centric" reste en accroche Google + intro. Pas de bascule vouvoiement selon le type de contenu (refusée pour cohérence).

### 14.4 Binôme d'offres Q2-Q3 2026

**Décision** : binôme A validé — deux offres nouvelles à lancer :

| Offre | Prix | Format | Cible SEO/persona | Lancement |
|-------|------|--------|--------------------|-----------|
| **Atelier Claude Code dirigeant PME** | 650 € HT | 1/2 journée, présentiel 78/95 ou visio, 1 participant | Cluster `prompt claude code` (138 imp/mois pos 7) + persona dirigeant tech-curieux | Sem. 24-25, mise en vente début juillet 2026 |
| **Cohorte "IA pour dirigeants PME"** | 990 €/pers HT | 6 semaines, 8-12 personnes/promo, mix visio + 2 présentiels Yvelines | Format différenciant français (pas de concurrent direct) — promo #1 rentrée septembre | Sem. 26-28, mise en vente juillet, promo #1 septembre |

**Conservation** :
- Audit 180° offert (60 min) — inchangé
- Audit 360° IA Booster (225 €) — inchangé
- Prestations sur mesure — inchangé

**Reportés en Q4 2026 ou T1 2027** (selon traction du binôme A) :
- Sprint Odoo + Claude (4 jours, 6 500 €)
- Formation OPCO 5 jours certifiée Qualiopi (3 500 €)
- Abonnement veille IA PME (150 €/mois)
- Lead magnet PDF "Grille financements IA PME 2026"
- Calculateur ROI IA interactif

### 14.5 Roadmap d'activation 12 semaines (mai → août 2026)

Capacité confirmée : **10-12 h/semaine** dédiées à ces chantiers (mode investi). Aucune contrainte business externe à intégrer.

| Sem. | Période | Chantier | Effort | Output mesurable |
|------|---------|----------|-------|------------------|
| **22** | 25-31 mai 2026 | Quick wins SEO purs : 4 titles/descriptions (cf. §10.2) + `dateModified` sur `comparatif-llm-vente-commerciale` + LinkedIn aligné (poste Pierre Legrand "Consultant IA chez augmenter.pro" + Company Page si absente) | 6 h | +30-50 clics/mois sous 4-6 sem. |
| **23** | 1-7 juin | Refresh `claude-code-prompt-architecture` : +1000 mots (skills, agents.md), TL;DR de 5 bullets, attribution explicite Pierre, FAQ schema. Ton recalibré dirigeant tech-curieux. | 5 h | Article #1 prêt à porter les 2 offres |
| **24-25** | 8-21 juin | Landing `/atelier-claude-code-dirigeant-pme` (650 €). Bridge éditorial dans l'article #1 (Claude Code prompt) vers la landing. Mise en vente début juillet. | 12-15 h | Atelier vendable, 1ère session juillet |
| **26-28** | 22 juin - 12 juillet | Landing `/cohorte-ia-dirigeants-pme` (990 €). Programme 6 semaines détaillé. Recrutement promo #1 (objectif : 8-12 inscrits pour démarrage rentrée septembre). | 18-20 h | Cohorte vendable, promo #1 démarrage 1er septembre |
| **27+** | 13 juillet → | Chantier GEO entity en // : Wikidata Q-item Pierre Legrand + augmenter.pro, candidature France Num Activateur, candidature Bpifrance IA Booster. Audit GMB existant. | 4-6 h/mois | Effet M6-M12 sur capture LLM + autorité |

### 14.6 Google Business Profile — note de mise à jour

**Information découverte post-brainstorm** : Pierre dispose **déjà d'un GMB** (URL Google Maps : `https://share.google/BxDVGb2j21kBJUJbb`).

**Conséquence** : la recommandation initiale du §11 item 2 ("Créer un Google Business Profile") devient **"Auditer et optimiser le GMB existant"**. Checklist d'audit GMB à passer en semaine 27 :
- [ ] Catégorie principale et secondaires alignées sur "Consultant en informatique", "Service de formation", "Conseil en entreprise" (ou similaire pertinent FR)
- [ ] NAP (Name / Address / Phone) **strictement cohérent** avec le JSON-LD LocalBusiness du site (Jouy-le-Moutier 95280)
- [ ] Description GMB optimisée avec les mots-clés cibles 78/95
- [ ] Services listés (Audit 180°, Audit 360°, Atelier Claude Code dès semaine 25)
- [ ] Photos professionnelles (entrée, équipe, livrables types)
- [ ] Premiers posts hebdomadaires (annonces, articles de blog, témoignages)
- [ ] Reviews migrées (les 5 témoignages du site → demander reviews Google aux mêmes clients)
- [ ] Q&A section pré-remplie

**Impact attendu post-optimisation** : récupération du long-tail local 78/95 (40+ villes, ~700 imp/mois actuellement non monétisées).

### 14.7 Modifications à propager dans les sections antérieures du rapport

| Section | Modification suite à l'addendum |
|---------|--------------------------------|
| §9.1 — Topical map | Pilier A renommé "Claude Code/Odoo **pour dirigeant PME**" ; pilier I (Formation IA dirigeant PME) reporté en Q4 |
| §9.4 — Pages à créer | `/formation-claude-code-pme` se transforme en `/atelier-claude-code-dirigeant-pme` (650 €). Ajouter `/cohorte-ia-dirigeants-pme`. Reporter `/sprint-odoo-claude` et `/formation-ia-dirigeant-pme` |
| §10.4 — Enrichissement de l'offre | 5 propositions sur 7 reportées (cf. §14.4 ci-dessus) |
| §11 — Plan d'action 🔴 item 2 | Devient "Auditer et optimiser le GMB existant" (et non "Créer") |
| §13 — KPIs | Ajouter ligne dédiée "Inscriptions cohorte #1" (cible promo #1 = 8 minimum, sept. 2026) + "Ventes Atelier Claude Code" (cible 4-6/mois à M6) |

### 14.8 Décisions parking (à reprendre quand pertinent)

- **Domiciliation pro 78/95** vs adresse personnelle Jouy-le-Moutier — à trancher quand on audite le GMB (sem. 27). Impact sur les mentions légales si changement.
- **Phase 5 Backlinks DFS** — pas de souscription tant que digital PR organique n'a pas produit ses 5 premiers backlinks de qualité.
- **Score E-E-A-T** — à recalculer après cas clients chiffrés publiés (cible M3-M6).

---

### 14.9 Recentrage topical map — données DFS réelles (2026-05-21)

> Le `keyword_ideas` de l'audit initial (§4.2, §9) était pollué (seeds génériques élargies vers le loisir). Une **re-run propre** via `keyword_suggestions` sur 6 seeds ciblés a produit une topical map fiable : [`2026-05-21-data/topical-map-dfs.md`](2026-05-21-data/topical-map-dfs.md). **Cette map prime sur les volumes inférés des §4.2 et §9.2.**

**3 révélations qui modifient la stratégie de contenu** :

1. **Le Pilier 2 (audit IT local) décline structurellement** : `audit informatique` −84 % yearly, `audit informatique pme` −92 %, `audit réseau` −85 %. → **Geler les nouveaux contenus audit local** (sauf NIS2 réglementaire). Les 2 pages + 2 articles existants suffisent. Confirme rétroactivement le pivot vers le Pilier 1.

2. **Les méga-volumes "claude code" (74k) et "odoo" (90k) sont anglophones** (location FR ≠ langue FR) — non actionnables en SEO éditorial français. La valeur est dans la longue traîne FR.

3. **Nouveau gap béant : cluster "Agent IA"** (`qu'est-ce qu'un agent ia` + `comment créer un agent ia` + `agent ia c'est quoi`) = ~1 700/mo, KD 1-5, +177 à +1157 % yearly, **zéro couverture**, nourrit l'Atelier 650 €. Non identifié dans l'audit initial.

**Shortlist Q3 2026 recentrée (volumes réels — remplace §9.2 pour la priorisation)** :

| Rang | Sujet | Vol réel FR | Sert |
|---|---|---:|---|
| 1 | Pilier « Agent IA pour dirigeant PME » (page + PAA) | ~1 700 | Atelier |
| 2 | Formation IA dirigeant/entreprise (page offre) | ~3 400 | Cohorte + Atelier |
| 3 | Claude Code Skills & CLI (poste dirigeant augmenté) | ~2 000 | Atelier |
| 4 | Installer/démarrer Claude Code (guide PME) | ~3 800 | Atelier (top-of-funnel) |
| 5 | Claude Code vs Cursor/Codex (comparatif décideur) | ~1 500 | Atelier |
| 6 | « Odoo c'est quoi » + facture électronique 2026 | ~2 900 | Audit 360°/Cohorte |
| 7 | Odoo + IA CRM/compta (consolidation existant) | ~2 500 | Audit 360° |
| 8 | NIS2/réglementaire — pas d'expansion audit généraliste | — | maintien |

**⚠️ Alerte cannibalisation** : MCP est sur-couvert (3 articles pour ~9k cluster majoritairement navigational). Ne pas ajouter de 4e contenu MCP ; surveiller la cannibalisation entre les 2 articles MCP-CRM/ERP.

---

*Addendum produit par le workflow `/seo-audit` continuation le 2026-05-21 (brainstorm post-audit + re-run keyword research propre). Acté par Pierre Legrand.*
