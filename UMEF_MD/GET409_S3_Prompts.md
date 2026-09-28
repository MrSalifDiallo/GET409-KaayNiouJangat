|  |
| --- |
| **GET 409 — Atelier IA No-Code**  Swiss UMEF University — Campus de Dakar  **BIBLIOTHÈQUE DE PROMPTS**  **SÉANCE 3 — Architecture Multi-Agents avec Dify**  *TP guidé : Agent conversationnel + Workflow Chercheur → Rédacteur*  *M. Malick Faye Diagne — Enseignant responsable | Juin 2026* |

## **Tableau récapitulatif des prompts S3**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **CODE** | **TITRE** | **TECHNIQUE** | **OUTIL** | **DURÉE** | **POURQUOI** |
| **E1** | Initialiser l'Agent GreenSprint dans Dify | *Prompt structuré* | **dify.ai** | 15 min | Configurer le premier agent conversationnel complet |
| **E2** | Rédiger le prompt système de l'Agent Chercheur | *Prompt système* | **dify.ai** | 10 min | Définir le rôle, contexte et règles du nœud LLM Chercheur |
| **E3** | Configurer le nœud IF/ELSE | *Technique conditionnelle* | **dify.ai** | 10 min | Créer la logique de boucle si données insuffisantes |
| **E4** | Rédiger le prompt du LLM Rédacteur | *Few-Shot* | **dify.ai** | 10 min | Générer une fiche marché structurée depuis les données collectées |
| **E5** | Évaluation éthique des agents autonomes | *Chain-of-Thought* | **Claude.ai** | 15 min | Identifier les risques éthiques d'un système multi-agents GreenSprint |
| **S1** | Créer son premier agent conversationnel | *Prompt structuré* | **dify.ai** | 15 min | Adapter le template enseignant au contexte de l'équipe |
| **S2** | Écrire le prompt système de son agent | *Zero-Shot* | **dify.ai** | 10 min | Définir identité, rôle et règles de son propre agent |
| **S3** | Rédiger le prompt du nœud Chercheur | *Zero-Shot structuré* | **dify.ai** | 10 min | Configurer le LLM Chercheur avec format de sortie clair |
| **S4** | Configurer la boucle IF/ELSE | *Technique* | **dify.ai** | 10 min | Tester et valider la condition INSUFFISANT dans le workflow |
| **S5** | Rédiger le prompt du LLM Rédacteur | *Few-Shot* | **dify.ai** | 10 min | Générer une fiche marché depuis les données du Chercheur |
| **S6** | Réflexion éthique sur son agent | *Chain-of-Thought* | **Claude.ai** | 15 min | Identifier 2 risques concrets liés à son propre système agent |

|  |
| --- |
| **PROMPTS ENSEIGNANT — E1 à E5** |

|  |
| --- |
| **E1 — Initialiser l'Agent GreenSprint dans Dify** |

|  |
| --- |
| **TECHNIQUE :** Prompt structuré — Configuration complète en une requête |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **dify.ai** | *Flowise / n8n* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Studio → + Créer → Agent* |

**Objectif :**

Créer et configurer un agent conversationnel GreenSprint complet dans Dify en une seule session guidée. Ce prompt sert de script pour la démo live enseignant — les étudiants reproduisent exactement les mêmes étapes pendant le TP.

**Contexte pédagogique :**

La S3 est la première fois que les étudiants créent un agent IA. L'enjeu est de démystifier l'interface Dify en montrant qu'un agent professionnel se configure en moins de 15 minutes. Ce prompt produit un agent immédiatement testable avec des réponses pertinentes sur GreenSprint.

