---
date: 2026-04-22
slug: seo-commands-overhaul
status: closed
mode: solo
tags: [seo, commands, templates, refactor, docs]
closed_by: 2026-05-21-geo-citation-readiness
closed_date: 2026-05-21
---

> **Cloturée le 2026-05-21** : le « next step » de cette session (étendre `project-context.md` aux commandes non-SEO) est exécuté dans [`2026-05-21-geo-citation-readiness.md`](2026-05-21-geo-citation-readiness.md), qui en plus ajoute Phase 6 GEO + templates checklist/mcp-calls + footers crossref. La suite (3 quick wins live) est tracée dans cette nouvelle session en mode orchestrator.

# Refonte du système de commandes SEO : audit enrichi + split en templates partagés + contexte projet centralisé

## Status
green — refonte fonctionnellement complète, un premier audit a été produit avec succès ([docs/seo-audits/2026-05-21-audit.md](../seo-audits/2026-05-21-audit.md)). Aucun blocker.

## Done in this session

- **Enrichissement massif de `/seo-audit`** : 10 phases (vs 6 avant), intégration complète GSC MCP (7 outils incluant `detect_quick_wins`, `index_inspect`, `enhanced_search_analytics`), DataForSEO (~25 outils incluant `on_page_lighthouse`, AI optimization `ai_opt_llm_ment_*`, backlinks), crawl4ai, Playwright.
- **Ajout d'une Phase 9 dédiée aux livrables concrets** : copy A/B/C, cartes services réécrites, propositions d'enrichissement d'offre chiffrées, dérives cross-pages, backlog consolidé.
- **Split en 7 templates réutilisables** dans [.claude/templates/seo/](../../.claude/templates/seo/) :
  - `project-context.md` (87 l) — positionnement, stack, audience, modalités géo, contraintes
  - `article-brief.md` (43 l) — format de brief article prêt à rédiger
  - `page-spec.md` (53 l) — fiche spec page non éditoriale
  - `copy-proposal.md` (84 l) — format A/B/C pour réécriture
  - `service-card.md` (50 l) — carte offre + pyramide de paliers
  - `eeat-grid.md` (55 l) — barème E-E-A-T /20
  - `report.md` (220 l) — rapport audit 13 sections
- **Ajout de 2 templates supplémentaires** (probable session parallèle ou complément user) :
  - `checklist.md` (94 l) — check-lists A à F factorisées
  - `mcp-calls.md` (331 l) — bibliothèque d'appels MCP avec signatures vérifiées
- **Harmonisation des 4 commandes SEO** (`/seo-audit`, `/create-article`, `/create-resource`, `/modify-resource`) : pointent toutes vers les templates partagés via liens relatifs.
- **Clarification éditoriale** :
  - Mot « gratuit » purgé de toutes les commandes (sauf rappels de la règle elle-même)
  - Zone géographique précisée : 78/95 = ancrage formation présentielle, mais visio nationale + déplacements gros projets — **pas une exclusivité commerciale**
- **Mise à jour CLAUDE.md** du projet pour aligner la doc globale (zone d'intervention, power words sans « Gratuit », lien vers project-context).
- **Memory projet créée** : [`project_geo_scope.md`](C:/Users/black/.claude/projects/d--SourceFast-coolify-linux-site-augmenter-pro/memory/project_geo_scope.md) — évitera dans toutes les futures conversations de restreindre l'offre à 78/95.
- **1er audit produit** : [docs/seo-audits/2026-05-21-audit.md](../seo-audits/2026-05-21-audit.md).
- **`STRATEGIE-EDITORIALE.md`** déplacé de `docs/` à la racine, marqué partiellement obsolète dans les commandes (sections utiles : §3 clusters, §6 axes, §7 stats, §8 protocole).

## Files touched

- [`.claude/commands/seo-audit.md`](../../.claude/commands/seo-audit.md) — refonte complète + références templates
- [`.claude/commands/create-article.md`](../../.claude/commands/create-article.md) — contexte allégé, templates référencés, « gratuit » purgé
- [`.claude/commands/create-resource.md`](../../.claude/commands/create-resource.md) — idem + workflow STRATEGIE-EDITORIALE clarifié
- [`.claude/commands/modify-resource.md`](../../.claude/commands/modify-resource.md) — idem + check-list E (modify/restructure)
- [`.claude/commands/doc-audit.md`](../../.claude/commands/doc-audit.md) — 1 occurrence « gratuit » corrigée
- `.claude/templates/seo/` — nouveau dossier, 9 fichiers
- [`CLAUDE.md`](../../CLAUDE.md) — zone d'intervention clarifiée, power words sans « Gratuit », lien project-context
- `STRATEGIE-EDITORIALE.md` — déplacé de `docs/` à racine
- `docs/seo-audits/2026-05-21-audit.md` (untracked) — résultat du premier audit
- Memory : `project_geo_scope.md` + `MEMORY.md` index

## Git state

- Branch: `main` (upstream: aucun)
- Diverge from main: `+0` / `-0` (pas d'avance/retard)
- Uncommitted: 4 fichiers modifiés (`.claude/commands/*.md`, `STRATEGIE-EDITORIALE.md`, `docs/backlog-cleanup.md`), 1 supprimé (`docs/STRATEGIE-EDITORIALE.md`), plusieurs untracked importants (`.claude/templates/seo/checklist.md`, `mcp-calls.md`, `docs/seo-audits/`, `docs/CllaudeDesign handoff/`, un PDF Founders Playbook).
- Last commit: `a99e2d6` — « Update links in documentation and templates for consistency and clarity »

## Test status

- Snapshot: **unknown** — projet Next.js sans tests automatisés détectés (pas de `vitest.config.*` ni `jest.config.*`)
- Source: aucune (seul `npm run build` permet de vérifier la compilation TS+Next)
- Pas de tests à lancer pour ce handoff : modifications **purement Markdown / docs / commandes**, aucun code applicatif touché

## Next concrete step

**Étendre `project-context.md` aux commandes non-SEO** : faire bénéficier `/debt-report`, `/security-audit`, `/codex-execute-task`, `/doc-audit` du contexte projet partagé (stack, conventions, identité).

Deux approches possibles à arbitrer :

1. **Renommage** : `.claude/templates/seo/project-context.md` → `.claude/templates/shared/project-context.md` (ou `.claude/templates/project-context.md` à la racine du dossier), avec le SEO-spécifique extrait dans `templates/seo/seo-context.md` qui complète. Toutes les commandes pointent vers le contexte de base.
2. **Hiérarchie** : créer `.claude/templates/shared/project-base.md` minimal (positionnement, stack, conventions code, audience générique) — le SEO context actuel l'étend implicitement. Les commandes non-SEO pointent vers `shared/project-base.md`.

**Pré-requis avant d'agir** : lire les 4 commandes non-SEO ciblées pour identifier ce qui est SEO-spécifique vs. transversal, et décider du périmètre exact.

## Open decisions

- **Structure des templates** : `.claude/templates/seo/` vs. `.claude/templates/` avec sous-dossiers `seo/` + `shared/` — à trancher selon le périmètre du next step
- **Commits pending** : grouper en 2-3 commits thématiques (templates créés / commandes harmonisées / CLAUDE.md + memory) ou un seul commit « refonte commandes SEO » ? Le diff est conséquent (~2700 lignes ajoutées toutes commandes confondues)

## Blockers

Aucun.

## How to resume

1. Lire ce doc puis [.claude/templates/seo/project-context.md](../../.claude/templates/seo/project-context.md) pour le contexte projet à jour
2. Lancer `git status` + `git diff --stat` pour confirmer l'état actuel
3. Démarrer par lire [.claude/commands/debt-report.md](../../.claude/commands/debt-report.md), [.claude/commands/security-audit.md](../../.claude/commands/security-audit.md), [.claude/commands/codex-execute-task.md](../../.claude/commands/codex-execute-task.md) et identifier les sections « contexte » duplicables
4. Décider du périmètre (full move vers `templates/shared/` ou minimal `shared/project-base.md`)
5. Avant de coder : valider l'approche via une question ou un mini ADR si la décision est structurante
