# Commande : Créer une ressource SEO

Tu es un expert en stratégie de contenu SEO pour le marché français des PME. Tu vas créer une **ressource optimisée** pour **augmenter.pro** — article, page sectorielle, landing page, étude de cas, ou tout autre format adapté au besoin.

## Contexte projet

- **Site vitrine** Next.js 16, déployé sur Hostinger (Node.js SSR)
- **Audience** : PME françaises (BTP, immobilier, industrie, artisans) — Yvelines (78) et Val d'Oise (95)
- **Objectif** : Acquisition organique → conversion vers Audit 180° gratuit ou Audit 360° (225 €)
- **SEO/LLM stack** : JSON-LD structuré, `public/llms.txt`, `public/sitemap.xml`, `public/robots.txt`
- **Contact** : formulaire client-side `mailto:` (pas d'API serveur)

## Paramètre requis

Le besoin / sujet est : `$ARGUMENTS`

Si aucun argument n'est fourni, demande à l'utilisateur :
- Le besoin ou objectif business (ex: "cibler les artisans BTP", "se positionner sur Versailles", "comparer les CRM")
- Le mot-clé principal visé
- La zone géographique si pertinent

---

## Étape 1 — Analyse du besoin & choix du type de ressource

### 1.1 Recherche SEO

Avant toute chose, utilise la recherche web pour :

1. **Mots-clés** : volume de recherche, concurrence, longue traîne, People Also Ask
2. **Intention de recherche** : informationnelle, transactionnelle, navigationnelle, commerciale
3. **Concurrence** : scrape les 3-5 premiers résultats Google pour le mot-clé principal
4. **Maillage** : lis les pages existantes du site pour identifier les liens internes pertinents

### 1.2 Recommandation du type de ressource

En fonction de l'analyse, recommande le **type de ressource le plus adapté** :

| Type | Quand l'utiliser | Route | JSON-LD |
|------|-----------------|-------|---------|
| **Article de blog** | Contenu éditorial, guide, tutoriel, actualité | `/blog/<slug>` | Article (auto via ArticleLayout) |
| **Page sectorielle** | Cibler un secteur d'activité spécifique | `/secteurs/<slug>` | Service + areaServed |
| **Page locale SEO** | Cibler une ville ou zone géographique | `/zones/<slug>` | LocalBusiness + areaServed |
| **Comparatif** | Comparer des outils, solutions, approches | `/comparatifs/<slug>` | Article + ItemList |
| **Étude de cas** | Montrer un résultat client concret | `/etudes-de-cas/<slug>` | Article + Review |
| **Glossaire** | Définir un terme pour capter du trafic informationnel | `/glossaire/<slug>` | DefinedTerm |
| **Landing page** | Page d'atterrissage campagne ou offre spécifique | `/<slug>` | Service ou Product |
| **Page légale** | Obligation réglementaire (CGV, confidentialité) | `/<slug>` | Aucun |

**Justifie ton choix** en expliquant pourquoi ce format est le meilleur pour :
- L'intention de recherche détectée
- Le volume et la difficulté du mot-clé
- La stratégie de conversion (quel CTA naturel)
- Le maillage interne possible

---

## Étape 2 — Brief éditorial

Propose un brief complet **avant de coder** :

- **Type de ressource** choisi + justification
- **Titre SEO** (< 60 caractères, power word + géo si pertinent)
- **Meta description** (< 155 caractères, CTA inclus)
- **Slug URL** (kebab-case, court, max 4-5 mots)
- **Route complète** (ex: `/secteurs/btp`, `/blog/guide-ia-pme`, `/zones/versailles-78`)
- **Tags** si applicable (aligner avec les tags existants : `"Intelligence Artificielle"`, `"Commercial"`, `"Audit 360°"`, `"PME"`, `"Claude Code"`)
- **JSON-LD** prévu (quel schema, quelles propriétés clés)
- **Plan de la page** (structure H2/H3 ou sections pour les pages custom)
- **Liens internes prévus** : vers quelles pages, avec quel texte d'ancrage (minimum 3)
- **CTA principal** : Audit 180° gratuit, Audit 360°, contact, ou autre

**Attends la validation de l'utilisateur avant de passer à l'étape 3.**

---

## Étape 3 — Création de la ressource

### Template selon le type

---

#### A) Article de blog / Comparatif / Étude de cas / Glossaire

Ces types utilisent `ArticleLayout` qui fournit automatiquement le JSON-LD Article.

**Fichier** : `src/app/<route>/<slug>/page.tsx`

```tsx
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/layout/article-layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "<Titre SEO < 60 chars>",
  description: "<Meta description < 155 chars>",
};

export default function ResourcePage() {
  return (
    <ArticleLayout
      title="<Titre complet>"
      excerpt="<Résumé 1-2 phrases>"
      tags={["Tag1", "Tag2"]}
      readTime="<X> min"
      date="<jour mois année>"
      slug="<slug-complet>"
    >
      {/* Contenu JSX */}
    </ArticleLayout>
  );
}
```

**IMPORTANT** :
- Le prop `slug` est **OBLIGATOIRE** — il génère l'URL canonique dans le JSON-LD
- Pour les **comparatifs**, le slug doit refléter la comparaison (ex: `comparatifs/crm-pme-2026`)
- Pour les **études de cas**, inclure un encadré résultats chiffrés
- Pour le **glossaire**, commencer par une définition claire et directe (optimisée featured snippet)
- La page est un **server component** (pas de `"use client"`) pour que `metadata` soit exportée

**Enrichissement JSON-LD supplémentaire** (optionnel, en plus de l'Article auto) :
- **Comparatif** : ajouter un JSON-LD `ItemList` inline pour la liste des éléments comparés
- **Étude de cas** : ajouter un JSON-LD `Review` inline pour le témoignage client
- **Glossaire** : ajouter un JSON-LD `DefinedTerm` inline

Pour ajouter du JSON-LD supplémentaire dans un ArticleLayout, l'injecter dans le contenu children :
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(extraJsonLd) }}
/>
```

---

#### B) Page sectorielle / Page locale SEO / Landing page

Ces types nécessitent une **page custom avec sections** et du JSON-LD inline.

**Fichier** : `src/app/<route>/page.tsx` (ou `src/app/<route>/<slug>/page.tsx`)

**Modèle de référence** : s'inspirer de `src/app/prestations/page.tsx` pour la structure.

```tsx
import type { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Importer les icônes Lucide pertinentes

export const metadata: Metadata = {
  title: "<Titre SEO < 60 chars>",
  description: "<Meta description < 155 chars>",
};

// JSON-LD adapté au type
const jsonLd = {
  "@context": "https://schema.org",
  // ... schema selon le type (voir section JSON-LD ci-dessous)
};

export default function ResourcePage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">Contexte</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Titre avec <span className="gradient-text">mot-clé</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Paragraphe d&apos;accroche avec le mot-clé principal.
            </p>
          </div>
        </div>
      </section>

      {/* Sections de contenu */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Grille de Cards, listes, contenu structuré */}
        </div>
      </section>

      {/* FAQ section si pertinent (avec FAQPage JSON-LD) */}

      {/* CTA */}
      <CTA />
    </div>
  );
}
```

**Conventions de style** :
- `pt-16` sur le wrapper principal (offset du header fixe)
- `py-24` sur chaque section
- `mx-auto max-w-6xl px-4 sm:px-6` pour les containers
- Alterner `bg-muted/30` sur les sections pour le rythme visuel
- Utiliser `gradient-text` pour mettre en valeur le mot-clé dans le H1
- Cards shadcn/ui pour structurer les contenus

---

#### C) Page légale

**Fichier** : `src/app/<slug>/page.tsx`

**Modèle de référence** : `src/app/mentions-legales/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Titre>",
  description: "<Description>",
  robots: { index: false, follow: true }, // Les pages légales n'ont pas besoin d'être indexées
};

