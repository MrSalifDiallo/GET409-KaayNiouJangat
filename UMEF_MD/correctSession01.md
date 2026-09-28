**Process Prompt Equipe**

1-Nom de l'équipe — sans espace ni accent

2-Secteur cible — parmi les 6 proposés en S1

3-Membres — Prénom Nom + GitHub username + rôle pour chacun

4-Problème en 1 phrase — ancré dans la réalité sénégalaise

5-URL du dépôt GitHub — copiée depuis la barre du navigateur

Remplacez TOUS les éléments entre[crochets]avant d'envoyer. Un crochet non remplacé = fiche invalide.

RÔLE : Tu es un assistant spécialisé en gestion de projets

d'innovation pour des étudiants en Master au Sénégal.

CONTEXTE : Je dois créer la fiche officielle de mon équipe

pour le cours GET 409 — Atelier IA, Swiss UMEF University

Dakar, année 2025-2026.

Voici les informations de mon équipe :

Nom de l'équipe : [NOM SANS ESPACE NI ACCENT]

Secteur cible : [VOTRE SECTEUR AU SÉNÉGAL]

URL GitHub : [https://github.com/username/GET409-NomEquipe]

URL Dify : GET409-[NomEquipe]

Membres :

- Membre 1 : [Prénom Nom] | Rôle : [Chef de Produit (PM)] | GitHub : @[username]

- Membre 2 : [Prénom Nom] | Rôle : [Master Prompt Engineer] | GitHub : @[username]

- Membre 3 : [Prénom Nom] | Rôle : [Dev UI (No-Code)] | GitHub : @[username]

- Membre 4 : [Prénom Nom] | Rôle : [Responsable Impact] | GitHub : @[username]

Problème observé (1 phrase) :

[DÉCRIVEZ LE PROBLÈME RÉEL QUE VOUS VOULEZ RÉSOUDRE]

**Énoncé HMW :**

[COMMENT POURRIONS-NOUS... POUR... AFIN DE... ?]

TÂCHE : Génère la fiche équipe complète et structurée.

FORMAT DE SORTIE STRICT :

- Uniquement du Markdown valide

- Sans introduction ni conclusion

- Sans bloc de code (pas de balises ```)

- Directement copiable dans GitHub

Structure attendue :

# Fiche équipe — GET409-[NomEquipe]

## Identité de l'équipe (tableau)

## Membres & rôles (tableau)

## Notre défi (problème + HMW)

## Infrastructure S1 (checklist)

## Répartition des tâches S1 (tableau avec statuts)

1-Copiez le résultat généré par l'IA

2-GitHub → dépôt → Add file → Create new file

3-Nommez le fichier : docs/fiche-equipe.md

4-Collez et committez avec le message : feat(S1): fiche équipe — [NomEquipe]

**Process prompt P-INTERVIEW.**

1-Persona — Prénom, âge, profession, localisation

2-Problème principal — la phrase HMW de l'équipe

3-Secteur — pour ancrer les questions dans le contexte local sénégalais

Remplacez TOUS les[crochets]avant d'envoyer. Les questions générées seront aussi génériques que vos données d'entrée.

RÔLE : Tu es un UX Researcher expert en interview d'empathie pour des projets d'innovation sociale en Afrique de l'Ouest.

CONTEXTE : Mon équipe prépare une interview d'empathie pour le cours GET 409 — Atelier IA, Swiss UMEF University Dakar, 2025-2026.

Notre persona :

- Identité : [PRÉNOM, ÂGE, PROFESSION]

- Localisation : [VILLE/ZONE, SÉNÉGAL]

- Problème principal : [VOTRE HMW EN 1 PHRASE]

- Équipement digital : [SMARTPHONE / FEATURE PHONE]

- Secteur : [VOTRE SECTEUR AU SÉNÉGAL]

TÂCHE : Génère un guide d'interview d'empathie complet que mon équipe utilisera en séance pour interviewer un membre qui joue le rôle du persona.

FORMAT DE SORTIE STRICT : - Uniquement du Markdown valide - Sans introduction ni conclusion - Sans bloc de code (pas de balises ```) - Directement copiable dans GitHub Structure attendue :

# Guide d'interview — [Prénom du persona]

## Persona (tableau récapitulatif : Nom / Localisation / Problème / Équipement)

## Règles de l'interview (5 bonnes pratiques + 3 erreurs à éviter)

## Questions d'ouverture (3 questions) (briser la glace, ton naturel, pas de jargon)

## Questions d'exploration (5 questions) (technique des 5 Whys, commencer par "Racontez-moi..." ou "Que ressentez-vous quand...")

## Questions sur les aspirations (2 questions) (ce qu'il/elle espère, pas encore de solution)

## Grille de prise de notes (tableau : Question / Verbatim / Émotion détectée)

1-Copiez le résultat généré par l'IA

2-GitHub → Add file → Create new file → nommez docs/guide-interview.md

3-Committez avec : feat(S1): guide interview — [NomEquipe]

4-Pendant l'interview, remplissez la Grille de prise de notes directement dans le fichier GitHub — ou sur papier puis committé après

5-Les verbatims notés dans la grille deviennent l'entrée du prompt P-CARTE

La grille de prise de notes est la pièce clé — plus les verbatims sont précis, plus la carte d'empathie générée par P-CARTE sera riche et ancrée dans la réalité.

**Process prompt carte Interview**

1-Ouvrez votre docs/guide-interview.md sur GitHub

2-Copiez les verbatims de la grille de prise de notes — colonnes "Ce qu'il a dit" et "Émotion détectée"

3-Collez-les dans les champs VERBATIMS du prompt ci-dessous

Si la grille est vide (interview non encore faite), utilisez les verbatims de la carte d'empathie S1 comme point de départ — et indiquez-le dans le champ SOURCE.

RÔLE : Tu es un UX Researcher senior expert en Design Thinking pour des projets d'innovation sociale en Afrique de l'Ouest.

CONTEXTE : Mon équipe a conduit une interview d'empathie dans le cadre du cours GET 409 — Atelier IA, Swiss UMEF University Dakar, 2025-2026.

Notre persona : - Identité : [PRÉNOM, ÂGE, PROFESSION]

- Localisation : [VILLE/ZONE, SÉNÉGAL]

- Secteur : [VOTRE SECTEUR]

- Équipement digital : [SMARTPHONE / FEATURE PHONE]

SOURCE DES DONNÉES : [interview réelle / carte S1]

Verbatims collectés pendant l'interview :

Ce qu'il/elle a dit :

- "[VERBATIM 1 — citation directe]"

- "[VERBATIM 2 — citation directe]"

- "[VERBATIM 3 — citation directe]"

Ce qu'il/elle a fait :

- [COMPORTEMENT OBSERVÉ 1]

- [COMPORTEMENT OBSERVÉ 2]

Émotions détectées :

- [ÉMOTION 1 — ex: anxiété, fierté, résignation]

- [ÉMOTION 2]

TÂCHE : Génère la carte d'empathie complète à partir de ces observations réelles. Reste fidèle aux verbatims — n'invente pas d'insights non présents dans les données.

FORMAT DE SORTIE STRICT :

- Uniquement du Markdown valide

- Sans introduction ni conclusion

- Sans bloc de code (pas de balises ```)

- Directement copiable dans GitHub

Structure attendue :

# Carte d'empathie — [Prénom du persona]

## Persona (tableau)

## 1. Ce qu'il/elle pense et ressent

## 2. Ce qu'il/elle voit

## 3. Ce qu'il/elle entend

## 4. Ce qu'il/elle dit et fait

## 5. Frustrations (Pains) — tableau avec intensité ★

## 6. Aspirations (Gains) — tableau avec priorité ★

## Insights clés (2-3 observations pour le HMW)

## Énoncé HMW

1-Copiez le résultat généré par l'IA

2-GitHub → ouvrez docs/carte-empathie.md → icône crayon → Ctrl+A → collez

3-Committez avec : feat(S2): carte empathie v2 verbatims réels — [NomEquipe]

Le message de commitv2est important — il montre au jury que la carte a évolué entre S1 (hypothèses) et S2 (observations réelles). C'est la progression Design Thinking.