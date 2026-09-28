|  |
| --- |
| **GET 409 — S4 — Prompts Itérations Étudiant**  **Bolt.new — 3 types d'itérations à maîtriser**  Swiss UMEF University — Campus de Dakar — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | ***[NOM DE L'ÉQUIPE]*** |
| **Projet** | ***[NOM DU PROJET]*** |

|  |
| --- |
| **⚡ Règles d'or des itérations Bolt :**  1 prompt = 1 modification — ne jamais empiler plusieurs demandes dans un même message.  Si ça échoue 2 fois → simplifiez le prompt, ne le relancez pas tel quel.  Si ça part en boucle → cliquez Stop puis Revert pour revenir à la version précédente.  Les tokens se rechargent le lendemain — les itérations complexes en consomment beaucoup.  Commencez par les corrections simples (données, couleurs) avant les améliorations visuelles. |

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Exemple NiayesBiz testé |  | À remplacer — votre projet |  | Attention / avertissement |

|  |
| --- |
| **P1 [CORRECTION] Corriger une donnée existante**  *⚡ Consommation estimée : faible — ~5K tokens* |

**Quand l'utiliser :** Prix incorrect, statut à changer, texte à modifier, nom mal orthographié.

|  |  |
| --- | --- |
| **✅ Exemple NiayesBiz (testé)** | **✏️ Votre prompt à compléter** |
| *Change le prix de la Carotte*  *de 600 FCFA/kg à 550 FCFA/kg*  *et mets son statut en Disponible*  *au lieu de En rupture.* | *Change [CE QUI DOIT ÊTRE MODIFIÉ]*  *de [ANCIENNE VALEUR]*  *à [NOUVELLE VALEUR]*  *et mets [AUTRE MODIFICATION SI BESOIN].* |

|  |
| --- |
| **✅ Résultat attendu :**  Bolt répond : « Done. [Description de la modification] »  Version X créée automatiquement dans l'historique.  Build compile sans erreur.  Vérifiez la modification dans la page concernée du preview. |

**Autres prompts de correction utiles :**

|  |
| --- |
| # Corriger un texte  Remplace le texte "[ANCIEN TEXTE]" par "[NOUVEAU TEXTE]"  # Corriger une couleur  Change la couleur du bouton "[NOM DU BOUTON]" de [COULEUR ACTUELLE] à [NOUVEAU CODE HEX]  # Corriger toutes les occurrences  Remplace partout dans l'application "[ANCIEN MOT]" par "[NOUVEAU MOT]" |

|  |
| --- |
| **P2 [AMÉLIORATION VISUELLE] Ajouter un élément à l'interface**  *⚡ Consommation estimée : moyenne — ~15-25K tokens* |

**Quand l'utiliser :** Ajouter une section, une bannière, une carte, un bouton, une animation.

|  |  |
| --- | --- |
| **✅ Exemple NiayesBiz (testé)** | **✏️ Votre prompt à compléter** |
| *Ajoute une bannière d'annonce*  *en haut de toutes les pages*  *avec le texte : "🌿 Livraison*  *disponible sur Dakar —*  *Commandez avant 18h"*  *Fond vert foncé, texte blanc,*  *hauteur fine.* | *Ajoute [ÉLÉMENT À AJOUTER]*  *sur [PAGE(S) CONCERNÉE(S)]*  *avec le texte : "[VOTRE TEXTE]"*  *Style : [COULEUR DE FOND],*  *texte [COULEUR], [TAILLE : fine/normale].* |

|  |
| --- |
| **⚠️ Attention consommation tokens :**  Les améliorations visuelles consomment 3 à 5 fois plus de tokens qu'une correction.  Exemple testé : bannière animée = ~28K tokens consommés en une seule itération.  Conseil : faites d'abord toutes vos corrections simples, puis les améliorations visuelles.  Si tokens insuffisants → attendez le lendemain (recharge quotidienne). |

**Autres prompts d'amélioration utiles :**

