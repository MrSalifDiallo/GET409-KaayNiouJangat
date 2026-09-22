# GET409 — Kaaynioujangat Trading Bot

**Cours :** GET 409 — Design Thinking & IA | Swiss UMEF University, Campus de Dakar | S2
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

## 📅 Roadmap Séances

- **Séance 1 :** Empathie, problème (HMW draft), setup repo.
- **Séance 2 (aujourd'hui) :** Idéation (6 Chapeaux de Bono), Value Proposition Canvas, HMW définitif, Journal de Prompts (Zero-Shot / Few-Shot / Chain-of-Thought).
- **Suite (S3) :** Architecture multi-agents avec Dify — premier agent conversationnel no-code.

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
│   └── journal-prompts.md
└── .gitignore
```

## 📄 Licence

MIT — voir [LICENSE](LICENSE).