|  |
| --- |
| [Script démo enseignant — Actions dans l'interface Dify]  ÉTAPE 1 — CRÉER L'APPLICATION :  → dify.ai → Se connecter → Studio  → Cliquer "+ Create" → Sélectionner "Agent"  → Nommer : Agent\_GreenSprint\_V1  → Description : "Agent conseiller supply chain  maraîchère Niayes → Dakar"  → Cliquer "Create"  ÉTAPE 2 — CONFIGURER LE PROMPT SYSTÈME :  → Panneau gauche → "Instructions"  → Coller le prompt système suivant :  Tu es un expert en supply chain maraîchère  au Sénégal, spécialisé dans la filière  Niayes → Dakar pour la plateforme GreenSprint.  Tes missions :  1. Fournir les prix du marché en temps réel  2. Conseiller sur la logistique et conservation  3. Alerter sur les risques de pertes post-récolte  4. Suggérer des solutions locales accessibles  Règles strictes :  - Toujours citer tes sources si disponibles  - Si tu ne sais pas, dis-le clairement  - Réponds en français (termes wolof si approprié)  - Format : 3 parties max (Situation · Analyse · Conseil)  ÉTAPE 3 — ACTIVER L'OUTIL WEB SEARCH :  → Panneau gauche → "Tools"  → Cliquer "+ Add Tool" → "Web Search"  → Entrer la clé API Serper (fournie par l'enseignant)  → Activer le toggle → Enregistrer  ÉTAPE 4 — CONFIGURER LES PARAMÈTRES :  → Model : claude-3-haiku ou gpt-3.5-turbo  → Temperature : 0.4 (équilibre précision/créativité)  → Max tokens : 800  → Memory : Activer (conversation history)  ÉTAPE 5 — TESTER EN MODE DEBUG :  → Cliquer "Run" (icône ▶ en haut)  → Tester avec ces 3 questions dans l'ordre :  Q1 : "Prix du chou blanc à Pikine cette semaine ?"  Q2 : "Comment conserver les tomates 48h sans frigo ?"  Q3 : "Quels légumes sont disponibles aux Niayes Nord ?"  → Observer : raisonnement de l'agent + sources citées  ÉTAPE 6 — PUBLIER ET PARTAGER :  → Cliquer "Publish" en haut à droite  → Copier l'URL publique → partager avec l'équipe  → Tester l'URL depuis un autre appareil |

|  |
| --- |
| **📊 Analyse :** Ce script de démo construit la confiance des étudiants avant le TP : voir un agent professionnel créé en 15 minutes par l'enseignant rend la tâche accessible. Les 3 questions de test sont calibrées pour montrer progressivement les capacités de l'agent. |

|  |
| --- |
| **E2 — Prompt système du LLM Chercheur (Workflow)** |

|  |
| --- |
| **TECHNIQUE :** Prompt système — Rôle, mission et format de sortie structuré |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai — Nœud LLM** | *Claude.ai pour variantes* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Studio → Workflow → Nœud LLM Chercheur* |

**Objectif :**

Configurer le prompt du premier nœud LLM du workflow (Agent Chercheur). Ce nœud reçoit la question de l'utilisateur, cherche les données pertinentes et retourne soit les données structurées, soit le mot-clé INSUFFISANT pour déclencher la boucle IF/ELSE.

**Point pédagogique clé :**

Le mot 'INSUFFISANT' en majuscules est le signal de contrôle qui déclenche la boucle. Les étudiants doivent comprendre que ce mot est une convention qu'ils choisissent — ils pourraient tout aussi bien utiliser 'RETRY' ou 'DONNÉES\_MANQUANTES'. C'est leur premier contact avec la notion de protocole de communication entre agents.

|  |
| --- |
| [Prompt à coller dans le nœud LLM Chercheur de Dify]  Tu es un analyste spécialisé en supply chain  maraîchère au Sénégal pour GreenSprint.  MISSION : Analyser la question de l'utilisateur  et collecter toutes les données disponibles.  QUESTION REÇUE : {{sys.query}}  PROCESSUS EN 3 ÉTAPES :  1. ANALYSER la question :  - Quel légume est concerné ?  - Quelle zone géographique ?  - Quelle période de temps ?  2. RECHERCHER les données :  - Prix actuels sur les marchés concernés  - Volumes disponibles et tendances  - Risques logistiques ou climatiques  - Contacts producteurs si pertinent  3. ÉVALUER la suffisance :  - Les données sont-elles complètes et récentes ?  - Peut-on rédiger un conseil utile ?  FORMAT DE SORTIE OBLIGATOIRE :  Si données SUFFISANTES :  Retourner les données structurées ainsi :  LÉGUME : [nom]  ZONE : [localisation]  PRIX : [fourchette FCFA/kg]  DISPONIBILITÉ : [disponible / en rupture / limité]  TENDANCE : [hausse / stable / baisse]  RISQUES : [points d'attention]  SOURCES : [origine des données]  Si données INSUFFISANTES :  Retourner UNIQUEMENT ce texte exact :  "INSUFFISANT : [raison précise en 1 phrase]"  NE PAS ajouter d'autres informations dans ce cas. |

|  |
| --- |
| **💡 Conseil :** Insistez sur le format de sortie pendant la démo : le nœud IF/ELSE va lire la réponse et chercher le mot INSUFFISANT. Si l'agent écrit 'Insuffisant' avec minuscule ou 'données insuffisantes', la condition ne se déclenchera pas. |