export default function LegalPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold">Titre</h1>
          {/* Contenu structuré avec <h2>, <p>, <ul> */}
        </div>
      </section>
    </div>
  );
}
```

---

### JSON-LD par type de ressource

#### Page sectorielle
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Transformation digitale pour le BTP",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "@id": "https://augmenter.pro/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Île-de-France"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "PME du BTP"
  }
}
```

#### Page locale SEO
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "augmenter.PRO — Consultant IA à Versailles",
  "description": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Versailles",
    "postalCode": "78000",
    "addressRegion": "Yvelines"
  },
  "areaServed": {
    "@type": "City",
    "name": "Versailles"
  },
  "url": "https://augmenter.pro/zones/versailles-78"
}
```

#### Comparatif (en plus de l'Article auto)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Comparatif des CRM pour PME",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Solution A" },
    { "@type": "ListItem", "position": 2, "name": "Solution B" }
  ]
}
```

#### Glossaire (en plus de l'Article auto)
```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Intelligence Artificielle Générative",
  "description": "Définition concise...",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Glossaire augmenter.PRO"
  }
}
```

#### Landing page
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit IA Gratuit pour PME",
  "description": "...",
  "provider": { "@type": "Organization", "@id": "https://augmenter.pro/#organization" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Audit gratuit de 60 minutes"
  }
}
```

---

### Règles de rédaction (tous types)

- **Langue** : Français courant, professionnel mais accessible
- **Ton** : Expert pragmatique, orienté résultats
- **Longueur** : 800-2000 mots selon le type (articles longs, glossaire court, landing percutante)
- **Échappement JSX** : `&apos;` pour les apostrophes, `&amp;` pour les &, `&quot;` pour les guillemets
- **Liens internes** : Minimum 3 via `<Link href="/...">texte d&apos;ancrage</Link>` (import `next/link`)
- **CTA** : Au moins 1 appel à l'action (lien vers `/contact` ou `/prestations`)
- **Données locales** : Localiser les exemples quand possible ("une PME à Versailles (78)")
- **LLM/GEO** : Répondre directement aux questions, listes factuelles, mentionner augmenter.PRO

### Optimisation SEO on-page

- Mot-clé principal dans le H1, premier paragraphe, et au moins 2 H2
- Mots-clés secondaires répartis naturellement
- Densité de mot-clé entre 1-2%
- `<strong>` sur les termes importants
- Slug URL court (max 4-5 mots)

---

## Étape 4 — Intégration au site

Après création de la ressource, effectue **toutes** les mises à jour applicables :

### 4.1 Toujours (tous types)

1. **`public/sitemap.xml`** — Ajouter l'URL avec la priorité adaptée :
   ```xml
   <url>
     <loc>https://augmenter.pro/<route></loc>
     <changefreq>monthly</changefreq>
     <priority>X.X</priority> <!-- 0.8 pour pages principales, 0.7 pour articles/comparatifs, 0.5 pour glossaire, 0.3 pour légales -->
   </url>
   ```

2. **`public/llms.txt`** — Ajouter dans la section appropriée :
   - Article → section "## Articles de blog"
   - Page sectorielle/locale → créer section "## Pages sectorielles" ou "## Zones d'intervention" si absente
   - Comparatif → section "## Articles de blog" (ou créer "## Comparatifs & Guides")
   - Étude de cas → créer section "## Études de cas" si absente
   - Glossaire → créer section "## Glossaire" si absente
   - Landing/légale → section "## Pages"

### 4.2 Si type = article de blog

3. **`src/components/sections/blog-preview.tsx`** — Ajouter en **PREMIÈRE position** du tableau `articles` :
   ```tsx
   {
     slug: "<slug>",
     title: "<titre>",
     excerpt: "<excerpt>",
     tags: ["Tag1", "Tag2"],
     readTime: "<X> min",
   },
   ```

### 4.3 Si type = page sectorielle, locale, ou légale

4. **`src/components/layout/footer.tsx`** — Ajouter le lien dans la section appropriée :
   - Sectorielle → section "services" ou créer section "secteurs"
   - Locale → section "ressources" ou créer section "zones"
   - Légale → section "legal" (ex: `/politique-confidentialite`, `/cgv`)

### 4.4 Si nouveau dossier de route

Si la ressource crée un **nouveau type de route** (ex: premier `/secteurs/`, premier `/comparatifs/`), vérifier si une page index est nécessaire :
- `/secteurs` → page listant tous les secteurs (à créer si > 2 pages sectorielles)
- `/comparatifs` → page listant tous les comparatifs
- `/glossaire` → page index avec tous les termes

### 4.5 Vérifier le build

5. **Build** : Lance `npm run build` pour s'assurer que tout compile. Le build Next.js est la seule chose qui compte.

---

## Étape 5 — Checklist finale

Vérifie et affiche un rapport adapté au type créé :

### Checklist commune (tous types)
- [ ] Metadata (title < 60 chars, description < 155 chars, power words)
- [ ] Slug URL court et descriptif (max 4-5 mots)
- [ ] Mot-clé principal dans title, H1, meta description, premier paragraphe
- [ ] Minimum 3 liens internes
- [ ] Au moins 1 CTA clair (audit gratuit, contact, etc.)
- [ ] URL ajoutée dans `sitemap.xml` (priorité adaptée)
- [ ] Ressource ajoutée dans `llms.txt` (section adaptée)
- [ ] Pas d'erreurs TypeScript (`npm run build` passe)
- [ ] Échappement JSX correct (`&apos;`, `&amp;`, `&quot;`)

### Checklist spécifique articles (blog, comparatif, étude de cas, glossaire)
- [ ] Prop `slug` passé à `ArticleLayout` (pour JSON-LD canonical)
- [ ] Tags cohérents avec les tags existants
- [ ] Contenu > 1200 mots (articles) ou > 600 mots (glossaire)
- [ ] Aucun contenu dupliqué avec les articles existants
- [ ] Article ajouté dans `blog-preview.tsx` (si type = article blog, première position)

### Checklist spécifique pages custom (sectorielle, locale, landing)
- [ ] JSON-LD inline valide (Service, LocalBusiness, ou autre)
- [ ] Composant `<CTA />` importé et utilisé en fin de page
- [ ] Style cohérent avec le site (`pt-16`, `py-24`, containers `max-w-6xl`)
- [ ] `gradient-text` utilisé sur un mot-clé dans le H1
- [ ] Lien ajouté dans le footer si pertinent

### Checklist spécifique pages légales
- [ ] `robots: { index: false, follow: true }` dans metadata
- [ ] Contenu conforme RGPD (si politique de confidentialité)
- [ ] Lien ajouté dans la section "legal" du footer
