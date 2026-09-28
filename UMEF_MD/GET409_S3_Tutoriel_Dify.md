| GET 409 — Lab Sprint S3  **Tutoriel Dify — Workflow Chercheur → Rédacteur**  Guide étape par étape sans erreurs  Fil rouge : GreenSprint — Niayes → Dakar Swiss UMEF University — Juin 2026 |
| --- |

| **Objectif de ce tutoriel**  Construire pas à pas un workflow Dify fonctionnel : DEBUT → CHERCHEUR → SI/SINON → REDACTEUR → SORTIE.  Toutes les erreurs rencontrées en test réel sont documentées avec leur solution. |
| --- |

# **Prérequis — Avant de commencer**

Vérifiez que vous avez les trois éléments suivants avant d’ouvrir Dify.

| **1** | **Compte Dify actif**  Aller sur dify.ai → Sign up → Plan Sandbox gratuit → Se connecter au Studio. |
| --- | --- |
| **2** | **Clé API GroqCloud**  Aller sur console.groq.com → API Keys → Create API Key → Copier la clé (commence par gsk\_...). NE PAS fermer la fenêtre avant de l’avoir copiée. |
| **3** | **GroqCloud connecté dans Dify**  Dify → Avatar (haut droite) → Paramètres → Fournisseur de Modèles → GroqCloud → Coller la clé → Enregistrer. |

| **⚠️ Erreur fréquente #0 — Clé API non sauvegardie**  Problème : la fenêtre GroqCloud est fermée avant de cliquer Enregistrer.  Solution : toujours cliquer Enregistrer AVANT de fermer la fenêtre de configuration. |
| --- |

# **Étape A — Créer le Workflow**

Durée estimée : 5 minutes. Niveau : débutant.

| **1** | **Ouvrir le Studio**  Dify → cliquer Studio dans la barre de navigation en haut. |
| --- | --- |
| **2** | **Créer une nouvelle application**  Cliquer « Créer à partir de zéro ». |
| **3** | **Sélectionner Flux de travail**  Choisir « Flux de travail » (PAS Chatbot, PAS Agent, PAS Chatflow). |
| **4** | **Nommer le projet**  Taper : GreenSprint\_FicheMarche\_v1\_[NomEquipe] |
| **5** | **Confirmer la création**  Cliquer Créer. Une fenêtre propose deux types de nœud de départ. |
| **6** | **Choisir le nœud de départ**  Cliquer « Entrée utilisateur (nœud de départ original) ». Le canvas s’ouvre avec le nœud DEBUT. |

| **✅ Vérification Étape A**  Le canvas affiche un nœud « DEBUT ». Le menu des nœuds disponibles s’ouvre automatiquement. |
| --- |

# **Étape B — Configurer l’Agent Chercheur**

Durée estimée : 15 minutes. Niveau : débutant.

**B1 — Ajouter et renommer le nœud LLM**

| **1** | **Ajouter un nœud LLM**  Dans le menu des nœuds ouvert automatiquement, cliquer « LLM ». Le nœud apparaît connecté au DEBUT. |
| --- | --- |
| **2** | **Renommer le nœud**  Double-cliquer sur le texte « LLM » dans le nœud sur le canvas (OU cliquer les ... puis Renommer) → taper : CHERCHEUR. |
| **3** | **Sélectionner le modèle**  Panneau droit → Configurez un modèle → GroqCloud → Llama-3.1-8b-instant. |
| **4** | **Régler la température**  Dans la fenêtre Paramètres du modèle → Temperature : 0,3. Fermer la fenêtre. |

**B2 — Configurer le prompt système**

Dans le panneau droit, champ SYSTEM — coller le prompt suivant :

