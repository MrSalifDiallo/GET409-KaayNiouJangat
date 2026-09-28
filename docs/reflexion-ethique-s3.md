# Réflexion Éthique — Kaaynioujangat Trading Bot (Livrable L4)

GET 409 — Swiss UMEF University, Campus de Dakar — Séance 3

| | |
|---|---|
| **Projet** | Kaaynioujangat Trading Bot |
| **Livrable** | L4 — Réflexion éthique |
| **Persona** | Amadou Sarr · 27 ans · Agent commercial · Dakar · Smartphone, connexion parfois instable |
| **Outil IA** | Dify.ai — Workflow Chercheur → Si/Sinon → Rédacteur |

**Contexte de la réflexion**

Kaaynioujangat Trading Bot est un agent IA qui traduit les signaux du dashboard existant (classification BULL/BEAR/NEUTRAL, backtesting EMA+RSI) en résumés simples et niveaux de confiance, pour aider un débutant comme Amadou à comprendre le marché crypto sans jargon technique. Deux risques éthiques concrets ont été identifiés à partir de l'analyse Chain-of-Thought (P4, Journal S3, L3) et sont examinés ci-dessous.

---

**Risque 1 — Sur-confiance dans le "niveau de confiance" affiché**

Le résumé généré par l'agent affiche un niveau de confiance (ex : 72%) pour rendre le signal plus lisible qu'un graphique brut. Le risque est qu'Amadou interprète ce chiffre comme une garantie de gain plutôt que comme un indicateur statistique du modèle — reproduisant, sous une forme différente, le même problème que les "signaux" WhatsApp non vérifiés qu'il cherchait justement à éviter. Une décision de trading prise sur la seule foi d'un score de confiance élevé peut entraîner une perte financière réelle, en particulier pour un utilisateur qui investit de petites sommes avec un budget limité.

*Garde-fou technique :* afficher systématiquement, à côté du score, la mention "ceci n'est pas un conseil financier — signal statistique basé sur EMA/RSI" directement générée par le nœud Rédacteur (déjà intégrée dans son prompt système).
*Message de transparence :* ajouter dans l'interface un lien "Comment ce score est calculé ?" expliquant en une phrase la méthode (backtesting EMA+RSI) et ses limites.
*Règle de prompt :* interdire explicitement au Rédacteur toute formulation impérative ("achète", "vends") — uniquement des formulations informatives ("tendance observée", "à vérifier avant décision").

---

**Risque 2 — Dépendance à l'infrastructure IA/API**

Le workflow repose sur l'API du modèle LLM (Dify) et sur les modules de classification du dashboard, eux-mêmes dépendants de l'API Binance pour les données live. Une panne, une limite de quota ou un changement de tarification peut rendre le bot indisponible — précisément au moment où un mouvement de marché brutal rend l'information la plus utile pour Amadou, qui n'a pas le temps de surveiller le marché en continu à côté de son emploi.

*Garde-fou technique :* mettre en cache le dernier résumé valide avec un horodatage visible ("Dernière mise à jour : il y a X minutes"), affiché si l'agent ne peut pas générer de nouvelle réponse.
*Message de transparence :* en cas d'indisponibilité, afficher clairement "Service temporairement indisponible — ne pas se fier à une ancienne donnée pour décider" plutôt qu'un message d'erreur générique.
*Règle de prompt :* le nœud Chercheur doit retourner `INSUFFISANT` plutôt que d'inventer une donnée si l'API source ne répond pas — règle déjà intégrée et testée dans le prompt système (voir [`docs/dify-prompts-s3.md`](dify-prompts-s3.md)).

---

**Recommandation finale**

→ **Phase recommandée : Pilote contrôlé.** Kaaynioujangat Trading Bot ne doit pas être présenté comme un outil de décision financière avant d'avoir validé, avec un petit groupe d'utilisateurs volontaires, que le message "ceci n'est pas un conseil financier" est bien compris et que le niveau de confiance n'est pas interprété comme une garantie. Un suivi des décisions prises après consultation du bot (sondage court) permettrait de vérifier que l'outil réduit l'anxiété et la dépendance aux rumeurs sans créer une nouvelle forme de confiance aveugle envers un score IA.

---

*Kaaynioujangat Trading Bot — GET 409 — Swiss UMEF University — Campus de Dakar*
