**GET 409 — Atelier IA**

**BIBLIOTHEQUE DE PROMPTS**

SEANCE 1 — Lancement & Design Thinking

Swiss UMEF University — Campus de Dakar | M. Malick Faye Diagne

|  |  |  |  |
| --- | --- | --- | --- |
| **Annee academique**  **2025–2026** | **Module**  **GET 409 — 6 ECTS** | **Public cible**  **Master — Non-developpeurs** | **Prompts S1**  **4 enseignant + 4 etudiants** |

|  |
| --- |
| **COMMENT UTILISER CE DOCUMENT** |
| Ce document contient deux series de prompts : (1) les PROMPTS ENSEIGNANT — executes en demonstration live sur votre ecran pendant la Masterclass ; (2) les PROMPTS ETUDIANTS — utilises par les equipes pendant le Lab Sprint en S1 pour generer leur carte d'empathie. Le Prompt Engineering approfondi (zero-shot, few-shot, chain-of-thought) est programme en Seance 2. |

# **PARTIE 1 — PROMPTS ENSEIGNANT (Demonstration Live)**

Ces prompts sont executes par l'enseignant sur son propre ecran, projete sur le tableau de la salle. Ils illustrent la progression de la complexite du prompting : du plus simple (zero-shot) vers le plus structure (Markdown). Tous sont ancres dans le projet fil rouge GreenSprint.

Horaire de la demonstration : 18h15 — 18h50 (Masterclass, avant la pause).

**PROMPT E1 Zero-Shot Prompting**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **5 minutes** | **TECHNIQUE**  **Zero-Shot Prompting** |

**OBJECTIF PEDAGOGIQUE**

Montrer ce que l'IA sait faire sans aucun guidage. Faire constater aux etudiants le caractere generaliste et peu ancre localement du resultat.

**CONTEXTE & MISE EN SCENE**

Ouvrez Claude.ai ou ChatGPT. Tapez le prompt ci-dessous sans aucune introduction ni exemple. Montrez la reponse brute immediatement.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT ZERO-SHOT — GreenSprint] |
|  |
| Tu es un consultant en supply chain. |
| Genere une liste de 3 fonctionnalites prioritaires pour une |
| application web (MVP) destinee a optimiser la collecte de |
| legumes pour les cooperatives horticoles de la zone des |
| Niayes au Senegal. |

**ANALYSE AVEC LES ETUDIANTS**

Signalez aux etudiants : le resultat est correct mais tres generaliste. L'IA applique des concepts logistiques standards sans ancrage dans la realite locale (pas de mention du feature phone, des Bana-Bana, de la saison des pluies, du prix du gasoil). C'est un point de depart, pas un livrable.

**PROMPT E2 Few-Shot Prompting**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **8 minutes** | **TECHNIQUE**  **Few-Shot Prompting** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment donner des exemples a l'IA pour lui imposer un pattern de pensee et un format de reponse strict, ancre dans le contexte ouest-africain.

**CONTEXTE & MISE EN SCENE**

Expliquez que vous allez donner deux exemples de couples Defi -> Solution avant de poser la vraie question. Montrez comment l'IA 'apprend' le format a partir des exemples.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT FEW-SHOT — GreenSprint] |
|  |
| Tu es un ingenieur produit specialise en solutions |
| technologiques pour l'Afrique de l'Ouest. |
|  |
| Voici des exemples de defis logistiques et leurs reponses : |
|  |
| DEFI : Les camions reviennent souvent a vide de Dakar |
| vers les zones horticoles. |
| SOLUTION : Integration d'un systeme d'appariement de fret |
| de retour en temps reel via une application. |
|  |
| DEFI : Les petits producteurs n'ont pas de smartphone |
| ni de connexion 4G stable. |
| SOLUTION : Deploiement d'une passerelle USSD/SMS connectee |
| a la base de donnees pour envoyer les prix du marche. |
|  |
| DEFI : Les acheteurs des grands marches de Dakar contestent |
| l'origine eco-responsable des legumes de Sebikotane. |
| SOLUTION : |

