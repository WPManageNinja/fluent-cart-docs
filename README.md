# FluentCart Documentation

<p align="center">
  <a href="https://docs.fluentcart.com"><img src="https://img.shields.io/badge/Live%20Docs-docs.fluentcart.com-blue?style=flat-square" alt="Live Docs"></a>
  <a href="https://fluentcart.com"><img src="https://img.shields.io/badge/Plugin-fluentcart.com-orange?style=flat-square" alt="Plugin"></a>
  <img src="https://img.shields.io/badge/VitePress-1.6.4-646CFF?style=flat-square&logo=vite" alt="VitePress">
</p>

Official user guides and developer documentation for **[FluentCart](https://fluentcart.com)** — a powerful, flexible WordPress e-commerce plugin built by [WPManageNinja](https://wpmanageninja.com).

---

## What is FluentCart?

FluentCart is a modern WordPress e-commerce solution that lets you sell physical products, digital downloads, subscriptions, and software licenses from a single plugin. It includes built-in marketing tools (order bumps, coupons), deep integrations with the Fluent suite (FluentCRM, FluentCommunity, FluentSupport, FluentAffiliate, FluentBooking), support for global tax & VAT rules, multiple payment gateways, and a clean reporting dashboard.

This repository contains the **VitePress static site** that powers [docs.fluentcart.com](https://docs.fluentcart.com).

---

## Documentation Coverage

| Section | What it covers |
|---|---|
| **Getting Started** | Installation, activation, setup wizard, dashboard overview |
| **Product Types & Creation** | Physical, digital, licensed, bundle, subscription products; pricing, inventory, categories |
| **Store Management** | Orders, refunds, order bumps, instant checkout, customers, advanced filters |
| **Payments & Checkout** | Stripe, PayPal, Paddle, Mollie, Square, Razorpay, Flutterwave, Paystack, Authorize.net, Mercado Pago, Cash on Delivery |
| **Shipping** | Zones, shipping classes, packages |
| **Tax & Duties** | Configuration, tax rates, EU VAT, tax filing |
| **Marketing & Sales Tools** | Coupons, order bumps |
| **Customer Dashboard** | Profile management, downloads, subscriptions |
| **Reporting & Analytics** | Revenue, product, subscription, retention, future renewals reports |
| **Integrations** | FluentCRM, FluentCommunity, FluentSupport, FluentAffiliate, FluentBooking, LearnDash, LifterLMS, Webhooks, Cloudflare Turnstile, Amazon S3, Cloudflare R2 |
| **Settings & Configuration** | Store, payment, cart & checkout, email, licensing, roles & permissions, features & add-ons |
| **Customization & Themes** | Gutenberg blocks, Elementor widgets, Bricks builder, CSS customization, translations |
| **Migration** | Easy Digital Downloads (EDD) migration guide |
| **Troubleshooting & Support** | Common issues, logs, how to get support |
| **Changelog** | Full release history |

> Developer API docs live at [dev.fluentcart.com](https://dev.fluentcart.com) (separate repository).

---

## Tech Stack

- **[VitePress 1.6.4](https://vitepress.dev)** — static site generator
- **[ufo](https://github.com/unjs/ufo)** — URL utilities used in `config.mjs`
- **[turndown](https://github.com/mixmark-io/turndown)** — HTML → Markdown utility
- All content is plain Markdown under `guide/`

---

## Project Structure

```
.
├── .vitepress/
│   └── config.mjs           # Nav, sidebar, SEO (canonical, OpenGraph, JSON-LD), sitemap
├── guide/                   # All user-facing docs
│   ├── public/images/       # Images (.webp) — served at /images/...
│   ├── getting-started/
│   ├── product-types-creation/
│   ├── store-management/
│   ├── payments-checkout/
│   │   └── connecting-payment-gateways/
│   ├── shipping/
│   ├── tax-&-duties/
│   ├── customer-dashboard/
│   ├── marketing-sales-tools/
│   ├── integrations/
│   ├── reporting-analytics/
│   ├── settings-configuration/
│   ├── storage/
│   ├── customization-and-themes/
│   ├── migration/edd/
│   ├── troubleshooting-support/
│   └── changelog.md
├── developer/index.md       # Stub — links to dev.fluentcart.com
├── public/                  # Site-level assets (logos, robots.txt)
└── index.md                 # Home page
```

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start local dev server with hot reload
npm run docs:dev

# Production build → .vitepress/dist/
npm run docs:build

# Wipe cache + dist, then build fresh
npm run docs:clean-build

# Preview the production build locally
npm run docs:preview
```

The dev server starts at `http://localhost:5173` by default.

---

## Contributing

### Adding a new page

1. Create a `.md` file in the appropriate `guide/<section>/` directory.
2. Start the file with an `# H1` title — no frontmatter needed.
3. Add it to the sidebar in `.vitepress/config.mjs` under `themeConfig.sidebar['/guide/']`.
4. Add any images as `.webp` files to `guide/public/images/<section>/`.
5. Run `npm run docs:dev` to verify the page renders correctly.

### Editing an existing page

Open the relevant `.md` file under `guide/`, make your changes, and verify locally with `npm run docs:dev`.

### Style guidelines

- **Voice:** Second person ("you"), present tense, action-first.
- **Headings:** `#` page title → `##` sections → `###` subsections → `####` procedural steps.
- **Links:** Use clean internal URLs (`/guide/section/page-slug`) without `.md` or `.html`.
- **Images:** Reference as `/images/<section>/<file>.webp` with descriptive alt text.
- **Bold:** UI paths (`**FluentCart → Settings**`), button names, and field labels.
- **SEO:** Handled automatically — do not add `<meta>` tags or JSON-LD manually.

---

## Links

| | |
|---|---|
| Live documentation | https://docs.fluentcart.com |
| Developer docs | https://dev.fluentcart.com |
| Plugin website | https://fluentcart.com |
| WPManageNinja | https://wpmanageninja.com |

---

## License

Documentation content © [WPManageNinja](https://wpmanageninja.com). All rights reserved.
