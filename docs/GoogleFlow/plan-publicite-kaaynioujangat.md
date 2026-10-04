# Plan de production — Publicité KaayNioujangat avec Google Flow

Application concrète de `guide-reutilisable-google-flow-publicite.md` au projet **KaayNioujangat**.
Tout ce qui était entre crochets dans le guide est rempli ici. Il reste à exécuter les étapes dans l'ordre.

Sources utilisées pour remplir le guide : `README.md`, `docs/BUSINESS_RULES.md`, `src/routes/index.tsx`
(titre et promesse du site), `src/components/SiteFooter.tsx` (logo, e-mail, avertissement).

---

## 0. Les sorties à produire (vue d'ensemble)

| # | Sortie | Format | Où |
|---|---|---|---|
| 1 | Brief rempli (section 1) | texte | ce fichier |
| 2 | Choix du concept (section 2) | texte | ce fichier |
| 3 | 3 portraits de référence | image 4:5 | Flow |
| 4 | 3 planches plein pied (face / trois-quarts / profil) | image | Flow |
| 5 | 3 tags `@Awa`, `@Moussa`, `@Fatou` | ingredients Flow | Flow |
| 6 | 9 clips de scène | vidéo 16:9, ~6 s chacun | Flow |
| 7 | 5 captures d'écran réelles du site | vidéo ou image | votre machine (`npm run dev`) |
| 8 | Écran final (nom, promesse, URL, avertissement) | calque de montage | logiciel de montage |
| 9 | **Film principal** | MP4 16:9, ~55–59 s | montage |
| 10 | **Version courte mobile** | MP4 9:16, ~20 s | montage |
| 11 | **Série réseaux sociaux** : 5 vidéos tournées par vous (section 11) | MP4 9:16, 50–60 s chacune | téléphone + montage |

Il y a donc **deux pistes**, qui partagent le même écran final, les mêmes captures et les mêmes règles :

- **Piste A — film de marque** (sections 2 à 7) : généré dans Flow, ~55 s, ton cinéma. Coûteux à produire, à faire une fois.
- **Piste B — série sociale** (section 11) : vos 5 idées, filmées par vous, en français mêlé de wolof. Peu coûteuse, répétable, à lancer en premier.

Rien n'est à coder dans le projet pour ces publicités. Le seul lien avec le code : les captures du site (étape 7).

---

## 1. Brief rempli

```text
Produit ou service : KaayNioujangat, site web qui explique le marché crypto aux débutants au Sénégal
Ce que le produit résout : le marché crypto est opaque et plein de jargon ; les débutants se tournent
  vers des groupes WhatsApp douteux ou n'osent pas s'y intéresser
Fonctionnalités à montrer :
  1. Résumé du jour en français courant (/resume)
  2. Signaux du jour BULL / BEAR / NEUTRAL (/signaux)
  3. Prix en dollars ET en FCFA avec la source (accueil, /crypto/BTC)
  4. Agent IA pour poser ses questions (/agent)
Public visé : débutants au Sénégal, 20–45 ans, sur mobile, curieux mais méfiants
Ville, pays ou univers : Dakar, Sénégal
Émotion à créer : CONFIANCE et SOULAGEMENT (« enfin je comprends »), jamais l'excitation de gagner de l'argent
Action attendue : visiter le site [URL À CONFIRMER] et lire le résumé du jour
```

### Règles de contenu propres à ce projet (issues de `CLAUDE.md` §11 et `docs/BUSINESS_RULES.md`)

La publicité parle de finance : ces règles sont **non négociables**.

- **Aucune promesse de gain**, aucun personnage qui s'enrichit, aucun « achetez maintenant ». Le site est éducatif.
- **Avertissement visible dans l'écran final** : « Ceci n'est pas un conseil financier. »
- **Ne jamais dire que les signaux « prédisent »** : ce sont des indicateurs (EMA 20/50 et RSI 14), pas des prévisions.
- **Ne pas dire « analyse d'experts »** : le résumé est calculé automatiquement à partir des variations sur 24 h.
- **Ne pas dire « toutes les cryptos »** : le site suit exactement 6 actifs (BTC, ETH, BNB, SOL, XRP, DOGE).
- **Captures de site avec données réelles uniquement** : jamais de prix inventé ou retouché. Filmer quand le badge est
  vert (« Marché suivi en direct »), pas quand il affiche « Prix périmés ».
- **Pas de logo tiers** (Binance, WhatsApp, etc.) généré par l'IA. Le groupe WhatsApp de la scène 6 reste flou et sans marque.
- Le vrai logo se trouve dans `src/assets/KaayNiouJangat-mark.png` : à ajouter au montage, jamais généré par Flow.

### Décisions à trancher avant de commencer

