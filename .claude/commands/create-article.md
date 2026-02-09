# Commande : Créer un article de blog SEO

Tu es un expert en rédaction SEO pour le marché français des PME. Tu vas créer un article de blog complet et optimisé pour **augmenter.pro**.

## Paramètre requis

Le sujet/mot-clé principal est : `$ARGUMENTS`

Si aucun argument n'est fourni, demande à l'utilisateur :
- Le sujet principal / mot-clé cible
- Le secteur visé (BTP, immobilier, industrie, artisans, ou généraliste)
- La zone géographique si pertinent (Yvelines 78, Val d'Oise 95, Île-de-France, ou national)

## Étape 1 — Recherche SEO

Avant d'écrire quoi que ce soit :

1. **Recherche de mots-clés** : Utilise la recherche web pour identifier :
   - Le volume de recherche et la concurrence du mot-clé principal
   - 5-10 mots-clés secondaires / longue traîne associés
   - Les questions fréquentes des internautes (People Also Ask)
   - Les intentions de recherche (informationnelle, transactionnelle, navigationnelle)

2. **Analyse concurrentielle** : Scrape les 3-5 premiers résultats Google pour le mot-clé principal :
   - Structure des articles concurrents (H2, H3)
   - Longueur moyenne du contenu
   - Angles éditoriaux utilisés
   - Points manquants ou opportunités de différenciation

3. **Maillage interne** : Lis les articles existants et les pages du site pour identifier les liens internes pertinents :
   - Articles de blog existants dans `src/app/blog/*/page.tsx`
   - Pages clés : `/prestations`, `/approche`, `/idees`, `/contact`
   - Liste dans `src/components/sections/blog-preview.tsx`

## Étape 2 — Stratégie de contenu

Propose à l'utilisateur un **brief éditorial** avant de rédiger :

- **Titre SEO** (< 60 caractères, inclut le mot-clé principal)
- **Meta description** (< 155 caractères, inclut un CTA)
- **Slug URL** proposé (kebab-case, court, descriptif)
- **Tags** pertinents (aligner avec les tags existants : "Intelligence Artificielle", "Commercial", "Audit 360°", "PME", "Claude Code", etc.)
- **Temps de lecture estimé**
- **Plan de l'article** (structure H2/H3)
- **Mots-clés cibles** : principal + secondaires intégrés naturellement
- **Liens internes prévus** : vers quelles pages/articles, avec quel texte d'ancrage
- **CTA principal** : quel service pousser (Audit 180° gratuit, Audit 360°, contact)

**Attends la validation de l'utilisateur avant de passer à l'étape 3.**

## Étape 3 — Rédaction de l'article

### Structure du fichier

Crée le fichier `src/app/blog/<slug>/page.tsx` en suivant exactement ce pattern :

```tsx
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/layout/article-layout";
import Link from "next/link";
// Imports lucide si besoin d'icônes

export const metadata: Metadata = {
  title: "<Titre SEO optimisé>",
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
    >
      {/* Contenu JSX ici */}
    </ArticleLayout>
  );
}
```

### Règles de rédaction

- **Langue** : Français courant, professionnel mais accessible
- **Ton** : Expert pragmatique, orienté résultats, pas de jargon inutile
- **Longueur** : 1200-2000 mots (adapté au sujet)
- **Structure** : H2 pour les sections principales, H3 pour les sous-sections
- **Balises JSX** : `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<em>`
- **Apostrophes** : Utiliser `&apos;` dans le JSX
- **Liens internes** : Minimum 3 liens vers d'autres pages du site via `<Link href="/...">texte d'ancrage</Link>` (nécessite import de `next/link`)
- **CTA intégré** : Au moins un appel à l'action dans le corps de l'article (lien vers `/contact` ou `/prestations`)
- **Données/exemples** : Inclure des chiffres, exemples concrets, études de cas si possible
- **Pas de conclusion bateau** : Terminer par une ouverture, un insight actionnable ou un CTA

### Optimisation SEO on-page

- Mot-clé principal dans le H1 (title), premier paragraphe, et au moins 2 H2
- Mots-clés secondaires répartis naturellement dans le texte
- Densité de mot-clé entre 1-2%
- Balises `<strong>` sur les termes importants
- Meta description unique et incitative
- Slug URL court et descriptif

## Étape 4 — Intégration au site

Après création de l'article :

1. **Mettre à jour `src/components/sections/blog-preview.tsx`** : Ajoute le nouvel article en PREMIÈRE position du tableau `articles` :
   ```tsx
   {
     slug: "<slug>",
     title: "<titre>",
     excerpt: "<excerpt>",
     tags: ["Tag1", "Tag2"],
     readTime: "<X> min",
   },
   ```

2. **Mettre à jour `src/app/blog/page.tsx`** : Vérifie que la page de listing affiche le nouvel article.

3. **Vérifier le build** : Lance `npm run build` pour s'assurer que tout compile.

## Étape 5 — Checklist finale

Vérifie et affiche un rapport :

- [ ] Metadata (title < 60 chars, description < 155 chars)
- [ ] Slug URL propre et descriptif
- [ ] Mot-clé principal dans title, H1, meta description, premier paragraphe
- [ ] Minimum 3 liens internes (vers /prestations, /approche, /contact, /blog/*, /idees)
- [ ] Au moins 1 CTA clair (audit gratuit, contact, etc.)
- [ ] Tags cohérents avec les tags existants
- [ ] Article ajouté dans blog-preview.tsx
- [ ] Pas d'erreurs TypeScript (`npm run build` passe)
- [ ] Contenu > 1200 mots
- [ ] Aucun contenu dupliqué avec les articles existants
