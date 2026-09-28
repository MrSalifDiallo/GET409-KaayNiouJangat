|  |
| --- |
| **GET 409 — NiayesBiz — GreenSprint — S5**  **Tutoriel Webhook : Lovable ↔ Dify**  Pipeline complet testé et validé — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | NiayesBiz |
| **MVP Lovable** | niayes-fresh-connect.lovable.app |
| **Agent Dify** | GreenSprint\_FicheMarché\_v2 — Llama-3.1-8b-instant via GroqCloud |
| **URL API Dify** | https://api.dify.ai/v1/workflows/run |
| **Résultat** | **✅ Pipeline Lovable ↔ Dify fonctionnel — Fiche marché affichée dans le MVP** |

**Étape 1 — Récupérer l'URL API et la clé Dify**

|  |
| --- |
| **Étape 1 — Ouvrir la page API de votre workflow Dify** |

|  |
| --- |
| 1. Ouvrir votre workflow dans Dify Studio.  2. Cliquer sur le bouton Publier (haut droite) → puis sur la flèche → Accéder à la référence API.  3. Noter la Base URL affichée : |

|  |
| --- |
| Base URL : https://api.dify.ai/v1  Endpoint : POST /workflows/run  URL complète : https://api.dify.ai/v1/workflows/run |

|  |
| --- |
| **Étape 2 — Créer la clé API secrète** |

|  |
| --- |
| 1. Sur la page API, cliquer sur « Clé API » en haut à droite.  2. Cliquer sur « + Créer une nouvelle clé secrète ».  3. Copier immédiatement la clé générée (format : app-xxxxxxxxxxxx).  **4. La coller dans un bloc-notes — elle ne s'affiche qu'une seule fois.** |

**Étape 2 — Envoyer le prompt webhook dans Lovable**

|  |
| --- |
| **Étape 3 — Ouvrir le MVP GreenSprint dans l'éditeur Lovable** |

|  |
| --- |
| Aller sur lovable.dev → Created by me → GreenSprint Connect → ouvrir l'éditeur. |

|  |
| --- |
| **Étape 4 — Coller le prompt d'intégration webhook** |

Cliquer dans le champ « Ask Lovable... » et coller ce prompt — remplacer uniquement la clé API :

|  |
| --- |
| Dans mon MVP GreenSprint, ajoute une fonctionnalité de  consultation de l'agent IA sur la page Offres.  INTERFACE À AJOUTER :  1. Un champ de texte avec placeholder :  "Posez votre question sur les prix et disponibilités..."  2. Un bouton vert "Demander à l'agent 🌿"  3. Une zone de résultat sous le formulaire (fond gris clair)  4. Un spinner de chargement pendant la requête  5. Un message d'erreur rouge si la requête échoue  CONNEXION WEBHOOK DIFY :  URL : https://api.dify.ai/v1/workflows/run  Méthode : POST  Headers :  Authorization: Bearer [COLLER\_TA\_CLÉ\_API\_ICI]  Content-Type: application/json  Body JSON :  { "inputs": {"query": valeurDuChampTexte},  "response\_mode": "blocking",  "user": "user-greensprint-" + Date.now() }  TRAITEMENT DE LA RÉPONSE :  - Succès : afficher response.data.outputs dans la zone résultat  - Erreur réseau : "Service temporairement indisponible"  - Timeout (>10s) : "La réponse prend trop de temps — réessayez"  STYLE : cohérent avec le MVP vert #059669. Responsive mobile. |

|  |
| --- |
| **⚠️ Note sécurité importante :**  La clé API sera visible dans le code frontend — c'est acceptable pour un prototype de cours.  En production réelle, il faudrait la passer via une server function (Lovable Cloud).  Ne partagez jamais votre clé API sur un dépôt public GitHub. |

**Étape 3 — Tester le pipeline complet**

|  |
| --- |
| **Étape 5 — Vérifier l'interface générée** |

|  |
| --- |
| 1. Dans le preview Lovable, cliquer sur « Offres » dans la navigation.  2. Vérifier que l'encadré « Agent IA GreenSprint » apparaît en haut de la page.  3. Vérifier que le champ texte et le bouton vert sont présents. |

|  |
| --- |
| **Étape 6 — Interroger l'agent et vérifier la réponse** |

|  |
| --- |
| 1. Taper cette question test dans le champ : |

|  |
| --- |
| Prix tomate cerise Niayes cette semaine |

|  |
| --- |
| 2. Cliquer sur « Demander à l'agent 🌿 ».  3. Observer le spinner de chargement (quelques secondes).  4. La fiche marché doit s'afficher dans la zone de résultat : |

|  |
| --- |
| 🌿 FICHE MARCHÉ GREENSPRINT — Semaine · Niayes → Dakar  🍅 PRODUIT : Tomate cerise | 📍 ZONE : Niayes  💰 PRIX : 250–350 FCFA/cageot de 12 kg | 📊 TENDANCE : Stable  ✅ DISPONIBILITÉ : Limitée | ⏰ COLLECTÉ À : 10h00  📋 ANALYSE : Le prix reste stable malgré les conditions climatiques défavorables...  ⚠️ ALERTES : Risque de rupture de stock en raison de la saison de pluie  💡 RECOMMANDATIONS : Producteurs — mesures sécurité cultures / Acheteurs — constituer stocks |

