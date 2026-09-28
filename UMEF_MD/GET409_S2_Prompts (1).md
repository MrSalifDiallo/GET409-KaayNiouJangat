**GET 409 — Atelier IA**

**BIBLIOTHEQUE DE PROMPTS**

SEANCE 2 — Ideation, VPC & Prompt Engineering

Swiss UMEF University — Campus de Dakar | M. Malick Faye Diagne

|  |  |  |  |
| --- | --- | --- | --- |
| **Seance**  **S2 — 2 juin (G1) / 16 juin (G2)** | **Focus**  **Ideation + VPC + Prompt Engineering** | **Public**  **Master — Non-developpeurs** | **Prompts S2**  **5 enseignant + 6 etudiants** |

|  |
| --- |
| **COMMENT UTILISER CE DOCUMENT** |
| Ce document couvre deux series de prompts : (1) PROMPTS ENSEIGNANT — demonstrations live sur les 3 techniques de prompting (Zero-Shot, Few-Shot, Chain-of-Thought) ancrees dans GreenSprint ; (2) PROMPTS ETUDIANTS — TP de 45 minutes ou chaque equipe produit 5 prompts metier documentes dans leur Journal de Prompts. Les prompts Ideation et VPC (E1-E2) servent a stimuler la reflexion collective avant le choix de la problematique. |

## **Recapitulatif — Applications IA par prompt**

**Outil principal S2 : Claude.ai pour tous les prompts de demonstration et la majorite des TP etudiants.**

Plan B connexion lente : Mistral Le Chat (chat.mistral.ai) — ultra-leger, 100% francais.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **#** | **TECHNIQUE** | **OUTIL** | **APPLICATION** | **POURQUOI** |
| **E1** | **Ideation VPC** | **Claude.ai**  claude.ai | ChatGPT | Genere des insights utilisateur riches et contextualises pour le Profil Client. |
| **E2** | **Pain & Gain Mining** | **Claude.ai**  claude.ai | ChatGPT | Extraction precise des Pain Relievers et Gain Creators a partir du VPC. |
| **E3** | **Zero-Shot** | **Claude.ai**  claude.ai | ChatGPT | Demonstration de la progression : reponse brute vs reponse structureeRole/Contexte/Tache. |
| **E4** | **Few-Shot** | **Claude.ai**  claude.ai | ChatGPT | Montre comment les exemples imposent un format de reponse. Comparaison avant/apres. |
| **E5** | **Chain-of-Thought** | **Claude.ai**  claude.ai | Gemini 1.5 | Raisonnement etape par etape. Moins d'hallucinations sur problemes complexes. |
| **S1** | **VPC — Profil Client** | **Claude.ai**  claude.ai | ChatGPT | Genere le Profil Client du persona de l'equipe a partir de leur carte d'empathie S1. |
| **S2** | **VPC — Proposition** | **Claude.ai**  claude.ai | ChatGPT | Construit la Proposition de Valeur alignee sur les Pains et Gains identifies. |
| **S3** | **Zero-Shot metier** | **Claude.ai**  claude.ai | ChatGPT | Premier prompt structure Role/Contexte/Tache sur leur secteur. Journal P1. |
| **S4** | **Zero-Shot formate** | **Claude.ai**  claude.ai | ChatGPT | Zero-Shot avec format de sortie impose. Journal P2. Comparaison avec P1. |
| **S5** | **Few-Shot metier** | **Claude.ai**  claude.ai | ChatGPT | Few-Shot avec 2 exemples issus de leur secteur. Journal P3. |
| **S6** | **Chain-of-Thought** | **Claude.ai**  claude.ai | Gemini 1.5 | Analyse de leur problematique en 3 etapes. Journal P4. |

# **PARTIE 1 — PROMPTS ENSEIGNANT (Demonstration Live)**

5 prompts projetes sur grand ecran. E1-E2 : utilises pendant la Masterclass VPC (18h15–18h50) pour illustrer comment l'IA accelere la construction du canvas. E3-E5 : utilises pendant la Masterclass Prompt Engineering (19h30–20h00), progressant du plus simple au plus avance.

