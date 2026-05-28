# ADR 0004 — Migration crawl4ai → Firecrawl VPS IONOS

**Date :** 2026-05-28  
**Statut :** accepté (cutover docs + MCP ; retrait crawl4ai Coolify en attente)

## Contexte

- **crawl4ai** sur Coolify consommait **>1 core** (109,9 % CPU) sur un host 2 cores déjà saturé (load ~5,8, swap 8 Go).
- **Firecrawl self-hosted** déployé et validé sur VPS IONOS 4-4-120 (`82.165.179.182`) le 2026-05-27.
- crawl4ai servait **ouquequoi**, **app.augmenter.pro** et le **MCP dev** (`crawl4ai.augmenter.pro`).

## Décision

Remplacer crawl4ai par **Firecrawl self-hosted sur VPS IONOS**, joignable :

| Contexte | URL |
|----------|-----|
| Prod Coolify (WireGuard) | `http://10.10.0.1:3002` |
| Dev Cursor (Caddy + basic-auth) | `https://firecrawl-test.augmenter.pro` |

API : `POST /v2/scrape` · pas d'API key · MCP `firecrawl-mcp` avec `FIRECRAWL_API_URL`.

## Conséquences

- **site.augmenter.pro** : CLAUDE.md, commandes SEO, MCP settings → Firecrawl (fait 2026-05-28).
- **ouquequoi** : flip worker `CRAWLER_BACKEND=firecrawl` + `FIRECRAWL_URL=http://10.10.0.1:3002` (action Coolify).
- **app.augmenter.pro** : repointer `FirecrawlProvider` du SaaS vers le VPS.
- **Retrait crawl4ai Coolify** : après cutover des 3 consommateurs → libère ~1 core + RAM.

## Références

- Infra : [`unified-infrastructure/docs/VPS_IONOS.md`](../../../unified-infrastructure/docs/VPS_IONOS.md)
- Stack : [`unified-infrastructure/vps-ionos-firecrawl/`](../../../unified-infrastructure/vps-ionos-firecrawl/)
- Session : [`unified-infrastructure/docs/sessions/2026-05-26-ouquequoi-vps-ionos.md`](../../../unified-infrastructure/docs/sessions/2026-05-26-ouquequoi-vps-ionos.md)
