|  |
| --- |
| **GET 409 — NiayesBiz — GreenSprint**  **L4 — Réflexion Éthique**  Swiss UMEF University — Campus de Dakar — Juin 2026 |

|  |  |
| --- | --- |
| **Équipe** | NiayesBiz |
| **Projet** | GreenSprint |
| **Livrable** | L4 — Réflexion éthique |
| **Persona** | Abdoulaye Ndiaye · 52 ans · Maraêcher · Sébikhane · Feature phone · Compte Wave |
| **Outil IA** | Dify.ai — Llama-3.1-8b-instant via GroqCloud |

**Contexte de la réflexion**

GreenSprint est un agent IA destiné à fournir aux maraîchers des Niayes un SMS de prix de référence quotidien avant 6h. Le système repose sur un workflow Dify (Chercheur → Si/Sinon → Rédacteur) appelé via Llama-3.1-8b-instant sur GroqCloud. Trois risques éthiques ont été identifiés lors de l’analyse Chain-of-Thought (P3, L3) et sont examinés ci-dessous.

|  |
| --- |
| **Risque 1 — Fiabilité des données de prix** |

|  |  |
| --- | --- |
| **Description** | Le modèle Llama-3.1 génère des prix à partir de ses paramètres d’entraînement, sans accès à des sources de marché en temps réel. Les prix produits peuvent être périmés ou approximatifs. Si Abdoulaye négocie sur la base de ces données erronées, il risque de sous-vendre sa récolte ou de perdre la confiance des acheteurs. |
| **Garde-fou technique** | Intégrer un nœud de récupération de données via web search (Tavily ou Serper) dans le workflow Dify, limité aux sources officielles (ANSD, GIE Niayes). Ajouter un avertissement systématique dans la fiche : « Prix indicatif — vérifier au marché local ». |
| **Garde-fou organisationnel** | Créer un comité de validation mensuel avec un agent GIE local chargé de vérifier un échantillon de fiches générées contre les prix réels observés au marché de Thiaroye-sur-Mer. |

|  |
| --- |
| **Risque 2 — Exclusion numérique** |

|  |  |
| --- | --- |
| **Description** | Abdoulaye utilise un feature phone sans accès à l’interface Dify. Le système actuel suppose un utilisateur disposant d’un smartphone ou d’un ordinateur pour déclencher le workflow. Si le canal de livraison reste une interface web, les maraîchers les plus vulnérables — ceux que GreenSprint entend aider — sont de facto exclus. |
| **Garde-fou technique** | Développer une passerelle SMS (Twilio Senegal ou Orange API) qui déclenche automatiquement le workflow Dify chaque matin à 5h30 et envoie la fiche marché en SMS concis (160 caractères max) sur le numéro Wave d’Abdoulaye. |
| **Garde-fou organisationnel** | Identifier dans chaque village-cible un « relais numérique » (jeune avec smartphone) formé à interroger Dify et lire la fiche à voix haute lors du rassemblement matinal des maraîchers. |

|  |
| --- |
| **Risque 3 — Dépendance à l’infrastructure GroqCloud** |

|  |  |
| --- | --- |
| **Description** | Le workflow repose entièrement sur GroqCloud pour l’inférence Llama. Une panne de service, un changement de tarification ou une révocation de clé API peut rendre GreenSprint inopérant du jour au lendemain — précisément le matin où Abdoulaye dépend de l’information pour négocier. |
| **Garde-fou technique** | Configurer un modèle de repli (fallback) dans Dify : si GroqCloud renvoie une erreur, basculer automatiquement vers un second fournisseur (OpenRouter ou Mistral API). Mettre en cache la dernière fiche valide avec un horodatage visible. |
| **Garde-fou organisationnel** | Maintenir un tableau de bord de disponibilité du service (uptime). Définir un SLA interne : si GreenSprint est indisponible plus de 2 journées consécutives, déclencher le protocole de communication de crise auprès des maraîchers partenaires. |

**Recommandation finale**

|  |
| --- |
| **→ Phase recommandée : Pilote contrôlé (S4–S5)**  GreenSprint ne doit pas être déployé à grande échelle avant d’avoir résolu les trois risques identifiés. La recommandation est de conduire un pilote contrôlé sur 10 maraîchers volontaires dans la zone de Sébikhane pendant 4 semaines, avec collecte systématique des écarts entre prix générés et prix réels, test de la passerelle SMS, et activation du modèle de repli. Un go/no-go de déploiement sera décidé au terme du pilote sur la base des métriques de fiabilité et d’accessibilité. |

NiayesBiz — GET 409 — Swiss UMEF University — Campus de Dakar — Juin 2026