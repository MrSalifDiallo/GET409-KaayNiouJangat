<!-- Slide number: 1 -->

GET 409 — Atelier IA No-Code
🌿
Séance 6
RAG Avancé &
Input Manuel Anti-Hallucination
Connecter les données terrain à votre IA — sans inventer

🏥 Santé

🚌 Transport

📚 E-learning

🌿 Agriculture
Swiss UMEF University — Campus de Dakar — Juin 2026  |  M. Malick Faye Diagne

### Notes:

<!-- Slide number: 2 -->

Rappel — Ce qu'on a construit jusqu'ici

S1-S3

S4

S5

S6
Workflow Dify
MVP Lovable
Pipeline complet
Anti-Hallucination ✦ Aujourd'hui
5 nœuds construits et publiés
RAG GreenSprint_KB_v1 connecté
Réflexion éthique (3 risques)
3 pages (Accueil, Offres, Contact)
6 offres avec filtres fonctionnels
Déployé sur lovable.app
Webhook Lovable ↔ Dify
Test validé end-to-end
Fiche marché affichée dans MVP
Input manuel données terrain
Variable donnees_terrain dans Dify
Formulaire Lovable pour agents terrain
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 3 -->

⚠ Le problème que l'on résout aujourd'hui

« L'IA peut inventer un prix, un temps de trajet, un dosage…
et l'afficher avec une confiance absolue. »

🏥 Santé

🚌 Transport

📚 E-learning

🌿 Agriculture
IA invente un dosage → patient en danger
IA invente un temps de trajet → usager bloqué
IA invente un score → apprenant mal orienté
IA invente un prix → maraîcher vend à perte
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 4 -->

La solution — Architecture V3 : données terrain prioritaires

📱 Formulaire
Lovable

🔵 Nœud
DÉBUT

🟠 CHERCHEUR

🟢 RÉDACTEUR

