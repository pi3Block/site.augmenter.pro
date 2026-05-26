---
adr: 0003
title: Stratégie funnel GEO — mesurer d'abord, monétiser le cluster tech sur le persona dirigeant confirmé
status: accepted
date: 2026-05-26
deciders: Pierre Legrand
consulted: Claude Code
informed: —
follows: —
---

# ADR 0003 — Stratégie funnel GEO : mesurer d'abord, monétiser le cluster tech sur le persona dirigeant confirmé

## Contexte

L'audit SEO/GEO du 2026-05-21 ([docs/seo-audits/2026-05-21-audit-complet.md](../seo-audits/2026-05-21-audit-complet.md)) a établi un constat clé : **beaucoup de trafic, peu de contacts**. Chiffres saillants :

- ~88 % du trafic organique vient de 2 articles (`claude-code-prompt-architecture`, `configurer-odoo-ia-claude-cowork`)
- `/audit-informatique-val-doise` : ~103 impressions, position ~1,6, **0 clic**
- `/strategie-ia-pme` : ~1 783 impressions, position ~25, **0 clic**
- Capture LLM (ChatGPT Search) : **0/3** sur des requêtes correspondant exactement à l'offre
- **Leads organiques / mois : non mesurés** (pas d'instrumentation du funnel au-delà de `contact_form_submit`)

Une analyse business externe (2026-05-26) a proposé un plan en 5 priorités. Elle est solide sur le fond (monétiser le cluster gagnant, chantier entité), mais comporte trois failles de raisonnement :

1. **Elle réintroduit la « schizophrénie devs vs dirigeants »** que la décision persona du 2026-05-21 ([project_persona_positionnement](../../CLAUDE.md)) avait explicitement écartée — en posant « trafic = devs qui cherchent un tuto gratuit » comme une prémisse, sans donnée.
2. **Elle relègue la mesure en Priorité 5**, alors que tout le diagnostic « le trafic ne convertit pas » repose sur une métrique qu'elle admet ne pas avoir.
3. **Elle applique le même remède (réécrire le title) à deux pathologies opposées** : mauvais CTR en position 1,6 (`/audit-95` — remède valide) vs mauvais rang en position 25 (`/strategie-ia-pme` — réécrire le title est inutile en page 3).

**Donnée terrain décisive (2026-05-26)** : Pierre a effectivement reçu **des dirigeants en prospect** via ce trafic. Cela réfute la prémisse « trafic = devs » par l'observation directe et **confirme** la décision persona du 2026-05-21 (le cluster Claude Code/Odoo attire bien des dirigeants tech-curieux, pas seulement des intégrateurs). Signal qualitatif, à consolider par l'instrumentation, mais suffisant pour **ne pas pivoter le persona**.

## Options considérées

### Option A — Appliquer le plan de l'analyse externe tel quel
**Pour** : structuré, actionnable sur 4 semaines, couvre offre + snippets + entité.
**Contre** : pivote le persona vers « un autre profil » sur une prémisse réfutée ; engage ~26 h d'actions avant d'avoir instrumenté la mesure ; gaspille de l'effort sur des snippets de pages mal positionnées (position 25).
**Coût** : ~26 h sur 4 semaines + risque de piloter à l'aveugle.

### Option B — Re-prioriser : mesure en P0, persona dirigeant maintenu, snippets ciblés (RETENUE)
**Pour** : confirme le diagnostic avant d'agir ; capitalise sur la décision persona déjà validée + la donnée terrain ; concentre l'effort snippet là où il paie (pages position 1-10) ; garde l'ossature business saine de l'analyse (offre atelier, entité).
**Contre** : démarrage 2-3 jours plus lent (instrumentation avant action) ; demande de la rigueur de mesure.
**Coût** : ~2-3 j d'instrumentation + même backlog ensuite, mieux séquencé.

### Option C — Statu quo (continuer à produire du contenu)
**Pour** : aucun effort de réorganisation.
**Contre** : le mur trafic→contact reste entier ; ne résout ni la conversion ni l'entité.
**Coût** : coût d'opportunité — le trafic acquis continue de ne pas convertir.

## Décision

**On retient l'option B.**

Critère décisif : **on ne prescrit pas de remède de conversion sans données de conversion, et on ne pivote pas un persona qu'une décision documentée ET une observation terrain confirment toutes deux.** L'analyse externe a raison sur l'ossature (offre payante sur le cluster, chantier entité) mais tort sur l'ordre (mesure en dernier) et sur le persona (pivot non justifié). On garde sa structure, on corrige son séquençage et on maintient le persona dirigeant tech-curieux acté en 2026-05-21.

### Re-priorisation actée

| Priorité | Action | Note vs analyse externe |
|----------|--------|-------------------------|
| **P0 — cette semaine (2-3 j)** | Instrumenter le funnel GA4/GTM : `whatsapp_click`, `quote_wizard_complete`, `brief_sent` + dashboard clics organiques → /contact → soumissions | Remontée de P5 → P0 |
| **P1 — snippets ciblés** | Réécrire title/meta **uniquement** des pages en position 1-10 (`/audit-informatique-val-doise`, `/blog/cout-audit-informatique-yvelines`). **Ne PAS** toucher `/strategie-ia-pme` (position 25 = problème de rang, pas de CTR) | Correction de la faille #3 |
| **P1bis — offre dirigeant** | Landing Atelier Claude Code (650 €) + CTA mid-article dans les 2 articles stars, **ciblé persona dirigeant tech-curieux** (pas un nouveau profil) | Persona maintenu (faille #1) |
| **P2 — entité** | France Num (✅ soumis), GBP à **optimiser** (existe déjà, cf. [reference_gmb]) pas créer, LinkedIn aligné, GitHub (✅ live), cas client (dépendance tierce) | Cf. [plan entité 2026-05-22](../seo-audits/2026-05-22-plan-entite-geo.md) |

## Conséquences

### Positives
- Diagnostic conversion confirmé par la donnée avant tout investissement lourd
- Persona cohérent entre stratégie, contenu, JSON-LD et observation terrain
- Effort snippet concentré là où il a un impact réel (CTR en bonne position)
- Cluster tech monétisé (atelier) sans le saboter ni le détourner

### Négatives (assumées)
- Démarrage des actions correctives décalé de 2-3 j (le temps d'instrumenter)
- `/strategie-ia-pme` reste non corrigée à court terme (assumé : faible ROI à position 25)

### Risques résiduels et mitigations
- **Risque** : l'instrumentation P0 révèle que le trafic ne convertit vraiment pas même avec offre + snippets. **Mitigation** : c'est précisément l'intérêt de mesurer d'abord — on saura si le frein est la conversion on-site ou l'autorité/entité (P2), au lieu de supposer.
- **Risque** : la donnée terrain « dirigeants en prospect » est qualitative et limitée. **Mitigation** : l'instrumentation P0 + les `?source=`/`?offer=` taggés permettront de quantifier quel contenu amène quels contacts sur 4-8 semaines.

## Plan d'implémentation

- [x] **P0** (2026-05-26) : events GA4 ajoutés — `whatsapp_click` (5 emplacements avec `location`) + `brief_generated` (ai/fallback). Le wizard était déjà instrumenté (`contact_form_submit` channel, `quote_step_completed`, `quote_email_captured`, `quote_abandon_email_captured`) → funnel complet. _Reste : lire la baseline dans GA4 après 1-2 semaines._
- [x] **P1** (2026-05-26) : `/audit-informatique-val-doise` title recentré « Audit Informatique » + prix 225 € en description ; `/blog/cout-audit-informatique-yvelines` TL;DR chiffré anti-AI-Overview. `/strategie-ia-pme` **non touchée** (position 25 = rang, pas CTR — conforme à la décision).
- [x] **P1bis** (2026-05-26) : landing [/atelier-claude-code-dirigeant](../../src/app/atelier-claude-code-dirigeant/page.tsx) (650 €, JSON-LD Service) + encart [AtelierCallout](../../src/components/sections/atelier-callout.tsx) mid-article (2 articles stars) + référencée sitemap/llms/footer. Format : présentiel 78/95 + visio, réservation via /contact.
- [ ] **P2** (en cours) : France Num soumis ✅, GitHub live ✅ ; reste GBP à optimiser, titre LinkedIn à aligner, cas client à lancer, `sameAs` France Num à brancher quand validé. Cf. [plan entité](../seo-audits/2026-05-22-plan-entite-geo.md).
- [ ] Standardiser les CTA (tags `?source=`/`?offer=`) : à compléter au fil des prochaines itérations selon ce que la mesure P0 révèle.

## Validation post-implémentation

- **Métrique cœur** : nombre de contacts qualifiés / mois (formulaire + WhatsApp + quote wizard), segmenté par source. Baseline = à établir en P0 (actuellement inconnu).
- **Seuil de succès à 8 semaines** : ≥ 1 contact dirigeant/semaine attribuable au cluster tech via tag `?source=`, OU CTR de `/audit-95` passant de ~0 % à > 3 % après réécriture snippet.
- **Condition de réouverture du persona** : si l'instrumentation montre sur 8 semaines que le trafic cluster tech génère 0 contact dirigeant malgré offre + CTA, alors rouvrir la question « devs vs dirigeants » avec données — mais pas avant.
- **Re-test GEO** : suivre la capture LLM via [geo-prompts.md](../seo-audits/2026-05-21-data/geo-prompts.md) (T+7/T+30/T+90) en parallèle du chantier entité.

## Références

- [Audit complet 2026-05-21](../seo-audits/2026-05-21-audit-complet.md) — source des chiffres
- [Plan d'action entité GEO 2026-05-22](../seo-audits/2026-05-22-plan-entite-geo.md) — détail P2
- [geo-prompts.md](../seo-audits/2026-05-21-data/geo-prompts.md) — journal re-test LLM
- [Session handoff 2026-05-26](../sessions/2026-05-26-geo-contenu-entite.md)
- Décision persona 2026-05-21 (project_persona_positionnement) — confirmée par cette ADR
