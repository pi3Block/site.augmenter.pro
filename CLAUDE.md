# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **augmenter.pro** — an AI consulting and digital transformation agency targeting French SMEs. All content is in French. Deployed as a Node.js app on Hostinger (via GitHub integration).

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

### Google Tag Manager (GTM)

- Intégration via `@next/third-parties/google` dans `src/app/layout.tsx`.
- **Variable d'environnement** : `NEXT_PUBLIC_GTM_ID` (ex. `GTM-XXXXXXX`). Si non définie, GTM n'est pas chargé (pratique en dev local).
- Pour envoyer des événements depuis un composant client : `import { sendGTMEvent } from "@next/third-parties/google"` puis `sendGTMEvent({ event: "nom", ... })`.
- Vérifier l'installation avec l’extension [Tag Assistant](https://tagassistant.google.com/) (Chrome).

### SEO Conventions

- Every page **must** export `metadata: Metadata` with optimized `title` (< 60 chars) and `description` (< 155 chars)
- Meta titles should include **power words** (Gratuit, Guide, 2026) and **geo-targeting** (78/95, Yvelines, Val d'Oise)
- Layout template: `"%s | augmenter.PRO"` — page titles are appended automatically
- Blog articles pass `slug` prop to `ArticleLayout` for canonical URL in Article schema

### Adding a New Blog Article

Use `/create-article <sujet>` or follow this manual process:

1. Create `src/app/blog/<slug>/page.tsx` using `ArticleLayout` wrapper
2. Export `metadata: Metadata` with SEO-optimized title & description
3. Pass `slug="<slug>"` to `ArticleLayout` for JSON-LD canonical URL
4. Add the article entry to `src/components/sections/blog-preview.tsx` (first position in `articles` array)
5. Add the URL to `public/sitemap.xml`
6. Add the article to `public/llms.txt` in the blog section
7. Run `npm run build` to verify

## Key Constraints

- **All page data is inline** — articles, testimonials, pricing, ideas are hardcoded in their respective components
- **Client components** must use `"use client"` directive (required for framer-motion, interactive forms, mobile menu)
- **Client components cannot export metadata** — if a page needs `"use client"`, split it: server component page.tsx (metadata) + client component (UI). See `/contact` as example.
- **Blog articles** use static directory-based routes (not dynamic `[slug]`), each article is a separate `src/app/blog/<slug>/page.tsx`
- **llms.txt and sitemap.xml must be updated** when adding new pages or articles
- **JSON-LD structured data** should be added to any new page with indexable content
