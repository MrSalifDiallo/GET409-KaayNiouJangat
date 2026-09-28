**GET 409 — Atelier IA**

**BIBLIOTHEQUE DE PROMPTS**

SEANCE 1 — Lancement & Design Thinking

Swiss UMEF University — Campus de Dakar | M. Malick Faye Diagne

| **Annee academique**  **2025–2026** | **Module**  **GET 409 — 6 ECTS** | **Public cible**  **Master — Non-developpeurs** | **Prompts S1**  **4 enseignant + 4 etudiants** |
| --- | --- | --- | --- |

| **COMMENT UTILISER CE DOCUMENT** |
| --- |
| Ce document contient deux series de prompts : (1) PROMPTS ENSEIGNANT — executes en demonstration live ; (2) PROMPTS ETUDIANTS — Lab Sprint S1. Chaque prompt indique l'application IA recommandee et une alternative. Le Prompt Engineering approfondi est en Seance 2. |

## **Recapitulatif — Applications IA recommandees par prompt**

**Outil principal pour tous les prompts : Claude.ai (claude.ai) — gratuit, sans carte bancaire, meilleur respect du format Markdown.**

Plan B connexion lente : Mistral — Le Chat (chat.mistral.ai) — ultra-leger, 100% francais.

| **#** | **TECHNIQUE** | **OUTIL PRINCIPAL** | **APPLICATION** | **POURQUOI** |
| --- | --- | --- | --- | --- |
| **E1** | **Zero-Shot** | **Claude.ai**  claude.ai | ChatGPT | Reponse longue et propre sans coupure. Interface ideale pour projection en salle. |
| **E2** | **Few-Shot** | **Claude.ai**  claude.ai | ChatGPT | Excellente comprehension des patterns. Imite le format avec precision. |
| **E3** | **Chain-of-Thought** | **Claude.ai**  claude.ai | Gemini 1.5 | Raisonnement etape par etape superieur. Moins d'hallucinations sur problemes complexes. |
| **E4** | **Markdown Prompting** | **Claude.ai**  claude.ai | ChatGPT-4o | Seul outil qui respecte systematiquement le format Markdown strict. |
| **S1** | **Decouverte secteur** | **ChatGPT**  chat.openai.com | Claude.ai | Familier pour la majorite des etudiants. Bon point de depart sans configuration. |
| **S2** | **Guide d'interview** | **Claude.ai**  claude.ai | ChatGPT | Questions plus nuancees. Meilleure comprehension du contexte Afrique de l'Ouest. |
| **S3** | **Generateur HMW** | **Claude.ai**  claude.ai | ChatGPT / Gemini | Reformulations HMW precises. Ni trop vagues ni trop directionnelles. |
| **S4** | **Carte d'empathie** | **Claude.ai**  claude.ai | ChatGPT-4o | Respect strict du format Markdown. Livrable directement deposable sur GitHub. |

# **PARTIE 1 — PROMPTS ENSEIGNANT (Demonstration Live)**

Executes par l'enseignant sur son ecran projete, 18h15–18h50. Tous ancres dans le projet fil rouge GreenSprint.

**PROMPT E1 Zero-Shot Prompting**

| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **5 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer ce que l'IA sait faire sans aucun guidage. Constater le caractere generaliste du resultat sans ancrage local.

**CONTEXTE & MISE EN SCENE**

Ouvrez Claude.ai. Tapez le prompt ci-dessous sans introduction ni exemple. Montrez la reponse brute.

**LE PROMPT A EXECUTER**

| [PROMPT ZERO-SHOT — GreenSprint] |
| --- |
|  |
| Tu es un consultant en supply chain. |
| Genere une liste de 3 fonctionnalites prioritaires pour une |
| application web (MVP) destinee a optimiser la collecte de |
| legumes pour les cooperatives horticoles de la zone des |
| Niayes au Senegal. |

**ANALYSE AVEC LES ETUDIANTS**

Signalez : correct mais generaliste. Pas de mention du feature phone, des Bana-Bana, du prix du gasoil. Point de depart, pas un livrable.