|  |
| --- |
| **📊 Analyse :** Ce prompt introduit le concept fondamental de 'contrat d'interface' entre agents : le Chercheur s'engage à retourner un format précis que le Rédacteur et le IF/ELSE peuvent exploiter de manière fiable. C'est le cœur de l'architecture multi-agents. |

|  |
| --- |
| **E3 — Configuration du nœud IF/ELSE** |

|  |
| --- |
| **TECHNIQUE :** Logique conditionnelle — Contrôle de flux dans un workflow Dify |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai — Nœud IF/ELSE** | *n8n / Make / Zapier* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Workflow → + Add Node → IF/ELSE* |

**Objectif :**

Configurer le nœud de contrôle logique qui décide si le workflow boucle vers le Chercheur (données insuffisantes) ou continue vers le Rédacteur (données ok). Ce nœud est le 'cerveau de décision' du pipeline.

**Erreur fréquente à anticiper :**

Les étudiants oublient souvent de nommer correctement la variable de sortie du Chercheur. Si la variable s'appelle 'output' dans le nœud Chercheur mais que le IF/ELSE cherche 'output\_chercheur', la condition ne fonctionnera jamais. Vérifier les noms de variables avant de tester.

|  |
| --- |
| [Configuration à effectuer dans l'interface Dify]  ÉTAPE 1 — AJOUTER LE NŒUD :  → Canvas du workflow → + Add Node  → Sélectionner "IF/ELSE"  → Placer entre le nœud Chercheur et le nœud Rédacteur  → Connecter : Chercheur (output) → IF/ELSE (input)  ÉTAPE 2 — NOMMER LES VARIABLES :  → Dans le nœud Chercheur, vérifier que la variable  de sortie s'appelle : output\_chercheur  → Si ce n'est pas le cas : renommer maintenant  ÉTAPE 3 — CONFIGURER LA CONDITION :  → Dans le nœud IF/ELSE :  Variable : {{output\_chercheur}}  Opérateur : contains  Valeur : INSUFFISANT  → Cette condition est VRAIE si le Chercheur  a retourné "INSUFFISANT : [raison]"  → Cette condition est FAUSSE si le Chercheur  a retourné des données structurées  ÉTAPE 4 — CONNECTER LES BRANCHES :  → Branche TRUE (condition = INSUFFISANT) :  Connecter → retour vers le nœud Chercheur  IMPORTANT : Ajouter un compteur d'itérations  Maximum autorisé : 2 tentatives  Au-delà : aller vers END avec message d'erreur  → Branche FALSE (données ok) :  Connecter → vers le nœud LLM Rédacteur  ÉTAPE 5 — TESTER LA LOGIQUE :  → Tester avec une question très vague :  "Légumes ?" (doit déclencher INSUFFISANT)  → Tester avec une question précise :  "Prix tomate cerise Pikine semaine 23 ?"  (doit passer directement au Rédacteur)  VARIABLE DE CONTRÔLE OPTIONNELLE :  → Ajouter une variable compteur\_iterations  → Incrémenter à chaque passage dans Chercheur  → Si compteur >= 2 → forcer la branche FALSE |

|  |
| --- |
| **⚠️ Attention :** Sans limite d'itérations, un workflow peut boucler indéfiniment si le Chercheur retourne toujours INSUFFISANT. Cela consomme des crédits API et bloque le pipeline. Le compteur maximum est non négociable en production. |

|  |
| --- |
| **📊 Analyse :** La condition IF/ELSE est souvent le point de blocage principal du TP. Prévoir 5 minutes de débogage collectif autour de ce nœud. La cause la plus fréquente : noms de variables incohérents entre les nœuds. |

|  |
| --- |
| **E4 — Prompt du LLM Rédacteur (Fiche Marché)** |

|  |
| --- |
| **TECHNIQUE :** Few-Shot — Exemples de fiches pour guider le format de sortie |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai — Nœud LLM Rédacteur** | *Claude.ai pour test préalable* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Workflow → Nœud LLM Rédacteur* |

**Objectif :**

Configurer le deuxième nœud LLM qui reçoit les données structurées du Chercheur et génère une fiche marché professionnelle, lisible et actionnable pour les producteurs et acheteurs GreenSprint.

**Pourquoi Few-Shot ici :**

Le format d'une fiche marché professionnelle est précis et reconnaissable. Donner un exemple concret au LLM Rédacteur garantit une cohérence visuelle entre les fiches générées par différentes équipes. Sans exemple, chaque LLM invente son propre format.

|  |
| --- |
| [Prompt à coller dans le nœud LLM Rédacteur de Dify]  Tu es un rédacteur spécialisé en communication  agricole pour GreenSprint, plateforme maraîchère  Niayes → Dakar.  DONNÉES REÇUES DU CHERCHEUR :  {{output\_chercheur}}  MISSION : Rédiger une fiche marché hebdomadaire  professionnelle à partir de ces données.  EXEMPLE DE FICHE ATTENDUE :  ─────────────────────────────────────  🌿 FICHE MARCHÉ GREENSPRINT  Semaine 23 · Juin 2026  ─────────────────────────────────────  📦 PRODUIT : Tomate cerise  📍 ZONE : Niayes Nord / Pikine  💰 PRIX : 750–850 FCFA/kg  📊 TENDANCE : Légère hausse (+8%)  ✅ DISPONIBILITÉ : Bonne (stocks suffisants)  ─────────────────────────────────────  📋 ANALYSE  Le prix de la tomate cerise connaît une  légère hausse liée à la forte demande des  restaurants dakarois en période de Tabaski.  Les stocks restent suffisants jusqu'à fin juin.  ─────────────────────────────────────  ⚠️ ALERTES  · Transport : préférer les trajets tôt le matin  (éviter chaleur 11h–15h)  · Conservation : max 48h sans réfrigération  ─────────────────────────────────────  💡 RECOMMANDATIONS  Pour les producteurs : négocier maintenant  les prix pour la semaine suivante.  Pour les acheteurs : constituer des stocks  avant la fin de semaine.  ─────────────────────────────────────  SOURCE : Marché Thiaroye · Dépôt Niayes Nord  SUR CE MODÈLE, rédige la fiche pour les  données reçues. Adapte chaque section.  Si une donnée manque, indique "Non disponible"  plutôt qu'inventer une valeur.  Langue : français clair, accessible à tous.  Longueur : 150–250 mots maximum. |

|  |
| --- |
| **💡 Conseil :** Demandez aux étudiants de tester leur fiche avec une question très spécifique ET une question générale. La qualité du Few-Shot se voit dans la cohérence du format entre les deux réponses. |

|  |
| --- |
| **📊 Analyse :** Le Few-Shot avec un exemple complet réduit de 70% les reformulations nécessaires. Les étudiants apprennent ainsi que la qualité d'un LLM Rédacteur dépend autant de l'exemple fourni que de la qualité des données reçues. |

|  |
| --- |
| **E5 — Évaluation éthique des agents autonomes (Chain-of-Thought)** |

|  |
| --- |
| **TECHNIQUE :** Chain-of-Thought — Raisonnement structuré en 4 étapes |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Avancé** | 15 min | **Claude.ai** | *ChatGPT / Gemini* |

|  |
| --- |
| **APPLICATION : Claude.ai —** *https://claude.ai* |

**Objectif :**

Amener les étudiants à réfléchir aux risques éthiques spécifiques de leur système multi-agents GreenSprint. Ce prompt CoT structure la réflexion en 4 dimensions qui correspondent aux enjeux réels du déploiement de l'IA dans le secteur agricole sénégalais.

**Moment pédagogique recommandé :**

Utiliser ce prompt en collectif après la restitution des TP, quand tous les agents sont fonctionnels. Le fait que les agents marchent rend les risques concrets plutôt qu'abstraits.

|  |
| --- |
| Analyse les enjeux éthiques du système multi-agents  GreenSprint que nous venons de construire.  Raisonne étape par étape.  NOTRE SYSTÈME :  - Agent Chercheur : recherche web + données marché  - Agent Rédacteur : génère des fiches marché  - Utilisateurs : producteurs et acheteurs Niayes/Dakar  - Données : prix marché, disponibilités, conseils  ÉTAPE 1 — RISQUES LIÉS AUX DONNÉES :  Notre agent cite des prix et disponibilités en temps réel.  - Que se passe-t-il si les données sont fausses ou périmées ?  - Un producteur qui fixe son prix sur une fausse donnée :  quel impact sur ses revenus ?  - Qui est responsable de la qualité des données ?  ÉTAPE 2 — RISQUES D'EXCLUSION NUMÉRIQUE :  Notre agent répond en français.  - Que se passe-t-il pour les producteurs  qui ne lisent pas le français ?  - L'agent est accessible via smartphone :  quelle proportion des producteurs Niayes  a un smartphone avec connexion correcte ?  - Notre outil crée-t-il une inégalité  entre producteurs connectés et non connectés ?  ÉTAPE 3 — RISQUES DE DÉPENDANCE :  Les producteurs pourraient prendre des décisions  importantes uniquement sur les recommandations de l'agent.  - Quelles décisions ne JAMAIS déléguer à un agent IA ?  - Comment signaler clairement les limites de l'agent  dans l'interface GreenSprint ?  - Que se passe-t-il si l'API Dify tombe pendant  une période critique (veille de récolte) ?  ÉTAPE 4 — PROPOSITION DE GARDE-FOUS :  Pour chaque risque identifié, proposes :  1. Une mesure technique réaliste  2. Une mesure organisationnelle réaliste  3. Un message de transparence à afficher  dans l'interface GreenSprint  CONCLUSION :  Note globale de risque /10 et recommandation :  déploiement immédiat / pilote limité / refonte nécessaire ? |

|  |
| --- |
| **📊 Analyse :** Ce CoT en 4 étapes couvre les dimensions clés du référentiel éthique IA appliqué au contexte sénégalais : fiabilité des données, inclusion numérique, dépendance technologique et transparence. La conclusion force une position tranchée qui stimule le débat en classe. |

|  |
| --- |
| **PROMPTS ÉTUDIANTS — S1 à S6** |

|  |
| --- |
| **S1 — Créer son premier agent conversationnel GreenSprint** |

|  |
| --- |
| **TECHNIQUE :** Prompt structuré — Personnalisation du template enseignant |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **dify.ai** | *Flowise* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Studio → + Créer → Agent* |

**Objectif :**

Adapter le template de l'agent enseignant (E1) au contexte spécifique de votre équipe. Les parties entre [crochets] sont obligatoirement à remplacer — un agent avec des [crochets] non remplacés = livrable incomplet.

|  |
| --- |
| [Prompt système à coller dans votre Agent Dify]  Tu es un expert en [VOTRE DOMAINE SPÉCIFIQUE]  au Sénégal, spécialisé dans [VOTRE SEGMENT].  Tu travailles pour [NOM\_DE\_VOTRE\_APP],  plateforme qui [DÉCRIRE CE QUE FAIT VOTRE APP].  TES UTILISATEURS :  - [PROFIL UTILISATEUR 1 — ex: producteurs maraîchers]  - [PROFIL UTILISATEUR 2 — ex: acheteurs dakarois]  TES MISSIONS PRINCIPALES :  1. [MISSION 1 — ex: Fournir les prix du marché]  2. [MISSION 2 — ex: Conseiller sur la logistique]  3. [MISSION 3 — ex: Alerter sur les risques]  TES RÈGLES STRICTES :  - Toujours citer tes sources si disponibles  - Si tu ne sais pas, dis-le clairement  - Réponds en français clair et accessible  - [TA RÈGLE SPÉCIFIQUE AU PROJET]  FORMAT DE RÉPONSE :  Structure chaque réponse en 3 parties :  1. [SECTION 1 — ex: Situation actuelle]  2. [SECTION 2 — ex: Analyse et conseil]  3. [SECTION 3 — ex: Actions recommandées]  Maximum 200 mots par réponse.  EXEMPLES DE QUESTIONS QUE TU SAIS RÉPONDRE :  - "[EXEMPLE QUESTION 1]"  - "[EXEMPLE QUESTION 2]"  EXEMPLES DE QUESTIONS HORS DE TON PÉRIMÈTRE :  - "[QUESTION HORS-SUJET 1]"  → Réponse type : "Je suis spécialisé en [DOMAINE].  Pour [QUESTION HORS-SUJET], consultez [RESSOURCE]."  Température recommandée : 0.4  Modèle recommandé : claude-3-haiku ou gpt-3.5-turbo |

|  |
| --- |
| **💡 Conseil :** Testez votre agent avec au moins 5 questions avant de soumettre le livrable L1. Notez dans votre Journal de Prompts : la question posée, la réponse obtenue, et votre évaluation (pertinente / à améliorer). |

|  |
| --- |
| **S2 — Écrire le prompt système de son agent (Zero-Shot)** |

|  |
| --- |
| **TECHNIQUE :** Zero-Shot — Construire le prompt système sans exemple fourni |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **dify.ai + Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai —** *https://claude.ai → Rédiger puis copier dans Dify* |

**Objectif :**

Utiliser Claude.ai pour générer automatiquement un prompt système optimisé pour votre agent Dify, puis le copier-coller directement dans la configuration. Technique : Zero-Shot — vous donnez le contexte sans exemple.

|  |
| --- |
| Génère un prompt système optimisé pour un agent IA  Dify destiné à des non-développeurs.  MON PROJET :  Nom : [NOM DE VOTRE APPLICATION]  Problème résolu : [DÉCRIRE LE PROBLÈME EN 1 PHRASE]  Utilisateurs cibles : [QUI VA UTILISER L'AGENT]  Secteur : [DOMAINE — ex: agriculture, santé, éducation]  Contexte géographique : [RÉGION / PAYS]  L'AGENT DOIT SAVOIR FAIRE :  1. [CAPACITÉ 1]  2. [CAPACITÉ 2]  3. [CAPACITÉ 3]  L'AGENT NE DOIT PAS FAIRE :  1. [LIMITE 1 — ce qui est hors périmètre]  2. [LIMITE 2]  CONTRAINTES TECHNIQUES :  - Longueur des réponses : [courtes / moyennes / longues]  - Langue : français  - Ton : [professionnel / accessible / technique]  - Format souhaité : [liste / paragraphe / tableau]  Génère un prompt système complet et directement  utilisable dans Dify.  Inclure : rôle, contexte, missions, règles, format.  Maximum 300 mots. |

|  |
| --- |
| **💡 Conseil :** Comparez le prompt généré par Claude.ai avec votre prompt rédigé manuellement. Notez les différences dans votre Journal de Prompts. Cette comparaison est souvent plus instructive que le prompt lui-même. |

|  |
| --- |
| **S3 — Rédiger le prompt du nœud LLM Chercheur** |

|  |
| --- |
| **TECHNIQUE :** Zero-Shot structuré — Instructions précises avec format de sortie obligatoire |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai — Nœud LLM** | *Claude.ai pour tester* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Workflow → Nœud LLM Chercheur* |

**Objectif :**

Adapter le prompt du nœud Chercheur (E2) à votre domaine spécifique. L'enjeu est de conserver le format de sortie structuré tout en personnalisant le contexte métier.

|  |
| --- |
| [Prompt à adapter pour votre nœud LLM Chercheur]  Tu es un analyste spécialisé en [VOTRE DOMAINE]  au Sénégal pour [NOM DE VOTRE APPLICATION].  MISSION : Analyser la question suivante et  collecter toutes les données disponibles.  QUESTION REÇUE : {{sys.query}}  PROCESSUS :  1. IDENTIFIER les éléments clés de la question :  - [ÉLÉMENT CLÉ 1 — ex: produit concerné]  - [ÉLÉMENT CLÉ 2 — ex: zone géographique]  - [ÉLÉMENT CLÉ 3 — ex: période de temps]  2. RECHERCHER les informations pertinentes sur :  - [SOURCE DE DONNÉES 1]  - [SOURCE DE DONNÉES 2]  - [SOURCE DE DONNÉES 3]  3. ÉVALUER si les données sont suffisantes pour  rédiger une réponse utile et précise.  FORMAT DE SORTIE OBLIGATOIRE :  Si données SUFFISANTES — retourner :  [CHAMP 1] : [valeur]  [CHAMP 2] : [valeur]  [CHAMP 3] : [valeur]  [CHAMP 4] : [valeur]  SOURCES : [origine des informations]  Si données INSUFFISANTES — retourner UNIQUEMENT :  "INSUFFISANT : [raison précise en 1 phrase]"  ⚠️ IMPORTANT : Ne jamais inventer de données.  Si l'information n'est pas disponible,  retourner INSUFFISANT avec une explication claire. |

|  |
| --- |
| **⚠️ Attention :** Le format de sortie du Chercheur doit être cohérent avec ce que le IF/ELSE vérifie et ce que le Rédacteur attend. Toute modification de la ligne 'INSUFFISANT' doit être répercutée dans la condition IF/ELSE. |

|  |
| --- |
| **S4 — Configurer et tester la boucle IF/ELSE** |

|  |
| --- |
| **TECHNIQUE :** Logique conditionnelle — Test et validation de la boucle |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai** | *n8n / Make* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Workflow → Nœud IF/ELSE* |

**Objectif :**

Valider que la condition IF/ELSE fonctionne correctement dans les deux sens — déclenchement de la boucle ET passage vers le Rédacteur. Ce prompt est une procédure de test systématique.

|  |
| --- |
| [Procédure de test de votre nœud IF/ELSE dans Dify]  CONFIGURATION À VÉRIFIER :  Variable : {{output\_chercheur}}  Opérateur : contains  Valeur : INSUFFISANT  TEST 1 — Vérifier la branche TRUE (boucle) :  → Lancer le workflow avec cette question :  "?" (ou une question à 1 caractère)  → Résultat attendu :  · Le Chercheur retourne "INSUFFISANT : ..."  · Le IF/ELSE détecte INSUFFISANT = TRUE  · Le workflow boucle vers le Chercheur  · Maximum 2 tentatives puis arrêt  → Si ce n'est pas ce qui se passe :  Vérifier le nom de la variable de sortie  du Chercheur (doit être output\_chercheur)  TEST 2 — Vérifier la branche FALSE (vers Rédacteur) :  → Lancer le workflow avec cette question précise :  [COLLER UNE VRAIE QUESTION DE VOTRE DOMAINE]  Ex GreenSprint : "Prix tomate cerise Pikine juin ?"  → Résultat attendu :  · Le Chercheur retourne des données structurées  · Le IF/ELSE ne détecte pas INSUFFISANT = FALSE  · Le workflow continue vers le Rédacteur  · Le Rédacteur génère une fiche complète  DÉBOGAGE FRÉQUENT :  Problème : la condition ne se déclenche jamais  Solution A : Vérifier la casse — "INSUFFISANT"  (majuscules) ≠ "insuffisant" (minuscules)  Solution B : Vérifier que le Chercheur utilise  bien le mot exact "INSUFFISANT" sans apostrophe  Solution C : Re-nommer la variable de sortie  du Chercheur en output\_chercheur  📸 LIVRABLE : Capturer 2 screenshots :  - Screenshot 1 : condition IF/ELSE TRUE en action  - Screenshot 2 : pipeline complet en action FALSE |

|  |
| --- |
| **📊 Analyse :** Ce prompt de test systématique forme les étudiants à la pratique professionnelle du débogage : tester les cas limites avant les cas normaux. Une équipe qui a testé les deux branches est une équipe prête pour la démo S6. |

|  |
| --- |
| **S5 — Rédiger et tester le prompt du LLM Rédacteur** |

|  |
| --- |
| **TECHNIQUE :** Few-Shot — Exemple de fiche complète pour guider le format |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai — Nœud LLM Rédacteur** | *Claude.ai pour prototype* |

|  |
| --- |
| **APPLICATION : dify.ai —** *https://dify.ai → Workflow → Nœud LLM Rédacteur* |

**Objectif :**

Adapter le prompt du Rédacteur (E4) à votre domaine en créant votre propre exemple de fiche Few-Shot. La qualité de cet exemple détermine directement la qualité des fiches générées.

|  |
| --- |
| [Prompt à adapter pour votre nœud LLM Rédacteur]  Tu es un rédacteur spécialisé en communication  pour [NOM DE VOTRE APPLICATION], plateforme  [DÉCRIRE EN 1 LIGNE].  DONNÉES REÇUES :  {{output\_chercheur}}  MISSION : Rédiger un rapport structuré et  accessible à partir de ces données.  EXEMPLE DE RAPPORT ATTENDU :  [COLLER ICI VOTRE EXEMPLE COMPLET DE FICHE]  [Créez votre propre exemple avec vos données réelles]  [Incluez tous les champs que vous voulez voir apparaître]  [Testez cet exemple sur Claude.ai d'abord]  SUR CE MODÈLE :  Rédige le rapport pour les données reçues.  Adapte chaque section aux données disponibles.  Si une donnée manque : indiquer "Non disponible"  plutôt qu'inventer une valeur.  RÈGLES DE RÉDACTION :  - Langue : français clair et accessible  - Ton : [professionnel / direct / chaleureux]  - Longueur : [100–200 mots] maximum  - Format : identique à l'exemple ci-dessus  ⚠️ NE JAMAIS inventer des données.  Utiliser uniquement ce qui est dans {{output\_chercheur}}.  TEST FINAL :  Lancer le workflow complet avec 2 questions :  Q1 : [QUESTION PRÉCISE DE VOTRE DOMAINE]  Q2 : [QUESTION GÉNÉRALE DE VOTRE DOMAINE]  Les 2 fiches doivent avoir le même format. |

|  |
| --- |
| **💡 Conseil :** Avant de configurer Dify, testez votre exemple Few-Shot directement dans Claude.ai en collant le prompt avec une fausse variable {{output\_chercheur}}. Cela économise du temps de débogage dans le workflow. |

|  |
| --- |
| **S6 — Réflexion éthique sur son propre agent (Chain-of-Thought)** |

|  |
| --- |
| **TECHNIQUE :** Chain-of-Thought — Analyse éthique personnalisée en 3 étapes |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 15 min | **Claude.ai** | *ChatGPT / Gemini* |

|  |
| --- |
| **APPLICATION : Claude.ai —** *https://claude.ai* |

**Objectif :**

Identifier 2 risques éthiques concrets et spécifiques à votre agent GreenSprint, puis formuler des garde-fous réalistes. Ce CoT produit directement la réflexion éthique exigée dans le livrable L4.

|  |
| --- |
| Analyse les enjeux éthiques de MON agent Dify.  Raisonne étape par étape. Sois spécifique à mon cas.  MON AGENT :  Nom : [NOM DE VOTRE AGENT]  Ce qu'il fait : [DÉCRIRE EN 2-3 PHRASES]  Données utilisées : [TYPES DE DONNÉES — ex: prix, stocks]  Utilisateurs : [QUI UTILISE L'AGENT]  Contexte : Sénégal · [VOTRE SECTEUR] · No-code  ÉTAPE 1 — IDENTIFIER 2 RISQUES CONCRETS :  En partant de CE que fait mon agent spécifiquement,  identifie 2 risques éthiques réels.  Pour chaque risque :  - Nomme-le clairement  - Décris le scénario concret où il se réalise  - Identifie QUI est impacté et COMMENT  Exemples de catégories possibles :  · Qualité / fiabilité des données  · Exclusion d'une partie des utilisateurs  · Dépendance technologique  · Confidentialité et données personnelles  · Impact sur des emplois existants  · Biais dans les recommandations  ÉTAPE 2 — ÉVALUER LA GRAVITÉ :  Pour chaque risque :  - Probabilité : faible / moyenne / élevée  - Impact : mineur / modéré / majeur  - Urgence : peut attendre S7 / à traiter avant déploiement  ÉTAPE 3 — PROPOSER DES GARDE-FOUS :  Pour chaque risque identifié, propose :  1. Une mesure technique réaliste dans notre contexte  2. Un message de transparence à afficher  dans l'interface pour informer les utilisateurs  3. Une règle à intégrer dans le prompt système  de l'agent pour limiter ce risque  LIVRABLE ATTENDU :  Un texte de ½ page (150–200 mots) structuré en  3 paragraphes directement utilisable comme  réflexion éthique pour le livrable L4. |

|  |
| --- |
| **📊 Analyse :** Ce CoT personnalisé produit une réflexion éthique ancrée dans la réalité du projet — contrairement à une réflexion générique sur l'IA. La contrainte 'spécifique à mon cas' est intentionnelle pour éviter les réponses copiées-collées entre équipes. |

|  |
| --- |
| **CONSEILS PÉDAGOGIQUES S3 — POUR L'ENSEIGNANT** |

|  |  |  |
| --- | --- | --- |
| **🚨 5 PANNES FRÉQUENTES DIFY**   * IF/ELSE ne se déclenche pas → vérifier la casse de 'INSUFFISANT' (majuscules obligatoires). * Variable {{output\_chercheur}} non trouvée → vérifier le nom exact dans le nœud Chercheur. * Boucle infinie → ajouter un compteur d'itérations max = 2 dans le nœud IF/ELSE. * Web Search ne répond pas → vérifier la clé API Serper (quota gratuit : 100 req/mois). * Agent ne publie pas → vérifier que le workflow est sauvegardé avant de publier. |  | **⏱️ GESTION DU TEMPS S3 (3h15)**   * 00:00–00:20 : Retour S2 + Quiz flash (5 questions équipe). * 00:20–00:50 : Cours concepts agents + Dify (slides 4 à 8). * 00:50–01:20 : Démo live enseignant — agent complet E1. * 01:20–01:30 : ☕ Pause — étudiants ouvrent Dify pendant ce temps. * 01:30–02:30 : TP guidé — Handout + prompts S1 à S5. * 02:30–03:00 : Restitution 3 équipes (5 min chacune). * 03:00–03:15 : Livrables S3 + preview S4 + réflexion éthique S6. |

|  |
| --- |
| **⚠️ BARÈME LIVRABLES S3** |

|  |  |  |  |
| --- | --- | --- | --- |
| **LIVRABLE** | **CRITÈRE ÉLIMINATOIRE** | **BARÈME** | **DÉLAI** |
| **L1 — Agent V1 fonctionnel** | URL inaccessible = 0 | **40 pts** | 48h après S3 |
| **L2 — Schéma architecture** | Workflow non capturé = -10 | **30 pts** | 48h après S3 |
| **L3 — Journal de Prompts** | Moins de 3 prompts = -10 | **20 pts** | 48h après S3 |
| **L4 — Réflexion éthique** | Note générique = 0 | **10 pts** | 48h après S3 |

*Document établi par M. Malick Faye Diagne — Enseignant responsable GET 409*

*Swiss UMEF University — Campus de Dakar | GET 409 Bibliothèque de Prompts S3 | Juin 2026*