**PROMPT E1 Ideation — Profil Client VPC**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment l'IA peut accelerer la construction du Profil Client dans le VPC a partir du persona GreenSprint. Illustrer la puissance du contexte riche dans un prompt.

**CONTEXTE & MISE EN SCENE**

Ouvrez Claude.ai. Presentez le VPC vide a l'ecran. Expliquez que vous allez demander a l'IA de remplir le cote 'Profil Client' a partir du persona Abdoulaye Ndiaye de la S1.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT E1 — IDEATION VPC : PROFIL CLIENT] |
|  |
| Tu es un expert en Design Thinking et en etude |
| comportementale des utilisateurs en Afrique de l'Ouest. |
|  |
| Voici le profil de notre persona : |
| - Prenom : Abdoulaye Ndiaye, 52 ans, maraicher |
| - Localisation : Sebikotane, Zone des Niayes, Senegal |
| - Activite : 3 hectares d'oignons et de tomates |
| - Equipement : Feature phone, compte Wave Mobile Money |
| - Probleme principal : 40% de pertes post-recolte, |
| dependance aux intermediaires Bana-Bana, |
| cout du gasoil pour la motopompe tres eleve |
|  |
| Remplis le Profil Client de son Value Proposition Canvas : |
|  |
| JOBS TO BE DONE (ce qu'il essaie d'accomplir) : |
| - [3 jobs fonctionnels, sociaux ou emotionnels] |
|  |
| PAINS (ses frustrations et obstacles) : |
| - [4 pains concrets et observables] |
|  |
| GAINS (ses aspirations et benefices desires) : |
| - [4 gains specifiques et mesurables si possible] |
|  |
| Sois specifique au contexte senegalais. Evite les |
| generalites. Chaque point doit etre directement |
| lie a sa realite de maraicher dans les Niayes. |

**ANALYSE AVEC LES ETUDIANTS**

Comparez le resultat avec ce que les equipes ont ecrit manuellement sur leur VPC. Signalez : l'IA est un accelerateur, pas un remplacant — votre travail de terrain (interviews S1) produit des insights que l'IA ne peut pas inventer. La combinaison des deux est la puissance.

**PROMPT E2 VPC — Pain Relievers & Gain Creators**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment passer du Profil Client a la Proposition de Valeur. L'IA genere des Pain Relievers et Gain Creators a partir des Pains et Gains identifies — le 'FIT' du canvas.

**CONTEXTE & MISE EN SCENE**

Utilisez le resultat du prompt E1. Montrez que vous enchainez directement les prompts — c'est une conversation continue avec l'IA, pas des prompts isoles.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT E2 — VPC : PROPOSITION DE VALEUR] |
|  |
| En te basant sur le Profil Client precedent |
| d'Abdoulaye Ndiaye, construis la Proposition de |
| Valeur de GreenSprint. |
|  |
| GreenSprint est une plateforme numerique qui connecte |
| les maraîchers des Niayes aux acheteurs de Dakar. |
| Elle fonctionne via SMS/USSD (pas d'application |
| a telecharger) et offre une transparence sur les |
| prix du marche en temps reel. |
|  |
| Remplis les 3 blocs de la Proposition de Valeur : |
|  |
| PRODUITS & SERVICES : |
| - [3 fonctionnalites cles du MVP, concretes] |
|  |
| PAIN RELIEVERS (pour chaque Pain identifie) : |
| - Pain 1 → Reliever specifique |
| - Pain 2 → Reliever specifique |
| - Pain 3 → Reliever specifique |
| - Pain 4 → Reliever specifique |
|  |
| GAIN CREATORS (pour chaque Gain desire) : |
| - Gain 1 → Creator specifique |
| - Gain 2 → Creator specifique |
| - Gain 3 → Creator specifique |
|  |
| Verifie le FIT : chaque Pain Reliever doit |
| correspondre a un Pain reel du persona. |

**ANALYSE AVEC LES ETUDIANTS**

Montrez le FIT visuel : chaque Pain a son Pain Reliever, chaque Gain a son Gain Creator. Posez la question aux etudiants : 'Y a-t-il un Pain Reliever sans Pain correspondant ?' C'est le signe d'une fonctionnalite inutile.

**PROMPT E3 Zero-Shot — Progression faible vers fort**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Demonstrer en direct la difference entre un Zero-Shot vague et un Zero-Shot structure (Role/Contexte/Tache/Format). Meme question, deux formulations, deux resultats radicalement differents.

**CONTEXTE & MISE EN SCENE**

Tapez les deux prompts successivement, sans commentaire entre les deux. Laissez les etudiants observer la difference avant de l'analyser ensemble.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [VERSION 1 — ZERO-SHOT FAIBLE] |
| Quelles fonctionnalites pour une app agricole |
| au Senegal ? |
|  |
| --- |
|  |
| [VERSION 2 — ZERO-SHOT STRUCTURE] |
|  |
| ROLE : Tu es un Product Manager specialise en |
| agritech pour l'Afrique subsaharienne. |
|  |
| CONTEXTE : Nous construisons GreenSprint, un MVP |
| destine aux maraîchers de la zone des Niayes |
| (Senegal) qui n'ont pas de smartphone. Notre |
| canal principal est le SMS/USSD. |
|  |
| TACHE : Genere les 5 fonctionnalites prioritaires |
| du MVP, classees par impact utilisateur decroissant. |
|  |
| FORMAT : Pour chaque fonctionnalite : |
| - Nom court |
| - Probleme resolu (en lien avec le persona) |
| - Faisabilite technique sans app (oui/non) |

**ANALYSE AVEC LES ETUDIANTS**

Analysez la difference : Version 1 = generaliste, repetitive, inutilisable telle quelle. Version 2 = specifique, actionnable, directement exploitable en Sprint. La structure Role/Contexte/Tache/Format est la cle. C'est ce que les etudiants appliqueront sur leur propre secteur ce soir.

**PROMPT E4 Few-Shot — Imposer un pattern metier**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment 2 exemples ancres dans le contexte senegalais suffisent a forcer l'IA a raisonner avec les contraintes locales (pas de 4G, mobile money, langue locale) sur un troisieme defi.

**CONTEXTE & MISE EN SCENE**

Expliquez que les exemples sont le 'moule' qui formate la pensee de l'IA. Plus vos exemples sont specifiques et contextuels, plus la completion sera pertinente.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT E4 — FEW-SHOT : DEFIS LOCAUX] |
|  |
| Tu es un ingenieur produit specialise en solutions |
| numeriques pour l'agriculture en Afrique de l'Ouest. |
|  |
| Voici des exemples de defis terrain et leurs |
| solutions adaptees au contexte : |
|  |
| DEFI : Les maraîchers ne peuvent pas verifier |
| les prix du marche avant d'envoyer leur recolte. |
| SOLUTION : Bot SMS qui envoie les prix de gros |
| de Dakar deux fois par jour via USSD. |
|  |
| DEFI : Les acheteurs dakarois ne savent pas |
| quels legumes sont disponibles a Sebikotane |
| avant de se deplacer. |
| SOLUTION : Systeme d'alerte SMS automatique |
| envoye aux acheteurs inscrits quand un lot est |
| pret a la vente avec le prix et la quantite. |
|  |
| DEFI : Les petits maraîchers perdent jusqu'a 40% |
| de leur recolte de tomates faute de stockage |
| frigorifique accessible. |
| SOLUTION : |

**ANALYSE AVEC LES ETUDIANTS**

L'IA complete en respectant les contraintes imposees par vos exemples : solution sans app, accessible via mobile basique, adaptee au contexte. Elle n'a pas propose 'une application iOS de gestion de stock' — parce que vos exemples ont etabli un cadre de contraintes implicites. C'est la force du Few-Shot.

**PROMPT E5 Chain-of-Thought — Analyse strategique**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Avance** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **Gemini 1.5** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Montrer comment le raisonnement etape par etape produit une analyse strategique verifiable, avec moins de generalites et d'hallucinations que les techniques precedentes.

**CONTEXTE & MISE EN SCENE**

