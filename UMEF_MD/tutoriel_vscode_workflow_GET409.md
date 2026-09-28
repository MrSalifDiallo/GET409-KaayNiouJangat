GET 409 — Atelier IA No-Code | Séance 6

**Tutoriel Étudiant**

**VS Code + GitHub + Dify**

Modifier et tester votre MVP localement

|  |
| --- |
| **🎯 Objectif**  Travailler sur votre MVP sans dépendre des crédits Lovable.  Modifier le code, tester le webhook Dify, et sauvegarder sur GitHub. |

# **1. Prérequis — Outils à installer**

Vérifiez que ces outils sont installés sur votre PC avant de commencer :

| **Outil** | **Téléchargement** | **Vérification** |
| --- | --- | --- |
| Git | https://git-scm.com/download/win | git --version |
| Node.js (LTS) | https://nodejs.org | node --version |
| Bun | https://bun.sh | bun --version |
| VS Code | https://code.visualstudio.com | Ouvrir VS Code |
| GitHub Copilot | Extension dans VS Code (gratuite) | Icône Copilot visible |

|  |
| --- |
| **📝 Note Bun vs npm**  Le projet NiayesBiz utilise Bun comme gestionnaire de paquets.  Si Bun n'est pas disponible, remplacez toutes les commandes bun par npm (même résultat). |

# **2. Cloner le projet depuis GitHub**

Vous allez copier le projet de votre équipe sur votre PC.

## **2.1 Ouvrir le terminal dans VS Code**

1. Ouvrir VS Code
2. Menu Terminal → Nouveau terminal
3. Un terminal PowerShell s'ouvre en bas de l'écran

## **2.2 Cloner le dépôt**

**cd C:\Users\[VOTRE\_NOM]\Desktop**

**git clone https://github.com/[NOM\_EQUIPE]/[NOM\_PROJET]**

**cd [NOM\_PROJET]**

|  |
| --- |
| **✅ Résultat attendu**  Un dossier avec le nom du projet apparaît sur le Bureau.  VS Code affiche les fichiers src/, routes/, components/ dans l'Explorateur à gauche. |

|  |
| --- |
| **⚠️ Si le dossier cloné est vide**  Lovable n'a pas encore poussé le code sur GitHub.  Solution : dans Lovable Chat, taper : 'Ajoute un commentaire invisible dans le code pour synchroniser avec GitHub'  Lovable fait un push automatique → refaire git pull dans le terminal. |

# **3. Installer les dépendances**

Le projet utilise des bibliothèques (React, Tailwind, etc.) à installer avant de lancer.

**bun install**

Attendez 30 secondes à 2 minutes selon votre connexion.

|  |
| --- |
| **✅ Résultat attendu**  Message : X packages installed  Le dossier node\_modules/ apparaît dans l'Explorateur à gauche. |

# **4. Lancer le serveur de développement**

**bun run dev**

Vite démarre et choisit un port automatiquement :

| **Situation** | **Message dans le terminal** | **Que faire** |
| --- | --- | --- |
| Port libre | VITE ready — Local: http://localhost:5173 | Ouvrir localhost:5173 |
| Port occupé | Port 5173 is in use, trying another one... | Vite essaie le port suivant |
| Ports 808X | Port 8080/8081/8082 is in use... | Vite prend 8083, 8084... |

Notez le port affiché et ouvrez dans votre navigateur : **http://localhost:[PORT]**

|  |
| --- |
| **✅ Le site s'affiche !**  Page d'accueil visible avec navigation, boutons et sections.  Toute modification du code se met à jour automatiquement (HMR actif). |

# **5. Configurer le fichier .env (clé API Dify)**

Le webhook Dify nécessite une clé API. Cette clé reste sur votre PC et ne va jamais sur GitHub.

## **5.1 Créer le fichier .env**

**New-Item -Name ".env" -ItemType File**

## **5.2 Y écrire les variables**

**Add-Content -Path ".env" -Value "VITE\_DIFY\_API\_KEY=app-XXXXXXXXXXXXXXXX"**

**Add-Content -Path ".env" -Value "VITE\_DIFY\_API\_URL=https://api.dify.ai/v1/workflows/run"**

Remplacez app-XXXXXXXXXXXXXXXX par votre clé API Dify (Dify → API → Clé API).

## **5.3 Vérifier**

**Get-Content .env**

|  |
| --- |
| **✅ Vous devez voir**  VITE\_DIFY\_API\_KEY=app-votreclé  VITE\_DIFY\_API\_URL=https://api.dify.ai/v1/workflows/run |

## **5.4 Protéger la clé — ajouter .env au .gitignore**

**Add-Content -Path ".gitignore" -Value ".env"**

## **5.5 Redémarrer Vite**

Obligatoire après toute modification du .env :

1. Dans le terminal Vite : Ctrl+C pour arrêter
2. Relancer : bun run dev

