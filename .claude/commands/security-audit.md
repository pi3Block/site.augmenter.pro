# Commande : Audit de sécurité

Tu es un expert en sécurité web. Tu vas réaliser un audit de sécurité complet du site **augmenter.pro** (Next.js 16 + React 19 + Tailwind).

## Phase 1 — Analyse des dépendances

1. **Audit npm** : Lance `npm audit` et analyse les résultats
2. **Dépendances obsolètes** : Vérifie les versions des packages critiques dans `package.json` et `package-lock.json`
3. **Dépendances suspectes** : Vérifie que toutes les dépendances sont légitimes et maintenues

## Phase 2 — Analyse du code source

### 2.1 API Routes & endpoints

Lis et audite toutes les routes API dans `src/app/api/` :
- [ ] Validation des entrées (sanitization, types, longueur)
- [ ] Protection CSRF
- [ ] Rate limiting
- [ ] Gestion des erreurs (pas de stack traces exposées)
- [ ] Headers de sécurité dans les réponses

### 2.2 Formulaires & entrées utilisateur

Audite le formulaire de contact (`src/app/contact/page.tsx`) :
- [ ] Validation côté client ET serveur
- [ ] Protection XSS (échappement des entrées)
- [ ] Protection contre l'injection (SQL, NoSQL, commandes)
- [ ] Honeypot ou CAPTCHA anti-spam
- [ ] Limite de taille des champs

### 2.3 Composants client

Lis tous les composants avec `"use client"` et vérifie :
- [ ] Pas d'utilisation de `dangerouslySetInnerHTML`
- [ ] Pas de `eval()` ou `Function()` dynamique
- [ ] Pas d'insertion de HTML non sanitisé
- [ ] Pas de secrets ou clés API exposés côté client

### 2.4 Configuration Next.js

Lis et audite `next.config.ts` :
- [ ] Headers de sécurité configurés (CSP, X-Frame-Options, HSTS, etc.)
- [ ] Pas de redirections ouvertes
- [ ] Configuration CORS appropriée
- [ ] Pas d'exposition de variables d'environnement sensibles

## Phase 3 — Headers & configuration serveur

### 3.1 Headers de sécurité recommandés

Vérifie la présence de :
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 0` (deprecated mais vérifié)
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy`
- `Permissions-Policy`

### 3.2 Fichiers sensibles

Vérifie qu'il n'y a pas d'exposition de :
- [ ] `.env`, `.env.local`, `.env.production`
- [ ] `CLAUDE.md`, `.claude/` (settings sensibles)
- [ ] `.git/` accessible publiquement
- [ ] `package-lock.json` (informations de versions)
- [ ] Fichiers de configuration IDE (`.vscode/`, etc.)
- [ ] Source maps en production

## Phase 4 — OWASP Top 10

Pour chaque item OWASP applicable, analyse et note :

| # | Vulnérabilité | Statut | Détail |
|---|---------------|--------|--------|
| A01 | Broken Access Control | | |
| A02 | Cryptographic Failures | | |
| A03 | Injection | | |
| A04 | Insecure Design | | |
| A05 | Security Misconfiguration | | |
| A06 | Vulnerable Components | | |
| A07 | Auth Failures | | |
| A08 | Data Integrity Failures | | |
| A09 | Logging & Monitoring | | |
| A10 | SSRF | | |

## Phase 5 — Conformité RGPD (spécifique France)

Puisque le site cible des entreprises françaises :
- [ ] Bannière cookies / consentement (si cookies tiers)
- [ ] Page mentions légales complète (`/mentions-legales`)
- [ ] Politique de confidentialité
- [ ] Formulaire de contact : mention du traitement des données
- [ ] Pas de tracking sans consentement
- [ ] Droit d'accès / suppression mentionné

## Phase 6 — Rapport

Génère un rapport structuré :

```
## Score de sécurité global : X/100

## Vulnérabilités critiques (à corriger immédiatement)
🔴 ...

## Vulnérabilités moyennes
🟠 ...

## Améliorations recommandées
🟡 ...

## Points conformes
🟢 ...

## RGPD
| Exigence | Statut | Action requise |
|----------|--------|----------------|
| ...      | ...    | ...            |

## Plan de remédiation (par priorité)
1. [CRITIQUE] ...
2. [MOYEN] ...
3. [FAIBLE] ...
```

### Corrections automatiques

Si l'utilisateur le demande, implémente directement :
- Ajout des headers de sécurité dans `next.config.ts`
- Validation des entrées sur la route API contact
- Ajout d'un rate limiter basique
- Ajout de meta robots appropriées
- Sanitization des inputs du formulaire
