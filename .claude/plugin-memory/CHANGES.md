# FluentCart Plugin — Per-Release Doc-Sync Log

Append-only log, **newest at top**. One H2 per release.
This file is the bridge between the changelog the user pastes and the doc edits Claude makes — read it first to know what's already addressed and what's still outstanding.

---

## v1.3.27 — May 8, 2026
- **Modules touched:** Subscriptions, Templating/Bricks, Tax, Coupon, Licensing (Pro), PaymentMethods/PayPal, PaymentMethods/AuthorizeNet
- **Doc-relevant files of note:**
  - `app/Modules/Templating/Bricks/Elements/ProductsCollection.php` — list/grid switcher, sort-by, live filter, wildcard filter, customizable display names, product/brand/price filter controls
  - `app/Modules/Subscriptions/*` — `SubscriptionReactivated` event, reactivation-after-refund, cart rules, offline-payment + 100% recurring-coupon `SubscriptionActivated` fix
  - `resources/admin/Modules/Licensing/ActivatedSitesList.vue`, `ViewSite.vue` — Licensing Sites list + Site Detail (Pro)
- **Doc pages updated:**
  - `guide/customization-and-themes/customize-store-with-bricks.md` — Grid/List, Pagination Type, Customer-Facing Product Filters
  - `guide/product-types-creation/configuring-product-pricing.md` — Copy Variation ID action
  - `guide/product-types-creation/managing-subscriptions.md` — Subscription Cart Rules + Reactivating a Cancelled Subscription
  - `guide/settings-configuration/email-configuration/pdf-invoice.md` — Tax & EU VAT Smart Tags
  - `guide/settings-configuration/licensing-settings.md` — Viewing Activated Sites cross-link
  - `guide/changelog.md` — appended v1.3.27 entry (20 items)
  - `.vitepress/config.mjs` — sidebar entry for new licensing page
- **Doc pages created (with sidebar entries added):**
  - `guide/settings-configuration/managing-licensing-sites.md` (NEW, Pro) — Sites list, Site detail (Activated Licenses + Customer Information), Site Pages, Advanced Filtering, Common Workflows
- **Plugin changes flagged but skipped (no doc-body impact):**
  - `SubscriptionReactivated` event itself — dev-docs domain, lives at dev.fluentcart.com (mentioned briefly in managing-subscriptions.md)
  - PayPal IPN subscription handling fix — internal correctness, no setup-step change
  - Authorize.net subscription fix — fix may live in fluent-cart-pro (not indexed locally); no setup-step change in OSS gateway page
  - Order-bump free-shipping checkbox fix — checkbox already documented; behavior now matches docs
  - Long file-name overflow on receipts (CSS-only)
  - PHP warnings from deleted/invalid store pages (internal hardening)
  - Admin menu active-state CSS bleed
  - Bricks Builder dynamic tag name mismatch (internal — no tag names listed in user docs)
  - Animation experience for table filters (UX polish)
  - Bricks pagination perf (internal)
  - Redundant admin table search requests (internal perf)
- **Open questions carried forward:**
  - Authorize.net subscription fix may live in `fluent-cart-pro` repo (no Pro clone available locally to verify)
  - Three screenshots stubbed in `managing-licensing-sites.md` — user to add before publishing
- **Build status:** `npm run docs:build` clean (6.94s)
