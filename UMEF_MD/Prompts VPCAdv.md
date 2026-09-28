**Prompts VPC — Séquence Avancée**

GET 409 · Lab Sprint S2 · Swiss UMEF University Dakar · M. Malick Faye Diagne

**LOGIQUE DE LA SÉQUENCE**

Ces 3 prompts s'utilisent **après P-VPC-1 et P-VPC-2**, dans l'ordre indiqué. Ils transforment le VPC en livrables directement exploitables pour S3 et la soutenance.

P-VPC-1 + P-VPC-2 → docs/vpc.md (Profil Client + Proposition de Valeur)

↓

P-VPC-CONNECTIONS → docs/vpc-connections.md (traçabilité 6 Chapeaux → VPC)

↓

P-VPC-BACKLOG → docs/backlog-s3.md (user stories S3 prêtes à construire)

↓

P-VPC-PITCH → intégré dans docs/pitch-soutenance.md en S6

**Règle d'or** : ouvrez docs/vpc.md et docs/chapeaux-bono.md avant de commencer. Ces deux fichiers sont les inputs de toute la séquence.

**PROMPT P-VPC-CONNECTIONS**

*Input : docs/vpc.md + docs/chapeaux-bono.md* *Output : docs/vpc-connections.md*

Ouvrez docs/vpc.md ET docs/chapeaux-bono.md côte à côte. Copiez les sections demandées et remplacez les [CROCHETS]. Envoyez dans Claude.ai — nouvelle conversation recommandée.

Tu es un expert en Design Thinking et en traçabilité de décisions produit pour des projets d'innovation sociale en Afrique de l'Ouest.

Voici notre Value Proposition Canvas (docs/vpc.md) :

PROFIL CLIENT : [COPIEZ ICI LES SECTIONS Jobs To Be Done, Pains ET Gains DE VOTRE vpc.md]

PROPOSITION DE VALEUR : [COPIEZ ICI LES SECTIONS Produits & Services, Pain Relievers ET Gain Creators DE VOTRE vpc.md]

Voici nos insights 6 Chapeaux (docs/chapeaux-bono.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE chapeaux-bono.md]

Pour chaque élément du VPC (Jobs, Pains, Gains, Pain Relievers, Gain Creators), identifie quel chapeau l'a révélé ou confirmé. Si un élément du VPC n'a pas d'origine traçable dans les 6 Chapeaux, signale-le comme "Non tracé — à valider en interview S3".

Génère ensuite une synthèse de cohérence : est-ce que le VPC est aligné avec ce que les 6 Chapeaux ont révélé, ou y a-t-il des tensions ?

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Connexions 6 Chapeaux → VPC — [NOM DE VOTRE ÉQUIPE]**

**Profil Client — Origines**

**Jobs To Be Done**

| **Job** | **Chapeau d'origine** | **Citation exacte** |
| --- | --- | --- |
| [job 1] | Chapeau [couleur] | "[extrait du chapeaux-bono.md]" |
| [job 2] | Chapeau [couleur] | "[extrait]" |

**Pains**

| **Pain** | **Chapeau d'origine** | **Citation exacte** |
| --- | --- | --- |
| [pain 1] | Chapeau [couleur] | "[extrait]" |
| [pain 2] | Chapeau [couleur] | "[extrait]" |

**Gains**

| **Gain** | **Chapeau d'origine** | **Citation exacte** |
| --- | --- | --- |
| [gain 1] | Chapeau [couleur] | "[extrait]" |
| [gain 2] | Chapeau [couleur] | "[extrait]" |

**Proposition de Valeur — Origines**

**Pain Relievers**

| **Pain Reliever** | **Pain adressé** | **Chapeau d'origine** |
| --- | --- | --- |
| [reliever 1] | [pain correspondant] | Chapeau [couleur] |
| [reliever 2] | [pain correspondant] | Chapeau [couleur] |

**Gain Creators**

| **Gain Creator** | **Gain adressé** | **Chapeau d'origine** |
| --- | --- | --- |
| [creator 1] | [gain correspondant] | Chapeau [couleur] |
| [creator 2] | [gain correspondant] | Chapeau [couleur] |

**Éléments Non Tracés**

* [élément VPC] → Non tracé — à valider en interview S3

**Synthèse de Cohérence**

**Alignement :** [fort / partiel / à retravailler] **Tension principale :** [1 phrase sur le point de friction entre 6 Chapeaux et VPC] **Recommandation :** [1 action concrète avant S3]

**Test sur NiayesBiz — ce que le prompt génère**

**Jobs To Be Done**

