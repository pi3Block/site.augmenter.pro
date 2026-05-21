# Stratégie Éditoriale & Acquisition de Leads — augmenter.PRO

> ⚠️ **Snapshot historique — partiellement obsolète au 2026-05-21 (post-brainstorm)**
>
> | Section | État |
> |---|---|
> | §0 Décisions stratégiques actées (ci-dessous, ⭐ nouveau) | ✅ Source de vérité — lire en premier |
> | §1 Positionnement, §7 Banque de stats/PAA, §10 Métriques | ✅ Toujours pertinent (positionnement à compléter avec §0) |
> | §2 Données GSC | ⚠️ Snapshot 2026-02-13 — **superseded par** [`docs/seo-audits/2026-05-21-audit-complet.md`](docs/seo-audits/2026-05-21-audit-complet.md) §3 (baseline 90 j 2026-02-20 → 2026-05-20) |
> | §3 Clusters | ⚠️ **Cluster Claude Code / Odoo désormais pilier #1** (cf. §0 + audit-complet §9.1). Anciens clusters audit local 78/95 + IA stratégie restent valides en pilier #2 |
> | §4 Matrice, §5 File de production, §11 Journal | ❌ Désynchronisé — 5+ articles publiés depuis le 2026-02-13. Utiliser `git log src/app/blog/` et lister `src/app/blog/` pour l'état réel |
> | §6 Axes | ✅ Pertinent (compléter avec le binôme A d'offres décidé brainstorm §0) |
> | §8 Protocole crawl | ✅ Pertinent — bibliothèque MCP centralisée dans [`.claude/templates/seo/mcp-calls.md`](.claude/templates/seo/mcp-calls.md) |
> | §9 Optimisations techniques | ⚠️ À re-vérifier — sem. 22 quick wins déjà appliqués (titles/meta + ch01-cover + llms.txt + cleanup gratuit) |
> | §12 Prochaine action | ❌ Supplantée — la roadmap 12 semaines est dans [`docs/seo-audits/2026-05-21-audit-complet.md`](docs/seo-audits/2026-05-21-audit-complet.md) §14.5 |
>
> **Source de vérité opérationnelle** : `git log` + `src/app/blog/` + GSC live + [`docs/seo-audits/2026-05-21-audit-complet.md`](docs/seo-audits/2026-05-21-audit-complet.md) (audit complet + addendum §14) + [`.claude/templates/seo/project-context.md`](.claude/templates/seo/project-context.md) (contexte commandes SEO).
> **Ce document** : matériel de référence (positionnement, banque de stats/PAA, protocoles). Ne pas confondre avec un dashboard temps réel.
>
> **Dernière mise à jour de fond** : 2026-02-13
> **Dernière revue de cohérence** : 2026-05-21 (post-brainstorm `/seo-audit` — header refondu + §0 ajouté qui acte les décisions stratégiques)

---

## 0. Décisions stratégiques 2026-05-21 — Source de vérité

> Décisions actées en brainstorm post-audit, le 2026-05-21. **Ces décisions priment sur tout ce qui est listé après dans ce document.** Pour le détail complet : [`docs/seo-audits/2026-05-21-audit-complet.md`](docs/seo-audits/2026-05-21-audit-complet.md) §14.

### Persona unique
**Dirigeant PME tech-curieux** — gérant 10-200 salariés, francophone, qui code peut-être occasionnellement, déjà sur Odoo ou veut migrer, formé scientifique/tech, débordé mais curieux des LLMs. Veut comprendre la techno sans jargon, sans dépendre d'un intégrateur opaque.

### Positionnement 2027
**Double vecteur** :
1. **Référence francophone Claude Code & Odoo pour dirigeants PME** (national + Belgique/Suisse francophone) — pilier SEO #1, draine 88 % du trafic actuel
2. **Base PME locale 78/95** sur l'audit informatique, cybersécurité, formation présentielle — pilier #2

### Voix éditoriale (règle de découplage)
- **Pages commerciales** (landings, meta, CTAs) : **tutoiement direct**
- **Récits narratifs** (home `/`, `/approche` narrative, articles de fond) : **vouvoiement** maintenu

### Binôme d'offres Q2-Q3 2026 (lancement décidé)
- **Atelier Claude Code dirigeant PME** — 650 € HT, 1/2 journée, présentiel 78/95 ou visio. Mise en vente début juillet 2026, sem. 24-25.
- **Cohorte "IA pour dirigeants PME"** — 990 €/pers HT, 6 semaines, 8-12 personnes/promo, mix visio + 2 présentiels. Promo #1 rentrée septembre 2026, sem. 26-28.

### Offres reportées (Q4 2026 ou T1 2027 selon traction du binôme A)
- Sprint Odoo + Claude (4 jours, 6 500 €)
- Formation OPCO 5 jours certifiée Qualiopi (3 500 €)
- Abonnement veille IA PME (150 €/mois)
- Lead magnet PDF « Grille financements IA PME 2026 »
- Calculateur ROI IA interactif

### Roadmap d'activation (12 semaines, mai → août 2026)
Voir [`docs/seo-audits/2026-05-21-audit-complet.md`](docs/seo-audits/2026-05-21-audit-complet.md) §14.5. Capacité confirmée : 10-12 h/semaine.

### Quick wins déjà appliqués (sem. 22, 2026-05-21)
- Titles + meta réécrits : home (Référence Claude Code/Odoo), `/audit-informatique-yvelines`, `/audit-informatique-val-doise`, `/strategie-ia-pme`
- Home narrative ch01-cover + ch03-disciplines alignés sur le nouveau positionnement
- `llms.txt` + `llms-full.txt` mis à jour
- 5 occurrences résiduelles du mot « gratuit » nettoyées (1 critique volontaire conservée dans `ch07-audits.tsx`)
- Addendum §14 dans l'audit complet
- Logs GEO 3 tests ChatGPT du 2026-05-21 (0/3 capture — chantier GEO entity à ouvrir sem. 27+)

### À faire hors-session
- **🔴 Aligner LinkedIn Pierre Legrand** : poste "Consultant IA chez augmenter.pro" exact + créer/vérifier LinkedIn Company Page augmenter.pro
- **🟠 Sem. 23** : Refresh `claude-code-prompt-architecture` (TL;DR, skills section, attribution, FAQ schema)
- **🟠 Sem. 24-28** : Landings Atelier + Cohorte
- **🟢 Sem. 27+** : Audit GMB existant + chantier GEO entity (Wikidata, France Num, Bpifrance)

---

## 1. Positionnement Concurrentiel

### 1.1 Carte du marché

```
                    GÉO-CIBLAGE LOCAL (78/95)
                    Fort ────────────── Faible
                    │                    │
        ┌───────────┼────────────────────┤
  IA /  │ augmenter │                    │ Agence-IA.com
  Strat │ .PRO ★    │                    │ Mister IA
        │           │ RDE Marketing      │ Yes We Prompt
        ├───────────┼────────────────────┤
  Mixte │ IPA       │                    │ France Num
        │ Conseils  │                    │ CCI Paris IDF
        ├───────────┼────────────────────┤
  Audit │ ASAP (95) │                    │ Axido
  IT    │ Perenne'IT│                    │ Lapala.io
        │ Cover-Me  │                    │
        │ Zedix (95)│                    │
        └───────────┴────────────────────┘
```

**Position unique d'augmenter.PRO** : Seul acteur combinant expertise IA + géo-ciblage fort 78/95.
La fenêtre pour dominer cette intersection est MAINTENANT — avant que les acteurs locaux (ASAP, IPA Conseils) n'ajoutent l'IA, ou que les nationaux (Agence-IA) ne géo-ciblent.

### 1.2 Concurrents clés à surveiller

| Concurrent | Zone | Force | Faiblesse | Menace |
|---|---|---|---|---|
| **IPA Conseils** (ipaconseils.fr) | 78/92 | Blog actif, NIS2, compliance | Pas d'IA, dilué (alarmes) | HAUTE (audit/compliance) |
| **ASAP** (asap.fr) | 95 | Pricing transparent, "Diagnostic SI Flash" | Pas de blog, pas d'IA | HAUTE (audit 95) |
| **Agence-IA.com** | National | Volume massif de contenu IA | Zéro géo-ciblage, contenu générique | MOYENNE (IA national) |
| **Cover-Me.io** | Versailles | Pricing transparent, moderne | Nouveau, peu de contenu | MOYENNE (croissante) |
| **Perenne'IT** (perenne-it.fr) | 78 (Versailles) | Cybersécurité depuis 2004 | Focus étroit, site daté | MOYENNE (cybersécurité) |
| **RDE Marketing** | Cergy (95) | Seul "consultant IA" géo-ciblé 95 | Contenu très mince | FAIBLE |

### 1.3 Protocole de veille concurrentielle

**Fréquence** : Mensuelle (1ère semaine du mois)

**Requêtes de crawl** (utiliser crawl4ai self-hosted) :
```
# Blogs concurrents à crawler pour détecter nouveau contenu
- https://www.ipaconseils.fr/blog/          → NIS2, compliance, Yvelines
- https://www.agence-ia.com/blog/           → Tendances IA nationales
- https://www.perenne-it.fr/blog/           → Cybersécurité Versailles
- https://www.myriadconsulting.fr/ressources/ → IA + PME/ETI

# SERP à surveiller (scraper top 5 Google)
- "audit informatique PME Yvelines"
- "stratégie IA PME"
- "consultant IA Yvelines"
- "cybersécurité PME 78"
- "transformation digitale BTP Yvelines"
```

**Ce qu'on cherche** :
- Nouveaux contenus publiés par les concurrents
- Changements de positionnement SERP
- Nouveaux entrants sur nos mots-clés
- Angles/formats qu'on ne couvre pas encore

---

## 2. Performance Actuelle (GSC)

> **Source** : Google Search Console — snapshot du 2026-02-13
> **Action** : Mettre à jour ces données à chaque révision du document (copier depuis GSC ou utiliser MCP `search_analytics`)

### 2.1 Requêtes avec impressions

| Requête | Impressions | Clics | CTR | Position est. | Page qui répond | Verdict |
|---|---|---|---|---|---|---|
| augmentez votre potentiel | 88 | 0 | 0% | 20+ | Homepage | ❌ Faux positif — intent motivationnel |
| **stratégie ia pme** | **63** | **0** | 0% | 15-25 | `/strategie-ia-pme` | ⭐ Meilleur potentiel — renforcer |
| audit informatique 78 | 20 | 0 | 0% | 15-25 | `/audit-informatique-yvelines` | 🔧 Renforcer autorité topique |
| ia booster | 20 | 0 | 0% | 20+ | Redirect → `/strategie-ia-pme` | ❌ Keyword navigational, faible valeur |
| audit 360 | 16 | 0 | 0% | 20+ | `/prestations` | ❌ Trop générique |
| augmenter | 12 | 0 | 0% | 30+ | Homepage | ❌ Brand trop générique |
| audit informatique val d'oise | 12 | 0 | 0% | 15-25 | `/audit-informatique-val-doise` | 🔧 Renforcer autorité topique |
| audit système réseau informatique yvelines | 11 | 0 | 0% | 15-25 | `/audit-informatique-yvelines` | 🔧 Long-tail — "réseau/système" absent du title |
| audit réseau informatique yvelines | 11 | 0 | 0% | 15-25 | `/audit-informatique-yvelines` | 🔧 Idem |
| audit informatique 78000 | 9 | 0 | 0% | 20+ | `/audit-informatique-yvelines` | 🔧 Hyper-local Versailles — non couvert |

### 2.2 Diagnostic

**Problème principal** : Position 15-30+ sur toutes les requêtes → CTR quasi nul à ces positions.

**Causes racines** :
1. **Autorité topique insuffisante** : 7 articles de blog seulement. Google a besoin de plus de signaux pour positionner le site sur "audit informatique" et "stratégie IA PME".
2. **Pas de contenu satellite** : Les pages piliers (`/strategie-ia-pme`, `/audit-informatique-yvelines`) ne sont pas soutenues par un cluster d'articles connexes.
3. **Maillage interne faible** : Peu de liens entre articles et pages piliers.
4. **Titles optimisables** : "réseau", "système", "Versailles", "78000" absents des titles alors que ces termes génèrent des impressions.

### 2.3 Objectifs à 3 mois

| KPI | Actuel | Cible M+3 | Levier |
|---|---|---|---|
| Clics / mois | 0 | 50+ | Monter en P1 sur 3-5 requêtes |
| Impressions / mois | ~280 | 1 000+ | Nouveaux contenus = nouvelles requêtes |
| CTR moyen | 0% | 3-5% | Titles optimisés + positions < 10 |
| Pages indexées | 22 | 30+ | +8 contenus stratégiques |

---

## 3. Clusters de Mots-Clés

### 3.1 Cluster "Audit Informatique" (LOCAL — priorité 1)

**Page pilier** : `/audit-informatique-yvelines` + `/audit-informatique-val-doise`

| Mot-clé | Difficulté | Concurrence locale | Statut |
|---|---|---|---|
| audit informatique Yvelines | Moyenne | Jesto, DLPC, Fastwatt | ✅ Page existante |
| audit informatique Val d'Oise | Moyenne | ASAP, Zedix, A.M.I | ✅ Page existante |
| audit informatique Versailles | Faible | RCB, Perenne'IT | 📋 À créer (page locale) |
| audit informatique Saint-Germain-en-Laye | Très faible | Personne | 📋 À créer |
| audit informatique Cergy Pontoise | Très faible | Zedix (faible) | 📋 À créer |
| audit réseau informatique Yvelines | Faible | Fastwatt | 🔧 Couvrir dans page existante |
| combien coûte un audit informatique PME | Moyenne | Digitemis, ASAP | 📋 Article pricing |
| audit cybersécurité PME Yvelines | Moyenne | ComputerLand, Redopus | 📋 Article |
| 5 signes moderniser informatique PME | Faible | Faible | ✅ Article existant |

**Contenu satellite à créer** (soutien du pilier) :
- [ ] "Combien coûte un audit informatique en Yvelines ? Tarifs 2026"
- [ ] "Audit informatique vs audit cybersécurité : quelle différence ?"
- [ ] "Comment préparer son entreprise à un audit informatique"
- [ ] "Audit informatique Versailles (78000) — Diagnostic PME gratuit"
- [ ] "Audit informatique Cergy-Pontoise (95) — Diagnostic PME gratuit"

### 3.2 Cluster "Stratégie IA PME" (NATIONAL + LOCAL — priorité 1)

**Page pilier** : `/strategie-ia-pme`

| Mot-clé | Difficulté | Concurrence | Statut |
|---|---|---|---|
| stratégie IA PME | Haute | France Num, CCI, Yes We Prompt | ✅ Page existante (à renforcer) |
| consultant IA PME | Haute | Mister IA, SavoirIA | ✅ Couvert (homepage + pilier) |
| consultant IA Cergy | Très faible | RDE Marketing (mince) | 📋 Page locale |
| consultant IA Versailles | Très faible | Personne | 📋 Page locale |
| comment intégrer IA dans PME | Moyenne | France Num, Yes We Prompt | 📋 Article guide |
| combien coûte stratégie IA PME | Faible | Personne localement | 📋 Article pricing |
| ROI IA PME | Moyenne | Sparse | 📋 Article |
| aides financement IA PME Bpifrance | Faible | Personne localement | 📋 Article (Osez l'IA) |
| IA remplace employes PME | Moyenne | Contenu générique | 📋 Article (angle rassurant) |

**Contenu satellite à créer** :
- [ ] "IA Booster & Osez l'IA : financez votre transformation IA à 80% (78/95)"
- [ ] "Par où commencer avec l'IA dans sa PME ? Guide étape par étape"
- [ ] "Quel ROI attendre de l'IA dans une PME ? Chiffres et cas concrets"
- [ ] "Consultant IA à Cergy (95) — Diagnostic et accompagnement PME"

### 3.3 Cluster "Secteurs Métiers" (LOCAL — priorité 2)

**Aucune page pilier existante** — gap critique

| Mot-clé | Difficulté | Concurrence | Statut |
|---|---|---|---|
| digitalisation BTP Yvelines | Très faible | ZÉRO | 📋 Page sectorielle |
| IA agence immobilière Yvelines | Très faible | ZÉRO | 📋 Page sectorielle |
| IA cabinet avocat Versailles | Très faible | ZÉRO (national: OptimumIA, Justifit) | 📋 Page sectorielle |
| IA cabinet comptable Val d'Oise | Très faible | ZÉRO | 📋 Page sectorielle |
| automatisation artisan plombier 78 | Très faible | ZÉRO | 📋 Article |
| facturation électronique BTP 2026 | Faible | IPA Conseils seul | 📋 Article (urgent — deadline sept 2026) |

**Contenu à créer** :
- [ ] Page sectorielle : "Solutions IA & Digitales pour le BTP (Yvelines/Val d'Oise)"
- [ ] Page sectorielle : "IA pour Cabinets d'Avocats & Notaires (78/95)"
- [ ] Article : "Facturation électronique 2026 : guide pour artisans et PME du BTP"
- [ ] Article : "Comment l'IA transforme les agences immobilières en Yvelines"

### 3.4 Cluster "Compliance & Réglementaire" (NATIONAL + LOCAL — priorité 2)

**Aucune page pilier** — gap important avec deadline réglementaire 2026

| Mot-clé | Difficulté | Concurrence | Statut |
|---|---|---|---|
| NIS2 PME France | Moyenne | IPA Conseils, Mobilecube, EPX | 📋 Article |
| NIS2 PME Yvelines | Faible | IPA Conseils seul | 📋 Article (angle local) |
| AI Act PME 2026 | Faible | dpo101.fr seul | 📋 Article |
| conformité RGPD PME 78 | Faible | Sparse | 📋 Article |
| cybersécurité obligatoire PME 2026 | Moyenne | Mobilecube, EPX | 📋 Article |

**Contenu à créer** :
- [x] "NIS2 et votre PME en Yvelines : êtes-vous concerné ? (Guide 2026)" → `/blog/nis2-pme-yvelines-val-doise`
- [ ] "AI Act 2026 : ce que votre PME doit savoir avant août"
- [ ] "Cybersécurité PME : les nouvelles obligations 2026 (Loi Résilience)"

### 3.5 Cluster "MCP & Intégration IA" (NICHE TECH — priorité 3)

**Page pilier** : `/integration-mcp` (existante, bien fournie)

| Mot-clé | Difficulté | Concurrence | Statut |
|---|---|---|---|
| serveur MCP guide | Faible | Sparse | ✅ 2 articles existants |
| intégration CRM IA | Moyenne | National | ✅ Article existant |
| MCP protocol PME | Très faible | Personne | ✅ Couvert |

**Statut** : Cluster déjà bien couvert. Entretenir avec des mises à jour ponctuelles.

### 3.6 Cluster "Vente Commerciale IA" (NATIONAL — priorité 3)

**Pas de page pilier** — contenu dispersé en articles

| Mot-clé | Difficulté | Concurrence | Statut |
|---|---|---|---|
| IA vente commerciale | Haute | National | ✅ Article existant |
| comparatif LLM vente | Moyenne | Sparse | ✅ Article existant |
| lead generation rénovation énergétique | Moyenne | National | ✅ Article existant |

**Statut** : Cluster secondaire, pas dans le cœur de conversion local. Ne pas investir davantage sauf demande.

---

## 4. Matrice de Contenu — Existant × À Créer

### 4.1 Contenu pilier (cornerstone)

| Thème | Page | Statut | Cluster supporté par |
|---|---|---|---|
| Stratégie IA PME | `/strategie-ia-pme` | ✅ Existe (5 000 mots) | 1 article connexe |
| Audit informatique 78 | `/audit-informatique-yvelines` | ✅ Existe (4 500 mots) | 1 article connexe |
| Audit informatique 95 | `/audit-informatique-val-doise` | ✅ Existe (4 500 mots) | 1 article connexe |
| Intégration MCP | `/integration-mcp` | ✅ Existe (4 000 mots) | 2 articles connexes |
| **BTP & Métiers du bâtiment** | `/secteurs/btp` | 📋 À CRÉER | 0 articles |
| **Professions libérales (avocats)** | `/secteurs/professions-liberales` | 📋 À CRÉER | 0 articles |
| **Compliance NIS2/AI Act** | Article pilier | 📋 À CRÉER | 0 articles |

### 4.2 Contenu satellite (articles de cluster)

| Article | Cluster soutenu | Priorité | Statut |
|---|---|---|---|
| Combien coûte un audit informatique (78) | Audit IT | P1 | ✅ |
| Audit info vs audit cybersécurité | Audit IT | P1 | 📋 |
| IA Booster / Osez l'IA : financement 80% | Stratégie IA | P1 | 📋 |
| NIS2 PME Yvelines : guide conformité | Compliance | P1 | 📋 |
| Facturation électronique BTP 2026 | Secteurs | P2 | 📋 |
| Veille concurrentielle IA pour PME | Stratégie IA | P1 | ✅ |
| Automatiser emails et réseaux sociaux avec l'IA | Stratégie IA | P1 | ✅ |
| Par où commencer avec l'IA dans sa PME | Stratégie IA | P2 | 📋 |
| ROI de l'IA dans une PME — chiffres concrets | Stratégie IA | P2 | 📋 |
| AI Act 2026 : guide PME | Compliance | P2 | 📋 |
| Comment préparer un audit informatique | Audit IT | P3 | 📋 |
| Choisir son prestataire informatique (78) | Audit IT | P3 | 📋 |

### 4.3 Contenu local (pages zones)

| Page | Cluster soutenu | Priorité | Statut |
|---|---|---|---|
| Audit informatique Versailles (78000) | Audit IT | P2 | 📋 |
| Consultant IA Cergy (95) | Stratégie IA | P2 | 📋 |
| Audit informatique Saint-Germain-en-Laye | Audit IT | P3 | 📋 |
| Consultant IA Versailles (78) | Stratégie IA | P3 | 📋 |
| Cybersécurité PME Poissy-Sartrouville | Audit IT | P3 | 📋 |

### 4.4 Contenu conversion (études de cas, lead magnets)

| Contenu | Type | Priorité | Statut |
|---|---|---|---|
| Étude de cas : PME BTP Versailles — audit qui réduit les pannes | Étude de cas | P1 | 📋 |
| Étude de cas : Cabinet avocat 78 — gain de temps IA | Étude de cas | P2 | 📋 |
| Checklist PDF : "Votre PME est-elle prête pour NIS2 ?" | Lead magnet | P2 | 📋 |
| Auto-diagnostic : maturité digitale PME (quiz interactif) | Lead magnet | P3 | 📋 |

---

## 5. File de Production Prioritisée

### Sprint 1 — Autorité topique (Février-Mars 2026) ⭐ EN COURS

**Objectif** : Passer de 7 à 12+ articles pour renforcer les clusters "audit IT" et "stratégie IA".

| # | Contenu | Type | Cluster | Mot-clé principal | Statut |
|---|---|---|---|---|---|
| 1 | NIS2 PME Yvelines : guide conformité 2026 | Article blog | Compliance | nis2 pme yvelines | ✅ Publié |
| 2 | Combien coûte un audit informatique en Yvelines | Article blog | Audit IT | prix audit informatique pme | ✅ Publié |
| 3 | Page sectorielle BTP (78/95) | Page sectorielle | Secteurs | digitalisation btp yvelines | 📋 À faire |
| 4 | IA Booster & Osez l'IA — financement 80% | Article blog | Stratégie IA | financement ia pme bpifrance | 📋 À faire |
| 5 | Facturation électronique 2026 pour BTP/artisans | Article blog | Secteurs + Compliance | facturation électronique btp 2026 | 📋 À faire |

### Sprint 2 — Conversion & Secteurs (Avril-Mai 2026)

| # | Contenu | Type | Cluster | Mot-clé principal | Statut |
|---|---|---|---|---|---|
| 6 | Page sectorielle Avocats/Notaires (78/95) | Page sectorielle | Secteurs | ia cabinet avocat yvelines | 📋 |
| 7 | Étude de cas : PME BTP — audit IT | Étude de cas | Audit IT | étude de cas audit pme btp | 📋 |
| 8 | Par où commencer avec l'IA dans sa PME | Article blog | Stratégie IA | intégrer ia pme guide | 📋 |
| 9 | AI Act 2026 : ce que votre PME doit savoir | Article blog | Compliance | ai act pme 2026 | 📋 |
| 10 | Consultant IA Cergy (95) | Page locale | Stratégie IA | consultant ia cergy | 📋 |

### Sprint 3 — Local SEO & Long-tail (Juin-Juillet 2026)

| # | Contenu | Type | Cluster | Mot-clé principal | Statut |
|---|---|---|---|---|---|
| 11 | Audit informatique Versailles (78000) | Page locale | Audit IT | audit informatique versailles | 📋 |
| 12 | ROI de l'IA dans une PME — chiffres concrets | Article blog | Stratégie IA | roi ia pme | 📋 |
| 13 | Audit informatique vs audit cybersécurité | Article blog | Audit IT | différence audit info cybersécurité | 📋 |
| 14 | Comment choisir son prestataire informatique (78) | Article blog | Audit IT | choisir prestataire informatique yvelines | 📋 |
| 15 | Étude de cas : Cabinet avocat 78 — gain IA | Étude de cas | Secteurs | étude de cas ia avocat | 📋 |

### Sprint 4 — Consolidation Rentrée (Août-Septembre 2026)

| # | Contenu | Type | Cluster | Mot-clé principal | Statut |
|---|---|---|---|---|---|
| 16 | Cybersécurité PME 2026 : nouvelles obligations | Article blog | Compliance | obligations cybersécurité pme 2026 | 📋 |
| 17 | Audit informatique Saint-Germain-en-Laye | Page locale | Audit IT | audit informatique saint germain | 📋 |
| 18 | Consultant IA Versailles (78) | Page locale | Stratégie IA | consultant ia versailles | 📋 |
| 19 | IA pour agences immobilières Yvelines | Article blog | Secteurs | ia agence immobilière yvelines | 📋 |
| 20 | Bilan & préparation Q4 | Mise à jour | Tous | — | 📋 |

### Backlog (non priorisé)

- Comment préparer son entreprise à un audit informatique
- Automatisation pour artisans plombiers/électriciens 78
- IA cabinet comptable Val d'Oise
- Quiz interactif : maturité digitale PME
- Checklist PDF NIS2 (lead magnet)
- Cybersécurité Poissy-Sartrouville (page locale)
- Audit informatique Cergy-Pontoise (page locale)

---

## 6. Axes de Variabilité

> Ces axes permettent à `/create-resource` de produire du contenu différent à chaque invocation.
> Combiner les axes pour générer des sujets uniques.

### 6.1 Axe géographique

| Zone | Villes clés | Départements | Statut couverture |
|---|---|---|---|
| Versailles & Sud Yvelines | Versailles, Le Chesnay, Viroflay, Vélizy | 78 | 🟡 Partiel (page 78 générique) |
| Saint-Germain & Nord Yvelines | Saint-Germain-en-Laye, Poissy, Sartrouville, Le Pecq | 78 | 🔴 Non couvert |
| Rambouillet & Ouest Yvelines | Rambouillet, Houdan, Montfort-l'Amaury | 78 | 🔴 Non couvert |
| Cergy-Pontoise | Cergy, Pontoise, Osny, Éragny | 95 | 🔴 Non couvert |
| Argenteuil-Sarcelles | Argenteuil, Sarcelles, Bezons, Franconville | 95 | 🔴 Non couvert |
| Île-de-France élargie | Paris, Nanterre, Boulogne | 75/92 | 🔴 Hors scope principal |

**Utilisation** : Chaque page locale reprend la structure d'`/audit-informatique-yvelines` mais avec des données locales spécifiques (nom de villes, entreprises locales, particularités économiques du bassin).

### 6.2 Axe sectoriel

| Secteur | Problématiques spécifiques | Mots-clés métier | Couverture |
|---|---|---|---|
| **BTP & Construction** | Mobilité chantier, devis, facturation, SPIGAO/BIM | digitalisation btp, facturation électronique artisan | 🔴 Non couvert |
| **Professions libérales (avocats, notaires)** | RPVA, gestion documentaire, RGPD, secret professionnel | ia cabinet avocat, automatisation cabinet notaire | 🔴 Non couvert |
| **Immobilier** | CRM mandats, estimation IA, visite virtuelle | ia agence immobilière, crm immobilier | 🔴 Non couvert |
| **Industrie / Manufacturing** | ERP, maintenance prédictive, supply chain | automatisation industrie pme, erp industrie 78 | 🔴 Non couvert |
| **Cabinets comptables** | Saisie automatisée, rapprochement bancaire, DSN | ia cabinet comptable, automatisation comptabilité | 🔴 Non couvert |
| **Commerce / Retail** | Gestion stock, fidélisation, e-commerce | digitalisation commerce, ia retail pme | 🔴 Non couvert |

**Utilisation** : Les pages sectorielles combinent expertise IA + langage métier spécifique + géo-ciblage. Chaque secteur peut générer 1 page sectorielle + 2-3 articles satellites.

### 6.3 Axe format de contenu

| Format | Quand l'utiliser | Exemples |
|---|---|---|
| **Article guide** (1500-2500 mots) | Intention informationnelle, PAA, long-tail | "Par où commencer avec l'IA" |
| **Article pricing/coûts** (1000-1500 mots) | PAA "combien coûte", intent commercial | "Combien coûte un audit informatique" |
| **Page sectorielle** (2000-3000 mots) | Ciblage vertical métier | "IA pour le BTP" |
| **Page locale SEO** (1500-2500 mots) | Ciblage ville/zone | "Audit informatique Versailles" |
| **Étude de cas** (800-1500 mots) | Preuve sociale, E-E-A-T | "PME BTP : audit qui réduit les pannes de 60%" |
| **Comparatif/décision** (1500-2000 mots) | Intent commercial, milieu de funnel | "Audit info vs audit cybersécurité" |
| **Article réglementaire** (1500-2000 mots) | Urgence compliance, deadline | "NIS2 : êtes-vous concerné ?" |
| **Lead magnet** (PDF 5-10 pages) | Capture email, haut de funnel | "Checklist NIS2" |

### 6.4 Axe intention de recherche

| Intention | Part du funnel | Action utilisateur | CTA adapté |
|---|---|---|---|
| **Informationnelle** | Haut (awareness) | Cherche à comprendre | "En savoir plus" → article connexe |
| **Commerciale** | Milieu (consideration) | Compare, évalue | "Voir nos tarifs" → /prestations |
| **Transactionnelle** | Bas (decision) | Prêt à agir | "Réserver mon audit gratuit" → /contact |
| **Locale** | Tous niveaux | Cherche un prestataire proche | "Nous contacter" → /contact avec géo |

### 6.5 Axe saisonnier & réglementaire

| Période | Événement | Contenu à publier (4-6 semaines avant) |
|---|---|---|
| **Fév-Mars 2026** | Loi Résilience (transposition NIS2) | Guides conformité, audit readiness |
| **Juillet 2026** | Pré-rentrée, préparation budgets | "Préparez votre rentrée digitale" |
| **Août 2026** | AI Act — obligations "Haut Risque" | Guide AI Act PME |
| **Sept 2026** | Facturation électronique (réception obligatoire) | Guide facture électronique BTP/artisans |
| **Sept-Oct 2026** | **PEAK SEASON** — rentrée, budgets validés, NIS2 deadline | Push maximal audit + IA |
| **Oct 2026** | NIS2 — deadline 10 mesures cybersécurité | Contenu urgence compliance |
| **Nov-Déc 2026** | Bilans de fin d'année, préparation 2027 | Rétrospectives, tendances 2027 |

### 6.6 Matrice de combinaison (exemples)

> Combiner les axes pour générer des sujets originaux. Chaque cellule = 1 contenu potentiel.

| | BTP | Avocats | Immobilier | Industrie |
|---|---|---|---|---|
| **Versailles (78)** | "Digitalisation BTP à Versailles : guide PME" | "IA pour cabinet avocat Versailles — Barreau 78" | "IA pour agences immobilières Versailles" | — |
| **Cergy (95)** | "Facturation électronique BTP Cergy 2026" | — | "CRM IA pour agences immobilières Cergy" | "Automatisation industrie Cergy-Pontoise" |
| **NIS2** | "NIS2 et entreprises BTP : êtes-vous concerné ?" | "Cybersécurité cabinet avocat : obligations 2026" | — | "NIS2 industrie PME : guide conformité" |
| **Pricing** | "Combien coûte la digitalisation BTP ?" | "Budget IA pour un cabinet d'avocats" | — | "ROI automatisation industrie PME" |

---

## 7. Banque de Données — Stats, Sources, PAA

### 7.1 Statistiques clés (à citer dans les contenus)

| Statistique | Source | Utiliser dans |
|---|---|---|
| 73% des PME françaises ont subi ≥ 1 cyberattaque en 2024 | ANSSI | Audit, cybersécurité, NIS2 |
| Seules 28% avaient réalisé un audit avant l'incident | ANSSI | Urgence audit |
| 15 000+ entités couvertes par NIS2 en France (vs 300 avant) | Transposition UE | NIS2 |
| Amendes NIS2 : jusqu'à 10M€ ou 2% du CA | Directive NIS2 | NIS2, risque |
| Coût audit informatique PME : 2 000-10 000 € HT | Digitemis, ASAP, Deefense | Article pricing |
| Audit complet (technique + gouvernance) : 7 000-20 000 € | Deefense | Article pricing |
| Seulement 5% des PME françaises utilisent l'IA (adoption ×2 YoY) | Independant.io | Stratégie IA |
| 88% citent le manque d'expertise interne comme frein à l'IA | Multi-sources | Consulting value prop |
| BTP : seules 58% des petites entreprises ont un site web | France Num | Digitalisation BTP |
| Avocats : 73% passent 40%+ du temps sur des tâches admin répétitives | CNB | IA avocats |
| L'IA réduit 30-50% du temps admin des avocats | Multi-sources | IA avocats |
| 4 386 événements de sécurité traités par l'ANSSI en 2024 (+15% YoY) | Rapport annuel ANSSI | Cybersécurité |
| Phishing = 60% des attaques (données CESIN) | CESIN | Sensibilisation sécurité |

### 7.2 Questions PAA (People Also Ask) — à transformer en contenus

#### Cluster "Audit informatique PME"
1. Pourquoi réaliser un audit informatique en entreprise ?
2. Combien coûte un audit informatique pour une PME ?
3. Quelle est la durée d'un audit informatique ?
4. Quels sont les points clés à analyser lors d'un audit ?
5. Comment choisir un prestataire pour un audit informatique ?
6. À quelle fréquence faut-il faire un audit informatique ?
7. L'audit informatique est-il obligatoire pour les PME ?
8. Que contient un rapport d'audit informatique ?
9. Quelle différence entre audit informatique et audit cybersécurité ?
10. Comment préparer son entreprise à un audit informatique ?

#### Cluster "Stratégie IA PME"
1. Comment intégrer l'IA dans une PME ?
2. Quels sont les outils IA les plus utiles pour les PME ?
3. Combien coûte une stratégie IA pour une PME ?
4. Par où commencer avec l'IA dans sa PME ?
5. L'IA va-t-elle remplacer les employés dans les PME ?
6. Quels sont les risques de l'IA pour les PME ?
7. Existe-t-il des aides financières pour les PME qui adoptent l'IA ?
8. Quel ROI attendre de l'IA dans une PME ?
9. Faut-il former ses équipes avant d'adopter l'IA ?
10. Quelle différence entre IA générative et IA traditionnelle pour PME ?

#### Cluster "Transformation digitale BTP"
1. Quels outils numériques pour les artisans du BTP ?
2. Comment digitaliser un chantier ?
3. La facturation électronique est-elle obligatoire en 2026 ?
4. Quel budget prévoir pour la transformation digitale BTP ?
5. Comment former ses équipes BTP au numérique ?

#### Cluster "IA cabinet avocat"
1. Quels outils IA pour un cabinet d'avocat ?
2. L'IA peut-elle remplacer un avocat ?
3. Comment automatiser la gestion d'un cabinet juridique ?
4. L'IA est-elle conforme à la déontologie des avocats ?
5. Quel coût pour intégrer l'IA dans un cabinet ?

### 7.3 Formats qui rankent (analyse SERP)

| Format | Fréquence top 10 | Difficulté à ranker | Différenciation |
|---|---|---|---|
| Pages landing géo-ciblées | 70%+ | Faible-Moyenne | Faible (tout le monde en a) |
| Guides complets (2000+ mots) | 50% | Moyenne | Faible |
| Articles réglementaires (NIS2, RGPD, AI Act) | 40% | Moyenne | Moyenne (angle local = fort) |
| Listicles "Top X" / "X raisons" | 30% | Faible | Faible |
| Guides pricing/coûts | 25% | Moyenne | Forte (transparence rare) |
| **Études de cas chiffrées** | **<10%** | **Faible** | **TRÈS FORTE** |
| **Outils interactifs / checklists** | **<5%** | **Faible** | **TRÈS FORTE** |
| **Comparatifs/guides de décision** | **10%** | **Faible** | **Forte** |

---

## 8. Protocole de Crawl Web — Instructions pour `/create-resource`

> Quand `/create-resource` est invoqué, il DOIT exécuter ce protocole de recherche avant de rédiger.

### 8.1 Recherche de mots-clés

```
ORDRE DE PRIORITÉ :

1. DataForSEO (MCP, si disponible) :
   - `keywords_google_ads_search_volume` → volume exact FR
   - `labs_google_keyword_ideas` → suggestions long-tail
   - `serp_google_organic_live` → top 10 réel

2. Google Search Console (MCP, si disponible) :
   - `search_analytics` → position actuelle, impressions, CTR sur le sujet

3. Fallback (si MCP indisponible) :
   - Recherche web : "{mot-clé} volume recherche france 2026"
   - crawl4ai self-hosted (`https://crawl4ai.augmenter.pro`) : scraper les 5 premiers résultats Google pour le mot-clé cible. Firecrawl interdit (cf. [CLAUDE.md](CLAUDE.md))
```

### 8.2 Analyse concurrentielle (par contenu)

```
AVANT de rédiger, crawler les 3-5 premiers résultats Google pour le mot-clé cible :

1. Identifier : structure (H2/H3), longueur, angle, données utilisées
2. Lister : ce qui manque dans ces contenus (angle local ? données chiffrées ? cas concrets ?)
3. Définir : la valeur ajoutée spécifique d'augmenter.PRO sur ce sujet

REQUÊTES DE CRAWL TYPES :
- Google : "site:ipaconseils.fr {sujet}" → vérifier si IPA Conseils a déjà couvert
- Google : "site:agence-ia.com {sujet}" → vérifier si contenu national existe
- Google : "{mot-clé principal}" → top 5 pour analyse d'écart
```

### 8.3 Vérification de cohérence (pré-rédaction)

```
AVANT de rédiger, vérifier dans ce document :

1. Le contenu est-il dans la FILE DE PRODUCTION (§5) ?
   - OUI → respecter la priorité et le cluster assigné
   - NON → vérifier qu'il ne fait pas doublon avec un contenu existant ou planifié

2. Quel CLUSTER de mots-clés ce contenu soutient-il (§3) ?
   - Identifier la page pilier à lier
   - Identifier 2-3 articles satellites existants pour le maillage

3. Quels AXES DE VARIABILITÉ s'appliquent (§6) ?
   - Géographique : quelle zone ciblée ?
   - Sectoriel : quel métier ciblé ?
   - Intention : informationnelle, commerciale, transactionnelle ?
   - Saisonnier : y a-t-il une deadline réglementaire à exploiter ?

4. Quelles DONNÉES de la banque (§7.1) sont pertinentes ?
   - Sélectionner 2-3 stats à intégrer naturellement

5. Quelles questions PAA (§7.2) ce contenu peut-il couvrir ?
   - Intégrer en FAQ ou en sous-sections
```

---

## 9. Optimisations Techniques Immédiates

> Actions à réaliser sur les pages EXISTANTES pour améliorer les positions.

### 9.1 Titles à optimiser (basé sur GSC)

| Page | Title actuel | Title optimisé | Raison |
|---|---|---|---|
| `/audit-informatique-yvelines` | "Audit Informatique Yvelines (78) : Diagnostic PME Gratuit" | "Audit Informatique & Réseau Yvelines (78) — Diagnostic Gratuit" | Ajouter "réseau" (11 impressions sur cette variante) |
| `/audit-informatique-val-doise` | "Audit Informatique Val-d'Oise (95) : Diagnostic PME Gratuit" | "Audit Informatique Val-d'Oise (95) — Diagnostic PME Gratuit 60min" | Ajouter durée (argument de conversion) |
| `/strategie-ia-pme` | "Stratégie IA pour PME : Diagnostic & Accompagnement Gratuit" | "Stratégie IA pour PME : Diagnostic Gratuit 60min | 78/95" | Ajouter géo + durée |

### 9.2 Maillage interne à renforcer

| Depuis | Vers | Texte d'ancrage suggéré |
|---|---|---|
| `/blog/5-signes-moderniser-informatique-pme` | `/audit-informatique-yvelines` | "audit informatique en Yvelines" |
| `/blog/5-signes-moderniser-informatique-pme` | `/audit-informatique-val-doise` | "diagnostic informatique Val d'Oise" |
| `/strategie-ia-pme` | `/blog/comparatif-llm-vente-commerciale` | "comparatif des IA pour la vente" |
| `/blog/ia-redefinit-vente-commerciale` | `/strategie-ia-pme` | "définir votre stratégie IA" |
| `/blog/machine-de-guerre-commerciale` | `/prestations` | "nos prestations d'accompagnement" |
| Homepage (blog preview) | Articles récents | Vérifier que les 3 derniers articles sont affichés |

### 9.3 FAQ JSON-LD à ajouter

| Page | Questions FAQ à ajouter (PAA) |
|---|---|
| `/audit-informatique-yvelines` | "Combien coûte un audit informatique ?", "Quelle durée ?", "Est-ce obligatoire ?" |
| `/strategie-ia-pme` | Déjà 6 FAQ ✅ |
| `/prestations` | "Quelle différence entre Audit 180° et 360° ?", "Le diagnostic est-il vraiment gratuit ?" |

---

## 10. Métriques & Processus de Mise à Jour

### 10.1 KPIs de suivi

| Métrique | Outil | Fréquence | Cible M+3 | Cible M+6 |
|---|---|---|---|---|
| Clics organiques / mois | GSC | Hebdo | 50 | 200 |
| Impressions / mois | GSC | Hebdo | 1 000 | 3 000 |
| CTR moyen | GSC | Mensuel | 3% | 5% |
| Position moyenne (top requêtes) | GSC | Mensuel | < 15 | < 8 |
| Pages indexées | GSC | Mensuel | 30 | 40 |
| Leads / mois (formulaire contact) | GA4/GTM | Mensuel | 3 | 10 |
| Contenus publiés / mois | Ce document | Mensuel | 3-4 | 2-3 |

### 10.2 Processus de mise à jour de ce document

```
APRÈS CHAQUE PUBLICATION :
1. Mettre à jour le statut dans §5 (File de Production) : 📋 → ✅
2. Mettre à jour §4 (Matrice de Contenu) : ajouter le contenu créé
3. Si le contenu crée un nouveau cluster ou page pilier → mettre à jour §3

MENSUELLEMENT (1ère semaine) :
1. Mettre à jour §2 (Données GSC) avec les dernières stats
2. Exécuter le protocole de veille §1.3 (crawler les concurrents)
3. Ajuster les priorités de §5 si nouvelles données (nouveau concurrent, changement SERP)
4. Archiver les contenus publiés dans le journal ci-dessous

TRIMESTRIELLEMENT :
1. Révision complète des axes de variabilité §6
2. Mise à jour de la banque de données §7.1 (nouvelles stats, études)
3. Ajout de nouvelles questions PAA §7.2 (basé sur GSC + tendances)
```

---

## 11. Journal des Mises à Jour

| Date | Action | Résultat |
|---|---|---|
| 2026-02-13 | Création du document — analyse GSC, cartographie 22 pages, veille concurrentielle complète | Base de référence établie |
| 2026-02-13 | Publication article NIS2 PME Yvelines/Val d'Oise — `/blog/nis2-pme-yvelines-val-doise` | 8e article blog, cluster Compliance lancé, FAQ JSON-LD, ~2 500 mots |
| 2026-02-13 | Publication article coût audit informatique Yvelines — `/blog/cout-audit-informatique-yvelines` | 9e article blog, cluster Audit IT renforcé, FAQ JSON-LD (5 questions), ~2 200 mots, backlinks depuis pages piliers 78/95 |
| 2026-02-13 | Transformation `/plateforme` → `/projets` (page portfolio sobre, footer uniquement) + 2 articles extraits | Page plateforme dé-prominentisée : retirée du header, hero, homepage. 11 redirections 301 (plateforme + 10 modules). 5 composants platform-* supprimés. |
| 2026-02-13 | Publication article veille concurrentielle IA PME — `/blog/veille-concurrentielle-ia-pme` | 10e article blog, cluster Stratégie IA renforcé, ~1 800 mots, guide 5 étapes |
| 2026-02-13 | Publication article automatiser emails/réseaux sociaux IA — `/blog/automatiser-emails-reseaux-sociaux-ia` | 11e article blog, cluster Stratégie IA renforcé, ~1 600 mots, outils testés + retour terrain |
| 2026-03-29 | Publication article Configurer Odoo avec l'IA (Claude Cowork) — `/blog/configurer-odoo-ia-claude-cowork` | 12e article blog, **cluster Claude Code / Odoo non documenté** ; deviendra #2 page en clics (118 clics / 1 985 impr / pos 5.8 à 90j post-publi — cf. audit 2026-05-21) |
| 2026-04-21 | Publication article Claude Code prompt architecture — `/blog/claude-code-prompt-architecture` | 13e article blog, **cluster Claude Code** ; STAR du site (200 clics / 5 200 impr / pos 7.2 à 30j post-publi) |
| 2026-04-22 | Refonte bento `/approche` (absorbe `/prestations` via redirect 308) — voir [docs/backlog-cleanup.md](docs/backlog-cleanup.md) | Architecture front modernisée ; impact SEO non encore mesuré (à comparer dans le prochain audit) |
| 2026-05-21 | Audit SEO `/seo-audit` complet — [docs/seo-audits/2026-05-21-audit.md](docs/seo-audits/2026-05-21-audit.md) | Baseline GSC 90j établie : 363 clics, 15 724 impressions, position 12.7. Découverte cluster Claude/Odoo. Doublon `docs/STRATEGIE-EDITORIALE.md` supprimé. 2 nouveaux templates créés ([checklist.md](.claude/templates/seo/checklist.md), [mcp-calls.md](.claude/templates/seo/mcp-calls.md)) |

---

## 12. Référence Rapide — Prochaine Action

> **Quand `/create-resource` est invoqué sans sujet spécifique, proposer un contenu en fonction de l'arbre de décision ci-dessous.**

### Arbre de décision (post-audit 2026-05-21)

**Si décision A retenue (capitaliser Claude Code)** — voir audit 2026-05-21 §9.1 :
> **Prochain contenu** : pilier `/claude-code-pour-pme` (page sectorielle + 1er article satellite)
> - Cluster : 🆕 **Claude Code / Odoo / Prompt engineering** (non documenté en §3 — à créer §3.7)
> - Axe géo : National (audience dev/CTO, pas géo-locale)
> - Axe format : Page sectorielle + lead magnet PDF « 10 prompts Claude Code prêts pour PME »
> - Concurrence : FAIBLE en francophone (à confirmer via `serp_organic_live_advanced` cf. [`mcp-calls.md`](.claude/templates/seo/mcp-calls.md) §3)
> - Stats à intégrer : 5 200 impr/mois actuelles sur `claude-code-prompt-architecture`, 1 985 impr/mois sur `configurer-odoo-ia-claude-cowork`
> - CTA : Formation Claude Code dirigeants/CTO PME (650 € / 1/2 jour visio — palier à packager)

**Si décision B retenue (rester sur la stratégie 78/95)** — fallback :
> **Prochain contenu** : #3 historique — "Page sectorielle BTP (78/95)"
> - Cluster : Secteurs (§3.3)
> - Axe géo : Yvelines + Val d'Oise — Axe format : page sectorielle
> - Concurrence : ZÉRO sur "digitalisation BTP Yvelines"
> - Stats à intégrer : 58 % des petites entreprises BTP ont un site web (France Num), facturation électronique sept 2026
> - CTA : Audit 180° offert → /contact

### Décision Pierre

- [ ] Option A — Capitaliser Claude Code (créer pilier + offre dédiée)
- [ ] Option B — Stratégie 78/95 historique (page sectorielle BTP)
- [ ] Option C — Hybride : créer le pilier Claude Code en **mode mesure 90j** (pas d'offre dédiée tant que les leads ne convertissent pas), parallèlement lancer la page BTP

> Tant que la décision n'est pas prise, `/create-resource` sans argument doit **demander la décision A/B/C** plutôt que de produire le contenu par défaut.
