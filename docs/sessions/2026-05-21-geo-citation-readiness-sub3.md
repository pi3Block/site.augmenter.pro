---
date: 2026-05-21
slug: geo-citation-readiness-sub3
status: closed
mode: solo
parent_session: 2026-05-21-geo-citation-readiness.md
tags: [seo, geo, llm-citation, llms-txt, llmstxt-org]
---

# llms-full.txt — version étendue indexable LLM (sub-task #3 du tracker GEO)

## Status
green — livrable complet, prêt à committer.

## Done in this session

### 1. Génération de `public/llms-full.txt`
> **Note 2026-05-28** : le crawler opérationnel est désormais **Firecrawl VPS IONOS** (remplace crawl4ai). Voir [ADR 0004](../decisions/0004-firecrawl-ionos-migration.md).

- Récupération du contenu rendu de **23 pages indexables** via Firecrawl self-hosted (`POST https://firecrawl-test.augmenter.pro/v2/scrape` avec `formats: ["markdown"]`) en parallèle :
  - 11 pages principales : `/`, `/strategie-ia-pme`, `/approche`, `/integration-mcp`, `/audit-informatique-yvelines`, `/audit-informatique-val-doise`, `/idees`, `/prompts`, `/projets`, `/blog`, `/contact`
  - 12 articles de blog (tous ceux listés dans le sitemap)
- Pages **exclues volontairement** : `/mentions-legales`, `/politique-confidentialite`, `/cgv` (peu de valeur d'ingestion LLM, faible probabilité de citation, conforme à l'arbitrage proposé dans la brief).
- Pipeline de cleanup (script ad-hoc Node, supprimé après usage) :
  - Décodage HTML entities (`&apos;` → `'`, `&amp;` → `&`, `&laquo;` → `«`, etc.)
  - Strip du nav (tout ce qui précède le premier `# ` H1) et du footer (à partir de la signature `[augmenter.PRO](https://augmenter.pro/)` + `Boostez votre potentiel…`)
  - Normalisation des URLs d'images : `/_next/image?url=%2Fimages%2F...&w=...&q=...` → `https://augmenter.pro/images/...`
  - Collapse des blanklines successives (≥ 3 → 2)
- Structure du fichier :
  - Header avec lien vers [llmstxt.org](https://llmstxt.org/), date de génération `2026-05-21`, identification de l'auteur du site
  - Index ordonné (23 entrées avec titre lisible + URL absolue + dateModified ISO 8601)
  - Bloc par page : `## <URL absolue>` + `dateModified: YYYY-MM-DD` + corps markdown clean + séparateur `---`
- **Taille finale : 172 KB (2 061 lignes)** — très en-deçà de la limite de 5 MB → pas besoin de splitter en `llms-full-services.txt` / `llms-full-blog.txt`.

### 2. Mise à jour de `public/llms.txt`
- Ajout d'une section finale **« Version étendue pour LLM »** après la liste des pages, pointant vers `https://augmenter.pro/llms-full.txt` avec mention de la conformité au standard llmstxt.org.

### 3. Mise à jour de `public/robots.txt`
- Ajout d'un bloc `# --- LLM ingestion (standard llmstxt.org) ---` avec `Sitemap: https://augmenter.pro/llms-full.txt` après les sitemaps XML existants.
- Coordination avec sub-task #1 : les directives bots IA étaient **déjà mergées** (10 bots Allow + 3 Disallow, cf. handoff sub1), je n'y touche pas — j'ajoute uniquement la ligne `Sitemap:` pour `llms-full.txt`.
- Note : `Sitemap:` n'est pas sémantiquement un sitemap XML, mais c'est le format recommandé par la check-list §G.4 et la convention émergente (cf. [seo-audit.md §6.6.2](../../.claude/commands/seo-audit.md)). Commentaire explicatif ajouté dans le fichier.

### 4. Validation
- `npm run build` : ✅ succès. Toutes les routes générées (5 légales + 12 articles + 7 pages principales). Aucune erreur ni warning lié aux changements.
- Vérifications du contenu de `llms-full.txt` :
  - 23 occurrences de `## https://augmenter.pro` (tous les blocs page présents) ✅
  - 0 entité HTML résiduelle (`&apos;`, `&amp;`, `&hellip;`…) ✅
  - 0 URL Next.js image cassée (`_next/image`) ✅

## Files touched

| Fichier | Action | Notes |
|---------|--------|-------|
| [public/llms-full.txt](../../public/llms-full.txt) | **créé** | 172 KB, 2 061 lignes, 23 pages |
| [public/llms.txt](../../public/llms.txt) | modifié | +5 lignes (section « Version étendue pour LLM ») |
| [public/robots.txt](../../public/robots.txt) | modifié | +4 lignes (Sitemap llms-full.txt + commentaire) |

## Git state
- Branch: `main` (upstream: aucun)
- Diverge from main: hérite de l'état du parent + ces 3 fichiers
- Uncommitted: parent (~18 fichiers) + `public/llms-full.txt` (nouveau, untracked) + `public/llms.txt` (modifié) + `public/robots.txt` (modifié)
- Last commit: `a99e2d6` « Update links in documentation and templates for consistency and clarity » (inchangé)

## Test status
- Snapshot: **green** — `npm run build` passé sans erreur. Fichiers statiques dans `public/` servis directement par Next.js, aucun impact sur le rendu des pages.
- Pas de tests unitaires applicables (fichiers texte statiques).
- Validation manuelle du contenu : OK (cf. checks §4).

## Next concrete step

1. **Orchestrateur** : lire ce doc, marquer la sub-task #3 `completed` dans le tracker parent [2026-05-21-geo-citation-readiness.md](2026-05-21-geo-citation-readiness.md).
2. Si toutes les sub-tasks (#1, #2, #3) sont fermées, regrouper les commits en thématique (cf. parent §Open decisions) et déployer.
3. Après déploiement, valider en prod :
   - `curl -s https://augmenter.pro/llms-full.txt | head -50` (doit retourner le header + l'index)
   - `curl -s -A "GPTBot/1.0" https://augmenter.pro/llms-full.txt | wc -c` (doit retourner ~176000 octets)
   - Vérifier que `robots.txt` annonce bien le nouveau sitemap : `curl -s https://augmenter.pro/robots.txt | grep llms-full`
4. (Suggestion suite, hors scope ici) : Évaluer la valeur d'un script `scripts/generate-llms-full.ts` exécuté à chaque ajout d'article ou en post-build. Pour 23 pages mises à jour ~1×/mois, le ROI semble bas. À reposer lors du prochain `/seo-audit` ou si le volume d'articles dépasse 30.

## Open decisions

- **Pages légales exclues** (`/mentions-legales`, `/politique-confidentialite`, `/cgv`) : décision prise dans la brief comme « optionnellement exclues ». À reconsidérer si un LLM se met à citer du contenu RGPD/CGV de manière non-pertinente (peu probable, mais à monitorer dans les futurs `/seo-audit` Phase 6.3 tests directs).
- **Mise à jour automatique de `llms-full.txt`** : aujourd'hui statique, généré ad-hoc. Si une cadence régulière d'articles s'installe (≥ 1/semaine), proposer un script de génération + un hook post-`/create-article` qui ré-extrait l'article ajouté et le concatène. Non urgent.
- **Sitemap d'images** : pas inclus dans `llms-full.txt` (seuls les `![alt](url)` markdown subsistent, ce qui est suffisant pour citation). Si Google AI Overviews cite des images plus tard, à revoir.

## Blockers
Aucun.

## How to resume

Cette sub-task est `closed`. Reprise pertinente uniquement si :
- (a) Une étude post-déploiement révèle des problèmes de citation (LLM ne pioche pas dans `llms-full.txt`) → enrichir le contenu pour pages stratégiques avec plus de signaux de citation (cf. checklist §G.5 « Citation triggers »).
- (b) De nouveaux articles sont publiés → relancer la génération du fichier via Firecrawl + cleanup ; pipeline reproductible (commande dans cette doc §1).
- (c) La taille dépasse 5 MB après 50+ pages → splitter en `llms-full-services.txt` (pages services) + `llms-full-blog.txt` (articles) + index dans `llms-full.txt`.

Pour la sub-session parent : `/flow resume` → reprendra l'orchestration en marquant cette sub-task `completed`.

## Sub-tasks
N/A — sub-task atomique en mode solo.