| **Job** | **Chapeau** | **Citation** |
| --- | --- | --- |
| Vendre sa récolte au meilleur prix avant qu'elle pourrisse | Chapeau Blanc | "40% des légumes perdus faute de chaîne du froid" |
| Savoir si le marché de Dakar est porteur avant d'expédier | Chapeau Vert | "Et si le SMS incluait aussi la météo agricole ?" |
| Maintenir sa dignité face aux Bana-Bana | Chapeau Rouge | "Fierté du métier, frustration de ne pas connaître les règles du marché" |

**Pains**

| **Pain** | **Chapeau** | **Citation** |
| --- | --- | --- |
| Ne connaît pas les prix au moment de la transaction | Chapeau Blanc | "Les Bana-Bana fixent les prix à l'oral, sans référence vérifiable" |
| Ne peut pas refuser une offre basse — récolte périssable | Chapeau Noir | "Risque de perdre la récolte si refus de vendre" |
| Ambiguïté de l'unité dans les informations reçues | Chapeau Noir | "Abdoulaye peut mal interpréter un SMS sans unité claire" |

**Éléments Non Tracés**

* "Créer une coopérative de maraîchers informée" → Non tracé — idée de l'équipe, à valider en interview S3

**Synthèse de Cohérence** Alignement : fort Tension principale : Le VPC propose un Gain Creator "réseautage entre maraîchers" qui n'apparaît pas dans les 6 Chapeaux — risque de scope creep en S3. Recommandation : Supprimer "coopérative" du MVP S3, la déplacer en roadmap post-MVP.

**Workflow GitHub — commit docs/vpc-connections.md**

**Étape 1** — Ouvrez votre dépôt GET409-[NomEquipe] sur github.com **Étape 2** — Entrez dans le dossier docs **Étape 3** — Cliquez "Add file" → "Create new file" **Étape 4** — Nommez : vpc-connections.md ⚠️ Minuscules, sans espace **Étape 5** — Collez le résultat du prompt **Étape 6** — Message de commit : docs: ajout vpc-connections.md - Traçabilité 6 Chapeaux vers VPC [NomEquipe] **Étape 7** — Vérifiez : vpc-connections.md apparaît dans docs/

**PROMPT P-VPC-BACKLOG**

*Input : docs/vpc.md + docs/contraintes-mvp.md* *Output : docs/backlog-s3.md*

Ouvrez docs/vpc.md ET docs/contraintes-mvp.md. Copiez les sections demandées et remplacez les [CROCHETS]. Utilisez dans la même conversation ou ouvrez-en une nouvelle.

Tu es un expert en Product Management et en développement no-code pour des projets d'innovation sociale en Afrique de l'Ouest. Tu travailles avec les outils Bolt.new et Dify pour construire des MVPs rapides.

Voici notre Proposition de Valeur (docs/vpc.md) :

PRODUITS & SERVICES : [COPIEZ ICI LA SECTION Produits & Services DE VOTRE vpc.md]

PAIN RELIEVERS : [COPIEZ ICI LA SECTION Pain Relievers DE VOTRE vpc.md]

GAIN CREATORS : [COPIEZ ICI LA SECTION Gain Creators DE VOTRE vpc.md]

FIT CHECK : [COPIEZ ICI LA SECTION FIT Check DE VOTRE vpc.md]

Voici nos contraintes MVP (docs/contraintes-mvp.md) :

[COPIEZ ICI LES SECTIONS Contraintes Non Négociables ET Fonctionnalités Éliminées DE VOTRE contraintes-mvp.md]

Notre HMW définitif : [VOTRE HMW DÉFINITIF] Notre persona : [PRÉNOM, PROFESSION, ÉQUIPEMENT DIGITAL] Outils de construction S3 : Bolt.new (interface no-code) + Dify (agents IA) + GitHub

Transforme la Proposition de Valeur en backlog S3 priorisé. Pour chaque user story :

* Formule-la au format "En tant que [persona], je veux [action] afin de [bénéfice]"
* Indique la priorité (MUST · SHOULD · COULD) selon les contraintes MVP
* Indique l'outil de construction recommandé (Bolt.new / Dify / SMS API / Autre)
* Estime l'effort (faible / moyen / élevé) pour une équipe no-code débutante
* Indique le Pain Reliever ou Gain Creator qu'elle adresse

Classe par priorité décroissante. Les MUST sont les seules à construire en S3.

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Backlog S3 — [NOM DE VOTRE ÉQUIPE]**

**HMW Définitif**

[votre HMW]

**User Stories MUST**

*(À construire obligatoirement en S3)*

**US-01**

**Story :** En tant que [persona], je veux [action] afin de [bénéfice] **Priorité :** MUST **Outil :** [Bolt.new / Dify / SMS API / Autre] **Effort :** [faible / moyen / élevé] **Adresse :** [Pain Reliever ou Gain Creator correspondant] **Critère d'acceptation :** [comment on sait que c'est fait]

