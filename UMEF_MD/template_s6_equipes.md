**📋 TEMPLATE ÉQUIPE — S6**

RAG Avancé & Input Manuel Anti-Hallucination

Santé · Transport · E-learning · Tout domaine

|  |
| --- |
| 🏫 GET 409 — Atelier IA No-Code | Swiss UMEF University — Campus de Dakar | Juin 2026  👤 Enseignant : M. Malick Faye Diagne  📌 MODE D'EMPLOI :  1. Chaque zone violette ✏ est à compléter par votre équipe.  2. Les exemples en italique montrent ce qu'une autre équipe écrirait dans votre domaine.  3. Copiez les prompts pré-rédigés, adaptez les [CROCHETS], testez, documentez.  4. Aucun crochet ne doit rester dans votre version finale. |

# **SECTION 0 — Identification de l'équipe**

|  |
| --- |
| **✏ Nom de l'équipe** |
| *→ Ex: NiayesBiz (agriculture)*  *→ Ex: SantéDakar (santé)*  *→ Ex: TransportCI (transport)*  *[Nom de votre équipe]* |

|  |
| --- |
| **✏ Nom du projet IA** |
| *→ Ex: GreenSprint — connecter les maraîchers aux acheteurs*  *→ Ex: MediConnect — orienter les patients vers les bons centres de santé*  *→ Ex: RouteAI — informer les usagers sur l'état du trafic en temps réel*  *[Nom de votre projet — une phrase de description]* |

|  |
| --- |
| **✏ Domaine principal** |
| *→ 🏥 Santé | 🚌 Transport | 📚 E-learning | 🌿 Agriculture | 💰 Finance | ✈ Tourisme | Autre*  *[Cocher ou écrire votre domaine]* |

|  |
| --- |
| **✏ Persona principal (utilisateur cible)** |
| *→ Ex: Fatou, 34 ans, infirmière de quartier, Pikine, smartphone Android basique*  *→ Ex: Moussa, 28 ans, chauffeur de taxi, Dakar, feature phone*  *→ Ex: Aminata, 19 ans, étudiante, Thiès, smartphone, connexion limitée*  *[Prénom · âge · profession · localisation · appareil utilisé]* |

|  |
| --- |
| **✏ URL de votre MVP Lovable (si déployé)** |
| *→ Ex: niayes-fresh-connect.lovable.app*  *→ Ex: sante-connect-dakar.lovable.app*  *[votre-projet.lovable.app] — laisser vide si pas encore déployé* |

# **SECTION 1 — Le problème d'hallucination dans votre projet**

## **1.1 Qu'est-ce que l'hallucination IA dans votre contexte ?**

L'hallucination IA, c'est quand le modèle invente une réponse qui semble correcte mais ne l'est pas. Dans certains domaines, cela peut avoir des conséquences graves. Identifiez le risque spécifique à votre projet.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Domaine** | **🏥 Santé** | **🚌 Transport** | **📚 E-learning** | **✏ Votre projet** |
| **Donnée critique** | Dosage d'un médicament | Temps de trajet en temps réel | Score ou progression d'un apprenant | *[Votre réponse]* |
| **Risque si inventée** | Patient mal soigné ou surdosage | Usager bloqué / en retard | Apprenant orienté vers mauvais module | *[Votre réponse]* |
| **Source fiable** | Fiche terrain du médecin/infirmier | Agent terrain / capteur GPS | Données LMS / formateur | *[Votre réponse]* |

|  |
| --- |
| **✏ Quelle donnée critique votre IA ne doit JAMAIS inventer ?** |
| *→ Santé : un dosage, un diagnostic, une disponibilité de médicament*  *→ Transport : un temps de trajet, un état de route, un prix de billet*  *→ E-learning : un score, une date d'examen, un prérequis de module*  *[Décrivez en 1-2 phrases la donnée critique de VOTRE projet]* |

|  |
| --- |
| **✏ Quel impact concret si l'IA invente cette donnée pour votre persona ?** |
| *→ Ex: Fatou donne un mauvais traitement à un patient → danger vital*  *→ Ex: Moussa attend un bus qui ne vient pas → perd sa course*  *→ Ex: Aminata révise le mauvais chapitre → échoue à l'examen*  *[Décrivez l'impact réel sur VOTRE persona si l'IA hallucine]* |

# **SECTION 2 — Étape 1 : Variable terrain dans Dify**

