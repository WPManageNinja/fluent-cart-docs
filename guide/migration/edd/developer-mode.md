# Developer Mode

The Migrator includes a set of tools — primarily reset and re-run paths — that are too destructive to leave exposed on production. **Developer Mode** is the single switch that unlocks them.

It exists for one reason: rehearsing migrations safely. On staging, you want to import, inspect, reset, tweak the source, and import again, sometimes a dozen times before the production cutover. On production, you want every reset path firmly locked.

## Activating Developer Mode

Add the following line to your `wp-config.php` file, above the `/* That's all, stop editing! */` comment:

```php
define('FLUENT_CART_DEV_MODE', true);
```

Save the file. The change takes effect immediately. No plugin deactivation or cache flush is required.

To turn Developer Mode off, remove the line or set it to `false`.

::: warning Never enable Developer Mode on production
Developer Mode exposes destructive operations. Only enable it on staging, local, or otherwise isolated environments. On a live store it risks accidental data loss.
:::

## Why a constant, not a setting

Defining a constant in `wp-config.php` is auditable, slow to flip by accident, and impossible to toggle from the WordPress admin. A misclicked button in the dashboard could wipe a production store; editing `wp-config.php` requires SSH or filesystem access plus an explicit code change.

This is the same reason WordPress core gates `WP_DEBUG`, `DISABLE_WP_CRON`, and other risk-bearing flags behind constants rather than settings pages.

## What Developer Mode unlocks

With `FLUENT_CART_DEV_MODE` set to `true`, the following capabilities become available:

| Path | How to access |
|------|---------------|
| Standalone reset command | `wp fluent_cart_migrator reset` |
| **Reset Migration** link in the admin wizard | Appears inside the "Previous migration detected" notice on the Pre-Migration Overview screen |

Without Developer Mode, the standalone `reset` command stops with an error and the wizard hides the **Reset Migration** link. This is the behavior you want on production.

::: warning The `--reset` flag isn't gated
`wp fluent_cart_migrator migrate_from_edd --reset` isn't gated by Developer Mode. It only asks for confirmation, so treat it as destructive everywhere.
:::

For the actual reset workflow (what reset destroys, the staging rehearsal recipe, and confirmation prompts), see [Troubleshooting → Resetting a migration](/guide/migration/edd/troubleshooting#resetting-a-migration).

## Related

- [Troubleshooting](/guide/migration/edd/troubleshooting) — full reset workflow, failed payment logs, common errors
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — full command surface
