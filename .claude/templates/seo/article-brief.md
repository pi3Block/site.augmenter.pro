# Template — Brief d'article SEO

Format standard pour les briefs d'articles livrés par `/seo-audit` (Phase 8.2) ou `/create-article`. Chaque brief doit être **prêt à rédiger** — un humain ou un LLM doit pouvoir écrire l'article directement à partir de ces informations.

## Structure du brief

```markdown
#### Article N°X — <Titre SEO proposé>

- **Slug** : `/blog/<slug-3-5-mots-kebab-case>`
- **Format** : `guide` / `tutoriel` / `comparatif` / `cas-client` / `glossaire` / `rapport-sectoriel-local` (voir détail ci-dessous)
- **Mot-clé principal** : <kw> (volume: X/mois, difficulté: Y, CPC: Z €)
- **Mots-clés secondaires** : [kw1, kw2, kw3]
- **Intent** : informational / commercial / transactional / navigational
- **Pilier** : <nom du pilier thématique>
- **Cible lecteur** : <persona précis — ex. « dirigeant BTP 20-50 salariés, 78/95, curieux mais méfiant vis-à-vis de l'IA »>
- **Douleur adressée** : <phrase-choc qui résume le problème du lecteur>
- **Angle différenciant** : <ce qu'aucun top 10 SERP ne dit — donnée propre, méthodologie maison, exemple 78/95, cas anonymisé>
- **Promesse** : <ce que le lecteur saura faire après lecture>
- **Preuves à mobiliser** : <chiffres, sources, cas terrain, screenshots outils>
- **Plan H2/H3** :
  - H2 : Introduction accrocheuse (chiffre ou statement)
  - H2 : <...>
    - H3 : <...>
  - H2 : <...>
  - H2 : FAQ (3-5 questions piochées dans PAA DataForSEO / GSC)
  - H2 : Conclusion + CTA
- **CTA cible** : Audit 180° offert / Audit 360° IA Booster / page service X
- **Longueur cible** : X mots (calibrée sur la longueur moyenne du top 3 SERP)
- **Article(s) interne(s) à linker** : [URLs]
- **Score RICE** : (Reach × Impact × Confidence) / Effort = X
- **Trafic mensuel estimé à 12 mois** : X visites
- **Trimestre cible** : Q1/Q2/Q3/Q4 <année>
```

## Format `rapport-sectoriel-local` (spécifique GEO)

Format optimisé pour la visibilité dans les LLMs (ChatGPT Search, Perplexity, Gemini AI Mode). Les moteurs génératifs privilégient les contenus qui ressemblent à des sources crédibles (rapport, étude, classement) plutôt qu'à des pages services.

**Caractéristiques** :
- **Titre type** : « Rapport <année> : <catégorie> à <ville/région> » ou « Étude <année> : <indicateur> dans <secteur> <zone> »
- **Longueur** : court mais propre (800-1500 mots, pas un guide long)
- **Structure obligatoire** : executive summary ≤ 100 mots → méthodologie en 3 lignes → tableau comparatif / classement → analyse → conclusion
- **Contenu central** : au moins **1 tableau** (notations, classement, comparatif) et **1 chiffre clé sourcé** par section
- **Angle** : neutre / analytique (pas commercial direct) — la crédibilité prime
- **Source-friendly URL** : `/blog/rapport-<secteur>-<zone>-<annee>` (ex. `/blog/rapport-cabinets-ia-pme-yvelines-2026`)
- **Cible** : 2-3 briefs de ce format minimum sur 15-20 dans le calendrier éditorial trimestriel

## Contraintes éditoriales

- **Mot « gratuit » interdit** — préférer « offert », « sans engagement », « inclus »
- **Ton provocateur**, douleurs PME frontales — pas de SEO corporate lisse
  - ✅ « ChatGPT dans votre PME : 3 chantiers utiles, 5 pièges qui coûtent cher »
  - ❌ « Les avantages de l'intelligence artificielle pour les PME »
- **E-E-A-T obligatoire** : ≥ 1 exemple terrain chiffré, sources citées, ton prudent avec limites mentionnées
- **People-first** : après lecture, le dirigeant PME doit pouvoir **agir concrètement**
- **Périmètre** : rester dans IA/digital/audit/transformation pour PME 78/95

---

**Utilisé par** :
- [`/seo-audit`](../../commands/seo-audit.md) — Phase 8.2 (calendrier éditorial, 15-20 briefs)
- [`/create-article`](../../commands/create-article.md) — Étape 2 (brief éditorial avant rédaction)
- [`/create-resource`](../../commands/create-resource.md) — Étape 2 (si type = article / comparatif / étude de cas / glossaire)
- [`/modify-resource`](../../commands/modify-resource.md) — Étape 2.2 (Split, Type change article, Move)