Presentez-le comme 'le niveau strategiste' : vous ne demandez pas une liste de fonctionnalites, vous demandez une analyse de faisabilite. C'est ce que font les equipes quand elles preparent la soutenance.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT E5 — CHAIN-OF-THOUGHT : STRATEGIE MVP] |
|  |
| Tu es un consultant en strategie digitale pour |
| des startups agritech en Afrique de l'Ouest. |
|  |
| Nous envisageons de lancer GreenSprint — une |
| plateforme de mise en relation producteurs-acheteurs |
| fonctionnant par SMS/USSD au Senegal. |
|  |
| Analyse la viabilite de ce projet. |
| Reflechis etape par etape : |
|  |
| Etape 1 — Analyse du marche : |
| Identifie les 2 principaux segments d'utilisateurs |
| et leur taille estimee au Senegal. |
|  |
| Etape 2 — Analyse des obstacles : |
| Quels sont les 3 risques majeurs qui pourraient |
| faire echouer le projet dans les 6 premiers mois ? |
|  |
| Etape 3 — Recommandation MVP : |
| Quelle est la ONE THING a implementer en priorite |
| pour valider l'hypothese principale ? |
|  |
| Etape 4 — Metrique de succes : |
| Quelle metrique unique permettrait de savoir si |
| le MVP fonctionne apres 30 jours ? |
|  |
| Developpe chaque etape avant de conclure. |

**ANALYSE AVEC LES ETUDIANTS**

Montrez que la reponse est structuree, progressive, verifiable. Demandez aux etudiants : 'A quelle etape l'IA pourrait-elle se tromper ?' C'est l'exercice du regard critique — competence cle du prompting avance. Cette technique sera celle qu'ils utiliseront pour preparer leur soutenance en S8.

# **PARTIE 2 — PROMPTS ETUDIANTS (TP 45 minutes)**

Ces prompts sont utilises par les equipes de 20h00 a 20h45. Les 4 premiers (S1-S4) completent le VPC et structurent le Journal de Prompts. Le 5eme et 6eme (S5-S6) approfondissent les techniques du soir.

|  |
| --- |
| **INSTRUCTION OBLIGATOIRE** |
| RAPPEL CRITIQUE : Remplacez TOUS les [crochets] par les informations reelles de votre equipe avant d'envoyer. Un crochet non remplace = reponse generique = Journal de Prompts invalide. |

**PROMPT S1 VPC — Construire votre Profil Client**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Utiliser l'IA pour completer le cote 'Profil Client' du VPC de l'equipe a partir de leur carte d'empathie S1. Ce prompt remplace le travail manuel et accelere la construction.

**CONTEXTE & MISE EN SCENE**

Ouvrez votre carte d'empathie de S1. Remplissez les [crochets] avec les informations reelles de votre persona avant d'envoyer. Ne generalisez pas.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S1 — VPC PROFIL CLIENT — A ADAPTER] |
|  |
| Tu es un expert en Design Thinking et en etude |
| comportementale des utilisateurs en [VOTRE PAYS/REGION]. |
|  |
| Voici le profil de notre persona : |
| - Identite : [PRENOM, AGE, PROFESSION] |
| - Localisation : [VILLE/QUARTIER, SENEGAL] |
| - Probleme principal : [EN 1 PHRASE] |
| - Equipement digital : [SMARTPHONE / FEATURE PHONE] |
| - Contexte economique : [REVENUS / STATUT] |
| - Citation directe de nos interviews : |
| '[UNE CITATION REELLE DE VOS INTERVIEWS]' |
|  |
| Remplis le Profil Client de son Value Proposition |
| Canvas avec 3 a 4 elements par bloc : |
|  |
| JOBS TO BE DONE : |
| - [jobs fonctionnels, sociaux, emotionnels] |
|  |
| PAINS (frustrations et obstacles observes) : |
| - [pains concrets identifies en interview] |
|  |
| GAINS (aspirations et benefices desires) : |
| - [gains specifiques au contexte local] |
|  |
| Sois specifique. Chaque element doit etre |
| directement relie a son quotidien reel. |

**ANALYSE AVEC LES ETUDIANTS**

Comparez le resultat avec votre carte d'empathie S1. Est-ce que l'IA a identifie des Pains que vous n'aviez pas notes ? Est-ce qu'elle en a invente qui ne correspondent pas a la realite ? Ce travail critique est a documenter dans votre Journal de Prompts. Note : /5.

