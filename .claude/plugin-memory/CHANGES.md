# FluentCart Plugin — Per-Release Doc-Sync Log

Append-only log, **newest at top**. One H2 per release.
This file is the bridge between the changelog the user pastes and the doc edits Claude makes — read it first to know what's already addressed and what's still outstanding.

---

## v1.5.2 — Jun 30, 2026
- **Range:** `1.5.1..HEAD` (bde065d85 on `development`), 30 commits, 102 files. Version bump confirmed (`fluent-cart.php`, readme.txt `Stable tag: 1.5.2`).
- **Modules touched:** Templating/Bricks, PaymentMethods (SSLCommerz promo addon card), Tax, Subscriptions/customer portal, product-variations admin UI, Email Notifications (dev extension point)
- **Doc-relevant files of note:**
  - `app/Modules/Templating/Bricks/BricksLoader.php` — new "FluentCart - Product" (`fct_product`) Bricks template type; conditions honored, default-template fallback
  - `resources/admin/Modules/Products/parts/AdvancedVariationTable.vue` + `VariantForm/GroupBulkEditForm.vue` — group-edit summary bar with inline variant list + per-variant checkboxes; form covers Price/Inventory/Shipping/Tax Class; "Update %1$s variants" button
  - `app/Http/Controllers/FrontendControllers/CustomerSubscriptionController.php` + `resources/public/customer-profile/Vue/subcriptions/UpdatePaymentInfos/index.vue` — generic `card_update_url` redirect flow (Paddle + redirect-only gateways); hardcoded Paddle.vue deleted
  - `app/Models/Order.php`, `app/Services/Renderer/Receipt/TaxSummaryHelper.php`, email/invoice views, `EditorShortCodeHelper.php` — per-rate tax lines on checkout, emails, receipts, PDF, admin + customer order views
  - `app/Modules/PaymentMethods/PromoGateways/Addons/SslcommerzAddon.php` — install-card stub only; real gateway is separate addon plugin `sslcommerz-for-fluent-cart`
  - `app/Helpers/AttributeHelper.php` — labeled variation attributes ("Label: Value | ...") across all surfaces; hook `fluent_cart/item_display_attr`
- **Doc pages updated:**
  - `guide/changelog.md` — appended v1.5.2 entry (13 added/improved + 5 fixes)
  - `guide/customization-and-themes/customize-store-with-bricks.md` — new "Building a Single Product Template" section
  - `guide/product-types-creation/advanced-variations.md` — new "Bulk Editing Variants (Group Edit)" section (closes the 1.5.0 gap; includes 1.5.2 inline selector + checkboxes)
  - `guide/customer-dashboard/subscriptions.md` — Update Payment Method bullet expanded with redirect flow (Paddle/redirect-only gateways)
  - `guide/tax-&-duties/configuration-and-classes.md` — info callout in Checkout Tax Breakdown Display about per-rate lines
- **Doc pages created:** none (SSLCommerz page deferred by user)
- **Plugin changes flagged but skipped (no doc-body impact):**
  - Email Notifications extra-fields extension point (`fluent_cart/email_notification_data` filter + `fluent_cart/email_notification_updated` action) — dev-docs domain; no UI without an addon
  - `fluent_cart/transaction/max_refundable_amount` filter — dev-only, can only lower the cap
  - Labeled variation attributes everywhere + admin order builder labels — cosmetic display improvement, changelog only
  - EU VAT validation independent of reverse charge (domestic B2B) — docs never documented the old restriction; changelog only
  - Paddle multi-currency — lives in the Pro plugin, not in this OSS repo; unverifiable locally
  - All Fixes (gateway-name leak, duplicated variation titles, dark mode, category block border, Stripe duplicate charges)
- **Open questions carried forward:**
  - SSLCommerz settings page deferred — user will add later; addon source needed (zip: https://addons-cdn.fluentcart.com/sslcommerz-for-fluent-cart.zip); core stub has no settings fields
  - Releases 1.3.28–1.5.1 were never run through this pipeline (changelog entries exist in docs, but no CHANGES.md entries and no catalog audit for them); FTS5 index also stale — user may run `./scripts/plugin/sync-memory.sh 1.5.1`
  - Two screenshot stubs commented out with `TODO(screenshot)` (Bricks product template dropdown; group-edit drawer) — uncomment after adding images, they fail the build while missing
- **Build status:** `npm run docs:build` clean (6.73s)

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
