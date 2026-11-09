# WP-CLI Reference

For stores with thousands of orders, the WP-CLI is faster than the admin wizard and avoids browser timeouts entirely. The same engine drives both interfaces, so the result is identical — only the surface differs.

## When to use WP-CLI

Use the CLI when:

- Your store has more than a few thousand orders.
- You are running on shared hosting with strict PHP timeouts.
- You want to script a migration as part of a deployment workflow.
- The browser keeps disconnecting mid-run on a large dataset.
- You are migrating on staging via SSH and don't have admin UI access.

The wizard remains the right choice for small-to-medium stores or for non-technical operators.

## Commands at a glance

The wizard surfaces the most common commands inside the **WP-CLI (Recommended for Large Stores)** panel:

![Migration steps with the WP-CLI command panel below](/images/migration/edd-migrator/04-steps-cli.webp)

## The primary command

All migration work happens through one namespaced command, with flags for each stage:

```bash
wp fluent_cart_migrator migrate_from_edd [flag]
```

### Flag reference

| Flag | What it does |
|------|--------------|
| `--all` | Run the complete migration pipeline: products → tax rates → coupons → payments → missing customers → recount, in order. Resumes any skipped or interrupted steps. |
| `--products` | Migrate EDD downloads to FluentCart products. |
| `--tax_rates` | Migrate EDD tax settings and generate FluentCart tax rates. Skipped automatically if taxes are disabled in EDD. |
| `--coupons` | Migrate EDD discount codes to FluentCart coupons. |
| `--payments` | Migrate EDD orders, transactions, subscriptions, and licenses. Processed in batches of 1,000 orders per page, with last page persisted for resume. |
| `--missing-customers` | Create FluentCart customers for active EDD customers who have no orders and aren't in FluentCart yet. |
| `--recount` | Recalculate stats after migration: lifetime value, average order value, customer purchase counts, subscription bill counts, missing UUIDs. |
| `--stats` | Show pre-migration statistics for the source store. No data is migrated. |
| `--verify_license` | Compare EDD and FluentCart licenses after migration. Reports missing licenses and status mismatches. |
| `--log` | Display the failed payment log (`_fluent_edd_failed_payment_logs`). |
| `--reset` | Wipe all FluentCart data (tables are dropped and recreated) and clear migration state. **Asks for confirmation but doesn't check Developer Mode, so never run it on a live store.** The standalone `reset` command is the [Developer Mode](/guide/migration/edd/developer-mode)-gated version. |

## Common workflows

### Full migration in one command

```bash
wp fluent_cart_migrator migrate_from_edd --all
```

Runs every stage in order. If any stage was previously completed, it is skipped automatically. If the previous run was interrupted mid-payments, it resumes from the last processed page.

### Step by step

For more control, run each stage individually. Useful when you want to inspect the result between stages or when one stage needs special handling.

```bash
wp fluent_cart_migrator migrate_from_edd --products
wp fluent_cart_migrator migrate_from_edd --tax_rates
wp fluent_cart_migrator migrate_from_edd --coupons
wp fluent_cart_migrator migrate_from_edd --payments
wp fluent_cart_migrator migrate_from_edd --missing-customers
wp fluent_cart_migrator migrate_from_edd --recount
```

The order matters. Products must exist before payments can reference them. Recount should be the final stage.

### Preview source data

Before migrating anything, see what is in the source store:

```bash
wp fluent_cart_migrator migrate_from_edd --stats
```

Shows the count of products, orders, transactions, customers, subscriptions, licenses, the gateways found, and the order statuses present, plus a customer breakdown (EDD total, customers without orders, FluentCart total, and missing). No data is touched.

### Inspect failures after a run

If individual orders failed during the migration (corrupted records, missing customer references, malformed line items), they are captured rather than halting the whole run. View them with:

```bash
wp fluent_cart_migrator migrate_from_edd --log
```

Each entry shows the EDD order ID, the error message, the error type, and the stage at which it failed. Use this to drive a follow-up investigation.

### Verify license integrity

