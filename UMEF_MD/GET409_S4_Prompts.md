|  |
| --- |
| **GET 409 — Atelier IA No-Code**  Swiss UMEF University — Campus de Dakar  **BIBLIOTHÈQUE DE PROMPTS**  **SÉANCE 4 — Créer son MVP avec Bolt.new**  *M. Malick Faye Diagne — Enseignant responsable | Juin 2026* |

## **Tableau récapitulatif des prompts S4**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **CODE** | **TITRE** | **TECHNIQUE** | **OUTIL** | **DURÉE** | **POURQUOI** |
| **E1** | Prompt d'initialisation MVP GreenSprint | *Prompt structuré* | **bolt.new** | 15 min | Générer le code initial complet de l'application |
| **E2** | Itérations visuelles guidées | *Prompt correctif* | **bolt.new** | 10 min | Affiner le design sans casser le code existant |
| **E3** | Débogage erreur Bolt | *Prompt diagnose* | **bolt.new + Console** | 10 min | Résoudre les erreurs fréquentes lors de la génération |
| **E4** | Connexion GitHub & Vercel | *Prompt + actions UI* | **bolt.new** | 10 min | Versionner et déployer le MVP en production |
| **E5** | Évaluation qualité MVP | *Chain-of-Thought* | **Claude.ai** | 10 min | Auditer le MVP avant S5 selon les critères jury |
| **S1** | Personnaliser le prompt init | *Prompt structuré* | **bolt.new** | 15 min | Adapter le template au contexte équipe |
| **S2** | Itération responsive mobile | *Prompt correctif* | **bolt.new** | 10 min | Tester et corriger l'affichage mobile |
| **S3** | Ajout d'une fonctionnalité | *Few-Shot* | **bolt.new** | 10 min | Ajouter une feature avec exemple concret |
| **S4** | Documentation du MVP | *Zero-Shot* | **Claude.ai** | 10 min | Rédiger le README et les textes de l'app |
| **S5** | Analyse éthique MVP | *Chain-of-Thought* | **Claude.ai** | 15 min | Identifier 2 risques éthiques + garde-fous |
| **S6** | Pitch 3 min du MVP | *Structure guidée* | **Claude.ai** | 15 min | Préparer la présentation orale de S6 |

|  |
| --- |
| **PROMPTS ENSEIGNANT — E1 à E5** |

|  |
| --- |
| **E1 — Prompt d'initialisation MVP GreenSprint** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **bolt.new** | *Replit AI / v0.dev* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Générer le squelette complet du MVP GreenSprint en une seule requête. Ce prompt doit être utilisé comme base — les étudiants personnalisent ensuite avec leurs données d'équipe.

**Contexte :**

Après la séance S3 où les étudiants ont construit un workflow Dify, la S4 introduit Bolt.new pour créer l'interface utilisateur du projet. Ce prompt structure le MVP selon les 6 composants clés d'une app no-code.

|  |
| --- |
| Crée une application web complète appelée GreenSprint.  CONTEXTE :  GreenSprint est une plateforme numérique qui connecte les producteurs  maraîchers des Niayes (Sénégal) avec les acheteurs de Dakar pour  réduire les pertes post-récolte et sécuriser les revenus agricoles.  PAGES À CRÉER (3 pages minimum) :  1. ACCUEIL  - Header avec logo (emoji 🌿 vert) et nom GreenSprint  - Section hero : titre accrocheur, sous-titre, 2 boutons CTA :  "Je suis producteur" et "Je suis acheteur"  - Section chiffres clés : 3 stats (pertes post-récolte, producteurs  connectés, marchés couverts) — données fictives réalistes  - Footer : mentions légales, liens réseaux, contact  2. OFFRES DU MARCHÉ  - Liste de 6 offres avec : légume, zone, prix/kg, disponibilité,  statut (Disponible / En rupture)  - Boutons de filtre : Tous | Tomate | Chou | Carotte | Oignon | Aubergine  - Chaque offre en carte avec photo-placeholder vert  3. CONTACT  - Formulaire : Nom complet, E-mail, Téléphone, Message  - Bouton d'envoi vert  - Adresse fictive : Route des Niayes, Dakar, Sénégal  DESIGN :  - Couleur principale : #059669 (vert émeraude)  - Couleur secondaire : #FFFFFF (blanc)  - Accent : #F59E0B (or/jaune)  - Police : Inter (sans-serif moderne)  - Style : moderne, épuré, professionnel  - Responsive : oui — mobile first (breakpoint 768px)  - Navigation : barre fixe en haut avec les 3 pages  DONNÉES DES OFFRES (à afficher dans la page Offres) :  1. Tomate cerise | Pikine | 800 FCFA/kg | Disponible  2. Chou blanc | Niayes Nord | 350 FCFA/kg | Disponible  3. Carotte | Thiaroye | 600 FCFA/kg | En rupture  4. Oignon rouge | Louga | 400 FCFA/kg | Disponible  5. Aubergine | Dakar Banlieue | 500 FCFA/kg | Disponible  6. Poivron rouge | Niayes Sud | 750 FCFA/kg | Disponible  STACK TECHNIQUE : React + Tailwind CSS + Vite |

|  |
| --- |
| **📊 Analyse :** Ce prompt structuré (6 sections) produit un MVP cohérent en un seul appel. Les étudiants adaptent les données pour leur propre équipe. La précision du design (couleurs HEX, police nommée, responsive) réduit les itérations correctrices. |

|  |
| --- |
| **E2 — Prompts d'itérations visuelles guidées** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **bolt.new** | *Cursor / v0.dev* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Affiner le MVP après la génération initiale. Ces prompts correctifs ciblés évitent les régressions — chaque prompt modifie UNE chose à la fois.

**Prompt E2-A — Correction responsive mobile :**

|  |
| --- |
| Le menu de navigation ne s'affiche pas correctement sur téléphone.  Transforme-le en menu hamburger (☰) pour les écrans sous 768px.  Le menu s'ouvre en overlay quand on clique sur l'icône.  Ne modifie PAS la version desktop du menu. |

**Prompt E2-B — Amélioration des cartes offres :**

|  |
| --- |
| Sur la page Offres, améliore le design des cartes :  - Ajoute une bande colorée en haut de chaque carte selon la catégorie  (vert pour légume-feuille, orange pour légume-racine, etc.)  - Affiche une pastille "Disponible" (vert) ou "En rupture" (rouge)  en badge dans le coin supérieur droit de chaque carte  - Garde le même layout général — ne change que le style des cartes. |

**Prompt E2-C — Section statistiques accueil :**

|  |
| --- |
| Sur la page Accueil, ajoute une section statistiques avec 3 compteurs  animés (animation CSS au scroll) :  - 2 400+ producteurs connectés  - 47 marchés couverts  - 35% de pertes réduites  Style : fond vert foncé #065F46, chiffres en blanc 48px bold,  labels en dessous en blanc 14px. |

|  |
| --- |
| **📊 Analyse :** Ces prompts correctifs démontrent aux étudiants qu'ils peuvent diriger Bolt comme un développeur — sans écrire une ligne de code. L'instruction 'Ne modifie PAS X' protège ce qui fonctionne déjà. |

|  |
| --- |
| **E3 — Débogage d'erreurs fréquentes Bolt** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **bolt.new + F12** | *Claude.ai / ChatGPT* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Résoudre les erreurs les plus fréquentes lors de la génération MVP. Ces patterns de débogage peuvent être donnés directement à Bolt en collant le message d'erreur.

**Prompt E3-A — Erreur de build générique :**

|  |
| --- |
| Le build a échoué avec cette erreur : [COLLER ICI LE MESSAGE D'ERREUR]  Identifie la cause du problème, corrige-la dans le fichier concerné,  et explique en 2 phrases ce qui était incorrect.  Ne modifie aucun autre fichier que celui qui contient l'erreur. |

**Prompt E3-B — Composant qui ne s'affiche pas :**

|  |
| --- |
| La page [NOM\_PAGE] s'affiche complètement blanche / vide.  Vérifie que :  1. Le composant est bien exporté depuis son fichier  2. Il est bien importé dans App.jsx ou le routeur  3. La route correspondante est bien définie  Corrige uniquement l'erreur d'import/export — ne modifie pas le design. |

|  |
| --- |
| **📊 Analyse :** Donner le message d'erreur exact à Bolt dans le prompt de débogage est beaucoup plus efficace que de décrire le symptôme. Les étudiants apprennent à 'lire' la console (F12) même sans comprendre le code. |

|  |
| --- |
| **E4 — Connexion GitHub & Déploiement Vercel** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **bolt.new** | *GitHub.com / vercel.com* |

|  |
| --- |
| **APPLICATION : bolt.new → GitHub → Vercel** — *https://bolt.new | github.com | vercel.com* |

**Objectif :**

Guider les étudiants dans les actions interface (non-prompt) de connexion GitHub et déploiement. Ce prompt est utilisé comme script pas-à-pas pour l'enseignant lors de la démo live.

|  |
| --- |
| [Actions interface — pas un prompt Bolt]  ÉTAPE 1 — Connexion GitHub :  → Bouton "Connect to GitHub" (haut droite de Bolt)  → Autoriser l'accès bolt-ai à votre compte GitHub  → Sélectionner : "Create new repository"  → Nom du dépôt : GET409-[NomEquipe] (obligatoire)  → Visibilité : PUBLIC (obligatoire pour l'évaluation)  → Cliquer "Create repository"  ÉTAPE 2 — Vérification du dépôt :  → Ouvrir github.com/[username]/GET409-[NomEquipe]  → Vérifier que le code source est visible  → Modifier le README.md :  Ajouter : nom équipe, URL Vercel (à compléter), description GreenSprint  ÉTAPE 3 — Déploiement Vercel :  → Bouton "Deploy" dans Bolt (haut droite)  → Autoriser l'accès Vercel à votre GitHub  → Attendre 30 à 60 secondes le build  → Copier l'URL générée : https://[nom-projet].vercel.app  → Tester l'URL sur mobile et desktop |

|  |
| --- |
| **📊 Analyse :** GitHub + Vercel sont les livrables L1 et L2 notés sur 60/100 en S4. Ce script guide l'enseignant pour la démo et permet aux étudiants de reproduire sans aide. |

|  |
| --- |
| **E5 — Audit qualité MVP (Chain-of-Thought)** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Avancé** | 15 min | **Claude.ai** | *ChatGPT / Gemini* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Évaluer la qualité du MVP produit avant la séance S5 selon les critères de l'évaluation intermédiaire S6. Ce prompt CoT force une réflexion structurée multi-critères.

|  |
| --- |
| Tu es un jury d'évaluation de projets numériques pour Master.  Évalue ce MVP selon les critères officiels. Raisonne étape par étape.  URL du MVP à évaluer : [URL\_VERCEL]  Description du projet : GreenSprint — plateforme supply chain maraîchère  ÉTAPE 1 — FONCTIONNALITÉ (C1 — /4 pts) :  - L'app est-elle accessible sans installation ?  - Combien de fonctionnalités sont testables par un utilisateur réel ?  - L'interface est-elle lisible et cohérente ?  ÉTAPE 2 — ARCHITECTURE AGENTIQUE (C2 — /2 pts) :  - Un agent Dify est-il démontrable depuis le MVP ?  - Le flux utilisateur → agent → réponse est-il clair ?  - Un schéma d'architecture est-il présenté ?  ÉTAPE 3 — CLARTÉ DE PRÉSENTATION (C3 — /2 pts) :  - La problématique est-elle énoncée en 1 phrase sur l'app ?  - La proposition de valeur est-elle compréhensible ?  ÉTAPE 4 — NOTE GLOBALE ET RECOMMANDATIONS :  - Note estimée /8  - 3 points forts  - 3 améliorations prioritaires avant S6 |

