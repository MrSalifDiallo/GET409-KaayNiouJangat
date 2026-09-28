|  |
| --- |
| **GET 409 — Lab Sprint S3 — Correctif Interface**  **Nœud Réception/Réponse — Ce qui a changé & comment l'utiliser**  Swiss UMEF University — Campus de Dakar — Juin 2026 |

|  |
| --- |
| **💡 Pourquoi ce correctif ?**  Dans le handout S3 original, le nœud de sortie s'appelait "Sortie" et demandait de déclarer une variable de sortie dans un menu déroulant. Dans la version actuelle de Dify, ce nœud s'appelle **Réception** ou **Réponse** selon la langue de l'interface. Son fonctionnement a changé : il n'y a plus de menu "variable de sortie" — on compose le contenu directement dans un champ texte en y insérant la variable. |

**Ancienne interface vs Nouvelle interface**

|  |  |
| --- | --- |
| **❌ Ancienne interface**  Le nœud s'appelait Sortie  Il y avait un menu déroulant  On choisissait la variable dans une liste  *Ex : sélectionner Rédacteur · text* | **✅ Nouvelle interface**  Le nœud s'appelle Réception ou Réponse  Il y a un champ texte libre  On insère la variable avec { ou /  *Ex : taper { puis choisir Rédacteur · text* |

**Procédure pas à pas — À suivre dans l'ordre**

|  |
| --- |
| **Étape 1 — Repérer le nœud Réception dans votre workflow** |
| Ouvrez votre workflow dans l'éditeur Dify (Studio → votre workflow).  Sur le canvas, cherchez le dernier nœud de chaque branche.  S'il s'appelle Réception ou Réponse → c'est le bon nœud. C'est l'équivalent de l'ancien nœud Sortie.  💡 Astuce : il a une icône différente des nœuds LLM — souvent une bulle ou une flèche de sortie. |

|  |
| --- |
| **Étape 2 — Ouvrir le nœud Réception en cliquant dessus** |
| Cliquez une fois sur le nœud Réception pour ouvrir son panneau de configuration à droite.  Vous verrez un champ texte vide avec le libellé Contenu de sortie ou Output.  Ce champ est libre — vous pouvez y écrire du texte, ou y insérer une variable. |

|  |
| --- |
| **Étape 3 — Insérer la variable dans le champ texte** |
| Cliquez à l'intérieur du champ texte du nœud Réception.  Tapez le caractère { (accolade ouvrante).  Une liste de variables disponibles apparaît automatiquement.  Cherchez dans la liste : Rédacteur · text (ou Chercheur · text pour la branche IF).  Cliquez dessus pour l'insérer — la variable apparaît en bleu dans le champ. |

|  |
| --- |
| **💡 Alternative :** Si la liste n'apparaît pas avec {, essayez de taper / (barre oblique) dans le champ — les deux raccourcis fonctionnent selon la version. |

|  |  |
| --- | --- |
| **Voici ce que vous devez voir après insertion :**   |  | | --- | | Contenu de sortie  **█ Rédacteur** · **text** |   *La variable apparaît en surbrillance bleue dans le champ — c'est normal et c'est correct.* |

|  |
| --- |
| **Étape 4 — Vérifier les deux branches SI/SINON** |
| Votre workflow a deux branches, donc deux nœuds Réception à configurer :  Branche IF (question insuffisante) → nœud Réception IF  → Insérer la variable : Chercheur · text  Branche ELSE (fiche générée) → nœud Réception ELSE  → Insérer la variable : Rédacteur · text  Ouvrez chaque nœud et vérifiez que la bonne variable est insérée. |

|  |  |  |
| --- | --- | --- |
| **Branche** | **Nom du nœud Réception** | **Variable à insérer** |
| **IF** | Réception / message erreur | **Chercheur · text** |
| **ELSE** | Réception / Sortie 2 | **Rédacteur · text** |

|  |
| --- |
| **Étape 5 — Publier et tester** |
| Une fois les deux nœuds Réception configurés, cliquez sur le bouton Publier en haut à droite.  Attendez le message de confirmation de publication.  Cliquez sur Exécuter test (ou ouvrez l'URL publique).  Tapez une question test dans le champ de saisie, ex : Prix tomate cerise Niayes  Vérifiez que la fiche marché s'affiche bien dans la zone de résultat à droite. |

**Problèmes fréquents & solutions rapides**

|  |  |
| --- | --- |
| **❌ Problème** | **✅ Solution** |
| Je ne vois pas de champ texte dans le nœud Réception | Cliquez une fois sur le nœud pour l'ouvrir — le panneau s'affiche à droite de l'écran. |
| J'appuie sur { mais rien ne s'affiche | Essayez / (barre oblique) à la place. Si toujours rien : cliquez d'abord dans le champ texte pour l'activer, puis tapez { ou /. |
| La variable ne s'affiche pas dans la liste | Vérifiez que les nœuds précédents (Chercheur / Rédacteur) sont bien connectés au nœud Réception par un lien sur le canvas. |
| La publication échoue après modification | Vérifiez que les deux nœuds Réception (branche IF et branche ELSE) ont chacun une variable insérée — un nœud vide bloque la publication. |
| Le résultat du test est vide ou affiche "undefined" | La mauvaise variable a été insérée. Rouvrez le nœud Réception ELSE et vérifiez que c'est bien Rédacteur · text et pas autre chose. |

GET 409 — Swiss UMEF University — Campus de Dakar — Juin 2026 — Correctif Interface Dify S3