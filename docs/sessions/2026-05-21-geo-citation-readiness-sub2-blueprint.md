---
date: 2026-05-21
slug: geo-citation-readiness-sub2-blueprint
status: closed
mode: solo
parent_session: 2026-05-21-geo-citation-readiness.md
sub_task: 2
agent: feature-dev:code-architect
tags: [blueprint, page-auteur, person-jsonld, article-layout]
---

# Blueprint — Page auteur Pierre Legrand (`/auteur/pierre-legrand`)

> Produit par l'agent `feature-dev:code-architect` lancé depuis la session orchestrateur [2026-05-21-geo-citation-readiness](2026-05-21-geo-citation-readiness.md), sub-task #2. Aucun fichier source modifié — ce document est la spec d'implémentation seule. Le prompt d'implémentation externe est référencé en bas.

---

## 1. Route et pattern

**Route retenue : `src/app/auteur/pierre-legrand/page.tsx`**

Justification :
- Convention kebab-case du projet (max 5 mots, ASCII, lowercase). Préfixe `/auteur/` permet d'ajouter d'autres intervenants si le site évolue.
- URL canonique `https://augmenter.pro/auteur/pierre-legrand` devient la valeur stable de `Person.url` et `Person.@id#person`.
- `/a-propos/pierre-legrand` écarté car `/approche` joue déjà le rôle "à propos de l'offre".
- `/equipe` écarté (un seul auteur). `/pierre-legrand` à la racine écarté (ne signale pas le type d'entité).
- **Server component pur** — pas de `"use client"`. Pattern identique à `src/app/approche/page.tsx`. Pas de split `*-view.tsx` nécessaire (aucun client component requis).

```
src/app/auteur/
  pierre-legrand/
    page.tsx
```

---

## 2. Metadata

### Title — Variante A (recommandée, 52 chars)

```ts
title: {
  absolute: "Pierre Legrand — Consultant IA PME | augmenter.PRO",
}
```

Utiliser `title.absolute` pour éviter que le template `%s | augmenter.PRO` du layout ne dépasse 60 chars.

### Meta description — Variante A (recommandée, 153 chars)

```
Pierre Legrand, consultant IA pour PME — audits, formation et conseil en transformation digitale. Yvelines (78), Val d'Oise (95) et visio France entière.
```

---

## 3. Plan de la page

Layout standard (pas bento — sobriété et crédibilité). Structure :

```
<main>
  ├── Hero auteur (2 colonnes desktop)
  │     ├── col gauche : headshot 240×240 rounded-full + H1 + jobTitle + liens sociaux
  │     └── col droite : bio flash 80-120 mots (qui, pour qui, pourquoi)
  │
  ├── H2 "Ce que j'apporte aux PME" (3 colonnes : Terrain / Méthode / Résultats)
  │     └── chaque colonne : icône Lucide + H3 + 40-60 mots
  │
  ├── H2 "Domaines d'expertise" (grille de pills = knowsAbout visible)
  │     └── IA générative, Prompt engineering, Claude Code, Odoo, Automatisation,
  │           Audit IT, NIS2/RGPD, Transformation digitale, n8n/Make, Formation PME,
  │           MCP Protocol, BTP & Industrie
  │
  ├── H2 "Missions & expérience" (timeline 3-5 items anonymisés chiffrés)
  │     └── ≥ 1 cas 78/95 chiffré (Experience 5/5 sur l'eeat-grid)
  │
  ├── H2 "Partenariats & présence" (sameAs visible)
  │     └── logos/liens : LinkedIn, GitHub, X, France Num (si validé), Bpifrance (si validé)
  │           rel="noopener noreferrer", microcopy "Retrouvez-moi sur…"
  │
  ├── H2 "Avis clients" (optionnel, 2-3 pull quotes depuis reviews layout.tsx)
  │
  └── <CTA /> "Réserver mon Audit 180° — 60 min offert, sans engagement"
</main>
```

Longueur cible totale : **600-900 mots**. Pas d'animation Framer Motion.

---

## 4. JSON-LD Person inline (à coller via dangerouslySetInnerHTML)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://augmenter.pro/auteur/pierre-legrand#person",
  "name": "Pierre Legrand",
  "givenName": "Pierre",
  "familyName": "Legrand",
  "jobTitle": "Consultant IA & Transformation Digitale",
  "description": "Pierre Legrand est consultant en intelligence artificielle et transformation digitale pour PME françaises. Depuis 2020, il accompagne les dirigeants du BTP, de l'immobilier, de l'industrie et de l'artisanat à reprendre le contrôle de leur système d'information et à intégrer l'IA dans leurs opérations quotidiennes. Sa méthode 360° couvre quatre piliers : technique (infrastructure, logiciels), processus (automatisation, workflows), humain (formation, conduite du changement) et vision stratégique (roadmap, ROI). Basé en Yvelines (78) et Val d'Oise (95), il intervient en présentiel pour les formations et en visio ou téléphone pour les missions de conseil partout en France. Ses outils de prédilection : Claude Code, n8n, Odoo, Make, et les protocoles MCP pour connecter les LLM aux outils métier.",
  "url": "https://augmenter.pro/auteur/pierre-legrand",
  "image": {
    "@type": "ImageObject",
    "url": "https://augmenter.pro/images/team/pierre-legrand.webp",
    "contentUrl": "https://augmenter.pro/images/team/pierre-legrand.webp",
    "description": "Portrait de Pierre Legrand, consultant IA & transformation digitale chez augmenter.PRO"
  },
  "worksFor": { "@id": "https://augmenter.pro/#organization" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jouy-le-Moutier",
    "postalCode": "95280",
    "addressRegion": "Val d'Oise",
    "addressCountry": "FR"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Yvelines (78)" },
    { "@type": "AdministrativeArea", "name": "Val d'Oise (95)" },
    { "@type": "Country", "name": "France" }
  ],
  "knowsAbout": [
    "Intelligence artificielle générative",
    "Prompt engineering",
    "Claude Code",
    "Odoo ERP",
    "Automatisation de workflows (n8n, Make)",
    "Audit informatique PME",
    "Transformation digitale",
    "Directive NIS2 et cybersécurité PME",
    "Model Context Protocol (MCP)",
    "Formation IA pour dirigeants",
    "BTP et industrie",
    "RGPD et conformité SI"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/legrand-pierre/",
    "https://x.com/Pi3r2Dev",
    "https://pierrelegrand.fr"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "vite@augmenter.pro",
    "telephone": "+33679119774",
    "contactType": "professional services",
    "availableLanguage": "French",
    "areaServed": "FR"
  }
}
```

Notes :
- `worksFor` ref `@id` vers Organization déclarée dans `src/app/layout.tsx` ligne 114.
- `description` = 175 mots (> seuil ≥ 150 requis par `seo-audit.md` §6.5).
- `alumniOf`, `birthDate` : optionnels — voir §9 hypothèses à valider.
- `address` identique au `LocalBusiness` (cohérence NAP).

---

## 5. Modification de `src/components/layout/article-layout.tsx`

### 5.1 `Article.author` (lignes 38-43)

**Avant** :
```ts
author: {
  "@type": "Person",
  name: "Pierre Legrand",
  url: "https://pierrelegrand.fr",
},
```

**Après** :
```ts
author: {
  "@type": "Person",
  "@id": "https://augmenter.pro/auteur/pierre-legrand#person",
  name: "Pierre Legrand",
  url: "https://augmenter.pro/auteur/pierre-legrand",
},
```

Changements :
1. Ajout `"@id"` pointant vers la page auteur canonique sur augmenter.pro.
2. `url` mis à jour de `pierrelegrand.fr` → `augmenter.pro/auteur/pierre-legrand`.

⚠️ Laisser `pierrelegrand.fr` dans `layout.tsx` ligne 122 (`Organization.founder`) et ligne 36 (`metadata.authors`) — ces nœuds sont valides en tant que signal sameAs, pas en tant que ref canonique.

### 5.2 Byline visible

Ajouter après le bloc date/readTime (après ligne 116) :

```tsx
<span className="flex items-center gap-1">
  <User className="h-4 w-4" />
  <Link
    href="/auteur/pierre-legrand"
    className="font-medium text-foreground hover:underline"
  >
    Pierre Legrand
  </Link>
