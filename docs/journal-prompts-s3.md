# Journal de Prompts — Séance 3 (Livrable L3)

GET 409 — Kaaynioujangat Trading Bot
Outils utilisés : Claude.ai (rédaction/test des prompts) + Dify.ai (workflow `KaaynioujangatBot_ResumeCrypto_v1`)

---

## P1 — Zero-Shot (prompt système de l'agent, généré via Claude.ai)

**Technique :** Zero-Shot

```
Génère un prompt système optimisé pour un agent IA Dify destiné
à des non-développeurs.

MON PROJET :
Nom : Kaaynioujangat Trading Bot
Problème résolu : Aider un débutant sénégalais en crypto à comprendre
le marché et distinguer un signal fiable d'une rumeur, sans jargon
technique.
Utilisateurs cibles : Débutants crypto sénégalais, salariés à temps
plein (type Amadou Sarr, 27 ans, Dakar)
Secteur : Fintech / éducation financière crypto
Contexte géographique : Dakar, Sénégal

L'AGENT DOIT SAVOIR FAIRE :
1. Résumer la tendance d'un actif crypto en langage simple
2. Expliquer le "pourquoi" d'un mouvement de marché
3. Signaler un niveau de confiance du signal plutôt qu'une certitude

L'AGENT NE DOIT PAS FAIRE :
1. Donner un conseil financier personnalisé ferme ("achète maintenant")
2. Inventer des prix ou des données non vérifiées

CONTRAINTES TECHNIQUES :
- Longueur des réponses : courtes
- Langue : français
- Ton : accessible, direct, rassurant
- Format souhaité : liste structurée

Génère un prompt système complet et directement utilisable dans Dify.
Inclure : rôle, contexte, missions, règles, format. Maximum 300 mots.
```

**Résumé réponse :** Prompt système structuré en 5 blocs (rôle, contexte, missions, règles, format), reprenant fidèlement les contraintes fournies — notamment l'interdiction de conseil financier ferme et l'obligation d'afficher un niveau de confiance. Directement réutilisable dans le champ Instructions de l'agent Dify.

**Note : 4/5** — bon point de départ, quelques ajustements manuels faits pour coller exactement au vocabulaire du dashboard (BULL/BEAR/NEUTRAL).

**Itération :** légère reformulation manuelle après coller dans Dify pour aligner les noms de champs avec les modules existants du dashboard.

---

## P2 — Zero-Shot structuré (prompt du nœud Chercheur)

**Technique :** Zero-Shot structuré (format de sortie obligatoire)

Voir prompt complet dans [`docs/dify-prompts-s3.md`](dify-prompts-s3.md#nœud-chercheur--prompt-système).

**Résumé réponse (test dans Dify) :** Sur la question précise « Tendance Bitcoin cette semaine ? », le nœud retourne les 5 champs structurés (ACTIF, TENDANCE, NIVEAU DE CONFIANCE, SIGNAUX TECHNIQUES, SOURCES) sans halluciner de prix exact. Sur une question vague comme « Crypto ? », il retourne correctement `INSUFFISANT : actif et période non précisés`.

**Note : 5/5** — le contrat de sortie (INSUFFISANT en majuscules) fonctionne dans les deux branches testées.

**Itération :** aucune nécessaire.

---

## P3 — Few-Shot (prompt du nœud Rédacteur)

**Technique :** Few-Shot (exemple de rapport complet fourni)

Voir prompt complet dans [`docs/dify-prompts-s3.md`](dify-prompts-s3.md#nœud-rédacteur--prompt-système).

**Résumé réponse (test dans Dify) :** À partir des données structurées reçues du Chercheur, le Rédacteur produit un résumé de marché au format identique à l'exemple fourni (titre, actif, tendance, niveau de confiance, recommandation), avec le rappel systématique "ce n'est pas un conseil financier" repris tel quel de l'exemple.

**Note : 5/5** — le format Few-Shot est resté stable sur 2 questions de test différentes (une précise, une vague ayant déclenché INSUFFISANT côté Chercheur).

**Itération :** aucune nécessaire.

---

## P4 — Chain-of-Thought (réflexion éthique, base du livrable L4)

**Technique :** Chain-of-Thought

```
Analyse les enjeux éthiques de MON agent Dify.
Raisonne étape par étape. Sois spécifique à mon cas.

MON AGENT :
Nom : Kaaynioujangat Trading Bot
Ce qu'il fait : traduit les signaux de marché crypto (classification
BULL/BEAR/NEUTRAL, backtesting EMA+RSI) du dashboard existant en
résumés simples et niveaux de confiance, pour aider un débutant
sénégalais à comprendre le marché sans surveiller les prix en continu.
Données utilisées : prix et volumes crypto (API Binance), résultats
des modèles de classification et de backtesting
Utilisateurs : débutants crypto sénégalais, type Amadou Sarr (27 ans,
agent commercial, Dakar)
Contexte : Sénégal · fintech / éducation financière · No-code

ÉTAPE 1 — IDENTIFIER 2 RISQUES CONCRETS :
Pour chaque risque :
- Nomme-le clairement
- Décris le scénario concret où il se réalise
- Identifie QUI est impacté et COMMENT

ÉTAPE 2 — ÉVALUER LA GRAVITÉ :
Pour chaque risque : Probabilité + Impact + Urgence

ÉTAPE 3 — PROPOSER DES GARDE-FOUS :
Pour chaque risque :
1. Une mesure technique réaliste
2. Un message de transparence à afficher dans l'interface
3. Une règle à intégrer dans le prompt système

LIVRABLE ATTENDU :
Un texte de 1/2 page (150-200 mots) structuré en 3 paragraphes,
directement utilisable comme réflexion éthique pour le livrable L4.
```

**Résumé réponse :** Deux risques identifiés — (1) sur-confiance dans le "niveau de confiance" affiché, perçu comme une garantie plutôt qu'un indicateur statistique, pouvant pousser à une décision financière risquée ; (2) dépendance à l'infrastructure IA/API du dashboard, qui rendrait le bot indisponible précisément lors d'un mouvement de marché critique. Garde-fous proposés pour chaque risque (technique, message de transparence, règle de prompt) — voir [`docs/reflexion-ethique-s3.md`](reflexion-ethique-s3.md) pour la version finalisée du livrable L4.

**Note : 5/5** — analyse directement ancrée dans le projet, aucune généralité sur "l'IA en général".

**Itération :** aucune nécessaire ; réponse reprise et enrichie pour produire le livrable L4.

---

*Journal de Prompts — Livrable S3 (L3) — GET 409, Swiss UMEF University, Campus de Dakar*
