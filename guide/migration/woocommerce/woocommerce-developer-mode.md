---
title: Developer Mode
description: Enable FLUENT_CART_DEV_MODE to unlock the WooCommerce migration reset path on staging environments. The constant is the gate for every destructive operation in the Migrator.
---

# Developer Mode

The Migrator includes a reset path that is too destructive to leave exposed on production. **Developer Mode** is the single switch that unlocks it.

It exists for one reason: rehearsing migrations safely. On staging, you want to import, inspect, reset, tweak the source, and import again, sometimes a dozen times before the production cutover. On production, you want reset firmly locked.

## Activating Developer Mode

Add the following line to your `wp-config.php` file, above the `/* That's all, stop editing! */` comment:

```php
define('FLUENT_CART_DEV_MODE', true);
```

Save the file. The change takes effect immediately. No plugin deactivation or cache flush is required.

To turn Developer Mode off, remove the line or set it to `false`.

::: warning Never enable Developer Mode on production
Developer Mode exposes a destructive operation that drops and recreates FluentCart's database tables. Only enable it on staging, local, or otherwise isolated environments. On a live store it risks total data loss.
:::

## Why a constant, not a setting

Defining a constant in `wp-config.php` is auditable, slow to flip by accident, and impossible to toggle from the WordPress admin. A misclicked button in the dashboard could wipe a production store; editing `wp-config.php` requires SSH or filesystem access plus an explicit code change.

This is the same reason WordPress core gates `WP_DEBUG`, `DISABLE_WP_CRON`, and other risk-bearing flags behind constants rather than settings pages.

## What Developer Mode unlocks

With `FLUENT_CART_DEV_MODE` set to `true`, the following become available:

| Path | How to access |
|------|---------------|
| `--reset` flag on the WooCommerce migration command | `wp fluent_cart_migrator migrate_from_woo --reset` |
| **Reset Migration** link in the admin wizard | Appears inside the "Previous migration detected" notice on the Pre-Migration Overview screen |

Without Developer Mode, the CLI flag returns a clear error and the wizard hides the reset link entirely — the "Previous migration detected" notice still appears so you know a prior run happened, just without the reset option. That is the behavior you want on production.

For the actual reset workflow — what reset destroys, the staging rehearsal recipe, and confirmation prompts — see [Troubleshooting → Resetting a migration](/guide/migration/woocommerce/woocommerce-troubleshooting#resetting-a-migration).

## Related

- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — full reset workflow, failed order log, common errors
- [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) — full command surface
