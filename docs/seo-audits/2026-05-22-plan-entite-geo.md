# Plan d'action ENTITÉ — débloquer la citation GEO

**Date** : 2026-05-22
**Contexte** : capture ChatGPT Search = **0/3** (cf. [geo-prompts.md](2026-05-21-data/geo-prompts.md) §Synthèse Mai 2026). Trois analyses indépendantes (audit interne, critique robots.txt, tests ChatGPT) convergent : le frein **n'est ni le contenu ni la technique** — c'est l'**absence d'entité reconnue**. Les LLMs ne citent pas augmenter.pro parce qu'ils ne le reconnaissent pas comme source d'autorité, même quand le contenu rank sur Google (ex. ChatGPT recopie la grille tarifaire d'audit **sans citer**).

Ce document transforme « il faut construire l'entité » en **checklist actionnable**, et lie aux items 14-16 du [plan d'action de l'audit complet](2026-05-21-audit-complet.md#11-plan-daction-priorisé).

---

## 1. État des lieux — ce qui est déjà solide ✅

Audit réalisé le 2026-05-22 sur [layout.tsx](../../src/app/layout.tsx) + [auteur/pierre-legrand](../../src/app/auteur/pierre-legrand/page.tsx) :

- **NAP cohérent** à 100 % entre Person / Organization / LocalBusiness (téléphone, email, adresse Jouy-le-Moutier 95280 identiques partout)
- **Person JSON-LD riche** : `@id` stable, `jobTitle`, `description` (>150 mots), `knowsAbout` (12 domaines), `worksFor`, `address`, `areaServed`, `contactPoint`
- **`Article.author` → `@id` Person** sur tous les articles (lien éditorial↔auteur correct)
- **`founder` Organization → `@id` Person** (corrigé le 2026-05-22 — consolidation du graphe entité)
- **Page auteur publique** existante, indexée, dans sitemap

→ La **plomberie interne d'entité est faite**. Le manque est **externe**.

## 2. Le mur — `sameAs` sans signaux d'autorité 🔴

`Person.sameAs` actuel : LinkedIn, X, pierrelegrand.fr → **tous auto-déclarés**. Aucun signal qu'un LLM traite comme preuve d'entité tierce.

| Signal d'autorité | Présent ? | Poids LLM | Effort |
|-------------------|:--:|:--:|:--:|
| **Wikidata** (Q-item) | ❌ | ⭐⭐⭐ (le plus fort — alimente Google KG + training) | Moyen |
| **GitHub** actif | ❌ | ⭐⭐ (cohérent avec positionnement Claude Code/dev) | Faible |
| **France Num Activateur** (annuaire officiel) | ❌ | ⭐⭐ (autorité institutionnelle FR) | Moyen (démarche label) |
| **Bpifrance** directory | ❌ | ⭐⭐ | Moyen |
| **Mentions presse** indexables | ❌ | ⭐⭐⭐ (citation tierce = preuve ultime) | Élevé (digital PR) |
| LinkedIn / X / site perso | ✅ | ⭐ (auto-déclaré) | — |

## 3. Plan d'action — démarches externes (Pierre)

Par ROI/effort décroissant :

### 🥇 Priorité 1 — GitHub (effort faible, cohérent positionnement)
- [x] **Profil créé : https://github.com/Pi3r2Dev** (HTTP 200 vérifié 2026-05-26)
- [x] **`sameAs` branché** dans Person ([auteur/pierre-legrand](../../src/app/auteur/pierre-legrand/page.tsx)) ET Organization ([layout.tsx](../../src/app/layout.tsx)) — 2026-05-26
- [x] **Lien visible** ajouté sur la page auteur (hero + section Partenariats)
- [ ] Reste à faire : remplir bio + README de profil, publier 1-2 repos (`claude-md-templates-pme`, `prompts-dirigeant-pme`) dérivés des articles Claude Code qui rankent déjà

### 🥈 Priorité 2 — France Num Activateur (autorité institutionnelle FR)
- [x] **Demande soumise le 2026-05-26** (inscription étape 6/6 confirmée, courriel reçu). En attente d'analyse par la DGE / équipe France Num — pas de délai annoncé (« meilleurs délais »).
- [ ] **À FAIRE quand la fiche est validée et en ligne** : récupérer l'URL de la fiche annuaire France Num
- [ ] Ajouter cette URL aux `sameAs` du Person ([auteur/pierre-legrand](../../src/app/auteur/pierre-legrand/page.tsx)) ET de l'Organization ([layout.tsx](../../src/app/layout.tsx))
- [ ] Mentionner « Activateur France Num » sur la page auteur (texte visible, pas seulement schema)
- Textes de candidature utilisés (pour réutilisation / cohérence) : présentation structure 492 car + offre de service + compétences personnelles 490 car — tous alignés sur `jobTitle` JSON-LD
- Réf : pyramide d'offres + STRATEGIE-EDITORIALE §10

### 🥉 Priorité 3 — Wikidata (signal le plus fort, mais exige de la notoriété)
- [ ] **Prérequis** : ≥ 2-3 sources secondaires indépendantes (presse, annuaires officiels, interventions) — Wikidata refuse les entités auto-déclarées sans sources
- [ ] Donc : faire d'abord P1+P2+P4 pour accumuler les sources, PUIS créer le Q-item
- [ ] Q-item : « Pierre Legrand », occupation « consultant », employer « augmenter.pro », sources citées
- [ ] Ajouter l'URI Wikidata aux `sameAs` (c'est le plus haut signal)