|  |  |  |
| --- | --- | --- |
| **✓** | **Vérification** | **Résultat attendu** |
| ✅ | **Encadré agent visible** | Section « Agent IA GreenSprint » en haut de la page Offres |
| ✅ | **Champ + bouton** | Champ texte + bouton vert « Demander à l'agent 🌿 » |
| ✅ | **Spinner affiché** | Animation de chargement pendant la requête API |
| ✅ | **Fiche marché reçue** | Réponse structurée avec PRODUIT, ZONE, PRIX, TENDANCE, RECOMMANDATIONS |
| ✅ | **Pipeline complet** | Lovable → Dify API → Agent → Réponse affichée dans le MVP |

NiayesBiz — GET 409 — Swiss UMEF University — Campus de Dakar — Tutoriel Webhook S5 — Juin 2026

|  |
| --- |
| **GET 409 — S5 — Template Étudiant**  **Webhook : Votre MVP ↔ Votre Agent Dify**  Swiss UMEF University — Campus de Dakar — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | ***[NOM DE L'ÉQUIPE]*** |
| **MVP Lovable** | ***[NOM-PROJET].lovable.app*** |
| **Agent Dify** | ***[NOM DU WORKFLOW DIFY — ex: MonProjet\_Workflow\_v2]*** |
| **URL API obtenue** | ***https://api.dify.ai/v1/workflows/run (identique pour tous)*** |
| **Résultat visé** | ***[NOM APP] répond aux questions des utilisateurs via l'agent IA*** |

|  |
| --- |
| **📋 Consigne :**  Remplacez tous les [PLACEHOLDERS] en jaune par les informations de votre projet.  L'URL API Dify est identique pour tous : https://api.dify.ai/v1/workflows/run  Seule la clé API change — chaque équipe génère la sienne depuis son workflow Dify.  ⚠️ Ne partagez jamais votre clé API publiquement. |

**Étape 1 — Récupérer votre clé API Dify**

|  |
| --- |
| **Étape 1 — Ouvrir votre workflow Dify et créer la clé** |

|  |
| --- |
| 1. Ouvrir votre workflow dans Dify Studio.  2. Cliquer Publier → flèche → Accéder à la référence API.  3. Cliquer « Clé API » en haut à droite → + Créer une nouvelle clé secrète.  **4. Copier la clé (format app-xxxx) → la noter dans un bloc-notes.** |

|  |  |
| --- | --- |
| **Ce que vous notez** | **Valeur à noter** |
| URL API (identique pour tous) | https://api.dify.ai/v1/workflows/run |
| Votre clé API secrète | ***app-[COLLER ICI — ne pas partager]*** |

**Étape 2 — Prompt webhook à adapter et envoyer dans Lovable**

Remplacez les **[PLACEHOLDERS EN JAUNE]** puis collez ce prompt dans Lovable :

|  |
| --- |
| *Dans mon MVP [NOM DE L'APPLICATION], ajoute une fonctionnalité*  *de consultation de l'agent IA sur la page [NOM DE LA PAGE].*  INTERFACE À AJOUTER :  1. Un champ de texte avec placeholder :  *"[VOTRE PLACEHOLDER — ex: Posez votre question...]"*  *2. Un bouton [COULEUR] "[TEXTE DU BOUTON]"*  3. Une zone de résultat sous le formulaire (fond gris clair)  4. Un spinner de chargement pendant la requête  5. Un message d'erreur rouge si la requête échoue  CONNEXION WEBHOOK DIFY :  URL : https://api.dify.ai/v1/workflows/run  Méthode : POST  Headers :  *Authorization: Bearer [COLLER\_VOTRE\_CLÉ\_API\_ICI]*  Content-Type: application/json  Body JSON :  { "inputs": {"query": valeurDuChampTexte},  "response\_mode": "blocking",  *"user": "[NOM-PROJET]-" + Date.now() }*  TRAITEMENT DE LA RÉPONSE :  - Succès : afficher response.data.outputs dans la zone résultat  - Erreur réseau : "Service temporairement indisponible"  - Timeout (>10s) : "La réponse prend trop de temps — réessayez"  *STYLE : cohérent avec le MVP [COULEUR PRINCIPALE]. Responsive mobile.* |

**Étape 3 — Tester et valider le pipeline**

|  |
| --- |
| **Étape 3 — Checklist de validation — 5 points à cocher** |

|  |  |  |
| --- | --- | --- |
| **☐** | **Vérification** | **Ce que vous devez voir** |
| ☐ | ***[NOM APP] — composant agent visible*** | Section agent IA bien intégrée dans votre MVP sur la page choisie |
| ☐ | ***Champ + bouton fonctionnels*** | Champ texte actif + bouton cliquable dans la bonne couleur |
| ☐ | ***Spinner affiché*** | Animation de chargement visible pendant la requête (quelques secondes) |
| ☐ | ***Réponse de l'agent reçue*** | Contenu structuré de votre agent Dify affiché dans la zone résultat |
| ☐ | ***Pipeline complet validé*** | MVP Lovable → Dify API → Agent → Réponse dans l'interface ✅ |

|  |  |
| --- | --- |
| **❌ Problème** | **✅ Solution** |
| Erreur 401 — Unauthorized | Clé API incorrecte ou expirée → Dify → Settings → API Keys → régénérer |
| Composant absent sur la page | Vérifier que le prompt mentionne bien le nom exact de votre page |
| Réponse vide ou undefined | Ajuster le chemin : essayer response.data.answer au lieu de response.data.outputs |
| Timeout — pas de réponse | Le workflow Dify est peut-être en pause → vérifier qu'il est bien publié |
| Erreur CORS dans la console | Lovable ne supporte pas les appels bloqués par CORS — la clé doit être Bearer token |

GET 409 — Swiss UMEF University — Campus de Dakar — Template Webhook S5 — Juin 2026