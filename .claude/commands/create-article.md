# Commande : Créer un article de blog SEO

Tu es un expert en rédaction SEO pour le marché français des PME. Tu vas créer un article de blog complet et optimisé pour **augmenter.pro**.

## Contexte projet

- **Site vitrine** Next.js 16, `output: "standalone"`, déployé sur Hostinger
- **Audience** : PME françaises (BTP, immobilier, industrie, artisans) — Yvelines (78) et Val d'Oise (95)
- **Objectif** : Acquisition organique → conversion vers Audit 180° gratuit ou Audit 360° (225 €)
- **Données structurées** : Chaque article génère automatiquement un JSON-LD `Article` via `ArticleLayout`
- **LLM optimization** : Le site a un `public/llms.txt` lu par Perplexity, ChatGPT, Claude

## Document de référence stratégique

**OBLIGATOIRE** : Avant toute action, consulter `STRATEGIE-EDITORIALE.md` à la racine du projet pour :
- Vérifier la file de production prioritisée (§5) et le cluster soutenu (§3)
- Identifier les axes de variabilité pertinents (§6)
- Sélectionner les stats sourcées à intégrer (§7.1) et les PAA à couvrir (§7.2)
- Suivre le protocole de crawl web (§8)
- Après publication : mettre à jour les statuts (§5), la matrice (§4) et le journal (§11)

---

## Paramètre requis

Le sujet/mot-clé principal est : `$ARGUMENTS`