|  |
| --- |
| **📊 Analyse :** Ce prompt CoT permet aux équipes d'auto-évaluer leur MVP avant la démo intermédiaire. Il prépare aussi les étudiants aux questions du jury en les forçant à voir leur travail depuis le point de vue de l'évaluateur. |

|  |
| --- |
| **PROMPTS ÉTUDIANTS — S1 à S6** |

|  |
| --- |
| **S1 — Personnaliser le prompt d'initialisation MVP** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **bolt.new** | *Replit AI* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Adapter le template E1 au contexte spécifique de votre équipe. Les parties entre [crochets] sont à remplacer.

|  |
| --- |
| Crée une application web complète appelée [NOM\_DE\_VOTRE\_APP].  CONTEXTE :  [NOM\_APP] est une plateforme numérique qui [DÉCRIRE CE QUE FAIT L'APP]  pour [SEGMENT CIBLE] afin de [BÉNÉFICE PRINCIPAL].  PAGES À CRÉER :  1. ACCUEIL  - Header avec logo et nom [NOM\_APP]  - Section hero : [TAGLINE DE VOTRE ÉQUIPE]  - Section présentation : [CE QUE VOUS OFFREZ]  2. [NOM\_PAGE\_2 — ex: Offres / Catalogue / Services]  - [CONTENU SPÉCIFIQUE À VOTRE PAGE]  - Filtre par [CRITÈRE PERTINENT POUR VOUS]  3. CONTACT  - Formulaire : Nom, E-mail, [CHAMP SPÉCIFIQUE], Message  DESIGN :  - Couleur principale : [VOTRE COULEUR HEX]  - Style : [moderne / chaleureux / professionnel / minimaliste]  - Responsive mobile : oui  DONNÉES (5 exemples réels de votre secteur) :  1. [Item 1] | [Détail] | [Prix/info] | [Statut]  2. [Item 2] | [Détail] | [Prix/info] | [Statut]  [... 3 autres exemples ...]  Stack : React + Tailwind CSS + Vite |

|  |
| --- |
| **📊 Analyse :** Le remplacement des [crochets] par des données réelles est ce qui transforme un template générique en un MVP convaincant. Prenez 10 minutes pour bien remplir chaque section — c'est un investissement qui économise des heures de corrections. |

|  |
| --- |
| **S2 — Itération responsive mobile** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **bolt.new** | *Aucune* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Corriger l'affichage mobile de votre MVP. À utiliser après avoir testé sur smartphone (ou dans les DevTools du navigateur — F12 → icône téléphone).

|  |
| --- |
| Sur mobile (écran < 768px), j'ai observé ces problèmes :  - [PROBLÈME 1 — ex: le menu déborde de l'écran]  - [PROBLÈME 2 — ex: les cartes sont trop petites pour cliquer]  - [PROBLÈME 3 — ex: le texte du hero est illisible]  Corrige ces 3 problèmes uniquement :  1. [PROBLÈME 1] → [CE QUE VOUS VOULEZ]  2. [PROBLÈME 2] → [CE QUE VOUS VOULEZ]  3. [PROBLÈME 3] → [CE QUE VOUS VOULEZ]  Ne modifie pas l'affichage desktop (> 768px).  Teste chaque correction avec les DevTools mobile. |

|  |
| --- |
| **📊 Analyse :** Tester sur un vrai smartphone est souvent révélateur — les problèmes de responsive qu'on ne voit pas sur desktop deviennent évidents sur mobile. Ce prompt ciblé évite de 'tout casser' en voulant tout corriger d'un coup. |

|  |
| --- |
| **S3 — Ajouter une fonctionnalité (Few-Shot)** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 10 min | **bolt.new** | *Cursor* |

|  |
| --- |
| **APPLICATION : bolt.new** — *https://bolt.new* |

**Objectif :**

Ajouter une nouvelle fonctionnalité en s'appuyant sur des exemples existants (Few-Shot). Cette technique réduit les malentendus et guide Bolt vers un résultat cohérent.

|  |
| --- |
| Sur ma page Offres, j'ai déjà un filtre par catégorie qui fonctionne  (exemple : boutons Tous / Tomate / Chou).  Je veux ajouter un filtre par ZONE GÉOGRAPHIQUE qui fonctionne  de la même façon :  - Boutons : Toutes zones | Niayes Nord | Niayes Sud | Pikine | Thiaroye | Louga  - Quand on clique sur une zone, seules les offres de cette zone s'affichent  - Les 2 filtres (catégorie + zone) doivent fonctionner ensemble :  ex: "Tomate" + "Pikine" n'affiche que les tomates de Pikine  Garde le même style visuel que le filtre existant.  Place les filtres de zone sous les filtres de catégorie. |

|  |
| --- |
| **📊 Analyse :** Le Few-Shot ('j'ai déjà X qui fonctionne comme Y') aide Bolt à comprendre exactement le comportement attendu en s'appuyant sur ce qu'il a déjà généré. Cette technique réduit les incohérences visuelles et fonctionnelles. |

|  |
| --- |
| **S4 — Rédiger la documentation du MVP** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 10 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Générer automatiquement le README GitHub et les textes de l'interface. Un README bien rédigé améliore la note du livrable L2.

|  |
| --- |
| Rédige le README.md de notre projet GitHub pour le cours GET 409.  Projet : [NOM\_APP]  Équipe : [NOM\_ÉQUIPE] — [NOMS DES MEMBRES]  Problème résolu : [PROBLÈME EN 1 PHRASE]  Solution : [DESCRIPTION EN 2-3 PHRASES]  URL du MVP : [URL\_VERCEL]  URL GitHub : [URL\_GITHUB]  Outils utilisés : Bolt.new, Dify, Claude.ai, Vercel  Le README doit inclure :  1. Description du projet (3-4 lignes)  2. Tableau des membres avec rôles  3. Fonctionnalités principales (liste à puces)  4. Guide de démarrage (URL de démo)  5. Outils et technologies  6. Capture d'écran placeholder  Format : Markdown standard GitHub. |

|  |
| --- |
| **📊 Analyse :** Un README professionnel démontre la maîtrise de la communication technique — compétence clé pour le jury. Ce prompt économise 30 minutes de rédaction manuelle et produit un document structuré. |

|  |
| --- |
| **S5 — Analyse éthique du MVP (Chain-of-Thought)** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Intermédiaire** | 15 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Rédiger la note d'éthique IA (livrable S4-L4) en identifiant les risques réels de votre MVP. Ce CoT structure la réflexion en 4 étapes.

|  |
| --- |
| Analyse les enjeux éthiques de notre MVP. Raisonne étape par étape.  Notre projet : [NOM\_APP] — [DESCRIPTION EN 1 PHRASE]  Utilisateurs cibles : [QUI VA UTILISER L'APP]  Données collectées : [QUELLES DONNÉES — ex: formulaire contact]  ÉTAPE 1 — ACCESSIBILITÉ :  Notre app est-elle accessible à des utilisateurs avec un faible débit  (3G) ? Sur un vieux smartphone Android ? Qu'est-ce qui pourrait les  exclure ?  ÉTAPE 2 — BIAIS ET REPRÉSENTATION :  Les données que nous présentons (offres, zones, prix) reflètent-elles  la diversité réelle des acteurs ? Qui est absent ou sous-représenté ?  ÉTAPE 3 — DONNÉES ET CONFIDENTIALITÉ :  Notre formulaire de contact collecte des données personnelles.  Quelles obligations légales s'appliquent (RGPD, loi sénégalaise) ?  Que devons-nous ajouter pour être en conformité ?  ÉTAPE 4 — IMPACT SOCIO-ÉCONOMIQUE :  Si notre app réussit, quels acteurs économiques actuels pourraient  être impactés négativement ? Comment anticiper ces effets ?  Pour chaque étape : identifie 1 risque concret + 1 garde-fou réaliste. |

|  |
| --- |
| **📊 Analyse :** La réflexion éthique structurée en 4 étapes (accessibilité, biais, données, impact) couvre les principaux axes du référentiel EU AI Act adapté au contexte sénégalais. Elle forme le cœur du livrable L4. |

|  |
| --- |
| **S6 — Préparer le pitch de 3 minutes** |

|  |  |  |  |
| --- | --- | --- | --- |
| **NIVEAU** | **DURÉE** | **OUTIL** | **ALTERNATIVE** |
| **Débutant** | 15 min | **Claude.ai** | *ChatGPT* |

|  |
| --- |
| **APPLICATION : Claude.ai** — *https://claude.ai* |

**Objectif :**

Préparer la restitution orale de fin de S4 (3 min / équipe) et s'exercer avant l'évaluation intermédiaire S6.

|  |
| --- |
| Aide-moi à préparer un pitch de 3 minutes pour présenter notre MVP  en cours devant un jury.  Projet : [NOM\_APP] — [DESCRIPTION]  Problème résolu : [PROBLÈME EN 1 PHRASE]  Notre MVP : [CE QUE L'APP FAIT CONCRÈTEMENT]  URL live : [URL\_VERCEL]  Prompts utilisés : [2-3 prompts marquants de la session]  Structure le pitch en 4 parties :  1. Le problème (30 sec) — données chiffrées si possible  2. Notre solution MVP (45 sec) — ce qui est fonctionnel MAINTENANT  3. Démo rapide (1 min) — 3 clics pour montrer les features clés  4. Ce qu'on a appris (45 sec) — 1 difficulté + 1 amélioration S5  Donne-moi aussi 3 questions difficiles que le jury pourrait poser  avec des réponses suggérées. |

|  |
| --- |
| **📊 Analyse :** Préparer le pitch avec l'IA permet aux étudiants de s'entraîner à la reformulation et à l'anticipation des questions. Les 3 questions 'difficiles' simulées réduisent le stress de la vraie démo. |

|  |
| --- |
| **CONSEILS & BONNES PRATIQUES S4** |

|  |  |  |
| --- | --- | --- |
| **🚀 BOLT.NEW — RÈGLES D'OR**   * 1 prompt = 1 modification. Jamais plusieurs changements en même temps. * Toujours tester le preview avant le prompt suivant. * Si ça casse : 'Revert' dans l'historique — pas de panique. * Le bouton 'Stop' arrête une génération qui part en boucle. * Sauvegarder régulièrement en connectant GitHub tôt. |  | **🌿 GREENSPRINT — CHECKLIST MVP**   * Page Accueil : hero + CTA + stats fonctionnels. * Page Offres : 6 offres + filtre par légume. * Page Contact : formulaire complet. * Responsive mobile testé sur vrai smartphone. * GitHub dépôt PUBLIC avec README complété. * URL Vercel accessible depuis un autre réseau. |

|  |
| --- |
| **⚠️ RAPPEL ÉVALUATION S4** |

|  |  |  |  |
| --- | --- | --- | --- |
| **LIVRABLE** | **CRITÈRE ÉLIMINATOIRE** | **BARÈME** | **DÉLAI** |
| **L1 — URL Vercel** | App inaccessible = 0 | **35 pts** | 48h après S4 |
| **L2 — GitHub** | Dépôt privé = 0 | **25 pts** | 48h après S4 |
| **L3 — Journal Prompts** | Moins de 4 prompts = -10 | **25 pts** | 48h après S4 |
| **L4 — Captures + Note** | Non rendu = 0 | **15 pts** | 48h après S4 |

*Document établi par M. Malick Faye Diagne — Enseignant responsable GET 409*

*Swiss UMEF University — Campus de Dakar | GET 409 Bibliothèque de Prompts S4 | Juin 2026*