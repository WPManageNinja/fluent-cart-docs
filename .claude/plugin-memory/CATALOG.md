# FluentCart Plugin — Module Catalog

A **table of contents** for the FluentCart plugin source at `/Users/authlab-24/Desktop/fluent-cart`.
Always loaded by the `fluentcart-code-to-docs` orchestrator skill before any plugin file is opened.

For every module below: what it does, the highest-signal files in it, the user-visible surface it produces, the doc page(s) it drives, and the plugin version through which the entry has been audited end-to-end.

---

## app/Modules/

### Modules/Coupon
- **Purpose:** Coupon generation, validation, redemption, recurring-coupon handling, free-shipping bumps.
- **Key files:** `CouponModule.php`, `Services/CouponService.php`, controllers under `Http/Controllers/AppControllers/CouponController.php`.
- **User-facing surface:** Coupon CRUD UI, checkout coupon redemption, coupon-on-bump stacking, recurring coupon behavior on subscriptions.
- **Drives docs:** `guide/marketing-sales-tools/creating-managing-coupons/*.md`
- **Last fully audited:** v1.3.27

### Modules/Data
- **Purpose:** Internal data-layer helpers (seed data, default settings payloads, lookup tables).
- **Key files:** module bootstrap + Data/* helper classes.
- **User-facing surface:** None directly. Drives default values seen on a fresh install.
- **Drives docs:** none typically — flag if changes alter shipped defaults.
- **Last fully audited:** v1.3.27

### Modules/IntegrationActions
- **Purpose:** Action-trigger registry that lets integrations (FluentCRM, FluentCommunity, etc.) hook into FluentCart events.
- **Key files:** `IntegrationActionsModule.php` + per-action handlers.
- **User-facing surface:** The action dropdown inside FluentCRM/FluentCommunity automation builders.
- **Drives docs:** `guide/integrations/fluentcrm-integration.md` (and siblings) — usually only when a new triggerable event is added.
- **Last fully audited:** v1.3.27

### Modules/Integrations
- **Purpose:** Concrete third-party service integrations (FluentCRM, FluentCommunity, FluentBooking, FluentSupport, FluentAffiliate, MailChimp, LearnDash, LifterLMS, etc.).
- **Key files:** `Integrations/FluentPlugins/<X>/*` for the Fluent family; `Integrations/MailChimp/*`, `Integrations/LearnDash/*` for others.
- **User-facing surface:** Integrations settings page, per-integration field maps, opt-in toggles, sync triggers.
- **Drives docs:** `guide/integrations/<service>-integration.md` (one page per integration).
- **Last fully audited:** v1.3.27

### Modules/PaymentMethods
- **Purpose:** All payment gateway implementations (Stripe, PayPal, Square, Mollie, Paddle, Razorpay, Mercado Pago, Flutterwave, Paystack, Authorize.net, Cash on Delivery) plus shared `Core/` contracts.
- **Key files:** `PaymentMethods/<Gateway>Gateway/*`, `PaymentMethods/Core/*` (abstracts, manager, IPN/webhook plumbing).
- **User-facing surface:** Per-gateway settings page, webhook URL field, test/live toggles, button-text customizations, e-check toggles.
- **Drives docs:** `guide/payments-checkout/connecting-payment-gateways/<gateway>-settings.md`. **Core changes** mean re-read every gateway page.
- **Last fully audited:** v1.3.27

### Modules/ProductIntegration
- **Purpose:** Bridges between product types and external systems (license fulfillment, file delivery, course enrollment).
- **Key files:** `ProductIntegrationModule.php`, per-type handlers.
- **User-facing surface:** "Integrations" tab on the product editor for license/digital products.
- **Drives docs:** `guide/product-types-creation/managing-product-integrations.md`
- **Last fully audited:** v1.3.27

### Modules/ReportingModule
- **Purpose:** Sales/orders/customer/product reports + chart data endpoints.
- **Key files:** `ReportingModule.php`, controllers under `Http/Controllers/Reports/*`.
- **User-facing surface:** Every report screen under FluentCart Pro → Reports.
- **Drives docs:** `guide/reporting-analytics/*.md`
- **Last fully audited:** v1.3.27

### Modules/Shipping
- **Purpose:** Shipping zones, methods, rates, packages, carrier-rate calculation.
- **Key files:** `ShippingModule.php`, `ShippingService.php`, `Models/ShippingZone.php`.
- **User-facing surface:** Shipping settings UI, zone editor, package picker on product/variation, checkout shipping selector.
- **Drives docs:** `guide/shipping/*.md`
- **Last fully audited:** v1.3.27

### Modules/StockManagement
- **Purpose:** Inventory tracking, stock holds on pending orders, low-stock thresholds.
- **Key files:** `StockManagementModule.php`, related stock-event listeners.
- **User-facing surface:** Inventory toggles on product/variation editor, "On Hold / Available / Delivered" counts, stock-out behavior at checkout.
- **Drives docs:** `guide/product-types-creation/inventory-management.md`, `guide/product-types-creation/advanced-inventory.md`
- **Last fully audited:** v1.3.27

### Modules/StorageDrivers
- **Purpose:** File-storage drivers for digital downloads (Amazon S3, local, future drivers).
- **Key files:** `StorageDrivers/S3/*`, driver registration in module bootstrap.
- **User-facing surface:** Storage settings → driver picker; per-product file upload destination.
- **Drives docs:** `guide/integrations/amazon-s3-integration.md`, `guide/storage/*.md`
- **Last fully audited:** v1.3.27

### Modules/Subscriptions
- **Purpose:** Subscription billing lifecycle — creation, renewals, trial, cancellation, reactivation, refund-aware reactivation, upgrades, cart rules, recurring coupons.
- **Key files:** `SubscriptionsModule.php`, `SubscriptionService.php`, `Models/Subscription.php`, listeners that fire `SubscriptionActivated` / `SubscriptionReactivated` events.
- **User-facing surface:** Subscription dashboard, detail page, reactivate action, cancellation email with access-end date, cart restrictions ("one subscription per cart", "qty must be 1"), reactivation-after-refund flow.
- **Drives docs:** `guide/product-types-creation/managing-subscriptions.md`
- **Last fully audited:** v1.3.27

### Modules/Tax
- **Purpose:** Tax classes, regional tax rules, EU VAT, country-level tax toggles, reverse-charge handling.
- **Key files:** `TaxModule.php`, `TaxService.php`, `Http/Controllers/AppControllers/TaxRateController.php`, `Modules/Tax/CountryToggle*.php`.
- **User-facing surface:** Tax settings UI (classes, regions, EU VAT field, per-country tax toggle), tax breakdown on order pages and PDF receipts, reverse-charge declaration on B2B EU receipts.
- **Drives docs:** `guide/tax-&-duties/*.md` (literal `&` in folder name — do not rename)
- **Last fully audited:** v1.3.27

### Modules/Templating
- **Purpose:** Frontend templating + page-builder integrations (Bricks, Gutenberg, Elementor).
- **Key files:** `Templating/Bricks/Elements/ProductsCollection.php` (and siblings), `Hooks/Handlers/BlockEditors/*`.
- **User-facing surface:** FluentCart elements inside Bricks/Gutenberg/Elementor editors — Products grid/list, filters, single-product, cart, checkout shortcodes.
- **Drives docs:** `guide/customization-and-themes/customize-store-with-bricks.md`, `customize-store-with-gutenberg.md`, `customize-store-with-elementor.md`
- **Last fully audited:** v1.3.27

### Modules/Turnstile
- **Purpose:** Cloudflare Turnstile bot protection on checkout / forms.
- **Key files:** `TurnstileModule.php`, validator hook.
- **User-facing surface:** Turnstile site/secret-key fields in integrations settings; widget rendering at checkout when enabled.
- **Drives docs:** `guide/integrations/cloudflare-turnstile-integration.md`
- **Last fully audited:** v1.3.27

### Modules/Wishlist
- **Purpose:** Customer wishlist functionality.
- **Key files:** `WishlistModule.php`, related model + frontend controller.
- **User-facing surface:** Wishlist add/remove buttons on product cards, wishlist screen in customer dashboard.
- **Drives docs:** **No current doc page.** Flag if user-facing wishlist work ships — propose a new page under `marketing-sales-tools/` or `customer-dashboard/`.
- **Last fully audited:** v1.3.27

### Modules/WooCommerceMigrator
- **Purpose:** WooCommerce → FluentCart data migration tooling.
- **Key files:** `WooCommerceMigratorModule.php`, importers per entity (products, orders, customers).
- **User-facing surface:** Migration screen under FluentCart Pro → Migration → WooCommerce.
- **Drives docs:** `guide/migration/*.md` (currently mostly EDD; add Woo entries if migrator surfaces them).
- **Last fully audited:** v1.3.27

---

## Cross-cutting paths (non-Modules)

### app/CPT/
- **Purpose:** Custom post type registrations for products, orders, etc.
- **Drives docs:** `guide/product-types-creation/*.md` when CPT changes alter visible product/order fields. Usually internal.

### app/Http/Controllers/AppControllers/SettingsController.php
- **Purpose:** Read/write of every settings page payload (store, payment, cart, email, licensing).
- **Drives docs:** `guide/settings-configuration/*.md` — re-read the matching page when this controller's payload shape changes.

### app/Http/Controllers/Reports/
- **Purpose:** Report data endpoints (sales, customer, product, subscription).
- **Drives docs:** `guide/reporting-analytics/*.md`

### app/Hooks/Handlers/BlockEditors/
- **Purpose:** Gutenberg + Bricks builder element registration and rendering.
- **Drives docs:** `guide/customization-and-themes/customize-store-with-bricks.md` and the Gutenberg sibling page.

### app/Models/, app/Services/, app/Helpers/, app/Hooks/
- **Purpose:** Internal data, service layer, helpers, action/filter wiring.
- **Drives docs:** **Usually nothing.** Skip unless the change surfaces a new setting key, exposes a hook that's been changelogged, or alters a visible behavior the user can verify.

### fluent-cart.php (root)
- **Purpose:** Plugin metadata + bootstrap.
- **Drives docs:** `guide/changelog.md` only — version-string bump.

---

## Vue / admin-UI allowlist (resources/admin/)

`resources/admin/` is **not** bulk-indexed. The files below are doc-relevant and worth opening directly when their feature changes:

- `resources/admin/Modules/Settings/Licensing.vue` — Licensing Settings tab
- `resources/admin/Modules/Subscriptions/Components/SubscriptionDetails.vue` — Subscription detail screen
- `resources/admin/Charts/LicenseStatistics.vue` — License analytics chart
- `resources/admin/BlockEditor/**/*.vue` — Gutenberg block UIs (cart, checkout, customer dashboard, etc.)

**Pro-only Vue (lives in `fluent-cart-pro`, not in this OSS clone):**
- `ActivatedSitesList.vue`, `ViewSite.vue` — Licensing Sites list + Site Detail (drives `guide/settings-configuration/managing-licensing-sites.md`). Flag in CHANGES.md when Pro features ship; we cannot index them until a Pro clone is available.

Add new entries here when a Vue file becomes a recurring source of doc copy.

---

## How to update this catalog

- **Per-release:** bump `Last fully audited:` for any module the release touched.
- **When a new module ships:** add a new H3 entry under `app/Modules/` in alphabetical order.
- **When a doc page moves or gains a sibling:** update the **Drives docs** field.
- **When a new Vue file becomes doc-relevant:** add it to the Vue allowlist.
