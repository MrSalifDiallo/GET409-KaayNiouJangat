# GET409 — Kaaynioujangat Trading Bot

**Cours :** GET 409 — Design Thinking & IA | Swiss UMEF University, Campus de Dakar | S3
**Enseignant :** M. Malick Faye Diagne
**Équipe :** Salif Diallo ([@MrSalifDiallo](https://github.com/MrSalifDiallo)) — Full-stack developer, IA & fintech

---

## 🎯 Pitch du projet

**Kaaynioujangat Trading Bot** est une extension du dashboard IA existant [kaaynioujangat.netlify.app](https://kaaynioujangat.netlify.app) : un assistant de trading crypto pensé pour les débutants sénégalais qui veulent comprendre et suivre le marché sans dépendre de "signaux" payants ou de groupes Telegram/WhatsApp non réglementés.

Le dashboard actuel expose déjà 5 modules IA (classification BULL/BEAR/NEUTRAL, régression linéaire, deep learning TensorFlow.js + FastAPI, backtesting EMA+RSI, reconnaissance de patterns graphiques via Teachable Machine) branchés sur les données live Binance. Ce projet de semestre vise à transformer ces briques techniques en un véritable produit orienté utilisateur, construit avec une démarche Design Thinking (interviews → empathie → HMW → prototypage).

## 🎯 HMW définitif (Séance 2)

**« Comment pourrions-nous aider un débutant sénégalais en crypto à comprendre le marché et à distinguer un signal fiable d'une rumeur, en langage simple, sans qu'il ait besoin de surveiller les prix en continu ? »**

Voir [`docs/HMW.md`](docs/HMW.md) pour les hypothèses de départ (Séance 1) et [`docs/chapeaux-bono.md`](docs/chapeaux-bono.md) pour l'analyse en 6 Chapeaux de Bono qui a permis de l'affiner.

## 🗺️ Carte d'empathie

Voir [`docs/carte_empathie.pdf`](docs/carte_empathie.pdf).

## 💡 Value Proposition Canvas (Séance 2)

Voir [`docs/vpc.md`](docs/vpc.md) — Profil Client (Jobs/Pains/Gains d'Amadou) et Proposition de Valeur (Produits & Services / Pain Relievers / Gain Creators), avec FIT validé.

## 📓 Journal de Prompts (Séance 2)

Voir [`docs/journal-prompts.md`](docs/journal-prompts.md) — 5 prompts documentés (Zero-Shot, Few-Shot, Chain-of-Thought) avec évaluation /5 et itérations.

## 🤖 Agent Dify — Workflow Chercheur → Rédacteur (Séance 3)

- **Agent V1 (L1) :** `KaaynioujangatBot_ResumeCrypto_v1` sur Dify — Workflow Chercheur → Si/Sinon → Rédacteur.
  URL publique : _[à compléter — coller le lien de publication Dify]_
  Captures test entrée/sortie : _[à ajouter dans `docs/` — 2 captures, une par branche testée]_
- **Schéma d'architecture (L2) :** _[à ajouter — capture annotée du workflow Dify complet]_
- Prompts système remplis (Chercheur + Rédacteur) : [`docs/dify-prompts-s3.md`](docs/dify-prompts-s3.md)
- **Journal de Prompts S3 (L3) :** [`docs/journal-prompts-s3.md`](docs/journal-prompts-s3.md) — 4 prompts documentés (Zero-Shot, Zero-Shot structuré, Few-Shot, Chain-of-Thought)
- **Réflexion éthique (L4) :** [`docs/reflexion-ethique-s3.md`](docs/reflexion-ethique-s3.md) — 2 risques spécifiques au projet (sur-confiance dans le score IA, dépendance à l'infrastructure) + garde-fous

## 👥 Fiche d'équipe

Voir [`docs/fiche_equipe.pdf`](docs/fiche_equipe.pdf).

## 🛠️ Stack technique (existant + cible)

| Couche | Techno |
|---|---|
| Frontend | React + TypeScript |
| Modèles IA légers | TensorFlow.js (in-browser) |
| Modèles IA lourds | Python + FastAPI |
| Vision (patterns graphiques) | Teachable Machine |
| Données marché | API Binance (live) |
| Déploiement actuel | Netlify (frontend) |

## 🚀 MVP Lovable (Séance 4)

- **Prompt d'initialisation complété** pour lovable.dev (4 pages : Accueil / Résumé du Jour / Signaux du Jour / Contact, recherche + tri + filtres BULL/BEAR/NEUTRAL, section mobile dédiée, design bleu fintech #1565C0 + orange Bitcoin #F7931A, 6 données réalistes, **no AI slot**) : [`docs/lovable-prompt-s4.md`](docs/lovable-prompt-s4.md) — version PDF : [`docs/lovable-prompt-s4.pdf`](docs/lovable-prompt-s4.pdf)
- Wireframes ASCII de l'interface mobile (375px) + 5 prompts d'itération pré-rédigés (correction / visuelle / fonctionnelle ×2 / libre) pour le journal L3
- URL lovable.app : _[à noter après publication — livrable L1]_

## 📅 Roadmap Séances

- **Séance 1 :** Empathie, problème (HMW draft), setup repo.
- **Séance 2 :** Idéation (6 Chapeaux de Bono), Value Proposition Canvas, HMW définitif, Journal de Prompts (Zero-Shot / Few-Shot / Chain-of-Thought).
- **Séance 3 :** Architecture multi-agents avec Dify — Workflow Chercheur → Rédacteur, Journal de Prompts S3, Réflexion éthique.
- **Séance 4 :** MVP no-code avec Lovable — prompt d'initialisation adapté au projet, 4 pages, publication lovable.app.
- **Suite (S5) :** Intégration MVP ↔ agent Dify + RAG (base de connaissances).

## 📂 Structure du dépôt

```
.
├── README.md
├── docs/
│   ├── HMW.md
│   ├── carte_empathie.pdf
│   ├── fiche_equipe.pdf
│   ├── chapeaux-bono.md
│   ├── vpc.md
│   ├── journal-prompts.md
│   ├── dify-prompts-s3.md
│   ├── journal-prompts-s3.md
│   ├── reflexion-ethique-s3.md
│   ├── lovable-prompt-s4.md
│   └── lovable-prompt-s4.pdf
└── .gitignore
```

## 📄 Licence

MIT — voir [LICENSE](LICENSE).
