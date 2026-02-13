# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **augmenter.pro** — an AI consulting and digital transformation agency targeting French SMEs. All content is in French. Deployed as a Node.js app on Hostinger (via GitHub integration).

## Web Crawling

**Priorité : crawl4ai self-hosted** (`https://crawl4ai.augmenter.pro`)
- Endpoint principal : `POST /md` avec `{"url": "...", "f": "raw"}`
- Endpoint complet : `POST /crawl` avec `{"urls": ["..."]}`
- Ne PAS utiliser firecrawl — préférer toujours crawl4ai self-hosted
- Si le MCP crawl4ai est connecté, utiliser les outils MCP (`mcp__crawl4ai__md`, etc.)
- Sinon, appeler l'API REST directement via curl

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build (Node.js standalone server)
npm run start     # Start production server
npm run lint      # ESLint
```

### Custom Claude Commands

```
/create-article <sujet>   # Créer un article SEO (recherche, rédaction, intégration)
/seo-audit                 # Audit SEO complet (crawl site + concurrents, plan d'action)
/security-audit            # Audit sécurité (OWASP, headers, RGPD)
/doc-audit                 # Audit documentation (CLAUDE.md, code, metadata)
/debt-report               # Rapport dette technique (architecture, TS, deps, build)
```

## Tech Stack

- **Next.js 16** (App Router) — `output: "standalone"`, deployed as Node.js app on Hostinger
- **React 19** with RSC
- **TypeScript 5** (strict mode)
- **Tailwind CSS 4** with OKLCH color space and CSS variables
- **shadcn/ui** (new-york style, lucide icons) — config in `components.json`
- **Framer Motion** for animations (client components only)
- **Radix UI** primitives via shadcn

## Architecture

**Path alias:** `@/*` maps to `src/*`

### Routing (App Router)

- `/` — Homepage composing 9 section components (Hero, Trust, Services, Approach, Pricing, Ideas, Testimonials, BlogPreview, CTA)
- `/approche` — 4-pillar approach detail + FAQ (with FAQ JSON-LD schema)
- `/blog` — Article listing
- `/blog/<slug>` — Individual articles (each slug has its own directory under `src/app/blog/`)
- `/contact` — Contact form (server component page.tsx + client component contact-form.tsx)
- `/idees` — Business ideas showcase
- `/prestations` — Services & pricing (with Service/Offer JSON-LD schema)
- `/mentions-legales` — Legal page

### Component Organization

- `src/components/sections/` — Page-level section components (hero, services, pricing, etc.)
- `src/components/layout/` — Header (fixed navbar + mobile sheet), Footer, ArticleLayout (blog wrapper with Article JSON-LD)
- `src/components/ui/` — shadcn/ui primitives (accordion, badge, button, card, navigation-menu, separator, sheet)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### Styling

- Color palette: violet primary, amber accent, neutral base — all defined as CSS custom properties in `globals.css`
- Custom utilities: `.gradient-text` (violet→amber), `.hero-gradient` (radial background)
- Dark mode supported via `.dark` class

### Images

All images are stored in `public/images/` with the following structure:

```
public/images/
  blog/          ← illustrations d'articles (thumbnail, hero)
  services/      ← visuels des prestations
  team/          ← photos de l'équipe
  general/       ← images génériques (hero, backgrounds, logos partenaires)
```

**Conventions obligatoires :**

- **Format** : WebP uniquement (meilleur ratio qualité/poids). Convertir les PNG/JPG avant ajout.
- **Nommage** : kebab-case, descriptif — ex. `audit-seo-pme.webp`, pas `img1.webp`
- **Dimensions** : fournir l'image à la taille max d'affichage (pas de 4000px pour un thumbnail 400px)
- **Poids** : viser < 100 Ko pour les thumbnails, < 300 Ko pour les hero/bannières
- **Composant** : toujours utiliser `<Image>` de `next/image` (optimisation auto, lazy loading, responsive)
  ```tsx
  import Image from "next/image";
  <Image src="/images/blog/mon-article.webp" alt="Description en français" width={800} height={400} />
  ```
- **Alt text** : toujours renseigner un `alt` descriptif en français (SEO + accessibilité)
- **Priorité** : ajouter `priority` uniquement sur les images above-the-fold (hero, LCP)
- **Blog** : nommer l'image du même slug que l'article — ex. article `audit-seo-gratuit` → `blog/audit-seo-gratuit.webp`
- **INDEX.md** : chaque sous-dossier d'images doit contenir un fichier `INDEX.md` décrivant textuellement chaque image (type, description visuelle, contexte éditorial, usage suggéré, alt text suggéré). Ce fichier sert de référence pour les LLM et pour maintenir la cohérence des alt texts.

## SEO & LLM Optimization

### Structured Data (JSON-LD)

The site uses Schema.org structured data for SEO and LLM discoverability:

| Schema | Location | Purpose |
|--------|----------|---------|
| Organization + LocalBusiness + WebSite | `src/app/layout.tsx` | Global identity, geo-targeting (78/95), contact, social links |
| Article | `src/components/layout/article-layout.tsx` | Each blog post (author, publisher, tags, URL) |
| FAQPage | `src/app/approche/page.tsx` | FAQ section → Google "People Also Ask" |
| Service + OfferCatalog | `src/app/prestations/page.tsx` | 5 services with pricing (0€ and 225€) |
| AggregateRating + Review | `src/components/sections/testimonials.tsx` | Star ratings in Google results |

### LLM/GEO Files

- `public/llms.txt` — Machine-readable site summary for LLM crawlers (Perplexity, ChatGPT, Claude)
- `public/robots.txt` — Crawler directives + sitemap reference
- `public/sitemap.xml` — All 12 URLs with priorities and change frequencies

### Google Tag Manager (GTM) — GA4 et événements

- Intégration via `@next/third-parties/google` dans `src/app/layout.tsx`. **GA4 est déployé via GTM** (pas de balise GA directe dans le code).
- **Variable** : `NEXT_PUBLIC_GTM_ID` (ex. `GTM-XXXXXXX`). Si non définie, GTM n'est pas chargé (pratique en dev local).
- **Événements** : depuis un composant client, `import { sendGTMEvent } from "@next/third-parties/google"` puis `sendGTMEvent({ event: "nom", ... })`. Les événements sont reçus par GTM puis renvoyés vers GA4 si tu configures les balises/triggers (voir guide ci-dessous).
- Vérifier l'installation avec l’extension [Tag Assistant](https://tagassistant.google.com/) (Chrome).

#### Déployer GA4 via GTM (mesure du comportement)

1. **GTM** → **Balises** → **Nouvelle** → **Configuration Google Analytics : GA4**.
2. **ID de mesure** : ton ID GA4 (format `G-XXXXXXXXXX`, trouvable dans GA4 → Admin → Flux de données → Web).
3. **Déclenchement** : **Toutes les pages** (pour les pages vues).
4. Nommer la balise (ex. `GA4 - Configuration`) → **Enregistrer**.

#### Configurer les événements dans GA4 (via GTM)

- Le site envoie déjà l’événement `contact_form_submit` au dataLayer (formulaire contact). Pour qu’il remonte dans GA4 :
  1. **GTM** → **Déclencheurs** → **Nouveau** → **Événement personnalisé** → Nom de l’événement : `contact_form_submit` → Enregistrer.
  2. **GTM** → **Balises** → **Nouvelle** → **Google Analytics : GA4 – Événement** → Sélectionner la même **Configuration GA4** que ci-dessus → Nom de l’événement : `contact_form_submit` (ou `generate_lead`) → Déclenchement : le déclencheur créé à l’étape 1 → Enregistrer.
- **Lecture article** : le site envoie `lecture_article` avec `article_slug`, `article_title`, `article_read_time` (composant `ArticleReadEvent` dans `ArticleLayout`). Dans GTM : déclencheur « Événement personnalisé » sur `lecture_article`, puis balise GA4 Événement avec le même nom (ou `article_view`) et paramètres optionnels (article_slug, article_title).
- Pour d’autres événements (ex. clic « Devis », téléchargement guide) : ajouter `sendGTMEvent({ event: "nom_event", ... })` dans le code au bon endroit, puis créer dans GTM un déclencheur « Événement personnalisé » sur ce nom et une balise GA4 Événement associée.
- Dans **GA4** → **Rapports** → **Engagement** → **Événements**, tu verras tes événements (et tu pourras marquer `contact_form_submit` ou `generate_lead` comme **conversion** dans Admin → Événements → bascule « Marquer comme conversion »).

### MCP SEO Tools (optionnels)

Si configurés, ces MCP servers fournissent des données SEO réelles aux commandes `/create-article`, `/create-resource` et `/seo-audit` :

| MCP Server | Données | Usage |
|------------|---------|-------|
| **DataForSEO** (`dfs-mcp`) | Volumes de recherche, difficulté, SERP, concurrents | Recherche de mots-clés, analyse concurrentielle |
| **Google Search Console** (`google-search-console`) | Clics, impressions, CTR, positions | Performance réelle des pages, quick wins |

Les commandes fonctionnent sans ces MCP (fallback sur recherche web), mais les données sont **beaucoup plus fiables** avec.

**Vérifier la disponibilité** : Si un outil MCP échoue ou n'est pas configuré, basculer sur la recherche web comme fallback.

### SEO Conventions

- Every page **must** export `metadata: Metadata` with optimized `title` (< 60 chars) and `description` (< 155 chars)
- Meta titles should include **power words** (Gratuit, Guide, 2026) and **geo-targeting** (78/95, Yvelines, Val d'Oise)
- Layout template: `"%s | augmenter.PRO"` — page titles are appended automatically
- Blog articles pass `slug` prop to `ArticleLayout` for canonical URL in Article schema
- When MCP SEO tools are available (DataForSEO, GSC), always prefer real data over web search estimates for keyword research and performance analysis

### Qualité de Contenu & E-E-A-T

augmenter.pro est un site de conseil (décisions financières pour PME) — Google applique un standard E-E-A-T élevé (domaine YMYL). Toute page publiée doit respecter ces principes.

#### Identité éditoriale (Qui, Comment, Pourquoi)

- **Qui** : Pierre Legrand, consultant IA & transformation digitale. Chaque article est publié sous son nom (JSON-LD `author` dans `article-layout.tsx`).
- **Comment** : Le contenu est rédigé avec l'assistance d'outils IA et révisé par Pierre Legrand. Ne jamais prétendre que le contenu est 100% humain si ce n'est pas le cas.
- **Pourquoi** : Le contenu existe pour aider les PME à prendre des décisions éclairées, pas pour générer du trafic. Si un sujet ne sert pas l'audience cible (PME BTP/immobilier/industrie en 78/95), ne pas le traiter.

#### E-E-A-T — Critères obligatoires

| Signal | Exigence | Vérification |
|--------|----------|--------------|
| **Experience** | ≥ 1 exemple terrain issu de missions réelles ou d'observations directes du secteur local | L'article contient un passage concret (cas client anonymisé, observation 78/95) |
| **Expertise** | Analyse approfondie, pas de reformulation superficielle des sources existantes | Chaque section apporte un angle, un avis ou une méthodologie originale |
| **Autorité** | Credentials naturellement intégrées (expérience sectorielle, résultats clients) | Le contexte augmenter.PRO est mentionné sans être forcé |
| **Fiabilité** | Données chiffrées sourcées, conseils prudents, limites mentionnées | Aucune affirmation sans source ; au moins 1 nuance/limite par article |

#### Contenu People-First — Règles

1. **Test du lecteur** : Après lecture, le dirigeant PME doit pouvoir **agir concrètement** (checklist, étapes, décision éclairée). Si le contenu ne change rien pour lui → manque de valeur.
2. **Valeur ajoutée** : Chaque page doit apporter quelque chose **absent des 5 premiers résultats Google** — angle unique, donnée originale, méthodologie propre, ou expérience terrain.
3. **Pas de contenu SEO-first** : Ne jamais écrire un article JUSTE parce qu'un mot-clé a du volume. Le sujet doit croiser expertise réelle + besoin réel de l'audience.
4. **Périmètre de compétence** : Rester dans le périmètre IA/digital/audit/transformation pour PME. Ne pas chasser des sujets trending hors expertise.
5. **Anti-patterns interdits** :
   - Reformuler le contenu concurrent sans valeur ajoutée
   - Cibler un nombre de mots arbitraire (la longueur découle du sujet, pas l'inverse)
   - Ajouter des "mises à jour" cosmétiques pour simuler la fraîcheur
   - Multiplier les articles sur des variantes mineures d'un même sujet

### Adding a New Blog Article

Use `/create-article <sujet>` or follow this manual process:

1. Create `src/app/blog/<slug>/page.tsx` using `ArticleLayout` wrapper
2. Export `metadata: Metadata` with SEO-optimized title & description
3. Pass `slug="<slug>"` to `ArticleLayout` for JSON-LD canonical URL
4. Pass `dateISO` (ISO 8601) and `dateModified` props to `ArticleLayout`
5. Add image `public/images/blog/<slug>.webp` (WebP, 16:9, < 300 Ko) and pass `image="/images/blog/<slug>.webp"` prop
6. Update `public/images/blog/INDEX.md` with the new image description (type, dimensions, poids, description, contexte, alt text)
7. Add the article entry to `src/components/sections/blog-preview.tsx` (first position in `articles` array)
8. Add the URL to `public/sitemap.xml` (with `<lastmod>` in ISO 8601)
9. Add the article to `public/news-sitemap.xml`
10. Add the article to `public/llms.txt` in the blog section
11. Run `npm run build` to verify

## Key Constraints

- **All page data is inline** — articles, testimonials, pricing, ideas are hardcoded in their respective components
- **Client components** must use `"use client"` directive (required for framer-motion, interactive forms, mobile menu)
- **Client components cannot export metadata** — if a page needs `"use client"`, split it: server component page.tsx (metadata) + client component (UI). See `/contact` as example.
- **Blog articles** use static directory-based routes (not dynamic `[slug]`), each article is a separate `src/app/blog/<slug>/page.tsx`
- **llms.txt and sitemap.xml must be updated** when adding new pages or articles
- **JSON-LD structured data** should be added to any new page with indexable content
