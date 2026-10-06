# KaayNioujangat — landing page

## Purpose
One-page marketing site for **KaayNioujangat**, a daily crypto-market summary in simple French for beginners in Senegal. Goal: explain the service, show a preview of the daily "signaux", present pricing, and collect interest via a contact form.

## File layout
- `index.html` is the whole project: CSS in `<style>`, JS in a `<script>` IIFE at the bottom. No build, no dependencies, no tests.
- Sections (ids are link targets for nav and CTAs): `#accueil` (hero), `#comment`, `#signaux`, `#offres`, `#contact`.
- Contact form `#contactForm` (`novalidate`): validated client-side only. Each field has a rule in the `rules` map, an id in `ids`, and an `#<id>-err` element (`role="alert"`, `aria-invalid` on the input). The `ok` checkbox is a special case. Submit sends nothing; it only fills `#success`.

## Design rules
- Theme: Atlantic / Gorée. Dark sections use `.dark` (`--mer`, `--mer-2`), light ones use `--papier` / `--mur` / `--mur-2`.
- Accents: `--vert` (#7af2a2) on dark backgrounds, `--vert-d` (#0a5a40) on light ones, `--ambre` for warnings or highlights, `--err` for form errors. Text: `--ink`, `--muted`.
- Always use the `:root` variables. The only hardcoded hex values are the wave SVG fills.
- Fonts: `--serif` (Palatino stack) for headings, `--sans` (system-ui) for body. No web fonts.
- One breakpoint, `760px`, mobile-first (`min-width:760px` for desktop). Animations (sunrise, drifting waves) only inside `prefers-reduced-motion:no-preference`.

## Content rules
- All copy is French (`lang="fr"`), plain words, no crypto jargon without explanation.
- **"Ceci n'est pas un conseil financier."** must appear in the top bar, hero, signals, offers, form checkbox and footer. Never remove or soften it.
- The signaux are placeholders: values show `— — —`, each card has the badge "Données de démonstration". Never put real or invented prices, percentages or market claims on the page.
- Offer prices are example FCFA amounts, labelled "à confirmer avant lancement". Keep that label.
- No promises of gains, no "buy/sell" wording, no urgency tactics.

## Preview
Open `index.html` directly in a browser (double-click, or `start index.html` in PowerShell). Check at about 375px and at 1040px+ wide, and once with reduced motion enabled.

## Do
- Keep new sections anchored by id and add the matching nav link.
- Reuse existing classes (`.wrap`, `.sec`, `.note`, `.badge`, `.dark`) before adding new CSS.
- Add the disclaimer to any new section that shows market info or prices.
- Keep error messages in French and tied to `#<id>-err`.

## Don't
- Don't add a framework, bundler, external script, font or tracking.
- Don't hardcode colors outside the wave SVGs.
- Don't add a second breakpoint without a strong reason.
- Don't wire the form to a real endpoint or show real market data without an explicit decision.
- Don't translate the page or rewrite the disclaimer wording.