**ANALYSE AVEC LES ETUDIANTS**

Montrez que sans demander explicitement un format court, l'IA a compris la structure Defi/Solution et complete le troisieme exemple en imitant parfaitement les precedents. Insistez : les exemples sont le moule qui formate la pensee du modele.

**PROMPT E3 Chain-of-Thought Prompting**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Avance** | **DUREE ESTIMEE**  **8 minutes** | **TECHNIQUE**  **Chain-of-Thought Prompting** |

**OBJECTIF PEDAGOGIQUE**

Demontrer comment forcer le modele a raisonner etape par etape pour produire une analyse plus profonde et reduire les hallucinations sur des problematiques complexes.

**CONTEXTE & MISE EN SCENE**

Presentez ce prompt comme une technique de 'decompression du raisonnement'. Vous demandez a l'IA de penser a voix haute, etape par etape, avant de conclure.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT CHAIN-OF-THOUGHT — GreenSprint] |
|  |
| Tu es un expert en Design Thinking et en innovation |
| sociale pour l'Afrique subsaharienne. |
|  |
| Nous devons analyser le probleme des pertes post-recolte |
| (40% de dechets) chez les maraîchers de Sebikotane. |
|  |
| Reflechis etape par etape (Step-by-Step) : |
|  |
| Etape 1 : Identifie la cause principale liee au transport |
| sous le climat local et la distance Sebikotane-Dakar. |
|  |
| Etape 2 : Decris l'obstacle financier qui empeche les |
| producteurs d'acceder aux solutions de stockage frigorifique. |
|  |
| Etape 3 : Propose une solution technologique PARTAGEE qui |
| contourne cet obstacle financier. |
|  |
| Prends le temps de developper ton raisonnement pour chaque |
| etape avant de formuler la conclusion. |

**ANALYSE AVEC LES ETUDIANTS**

Comparez avec le resultat du Zero-Shot : la reponse est plus structuree, plus analisee, avec moins de generalites. Expliquez que cette technique est particulierement utile pour les problematiques a plusieurs variables — exactement ce que feront les equipes avec leurs propres defis locaux.

**PROMPT E4 Markdown Prompting (Carte d'Empathie)**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Expert** | **DUREE ESTIMEE**  **10 minutes** | **TECHNIQUE**  **Markdown Prompting (Carte d'Empathie)** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment le Markdown permet de structurer le role du modele, le contexte, la tache et le format de sortie — produisant un livrable directement exploitable sans retouche.

**CONTEXTE & MISE EN SCENE**

Presentez ce prompt comme 'le niveau professionnel' : vous ne demandez plus une reponse, vous fabriquez un outil. Montrez que le resultat sort sous format structuree, directement importable dans Notion ou Google Docs.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT MARKDOWN — CARTE D'EMPATHIE GREENSPRINT] |
|  |
| # ROLE SYSTEME |
| Tu es un UX Researcher senior et expert en Design Thinking. |
|  |
| ## CONTEXTE DU PERSONA |
| - Nom : Abdoulaye Ndiaye, 52 ans, maraîcher |
| - Localisation : Sebikotane, Zone des Niayes, Senegal |
| - Activite : Cultive 3 hectares d'oignons et de tomates |
| - Frictions : Pertes massives, dependance aux Bana-Bana, |
| budget gasoil elevee pour la motopompe |
| - Equipement : Feature phone, compte Wave, pas de web |
|  |
| ## TACHE |
| Genere la Carte d'Empathie structuree d'Abdoulaye. |
|  |
| ### FORMAT DE SORTIE STRICT (sans intro ni conclusion) : |
|  |
| ### 1. Ce qu'il pense et ressent |
| - [Insight 1] |
| - [Insight 2] |
|  |
| ### 2. Ce qu'il voit |
| - [Insight 1] |
| - [Insight 2] |
|  |
| ### 3. Frustrations majeures (Pains) |
| - [Insight 1] |
| - [Insight 2] |
|  |
| ### 4. Attentes majeures (Gains) |
| - [Insight 1] |
| - [Insight 2] |

