Skill de paramétrage Odoo 19
Ce skill permet de configurer une instance Odoo 19 directement via le navigateur Chrome. Il combine deux approches : un guide interactif qui pose les bonnes questions à l'utilisateur avant chaque configuration, et une automatisation qui navigue dans l'interface et remplit les formulaires.
Prérequis

L'extension "Claude in Chrome" doit être connectée
L'utilisateur doit être connecté à son instance Odoo en tant qu'administrateur
L'interface Odoo doit être en français

Philosophie d'approche
Le paramétrage d'un ERP est une tâche critique pour une entreprise. Chaque choix de configuration a des conséquences en cascade sur les processus métier. Ce skill adopte donc une approche prudente :

Toujours demander avant d'agir pour les décisions métier (nombre d'étapes du pipeline, structure d'entrepôt, politique de tarification)
Automatiser les actions mécaniques (navigation dans les menus, remplissage de formulaires, activation de fonctionnalités)
Vérifier après chaque configuration en prenant un screenshot pour confirmer que le paramétrage est correct

Navigation dans Odoo 19
Odoo 19 utilise une barre de navigation supérieure dans chaque module. La page d'accueil (/odoo) affiche une grille d'icônes pour accéder à chaque module. Une fois dans un module, une barre horizontale en haut affiche le nom du module et ses sous-menus.
Accès aux modules — URLs directes
La façon la plus fiable de naviguer est d'utiliser les URLs directes via navigate :

Page d'accueil : https://<instance>/odoo
CRM Pipeline : https://<instance>/odoo/crm
Ventes / Devis : https://<instance>/odoo/sales
Inventaire : https://<instance>/odoo/inventory
Achats : https://<instance>/odoo/purchase
Paramètres généraux : https://<instance>/odoo/settings
Produits : https://<instance>/odoo/inventory/products
Contacts : https://<instance>/odoo/contacts

Structure des menus par module (vérifiée sur Odoo 19)
CRM — Barre supérieure : CRM | Ventes | Analyse | Configuration

Configuration > Paramètres
Configuration > Équipes commerciales / Membres des équipes
Configuration > Activités : Types d'activités, Plans d'activité
Configuration > Pipeline : Étapes, Étiquettes, Motifs de perte
Configuration > Génération de pistes : Demandes de prospection de pistes

Inventaire — Barre supérieure : Inventaire | Vue d'ensemble | Opérations | Produits | Analyse | Configuration

Configuration > Paramètres
Configuration > Gestion de l'entrepôt : Entrepôts, Types d'opérations, Emplacements, Routes, Règles, Catégories d'emplacement, Stratégies de rangement
Configuration > Produits : Catégories, Attributs, Unités et conditionnements, Nomenclatures des codes-barres
Configuration > Livraison : Modes de livraison, Préfixe postal

Achats — Barre supérieure : Achats | Commandes | Produits | Analyse | Configuration

Configuration > Paramètres
Configuration > Listes de prix du fournisseur
Configuration > Produits : Attributs, Catégories, Unités et conditionnements

Pattern de navigation standard
Pour chaque configuration, le pattern est :

Naviguer via URL directe (navigate) ou cliquer sur le menu Configuration dans la barre supérieure du module
Cliquer sur le sous-menu souhaité dans le dropdown
Attendre le chargement (utiliser wait 2-3 secondes puis screenshot pour vérifier)
Poser les questions métier à l'utilisateur via AskUserQuestion
Remplir le formulaire via form_input ou computer (clics/saisie)
Sauvegarder (bouton "Enregistrer" ou icône disquette)
Prendre un screenshot pour vérification

Module 1 : CRM & Ventes
1.1 Configuration générale du CRM
Étapes à suivre dans l'ordre :
a) Activation des fonctionnalités CRM
Aller dans Configuration > Paramètres > section CRM. Les options clés à proposer à l'utilisateur :

Pistes : Activer ou non le système de pistes (leads) en plus des opportunités
Scoring des pistes : Attribution automatique de scores
Enrichissement des pistes : Enrichissement automatique des données
Visites de sites : Suivi des visites web
Génération de pistes : Depuis les emails, site web, etc.

Demander à l'utilisateur quelles fonctionnalités activer avant de cocher quoi que ce soit.
b) Pipeline commercial
Aller dans CRM > Configuration > Étapes. Le pipeline par défaut comporte généralement : Nouveau, Qualifié, Proposition, Négociation, Gagné.
Demander à l'utilisateur :

Combien d'étapes dans le pipeline ?
Quels noms pour chaque étape ?
Y a-t-il des probabilités de conversion à associer à chaque étape ?

Puis créer/modifier les étapes via l'interface.
c) Équipes commerciales
Aller dans CRM > Configuration > Équipes commerciales.

Créer les équipes selon les besoins de l'utilisateur
Configurer les règles d'attribution (round-robin, domaine, etc.)
Associer les membres d'équipe

d) Types d'activités
Aller dans CRM > Configuration > Types d'activités.

Les activités par défaut sont : Email, Appel, Réunion, À faire
Proposer d'en ajouter selon le processus commercial de l'utilisateur

1.2 Configuration des Ventes
a) Produits et catalogue
Aller dans Ventes > Produits > Produits.

Demander les catégories de produits nécessaires
Configurer les unités de mesure si besoin (Configuration > Unités de mesure)
Les variantes de produits (taille, couleur, etc.) se configurent dans les attributs

b) Listes de prix
Aller dans Ventes > Configuration > Listes de prix (si activé dans les paramètres).

Demander la stratégie de tarification : prix fixe, remises par quantité, formules
Créer les listes de prix selon les segments clients

c) Modèles de devis
Aller dans Ventes > Configuration > Modèles de devis.

Proposer de créer des modèles récurrents avec lignes pré-remplies
Configurer les textes d'introduction et de conclusion

d) Conditions de paiement
Aller dans Ventes > Configuration > Conditions de paiement.

Conditions standard : Paiement immédiat, 30 jours, 60 jours
Proposer les conditions adaptées à l'activité de l'utilisateur

Module 2 : Inventaire & Achats
2.1 Configuration de l'Inventaire
a) Paramètres généraux de l'inventaire
Aller dans Configuration > Paramètres > section Inventaire. Options clés :

Emplacements de stockage : Activer pour gérer des zones dans un entrepôt
Multi-entrepôts : Plusieurs entrepôts physiques
Routes en plusieurs étapes : Réception en 2/3 étapes, expédition en 2/3 étapes
Traçabilité : Lots, numéros de série
Dates de péremption : Pour les produits périssables
Colis : Gestion des conditionnements

Demander à l'utilisateur ses besoins spécifiques avant d'activer.
b) Entrepôts
Aller dans Inventaire > Configuration > Entrepôts.

Demander le nombre d'entrepôts et leurs noms
Pour chaque entrepôt : adresse, code court
Configurer les routes (réception directe, en 2 étapes, en 3 étapes)
Configurer les expéditions (directe, pick + pack, pick + pack + ship)

c) Emplacements de stockage
Aller dans Inventaire > Configuration > Emplacements.

Structure hiérarchique : Entrepôt > Zone > Étagère > Emplacement
Demander l'arborescence souhaitée
Créer les emplacements selon la structure physique

d) Catégories de produits (aspects inventaire)
Aller dans Inventaire > Configuration > Catégories de produits.

Configurer les méthodes de valorisation (coût standard, FIFO, coût moyen)
Associer les comptes comptables si nécessaire

e) Règles de réapprovisionnement
Aller dans Inventaire > Configuration > Règles de réapprovisionnement (ou sur la fiche produit).

Stock minimum, stock maximum, quantité à commander
Configurer par produit ou par catégorie

2.2 Configuration des Achats
a) Paramètres généraux des achats
Aller dans Configuration > Paramètres > section Achats. Options clés :

Approbation des bons de commande : Avec ou sans validation manager
Accords d'achat : Contrats cadres avec les fournisseurs
Appels d'offres : Pour la mise en concurrence

b) Fournisseurs
Aller dans Achats > Fournisseurs.

Créer les fiches fournisseurs avec coordonnées
Configurer les conditions d'achat par fournisseur (délais, prix, minimum de commande)

c) Produits fournisseurs
Sur chaque fiche produit, onglet Achats :

Associer un ou plusieurs fournisseurs
Renseigner les prix d'achat, délais de livraison, quantités minimales

2.3 Traçabilité
a) Configuration des lots et numéros de série

Activer dans Configuration > Paramètres > Inventaire > Traçabilité
Choisir par produit : suivi par lots ou par numéros de série
Configurer les formats de numérotation

b) Dates de péremption

Activer dans les paramètres d'inventaire
Configurer les alertes d'expiration sur les fiches produits

