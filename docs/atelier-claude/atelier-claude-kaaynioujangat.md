# Atelier Claude Code — adapté à KaayNioujangat

GET 409 — Design Thinking & IA · Swiss UMEF University, Campus de Dakar

**Étudiant :** Salif Diallo · **Enseignant :** M. Malick Faye Diagne · **Date :** 6 octobre 2026

**Projet fil rouge :** KaayNioujangat, le résumé quotidien du marché crypto en français courant pour les débutants au Sénégal (`kaaynioujangat-html.html`).

## Comment lire ce document

L'atelier d'origine suit un studio fictif (« ATA suarl ») et un fichier `ata-card.html`. Ici, tout est transposé à mon projet : `ata-card.html` devient **`kaaynioujangat-html.html`**, et les prompts parlent de KaayNioujangat (prix en FCFA, français courant, aucune donnée inventée, « ceci n'est pas un conseil financier »).

**Tout ce qui est montré a été réellement exécuté** sur ma machine, avec Claude Code 2.1.292 (plan Pro), dans des dossiers de labo `~/claude-lab/…`. Les captures d'écran du terminal sont de vraies captures de fenêtres PowerShell ; celles du site et des pages générées sont prises dans Chrome. Aucun écran n'est reconstitué. Les fichiers produits sont dans le dossier `exercices/`.

Les exercices ont été lancés en mode non interactif (`claude -p`, avec `--permission-mode plan` ou `acceptEdits`), sauf `/usage` capturé dans une vraie session. Ce qui n'a **pas** été fait est listé dans la section « Limites ».

Périmètre traité : parcours **Essentiel E00 à E06**. Les épisodes E07 à E14 (PromptLens, boucle Ralph, agents) ne sont pas traités.

## E00 — Installation vérifiée

**Objectif :** Claude Code à jour (2.1.280 ou plus), connecté au plan Pro, sans clé API.

```
claude --version
node --version
git --version
claude doctor
```

**Résultat réel :** Claude Code **2.1.292**, Node v22.13.0, Git 2.47.1, aucune clé API dans l'environnement. `claude doctor` : installation npm globale, mises à jour automatiques actives (dernière mise à jour réussie le 06/10/2026), `Organization policy: not applicable to Pro and Max accounts` et « No installation issues found ».

![[IMG: e00-versions.png | Versions et absence de clé API (sortie réelle)]]

![[IMG: e00-claude-doctor.png | `claude doctor` (sortie réelle)]]

## E01 — Premier prompt : la page KaayNioujangat

**Objectif :** lancer Claude dans un dossier d'exercice et générer la page. Ma page `kaaynioujangat-html.html` avait déjà été générée avant cet atelier ; elle sert de référence pour tout le reste.

```
mkdir $HOME\claude-lab\01-hello
cd $HOME\claude-lab\01-hello
git init
claude
```

Au premier lancement dans un dossier, Claude demande si on lui fait confiance. Ensuite l'écran d'accueil indique la version et le plan.

![[IMG: e01-confiance-dossier.png | Écran d'accueil : Claude Code v2.1.292, Sonnet 5.5, Claude Pro]]

**Prompt de départ (adapté de `ata-card.html`) :**

```
Context: I am building KaayNioujangat, a daily crypto market summary in plain French for beginners in Senegal.
Task: Create a single self-contained file `kaaynioujangat-html.html`: a one-page site with 5 views (Accueil, Résumé du Jour, Signaux du Jour, Offres, Contact), a light/dark toggle, a price ticker, a signals grid with search/filter/sort, and a footer.
Constraints: One file, no framework. French copy. Prices in FCFA. Do not invent users, testimonials or figures other than clearly labelled demo data. Always show "Ceci n'est pas un conseil financier". Never put API keys in the page.
Definition of done: Opening the file in a browser shows the site, responsive down to 360px wide.
```

**Consommation :** `/usage` lancé dans une vraie session interactive. Il montre le quota Pro en cours (38 % de la session, 5 % de la semaine au moment de la capture).

![[IMG: e01-usage.png | `/usage` : consommation du quota Pro (session réelle)]]

**La page obtenue**, thème sombre (par défaut) et thème clair :

![[IMG: site-accueil-sombre.png | Accueil, thème sombre]]

![[IMG: site-accueil-clair.png | Accueil, thème clair]]

## E02 — Qui décide ? Mode plan et retour arrière

**Objectif :** planifier sans rien modifier, approuver, puis vérifier avec git.

**Adaptation.** L'atelier demande d'ajouter un thème inverse. Dans mon projet, le thème clair/sombre **existe déjà** (variables `:root[data-theme="light"]`, bouton `#theme-toggle`, mémorisation dans `localStorage`). J'ai donc remplacé l'exercice par un vrai défaut trouvé en testant la page à 360 px.

**Le défaut.** À 360 px, la page déborde : `document.documentElement.scrollWidth` vaut **2234 px** au lieu de 360, l'en-tête mesure 2234 px, et seule la partie gauche (vide) du site est visible.

![[IMG: site-mobile-360-avant.png | Avant : à 360 px la page est illisible (débordement horizontal)]]

**Étape 1 : sauvegarde git.** Copie du fichier dans `~/claude-lab/01-hello`, puis `git add -A` et `git commit -m "page kaaynioujangat"`.

**Étape 2 : plan sans modification** (`claude -p --permission-mode plan`) avec ce prompt :

```
Context: `kaaynioujangat-html.html` overflows horizontally at 360px: scrollWidth is 2234px, the header is 2234px wide and the page cannot be used on a phone. The theme toggle already exists and must not change.
Task: Plan (do not edit yet) how to find the root cause and fix it, without changing the desktop layout.
Constraints: Keep the file self-contained. No new files. Do not touch the ticker animation or the theme logic.
Definition of done: A numbered plan with the suspected cause, the exact CSS change, and how you will test it at 360px and at 1280px.
Files to touch: `kaaynioujangat-html.html` (after plan approval only).
```

**Réponse réelle de Claude :** la cause est `.app`, une grille avec seulement `grid-template-rows`. Sa colonne implicite est en `auto`, donc elle s'élargit jusqu'à la largeur du ticker (`width: max-content`, environ 2234 px). Le correctif proposé : `grid-template-columns: minmax(0, 1fr);` dans `.app`. Le plan complet est dans `exercices/01-hello/plan-output.txt`.

![[IMG: e02-plan-mode.png | Début du plan produit par Claude en mode plan (sortie réelle)]]

**Preuve que rien n'a été modifié pendant le plan :** seul le fichier du plan est apparu dans `git status`, la page n'a pas changé.

![[IMG: e02-git-status-apres-plan.png | `git status` après le plan : la page est intacte]]

**Étape 3 : approbation et application** (`--permission-mode acceptEdits`, limité à ce seul changement). Le diff réel est d'une seule ligne ajoutée :

![[IMG: e02-diff.png | `git diff` après application du correctif (sortie réelle)]]

**Étape 4 : vérification dans Chrome.** À 360 px, `scrollWidth` passe de 2234 à **360**. À 1280 px, la page ne déborde pas non plus (`scrollWidth` 1265, soit la largeur de la fenêtre moins la barre de défilement). Je n'ai pas comparé le rendu du bureau avant et après.

![[IMG: site-mobile-360-apres-correctif.png | Après correctif : la page tient dans 360 px]]

**Limite.** Le correctif a été appliqué sur la copie du dossier de labo (`exercices/01-hello/kaaynioujangat-html.corrige-360px.html`). Mon fichier `kaaynioujangat-html.html` du dépôt n'a pas été modifié. Le retour arrière (Échap Échap / `/rewind`) est interactif : je ne l'ai pas démontré.

## E03 — Landing page : sans skill, puis avec frontend-design

**Objectif :** voir ce qu'une skill change : même demande, deux dossiers (`v1-no-skill`, `v2-skill`).

**Installation réelle du plugin**, limitée au dossier v2 (`--scope local`) :

```
claude plugin marketplace add anthropics/claude-plugins-official
claude plugin install frontend-design@claude-plugins-official --scope local
```

![[IMG: e03-install-frontend-design.png | Installation du plugin frontend-design (sortie réelle)]]

**V1, sans skill** (prompt : hero « Le marché crypto, expliqué simplement », 3 étapes, signaux de démonstration, offres, formulaire validé côté client, « Do not use any design skill »). **V2, avec la skill** : même contenu, « art direction rooted in Dakar », accents vert `#7af2a2` et ambre `#f2c06b` conservés, `prefers-reduced-motion` respecté.

Les deux pages ont été générées pour de vrai (`exercices/03-landing/`).

![[IMG: e03-v1-v2.png | Bureau : V1 sans skill (à gauche), V2 avec frontend-design (à droite)]]

![[IMG: e03-v1-v2-mobile.png | À 360 px : les deux pages tiennent sans défilement horizontal]]

**Direction artistique de la V2** (les 5 lignes données par Claude, résumées) : titres en Palatino (sérif chaleureux) ; palette « Atlantique au crépuscule » `#0c2b33` contre des murs blanchis de Gorée `#dfe9e5`, avec mon vert pour les actions et mon ambre pour le soleil et les avertissements ; hero aligné à gauche sur un horizon de mer, étapes en « ligne de pêche » pointillée, signaux en tableau ; mouvement limité (un soleil qui se lève une fois, deux vagues lentes), tout coupé en `prefers-reduced-motion` ; détail signature : une bande de strakes de pirogue (vert, ambre, blanc). Le texte complet est dans `exercices/03-landing/v2-direction-artistique.txt`.

**Ce qui s'est vraiment passé, avec les défauts :**

- **Premier essai de la V2 refusé.** Claude Code ne voit que le dossier où il est lancé : il n'a pas pu lire `../v1-no-skill/index.html` et l'a dit au lieu d'inventer le contenu (`exercices/03-landing/v2-essai1-acces-refuse.txt`). Je l'ai relancé en autorisant la lecture de ce seul dossier avec `--add-dir ../v1-no-skill`, sans désactiver les protections.
- **Défaut visuel de la V2.** Le « soleil » ambre chevauche le lien « Contact » du menu à 1280 px, et « Offres » à 360 px. Je ne l'ai pas corrigé : c'est un défaut à signaler.
- **Chargement de la skill non observé.** En mode non interactif, je n'ai pas vu la ligne « Skill(frontend-design:frontend-design) — Successfully loaded skill ». Le plugin est bien installé ; le rendu de la V2 est cohérent avec son usage, mais je ne peux pas le prouver par cette ligne.

## E04 — Commandes utiles et CLAUDE.md

**Objectif :** générer puis raccourcir un CLAUDE.md propre au projet.

Dans `v2-skill`, `/init` a produit un premier CLAUDE.md de **20 lignes**. Le prompt de réécriture (moins de 60 lignes, règles de design, de contenu, « Do / Don't ») l'a porté à **39 lignes**, toutes propres à la page : sections `#accueil`, `#comment`, `#signaux`, `#offres`, `#contact`, variables `:root` (`--mer`, `--vert` #7af2a2, `--ambre`), un seul point de rupture à 760 px, rappel « Ceci n'est pas un conseil financier » obligatoire à six endroits, signaux de démonstration jamais remplacés par de faux prix.

![[IMG: e04-claude-md.png | Début du CLAUDE.md réel (39 lignes)]]

Le fichier complet est dans `exercices/03-landing/v2-skill/CLAUDE.md`.

**Non fait :** la mémoire utilisateur (`~/.claude/CLAUDE.md`). Ce fichier existe déjà chez moi avec d'autres règles ; je ne l'ai pas modifié pour ne rien écraser.

## E05 — Ma voix de marque en une commande : /kaay-brand

**Objectif :** enregistrer l'identité KaayNioujangat dans une skill personnelle, puis produire un email, un post et un flyer cohérents.

**Valeurs reprises du vrai site** (aucune n'est inventée) : accroche « Le marché crypto, expliqué simplement » ; couleurs `#7af2a2` (principale), `#f2c06b` (accent), `#0f1418` (fond sombre), `#edf2f9` (texte) ; polices Avenir Next / Trebuchet MS / Segoe UI ; formule de clôture « Tu décides toi-même. » ; rappel obligatoire « Ceci n'est pas un conseil financier. ».

**La skill.** L'atelier demande à Claude de poser des questions avant d'écrire la skill. En mode non interactif il ne peut pas en poser : j'ai donc écrit moi-même `~/.claude/skills/kaay-brand/SKILL.md` (frontmatter avec `disable-model-invocation: true`, moins de 120 lignes) à partir des valeurs ci-dessus. Le fichier est dans `kaay-brand/SKILL.md`. Test réel dans un terminal PowerShell :

![[IMG: e05-kaay-brand-actif.png | `claude -p '/kaay-brand'` répond « Identité KaayNioujangat active. »]]

**Email** (`email-matin.html`, texte et HTML sous 150 mots, données de démonstration uniquement) : aux couleurs de la marque, avec le rappel et la formule de clôture.

![[IMG: e05-email.png | Email du matin généré avec /kaay-brand]]

**Post LinkedIn** (fichier `post-linkedin.txt`, environ 115 mots, 3 hashtags `#Crypto #Sénégal #ÉducationFinancière`). Extrait réel : « Un signal te dit quoi faire. Un résumé t'aide à comprendre. Et comprendre, c'est le premier pas. », puis « Ceci n'est pas un conseil financier. » et « Tu décides toi-même. »

**Flyer.** Je n'ai pas de photo de production : j'ai utilisé comme `hero.png` une vraie capture de mon site. Le premier flyer avait un défaut mesuré : la page A4 fait 1123 px de haut (297 mm) avec `overflow: hidden`, mais le contenu en faisait **1349**, donc 226 px étaient coupés, dont le bouton, la signature et l'avertissement « pas un conseil financier ».

![[IMG: e05-flyer-avant.png | Avant correction : le bas du flyer (bouton, avertissement) est coupé]]

Étape de correction (comme la correction vocale de l'atelier) : j'ai demandé à Claude de tout faire tenir dans une page. Mesure après correction : `clipped = false`, bas du pied de page à 1123 px, soit exactement une page A4.

![[IMG: e05-flyer.png | Après correction : tout le contenu tient dans l'A4, avertissement visible]]

**Petits défauts restants :** la capture du site recadre les boutons de la maquette, et « [ Heure à confirmer ] » passe sur deux lignes.

## E06 — Plugins : Playwright, analyse des concurrents, plan marketing

**Objectif :** installer deux plugins seulement dans ce dossier, analyser deux sites concurrents publics, puis produire un plan marketing.

**Installation réelle** (`~/claude-lab/06-plugins`, `--scope local`) : `playwright@claude-plugins-official` et `marketing@knowledge-work-plugins`.

![[IMG: e06-plugin-list.png | `claude plugin list` dans le dossier 06-plugins (sortie réelle)]]

**Incident pendant l'installation.** Ma première tentative a été coupée au milieu du clonage du dépôt `knowledge-work-plugins` : il restait un dossier temporaire verrouillé (`EBUSY`). Il avait disparu quand j'ai vérifié, aucun processus git ne tournait, et la deuxième tentative a réussi. Pour mémoire, `frontend-design` apparaît « disabled » dans ce dossier : il n'est installé que pour le dossier de l'épisode E03.

**Analyse des concurrents.** Playwright a visité deux sites publics français d'information crypto, **cryptoast.fr** et **journalducoin.com** (pages publiques, aucune connexion, aucun formulaire, aucun clic sur les bannières de cookies). Il a enregistré 4 captures pleine page ; ci-dessous, le haut de chacune des deux pages d'accueil.

![[IMG: e06-captures-playwright.png | Haut des pages d'accueil des deux concurrents (captures Playwright)]]

Constats du rapport `competitive-analysis.md` (chaque affirmation renvoie à une capture ou à une adresse, et « non observé » marque ce qui n'a pas été vu) : aucun des deux sites ne s'adresse au Sénégal, ni FCFA ni mobile money ; les deux mettent une offre partenaire avant l'actualité ; aucun prix visible ; contenus orientés Europe (€, PEA, MiCA). Cinq recommandations :

- faire du résumé quotidien l'action principale de la page, avec livraison par WhatsApp comme hypothèse à tester ;
- assumer l'angle ouest-africain (« pour les débutants au Sénégal », prix en FCFA) ;
- garder chaque résumé court et simple, et dater les explications ;
- rester non commercial et publier une politique d'indépendance ;
- une page légère, une seule action, une identité visuelle distincte des deux concurrents.

**Plan marketing** (`marketing-plan.html`, avec le plugin marketing) : positionnement, 3 piliers (« Clair et court », « Ancré ici », « Honnête et indépendant »), calendrier de 4 semaines (LinkedIn et chaîne WhatsApp), 7 améliorations de la page d'accueil, 5 idées d'acquisition, 3 gains rapides, suivi et index des preuves. Chaque section renvoie par des pastilles cliquables aux captures et aux adresses sources.

![[IMG: e06-plan-marketing.png | Haut de la page `marketing-plan.html`]]

**Limites assumées par le plan lui-même :** aucun objectif chiffré (les seuls chiffres viennent de l'analyse), trafic et taille des audiences « non observés » parce que les connecteurs SimilarWeb et Ahrefs demandent une autorisation dans claude.ai, cadre légal sénégalais à vérifier avant publication. Le rapport est écrit en anglais, car le prompt de l'atelier l'est.

## Le site en images

Captures du fichier `kaaynioujangat-html.html` (prix Binance réels convertis en FCFA au moment de la capture).

![[IMG: site-resume-sombre.png | Résumé du Jour]]

![[IMG: site-signaux-clair.png | Signaux du Jour (thème clair)]]

![[IMG: site-offres-sombre.png | Offres : consulter l'agent]]

![[IMG: site-contact-sombre.png | Contact]]

## Limites et ce qui reste à faire

- **Non traités :** épisodes E07 à E14.
- **Non faits :** `/model opusplan` (le modèle affiché au lancement est Sonnet 5.5, réglage inchangé), la mémoire utilisateur `~/.claude/CLAUDE.md`, le retour arrière `/rewind`, `/status` (non capturé).
- **Mode non interactif :** les exercices ont été lancés avec `claude -p`. Certaines lignes visibles en session interactive (demandes de permission, « Skill … Successfully loaded ») n'apparaissent donc pas.
- **Correctif de la page :** appliqué seulement dans la copie du labo ; à reporter dans `kaaynioujangat-html.html` si je le décide.
- **Défauts constatés, non corrigés :** « soleil » de la V2 qui recouvre le menu ; recadrage et retour à la ligne du flyer.
- **Marque :** la skill `/kaay-brand` a été écrite directement, sans le jeu de questions-réponses de l'atelier.

## Bilan

- L'atelier est transposé à KaayNioujangat et chaque exercice a été exécuté pour de vrai, avec des captures réelles.
- Le test à 360 px (E02) a révélé un vrai défaut de la page, avec une cause identifiée par Claude et un correctif d'une ligne vérifié.
- Une skill change nettement le rendu (E03), mais elle ne remplace pas la vérification : la V2 est plus travaillée et a aussi un défaut visuel, et le premier flyer coupait l'avertissement légal.
- Claude Code ne voit que son dossier (E03) : c'est une sécurité utile, à contourner de façon ciblée (`--add-dir`) plutôt qu'en coupant les protections.
- Les plugins se limitent au dossier où ils servent (E06), ce qui ménage le quota Pro.