**ANALYSE AVEC LES ETUDIANTS**

Montrez le contraste avec les trois prompts precedents : le resultat est propre, structure, avec des sections clairement delimitees. Signalez que c'est exactement ce format que les equipes devront produire ce soir pour leur propre persona — mais elles le feront avec le Prompt Etudiant E4 adapte a leur contexte.

# **PARTIE 2 — PROMPTS ETUDIANTS (Lab Sprint S1)**

Ces prompts sont utilises par les equipes durant le Lab Sprint (19h15 — 20h45). Ils sont progressifs : du plus simple (decouverte) au plus structure (livrable). Les equipes travaillent sur leur propre secteur et persona — pas sur GreenSprint.

|  |
| --- |
| **INSTRUCTION POUR LES ETUDIANTS** |
| Les etudiants utilisent Claude.ai ou ChatGPT dans leur navigateur. Aucune installation requise. Ils copient-collent ces prompts et adaptent les elements entre [ crochets ] a leur contexte. |

**PROMPT S1 Decouverte — Tester l'IA sur son secteur**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **5 minutes** | **TECHNIQUE**  **Decouverte — Tester l'IA sur son secteur** |

**OBJECTIF PEDAGOGIQUE**

Permettre a chaque etudiant de faire son premier prompt intentionnel sur le secteur choisi par son equipe. Constater la difference entre une question vague et une question contextualisee.

**CONTEXTE & MISE EN SCENE**

Chaque etudiant teste individuellement. Comparez les resultats au sein de l'equipe — qui a obtenu la reponse la plus utile et pourquoi ?

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT DECOUVERTE — A ADAPTER A VOTRE SECTEUR] |
|  |
| Tu es un expert en [VOTRE SECTEUR AU SENEGAL]. |
|  |
| Identifie les 3 principaux problemes que rencontrent |
| [VOS UTILISATEURS CIBLES] dans [VOTRE CONTEXTE LOCAL]. |
|  |
| Pour chaque probleme, indique : |
| - La cause principale |
| - L'impact sur la vie quotidienne |
| - Une piste de solution technologique accessible |
|  |
| Exemple de remplacement : |
| [VOTRE SECTEUR] = mobilite urbaine a Dakar |
| [VOS UTILISATEURS] = conducteurs de taxi-moto Jakarta |
| [VOTRE CONTEXTE] = embouteillages et manque de GPS |

**ANALYSE AVEC LES ETUDIANTS**

Comparez les reponses au sein de l'equipe. Discutez : quelle formulation a produit le resultat le plus utile ? Quelle information manquante aurait ameliore la reponse ? Cette discussion nourrit directement la phase Empathize.

**PROMPT S2 Interview IA — Generer les questions d'empathie**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE ESTIMEE**  **8 minutes** | **TECHNIQUE**  **Interview IA — Generer les questions d'empathie** |

**OBJECTIF PEDAGOGIQUE**

Utiliser l'IA pour generer un guide d'interview d'empathie adapte au persona de l'equipe. Les etudiants utilisent ensuite ces questions entre eux pour simuler une interview terrain.

**CONTEXTE & MISE EN SCENE**

L'equipe a identifie son utilisateur cible a l'Etape 2 du Lab Sprint. Ce prompt genere les questions a poser lors de l'interview entre membres.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT GUIDE D'INTERVIEW — A ADAPTER] |
|  |
| Tu es un UX Researcher specialise dans les usages |
| numeriques en Afrique de l'Ouest. |
|  |
| Je dois interviewer [DESCRIPTION DE VOTRE PERSONA] |
| qui vit a [LOCALISATION] et fait face au probleme |
| suivant : [VOTRE PROBLEME EN 1 PHRASE]. |
|  |
| Genere un guide d'interview d'empathie avec : |
|  |
| 1. 3 questions d'ouverture (briser la glace) |
| 2. 5 questions d'exploration en profondeur |
| (utilisant 'Pourquoi ?' et 'Racontez-moi...') |
| 3. 2 questions sur les aspirations et les gains attendus |
|  |
| Format : questions numerotees, courtes, sans jargon technique. |
|  |
| Exemple de remplacement : |
| [PERSONA] = petit commercant de tissus au marche Sandaga |
| [PROBLEME] = gestion manuelle des stocks et des creances clients |