Techniques d'automatisation Chrome
Identification des éléments
Odoo utilise des classes CSS et des attributs data- cohérents. Utiliser ces stratégies :

find avec des descriptions en langage naturel : "bouton Enregistrer", "champ Nom du produit"
read_page avec filter: "interactive" pour voir tous les champs de formulaire
javascript_tool pour des actions complexes comme :

Accéder à un menu spécifique via URL : /web#action=sale.action_quotation_tree
Modifier un champ many2one avec recherche
Déclencher des événements Odoo spécifiques



URLs directes utiles
Les URLs sont déjà listées dans la section "Navigation dans Odoo 19" ci-dessus. En Odoo 19, les URLs ont été simplifiées (format /odoo/module au lieu de /web#action=...). Toujours préférer navigate avec l'URL directe plutôt que des clics pour accéder à un module — c'est plus fiable et rapide.
Gestion des formulaires

Toujours cliquer sur "Modifier" ou directement sur le champ avant de saisir
Utiliser form_input pour les champs texte et les sélections
Pour les champs many2one (relations) : taper dans le champ puis sélectionner dans la liste déroulante
Pour les champs boolean (cases à cocher) : utiliser left_click
Toujours cliquer sur "Enregistrer" ou le bouton de sauvegarde après modification
Attendre le chargement complet de la page après chaque navigation (vérifier avec screenshot)

Gestion des erreurs courantes

Champ obligatoire manquant : Odoo affiche le champ en rouge. Lire la page pour identifier le champ manquant.
Valeur dupliquée : Message d'erreur en haut. Lire l'erreur et ajuster.
Permission refusée : Vérifier que l'utilisateur est bien admin.

Workflow recommandé
Pour une configuration complète, suivre cet ordre :

Paramètres généraux — Activer les fonctionnalités nécessaires dans tous les modules
Entrepôts et emplacements — Structure physique
Catégories de produits — Organisation du catalogue
Produits — Fiches produits de base
Fournisseurs — Partenaires d'achat
Pipeline CRM — Étapes et équipes
Tarification — Listes de prix et conditions
Modèles de devis — Templates commerciaux
Règles de réapprovisionnement — Automatisation des achats
Traçabilité — Lots, séries, péremptions

À chaque étape, toujours :

Demander les préférences métier AVANT de configurer
Prendre un screenshot APRÈS chaque configuration pour valider
Proposer de passer à l'étape suivante ou d'ajuster

Personnalisations REVA9 (reva9.odoo.com)
L'instance REVA9 dispose de personnalisations avancées pour le pilotage des stocks depuis l'interface commerciale. Toute la documentation technique se trouve dans references/reva9-production.md. Ce fichier de référence doit être lu dès qu'une session concerne REVA9.
Fonctionnalités déployées

Bouton "Vérifier le stock" sur chaque devis (brouillon/envoyé) — calcule stock dispo, qté autres devis, alerte réappro, fournisseur principal, et statut achat fournisseur pour chaque ligne
Tableau de bord "Stock & Devis" (Ventes > Commandes > Stock & Devis) — vue globale de toutes les lignes de devis avec colonnes stock et filtres rapides Critique/Alerte/OK
Colonnes sur la vue Réapprovisionnement — "Commandes liées" (devis concernés) et "Statut achat" (état commande fournisseur)
Statut achat coloré — 4 niveaux : Rien en cours (rouge), Commandé fournisseur (orange), En livraison (bleu), Partiellement reçu (vert)

Quand lire la référence REVA9
Lire references/reva9-production.md dans ces situations :

Toute modification, ajout ou debug sur l'instance reva9.odoo.com
Questions sur les IDs de champs, vues, actions ou menus en production
Besoin de comprendre la logique de calcul des alertes stock
Ajout de nouvelles colonnes ou fonctionnalités sur les vues existantes
Création de nouvelles actions serveur liées au stock/devis

Points critiques à retenir

Type produit stockable en Odoo 19 SaaS : 'consu' (pas 'product')
safe_eval interdit STORE_ATTR → toujours .write({}) jamais record.field = value
Batch de 50 + env.cr.commit() pour les traitements en masse (évite MemoryError)
Serveur lent : 8-15 secondes par page → toujours wait 8s après navigation
Menus en anglais en production ("Orders" sous "Sales", parent_id=487)
RPC via JavaScript dans Chrome : utiliser fetch('/web/dataset/call_kw', ...) avec .then() (pas await)