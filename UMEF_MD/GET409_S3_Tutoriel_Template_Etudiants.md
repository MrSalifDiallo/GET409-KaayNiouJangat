| GET 409 — Lab Sprint S3 — Template Étudiant  **Tutoriel Dify — Workflow Chercheur → Rédacteur**  Version à personnaliser pour votre projet  Swiss UMEF University — Campus de Dakar — Juin 2026 |
| --- |

| **Remplissez cette fiche avant de commencer**  **Nom de l'équipe :** *[ex : TeamNiayes]*  **Nom du projet / application :** *[ex : GreenSprint, MediConnect, EduLink...]*  **Problème résolu :** *[1 phrase : qui, quoi, où]*  **Utilisateurs cibles :** *[ex : producteurs, patients, étudiants...]*  **Domaine :** *[ex : agriculture, santé, éducation, finance...]*  **Zone géographique :** *[ex : Niayes, Dakar, Saint-Louis, Sénégal...]* |
| --- |

| **Comment utiliser ce document**  1. Remplissez la fiche ci-dessus avant toute autre chose.  2. Chaque encadré violet contient des champs à remplacer. Remplacez tout ce qui est entre [crochets violets].  3. Les prompts en gris sont à copier-coller dans Dify après avoir remplacé les [PLACEHOLDERS].  4. Les encadrés orange sont des erreurs à éviter — lisez-les AVANT de faire l’étape. |
| --- |

# **Étape A — Créer le Workflow**

Durée : 5 minutes. Aucune personnalisation requise — les étapes sont identiques pour tous les projets.

| **1** | **Ouvrir le Studio**  Dify → cliquer Studio dans la barre de navigation en haut. |
| --- | --- |
| **2** | **Créer une nouvelle application**  Cliquer « Créer à partir de zéro ». |
| **3** | **Sélectionner Flux de travail**  Choisir « Flux de travail » (PAS Chatbot, PAS Agent, PAS Chatflow). |
| **4** | **Nommer le projet**  Taper : **[NomProjet]**\_FicheMarche\_v1\_**[NomEquipe]** *ex : GreenSprint\_FicheMarche\_v1\_TeamNiayes* |
| **5** | **Choisir le nœud de départ**  Cliquer « Entrée utilisateur (nœud de départ original) ». |

| **✅ Vérification Étape A**  Le canvas affiche un nœud DEBUT. Le menu des nœuds disponibles s’ouvre automatiquement. |
| --- |

# **Étape B — Configurer l’Agent Chercheur**

Durée : 15 minutes. Étape à personnaliser : le prompt système et la variable d’entrée.

**B1 — Ajouter et configurer le nœud LLM**

| **1** | **Ajouter un nœud LLM**  Dans le menu ouvert automatiquement, cliquer LLM. Le nœud apparaît connecté au DEBUT. |
| --- | --- |
| **2** | **Renommer en CHERCHEUR**  Double-cliquer sur le texte LLM dans le nœud → taper : CHERCHEUR. |
| **3** | **Sélectionner le modèle**  Panneau droit → Configurez un modèle → GroqCloud → **Llama-3.1-8b-instant.** |
| **4** | **Régler la température**  Temperature : 0,3 (réponses précises et factuelles). Fermer la fenêtre. |

**B2 — Votre prompt système Chercheur (personnaliser les [PLACEHOLDERS])**

Remplacez tous les éléments en [MAJUSCULES-VIOLET] par les informations de votre projet. Copiez ensuite dans le champ SYSTEM de Dify.

| **Avant de copier le prompt — définissez ces éléments**  **VOTRE DOMAINE :** *[ex : supply chain maraîichère, santé communautaire, éducation...]*  **NOM DE VOTRE APP :** *[ex : GreenSprint, MediLink, EduConnect...]*  **DESCRIPTION APP :** *[ex : plateforme reliant producteurs des Niayes aux acheteurs de Dakar]*  **ELEMENT CLE 1/2/3 :** *[ex : légume concerné, zone géographique, période]*  **SOURCE 1/2/3 :** *[ex : marchés locaux, bases de données, rapports terrain]*  **CHAMP 1/2/3/4 :** *[ex : LÉGUME, ZONE, PRIX, TENDANCE — adaptés à votre domaine]* |
| --- |

