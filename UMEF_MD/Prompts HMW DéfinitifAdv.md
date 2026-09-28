**Prompts HMW Définitif — Séquence Avancée**

GET 409 · Lab Sprint S2 · Swiss UMEF University Dakar · M. Malick Faye Diagne

**LOGIQUE DE LA SÉQUENCE**

Ces 3 prompts s'utilisent **après P-HMW**, dans l'ordre indiqué. Ils transforment le HMW définitif en système de décision opérationnel pour S3 et la soutenance.

P-HMW → docs/hmw-definitif.md (HMW validé)

↓

P-HMW-ALIGNEMENT → docs/hmw-alignement.md (filtre sprint S3)

↓

P-HMW-DEMO → docs/hmw-demo.md (script démo S6)

↓

P-HMW-JURY → docs/hmw-jury.md (préparation soutenance)

**Règle d'or** : ouvrez docs/hmw-definitif.md, docs/backlog-s3.md et docs/metriques-succes.md avant de commencer. Ces trois fichiers sont les inputs de la séquence.

**PROMPT P-HMW-ALIGNEMENT**

*Input : docs/hmw-definitif.md + docs/backlog-s3.md* *Output : docs/hmw-alignement.md*

Ouvrez docs/hmw-definitif.md ET docs/backlog-s3.md. Copiez les sections demandées et remplacez les [CROCHETS]. Nouvelle conversation Claude.ai recommandée.

Tu es un expert en Product Management et en priorisation de sprints pour des projets d'innovation sociale en Afrique de l'Ouest.

Voici notre HMW définitif (docs/hmw-definitif.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE hmw-definitif.md]

Voici notre backlog S3 (docs/backlog-s3.md) :

[COPIEZ ICI TOUTES LES USER STORIES DE VOTRE backlog-s3.md]

Pour chaque user story, évalue son alignement avec le HMW définitif sur 3 critères :

* PERSONA : est-ce que la story concerne directement le persona du HMW ? (0-2)
* PROBLÈME : est-ce que la story adresse le problème central du HMW ? (0-2)
* CONTEXTE : est-ce que la story respecte les contraintes du HMW ? (0-2)

Score total sur 6. Recommandation :

* 5-6 : CONSTRUIRE en priorité absolue S3
* 3-4 : CONSTRUIRE si le temps le permet
* 0-2 : REPORTER en roadmap post-MVP

Génère ensuite la liste des user stories à construire en S3 dans l'ordre exact de priorité.

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Alignement HMW — Backlog S3 — [NOM DE VOTRE ÉQUIPE]**

**HMW Définitif**

[votre HMW]

**Tableau d'Alignement**

| **US** | **Story résumée** | **Persona /2** | **Problème /2** | **Contexte /2** | **Total /6** | **Décision** |
| --- | --- | --- | --- | --- | --- | --- |
| US-01 | [résumé court] | /2 | /2 | /2 | /6 | [CONSTRUIRE / REPORTER] |
| US-02 | [résumé court] | /2 | /2 | /2 | /6 | [CONSTRUIRE / REPORTER] |
| US-03 | [résumé court] | /2 | /2 | /2 | /6 | [CONSTRUIRE / REPORTER] |
| US-04 | [résumé court] | /2 | /2 | /2 | /6 | [CONSTRUIRE / REPORTER] |

**Sprint S3 — Ordre de construction**

1. [US avec score le plus élevé] — Score : /6
2. [US suivante] — Score : /6
3. [US suivante si temps disponible] — Score : /6

**User Stories Reportées**

* [US reportée] → Score [X/6] → Raison : [lien manquant avec le HMW]

**Décision de sprint**

En S3, l'équipe [NOM] construira [X] user stories dans cet ordre. La démo S6 prouvera le HMW si [US-01] fonctionne en live.

**Test sur NiayesBiz — ce que le prompt génère**

| **US** | **Story résumée** | **Persona /2** | **Problème /2** | **Contexte /2** | **Total /6** | **Décision** |
| --- | --- | --- | --- | --- | --- | --- |
| US-01 | SMS prix matin avant 7h | 2 | 2 | 2 | **6/6** | CONSTRUIRE |
| US-02 | Code légume standardisé | 2 | 2 | 2 | **6/6** | CONSTRUIRE |
| US-03 | Confirmation lecture par SMS | 2 | 1 | 2 | **5/6** | CONSTRUIRE |
| US-04 | Maraîcher signale son stock | 2 | 0 | 1 | **3/6** | REPORTER |

**Sprint S3 — Ordre de construction**

1. US-01 — SMS prix matinal — Score : 6/6
2. US-02 — Code légume standardisé — Score : 6/6
3. US-03 — Confirmation lecture — Score : 5/6

**User Stories Reportées**

* US-04 → Score 3/6 → Le HMW parle de négocier, pas de vendre — hors scope MVP

**Décision de sprint** En S3, NiayesBiz construira 3 user stories dans cet ordre. La démo S6 prouvera le HMW si US-01 fonctionne en live avec un vrai feature phone.

**Workflow GitHub — commit docs/hmw-alignement.md**

**Étape 1** — Ouvrez votre dépôt GET409-[NomEquipe] sur github.com **Étape 2** — Entrez dans le dossier docs **Étape 3** — Cliquez "Add file" → "Create new file" **Étape 4** — Nommez : hmw-alignement.md ⚠️ Minuscules, sans espace **Étape 5** — Collez le résultat du prompt **Étape 6** — Message de commit : docs: ajout hmw-alignement.md - Alignement HMW vs Backlog S3 [NomEquipe] **Étape 7** — Vérifiez : hmw-alignement.md apparaît dans docs/

**PROMPT P-HMW-DEMO**

*Input : docs/hmw-definitif.md + docs/metriques-succes.md* *Output : docs/hmw-demo.md*

Ouvrez docs/hmw-definitif.md ET docs/metriques-succes.md. Copiez les sections demandées et remplacez les [CROCHETS]. Ce prompt peut s'utiliser en continuation ou nouvelle conversation.

Tu es un expert en démonstration de produits no-code et en storytelling de projets d'innovation sociale pour des jurys académiques et professionnels.

Voici notre HMW définitif (docs/hmw-definitif.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE hmw-definitif.md]

Voici nos métriques de succès (docs/metriques-succes.md) :

[COPIEZ ICI LES SECTIONS Métrique Nord, Métriques de Progression ET Tableau de Bord S6 DE VOTRE metriques-succes.md]

Notre MVP construit : [DESCRIPTION EN 2 PHRASES DE CE QUE VOUS AVEZ CONSTRUIT EN S3-S5] Outils utilisés : [Bolt.new / Dify / SMS API / autre] Durée de la démo S6 : 5 minutes

Génère le script de démonstration S6 qui prouve le HMW en live. Le script doit :

* Partir d'une situation réelle du persona avant le MVP
* Montrer le MVP en action en moins de 3 minutes
* Afficher les métriques réelles vs cibles
* Se terminer par une réponse directe au HMW

Formule chaque action comme une instruction précise : ce que le présentateur dit, ce qu'il montre, ce que le jury voit.

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Script Démo S6 — [NOM DE VOTRE ÉQUIPE]**

**HMW à prouver**

[votre HMW définitif]

**Matériel nécessaire**

* [appareil 1 — ex: feature phone avec SIM]
* [appareil 2 — ex: laptop avec Dify ouvert]
* [données réelles à avoir prêtes]

**Script — 5 minutes chrono**

**Bloc 1 — La situation avant · 45 secondes**

**Dire :** "[texte exact à prononcer]" **Montrer :** [ce qu'on affiche à l'écran ou en main] **Le jury voit :** [ce qui se passe visuellement]

**Bloc 2 — Le MVP en action · 2 minutes 30**

**Dire :** "[texte exact]" **Montrer :** [action précise] **Le jury voit :** [résultat visible]

**Bloc 3 — Les métriques réelles · 1 minute**

**Dire :** "[texte exact]" **Montrer :** [tableau de bord ou slide] **Le jury voit :** [données réelles vs cibles]

**Bloc 4 — La réponse au HMW · 45 secondes**

**Dire :** "[texte exact — la phrase qui prouve le HMW]" **Montrer :** [élément visuel final] **Le jury voit :** [impact mesurable]

**Questions jury anticipées**

* Q : [question probable] → R : [réponse en 2 phrases]
* Q : [question probable] → R : [réponse en 2 phrases]

**Signal de succès de la démo**

La démo est réussie si : [critère observable en live]

**Test sur NiayesBiz — ce que le prompt génère**

**Matériel nécessaire**

* Feature phone Nokia (ou Android basique) avec SIM active
* Laptop avec Dify ouvert — agent SMS configuré
* Données réelles : prix tomate et oignon du marché Thiaroye du matin
* Capture d'écran des 10 SMS envoyés aux maraîchers pilotes

**Script — 5 minutes**

**Bloc 1 — La situation avant · 45 sec** Dire : "Abdoulaye se lève à 5h30. Les Bana-Bana arrivent à 8h. Il a 2h30 pour décider à quel prix il va vendre ses tomates. Avant GreenSprint, il n'avait aucune donnée. Il acceptait le premier prix proposé." Montrer : photo d'Abdoulaye dans son champ — projetée Le jury voit : le contexte humain du problème

**Bloc 2 — Le MVP en action · 2 min 30** Dire : "À 6h15 ce matin, notre agent Dify a collecté les prix du marché Thiaroye et envoyé ce SMS à 14 maraîchers." Montrer : le SMS reçu sur le feature phone — lu à voix haute : "T 480 FCFA/kg · O 220 FCFA/kg · Thiaroye 03/06" Le jury voit : un vrai SMS sur un vrai téléphone à 5000 FCFA

Dire : "Abdoulaye a reçu ce SMS. Il a appelé le Bana-Bana qui lui proposait 380 FCFA/kg pour la tomate. Il a cité notre prix. Le Bana-Bana a monté à 430 FCFA/kg." Montrer : le journal de bord d'Abdoulaye — photo de la transaction Le jury voit : une preuve terrain réelle

**Bloc 3 — Les métriques réelles · 1 min** Dire : "Sur 30 jours, voici nos résultats." Montrer : tableau de bord — 3 chiffres Le jury voit :

* Métrique Nord : 62% des maraîchers ont négocié un meilleur prix (cible : 60%) ✅
* Utilisateurs actifs : 14/20 à J+30 (cible : 15) ⚠️
* Alerte A2 non déclenchée — données prix fiables ✅

**Bloc 4 — La réponse au HMW · 45 sec** Dire : "Notre HMW était : comment aider les maraîchers des Niayes à recevoir un prix fiable par SMS pour négocier à armes égales. La réponse : un SMS par jour, le légume et l'unité précisés, envoyé avant 7h. 62% de nos utilisateurs ont obtenu un meilleur prix. Abdoulaye négocie. Le HMW est prouvé." Montrer : le HMW définitif affiché + le chiffre 62% Le jury voit : la promesse du début honorée avec des données réelles

**Questions jury anticipées**

* Q : "Comment vous assurez-vous que les prix sont fiables ?" R : "Nous croisons deux sources — marché Thiaroye et marché Sandaga. Si l'écart dépasse 10%, l'alerte A2 se déclenche et on n'envoie pas le SMS ce jour-là."
* Q : "Que se passe-t-il si les Bana-Bana s'adaptent ?" R : "C'est notre Hypothèse I1 dans hypotheses-validation.md. Sur 30 jours, aucun refus de négocier n'a été signalé. Le rapport de force change progressivement."

**Signal de succès** La démo est réussie si : un jury membre peut lire le SMS sur le feature phone et comprendre le prix sans explication supplémentaire.

**Workflow GitHub — commit docs/hmw-demo.md**

**Étape 1** — Entrez dans le dossier docs de votre dépôt **Étape 2** — Cliquez "Add file" → "Create new file" **Étape 3** — Nommez : hmw-demo.md ⚠️ Minuscules, sans espace **Étape 4** — Collez le résultat du prompt **Étape 5** — Message de commit : docs: ajout hmw-demo.md - Script démo S6 [NomEquipe] **Étape 6** — Vérifiez : hmw-demo.md apparaît dans docs/

**PROMPT P-HMW-JURY**

*Input : docs/hmw-definitif.md + docs/vpc-connections.md* *Output : docs/hmw-jury.md*

Ouvrez docs/hmw-definitif.md ET docs/vpc-connections.md. Ce prompt se construit idéalement après avoir lu tous vos livrables S2. Nouvelle conversation Claude.ai.

Tu es un expert en préparation de soutenances académiques et professionnelles pour des projets d'innovation sociale. Tu connais les questions types des jurys de Master en gestion de projets digitaux en Afrique de l'Ouest.

Voici notre HMW définitif (docs/hmw-definitif.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE hmw-definitif.md]

Voici notre traçabilité 6 Chapeaux → VPC (docs/vpc-connections.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE vpc-connections.md]

Notre projet : [NOM + DESCRIPTION EN 1 PHRASE] Notre secteur : [SECTEUR] Niveau de la soutenance : Master · Swiss UMEF University Dakar

Génère les 5 questions les plus probables d'un jury sur notre HMW, avec pour chacune :

