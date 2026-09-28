**🛠 De Lovable à VS Code**

Prendre le code source, l'ouvrir localement et le modifier en temps réel

Lovable → GitHub → VS Code + GitHub Copilot → URL publique

|  |  |
| --- | --- |
| **📚 GET 409 — Atelier IA No-Code**  Swiss UMEF — Campus de Dakar — Juin 2026 | **👤 M. Malick Faye Diagne**  Session alternative — Crédits Lovable épuisés |

|  |
| --- |
| 🎯 CE QU'ON VA FAIRE DANS CE GUIDE :  1. Exporter le projet Lovable vers GitHub (1 clic, gratuit)  2. Cloner le code sur l'ordinateur avec Git  3. Ouvrir et modifier dans VS Code avec GitHub Copilot  4. Voir les modifications en temps réel sur localhost  5. Déployer sur GitHub Pages → URL publique gratuite  ⏱ Durée : 45-60 minutes | Prérequis : VS Code + Git + Node.js installés |

# **VUE D'ENSEMBLE — Le flux complet**

|  |
| --- |
| **🟠 Lovable** → export GitHub → **🐙 GitHub** → git clone → **🖥 VS Code** → **🌐 URL publique**  *Crédits épuisés Code sauvegardé Modifier + voir live Partager le lien* |

|  |  |  |  |
| --- | --- | --- | --- |
| **1**  **Exporter**  Lovable → Settings → Git → GitHub → Connecter et synchroniser | **2**  **Cloner**  git clone [URL] dans le terminal → code téléchargé en local | **3**  **Développer**  VS Code + Copilot → modifier le code → voir sur localhost | **4**  **Déployer**  npm run build → npm run deploy → URL GitHub Pages active |

# **SECTION 1 — Exporter Lovable vers GitHub**

## **1.1 Pourquoi exporter ?**

Lovable stocke le code dans son propre cloud. Pour travailler dans VS Code, il faut d'abord transférer ce code vers GitHub — un hébergement de code gratuit et universel.

|  |
| --- |
| 💡 L'export GitHub est GRATUIT — il ne consomme pas de crédits Lovable.  Même si les crédits sont épuisés, on peut toujours exporter le code.  C'est une fonctionnalité de base disponible sur tous les plans. |

## **1.2 Étapes d'export**

|  |  |
| --- | --- |
| **1** | **Ouvrir les Settings du projet Lovable**  Dans l'éditeur Lovable → cliquer sur le nom du projet en haut à gauche (avec la flèche ∨) → cliquer 'Settings'.  **✅ La page Project settings s'affiche.** |
| **2** | **Aller dans la section Git**  Dans le menu gauche de Settings → cliquer sur 'Git' sous la section Project.  **✅ La page affiche GitHub et GitLab comme options.** |
| **3** | **Cliquer sur GitHub**  Cliquer sur la carte 'GitHub — Sync your projects with GitHub'.  **✅ La page de connexion GitHub s'affiche.** |
| **4** | **Connecter le compte GitHub**  Cliquer '+ Add connection' → GitHub s'ouvre → cliquer 'Install & Authorize' → vérifier par email si demandé → revenir dans Lovable.  **✅ Le compte GitHub apparaît dans la liste des connexions.**  *💡 Si 'No installations available' s'affiche après autorisation, cliquer 'Refresh'.* |
| **5** | **Vérifier la synchronisation**  La page affiche : Repository = votre-compte/votre-projet · Branch = main · Status = Connected (point vert).  **✅ L'URL de clone HTTPS est visible : https://github.com/votre-compte/votre-projet.git**  **⚠ Si le repo est vide sur GitHub, faire une petite modification dans Lovable pour déclencher le push automatique.** |
| **6** | **Forcer la synchronisation si nécessaire**  Retourner dans l'éditeur Lovable → dans le chat, taper : 'Ajoute un espace dans un commentaire du code' → Lovable modifie et pousse automatiquement vers GitHub.  **✅ Le repo GitHub contient maintenant tous les fichiers du projet.** |

|  |  |
| --- | --- |
| **⚠ Problème** | **✔ Solution** |
| Le repo GitHub est vide après le clone | Faire une petite modification dans Lovable pour déclencher le push automatique vers GitHub |
| 'No installations available' dans Lovable | Cliquer Refresh — GitHub a autorisé mais Lovable n'a pas encore détecté |
| Erreur 'Invalid request' lors de l'autorisation | Recommencer depuis Lovable → Settings → Git → GitHub → Add connection |

