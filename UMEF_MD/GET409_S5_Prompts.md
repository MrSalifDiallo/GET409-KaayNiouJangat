|  |
| --- |
| **GET 409 — Atelier IA No-Code**  Swiss UMEF University — Campus de Dakar  **BIBLIOTHÈQUE DE PROMPTS**  **SÉANCE 5 — Intégration MVP & RAG avec Dify**  *M. Malick Faye Diagne — Enseignant responsable | Juin 2026* |

## **Tableau récapitulatif des prompts S5**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **CODE** | **TITRE** | **TECHNIQUE** | **OUTIL** | **DURÉE** | **POURQUOI** |
| **E1** | Construire la base de connaissances RAG | *Prompt structuré* | **dify.ai** | 15 min | Indexer les documents GreenSprint dans Dify Knowledge |
| **E2** | Configurer le chunking et l'embedding | *Technique RAG* | **dify.ai** | 10 min | Optimiser la découpe des documents pour une meilleure précision |
| **E3** | Connecter le MVP au webhook Dify | *Prompt Bolt* | **bolt.new** | 15 min | Générer le code fetch webhook sans écrire de code manuellement |
| **E4** | Diagnostiquer les problèmes RAG | *Chain-of-Thought* | **Claude.ai** | 10 min | Identifier et corriger les erreurs de pipeline RAG |
| **E5** | Évaluer la qualité du pipeline RAG | *CoT structuré* | **Claude.ai** | 10 min | Auditer le système RAG avant l'évaluation intermédiaire S6 |
| **S1** | Préparer les documents pour la base RAG | *Prompt structuré* | **Claude.ai** | 10 min | Formater et améliorer les données avant upload dans Dify |
| **S2** | Tester la base de connaissances | *Zero-Shot* | **dify.ai** | 10 min | Valider la qualité de l'indexation avec des questions test |
| **S3** | Intégrer le webhook dans Bolt | *Prompt correctif* | **bolt.new** | 15 min | Adapter le code webhook généré au design du MVP |
| **S4** | Rédiger la note d'éthique RAG | *CoT* | **Claude.ai** | 15 min | Identifier les risques éthiques spécifiques au système RAG |
| **S5** | Préparer la démo intermédiaire S6 | *Structure guidée* | **Claude.ai** | 15 min | Structurer la démo de 10 minutes pour le jury |
| **S6** | Plan B technique pour S6 | *Zero-Shot* | **Claude.ai** | 10 min | Préparer des réponses simulées en cas de panne API |

|  |
| --- |
| **PROMPTS ENSEIGNANT — E1 à E5** |

|  |
| --- |
| **E1 — Construire la base de connaissances RAG GreenSprint** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **dify.ai** | *Flowise* |

|  |
| --- |
| **APPLICATION : dify.ai — Knowledge** — *https://dify.ai* |

**Objectif :**

Créer et configurer la base de connaissances GreenSprint dans Dify. Ce prompt sert de script pour la démo live — les étudiants reproduisent les mêmes étapes pendant le TP.

**Script de démo (actions dans l'interface Dify) :**

|  |
| --- |
| [Actions interface — script démo pas-à-pas]  CRÉER LA BASE :  → Dify → onglet Knowledge (icône livre, barre gauche)  → + Create knowledge  → Name : GreenSprint\_KB\_v1  → Type : Text  → Cliquer "Create"  IMPORTER LES DOCUMENTS :  → Import → Upload files  → Sélectionner : fiche\_marche\_niayes\_s23\_2026.pdf  → Sélectionner : prix\_legumes\_juin2026.csv  → (optionnel) guide\_conservation\_legumes.txt  CONFIGURER LE CHUNKING :  → Chunking method : Automatic (recommandé pour débutants)  → OU Manual : Chunk size 500 / Overlap 50  → Index method : High quality (embeddings)  → Embedding model : text-embedding-ada-002  → Save and Process  VÉRIFIER L'INDEXATION :  → Attendre statut "Indexed" (pastille verte)  → Cliquer sur un chunk pour vérifier le contenu  → Onglet Testing → taper : "prix tomate cerise"  → Vérifier que des passages pertinents remontent |

|  |
| --- |
| **📊 Analyse :** Ce script guidé permet aux étudiants de reproduire exactement la même procédure sans improvisation. L'onglet Testing est la clé — il montre si la base est bien indexée avant de la connecter à l'agent. |

|  |
| --- |
| **E2 — Optimiser le chunking et l'embedding** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **dify.ai** | *Flowise* |

|  |
| --- |
| **APPLICATION : dify.ai — Knowledge Settings** — *https://dify.ai* |

**Objectif :**

Expliquer les paramètres de chunking aux étudiants et les aider à choisir la configuration optimale selon leur type de documents.

**Prompt de diagnostic (à utiliser dans Claude.ai si la base répond mal) :**

|  |
| --- |
| Notre base de connaissances RAG dans Dify ne retourne pas  les bonnes réponses. Voici notre configuration :  - Chunk size : [valeur actuelle]  - Overlap : [valeur actuelle]  - Type de documents : [PDF fiche marché / CSV prix / TXT guide]  - Exemple de question test : [votre question]  - Réponse obtenue : [ce que l'agent répond]  - Réponse attendue : [ce qu'on voulait]  Analyse notre configuration et suggère :  1. Les paramètres optimaux pour nos documents  2. Comment reformater nos données si nécessaire  3. Quel Similarity Threshold utiliser  4. Comment vérifier que la correction fonctionne |

**Tableau de référence — Configuration selon type de document :**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Type document** | **Chunk size** | **Overlap** | **Top K** | **Conseil** |
| **CSV prix/données** | 200–300 tokens | 30 tokens | **5** | *Colonnes courtes — petits chunks* |
| **PDF fiches marché** | 400–600 tokens | 50 tokens | **3** | *Paragraphes équilibrés* |
| **Guide technique PDF** | 600–800 tokens | 80 tokens | **3** | *Sections longues à préserver* |
| **Texte réglementaire** | 800–1000 tokens | 100 tokens | **2** | *Articles longs, contexte important* |

|  |
| --- |
| **📊 Analyse :** Le chunking est souvent la cause principale des mauvaises réponses RAG. Un chunk trop long dilue l'information pertinente ; trop court coupe le contexte. Ce prompt de diagnostic permet à l'enseignant d'accompagner les équipes en difficulté. |

|  |
| --- |
| **E3 — Connecter le MVP Bolt au Webhook Dify** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **bolt.new** | *Cursor* |

|  |
| --- |
| **APPLICATION : bolt.new + dify.ai → API Access** — *https://bolt.new | https://dify.ai* |

**Objectif :**

Générer automatiquement le code d'intégration webhook dans Bolt. Ce prompt unique remplace une heure de développement manuel. Les étudiants substituent uniquement l'URL et la clé API.

|  |
| --- |
| Dans mon MVP GreenSprint, ajoute une fonctionnalité de  consultation de l'agent IA sur la page [Accueil OU Offres].  INTERFACE À AJOUTER :  1. Un champ de texte avec placeholder :  "Posez votre question sur les prix et disponibilités..."  2. Un bouton vert "Demander à l'agent 🌿"  3. Une zone de résultat sous le formulaire (fond gris clair)  4. Un spinner de chargement pendant la requête  5. Un message d'erreur rouge si la requête échoue  CONNEXION WEBHOOK DIFY :  URL : [COLLER\_ICI\_URL\_API\_DIFY]  Méthode : POST  Headers :  Authorization: Bearer [COLLER\_ICI\_CLE\_API]  Content-Type: application/json  Body JSON :  {  "inputs": {},  "query": valeurDuChampTexte,  "response\_mode": "blocking",  "user": "user-greensprint-" + Date.now()  }  TRAITEMENT DE LA RÉPONSE :  - Succès : afficher response.data.answer dans la zone résultat  - Erreur réseau : "Service temporairement indisponible"  - Timeout (>10s) : "La réponse prend trop de temps — réessayez"  STYLE : cohérent avec le reste du MVP.  Responsive mobile obligatoire. |

|  |
| --- |
| **📊 Analyse :** Ce prompt produit un composant React fonctionnel incluant la gestion des états (loading, success, error), le fetch avec les bons headers, et l'extraction de data.answer. Les étudiants n'ont qu'à substituer deux valeurs. |

|  |
| --- |
| **E4 — Diagnostiquer les problèmes RAG (Chain-of-Thought)** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Résoudre méthodiquement les problèmes de pipeline RAG en utilisant un raisonnement structuré. Ce prompt guide l'enseignant et les étudiants dans le débogage.

|  |
| --- |
| Notre pipeline RAG GreenSprint présente un problème.  Analyse-le méthodiquement étape par étape.  SYMPTÔME OBSERVÉ : [décrire le problème exact]  Ex : "L'agent répond 'Je ne trouve pas cette information' même  quand le CSV contient la réponse."  ÉTAPE 1 — VÉRIFICATION DE LA BASE :  - La base affiche-t-elle 'Indexed' en vert ?  - Le Testing renvoie-t-il des résultats pour cette question ?  - Les chunks contiennent-ils le texte attendu ?  ÉTAPE 2 — VÉRIFICATION DE LA CONNEXION :  - L'agent affiche-t-il bien la base connectée (icône livre) ?  - Le Top K est-il suffisant (recommandé : 3-5) ?  - Le Similarity Threshold n'est-il pas trop élevé (max : 0.7) ?  ÉTAPE 3 — VÉRIFICATION DU PROMPT SYSTÈME :  - Le prompt de l'agent indique-t-il d'utiliser la base ?  - Ajouter si absent : "Consulte obligatoirement ta base de  connaissances pour répondre. Si l'info n'est pas dans la  base, dis 'Je ne dispose pas de cette information.'"  ÉTAPE 4 — VÉRIFICATION DES DONNÉES SOURCE :  - Les données du document sont-elles lisibles (pas de scan) ?  - Le format CSV a-t-il des en-têtes en ligne 1 ?  - Le fichier fait-il moins de 15MB ?  Pour chaque étape : diagnostic + action corrective recommandée. |

|  |
| --- |
| **📊 Analyse :** Ce CoT de débogage couvre les 4 causes principales d'échec RAG dans l'ordre de fréquence. L'utiliser systématiquement avant d'escalader permet de résoudre 90% des problèmes sans aide extérieure. |

|  |
| --- |
| **E5 — Évaluer la qualité du pipeline RAG avant S6** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Avancé** | 10 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Auditer le système RAG complet avant l'évaluation intermédiaire S6. Ce prompt produit une note de qualité et des recommandations actionnables.

|  |
| --- |
| Effectue un audit qualité de notre pipeline RAG GreenSprint.  Évalue chaque dimension et donne une note /5.  NOTRE SYSTÈME :  - URL MVP V2 : [URL\_VERCEL]  - Base de connaissances : GreenSprint\_KB\_v1  - Documents indexés : [liste vos fichiers]  - Agent connecté : Agent\_GreenSprint (S3)  DIMENSION 1 — PRÉCISION DES RÉPONSES /5 :  Teste ces 3 questions et évalue la précision :  Q1 : "Quel est le prix du chou blanc à Niayes Nord cette semaine ?"  Q2 : "Quels légumes sont disponibles à Pikine ?"  Q3 : "Quelles sont les recommandations de conservation pour les tomates ?"  DIMENSION 2 — PERTINENCE DES SOURCES /5 :  Pour chaque réponse : les sources citées correspondent-elles  aux chunks réellement utiles ?  DIMENSION 3 — GESTION DES LIMITES /5 :  L'agent dit-il clairement "Je ne sais pas" pour :  Q4 : "Météo à Dakar demain ?"  Q5 : "Prix de l'or en bourse ?"  DIMENSION 4 — INTÉGRATION MVP /5 :  La réponse s'affiche-t-elle correctement dans l'interface ?  L'UX est-elle satisfaisante (temps de réponse, lisibilité) ?  RÉSULTAT : note globale /20 + 3 priorités d'amélioration avant S6. |

|  |
| --- |
| **📊 Analyse :** Cet audit en 4 dimensions reflète exactement les critères C1 et C2 de la grille d'évaluation intermédiaire. Les équipes qui passent par cet exercice arrivent en S6 avec une vision claire de leurs points faibles. |

|  |
| --- |
| **PROMPTS ÉTUDIANTS — S1 à S6** |

|  |
| --- |
| **S1 — Préparer les documents pour la base RAG** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Améliorer la qualité des documents avant l'upload dans Dify. Des données bien structurées produisent une base RAG plus précise.

|  |
| --- |
| J'ai ces données brutes à intégrer dans ma base RAG GreenSprint :  [COLLER VOS DONNÉES BRUTES — EX : tableau prix copié d'Excel]  Restructure ces données pour optimiser leur indexation dans un  système RAG. Je veux :  1. Un CSV avec en-têtes clairs en ligne 1 (Légume, Zone,  Prix\_FCFA\_kg, Disponibilité, Semaine, Source)  2. Un court texte Markdown formaté pour chaque légume avec  un titre H2, les données clés, et une note de contexte  3. Identifie les données manquantes ou incohérentes  Format de sortie :  - D'abord le CSV complet  - Ensuite le Markdown par légume  - Enfin : liste des données à compléter |

