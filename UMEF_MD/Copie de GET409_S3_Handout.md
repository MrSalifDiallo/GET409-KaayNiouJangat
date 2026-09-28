<!-- Slide number: 1 -->
GET 409  •  Lab Sprint S3  •  Handout Étudiant
Swiss UMEF University — Campus de Dakar  •  Année 2025-2026

SÉANCE 3 / 8
Architecture
Multi-Agents Dify
Suivez ce guide étape par étape — vous avez 3h15.

A

B

C

D
Créer le Workflow
Agent Chercheur
Condition IF/ELSE
Agent Rédacteur
+ Test
M. Malick Faye Diagne — Enseignant responsable

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Architecture Multi-Agents avec Dify
1 / 6

### Notes:

<!-- Slide number: 2 -->
Créer votre Workflow dans Dify

ÉTAPE A
10 minutes  •  Individuel ou en binôme  •  Outil : dify.ai

CRÉER LE PROJET

L'INTERFACE DIFY — REPÈRES ESSENTIELS
Connectez-vous à dify.ai

1
Canvas central
Utilisez vos identifiants créés en S1. Si besoin : bouton 'Forgot password'.
Zone de travail drag & drop — glissez vos nœuds ici.
Cliquez sur 'Studio'

2
Panneau gauche
Barre de navigation gauche → onglet Studio (icône éclair).
Bibliothèque de nœuds : LLM, IF/ELSE, Code, HTTP, Tools…
Cliquez '+ Create'

3
Panneau droit
Puis sélectionnez 'Workflow' (pas Chatbot ni Agent).
Paramètres du nœud sélectionné (modèle, prompt, variables).
Nommez votre projet

4
Bouton RUN (▶)
Format : GreenSprint_FicheMarché_v1_[NomEquipe]. Ex : GreenSprint_FicheMarche_v1_TeamNiayes
Lance le workflow en mode test. Toujours tester avant de publier.
Confirmez la création

5
Preview / Log
Cliquez 'Create'. L'éditeur de workflow s'ouvre avec un nœud START vide.
Visualise l'output de chaque nœud pas à pas — essentiel pour débugger.

CONSEIL  Avant d'ajouter des nœuds, zoomez sur le canvas (Ctrl + scroll) et repérez le nœud START (point d'entrée).

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Étape A : Créer le Workflow
2 / 6

### Notes:

<!-- Slide number: 3 -->
Configurer l'Agent Chercheur

ÉTAPE B
20 minutes  •  Nœud LLM + outil Web Search  •  Outil : dify.ai

AJOUTER ET CONFIGURER LE LLM CHERCHEUR

PROMPT SYSTÈME — AGENT CHERCHEUR

Ajoutez un nœud LLM

1
Tu es un analyste spécialisé en supply
chain maraîchère au Sénégal.

Contexte : tu travailles pour GreenSprint,
plateforme reliant producteurs des Niayes
aux acheteurs de Dakar.

Mission : analyser la question de
l'utilisateur et collecter toutes les
données pertinentes (prix marchés,
volumes, risques logistiques).

Si les données sont INSUFFISANTES pour
rédiger un rapport, réponds uniquement :
"INSUFFISANT : [raison]"

Sinon, fournis les données structurées.
Panneau gauche → faites glisser 'LLM' sur le canvas. Connectez-le à START.
Renommez-le 'Chercheur'

2
Clic droit sur le nœud → Rename → tapez : Chercheur.
Choisissez le modèle

3
Panneau droit → Model : sélectionnez claude-3-haiku ou gpt-3.5-turbo (selon disponibilité).
Saisissez le prompt système

4
Copiez-collez le prompt E2 de la Bibliothèque de Prompts S3.
Activez l'outil Web Search

5

VARIABLE D'ENTRÉE
Outils → Web Search → Activer. Clé API Serper fournie par l'enseignant.
Réglez la température à 0,3

6

Nom :
→ Question de l'utilisateur en entrée du workflow.

{{sys.query}}
Panneau droit → Advanced → Temperature : 0.3 (réponses précises et factuelles).

ATTENTION  Ne partagez pas la clé API Serper publiquement. Utilisez uniquement les variables d'environnement Dify.

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Étape B : Agent Chercheur
3 / 6

### Notes:

<!-- Slide number: 4 -->
Ajouter la condition IF/ELSE

ÉTAPE C
15 minutes  •  Branche logique : résultat suffisant ou boucle ?  •  Outil : dify.ai

CONFIGURER LE NŒUD IF / ELSE

SCHÉMA LOGIQUE À REPRODUIRE
Ajoutez un nœud IF/ELSE

1

START
Panneau gauche → glissez 'IF/ELSE' sur le canvas. Connectez Chercheur → IF/ELSE.

Définissez la condition TRUE

