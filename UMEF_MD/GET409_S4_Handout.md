<!-- Slide number: 1 -->
GET 409  •  Lab Sprint S4  •  Handout Étudiant
Swiss UMEF University — Campus de Dakar  •  Année 2025-2026

SÉANCE 4 / 8
Créer son MVP
avec Bolt.new
Suivez ce guide étape par étape — vous avez 3h15.

A

B

C

D
Prompt Init
Générer & Itérer
GitHub
Vercel + Livrable
M. Malick Faye Diagne — Enseignant responsable

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Créer son MVP avec Bolt.new
1 / 6

### Notes:

<!-- Slide number: 2 -->
Préparer votre prompt d'initialisation

ÉTAPE A
15 minutes  •  En équipe — un prompt soigné = une app mieux générée  •  Outil : bolt.new

COMMENT CONSTRUIRE VOTRE PROMPT

TEMPLATE À COMPLÉTER (copiez-collez dans Bolt)

Décrivez le contexte & le problème

1
Crée une plateforme web [NOM_PROJET] :
[DESCRIPTION_PROBLEME]

PAGES :
1. Accueil : [contenu page 1]
2. Offres/[Nom] : [contenu page 2]
3. Contact : formulaire nom/email/msg

FONCTIONNALITÉS :
- [Feature 1 — ex: filtre par légume]
- [Feature 2 — ex: carte des zones]

DESIGN : [couleurs], [style],
responsive mobile, police sans-serif.

DONNÉES (5 exemples réels) :
- [Produit 1] [Zone] [Prix]F/kg
- [Produit 2] [Zone] [Prix]F/kg
...

Stack : React + Tailwind CSS.
GreenSprint = plateforme reliant producteurs Niayes et acheteurs Dakar.
Listez les pages exactes

2
Accueil, Offres (avec filtre), Contact — pas plus de 3-4 pages pour S4.
Précisez le design

