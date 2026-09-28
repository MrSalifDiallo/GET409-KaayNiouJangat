|  |
| --- |
| **GET 409 — NiayesBiz — GreenSprint — S5**  **Tutoriel RAG : Base de Connaissances Dify**  Pipeline testé et validé — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | NiayesBiz |
| **Base créée** | GreenSprint\_KB\_v1 — Dify Connaissance |
| **Document indexé** | prix\_legumes\_juin2026.csv — 867 mots — 8 légumes Niayes |
| **Mode d'index** | Économique · Index inversé · Top K = 3 · Chunk size = 300 |
| **Nœud ajouté** | Récupération de connaissances → connecté au nœud CHERCHEUR |
| **Résultat** | **✅ Workflow RAG publié — fiche marché avec données CSV intégrées** |

|  |
| --- |
| **💡 Qu'est-ce que le RAG ?**  RAG = Retrieval-Augmented Generation : l'agent cherche d'abord dans VOS documents avant de générer.  Sans RAG → l'agent répond depuis ses données d'entraînement → risque d'hallucination.  Avec RAG → l'agent lit vos CSV/PDF → réponses ancrées dans vos données réelles.  Pour GreenSprint : le CSV de prix des légumes Niayes enrichit les fiches marché générées. |

**Étape 1 — Préparer le CSV de données**

|  |
| --- |
| **Étape 1 — Créer le fichier CSV dans Google Sheets** |

|  |
| --- |
| 1. Ouvrir Google Sheets (sheets.google.com) → nouveau classeur.  2. Coller ce tableau en cellule A1 (il se répartit automatiquement) : |

|  |
| --- |
| Légume,Zone,Prix\_FCFA\_kg,Disponibilité,Semaine,Source  Tomate cerise,Pikine,800,Oui,S23-2026,GreenSprint  Chou blanc,Niayes Nord,350,Oui,S23-2026,GreenSprint  Carotte,Thiaroye,550,Oui,S23-2026,GreenSprint  Oignon rouge,Louga,400,Oui,S23-2026,GreenSprint  Aubergine,Dakar Banlieue,500,Oui,S23-2026,GreenSprint  Poivron rouge,Niayes Sud,750,Oui,S23-2026,GreenSprint  Laitue,Pikine,300,Non,S23-2026,GreenSprint  Piment,Niayes Nord,600,Oui,S23-2026,GreenSprint |

|  |
| --- |
| 3. Fichier → Télécharger → Format CSV (.csv) → sauvegarder sous prix\_legumes\_juin2026.csv |

|  |
| --- |
| **✅ Règles d'un bon CSV pour Dify :**  En-têtes en ligne 1 — obligatoire (Légume, Zone, Prix...)  Séparateur : virgule — pas de point-virgule  Pas de cellules fusionnées — une valeur par cellule  Taille max : 15 MB par fichier — notre CSV fait ~500 bytes ✅ |

**Étape 2 — Créer la base de connaissances dans Dify**

|  |
| --- |
| **Étape 2 — Ouvrir l'onglet Connaissance et importer le CSV** |

|  |
| --- |
| 1. Dans Dify, cliquer sur l'onglet Connaissance (barre de navigation en haut).  2. Cliquer sur + Créer des Connaissances.  3. Laisser sélectionné : Importer à partir d'un fichier.  4. Cliquer Parcourir → sélectionner prix\_legumes\_juin2026.csv.  5. Vérifier que le fichier apparaît avec son nom et sa taille → cliquer Suivant. |

|  |
| --- |
| **Étape 3 — Configurer le chunking et l'indexation** |

|  |  |  |
| --- | --- | --- |
| **Paramètre** | **Valeur** | **Pourquoi** |
| **Longueur du morceau** | **300** | *CSV = données courtes — petits chunks suffisent* |
| **Chevauchement** | **50** | *Évite de couper une ligne CSV en plein milieu* |
| **Mode d'index** | **Économique** | *Plan gratuit Dify — fonctionne par mots-clés* |
| **Récupération** | **Index inversé** | *Recherche par correspondance exacte de mots* |
| **Top K** | **3** | *Nombre de chunks retournés par requête* |

|  |
| --- |
| **Cliquer sur Enregistrer & Traiter → attendre le message « INTÉGRATION TERMINÉE ».** |

|  |
| --- |
| **Étape 4 — Renommer la base et vérifier le statut** |

|  |
| --- |
| 1. Cliquer sur « Aller au document » → dans le panneau gauche, cliquer sur les « ... » → Paramètres.  2. Renommer : GreenSprint\_KB\_v1  **3. Vérifier dans Documents que le fichier affiche : 🟢 Disponible** |

**Étape 3 — Tester la base avant de connecter l'agent**

|  |
| --- |
| **Étape 5 — Test de Récupération — 3 questions à tester** |

|  |
| --- |
| Dans la base GreenSprint\_KB\_v1, cliquer sur « Test de Récupération » (menu gauche). |

|  |  |  |
| --- | --- | --- |
| **#** | **Question test** | **Résultat attendu** |
| **1** | *prix tomate cerise Pikine* | Chunk avec Tomate cerise · Pikine · 800 FCFA/kg ✅ |
| **2** | *légumes disponibles Niayes Nord* | Chunks avec Chou blanc et Piment disponibles ✅ |
| **3** | *légume indisponible* | Chunk avec Laitue · Non disponible ✅ |

**Étape 4 — Connecter la base à l'agent GreenSprint**

|  |
| --- |
| **Étape 6 — Ajouter le nœud Récupération de connaissances dans le workflow** |

|  |
| --- |
| 1. Aller dans Studio → ouvrir GreenSprint\_FicheMarché\_v2.  2. Cliquer sur le « + » entre le nœud DÉBUT et le nœud CHERCHEUR.  3. Sélectionner « Récupération de connaissances » dans la liste.  4. Dans le panneau du nœud :  → TEXTE DE LA REQUÊTE : sélectionner Début · query  → CONNAISSANCES : cliquer « + » → sélectionner GreenSprint\_KB\_v1  5. Cliquer sur le nœud CHERCHEUR → section CONTEXTE → sélectionner « Récupération de connaissances · result ».  6. Dans le prompt SYSTEM du CHERCHEUR, ajouter en bas : |

