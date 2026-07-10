# FluentCart Plugin — Per-Release Doc-Sync Log

Append-only log, **newest at top**. One H2 per release.
This file is the bridge between the changelog the user pastes and the doc edits Claude makes — read it first to know what's already addressed and what's still outstanding.

---

## v1.5.3 — Jul 9, 2026
- **Range:** `1.5.2..HEAD` (149a488b2 on `development`), ~70 commits. Version bump confirmed (`fluent-cart.php` `FLUENTCART_VERSION = '1.5.3'`, DB `1.0.46`).
- **Modules touched:** Tax (display style + label, inline tax classes, EU reverse-charge notice), MCP (`app/Modules/MCP/`), Reports (extensible sidebar), Products (SKU rendering fix)
- **Doc-relevant files of note:**
  - `resources/admin/Modules/Tax/TaxConfigurations.vue` (L140–161) — **Tax Display Style** dropdown `checkout_tax_breakdown_display` = `simplified` | `itemized`; `tax_display_label` input shown only in Simplified (default "Tax"). `defaultSettings()` = `itemized`, but fresh installs seed `simplified`. Commit `f2660e908`, `2c81990ad`
  - `app/Modules/Tax/TaxModule.php` (`getTaxDisplayLabel()`, `getReverseChargeNoticeText()`), `app/Services/Renderer/Receipt/TaxSummaryHelper.php` — single-line label + auto reverse-charge notice ("Reverse charge — Article 196, Council Directive 2006/112/EC…"), filter `fluent_cart/tax/reverse_charge_notice_text`. Commits `7ed6b259a`, `aec3f3c18`, `861163679`
  - `resources/admin/Modules/Tax/TaxRates.vue`, `EUVatSettings.vue`, `useTaxClassCrud.js` — inline tax-class creation (modal removed); "+" in tab bar, red on duplicate, no reload; Standard protected. Commit `35ba5c9d7`
  - `app/Modules/MCP/` — new report engine: `get-product-financials` (ProductFinancialsCalculator: revenue/MRR/ARR/margin-leakage), `get-upcoming-payments` (PaymentProjector: subscription forecasts + at-risk), `list-transactions` (payment ledger), coupon usage counts, product/variation filters, live/test mode, hourly/custom date windows, pagination. `WriteGuard` = dry-run + confirm_token + idempotency for refund/cancel; live-gateway opt-in
  - `resources/admin/Modules/Reports/Components/ReportNavLinks.vue` + `app/Hooks/Handlers/MenuHandler.php` (`addon_report_sidebar` via `fluent_cart/admin_app_data`) — add-ons register report pages into the Reports sidebar. Commit `875da356c`
  - `app/Services/Renderer/ProductRenderer.php` (`renderSku()`), `resources/public/single-product/similar-product.scss` — SKU CSS fix (`:not(.is-hidden)`); blank/inactive-variant SKUs no longer leak. Commit `773554f10`
- **Doc pages updated:**
  - `guide/changelog.md` — appended v1.5.3 entry (16 added/improved + 16 fixes)
  - `guide/tax-&-duties/configuration-and-classes.md` — rewrote "Checkout Tax Breakdown Display" → **Tax Display Style** (Simplified/Itemized + Tax Label); updated per-rate info note (incl. reverse-charge "VAT reversed"); added **Automatic Reverse-Charge Notice** subsection
  - `guide/tax-&-duties/tax-rates.md` — added "Creating a Tax Class Inline" under Tax Class Tabs
  - `guide/tax-&-duties/european-union-vat.md` — inline tax-class note on Per-Class Tabs; auto reverse-charge notice reference in PDF Receipts section
  - `guide/settings-configuration/mcp.md` — extended "What an assistant can look up" (subscription forecasts, payment ledger, product profitability/margin leakage, flexible date windows + live/test scoping)
  - `guide/reporting-analytics/reports-dashboard-overview.md` — info note on extensible Reports sidebar (report add-ons)
  - `guide/product-types-creation/creating-physical-products.md` — SKU tip: leave SKU blank to hide it (accurate behavior + 1.5.3 display fix)
- **Doc pages created:** none (no sidebar changes — all edits to already-linked pages)
- **Changelog line corrected (no code support):** "Adds an option to hide product SKUs" is NOT a toggle — commit `773554f10` is a 4-line CSS fix; real behavior is "empty SKU renders nothing." Documented honestly, no fake setting.
- **Plugin changes flagged but skipped (no doc-body impact):** duplicate-order/idempotency protection (Stripe/PayPal), installment bill_times fixes (Authorize.Net/Mollie/PayPal), PayPal amount formatting + cancel detection, per-item shipping allocation, shipping-tax method fix, Bricks label/loading fixes, product post_date preserve, stock badge label, DB migration/upgrade fixes, licensing/Page-History add-on download, current-customer capability checks, i18n coverage — internal/no configurable surface
- **Screenshots pending (placeholders embedded, `.webp` not yet added):** `tax/configuration-and-classes/tax-display-style.webp`, `tax/configuration-and-classes/reverse-charge-notice.webp`, `tax/tax-rates/inline-tax-class.webp`. Note: `tax/configuration-and-classes/tax-2.webp` (old 3-option dropdown) is now unreferenced.
- **Build status:** `npm run docs:build` clean (11.12s)

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
