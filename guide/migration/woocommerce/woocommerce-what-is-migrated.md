---
title: What Gets Migrated
description: A complete reference of every entity the FluentCart Migrator transfers from WooCommerce — and the items that are deliberately out of scope.
---

# What Gets Migrated

Before you run a migration, it is worth knowing exactly what comes across, what doesn't, and why. This page covers both — so there are no surprises after the wizard finishes.

Everything below is read through WooCommerce's own CRUD API, which means the results are identical on **HPOS** stores and on legacy post-table stores.

## What is migrated

### Products

Every WooCommerce product transfers as a FluentCart product, with its structure preserved. Published, private, and draft products are all included.

| WooCommerce concept | Becomes in FluentCart | Notes |
|---------------------|----------------------|-------|
| Simple product | Simple product | Single variation |
| Variable product | Product with variations | One FluentCart variation per WooCommerce child variation |
| Variable subscription | Subscription product with variations | Recurring config stored per variation |
| Subscription product | Subscription product | Interval, length, trial, and signup fee preserved |
| Grouped product | Product flagged as a bundle | Children linked as bundle variation references |
| Product Bundles (extension) | Product flagged as a bundle | Bundled items linked, including items pinned to a specific variation |
| External / affiliate product | Catalog-only product | Migrated but deliberately un-purchasable — see below |
| Title, description, short description, slug, author, status, dates | Same | Unchanged |
| Featured image | Same | Same media library reference |
| SKU | Same | De-duplicated if two products share one |

**Pricing and sale prices.** The current price becomes the item price. When a product is on sale, its regular price is stored as the compare-at price so the discount still displays.

**Stock.** Stock quantities, stock status, and backorder settings transfer per product and per variation. Two details worth knowing:

- If a WooCommerce item is marked out of stock **without** per-item stock management, FluentCart records it as managed with zero available — otherwise it would migrate as freely purchasable.
- If any variation manages its own stock, the parent product's stock-management flag is switched on. WooCommerce commonly leaves the parent flag off while stock lives on the variations; without this roll-up, FluentCart would ignore the variation quantities entirely.

**External / affiliate products.** FluentCart has no external-product type. These migrate as catalog entries so their content and images aren't lost, but their variation is set inactive and out of stock so they can never be checked out. The outbound URL and button text are preserved as product meta for a template or widget to read.

A bidirectional ID map is created so re-running the migration updates rather than duplicates: `_fct_migrated_id` on the WooCommerce product points to the FluentCart record, `_wc_migrated_from` on the FluentCart product points back, and `__wc_migrated_variation_maps` maps each WooCommerce variation ID to its FluentCart variation.

### Product categories

Unlike some migrations, WooCommerce's `product_cat` taxonomy **does** transfer. The whole tree is synced into FluentCart's `product-categories` taxonomy parents-first, so hierarchy is preserved, and existing terms are reused by slug rather than duplicated. Name, slug, and description all come across, and each product is reassigned to its migrated categories.

### Product attributes and variations

WooCommerce attributes are resolved into FluentCart's shared attribute library — attribute groups and their terms — and reused across products.

| WooCommerce | Becomes in FluentCart |
|-------------|----------------------|
| Global attribute taxonomy (`pa_*`) | Attribute group, named from the WooCommerce attribute label |
| Custom (per-product) attribute | Attribute group of type *options* |
| Attribute of type `color` | Color swatch group, with hex values read from term meta |
| Attribute of type `image` | Image swatch group, with the swatch image resolved to a URL |
| Attribute term | Attribute term in the matching group |

For **variable products**, only variation-defining attributes are used, and each WooCommerce child variation becomes one FluentCart variation carrying its selected terms. Variation titles come from WooCommerce's attribute summary.

For **non-variable products that still carry attributes**, the attributes are expanded into a cartesian product of combinations — one FluentCart variation per combination, all sharing the source product's price and stock. This is capped at **500 combinations**; a product that would exceed it stays a plain single-variation product instead.

::: info Variations whose attribute is set to "Any"
When a WooCommerce variation leaves an attribute unset ("Any …"), that attribute simply doesn't constrain the migrated variation. And when a variation references a term the parent product no longer lists — a common inconsistency in older stores — the term is recovered from the taxonomy and added back so the variation still resolves.
:::

### Downloadable files

Downloadable files attached to products and variations transfer, and this goes further than a metadata copy: files that live on your own server (an uploads URL for this site, or an absolute path) are **copied into FluentCart's own storage directory** so FluentCart can serve them. The copy is idempotent — re-running the migration doesn't duplicate files.

Files hosted elsewhere — S3, a CDN, another domain — keep their original URL unchanged.

### Customers

Customer records transfer with full identity and address data, deduplicated on email.

- Full name, email address
- WordPress user account association
- Billing address and, when present, a separate shipping address in the customer's address book
- Phone number on the billing address
- Lifetime value, purchase count, average order value — recalculated from the migrated orders during the **Recount & Verify** step

Customers are created two ways. Most arrive as a by-product of order migration: the first migrated order for an email creates the customer and seeds their address book. Registered customers who **never placed an order** would be lost that way, so a dedicated **Missing Customers** step walks users with the `customer` or `subscriber` role and creates any that don't already exist, reading their addresses from the WooCommerce customer profile.

::: info Why `subscriber` too
Stores that let people register before buying leave those accounts on WordPress's default `subscriber` role. Including that role means those accounts aren't silently dropped.
:::

If a customer with the same email already exists in FluentCart when an order is being migrated, the order is linked to the existing record rather than creating a duplicate.

### Orders and payments

Every order transfers — including line items, taxes, shipping, fees, discounts, transactions, refunds, and notes. Only WooCommerce's `checkout-draft` status (unfinished block-checkout attempts) is excluded.

Orders in **custom statuses** registered by a plugin migrate too, as long as that plugin is still active when you run the migration — any status WooCommerce doesn't recognize as FluentCart's own maps to **On Hold**. Orders sitting in a status whose plugin has been deactivated can't be read at all; those are recorded in the [failed order log](/guide/migration/woocommerce/woocommerce-troubleshooting) instead of being silently dropped.

| WooCommerce status | FluentCart order status | FluentCart payment status |
|--------------------|------------------------|---------------------------|
| `completed` | Completed | Paid |
| `processing` | Processing | Paid |
| `on-hold` | On Hold | Pending |
| `pending` | On Hold | Pending |
| `cancelled` | Canceled | Failed |
| `refunded` | Canceled | Refunded |
| `failed` | Failed | Failed |

Payment status is refined by how much was actually refunded: an order with a partial refund lands as **Partially Refunded** regardless of its WooCommerce status, and one refunded in full lands as **Refunded**.

Each order brings:

- Order ID and order number, preserved from WooCommerce
- Subtotal, cart tax, shipping total, shipping tax, fees, coupon discount, and order total — all converted to FluentCart's minor-unit (cents) storage
- Currency and tax behavior (inclusive or exclusive, read from your WooCommerce price settings)
- Billing and shipping addresses, including company name, phone, and email
- Line items: product, variation, quantity, unit price, subtotal, tax, discount, and fulfillment type
- Per-item refunded amounts, taken from WooCommerce's refund line items
- A charge transaction carrying the gateway transaction ID
- One refund transaction per WooCommerce refund, with its own amount and date
- Applied coupon codes with the discount amount, back-linked to the migrated coupon
- Order-level tax rows, linked to the generated FluentCart tax rates
- Order notes — both system notes and notes to the customer — as FluentCart activity entries
- Customer note, IP address, completion date, and refund date

**Invoice numbers.** If your store used a sequential invoice or order number plugin, that number is kept verbatim so the invoice a customer already has still matches. Orders carrying nothing but a bare WooCommerce ID get FluentCart's own invoice prefix applied instead.

**Totals reconciliation.** The Migrator rebuilds the order total from its components and compares it to WooCommerce's recorded total. Any positive difference is recorded as a manual discount; any negative difference is absorbed as a fee. Migrated orders therefore always add up to the same total your customer actually paid.

**Refund allocation.** When WooCommerce recorded a refund at the order level without allocating it to line items, the amount is spread proportionally across items by line total, so per-item refund figures stay sensible.

**Shipping status.** Only physically-fulfilled orders carry a shipping status. A `completed` WooCommerce order lands as **shipped**, so migrating years of history doesn't flood your fulfillment queue with thousands of unshipped orders.

**Order mode (test vs live).** WooCommerce keeps no per-order record of whether a payment was taken in test or live mode, so the Migrator reads the *current* configuration of the order's gateway — Stripe's `testmode`, PayPal Payments' `sandbox_on`, PayPal Standard's `testmode` — and falls back to your FluentCart store's own order mode for gateways with no such concept (cash on delivery, cheque, BACS). This matters: FluentCart selects its API keys by order mode, so a subscription imported under the wrong mode cannot be charged. If your store flipped modes at some point in its history, override the result with the `fluentcart_migrator_woo_order_mode` filter.

**Gateway mapping.** Payment methods map by prefix, so gateway variants are handled: anything starting with `stripe` becomes **stripe**, anything starting with `ppcp` or `paypal` becomes **paypal**, and `cod` / `cheque` / `bacs` become **offline payment**. Paystack and Airwallex map through by name. Any other gateway ID passes through unchanged.

**Shared IP masking.** When the orders step finishes, IP addresses appearing on more than 30 migrated orders are cleared. An IP that common is a gateway or proxy address, not a customer's, and keeping it serves no purpose.

### Subscriptions

When **WooCommerce Subscriptions** is active, subscriptions come across with their full state. Parent orders create the subscription; renewal orders link to it.

| Field | Behavior |
|-------|----------|
| Status | `active`, `on-hold` → Paused, `pending`, `pending-cancel` → Canceled, `cancelled`, `expired`, `switched` → Canceled |
| Billing interval | Mapped to FluentCart's slugs — daily, weekly, monthly, quarterly (3 months), half-yearly (6 months), yearly |
| Billing schedule snapshot | The true cadence — period × interval plus the calendar anchor — stored alongside the interval |
| Recurring amount, tax, and total | Split so the recurring amount is ex-tax and the total is gross |
| Signup fee | Preserved |
| Bill times and trial days | Read from the subscription's product or variation |
| Next payment, trial end, end, and cancellation dates | Preserved |
| Gateway customer ID | Stripe customer ID or PayPal payer ID |
| Notes | Migrated as subscription activity entries |
| Renewal order history | Linked back to the subscription |

An otherwise-active subscription whose end date has already passed is imported as **expired** — WooCommerce sometimes leaves such records active until a cron run catches up. Likewise, an active subscription still inside its free trial is imported as **trialing**, even though WooCommerce keeps no separate status for it.

**Odd cadences survive the interval mapping.** FluentCart's named intervals can't express *every two weeks*, and WooCommerce Subscriptions' synchronized renewals (all subscribers billed on the 1st, for example) have no named equivalent either. So alongside the mapped interval, the Migrator stores a snapshot of the real schedule — the period, its multiplier, and the calendar day it's anchored to — and renewals are generated from that. A fortnightly subscription keeps renewing fortnightly rather than collapsing to monthly.

**Collection method** is the field that decides whether renewals keep charging automatically. It's important enough to have its own page: read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals).

**Renewals whose parent is gone.** If a renewal order's subscription was deleted in WooCommerce, the Migrator creates a single canceled placeholder subscription keyed to the original subscription ID, so the renewal transaction still attaches somewhere. Every later renewal of the same deleted subscription links to that one placeholder instead of spawning its own.

**Switches and upgrades.** Orders that WooCommerce Subscriptions marks as a switch are flagged in the migrated order's config, along with the IDs of the subscriptions involved, so the upgrade chain isn't entirely lost.

After import, the **Recount & Verify** step re-attaches renewal transactions that lost their subscription link, rebuilds bill counts from actual renewal orders, and recalculates customer and coupon aggregates.

### Coupons

Every WooCommerce coupon transfers with its rules intact.

| WooCommerce | Becomes in FluentCart |
|-------------|----------------------|
| `percent`, `percent_product` | Percentage discount |
| `fixed_cart`, `fixed_product` | Fixed discount |
| Free-shipping coupon with no discount value | Free shipping coupon |
| Recurring / renewal discount types (WC Subscriptions) | Coupon flagged as applying to renewals |
| Individual use only | Non-stackable coupon |

Also preserved: usage limit, usage limit per user, current usage count, minimum and maximum spend, expiry date, description, and publish status (published → active, anything else → disabled).

**Restrictions are remapped, not copied.** Included and excluded products are translated from WooCommerce product IDs to the migrated FluentCart product IDs; products that weren't migrated are dropped from the list rather than left pointing at nothing. Included and excluded categories are matched to the migrated FluentCart category terms by slug.

Coupon usage counts are recalculated from applied coupons on paid orders during the recount step.

### Tax rates and configuration

Tax migration is conditional. It runs only when taxes are enabled in WooCommerce; otherwise the step is skipped with a clear notice.

When enabled, the Migrator:

- Turns on FluentCart's tax engine
- Sets tax-inclusive or tax-exclusive pricing to match your WooCommerce setting
- Seeds default EU VAT settings using your store's base country as the home country
- Creates FluentCart's default tax classes (Standard, Reduced, Zero)
- Generates FluentCart tax rates for every country present in your WooCommerce tax rates table, plus your store's base country
- Builds a map from each WooCommerce tax rate ID to the resolved FluentCart rate, which the orders step uses so historical tax rows stay linked correctly

::: info Not a 1:1 rate copy
FluentCart's tax model differs from WooCommerce's. The Migrator generates FluentCart's own rates for the relevant countries rather than copying every WooCommerce rate verbatim, and where several WooCommerce rates resolve to the same FluentCart rate on an order, their amounts are combined into one row with each source component retained in its metadata. Review your tax setup after migration to confirm it matches your jurisdictional requirements.
:::

### Store settings

On the first page of the products step, WooCommerce store configuration is copied into FluentCart's store settings — but **only into fields you have left empty**. Nothing you have already configured is overwritten.

- Store name, address line 1 and 2, city, postcode
- Store country and state (parsed from WooCommerce's combined `country:state` option)
- Currency
- Currency position (WooCommerce's left/right becomes FluentCart's before/after)
- Decimal separator

---

## What is NOT migrated

Honesty about boundaries matters more than a longer feature list. The following items are deliberately out of scope.

### Shipping zones, methods, and rates

WooCommerce shipping zones, shipping classes, flat-rate and table-rate configurations, and any shipping extension's rules are not migrated. Historical shipping amounts on past orders come across intact, but your live shipping setup needs recreating under **FluentCart → Settings → Shipping**. The two models differ enough that an automated mapping would quietly produce wrong rates at checkout.

### Product tags and custom taxonomies

Only `product_cat` transfers. The `product_tag` taxonomy and any custom product taxonomies do not.

### Product gallery images

The featured image transfers. Additional gallery images are not migrated.

### Product reviews and ratings

WooCommerce stores reviews as WordPress comments on the product. They are not migrated, and average ratings and review counts are not carried over.

### Weight, dimensions, and shipping classes

Per-product weight, length, width, height, and shipping class assignments are not mapped — FluentCart handles physical shipping differently. Re-enter them for the products that need them after migration.

### Scheduled sale dates

A product currently on sale migrates at its sale price, with the regular price kept as the compare-at price. But WooCommerce's **sale schedule** — the "sale price dates from / to" fields — is not carried over, so a sale that was set to end on its own will simply keep running in FluentCart until you end it.

### Cross-sells, up-sells, and other catalog extras

Cross-sell and up-sell product links, the *sold individually* flag, the purchase note, and menu order are not mapped.

### Trashed products

Only published, private, and draft products are read. Products in the trash are left behind.

### Bundle extensions other than grouped and Product Bundles

WooCommerce core **grouped** products and the official **Product Bundles** extension both migrate as FluentCart bundles. Composite Products, Mix & Match, and other bundle-style extensions are not recognized — their products migrate as ordinary products without the bundle relationship.

And even for the two that are supported, only the **relationship** transfers. Per-item quantities (minimum and maximum), per-item discounts, optional-item flags, and bundle-level dynamic pricing have no equivalent in FluentCart's bundle model and are not migrated. Review your bundles and re-price them after the import.

::: info Children that failed to migrate
A bundle is wired up after every product exists, so its children can be resolved. If a child product failed to migrate, it is dropped from the bundle; if every child failed, the parent migrates as a normal product rather than an empty bundle.
:::

### Custom product and order metadata

Only known fields from WooCommerce core, WooCommerce Subscriptions, and Product Bundles are parsed. Custom meta written by other third-party extensions is not preserved. That includes **product add-on** selections stored as line-item meta — the order line migrates with its price and quantity, but the add-on choices attached to it do not. If you have important custom data on products or orders, export it separately before migrating.

### Checkout-draft orders

Orders left in WooCommerce's `checkout-draft` status — abandoned block-checkout attempts — are filtered out. Every other status migrates, provided the plugin that registered it is still active.

### Orders in a deactivated custom status

WooCommerce can only return orders whose status is currently registered. If a plugin that added custom statuses has been deactivated, its orders are invisible to the query. Rather than pretending they don't exist, the Migrator lists them in the failed order log with their number, date, total, and an edit link. Reactivate the plugin and re-run the orders stage to bring them in.

### Line-item structure and the chosen shipping method

Two order details flatten during migration:

- **Bundle and grouped structure inside an order.** Line items migrate individually; the parent-child grouping WooCommerce uses to show a bundle and its contents together is not preserved.
- **The shipping method chosen on each order.** Shipping totals and shipping tax migrate accurately, but the name of the rate the customer picked — *Flat Rate*, *Local Pickup*, a table-rate row — is not stored on the migrated order.

### Payment gateway credentials and saved cards beyond Stripe

Transaction records and gateway transaction IDs come across, so history is intact. **Gateway API keys never transfer.** Reconnect Stripe, PayPal, and any other gateway in FluentCart after migration using the same accounts you used in WooCommerce.

Saved payment methods are only carried forward for Stripe subscriptions holding a modern PaymentMethod token. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for the exact rule and what happens to everything else.

### Subscription retry schedules and pending switches

WooCommerce Subscriptions' failed-payment retry rules — how many times to retry, at what spacing, and which emails to send — are not migrated. FluentCart's own retry behavior takes over; set it under **FluentCart → Settings → Store Settings → Subscriptions**.

A subscription switch or upgrade is recorded as a marker on the migrated order with the subscription IDs involved, but the switch history and any proration WooCommerce calculated are not reconstructed.

### Webhooks and REST API keys

WooCommerce webhooks and REST API consumer keys are not migrated. Anything integrating with your store over the WooCommerce API needs pointing at FluentCart's own API and re-authorizing.

### Extension data: gift cards, memberships, bookings, and rewards

Gift cards, store credit, points and rewards balances, memberships, bookings, and deposit or partial-payment records are not migrated. Only WooCommerce core, WooCommerce Subscriptions, and Product Bundles are read.

### Analytics and reporting history

WooCommerce's analytics tables and stored report data are not copied. FluentCart recalculates its own statistics from the migrated orders during the **Recount & Verify** step, so your reports rebuild from real data rather than being imported.

### Licenses and legacy endpoint compatibility

WooCommerce core has no licensing system, and software-licensing extensions built on top of it are not supported — no license keys or activations migrate. There is also no compatibility shim for old WooCommerce API or endpoint URLs, unlike the [EDD migration](/guide/migration/edd/backward-compatibility), which ships one for legacy EDD download and API links.

### Email templates

WooCommerce's email settings and template customizations are not migrated. FluentCart has its own notification system with its own templates. Review and customize them under **FluentCart → Settings → Email Configuration**.

### Pages, shortcodes, and blocks

Your Cart, Checkout, and My Account pages remain WooCommerce pages. Shortcodes and blocks on your content are not rewritten. Replace them with FluentCart's equivalents as part of the cutover.

### Refund reason text

Refund amounts and dates transfer as separate refund transactions. WooCommerce's refund reason text is not extracted into a dedicated field.

### Download history logs

WooCommerce's download permissions and download logs are not migrated. The downloadable files themselves are.

### Dry-run mode

All operations are live. There is no preview mode. To rehearse a migration safely, use [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) on a staging environment, run the full migration, review the result, then reset and run again.

---

## At a glance

| Entity | Migrated? | Notes |
|--------|-----------|-------|
| Products (simple, variable, subscription, grouped, bundle) | ✅ | External products migrate as catalog-only |
| Product categories | ✅ | Full hierarchy, matched by slug |
| Product attributes and terms | ✅ | Including color and image swatches |
| Product variations | ✅ | Attribute terms preserved |
| Featured image | ✅ | |
| Product gallery images | ❌ | |
| Product tags / custom taxonomies | ❌ | |
| Product reviews and ratings | ❌ | |
| Weight, dimensions, shipping classes | ❌ | Re-enter after migration |
| Scheduled sale dates | ❌ | Sale price migrates; its end date does not |
| Cross-sells, up-sells, purchase note, menu order | ❌ | |
| Trashed products | ❌ | Publish, private, and draft only |
| Bundles: per-item quantities, discounts, optional flags | ❌ | Relationship migrates, per-item config does not |
| Composite Products, Mix & Match | ❌ | Migrate as ordinary products |
| Downloadable files | ✅ | Local files copied into FluentCart storage |
| Stock levels and backorders | ✅ | Parent stock flag rolled up from variations |
| SKUs | ✅ | De-duplicated on collision |
| Customers (with orders) | ✅ | Deduplicated by email |
| Customers (without orders) | ✅ | Via the Missing Customers step |
| Customer addresses | ✅ | Billing and shipping |
| Orders (all statuses) | ✅ | `checkout-draft` excluded |
| Orders in a deactivated custom status | ❌ | Logged to the failed order log; reactivate and re-run |
| Order line items, tax, shipping, fees, discounts | ✅ | Totals reconciled to the WooCommerce total |
| Invoice numbers | ✅ | Sequential-plugin numbers kept verbatim |
| Bundle grouping inside orders | ❌ | Line items migrate flat |
| Chosen shipping method per order | ❌ | Shipping amounts migrate, the rate name does not |
| Transactions | ✅ | Gateway transaction IDs preserved |
| Refunds | ✅ | Per-refund records; reason text not extracted |
| Order notes | ✅ | As activity entries |
| Subscriptions | ✅ | Requires WooCommerce Subscriptions |
| Subscription renewal history | ✅ | Linked back to the subscription |
| Subscription billing schedule | ✅ | True cadence preserved, incl. synchronized renewals |
| Subscription retry / dunning schedules | ❌ | FluentCart's own retry settings apply |
| Saved cards for renewals | ⚠️ | Stripe PaymentMethod tokens only |
| Coupons | ✅ | Product and category restrictions remapped |
| Tax configuration and rates | ✅ | Only if enabled in WooCommerce |
| Store settings | ✅ | Only fills empty FluentCart fields |
| Shipping zones, methods, rates | ❌ | Recreate in FluentCart |
| Payment gateway credentials | ❌ | Reconnect in FluentCart |
| Email templates | ❌ | Set up fresh in FluentCart |
| Custom meta from third-party extensions | ❌ | Only known fields parsed, add-on line meta included |
| Webhooks and REST API keys | ❌ | Re-authorize against FluentCart's API |
| Gift cards, memberships, bookings, rewards, deposits | ❌ | Extension data is out of scope |
| Analytics and report history | ❌ | Recalculated from migrated orders |
| Licenses / legacy endpoint compatibility | ❌ | No WooCommerce equivalent of the EDD shim |
| WooCommerce pages, shortcodes, blocks | ❌ | Replace during cutover |

---

## Next steps

Now that you know exactly what's in scope, head to the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) to run your first migration — or, if you sell recurring products, read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) first.
