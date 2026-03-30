# Plan de réponse aux incidents de sécurité

> Génère un plan de réponse aux incidents adapté à votre PME. Inclut la procédure de notification ANSSI et les obligations NIS2.

**Catégorie** : Cybersécurité | **Difficulté** : intermediaire | **Temps** : 10 min

---

Tu es un RSSI (Responsable Sécurité des Systèmes d'Information) expérimenté qui aide les PME à se préparer aux incidents de cybersécurité. Crée un plan de réponse aux incidents adapté à mon entreprise.

**Mon entreprise :**
- Secteur : [SECTEUR]
- Effectif : [NOMBRE]
- Systèmes critiques : [ERP / EMAIL / SITE WEB / BASES DE DONNÉES / etc.]
- Infra : [ON-PREMISE / CLOUD PROVIDER / HYBRIDE]
- Équipe IT : [TAILLE + INTERNE OU EXTERNE]
- Prestataire infogérance : [OUI/NON — NOM SI OUI]

**Plan de réponse à produire :**

## 1. Fiches réflexes (1 page par scénario)

Pour chaque scénario, fournir :
- **Signes d'alerte** : comment détecter l'incident
- **Actions immédiates** (15 premières minutes)
- **Qui contacter** (chaîne d'alerte)
- **Ce qu'il ne faut SURTOUT PAS faire**

Scénarios à couvrir :
a) Ransomware (chiffrement des données)
b) Compromission de compte email (phishing réussi)
c) Fuite de données clients
d) Attaque DDoS (site/services inaccessibles)
e) Intrusion réseau détectée

## 2. Chaîne d'alerte

| Niveau | Qui | Contact | Délai |
|--------|-----|---------|-------|
| N1 — Détection | [Utilisateur/IT] | [TEL/EMAIL] | Immédiat |
| N2 — Qualification | [Responsable IT / RSSI] | ... | < 30 min |
| N3 — Direction | [DG / DAF] | ... | < 1h |
| N4 — Externe | [Prestataire sécu / ANSSI] | ... | < 4h |

## 3. Obligations légales

### Notification ANSSI (si NIS2 applicable)
- Alerte précoce : < 24h après détection
- Notification complète : < 72h avec analyse
- Rapport final : < 1 mois

### Notification CNIL (si données personnelles)
- < 72h si risque pour les personnes
- Notification des personnes concernées si risque élevé

### Conservation des preuves
- Ne PAS éteindre les machines compromises (sauf ransomware actif)
- Capturer les logs avant toute action
- Documenter chaque action avec horodatage

## 4. Kit de crise

Liste des éléments à préparer AVANT l'incident :
- [ ] Liste de contacts de crise (imprimée, pas que numérique)
- [ ] Accès de secours aux systèmes critiques
- [ ] Sauvegardes hors ligne vérifiées
- [ ] Numéro ANSSI : 01 71 75 84 68
- [ ] Modèle de communication interne (email aux employés)
- [ ] Modèle de communication externe (clients, partenaires)
- [ ] Contrat assurance cyber (numéro de déclaration)

## 5. Post-incident
- Retour d'expérience structuré (dans les 2 semaines)
- Mise à jour du plan selon les leçons apprises
- Communication transparente aux parties prenantes

**Règles :**
- Langage simple, pas de jargon — ce plan sera lu en situation de stress
- Chaque action doit être exécutable par quelqu'un de non-technique
- Inclure les numéros de téléphone / emails réels quand je les fournis
- Adapter au secteur (ex: BTP = données chantier, santé = données patients)

---

*Prompt créé par [augmenter.PRO](https://augmenter.pro) — Conseil IA & Transformation digitale pour PME.*
*Retrouvez tous nos prompts sur [augmenter.pro/prompts](https://augmenter.pro/prompts)*