|  |
| --- |
| # Ajouter une section sur la page Accueil  Ajoute une section "[NOM DE LA SECTION]" sur la page Accueil  avec [DESCRIPTION DU CONTENU — ex: 3 cartes, une image, un texte]  # Améliorer les cartes existantes  Ajoute [ÉLÉMENT — ex: une image placeholder, une icône, un badge]  sur chaque carte de la page [NOM PAGE 2]  # Rendre le site plus professionnel  Ajoute des animations d'apparition (fade-in) sur les sections  de la page Accueil au défilement. |

|  |
| --- |
| **P3 [AMÉLIORATION FONCTIONNELLE] Ajouter une fonctionnalité interactive**  *⚡ Consommation estimée : élevée — ~25-40K tokens* |

**Quand l'utiliser :** Ajouter un comportement dynamique : défilement, compteur, filtre avancé, animation.

|  |  |
| --- | --- |
| **✅ Exemple NiayesBiz (testé)** | **✏️ Votre prompt à compléter** |
| *Fais défiler la bannière*  *d'annonce en boucle avec*  *3 messages :*  *"🌿 Livraison disponible sur*  *Dakar — Commandez avant 18h"*  *"🥕 Nouveaux arrivages*  *chaque matin aux Niayes"*  *"📦 Paiement Wave accepté"* | *Fais [FONCTIONNALITÉ DYNAMIQUE]*  *sur [ÉLÉMENT CONCERNÉ]*  *avec [NOMBRE] [ÉLÉMENTS] :*  *"[CONTENU 1]"*  *"[CONTENU 2]"*  *"[CONTENU 3]"*  *[PRÉCISION TECHNIQUE SI BESOIN]* |

|  |
| --- |
| **✅ Résultat attendu :**  Bolt indique le comportement ajouté (ex: « cycles through 3 messages every 4 seconds with fade »).  Testez la fonctionnalité en temps réel dans le preview — attendez quelques secondes.  Si la fonctionnalité ne s'active pas → rechargez le preview (bouton reload en haut). |

**Autres prompts fonctionnels utiles :**

|  |
| --- |
| # Ajouter un compteur animé  Anime les 3 statistiques de la page Accueil :  les chiffres défilent de 0 jusqu'à leur valeur finale au chargement.  # Ajouter une recherche  Ajoute un champ de recherche sur la page [NOM PAGE 2]  qui filtre les [ÉLÉMENTS] en temps réel selon le texte saisi.  # Ajouter un retour en haut  Ajoute un bouton flottant « ↑ » en bas à droite qui remonte  en haut de la page au clic. Visible uniquement après défilement. |

**Protocole d'urgence — Quand ça ne marche pas**

|  |  |
| --- | --- |
| **Problème** | **Solution** |
| Build en erreur après itération | Copiez le message d'erreur → tapez : « Corrige cette erreur : [coller le message] » |
| Bolt tourne en boucle sans finir | Cliquez Stop → puis Revert → simplifiez votre prompt en 1 seule action. |
| Modification non visible dans le preview | Cliquez le bouton reload (↺) en haut du preview pour forcer le rafraîchissement. |
| Tokens épuisés (0K restants) | Revenez le lendemain — les tokens se rechargent quotidiennement. Ne créez pas un nouveau projet. |
| L'itération a cassé une page entière | Cliquez l'icône historique (horloge) → sélectionnez la dernière version fonctionnelle → Restore. |

**Journal des itérations — À remplir (L3)**

Pour le livrable L3, documentez chaque prompt envoyé dans ce tableau :

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **#** | **Type** | **Objectif** | **Prompt envoyé** | **Résultat** |
| **P1** | ***[ ]*** | ***[OBJECTIF]*** | ***[PROMPT EXACT ENVOYÉ]*** | ***✅ / ❌*** |
| **P2** | ***[ ]*** | ***[OBJECTIF]*** | ***[PROMPT EXACT ENVOYÉ]*** | ***✅ / ❌*** |
| **P3** | ***[ ]*** | ***[OBJECTIF]*** | ***[PROMPT EXACT ENVOYÉ]*** | ***✅ / ❌*** |
| **P4** | ***[ ]*** | ***[OBJECTIF]*** | ***[PROMPT EXACT ENVOYÉ]*** | ***✅ / ❌*** |

GET 409 — Swiss UMEF University — Campus de Dakar — Prompts Itérations S4 — Juin 2026