| Question | Recommandation |
|---|---|
| Vouvoiement ou tutoiement ? `CLAUDE.md` impose le vouvoiement, mais le pied de page du site dit « tu décides toi-même » | Vouvoiement dans la voix off (ce plan). Si vous préférez « tu » pour toucher un public jeune, remplacez-le partout, y compris sur l'écran final. |
| URL finale | Le site affiche `contact@kaaynioujangat.sn` ; le domaine public n'est pas confirmé dans le dépôt. Mettre l'URL réelle au montage. |
| Wolof | **Piste A (Flow)** : français uniquement (le guide l'impose : aucun anglais ; le wolof généré par IA est peu fiable). **Piste B (vous filmez)** : français simple avec quelques mots de wolof (« Waaw », « Wouy », « Dëgg la ? »), dits par de vraies personnes. Dans les deux cas, sous-titres en français. |

---

## 2. Concept retenu

Générez d'abord les trois idées avec ce prompt (collez-le dans votre assistant, pas dans Flow) :

```text
Je veux créer une publicité vidéo avec Google Flow pour KaayNioujangat.

Produit ou service : site web qui explique le marché crypto aux débutants au Sénégal, chaque matin, en français courant.
Problème résolu : le marché crypto est opaque et plein de jargon ; les débutants se fient à des groupes WhatsApp douteux.
Public visé : débutants sénégalais de 20 à 45 ans, sur mobile.
Fonctionnalités ou preuves à montrer : résumé du jour, signaux BULL/BEAR/NEUTRAL, prix en dollars et en FCFA avec source, agent IA pour poser ses questions.
Lieu ou contexte : Dakar, Sénégal.
Contraintes : aucune promesse de gain, aucun conseil d'achat ; ton rassurant et pédagogique.

Propose trois scénarios publicitaires cinématographiques et réalistes, chacun d'une durée de 45 à 60 secondes. Pour chaque scénario, donne : un titre, une idée forte, l'émotion, le public, le déroulé scène par scène, la promesse finale, l'ambiance sonore et le call-to-action. Les scénarios doivent être réalisables en plusieurs clips dans Google Flow et ne doivent pas dépendre de texte lisible dans une image.
```

**Recommandation : « Film choral humain »** (tableau de la section 2 du guide). Trois Dakarois, trois situations, un même besoin
(comprendre sans jargon) que le site relie. Une scène d'objection (« groupes WhatsApp douteux », phrase déjà présente sur le site)
donne la tension sans mettre en scène d'arnaque réelle.

Si vous choisissez un autre des trois scénarios proposés, gardez les 9 scènes de la section 5 comme squelette et changez seulement l'accroche.

Prompt pour développer le concept retenu :

```text
Développe le concept suivant en publicité de 55 secondes : « Film choral humain — trois Dakarois comprennent enfin le marché crypto ».

Le produit est KaayNioujangat, un site qui explique le marché crypto simplement, en français courant, aux débutants au Sénégal. Le public est composé de débutants sénégalais sur mobile. La promesse principale est : « Le marché crypto, expliqué simplement. Vous comprenez, vous décidez. »

Crée un storyboard de 9 scènes d'environ 6 secondes. Pour chaque scène, indique : durée, personnage, action précise, décor, cadrage, mouvement de caméra, son ou dialogue, et rôle dans l'histoire. Le film doit être réaliste, humain et compréhensible sans interface lisible à l'écran. Aucune promesse de gain, aucun conseil d'achat.
```

---

## 3. Formats

| Élément | Format | Quantité |
|---|---|---|
| Portraits et planches personnages | 4:5 vertical | 3 + 3 |
| Film principal (site, YouTube, LinkedIn) | 16:9 | 9 clips |
| Version courte (Reels, TikTok, Stories, WhatsApp Status) | 9:16 | 4 clips (section 7) |

---

## 4. Personnages

Trois personnages, trois contextes, trois âges : le public se reconnaît.

| Tag | Profil | Rôle dans le film | Tenue fixe |
|---|---|---|---|
| `@Awa` | 24 ans, étudiante, curieuse, à l'aise avec son téléphone | Premier utilisateur : le résumé du jour | Chemisier bleu clair, jean, sac à dos gris, petites boucles d'oreilles dorées |
| `@Moussa` | 34 ans, commerçant, tient une boutique, pragmatique | Signaux et prix en FCFA | Chemise blanche manches retroussées, pantalon beige, montre simple |
| `@Fatou` | 41 ans, enseignante, prudente, sceptique | Objection (groupes WhatsApp) puis agent IA | Robe et foulard en wax bleu et jaune, sandales marron |

Ces tenues ne changent pas d'une scène à l'autre.

### Étape A — portraits de référence (4:5)

**`@Awa`**
```text
Photorealistic cinematic character portrait of Awa, a Senegalese woman, 24 years old, deep brown skin, hair in neat medium braids pulled back, round friendly face, a slight curious smile. Realistic skin texture and small natural imperfections. Wearing a light blue blouse, plain blue jeans, a grey backpack strap on one shoulder, small gold earrings, no visible brand logo. Standing at a bus stop on a Dakar avenue, early morning, soft natural light. Looking directly into camera. Premium documentary commercial, 85mm lens, shallow depth of field, natural colors, vertical 4:5, no text, no watermark.
```

**`@Moussa`**
```text
Photorealistic cinematic character portrait of Moussa, a Senegalese man, 34 years old, dark brown skin, short hair, a neatly trimmed short beard, warm confident expression. Realistic skin texture and small natural imperfections. Wearing a white shirt with sleeves rolled up, beige trousers, a simple wristwatch, no visible brand logo. Standing inside his small shop in a Dakar market, shelves of goods behind him, mid-morning, natural light from the open doorway. Looking directly into camera. Premium documentary commercial, 85mm lens, shallow depth of field, natural colors, vertical 4:5, no text, no watermark.
```

**`@Fatou`**
```text
Photorealistic cinematic character portrait of Fatou, a Senegalese woman, 41 years old, medium-dark brown skin, a few fine smile lines, wearing a wax-print headscarf, a thoughtful and slightly skeptical expression. Realistic skin texture and small natural imperfections. Wearing a blue and yellow wax-print dress with matching headscarf, no visible brand logo. Standing in a bright school courtyard in Dakar, late morning, natural light. Looking directly into camera. Premium documentary commercial, 85mm lens, shallow depth of field, natural colors, vertical 4:5, no text, no watermark.
```

Retenez le meilleur portrait de chaque personnage. Si le visage ou la tenue dérive, régénérez avant de continuer.

### Étape B — plein pied et angles

Remplacez `[…]` par le personnage retenu (utilisez le portrait comme référence dans Flow) :

```text
Photorealistic full-body character reference sheet of the exact same person, [Awa / Moussa / Fatou], [24 / 34 / 41] years old, [hair description from the portrait], [exact outfit from the table above], [shoes and accessories]. Show three full-body views side by side: front view, three-quarter view, side profile. Natural posture, realistic proportions, soft daylight studio setup, warm light-gray background, premium casting reference photography, no text, no logo, no watermark.
```

Chaussures et accessoires à fixer : Awa — baskets blanches unies ; Moussa — sandales en cuir marron ; Fatou — sandales marron (déjà dans la tenue).

### Étape C — tags

Importez portrait + planche plein pied de chaque personnage comme *ingredients* dans Flow et nommez-les exactement :

```text
@Awa
@Moussa
@Fatou
```

Utilisez ces tags tels quels dans tous les prompts de scène.

---

## 5. Les 9 scènes

Durées : 6 + 6 + 6 + 6 + 6 + 7 + 6 + 6 + 6 = **55 s**, plus ~4 s d'écran final = **~59 s**.
Chaque clip Flow dure en général quelques secondes (souvent 8 s) : générez, puis coupez au montage.

| # | Durée | But narratif | Personnage | Voix off / dialogue (français) | Capture de site à insérer au montage |
|---|---|---|---|---|---|
| 1 | 6 s | Installer le lieu et l'enjeu | aucun (Dakar) | VO : « Chaque matin, Dakar se réveille. Et le marché crypto, vous le comprenez ? » | — |
| 2 | 6 s | Premier utilisateur | `@Awa` | Awa : « Deux minutes, et je comprends. » | Accueil `/` (titre « expliqué simplement ») |
| 3 | 6 s | Fonction 1 : résumé du jour | `@Awa` | VO : « Un résumé clair, en français courant. » | `/resume` |
| 4 | 6 s | Autre usage + fonction 2 : signaux | `@Moussa` | VO : « Les signaux du jour : hausse, baisse ou neutre. » | `/signaux` |
| 5 | 6 s | Fonction 3 : prix en FCFA | `@Moussa` | Moussa : « Enfin les prix en francs CFA ! » | `/crypto/BTC` (prix en dollars et FCFA) |
| 6 | 7 s | Objection | `@Fatou` | Fatou : « Non merci. Je préfère comprendre d'abord. » | — (écran de groupe flou, sans texte lisible) |
| 7 | 6 s | Fonction 4 : agent IA | `@Fatou` | Fatou : « Pourquoi le prix a bougé aujourd'hui ? » | `/agent` |
| 8 | 6 s | Éthique : vous décidez | `@Awa`, `@Moussa`, `@Fatou` (séparément) | VO : « Ici, personne ne vous dit quoi acheter. Vous comprenez. Vous décidez. » | Pied de page avec l'avertissement |
| 9 | 6 s | Résolution | les trois | VO : « KaayNioujangat. Le marché crypto, expliqué simplement. » | — |

Dialogues : moins de 10 mots chacun (règle du guide). Les phrases de voix off font plus de 10 mots : si Flow les prononce mal,
supprimez-les du prompt et enregistrez la voix off au montage.

### Blocs à coller dans CHAQUE prompt de scène

**Bloc français :**
```text
Tous les dialogues, la voix off et toute parole audible sont exclusivement en français naturel du Sénégal. Les personnages parlent avec une diction claire, calme et crédible. Aucun mot, dialogue, voix off ou texte audible en anglais.
```

**Bloc de style :**
```text
Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, peau et expressions authentiques, caméra discrète à hauteur humaine, mouvements fluides et naturels, ambiance sonore réelle du lieu. Tous les dialogues sont en français naturel du Sénégal, posés et crédibles. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible.
```

Chaque prompt ci-dessous = **texte de scène** + bloc français + bloc de style.

### Scène 1 — Dakar se réveille (sans personnage)

```text
Vue d'ensemble de Dakar au lever du jour : une avenue qui s'anime, des taxis jaunes, des vendeurs qui ouvrent leurs étals, des gens qui marchent vers le travail avec leur téléphone à la main. Lumière dorée du matin. La caméra avance lentement en travelling aérien bas, puis descend au niveau de la rue.

Voix off féminine en français : « Chaque matin, Dakar se réveille. Et le marché crypto, vous le comprenez ? »
```

### Scène 2 — Awa à l'arrêt de bus

```text
@Awa attend à un arrêt de bus d'une avenue de Dakar tôt le matin. Chemisier bleu clair, jean, sac à dos gris. Elle sort son téléphone, regarde l'écran avec attention, puis sourit légèrement. La caméra commence en plan moyen, puis passe lentement en gros plan sur son visage. L'écran du téléphone n'est pas visible.

@Awa dit clairement en français : « Deux minutes, et je comprends. »
```

### Scène 3 — Awa lit le résumé

```text
@Awa est assise sur un banc près de l'arrêt de bus à Dakar, le matin. Elle fait défiler un texte court sur son téléphone, hoche la tête, l'air soulagé. La caméra tourne doucement autour d'elle, puis se pose sur son visage serein. L'écran du téléphone n'est pas visible.

Voix off féminine en français : « Un résumé clair, en français courant. »
```

### Scène 4 — Moussa et les signaux

```text
@Moussa est derrière le comptoir de sa petite boutique dans un marché de Dakar, en milieu de matinée. Chemise blanche, manches retroussées. Un client part, il sort son téléphone, le regarde, hoche la tête avec intérêt. La caméra commence en plan large sur la boutique, puis rapproche vers son visage. L'écran du téléphone n'est pas visible.

Voix off masculine en français : « Les signaux du jour : hausse, baisse ou neutre. »
```

### Scène 5 — Moussa et le FCFA

```text
@Moussa est devant sa boutique dans un marché de Dakar, en pleine matinée, son téléphone à la main. Il lit un chiffre, lève les sourcils, puis lâche un sourire franc. La caméra est à hauteur d'épaule, légèrement en mouvement, puis se fige sur son sourire. L'écran du téléphone n'est pas visible.

@Moussa dit clairement en français : « Enfin les prix en francs CFA ! »
```

### Scène 6 — Fatou refuse (objection)

```text
@Fatou est dans la cour d'une école à Dakar, en fin de matinée. Robe et foulard en wax bleu et jaune. Une collègue lui tend son téléphone ; l'écran montre une conversation de groupe floue, sans texte lisible, sans logo. Fatou regarde un instant, fronce légèrement les sourcils, puis repousse doucement le téléphone de la main. La caméra commence sur le téléphone flou, puis passe sur le visage de Fatou.

@Fatou dit calmement en français : « Non merci. Je préfère comprendre d'abord. »
```

### Scène 7 — Fatou et l'agent IA

```text
@Fatou est assise à un bureau d'une salle de classe vide à Dakar, en début d'après-midi, un cahier ouvert et son téléphone devant elle. Elle écrit sa question avec le pouce, puis lit la réponse avec attention en hochant la tête. La caméra est en plan rapproché, puis tourne légèrement. L'écran du téléphone n'est pas visible.

@Fatou dit clairement en français : « Pourquoi le prix a bougé aujourd'hui ? »
```

### Scène 8 — Vous décidez

```text
Triptyque de trois courts plans consécutifs à Dakar : @Awa sur son banc, @Moussa devant sa boutique, @Fatou dans la cour de l'école. Chacun regarde son téléphone puis relève la tête, sûr de lui, sans excitation. Ambiance calme et mesurée. La caméra reste stable, plans moyens, transitions douces.

Voix off masculine en français : « Ici, personne ne vous dit quoi acheter. Vous comprenez. Vous décidez. »
```

### Scène 9 — Tout le monde avance

```text
@Awa, @Moussa et @Fatou marchent séparément dans Dakar au coucher du soleil, chacun vers sa route. La lumière est chaude et dorée. Ils sont détendus. La caméra recule lentement en plan large sur la ville. Pas de téléphone en gros plan.

Voix off féminine en français : « KaayNioujangat. Le marché crypto, expliqué simplement. »
```

---

## 6. Captures de site et montage

### 6.1 Produire les captures (étape 7 des sorties)

1. `npm run dev` puis ouvrir http://localhost:5173. Après le message « ready », **attendre plus de 10 s** et vérifier que le serveur écoute encore
   (règle `CLAUDE.md` §2.5).
2. Filmer l'écran en **format mobile** (fenêtre étroite ou émulation téléphone), 6 à 8 s par route :

   | Fichier à produire | Route | À montrer |
   |---|---|---|
   | `capture-accueil` | `/` | Titre « Le marché crypto, expliqué simplement », bandeau de cartes |
   | `capture-resume` | `/resume` | Résumé du jour, source et heure |
   | `capture-signaux` | `/signaux` | Les pastilles BULL / BEAR / NEUTRAL |
   | `capture-btc` | `/crypto/BTC` | Prix en dollars **et** FCFA, graphique |
   | `capture-agent` | `/agent` | Une question et la réponse (voir ⚠ ci-dessous) |

3. Vérifier avant d'enregistrer : badge vert « Marché suivi en direct », aucun « Prix indisponible », aucun « Chargement… » à l'image.
4. ⚠ **`/agent` appelle Dify avec votre clé** : faites-le vous-même une fois, avec une question simple, sans afficher la clé.
   Ne filmez pas le fichier `.env`. Si l'agent est indisponible, remplacez cette capture par la scène 7 seule.
5. Les chiffres montrés sont ceux du jour : ne les commentez pas dans la voix off et ne publiez pas la pub comme « prix actuels » des semaines plus tard.

### 6.2 Assemblage dans le logiciel de montage

Ordre des pistes :

1. Vidéo : les 9 clips Flow dans l'ordre, coupés à la durée de la section 5.
2. Incrustations : insérer chaque capture en plein cadre ~1,5–2 s à la fin des scènes 2, 3, 4, 5 et 7 (voir tableau section 5).
3. Voix off : si elle est enregistrée à part, la placer ici et couper l'audio généré qui parle.
4. Musique : ambiance douce, sans paroles, légère montée sur la scène 8, retombée sur la scène 9.
5. Sous-titres français sur tout le film (indispensable pour le visionnage mobile sans son).

### 6.3 Écran final (~4 s)

Fond sobre aux couleurs du site, texte ajouté au montage uniquement :

```text
[Logo : src/assets/KaayNiouJangat-mark.png]
KaayNioujangat
Le marché crypto, expliqué simplement.
[URL À CONFIRMER]
Ceci n'est pas un conseil financier.
```

L'avertissement doit rester lisible (taille suffisante, au moins 3 s) : c'est la règle du projet, reprise de son pied de page.

---

## 7. Version courte 9:16 (~20 s)

À produire **après** validation du film principal. Régénérez 4 clips en 9:16 avec les mêmes tags et les mêmes blocs (ne recadrez pas le 16:9 : les visages seraient coupés).

| Ordre | Durée | Clip | Contenu |
|---|---|---|---|
| 1 | 5 s | scène 2 en 9:16 | Accroche : Awa, « Deux minutes, et je comprends. » |
| 2 | 5 s | scène 5 en 9:16 | Moussa, « Enfin les prix en francs CFA ! » + capture `/crypto/BTC` |
| 3 | 5 s | scène 6 en 9:16 | Fatou, « Non merci. Je préfère comprendre d'abord. » |
| 4 | 4 s | écran final 9:16 | Même écran final, avertissement inclus |

Gardez les sous-titres en gros caractères, centrés dans la zone sûre (ni trop haut ni trop bas, pour éviter les boutons des applications).

---

## 8. Ordre d'exécution (cases à cocher)

- [ ] 1. Confirmer l'URL publique, le vouvoiement et le choix « français uniquement » (section 1).
- [ ] 2. Lancer le prompt des trois idées, choisir le concept (section 2).
- [ ] 3. Générer les 3 portraits 4:5 et en retenir un par personnage (section 4, étape A).
- [ ] 4. Générer les 3 planches plein pied (étape B).
- [ ] 5. Importer dans Flow et créer `@Awa`, `@Moussa`, `@Fatou` (étape C).
- [ ] 6. Générer les clips 1 à 9 en 16:9, un par un, avec les deux blocs collés dans chaque prompt (section 5).
- [ ] 7. Refaire les clips où un visage ou une tenue a dérivé ; garder une action par clip.
- [ ] 8. Produire les 5 captures du site (section 6.1).
- [ ] 9. Monter : clips, captures, voix off, musique, sous-titres, écran final (sections 6.2 et 6.3).
- [ ] 10. Passer la checklist de la section 9.
- [ ] 11. Exporter le film principal 16:9.
- [ ] 12. Générer et monter la version 9:16 (section 7), exporter.

---

## 9. Checklist avant publication

Reprise de la checklist du guide, plus les points propres à KaayNioujangat.

**Qualité du film**
- [ ] Awa, Moussa et Fatou gardent le même visage et la même tenue d'une scène à l'autre.
- [ ] Chaque clip montre une action claire et unique.
- [ ] Lumière, lieu (Dakar) et style restent cohérents.
- [ ] Tous les dialogues et voix off sont en français ; aucun anglais audible.
- [ ] Les phrases prononcées sont courtes et compréhensibles.
- [ ] Le film a une accroche (scène 1–2), une preuve (3–5), une objection (6), une résolution (8–9) et un appel à l'action (écran final).
- [ ] La version 9:16 est produite après validation du film principal.

**Conformité (spécifique au projet)**
- [ ] « Ceci n'est pas un conseil financier. » est lisible sur l'écran final, 3 s minimum.
- [ ] Aucune phrase ne promet un gain, ne dit « achetez » ou ne présente un signal comme une prévision.
- [ ] Aucune mention de « experts » ou de « toutes les cryptos ».
- [ ] Les captures montrent de vraies données du jour, avec le badge vert, sans « Prix périmés » ni message d'erreur.
- [ ] Aucune clé (`DIFY_API_KEY`) ni fichier `.env` visible dans une capture.
- [ ] Le logo vient du fichier réel `src/assets/KaayNiouJangat-mark.png`, pas de Flow.
- [ ] Aucun logo ou nom de marque tiers généré par l'IA dans l'image.

---

## 10. Ce que ce plan ne couvre pas

- La publication elle-même (réseaux, budget, ciblage publicitaire).
- Les droits de la musique : prenez une piste libre de droits ou sous licence.
- Les éventuelles règles locales sur la publicité d'actifs numériques au Sénégal : à vérifier de votre côté avant diffusion payante.

---

## 11. Piste B — Série réseaux sociaux (vos 5 idées)

Format commun : **9:16**, 50–60 s, TikTok / Reels / Snapchat Spotlight, sous-titres français, vous filmez au téléphone.
Flow ne sert ici qu'aux **plans d'ambiance** (café, marché) ; les visages, la voix et le wolof sont réels.

### 11.1 Règles communes (à appliquer aux 5 vidéos)

| Règle | Pourquoi (règle du projet) |
|---|---|
| Texte « Ceci n'est pas un conseil financier. » **visible pendant toute la vidéo** (petit, en bas, hors de la zone des boutons) et en grand sur le dernier plan | `docs/BUSINESS_RULES.md` §1 |
| Tourner et publier **le même jour** quand la vidéo cite un prix (« ce matin ») | les prix changent toutes les 60 s ; ne jamais présenter un prix daté comme actuel |
| Filmer le site avec le badge vert « Marché suivi en direct », heure et source visibles, jamais « Prix périmés » ni « Prix indisponible » | `docs/BUSINESS_RULES.md` §5 |
| Chiffres à l'écran = chiffres lus sur le site, ni arrondis ni retouchés | `CLAUDE.md` §11 |
| Aucun mot ou geste qui pousse à acheter ; aucune promesse de gain | site éducatif |
| Signal = indicateur (EMA 20/50 + RSI 14), pas une prévision : dire « le signal du jour est haussier », pas « le Bitcoin va monter » | `docs/BUSINESS_RULES.md` §3 |
| Variation = **sur 24 h** (pas « cette nuit ») | le site calcule des variations 24 h |
| Aucun logo de marque tiers (paiement mobile, réseaux, bourses) généré ou montré en gros plan | pas de lien implicite avec une marque réelle |
| Wolof dit par de vraies personnes, sous-titré en français | Flow ne parle pas wolof de façon fiable |
| Dernier plan : logo `src/assets/KaayNiouJangat-mark.png` + `KaayNioujangat` + « Lien en bio » (ou l'URL confirmée) | cohérence avec l'écran final de la section 6.3 |

Hashtags, à coller sous chaque vidéo : `#Senegal #Dakar #Crypto #Bitcoin #FCFA #KaayNioujangat #TikTokSenegal`

### 11.2 Idée 1 — « Le Bitcoin en FCFA : tu savais ? »

Ton choc et curieux. Le plus simple à produire.

| Temps | Plan | Texte / voix | À produire |
|---|---|---|---|
| 0–5 s | Vous face caméra | « Le Bitcoin vaut combien en FCFA ce matin ? Ça va te surprendre. » | Plan face caméra |
| 5–25 s | Capture `/crypto/BTC` : prix en dollars, puis en FCFA | Vous lisez le prix **affiché**, puis la comparaison (voir ⚠) | Capture écran + incrustation de la comparaison |
| 25–50 s | Captures de ETH, SOL, XRP en FCFA, puis `/resume` | « Et le résumé du jour tient en une phrase : … » | 3–4 captures, une phrase tirée du résumé |
| 50–60 s | Écran final | « Retrouve ça chaque matin sur KaayNioujangat. Lien en bio. » | Écran final + avertissement |

⚠ **Comparaisons « sacs de riz » et « mois de loyer »** : le site ne fournit pas ces prix. Ne les inventez pas.
- Relevez un prix **réel et récent** (étiquette de boutique, quittance) et affichez-le à l'écran : « Prix du sac constaté le [date] ».
- Calcul : nombre de sacs = prix du Bitcoin en FCFA (lu sur le site) ÷ prix du sac. Vérifiez à la main avant de tourner.
- Pas de source fiable pour le loyer à Dakar ? Supprimez cette comparaison, gardez le riz.
- Précisez à l'écran « 1 Bitcoin entier » : un débutant n'achète en général qu'une fraction.

### 11.3 Idée 2 — « Arrête les groupes WhatsApp crypto ! » (sketch)

Humour, wolof/français. Vous avez désigné cette vidéo comme la plus virale : à lancer en premier.

| Temps | Scène | À produire |
|---|---|---|
| 0–20 s | Un faux « conseiller » écrit dans un groupe : promesse absurde de multiplier une mise par dix. Un ami naïf hésite, téléphone en main. | 2 comédiens (ou vous deux), 1 décor simple, gros plan sur l'ami qui hésite |
| 20–40 s | Un autre ami arrive : « Wouy, bul ko def ! Viens voir. » Il ouvre KaayNioujangat et lit le résumé du matin. | Plan sur le deuxième ami, puis capture `/resume` |
| 40–60 s | Texte à l'écran : « Pas de promesses. Pas d'arnaque. Juste l'info claire. » Puis logo et CTA. | Texte monté, écran final |

Points de vigilance :
- Les messages du faux conseiller sont **fabriqués au montage** (écran de téléphone factice, texte lisible ajouté par vous, pas par Flow). Aucun vrai numéro, aucun vrai nom de groupe.
- Remplacez la mention d'un service de paiement précis par « envoie par transfert mobile » : ne pas associer une marque réelle à l'arnaque.
- La promesse du faux conseiller doit apparaître **ridicule et fausse**, jamais séduisante. Le sketch se termine clairement du côté de l'ami prudent.
- « Pas d'arnaque » désigne ici le site : c'est une phrase de positionnement, pas une garantie sur la crypto. Le plan final garde l'avertissement.

### 11.4 Idée 3 — « Crypto expliquée à ma grand-mère » (ou à mon petit frère)

Ton tendre et pédagogique. Demandez l'accord de la personne filmée.

| Temps | Plan | Texte / voix |
|---|---|---|
| 0–10 s | Vous et votre grand-mère (ou petit frère), plan à deux | « Mame, je vais t'expliquer le Bitcoin en 1 minute. » |
| 10–45 s | Alternance visage / images locales (marché, poisson, étals) | Trois images : « Le Bitcoin, c'est rare, comme l'or. » ; « Son prix bouge comme celui du poisson au marché : offre et demande. » ; « Trop de vendeurs, le prix baisse, comme au marché. » |
| 45–60 s | Retour au plan à deux, puis écran final | Elle : « Donc il faut d'abord comprendre avant de toucher ? » Vous : « Exactement. C'est pour ça que KaayNioujangat existe. » |

- Filmez de vrais plans de marché plutôt que de les générer : un lieu réel nommé (ex. Sandaga) doit être le vrai.
- Les analogies restent des **images pédagogiques** : n'ajoutez pas « donc le Bitcoin est une valeur sûre ». La réplique finale (« comprendre avant de toucher ») est le bon message.

### 11.5 Idée 4 — « Ton résumé crypto avec le café Touba » (série quotidienne ou hebdomadaire)

Ton posé. C'est le **produit** du site (résumé du matin) mis en rituel.

| Temps | Plan | Texte / voix |
|---|---|---|
| 0–5 s | Plan serré sur le café Touba qui se prépare, son d'ambiance du matin | — (son réel) |
| 5–45 s | Captures de 3 des 6 actifs sur `/signaux`, puis `/resume` | « Pendant que ton café chauffe, voici ce qu'a fait le marché ces dernières 24 heures… » puis une phrase par actif, avec les mots simples du site |
| 45–60 s | Plan sur la tasse, puis écran final | « Demain, même heure, même café. Suis KaayNioujangat. » |

Routine à répéter chaque jour (moins de 10 minutes une fois rodée) :
1. Ouvrir le site (après `npm run dev`, attendre plus de 10 s) ou le site publié, vérifier le badge vert.
2. Choisir 3 actifs parmi BTC, ETH, BNB, SOL, XRP, DOGE ; noter signal et variation 24 h **tels qu'affichés**.
3. Écrire une phrase par actif, sans verbe d'ordre. Exemples de formulation : « le signal du jour est haussier », « le prix est stable sur 24 h ».
4. Filmer le café, enregistrer la voix off, ajouter les captures.
5. Publier le jour même.

Flow peut fournir le plan d'ouverture (voir 11.8). Le café lui-même se filme mieux en vrai.

### 11.6 Idée 5 — « 3 mythes sur la crypto au Sénégal » (vrai ou faux)

Montage rapide, texte à l'écran, plans courts.

| Temps | Contenu | Texte à l'écran |
|---|---|---|
| 0–5 s | Accroche | « Vrai ou faux ? Tu dois être riche pour commencer la crypto. » |
| 5–50 s | 3 mythes, ~12 s chacun : question, tampon FAUX ou VRAI, explication de 10 s | « Il faut des millions pour investir. » · « La crypto, c'est que pour les experts. » · « Tous les signaux sur WhatsApp sont fiables. » |
| 50–60 s | Conclusion et écran final | « Sur KaayNioujangat, on t'explique sans te dire quoi acheter. Tu décides. » |

Réponses suggérées (à garder honnêtes) :
- « Il faut des millions » → **FAUX** pour s'informer ; ajoutez « s'informer ne coûte rien, et on peut perdre de l'argent en investissant ». Ne dites jamais « commence avec peu, tu verras ».
- « Pour les experts » → **FAUX** : le site existe pour expliquer en français courant.
- « Tous les signaux WhatsApp sont fiables » → **FAUX** : une promesse de gain garanti est un signal d'alerte.

### 11.7 Ordre de lancement

Vous avez recommandé : **idée 2 d'abord**, puis **idée 4 installée en série quotidienne**. Ordre complet proposé :

1. Idée 2 (sketch) → la plus virale d'après vous.
2. Idée 4 (café) → commence dès la semaine suivante, un rythme que vous pouvez tenir (quotidien ou hebdomadaire).
3. Idée 1 (Bitcoin en FCFA) → à intercaler un jour où le prix est une actualité.
4. Idée 5 (3 mythes) → facile à produire à partir de captures déjà prises.
5. Idée 3 (grand-mère) → demande une organisation avec une autre personne ; à planifier tranquillement.

### 11.8 Plans d'ambiance à générer dans Flow (facultatif)

Ces clips n'ont **ni personnage ni parole** : pas de tag, pas de bloc français. Gardez le bloc de style de la section 5, sans la dernière phrase sur les dialogues.

**Café Touba (idée 4, 9:16)**
```text
Plan très serré sur du café Touba qui se prépare dans une petite casserole sur un réchaud, vapeur épicée qui monte, lumière douce du petit matin dans une cuisine à Dakar. Le café est versé lentement dans un gobelet. La caméra reste stable, légère profondeur de champ. Aucune parole, aucun personnage visible, ambiance sonore réelle du matin.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, mouvements fluides et naturels. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible, aucune marque visible.
```

**Marché animé (idées 3 et 1, 9:16, à utiliser seulement comme décor générique)**
```text
Ambiance d'un marché animé de Dakar en milieu de matinée : étals de poissons et de légumes, vendeurs qui discutent avec des clients, mouvements naturels de la foule. Lumière naturelle chaude. La caméra avance lentement à hauteur humaine. Aucune parole claire, aucun visage en gros plan, ambiance sonore réelle du marché.

Film documentaire réaliste haut de gamme, tourné à Dakar, Sénégal. Lumière naturelle, couleurs chaudes réalistes, mouvements fluides et naturels. Aucun effet futuriste, aucun texte incrusté, aucun watermark, aucune interface lisible, aucune marque visible.
```

Un plan généré ne doit jamais être présenté comme un lieu précis (« Sandaga ») : utilisez de vrais plans si vous nommez le lieu.

### 11.9 Sorties de la piste B

| Sortie | Quantité | Fichier suggéré |
|---|---|---|
| Vidéo idée 2 — sketch | 1 | `reel-02-sketch-whatsapp.mp4` |
| Vidéo idée 4 — café (par épisode) | 1 par jour/semaine | `reel-04-cafe-AAAA-MM-JJ.mp4` |
| Vidéo idée 1 — Bitcoin en FCFA | 1 | `reel-01-btc-fcfa-AAAA-MM-JJ.mp4` |
| Vidéo idée 5 — 3 mythes | 1 | `reel-05-mythes.mp4` |
| Vidéo idée 3 — grand-mère | 1 | `reel-03-grand-mere.mp4` |
| Écran final 9:16 réutilisable | 1 | `fin-kaay-9x16.png` |
| Tampons « VRAI » / « FAUX » | 2 | `tampon-vrai.png`, `tampon-faux.png` |
| Légende + hashtags par vidéo | 5 | dans la description de publication |

### 11.10 Checklist spécifique à la piste B

- [ ] « Ceci n'est pas un conseil financier. » est visible du début à la fin.
- [ ] Les prix cités viennent d'une capture du jour, avec badge vert, heure et source visibles.
- [ ] Les comparaisons riz/loyer reposent sur un prix réel noté avec sa date, ou sont supprimées.
- [ ] Les signaux sont décrits comme des indicateurs ; les variations sont dites « sur 24 h ».
- [ ] Aucun conseil d'achat ni promesse de gain, même sur le ton de l'humour.
- [ ] Aucune marque tiers montrée ou citée dans le sketch.
- [ ] Les mots wolof sont sous-titrés en français.
- [ ] La personne filmée (grand-mère, ami, comédien) a donné son accord.
- [ ] Le lien en bio mène bien à l'URL publique confirmée.
