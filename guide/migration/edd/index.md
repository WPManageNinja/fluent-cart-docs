---
title: Migrating from Easy Digital Downloads
description: Move your Easy Digital Downloads store into FluentCart with full data fidelity. Products, orders, customers, subscriptions, and software licenses migrate together.
---

# Migrating from Easy Digital Downloads

The FluentCart Migrator handles end-to-end migration from **Easy Digital Downloads 3.x** into FluentCart. Products, customers, orders across every meaningful status, recurring subscriptions, software licenses with all their site activations, coupons, and tax configuration transfer in a single coordinated pipeline.

The same engine is reachable three ways — pick the surface that fits your store size and comfort level:

- **Admin Wizard** — six-step Vue interface inside WordPress admin. Best for small to medium stores and non-technical operators.
- **WP-CLI** — single namespaced command with flags for each stage. Faster for large stores, no browser timeouts.
- **REST API** — same endpoints the wizard uses, available for custom automation.

::: tip Your EDD store stays untouched
The Migrator only **reads** from EDD. Your existing store, its settings, and every record stay exactly as they are. Run both side-by-side until you're ready to switch.
:::

## Documentation in this section

| Page | When to read |
|------|--------------|
| [Wizard Walkthrough](/guide/migration/edd/edd-migration) | Start here. Full step-by-step run through the admin wizard, with screenshots. |
| [What Gets Migrated](/guide/migration/edd/what-is-migrated) | Before you start. Complete inventory of what transfers — and what's deliberately out of scope (categories, upgrade paths, gateway credentials, custom meta). |
| [WP-CLI Reference](/guide/migration/edd/edd-cli) | If your store has thousands of orders, or you prefer the terminal. Full flag reference and workflows. |
| [Developer Mode](/guide/migration/edd/developer-mode) | Before testing on staging. Explains the `FLUENT_CART_DEV_MODE` constant that gates destructive reset paths. |
| [Backward Compatibility](/guide/migration/edd/backward-compatibility) | After migration. Why the Migrator plugin must stay active — license API rerouting, PayPal IPN, Stripe webhook fallback, legacy URLs. |
| [Troubleshooting](/guide/migration/edd/troubleshooting) | When something fails or you want to verify. Failed payment log, license verification, common errors, reset workflow, FAQ. |

## Recommended workflow

1. **Take a database backup.** Even though the Migrator never modifies your source data, a fresh backup is your safety net.
2. **Read [What Gets Migrated](/guide/migration/edd/what-is-migrated).** Confirm the boundaries match your expectations.
3. **Rehearse on staging first.** Enable [Developer Mode](/guide/migration/edd/developer-mode) so you can reset and re-run as many times as needed.
4. **Verify the result.** Spot-check products, orders, subscriptions, and licenses against your source store.
5. **Repeat on production.** With staging validated, the production run is uneventful.
6. **Keep the Migrator plugin active.** It provides a [backward compatibility layer](/guide/migration/edd/backward-compatibility) for legacy URLs, license API calls, and PayPal IPN renewals.

## Quick requirements check

- **Easy Digital Downloads 3.x** with the v3 table schema (EDD 2.x CPT-based stores are blocked at the compatibility check)
- **FluentCart** installed and activated
- **FluentCart Pro** required only for EDD Software Licensing migration
- **PHP** memory limit of 256MB recommended for larger stores
- **WP-CLI** for command-line workflows

For full details, head to the [Wizard Walkthrough](/guide/migration/edd/edd-migration).
