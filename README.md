# Everstone Wealth Investment

A responsive public website concept for Everstone Wealth Investment, using a forest-green, ivory and gold visual identity.

## Project files
- `index.html` — public homepage
- `styles.css` — responsive styling and accessibility refinements
- `dashboard.html` — non-functional client dashboard preview
- `admin-preview.html` — non-functional operations preview
- `login.html` and `register.html` — disabled authentication page previews
- `backend/README.md` — secure backend architecture and production release plan
- `.env.example` — placeholder environment variable names only; contains no secrets

## Local preview
Open `index.html` in a browser. The site is static and can be hosted with GitHub Pages.

## Deployment
The workflow in `.github/workflows/pages.yml` publishes the repository root to GitHub Pages on pushes to `main` and on manual dispatch. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** if GitHub asks for a Pages source configuration.

## Important status
This repository currently contains a website concept, not a production financial platform. There is no backend, database, real authentication, customer records, payment processing, custody, investment execution, deposits, withdrawals, or live account data. Login and registration controls are deliberately disabled. The dashboard and admin pages are previews only.

Do not publish unverified company details, licences, regulatory approvals, returns, testimonials or client records. Before offering financial services or accepting client funds, obtain jurisdiction-specific legal advice and all required authorisations, verify the company and service providers, and complete privacy, accounting, operational and independent security reviews. Never commit real credentials or secrets.
