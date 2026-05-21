---
date: 2026-05-21
slug: geo-citation-readiness
status: closed
mode: orchestrator
parent_session: 2026-04-22-seo-commands-overhaul.md
tags: [seo, geo, llm-citation, templates, orchestrator]
closed_date: 2026-05-21
---

> **Closed 2026-05-21** : les 3 sub-tasks (robots.txt AI bots, page auteur + Person JSON-LD, llms-full.txt) sont livrées green. `npm run build` ✅ x3 (sub1 N/A, sub2 ×2, sub3 ×1). Residuels = inputs externes Pierre (photo headshot, URL GitHub, mission Claude/Odoo 78/95) + validations post-déploiement (Schema.org Validator, GSC Index Inspect 24-72h). Aucune action orchestrateur restante avant push.

# Mettre augmenter.pro en état d'être cité par les LLMs (ChatGPT Search, Perplexity, Gemini AI Mode, Claude, Brave, Bing Copilot) sur les requêtes correspondant aux prestations

## Status
green — diagnostic et instrumentation côté commandes/templates **complètes**. Phase d'exécution live sur le site **en attente** (3 quick wins à dispatcher en sous-tâches).

## Done in this session

### Bloc 1 — Validation workflow & premier audit
- Suppression du doublon `docs/STRATEGIE-EDITORIALE.md` (qui se déclarait lui-même artefact à supprimer), correction de la référence orpheline dans `docs/backlog-cleanup.md`.
- Validation MCP : GSC (`list_sites`, `search_analytics`, `index_inspect`, `list_sitemaps`, `detect_quick_wins`) ✅ ; DataForSEO (Labs, KW, SERP, AI Optimization) ✅ ; Backlinks ❌ (souscription non active — Phase 5 à skipper par défaut).
- Pièges paramètres documentés : GSC `dimensions` = string CSV (pas array) ; DFS Labs = `location_name` (pas `location_code`) ; `kw_data_google_ads_locations` = `country_iso_code` (pas `country`).
- **Premier rapport d'audit produit** : [docs/seo-audits/2026-05-21-audit.md](../seo-audits/2026-05-21-audit.md) — baseline GSC 90j (363 clics / 15 724 impr / pos 12.7), découverte d'un **cluster Claude Code / Odoo non documenté** qui domine 90 % du trafic.

### Bloc 2 — Factorisation des templates SEO
- Création de [.claude/templates/seo/checklist.md](../../.claude/templates/seo/checklist.md) — 7 blocs A→G (on-page, E-E-A-T, JSON-LD, intégration, modification, audit complet, **GEO/LLM citation**).
- Création de [.claude/templates/seo/mcp-calls.md](../../.claude/templates/seo/mcp-calls.md) — bibliothèque d'appels GSC + DFS avec signatures vérifiées et pièges documentés ; §6 enrichi de tests Playwright multi-moteurs et de tests crawl bot-by-bot.
- Extraction des appels MCP du corps de `seo-audit.md` vers `mcp-calls.md` : Phase 2 (GSC) + Phase 3 (DFS) + Phase 4 (concurrence) + Phase 5 (backlinks) + Phase 6 (GEO) allégées, fichier passé de **911 → 716 lignes** (-21 %).
- Footer « Utilisé par » ajouté aux **9 templates** ([article-brief](../../.claude/templates/seo/article-brief.md), [checklist](../../.claude/templates/seo/checklist.md), [copy-proposal](../../.claude/templates/seo/copy-proposal.md), [eeat-grid](../../.claude/templates/seo/eeat-grid.md), [mcp-calls](../../.claude/templates/seo/mcp-calls.md), [page-spec](../../.claude/templates/seo/page-spec.md), [project-context SEO](../../.claude/templates/seo/project-context.md), [report](../../.claude/templates/seo/report.md), [service-card](../../.claude/templates/seo/service-card.md)) pour la navigation croisée.

