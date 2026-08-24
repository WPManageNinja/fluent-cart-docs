---
title: Troubleshooting
description: Diagnose and recover from WooCommerce migration issues. Failed order logs, common errors, the reset workflow, and the migration FAQ.
---

# Troubleshooting

The Migrator is built to be tolerant of bad data: individual record failures are captured rather than halting the run. This page explains how to find those failures, how to verify integrity after a migration, and how to recover from common problems.

## The failed order log

When an order fails to migrate — a corrupted record, a missing customer email, malformed line items — the failure is captured in the `_fluent_cart_woocommerce_failed_logs` WordPress option rather than aborting the run. The same applies to products: a single unreadable product is recorded and the catalog step continues.

### Viewing failures from the CLI

```bash
wp fluent_cart_migrator migrate_from_woo --log
```

Each entry shows the WooCommerce order ID and the error message. Failures are also printed as warnings while a CLI run is in progress, so you see them as they happen rather than only at the end.

### Viewing failures from the wizard

The completion screen surfaces an expandable **Error Log** section. Click to expand and see the same data as the CLI `--log` output.

### What to do with a failed entry

1. Open the original order in WooCommerce (**WooCommerce → Orders**).
2. Compare it against the error message — usually the cause is obvious (missing billing email, deleted product reference, an order with no usable line items).
3. Fix the source data in WooCommerce.
4. Re-run the orders stage: `wp fluent_cart_migrator migrate_from_woo --payments`. Already-migrated orders are skipped.

### Orders in an unregistered custom status

One entry type in the log isn't a data problem. WooCommerce can only return orders whose status is currently registered, so if a plugin that added custom order statuses has been deactivated, its orders can't be queried at all. Rather than leaving them unaccounted for, the Migrator lists each one with its order number, status, date, total, customer email, and an edit link.

**Fix:** reactivate the plugin that registered the status, then re-run the orders stage. The orders become queryable again and migrate normally.

## Common issues

### "WooCommerce is not active"

Every stage guards on WooCommerce being loaded. If you see this from the CLI or the wizard, WooCommerce has been deactivated — reactivate it and run again. WooCommerce needs to stay active for the whole migration, because the Migrator reads through its API.

### "Migration requires WooCommerce 3.0 or later"

The compatibility check blocks anything older. WooCommerce 3.0 introduced the CRUD API (`wc_get_products`, `wc_get_orders`) that the Migrator relies on to stay storage-agnostic.

**Fix:** Update WooCommerce, then return to the wizard.

### "No WooCommerce products found. Nothing to migrate."

The Migrator refuses to run against an empty catalog. If you genuinely have products, confirm they aren't all in the trash — the migration reads `publish`, `private`, and `draft` products.

### Migration stalls partway through

A stalled migration is almost always a server-side timeout: PHP's `max_execution_time` cut off the request, or the host's process supervisor killed a long-running script.

**Fix from the wizard:** Refresh the page and start the migration again. It resumes from the last completed page and skips completed steps.

**Fix from the CLI:** The CLI bypasses HTTP timeouts entirely. If the wizard keeps stalling, switch to the CLI:

```bash
wp fluent_cart_migrator migrate_from_woo --all
```

### Out of memory errors

For large stores, PHP may run out of memory during the products or orders stage. The Migrator already flushes WordPress's runtime caches between batches and stops a batch when memory usage crosses roughly 70% of the limit, but a very low limit can still be exhausted inside a single batch.

**Fix:** Give PHP more headroom for the migration run:

```bash
wp --exec='ini_set("memory_limit","1G");' fluent_cart_migrator migrate_from_woo --all
```

If you still hit the limit, run individual stages instead of `--all`, so each invocation gets its own memory context.

### Product counts don't match

FluentCart's product count won't always equal WooCommerce's, and that's usually correct:

- **Variations aren't separate products.** WooCommerce variations become FluentCart variations inside their parent product, not standalone entries.
- **Trashed products aren't migrated.** Only `publish`, `private`, and `draft` come across.
- **Failed products are logged.** Check the error log if the gap is larger than the above explains.

### Orders migrated but line items point at nothing

This happens when the orders stage ran before the products stage. Order line items resolve their product through the ID map that the products step writes.

**Fix:** Run `--products` first, then re-run `--payments`. If the products already migrated, re-running orders is safe — order records are idempotent.

### An order total doesn't match WooCommerce

