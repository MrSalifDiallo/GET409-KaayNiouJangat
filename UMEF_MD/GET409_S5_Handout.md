<!-- Slide number: 1 -->
GET 409  •  Lab Sprint S5  •  Handout Étudiant
Swiss UMEF University — Campus de Dakar  •  Année 2025-2026

SÉANCE 5 / 8
Intégration MVP
& RAG avec Dify
Suivez ce guide étape par étape — vous avez 3h15.

A

B

C

D
Base de connaissances RAG
Connecter Agent → RAG
Webhook MVP↔Dify
Test & Peer Review
M. Malick Faye Diagne — Enseignant responsable

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Intégration MVP & RAG avec Dify
1 / 6

### Notes:

<!-- Slide number: 2 -->
Créer la base de connaissances RAG

ÉTAPE A
20 minutes  •  1 base par équipe  •  Outil : dify.ai → onglet Knowledge

CRÉER ET IMPORTER

FORMAT DES DOCUMENTS (exemples à préparer)

Aller dans l'onglet Knowledge

1
CSV prix (en-têtes obligatoires) :
Dify → icône livre dans la barre gauche → + Create knowledge
Légume,Zone,Prix_FCFA/kg,Dispo,Semaine
Tomate cerise,Pikine,800,Oui,S23-2026
Chou blanc,Niayes Nord,350,Oui,S23-2026
Nommer la base

2
Nom : GreenSprint_KB_v1 — Type : Text — Cliquer 'Create'

📄 PDF
Natif (pas scan). Max 10MB. Police lisible.
Importer vos documents

3
Import → glisser vos fichiers (PDF fiches marché + CSV prix)

📊 CSV
En-têtes en ligne 1. Séparateur virgule.
Configurer le chunking

4
Chunk size : 500 tokens / Overlap : 50 tokens / Embedding : ada-002

📝 Markdown
Structure claire avec titres H2/H3.
Lancer l'indexation

5
Save and Process → attendre 'Indexed' en vert (1-3 min)
Tester la base

📋 TXT
Texte propre, paragraphes courts.

6
Onglet 'Testing' → 'prix tomate cerise semaine en cours' → vérifier

ATTENTION  Un PDF scanné (image) n'est PAS lisible par Dify. Convertir en PDF natif depuis Word ou LibreOffice.

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Étape A : Base de connaissances RAG
2 / 6

### Notes:

<!-- Slide number: 3 -->
Connecter l'Agent à la base RAG

ÉTAPE B
10 minutes  •  Agent GreenSprint S3 + Knowledge GreenSprint_KB_v1  •  dify.ai

CONNEXION AGENT → BASE

COMPRENDRE LES PARAMÈTRES

Ouvrir votre Agent S3

1

Top K : 3
Studio → sélectionner 'Agent_GreenSprint' ou votre workflow Chercheur→Rédacteur
Nombre de passages extraits de la base pour nourrir le LLM. 3 = bon équilibre précision/vitesse.
Aller dans Knowledge

2
Panneau de configuration → section 'Knowledge' → + Add

Similarity Threshold : 0.5
Sélectionner la base

3
Score minimal de pertinence (0 à 1). En dessous de 0.5, le passage n'est pas utilisé.
Choisir GreenSprint_KB_v1 dans la liste
Régler les paramètres

4

Score Mode : Cosine
Top K : 3 (passages extraits) · Similarity Threshold : 0.5
Mesure de similarité entre la question et les chunks indexés. Laisser par défaut.
Sauvegarder

5
Cliquer Save — l'agent est maintenant connecté à la base

Search Method : Semantic
Tester en mode chat

6
Chat : 'Quelle est la disponibilité du chou blanc cette semaine ?'
Recherche par sens (embeddings) plutôt que par mots-clés. Plus précis pour les questions naturelles.

CONSEIL  Si l'agent répond à côté, baissez le Threshold à 0.3 et augmentez Top K à 5. Retestez après chaque ajustement.

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Étape B : Agent → Base RAG
3 / 6

### Notes:

<!-- Slide number: 4 -->
Connecter le MVP Bolt au Webhook Dify

ÉTAPE C
20 minutes  •  Prompt Bolt pour générer le code de connexion  •  bolt.new + dify.ai