* La question exacte telle qu'un jury la poserait
* Pourquoi le jury pose cette question (ce qu'il teste)
* La réponse traçable depuis nos livrables GitHub
* Le fichier GitHub à ouvrir pour prouver la réponse

Puis génère 2 questions pièges — celles que l'équipe redoute — avec la stratégie pour y répondre sans perdre la face.

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Préparation Jury — HMW — [NOM DE VOTRE ÉQUIPE]**

**HMW Définitif**

[votre HMW]

**Les 5 Questions Probables**

**Question 1**

**Le jury demande :** "[question exacte]" **Ce qu'il teste :** [compétence ou rigueur évaluée] **Votre réponse :** [réponse en 3-4 phrases] **Fichier à ouvrir :** docs/[fichier].md — section [section précise]

**Question 2**

[même structure]

**Question 3**

[même structure]

**Question 4**

[même structure]

**Question 5**

[même structure]

**Les 2 Questions Pièges**

**Piège 1**

**Le jury demande :** "[question déstabilisante]" **Pourquoi c'est un piège :** [ce que le jury cherche vraiment] **Stratégie de réponse :** [comment répondre sans se défausser] **Phrase d'ouverture :** "[première phrase à dire]"

**Piège 2**

[même structure]

**Réflexe en soutenance**

Si vous ne savez pas répondre : "[phrase à dire pour gagner du temps et revenir sur les données]"

**Test sur NiayesBiz — ce que le prompt génère**

**Question 1** Le jury demande : "Pourquoi un SMS et pas une application mobile ?" Ce qu'il teste : la connaissance du persona et la rigueur des contraintes Votre réponse : "Notre Chapeau Blanc a établi qu'Abdoulaye utilise exclusivement un feature phone. Cette contrainte est documentée dans contraintes-mvp.md — Contrainte C1 : le MVP DOIT fonctionner sans connexion data. Toute solution nécessitant un smartphone élimine 80% de nos utilisateurs cibles dès le départ." Fichier à ouvrir : docs/contraintes-mvp.md — section Contrainte 1

**Question 2** Le jury demande : "Comment garantissez-vous la fiabilité des prix ?" Ce qu'il teste : la robustesse de la solution face aux risques terrain Votre réponse : "C'est notre Hypothèse C2 dans hypotheses-validation.md. Nous croisons deux sources de prix — marchés Thiaroye et Sandaga. Si l'écart dépasse 10%, l'alerte A2 de metriques-succes.md se déclenche et le SMS n'est pas envoyé ce jour-là. Sur 30 jours, cette alerte n'a pas été déclenchée." Fichier à ouvrir : docs/hypotheses-validation.md — Hypothèse C2

**Question 3** Le jury demande : "Quel est votre modèle économique ?" Ce qu'il teste : la viabilité long terme au-delà du MVP Votre réponse : "Notre MVP S2-S5 valide l'hypothèse d'usage avant le modèle économique — c'est la méthodologie lean startup. Notre Chapeau Jaune (chapeaux-bono.md) a identifié 3 modèles possibles : abonnement mensuel maraîcher, partenariat opérateur télécom, ou financement ONG agricole. Nous présenterons le modèle retenu en soutenance finale." Fichier à ouvrir : docs/chapeaux-bono.md — section Chapeau Jaune

**Question 4** Le jury demande : "En quoi votre solution est-elle différente des services d'information agricole existants au Sénégal ?" Ce qu'il teste : la connaissance du marché et le positionnement Votre réponse : "Les solutions existantes (e-agriculture, mLouma) ciblent des utilisateurs avec smartphone. Notre différenciateur est documenté dans vpc-connections.md : notre Pain Reliever #1 adresse spécifiquement le moment de la transaction — pas l'information générale sur les prix, mais le prix précis avec unité au moment exact de la négociation." Fichier à ouvrir : docs/vpc-connections.md — section Pain Relievers

**Question 5** Le jury demande : "Qu'est-ce qui change pour Abdoulaye concrètement ?" Ce qu'il teste : l'impact réel et mesurable sur le persona Votre réponse : "Notre Métrique Nord dans metriques-succes.md mesure exactement ça : 62% de nos maraîchers pilotes ont obtenu un prix supérieur au premier prix proposé par les Bana-Bana. La valeur moyenne récupérée est de 18% par transaction. Sur une récolte de 500 kg de tomates, c'est environ 43 000 FCFA supplémentaires par vente." Fichier à ouvrir : docs/metriques-succes.md — Métrique Nord

**Piège 1** Le jury demande : "Les Bana-Bana vont s'adapter et contourner votre système. Comment gérez-vous ça ?" Pourquoi c'est un piège : le jury teste si l'équipe a pensé aux acteurs qui résistent au changement — une faiblesse classique des projets sociaux Stratégie : reconnaître le risque, montrer qu'il est documenté, ne pas prétendre avoir la solution finale Phrase d'ouverture : "C'est effectivement notre risque le plus important — il est documenté dans hypotheses-validation.md comme Hypothèse I1. Sur 30 jours de test, voici ce qu'on a observé..."

**Piège 2** Le jury demande : "Pourquoi n'avez-vous pas interviewé des Bana-Bana ?" Pourquoi c'est un piège : le jury teste si l'équipe a une vision complète du système — pas seulement du côté utilisateur Stratégie : assumer la limite, expliquer le choix méthodologique S1, ouvrir sur la suite Phrase d'ouverture : "Vous avez raison — notre S1 a priorisé les maraîchers parce que notre HMW les cible directement. Les Bana-Bana sont dans notre Chapeau Noir comme acteurs de résistance. Les interviewer est dans notre roadmap post-MVP pour comprendre comment co-construire avec eux."

**Réflexe en soutenance** "Bonne question — laissez-moi ouvrir le fichier correspondant dans notre dépôt GitHub pour vous montrer comment on a documenté ça."

**Workflow GitHub — commit docs/hmw-jury.md**

**Étape 1** — Entrez dans le dossier docs de votre dépôt **Étape 2** — Cliquez "Add file" → "Create new file" **Étape 3** — Nommez : hmw-jury.md ⚠️ Minuscules, sans espace **Étape 4** — Collez le résultat du prompt **Étape 5** — Message de commit : docs: ajout hmw-jury.md - Préparation jury soutenance [NomEquipe] **Étape 6** — Vérifiez : hmw-jury.md apparaît dans docs/

**RÉCAPITULATIF — Dossier docs/ complet après S2**

docs/

├── fiche-equipe.md ← S1

├── guide-interview.md ← S1

├── carte-empathie.md ← S1

│

├── chapeaux-bono.md ← S2 · 6 Chapeaux · insights bruts

├── contraintes-mvp.md ← S2 · 6 Chapeaux · ce qu'on ne peut pas ignorer

├── hypotheses-validation.md ← S2 · 6 Chapeaux · ce qu'on valide en S3

├── metriques-succes.md ← S2 · 6 Chapeaux · ce qu'on mesure en S6

│

├── vpc.md ← S2 · VPC · Profil Client + Proposition de Valeur

├── vpc-connections.md ← S2 · VPC · traçabilité 6 Chapeaux → VPC

├── backlog-s3.md ← S2 · VPC · user stories S3 prêtes à construire

├── pitch-vpc-draft.md ← S2 · VPC · bloc pitch soutenance

│

├── hmw-definitif.md ← S2 · HMW · décision de projet

├── hmw-alignement.md ← S2 · HMW · filtre sprint S3

├── hmw-demo.md ← S2 · HMW · script démo S6

└── hmw-jury.md ← S2 · HMW · préparation soutenance

**La chaîne de décision complète**

S1 — Observer → carte-empathie.md

S2 — Explorer → chapeaux-bono.md + contraintes + hypotheses + metriques

S2 — Aligner → vpc.md + connections + backlog + pitch

S2 — Décider → hmw-definitif.md + alignement + demo + jury

S3-S5 — Construire → backlog-s3.md (user stories MUST)

S6 — Prouver → hmw-demo.md + metriques-succes.md

Soutenance — Défendre → hmw-jury.md + vpc-connections.md

**Réponse à n'importe quelle question jury en 4 fichiers**

**"Pourquoi cette fonctionnalité ?"** backlog-s3.md → vpc.md → vpc-connections.md → chapeaux-bono.md

**"Pourquoi ce HMW ?"** hmw-definitif.md → hypotheses-validation.md → chapeaux-bono.md

**"Est-ce que ça marche ?"** hmw-demo.md → metriques-succes.md → hypotheses-validation.md

**"Et si ça échoue ?"** hmw-jury.md → hypotheses-validation.md → contraintes-mvp.md

**Checklist finale HMW — avant S3**

* [ ] docs/hmw-definitif.md commité
* [ ] docs/hmw-alignement.md commité — ordre de construction S3 validé
* [ ] docs/hmw-demo.md commité — script démo S6 prêt
* [ ] docs/hmw-jury.md commité — 5 questions + 2 pièges préparés
* [ ] README.md mis à jour avec lien vers hmw-alignement.md

*M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026*