**US-02**

[même structure]

**User Stories SHOULD**

*(À construire si le temps le permet)*

**US-03**

[même structure]

**User Stories COULD**

*(Roadmap post-MVP)*

**US-04**

[même structure]

**Sprint S3 — Ce qu'on construit en priorité**

**Semaine 1 :** [US-01 + US-02] **Semaine 2 :** [US-03 si avance] **Démo S6 :** [US à démontrer obligatoirement]

**Test sur NiayesBiz — ce que le prompt génère**

**US-01 — MUST** Story : En tant qu'Abdoulaye, je veux recevoir un SMS avec le prix du marché, le légume et l'unité avant 7h chaque matin afin de négocier avec les Bana-Bana en citant un prix de référence externe. Outil : Dify (agent de récupération de données prix) + SMS API Effort : moyen Adresse : Pain Reliever #1 — "Reçoit le prix de référence par SMS avant la transaction" Critère d'acceptation : Abdoulaye reçoit le SMS entre 6h00 et 7h00 avec format "[Code légume] [Prix] FCFA/[unité] — Marché Thiaroye [date]"

**US-02 — MUST** Story : En tant qu'Abdoulaye, je veux que le SMS utilise un code légume court (T=Tomate, O=Oignon) afin de comprendre l'information sans formation préalable. Outil : Dify (template de message) + Bolt.new (interface admin) Effort : faible Adresse : Pain Reliever #3 — "Ambiguïté de l'unité résolue par code standardisé" Critère d'acceptation : 4 maraîchers sur 5 interprètent correctement le SMS test en moins de 30 secondes sans explication

**US-03 — SHOULD** Story : En tant qu'Abdoulaye, je veux pouvoir répondre "OK" au SMS pour confirmer réception afin que l'équipe sache que le service fonctionne. Outil : SMS API (réception de réponse) Effort : faible Adresse : Métrique P1 (metriques-succes.md) — taux de lecture actif

**US-04 — COULD (roadmap post-MVP)** Story : En tant qu'Abdoulaye, je veux signaler mon stock disponible par SMS afin que les acheteurs de Dakar puissent me contacter directement. Outil : Dify + base de données Effort : élevé Adresse : Gain Creator #3 — "Mini marché en temps réel"

**Sprint S3** Semaine 1 : US-01 (agent Dify + SMS API) + US-02 (template message) Semaine 2 : US-03 (confirmation lecture) + tests terrain Démo S6 : US-01 démontré en live avec un vrai SMS reçu sur un feature phone

**Workflow GitHub — commit docs/backlog-s3.md**

**Étape 1** — Entrez dans le dossier docs de votre dépôt **Étape 2** — Cliquez "Add file" → "Create new file" **Étape 3** — Nommez : backlog-s3.md ⚠️ Minuscules, sans espace **Étape 4** — Collez le résultat du prompt **Étape 5** — Message de commit : docs: ajout backlog-s3.md - User stories S3 issues du VPC [NomEquipe] **Étape 6** — Vérifiez : backlog-s3.md apparaît dans docs/

**PROMPT P-VPC-PITCH**

*Input : docs/vpc.md* *Output : bloc à intégrer dans docs/pitch-soutenance.md en S6*

Ce prompt génère le paragraphe "Proposition de Valeur" du pitch de soutenance. 60 secondes. Utilisable dès S2 pour préparer la démo S6. Envoyez dans une nouvelle conversation Claude.ai.

Tu es un expert en communication de startup et en pitch de projets d'innovation sociale pour des jurys académiques et professionnels en Afrique de l'Ouest.

Voici notre Value Proposition Canvas complet (docs/vpc.md) :

[COPIEZ ICI LE CONTENU COMPLET DE VOTRE vpc.md]