3
Couleurs (#059669 vert), style moderne, responsive mobile obligatoire.
Donnez 5 données d'exemple

4
Noms de légumes + prix + zones géographiques sénégalaises réelles.
Indiquez la stack technique

5
React + Tailwind CSS (Bolt choisit si vous ne précisez pas).

CONSEIL  Plus votre prompt est précis, moins vous aurez besoin d'itérer ensuite. Prenez 10 min pour bien le rédiger.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape A : Préparer le Prompt
2 / 6

### Notes:

<!-- Slide number: 3 -->
Générer et itérer dans Bolt.new

ÉTAPE B
25 minutes  •  Prompt init + 3 itérations minimum  •  Outil : bolt.new

GÉNÉRATION INITIALE

3 PROMPTS D'ITÉRATION — Exemples

I1
Ouvrez bolt.new

1
«Le menu de navigation n'affiche pas correctement sur mobile. Transforme-le en menu hamburger pour les écrans sous 768px.»
Dans votre navigateur. Pas d'installation — tout se passe en ligne.
Collez votre prompt

2
Zone de texte en bas de l'écran. Entrée pour lancer la génération.

I2
«Sur la page Offres, ajoute des boutons de filtre : Tous / Tomate / Chou / Carotte / Oignon. Le filtre masque les offres non sélectionnées.»
Observez la génération

3
Les fichiers s'créent dans l'explorateur gauche. Preview live à droite.
Testez le preview

4
Cliquez dans la preview : navigation, formulaires, affichage mobile.

I3
«Remplace les données génériques par les données GreenSprint : [coller vos 5 vrais exemples avec prix et zones].»

💡  Si Bolt casse quelque chose : bouton 'Revert' dans l'historique (icône ↩ en haut).

ATTENTION  1 prompt = 1 modification. Les prompts trop longs et complexes génèrent souvent des erreurs en cascade.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape B : Générer & Itérer
3 / 6

### Notes:

<!-- Slide number: 4 -->
Connecter GitHub depuis Bolt.new

ÉTAPE C
10 minutes  •  1 dépôt par équipe — créé automatiquement par Bolt  •  github.com

CONNEXION GITHUB DEPUIS BOLT

CONTENU DU DÉPÔT GÉNÉRÉ PAR BOLT

Cliquez 'Connect to GitHub'

1

README.md
Description auto du projet. À compléter avec : équipe, problème, URL Vercel.
Bouton en haut à droite de l'interface Bolt (icône GitHub).
Autorisez l'accès

2

src/
Code source React complet généré par Bolt — vous n'avez pas à y toucher.
Fenêtre GitHub → 'Authorize bolt-ai'. Connectez-vous si nécessaire.
Choisissez votre compte

3

package.json
Dépendances Node.js — géré automatiquement.
Sélectionnez votre compte personnel (celui créé en S1).
Nommez le dépôt

4

Format OBLIGATOIRE : GET409-[NomEquipe]. Ex : GET409-TeamNiayes

vite.config.js
Configuration du bundler Vite — généré automatiquement.
Cochez Public

5
Le dépôt DOIT être public. Un dépôt privé = non évalué.

tailwind.config.js
Configuration Tailwind CSS — généré automatiquement.
Vérifiez le dépôt

6
github.com/[username]/GET409-[NomEquipe] doit être accessible.

ATTENTION  Le dépôt doit être PUBLIC. Vérifiez dans Settings → Danger Zone → Change visibility → Public.

✅  À FAIRE : modifier le README.md — ajouter nom équipe, URL Vercel, description GreenSprint.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape C : GitHub
4 / 6

### Notes:

<!-- Slide number: 5 -->
Déployer sur Vercel & Valider le livrable

ÉTAPE D
10 minutes  •  1 clic depuis Bolt → URL publique en 30 secondes  •  vercel.com

D1

D2
Déploiement Vercel
Valider le livrable S4
Cliquez 'Deploy' dans Bolt
✅  URL Vercel fonctionne (tester sur 2 navigateurs)

1
Bouton bleu en haut à droite de l'interface.
✅  Les 3 pages sont accessibles via la navigation
Autorisez Vercel

2
Fenêtre Vercel → connexion avec GitHub → Autoriser.
✅  Le formulaire Contact est visible
Attendez le build

3
30 à 60 secondes. Barre de progression visible.
✅  Responsive mobile testé (smartphone réel)
Copiez l'URL

4
📸  Capture desktop (F12 → Ctrl+Shift+P → screenshot)
Format : https://[nom-projet].vercel.app
Testez sur mobile

5
📸  Capture mobile (DevTools → icône smartphone)
Ouvrir l'URL sur votre téléphone — vérifier le responsive.
🔗  URL Vercel copiée dans le journal de bord

CONSEIL  Partagez l'URL Vercel dans le chat de groupe WhatsApp de l'équipe. Testez depuis plusieurs appareils différents.
🔗  URL GitHub copiée dans le journal de bord

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape D : Vercel + Livrable
5 / 6

### Notes:

<!-- Slide number: 6 -->
Checklist & Livrables S4 — Avant de quitter

RECAP
Vérifiez chaque case avant la fin de la séance

CHECKLIST SÉANCE 4 — À compléter avant de partir

LIVRABLES S4 À DÉPOSER SUR E-ACADEMY
Prompt d'initialisation rédigé et saisi dans Bolt

L1

✓
MVP V1 en ligne

35 pts
Les 5 sections : contexte, pages, features, design, données
URL Vercel dans le formulaire e-Academy
MVP généré et preview testée

✓
Navigation entre les 3 pages, formulaire visible, données présentes

L2
Dépôt GitHub

25 pts
3 prompts d'itération réalisés

✓
URL github.com/… public + README complété
Au moins 1 correctif visuel + 1 ajout de feature + 1 amélioration
GitHub connecté — dépôt GET409-[NomEquipe] PUBLIC

L3

✓
Journal Prompts S4

25 pts
URL github.com/[user]/GET409-[NomEquipe] accessible à tous
Min. 4 prompts avec analyse (init + 3 iter.)
Déploiement Vercel effectué

✓
URL https://[nom].vercel.app fonctionnelle testée sur 2 appareils

L4
Captures + Note

15 pts
2 captures d'écran réalisées

✓
2 screenshots + ½ page d'analyse itération
Desktop + mobile — à joindre dans le journal de bord

ATTENTION  Délai de dépôt : 48h après la séance sur e-Academy. Un MVP privé ou non déployé = 0 sur L1 et L2.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Checklist & Livrables
6 / 6

### Notes: