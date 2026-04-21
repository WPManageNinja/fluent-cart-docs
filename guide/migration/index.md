---
title: Migration Overview
description: Bring your existing eCommerce store into FluentCart with full data fidelity. Products, orders, customers, subscriptions, and licenses migrate together.
---

# Migration Overview

Moving an eCommerce store between platforms is the moment everything has to be right. Customers expect their accounts intact, subscriptions to keep billing, and active license sites to stay activated. The **FluentCart Migrator** handles this for you — automatically and safely — without touching the data in your source store.

::: tip Your source store stays untouched
The Migrator only **reads** from your source platform. Your existing store, its settings, and every record stay exactly as they are. You can keep both running side-by-side until you are ready to switch.
:::

## Source platforms

| Platform | Status | Notes |
|----------|--------|-------|
| **Easy Digital Downloads 3.x** | ✅ Fully supported | Includes EDD Recurring Payments and EDD Software Licensing |
| **WooCommerce** | 🚧 Coming soon | Visible in the source picker, not yet active |
| **SureCart** | 🚧 Coming soon | Visible in the source picker, not yet active |

EDD 2.x stores using the legacy CPT data model are detected and blocked at the compatibility check. Update to EDD 3.x first, then run the Migrator.

## Three ways to run a migration

The same engine drives all three interfaces — pick the one that matches your store size and comfort level.

**Admin Wizard.** A six-step Vue interface inside the WordPress admin. Best for stores with a few thousand orders or fewer, and for non-technical operators. → [Migrating from EDD](/guide/migration/edd-migration)

**WP-CLI.** A single namespaced command with flags for each stage. Faster, no browser timeouts, ideal for large stores or scripted migrations. → [WP-CLI Reference](/guide/migration/edd-cli)

**REST API.** The same endpoints the wizard uses. Useful if you want to wrap the migration in your own automation. Documented inline in the source.

## Documentation map

| Page | When to read |
|------|--------------|
| [Migrating from EDD](/guide/migration/edd-migration) | Start here. Full step-by-step wizard walkthrough with screenshots. |
| [What Gets Migrated](/guide/migration/what-is-migrated) | Before you start, to understand exactly what comes across — and what doesn't. |
| [WP-CLI Reference](/guide/migration/edd-cli) | If your store has thousands of orders, or you prefer the terminal. |
| [Developer Mode & Reset](/guide/migration/developer-mode) | When testing on staging, or when you need to start over. |
| [Backward Compatibility](/guide/migration/backward-compatibility) | After migration, to understand why the Migrator plugin must stay active. |
| [Troubleshooting](/guide/migration/troubleshooting) | If a migration step fails, or you want to verify integrity afterwards. |

## Recommended workflow

1. **Take a database backup.** Even though the Migrator never modifies your source data, a fresh backup is your safety net.
2. **Read [What Gets Migrated](/guide/migration/what-is-migrated).** Confirm the boundaries match your expectations.
3. **Run the migration on staging first.** Use [Developer Mode](/guide/migration/developer-mode) so you can reset and re-run as many times as needed.
4. **Verify the result.** Spot-check products, orders, subscriptions, and licenses against your source store.
5. **Repeat on production.** With staging validated, the production run is uneventful.
6. **Keep the Migrator plugin active.** It provides a [backward compatibility layer](/guide/migration/backward-compatibility) for legacy URLs, license API calls, and PayPal IPN renewals.

## Get started

Ready to run your first migration? Open the [Migrating from EDD](/guide/migration/edd-migration) walkthrough.