|  |
| --- |
| **🔒 Sécurité**  Ne partagez jamais votre fichier .env ou votre clé API.  Si la clé est visible sur GitHub, régénérez-en une nouvelle dans Dify immédiatement. |

# **6. Supprimer les faux positifs CSS**

VS Code affiche parfois des erreurs sur styles.css liées à la syntaxe Tailwind v4. Ce sont de faux positifs — le site fonctionne quand même.

**New-Item -Path ".vscode" -ItemType Directory -Force**

**New-Item -Path ".vscode\settings.json" -ItemType File -Force**

**'{"css.validate": false, "scss.validate": false, "less.validate": false}' | Set-Content ".vscode\settings.json"**

|  |
| --- |
| **✅ Résultat**  Les erreurs CSS disparaissent dans le panneau PROBLEMS.  Une suggestion (icône 💡) peut rester — ce n'est pas bloquant. |

# **7. Modifier le code avec Copilot Chat**

GitHub Copilot Chat (Ctrl+Shift+I) est votre assistant IA dans VS Code. Il lit le contexte du projet et modifie le code selon vos instructions.

## **7.1 Ouvrir Copilot Chat**

1. Appuyer sur Ctrl+Shift+I
2. Le panneau Copilot Chat s'ouvre à droite
3. Copilot lit automatiquement les fichiers de votre projet

## **7.2 Exemples de prompts**

| **Objectif** | **Prompt à utiliser** | **Résultat** |
| --- | --- | --- |
| Changer un texte | Change le titre principal en '[VOTRE TITRE]' dans index.tsx | Copilot modifie le fichier |
| Ajouter un filtre | Dans offres.tsx, ajoute un filtre par localisation | Nouveau composant filtre |
| Corriger HTTPError | Le webhook retourne 401, corrige la clé API | Code corrigé avec import.meta.env |
| Créer une page | Crée une page /contact avec formulaire nom, email, message | Nouveau fichier créé |

|  |
| --- |
| **💡 Conseil pour de bons prompts**  Mentionnez toujours : le nom du fichier, la fonctionnalité voulue, et le résultat attendu.  Copilot peut se tromper — relisez le code proposé avant de l'accepter (bouton Keep). |

# **8. Tester le webhook Dify**

La page 'Saisie Prix Terrain' envoie vos données à Dify et affiche la réponse de l'IA.

1. Dans le navigateur, cliquer sur 'Saisie Prix Terrain' dans la navigation
2. Un formulaire avec un champ texte apparaît
3. Saisir une question, ex : Quel est le prix de la tomate cette semaine ?
4. Cliquer sur 'Générer la fiche marché' et attendre la réponse

|  |
| --- |
| **✅ Résultat attendu (Mode RAG)**  Une fiche marché s'affiche avec les données de la base de connaissances.  SOURCES : GreenSprint\_KB\_v1 (RAG) visible en bas.  'Pas d'informations disponibles' pour certains champs — c'est normal en mode RAG seul. |

|  |
| --- |
| **❌ Si vous voyez HTTPError**  Vérifier que .env contient la bonne clé API (Get-Content .env).  Vérifier que Vite a été redémarré après création du .env.  Vérifier que le workflow Dify est bien publié (bouton Publier dans Dify). |

# **9. Sauvegarder sur GitHub**

Quand vos modifications sont testées en local, envoyez-les sur GitHub.

**git add .**

→ Prépare tous les fichiers modifiés

**git commit -m "Description courte de ce que vous avez fait"**

→ Crée un point de sauvegarde

**git push**

→ Envoie sur GitHub

|  |
| --- |
| **✅ Résultat attendu**  Writing objects: 100% ... done.  main -> main  Vos modifications sont visibles sur github.com |

|  |
| --- |
| **⚠️ Si git push est refusé**  GitHub contient des changements que vous n'avez pas.  Solution : git pull --rebase origin main puis git push |

# **Récapitulatif — Workflow complet**

| **#** | **Commande / Action** | **Résultat** |
| --- | --- | --- |
| 1 | git clone [url du projet] | Projet copié en local |
| 2 | bun install | Dépendances installées |
| 3 | bun run dev | Site sur localhost:[PORT] |
| 4 | Créer .env avec clé Dify | Webhook IA activé |
| 5 | .vscode/settings.json | Faux positifs CSS supprimés |
| 6 | Copilot Chat (Ctrl+Shift+I) | Modification du code assistée |
| 7 | Tester sur localhost | Vérification en local |
| 8 | git add . → commit → push | Sauvegarde sur GitHub |

|  |
| --- |
| **🌿 Projet pilote — NiayesBiz / GreenSprint**  Ce tutoriel est basé sur le projet GreenSprint : niayes-fresh-connect.lovable.app  Dépôt GitHub : github.com/maliksarr239-beep/niayes-fresh-connect  Adaptez les URLs et noms de fichiers avec les informations de votre propre équipe. |

Swiss UMEF University — Campus de Dakar | GET 409 Atelier IA No-Code | Juin 2026