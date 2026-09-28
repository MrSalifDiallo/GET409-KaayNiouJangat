**Prompts 6 Chapeaux — Séquence Avancée**

GET 409 · Lab Sprint S2 · Swiss UMEF University Dakar · M. Malick Faye Diagne

**LOGIQUE DE LA SÉQUENCE**

Ces 3 prompts s'utilisent **après P-CHAPEAUX**, dans la même session de travail. Ils transforment les insights bruts en livrables directement exploitables pour S3 et S6.

P-CHAPEAUX → docs/chapeaux-bono.md (insights bruts)

↓

P-CHAPEAUX-CONTRAINTES → docs/contraintes-mvp.md (ce qu'on ne peut pas ignorer)

↓

P-CHAPEAUX-HYPOTHESES → docs/hypotheses-validation.md (ce qu'on valide en S3)

↓

P-CHAPEAUX-METRIQUES → docs/metriques-succes.md (ce qu'on mesure en S6)

**Règle d'or** : chaque prompt prend en entrée le fichier commité du prompt précédent. Ne sautez pas d'étape — chaque output nourrit le suivant.

**PROMPT P-CHAPEAUX-CONTRAINTES**

*Input : docs/chapeaux-bono.md · Output : docs/contraintes-mvp.md*

Ouvrez docs/chapeaux-bono.md. Copiez la section Chapeau Blanc. Remplacez les [CROCHETS] et envoyez dans Claude.ai.

Tu es un expert en Product Management pour des projets d'innovation sociale en Afrique de l'Ouest. Tu travailles sur des MVPs destinés à des utilisateurs sans smartphone dans des zones rurales.

Voici les faits identifiés lors de notre session 6 Chapeaux de Bono (Chapeau Blanc — Faits & Données) :

[COPIEZ ICI LE CONTENU DE LA SECTION CHAPEAU BLANC DE VOTRE chapeaux-bono.md]

Et voici les risques identifiés (Chapeau Noir — Risques & Critique) :

[COPIEZ ICI LE CONTENU DE LA SECTION CHAPEAU NOIR DE VOTRE chapeaux-bono.md]

À partir de ces éléments, génère la liste des contraintes non négociables de notre MVP. Pour chaque contrainte :

* Formule-la comme un critère d'acceptation (format : "Le MVP DOIT / NE DOIT PAS...")
* Indique son origine (Chapeau Blanc ou Chapeau Noir)
* Indique ce qu'elle élimine concrètement comme fonctionnalité

Puis ajoute une section "Fonctionnalités éliminées" listant ce qu'on ne construira PAS dans le MVP et pourquoi.

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Contraintes MVP — [NOM DE VOTRE ÉQUIPE]**

**Persona**

[PRÉNOM, PROFESSION, LOCALISATION, ÉQUIPEMENT DIGITAL]

**Contraintes Non Négociables**

**Contrainte 1**

**Critère :** Le MVP DOIT [...] **Origine :** Chapeau [Blanc / Noir] **Élimine :** [fonctionnalité ou approche à supprimer]

**Contrainte 2**

[même structure]

**Contrainte 3**

[même structure]

[autant de contraintes que nécessaire]

**Fonctionnalités Éliminées**

* [fonctionnalité] → éliminée parce que [raison liée aux contraintes]
* [fonctionnalité] → éliminée parce que [raison liée aux contraintes]

**Critère de Validation Final**

Le MVP est valide si et seulement si : [1 phrase synthétique]

**Test sur NiayesBiz — ce que le prompt génère**

**Contrainte 1** Critère : Le MVP DOIT fonctionner via SMS sur feature phone sans connexion data Origine : Chapeau Blanc (Abdoulaye n'a pas de smartphone) Élimine : application mobile, interface web, notifications push

**Contrainte 2** Critère : Le MVP DOIT inclure le légume ET l'unité de mesure dans chaque message Origine : Chapeau Noir (ambiguïté de l'unité = SMS inutilisable pour négocier) Élimine : SMS avec prix seul, prix sans contexte légume/unité

**Contrainte 3** Critère : Le MVP DOIT envoyer le prix avant 7h — avant l'arrivée des Bana-Bana Origine : Chapeau Noir (prix reçu après la transaction = inutile) Élimine : alertes à la demande uniquement, prix en temps réel non planifié

**Fonctionnalités Éliminées**

* Application mobile → éliminée (Abdoulaye n'a pas de smartphone)
* Tableau de bord web maraîcher → éliminé (pas de connexion internet)
* Système de notation des Bana-Bana → éliminé (hors scope MVP, risque social)

**Critère de validation final** Le MVP est valide si Abdoulaye peut citer un prix précis (légume + unité + montant) face à un Bana-Bana avant que la transaction commence.

**Workflow GitHub — commit docs/contraintes-mvp.md**

**Étape 1** — Ouvrez votre dépôt GET409-[NomEquipe] sur github.com **Étape 2** — Entrez dans le dossier docs **Étape 3** — Cliquez "Add file" → "Create new file" **Étape 4** — Nommez : contraintes-mvp.md ⚠️ Minuscules, sans espace **Étape 5** — Collez le résultat du prompt **Étape 6** — Message de commit : docs: ajout contraintes-mvp.md - Contraintes MVP issues des 6 Chapeaux [NomEquipe] **Étape 7** — Vérifiez : contraintes-mvp.md apparaît dans docs/

**PROMPT P-CHAPEAUX-HYPOTHESES**

*Input : docs/chapeaux-bono.md · Output : docs/hypotheses-validation.md*

Ouvrez docs/chapeaux-bono.md. Copiez la section Chapeau Noir ET la Synthèse. Utilisez dans la même conversation que P-CHAPEAUX-CONTRAINTES ou ouvrez-en une nouvelle.

Tu es un expert en lean startup et en validation d'hypothèses pour des projets d'innovation sociale en Afrique de l'Ouest.

Voici les risques identifiés lors de notre session 6 Chapeaux de Bono (Chapeau Noir — Risques & Critique) :

[COPIEZ ICI LE CONTENU DE LA SECTION CHAPEAU NOIR DE VOTRE chapeaux-bono.md]

Et voici notre synthèse Chapeau Bleu :

[COPIEZ ICI LE CONTENU DE LA SECTION SYNTHÈSE CHAPEAU BLEU DE VOTRE chapeaux-bono.md]

Transforme chaque risque en hypothèse testable. Pour chaque hypothèse :

* Formule-la sous la forme "Nous croyons que [affirmation]. Nous le saurons si [indicateur mesurable]."
* Indique la méthode de validation la plus rapide (entretien terrain / test SMS / observation / autre)
* Indique qui valide (maraîcher / acheteur / expert local / autre)
* Indique le délai réaliste de validation en S3

Classe les hypothèses par criticité décroissante : CRITIQUE (bloque le MVP si fausse) → IMPORTANTE (dégrade l'expérience) → SECONDAIRE (amélioration future)

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Hypothèses de Validation — [NOM DE VOTRE ÉQUIPE]**

**HMW Définitif**

[votre HMW définitif]

**Hypothèses CRITIQUES**

*(Si fausse → le MVP ne fonctionne pas)*

**Hypothèse C1**

**Affirmation :** Nous croyons que [...] **Indicateur :** Nous le saurons si [...] **Méthode :** [entretien / test / observation] **Qui valide :** [profil] **Délai S3 :** [nombre de jours / semaines]

[autant d'hypothèses critiques que nécessaire]

**Hypothèses IMPORTANTES**

*(Si fausse → l'expérience est dégradée mais le MVP reste utilisable)*

**Hypothèse I1**

[même structure]

**Hypothèses SECONDAIRES**

*(À valider après le MVP)*

**Hypothèse S1**

[même structure]

**Priorité de Validation S3**

La première chose à tester en S3 : [hypothèse C1 reformulée en 1 phrase d'action]

**Test sur NiayesBiz — ce que le prompt génère**

**Hypothèse C1 — CRITIQUE** Affirmation : Nous croyons qu'Abdoulaye comprend et utilise un SMS avec code légume standardisé (T=Tomate, O=Oignon) sans formation préalable. Indicateur : Nous le saurons si 3 maraîchers sur 5 interprètent correctement un SMS test en moins de 30 secondes. Méthode : Test terrain — envoi d'un SMS prototype à 5 maraîchers de Sébikhane Qui valide : Maraîchers de la zone des Niayes Délai S3 : Semaine 1

**Hypothèse C2 — CRITIQUE** Affirmation : Nous croyons que le prix du marché de Dakar est stable sur une fenêtre de 3 heures — suffisante pour qu'Abdoulaye reçoive le SMS avant 7h et l'utilise lors de la transaction matinale. Indicateur : Nous le saurons si les prix du marché Thiaroye varient de moins de 10% entre 6h et 9h sur 5 jours consécutifs. Méthode : Observation des prix du marché de gros de Dakar Qui valide : Enquêteur terrain ou partenaire local Délai S3 : Semaine 1-2

**Hypothèse I1 — IMPORTANTE** Affirmation : Nous croyons que les Bana-Bana acceptent de négocier quand Abdoulaye cite un prix de référence externe. Indicateur : Nous le saurons si au moins 2 maraîchers rapportent avoir obtenu un prix supérieur au premier prix proposé après avoir cité notre SMS. Méthode : Entretien de suivi post-transaction Qui valide : Maraîchers ayant utilisé le service Délai S3 : Semaine 3-4

**Priorité de validation S3** Tester immédiatement : envoyer un SMS prototype à 5 maraîchers et mesurer s'ils comprennent le code légume sans explication.

**Workflow GitHub — commit docs/hypotheses-validation.md**

**Étape 1** — Entrez dans le dossier docs de votre dépôt **Étape 2** — Cliquez "Add file" → "Create new file" **Étape 3** — Nommez : hypotheses-validation.md ⚠️ Minuscules, sans espace **Étape 4** — Collez le résultat du prompt **Étape 5** — Message de commit : docs: ajout hypotheses-validation.md - Hypothèses issues des 6 Chapeaux [NomEquipe] **Étape 6** — Vérifiez : hypotheses-validation.md apparaît dans docs/

**PROMPT P-CHAPEAUX-METRIQUES**

*Input : docs/chapeaux-bono.md · Output : docs/metriques-succes.md*

Ouvrez docs/chapeaux-bono.md. Copiez la section Chapeau Jaune. Ce prompt peut s'utiliser en continuation ou dans une nouvelle conversation.

Tu es un expert en mesure d'impact pour des projets d'innovation sociale en Afrique de l'Ouest. Tu travailles sur la définition de métriques simples, mesurables sur le terrain, adaptées à des contextes de ressources limitées.

Voici la valeur et les opportunités identifiées lors de notre session 6 Chapeaux de Bono (Chapeau Jaune — Optimisme & Valeur) :

[COPIEZ ICI LE CONTENU DE LA SECTION CHAPEAU JAUNE DE VOTRE chapeaux-bono.md]

Notre HMW définitif : [VOTRE HMW DÉFINITIF] Notre persona : [PRÉNOM, PROFESSION, LOCALISATION] Notre MVP : [DESCRIPTION EN 2 PHRASES]

Génère les métriques de succès de notre MVP sur 3 niveaux :

* MÉTRIQUE NORD (1 seule) : l'indicateur unique qui dit si le MVP fonctionne
* MÉTRIQUES DE PROGRESSION (3 max) : les signaux faibles qui montrent qu'on avance
* MÉTRIQUES D'ALERTE (2 max) : les signaux qui indiquent que quelque chose ne va pas

Pour chaque métrique :

* Formule-la de façon simple et mesurable sur le terrain
* Donne la valeur cible réaliste à 30 jours
* Indique comment la mesurer sans technologie complexe

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Métriques de Succès — [NOM DE VOTRE ÉQUIPE]**

**MVP**

[description courte]

**⭐ Métrique Nord**

**Indicateur :** [1 indicateur unique] **Valeur cible à 30 jours :** [chiffre réaliste] **Comment mesurer :** [méthode terrain simple]

**📈 Métriques de Progression**

**Métrique P1**

**Indicateur :** [indicateur] **Valeur cible à 30 jours :** [chiffre] **Comment mesurer :** [méthode]

**Métrique P2**

[même structure]

**Métrique P3**

[même structure]

**🚨 Métriques d'Alerte**

**Alerte A1**

**Signal :** [ce qui indique un problème] **Seuil :** [valeur à partir de laquelle on agit] **Action corrective :** [ce qu'on fait immédiatement]

**Alerte A2**

[même structure]

**Tableau de Bord S6**

À la démo S6, nous présenterons ces 3 chiffres :

1. [Métrique Nord — valeur réelle vs cible]
2. [Métrique P1 — valeur réelle vs cible]
3. [Alerte A1 — déclenchée ou non]

**Test sur NiayesBiz — ce que le prompt génère**

**⭐ Métrique Nord** Indicateur : % de maraîchers ayant obtenu un prix supérieur au premier prix Bana-Bana proposé après avoir reçu notre SMS Valeur cible à 30 jours : 60% des utilisateurs actifs Comment mesurer : appel téléphonique post-transaction hebdomadaire avec 10 maraîchers pilotes

**📈 Métrique P1** Indicateur : Nombre de maraîchers qui ouvrent et lisent le SMS quotidien Valeur cible à 30 jours : 15 maraîchers actifs sur 20 inscrits Comment mesurer : confirmation de lecture via réponse SMS (code simple : "OK" = lu)

**📈 Métrique P2** Indicateur : Taux de SMS avec unité correctement interprétée par le maraîcher Valeur cible à 30 jours : 90% de compréhension correcte du code légume Comment mesurer : test terrain hebdomadaire — 5 maraîchers, 1 SMS prototype

**📈 Métrique P3** Indicateur : Nombre de transactions où le maraîcher a cité notre prix comme référence Valeur cible à 30 jours : 10 transactions documentées Comment mesurer : carnet de bord tenu par 2 maraîchers volontaires

**🚨 Alerte A1** Signal : Moins de 5 maraîchers actifs sur 20 inscrits à J+15 Seuil : < 25% d'utilisation active Action corrective : entretien terrain immédiat pour comprendre le frein — format SMS ? Horaire ? Langue ?

**🚨 Alerte A2** Signal : Prix transmis contredits par les Bana-Bana dans plus de 30% des transactions Seuil : > 3 cas signalés en 1 semaine Action corrective : vérifier la source de données prix — changer de source ou ajouter une marge de tolérance

**Tableau de Bord S6**

1. 67% des maraîchers pilotes ont négocié un meilleur prix (cible : 60%) ✅
2. 14/20 maraîchers actifs à J+30 (cible : 15) ⚠️
3. Alerte A2 non déclenchée — données prix fiables ✅

**Workflow GitHub — commit docs/metriques-succes.md**

**Étape 1** — Entrez dans le dossier docs de votre dépôt **Étape 2** — Cliquez "Add file" → "Create new file" **Étape 3** — Nommez : metriques-succes.md ⚠️ Minuscules, sans espace **Étape 4** — Collez le résultat du prompt **Étape 5** — Message de commit : docs: ajout metriques-succes.md - Métriques MVP issues des 6 Chapeaux [NomEquipe] **Étape 6** — Vérifiez : metriques-succes.md apparaît dans docs/

**RÉCAPITULATIF — Dossier docs/ après la phase 6 Chapeaux**

docs/

├── chapeaux-bono.md ← P-CHAPEAUX (insights bruts)

├── contraintes-mvp.md ← P-CHAPEAUX-CONTRAINTES (ce qu'on ne peut pas ignorer)

├── hypotheses-validation.md ← P-CHAPEAUX-HYPOTHESES (ce qu'on valide en S3)

└── metriques-succes.md ← P-CHAPEAUX-METRIQUES (ce qu'on mesure en S6)

**Ce que ce dossier représente en soutenance**

Chaque fichier est une **preuve de rigueur** :

* chapeaux-bono.md → "Nous avons exploré le problème sous 6 angles"
* contraintes-mvp.md → "Nos choix de MVP ne sont pas arbitraires"
* hypotheses-validation.md → "Nous savions ce qui pouvait échouer et nous l'avons testé"
* metriques-succes.md → "Nous avons des données pour prouver que ça marche"

**Question jury typique :** "Pourquoi avez-vous choisi cette fonctionnalité plutôt qu'une autre ?" **Réponse avec ce dossier :** "Contrainte C2 dans contraintes-mvp.md — le Chapeau Noir nous a montré que sans l'unité de mesure, le SMS est inutilisable."

**Checklist finale — 4 fichiers sur GitHub avant S3**

* [ ] docs/chapeaux-bono.md commité ✅
* [ ] docs/contraintes-mvp.md commité
* [ ] docs/hypotheses-validation.md commité
* [ ] docs/metriques-succes.md commité
* [ ] README.md mis à jour avec HMW définitif

*M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026*