### Bloc 3 — Extension du contexte aux commandes non-SEO
- Création de [.claude/templates/shared/project-context.md](../../.claude/templates/shared/project-context.md) — stack, patterns architecturaux, conventions de code, build, fichiers SEO/LLM à maintenir, contraintes cross-projet.
- Les 4 commandes non-SEO ([debt-report](../../.claude/commands/debt-report.md), [security-audit](../../.claude/commands/security-audit.md), [doc-audit](../../.claude/commands/doc-audit.md), [codex-execute-task](../../.claude/commands/codex-execute-task.md)) pointent maintenant vers ce contexte partagé + conservent leurs notes spécifiques.
- Navigation croisée ajoutée dans `seo/project-context.md` (mention du shared/).

### Bloc 4 — Mise à jour STRATEGIE-EDITORIALE.md
- Header daté 2026-05-21 avec mention du **cluster Claude Code manquant** dans §3 et lien vers le nouvel audit.
- `firecrawl` retiré (2 occurrences en §1.3 et §8.1) — remplacé par crawl4ai self-hosted (cf. CLAUDE.md qui interdit firecrawl).
- §11 Journal complété : 4 entrées (2026-03-29 Odoo Claude Cowork, 2026-04-21 Claude Code prompt, 2026-04-22 refonte bento, 2026-05-21 audit + templates).
- §12 réécrit en **arbre de décision A/B/C** (capitaliser Claude Code / rester sur stratégie 78/95 / hybride avec mesure 90j) avec checkboxes pour la décision de Pierre.

### Bloc 5 — Enrichissement GEO Phase 6 du `/seo-audit`
- Phase 6 restructurée : 7 → 9 sous-sections.
- 🆕 **§6.1 Accessibilité crawlers IA** : tableau des 10 bots (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Bytespider, Meta-ExternalAgent) avec recommandations allow/disallow ; vérifs `X-Robots-Tag: noai`, CSP `frame-ancestors`, test crawl bot-by-bot via crawl4ai avec User-Agent custom.
- 🆕 **§6.3 Tests directs multi-moteurs** : étendu de ChatGPT seul à 7 moteurs (ChatGPT, Perplexity Pro, Gemini AI Mode, AI Overviews, Brave Summarizer, Bing Copilot, Claude). Bibliothèque de 15-20 prompts à maintenir dans `docs/seo-audits/<date>-data/geo-prompts.md`.
- 🆕 **§6.5 Entity author + NAP consistency** : audit page auteur Pierre Legrand + Person JSON-LD complet (sameAs, knowsAbout, alumniOf) + cohérence Name/Address/Phone cross-pages.
- 🆕 **§6.6 `llms-full.txt`** : format étendu en complément de `llms.txt` (markdown complet, < 5 MB, référencé dans `robots.txt`).
- 🆕 **§6.7 Citation triggers** : grille de 10 déclencheurs (définition courte intro ≤ 25 mots, tableaux, stats sourcées, listes numérotées, FAQ Q→A direct, timestamps explicites, attributions « selon Pierre Legrand », auteur+lien, TL;DR, slug court). Score cible ≥ 7/10 sur pages stratégiques.
- 🆕 **§6.8 Entity mentions externes** : audit Wikidata, LinkedIn, GitHub, France Num Activateur, Bpifrance IA Booster, presse.
- Templates impactés : `mcp-calls.md` §6 étendu (tests Playwright multi-moteurs + crawl bot-by-bot) ; `checklist.md` nouvelle section G (8 sous-blocs G.1-G.8) ; `report.md` §7 restructuré (4 → 9 sous-sections).

## Files touched (résumé)

- Templates SEO (8 fichiers modifiés ou créés) : voir Bloc 2 + Bloc 5
- Templates shared (1 dossier créé) : `.claude/templates/shared/project-context.md`
- Commandes SEO (4 fichiers) : `seo-audit.md`, `create-article.md`, `create-resource.md`, `modify-resource.md`
- Commandes non-SEO (4 fichiers) : `debt-report.md`, `security-audit.md`, `doc-audit.md`, `codex-execute-task.md`
- Stratégie : `STRATEGIE-EDITORIALE.md` (racine, header + §8 + §11 + §12) ; `docs/STRATEGIE-EDITORIALE.md` SUPPRIMÉ ; `docs/backlog-cleanup.md` (référence corrigée)
- Premier audit livré : `docs/seo-audits/2026-05-21-audit.md` (untracked)

