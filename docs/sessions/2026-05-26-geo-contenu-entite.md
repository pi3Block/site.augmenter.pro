---
date: 2026-05-26
slug: geo-contenu-entite
status: open
mode: solo
parent_decision: docs/seo-audits/2026-05-21-audit-complet.md
related_docs:
  - docs/seo-audits/2026-05-22-plan-entite-geo.md
  - docs/seo-audits/2026-05-21-data/geo-prompts.md
  - docs/seo-briefs/2026-05-21-claude-playbook-briefs.md
tags: [seo, geo, entite, contenu]
---

# Renforcer la visibilité GEO d'augmenter.pro : contenu optimisé citation + construction d'entité externe

## Status
green — repo site propre et entièrement poussé (`main` = `origin/main`). Seul `.claude/settings.json` non commité (hors périmètre). Chantier ENTITÉ lancé, en attente de jalons externes.

## Done in this session

**Outillage éditorial (durable)**
- Format `rapport-sectoriel-local` créé + propagé dans `/seo-audit`, `/create-article`, `/create-resource` + template `article-brief.md`
- Boucle de validation GEO T+7/T+30/T+90 documentée + squelette `geo-prompts.md` (bibliothèque de prompts cibles + journal de suivi)
- Trou de doc **`blog-preview.tsx` (legacy) → `blog-view.tsx` (vraie source `/blog`)** rebouché dans 9 fichiers `.claude/`

**Contenu publié (issu du playbook Anthropic + format rapport)**
- `rapport-adoption-ia-btp-francilien-2026` (1er test format rapport-sectoriel-local, schema Report)
- `ia-contradicteur-prompts-dirigeant-pme` (5 prompts, score GEO 9/10)
- `patron-goulot-paradoxe-ia-dirigeant-pme` (RICE 94, score GEO 9/10)
- `agent-ia-dirigeant-pme` (créé en // — FAQ + image OK vérifiés)
- Optims GEO : **TL;DR encadré + section FAQ + FAQPage JSON-LD** ajoutés sur articles #1 et #2 ; matrice signaux×actions sur #2
- `llms.txt` (15 articles, parité) + `llms-full.txt` (15/15 avec contenu complet) synchronisés
- sitemap.xml + news-sitemap.xml à jour

**Infra technique GEO**
- robots.txt durci : retrait `Sitemap: llms-full.txt` (invalide), ajout Googlebot + facebookexternalhit + Applebot-Extended + Amazonbot + DuckAssistBot + Google-CloudVertexBot, `meta-externalfetcher` → Allow (acté), `FacebookBot` retiré. Grille `seo-audit` Phase 6.1 réalignée 1:1 (commit `ae2b94c`)

**Chantier ENTITÉ (le vrai levier — capture LLM actuelle 0/3)**
- `founder` Organization relié au `@id` du Person riche (consolidation graphe)
- **GitHub** : profil [github.com/Pi3r2Dev](https://github.com/Pi3r2Dev) + 2 repos LIVE :
  - [claude-md-templates-pme](https://github.com/Pi3r2Dev/claude-md-templates-pme) (dans `d:\SourceFast\coolify_linux\`)
  - [prompts-dirigeant-pme](https://github.com/Pi3r2Dev/prompts-dirigeant-pme) (idem)
  - URL GitHub branchée dans `sameAs` Person + Organization + liens visibles page auteur
- **France Num Activateur** : demande soumise 2026-05-26, en attente DGE (textes de candidature : présentation 492c, offre de service, compétences perso 490c)
- Plan d'action entité complet : [docs/seo-audits/2026-05-22-plan-entite-geo.md](../seo-audits/2026-05-22-plan-entite-geo.md)

## Git state
- Branch: `main` (upstream: aucun configuré, mais `main` == `origin/main`, `+0/-0`)
- Uncommitted: 1 fichier (`.claude/settings.json` — hors périmètre session)
- Last commits: `f608233` feat(audit) + nouvel article ; `ae2b94c` chore(geo) robots+grille
- ⚠️ Les 2 repos GitHub vivent dans `d:\SourceFast\coolify_linux\` (hors repo site) — déjà poussés sur GitHub, pas de remote local à gérer côté site

## Test status
- Snapshot: `green` (site statique Next.js — `npm run build` vérifié green plusieurs fois dans la session, dernier 2026-05-26)
- Source: `next build` (pas de suite de tests unitaires — projet vitrine)

## Next concrete step
Le contenu + la technique sont à 9/10 ; **le mur restant est l'ENTITÉ** (0/3 capture ChatGPT, frein = reconnaissance d'autorité). Actions de reprise, par ordre :
1. **Finir les réglages GitHub manuels** (en cours côté user) : Description (textes 319c/269c), Topics, épingler les 2 repos, remplir README de profil `Pi3r2Dev/Pi3r2Dev`
2. **Alignement titre LinkedIn** exact = « Consultant IA & Transformation Digitale » (matcher `jobTitle` JSON-LD au mot près — effort quasi nul)
3. **Quand France Num validé** (mail DGE) : récupérer l'URL de fiche → l'ajouter aux `sameAs` Person + Organization + mention « Activateur France Num » visible sur page auteur
4. **Re-test T+7 le 2026-05-28** : tester les 3 requêtes de [geo-prompts.md](../seo-audits/2026-05-21-data/geo-prompts.md) sur ChatGPT Search / Perplexity / Gemini AI Mode, logger résultats
5. **Wikidata** (signal le plus fort) : une fois France Num + GitHub accumulés comme sources, créer le Q-item
6. **Article #3 en réserve** : « Rapport 4 phases de maturité IA PME » (RICE 75, brief prêt dans [docs/seo-briefs/2026-05-21-claude-playbook-briefs.md](../seo-briefs/2026-05-21-claude-playbook-briefs.md))

## Open decisions
- Aucune bloquante. Arbitrage `meta-externalfetcher` déjà tranché (Allow). Asymétrie CCBot vs Meta/ByteDance assumée et documentée.

## Blockers
- Aucun blocker technique. Les jalons entité (France Num, Wikidata) dépendent de **démarches externes** non automatisables — la balle est côté Pierre.

## How to resume
1. Lire ce doc + [plan entité](../seo-audits/2026-05-22-plan-entite-geo.md) (source de vérité du chantier en cours)
2. Vérifier l'état des jalons entité : France Num validé ? (→ brancher sameAs) · réglages GitHub finis ? · LinkedIn aligné ?
3. Consulter [geo-prompts.md](../seo-audits/2026-05-21-data/geo-prompts.md) pour le re-test T+7/T+30 dû
4. Si rien d'externe n'a bougé : produire l'article #3 (brief prêt) pour entretenir la cadence éditoriale
