# Contexte projet — augmenter.pro

Fichier de référence partagé par toutes les commandes SEO (`/seo-audit`, `/create-article`, `/create-resource`, `/modify-resource`). Centralise positionnement, audience, contraintes éditoriales et modalités opérationnelles. **À lire en premier** par toute commande qui produit du contenu pour le site.

## Positionnement

**augmenter.pro** est le site vitrine d'une agence de conseil IA & transformation digitale pour PME françaises. Objectif : acquisition organique de leads qualifiés via SEO local, thématique et GEO (moteurs IA génératifs).

## Stack technique

- **Next.js 16** (App Router) — `output: "standalone"`, déployé comme app Node.js sur Hostinger via GitHub
- **React 19** avec RSC
- **TypeScript 5** strict
- **Tailwind CSS 4** (OKLCH, CSS variables) + **shadcn/ui** (style new-york, lucide icons)
- **Framer Motion** (client components uniquement — `"use client"` requis)
- **GTM + GA4** via `@next/third-parties/google`, variable `NEXT_PUBLIC_GTM_ID`
- Path alias : `@/*` → `src/*`

## Stack SEO/LLM en place

- **JSON-LD** : Organization + LocalBusiness + WebSite (layout.tsx), Article (article-layout.tsx), FAQPage (approche), Service + OfferCatalog (prestations), AggregateRating + Review (testimonials)
- **llms.txt** : `public/llms.txt` pour crawlers LLM (Perplexity, ChatGPT, Claude)
- **robots.txt** + **sitemap.xml** + **news-sitemap.xml** dans `public/`
- **Events GA4** : `contact_form_submit` (formulaire), `lecture_article` (via `ArticleReadEvent` dans `ArticleLayout`)
- Meta titles optimisés avec power words et géo-ciblage **si** pertinent (voir section Audience)

## Audience & modalités géographiques

augmenter.PRO sert des **PME françaises** (BTP, immobilier, industrie, artisans, commerces). La zone géographique doit être nuancée selon les modalités d'intervention :

| Modalité | Zone | Implication SEO |
|---|---|---|
| **Formation en présentiel** | Yvelines (78) et Val d'Oise (95) | Focus SEO local : requêtes géolocalisées, LocalBusiness schema, pages villes si volumes (Versailles, Saint-Germain-en-Laye, Cergy-Pontoise…) |
| **Visio / appel téléphonique** | Toute la France | SEO national thématique : pages service et articles doivent cibler un marché national, **pas** uniquement 78/95 |
| **Déplacements pour gros projets** | National (selon enveloppe budgétaire) | Rassurance à l'échelle France sur les pages commerciales |

### Règles de ciblage géographique

- Le 78/95 est un **ancrage de crédibilité** (implantation, cas clients, presse locale), **pas une exclusivité commerciale**
- Ne **pas** restreindre systématiquement le copy à « PME en Yvelines » — cela exclurait le marché national adressable en visio
- Pour un contenu à intent **informational / commercial national** → formuler « PME française », « dirigeant PME »
- Pour un contenu à intent **local** (formation présentielle, intervention sur site) → géo-ciblage 78/95 explicite (villes précises)
- Les **études de cas** peuvent rester 78/95 pour l'ancrage local, mais mentionner la disponibilité nationale en conclusion
- JSON-LD `LocalBusiness` reste valable (adresse 78/95) mais `areaServed` doit inclure la France (ou Île-de-France + zones d'intervention visio)

### Anti-patterns à éviter

- ❌ « Consultant IA PME Yvelines » comme titre d'article qui adresse un besoin national
- ❌ « Nos missions en Val d'Oise » dans une page prestations cherchant à convertir toute la France
- ✅ « Consultant IA PME — accompagnement en visio partout en France, présentiel 78/95 »
- ✅ Études de cas : « Une PME immobilière de Saint-Germain-en-Laye (78) a… » (récit local) + « Disponible en visio pour toute la France » (CTA)

## Pyramide d'offres (synthèse)

| Palier | Prix | Format | Zone | Cible |
|---|---|---|---|---|
| Lead magnet | 0 € | PDF / check-list / outil | National | Tout prospect |
| Audit 180° offert | 0 € | 60 min visio | **France entière** | Premier contact qualifié |
| Audit 360° IA Booster | 225 € | 1 demi-journée | Visio ou présentiel 78/95 | Dirigeant prêt à investir |
| Prestations sur mesure | sur devis | Projet dédié | National (déplacements gros projets) | Missions spécifiques |

Détails + paliers potentiels supplémentaires : voir [`service-card.md`](service-card.md).

## Contraintes éditoriales

1. **Mot « gratuit » interdit** — utiliser « offert », « sans engagement », « inclus », « sans CB », « 0 € »
2. **Ton provocateur** — parler aux douleurs PME, pas de SEO corporate lisse
   - ✅ « ChatGPT dans votre PME : 3 chantiers utiles, 5 pièges qui coûtent cher »
   - ❌ « Les avantages de l'IA pour les PME »
3. **People-first** : après lecture, le dirigeant PME doit pouvoir **agir concrètement**
4. **Pas de contenu SEO-first** : ne jamais écrire un article JUSTE parce qu'un mot-clé a du volume
5. **Périmètre** : rester dans IA / digital / audit / transformation pour PME. Pas de sujets trending hors expertise
6. **E-E-A-T élevé** (YMYL adjacent — décisions financières) : chaque page importante doit passer la grille [`eeat-grid.md`](eeat-grid.md) (objectif ≥ 15/20)

## Identité éditoriale

- **Auteur** : Pierre Legrand, consultant IA & transformation digitale
- **Publication** : contenu assisté par IA et **révisé par Pierre Legrand** — ne jamais prétendre que le contenu est 100 % humain
- **Pourquoi** : aider les PME à prendre des décisions éclairées, pas générer du trafic pour générer du trafic. Si un sujet ne sert pas l'audience cible (PME française avec douleurs IA/digital/audit), ne pas le traiter

## Conventions de code (rappels utiles)

- **Server components par défaut** — `"use client"` uniquement si nécessaire (framer-motion, state interactif)
- **Pages à `"use client"`** : split server/client (page.tsx + `<name>-client.tsx`) pour permettre `export const metadata`
- **Articles de blog** : route statique `src/app/blog/<slug>/page.tsx`, wrapper `<ArticleLayout slug="<slug>">`
- **Images** : WebP uniquement, `public/images/<catégorie>/<slug>.webp`, alt en français, composant `<Image>` de `next/image`
- **À jour à chaque ajout** : `sitemap.xml`, `news-sitemap.xml` (articles), `llms.txt`, `blog-preview.tsx`