|  |
| --- |
| **📊 Analyse :** Préparer les données avant l'upload double souvent la qualité des réponses RAG. Ce prompt transforme des données brutes en données structurées optimisées pour les embeddings. |

|  |
| --- |
| **S2 — Tester la base de connaissances** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **dify.ai** | *Aucune* |

|  |
| --- |
| **APPLICATION : dify.ai → Knowledge → Testing** — *https://dify.ai* |

**Objectif :**

Valider méthodiquement la qualité de l'indexation avant de connecter la base à l'agent. Cette étape évite les mauvaises surprises lors de la démo.

**Questions de test à saisir dans l'onglet Testing de Dify :**

|  |
| --- |
| TEST 1 — Requête directe (doit trouver) :  "Prix de la tomate cerise à Pikine cette semaine"  → Attendu : données du CSV prix avec chiffres  TEST 2 — Requête indirecte (doit inférer) :  "Quel légume est disponible dans la zone Niayes Nord ?"  → Attendu : liste des légumes disponibles dans cette zone  TEST 3 — Requête de conseil (doit trouver dans PDF) :  "Comment conserver les carottes après récolte ?"  → Attendu : conseils du guide technique PDF  TEST 4 — Requête hors-base (ne doit PAS trouver) :  "Prix du pétrole en FCFA"  → Attendu : aucun résultat ou faible score de similarité  Pour chaque test dans Dify Testing :  - Observer les chunks retournés  - Vérifier le score de similarité (idéal > 0.6)  - Noter si le bon passage est extrait |