**PROMPT E2 Few-Shot Prompting**

| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment des exemples imposent un pattern de pensee et un format strict ancre dans le contexte ouest-africain.

**CONTEXTE & MISE EN SCENE**

Expliquez que vous donnez deux exemples Defi → Solution avant de poser la vraie question.

**LE PROMPT A EXECUTER**

| [PROMPT FEW-SHOT — GreenSprint] |
| --- |
|  |
| Tu es un ingenieur produit specialise en solutions |
| technologiques pour l'Afrique de l'Ouest. |
|  |
| DEFI : Les camions reviennent a vide de Dakar vers les Niayes. |
| SOLUTION : Systeme d'appariement de fret de retour en temps reel. |
|  |
| DEFI : Les producteurs n'ont pas de smartphone ni de 4G stable. |
| SOLUTION : Passerelle USSD/SMS connectee a la base de donnees. |
|  |
| DEFI : Les acheteurs contestent l'origine eco-responsable de Sebikotane. |
| SOLUTION : |

**ANALYSE AVEC LES ETUDIANTS**

L'IA a compris la structure et complete le troisieme exemple en imitant les precedents. Les exemples sont le moule qui formate la pensee du modele.

**PROMPT E3 Chain-of-Thought Prompting**

| **NIVEAU**  **Avance** | **DUREE ESTIMEE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **Gemini 1.5** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Forcer le modele a raisonner etape par etape pour produire une analyse plus profonde et reduire les hallucinations.

**CONTEXTE & MISE EN SCENE**

Presentez comme 'decompression du raisonnement'. Vous demandez a l'IA de penser a voix haute avant de conclure.

**LE PROMPT A EXECUTER**

| [PROMPT CHAIN-OF-THOUGHT — GreenSprint] |
| --- |
|  |
| Tu es un expert en Design Thinking et innovation sociale |
| pour l'Afrique subsaharienne. |
|  |
| Analyse les pertes post-recolte (40%) chez les maraîchers |
| de Sebikotane. Reflechis etape par etape : |
|  |
| Etape 1 : Cause principale liee au transport et au climat local. |
| Etape 2 : Obstacle financier face au stockage frigorifique. |
| Etape 3 : Solution technologique PARTAGEE qui le contourne. |
|  |
| Developpe chaque etape avant de formuler la conclusion. |

**ANALYSE AVEC LES ETUDIANTS**

Comparez avec E1 : plus structure, moins generaliste. Technique indispensable pour les problematiques a plusieurs variables.

**PROMPT E4 Markdown Prompting**

| **NIVEAU**  **Expert** | **DUREE ESTIMEE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT-4o** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment le Markdown structure le role, le contexte, la tache et le format de sortie — livrable directement exploitable.

**CONTEXTE & MISE EN SCENE**

Presentez comme 'le niveau professionnel' : vous fabriquez un outil, pas juste une reponse.

**LE PROMPT A EXECUTER**