It should always match. The Migrator rebuilds each order total from its components (items, tax, shipping, shipping tax, fees, minus discounts) and reconciles the result against WooCommerce's recorded total: a positive difference is recorded as a manual discount, a negative difference is absorbed as a fee. If a total genuinely differs, check whether a third-party extension was adding an amount at display time rather than storing it on the order — that value has nothing to migrate from.

### Coupon restrictions came across empty

Coupon product and category restrictions are remapped, not copied. A restricted product that wasn't migrated — because it was trashed, or the products step hadn't run yet — is dropped from the list rather than left pointing at a non-existent ID.

**Fix:** Run `--products` first, then re-run `--coupons`. Coupons are updated in place by code, so re-running is safe.

### Tax is missing on migrated orders

Tax migration is conditional on taxes being enabled in WooCommerce. If they were disabled, the tax step is skipped with a notice and order tax rows have no FluentCart rate to link to.

**Fix:** Enable taxes in WooCommerce, run `--tax_rates`, then re-run `--payments` so order tax rows resolve.

### Subscription bill counts look wrong

After the recount stage, occasionally a subscription's bill count doesn't match what you expected. This usually means renewal orders migrated before their parent subscription, so the link was made after the fact.

**Fix:** Re-run recount:

```bash
wp fluent_cart_migrator migrate_from_woo --recount
```

Recount re-attaches orphaned renewal transactions before rebuilding bill counts, which is why it must always be the final stage.

### A subscription shows Manual collection when you expected automatic charging

That's a deliberate decision, not a failure. FluentCart only marks a migrated subscription as auto-charging when it inherits a genuinely chargeable token. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for the exact rules and what to do about it.

### Stripe subscriptions can't be charged after migration

Almost always an order mode mismatch. WooCommerce records no per-order test/live marker, so the Migrator infers the mode from your gateway's current configuration. If your store's Stripe settings were flipped at some point, some orders land on the wrong mode — and FluentCart selects API keys by mode, so the token becomes unreachable.

**Fix:** Confirm the mode on a sample of migrated orders. To correct the inference for the whole run, add a filter before migrating:

```php
add_filter('fluentcart_migrator_woo_order_mode', function ($mode, $context) {
    // $context['order'] and $context['gateway'] are available
    return $mode;
}, 10, 2);
```

Then reset (on staging) and re-run.

### Customers exist in WooCommerce but not in FluentCart

Customers are created from orders. Registered accounts that never placed an order need the dedicated step:

```bash
wp fluent_cart_migrator migrate_from_woo --missing-customers
```

In the wizard, the **Missing Customers** checkbox only appears when such accounts are detected.

### Downloadable files aren't downloading

Local files are copied into FluentCart's storage directory during migration. Remotely-hosted files keep their original URL.

**Fix:** Open the product in FluentCart and check the **Downloadable Asset(s)** field. If a remote URL is no longer reachable, or a local file lived outside your uploads directory, re-attach it manually.

### Some IP addresses on migrated orders are blank

That's intentional. When the orders step completes, any IP appearing on more than 30 migrated orders is cleared — an IP that common belongs to a gateway or proxy, not a customer.

## Resetting a migration

If a staging migration has problems and you want to start fresh, the Migrator provides a clean reset path. It is gated behind [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — you must define `FLUENT_CART_DEV_MODE` in `wp-config.php` before reset will work. This is intentional: reset is destructive, and gating it behind a constant makes it impossible to trigger by accident from the WordPress admin.

::: danger Never run reset on production
Reset drops and recreates FluentCart's database tables and deletes migrated product posts. Only ever run it on staging, local, or otherwise isolated environments.
:::

### From the CLI

```bash
wp fluent_cart_migrator migrate_from_woo --reset
```

Asks for confirmation before destroying anything. You can bypass the prompt with WP-CLI's standard `--yes` flag inside scripts you have reviewed.

### From the wizard

When Developer Mode is active and the wizard detects a previous migration, a **Reset Migration** link appears inside the "Previous migration detected" notice on the Pre-Migration Overview screen. Clicking it asks for confirmation, then runs the same reset.

### What reset destroys

Reset is thorough. It rolls back everything the migration created so you can start clean.

**WordPress options cleared:**
- `__fluent_cart_woocommerce_migration_steps` (stage and page progress)
- `_fluent_cart_woocommerce_failed_logs` (per-order failure records)
- The migration summary

**Database schema:**
- Drops and recreates every FluentCart table

**Migrated post data:**
- Deletes FluentCart product posts and their metadata
- Removes the ID-mapping metadata from both sides (`_fct_migrated_id`, `_wc_migrated_from`, `__wc_migrated_variation_maps`)

Your original WooCommerce data is never touched. Only FluentCart-side records and the mapping metadata are affected.

::: warning Reset wipes all FluentCart data, not just WooCommerce imports
Because reset recreates the FluentCart schema, anything else living in FluentCart on that site goes with it. On a staging clone that's exactly what you want. On any site with real FluentCart data, it isn't.
:::

If reset ever reports that it dropped the tables but failed to recreate them, re-activate FluentCart (or run its database migration) to restore the schema before retrying. The Migrator checks for this explicitly and surfaces it rather than reporting a false success.

### A staging rehearsal workflow

A typical rehearsal loop looks like this:

1. Clone production into staging, including the WooCommerce database.
2. Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) in staging's `wp-config.php`.
3. Install FluentCart and the Migrator addon.
4. Run the full migration via the wizard or CLI.
5. Spot-check products, categories, variations, orders, subscriptions, coupons.
6. Note anything that needs source-data cleanup before the production run (duplicate SKUs, broken products, orders referencing deleted products).
7. Reset the migration: `wp fluent_cart_migrator migrate_from_woo --reset`.
8. Clean up the source data.
9. Re-run the full migration.
10. When the result looks right on staging, repeat on production (with Developer Mode **disabled**).

