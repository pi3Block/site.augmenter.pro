# Template — Fiche de spécification de page

Format standard pour les pages non éditoriales proposées par `/seo-audit` (Phase 8.4) ou `/create-resource`. Chaque fiche doit être **prête à implémenter** — un développeur doit pouvoir créer la page sans questions supplémentaires.

## Structure de la fiche

```markdown
#### Page — <Titre>

- **URL cible** : `/<path>`
- **Type** : service sectoriel / page locale / comparateur / étude de cas / hub ressources / auteur / glossaire / outil interactif
- **Objectif business** : <ex. capter « consultant IA BTP 78 », convertir en Audit 180°>
- **Mots-clés ciblés** : [principal, secondaires]
- **Volume mensuel estimé** : X recherches
- **H1 proposé** :
- **Sous-titre / hook** :
- **Plan des sections** :
  1. Accroche + pain point
  2. <contenu principal>
  3. Preuves (chiffres, logos, cas)
  4. Offre (méthodologie, livrable, prix)
  5. FAQ (3-5 questions)
  6. CTA
- **Schema JSON-LD** : Service / LocalBusiness / Article / FAQPage / BreadcrumbList / Person / HowTo
- **Images à produire** : [liste + briefs visuels, format WebP < 300 Ko, slug = nom de page]
- **Liens internes entrants** : <quelles pages doivent pointer vers celle-ci>
- **Liens internes sortants** : <vers quelles pages>
- **CTA principal** :
- **Effort estimé** : X h
- **Priorité** : 🔴 Critique / 🟠 Haute / 🟡 Moyenne / 🟢 Fond de roadmap
```

## Catégories de pages à considérer systématiquement

1. **Pages services par secteur** (BTP, immobilier, industrie, artisans, commerces) — 800-1500 mots + schema Service + cas sectoriel anonymisé
2. **Pages locales** (Yvelines, Val d'Oise, Saint-Germain-en-Laye, Versailles, Cergy-Pontoise) — **ne pas spammer** : créer uniquement si (a) volume > 50/mois, (b) contenu unique et non dupliqué, (c) preuve d'ancrage local (adresse, presse locale, clients cités)
3. **Pages comparateurs/outils** (« ChatGPT vs Claude vs Gemini pour PME », « Make vs n8n vs Zapier », « Microsoft Copilot vs Google Gemini Workspace ») — forte citabilité LLM, intent commercial
4. **Études de cas détaillées** — format avant/après chiffré, 1 par secteur, schema Article
5. **Page auteur Pierre Legrand** — bio, photo, credentials, missions réalisées, interventions publiques, sameAs LinkedIn/GitHub, schema Person
6. **Hub ressources** (`/ressources` ou `/outils`) — centralise prompts, guides PDF, check-lists, calculateurs
7. **Glossaire IA-PME** (`/glossaire`) — 30-50 termes définis courts, fort effet de maillage
8. **Page IA Booster** dédiée — si partenariat Bpifrance officiel
9. **Calculateur ROI IA** — outil interactif + email capture, lead magnet haute conversion
10. **Page Activateur France Num** — si éligible, trust signal + trafic qualifié

## Contraintes structurelles

- Toute page indexable doit exporter `metadata: Metadata` (title < 60, description < 155)
- `slug` passé à `ArticleLayout` si applicable (JSON-LD canonical URL)
- Image hero WebP 16:9 dans `public/images/<catégorie>/<slug>.webp`
- Entrée ajoutée à `public/sitemap.xml` avec `<lastmod>` ISO 8601
- Entrée ajoutée à `public/llms.txt` si indexable
- Si client-component requis, split server/client (page.tsx + <name>-client.tsx)
