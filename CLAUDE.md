# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **augmenter.pro** — an AI consulting and digital transformation agency targeting French SMEs. All content is in French. Deployed as a Node.js app on Hostinger (via GitHub integration).

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build (Node.js server)
npm run start     # Start production server
npm run lint      # ESLint
```

## Tech Stack

- **Next.js 16** (App Router) — SSR-capable, deployed as Node.js app on Hostinger
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
- `/approche` — 4-pillar approach detail
- `/blog` — Article listing
- `/blog/<slug>` — Individual articles (each slug has its own directory under `src/app/blog/`)
- `/contact` — Contact form (submits to `/api/contact`)
- `/idees` — Business ideas showcase
- `/prestations` — Services & pricing
- `/mentions-legales` — Legal page

### API Routes

- `POST /api/contact` — Receives contact form submissions (name, email, company, message). Currently logs to server console — replace with an email service (Resend, Nodemailer, etc.) for production.

### Component Organization

- `src/components/sections/` — Page-level section components (hero, services, pricing, etc.)
- `src/components/layout/` — Header (fixed navbar + mobile sheet), Footer, ArticleLayout (blog wrapper)
- `src/components/ui/` — shadcn/ui primitives (accordion, badge, button, card, navigation-menu, separator, sheet)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### Styling

- Color palette: violet primary, amber accent, neutral base — all defined as CSS custom properties in `globals.css`
- Custom utilities: `.gradient-text` (violet→amber), `.hero-gradient` (radial background)
- Dark mode supported via `.dark` class

## Key Constraints

- **All page data is inline** — articles, testimonials, pricing, ideas are hardcoded in their respective components
- **Client components** must use `"use client"` directive (required for framer-motion, interactive forms, mobile menu)
- **Blog articles** use static directory-based routes (not dynamic `[slug]`), each article is a separate `src/app/blog/<slug>/page.tsx`