The ability to iterate without consequence turns a one-shot migration into something closer to a controlled, auditable process.

## Frequently asked questions

### Does the migration modify or delete my WooCommerce data?

Never. The Migrator only reads from WooCommerce. Your original data is untouched, which means you can verify the entire migration against your live WooCommerce store before switching anything over.

### Does it work with HPOS?

Yes. The Migrator reads through WooCommerce's CRUD API rather than querying tables directly, so it behaves identically whether your store uses High-Performance Order Storage or the legacy post tables. You don't need to know which one you're on.

### What if the migration is interrupted halfway through?

Just start it again. The Migrator tracks its own progress: it skips completed stages, resumes products from the last completed page, and resumes orders from the last completed batch. No duplicate data.

### Can I run the migration multiple times?

Yes. Every stage is idempotent. Re-running products updates existing migrated products through the ID map. Re-running coupons updates existing coupons by code. Re-running recount always recalculates from current data. There is no risk of duplicate records from re-running.

### Will my existing customers need to do anything?

Their accounts, order history, addresses, and subscriptions all move over, and they log in with the same WordPress credentials. The one group who may notice a change is subscribers whose renewals land on manual collection — see [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals).

### Will active subscriptions keep renewing automatically?

Some will, some will need the customer to pay each renewal. WooCommerce Subscriptions owns its own schedule with no gateway-side subscription to inherit, so FluentCart takes the schedule over. Whether it can also auto-charge depends on the saved payment token. Read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) in full before going live.

### Do I need FluentCart Pro?

Not for the WooCommerce migration itself. WooCommerce core has no licensing module, so the Pro-only license migration doesn't apply here.

### How long does the migration take?

It depends on store size:

- Small stores (a few hundred orders): two to five minutes
- Medium stores (thousands of orders): ten to thirty minutes
- Large stores (tens of thousands of orders): thirty minutes to a couple of hours

The CLI is consistently faster than the wizard for medium and large stores because it avoids HTTP timeouts and per-batch round trips.

### Should I keep the Migrator plugin active afterwards?

For a WooCommerce migration there is no compatibility layer to maintain, so the addon isn't doing anything once the migration is verified and complete. Keep it active while you're still verifying and might need the logs or a re-run; deactivate it afterwards if you like.

### When can I deactivate WooCommerce?

Once you have verified the migration, reconnected your gateways, and replaced your WooCommerce pages, shortcodes, and blocks with FluentCart's. If you sell subscriptions, deactivate WooCommerce before the next renewal date so two billing engines don't both act on the same schedule. Leave the WooCommerce database tables in place for a while as a fallback — they cost almost nothing and the Migrator never modified them.

### Where do I get help if I'm stuck?

- Check the failed order log: `wp fluent_cart_migrator migrate_from_woo --log`
- Preview your source data: `wp fluent_cart_migrator migrate_from_woo --stats`
- Rehearse on staging with [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) enabled
- Open a support ticket via your FluentCart account

## Related

- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — the admin interface
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — full data inventory
- [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) — recurring billing after the cutover
- [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) — full command surface
- [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — the reset gate