**ANALYSE AVEC LES ETUDIANTS**

Les equipes utilisent ces questions pour se faire des interviews croisees entre membres (2 x 5 minutes). L'un joue le persona, l'autre interviewe. Les reponses alimentent directement la carte d'empathie.

**PROMPT S3 Generateur de HMW — Formuler l'enonce du probleme**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **8 minutes** | **TECHNIQUE**  **Generateur de HMW — Formuler l'enonce du probleme** |

**OBJECTIF PEDAGOGIQUE**

Transformer les observations des interviews en enonces HMW (How Might We) bien formules. L'IA aide a passer de 'on a observe que...' a 'Comment pourrions-nous...'

**CONTEXTE & MISE EN SCENE**

Apres les interviews, l'equipe a des notes brutes. Ce prompt aide a les transformer en enonces de probleme actionnables — le livrable cle de la phase Define.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT GENERATEUR DE HMW — A ADAPTER] |
|  |
| Tu es un facilitateur en Design Thinking. |
|  |
| Voici les observations cles de notre interview avec |
| [VOTRE PERSONA] : |
|  |
| Observation 1 : [CE QUE VOUS AVEZ OBSERVE/ENTENDU] |
| Observation 2 : [CE QUE VOUS AVEZ OBSERVE/ENTENDU] |
| Observation 3 : [CE QUE VOUS AVEZ OBSERVE/ENTENDU] |
|  |
| La frustration principale identifiee est : |
| [VOTRE FRUSTRATION EN 1 PHRASE] |
|  |
| Genere 5 enonces 'Comment pourrions-nous...' (HMW) |
| qui reformulent cette frustration en opportunite |
| de conception. |
|  |
| Criteres : ni trop vague, ni trop precis, |
| ne propose pas encore de solution. |
|  |
| Format : liste numerotee, 1 phrase par enonce. |

**ANALYSE AVEC LES ETUDIANTS**

L'equipe choisit le HMW le plus pertinent parmi les 5 proposes. Ce HMW devient le fil directeur de tout le projet jusqu'a la soutenance. Il sera affiche dans le README GitHub et presente lors de la revue de 90 secondes a 20h45.

**PROMPT S4 Carte d'Empathie Markdown — Livrable final S1**

|  |  |  |
| --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE ESTIMEE**  **10 minutes** | **TECHNIQUE**  **Carte d'Empathie Markdown — Livrable final S1** |

**OBJECTIF PEDAGOGIQUE**

Generer la carte d'empathie complete du persona de l'equipe sous format Markdown structure — directement deposable sur GitHub et e-Academy.

**CONTEXTE & MISE EN SCENE**

C'est le livrable obligatoire de la seance. L'equipe adapte le prompt avec les informations reelles collectees lors de leurs interviews. Le resultat est copie dans un fichier .md sur GitHub.

**LE PROMPT A EXECUTER EN DIRECT**