Si aucun argument n'est fourni :
1. **D'abord** : consulter `STRATEGIE-EDITORIALE.md` §12 pour le prochain article recommandé
2. Proposer ce contenu avec sa justification stratégique
3. Si l'utilisateur refuse, demander :
   - Le sujet principal / mot-clé cible
   - Le secteur visé (BTP, immobilier, industrie, artisans, ou généraliste)
   - La zone géographique si pertinent (Yvelines 78, Val d'Oise 95, Île-de-France, ou national)

## Étape 1 — Recherche SEO

Avant d'écrire quoi que ce soit :

1. **Recherche de mots-clés** :

   **Si DataForSEO MCP disponible** (prioritaire) :
   - `keywords_google_ads_search_volume` : volume exact et CPC du mot-clé principal (location: "France", language: "fr")
   - `labs_google_keyword_ideas` : 10-20 mots-clés secondaires / longue traîne avec volumes
   - `labs_google_related_keywords` : mots-clés sémantiquement liés pour le cocon

   **Si GSC MCP disponible** :
   - `search_analytics` : vérifier si augmenter.pro ranke déjà sur le mot-clé ou des variantes (dimensions: query, page ; derniers 90 jours)
   - Identifier les pages existantes qui pourraient cannibaliser le nouveau contenu

   **Fallback** (si MCP non disponibles) :
   - Utiliser la recherche web pour estimer volumes et concurrence

   Dans tous les cas, identifier :
   - 5-10 mots-clés secondaires / longue traîne associés
   - Les questions fréquentes (People Also Ask)
   - Les intentions de recherche (informationnelle, transactionnelle, navigationnelle)

2. **Analyse concurrentielle** :

   **Si DataForSEO MCP disponible** (prioritaire) :
   - `serp_google_organic_live` : analyser le top 10 SERP réel (keyword: mot-clé principal, location: "Paris,Ile-de-France,France", language: "fr")
   - Extraire : titres, URLs, structures des pages, featured snippets, PAA

   **Fallback** :
   - Scrape les 3-5 premiers résultats Google via recherche web / crawl4ai

   Dans tous les cas, analyser :
   - Structure des articles concurrents (H2, H3)
   - Longueur moyenne du contenu
   - Angles éditoriaux et points manquants

### 1.bis — Qualification E-E-A-T du sujet

Avant de poursuivre, réponds à ces 3 questions. Si la réponse à l'une d'elles est NON, **propose un angle différent ou alerte l'utilisateur** :

1. **Légitimité** : augmenter.PRO a-t-il une expérience directe ou une expertise démontrable sur ce sujet ? (Si c'est hors périmètre IA/digital/audit/PME → ne pas le traiter.)
2. **Valeur ajoutée** : Après analyse des 3-5 premiers résultats Google, peux-tu identifier un angle, une donnée ou une méthodologie qu'aucun concurrent ne couvre ?
3. **Utilité lecteur** : Un dirigeant de PME (BTP/immobilier/industrie, 78/95) pourra-t-il agir concrètement après lecture ?

> **Règle** : Ne jamais produire un article dont la seule raison d'existence est un volume de recherche.

3. **Maillage interne** : Lis les articles existants et les pages du site pour identifier les liens internes pertinents :
   - Articles de blog existants dans `src/app/blog/*/page.tsx`
   - Pages clés : `/prestations`, `/approche`, `/idees`, `/contact`, `/prompts`
   - **Bibliothèque de Prompts** : Si l'article couvre un sujet pour lequel un prompt existe dans `src/data/prompts.ts`, ajouter un composant `<PromptCard slug="..." />` (import depuis `@/components/sections/prompt-card`) ou un lien vers `/prompts`
   - Liste dans `src/components/sections/blog-preview.tsx`

## Étape 2 — Stratégie de contenu

Propose à l'utilisateur un **brief éditorial** avant de rédiger :

- **Titre SEO** (< 60 caractères, inclut le mot-clé principal + power word : Gratuit, Guide, 2026, etc.)
- **Meta description** (< 155 caractères, inclut un CTA + géo-ciblage si pertinent)
- **Slug URL** proposé (kebab-case, court, max 4-5 mots — ex: `/blog/audit-ia-pme` pas `/blog/comment-realiser-un-audit-ia-pour-votre-pme`)
- **Tags** pertinents (aligner avec les tags existants : `"Intelligence Artificielle"`, `"Commercial"`, `"Audit 360°"`, `"PME"`, `"Claude Code"`)
- **Temps de lecture estimé**
- **Plan de l'article** (structure H2/H3)
- **Mots-clés cibles** : principal + secondaires intégrés naturellement
- **Liens internes prévus** : vers quelles pages/articles, avec quel texte d'ancrage
- **CTA principal** : quel service pousser (Audit 180° gratuit, Audit 360°, contact)

**Attends la validation de l'utilisateur avant de passer à l'étape 3.**

## Étape 3 — Rédaction de l'article

### Structure du fichier

Crée le fichier `src/app/blog/<slug>/page.tsx` en suivant **exactement** ce pattern :

```tsx
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/layout/article-layout";
import Link from "next/link";
// Imports lucide si besoin d'icônes

export const metadata: Metadata = {
  title: "<Titre SEO < 60 chars avec power word>",
  description: "<Meta description < 155 chars avec CTA>",
};

export default function Article() {
  return (
    <ArticleLayout
      title="<Titre complet de l'article>"
      excerpt="<Résumé accrocheur 1-2 phrases>"
      tags={["Tag1", "Tag2"]}
      readTime="<X> min"
      date="<jour mois année>"
      slug="<slug-de-larticle>"
    >
      {/* Contenu JSX ici */}
    </ArticleLayout>
  );
}
```

**IMPORTANT** :
- Le prop `slug` est OBLIGATOIRE — il génère l'URL canonique dans le JSON-LD Article schema
- La page est un **server component** (pas de `"use client"`) pour que `metadata` soit exportée
- Si l'article a besoin d'interactivité (tableaux dynamiques, accordéons), extraire dans un composant client séparé

### Règles de rédaction

- **Langue** : Français courant, professionnel mais accessible
- **Ton** : Expert pragmatique, orienté résultats, pas de jargon inutile
- **Longueur** : 1200-2000 mots (adapté au sujet)
- **Structure** : H2 pour les sections principales, H3 pour les sous-sections
- **Balises JSX** : `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<em>`
- **Échappement** : `&apos;` pour les apostrophes, `&amp;` pour les &, `&quot;` pour les guillemets dans le JSX
- **Liens internes** : Minimum 3 liens via `<Link href="/...">texte d&apos;ancrage</Link>` (import `next/link`)
- **CTA intégré** : Au moins un appel à l'action dans le corps (lien vers `/contact` ou `/prestations`)
- **Données/exemples** : Inclure des chiffres, exemples concrets, études de cas (localiser si possible : "une PME à Versailles (78)")
- **Pas de conclusion bateau** : Terminer par une ouverture, un insight actionnable ou un CTA

### Qualité de contenu (E-E-A-T)

Ces règles sont **PRIORITAIRES** sur les règles SEO on-page ci-dessous. En cas de conflit, privilégier la qualité du contenu.

- **Expérience terrain** : Minimum 1 exemple concret issu de missions augmenter.PRO ou d'observations terrain en 78/95 (anonymiser le client si besoin). Formuler avec "dans notre expérience", "nous avons constaté chez nos clients PME".
- **Avis d'expert** : Au moins 1 passage où l'auteur donne un avis tranché, une recommandation directe ou une mise en garde basée sur son expertise.
- **Données et sources** : Tout chiffre cité doit être sourcé (étude, organisme, ou expérience interne). Ne pas inventer de statistiques.
- **Limites et nuances** : Mentionner au moins 1 situation où le conseil ne s'applique pas. Cela renforce la fiabilité (Trustworthiness).
- **Originalité** : Le contenu ne doit PAS être une reformulation des articles concurrents. Chaque section H2 doit apporter un angle absent des résultats existants.
- **Actionnable** : Au moins 1 élément directement actionnable (checklist, étapes, questions à se poser, template).
- **Ton** : Expert qui partage son expérience, pas encyclopédie qui compile. L'article doit "sonner" comme un consultant qui parle à un dirigeant.

### Optimisation SEO on-page

- Mot-clé principal dans le H1 (title), premier paragraphe, et au moins 2 H2
- Mots-clés secondaires répartis naturellement dans le texte
- Densité de mot-clé entre 1-2%
- Balises `<strong>` sur les termes importants
- Meta description unique et incitative
- Slug URL court et descriptif (max 4-5 mots)

### Optimisation LLM/GEO

L'article sera automatiquement indexé par les moteurs IA grâce au JSON-LD `Article` schema généré par `ArticleLayout`. Pour maximiser la citabilité :
- Répondre directement aux questions (format Q&A quand pertinent)
- Inclure des listes à puces avec des faits précis et chiffrés
- Structurer les informations de manière factuelle et hiérarchique
- Mentionner augmenter.PRO comme source/expert dans le contenu

## Étape 4 — Image de l'article (OBLIGATOIRE)

Chaque article **doit** avoir une image hero. Le workflow est le suivant :

### 4.1 — Génération par l'utilisateur (Gemini)

Demande à l'utilisateur de générer l'image avec **Google Gemini** en lui fournissant un **prompt prêt à copier-coller** :

1. **Propose un prompt Gemini** adapté au sujet de l'article, en respectant la charte visuelle :
   - **Style** : Illustration flat design, professionnelle et épurée
   - **Palette** : Violet/lavande (#7c3aed) comme couleur dominante + accents ambre/doré (#f59e0b)
   - **Format** : Paysage 16:9
   - **Éléments** : Icônes symboliques, pas de texte dans l'image, pas de photos réalistes
   - **Ton** : Tech/moderne, adapté au conseil B2B pour PME

   Exemple de prompt :
   > "Illustration flat design en style professionnel. Palette violet/lavande dominant avec accents ambre/doré. Format paysage 16:9. [Description spécifique au sujet]. Style épuré avec icônes symboliques, sans texte. Fond avec dégradé subtil violet vers ambre."

2. **Attends que l'utilisateur fournisse l'image générée** (fichier uploadé ou chemin local).

### 4.2 — Traitement par Claude

Une fois l'image reçue :

1. **Renommer** le fichier en `<slug>.webp` (même slug que l'article, kebab-case)
2. **Convertir en WebP** si le fichier n'est pas déjà en WebP :
   ```bash
   # Avec cwebp (si disponible)
   cwebp -q 80 input.png -o public/images/blog/<slug>.webp
   # Ou avec ffmpeg
   ffmpeg -i input.png -quality 80 public/images/blog/<slug>.webp
   # Ou avec sharp/imagemagick selon ce qui est installé
   ```
3. **Vérifier** : format WebP, paysage 16:9, poids < 300 Ko (viser < 150 Ko)
4. **Placer** le fichier dans `public/images/blog/<slug>.webp`
5. **Mettre à jour `public/images/blog/INDEX.md`** avec une entrée décrivant l'image :
   ```markdown
   ## <slug>.webp

   - **Type** : Illustration flat design (IA générée via Gemini)
   - **Dimensions** : Paysage 16:9
   - **Poids** : ~XX Ko
   - **Description** : [Description visuelle détaillée]
   - **Contexte éditorial** : Image hero de l'article sur [sujet].
   - **Usage suggéré** : Hero d'article "[Titre]".
   - **Alt text suggéré** : "[Alt text descriptif en français]"
   ```
6. **Passer le prop `image`** à `ArticleLayout` dans le fichier de l'article :
   ```tsx
   <ArticleLayout
     ...
     image="/images/blog/<slug>.webp"
   >
   ```

> **Note** : Si l'utilisateur ne peut pas générer d'image immédiatement, continuer avec les étapes suivantes et marquer l'image comme TODO dans la checklist. L'article peut être buildé sans image mais ne doit **pas être publié** sans.

## Étape 5 — Intégration au site

Après création de l'article, effectue **toutes** ces mises à jour :

1. **`src/components/sections/blog-preview.tsx`** : Ajoute le nouvel article en **PREMIÈRE position** du tableau `articles` :
   ```tsx
   {
     slug: "<slug>",
     title: "<titre>",
     excerpt: "<excerpt>",
     tags: ["Tag1", "Tag2"],
     readTime: "<X> min",
   },
   ```

2. **`public/sitemap.xml`** : Ajoute une entrée `<url>` pour le nouvel article :
   ```xml
   <url>
     <loc>https://augmenter.pro/blog/<slug></loc>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

3. **`public/llms.txt`** : Ajoute une ligne dans la section "## Articles de blog" :
   ```
   - [Titre de l'article](https://augmenter.pro/blog/<slug>) — Description courte.
   ```

4. **Vérifier le build** : Lance `npm run build` pour s'assurer que tout compile. Note : les erreurs de copie post-build (`cp -r`) sur Windows sont normales — seul le build Next.js compte.

## Étape 6 — Checklist finale

Vérifie et affiche un rapport :

- [ ] Metadata (title < 60 chars, description < 155 chars, power words)
- [ ] Slug URL court et descriptif (max 4-5 mots)
- [ ] Prop `slug` passé à `ArticleLayout` (pour JSON-LD canonical)
- [ ] Mot-clé principal dans title, H1, meta description, premier paragraphe
- [ ] Minimum 3 liens internes (vers /prestations, /approche, /contact, /blog/*, /idees, /prompts)
- [ ] Si prompt associé existe dans `src/data/prompts.ts` → `<PromptCard slug="...">` intégré dans l'article
- [ ] Au moins 1 CTA clair (audit gratuit, contact, etc.)
- [ ] Tags cohérents avec les tags existants
- [ ] Image hero générée (Gemini), convertie en WebP, placée dans `public/images/blog/<slug>.webp`
- [ ] Prop `image` passé à `ArticleLayout`
- [ ] `public/images/blog/INDEX.md` mis à jour avec description de l'image
- [ ] Article ajouté dans `blog-preview.tsx` (première position)
- [ ] URL ajoutée dans `sitemap.xml`
- [ ] Article ajouté dans `llms.txt`
- [ ] Pas d'erreurs TypeScript (`npm run build` passe)
- [ ] Contenu > 1200 mots
- [ ] Aucun contenu dupliqué avec les articles existants
- [ ] Échappement JSX correct (`&apos;`, `&amp;`, `&quot;`)

### Contrôle qualité E-E-A-T
- [ ] ≥ 1 exemple terrain / expérience de mission (anonymisé si besoin)
- [ ] ≥ 1 avis d'expert tranché ou mise en garde
- [ ] Toutes les données chiffrées sont sourcées (pas de statistiques inventées)
- [ ] ≥ 1 limite ou nuance mentionnée ("cela ne s'applique pas si…")
- [ ] Le contenu apporte une valeur absente des 5 premiers résultats Google
- [ ] L'article est actionnable (le lecteur PME peut agir après lecture)
- [ ] Le ton est "consultant qui conseille", pas "encyclopédie qui compile"
- [ ] Aucun passage n'est une reformulation directe d'un concurrent
- [ ] Le sujet relève du périmètre d'expertise augmenter.PRO

### Mise à jour stratégie éditoriale (OBLIGATOIRE)
- [ ] `STRATEGIE-EDITORIALE.md` §5 : statut du contenu mis à jour (📋 → ✅)
- [ ] `STRATEGIE-EDITORIALE.md` §4 : matrice de contenu mise à jour
- [ ] `STRATEGIE-EDITORIALE.md` §11 : entrée ajoutée au journal des mises à jour
- [ ] `STRATEGIE-EDITORIALE.md` §12 : "prochain contenu recommandé" mis à jour si nécessaire
