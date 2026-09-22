# GET409 — Kaaynioujangat Trading Bot

**Cours :** GET 409 — Design Thinking & IA | Swiss UMEF University, Campus de Dakar | S1
**Enseignant :** M. Malick Faye Diagne
**Équipe :** Salif Diallo ([@MrSalifDiallo](https://github.com/MrSalifDiallo)) — Full-stack developer, IA & fintech

---

## 🎯 Pitch du projet

**Kaaynioujangat Trading Bot** est une extension du dashboard IA existant [kaaynioujangat.netlify.app](https://kaaynioujangat.netlify.app) : un assistant de trading crypto pensé pour les débutants sénégalais qui veulent comprendre et suivre le marché sans dépendre de "signaux" payants ou de groupes Telegram/WhatsApp non réglementés.

Le dashboard actuel expose déjà 5 modules IA (classification BULL/BEAR/NEUTRAL, régression linéaire, deep learning TensorFlow.js + FastAPI, backtesting EMA+RSI, reconnaissance de patterns graphiques via Teachable Machine) branchés sur les données live Binance. Ce projet de semestre vise à transformer ces briques techniques en un véritable produit orienté utilisateur, construit avec une démarche Design Thinking (interviews → empathie → HMW → prototypage).

## 🧠 Enoncés HMW (draft — Séance 1)

Voir [`docs/HMW.md`](docs/HMW.md) pour le détail et les insights associés.

## 🗺️ Carte d'empathie

Voir [`docs/carte_empathie.pdf`](docs/carte_empathie.pdf).

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

- **Séance 1 (aujourd'hui) :** Empathie, problème (HMW), setup repo — ce dépôt.
- **Séance 2 :** Idéation + Value Proposition Canvas + intro Prompt Engineering.
- **Suite :** Prototypage du bot (alertes, résumés IA en langage simple, mode "sans 4G stable").

## 📂 Structure du dépôt

```
.
├── README.md
├── docs/
│   ├── HMW.md
│   ├── carte_empathie.pdf
│   └── fiche_equipe.pdf
└── .gitignore
```

## 📄 Licence

MIT — voir [LICENSE](LICENSE).