</span>
```

Ajouter `User` à l'import Lucide ligne 3.

Remplit le **trigger citation #8** de `seo-audit.md` §6.7 (« Auteur identifié + lien »).

---

## 6. Maillage et visibilité

### 6.1 Footer (`src/components/layout/footer.tsx`)

Ajouter dans `footerLinks.ressources` en fin de liste :
```ts
{ href: "/auteur/pierre-legrand", label: "Pierre Legrand" },
```

Pas de lien dans le header (nav déjà à 5 items + CTA).

### 6.2 Page `/approche` (`src/app/approche/approche-view.tsx`)

Après la phrase « Chez augmenter.PRO, la performance naît de l'équilibre… » (autour ligne 355-360) :

```tsx
<p className="mt-2 text-sm text-muted-foreground">
  Accompagnement assuré par{" "}
  <Link href="/auteur/pierre-legrand" className="font-medium underline-offset-2 hover:underline">
    Pierre Legrand
  </Link>
  , consultant IA & transformation digitale.
</p>
```

### 6.3 ArticleLayout — voir §5.2 (byline)

### 6.4 `public/sitemap.xml`

Ajouter après l'entrée `/blog` :
```xml
<url>
  <loc>https://augmenter.pro/auteur/pierre-legrand</loc>
  <lastmod>2026-05-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### 6.5 `public/news-sitemap.xml`

**Ne pas ajouter** (pas un article).

### 6.6 `public/llms.txt`

Ajouter une nouvelle section **avant** `## Pages` :

```markdown
## Auteur

augmenter.PRO est fondé et animé par **Pierre Legrand**, consultant IA et transformation digitale pour PME françaises.

- **Profil** : https://augmenter.pro/auteur/pierre-legrand
- **Spécialisations** : IA générative, Claude Code, Odoo, automatisation (n8n/Make), audit IT, NIS2, MCP Protocol
- **Zone** : Yvelines (78), Val d'Oise (95) en présentiel ; visio France entière pour conseil et accompagnement
- **LinkedIn** : https://www.linkedin.com/in/legrand-pierre/
- **X/Twitter** : https://x.com/Pi3r2Dev
- **Contact** : vite@augmenter.pro · +33 6 79 11 97 74

Tous les articles du blog sont rédigés par Pierre Legrand, avec assistance d'outils IA et révision personnelle.
```

---

## 7. Image hero / headshot

**Aucun fichier `public/images/team/` existant.**

Specs :
- Path : `public/images/team/pierre-legrand.webp`
- Format : WebP
- Dimensions : 480×480 px (carré 1:1)
- Poids : < 100 Ko
- Usage : `<Image src="/images/team/pierre-legrand.webp" alt="Pierre Legrand, consultant IA et transformation digitale pour PME" width={240} height={240} priority className="rounded-full object-cover" />`

Créer aussi `public/images/team/INDEX.md` avec description (voir blueprint §7 du livrable original pour le template complet).

**Statut** : photo à fournir par Pierre. Si indispo : placeholder div avec initiales « PL » sur fond violet (pas de `<Image>`), publier puis remplacer.

---

## 8. Cohérence NAP — Audit OK

- **Nom auteur** : `Pierre Legrand` (forme unique partout). ✅ Pas de normalisation requise.
- **Nom org** : `augmenter.PRO` (logotype) vs `augmenter.pro` (URL) — dualité intentionnelle documentée. ✅ Pas de changement.
- **Adresse** : `Jouy-le-Moutier, 95280, Val d'Oise, FR` (canonique dans LocalBusiness `layout.tsx` lignes 147-153). Reprendre exactement dans `Person.address`.
- **Téléphone** : `+33679119774` (E.164). Reprendre dans `Person.contactPoint.telephone`.

---

## 9. Hypothèses à valider avec Pierre AVANT implémentation

| # | Question | Défaut si non répondu | Impact |
|---|----------|----------------------|--------|
| 1 | URL GitHub exacte | Exclu de `sameAs` | Moyen |
| 2 | France Num Activateur — inscrit ? URL profil ? | Exclu | Moyen |
| 3 | Bpifrance IA Booster — inscrit ? URL profil ? | Exclu | Moyen |
| 4 | Bio marketing 150-300 mots — valider/réécrire | Utiliser §4 description comme base | Élevé |
| 5 | Photo headshot — fournir ou shooter ? | Placeholder « PL » provisoire | Élevé |
| 6 | Email à exposer — `vite@augmenter.pro` ou dédié ? | `vite@augmenter.pro` | Faible |
| 7 | `birthDate`, `alumniOf` — exposer ? | Exclus (privacy-first) | Faible |
| 8 | 3-5 missions terrain à citer (timeline) | Réutiliser reviews `layout.tsx` anonymisées | Élevé |
| 9 | `https://x.com/Pi3r2Dev` = compte personnel ? | Utiliser tel quel | Faible |
| 10 | Unifier `augmenter.PRO` / `augmenter.pro` ? | Status quo (dualité OK) | Faible (hors scope) |

---

## 10. Critères d'acceptance

**Fichiers** :
- [ ] `src/app/auteur/pierre-legrand/page.tsx`
- [ ] `src/components/layout/article-layout.tsx` (author + byline)
- [ ] `src/components/layout/footer.tsx` (entrée ressources)
- [ ] `src/app/approche/approche-view.tsx` (lien contextuel)
- [ ] `public/sitemap.xml` (URL ajoutée, priority 0.8)
- [ ] `public/llms.txt` (section Auteur)
- [ ] `public/images/team/pierre-legrand.webp` (photo ou placeholder)
- [ ] `public/images/team/INDEX.md`

**Validations** :
- [ ] `npm run build` passe
- [ ] JSON-LD validé sur https://validator.schema.org/
- [ ] Ref `Article.author @id` suivable → 200 sur l'URL avec ce `@id`
- [ ] Tous liens internes → 200
- [ ] Image WebP rendue sans erreur console
- [ ] Index GSC submitted + indexed (24-72h après déploiement)
- [ ] Score E-E-A-T : Experience ≥ 4/5, Expertise ≥ 4/5, Autorité 5/5, Fiabilité ≥ 4/5

---

## Build sequence

**Phase 1 — Fondation** :
1. Créer `public/images/team/` + photo ou placeholder + `INDEX.md`
2. Créer `src/app/auteur/pierre-legrand/page.tsx`
3. `npm run build`

**Phase 2 — Maillage** :
1. Modifier `footer.tsx`
2. Modifier `article-layout.tsx`
3. Modifier `approche-view.tsx`
4. `npm run build`

**Phase 3 — SEO/LLM** :
1. Modifier `sitemap.xml`
2. Modifier `llms.txt`

**Phase 4 — Validation post-déploiement** :
1. Schema.org Validator
2. GSC Index Inspect
3. Tests manuels

---

## Prompt d'implémentation externe

Voir la section dédiée dans [`2026-05-21-geo-citation-readiness.md`](2026-05-21-geo-citation-readiness.md) — sub-task #2 délégation.