## Git state
- Branch: `main` (upstream: aucun)
- Diverge from main: `+0` / `-0`
- Uncommitted: **18 fichiers modifiés**, 1 supprimé, plusieurs untracked importants (`checklist.md`, `mcp-calls.md`, `templates/shared/`, `docs/seo-audits/`, `docs/sessions/2026-05-21-...`)
- Last commit: `a99e2d6` — « Update links in documentation and templates for consistency and clarity »

## Test status
- Snapshot: **unknown** — modifications purement Markdown / docs / commandes, aucun code applicatif touché. `npm run build` non lancé (pas nécessaire à ce stade).

## Sub-tasks (orchestrator mode)

| # | Task | Délégué à | Status | Result doc |
|---|------|-----------|--------|------------|
| 1 | **robots.txt — directives explicites bots IA** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, PerplexityBot, Perplexity-User, CCBot + Disallow par défaut pour Bytespider/Meta/FacebookBot) | `/codex-execute-task` (external session) | ✅ **completed** | [sub1 handoff](2026-05-21-geo-citation-readiness-sub1.md) |
| 2 | **Page auteur `/auteur/pierre-legrand`** + Person JSON-LD + modif `ArticleLayout` | `feature-dev:code-architect` (design ✅) + external session (impl) | ✅ **completed** — page server component livrée, JSON-LD Person complet (`@id`, 12 knowsAbout, sameAs LinkedIn/X/pierrelegrand.fr), 6 sections, byline visible sur tous les articles, sitemap + llms.txt + footer + /approche mis à jour. **E-E-A-T Avant→Après : Autorité 3→5/5, Expertise 4→5/5, Experience 3→4/5, Fiabilité 3→4/5. Citation triggers 9/10.** Placeholder « PL » 240×240 violet en attendant photo. | [blueprint](2026-05-21-geo-citation-readiness-sub2-blueprint.md) · [sub2 handoff](2026-05-21-geo-citation-readiness-sub2.md) |
| 3 | **`llms-full.txt`** généré depuis le contenu existant (23 pages : 11 principales + 12 articles, légales exclues) | `/codex-execute-task` (external session) | ✅ **completed** — 172 KB / 2 061 lignes, bien sous limite 5 MB. `llms.txt` + `robots.txt` mis à jour. Coordination OK avec sub-task #1. | [sub3 handoff](2026-05-21-geo-citation-readiness-sub3.md) |

### Inputs Pierre — statut après échange orchestrateur 2026-05-21

| # | Question | Décision Pierre | Statut |
|---|----------|-----------------|--------|
| Bio | Bio FR pour Person.description | Pierre a fourni un texte EN (background sales+tech, App.Augmenter.Pro, certification psychologie humaniste). **Bio FR synthétisée par orchestrateur** : ~210 mots intégrant les 2 sources (consultant augmenter.pro + Sales Leadership 500k→4.3M€ + App.Augmenter.Pro). Intégrée au prompt impl. | ✅ |
| Photo | Headshot WebP 480×480 | **Placeholder « PL »** (div violet `bg-violet-600`, initiales blanches) en attendant. TODO documenté dans `public/images/team/INDEX.md`. JSON-LD `Person.image` **omis** tant que photo non fournie. | ✅ (provisoire) |
| sameAs | LinkedIn / X / GitHub / pierrelegrand.fr | LinkedIn `legrand-pierre`, X `Pi3r2Dev`, pierrelegrand.fr **intégrés**. **GitHub URL : TODO Pierre** (slot `"TODO_GITHUB_URL"` dans le prompt à remplacer ou retirer avant push). | ⚠️ partiel |
| Missions | 3-5 items timeline | **Mix 2-3 reviews existantes + 1 mission Claude Code/Odoo 78/95**. Reviews dérivables auto depuis `layout.tsx`. **Mission Claude : TODO Pierre** (1-2 phrases anonymisées chiffrées). | ⚠️ partiel |
| Email | `Person.contactPoint.email` | `vite@augmenter.pro` (déjà public dans Organization) | ✅ |
| birthDate / alumniOf | Exposer ? | **Exclus** (privacy-first par défaut) | ✅ |
| France Num / Bpifrance | Inscrits ? URLs ? | Pas confirmé — **exclus du sameAs**. À ajouter si Pierre s'inscrit. | À planifier (long terme) |

