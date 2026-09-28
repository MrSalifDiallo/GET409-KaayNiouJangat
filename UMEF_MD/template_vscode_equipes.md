**📋 TEMPLATE ÉQUIPE — VS Code + Copilot**

Session alternative — Migration Lovable → VS Code

|  |
| --- |
| 🏫 GET 409 — Atelier IA No-Code | Swiss UMEF University — Campus de Dakar | Juin 2026  👤 Enseignant : M. Malick Faye Diagne  📌 MODE D'EMPLOI : Remplissez chaque zone violette ✏ avec les infos de votre projet.  Les exemples en italique montrent ce qu'une autre équipe écrirait.  Aucun [CROCHET] ne doit rester dans votre rendu final. |

# **SECTION 0 — Identification de l'équipe**

|  |
| --- |
| **✏ Nom de l'équipe et du projet** |
| *→ Ex: NiayesBiz — GreenSprint (agriculture)*  *→ Ex: SantéDakar — MediConnect (santé)*  *→ Ex: TransportCI — RouteAI (transport)*  *[Nom équipe] — [Nom projet]* |

|  |
| --- |
| **✏ URL du projet Lovable (avant migration)** |
| *→ Ex: niayes-fresh-connect.lovable.app*  *→ Ex: sante-connect-dakar.lovable.app*  *[votre-projet].lovable.app* |

|  |
| --- |
| **✏ URL du repo GitHub (après export)** |
| *→ Ex: github.com/niayes-biz/greensprint-niayes*  *→ Ex: github.com/sante-dakar/mediconnect*  *github.com/[votre-compte]/[nom-du-repo]* |

|  |
| --- |
| **✏ URL GitHub Pages (après déploiement)** |
| *→ Ex: niayes-biz.github.io/greensprint-niayes*  *→ Ex: sante-dakar.github.io/mediconnect*  *[votre-compte].github.io/[nom-du-repo]* |

# **SECTION 1 — Export Lovable → GitHub**

|  |
| --- |
| **✏ Nom du repository GitHub créé** |
| *→ Ex: greensprint-niayes*  *→ Ex: mediconnect-dakar*  *→ Ex: route-ai-transport*  *[nom-du-repo] — en minuscules, tirets, pas d'espaces* |

|  |
| --- |
| **✏ Fichier principal de votre page formulaire** |
| *→ Ex: src/pages/SaisiePrix.tsx (NiayesBiz)*  *→ Ex: src/pages/SaisieDonnees.tsx (santé)*  *→ Ex: src/pages/SaisieTrafic.tsx (transport)*  *src/pages/[NomDeLaPage].tsx* |

|  |
| --- |
| 📌 Pour vérifier que l'export a réussi :  → Aller sur github.com/votre-compte/nom-du-repo  → Le dossier src/ doit être visible avec vos fichiers React  → Le fichier package.json doit être à la racine |

# **SECTION 2 — Installation et lancement local**

|  |  |  |
| --- | --- | --- |
| **#** | **Commande** | **Résultat attendu / observation** |
| **1** | **git clone [URL-repo]** | *[Copier les fichiers ? Oui / Non — noter le résultat]* |
| **2** | **cd [nom-du-repo]** | *[Êtes-vous dans le bon dossier ?]* |
| **3** | **npm install** | *[Durée d'installation — noter si erreur]* |
| **4** | **npm run dev** | *[URL affichée dans le terminal — ex: localhost:5173]* |
| **5** | **Ouvrir http://localhost:5173** | *[Le site s'affiche ? Même rendu que Lovable ?]* |

# **SECTION 3 — Explorer le code avec Copilot**

Ouvrez votre fichier de page principale dans VS Code. Utilisez Copilot Chat pour comprendre le code existant.

|  |
| --- |
| **✏ Où se trouve le webhook Dify dans votre code ?** |
| *→ Ex: src/pages/SaisiePrix.tsx ligne 45 — fonction handleSubmit()*  *→ Ex: src/hooks/useDify.ts — hook personnalisé*  *[Fichier + ligne + nom de la fonction qui contient fetch()]* |

|  |
| --- |
| **✏ Question posée à Copilot Chat pour comprendre le code** |
| *→ Ex: 'Explique-moi ce que fait la fonction handleSubmit dans ce fichier'*  *→ Ex: 'Où est passée la variable donnees\_terrain dans ce composant ?'*  *[Votre question en français posée à Copilot]* |

|  |
| --- |
| **✏ Réponse de Copilot — ce qu'il a expliqué** |
| *→ Ex: Copilot a expliqué que fetch() envoie les données vers Dify et attend la réponse JSON*  *[Résumé en 2-3 phrases de ce que Copilot a expliqué]* |

# **SECTION 4 — Modification avec Copilot**

Choisissez une modification à apporter à votre projet. Utilisez Copilot pour l'implémenter.

|  |  |
| --- | --- |
| **Idée de modification** | **Ce que Copilot a généré / modifié** |
| Ajouter un horodatage automatique dans le formulaire | *[Décrire ce que Copilot a proposé — Tab pour accepter ou Échap pour refuser]* |
| Améliorer l'affichage de la fiche résultat | *[Décrire la modification — un tableau ? des couleurs différentes ?]* |
| Ajouter un message de validation avant l'envoi | *[Comment Copilot a implémenté la vérification du formulaire ?]* |

# **SECTION 5 — Déploiement GitHub Pages**

|  |  |  |
| --- | --- | --- |
| **#** | **Étape** | **Votre observation** |
| **1** | **npm run build** | *[Le dossier dist/ a été créé ? Taille approximative ?]* |
| **2** | **npm install --save-dev gh-pages** | *[Installation réussie ?]* |
| **3** | **Ajout script deploy dans package.json** | *[Montrer la ligne ajoutée]* |
| **4** | **npm run deploy** | *[Message de succès ? URL indiquée ?]* |
| **5** | **Activation GitHub Pages** | *[Branch gh-pages sélectionnée ? URL finale ?]* |

|  |
| --- |
| **✏ URL GitHub Pages finale de votre projet** |
| *→ Ex: niayes-biz.github.io/greensprint-niayes*  *→ Ex: sante-dakar.github.io/mediconnect*  *[votre-compte].github.io/[nom-du-repo] — tester que le site s'affiche* |

# **CHECKLIST FINALE — À rendre**

|  |  |
| --- | --- |
| ☐ | Projet Lovable exporté vers GitHub (URL du repo fournie) |
| ☐ | VS Code installé avec extensions : GitHub Copilot + Live Server + GitLens |
| ☐ | npm install réussi sans erreur critique |
| ☐ | npm run dev : site visible sur localhost:5173 |
| ☐ | Structure du code explorée : fichier du webhook Dify identifié |
| ☐ | Question posée à Copilot Chat : explication du code documentée |
| ☐ | Au moins une modification réalisée avec Copilot (décrite dans Section 4) |
| ☐ | npm run build : dossier dist/ créé |
| ☐ | npm run deploy : déploiement GitHub Pages réussi |
| ☐ | URL GitHub Pages fonctionnelle et partagée avec l'enseignant |
| ☐ | git add . + git commit + git push : modifications sauvegardées sur GitHub |
| ☐ | Aucun [CROCHET] restant dans le document |

|  |
| --- |
| 🎓 Template à compléter en équipe — GET 409 — Swiss UMEF University — Campus de Dakar — Juin 2026  Enseignant : M. Malick Faye Diagne |