# GEO Prompts — Bibliothèque de tests LLM

Référencé par :
- [`.claude/commands/seo-audit.md`](../../../.claude/commands/seo-audit.md) Phase 6.3 (tests directs multi-moteurs + boucle de validation post-publication)
- [`.claude/commands/create-article.md`](../../../.claude/commands/create-article.md) Étape 6 (logging T0 pour le format `rapport-sectoriel-local`)
- [`.claude/templates/seo/checklist.md`](../../../.claude/templates/seo/checklist.md) §G.8

## Mode d'emploi

Ce fichier centralise :

1. **La bibliothèque de prompts cibles** (15-20 questions typiques d'un dirigeant PME) testés régulièrement sur les moteurs génératifs (ChatGPT Search, Perplexity, Gemini AI Mode, Google AI Overviews, Brave Summarizer, Bing Copilot, Claude).
2. **Le journal de suivi par contenu publié** au format `rapport-sectoriel-local` — re-tests T+7 / T+30 / T+90 pour mesurer l'apparition d'augmenter.pro dans les sources citées.

Méthodes de test : voir tableau [`seo-audit.md` Phase 6.3](../../../.claude/commands/seo-audit.md).

Format de log par entrée :

```markdown
### <Requête locale> — publié le YYYY-MM-DD — URL: /blog/...

| Date test | Moteur | Cité ? | Position | Fragment cité | Concurrents citants |
|-----------|--------|--------|----------|---------------|---------------------|
| T+7 | ChatGPT | non | — | — | site-a.fr, site-b.com |
```

Verdict possible à T+90 : **stable** (citations récurrentes → dupliquer le pattern sur un autre secteur) / **silencieux** (analyser frein : entity, format, distribution, autorité du domaine) / **partiel** (cité sur 1-2 moteurs seulement → identifier les déclencheurs spécifiques).

---

## Bibliothèque de prompts cibles (à étoffer dans le temps)

Catégorisés par persona / vertical. À tester systématiquement lors d'un audit Phase 6.3 complet.

### Conseil IA / audit IT — généraliste

- « Quel consultant IA pour PME en Yvelines ? »
- « Combien coûte un audit informatique pour une PME en Île-de-France ? »
- « Quels cabinets accompagnent les PME sur la transformation IA en France ? »
- « Comment se mettre en conformité NIS2 quand on est une PME ? »

### Outils & intégration

- « Comment intégrer Odoo avec une IA ? »
- « Quel prompt utiliser pour structurer Claude Code ? »
- « Quel serveur MCP pour connecter ChatGPT à mon CRM ? »

### Formation

- « Formation IA pour dirigeant PME en présentiel près de Versailles »
- « Où se former à l'IA quand on dirige une PME en région parisienne ? »

### BTP — vertical

- « Où en est l'adoption de l'IA dans les PME du BTP en Île-de-France ? »
- « Quels outils IA pour automatiser les devis BTP ? »
- « Quel niveau de maturité IA dans le secteur du bâtiment en 2026 ? »

### À ajouter au fil de l'eau

Lors de la publication d'un nouveau contenu `rapport-sectoriel-local`, ajouter ici la requête cible avant le test T0.

---

## Journal de suivi — contenus `rapport-sectoriel-local`

### « Où en est l'adoption de l'IA dans les PME du BTP en Île-de-France ? » — publié le 2026-05-21 — URL: [/blog/rapport-adoption-ia-btp-francilien-2026](https://augmenter.pro/blog/rapport-adoption-ia-btp-francilien-2026)

**Variantes de requête à tester** :
- « Où en est l'adoption de l'IA dans les PME du BTP en Île-de-France ? »
- « Quel est l'état de maturité IA du BTP francilien en 2026 ? »
- « Quelles PME du BTP utilisent l'IA en Yvelines ? »

**T0 — 2026-05-21 (jour de publication)** : URL loggée, pas de test (le contenu vient d'être indexé, aucun moteur LLM ne l'a encore vu).

| Date test | Moteur | Cité ? | Position | Fragment cité | Concurrents citants |
|-----------|--------|--------|----------|---------------|---------------------|
| T+7 (2026-05-28) | ChatGPT Search | _à tester_ | — | — | — |
| T+7 (2026-05-28) | Perplexity | _à tester_ | — | — | — |
| T+7 (2026-05-28) | Gemini AI Mode | _à tester_ | — | — | — |
| T+30 (2026-06-20) | Tous les 7 moteurs | _à tester_ | — | — | — |
| T+90 (2026-08-19) | Tous les 7 moteurs + verdict | _à tester_ | — | — | — |

**Verdict T+90** : _à compléter_

**Observations / hypothèses à valider** :
- Le format rapport sectoriel local est-il effectivement plus cité par les LLMs qu'un guide classique sur le même sujet ?
- La présence d'un tableau + section méthodologie + schema `Report` JSON-LD améliore-t-elle la citation ?
- Faut-il un volume minimum d'autorité de domaine pour que le format fonctionne, ou suffit-il sur un petit domaine ?