## **2.1 Nommer votre variable d'entrée**

|  |
| --- |
| 📏 RÈGLE DE NOMMAGE Dify (obligatoire) :  • Uniquement lettres minuscules, chiffres, underscore \_  • Pas d'accents, pas de tirets, pas d'espaces, pas de majuscules  • Doit être explicite : donnees\_terrain ✅ | DonnéesTerrain ❌ | data-field ❌ |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Domaine** | **🏥 Santé** | **🚌 Transport** | **📚 E-learning** | **✏ Votre projet** |
| **Nom variable** | donnees\_patient | donnees\_trafic | retour\_formateur | *[Votre réponse]* |
| **Type Dify** | Short Text / string | Short Text / string | Short Text / string | *[Votre réponse]* |
| **Requis ?** | NON (optionnel) | NON (optionnel) | NON (optionnel) | *[Votre réponse]* |
| **Pourquoi optionnel** | L'agent peut ne pas avoir de fiche terrain | Pas toujours un agent sur le terrain | Le formateur peut ne pas avoir de retour immédiat | *[Votre réponse]* |

|  |
| --- |
| **✏ Nom de votre variable (respecter les règles de nommage)** |
| *→ donnees\_patient | donnees\_trafic | retour\_formateur | donnees\_terrain*  *[votre\_variable — en minuscules, underscore, sans accent]* |

## **2.2 Actions dans Dify — nœud DÉBUT**

|  |  |  |
| --- | --- | --- |
| **#** | **Action** | **Ce que vous devez voir / saisir** |
| **1** | **Ouvrir le nœud DÉBUT** | Cliquer sur DÉBUT dans le canvas → panneau de droite s'ouvre |
| **2** | **Cliquer sur « + »** | Bouton + en haut à droite de la section CHAMP DE SAISIE |
| **3** | **Field Type** | Sélectionner : Short Text → string |
| **4** | **Variable Name** | Taper exactement : [votre\_variable] — voir section 2.1 |
| **5** | **Label Name** | Même valeur que Variable Name |
| **6** | **⚠ DÉCOCHER Required** | La case est cochée par défaut — IMPÉRATIF de la décocher |
| **7** | **Enregistrer** | Cliquer Enregistrer → variable visible sans badge 'requis' |
| **8** | **Vérifier** | Nœud DÉBUT affiche : query (requis) + [votre\_variable] (sans 'requis') |

# **SECTION 3 — Étape 2 : Prompt anti-hallucination**

## **3.1 Comprendre la structure du prompt**

|  |
| --- |
| 💡 PRINCIPE : la règle anti-hallucination doit être en DÉBUT du prompt SYSTEM.  Le LLM lit de haut en bas — ce qui est en premier a plus de poids.  Elle s'insère AVANT le prompt existant de votre nœud CHERCHEUR. |

## **3.2 Template prompt à adapter — copier et remplir les [CROCHETS]**

Copiez ce prompt, remplacez chaque [CROCHET] par les informations de votre projet, puis collez-le EN TÊTE du prompt SYSTEM de votre nœud CHERCHEUR.

|  |
| --- |
| ⚠ RÈGLE ANTI-HALLUCINATION (PRIORITÉ ABSOLUE — lire avant tout) :  - Si {{[VOTRE\_VARIABLE]}} n'est PAS vide :  → Utilise UNIQUEMENT ces données pour [DONNÉE\_CRITIQUE].  → N'utilise PAS la base RAG pour [DONNÉE\_CRITIQUE].  → Source à indiquer : [TERRAIN — ex: agent terrain / médecin / formateur] + horodatage.  - Si {{[VOTRE\_VARIABLE]}} EST vide ou absent :  → Consulte la base RAG [NOM\_DE\_VOTRE\_BASE\_RAG].  → Source à indiquer : [RAG - estimation] + date des données.  - N'invente JAMAIS [DONNÉE\_CRITIQUE].  Si aucune source disponible, écrire EXACTEMENT :  "[DONNÉE\_CRITIQUE] non disponible — vérifier auprès de [SOURCE\_FIABLE]."  DONNÉES TERRAIN REÇUES :  {{[VOTRE\_VARIABLE]}}  ──────────────────────────────────────────  [Votre prompt CHERCHEUR original conservé ci-dessous] |