| Tu es un analyste spécialisé en supply chain maraîichère au Sénégal pour GreenSprint,  plateforme reliant les producteurs des Niayes aux acheteurs de Dakar.  MISSION : Analyser la question ci-dessous et collecter toutes les données  disponibles sur les prix des légumes.  PROCESSUS EN 3 ÉTAPES :  1. ANALYSER la question :  - Quel légume est concerné ?  - Quelle zone (Niayes / Castor / Pikine / Tilène) ?  - Quelle période ?  2. RECHERCHER les données :  - Prix actuels par légume et par unité (cageot, kg, botte)  - Volumes disponibles et tendances  - Risques logistiques ou climatiques  3. ÉVALUER la suffisance des données  FORMAT DE SORTIE OBLIGATOIRE :  Si données SUFFISANTES :  LÉGUME : [nom]  UNITÉ : [cageot / kg / botte]  ZONE : [marché source]  PRIX : [fourchette FCFA]  TENDANCE : [hausse / stable / baisse]  DISPONIBILITÉ : [disponible / limité / rupture]  HEURE COLLECTE : [heure]  SOURCES : [origine des données]  Si données INSUFFISANTES :  Retourner UNIQUEMENT : "INSUFFISANT : [raison précise en 1 phrase]" |
| --- |

**B3 — Ajouter la variable d’entrée (CRITIQUE)**

Cette étape est indispensable — sans elle, le workflow échoue avec l’erreur « Variable #sys.query# not found ».

| **1** | **Cliquer + Ajouter un message**  Sous le champ SYSTEM, cliquer « + Ajouter un message » → sélectionner USER. |
| --- | --- |
| **2** | **Sélectionner la variable query**  Dans le champ USER, cliquer sur {x} → sélectionner Début · query. Le badge bleu « Debut [x] query » apparaît. |

| **⚠️ Erreur fréquente #1 — Variable #sys.query# not found**  Problème : utiliser {{#sys.query#}} directement dans le SYSTEM ne fonctionne pas.  Cause : la variable s’appelle query dans le nœud DEBUT, pas sys.query.  Solution : ne jamais écrire sys.query dans le SYSTEM. Utiliser le message USER avec {x} → Début · query. |
| --- |

**B4 — Configurer la variable du nœud DEBUT**

| **1** | **Cliquer sur le nœud DEBUT**  Panneau droit → CHAMP DE SAISIE → cliquer + en haut à droite. |
| --- | --- |
| **2** | **Remplir le formulaire**  Field Type : Short Text / string | Variable Name : query | Label Name : Votre question | Required : coché. |
| **3** | **Enregistrer**  Cliquer Enregistrer. Le nœud DEBUT affiche maintenant (x) query REQUIS. |

| **✅ Vérification Étape B**  Nœud CHERCHEUR : modèle Llama-3.1-8b-instant visible.  Champ SYSTEM : prompt collé (1000+ caractères).  Message USER : badge « Debut [x] query » sans triangle orange.  Nœud DEBUT : (x) query REQUIS visible. |
| --- |

# **Étape C — Configurer le nœud SI/SINON**

Durée estimée : 10 minutes. Niveau : intermédiaire.

| **1** | **Ajouter le nœud SI/SINON**  Cliquer le + bleu à droite du nœud CHERCHEUR sur le canvas → sélectionner SI/SINON. |
| --- | --- |
| **2** | **Ajouter une condition**  Panneau droit → cliquer « + Ajouter une condition ». |
| **3** | **Configurer la variable**  Cliquer sur le premier champ → sélectionner Chercheur · text dans la liste. |
| **4** | **Configurer l’opérateur**  Le deuxième champ affiche automatiquement « contient » — laisser tel quel. |
| **5** | **Saisir la valeur**  Cliquer sur « Entrez la valeur » → taper : INSUFFISANT (en MAJUSCULES obligatoires). |
| **6** | **Connecter la branche IF**  Étape suivante → sous IF → + SÉLECTIONNER LA PROCHAINE ÉTAPE → Sortie. |
| **7** | **Connecter la branche ELSE**  Étape suivante → sous ELSE → + SÉLECTIONNER LA PROCHAINE ÉTAPE → LLM (ce sera le Rédacteur). |

| **⚠️ Erreur fréquente #2 — La condition ne se déclenche jamais**  Cause A : le mot INSUFFISANT est écrit en minuscules ou avec une faute.  Cause B : la variable de sortie du Chercheur n’est pas nommée « text ».  Solution : vérifier la casse EXACTE — INSUFFISANT en majuscules, sans espace avant/après. |
| --- |

