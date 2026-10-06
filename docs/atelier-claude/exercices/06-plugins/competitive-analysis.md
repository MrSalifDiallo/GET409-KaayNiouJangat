# Competitive analysis: KaayNioujangat vs. Cryptoast and Journal du Coin

Observation date: 2026-10-06. Tool: Playwright browser, desktop viewport, public pages only.
Scope: no login, no form submission, no cookie consent given (see "Method and limits").

**KaayNioujangat** (from the brief): a daily crypto market summary in plain French for beginners in Senegal.

## Evidence index

| ID | Type | File / URL |
|----|------|------------|
| S1 | Screenshot | `screenshots/cryptoast-home-fullpage.png` (homepage) |
| S2 | Screenshot | `screenshots/cryptoast-educational-bitcoin-fullpage.jpeg` (page is 1043 x 51150 px, so details were read from page text; the URL is cited) |
| S3 | Screenshot | `screenshots/journalducoin-home-fullpage.png` (homepage) |
| S4 | Screenshot | `screenshots/journalducoin-educational-cryptomonnaie-fullpage.jpeg` |
| U1 | URL | https://cryptoast.fr/ |
| U2 | URL | https://cryptoast.fr/bitcoin/ |
| U3 | URL | https://cryptoast.fr/formation/ (visited for pricing only; no screenshot) |
| U4 | URL | https://journalducoin.com/ |
| U5 | URL | https://journalducoin.com/guides/cryptomonnaie/ |
| U6 | URL | https://journalducoin.com/bitcoin/ (visited, rejected as the educational page: it is a news tag page titled "Actualités Bitcoin (BTC)", about 637 words; no screenshot) |

Colours marked "computed" were read from the page's CSS. Colours marked "visual" were judged from the screenshot only.

---

## 1. Cryptoast (cryptoast.fr)

| Dimension | Observation | Source |
|-----------|-------------|--------|
| Hero message | No H1 element was found on the homepage. The page title is "Cryptoast - Démocratisons la crypto-monnaie !" and the meta description says "Le site qui explique tout de A à Z sur le Bitcoin, la blockchain et la cryptomonnaie et le Web3...". The first content block is an editorial news block, "Sélection de la rédaction" (lead story: Polymarket and the 2027 French presidential election). Above it sits a sponsored banner ("Sur votre PEA, vous savez quand sortir. Mais avec vos cryptos ?", button "Découvrir"). | U1, S1 |
| Colour scheme | Light page: background rgb(248,248,248), text rgb(33,37,41), font Sora (computed). Orange-to-pink gradient section headings and an orange form button (visual). A dark "night mode" toggle exists. | U1, S1 |
| Primary CTA | Header button "Bilan Crypto Offert". It links to the external domain go.cryptostratege.com (href read, not followed). A slide-in ad for "Crypto Stratège" with the line "Découvrez notre accompagnement" also appeared, and a sponsored banner with "Découvrir". "Acheter Bitcoin" is a main nav item. | U1, S1 |
| Offer structure | Free editorial content: news, "Formations" (H1 "Formation crypto gratuite"), prices ("Cours"), crypto profiles, tools and exchange reviews ("Nos avis": Binance, eToro, Kraken, Finst, Bitpanda, Degiro, Bitvavo, Swissborg). Mobile apps (App Store and Google Play). Monetisation appears to be sponsored banners, affiliate-style offers and the Crypto Stratège coaching funnel (inferred from the CTAs, not stated by the site). | U1, U3, S1 |
| Visible pricing | None. No price was found on the homepage or on /formation/. The price of the Crypto Stratège coaching: non observé (external domain, not visited). On the educational page, a "60 € offerts en BTC" referral offer and the text "minimum 10 €" for a first purchase appear. | U1, U3, U2 |
| Newsletter | The Bitcoin page ends with the H2 "Recevez un récapitulatif de l'actualité crypto chaque jour par mail 👌". This is a daily-recap promise very close to KaayNioujangat's. Form fields were not filled. | U2 |
| Educational page | `/bitcoin/` is a pillar page of about 11,800 words, with H2s such as "C'est quoi le Bitcoin (BTC) ?", "Les techniques pour acquérir et stocker des Bitcoins" and "Questions fréquentes sur le Bitcoin". The CryptoStratège banner appears several times down the page (visual, thumbnail of S2). | U2, S2 |
| West-African audience | **No.** No mention of Sénégal, FCFA, Mobile Money, Wave, Orange Money, Dakar or Abidjan on the homepage or /formation/ (text search of loaded content). The only hit on /bitcoin/ is one sentence saying adoption could grow in "l'Asie du Sud-Est et l'Afrique subsaharienne". Examples and prices are in € and $. | U1, U2, U3 |
| Interruptions | Three overlays were visible in the homepage capture: the cookie banner, the Crypto Stratège slide-in and a "Donnez-nous votre avis" feedback form. | S1 |
| Cookies | The banner offers one button, "Compris !", which implies consent to targeted ads and statistics. There is no "essential only" option, so it was **not clicked** and stayed on screen. | U1, S1 |