|  |
| --- |
| **📊 Analyse :** Ces 4 tests couvrent les cas d'usage réels de la démo S6 : requête précise, requête générale, requête de conseil, et requête hors-domaine. Si les 4 réussissent, la base est prête. |

|  |
| --- |
| **S3 — Affiner l'intégration webhook dans Bolt** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 15 min | **bolt.new** | *Cursor* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Améliorer l'intégration webhook générée par Bolt pour la rendre plus robuste et mieux intégrée au design du MVP.

|  |
| --- |
| Le composant webhook fonctionne mais je veux l'améliorer :  AMÉLIORATION 1 — Expérience utilisateur :  "Ajoute une animation de typing (3 points clignotants) pendant  que l'agent réfléchit, avant d'afficher la réponse finale."  AMÉLIORATION 2 — Affichage de la réponse :  "La réponse s'affiche en un bloc. Reformate-la pour afficher  les données tabulaires en tableau HTML stylisé si la réponse  contient des prix (format : Légume | Zone | Prix)."  AMÉLIORATION 3 — Gestion de l'historique :  "Conserve les 3 dernières questions-réponses dans un historique  déroulant sous le champ. Ajoute un bouton 'Effacer l'historique'."  AMÉLIORATION 4 — Accessibilité :  "Rends le composant entièrement utilisable au clavier :  Entrée = soumettre, Échap = effacer, Tab = naviguer." |