| Tu es un analyste spécialisé en **[VOTRE DOMAINE]** au Sénégal pour **[NOM DE VOTRE APP]**,  **[DESCRIPTION DE VOTRE APPLICATION EN 1 LIGNE]**.  MISSION : Analyser la question ci-dessous et collecter toutes  les données disponibles.  PROCESSUS EN 3 ÉTAPES :  1. ANALYSER la question :  - **[ELEMENT CLE 1 à identifier dans la question]**  - **[ELEMENT CLE 2 à identifier dans la question]**  - **[ELEMENT CLE 3 à identifier dans la question]**  2. RECHERCHER les données sur :  - **[SOURCE DE DONNEES 1]**  - **[SOURCE DE DONNEES 2]**  - **[SOURCE DE DONNEES 3]**  3. ÉVALUER si les données sont suffisantes  FORMAT DE SORTIE OBLIGATOIRE :  Si données SUFFISANTES — retourner :  **[CHAMP 1]** : **[valeur]**  **[CHAMP 2]** : **[valeur]**  **[CHAMP 3]** : **[valeur]**  **[CHAMP 4]** : **[valeur]**  SOURCES : **[origine des informations]**  Si données INSUFFISANTES — retourner UNIQUEMENT :  "INSUFFISANT : **[raison précise en 1 phrase]**"  NE JAMAIS inventer de données. Si indisponible → INSUFFISANT. |
| --- |

| **⚠️ Erreur fréquente — Variable #sys.query# not found**  NE PAS écrire {{#sys.query#}} dans le SYSTEM. Ça ne fonctionne pas.  Solution à l’étape B3 : utiliser le message USER avec {x} → Début · query. |
| --- |

**B3 — Ajouter la variable d’entrée (identique pour tous les projets)**

| **1** | **Ajouter un message USER**  Sous le champ SYSTEM → + Ajouter un message → USER. |
| --- | --- |
| **2** | **Sélectionner la variable**  {x} → Début · query. Le badge bleu apparaît. |
| **3** | **Configurer le nœud DEBUT**  Cliquer DEBUT → + Champ de saisie → Variable Name : query → Label : Votre question → Required : coché → Enregistrer. |

| **✅ Vérification Étape B**  Badge USER : Debut [x] query sans triangle orange.  Nœud DEBUT : (x) query REQUIS visible.  Champ SYSTEM : prompt personnalisé sans [PLACEHOLDER] restant. |
| --- |

# **Étape C — Configurer le SI/SINON**

Durée : 10 minutes. Aucune personnalisation requise — la logique est identique pour tous les projets.

| **1** | **Ajouter le nœud SI/SINON**  Cliquer le + bleu à droite du CHERCHEUR → SI/SINON. |
| --- | --- |
| **2** | **Ajouter une condition**  Panneau droit → + Ajouter une condition. |
| **3** | **Configurer**  Variable : Chercheur · text | Opérateur : contient | Valeur : INSUFFISANT (majuscules obligatoires). |
| **4** | **Connecter IF**  Étape suivante → IF → + SÉLECTIONNER → Sortie. |
| **5** | **Connecter ELSE**  Étape suivante → ELSE → + SÉLECTIONNER → LLM. |

| **⚠️ Erreur fréquente — La condition ne se déclenche jamais**  Cause : INSUFFISANT mal orthographié ou en minuscules.  Solution : copier-coller exactement : INSUFFISANT |
| --- |

| **✅ Vérification Étape C**  Condition : Chercheur · text · contient · INSUFFISANT visible.  IF → SORTIE connectée. ELSE → LLM connecté. |
| --- |

# **Étape D — Configurer l’Agent Rédacteur**

Durée : 15 minutes. Étape à personnaliser : le prompt système et l’exemple de rapport.

**D1 — Configurer le modèle**

| **1** | **Renommer en REDACTEUR**  Double-cliquer sur le LLM connecté à ELSE → taper : REDACTEUR. |
| --- | --- |
| **2** | **Sélectionner le modèle**  Llama-3.1-8b-instant. Temperature : 0,7. |

**D2 — Votre prompt système Rédacteur (personnaliser les [PLACEHOLDERS])**

| **Avant de copier le prompt — créez votre exemple de rapport**  **NOM DE VOTRE APP :** *[ex : GreenSprint, MediLink...]*  **DESCRIPTION APP :** *[ex : plateforme maraîichère Niayes → Dakar]*  **TITRE DU RAPPORT :** *[ex : FICHE MARCHÉ, BULLETIN SANTÉ, RAPPORT FORMATION...]*  **SECTION 1 TITRE + CONTENU :** *[ex : PRODUIT : Tomate cerise]*  **SECTION 2 TITRE + CONTENU :** *[ex : ANALYSE : tendance du marché...]*  **SECTION 3 TITRE + CONTENU :** *[ex : RECOMMANDATIONS : actions à prendre...]*  **TON :** *[ex : professionnel, accessible, direct, chaleureux]*  **LONGUEUR MAX :** *[ex : 150 mots, 200 mots, 250 mots]* |
| --- |

Conseil : testez votre exemple de rapport dans Claude.ai AVANT de le coller dans Dify. Cela économise du temps de débogage.

| Tu es un rédacteur spécialisé en communication pour **[NOM DE VOTRE APP]**,  **[DESCRIPTION DE VOTRE APPLICATION EN 1 LIGNE]**.  MISSION : Rédiger un rapport structuré et accessible  à partir des données reçues.  EXEMPLE DE RAPPORT ATTENDU :  ――――――――――――――――――――――――  **[TITRE DU RAPPORT]**  **[Sous-titre — ex : Semaine · Zone · Date]**  ――――――――――――――――――――――――  **[SECTION 1 — ex : PRODUIT ou SUJET PRINCIPAL]**  **[Exemple de contenu pour la section 1]**  ――――――――――――――――――――――――  **[SECTION 2 — ex : ANALYSE]**  **[Exemple de contenu pour la section 2]**  ――――――――――――――――――――――――  **[SECTION 3 — ex : ALERTES ou POINTS D’ATTENTION]**  **[Exemple de contenu pour la section 3]**  ――――――――――――――――――――――――  **[SECTION 4 — ex : RECOMMANDATIONS]**  **[Exemple de contenu pour la section 4]**  ――――――――――――――――――――――――  SUR CE MODELE, rédige le rapport pour les données reçues.  Si une donnée manque : indiquer Non disponible.  Ton : **[TON]**. Longueur : **[LONGUEUR MAX]** maximum. |
| --- |

**D3 — Connecter les données du Chercheur (identique pour tous les projets)**

| **1** | **Ajouter un message USER**  Sous le SYSTEM → + Ajouter un message → USER. |
| --- | --- |
| **2** | **Sélectionner la variable**  {x} → Chercheur · text. Badge bleu sans triangle orange. |

| **⚠️ Erreur fréquente — Variable #Chercheur.text# not found**  Ne jamais écrire de variable dans le SYSTEM. Toujours utiliser le message USER avec {x}. |
| --- |

**D4 — Ajouter le nœud SORTIE finale**

| **1** | **Ajouter Sortie**  + à droite du REDACTEUR → Sortie. |
| --- | --- |
| **2** | **Configurer**  + variable de sortie → Nom : text → Valeur : {x} → Redacteur · text. |

| **✅ Vérification Étape D**  SYSTEM : prompt sans [PLACEHOLDER] restant.  USER : badge Chercheur · text sans triangle orange.  SORTIE 2 : variable Redacteur · text configurée. |
| --- |

# **Étape E — Tester et Publier**

**E1 — Vos questions de test (personnaliser)**

Préparez 2 questions avant de lancer le test :

| **Vos 2 questions de test**  **Question 1 (précise) :** *[ex : Prix tomate cerise Niayes cette semaine ? — doit passer directement au Rédacteur]*  **Question 2 (vague) :** *[ex : ? ou un seul mot — doit déclencher INSUFFISANT et aller à SORTIE]* |
| --- |

| **1** | **Exécuter test**  Bouton Exécuter test en haut à droite. |
| --- | --- |
| **2** | **Tester Question 1**  Entrer votre question précise → Run → Vérifier que le rapport complet apparaît dans RESULTAT. |
| **3** | **Tester Question 2**  Entrer votre question vague → Run → Vérifier que INSUFFISANT apparaît en sortie. |
| **4** | **Publier**  Bouton Publier → Publier une mise à jour → Exécuter l’application → Copier l’URL. |

| **⚠️ Blocage à la publication — variable de sortie est requis**  Cliquer sur le nœud SORTIE (branche IF) → + variable de sortie → Nom : message\_erreur → Valeur : {x} → Chercheur · text. |
| --- |

# **Section F — Réflexion éthique (Livrable L4)**

Utilisez ce prompt dans Claude.ai pour générer votre réflexion éthique. Personnalisez les [PLACEHOLDERS] avec votre projet.

| **Informations nécessaires pour le prompt éthique**  **NOM DE VOTRE AGENT :** *[ex : Agent GreenSprint, Agent MediLink...]*  **CE QUE FAIT L’AGENT :** *[2-3 phrases : ce qu’il fait, les données utilisées, les utilisateurs]*  **TYPES DE DONNEES :** *[ex : prix marché, stocks, données de santé, résultats scolaires...]*  **QUI UTILISE L’AGENT :** *[ex : producteurs, patients, enseignants...]*  **VOTRE SECTEUR :** *[ex : agriculture, santé, éducation...]* |
| --- |

Copiez ce prompt dans Claude.ai après avoir remplacé tous les [PLACEHOLDERS] :

| Analyse les enjeux éthiques de MON agent Dify.  Raisonne étape par étape. Sois spécifique à mon cas.  MON AGENT :  Nom : **[NOM DE VOTRE AGENT]**  Ce qu’il fait : **[CE QUE FAIT L’AGENT EN 2-3 PHRASES]**  Données utilisées : **[TYPES DE DONNEES]**  Utilisateurs : **[QUI UTILISE L’AGENT]**  Contexte : Sénégal · **[VOTRE SECTEUR]** · No-code  ÉTAPE 1 — IDENTIFIER 2 RISQUES CONCRETS :  Pour chaque risque :  - Nomme-le clairement  - Décris le scénario concret où il se réalise  - Identifie QUI est impacté et COMMENT  ÉTAPE 2 — ÉVALUER LA GRAVITÉ :  Pour chaque risque : Probabilité + Impact + Urgence  ÉTAPE 3 — PROPOSER DES GARDE-FOUS :  Pour chaque risque :  1. Une mesure technique réaliste  2. Un message de transparence à afficher dans l’interface  3. Une règle à intégrer dans le prompt système  LIVRABLE ATTENDU :  Un texte de 1/2 page (150-200 mots) structuré en 3 paragraphes,  directement utilisable comme réflexion éthique pour le livrable L4. |
| --- |

| **Critère éliminatoire L4**  Réflexion générique = 0 point. Votre réflexion DOIT être ancrée dans votre projet spécifique. |
| --- |

# **Section G — Checklist finale — Livrables**

| **✓** |  | **Livrable** | **Contenu requis** | **Points** |
| --- | --- | --- | --- | --- |
| ☐ | **L1** | Agent V1 fonctionnel | URL publique Dify + 2 captures test entrée/sortie | 40 pts |
| ☐ | **L2** | Schéma d’architecture | Capture workflow annoté : nœuds nommés + connexions | 30 pts |
| ☐ | **L3** | Journal de Prompts | Min. 3 prompts analysés avec technique Zero-Shot/Few-Shot/CoT | 20 pts |
| ☐ | **L4** | Réflexion éthique | 1/2 page : 2 risques spécifiques + garde-fous (non générique) | 10 pts |

*M. Malick Faye Diagne — Enseignant responsable GET 409 — Swiss UMEF University — Juin 2026*