---
date: 2026-05-21
slug: geo-citation-readiness-sub2
status: closed
mode: solo
parent_session: 2026-05-21-geo-citation-readiness.md
parent_plan: 2026-05-21-geo-citation-readiness-sub2-blueprint.md
sub_task: 2
tags: [page-auteur, person-jsonld, eeat, citation-readiness]
---

# Implémenter la page auteur `/auteur/pierre-legrand` + maillage + JSON-LD Person

## Status
green — Page auteur livrée, deux builds Next.js verts, maillage et fichiers SEO/LLM mis à jour. Aucun blocker.

## Done in this session
- Création route `/auteur/pierre-legrand` (server component) avec metadata absolute, OpenGraph profile, canonical
- JSON-LD `Person` complet : `@id` canonique, `description` ~210 mots (bio Pierre intégrale), `knowsAbout` (12 entrées), `sameAs` (LinkedIn / X / pierrelegrand.fr), `worksFor` ref `@id`, `address` cohérent avec LocalBusiness, `contactPoint`, `areaServed` 78/95 + France — **bloc `image` volontairement omis** tant que la photo n'est pas fournie (évite un 404 dans Schema)
- 6 sections HTML (hero + 3 cartes apport + pills expertise + 3 missions timeline + 3 cartes plateformes + CTA Audit) — placeholder visuel « PL » sur div violet 240×240 dans le hero
- `ArticleLayout.author` migré vers ref `@id` `https://augmenter.pro/auteur/pierre-legrand#person` + byline visible (icône User + lien) sur tous les articles blog → trigger citation #8 satisfait
- Lien contextuel ajouté dans le hero `/approche` (paragraphe « Accompagnement assuré par Pierre Legrand »)
- Entrée `Pierre Legrand` ajoutée dans `footerLinks.ressources`
- Sitemap : entrée `/auteur/pierre-legrand` (priority 0.8, lastmod 2026-05-21) insérée après `/blog`
- `public/llms.txt` : nouvelle section `## Auteur` insérée **avant** `## Pages` + ligne dédiée dans la table `## Pages`
- `public/images/team/INDEX.md` créé avec entrée TODO photo (specs WebP 480×480, alt text, emplacement de remplacement dans le code)

## Files touched
- `src/app/auteur/pierre-legrand/page.tsx` — nouvelle page server component (Person JSON-LD + 6 sections + placeholder PL)
- `src/components/layout/article-layout.tsx` — `Article.author` enrichi avec `@id` + URL canonique + import lucide `User` + byline visible
- `src/components/layout/footer.tsx` — entrée `/auteur/pierre-legrand` dans `footerLinks.ressources`
- `src/app/approche/approche-view.tsx` — paragraphe d'attribution sous le hero
- `public/sitemap.xml` — entrée URL auteur
- `public/llms.txt` — section `## Auteur` + entrée dans `## Pages`
- `public/images/team/INDEX.md` — créé avec TODO photo documenté

## Git state
- Branch: `main` (upstream: pas suivi via cette session — aligné avec `origin/main` au démarrage)
- Uncommitted: 26 fichiers modifiés / nouveaux dossiers (`docs/sessions/`, `src/app/auteur/`, `public/images/team/`, `public/llms-full.txt` issu de sub3, etc.) — pas seulement liés à sub2, l'arbre cumule plusieurs sessions
- Last commit: `a99e2d6` Update links in documentation and templates for consistency and clarity
- **Note** : ne commiter que les fichiers liés à sub2 si on veut isoler ce livrable (cf. suggestion bas de doc)

## Test status
- Snapshot: `green` — deux `npm run build` exécutés (fin Phase 1 et fin Phase 2), tous deux passants
- Source: `next build` (TypeScript strict + génération statique 37 routes)
- Failing files : aucun
- Routes statiques générées avec succès, dont `/auteur/pierre-legrand`

## Acceptance — vérifications

| Critère | Statut |
|---------|--------|
| `npm run build` passe sans erreur TS ni ESLint | ✅ |
| Ref `Article.author @id` cohérente entre `article-layout.tsx` et `page.tsx` | ✅ (`https://augmenter.pro/auteur/pierre-legrand#person`) |
| Placeholder PL rendu sans warning console | ✅ (div pure, pas de `<Image>` cassé) |
| Validation Schema.org sur https://validator.schema.org/ | ⏳ **À faire en post-déploiement** — JSON-LD construit selon blueprint §4, bloc `image` omis volontairement (pas de warning attendu). Audit local impossible sans pousser le HTML en prod. |
| Tous liens internes → 200 en local | ✅ (sortie `next build` liste `/auteur/pierre-legrand` en route statique) |
| GSC Index Inspect | ⏳ Post-déploiement (24-72h) |

