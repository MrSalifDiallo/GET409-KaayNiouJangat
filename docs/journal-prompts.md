# Journal de Prompts — Séance 2

GET 409 — Kaaynioujangat Trading Bot
Outil utilisé : Claude.ai — Interface web

---

## P1 — Zero-Shot (structuré Rôle/Contexte/Tâche/Format)

**Version faible (envoyée d'abord) :**
> "Quelles fonctionnalités pour un bot crypto au Sénégal ?"

**Résumé réponse V1 :** Liste générique de 5-6 idées (alertes de prix, portefeuille, actualités) sans lien avec Amadou ni avec le HMW. Rien d'actionnable, pas de priorisation.

**Note V1 : 2/5** — trop vague pour être exploitable.

**Version structurée (itération) :**
```
ROLE : Tu es un Product Manager spécialisé en fintech et éducation
financière pour l'Afrique de l'Ouest.

CONTEXTE : Notre équipe développe Kaaynioujangat Trading Bot, une
solution destinée à Amadou Sarr, 27 ans, agent commercial à Dakar,
débutant en trading crypto depuis 6 mois. Le problème principal est :
Comment pourrions-nous aider un débutant sénégalais en crypto à
comprendre le marché et à distinguer un signal fiable d'une rumeur,
en langage simple, sans qu'il ait besoin de surveiller les prix en
continu ?

TACHE : Identifie les 5 fonctionnalités prioritaires de notre MVP,
classées par impact utilisateur décroissant.

FORMAT : Pour chaque fonctionnalité :
- Nom (court, en français)
- Problème résolu pour Amadou
- Effort de développement estimé (faible/moyen/élevé)
- Accessibilité sans smartphone (oui/non)
```

**Résumé réponse V2 :** 5 fonctionnalités priorisées et directement liées au persona : (1) Résumé quotidien en langage simple, (2) Alerte uniquement sur signal fort (BULL/BEAR), (3) Explication du "pourquoi" derrière un mouvement, (4) Score de fiabilité/confiance du signal, (5) Mode données légères pour connexion instable. Chacune notée avec effort estimé et accessibilité.

**Note V2 : 4/5** — spécifique, actionnable, directement réutilisable comme backlog MVP.

**Itération :** V1 → V2, gain net grâce à la structure Rôle/Contexte/Tâche/Format.

---

## P2 — Zero-Shot (format tableau imposé)

```
ROLE : Tu es un consultant en innovation sociale pour des projets
numériques en Afrique de l'Ouest.

CONTEXTE : Notre projet Kaaynioujangat Trading Bot s'attaque au
problème suivant : Comment pourrions-nous aider un débutant
sénégalais en crypto à comprendre le marché et à distinguer un
signal fiable d'une rumeur, en langage simple, sans qu'il ait besoin
de surveiller les prix en continu ? Public cible : Amadou Sarr, 27
ans, Dakar, smartphone avec connexion parfois instable.

TACHE : Analyse la viabilité de ce projet et propose les 3 risques
majeurs à anticiper.

FORMAT DE SORTIE STRICT :
Réponds uniquement sous ce format tableau :

| Risque | Description | Probabilité | Mitigation |
|--------|-------------|-------------|------------|
| [1] | ... | Haute/Moy/Faible | ... |
| [2] | ... | ... | ... |
| [3] | ... | ... | ... |

Puis une recommandation en 2 phrases.
```

**Résumé réponse :** Tableau de 3 risques — (1) sur-confiance dans un score IA perçu comme infaillible (probabilité moyenne), (2) indisponibilité du résumé en cas de connexion très faible (probabilité haute), (3) désengagement si les résumés sont perçus comme trop techniques malgré la simplification (probabilité faible). Recommandation : prioriser un mode texte ultra-léger et afficher systématiquement un avertissement "ceci n'est pas un conseil financier".

**Note : 5/5** — tableau directement réutilisable dans le deck de présentation, risques réalistes et propres au contexte sénégalais.

**Itération :** aucune nécessaire (note ≥ 3/5).

---

## P3 — Few-Shot (pattern métier)

```
Tu es un expert en fintech et éducation financière au Sénégal.

Voici des exemples de problèmes observés chez nos utilisateurs et
leurs solutions adaptées :

PROBLEME : Amadou copie les décisions de trading d'influenceurs
WhatsApp sans pouvoir vérifier leur fiabilité.
SOLUTION : Score de fiabilité affiché à côté de chaque alerte,
basé sur le backtesting EMA+RSI du modèle, pour que l'utilisateur
compare la recommandation reçue à un signal vérifiable.

PROBLEME : Amadou n'a pas le temps de lire des graphiques
techniques compliqués entre deux rendez-vous professionnels.
SOLUTION : Résumé quotidien en français courant expliquant la
tendance et sa cause probable, sans graphique à interpréter.

En suivant exactement ce format et ces contraintes contextuelles,
propose une solution pour ce troisième problème :

PROBLEME : Amadou reçoit trop de notifications de prix et finit
par les ignorer toutes, y compris les signaux vraiment importants.
SOLUTION :

Contraintes à respecter :
- Solution accessible sans connexion 4G stable
- Utilisable par Amadou sans formation technique
- Ne doit pas ajouter de complexité à l'interface existante
```

**Résumé réponse :** L'IA complète avec un système de seuil de signal (notification uniquement au-delà d'un mouvement significatif ou d'un changement de classification BULL/BEAR/NEUTRAL), regroupé en un seul message pour éviter la fatigue de notification — cohérent avec les deux exemples fournis, sans proposer d'application lourde ou de fonctionnalité hors-sujet.

**Note : 4/5** — respecte bien les contraintes imposées par les exemples ; une itération pourrait préciser la fréquence exacte du seuil.

**Itération :** non nécessaire, réponse exploitable telle quelle pour le backlog.

---

## P4 — Chain-of-Thought (analyse stratégique en 4 étapes)

```
Tu es un consultant en stratégie digitale pour des projets
d'innovation sociale en Afrique.

Notre projet : Kaaynioujangat Trading Bot
Notre HMW : Comment pourrions-nous aider un débutant sénégalais en
crypto à comprendre le marché et à distinguer un signal fiable
d'une rumeur, en langage simple, sans qu'il ait besoin de
surveiller les prix en continu ?
Notre persona : Amadou Sarr, 27 ans, agent commercial à Dakar,
débutant en trading crypto depuis 6 mois
Notre MVP prévu : Extension du dashboard IA existant qui traduit
les modules d'analyse (classification BULL/BEAR, EMA+RSI) en
résumés simples et alertes ciblées.

Analyse ce projet en 4 étapes. Développe chaque étape avant de
passer à la suivante.

Étape 1 — Pertinence du problème :
Le problème est-il suffisamment réel et urgent pour notre persona ?
Cite 2 indicateurs observables.

Étape 2 — Viabilité de la solution :
Quels sont les 2 principaux obstacles techniques ou sociaux à
l'adoption de notre MVP ?

Étape 3 — Risques éthiques :
Quels biais ou risques d'exclusion notre solution pourrait-elle
créer pour Amadou ou des groupes vulnérables similaires ?

Étape 4 — Recommandation :
Quelle est la seule chose à valider en priorité avec de vrais
utilisateurs avant de construire ?
```

**Résumé réponse :**
- Étape 1 : problème jugé réel — indicateurs cités : anxiété rapportée face aux mouvements de marché pendant les heures de travail, et dépendance observée à des signaux WhatsApp non vérifiés.
- Étape 2 : obstacles — instabilité de la connexion internet, et scepticisme possible envers un "score IA" perçu comme une boîte noire.
- Étape 3 (risques éthiques) : un score de fiabilité mal calibré pourrait donner une fausse impression de certitude et encourager une prise de risque excessive chez des utilisateurs peu formés ; risque d'exclusion des utilisateurs à connexion très faible si le mode léger n'est pas prioritaire dès le MVP.
- Étape 4 : valider en priorité si un résumé quotidien texte, seul (sans score de fiabilité ni notifications), suffit déjà à réduire l'anxiété et le temps de veille d'Amadou avant d'ajouter des fonctionnalités plus complexes.

**Note : 5/5** — analyse structurée et vérifiable à chaque étape ; l'étape 3 sera réutilisée telle quelle pour la note d'éthique IA (S6).

**Itération :** aucune nécessaire.

---

## P5 — Prompt libre

```
Tu es coach en prise de parole pour des pitchs de projets tech.

Rédige le script d'un pitch de 2 minutes pour présenter
Kaaynioujangat Trading Bot devant une classe, en respectant
strictement ce découpage chronométré :
- 20 sec : notre secteur et notre persona
- 30 sec : le problème observé
- 30 sec : notre HMW final
- 40 sec : notre solution envisagée (MVP V0)

Contexte : projet fintech éducatif pour débutants crypto à Dakar,
persona Amadou Sarr (27 ans, agent commercial), HMW = "Comment
pourrions-nous aider un débutant sénégalais en crypto à comprendre
le marché et à distinguer un signal fiable d'une rumeur, en langage
simple, sans qu'il ait besoin de surveiller les prix en continu ?",
MVP = résumé quotidien simplifié + alertes ciblées sur signal fort,
basés sur les modules IA existants du dashboard (classification
BULL/BEAR, backtesting EMA+RSI).

Ton : direct, concret, pas de jargon technique.
```

**Résumé réponse :** Script de pitch en 4 blocs chronométrés, prêt à être lu tel quel, ouvrant sur "Amadou reçoit un signal WhatsApp ce matin..." pour ancrer immédiatement l'audience dans un cas réel, et fermant sur l'appel à valider le MVP V0 avec de vrais utilisateurs.

**Note : 5/5** — format directement exploitable pour le pitch de 2 minutes de fin de séance, aucun retravail nécessaire.

**Itération :** aucune nécessaire — test réussi d'une formulation inventée (rôle de coach plutôt que d'expert métier).

---

*Journal de Prompts — Livrable S2 — GET 409, Swiss UMEF University, Campus de Dakar*
