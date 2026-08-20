---
title: Migrating from WooCommerce
description: Move your WooCommerce store into FluentCart with full data fidelity. Products, categories, attributes, orders, customers, subscriptions, coupons, and tax configuration migrate together.
---

# Migrating from WooCommerce

The FluentCart Migrator handles end-to-end migration from **WooCommerce 3.0+** into FluentCart. Your product catalog with its categories, attributes and variations, every customer, orders across every status, WooCommerce Subscriptions records, coupons, and tax configuration transfer in a single coordinated pipeline.

The Migrator reads WooCommerce through its own CRUD API (`wc_get_products`, `wc_get_orders`, `WC_Coupon`), so it works identically on **HPOS (High-Performance Order Storage)** stores and on legacy post-table stores. You don't need to know which one you're running.

The same engine is reachable two ways — pick the surface that fits your store size and comfort level:

- **Admin Wizard** — a three-step interface inside WordPress admin. Best for small to medium stores and non-technical operators.
- **WP-CLI** — a single namespaced command with flags for each stage. Faster for large stores, no browser timeouts.

::: tip Your WooCommerce store stays untouched
The Migrator only **reads** from WooCommerce. Your existing store, its settings, and every record stay exactly as they are. Run both side-by-side until you're ready to switch.
:::

## Documentation in this section

| Page | When to read |
|------|--------------|
| [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) | Start here. Full step-by-step run through the admin wizard, with screenshots. |
| [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) | Before you start. Complete inventory of what transfers — and what's deliberately out of scope (shipping zones, product galleries, tags, reviews, gateway credentials). |
| [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) | If you use WooCommerce Subscriptions. Explains how recurring billing changes hands and what decides whether a subscription keeps auto-charging. |
| [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) | If your store has thousands of orders, or you prefer the terminal. Full flag reference and workflows. |
| [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) | Before testing on staging. Explains the `FLUENT_CART_DEV_MODE` constant that gates the reset path. |
| [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) | When something fails or you want to verify. Failed order log, common errors, reset workflow, FAQ. |

## Recommended workflow

1. **Take a database backup.** Even though the Migrator never modifies your source data, a fresh backup is your safety net.
2. **Read [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).** Confirm the boundaries match your expectations.
3. **Read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals)** if you sell recurring products. This is the part of a WooCommerce migration that needs the most attention.
4. **Rehearse on staging first.** Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) so you can reset and re-run as many times as needed.
5. **Verify the result.** Spot-check products, orders, subscriptions, and customers against your source store.
6. **Repeat on production.** With staging validated, the production run is uneventful.
7. **Complete the cutover.** Reconnect payment gateways, replace WooCommerce shortcodes and blocks, and review email notifications.

## Quick requirements check

- **WooCommerce 3.0 or later**, installed and active — the Migrator uses the CRUD API introduced in WC 3.0
- **At least one WooCommerce product** — the Migrator refuses to run against an empty catalog
- **FluentCart** installed and activated
- **The FluentCart Migrator addon** installed and activated
- **PHP** memory limit of 256MB recommended for larger stores
- **WP-CLI** for command-line workflows

::: info WooCommerce Subscriptions is optional
Subscription data migrates only when the **WooCommerce Subscriptions** extension is active on the source site. Without it, the subscription counts read zero and every order migrates as a one-time payment.
:::

For full details, head to the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration).