### Priorité 4 — Bpifrance / CCI (institutionnel local)
- [ ] Vérifier éligibilité Bpifrance IA Booster directory
- [ ] Profil CCI Yvelines / Val d'Oise

### Priorité 5 — Mentions presse (long terme, digital PR)
- [ ] Le Parisien Yvelines/95, Les Échos Solutions, presse pro BTP locale
- [ ] Angle : le format `rapport-sectoriel-local` (ex. rapport BTP francilien) est un **aimant à reprise presse** — le proposer en exclusivité à un média local

### Alignement transversal — cohérence titre (NAP de l'entité personne)
- [ ] **Titre LinkedIn EXACT** = « Consultant IA & Transformation Digitale — augmenter.pro » (doit matcher `jobTitle` du JSON-LD au mot près)
- [ ] Bio X/Twitter alignée
- [ ] Bio GitHub alignée
- [ ] ⚠️ Les LLMs vérifient la cohérence du titre cross-plateforme pour valider l'entité — un « expert digital » ici et « consultant IA » là = dilution

## 4. Snippet code — `sameAs` à activer au fil des démarches

Dans [auteur/pierre-legrand/page.tsx](../../src/app/auteur/pierre-legrand/page.tsx), `personJsonLd.sameAs` — ajouter les URLs au fur et à mesure qu'elles existent :

```ts
sameAs: [
  "https://www.linkedin.com/in/legrand-pierre/",
  "https://x.com/Pi3r2Dev",
  "https://pierrelegrand.fr",
  // À activer dès que le profil/la fiche existe :
  // "https://github.com/<handle>",                          // P1
  // "https://www.francenum.gouv.fr/activateurs/<slug>",      // P2
  // "https://www.wikidata.org/wiki/Q<id>",                   // P3 (le plus fort)
  // "https://www.bpifrance.fr/<...>",                        // P4
],
```

Penser à répliquer le même `sameAs` dans **Organization.sameAs** ([layout.tsx](../../src/app/layout.tsx)) pour les URLs pertinentes au niveau entreprise (France Num, Bpifrance).

## 5. Autres optimisations entité (code, faible effort)

- [ ] **Photo Person** : le Person JSON-LD n'a pas d'`image` (l'avatar est un placeholder CSS « PL »). Ajouter une vraie photo de Pierre + propriété `image` au schema renforce l'entité. Bloqué sur disponibilité d'une photo.
- [ ] **`alumniOf`** : ajouter la formation de Pierre au Person JSON-LD (signal E-E-A-T, cité grille seo-audit §6.5).
- [ ] **`Organization.sameAs`** : aligner sur Person.sameAs (ajouter pierrelegrand.fr au minimum).

## 6. Boucle de mesure

- Re-tester les requêtes de [geo-prompts.md](2026-05-21-data/geo-prompts.md) après chaque jalon entité franchi (pas seulement T+7/T+30/T+90 du contenu).
- Hypothèse à valider : **est-ce l'ajout d'1-2 `sameAs` d'autorité (GitHub + France Num) qui débloque les premières citations**, ou faut-il attendre Wikidata + presse ? Le franchissement par paliers permet d'isoler le déclencheur.

---

**Synthèse** : la technique et le contenu sont à 9/10 ; l'entité est à ~3/10. **C'est le seul chantier qui déplacera le 0/3.** Les 3 premières démarches (GitHub, France Num, alignement LinkedIn) sont à effort faible/moyen et à fort effet de levier — à lancer en priorité. Wikidata et presse viennent après, une fois les sources accumulées.