**PROMPT S2 VPC — Construire votre Proposition de Valeur**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Construire le cote 'Proposition de Valeur' du VPC a partir du Profil Client genere en S1. Verifier le FIT entre les deux cotes du canvas.

**CONTEXTE & MISE EN SCENE**

Enchainez directement apres S1. Vous pouvez continuer la meme conversation Claude.ai — l'IA garde le contexte du persona en memoire.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S2 — VPC PROPOSITION DE VALEUR — A ADAPTER] |
|  |
| En te basant sur le Profil Client precedent |
| de [NOM DU PERSONA], construis la Proposition |
| de Valeur de notre solution. |
|  |
| Notre solution s'appelle [NOM DE VOTRE PROJET]. |
| Description : [EN 2-3 PHRASES SIMPLES SANS JARGON]. |
| Canal principal : [WEB / SMS / APPLICATION / AUTRE]. |
| Secteur : [VOTRE SECTEUR AU SENEGAL]. |
|  |
| Remplis les 3 blocs : |
|  |
| PRODUITS & SERVICES : |
| - [2-3 fonctionnalites cles du MVP] |
|  |
| PAIN RELIEVERS (un par Pain identifie) : |
| - [Pain 1] → [Comment notre solution le reduit] |
| - [Pain 2] → [Comment notre solution le reduit] |
| - [Pain 3] → [Comment notre solution le reduit] |
|  |
| GAIN CREATORS (un par Gain desire) : |
| - [Gain 1] → [Comment notre solution le cree] |
| - [Gain 2] → [Comment notre solution le cree] |
|  |
| Puis indique : y a-t-il des Pain Relievers sans |
| Pain correspondant ? C'est une fonctionnalite |
| a supprimer du MVP. |

**ANALYSE AVEC LES ETUDIANTS**

L'IA doit pointer les Pain Relievers orphelins — fonctionnalites que vous avez pensees mais qui ne repondent a aucun vrai besoin. C'est l'une des contributions les plus utiles de ce prompt. Si un Pain Reliever n'a pas de Pain en face : supprimez-le de votre MVP. Documentez dans le Journal.

**PROMPT S3 Zero-Shot — Journal P1 (prompt structure)**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Produire le premier prompt structure du Journal de Prompts en appliquant la formule Role/Contexte/Tache/Format apprise en Masterclass. Comparer avec un Zero-Shot non structure.

**CONTEXTE & MISE EN SCENE**

Commencez par envoyer une version non structuree ('Que faire pour mon projet ?'). Documentez-la. Puis envoyez la version structuree ci-dessous. Comparez les deux reponses — c'est le cœur de l'apprentissage.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S3 — ZERO-SHOT STRUCTURE P1 — A ADAPTER] |
|  |
| ROLE : Tu es un [EXPERT DANS VOTRE DOMAINE] |
| specialise dans [VOTRE CONTEXTE GEOGRAPHIQUE |
| ET SECTORIEL]. |
|  |
| CONTEXTE : Notre equipe developpe [NOM DU PROJET], |
| une solution destinee a [VOTRE PERSONA EN 1 PHRASE]. |
| Le probleme principal est : [VOTRE HMW DEFINITIF]. |
|  |
| TACHE : Identifie les 5 fonctionnalites prioritaires |
| de notre MVP, classees par impact sur l'utilisateur. |
|  |
| FORMAT : Pour chaque fonctionnalite : |
| - Nom (court, en francais) |
| - Probleme resolu pour [NOM DU PERSONA] |
| - Effort de developpement estime (faible/moyen/eleve) |
| - Accessibilite sans smartphone (oui / non) |

**ANALYSE AVEC LES ETUDIANTS**

Evaluez la reponse /5 : est-elle specifique a votre contexte ? Les fonctionnalites sont-elles realistes ? Y a-t-il des hallucinations (technologies inexistantes, couts inventes) ? Si note < 3 : reformulez et documentez les deux versions dans le Journal. C'est le Prompt P1 de votre Journal de Prompts.

**PROMPT S4 Zero-Shot — Journal P2 (format impose)**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Debutant** | **DUREE**  **8 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Approfondir le Zero-Shot en imposant un format de sortie plus contraignant : un tableau structure. Montrer qu'un format different du meme prompt produit un livrable plus exploitable.

