---
title: Developer Mode & Reset
description: Enable FLUENT_CART_DEV_MODE to unlock reset workflows for staging environments. Iterate safely without risk to production data.
---

# Developer Mode & Reset

Running a migration for the first time means you want to rehearse it — import, inspect, reset, tweak the source, import again. **Developer Mode** exists for exactly that loop.

Because reset is destructive (it drops FluentCart tables and deletes migrated posts), every reset path in the plugin is gated behind an explicit constant. This is intentional: defining a constant in `wp-config.php` is auditable, slow to flip by accident, and impossible to toggle from the WordPress admin.

[[toc]]

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

## What Developer Mode unlocks

With `FLUENT_CART_DEV_MODE` set to `true`, the following become available:

| Path | How to access |
|------|---------------|
| `--reset` flag on the main migration command | `wp fluent_cart_migrator migrate_from_edd --reset` |
| Standalone reset command | `wp fluent_cart_migrator reset` |
| Schema-refresh reset | `wp fluent_cart_migrator migrate_fresh` |
| REST reset endpoint | `POST /fct-migrator/v1/reset` |
| Reset button in the admin wizard | Visible at the completion screen |

Without Developer Mode, every one of those paths returns blocked. The admin wizard checks the same flag and hides the reset button entirely. This is the behavior you want on production.

## The reset button in the wizard

On the migration completion screen, when Developer Mode is active, a **Reset Migration** link appears next to the **View FluentCart Dashboard** button:

![Completion screen showing the Reset Migration link next to the dashboard button](/guide/public/images/migration/edd-migrator/05-completion.webp)

Clicking it asks for confirmation, then runs the reset process. On production (Developer Mode disabled), this link is hidden.

## What reset does

Reset is thorough. It rolls back everything the migration created so you can start clean.

**Database schema:**
- Drops FluentCart tables via `DBMigrator::refresh()`

**WordPress options cleared:**
- `__fluent_cart_edd3_migration_steps` (stage progress)
- `_fluent_edd_failed_payment_logs` (per-order failure records)
- `__fluent_cart_migration_summary` (summary totals)

**Migrated post data:**
- Deletes FluentCart product posts created by the migration
- Removes migration metadata from EDD posts (`_fcart_migrated_id`, `__edd_migrated_variation_maps`)

Your original EDD data is never touched. Only FluentCart-side records and the bidirectional mapping meta are affected.

## `reset` vs `migrate_fresh`

Both are destructive, but they operate at different levels.

| Command | Scope | When to use |
|---------|-------|-------------|
| `wp fluent_cart_migrator migrate_from_edd --reset` | Wipes migrated data and clears migration state | Quick reset between rehearsal runs |
| `wp fluent_cart_migrator reset` | Same as `--reset`, invoked as a standalone command | Same scenario, different entry point |
| `wp fluent_cart_migrator migrate_fresh` | Reset plus schema refresh | When the FluentCart schema itself has changed (during plugin upgrades or development) |

For most staging workflows, `--reset` or `reset` is sufficient. Reach for `migrate_fresh` only when the FluentCart database schema has been updated and you want a guaranteed clean slate.

## A staging workflow

A typical rehearsal loop looks like this:

1. Clone production into staging, including the EDD database.
2. Enable Developer Mode in staging's `wp-config.php`.
3. Install FluentCart and the Migrator plugin.
4. Run the full migration via the wizard or CLI.
5. Spot-check products, orders, subscriptions, licenses, coupons.
6. Note anything that needs source-data cleanup before the production run (duplicate customers, broken products, legacy records).
7. Reset the migration: `wp fluent_cart_migrator migrate_from_edd --reset`.
8. Clean up the source data.
9. Re-run the full migration.
10. When the result looks right on staging, repeat on production (with Developer Mode **disabled**).

The ability to iterate without consequence turns a one-shot migration into something closer to a controlled, auditable process.

## Confirmation prompts

Every reset path asks for confirmation before destroying data — both in the CLI and in the wizard. You can bypass the CLI prompt with the standard WP-CLI `--yes` flag:

```bash
wp fluent_cart_migrator migrate_from_edd --reset --yes
```

Only do this inside scripts you have reviewed. The confirmation exists for a reason.

## Related

- [WP-CLI Reference](/guide/migration/edd-cli) — full command surface
- [Troubleshooting](/guide/migration/troubleshooting) — what to do if something goes wrong mid-run