| **⚠️ Erreur fréquente #3 — Impossible de reboucler vers le Chercheur**  Problème : dans un Workflow Dify standard, la branche IF ne peut pas pointer vers un nœud précédent.  Solution : connecter la branche IF → Sortie (avec un message d’erreur). La boucle n’est disponible qu’en Chatflow. |
| --- |

| **✅ Vérification Étape C**  Nœud SI/SINON : condition Chercheur · text · contient · INSUFFISANT visible.  Branche IF → SORTIE connectée.  Branche ELSE → LLM connectée. |
| --- |

# **Étape D — Configurer l’Agent Rédacteur**

Durée estimée : 15 minutes. Niveau : intermédiaire.

**D1 — Configurer le modèle**

| **1** | **Renommer le nœud LLM**  Double-cliquer sur le nœud LLM connecté à ELSE → taper : REDACTEUR. |
| --- | --- |
| **2** | **Sélectionner le modèle**  Panneau droit → modèle → Llama-3.1-8b-instant. |
| **3** | **Régler la température**  Temperature : 0,7 (plus fluide pour la rédaction). Fermer la fenêtre. |

**D2 — Coller le prompt système**

Dans le champ SYSTEM — coller le prompt suivant :

| Tu es un rédacteur spécialisé en communication agricole pour GreenSprint,  plateforme maraîichère Niayes → Dakar.  MISSION : Rédiger une fiche marché hebdomadaire professionnelle  à partir des données reçues.  EXEMPLE DE FICHE ATTENDUE :  ――――――――――――――――――――――――  FICHE MARCHE GREENSPRINT  Semaine · Niayes → Dakar  ――――――――――――――――――――――――  PRODUIT : Tomate cerise  ZONE : Niayes Nord / Pikine  PRIX : 750-850 FCFA/kg  TENDANCE : Légère hausse (+8%)  DISPONIBILITE : Bonne  COLLECTE A : 05h30  ――――――――――――――――――――――――  ANALYSE  Le prix connaît une légère hausse liée à la forte demande.  ――――――――――――――――――――――――  ALERTES  Transport : préférer les trajets avant 9h  Conservation : max 48h sans réfrigération  ――――――――――――――――――――――――  RECOMMANDATIONS  Producteurs : négocier maintenant pour la semaine suivante.  Acheteurs : constituer des stocks avant fin de semaine.  ――――――――――――――――――――――――  SUR CE MODELE, rédige la fiche pour les données reçues.  Si une donnée manque : indiquer Non disponible.  Langue : français clair. Maximum 250 mots. |
| --- |

**D3 — Connecter les données du Chercheur (CRITIQUE)**

Cette étape évite l’erreur « Variable #Chercheur.text# not found ».

| **1** | **Cliquer + Ajouter un message**  Sous le champ SYSTEM, cliquer « + Ajouter un message » → sélectionner USER. |
| --- | --- |
| **2** | **Sélectionner la variable Chercheur**  Dans le champ USER, cliquer {x} → sélectionner Chercheur · text. Le badge bleu apparaît sans triangle orange. |

| **⚠️ Erreur fréquente #4 — Variable #Chercheur.text# not found**  Problème : écrire {{#Chercheur.text#}} directement dans le SYSTEM provoque une erreur.  Solution : ne jamais écrire de variable dans le SYSTEM. Utiliser le message USER avec {x} → Chercheur · text.  Vérification : le badge doit être bleu, SANS triangle orange d’avertissement. |
| --- |

**D4 — Ajouter le nœud SORTIE finale**

| **1** | **Ajouter un nœud Sortie**  Cliquer le + bleu du nœud REDACTEUR → sélectionner Sortie. |
| --- | --- |
| **2** | **Configurer la variable de sortie**  Panneau droit → + → Nom : text → Valeur : {x} → Redacteur · text. |

| **⚠️ Erreur fréquente #5 — Blocage à la publication**  Problème : « variable de sortie est requis » sur le nœud SORTIE (branche IF).  Solution : cliquer sur le nœud SORTIE (branche IF) → + variable de sortie → Nom : message\_erreur → Valeur : {x} → Chercheur · text. |
| --- |

| **✅ Vérification Étape D**  Nœud REDACTEUR : modèle Llama-3.1-8b-instant visible.  Champ SYSTEM : prompt collé avec l’exemple de fiche.  Message USER : badge Chercheur · text sans triangle orange.  Nœud SORTIE 2 : variable Redacteur · text configurée. |
| --- |

# **Étape E — Tester et Publier**

Durée estimée : 10 minutes. Niveau : débutant.

**E1 — Lancer le test**

| **1** | **Cliquer Exécuter test**  Bouton « Exécuter test » en haut à droite du canvas. |
| --- | --- |
| **2** | **Entrer la question test**  Taper dans le champ « Votre question » : Prix de la tomate cerise aux Niayes cette semaine ? |
| **3** | **Cliquer Run**  Observer les nœuds s’exécuter un par un dans le log. |
| **4** | **Vérifier le résultat**  Onglet RÉSULTAT → la fiche marché GreenSprint doit apparaîtré avec PRODUIT, PRIX, TENDANCE, ANALYSE, RECOMMANDATIONS. |

**E2 — Publier l’application**

| **1** | **Cliquer Publier**  Bouton Publier en haut à droite → Publier une mise à jour. |
| --- | --- |
| **2** | **Résoudre les erreurs si besoin**  Si une Liste de contrôle apparaît → cliquer sur chaque problème → corriger (voir Section F). |
| **3** | **Exécuter l’application**  Cliquer « Exécuter l’application » → copier l’URL de la barre du navigateur → c’est votre Livrable L1. |

| **✅ Workflow complet et fonctionnel**  Architecture finale : DEBUT → CHERCHEUR → SI/SINON → SORTIE (IF) + REDACTEUR → SORTIE 2 (ELSE).  Tous les nœuds affichent un badge vert après un test réussi.  La fiche marché GreenSprint est générée en sortie du nœud SORTIE 2. |
| --- |

# **Section F — Guide de débogage complet**

Référence rapide pour résoudre les 5 erreurs les plus fréquentes.

| **Erreur** | **Cause** | **Solution** |
| --- | --- | --- |
| **#sys.query# not found** | Variable query non définie dans le nœud DEBUT, ou référencée directement dans le SYSTEM. | 1. Nœud DEBUT → + Champ de saisie → Variable Name : query. 2. Dans le Chercheur : utiliser message USER avec {x} → Début · query. |
| **#Chercheur.text# not found** | Variable référencée directement dans le SYSTEM du Rédacteur. | Dans le Rédacteur : + Ajouter un message → USER → {x} → Chercheur · text. Ne jamais écrire de variable dans le SYSTEM. |
| **Condition IF ne se déclenche pas** | Mot INSUFFISANT mal orthographié ou en minuscules. | Vérifier la casse exacte : INSUFFISANT en majuscules. Vérifier l’opérateur : contient. |
| **variable de sortie est requis** | Nœud SORTIE (branche IF) sans variable configurée. | Cliquer SORTIE → + variable de sortie → Nom : message\_erreur → Valeur : Chercheur · text. |
| **Aucun fournisseur configuré** | Clé GroqCloud non enregistrée dans les paramètres. | Avatar → Paramètres → Fournisseur de Modèles → GroqCloud → Coller clé gsk\_... → Enregistrer. |

# **Section G — Livrables à remettre**

Délai de dépôt : 48h après la séance sur e-Academy.

|  | **Livrable** | **Contenu requis** | **Points** |
| --- | --- | --- | --- |
| **L1** | Agent V1 fonctionnel | URL publique Dify + 2 captures d’écran (test entrée / sortie) | 40 pts |
| **L2** | Schéma d’architecture | Capture du workflow Dify annoté : nœuds nommés, connexions, variables | 30 pts |
| **L3** | Journal de Prompts S3 | Min. 3 prompts analysés (système, chercheur, rédacteur) avec technique Zero-Shot/Few-Shot/CoT | 20 pts |
| **L4** | Réflexion éthique | 1/2 page : 1 risque concret GreenSprint + garde-fou proposé (spécifique à votre agent) | 10 pts |

| **Critère éliminatoire**  L1 : URL inaccessible = 0 point.  L4 : Réflexion générique non ancrée dans votre projet = 0 point.  L3 : Moins de 3 prompts documentés = -10 points. |
| --- |

*M. Malick Faye Diagne — Enseignant responsable GET 409 — Swiss UMEF University — Juin 2026*