After a migration that includes EDD Software Licensing, run:

```bash
wp fluent_cart_migrator migrate_from_edd --verify_license
```

This compares the EDD license records against the FluentCart license records and reports any that are missing or have status mismatches. Run this before deactivating EDD.

## Companion commands

Beyond the main `migrate_from_edd` command, the Migrator provides utilities for cleanup and developer workflows:

### Clean up EDD data after migration

Once you have validated the migration and are ready to remove EDD's artifacts from the database:

```bash
wp fluent_cart_migrator edd_cleanup
```

Deletes EDD post types (`edd_advanced_report`, `edd_discount`, `edd_license_log`, `edd_log`, `edd_payment`), orphaned post and comment metadata **anywhere on the site** (not just EDD's), and the `download_category` and `edd_log_type` taxonomies. It asks for confirmation at each stage, and only the post-type prompts can be skipped with `--yes`. It doesn't drop EDD's database tables. Take a backup first.

::: warning Run cleanup only after full verification
Don't run `edd_cleanup` until you have verified the migration thoroughly and your customers, subscriptions, and licenses are operating correctly through FluentCart. The original EDD records are your fallback if something needs reconciliation.
:::

### Reset migrated data (developer)

```bash
wp fluent_cart_migrator reset
```

Drops and recreates every FluentCart table, deletes FluentCart products, and clears the EDD migration state and mapping fields. Asks for confirmation and requires Developer Mode.

::: info About `migrate_fresh`
`migrate_fresh` is an internal command for FluentCart's own test setup. On a standard install it prints "You Are Not In Dev Mode" and does nothing, even with `FLUENT_CART_DEV_MODE` defined. Use `reset` instead.
:::

### Backfill missing subscription UUIDs

```bash
wp fluent_cart_migrator fix_subs_uuid
```

Standalone utility that fills in missing UUIDs on subscription records. Subscriptions migrated from older EDD installations occasionally lack UUIDs; this backfills them with `md5(id + uuid4 + microtime)` so other parts of FluentCart can reference them reliably.

### Backfill Paddle subscription IDs

```bash
wp fluent_cart_migrator backfill_paddle_ids [--dry-run]
```

For stores that sold through Paddle in EDD: replaces placeholder subscription IDs on migrated Paddle subscriptions with the real Paddle `sub_…` ID from EDD Recurring. Add `--dry-run` to see what would change first.

## Resume behavior

The CLI is fully resumable. State is persisted in the `__fluent_cart_edd3_migration_steps` option after every completed step.

- **Stage-level resume:** Re-running `--all` skips any stages already marked complete.
- **Page-level resume for payments:** The payment migration stores `last_order_page`. A re-run continues from the next batch.
- **Completed stages don't re-run:** a stage marked complete is skipped on the next run (`…already done. Skipping`). The ID map and coupon codes only prevent duplicates while an interrupted stage resumes. To redo a completed stage, `reset` on staging and run it again. `--recount` always recalculates from current data, never increments.

This means you can safely interrupt a long run with `Ctrl+C` and start it again without creating duplicate data.

## Memory and timing tips

For very large stores, give PHP enough headroom:

```bash
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_edd --all
```

If the host has aggressive process limits, run individual stages rather than `--all`, so each invocation has its own memory context.

## What the CLI doesn't do that the wizard does

- The CLI does not show a live, polling progress bar in the wizard's visual style. It uses WP-CLI's built-in progress bar for the payments stage.
- The CLI does not pause and resume mid-stage on demand — only between stages.
- The CLI does not surface the post-migration backward compatibility notice. Read [Backward Compatibility](/guide/migration/edd/backward-compatibility) directly to know what to keep enabled.

For everything else, the CLI is functionally equivalent to the wizard — and faster on real workloads.

## Related

- [Migrating from EDD](/guide/migration/edd/edd-migration) — wizard walkthrough
- [Developer Mode & Reset](/guide/migration/edd/developer-mode) — reset workflow for staging
- [Troubleshooting](/guide/migration/edd/troubleshooting) — what to do when something fails