|  |
| --- |
| **📊 Analyse :** Ces 4 améliorations progressives transforment un prototype fonctionnel en une interface utilisateur convaincante pour la démo S6. L'animation de typing notamment crée une impression de qualité supérieure. |

|  |
| --- |
| **S4 — Rédiger la note d'éthique RAG** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 15 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Identifier et documenter les risques éthiques spécifiques au système RAG GreenSprint. Ce CoT produit la note d'éthique attendue en S6.

|  |
| --- |
| Aide-moi à rédiger la note d'éthique IA de notre système RAG  GreenSprint. Raisonne étape par étape.  NOTRE SYSTÈME RAG :  - Base de connaissances : fiches marché PDF + CSV prix  - Agent : Dify (hébergé en cloud)  - Intégration : webhook depuis MVP Bolt/Vercel  - Utilisateurs : producteurs et acheteurs de la filière Niayes  ÉTAPE 1 — QUALITÉ ET BIAIS DES DONNÉES :  Nos données couvrent [ces zones] et [ces légumes].  Qui est absent de notre base ? Quels biais cela introduit-il ?  Quelles conséquences pour les acteurs mal représentés ?  ÉTAPE 2 — CONFIDENTIALITÉ ET SOUVERAINETÉ :  Nos documents contiennent [ces types de données].  Quelles obligations légales (RGPD, loi sénégalaise 2008-12) ?  Les données des producteurs sont-elles exposées à des tiers ?  ÉTAPE 3 — FIABILITÉ ET RESPONSABILITÉ :  Si l'agent donne un mauvais prix et qu'un acteur perd de l'argent,  qui est responsable ? Comment mitiger ce risque ?  ÉTAPE 4 — IMPACT ÉCONOMIQUE :  L'automatisation de la consultation de prix via RAG peut-elle  déstabiliser certains intermédiaires informels ?  Rédige une note structurée d'une page maximum avec  une recommandation concrète par risque identifié. |

|  |
| --- |
| **📊 Analyse :** Ce CoT en 4 étapes couvre les dimensions éthiques exigées par le syllabus (biais, gouvernance, impact). La note produite peut être soumise directement comme livrable S6. |

|  |
| --- |
| **S5 — Préparer la démo intermédiaire S6 (10 minutes)** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Structurer la démo de 10 minutes pour l'évaluation intermédiaire S6. La grille officielle est connue depuis S1 — ce prompt optimise la présentation selon les critères.

|  |
| --- |
| Aide-moi à préparer notre démo de 10 minutes pour l'évaluation  intermédiaire GET 409.  NOTRE PROJET :  Nom : [NOM\_APP]  URL MVP V2 : [URL\_VERCEL]  URL Dify Workflow : [URL\_DIFY]  Problème résolu : [DESCRIPTION\_PROBLEME]  GRILLE D'ÉVALUATION (à optimiser) :  C1 — MVP fonctionnel (/4 pts) :  App déployée + 2 features testables + interface cohérente  C2 — Architecture agentique (/2 pts) :  Agent Dify démontrable + flux intelligible + schéma présenté  C3 — Clarté présentation (/2 pts) :  Problématique en 1 phrase + valeur claire + temps respecté  Structure notre démo en 4 parties de 2,5 min chacune :  1. Problème et proposition de valeur (30 sec)  2. Démo MVP V2 live — 3 clics clés (3 min)  3. Démo RAG live — 1 question → réponse (4 min)  4. Schéma architecture + conclusion (2,5 min)  Pour chaque partie :  - Script précis (ce que dit l'orateur)  - Ce qui est montré à l'écran  - Quelle question du jury anticiper |

|  |
| --- |
| **📊 Analyse :** Ce prompt transforme la grille d'évaluation en plan de présentation optimisé. Les équipes qui préparent ainsi leur démo démontrent une maîtrise réelle de leur produit — ce que le jury évalue en priorité. |

|  |
| --- |
| **S6 — Plan B technique pour la démo S6** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Préparer une démo mockée (réponses simulées) en cas de panne API le jour de l'évaluation. Exigé par le syllabus — chaque équipe doit avoir un Plan B.

|  |
| --- |
| Génère un Plan B pour notre démo GreenSprint en cas de panne  API le jour de l'évaluation intermédiaire.  NOTRE PIPELINE : MVP Bolt → Webhook → Dify → RAG  Crée 3 réponses simulées réalistes que nous pouvons copier-coller  manuellement si le webhook ne répond pas :  QUESTION 1 : "Prix de la tomate cerise à Pikine cette semaine ?"  → Génère une réponse réaliste de l'agent RAG GreenSprint  (prix, zone, disponibilité, source de la donnée)  QUESTION 2 : "Quels légumes sont disponibles à Niayes Nord ?"  → Génère une réponse liste structurée avec prix et statut  QUESTION 3 : "Quelles sont les précautions de conservation  pour les carottes après récolte ?"  → Génère une réponse technique avec conseils pratiques  Format : tel que l'agent le présenterait dans notre interface.  Style : professionnel, données cohérentes avec notre CSV.  Génère aussi : un message d'excuse à lire si le service  est indisponible (15 secondes maximum, ton professionnel). |

|  |
| --- |
| **📊 Analyse :** Le Plan B est obligatoire selon le syllabus v3. Des réponses mockées réalistes permettent de continuer la démo sans interruption. Les juriés comprennent les pannes techniques — l'important est de ne pas paniquer. |

|  |
| --- |
| **CONSEILS & CHECKLIST S5 — AVANT LA DÉMO S6** |

|  |  |  |
| --- | --- | --- |
| **🔗 WEBHOOK — VÉRIFICATIONS FINALES**   * URL Dify API correctement copiée (pas d'espace final). * Clé API valide — vérifier qu'elle n'a pas expiré. * Test de bout en bout depuis une autre connexion WiFi. * Timeout configuré (max 10 secondes côté Bolt). * Message d'erreur affiché si le webhook échoue. * Plan B prêt : réponses mockées dans un bloc-notes. |  | **📚 BASE RAG — VÉRIFICATIONS FINALES**   * Statut 'Indexed' vert pour tous les documents. * Questions test 1 à 4 testées — résultats vérifiés. * Agent S3 affiche la base connectée dans ses paramètres. * Top K = 3 et Threshold = 0.5 configurés. * Documents datés de la semaine en cours (pas périmés). * Schéma d'architecture V2 imprimé ou sur 2ème écran. |

|  |
| --- |
| **⚠️ RAPPEL GRILLE S6 — ÉVALUATION INTERMÉDIAIRE** |

|  |  |  |  |
| --- | --- | --- | --- |
| **CRITÈRE** | **POINTS** | **CE QUI EST ÉVALUÉ** | **À PRÉPARER** |
| **C1 — MVP fonctionnel** | **/ 4 pts** | App déployée, 2+ features testables, interface cohérente | *URL Vercel + démo live 3 features* |
| **C2 — Architecture agentique** | **/ 2 pts** | Agent Dify démontrable, flux intelligible, schéma présenté | *Démo RAG + schéma V2 imprimé* |
| **C3 — Clarté présentation** | **/ 2 pts** | Problématique en 1 phrase, valeur claire, temps respecté | *Répéter le pitch ce soir (10 min chrono)* |

*Document établi par M. Malick Faye Diagne — Enseignant responsable GET 409*

*Swiss UMEF University — Campus de Dakar | GET 409 Bibliothèque de Prompts S5 | Juin 2026*