**Bloquants résiduels avant push live** : URL GitHub Pierre + 1 mission Claude/Odoo 78/95 anonymisée. Tant que non fournis, l'impl session publie avec placeholders/TODO et flaggue dans le handoff.

## Next concrete step

**Sub-tasks #1 et #3 closes**. Reste **#2 (page auteur)** à exécuter.

1. Pierre lance le prompt impl sub-task #2 dans une session séparée (avec ou sans les 2 inputs résiduels GitHub URL + mission Claude 78/95 — l'impl publie avec placeholders/TODO sinon).
2. Au retour du handoff #2 : marquer ✅ dans le tracker, **fermer la session orchestrateur** (status `closed`).
3. Regrouper les commits avant push :
   - Commit A : suppression doublon STRATEGIE + fixes refs + STRATEGIE §11 §12 mis à jour
   - Commit B : factorisation templates (checklist + mcp-calls + footers crossref + shared/project-context)
   - Commit C : enrichissement GEO Phase 6 dans /seo-audit + report.md §7 restructuré
   - Commit D : robots.txt directives bots IA (sub-task #1)
   - Commit E : llms-full.txt + llms.txt + robots.txt Sitemap (sub-task #3)
   - Commit F : page auteur + ArticleLayout + maillage (sub-task #2 — quand livré)
4. Push + validations prod :
   - `curl -s -A "GPTBot/1.0" https://augmenter.pro/robots.txt` (vérifier directives)
   - `curl -s https://augmenter.pro/llms-full.txt | head -50` (vérifier livraison)
   - GSC Index Inspect sur `/auteur/pierre-legrand` (24-72h après push)
   - Schema.org Validator sur la nouvelle page auteur

## Open decisions

- **Décision A/B/C cluster Claude Code** (tracée dans STRATEGIE-EDITORIALE §12) — Pierre doit choisir avant le prochain `/create-resource` sans argument. Cette décision conditionne la priorité éditoriale du Q3 2026.
- **Souscription DataForSEO Backlinks** — décision binaire : activer (~50-100 €/mois) pour débloquer Phase 5 du `/seo-audit`, ou skipper et utiliser des fallbacks Ahrefs Free / SERP scraping pour les mentions externes.
- **Commits pending** — 18 fichiers modifiés + plusieurs untracked. Grouper en 3-4 commits thématiques : (a) suppression doublon STRATEGIE + fixes refs, (b) factorisation templates (checklist + mcp-calls + footers), (c) extension contexte commandes non-SEO + shared/, (d) enrichissement GEO Phase 6 + STRATEGIE §12. Ou un seul commit « refonte commandes SEO + GEO readiness ».

## Blockers
Aucun.

## How to resume

1. Lire ce doc + [.claude/templates/seo/checklist.md](../../.claude/templates/seo/checklist.md) §G (GEO/LLM citation) pour le contexte technique
2. Lire [.claude/templates/seo/mcp-calls.md](../../.claude/templates/seo/mcp-calls.md) §6.3 (tests bot-by-bot) pour les patterns User-Agent
3. Lancer `git status` pour confirmer l'état actuel (18 modifs + untracked non commités)
4. Lancer `/flow resume` → auto-entrera en orchestrate au Step O3 sur les 3 sub-tasks pending