**Exemples de remplissage par domaine :**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Domaine** | **🏥 Santé** | **🚌 Transport** | **📚 E-learning** | **✏ Votre projet** |
| **[VOTRE\_VARIABLE]** | {{donnees\_patient}} | {{donnees\_trafic}} | {{retour\_formateur}} | *[Votre réponse]* |
| **[DONNÉE\_CRITIQUE]** | un dosage ou diagnostic | un temps de trajet ou état de route | un score ou prérequis de module | *[Votre réponse]* |
| **[NOM\_BASE\_RAG]** | SanteConnect\_KB\_v1 | TransportDakar\_KB\_v1 | CoursOnline\_KB\_v1 | *[Votre réponse]* |
| **[SOURCE\_FIABLE]** | un professionnel de santé | l'opérateur de transport | le formateur ou la plateforme LMS | *[Votre réponse]* |
| **[TERRAIN label]** | médecin / infirmier terrain | agent de terrain / capteur | formateur / données LMS | *[Votre réponse]* |

## **3.3 Votre prompt adapté — à compléter ici**

|  |
| --- |
| **✏ Collez ici votre prompt anti-hallucination complet après adaptation** |
| *→ Le prompt doit commencer par : ⚠ RÈGLE ANTI-HALLUCINATION...*  *→ Les [CROCHETS] doivent être remplacés par vos vraies valeurs*  *→ {{votre\_variable}} doit apparaître en orange dans Dify (variable reconnue)*  *[Collez votre prompt adapté ici — vérifier que Dify reconnaît la variable en orange]* |

## **3.4 Connecter la variable dans le message USER du CHERCHEUR**

|  |
| --- |
| 📌 ÉTAPE CRITIQUE souvent oubliée :  Dans le nœud CHERCHEUR → section USER → cliquer {x} → ajouter :  @ Début → [votre\_variable]  Sans cette étape, la variable est dans le prompt mais pas transmise au LLM.  Résultat attendu dans USER : @ Début [x] files / @ Début [x] [votre\_variable] |

# **SECTION 4 — Étape 3 : Connexion CHERCHEUR → RÉDACTEUR**

## **4.1 Pourquoi cette étape est indispensable**

|  |
| --- |
| ⚠ PROBLÈME FRÉQUENT : le RÉDACTEUR a son propre template d'exemple.  Sans connexion explicite, il génère la fiche depuis cet exemple interne  et IGNORE les données réelles produites par le CHERCHEUR.  Solution : connecter Chercheur.text au CONTEXTE du RÉDACTEUR + injecter {{#context#}} |

## **4.2 Actions dans le nœud RÉDACTEUR**