**CONTEXTE & MISE EN SCENE**

Utilisez votre problematique definitive. L'objectif est de produire un output directement inserrable dans votre deck de presentation — pas a retravailler.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S4 — ZERO-SHOT TABLEAU P2 — A ADAPTER] |
|  |
| ROLE : Tu es un consultant en innovation sociale |
| pour des projets numeriques en Afrique de l'Ouest. |
|  |
| CONTEXTE : Notre projet [NOM] s'attaque au probleme |
| suivant : [VOTRE HMW DEFINITIF EN 1 PHRASE]. |
| Public cible : [VOTRE PERSONA - age, localisation, |
| equipement digital]. |
|  |
| TACHE : Analyse la viabilite de ce projet et |
| propose les 3 risques majeurs a anticiper. |
|  |
| FORMAT DE SORTIE STRICT : |
| Reponds uniquement sous ce format tableau : |
|  |
| | Risque | Description | Probabilite | Mitigation | |
| |--------|-------------|-------------|------------| |
| | [1] | ... | Haute/Moy/Faible | ... | |
| | [2] | ... | ... | ... | |
| | [3] | ... | ... | ... | |
|  |
| Puis une recommandation en 2 phrases. |

**ANALYSE AVEC LES ETUDIANTS**

Comparez avec P1 : meme technique (Zero-Shot), mais format impose. Le tableau est directement reutilisable dans le deck de soutenance. C'est le Prompt P2 du Journal. Note /5 : le tableau est-il bien formate ? Les risques sont-ils realistes pour votre secteur ?

**PROMPT S5 Few-Shot — Journal P3 (pattern metier)**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **ChatGPT** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Appliquer la technique Few-Shot sur le secteur de l'equipe. Donner 2 exemples reels de leur domaine pour forcer l'IA a raisonner avec les contraintes specifiques identifiees en S1.

**CONTEXTE & MISE EN SCENE**

Les 2 exemples doivent venir de vos propres observations de terrain (interviews S1, carte d'empathie). Plus ils sont precis, plus la completion sera pertinente.

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S5 — FEW-SHOT METIER P3 — A ADAPTER] |
|  |
| Tu es un expert en [VOTRE SECTEUR] au Senegal. |
|  |
| Voici des exemples de problemes observes chez |
| [VOS UTILISATEURS] et leurs solutions adaptees : |
|  |
| PROBLEME : [PROBLEME REEL OBSERVE EN INTERVIEW 1] |
| SOLUTION : [PISTE DE SOLUTION ADAPTEE AU CONTEXTE] |
|  |
| PROBLEME : [PROBLEME REEL OBSERVE EN INTERVIEW 2] |
| SOLUTION : [PISTE DE SOLUTION ADAPTEE AU CONTEXTE] |
|  |
| En suivant exactement ce format et ces contraintes |
| contextuelles, propose une solution pour ce troisieme |
| probleme : |
|  |
| PROBLEME : [VOTRE 3EME PROBLEME NON ENCORE RESOLU] |
| SOLUTION : |
|  |
| Contraintes a respecter : |
| - Solution accessible sans connexion 4G stable |
| - Cout d'adoption < [MONTANT RAISONNABLE] FCFA |
| - Utilisable par [VOTRE PERSONA] sans formation |

**ANALYSE AVEC LES ETUDIANTS**

Evaluez : la solution proposee respecte-t-elle les contraintes que vous avez etablies dans vos exemples ? Si l'IA propose une application mobile pour un persona sans smartphone, vos exemples n'etaient pas assez contraignants. C'est le Prompt P3 du Journal.

**PROMPT S6 Chain-of-Thought — Journal P4 (analyse strategique)**

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU**  **Intermediaire** | **DUREE**  **10 minutes** | **OUTIL PRINCIPAL**  **Claude.ai** | **ALTERNATIVE**  **Gemini 1.5** |

|  |
| --- |
| **APPLICATION : Claude.ai — claude.ai** |

**OBJECTIF PEDAGOGIQUE**

Appliquer Chain-of-Thought sur la problematique definitive de l'equipe pour produire une analyse strategique structuree. Ce prompt sert de base a la preparation de la soutenance.

**CONTEXTE & MISE EN SCENE**

C'est le prompt le plus complexe du TP. Prenez le temps de bien remplir tous les [crochets]. Le resultat doit etre directement exploitable pour la note d'ethique IA (livrable S6).

**LE PROMPT A EXECUTER**

|  |
| --- |
| [PROMPT S6 — CHAIN-OF-THOUGHT P4 — A ADAPTER] |
|  |
| Tu es un consultant en strategie digitale pour |
| des projets d'innovation sociale en Afrique. |
|  |
| Notre projet : [NOM DU PROJET] |
| Notre HMW : [VOTRE ENONCE DEFINITIF] |
| Notre persona : [NOM, AGE, LOCALISATION, PROBLEME] |
| Notre MVP prevu : [DESCRIPTION EN 2 PHRASES] |
|  |
| Analyse ce projet en 4 etapes. Developpe |
| chaque etape avant de passer a la suivante. |
|  |
| Etape 1 — Pertinence du probleme : |
| Le probleme est-il suffisamment reel et urgent |
| pour notre persona ? Cite 2 indicateurs observables. |
|  |
| Etape 2 — Viabilite de la solution : |
| Quels sont les 2 principaux obstacles techniques |
| ou sociaux a l'adoption de notre MVP ? |
|  |
| Etape 3 — Risques ethiques : |
| Quels biais ou risques d'exclusion notre solution |
| pourrait-elle creer pour [PERSONA] ou |
| des groupes vulnerables similaires ? |
|  |
| Etape 4 — Recommandation : |
| Quelle est la seule chose a valider en priorite |
| avec de vrais utilisateurs avant de construire ? |

**ANALYSE AVEC LES ETUDIANTS**

L'Etape 3 sur les risques ethiques est le point le plus important : la reponse alimentera directement la note d'ethique IA obligatoire en S6. Demandez a chaque equipe de copier-coller l'Etape 3 dans un fichier 'notes-ethique.md' sur GitHub. C'est le Prompt P4 du Journal.

# **CONSEILS D'UTILISATION EN SALLE**

## **Enchainement des demonstrations (E1 a E5)**

* E1 et E2 s'enchainent dans la meme conversation Claude.ai — l'IA garde le contexte du persona en memoire. Ne fermez pas l'onglet entre les deux.
* Pour E3, ouvrez une nouvelle conversation pour repartir de zero. Cela montre que la technique Zero-Shot fonctionne meme sans historique.
* E4 et E5 peuvent aussi s'enchainner : utilisez E4 pour identifier un defi, puis E5 pour l'analyser strategiquement.
* Conservez toutes les reponses generees pendant les demos — elles servent d'exemples de reference pour les etudiants pendant le TP.

## **Gestion du TP 45 minutes (S1 a S6)**

* Les equipes n'ont pas a faire les 6 prompts — P1 a P4 sont obligatoires pour le Journal. S1 et S2 (VPC) sont faits avant le TP.
* Circulez entre les equipes pendant le TP. Arretez-vous quand une equipe a une note < 3/5 : aidez a reformuler le prompt.
* Si une equipe est bloquee sur les [crochets] : demandez-leur de relire leur carte d'empathie S1. Tout y est.
* Le Prompt P5 est libre — encouragez les equipes a inventer leur propre formulation. C'est l'indicateur d'autonomie.

|  |
| --- |
| **ERREUR FREQUENTE — Journal de Prompts incomplet** |
| Le Journal de Prompts est un livrable EVALUE (Journal de 5 entrees minimum). Un journal avec seulement les prompts envoyes mais sans evaluation /5 ni iteration n'est pas complet. |

|  |
| --- |
| **CONSEIL TECHNIQUE — Continuite de conversation** |
| Enchainer S1 et S2 dans la meme conversation Claude.ai permet a l'IA de garder le contexte du persona. Si les etudiants ouvrent une nouvelle conversation pour S2, ils doivent re-specifier le persona. |

|  |
| --- |
| **CONNEXION INTER-SEANCES — Note d'ethique IA** |
| Les risques ethiques identifies en S6 (Etape 3) sont le materiau brut de la Note d'Ethique IA obligatoire en S6. Conseillez aux equipes de les sauvegarder des maintenant. |

Document prepare par M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026