|  |
| --- |
| DONNÉES DE LA BASE DE CONNAISSANCES :  {{#context#}} |

|  |
| --- |
| **7. Cliquer sur Publier → Publier une mise à jour.** |

|  |
| --- |
| **⚠️ Note sur le mode Économique (index inversé) :**  L'index inversé fonctionne par correspondance exacte de mots-clés.  Si la question contient exactement les mots du CSV → bonne récupération.  Si les mots diffèrent → peut retourner des résultats approximatifs.  Exemple testé : « prix tomate cerise Pikine » → retourne tomate cerise Pikine 800 FCFA ✅  Solution avancée : mode Haute Qualité (embeddings) — nécessite une clé OpenAI externe. |

NiayesBiz — GET 409 — Swiss UMEF University — Campus de Dakar — Tutoriel RAG S5 — Juin 2026

|  |
| --- |
| **GET 409 — S5 — Template Étudiant**  **RAG : Base de Connaissances Dify pour votre Agent**  Swiss UMEF University — Campus de Dakar — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | ***[NOM DE L'ÉQUIPE]*** |
| **Nom de la base** | ***[NOM\_PROJET]\_KB\_v1*** |
| **Documents à uploader** | ***[CSV PRIX] + [PDF FICHE OU GUIDE — optionnel]*** |
| **Agent à connecter** | ***[NOM DE VOTRE WORKFLOW DIFY]*** |
| **Résultat visé** | ***L'agent répond avec les données réelles de votre CSV/PDF*** |

|  |
| --- |
| **📋 Consigne :**  Remplacez tous les [PLACEHOLDERS] en jaune par les informations de votre projet.  Votre CSV doit avoir des en-têtes en ligne 1 et des données réelles (pas génériques).  Testez toujours la base AVANT de la connecter à l'agent — onglet Test de Récupération.  Critère éliminatoire barème : base non indexée ou données génériques = 0 point. |

**Étape 1 — Préparer votre CSV de données réelles**

Remplacez les données NiayesBiz par les données de votre projet. Les **[PLACEHOLDERS EN JAUNE]** sont obligatoires.

|  |
| --- |
| *[EN-TÊTE 1],[EN-TÊTE 2],[EN-TÊTE 3],[EN-TÊTE 4],[Semaine],[Source]*  *# Exemples selon votre projet :*  *# Projet santé → Médicament,Pharmacie,Prix\_FCFA,Disponibilité,Semaine,Source*  *# Projet immobilier → Type,Quartier,Prix\_FCFA,Disponible,Mois,Source*  *# Projet formation → Formation,Centre,Coût\_FCFA,Places,Trimestre,Source*  *[VALEUR 1],[ZONE 1],[PRIX 1],Oui,[SEMAINE],GreenSprint*  *[VALEUR 2],[ZONE 2],[PRIX 2],Oui,[SEMAINE],GreenSprint*  *[VALEUR 3],[ZONE 3],[PRIX 3],Non,[SEMAINE],GreenSprint*  *# ... au moins 6 lignes de données réelles* |

**Étape 2 — Créer et configurer la base dans Dify**

|  |  |  |
| --- | --- | --- |
| **☐** | **Action** | **Paramètre / Valeur** |
| ☐ | ***Connaissance → + Créer*** | Importer à partir d'un fichier → uploader votre CSV |
| ☐ | ***Longueur du morceau*** | 300 (CSV) · 500 (PDF fiche) · 700 (PDF guide long) |
| ☐ | ***Mode d'index*** | Économique (plan gratuit) — Index inversé |
| ☐ | ***Enregistrer & Traiter*** | Attendre INTÉGRATION TERMINÉE + pastille verte |
| ☐ | ***Renommer la base*** | [NOM\_PROJET]\_KB\_v1 via les « ... » → Paramètres |
| ☐ | ***Vérifier le statut*** | Documents → Statut : 🟢 Disponible |

**Étape 3 — Tester et connecter l'agent**

|  |  |  |
| --- | --- | --- |
| **☐** | **Vérification** | **Ce que vous devez voir** |
| ☐ | ***Test Récupération Q1 (requête directe)*** | Chunks avec données exactes de votre CSV retournés |
| ☐ | ***Test Récupération Q2 (requête indirecte)*** | Chunks pertinents retournés même sans mot exact |
| ☐ | ***Test Récupération Q3 (hors-base)*** | Aucun chunk ou score faible — comportement attendu |
| ☐ | ***Nœud RAG ajouté au workflow*** | DÉBUT → RÉCUPÉRATION → CHERCHEUR visible sur canvas |
| ☐ | ***Requête connectée*** | TEXTE DE LA REQUÊTE → [votre variable d'entrée] |
| ☐ | ***Base connectée*** | CONNAISSANCES → [NOM\_PROJET]\_KB\_v1 affiché |
| ☐ | ***Contexte injecté*** | CHERCHEUR · CONTEXTE → Récupération de connaissances · result |
| ☐ | ***{{#context#}} dans le prompt*** | Ligne DONNÉES DE LA BASE DE CONNAISSANCES + {{#context#}} ajoutée |
| ☐ | ***Workflow publié*** | Publier une mise à jour → build sans erreur |
| ☐ | ***Test final end-to-end*** | Exécuter test → fiche générée avec données de votre CSV |

|  |  |
| --- | --- |
| **❌ Problème fréquent** | **✅ Solution** |
| Base ne s'indexe pas | Fichier > 15MB ou scan PDF → convertir en PDF natif ou fractionner |
| Test de récupération vide | Mots de la question trop différents du CSV → utiliser les mots exacts du fichier |
| Agent ignore la base | Vérifier que GreenSprint\_KB\_v1 est bien dans CONNAISSANCES du nœud RAG |
| {{#context#}} non reconnu | Vérifier que le contexte est connecté dans CHERCHEUR · CONTEXTE avant de publier |
| Réponses hors-sujet | Chunk size trop grand → réduire à 200. Reformater le CSV en tableaux clairs |

GET 409 — Swiss UMEF University — Campus de Dakar — Template RAG S5 — Juin 2026