## 2. Journal du Coin (journalducoin.com)

| Dimension | Observation | Source |
|-----------|-------------|--------|
| Hero message | No H1 element was found on the homepage. The title is "Journal Du Coin – Actu Crypto, Bitcoin, Blockchain, Économie et Trading", and the meta description claims "Le média francophone #1 sur l'actualité Crypto". The first screen is a sponsored banner ("Offre exclusive JDC x Gate EU : Recevez jusqu'à 520 USDC de récompenses en Tokens !", labelled "Publicité"), then an "EN DIRECT" strip and a news carousel. | U4, S3 |
| Colour scheme | Dark theme: background rgb(24,30,41), text rgb(249,249,249), font Hind (computed). Purple and blue-grey accents (visual). The "Recevoir" button is rgb(59,75,99) (computed). | U4, S3 |
| Primary CTA | The Gate EU sponsored banner and the "Avis Gate EU, Test et Tuto 2026" card. The newsletter button "Recevoir" is secondary. "Bonus et réductions" is in the main menu. | U4, S3 |
| Offer structure | Free content in sections: "Actualités crypto", "Guides crypto", "Avis & Tutos", "Cours crypto", "Encyclopédie du Coin", "Lexique crypto", "Bonus et réductions". Homepage blocks: live news, "Comparatifs crypto", "Avis & Tutos", videos and podcasts. Social channels include YouTube, X, Telegram and TikTok (footer). | U4, S3 |
| Visible pricing | None. No subscription price was found. The visible incentives are exchange rewards and "Bonus et réductions". | U4, S3 |
| Newsletter | Block on the homepage: "Les actus qui comptent, résumées en 2 minutes. Du lundi au vendredi, dans votre boîte mail." with a consent checkbox. The form was not submitted. | U4, S3 |
| Educational page | `/guides/cryptomonnaie/` ("Qu'est-ce que la cryptomonnaie ? Définition, Fonctionnement, Prospective") is about 4,500 words. It has 5 H2s (history, advantages and drawbacks, uses, tax and regulation, future). The visible date is "29 février 2024", so the content looks older than Cryptoast's. | U5, S4 |
| West-African audience | **No.** No mention of Sénégal, FCFA, Mobile Money or Afrique in the loaded text of the homepage or the guide. The content is Europe-framed: "MiCA", "PSAN", "Gate EU", "l'exchange européen", "100 000€ en Europe" (guarantee funds). | U4, U5, S3 |
| Cookies | The consent markup exists (buttons "Accepter" / "Rejeter" / "Réglages") but the bar was hidden when visited. Nothing was clicked. | U4 |

---

## 3. Strengths of the competitors

- **Breadth and depth:** news, guides, price tables, tools, glossary and reviews in one site. Cryptoast's Bitcoin pillar page is about 11,800 words and has an FAQ (U2).
- **Newsletter already positioned as short and daily:** "résumées en 2 minutes" (U4) and "récapitulatif ... chaque jour" (U2).
- **Multi-channel reach:** Cryptoast has iOS and Android apps (U1); Journal du Coin has YouTube, Telegram, TikTok and podcasts (U4).
- **A built-in beginner path:** Cryptoast's "Les essentiels" and "Qu'est-ce que le Bitcoin ?" (U1); Journal du Coin's "Lexique crypto" and "Encyclopédie du Coin" in the main menu (U4).
- **Visible disclosure:** the "Publicité" label on sponsored banners (U1, U4).

## 4. Gaps (opportunities)

1. **No West-African angle** on any page reviewed: no FCFA, no Mobile Money, no local context (Section 1 and 2, audience rows). Examples are in € and $.
2. **Europe-specific practical content:** regulation (MiCA, PSAN), PEA, and exchanges framed for EU users (U1, U4, S3). Whether this is usable in Senegal is non observé.
3. **Length and density:** very long pillar pages (U2) and dense, ad-heavy homepages with several overlays (S1, S3). Plain, short answers are not the main pattern.
4. **Commercial pressure on the first screen:** both lead with a sponsored or affiliate offer (U1, U4).
5. **Freshness:** the Journal du Coin guide shows a 2024 date (U5).
6. **Mobile data weight and load time on mobile networks:** non observé (not measured).

## 5. Common patterns

- Both pair free editorial content with monetisation through partner offers (exchange rewards, coaching) at the top of the page (U1, U4).
- Both have no price list: nothing is sold on the pages reviewed (non observé beyond them).
- Both offer a newsletter, but as a secondary block at the foot of pages (U2) or mid-homepage (U4), not as the main call to action.
- Both name exchanges in "Avis" or "Comparatifs" sections (S1, S3).
- Both are in French but written for a France/Europe reader (€, MiCA, PEA).
- Neither homepage has an H1 element (checked in the page DOM).
- Different looks: Cryptoast is light with orange/pink; Journal du Coin is dark navy with purple (S1, S3).

## 6. Five recommendations for KaayNioujangat

1. **Make the daily recap the main call to action, not a footer block.** Both competitors treat the recap as secondary (U2, U4). Make "Recevoir le résumé du jour" the single above-the-fold action. Add a WhatsApp delivery option as a hypothesis to test: neither competitor's observed footers show it (U4 lists Telegram; Cryptoast's social icons are non observé).
2. **Own the West-African angle explicitly.** State "pour les débutants au Sénégal" in the hero, show prices in FCFA next to € and $, and use local examples (Wave, Orange Money) when they are relevant. Competitors do not (audience rows).
3. **Keep every summary short and plain-language.** Offer a one-screen answer and link to a glossary, rather than an 11,800-word pillar (U2). Date and refresh explainers visibly, since a 2024 date shows on a competitor guide (U5).
4. **Be the non-salesy source, and write it down.** Both competitors lead with sponsored offers (U1, U4). Publish a short disclosure and independence policy. Before covering any "how to buy" topic, check what is legally and practically possible in Senegal; that is non observé here and must not be assumed from competitor content.
5. **Use a light, single-column, mobile-first page with one CTA, and a distinct visual identity.** Competitors show multiple overlays and dense layouts (S1, S3). Avoid pop-ups and keep the page light for mobile data; measure page weight yourself (non observé for competitors). Choose a palette that differs from both Cryptoast's orange/pink and Journal du Coin's dark navy/purple.

---

## Method and limits

- Playwright browser, desktop viewport, public pages only. No login, no form submission, no link followed to another domain (external hrefs were only read as text).
- **Cookies:** Cryptoast's banner offers only "Compris !" (consent), so it was left untouched. On Journal du Coin the banner was hidden. No consent was given on either site, so ad-related content may differ from a consenting visitor's view.
- Fixes during the session: the first full-page PNG of Cryptoast's Bitcoin page timed out twice, so that screenshot was saved as JPEG. Journal du Coin's `/bitcoin/` was visited and replaced by `/guides/cryptomonnaie/` as the educational page.
- West-African mentions were found by text search of the loaded page text. Lazy-loaded or image-only content may be missing.
- Only 2 pages per competitor, plus Cryptoast's /formation/ and Journal du Coin's /bitcoin/ for checks. Findings on other sections are non observé.
- Traffic, audience size, newsletter size, SEO rankings and the price of external offers are non observé (the SimilarWeb and Ahrefs connectors were not authorised in this session).