## Score E-E-A-T estimé (auto-scoré sur `.claude/templates/seo/eeat-grid.md`)

| Dimension | Avant | Après | Justification |
|-----------|-------|-------|---------------|
| Experience | 3/5 | **4/5** | 3 missions chiffrées anonymisées (BTP devis 2h→15min, commerce Jouy-le-Moutier +35 % leads, industrie -20 % budget IT) avec localisation 78/95 visible. Manque la mission Claude/Odoo récente (TODO). |
| Expertise | 4/5 | **5/5** | knowsAbout 12 entrées exposées en pills, méthode 360° détaillée, stack technique (Claude Code, n8n, Odoo, MCP) visible. |
| Autorité | 3/5 | **5/5** | Page dédiée + Person JSON-LD avec `@id` + byline cliquable sur tous les articles + maillage footer/approche + sitemap + llms.txt + sameAs LinkedIn/X/pierrelegrand.fr. |
| Fiabilité | 3/5 | **4/5** | NAP cohérent avec LocalBusiness, description ≥ 150 mots, mentions outils, période d'activité. Manque France Num / Bpifrance (off-site Pierre). |

**Score citation triggers (`seo-audit.md` §6.7)** : 9/10 estimé — slug court ✅, définition intro ✅, listes (pills, missions, plateformes) ✅, FAQ optionnelle ❌ (non implémentée — peu pertinente pour une page bio), attribution naturelle ✅, auteur+lien ✅, timestamp dans missions ✅ (« Mis à jour le 21 mai 2026 »), TL;DR optionnel ❌ (excerpt absent — le hero joue ce rôle).

## TODO résiduels (à transmettre à l'orchestrateur)

1. **Photo headshot** — Pierre doit fournir `public/images/team/pierre-legrand.webp` (480×480 WebP < 100 Ko). Quand reçue : remplacer le placeholder PL dans `src/app/auteur/pierre-legrand/page.tsx` (zone `bg-violet-600`) et réintégrer le bloc `Person.image` du blueprint §4 dans le JSON-LD.
2. **URL GitHub** — non fournie ; champ exclu de `sameAs`. Pierre confirme/donne l'URL → ajouter dans le tableau `sameAs` de la page + éventuellement footer.
3. **Mission Claude/Odoo 78/95** — non fournie ; timeline actuelle = 3 missions issues des reviews. Pierre fournit (1 phrase secteur+zone, 1 défi, 1 solution Claude+Odoo, 1 chiffre) → l'ajouter dans le tableau `missions` du `page.tsx` (premier item) pour cluster 78/95.
4. **Validation Schema.org** post-déploiement — passer https://augmenter.pro/auteur/pierre-legrand dans https://validator.schema.org/ une fois pushé.
5. **GSC Index Inspect** — soumettre l'URL pour indexation accélérée.
6. **(Hors scope, noté pour cohérence)** Migrer les 2 derniers `pierrelegrand.fr` restants dans `src/app/layout.tsx` (lignes 36 `metadata.authors` et 122 `Organization.founder`) vers `augmenter.pro/auteur/pierre-legrand` quand la page est live et stable. Blueprint §5.1 demandait explicitement de les laisser pour cette livraison.

## Next concrete step
1. Orchestrateur (`2026-05-21-geo-citation-readiness.md`) : marquer sub-task #2 « done », intégrer ce handoff dans la table de suivi, et relancer Pierre sur les 3 TODOs (photo, GitHub URL, mission Claude/Odoo) — ce sont des inputs externes, pas du code.
3. Commit isolé recommandé (cf. bas de doc) avant d'enchaîner sur sub3 ou nouvelles itérations.

## How to resume
1. Lire ce doc + [blueprint §1-§6](2026-05-21-geo-citation-readiness-sub2-blueprint.md) pour le mapping fichier ↔ section.
2. Ouvrir [src/app/auteur/pierre-legrand/page.tsx](../../src/app/auteur/pierre-legrand/page.tsx) — c'est la pièce centrale (Person JSON-LD + 6 sections inline).
3. Pour réintégrer la photo : chercher `bg-violet-600` dans le hero et remplacer par un `<Image>` + ajouter le bloc `image` dans `personJsonLd` (cf. blueprint §4).
4. `/flow resume` pour repartir sur l'orchestrateur parent.

---

**Suggested commit (isolation des changements sub2 uniquement)** :

```
git add \
  src/app/auteur/ \
  src/components/layout/article-layout.tsx \
  src/components/layout/footer.tsx \
  src/app/approche/approche-view.tsx \
  public/sitemap.xml \
  public/llms.txt \
  public/images/team/INDEX.md \
  docs/sessions/2026-05-21-geo-citation-readiness-sub2.md
git commit -m "feat(seo): page auteur Pierre Legrand + Person JSON-LD + maillage E-E-A-T"
```