RÉCUPÉRER L'URL ET LA CLÉ API DIFY

PROMPT BOLT POUR LE WEBHOOK

Publier votre Workflow Dify

1
Dans la page [ACCUEIL ou OFFRES], ajoute
un champ de texte et un bouton
"Demander à l'agent GreenSprint".

Sur clic, envoie la question au webhook :
URL : [COLLER_URL_ICI]
Méthode : POST
Headers :
  Authorization: Bearer [COLLER_CLE_ICI]
  Content-Type: application/json
Body :
  { "inputs": {},
    "query": valeurDuChamp,
    "response_mode": "blocking",
    "user": "user-gs" }

Affiche data.answer dans un bloc
gris sous le champ. Affiche un
spinner pendant le chargement.
Gère le cas erreur (message rouge).
Studio → votre Workflow → Publish → confirmer la publication
Accéder à l'API

2
Dans le workflow → 'API Access' (icône dans le header)
Copier l'URL API

3
Ex : https://api.dify.ai/v1/workflows/run → coller dans un bloc-notes
Créer une clé API

4
Settings → API Keys → Create new secret key → copier (visible 1 seule fois !)

💡  Remplacez [COLLER_URL_ICI] et [COLLER_CLE_ICI] par vos valeurs réelles avant de lancer.

ATTENTION  Ne partagez JAMAIS votre clé API dans un fichier public GitHub. Bolt stocke les variables côté client — à mentionner dans la note éthique.

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Étape C : Webhook MVP↔Dify
4 / 6

### Notes:

<!-- Slide number: 5 -->
Tester le MVP V2 & Peer Review

ÉTAPE D
20 minutes  •  Test bout en bout + revue inter-équipes  •  Votre MVP Vercel

D1

D2
3 tests obligatoires
Peer Review (5 min par équipe)
À montrer :

→  URL Vercel live + démontrer 1 question RAG
Q : 'Prix tomate cerise à Pikine cette semaine ?'
→ Réponse avec données CSV réelles
→  Schéma architecture V2 mis à jour

Q : 'Quelle zone produit le plus de chou ?'
Feedback à donner :
→ Données extraites du PDF fiches
→  La réponse est-elle pertinente et sourcée ?
→  Le webhook fonctionne-t-il sans erreur ?

Q : 'Météo demain à Dakar ?'
→ Agent dit 'Information non disponible dans ma base'
→  Le design reste cohérent avec la V1 ?
📸  Capturer : question saisie + réponse affichée dans le MVP

CONSEIL  Notez le feedback reçu dans votre journal de bord — il alimentera votre note d'éthique et votre présentation S6.

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Étape D : Test & Peer Review
5 / 6

### Notes:

<!-- Slide number: 6 -->
Checklist & Livrables S5 — Avant de quitter

RECAP
⚠️  S6 = Évaluation intermédiaire — Préparez votre démo ce soir !

CHECKLIST SÉANCE 5 — À compléter avant de partir

LIVRABLES S5 — E-ACADEMY
Base RAG GreenSprint_KB_v1 créée et indexée

L1

✓
MVP V2 en ligne

30 pts
Statut 'Indexed' vert dans Dify Knowledge
URL Vercel + webhook fonctionnel
Documents importés (min. 1 CSV prix + 1 PDF)

✓
Données semaine en cours — pas de données périmées

L2
Pipeline RAG

30 pts
Agent S3 connecté à la base RAG

✓
Capture Dify : base indexée + agent connecté
Top K = 3 · Threshold = 0.5 · Testé en mode chat
Webhook intégré dans le MVP Bolt

L3

✓
Schéma Archi V2

20 pts
Champ de question + bouton + affichage de la réponse
MVP→Webhook→Agent→RAG→Base
3 tests bout en bout réalisés

✓
2 réponses pertinentes + 1 test hors-base

L4
Journal Prompts S5

20 pts
Peer review effectuée

✓
Min. 3 prompts RAG+webhook analysés
Feedback noté dans le journal de bord

ATTENTION  Délai : 48h après S5. S6 suit immédiatement — MVP V2 doit être prêt pour la démo intermédiaire.

GET 409  |  Handout Étudiant  |  Lab Sprint S5 — Checklist & Livrables
6 / 6

### Notes: