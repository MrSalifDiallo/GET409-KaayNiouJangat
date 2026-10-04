# Les 9 scènes dans Google Flow — pas à pas

Complément de `plan-publicite-kaaynioujangat.md`. Chaque scène a sa fiche : ce qu'il faut attacher, le prompt complet à coller,
quoi vérifier, et quelle image de votre site ajouter au montage.

Interface de référence : l'écran Flow avec le menu de gauche (Tous les éléments, Images, **Personnages**, **Scènes**, Outils)
et le modèle Gemini Omni Flash. Si un bouton n'est pas là où c'est écrit, faites une capture : les noms exacts de certains boutons
n'ont pas pu être vérifiés dans l'aide officielle.

---

## A. À faire une seule fois avant la scène 1

### A1. Créer les 3 personnages

1. Menu de gauche → **Personnages**.
2. Créez **Awa** : ajoutez son portrait et sa planche plein pied comme références. Si une voix est proposée, choisissez une voix de femme jeune.
3. Créez **Moussa** : portrait + planche. Voix d'homme adulte.
4. Créez **Fatou** : portrait + planche. Voix de femme plus mûre.
5. Vérifiez : dans une barre de prompt, tapez `@`. Vous devez voir Awa, Moussa et Fatou dans la liste.

Si **Personnages** ne permet pas de créer ces fiches, utilisez la solution de secours de la section E.

### A2. Régler la barre de prompt (menu de gauche → **Scènes**)

1. Cliquez sur le bouton **Agent** pour l'**éteindre**. Il est blanc quand il est allumé. Flow utilisera vos prompts tels quels.
2. Retirez toutes les images déjà attachées dans la barre de prompt (le **X** en haut à droite des vignettes). Les personnages arriveront par `@`.
3. Cliquez sur l'icône de réglages (trois curseurs, à droite). Réglez :
   - format **16:9** ;
   - durée : **8 s** si l'option existe (une phrase dite à voix haute demande du temps), sinon la plus proche. On coupe au montage ;
   - nombre de sorties : **2**, pour pouvoir choisir.

### A3. Procédure identique pour chaque scène

1. Collez le prompt de la fiche dans la zone « Que voulez-vous créer ? ».
2. Si la fiche contient un `@Nom` : effacez ce `@Nom` du texte collé, retapez `@`, puis **cliquez sur le nom** dans la liste qui s'ouvre. Le nom doit rester sélectionné comme étiquette, pas comme simple texte. Dans la phrase de dialogue, le prénom est volontairement écrit sans `@` : n'y touchez pas.
3. Cliquez sur la **flèche** en bas à droite pour lancer.
4. Regardez les deux sorties, gardez la meilleure, téléchargez-la.
5. Nommez le fichier `scene-01.mp4`, `scene-02.mp4`, etc.
6. Si un point de la rubrique « Vérifier » échoue : relancez la même scène (flèche), sans rien changer.

Pour tous les prompts : **ne mettez jamais de capture de votre site dans Flow**. L'IA redessinerait l'écran et déformerait chiffres et textes. Les captures s'ajoutent au montage (section C).

---

## B. Les 9 fiches

Les prompts ci-dessous sont **complets**. Chacun se termine par le bloc français et le bloc de style.

### Scène 1 — Dakar se réveille (6 s)

- **À attacher** : rien.
- **`@`** : aucun.
- **Image du site** : aucune.

```text
Vue d'ensemble de Dakar au lever du jour : une avenue qui s'anime, des taxis jaunes, des vendeurs qui ouvrent leurs étals, des gens qui marchent vers le travail avec leur téléphone à la main. Lumière dorée du matin. La caméra avance lentement en travelling aérien bas, puis descend au niveau de la rue.

Voix off féminine en français : « Chaque matin, Dakar se réveille. Et le marché crypto, vous le comprenez ? »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : pas de texte lisible sur les panneaux ou les taxis ; la voix off est en français et se comprend. Si elle est mauvaise, supprimez la ligne « Voix off… » du prompt et enregistrez la voix au montage.

### Scène 2 — Awa à l'arrêt de bus (6 s)

- **À attacher** : rien à la main. Le personnage vient de `@Awa`.
- **`@`** : `@Awa` (une fois, en début de prompt).
- **Image du site** : **Accueil** (`/`), au montage.

```text
@Awa attend à un arrêt de bus d'une avenue de Dakar tôt le matin. Chemisier bleu clair, jean, sac à dos gris. Elle sort son téléphone, regarde l'écran avec attention, puis sourit légèrement. La caméra commence en plan moyen, puis passe lentement en gros plan sur son visage. L'écran du téléphone n'est pas visible.

Awa dit clairement en français : « Deux minutes, et je comprends. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : même visage et même tenue que le portrait d'Awa ; l'écran du téléphone n'est pas visible ; elle dit la phrase en français.

### Scène 3 — Awa lit le résumé (6 s)

- **`@`** : `@Awa`.
- **Image du site** : **Résumé du jour** (`/resume`), au montage.

```text
@Awa est assise sur un banc près de l'arrêt de bus à Dakar, le matin. Elle fait défiler un texte court sur son téléphone, hoche la tête, l'air soulagé. La caméra tourne doucement autour d'elle, puis se pose sur son visage serein. L'écran du téléphone n'est pas visible.

Voix off féminine en français : « Un résumé clair, en français courant. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : Awa reste identique à la scène 2 ; la voix off est une voix de femme, sans mot d'anglais.

### Scène 4 — Moussa et les signaux (6 s)

- **`@`** : `@Moussa`.
- **Image du site** : **Signaux du jour** (`/signaux`), au montage.

```text
@Moussa est derrière le comptoir de sa petite boutique dans un marché de Dakar, en milieu de matinée. Chemise blanche, manches retroussées. Un client part, il sort son téléphone, le regarde, hoche la tête avec intérêt. La caméra commence en plan large sur la boutique, puis rapproche vers son visage. L'écran du téléphone n'est pas visible.

Voix off masculine en français : « Les signaux du jour : hausse, baisse ou neutre. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : aucune affiche ou étiquette lisible dans la boutique ; c'est bien Moussa (chemise blanche, pantalon beige).

### Scène 5 — Moussa et le FCFA (6 s)

- **`@`** : `@Moussa`.
- **Image du site** : **Détail Bitcoin** (`/crypto/BTC`), au montage.

```text
@Moussa est devant sa boutique dans un marché de Dakar, en pleine matinée, son téléphone à la main. Il lit un chiffre, lève les sourcils, puis lâche un sourire franc. La caméra est à hauteur d'épaule, légèrement en mouvement, puis se fige sur son sourire. L'écran du téléphone n'est pas visible.

Moussa dit clairement en français : « Enfin les prix en francs CFA ! »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : la phrase est dite en français, avec « francs CFA » correctement prononcé ; aucun chiffre lisible à l'image.

### Scène 6 — Fatou refuse (7 s)

- **`@`** : `@Fatou`. La collègue n'a pas de personnage : n'attachez rien pour elle.
- **Image du site** : aucune. L'écran de groupe reste flou, sans texte lisible, sans logo.

```text
@Fatou est dans la cour d'une école à Dakar, en fin de matinée. Robe et foulard en wax bleu et jaune. Une collègue lui tend son téléphone ; l'écran montre une conversation de groupe floue, sans texte lisible, sans logo. Fatou regarde un instant, fronce légèrement les sourcils, puis repousse doucement le téléphone de la main. La caméra commence sur le téléphone flou, puis passe sur le visage de Fatou.

Fatou dit calmement en français : « Non merci. Je préfère comprendre d'abord. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : l'écran du téléphone de la collègue est flou ; aucun logo ni nom d'application ; Fatou garde son wax bleu et jaune. Si l'IA génère une interface lisible, relancez.

### Scène 7 — Fatou et l'agent IA (6 s)

- **`@`** : `@Fatou`.
- **Image du site** : **Agent IA** (`/agent`), au montage.

```text
@Fatou est assise à un bureau d'une salle de classe vide à Dakar, en début d'après-midi, un cahier ouvert et son téléphone devant elle. Elle écrit sa question avec le pouce, puis lit la réponse avec attention en hochant la tête. La caméra est en plan rapproché, puis tourne légèrement. L'écran du téléphone n'est pas visible.

Fatou dit clairement en français : « Pourquoi le prix a bougé aujourd'hui ? »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : la phrase est dite en entier ; le cahier ne montre aucun texte lisible.

### Scène 8 — Vous décidez (6 s)

- **`@`** : `@Awa`, `@Moussa` et `@Fatou`, **chacun une fois**, dans la première phrase.
- **Image du site** : **pied de page avec l'avertissement** (capture du bas de n'importe quelle page), au montage.

```text
Triptyque de trois courts plans consécutifs à Dakar : @Awa sur son banc, @Moussa devant sa boutique, @Fatou dans la cour de l'école. Chacun regarde son téléphone puis relève la tête, sûr de lui, sans excitation. Ambiance calme et mesurée. La caméra reste stable, plans moyens, transitions douces.

Voix off masculine en français : « Ici, personne ne vous dit quoi acheter. Vous comprenez. Vous décidez. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : on reconnaît les trois personnages. C'est la scène la plus difficile : si les visages changent, relancez plusieurs fois, ou générez trois clips séparés (un par personnage, 2 s chacun) et assemblez-les au montage.

### Scène 9 — Tout le monde avance (6 s)

- **`@`** : `@Awa`, `@Moussa` et `@Fatou`, chacun une fois.
- **Image du site** : aucune. L'écran final est ajouté ensuite (section C).

```text
@Awa, @Moussa et @Fatou marchent séparément dans Dakar au coucher du soleil, chacun vers sa route. La lumière est chaude et dorée. Ils sont détendus. La caméra recule lentement en plan large sur la ville. Pas de téléphone en gros plan.

Voix off féminine en français : « KaayNioujangat. Le marché crypto, expliqué simplement. »

Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

**Vérifier** : le nom « KaayNioujangat » est bien prononcé ; sinon, retirez cette phrase du prompt et enregistrez-la au montage.

---

## C. Montage : où placer les images de votre site

Les images de votre site ne sont **jamais** envoyées à Flow. Vous les posez par-dessus les clips dans votre logiciel de montage.

### C1. Chronologie

Les durées sont celles du plan. Coupez chaque clip Flow à la durée indiquée.

| Piste | Début → fin | Contenu |
|---|---|---|
| Scène 1 | 0:00 → 0:06 | `scene-01.mp4` |
| Scène 2 | 0:06 → 0:12 | `scene-02.mp4` |
| ↳ capture | 0:10 → 0:12 | **Accueil** (`/`), plein cadre |
| Scène 3 | 0:12 → 0:18 | `scene-03.mp4` |
| ↳ capture | 0:16 → 0:18 | **Résumé du jour** (`/resume`) |
| Scène 4 | 0:18 → 0:24 | `scene-04.mp4` |
| ↳ capture | 0:22 → 0:24 | **Signaux** (`/signaux`) |
| Scène 5 | 0:24 → 0:30 | `scene-05.mp4` |
| ↳ capture | 0:28 → 0:30 | **Détail Bitcoin** (`/crypto/BTC`) |
| Scène 6 | 0:30 → 0:37 | `scene-06.mp4` |
| Scène 7 | 0:37 → 0:43 | `scene-07.mp4` |
| ↳ capture | 0:41 → 0:43 | **Agent IA** (`/agent`) |
| Scène 8 | 0:43 → 0:49 | `scene-08.mp4` |
| ↳ capture | 0:47 → 0:49 | **Pied de page** avec « Ceci n'est pas un conseil financier. » |
| Scène 9 | 0:49 → 0:55 | `scene-09.mp4` |
| Écran final | 0:55 → 0:59 | logo + nom + promesse + URL + avertissement |

Si la phrase d'un personnage se termine plus tôt ou plus tard, déplacez la capture de quelques secondes : elle doit apparaître **après** la phrase, jamais par-dessus.

### C2. Règles pour les captures

- Elles viennent de **votre site déployé**, avec le logo « KaayNioujangat » visible : c'est ce qui prouve que c'est bien votre projet.
- Prenez-les le même jour, avec le badge vert « Marché suivi en direct ». Pas de « Prix périmés » ni de « Prix indisponible ».
- Format téléphone, ajustées pour remplir le cadre 16:9 sur fond sombre ou flou sur les côtés.
- Aucun prix retouché. Ne dites rien sur les chiffres dans la voix off : ils changent d'un jour à l'autre.
- Pas de fichier `.env`, ni de clé, ni de barre d'adresse locale (`localhost`) à l'écran.

### C3. Écran final (0:55 → 0:59)

```text
[logo : src/assets/KaayNiouJangat-mark.png]
KaayNioujangat
Le marché crypto, expliqué simplement.
[URL de votre site déployé]
Ceci n'est pas un conseil financier.
```

L'avertissement reste visible au moins 3 secondes.

### C4. Sous-titres, voix et musique

1. Sous-titres français sur tout le film.
2. Si une voix off générée est mauvaise, remplacez-la par votre enregistrement (voix calme, pas de mot d'anglais).
3. Musique douce, sans paroles, légèrement plus présente scène 8, puis qui retombe scène 9.

---

## D. Problèmes fréquents

| Problème | Que faire |
|---|---|
| Le visage change d'une scène à l'autre | Relancez la scène. Vérifiez que `@Nom` est bien une étiquette sélectionnée dans la liste, pas du texte tapé. |
| Un personnage parle anglais ou avec un accent étranger | Relancez. Ajoutez en tête de prompt : « Aucun mot en anglais. » (déjà dans le bloc français). |
| Un texte lisible apparaît sur un écran ou un mur | Relancez. Si cela persiste, ajoutez « Aucun texte visible nulle part, écran de téléphone non visible. » |
| Le clip fait plus long que prévu | Coupez au montage à la durée du plan. |
| La phrase est coupée avant la fin | Choisissez une durée plus longue (8 s) ou raccourcissez la phrase. |
| Les 2 sorties sont mauvaises | Relancez ; changez un seul détail du prompt à la fois (cadrage ou action). |

---

## E. Solution de secours si `@Awa` ne fonctionne pas

Dans ce cas, n'utilisez pas `@`. Pour chaque scène :

1. Cliquez sur le bouton **+**, à gauche de la barre de prompt.
2. Choisissez le portrait et la planche du personnage dans vos images du projet (2 images).
3. Dans le prompt, remplacez `@Awa` par « la jeune femme des images de référence », `@Moussa` par « l'homme des images de référence » et `@Fatou` par « la femme en wax des images de référence ».
4. Pour les scènes 8 et 9, n'ajoutez qu'**un portrait par personnage** (3 images).

---

## F. Ordre de travail

1. Section A (une fois).
2. Scènes 1 à 9, une par une (section B), en gardant le meilleur clip de chaque.
3. Montage (section C).
4. Checklist finale de `plan-publicite-kaaynioujangat.md`, section 9.
