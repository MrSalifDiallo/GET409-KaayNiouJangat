# KaayNioujangat

Site français d'initiation au marché des cryptos pour débutants au Sénégal : prix en USD avec équivalent en FCFA, signaux indicatifs (BULL / BEAR / NEUTRAL / N/A), page `/agent` qui interroge un workflow Dify.

## Stack

- TanStack Start (`@tanstack/react-start`) + TanStack Router (routes par fichiers) + React Query, React 19, TypeScript strict.
- Tailwind CSS 4 (`@tailwindcss/vite`, `src/styles.css`), composants shadcn/Radix dans `src/components/ui/` (`components.json`).
- Validation avec `zod`, graphiques avec `recharts`.
- Vite 8, Node `>=22.12` (`.nvmrc`, `engines`), déploiement Netlify (`netlify.toml` : `npm run build`, publication `dist/client`).
- Le plugin Netlify n'est chargé qu'au build (`vite.config.ts`), jamais en `vite dev`.

## Commandes

```bash
npm run dev         # vite dev
npm run build       # vite build
npm run preview     # vite preview
npm run lint        # eslint .
npm run typecheck   # tsc --noEmit
npm run format      # prettier --write .
```

Il n'y a pas de script de test. Avant de conclure une tâche : `npm run typecheck` et `npm run lint`.

## Dossiers

- `src/routes/` : une route par fichier (`index`, `signaux`, `resume`, `agent`, `contact`, `crypto.$symbole`, racine `__root.tsx`). Voir `src/routes/README.md`.
- `src/routeTree.gen.ts` : généré, ne jamais l'éditer à la main.
- `src/lib/*.functions.ts` : server functions (`createServerFn`) ; `market.functions.ts` (prix, historique, taux XOF) et `dify.functions.ts` (agent).
- `src/data/signaux.ts` : types, `formatFCFA`, `formatUsdFcfa`, et `signaux`, des données d'exemple statiques à remplacer par `getMarketOverview`.
- `src/components/` : `PageLayout`, `SiteHeader`, `SiteFooter` ; `ui/` = primitives shadcn.
- `src/server.ts`, `src/start.ts`, `src/router.tsx`, `src/lib/error-*.ts` : entrée serveur, démarrage, routeur, gestion d'erreurs SSR.

## Conventions de code

- Alias `@/*` → `src/*`. Nouvelle page : `PageLayout` autour du contenu.
- Les données de marché publiques passent par des server functions `*.functions.ts` (appelées côté client via `useServerFn`), pour garder les appels externes et les fournisseurs de secours cohérents entre SSR et navigation navigateur.
- Entrées des server functions validées avec `zod` (`inputValidator`).
- Fournisseurs de secours actuels : prix Binance → CoinGecko ; historique Binance → CoinGecko → CryptoCompare ; taux XOF open.er-api → frankfurter. Conserver cette logique de repli et les caches.
- Dify : appel uniquement dans `askAgent` (`src/lib/dify.functions.ts`), clé lue via `process.env['DIFY_API_KEY']` côté serveur.
- Les réponses de l'agent passent par `cleanAgentAnswer` avant affichage.
- tsconfig très strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noPropertyAccessFromIndexSignature`) : respecter, ne pas assouplir.
- Prettier et ESLint font foi ; lancer `npm run format` plutôt que reformater à la main.

## Règles de contenu

- Tout le texte visible est en français. Les montants s'affichent en USD avec l'équivalent FCFA via `formatUsdFcfa` ; sans taux disponible, afficher seulement l'USD.
- Aucune donnée inventée : prix, variations, signaux et confiance viennent de `getMarketOverview` / `getCryptoHistory`. Si la source est indisponible, afficher l'état « indisponible » (`N/A`, message d'erreur), jamais une valeur plausible.
- Citer la source et l'heure de mise à jour quand elles existent.
- Jamais de conseil financier : pas de « achetez » / « vendez », pas de promesse de gain. Les signaux sont indicatifs et pédagogiques.
- Le disclaimer « Ceci n'est pas un conseil financier » reste visible : dans `SiteFooter` (via `PageLayout`) et sur les pages de signaux et de détail. Toute nouvelle page de données le conserve.
- Ton simple et pédagogique pour des débutants ; expliquer les termes techniques.

## Méthode de travail

1. Lire les fichiers concernés avant de modifier ; s'aligner sur le style existant.
2. Proposer un plan court pour tout changement qui touche plusieurs fichiers, puis attendre la validation.
3. Changements minimaux et ciblés, sans refactor non demandé.
4. Vérifier avec `npm run typecheck` et `npm run lint`, et lancer `npm run dev` pour un changement visible ; annoncer ce qui n'a pas pu être vérifié.
5. Ne committer que sur demande explicite.

## Never

- Ne jamais appeler Dify (ni aucune URL `api.dify.ai`) depuis le navigateur ou un composant React.
- Ne jamais écrire `DIFY_API_KEY` ou tout autre secret dans le dépôt, le code, un commit, un log ou la sortie d'une conversation ; il se configure dans l'environnement serveur (variables d'environnement Netlify en production).
- Ne jamais préfixer un secret par `VITE_` ni l'exposer au bundle client.
- Ne jamais éditer `src/routeTree.gen.ts` à la main.
- Ne jamais créer `src/pages/` ni de layout `app/` (conventions Next.js / Remix).
- Ne jamais inventer de prix, signal, taux de change ou statistique.
- Ne jamais formuler de recommandation d'achat ou de vente, ni retirer le disclaimer.
- Ne jamais ajouter de données de marché récupérées directement dans un composant, hors server function.
- Ne jamais assouplir `tsconfig.json` ou ESLint pour faire passer une erreur.