|  |  |  |
| --- | --- | --- |
| **#** | **Action** | **Résultat attendu** |
| **1** | **Ouvrir le nœud RÉDACTEUR** | Double-clic sur RÉDACTEUR dans le canvas |
| **2** | **Section CONTEXTE → cliquer {x}** | Sélectionner : Source = Chercheur · Variable = text |
| **3** | **Vérifier le CONTEXTE** | Affiche : ⓘ Chercheur [x] text String (icône 📄 bleue) |
| **4** | **Scroller en bas du prompt SYSTEM** | Trouver la fin du prompt existant |
| **5** | **Ajouter à la fin du prompt** | DONNÉES DU CHERCHEUR : {{#context#}} |
| **6** | **Vérifier la disparition du message orange** | Le warning 'remplissez la variable de contexte' doit disparaître |
| **7** | **Ajouter RÈGLE ABSOLUE en tête du prompt** | 'Si le texte contient [TERRAIN], recopie EXACTEMENT les données. Ne remplace JAMAIS par l'exemple interne.' |
| **8** | **Publier** | Bouton Publier en haut à droite → 'Publié il y a X minutes' |

# **SECTION 5 — Étape 4 : Tests A & B**

## **5.1 Test A — Sans données terrain (fallback RAG)**

Objectif : vérifier que sans données terrain, le workflow utilise la base RAG sans inventer.

|  |  |
| --- | --- |
| **TEST A (donnees vides)** | **Résultat attendu / obtenu** |
| **query saisie** | *[Votre question de test — ex: Quel bus prend-on de Plateau à Parcelles ?]* |
| **[votre\_variable]** | VIDE — laisser intentionnellement vide |
| **Source attendue** | *[RAG - estimation] ou mention de votre base RAG* |
| **Ce que vous observez** | *[Copiez ici la réponse obtenue dans Dify]* |
| **✅ Validé si** | La réponse cite la base RAG et n'invente pas de valeur précise |

## **5.2 Test B — Avec données terrain (anti-hallucination actif)**

Objectif : vérifier que les données terrain écrasent le RAG et sont recopiées exactement.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Domaine** | **🏥 Santé** | **🚌 Transport** | **📚 E-learning** | **✏ Votre projet** |
| **Données terrain exemple** | Dispensaire Pikine 10/06/2026 09h — Paracétamol 500mg : disponible. Stock : 45 boîtes. Source : infirmière Awa. | Axe Plateau→Parcelles 10/06/2026 08h30 — Bus 21 : 15 min d'attente. Embouteillage : nœud Liberté 6. Agent : Ibou. | Module Python S3 — 10/06/2026 — Aminata : 14/20. Exercice 3 non rendu. Note formateur : revoir les fonctions. | *[Votre réponse]* |
| **Valeur clé à retrouver** | 45 boîtes / disponible | 15 min / Bus 21 | 14/20 / exercice 3 | *[Votre réponse]* |

|  |  |
| --- | --- |
| **TEST B (données terrain)** | **Résultat attendu / obtenu** |
| **[votre\_variable] saisie** | *[Collez ici vos données terrain simulées — lieu, date, heure, valeur clé, source]* |
| **query saisie** | *[Même question qu'au Test A]* |
| **Valeur clé attendue** | *[La valeur exacte de vos données terrain — ex: 15 min, 350 FCFA, 14/20]* |
| **Source attendue** | *[TERRAIN] + horodatage de vos données* |
| **Ce que vous observez** | *[Copiez ici la réponse obtenue dans Dify]* |
| **✅ Validé si** | La valeur clé est EXACTEMENT celle des données terrain — pas une estimation RAG |

|  |
| --- |
| **✏ Comparaison Test A vs Test B — qu'est-ce que cela prouve ?** |
| *→ Ex: Test A donne une estimation, Test B donne la valeur exacte du terrain*  *→ Ex: Test B prouve que l'IA utilise les vraies données sans halluciner*  *→ Ex: La source change de [RAG] à [TERRAIN] selon la présence de données*  *[Analysez la différence entre les deux résultats en 2-3 phrases]* |

# **SECTION 6 — Étape 5 : Formulaire Lovable**

## **6.1 Prompt à envoyer à Lovable — copier et adapter**

Copiez ce prompt dans le chat Lovable (éditeur gauche). Remplacez les [CROCHETS].

|  |
| --- |
| Ajoute une page '[NOM\_PAGE — ex: Saisie Données Terrain]' dans le menu de navigation.  La page contient :  1. Titre '[EMOJI] [NOM\_PAGE]' en [COULEUR — ex: #1A7A3E]  2. Sous-titre '[RÔLE\_AGENT — ex: Agent terrain / Médecin / Formateur] — Données en temps réel'  3. Champ textarea (6 lignes) label '[LABEL\_DONNÉES — ex: Données observées]'  placeholder : 'Ex: [LIEU] [DATE] [HEURE] — [PRODUIT/SERVICE] : [VALEUR]'  4. Champ input label 'Votre question'  placeholder : 'Ex: [QUESTION\_TYPE — ex: Quel est le temps de trajet ?]'  5. Bouton [COULEUR] '[EMOJI] [LABEL\_BOUTON — ex: Générer la fiche]'  6. Zone résultat cachée par défaut, visible après réponse  Au clic : fetch POST https://api.dify.ai/v1/workflows/run  Headers : Authorization Bearer [VOTRE\_API\_KEY\_DIFY]  Body : {  inputs: { query: champQuestion, [VOTRE\_VARIABLE]: champDonnees },  response\_mode: 'blocking',  user: '[IDENTIFIANT — ex: agent-terrain]'  }  Afficher data.data.outputs.text dans zone résultat.  Extraire uniquement outputs.text (pas le JSON wrapper).  white-space: pre-line sur la div résultat.  Loading : '⏳ Génération en cours...' | Erreur : '❌ Erreur — réessayer'  Style : [COULEUR] Tailwind CSS mobile-first. |

## **6.2 Votre prompt Lovable adapté**

|  |
| --- |
| **✏ Collez ici votre prompt Lovable après adaptation (tous les crochets remplacés)** |
| *→ [NOM\_PAGE] remplacé : ex 'Saisie Données Patient'*  *→ [VOTRE\_VARIABLE] remplacé : ex donnees\_patient*  *→ [VOTRE\_API\_KEY\_DIFY] remplacé par votre vraie clé app-XXXX*  *[Collez votre prompt Lovable complet ici]* |

## **6.3 Validation de la page formulaire**

|  |  |
| --- | --- |
| ☐ | Page créée et visible dans le menu de navigation |
| ☐ | Champ données terrain (multiligne) présent avec placeholder adapté à votre domaine |
| ☐ | Champ question présent |
| ☐ | Bouton d'envoi avec couleur et emoji cohérents avec votre projet |
| ☐ | Clé API Dify insérée (app-XXXX...) |
| ☐ | Test d'envoi réussi : la fiche s'affiche sans JSON brut |
| ☐ | white-space: pre-line appliqué (pas de \n dans l'affichage) |
| ☐ | MVP publié sur lovable.app |

# **SECTION 7 — Éthique & Garde-fous**

## **7.1 Risques spécifiques à votre domaine**

|  |
| --- |
| ⚖ RAPPEL : les risques d'hallucination ne sont pas égaux selon les domaines.  Santé → risque vital | Transport → risque de sécurité | Finance → risque économique  E-learning → risque pédagogique | Agriculture → risque de revenu  Identifiez les risques SPÉCIFIQUES à votre projet et proposez vos garde-fous. |

**Exemples de risques par domaine :**

|  |  |  |
| --- | --- | --- |
| **⚠ Risque d'hallucination** | **Impact sur l'utilisateur** | **✔ Garde-fou proposé** |
| IA invente un dosage médicament (santé) | Patient prend mauvaise dose → hospitalisation | Afficher : 'Vérifier avec un professionnel de santé' sur toute fiche médicale |
| IA invente un temps de trajet (transport) | Usager rate son rendez-vous / reste bloqué | Horodater toutes les données + mention 'valable à [heure]' |
| IA invente un score d'apprenant (e-learning) | Apprenant orienté vers mauvais module | Ne jamais afficher de score sans source LMS vérifiée |
| Agent terrain saisit données fausses | Toute la chaîne d'utilisateurs est mal informée | Signature de l'agent + validation superviseur avant publication |

## **7.2 Tableau de garde-fous de votre projet**

|  |  |  |
| --- | --- | --- |
| **⚠ Risque identifié** | **Impact sur votre persona** | **✔ Votre garde-fou** |
| *[Risque 1 de votre projet]* | *[Impact sur votre persona]* | *[Votre garde-fou concret]* |
| *[Risque 2 de votre projet]* | *[Impact sur votre persona]* | *[Votre garde-fou concret]* |
| *[Risque 3 de votre projet]* | *[Impact sur votre persona]* | *[Votre garde-fou concret]* |

# **CHECKLIST FINALE — À rendre par l'équipe**

|  |  |
| --- | --- |
| ☐ | Section 0 : Équipe identifiée — nom, projet, domaine, persona, URL |
| ☐ | Section 1 : Donnée critique identifiée + impact sur le persona décrit |
| ☐ | Section 2 : Variable terrain créée dans Dify (nom correct, Required décoché) |
| ☐ | Section 3 : Prompt anti-hallucination rédigé + [crochets] tous remplacés |
| ☐ | Section 3 : Variable ajoutée dans le message USER du CHERCHEUR |
| ☐ | Section 4 : CONTEXTE RÉDACTEUR connecté à Chercheur.text |
| ☐ | Section 4 : {{#context#}} ajouté dans le prompt RÉDACTEUR |
| ☐ | Section 5 : Test A réalisé — source RAG affichée, aucun prix/valeur inventé |
| ☐ | Section 5 : Test B réalisé — valeur terrain exacte affichée, source [TERRAIN] |
| ☐ | Section 5 : Comparaison A vs B analysée en 2-3 phrases |
| ☐ | Section 6 : Page formulaire créée dans Lovable + test d'envoi réussi |
| ☐ | Section 7 : 3 risques identifiés + 3 garde-fous proposés |
| ☐ | Aucun [CROCHET] ou [Votre réponse] restant dans le document final |
| ☐ | Captures d'écran jointes pour chaque étape clé |

|  |
| --- |
| 🎓 Ce template est à compléter en équipe.  Tout crochet non remplacé = point manquant à l'évaluation.  GET 409 — Atelier IA No-Code — Swiss UMEF University — Campus de Dakar — Juin 2026  Enseignant : M. Malick Faye Diagne |