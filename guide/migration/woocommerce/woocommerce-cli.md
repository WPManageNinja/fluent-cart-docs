---
title: WP-CLI Reference
description: Complete WP-CLI reference for migrating WooCommerce to FluentCart. Run full migrations, individual stages, stats, logs, and reset from the terminal.
---

# WP-CLI Reference

For stores with thousands of orders, WP-CLI is faster than the admin wizard and avoids browser timeouts entirely. The same engine drives both interfaces, so the result is identical — only the surface differs.

## When to use WP-CLI

Use the CLI when:

- Your store has more than a few thousand orders or products.
- You are running on shared hosting with strict PHP timeouts.
- You want to script a migration as part of a deployment workflow.
- The browser keeps disconnecting mid-run on a large dataset.
- You are migrating on staging via SSH and don't have admin UI access.

The wizard remains the right choice for small-to-medium stores or for non-technical operators.

## Commands at a glance

The wizard surfaces the most common commands inside the **WP-CLI (Recommended for Large Stores)** panel on the overview screen:

![Pre-Migration Overview with the WP-CLI command panel below the migration steps](/images/migration/woo-migrator/04-overview-steps-cli.webp)

## The primary command

All WooCommerce migration work happens through one namespaced command, with flags for each stage:

```bash
wp fluent_cart_migrator migrate_from_woo [flag]
```

::: info A separate command from EDD
WooCommerce uses `migrate_from_woo`. Easy Digital Downloads uses `migrate_from_edd`. They are independent commands with independent state, so a store that once ran an EDD migration can migrate from WooCommerce without either interfering with the other.
:::

### Flag reference

| Flag | What it does |
|------|--------------|
| `--all` | Run the complete pipeline: products → tax rates → coupons → orders → missing customers → recount, in order. Skips stages already completed and resumes interrupted ones. |
| `--products` | Migrate the WooCommerce catalog to FluentCart products. Also syncs categories, attributes, downloads, store settings (first page only), and wires up bundle relationships on the final page. |
| `--tax_rates` | Migrate WooCommerce tax configuration and generate FluentCart tax rates. Skipped automatically if taxes are disabled in WooCommerce. |
| `--coupons` | Migrate WooCommerce coupons to FluentCart coupons, with product and category restrictions remapped. |
| `--payments` | Migrate orders, transactions, refunds, customers, and subscriptions. Processed in pages of 1,000 orders, with the last page persisted for resume. |
| `--missing-customers` | Create FluentCart customers for registered `customer` / `subscriber` accounts that never placed an order. |
| `--recount` | Recalculate aggregates after migration: coupon usage, customer lifetime value and purchase counts, orphaned renewal transactions, subscription bill counts. |
| `--stats` | Show pre-migration statistics for the WooCommerce store. No data is migrated. |
| `--log` | Display the failed order log. |
| `--reset` | Wipe migrated data and clear migration state. **Requires Developer Mode.** See [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode). |

## Common workflows

### Full migration in one command

```bash
wp fluent_cart_migrator migrate_from_woo --all
```

Runs every stage in order. Stages already marked complete are skipped. If a previous run was interrupted mid-products or mid-orders, it resumes from the last completed page.

### Step by step

For more control, run each stage individually. Useful when you want to inspect the result between stages or when one stage needs special handling.

```bash
wp fluent_cart_migrator migrate_from_woo --products
wp fluent_cart_migrator migrate_from_woo --tax_rates
wp fluent_cart_migrator migrate_from_woo --coupons
wp fluent_cart_migrator migrate_from_woo --payments
wp fluent_cart_migrator migrate_from_woo --missing-customers
wp fluent_cart_migrator migrate_from_woo --recount
```

The order matters:

- **Products first.** Orders and coupons resolve product references through the ID map the products step writes.
- **Tax rates before orders.** Order tax rows link to the FluentCart rate IDs the tax step generates.
- **Coupons before orders.** Applied coupons on orders back-link to migrated coupon records by code.
- **Recount last.** It rebuilds aggregates from whatever is already migrated.

### Preview source data

Before migrating anything, see what is in the source store:

```bash
wp fluent_cart_migrator migrate_from_woo --stats
```

Prints the count of products, orders, paid transactions, customers, subscriptions, and coupons, plus every registered payment gateway ID and the order statuses present in your data. Nothing is written.

### Inspect failures after a run

If individual orders failed during the migration — corrupted records, missing product references, malformed line items — they are captured rather than halting the whole run. View them with:

```bash
wp fluent_cart_migrator migrate_from_woo --log
```

Each entry shows the WooCommerce order ID and the error message. Failures are also printed as warnings during the run itself, so a long CLI migration surfaces problems as they happen.

### Reset and start over (staging only)

```bash
wp fluent_cart_migrator migrate_from_woo --reset
```

Asks for confirmation, then wipes all migrated FluentCart data and clears WooCommerce migration state. This is gated behind [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) and should never be run on production.

## Resume behavior

The CLI is fully resumable. State is persisted in the `__fluent_cart_woocommerce_migration_steps` option after every completed page and step.

- **Stage-level resume:** Re-running `--all` skips any stages already marked complete.
- **Page-level resume for products:** The last completed product page is stored; a re-run continues from the next one.
- **Page-level resume for orders:** Same mechanism, in pages of 1,000 orders.
- **Idempotent re-runs:** `--products` updates existing migrated products in place through the ID map rather than duplicating them. `--coupons` updates existing coupons by code. `--recount` always recalculates from current data and never increments.

This means you can safely interrupt a long run with `Ctrl+C` and start it again. No duplicate data, no skipped records.

The Migrator also protects itself against memory exhaustion inside a single run: it flushes WordPress's runtime object cache and query log between batches, and stops a batch early when the process crosses roughly 70% of PHP's memory limit, leaving the next invocation to continue with a fresh process.

## Memory and timing tips

For very large stores, give PHP enough headroom:

```bash
wp --exec='ini_set("memory_limit","1G");' fluent_cart_migrator migrate_from_woo --all
```

Or, equivalently:

```bash
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_woo --all
```

If the host has aggressive process limits, run individual stages rather than `--all`, so each invocation gets its own memory context.

## What the CLI doesn't do that the wizard does

- The CLI does not render the wizard's live per-step progress panel; it prints per-page progress lines instead.
- The CLI does not pause and resume mid-stage on demand — only between pages and stages.
- The CLI does not surface the post-migration next-steps panel. Work through the checklist in the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration#a-few-things-still-need-your-attention) instead.

For everything else, the CLI is functionally equivalent to the wizard — and faster on real workloads.

## Related

- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — the admin interface
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — full data inventory
- [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — reset workflow for staging
- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — what to do when something fails
