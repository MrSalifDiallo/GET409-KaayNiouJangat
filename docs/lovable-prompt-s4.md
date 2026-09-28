# Prompt Lovable S4 — KaayNioujangat (Préparation MVP)

GET 409 — Swiss UMEF University, Campus de Dakar — Séance 4

| | |
|---|---|
| **Équipe** | Kaaynioujangat — Salif Diallo |
| **Projet** | KaayNioujangat (extension web du dashboard kaaynioujangat.netlify.app) |
| **Persona** | Amadou Sarr · 27 ans · Agent commercial · Dakar · Smartphone, connexion parfois instable |
| **Outil** | lovable.dev |
| **URL obtenue** | _[à noter après l'Étape 5 — kaaynioujangat.lovable.app]_ |

---

## 1. Prompt d'initialisation — à copier-coller dans Lovable

Règle d'or : 1 prompt = 1 modification. Ce prompt ci-dessous est l'unique prompt d'initialisation (génération complète), puis chaque itération se fait avec un prompt séparé.

⚠️ **No AI slot** : le prompt ne contient aucune mention d'IA, de modèle, d'agent ou de machine learning. L'app est décrite uniquement du point de vue utilisateur (ce qu'elle affiche et ce qu'on peut y faire), jamais par sa technologie interne.

```
Crée une application web complète appelée KaayNioujangat.

# CONTEXTE
KaayNioujangat est une plateforme numérique qui publie chaque matin
un résumé clair du marché crypto (Bitcoin, Ethereum, BNB, Solana…)
en français courant pour les débutants sénégalais afin de comprendre
ce qui bouge sur le marché sans jargon technique et sans dépendre
des groupes WhatsApp ou Telegram non vérifiés.

# PAGES À CRÉER (4 pages)
1. ACCUEIL
→ Header : logo emoji 📈 + nom KaayNioujangat
→ Hero : titre accrocheur + sous-titre + 2 boutons CTA :
« Lire le résumé du jour » et « Voir les signaux »
→ Section chiffres : 3 stats réalistes sur le secteur :
« 4,2 M de Sénégalais suivent le marché crypto »
« 65 % des débutants dépendent de signaux WhatsApp non vérifiés »
« 3 min par jour suffisent pour comprendre le marché »
→ Section « Comment ça marche » : 3 étapes simples
(1. Le résumé du matin  2. Les signaux clairs  3. Tu décides toi-même)
→ Footer : mentions légales + avertissement
« Ceci n'est pas un conseil financier » + contact

2. RÉSUMÉ DU JOUR
→ Une carte principale datée du jour avec un résumé en français
courant, ex : « Le marché a baissé de 3 % ce matin, après une
journée de hausse hier… »
→ 3 points clés : Ce qui bouge / Pourquoi / À surveiller aujourd'hui
→ Mention « Dernière mise à jour : il y a 2 heures »
→ Bouton « Voir tous les signaux » vers la page Signaux du Jour

3. SIGNAUX DU JOUR
→ Champ de recherche qui filtre les cartes en temps réel
selon le nom de la crypto saisi (ex : "bit")
→ Boutons de filtre : Tous | BULL | BEAR | NEUTRAL
→ Boutons de tri : Prix ↑ | Prix ↓
→ Liste de 6 cartes avec : crypto, prix (FCFA), signal du jour
+ niveau de confiance, statut
→ Pastille de confiance colorée : verte si 70 % ou plus,
orange entre 50 et 69 %, rouge en dessous de 50 %
→ Chaque carte avec pastille Disponible (vert)
ou Indisponible (rouge)

4. CONTACT
→ Formulaire : Nom complet, E-mail, Téléphone, Message
→ Bouton d'envoi #1565C0
→ Adresse : Avenue Cheikh Anta Diop, Dakar, Sénégal

# DESIGN
→ Couleur principale : #1565C0 (bleu fintech)
→ Couleur secondaire : #FFFFFF (blanc)
→ Accent : #F7931A (orange Bitcoin)
→ Police : Inter (sans-serif moderne)
→ Style : moderne, épuré, professionnel
→ Responsive mobile first (breakpoint 768px)
→ Navigation fixe en haut avec les 4 pages

# MOBILE (sous 768px)
→ Menu de navigation : hamburger ☰ en haut à droite,
les 4 pages s'affichent en overlay au clic
→ Hero : titre et boutons empilés verticalement,
boutons pleine largeur, faciles à cliquer au pouce
→ Cartes Signaux : 1 seule colonne, cartes pleine largeur
→ Filtres et tri : boutons défilants horizontalement,
le champ de recherche reste en haut
→ Formulaire Contact : champs pleine largeur,
bouton d'envoi pleine largeur
→ Textes lisibles sur petit écran, sections empilées,
aucune barre de défilement horizontale

# DONNÉES (6 exemples réalistes — prix indicatifs en FCFA)
1. Bitcoin (BTC) | 69 500 000 FCFA | BULL · confiance 78 % | Disponible
2. Ethereum (ETH) | 3 420 000 FCFA | BULL · confiance 64 % | Disponible
3. BNB | 548 000 FCFA | NEUTRAL · confiance 51 % | Disponible
4. Solana (SOL) | 117 500 FCFA | BEAR · confiance 60 % | Disponible
5. XRP | 1 485 FCFA | BEAR · confiance 57 % | Disponible
6. Dogecoin (DOGE) | 146 FCFA | données insuffisantes | Indisponible

# STACK TECHNIQUE
→ React + Tailwind CSS + Vite
```

**Choix de conception :**
- **4 pages** (le maximum recommandé pour S4) : la page « Résumé du Jour » est le cœur de la proposition de valeur du VPC (un résumé quotidien en français courant remplace la veille permanente).
- **Recherche + tri Prix ↑/↓ + filtre BULL/BEAR/NEUTRAL** : 3 comportements dynamiques testables en plus du formulaire — bien au-delà des 2 features minimum du barème.
- **Pastille de confiance colorée** (vert ≥ 70 %, orange 50-69 %, rouge < 50 %) : traduit la transparence exigée dans la réflexion éthique S3 — Amadou apprend à évaluer un signal, pas à le suivre aveuglément.
- La pastille **Indisponible** (Dogecoin) reflète le cas réel « données insuffisantes » de la réflexion éthique S3 : on n'affiche pas de signal plutôt que d'afficher une donnée incertaine.
- L'avertissement « Ceci n'est pas un conseil financier » dans le footer reprend le garde-fou éthique validé en S3.
- **No AI slot** : aucune mention d'IA, de modèle, d'agent ou de machine learning dans le prompt — l'app est décrite du point de vue de l'utilisateur.
- **Section MOBILE dédiée** dans le prompt : 70 % des utilisateurs au Sénégal consultent sur smartphone — le prompt décrit explicitement le menu hamburger, les cartes en 1 colonne et les boutons pleine largeur.

---

## 2. Aperçu mobile — wireframes (375px)

Ce à quoi doit ressembler l'interface sur smartphone :

```
MOBILE — ACCUEIL
┌─────────────────────────┐
│ 📈 KaayNioujangat     ☰ │ ← header fixe
│ ┌─────────────────────┐ │
│ │ Le marché crypto,   │ │ ← hero empilé
│ │ expliqué simplement │ │
│ │                     │ │
│ │ ┌─────────────────┐ │ │
│ │ │ Lire le résumé  │ │ │ ← CTA pleine largeur
│ │ └─────────────────┘ │ │
│ │ ┌─────────────────┐ │ │
│ │ │ Voir les signaux│ │ │
│ │ └─────────────────┘ │ │
│ └─────────────────────┘ │
│  4,2 M     65 %    3 min │ ← stats empilées
│  ────     ────    ────  │
│ Comment ça marche       │
│  1 · 2 · 3 (empilés)    │
│ Footer : avertissement  │
└─────────────────────────┘

MOBILE — SIGNAUX DU JOUR
┌─────────────────────────┐
│ 📈 KaayNioujangat     ☰ │
│ [🔍 Rechercher…        ]│
│ [Tous][BULL][BEAR][NEUTRAL]→ │ ← filtres scrollables
│ [Prix ↑] [Prix ↓]       │
│ ┌─────────────────────┐ │
│ │ Bitcoin (BTC)       │ │ ← 1 carte par ligne,
│ │ 69 500 000 FCFA     │ │    pleine largeur
│ │ ● BULL · 78 % (vert)│ │
│ │       [Disponible]  │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Ethereum (ETH)      │ │
│ │ 3 420 000 FCFA      │ │
│ │ ● BULL · 64 % (vert)│ │
│ │       [Disponible]  │ │
│ └─────────────────────┘ │
└─────────────────────────┘

MOBILE — MENU OUVERT (hamburger ☰)
┌─────────────────────────┐
│ 📈 KaayNioujangat     ✕ │
│ ┌─────────────────────┐ │
│ │ Accueil             │ │ ← overlay bleu #1565C0,
│ │ Résumé du Jour      │ │    liens blancs
│ │ Signaux du Jour     │ │
│ │ Contact             │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 3. Prompts d'itération prêts (L3 — 3 minimum + 2 bonus)

| # | Type | Prompt (à envoyer séparément dans Lovable) |
|---|---|---|
| P1 | Correction | « Dans la page Signaux du Jour, remplace le signal du Dogecoin (DOGE) : mets "NEUTRAL · confiance 45 %" et change son statut en Disponible. » |
| P2 | Visuelle | « Ajoute une bannière fine en haut de toutes les pages avec le texte : "📈 Résumé du jour disponible — mis à jour il y a 2 heures". Fond bleu foncé #0D47A1, texte blanc, hauteur fine. » |
| P3 | Fonctionnelle | « Anime les 3 statistiques de la page Accueil : les chiffres défilent de 0 jusqu'à leur valeur finale au chargement de la page. » |
| P4 | Fonctionnelle | « Ajoute un bouton "Mode texte léger" dans le header : quand on clique, toutes les animations et images de la page sont masquées pour économiser la connexion. Un second clic les réactive. » |
| P5 | Libre | « Ajoute une section FAQ sur la page Accueil avec 4 questions et réponses courtes en français simple : "C'est payant ?", "Comment lire un signal ?", "D'où viennent les prix ?", "Est-ce un conseil financier ?" » |

---

## 4. Checklist de test dans le preview Lovable

| ✓ | Ce que vous testez | Ce que vous devez voir |
|---|---|---|
| ☐ | Header | Logo emoji 📈 + nom KaayNioujangat en haut |
| ☐ | Navigation 4 pages | Accueil \| Résumé du Jour \| Signaux du Jour \| Contact cliquables |
| ☐ | Hero + 2 CTA | Section colorée avec les 2 boutons d'action |
| ☐ | Résumé du jour | Carte datée + 3 points clés + « Dernière mise à jour » |
| ☐ | 6 cartes + pastilles | Données réelles + Disponible (vert) / Indisponible (rouge) |
| ☐ | Filtres fonctionnels | Cliquer sur BULL / BEAR / NEUTRAL → seuls les éléments correspondants restent |
| ☐ | Recherche | Saisir "bit" → seule la carte Bitcoin reste |
| ☐ | Tri par prix | Prix ↑ / Prix ↓ → l'ordre des cartes change |
| ☐ | Formulaire Contact | 4 champs + bouton bleu #1565C0 + adresse Dakar |
| ☐ | Mobile (< 768px) | Menu hamburger ☰, cartes en 1 colonne, boutons pleine largeur, aucun débordement |

⚠️ Si un point échoue : « [Description du problème] — corrige cela » (1 prompt = 1 correction).

---

## 5. Publication Lovable en 4 clics (L1)

1. Icône **Publish** (nuage, haut droite) → noter l'URL `[nom-projet].lovable.app`
2. **Continue** → visibilité « Public — Anyone with the URL » (déjà sélectionné)
3. **Continue** → métadonnées SEO auto-générées, ne rien modifier
4. **Publish** (bouton bleu) → « Your app is live! » → tester l'URL dans un nouvel onglet et sur smartphone

---

## 6. Barème S4 (rappel)

| Livrable | Critère éliminatoire | Points |
|---|---|---|
| L1 — URL lovable.app | App inaccessible = 0 | 35 pts |
| L2 — Projet Lovable public | Projet privé = 0 | 25 pts |
| L3 — Journal de Prompts | Moins de 4 prompts = -10 | 25 pts |
| L4 — Captures + Note | Non rendu = 0 | 15 pts |

Délai de dépôt : 48h après la séance sur e-Academy.

---

*KaayNioujangat — GET 409 — Swiss UMEF University — Campus de Dakar — Prompt Lovable S4*
