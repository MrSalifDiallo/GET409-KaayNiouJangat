<!-- Slide number: 1 -->
GET 409  •  Lab Sprint S4  •  Handout Étudiant
Swiss UMEF University — Campus de Dakar  •  Année 2025-2026

SÉANCE 4 / 8
Créer son MVP
avec Lovable.dev
Suivez ce guide étape par étape — vous avez 3h15.

A

B

C

D
Prompt Init
Générer & Itérer
Publier
Validation Livrable
M. Malick Faye Diagne — Enseignant responsable

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Créer son MVP avec Lovable.dev
1 / 6

### Notes:

<!-- Slide number: 2 -->
Préparer votre prompt d'initialisation

ÉTAPE A
15 minutes  •  En équipe — un prompt soigné = une app mieux générée  •  Outil : lovable.dev

COMMENT CONSTRUIRE VOTRE PROMPT

TEMPLATE À COMPLÉTER (copiez-collez dans Lovable)

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
React + Tailwind CSS (Lovable choisit si vous ne précisez pas).

CONSEIL  Plus votre prompt est précis, moins vous aurez besoin d'itérer ensuite. Prenez 10 min pour bien le rédiger.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape A : Préparer le Prompt
2 / 6

### Notes:

<!-- Slide number: 3 -->
Générer et itérer dans Lovable.dev

ÉTAPE B
25 minutes  •  Prompt init + 3 itérations minimum  •  Outil : lovable.dev

GÉNÉRATION INITIALE

3 PROMPTS D'ITÉRATION — Exemples

I1
Ouvrez lovable.dev

1
«Le menu de navigation n'affiche pas correctement sur mobile. Transforme-le en menu hamburger pour les écrans sous 768px.»
Dans votre navigateur. Pas d'installation — tout se passe en ligne.
Collez votre prompt

2
Zone de texte au centre. Envoyez pour lancer la génération.

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
💡  Si Lovable casse quelque chose : bouton Revert dans l'historique (icône ↩ en haut) ou sélectionner une version précédente.

ATTENTION  1 prompt = 1 modification. Les prompts trop longs et complexes génèrent souvent des erreurs en cascade.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape B : Générer & Itérer
3 / 6

### Notes:

<!-- Slide number: 4 -->
Connecter Publier depuis Lovable.dev

ÉTAPE C
10 minutes  •  4 clics — URL lovable.app générée automatiquement  •  lovable.dev

PUBLICATION LOVABLE EN 4 CLICS

AVANTAGES DE LOVABLE.DEV

Clic 1 — Icône Publish

1

Publier intégré
Publier connecté dès la connexion — projet jamais perdu.
Icône nuage en haut à droite de l'interface Lovable.
Clic 2 — Choisir Public

2

Déploiement auto
Chaque modification est automatiquement déployée — pas besoin de Vercel.
Sélectionner « Public — Anyone with the URL » (déjà sélectionné).
Clic 3 — Continue (SEO)

3

URL publique
lovable.app/[votre-projet] — accessible partout immédiatement.
Métadonnées SEO générées automatiquement — ne rien modifier.
Clic 4 — Publish

4

Bouton bleu Publish → « Your app is live! » → URL lovable.app active.

Sauvegarde auto
Projet sauvegardé dans « Created by me » — jamais perdu.
Notez l'URL

5
Tester le formulaire Contact lovable.app — c'est votre L1 !

SEO auto
Titre, description et aperçu générés automatiquement à la publication.
Testez l'URL

6
Ouvrir l'URL dans un nouvel onglet — vérifier que l'app est live.

ATTENTION  Le dépôt doit être PUBLIC. Vérifiez dans Settings → Danger Zone → Change visibility → Public.

✅  À FAIRE : copier l'URL lovable.app et la noter dans le journal de bord — c'est votre L1.

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape C : Publier
4 / 6

### Notes:

<!-- Slide number: 5 -->
Valider le livrable Lovable.dev

ÉTAPE D
10 minutes  •  Vérification complète du MVP publié  •  lovable.dev

D1

D2
Vérification MVP
Valider le livrable S4
Ouvrir l'URL lovable.app
✅  URL lovable.app fonctionne (tester sur 2 navigateurs)

1
Depuis un nouvel onglet ou un autre appareil.
✅  Les 3 pages sont accessibles via la navigation
Tester les 3 pages

2
Navigation Accueil / Offres / Contact — tout doit fonctionner.
✅  Le formulaire Contact est visible
Tester les filtres

3
Cliquer sur chaque filtre — seuls les éléments correspondants restent.
✅  Responsive mobile testé (smartphone réel)
Tester le formulaire Contact

4
📸  Capture desktop (F12 → Ctrl+Shift+P → screenshot)
Remplir les champs et vérifier l'affichage du bouton.
Tester sur smartphone

5
📸  Capture mobile (DevTools → icône smartphone)
Scanner le QR code Lovable ou envoyer l'URL par WhatsApp.
🔗  URL lovable.app copiée dans le journal de bord

CONSEIL  Partagez l'URL lovable.app dans le chat de groupe WhatsApp de l'équipe. Testez depuis plusieurs appareils différents.
🔗  URL lovable.app notée dans le formulaire e-Academy

GET 409  |  Handout Étudiant  |  Lab Sprint S4 — Étape D : Validation Livrable
5 / 6

### Notes:

<!-- Slide number: 6 -->
Checklist & Livrables S4 — Avant de quitter

RECAP
Vérifiez chaque case avant la fin de la séance

CHECKLIST SÉANCE 4 — À compléter avant de partir

LIVRABLES S4 À DÉPOSER SUR E-ACADEMY
Prompt d'initialisation rédigé et envoyé dans Lovable

L1

✓
MVP V1 en ligne

35 pts
Les 5 sections : contexte, pages, features, design, données
URL lovable.app dans le formulaire e-Academy
MVP généré et preview testée

✓
Navigation entre les 3 pages, formulaire visible, données présentes

L2
Projet Lovable

25 pts
3 prompts d'itération réalisés

✓
URL lovable.app publique + projet visible dans Created by me
Au moins 1 correctif visuel + 1 ajout de feature + 1 amélioration
MVP publié — URL lovable.app active et accessible

L3

✓
Journal Prompts S4

25 pts
URL lovable.app testée depuis un autre appareil
Min. 4 prompts avec analyse (init + 3 iter.)
Vérification MVP effectué

✓
URL lovable.app fonctionnelle testée sur 2 appareils

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