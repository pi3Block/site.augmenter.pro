---
date: 2026-05-21
slug: geo-citation-readiness-sub1
status: closed
mode: solo
parent_session: 2026-05-21-geo-citation-readiness.md
tags: [seo, geo, robots, crawlers, llm-citation]
---

# robots.txt — directives explicites par bot IA (sub-task #1 du tracker GEO)

## Status
green — livrable complet, prêt à committer.

## Done in this session
- Lu l'état actuel de `public/robots.txt` (5 lignes : `User-agent: *` + `Allow: /` + 2 sitemaps).
- Vérifié `next.config.ts` : aucun header `X-Robots-Tag: noai` global qui annulerait les directives (les `securityHeaders` n'incluent que CSP, HSTS, X-Frame-Options, etc.).
- Confirmé le périmètre des 10 bots IA via [`.claude/commands/seo-audit.md`](../../.claude/commands/seo-audit.md) §6.1 et [`.claude/templates/seo/checklist.md`](../../.claude/templates/seo/checklist.md) §G.1.
- Réécrit `public/robots.txt` avec :
  - `Allow: /` explicite pour 10 bots IA (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, PerplexityBot, Perplexity-User, CCBot)
  - `Disallow: /` par défaut pour les 3 bots controversés (Bytespider, Meta-ExternalAgent, FacebookBot) avec commentaire indiquant que c'est une décision éditoriale à arbitrer
  - Commentaires en français regroupant les bots par opérateur (OpenAI / Anthropic / Google / Perplexity / Common Crawl)
  - Les 2 `Sitemap:` existants préservés en bas du fichier

## Files touched
- [public/robots.txt](../../public/robots.txt) — passé de 5 lignes à 62 lignes ; ajout des directives explicites par bot, regroupées par opérateur avec commentaires FR.

## Git state
- Branch: `main` (upstream: aucun)
- Diverge from main: identique à l'état du parent (cette sub-task ajoute juste `M public/robots.txt`)
- Uncommitted: 18 modifiés (dont **+1 nouveau** : `public/robots.txt`) + 1 supprimé + plusieurs untracked (héritage du parent session)
- Last commit: `a99e2d6` « Update links in documentation and templates for consistency and clarity »

## Test status
- Snapshot: `unknown` — modification d'un fichier statique servi depuis `public/` ; aucun code applicatif touché, type-check non pertinent.
- Validation locale `curl -A "GPTBot/1.0" http://localhost:3000/robots.txt` : non exécutée (dev server arrêté). La validation prod se fera après push via `curl -A "GPTBot/1.0" https://augmenter.pro/robots.txt`.

## Next concrete step
1. **Orchestrateur** : lire ce doc, marquer la sub-task #1 `completed` dans le tracker parent [2026-05-21-geo-citation-readiness.md](2026-05-21-geo-citation-readiness.md).
2. Enchaîner avec sub-task #3 (`llms-full.txt`) en parallèle de sub-task #2 (page auteur).
3. Avant déploiement : valider auprès de Pierre la décision `Disallow: /` par défaut pour Bytespider / Meta-ExternalAgent / FacebookBot (cf. Open decisions).
4. Après déploiement : tester en prod `curl -A "GPTBot/1.0" https://augmenter.pro/robots.txt` (attendu : 200 + nouveau contenu).

## Open decisions
- **Bytespider / Meta-ExternalAgent / FacebookBot** : actuellement `Disallow: /` par défaut, avec commentaire dans le fichier. Pierre peut basculer en `Allow: /` s'il juge ces écosystèmes (Doubao/TikTok, Llama) stratégiquement utiles. Aucun retour Pierre reçu durant la sub-session.
- **`llms-full.txt` non encore référencé en `Sitemap:`** : la checklist §G.4 demande à terme `Sitemap: https://augmenter.pro/llms-full.txt` dans robots.txt — à ajouter pendant la sub-task #3 quand le fichier sera généré, pas maintenant (hors scope).

## Blockers
Aucun.

## How to resume
Cette sub-task est `closed`. Pour la sub-session parent : `/flow resume` → reprendra l'orchestration au Step O3 sur les sub-tasks #2 et #3 restantes.

## Sub-tasks
N/A — sub-task atomique en mode solo.