|  |
| --- |
| [PROMPT CARTE D'EMPATHIE — LIVRABLE S1] |
|  |
| # ROLE |
| Tu es un UX Researcher expert en Design Thinking |
| pour des projets d'innovation sociale en Afrique. |
|  |
| ## PERSONA DE NOTRE EQUIPE |
| - Prenom, age, profession : [A COMPLETER] |
| - Localisation : [VILLE/QUARTIER, SENEGAL] |
| - Probleme principal : [VOTRE PROBLEME EN 1 PHRASE] |
| - Equipement digital : [SMARTPHONE/FEATURE PHONE/AUTRE] |
| - Revenus approximatifs : [FOURCHETTE] |
| - Contexte familial : [INFORMATIONS PERTINENTES] |
|  |
| ## OBSERVATIONS DE NOS INTERVIEWS |
| - Ce qu'il/elle a dit : [CITATION DIRECTE OU PARAPHRASE] |
| - Ce qu'il/elle a fait : [COMPORTEMENT OBSERVE] |
| - Emotion principale detectee : [EMOTION] |
|  |
| ## TACHE |
| Genere la Carte d'Empathie complete. |
|  |
| ## FORMAT DE SORTIE STRICT |
|  |
| ### 1. Ce qu'il/elle PENSE ET RESSENT |
| - [Preoccupation profonde 1] |
| - [Preoccupation profonde 2] |
| - [Aspiration secrete] |
|  |
| ### 2. Ce qu'il/elle VOIT |
| - [Element environnement 1] |
| - [Element environnement 2] |
|  |
| ### 3. Ce qu'il/elle ENTEND |
| - [Influence sociale 1] |
| - [Influence sociale 2] |
|  |
| ### 4. Ce qu'il/elle DIT ET FAIT |
| - [Comportement observable 1] |
| - [Citation directe] |
|  |
| ### 5. FRUSTRATIONS (Pains) |
| - [Douleur principale] |
| - [Obstacle majeur] |
|  |
| ### 6. ASPIRATIONS (Gains) |
| - [Resultat desire 1] |
| - [Besoin profond] |

**ANALYSE AVEC LES ETUDIANTS**

Le resultat est copie-colle dans un fichier nomme 'carte-empathie.md' et pousse sur GitHub avant 20h45. C'est ce fichier qui sera evalue comme livrable obligatoire de S1. L'equipe peut aussi le copier dans Google Docs pour l'archiver sur e-Academy.

# **CONSEILS D'UTILISATION EN SALLE**

## **Pour l'enseignant — Pendant la demo live**

* Projetez toujours l'interface IA sur le grand ecran. Les etudiants doivent voir le prompt ET la reponse.
* Tapez les prompts en direct, ne les collez pas — les etudiants voient ainsi que ce n'est pas magique.
* Laissez la reponse se generer completement avant de commenter. Ne parlez pas pendant la generation.
* Apres chaque prompt, demandez : 'Qu'est-ce qui manque dans cette reponse ?' avant de donner votre analyse.
* Si la reponse est decevante : 'Parfait — c'est exactement pour ca qu'on apprend le prompting.'

## **Pour les etudiants — Pendant le Lab Sprint**

* Copiez le prompt template dans votre outil IA prefere (Claude.ai recommande, ChatGPT accepte).
* Remplacez TOUS les elements entre [crochets] par votre contexte reel avant d'envoyer.
* Comparez vos resultats avec ceux d'autres membres de l'equipe qui ont utilise des formulations differentes.
* Documentez chaque prompt utilise dans votre Journal de Prompts (livrable de S2).
* Si la reponse n'est pas satisfaisante : ajoutez du contexte, precisez le format, ou donnez un exemple.

## **Erreurs courantes a eviter**

|  |
| --- |
| **ERREUR N°1** |
| Ne pas remplacer les [crochets] — envoyer le template tel quel produit une reponse generique inutilisable. Chaque crochet doit etre remplace par une information reelle de votre contexte. |

|  |
| --- |
| **ERREUR N°2** |
| Accepter la premiere reponse sans la critiquer. L'IA produit un premier jet — votre valeur ajoutee est de l'affiner avec des iterations successives. |

|  |
| --- |
| **ERREUR N°3** |
| Ignorer les hallucinations. Si une information semble inexacte (statistique, nom, date), verifiez-la avant de l'inclure dans un livrable. L'IA peut inventer des faits plausibles mais faux. |

Document prepare par M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026