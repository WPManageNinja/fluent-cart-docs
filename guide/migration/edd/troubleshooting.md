---
title: Troubleshooting
description: Diagnose and recover from migration issues. Failed payment logs, license verification, common errors, and the migration FAQ.
---

# Troubleshooting

The Migrator is built to be tolerant of bad data: individual record failures are captured rather than halting the run. This page explains how to find those failures, how to verify integrity after a migration, and how to recover from common problems.

## The failed payment log

When an order fails to migrate — corrupted record, missing customer reference, malformed line items, gateway data inconsistency — the failure is captured in the `_fluent_edd_failed_payment_logs` WordPress option rather than aborting the run.

### Viewing failures from the CLI

```bash
wp fluent_cart_migrator migrate_from_edd --log
```

Each entry shows:

| Field | Meaning |
|-------|---------|
| `edd_id` | The EDD order ID that failed |
| `message` | Human-readable error message |
| `error_type` | A short code identifying the error category |
| `stage` | Where in the pipeline the failure occurred (`data_setup`, `validation`, `migration`) |

### Viewing failures from the wizard

The migration completion screen surfaces an expandable error log section. Click to expand and see the same data as the CLI `--log` output.

### What to do with a failed entry

1. Open the original EDD order in your WordPress admin (`Edit > Orders` in EDD's UI).
2. Compare it against the error message — usually the cause is obvious (missing customer email, deleted product reference, broken meta).
3. Fix the source data in EDD.
4. Re-run the payments stage: `wp fluent_cart_migrator migrate_from_edd --payments`. The Migrator will pick up only the orders not yet successfully migrated.

## Verifying license integrity

If your store uses EDD Software Licensing, run the verification command after the migration completes:

```bash
wp fluent_cart_migrator migrate_from_edd --verify_license
```

This compares EDD's license records against FluentCart's license records and reports:

- Licenses present in EDD but missing in FluentCart
- Licenses with status mismatches (active in EDD but inactive in FluentCart, or vice versa)

For each discrepancy, investigate whether the source license has anomalies (a license without a parent order, an activation pointing at a deleted site) or whether the migration genuinely missed it. If genuinely missed, re-running the payments stage usually resolves it because licenses are migrated as part of order processing.

## Common issues

### "EDD 3.0 or later required" message

The compatibility check blocks the migration if it detects EDD 2.x with the legacy CPT data model. The Migrator only supports the EDD 3.x v3 table schema.

**Fix:** Update Easy Digital Downloads to 3.x. EDD 3.0 includes a built-in migration tool that converts legacy CPT data into the v3 tables. Run that first, then return to the FluentCart Migrator.

### Migration stalls partway through

A stalled migration is almost always a server-side timeout: PHP `max_execution_time` cut off the request, or the host's process supervisor killed a long-running script.

**Fix from the wizard:** Just refresh the page. The wizard will pick up from the last completed batch. If it stalls again, lower the **Batch Size** dropdown (try 50 or 25) so each batch finishes well within the host's timeout.

**Fix from the CLI:** The CLI bypasses HTTP timeouts entirely. If the wizard keeps stalling, switch to the CLI:

```bash
wp fluent_cart_migrator migrate_from_edd --all
```

### Out of memory errors

For large stores, PHP may run out of memory during the payments stage.

**Fix:** Give PHP more headroom temporarily for the migration run:

```bash
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_edd --all
```

If you still hit the limit, run individual stages instead of `--all`:

```bash
wp fluent_cart_migrator migrate_from_edd --products
wp fluent_cart_migrator migrate_from_edd --payments
wp fluent_cart_migrator migrate_from_edd --recount
```

Each invocation gets its own memory context.

### Customer not found errors

If failures show "customer not found" messages, the order in EDD references a customer record that has been deleted from `edd_customers` but still exists in the order's metadata.

**Fix:** The Migrator falls back to creating a customer from the order's email and address meta when the primary lookup fails. If the order has no usable email at all, you'll need to manually patch the order in EDD before re-running the payments stage.

### Subscription bill counts look wrong

After the recount stage, occasionally a subscription's bill count doesn't match what you expected.

**Fix:** This usually means renewal orders were never linked to the parent subscription in EDD (subscription_id is missing). The Migrator's recount step auto-links orphaned renewals by parent_order_id, but it can only do that if there's a discoverable link. Re-run recount manually:

```bash
wp fluent_cart_migrator migrate_from_edd --recount
```

If counts still look off, inspect the renewal orders in FluentCart and confirm their `parent_id` field matches the original subscription's parent order ID.

### License site activations not preserved

If a customer reports that their license is suddenly invalid on a site they had activated previously, check whether the site URL was preserved during migration.

**Fix:** The Migrator normalizes site URLs (lowercase, no protocol, no trailing slash). If the customer's site URL was stored unusually in EDD (with port numbers, with `:` characters, with non-ASCII characters), it may not have matched after normalization. Check the FluentCart license record's site activations directly. Manually re-add the site if needed.

### Missing subscription UUIDs

A small set of subscriptions may end up without UUIDs after migration if the source records were partially corrupted. Run the dedicated fix:

```bash
wp fluent_cart_migrator fix_subs_uuid
```

This backfills missing UUIDs without touching anything else.

## Resetting a migration

If a staging migration has problems and you want to start fresh, the Migrator provides clean reset paths. All of them are gated behind [Developer Mode](/guide/migration/edd/developer-mode) — you must define `FLUENT_CART_DEV_MODE` in `wp-config.php` before any reset path will work. This is intentional: reset is destructive, and gating it behind a constant makes it impossible to trigger by accident from the WordPress admin.

::: danger Never run reset on production
Reset drops FluentCart tables and deletes migrated post data. Only ever run it on staging, local, or otherwise isolated environments.
:::

### The reset button in the wizard

When Developer Mode is active and the wizard detects a previous migration on the current site, a **Reset Migration** link appears on the Pre-Migration Overview screen inside the "Previous migration detected" notice:

![Pre-Migration Overview with the Previous migration detected notice and Reset Migration link](/guide/public/images/migration/edd-migrator/07-reset-button.webp)

Clicking the link asks for confirmation, then runs the reset. On production (Developer Mode disabled), this link is hidden entirely — the notice still appears to confirm the previous run completed, but without the reset option.

### What reset destroys

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

### `reset` vs `migrate_fresh`

Both are destructive, but they operate at different levels.

| Command | Scope | When to use |
|---------|-------|-------------|
| `wp fluent_cart_migrator migrate_from_edd --reset` | Wipes migrated data and clears migration state | Quick reset between rehearsal runs |
| `wp fluent_cart_migrator reset` | Same as `--reset`, invoked as a standalone command | Same scenario, different entry point |
| `wp fluent_cart_migrator migrate_fresh` | Reset plus schema refresh | When the FluentCart schema itself has changed (during plugin upgrades or development) |

For most staging workflows, `--reset` or `reset` is sufficient. Reach for `migrate_fresh` only when the FluentCart database schema has been updated and you want a guaranteed clean slate.

### A staging rehearsal workflow

A typical rehearsal loop looks like this:

1. Clone production into staging, including the EDD database.
2. Enable [Developer Mode](/guide/migration/edd/developer-mode) in staging's `wp-config.php`.
3. Install FluentCart and the Migrator plugin.
4. Run the full migration via the wizard or CLI.
5. Spot-check products, orders, subscriptions, licenses, coupons.
6. Note anything that needs source-data cleanup before the production run (duplicate customers, broken products, legacy records).
7. Reset the migration: `wp fluent_cart_migrator migrate_from_edd --reset`.
8. Clean up the source data.
9. Re-run the full migration.
10. When the result looks right on staging, repeat on production (with Developer Mode **disabled**).

The ability to iterate without consequence turns a one-shot migration into something closer to a controlled, auditable process.

### Confirmation prompts

Every reset path asks for confirmation before destroying data — both in the CLI and in the wizard. You can bypass the CLI prompt with the standard WP-CLI `--yes` flag:

```bash
wp fluent_cart_migrator migrate_from_edd --reset --yes
```

Only do this inside scripts you have reviewed. The confirmation exists for a reason.

## Frequently asked questions

### Will my existing customers need to do anything?

No. Their accounts, order history, subscriptions, and licenses all move over. They log in with their existing WordPress credentials and find everything where they expect it — now inside FluentCart instead of EDD.

### Will active subscriptions keep renewing automatically?

Yes. Subscription records migrate with their gateway subscription IDs (Stripe, PayPal). As long as you reconnect the same gateway accounts in FluentCart, renewals continue without interruption. PayPal Standard subscriptions are handled by the Migrator's [backward compatibility layer](/guide/migration/edd/backward-compatibility).

### Will my customers' software licenses keep working?

Yes. The Migrator intercepts EDD-format license API calls (activation, deactivation, validity check, update check) and routes them through FluentCart. Customers don't need to update or reconfigure anything.

### Does the migration modify or delete my EDD data?

Never. The Migrator only reads from EDD's database tables. Your original data is untouched. You can verify the entire migration against your EDD store before switching anything over.

### What if the migration is interrupted halfway through?

Just start it again. The Migrator tracks its own progress, skips completed stages, and resumes the payments stage from the exact batch where it stopped. No duplicate data.

### How long does the migration take?

It depends on store size:
- Small stores (a few hundred orders): two to five minutes
- Medium stores (thousands of orders): ten to thirty minutes
- Large stores (tens of thousands of orders): thirty minutes to a couple of hours

The CLI is consistently faster than the wizard for medium and large stores because it avoids HTTP timeouts and per-batch round trips.

### Can I run the migration multiple times?

Yes. Every stage is idempotent. Re-running products updates existing migrated products via the ID map. Re-running coupons updates existing coupons by code. Re-running recount always recalculates from current data. There is no risk of duplicate records from re-running.

### What about WooCommerce or SureCart migrations?

The source picker shows WooCommerce and SureCart cards marked "coming soon." The architecture supports multiple sources, but only EDD 3.x is implemented in the current release. WooCommerce and SureCart sources are on the roadmap.

### Where do I get help if I'm stuck?

- Check the failed payment log: `wp fluent_cart_migrator migrate_from_edd --log`
- Run license verification: `wp fluent_cart_migrator migrate_from_edd --verify_license`
- Read [Backward Compatibility](/guide/migration/edd/backward-compatibility) if a customer reports a problem post-migration
- Open a support ticket via your FluentCart account

## Related

- [Migrating from EDD](/guide/migration/edd/edd-migration) — the wizard walkthrough
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — full command surface
- [Developer Mode & Reset](/guide/migration/edd/developer-mode) — staging workflow
- [Backward Compatibility](/guide/migration/edd/backward-compatibility) — what the Migrator continues to handle after migration