| [PROMPT MARKDOWN — CARTE D'EMPATHIE GREENSPRINT] |
| --- |
|  |
| # ROLE SYSTEME |
| Tu es un UX Researcher senior et expert en Design Thinking. |
|  |
| ## CONTEXTE DU PERSONA |
| - Nom : Abdoulaye Ndiaye, 52 ans, maraîcher |
| - Localisation : Sebikotane, Zone des Niayes, Senegal |
| - Frictions : Pertes massives, Bana-Bana, gasoil motopompe |
| - Equipement : Feature phone, compte Wave |
|  |
| ## TACHE |
| Genere la Carte d'Empathie d'Abdoulaye. |
|  |
| ### FORMAT STRICT : |
| ### 1. Ce qu'il pense et ressent |
| - [Insight 1] - [Insight 2] |
| ### 2. Ce qu'il voit |
| - [Insight 1] - [Insight 2] |
| ### 3. Frustrations (Pains) |
| - [Insight 1] - [Insight 2] |
| ### 4. Attentes (Gains) |
| - [Insight 1] - [Insight 2] |

**ANALYSE AVEC LES ETUDIANTS**

Resultat propre, structure, directement importable dans Notion ou Google Docs. C'est le format que les equipes produiront avec S4.

# **PARTIE 2 — PROMPTS ETUDIANTS (Lab Sprint S1)**

Utilises par les equipes durant le Lab Sprint (19h15–20h45). Prompts templates avec [crochets] a remplir selon le secteur choisi.

| **INSTRUCTION CRITIQUE** |
| --- |
| Remplacez TOUS les elements entre [crochets] par votre contexte reel avant d'envoyer. Un crochet non remplace = reponse generique inutilisable. |

**PROMPT S1 Decouverte — Tester l'IA sur son secteur**

| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **5 minutes** | **OUTIL PRINCIPAL**  **ChatGPT** | **ALTERNATIVE**  **Claude.ai** |
| --- | --- | --- | --- |
| **APPLICATION : ChatGPT — chat.openai.com** |

**OBJECTIF PEDAGOGIQUE**

Premier prompt intentionnel sur le secteur choisi. Comparer les resultats au sein de l'equipe.

**CONTEXTE & MISE EN SCENE**

Chaque etudiant teste individuellement. Comparez les reponses — qui a obtenu le resultat le plus utile et pourquoi ?

**LE PROMPT A EXECUTER**

| [PROMPT DECOUVERTE — A ADAPTER] |
| --- |
|  |
| Tu es un expert en [VOTRE SECTEUR AU SENEGAL]. |
|  |
| Identifie les 3 principaux problemes que rencontrent |
| [VOS UTILISATEURS CIBLES] dans [VOTRE CONTEXTE LOCAL]. |
|  |
| Pour chaque probleme : |
| - La cause principale |
| - L'impact sur la vie quotidienne |
| - Une piste de solution technologique accessible |

**ANALYSE AVEC LES ETUDIANTS**

Discutez : quelle formulation a produit le meilleur resultat ? Cette reflexion nourrit directement la phase Empathize.

**PROMPT S2 Interview IA — Guide d'empathie**

| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Generer un guide d'interview adapte au persona de l'equipe. Ces questions sont utilisees pour les interviews croisees entre membres.

**CONTEXTE & MISE EN SCENE**

L'equipe a identifie son utilisateur cible. Ce prompt genere les questions a poser lors de l'interview simulee (2 x 5 minutes).

**LE PROMPT A EXECUTER**

| [PROMPT GUIDE D'INTERVIEW — A ADAPTER] |
| --- |
|  |
| Tu es un UX Researcher specialise dans les usages |
| numeriques en Afrique de l'Ouest. |
|  |
| Je dois interviewer [DESCRIPTION DE VOTRE PERSONA] |
| face au probleme : [VOTRE PROBLEME EN 1 PHRASE]. |
|  |
| Genere un guide d'interview avec : |
| 1. 3 questions d'ouverture (brise-glace) |
| 2. 5 questions d'exploration en profondeur |
| (avec 'Pourquoi ?' et 'Racontez-moi...') |
| 3. 2 questions sur les aspirations attendues |
|  |
| Format : questions numerotees, courtes, sans jargon. |

**ANALYSE AVEC LES ETUDIANTS**

Les equipes utilisent ces questions pour des interviews croisees entre membres. Les reponses alimentent directement la carte d'empathie.

**PROMPT S3 Generateur de HMW**

| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT / Gemini** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Transformer les observations des interviews en enonces HMW bien formules. De 'on a observe que...' a 'Comment pourrions-nous...'

**CONTEXTE & MISE EN SCENE**

Apres les interviews, l'equipe a des notes brutes. Ce prompt les transforme en enonces de probleme actionnables.

**LE PROMPT A EXECUTER**

| [PROMPT GENERATEUR DE HMW — A ADAPTER] |
| --- |
|  |
| Tu es un facilitateur en Design Thinking. |
|  |
| Voici nos observations cles de l'interview : |
| Observation 1 : [CE QUE VOUS AVEZ OBSERVE] |
| Observation 2 : [CE QUE VOUS AVEZ OBSERVE] |
| Observation 3 : [CE QUE VOUS AVEZ OBSERVE] |
|  |
| Frustration principale : [EN 1 PHRASE] |
|  |
| Genere 5 enonces 'Comment pourrions-nous...' (HMW) |
| qui reformulent cette frustration en opportunite. |
|  |
| Criteres : ni trop vague, ni trop precis, |
| ne propose pas encore de solution. |

**ANALYSE AVEC LES ETUDIANTS**

L'equipe choisit le HMW le plus pertinent. Il devient le fil directeur du projet jusqu'a la soutenance et est inscrit dans le README GitHub.

**PROMPT S4 Carte d'Empathie Markdown — Livrable S1**

| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT-4o** |
| --- | --- | --- | --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Generer la carte d'empathie complete sous format Markdown — directement deposable sur GitHub et e-Academy avant 20h45.

**CONTEXTE & MISE EN SCENE**

C'est le livrable obligatoire. L'equipe remplace les [crochets] avec les informations reelles de leurs interviews.

**LE PROMPT A EXECUTER**

| [PROMPT CARTE D'EMPATHIE — LIVRABLE S1] |
| --- |
|  |
| # ROLE |
| Tu es un UX Researcher expert pour des projets |
| d'innovation sociale en Afrique. |
|  |
| ## PERSONA |
| - Prenom, age, profession : [A COMPLETER] |
| - Localisation : [VILLE, SENEGAL] |
| - Probleme : [EN 1 PHRASE] |
| - Equipement digital : [SMARTPHONE / FEATURE PHONE] |
|  |
| ## OBSERVATIONS DE NOS INTERVIEWS |
| - Ce qu'il/elle a dit : [CITATION OU PARAPHRASE] |
| - Ce qu'il/elle a fait : [COMPORTEMENT] |
| - Emotion principale : [EMOTION] |
|  |
| ## FORMAT STRICT |
| ### 1. PENSE ET RESSENT - [Insight 1] - [Insight 2] |
| ### 2. VOIT - [Insight 1] - [Insight 2] |
| ### 3. ENTEND - [Insight 1] - [Insight 2] |
| ### 4. DIT ET FAIT - [Comportement] - [Citation] |
| ### 5. FRUSTRATIONS (Pains) - [Douleur principale] |
| ### 6. ASPIRATIONS (Gains) - [Resultat desire] |

**ANALYSE AVEC LES ETUDIANTS**

Copier-coller dans 'carte-empathie.md' sur GitHub avant 20h45. C'est ce fichier qui sera evalue comme livrable obligatoire de S1.

# **CONSEILS D'UTILISATION EN SALLE**

## **Pour l'enseignant — Demo live**

* Projetez l'interface IA sur le grand ecran. Les etudiants doivent voir le prompt ET la reponse.
* Tapez les prompts en direct, ne les collez pas — les etudiants voient que ce n'est pas magique.
* Apres chaque prompt : 'Qu'est-ce qui manque dans cette reponse ?' avant de donner votre analyse.
* Ouvrez ChatGPT en onglet parallele pour comparer les reponses en direct sur E1 et E2.

## **Pour les etudiants — Lab Sprint**

* Remplacez TOUS les [crochets] par votre contexte avant d'envoyer.
* Comparez vos resultats avec d'autres membres de l'equipe — qui a obtenu la meilleure reponse ?
* Si connexion lente : Mistral Le Chat (chat.mistral.ai) — ultra-leger, 100% francais.
* Documentez chaque prompt utilise dans votre Journal de Prompts (livrable de S2).

| **ERREUR N°1 — La plus frequente** |
| --- |
| Ne pas remplacer les [crochets] — envoyer le template tel quel produit une reponse generique inutilisable. |

| **ERREUR N°2** |
| --- |
| Accepter la premiere reponse sans la critiquer. Votre valeur ajoutee est d'affiner avec des iterations successives. |

| **ERREUR N°3** |
| --- |
| Ignorer les hallucinations. Toute statistique ou nom douteux doit etre verifie avant inclusion dans un livrable. |

Document prepare par M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026