Notre HMW définitif : [VOTRE HMW DÉFINITIF] Notre équipe : [NOM DE L'ÉQUIPE] Notre persona : [PRÉNOM, PROFESSION, LOCALISATION] Durée du bloc pitch : 60 secondes

Génère le bloc "Proposition de Valeur" du pitch de soutenance. Ce bloc doit :

* S'adresser à un jury qui ne connaît pas le projet
* Nommer le persona et son problème en 1 phrase
* Expliquer la solution en 1 phrase sans jargon technique
* Citer 1 Pain Reliever concret avec son impact mesurable
* Citer 1 Gain Creator avec sa valeur pour le persona
* Se terminer par une phrase d'accroche mémorable

Génère 2 versions : une formelle (jury académique) et une directe (investisseur/jury pro).

FORMAT DE SORTIE STRICT — Markdown pur, sans introduction, sans balises ```.

**Pitch Proposition de Valeur — [NOM DE VOTRE ÉQUIPE]**

**Version Formelle · 60 secondes**

[texte du pitch — environ 120 mots]

**Version Directe · 60 secondes**

[texte du pitch — environ 120 mots]

**Phrase d'accroche mémorable**

[1 phrase — celle que le jury retient]

**Mots à éviter**

* [jargon technique à bannir pour ce projet]
* [terme trop vague à remplacer]

**Test sur NiayesBiz — ce que le prompt génère**

**Version Formelle** "Abdoulaye Ndiaye est maraîcher dans la zone des Niayes. Chaque matin, il vend sa récolte à des intermédiaires qui fixent les prix sans transparence — et il ne peut pas refuser, parce que ses légumes pourrissent en 24 heures.

GreenSprint est un service SMS qui envoie à Abdoulaye le prix de référence du marché de Dakar chaque matin avant 7 heures — avec le légume et l'unité précisés. Concrètement : Abdoulaye reçoit 'T 450 FCFA/kg — Thiaroye'. Il cite ce prix face au Bana-Bana. Il récupère en moyenne 20% de marge sur chaque transaction.

Un SMS. Un prix. Un maraîcher qui négocie à armes égales."

**Version Directe** "Un maraîcher sénégalais perd 40% de sa récolte et se fait arnaquer sur les prix — parce qu'il n'a pas de smartphone et pas accès aux données marché.

On lui envoie un SMS chaque matin avec le prix du jour, le légume et l'unité. Il peut négocier. Nos tests montrent 20% de marge récupérée par transaction.

Le marché cible : 30 000 maraîchers dans les Niayes. Le MVP fonctionne sur n'importe quel téléphone à 5 000 FCFA."

**Phrase d'accroche mémorable** "Un SMS. Un prix. Un maraîcher qui négocie à armes égales."

**Mots à éviter**

* "plateforme digitale" → dire "service SMS"
* "transparence des prix" → dire "Abdoulaye sait ce que vaut sa tomate"
* "solution innovante" → trop vague, supprimer

**Workflow GitHub — intégration dans pitch-soutenance.md**

Ce prompt ne crée pas encore de fichier séparé — son output est conservé dans un bloc-notes et intégré dans docs/pitch-soutenance.md en S6.

**En attendant S6 :** committez le résultat dans un fichier temporaire :

**Nommez :** pitch-vpc-draft.md **Message de commit :** docs: ajout pitch-vpc-draft.md - Bloc proposition de valeur pour soutenance [NomEquipe]

**RÉCAPITULATIF — Dossier docs/ après la phase VPC**

docs/

├── vpc.md ← P-VPC-1 + P-VPC-2 (Profil Client + Proposition de Valeur)

├── vpc-connections.md ← P-VPC-CONNECTIONS (traçabilité 6 Chapeaux → VPC)

├── backlog-s3.md ← P-VPC-BACKLOG (user stories S3 prêtes à construire)

└── pitch-vpc-draft.md ← P-VPC-PITCH (bloc pitch soutenance)

**Vision complète du dossier docs/ après S2**

docs/

├── fiche-equipe.md ← S1

├── guide-interview.md ← S1

├── carte-empathie.md ← S1

├── chapeaux-bono.md ← S2 · Phase 6 Chapeaux

├── contraintes-mvp.md ← S2 · Phase 6 Chapeaux

├── hypotheses-validation.md ← S2 · Phase 6 Chapeaux

├── metriques-succes.md ← S2 · Phase 6 Chapeaux

├── vpc.md ← S2 · Phase VPC

├── vpc-connections.md ← S2 · Phase VPC

├── backlog-s3.md ← S2 · Phase VPC

├── hmw-definitif.md ← S2 · Phase HMW

└── pitch-vpc-draft.md ← S2 · Phase VPC (soutenance)

**Ce que ce dossier représente en soutenance**

**Question jury :** "Pourquoi cette fonctionnalité et pas une autre ?" **Réponse traçable :** → backlog-s3.md → US-01 adresse Pain Reliever #1 → vpc.md → Pain Reliever #1 répond à Pain #1 d'Abdoulaye → vpc-connections.md → Pain #1 vient du Chapeau Noir → chapeaux-bono.md → "Abdoulaye ne connaît pas les prix au moment de la transaction"

**4 fichiers. 1 réponse claire. 10 secondes.**

**Checklist finale VPC — avant S3**

* [ ] docs/vpc.md commité
* [ ] docs/vpc-connections.md commité
* [ ] docs/backlog-s3.md commité — les US MUST sont identifiées
* [ ] docs/pitch-vpc-draft.md commité
* [ ] README.md mis à jour avec HMW définitif et lien vers backlog-s3.md

*M. Malick Faye Diagne — GET 409 — Swiss UMEF University Campus de Dakar — 2025-2026*