# **SECTION 2 — Cloner le projet dans VS Code**

## **2.1 Qu'est-ce que git clone ?**

|  |  |
| --- | --- |
| **📖 git clone = photocopier**  git clone copie tout le contenu du repo GitHub sur votre ordinateur. C'est comme télécharger le projet complet avec tout son historique. | **✅ Résultat**  Un dossier niayes-fresh-connect/ apparaît sur votre Bureau avec tous les fichiers React du projet Lovable. |

## **2.2 Commandes à exécuter**

Ouvrir le terminal dans VS Code (Ctrl+`) et taper ces commandes une par une :

|  |
| --- |
| # Étape 1 — Aller sur le Bureau Windows  $ cd $HOME\Desktop  # Étape 2 — Cloner le projet depuis GitHub  # Remplacer par votre vraie URL (visible dans Lovable → Settings → Git)  $ git clone https://github.com/VOTRE-COMPTE/VOTRE-PROJET.git  ✅ Cloning into 'votre-projet'...  ✅ Receiving objects: 100% (180/180), done.  # Étape 3 — Ouvrir le projet dans VS Code  $ code VOTRE-PROJET  ✅ Une nouvelle fenêtre VS Code s'ouvre avec le projet |

|  |
| --- |
| ⚠ IMPORTANT : le projet Lovable utilise Bun (pas npm).  Si 'npm run dev' ne fonctionne pas, utiliser à la place :  $ npm install -g bun (une seule fois)  $ bun install (installer les dépendances)  $ bun run dev (lancer le serveur) |

## **2.3 Lancer le projet en local**

|  |
| --- |
| # Dans le terminal du projet cloné  # Option A — avec Bun (recommandé pour projets Lovable)  $ bun install  $ bun run dev  # Option B — avec npm (si Bun non disponible)  $ npm install  $ npm run dev  ✅ VITE ready in 500ms  ✅ Local: http://localhost:8080/  ✅ Network: http://192.168.x.x:8080/ |

|  |  |
| --- | --- |
| **1** | **Ouvrir le navigateur**  Aller sur http://localhost:8080 — le site s'affiche exactement comme sur lovable.app.  **✅ Le projet GreenSprint (ou votre projet) tourne en local.**  *💡 localhost = votre propre ordinateur. Le site n'est visible que par vous pour l'instant.* |
| **2** | **Tester la modification en temps réel**  Ouvrir n'importe quel fichier .tsx dans src/routes/ → modifier un texte → sauvegarder (Ctrl+S).  **✅ Le navigateur se met à jour AUTOMATIQUEMENT sans recharger — c'est le HMR (Hot Module Replacement).** |

# **SECTION 3 — Explorer et modifier avec GitHub Copilot**

## **3.1 Comprendre la structure du projet Lovable**

Quand on ouvre le projet dans VS Code, on voit l'arborescence complète. Voici les dossiers importants :

|  |  |
| --- | --- |
| **Fichier / Dossier** | **Ce qu'on y trouve — pourquoi c'est important** |
| **src/routes/** | ⭐ Les pages du site — index.tsx, offres.tsx, saisie-prix.tsx... |
| **src/components/** | Les composants réutilisables (bannière, carte, formulaire...) |
| **src/routes/saisie-prix.tsx** | ⭐⭐ Notre page avec le webhook Dify — c'est ici qu'on travaille |
| **package.json** | Liste des dépendances et scripts disponibles |
| **vite.config.ts** | Configuration du serveur de développement |
| **tailwind.config.ts** | Couleurs et styles Tailwind CSS |
| **.env ou .env.local** | Clé API Dify stockée ici (fichier privé, jamais sur GitHub) |
| **bunfig.toml** | Configuration Bun — remplace npm pour les projets Lovable récents |

## **3.2 Utiliser GitHub Copilot pour explorer le code**

Copilot Chat (Ctrl+Shift+I) permet de poser des questions sur le code en français. C'est le premier réflexe à avoir.

|  |  |
| --- | --- |
| **💬 Tu tapes dans Copilot Chat** | **✅ Copilot fait** |
| *Explique-moi la structure de ce projet. Quels sont les fichiers les plus importants ?* | Copilot lit tous les fichiers et explique : src/routes/ pour les pages, src/components/ pour les composants, vite.config.ts pour le serveur... |

|  |  |
| --- | --- |
| **💬 Tu tapes dans Copilot Chat** | **✅ Copilot fait** |
| *Où est le code qui appelle Dify ? Montre-moi la fonction qui envoie les données terrain.* | Copilot identifie le fichier exact (ex: saisie-prix.tsx ligne 45) et explique le fetch() avec les paramètres query et donnees\_terrain. |

|  |  |
| --- | --- |
| **💬 Tu tapes dans Copilot Chat** | **✅ Copilot fait** |
| *Je veux changer la couleur principale du site de vert foncé à bleu. Quels fichiers dois-je modifier ?* | Copilot liste tailwind.config.ts et les classes CSS à changer, avec les valeurs exactes à remplacer. |

|  |
| --- |
| **🐛 EXEMPLE RÉEL DE BUG VÉCU EN SESSION : “texte” vs “text”**  Le code cherchait result.data?.outputs?.text (anglais), mais Dify renvoyait outputs.texte (français) — résultat : le JSON brut s'affichait à l'écran au lieu du texte rédigé par l'agent.  Réflexe Copilot : copier le JSON affiché dans Copilot Chat et demander “Pourquoi ce texte ne s'affiche pas correctement ?” — Copilot repère l'incohérence de nom de champ en quelques secondes et propose la correction (1 ligne à modifier). |

## **3.3 Modifier le code et voir en temps réel**

|  |
| --- |
| 🔑 LE PRINCIPE CLÉ : Modifier → Sauvegarder (Ctrl+S) → Voir dans le navigateur  Le navigateur sur localhost:8080 se met à jour automatiquement.  Pas besoin de recharger la page — c'est le Hot Module Replacement (HMR). |

|  |  |
| --- | --- |
| **1** | **Ouvrir saisie-prix.tsx**  Dans l'explorateur VS Code → src/routes/ → cliquer sur saisie-prix.tsx (ou le nom de votre page formulaire).  **✅ Le code React s'affiche dans l'éditeur. On reconnaît le formulaire et le fetch() vers Dify.** |
| **2** | **Modifier un texte avec Copilot inline**  Cliquer sur la ligne du titre (ex: 'Saisie Prix Terrain') → commencer à taper le nouveau texte → Copilot suggère en gris → Tab pour accepter.  **✅ Le texte change dans le navigateur dès que Ctrl+S est appuyé.**  *💡 Copilot s'adapte au contexte — si on est dans un composant React, il suggère du JSX.*  *💡 Avec Rechercher/Remplacer (Ctrl+H), toujours vérifier le compteur “X of Y” avant de cliquer “Replace All” — un même texte peut exister à plusieurs endroits (titre visible ET balise meta invisible, par exemple). En cas de doute, remplacer une occurrence à la fois.* |
| **3** | **Ajouter une fonctionnalité avec Copilot Chat**  Ouvrir Copilot Chat (Ctrl+Shift+I) → taper : 'Dans saisie-prix.tsx, ajoute la date et heure actuelles automatiquement au début du champ données terrain'.  **✅ Copilot génère le code → cliquer 'Apply' → Ctrl+S → voir la modification sur localhost.** |
| **4** | **Tester le webhook Dify**  Sur localhost:8080, naviguer vers la page Saisie Prix → saisir des données terrain → cliquer Générer → la fiche marché s'affiche.  **✅ Le pipeline complet fonctionne en local : formulaire → Dify → fiche marché.** |

# **SECTION 4 — Déployer sur GitHub Pages**

## **4.1 Qu'est-ce que GitHub Pages ?**

GitHub Pages héberge votre site gratuitement et lui donne une URL publique du type votre-compte.github.io/votre-projet. N'importe qui peut accéder à ce lien sans avoir besoin de localhost.

|  |  |
| --- | --- |
| **localhost:8080**  → Visible UNIQUEMENT sur votre ordinateur  → Idéal pour développer et tester  → S'arrête quand on ferme VS Code | **github.io/votre-projet**  → Visible par TOUT LE MONDE  → URL permanente à partager  → Toujours en ligne, même sans VS Code |

## **4.2 Commandes de déploiement**

|  |
| --- |
| # Étape 1 — Modifier vite.config.ts pour GitHub Pages  # Ajouter base: '/nom-du-repo/' dans defineConfig  # Copilot peut faire ça : taper 'base:' et Tab  # Étape 2 — Installer l'outil de déploiement  $ npm install --save-dev gh-pages  # Étape 3 — Ajouter le script dans package.json  # "deploy": "gh-pages -d dist"  # (Copilot peut ajouter ça automatiquement)  # Étape 4 — Compiler le projet  $ npm run build  ✅ dist/ créé avec tous les fichiers optimisés  # Étape 5 — Déployer sur GitHub Pages  $ npm run deploy  ✅ Published sur GitHub Pages  # Étape 6 — Activer GitHub Pages sur github.com  # Settings → Pages → Branch: gh-pages → Save  # Attendre 2-3 min → URL active  ✅ https://votre-compte.github.io/votre-projet/ |

## **4.3 Utiliser Copilot pour le déploiement**

|  |  |
| --- | --- |
| **💬 Tu tapes dans Copilot Chat** | **✅ Copilot fait** |
| *Configure ce projet React pour être déployé sur GitHub Pages. Mon repo s'appelle niayes-fresh-connect.* | Copilot modifie vite.config.ts (base: '/niayes-fresh-connect/'), package.json (script deploy), et explique les commandes à exécuter. |

# **SECTION 5 — Cycle de travail quotidien**

## **5.1 Les 4 commandes Git à mémoriser**

|  |  |  |
| --- | --- | --- |
| **Commande** | **Action** | **Quand l'utiliser** |
| **git pull** | Récupérer les dernières modifs de GitHub | En début de session — pour avoir le code le plus récent |
| **git add .** | Préparer tous les fichiers modifiés | Après avoir codé — avant de sauvegarder |
| **git commit -m 'message'** | Enregistrer un point de sauvegarde | Après add — décrire ce qu'on a fait |
| **git push** | Envoyer vers GitHub | Après commit — pour partager avec l'équipe |

## **5.2 Session type de travail**

|  |
| --- |
| # ── DÉBUT DE SESSION ──────────────────────────────────  $ git pull # récupérer les dernières modifs  $ bun run dev # lancer localhost:8080  # ── PENDANT LA SESSION ────────────────────────────────  # Modifier le code dans VS Code  # Copilot suggère → Tab pour accepter  # Ctrl+S → le navigateur se met à jour automatiquement  # ── FIN DE SESSION ────────────────────────────────────  $ git add .  $ git commit -m "Ajout horodatage automatique dans SaisiePrix"  $ git push # envoyer vers GitHub  # ── DÉPLOIEMENT (quand prêt) ──────────────────────────  $ npm run build  $ npm run deploy  ✅ https://votre-compte.github.io/votre-projet/ mis à jour |

# **CHECKLIST FINALE — Session VS Code complète**

|  |
| --- |
| ✅ Cocher chaque point dans l'ordre. Ne passer à la suite que si le point précédent est validé. |

|  |  |  |
| --- | --- | --- |
| ☐ | **Étape** | **Vérification** |
| ☐ | **Export Lovable** | Lovable Settings → Git → GitHub → Connected (point vert) ✅ |
| ☐ | **Repo GitHub rempli** | github.com/votre-compte/votre-repo affiche les fichiers src/ et package.json |
| ☐ | **Clone réussi** | Le dossier votre-projet/ existe sur le Bureau avec les fichiers du projet |
| ☐ | **VS Code ouvert** | Le projet s'affiche dans l'explorateur de VS Code (pas de dossier vide) |
| ☐ | **Bun/npm installé** | bun install ou npm install → 'found 0 vulnerabilities' |
| ☐ | **Localhost actif** | bun run dev → http://localhost:8080 affiche le site |
| ☐ | **Site identique** | Le site sur localhost est identique au site sur lovable.app |
| ☐ | **Modification testée** | Modifier un texte → Ctrl+S → le navigateur se met à jour automatiquement |
| ☐ | **Copilot utilisé** | Poser une question en français dans Copilot Chat → réponse reçue sur le code |
| ☐ | **Git configuré** | git config --global user.email affiche votre email GitHub |
| ☐ | **Premier commit** | git add . → git commit → git push → modifications visibles sur GitHub |
| ☐ | **Déploiement (optionnel)** | npm run build → npm run deploy → URL github.io active |

|  |
| --- |
| 🎓 Guide produit pour le cours GET 409 — Atelier IA No-Code  Swiss UMEF University — Campus de Dakar — Juin 2026  Enseignant : M. Malick Faye Diagne  🔑 Rappel stack complète : Lovable → GitHub → VS Code + Copilot → localhost → GitHub Pages |