2

CHERCHEUR
Variable : {{output_chercheur}} — Opérateur : contains — Valeur : INSUFFISANT

Branche TRUE → retour Chercheur

3

IF/ELSE

FALSE → données OK
→ RÉDACTEUR (étape D)
▶
Connectez la branche TRUE au nœud Chercheur. Limitez à 2 itérations max.

Branche FALSE → vers Rédacteur

4

TRUE → INSUFFISANT
↩ retour Chercheur (max 2x)
La branche FALSE ira vers le nœud LLM Rédacteur (à créer à l'étape D).

📌  Variable clé :
Nommez la variable de sortie

5

{{output_chercheur}}
Output du Chercheur : nommez-la output_chercheur dans les paramètres.
= output du nœud LLM Chercheur.

CONSEIL  Testez la branche TRUE manuellement : entrez une question très vague. Vérifiez que l'output contient bien 'INSUFFISANT'.

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Étape C : Condition IF/ELSE
4 / 6

### Notes:

<!-- Slide number: 5 -->
Agent Rédacteur — Test & Publication

ÉTAPE D
25 minutes  •  LLM Rédacteur + Run complet + Capture livrable  •  Outil : dify.ai

CONFIGURER L'AGENT RÉDACTEUR

PROMPT SYSTÈME — AGENT RÉDACTEUR

Ajoutez un nœud LLM

1
Tu reçois des données de marché :
{{output_chercheur}}

Rédige une fiche marché structurée :

1. RÉSUMÉ EXÉCUTIF (2 phrases)
2. PRIX & VOLUMES
   - Prix actuel du marché
   - Tendance (hausse / baisse / stable)
3. ALERTES LOGISTIQUES
   - Risques identifiés
   - Recommandations immédiates
4. OPPORTUNITÉS
   - 1-2 pistes à exploiter

Ton : professionnel, concis. Max 250 mots.
Glissez un second nœud LLM sur le canvas. Renommez-le 'Rédacteur'.
Choisissez le modèle

2
Model : claude-3-sonnet ou gpt-4o-mini. Temperature : 0.7 (style plus fluide).
Connectez les variables

3
Input : {{output_chercheur}} (output de la branche FALSE de l'IF/ELSE).
Saisissez le prompt

4
Voir le prompt E3 de la Bibliothèque de Prompts S3 (ci-contre).

TESTER LE WORKFLOW COMPLET
Ajoutez le nœud END

5
Glissez 'End' sur le canvas. Connectez Rédacteur → End. Vérifiez la chaîne complète.
▶  Cliquez RUN dans l'éditeur Dify.
❓  Entrez : 'Prix tomate cerise Niayes cette semaine ?'
👁️  Observez chaque nœud s'exécuter dans le Log.
✅  Vérifiez la fiche finale en sortie du nœud END.

ATTENTION  Si le workflow ne finit pas, vérifiez que les variables {{output_chercheur}} sont correctement nommées dans chaque nœud.
📸  Capturez le schéma complet du workflow (livrable L1).

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Étape D : Agent Rédacteur + Test
5 / 6

### Notes:

<!-- Slide number: 6 -->
Checklist & Livrables S3 — Avant de quitter

RECAP
Vérifiez chaque case avant la fin de la séance

CHECKLIST SÉANCE 3 — À compléter avant de partir

LIVRABLES S3 À DÉPOSER SUR E-ACADEMY
Compte Dify connecté et workspace ouvert

L1

✓
Agent V1 Fonctionnel

40 pts
Workspace GET409-[NomEquipe] accessible à tous les membres
URL publique Dify + 2 captures d'écran test
Workflow Dify créé et nommé correctement

✓
GreenSprint_FicheMarche_v1_[NomEquipe]

L2
Schéma d'Architecture

30 pts
Nœud Chercheur configuré (LLM + Web Search)

✓
Capture annotée du workflow Dify complet
Modèle choisi, prompt système saisi, température 0.3
Condition IF/ELSE branchée et testée

L3

✓
Journal de Prompts S3

20 pts
Branche TRUE (INSUFFISANT) + branche FALSE (OK) fonctionnelles
Min. 3 prompts analysés (système, chercheur, rédacteur)
Nœud Rédacteur configuré et connecté

✓
Variable {{output_chercheur}} correctement référencée

L4
Réflexion Éthique

10 pts
Workflow testé end-to-end (Run complet)

✓
½ page : 1 risque GreenSprint + garde-fou proposé
Au moins 1 test réussi avec fiche marché en sortie

ATTENTION  Délai de dépôt : 48h après la séance sur e-Academy. Un livrable incomplet = points perdus définitivement.

GET 409  |  Handout Étudiant  |  Lab Sprint S3 — Checklist & Livrables
6 / 6

### Notes: