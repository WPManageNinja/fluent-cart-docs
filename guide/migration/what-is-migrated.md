---
title: What Gets Migrated
description: A complete reference of every entity the FluentCart Migrator transfers from EDD — and the items that are deliberately out of scope.
---

# What Gets Migrated

Before you run a migration, it is worth knowing exactly what comes across, what doesn't, and why. This page covers both — so there are no surprises after the wizard finishes.

[[toc]]

## What is migrated

### Products

Every EDD download transfers as a FluentCart product, with the structure preserved.

| EDD concept | Becomes in FluentCart | Notes |
|-------------|----------------------|-------|
| Simple download | Simple product | Single price tier |
| Variable pricing | Product variations | One variation per EDD price option |
| Product bundle | Product with bundle child references | Child IDs stored in line metadata |
| Recurring download | Subscription product | Billing intervals: daily, weekly, monthly, quarterly, half-yearly, yearly |
| Title, description, slug, author, dates | Same | Unchanged |
| Featured image | Same | Same media library reference |
| Signup fees | Variation `other_info` | Stored alongside pricing |
| License limits per variation | Variation license limit | Only when EDD Software Licensing is detected |

A bidirectional ID map is created so re-running the migration updates rather than duplicates: `_fcart_migrated_id` on the EDD post points to the FluentCart record, and `_edd_migrated_from` on the FluentCart product points back.

### Customers

Customer records transfer with full identity and address data, deduplicated on email.

- Full name, email address
- WordPress user account association if one exists by email
- Addresses: country, state, city, postal code
- Lifetime value, purchase count, average order value, first/last purchase dates — recalculated from the migrated orders during the **Recount & Verify** step

If a customer with the same email already exists in FluentCart when an order is being migrated, the order is linked to the existing record rather than creating a duplicate.

### Orders and Payments

Every order with a meaningful status transfers — including all line items, taxes, discounts, transactions, and notes.

| EDD status | FluentCart payment status |
|------------|---------------------------|
| `complete`, `processing`, `edd_subscription`, `publish` | Paid |
| `pending` | Pending |
| `refunded` | Refunded |
| `partially_refunded` | Partially Refunded |
| `revoked`, `failed`, `cancelled` | Failed |

Each order brings:

- Order ID (preserved from EDD)
- Subtotal, tax, shipping, discount, line total
- Currency and payment mode (test/live)
- Billing address
- Line items: product ID, variation ID, quantity, unit price, subtotal, tax, discount, fulfillment type
- Bundle child items (where applicable)
- Transaction records with gateway, transaction ID (Stripe charge ID, PayPal subscription ID), amount, currency, date
- Refund records (amounts and dates)
- Applied coupon codes with the discount amount
- Order notes from `edd_notes`

### Subscriptions

When EDD Recurring Payments is in use, every subscription comes across with its complete state.

| Field | Behavior |
|-------|----------|
| Status | `active`, `cancelled`, `expired`, `completed`, `pending`, `failing`, `trialling` mapped 1:1 |
| Billing interval | Preserved (daily through yearly) |
| Bill times limit | Preserved |
| Signup fee | Calculated as the delta between initial and recurring amount |
| Start date, renewal date, expiration date | Preserved |
| Vendor subscription ID | Stripe `vendor_subscription_id`, PayPal subscription ID |
| Currency | Preserved |
| Activities/notes | From `edd_notes` with `object_type='subscription'` |
| Renewal order history | Linked via `parent_id` on each renewal order |

After import, the **Recount & Verify** step rebuilds bill counts from actual renewal orders, marks subscriptions completed where they have hit their bill-times limit, auto-links orphaned renewals by parent order ID, and generates UUIDs for any missing entries.

### Software Licenses

For stores running EDD Software Licensing, this is the most consequential part of the migration. License keys, activation limits, expirations, and every active site activation transfer with full fidelity.

| Item | Behavior |
|------|----------|
| License key | Preserved exactly |
| Status | `active`, `inactive`, `expired`, `disabled` mapped 1:1 |
| Activation limit | From license record, or `_edd_sl_limit` meta override |
| Expiration date | Converted to FluentCart format |
| Product, variation, order, customer associations | All linked |
| Site activations | Every URL preserved, normalized via FluentCart's site URL formatter |
| Site activation status, hash, date | Preserved |
| Renewal license linkage | Linked back to the original subscription |

This means your customers do not need to deactivate and reactivate their installs. The sites they have running stay running.

::: tip FluentCart Pro requirement
License migration requires FluentCart Pro, since the license module lives there. The Migrator detects EDD Software Licensing automatically and enables the license module on first run — no separate setup step.
:::

### Coupons

Every EDD discount code transfers with its rules intact.

- Code (exact string)
- Discount type: `flat` → `fixed`, `percentage` → `percentage`
- Discount amount
- Status: `active` or `disabled`
- Usage limits: max total uses, max per customer (`once_per_customer`)
- Date range: start date, end date
- Minimum purchase amount
- Product restrictions: included products and excluded products, with EDD product IDs converted to FluentCart product IDs via the migration ID map
- Recurring behavior: applies to first payment only vs. all renewals
- Notes / description
- Affiliate association if AffiliateWP meta is present
- Use count: recalculated from applied coupons on paid orders during recount

If a coupon code already exists in FluentCart, the migration updates that record. Otherwise, a new one is inserted. Re-running coupon migration is safe.

### Tax Rates

Tax migration is conditional. It only runs if `edd_settings.enable_taxes` is true. If taxes are disabled in EDD, this step is skipped with a clear notice.

When enabled, the migration brings:

- Currency position (`before` / `after`)
- Decimal separator (`dot` / `comma`)
- Store name, address, city, state, country, postcode
- Tax-inclusive vs. exclusive pricing behavior

It then generates FluentCart's default tax classes (Standard, Reduced, Zero) and tax rates for every country found in the EDD tax rates table. The mapping between EDD rates and the new FluentCart rates is stored in `_edd_fct_tax_rate_maps` so order-level tax adjustments stay accurate.

::: info Not a 1:1 rate copy
FluentCart's tax model differs from EDD's. The Migrator generates modern FluentCart tax rates for the relevant countries rather than copying every EDD rate as-is. Review your tax setup after migration to confirm it matches your jurisdictional requirements.
:::

---

## What is NOT migrated

Honesty about boundaries matters more than a longer feature list. The following items are deliberately out of scope.

### Product categories and tags

EDD's `download_category` taxonomy and any custom taxonomies do not transfer. FluentCart's category model differs structurally, and a one-to-one mapping would mislead more than help. Set up your categories fresh in FluentCart after migration.

### EDD upgrade paths

The EDD upgrade-path mechanic — the ability for a customer to upgrade from one product or pricing tier to another — is not modeled in FluentCart's schema and is not migrated. If you rely on upgrade paths, plan how to handle them in FluentCart before switching over.

### Custom product and order metadata

Only known fields from EDD core, EDD Recurring Payments, EDD Software Licensing, and AffiliateWP are parsed. Custom meta written by other third-party EDD add-ons is not preserved. If you have important custom data on products or orders, export it separately before migrating.

### Abandoned and trashed orders

Orders with status `abandoned` or `trash` are explicitly filtered out. Only orders representing real transactions transfer.

### Payment gateway credentials

Transaction records — Stripe charge IDs, PayPal subscription IDs — come across, so renewals continue to process correctly. **Gateway API keys themselves never transfer.** Reconnect Stripe and PayPal in FluentCart after migration using the same accounts you used in EDD.

### Email templates

EDD's email settings are not migrated. FluentCart has its own notification system with its own templates. Review and customize them under **FluentCart > Settings > Email Configuration**.

### Download file attachments

Products are created. The actual downloadable files attached to each product are not automated. File paths, permissions, and storage architecture differ enough between platforms that an automated transfer would silently break delivery for customers. Open each digital product in FluentCart and confirm the file is linked under **Downloadable Asset(s)**.

### Download history logs

EDD's `edd_file_download_logs` table is not read. License site activations are preserved (those are functionally different and serve a real ongoing purpose), but historical file download events are not.

### Refund reason text

Refund amounts and dates transfer as part of the order. The reason text — which EDD only stores inside order notes — is not extracted into a separate field.

### Dry-run mode

All operations in 1.0.0 are live. There is no preview mode. To rehearse a migration safely, use [Developer Mode](/guide/migration/developer-mode) on a staging environment, run the full migration, review the result, then reset and run again.

---

## At a glance

| Entity | Migrated? | Notes |
|--------|-----------|-------|
| Products (simple, variable, bundle, recurring) | ✅ | Categories not migrated |
| Product images and content | ✅ | |
| Custom product meta from third parties | ❌ | Only known fields parsed |
| Customers | ✅ | Deduplicated by email |
| Orders (all real statuses) | ✅ | Abandoned and trash excluded |
| Order line items, taxes, discounts | ✅ | |
| Transactions (Stripe, PayPal, custom) | ✅ | IDs preserved |
| Refunds (amount + date) | ✅ | Reason text not extracted |
| Subscriptions | ✅ | Bill counts rebuilt during recount |
| Software licenses | ✅ | Requires FluentCart Pro |
| License site activations | ✅ | URLs normalized |
| Coupons | ✅ | Categories on coupons not migrated |
| Tax rates | ✅ | Only if enabled in EDD |
| Payment gateway credentials | ❌ | Reconnect in FluentCart |
| Email templates | ❌ | Set up fresh in FluentCart |
| Downloadable file attachments | ❌ | Re-attach in each product |
| Download history logs | ❌ | |
| Product categories / tags | ❌ | |
| EDD upgrade paths | ❌ | |
| Abandoned / trashed orders | ❌ | Intentionally excluded |

---

## Next steps

Now that you know exactly what's in scope, head to the [Migrating from EDD](/guide/migration/edd-migration) walkthrough to run your first migration.
