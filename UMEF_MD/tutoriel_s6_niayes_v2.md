**🌿 GreenSprint — Tutoriel S6 ✅ VALIDÉ**

RAG Avancé & Tracking Prix Temps Réel — Pipeline complet documenté

|  |  |
| --- | --- |
| **📚 GET 409 — Atelier IA No-Code**  Swiss UMEF — Campus de Dakar | **🏢 NiayesBiz — GreenSprint**  niayes-fresh-connect.lovable.app |
| **👤 M. Malick Faye Diagne**  Enseignant — Juin 2026 | **✅ Toutes étapes validées en live**  Tests A & B réussis — Pipeline en production |

|  |
| --- |
| 🎯 RÉSULTAT S6 : Pipeline anti-hallucination complet et validé en production  Formulaire Lovable → donnees\_terrain → CHERCHEUR → RÉDACTEUR → Fiche marché réelle  Test B validé : Tomate ronde · 350 FCFA/kg · Marché Sébikhotane · 10/06/2026 07h30 |

# **SECTION 1 — Architecture V3 (schéma final)**

|  |
| --- |
| **🌿 Formulaire Lovable — Page /saisie-prix**  Agent GIE saisit : lieu · date · heure · produit · prix FCFA/kg  ↓ POST webhook → inputs: { query, donnees\_terrain }  **🔵 Nœud DÉBUT Dify**  query (requis) + donnees\_terrain (optionnel)  ↓  **🟢 RÉCUPÉRATION DE CONNAISSANCES — GreenSprint\_KB\_v1**  ↓  **🟠 CHERCHEUR — Règle anti-hallucination (PRIORITÉ ABSOLUE)**  SI donnees\_terrain ≠ vide → [TERRAIN] | SINON → [RAG - estimation]  ↓ Chercheur.text → CONTEXTE RÉDACTEUR via {{#context#}}  **🟢 RÉDACTEUR — Fiche marché formatée (white-space: pre-line)**  ↓  **🟡 SORTIE 2 — Fiche affichée dans Lovable /saisie-prix** |

# **SECTION 2 — Étape 1 : Variable donnees\_terrain (FAIT ✅)**

|  |
| --- |
| 📍 Nœud DÉBUT → champ donnees\_terrain ajouté · type String · Required DÉCOCHÉ · optionnel |

|  |  |
| --- | --- |
| ☑ | Variable donnees\_terrain créée dans nœud DÉBUT |
| ☑ | Type : Short Text / string |
| ☑ | Case Required décochée — champ optionnel (badge 'facultatif' visible dans le test) |
| ☑ | Workflow sauvegardé automatiquement |

|  |
| --- |
| ⚠ ERREUR FRÉQUENTE : laisser Required coché bloque le workflow si l'agent  n'a pas de données terrain. Toujours décocher Required pour donnees\_terrain. |

# **SECTION 3 — Étape 2 : Prompt anti-hallucination CHERCHEUR (FAIT ✅)**

## **3.1 Règle insérée en tête du prompt SYSTEM**

Le bloc suivant a été inséré AVANT le prompt original 'Tu es un analyste...' — le LLM lit en priorité le début du contexte.

|  |
| --- |
| ⚠ RÈGLE ANTI-HALLUCINATION (PRIORITÉ ABSOLUE — lire avant tout) :  - Si {{donnees\_terrain}} n'est PAS vide :  → Utilise UNIQUEMENT ces données pour les prix.  → Ignore le RAG pour les prix. Source : [TERRAIN + horodatage].  - Si {{donnees\_terrain}} EST vide ou absent :  → Utilise le RAG GreenSprint\_KB\_v1. Source : [RAG - estimation].  - N'invente JAMAIS un prix. Si aucune source disponible :  → Écrire : "Prix non disponible — vérifier sur le marché."  DONNÉES TERRAIN REÇUES :  {{donnees\_terrain}}  ─────────────────────────────────────────  [Prompt original conservé en dessous] |

## **3.2 Variable donnees\_terrain dans le message USER**

Dans la section USER du nœud CHERCHEUR, la variable a été ajoutée :

|  |
| --- |
| USER (51 tokens) :  @ Début [x] files / @ Début [x] donnees\_terrain  → Dify injecte automatiquement les données terrain dans chaque appel au LLM. |

# **SECTION 4 — Étape 3 : Connexion CHERCHEUR → RÉDACTEUR (FAIT ✅)**

## **4.1 Problème identifié et résolu**

|  |  |
| --- | --- |
| **❌ Problème initial**  Le RÉDACTEUR avait son CONTEXTE vide — il inventait les données depuis son exemple interne (Tomate cerise, 750 FCFA...) | **✅ Solution appliquée**  CONTEXTE → Chercheur.text connecté + {{#context#}} ajouté dans le prompt + RÈGLE ABSOLUE insérée |

## **4.2 Configuration finale du RÉDACTEUR**

|  |  |
| --- | --- |
| **1** | **CONTEXTE connecté**  CONTEXTE → ⓘ Chercheur [x] text String (icône 📄 bleue visible dans le prompt) |
| **2** | **{{#context#}} injecté**  Ajouté dans le prompt SYSTEM : 'DONNÉES DU CHERCHEUR : {{#context#}}' — message orange disparu |
| **3** | **RÈGLE ABSOLUE ajoutée**  'Si le texte contient [TERRAIN], recopie EXACTEMENT les prix. Ne remplace JAMAIS par des données RAG.' |

# **SECTION 5 — Étape 3 : Tests A & B (VALIDÉS ✅)**

## **5.1 Test A — Sans données terrain (fallback RAG)**

|  |  |
| --- | --- |
| **Entrées Test A** | query : Quel est le prix de la tomate cette semaine aux Niayes ?  donnees\_terrain : VIDE |
| **Résultat obtenu** | ✅ Fiche générée depuis RAG GreenSprint\_KB\_v1  Poivron · 600-720 FCFA/kg · Niayes Sud/Mbour  Source : [RAG - estimation] — Aucun prix inventé |

## **5.2 Test B — Avec données terrain (anti-hallucination actif)**

|  |  |
| --- | --- |
| **Entrées Test B** | query : Quel est le prix de la tomate cette semaine aux Niayes ?  **donnees\_terrain : Marché Sébikhotane 10/06/2026 07h30 — Tomate ronde : 350 FCFA/kg, Oignon violet : 200 FCFA/kg, Carotte : 180 FCFA/kg. Source : agent GIE Niayes-Nord.** |
| **Résultat obtenu** | **✅ PRODUIT : Tomate ronde**  ✅ ZONE : Marché Sébikhotane  **✅ PRIX : 350 FCFA/kg (données terrain exactes)**  ✅ COLLECTE À : 10/06/2026 07h30  ✅ DISPONIBILITÉ : Disponible  **⚡ Zéro hallucination — RAG ignoré pour les prix** |

# **SECTION 6 — Étape 4 : Formulaire Lovable /saisie-prix (FAIT ✅)**

## **6.1 Page créée et publiée**

|  |  |
| --- | --- |
| ☑ | Page 'Saisie Prix Terrain' ajoutée dans le menu (entre Offres et Contact) |
| ☑ | URL : niayes-fresh-connect.lovable.app/saisie-prix |
| ☑ | Champ textarea 'Prix observés sur le marché' (6 lignes, placeholder Marché Sébikhotane...) |
| ☑ | Champ input 'Votre question' |
| ☑ | Bouton vert '🌿 Générer la fiche marché' |
| ☑ | Clé API Dify insérée (app-ECQNlPS67h...) |
| ☑ | Fix JSON : result.data.outputs.text extrait + white-space: pre-line appliqué |
| ☑ | Published — 4 Visitors — Up to date |

## **6.2 Test live validé sur niayes-fresh-connect.lovable.app**

|  |
| --- |
| FICHE MARCHE GREENSPRINT  Semaine · Niayes → Dakar  ────────────────────────────────  **PRODUIT : Tomate ronde**  **ZONE : Marché Sébikhotane**  **PRIX : 350 FCFA/kg**  TENDANCE : Non disponible  DISPONIBILITE : Disponible  **COLLECTE A : 10/06/2026 07h30**  ────────────────────────────────  ANALYSE  Le prix de la tomate ronde est stable car aucune variation n'est indiquée.  ────────────────────────────────  ALERTES  Conservation : max 48h sans réfrigération  ────────────────────────────────  RECOMMANDATIONS  Acheteurs : constituer des stocks avant fin de semaine.  ✅ Source : données terrain réelles — Zéro hallucination |

|  |
| --- |
| ⚠ FIX RESTANT (demain — 1 crédit Lovable) : résidu JSON {task\_id:...} en début de fiche.  Prompt : 'Extraire uniquement outputs.text sans le JSON wrapper.'  Les données sont correctes — c'est uniquement cosmétique. |

# **CHECKLIST S6 COMPLÈTE — NiayesBiz**

|  |  |
| --- | --- |
| ☑ | ✅ Étape 1 : donnees\_terrain dans nœud DÉBUT (optionnel, non requis) |
| ☑ | ✅ Étape 2 : Règle anti-hallucination en tête du prompt CHERCHEUR |
| ☑ | ✅ Étape 2 : donnees\_terrain dans USER du CHERCHEUR (@ Début [x] donnees\_terrain) |
| ☑ | ✅ Étape 2 : Workflow publié |
| ☑ | ✅ Étape 3A : Test sans données → source RAG, prix cohérent, zéro invention |
| ☑ | ✅ Étape 3B : Test avec données → Tomate ronde · 350 FCFA/kg · Sébikhotane · 07h30 |
| ☑ | ✅ Étape 4 : CONTEXTE RÉDACTEUR connecté à Chercheur.text |
| ☑ | ✅ Étape 4 : {{#context#}} injecté dans prompt RÉDACTEUR |
| ☑ | ✅ Étape 5 : Page /saisie-prix créée dans Lovable |
| ☑ | ✅ Étape 5 : Clé API Dify insérée |
| ☑ | ✅ Étape 5 : Test live validé — fiche marché affichée en production |
| ☑ | ⏳ Fix cosmétique JSON restant (demain — 1 crédit) |

# **STACK TECHNIQUE FINAL — Architecture V3**

|  |  |
| --- | --- |
| **Agent IA** | Dify.ai — Llama-3.1-8b-instant via GroqCloud |
| **Workflow** | GreenSprint\_FicheMarché\_v2\_NiayesBiz |
| **Base RAG** | GreenSprint\_KB\_v1 (CSV prix légumes Niayes) |
| **Nouvelle variable** | donnees\_terrain (string, optionnel) |
| **Règle clé** | Terrain > RAG (anti-hallucination) — validée |
| **Connexion** | CONTEXTE Rédacteur → Chercheur.text + {{#context#}} |
| **Webhook** | POST https://api.dify.ai/v1/workflows/run |
| **Frontend** | Lovable.dev — React + Tailwind CSS + Vite |
| **Page terrain** | /saisie-prix — formulaire agent GIE |
| **MVP live** | niayes-fresh-connect.lovable.app |
| **Persona** | Abdoulaye Ndiaye, 52 ans, Sébikhane, feature phone |
| **Résultat Test B** | Tomate ronde · 350 FCFA/kg · Sébikhotane · 07h30 ✅ |

|  |
| --- |
| 🎓 Tutoriel produit par l'équipe NiayesBiz — GET 409 — Swiss UMEF University — Dakar — Juin 2026  Enseignant : M. Malick Faye Diagne |