✅ Fiche marché
réelle
/saisie-prix
Agent terrain
query
+ donnees_terrain
(optionnel)
Règle
anti-hallucination
{{donnees_terrain}}
{{#context#}}
Chercheur.text
connecté
Prix exact
Source: TERRAIN
Horodatée
→
→
→
→

⚡ RÈGLE CLÉ : SI donnees_terrain ≠ vide → utilise UNIQUEMENT les données terrain  |  SINON → utilise le RAG
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 5 -->

Plan de la séance S6

Variable donnees_terrain dans Dify

20 min
Tests A & B comparatifs

20 min

1

4
Nœud DÉBUT → ajouter champ optionnel
Configurer Variable Name + décocher Required
Test A : RAG seul (donnees_terrain vide)
Test B : données terrain exactes

Prompt anti-hallucination

25 min
Formulaire Lovable /saisie-prix

30 min

2

5
Insérer règle en tête du CHERCHEUR
Connecter la variable dans le USER
Créer la page avec prompt Lovable
Insérer clé API + tester en live

Connexion CHERCHEUR → RÉDACTEUR

20 min
Documentation équipe

15 min

3

6
CONTEXTE → Chercheur.text
Injecter {{#context#}} dans le prompt
Remplir le template S6
Captures d'écran de chaque étape
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 6 -->

ÉTAPE 1 / 5
Ajouter la variable terrain dans Dify — Nœud DÉBUT

Actions dans Dify
Nommer votre variable selon votre domaine
① Ouvrir le nœud DÉBUT dans le canvas

🏥 Santé
donnees_patient
② Cliquer sur  +  (CHAMP DE SAISIE)

🚌 Transport
donnees_trafic
③ Field Type → Short Text / string

📚 E-learning
retour_formateur
④ Variable Name → votre_variable

🌿 Agriculture
donnees_terrain
⑤ ⚠ DÉCOCHER Required (crucial !)

Votre projet
[votre_variable]
⑥ Enregistrer

⚠  Required DÉCOCHÉ = variable optionnelle → le workflow ne bloque pas si l'agent n'a pas de données terrain
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 7 -->

ÉTAPE 2 / 5
Prompt anti-hallucination — Nœud CHERCHEUR

⚠ RÈGLE ANTI-HALLUCINATION (PRIORITÉ ABSOLUE) :

- Si {{votre_variable}} n'est PAS vide :
    → Utilise UNIQUEMENT ces données pour [DONNÉE CRITIQUE].
    → Source : [TERRAIN + horodatage]
- Si {{votre_variable}} EST vide :
    → Utilise la base RAG [NOM_BASE]. Source : [RAG - estimation]
- N'invente JAMAIS [DONNÉE CRITIQUE].
    → Écrire : "[DONNÉE] non disponible — vérifier auprès de [SOURCE]."

DONNÉES TERRAIN REÇUES : {{votre_variable}}

📌  Insérer CE bloc EN TÊTE du prompt SYSTEM du CHERCHEUR · puis ajouter @ Début → [votre_variable] dans la section USER
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 8 -->

ÉTAPE 3 / 5
Connexion CHERCHEUR → RÉDACTEUR via le CONTEXTE

❌  AVANT (problème)

✅  APRÈS (solution)
CONTEXTE du RÉDACTEUR : vide
CONTEXTE → ⓘ Chercheur [x] text String
→ Le RÉDACTEUR utilise son exemple interne
→ Ajouter dans prompt : DONNÉES DU CHERCHEUR :
→ Invente Poivron, Haricot vert, Oignons...
→ Ajouter sous : {{#context#}}
→ Ignore complètement les données terrain
→ RÈGLE ABSOLUE : recopier [TERRAIN] exactement
→ Hallucination garantie !
→ Fiche marché avec données réelles ✅

À ajouter en fin du prompt SYSTEM du RÉDACTEUR :    DONNÉES DU CHERCHEUR :\n{{#context#}}
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 9 -->

ÉTAPE 4 / 5
Tests comparatifs A & B — La preuve par l'exemple

TEST A — Sans données terrain

TEST B — Avec données terrain
donnees_terrain :
VIDE
donnees_terrain :
Marché Sébikhotane 07h30
Tomate : 350 FCFA/kg...
query :
Quel est le prix de la tomate ?
query :
Quel est le prix de la tomate ?
VS
Résultat :
Poivron · 600-720 FCFA/kg
Résultat :
Tomate ronde · 350 FCFA/kg
Source :
[RAG - estimation]
Source :
[TERRAIN] 10/06/2026 07h30
✅ Validé si :
Aucun prix inventé hors base
✅ Validé si :
Prix exact = données saisies
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 10 -->

ÉTAPE 5 / 5
Formulaire de saisie terrain dans Lovable

Prompt à adapter pour Lovable :
🌿 Saisie Prix Terrain
Ajoute page '[NOM_PAGE]' dans le menu.
Agent GIE — Données marché temps réel
Prix observés sur le marché
Champ textarea '[LABEL_DONNÉES]'

Champ input 'Votre question'
Ex: Marché Sébikhotane 10/06 07h30 — Tomate : 350 FCFA/kg...
Bouton '[COULEUR] [LABEL_BOUTON]'

Votre question

fetch POST api.dify.ai/v1/workflows/run

🌿 Générer la fiche marché
inputs: { query, [VOTRE_VARIABLE] }

FICHE MARCHÉ
PRODUIT : Tomate ronde
PRIX : 350 FCFA/kg · [TERRAIN]
Afficher data.data.outputs.text
white-space: pre-line
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 11 -->

ÉTHIQUE
Les garde-fous — Responsabilité selon votre domaine

🏥 Santé
IA invente un dosage ou diagnostic

✔  Toujours afficher : 'Vérifier avec un professionnel de santé'
Impact : Danger vital pour le patient

🚌 Transport
IA invente un temps de trajet

✔  Horodater toutes les données + mention 'valable à [heure]'
Impact : Usager bloqué, retard professionnel

📚 E-learning
IA invente un score ou prérequis

✔  Ne jamais afficher de score sans source LMS vérifiée
Impact : Apprenant orienté vers mauvais module

⚠ Tous domaines
Agent terrain saisit données fausses

✔  Signature agent + validation superviseur avant publication
Impact : Toute la chaîne d'utilisateurs trompée
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 12 -->

ATELIER
Travail en équipe — Template S6 à compléter

Identification équipe
Connexion Rédacteur

0

4
Nom, projet, domaine, persona, URL
Contexte + {{#context#}} injecté

Problème d'hallucination
Tests A & B

1

5
Donnée critique + impact sur le persona
Résultats documentés + comparaison

Variable terrain Dify
Formulaire Lovable

2

6
Nom + type + Required décoché
Page créée + test live validé

Prompt anti-hallucination
Éthique & Garde-fous

3

7
Template adapté + USER connecté
3 risques + 3 garde-fous identifiés

📋  Template disponible : template_s6_equipes.docx — Aucun crochet ne doit rester dans votre rendu final
Swiss UMEF · GET 409 · S6

### Notes:

<!-- Slide number: 13 -->

🌿
S6 — Ce que vous avez construit

⚡ Anti-hallucination

🔗 Pipeline complet

🎯 Données terrain

⚖ Éthique appliquée
Variable terrain → règle prioritaire → zéro prix inventé
Formulaire → Dify → Fiche réelle → Lovable live
L'agent GIE devient la source de vérité du système
Garde-fous identifiés selon votre domaine spécifique

Architecture V3 validée en production

Formulaire Lovable  →  donnees_terrain  →  CHERCHEUR [TERRAIN]  →  RÉDACTEUR {{#context#}}  →  Fiche réelle ✅
GET 409 — Swiss UMEF University · Campus de Dakar · Juin 2026 · M. Malick Faye Diagne

### Notes: