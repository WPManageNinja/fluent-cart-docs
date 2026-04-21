---
title: Migrating from EDD
description: Step-by-step walkthrough for migrating an Easy Digital Downloads store to FluentCart using the admin wizard. Covers compatibility, pre-flight summary, step selection, and verification.
---

# Migrating to FluentCart from Easy Digital Downloads

Moving an entire online store to a new platform might sound like a massive, stressful project — but with FluentCart it doesn't have to be.

The **FluentCart Migrator** addon acts as your personal moving team. It automatically and securely transfers all of your hard-earned data — products, orders, customers, subscriptions, coupons, licenses — from **Easy Digital Downloads (EDD)** directly into your new FluentCart store. No spreadsheets, no manual data entry, no coding.

::: tip Your EDD store stays safe
This tool only **copies** your data into FluentCart. Your original Easy Digital Downloads store, all its settings, and every record stay completely untouched throughout this entire process. You can run both side-by-side until you're fully ready to switch.
:::

This page walks through the wizard step by step. For an alternative terminal-based workflow on large stores, see the [WP-CLI Reference](/guide/migration/edd-cli). For a complete inventory of what does and doesn't transfer, see [What Gets Migrated](/guide/migration/what-is-migrated).

[[toc]]

---

## Before You Begin

Take two minutes to confirm these are in place before you start. Catching a missing piece now saves a mid-migration surprise.

- **Easy Digital Downloads 3.x** must be installed and active on your site — the Migrator reads directly from its v3 data tables.
- **FluentCart** must be installed and activated — [Get FluentCart](https://fluentcart.com).
- **FluentCart Pro** is required only if you use **EDD Software Licensing** (license keys, site activations, software updates). If you don't sell licensed software, the free version is enough.
- **A database backup** — always take a fresh backup before any migration. It's your safety net, even though the Migrator never modifies your EDD data.
- **WordPress admin access** on the site you're migrating.

::: warning Back up first
Even though the Migrator only reads from EDD and never touches your existing data, take a fresh database backup before you begin. It takes five minutes and gives you complete peace of mind.
:::

For a deeper rehearsal before touching production, run the migration on staging first with [Developer Mode](/guide/migration/developer-mode) enabled. That lets you reset and re-run as many times as needed.

---

## Step 1: Install and Activate the Migrator

Now that you're ready, install the migration tool. Think of it as a secure, temporary bridge between your existing EDD setup and your new FluentCart store.

1. Log in to your account on the **FluentCart website** and download the **FluentCart Migrator** addon `.zip` file.
2. Open your **WordPress admin dashboard** and go to **Plugins → Add New**.
3. Click the **Upload Plugin** button at the top.
4. Click **Choose File**, select the `.zip` file you just downloaded, then click **Install Now**.
5. Once installation finishes, click **Activate Plugin**.

---

## Step 2: Open the Migration Dashboard

Now that the bridge is built, open the tool.

1. Navigate to your **FluentCart** dashboard in the WordPress sidebar.
2. Click the newly added **Migrator** option.

This launches the **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.

![FluentCart Migrator landing screen with the source platform picker](/guide/public/images/migration/edd-migrator/01-source-select.webp)

---

## Step 3: Select Your Source

The wizard auto-detects which eCommerce plugins are installed. If you're running Easy Digital Downloads, the **Easy Digital Downloads** card displays a green **DETECTED** badge.

Click the card to confirm: *yes, this is where my data lives.*

WooCommerce and SureCart are visible as upcoming sources but are not yet active. Migrators for those platforms are on the roadmap.

---

## Step 4: Compatibility Check

Before moving any data, the wizard runs a quick compatibility check.

This step verifies that your installation of Easy Digital Downloads is fully compatible with the migration tool. Specifically, it checks for EDD 3.x with the v3 table schema. EDD 2.x stores using the legacy CPT data model are blocked here with a clear message — update to EDD 3.x first, then return to the wizard.

Once you see the **green confirmation box**, click **Continue**.

![Compatibility check screen showing EDD 3.x detected with version number](/guide/public/images/migration/edd-migrator/02-compatibility.webp)

---

## Step 5: Pre-Migration Overview

This is one of the most reassuring parts of the process. Before the actual transfer begins, the wizard takes a quick inventory of your existing EDD store and shows you exactly what it found.

You'll see clear summary cards displaying the total count of:

- **Products** — your digital downloads and other items
- **Orders** — your complete past purchase history
- **Customers** — all buyer accounts
- **Subscriptions** — active and historical recurring plans
- **Licenses** — issued software keys (if EDD Software Licensing is in use)
- **Transactions** — individual payment records

The wizard also surfaces detected payment gateways and the order statuses present in your data, so you can confirm there are no surprises.

Compare these numbers against what you know is in your EDD store. If they look right, proceed.

![Pre-migration overview showing entity counts, gateways, and order statuses](/guide/public/images/migration/edd-migrator/03-pre-overview.webp)

---

## Step 6: Configure and Start the Migration

You're at the final setup screen. This step lets you fine-tune how the migration runs before kicking it off.

**Batch Size**
Think of this as how many "boxes" the mover carries in one trip. It controls how many records the server processes per request. The default of **100** works for most stores. If your server is underpowered and a stage stalls, lower it to `50` or `25` to reduce load per cycle. Available values: 50, 100, 250, 500, 1000.

**Steps to Run**
A checklist of stages to include:

- **Products**
- **Tax Rates**
- **Coupons**
- **Orders, Payments, Customers, Subscriptions, Licenses**
- **Recount & Verify**

Leave **all of them checked**. Unchecking any item means that data won't come over. The wizard automatically skips stages already completed, so re-running the migration is safe.

When ready, click **Start Migration**.

::: warning Keep this tab open
Don't close or refresh this browser tab while the migration is running. The progress bar needs an active connection to process your data. Grab a coffee and let FluentCart do the heavy lifting.
:::

::: tip If the migration is interrupted
No need to panic. The Migrator tracks its progress as it goes. If your browser closes, your session times out, or anything else interrupts the process, return to the Migrator screen and start it again. It will automatically skip everything that already completed and resume the payments stage from the exact batch where it stopped.
:::

![Migration steps with WP-CLI command panel below](/guide/public/images/migration/edd-migrator/04-steps-cli.webp)

::: info On the same screen: WP-CLI commands
The configuration screen also surfaces the WP-CLI commands for each stage. For stores with thousands of orders, switching to the CLI is significantly faster and avoids browser timeouts entirely. See the [WP-CLI Reference](/guide/migration/edd-cli) for the full command surface.
:::

---

## Step 7: Migration Complete — Verify Before Going Live

Once the progress bar reaches **100%**, you'll see a green checkmark and a **Migration Completed** screen with a final breakdown of how many items were copied across each category.

![Migration completion screen with stats, backward compatibility notice, and next steps](/guide/public/images/migration/edd-migrator/05-completion.webp)

The completion screen also includes an important notice — **keep the Migrator plugin active** even after the migration finishes. It provides a backward compatibility layer for existing customers. See [Backward Compatibility](/guide/migration/backward-compatibility) for the full explanation.

Your data is in. Before opening your new store to the public, spend a few minutes verifying the result.

**Verify Your Products**
Go to **FluentCart → Products**. Confirm the product count looks right, then open a handful of items and check titles, descriptions, pricing (single or variations), subscription billing intervals, and bundle child items.

**Review Orders**
Go to **FluentCart → Orders** and open several recent ones. For each, confirm order totals, line items, payment status, customer name and email, billing address, payment gateway, and transaction ID.

**Check Subscriptions**
Go to **FluentCart → Subscriptions** and spot-check a few. Verify billing interval, renewal date, start date, and status.

**Check Licenses** *(if applicable)*
Go to **FluentCart → Licenses** and confirm license keys transferred with their correct statuses, activation limits, active site URLs, and expiration dates. For a programmatic check across all licenses, run:

```bash
wp fluent_cart_migrator migrate_from_edd --verify_license
```

**Verify Coupons**
Go to **FluentCart → Coupons** and confirm discount codes are present with correct amounts, usage limits, and expiration dates.

**Spot-Check Customers**
Go to **FluentCart → Customers**, open a few profiles, and confirm names, emails, and order history. Customer lifetime value and purchase counts are recalculated automatically during the recount stage, so those numbers will be accurate.

::: tip Pick representative orders to check thoroughly
For the best peace of mind, find one example of each scenario in your store and compare it field-by-field between EDD and FluentCart: a simple one-time purchase, a subscription order with renewals, an order with a coupon applied, a refunded order, and a license-based purchase.
:::

For a complete map of what transfers and what doesn't (categories, upgrade paths, payment gateway credentials, custom meta), see [What Gets Migrated](/guide/migration/what-is-migrated).

---

## A Few Things Still Need Your Attention

The Migrator handles your data automatically, but a small number of items need quick manual setup before you're fully live.

**1. Reconnect Your Payment Gateways**
Transaction records transfer, but gateway API credentials never do — for security reasons. Reconnect them fresh in FluentCart. Go to **FluentCart → Settings → Payment Gateways** and add your Stripe API keys and PayPal credentials.

> 💡 **Important:** Use the exact same Stripe and PayPal accounts you used with EDD. This ensures active subscriptions continue renewing correctly and all future webhooks route to the right place.

::: info
For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section.
:::

**2. Attach Your Download Files to Products**
The migration creates all your product records, but the actual downloadable files need to be confirmed and attached inside each product. Go to **FluentCart → Products**, open each digital product, and verify the correct file is linked under **Downloadable Asset(s)**.

**3. Review Your Email Notifications**
FluentCart has its own email system with beautifully designed templates. Review and customize your purchase receipt, subscription renewal, license expiration, and refund notification templates under **FluentCart → Settings → Email Configuration** before customers start receiving them.

**4. Update Your Store's Purchase Buttons and Links**
If you're using EDD shortcodes or custom purchase buttons anywhere on your site, replace them with FluentCart's purchase buttons or checkout blocks. Also update menu links pointing to EDD account or purchase history pages.

**5. Review Your Tax Settings**
Your EDD tax rates transfer over automatically, but verify the tax calculation mode in **FluentCart → Settings** matches how you were running taxes in EDD.

---

## Keep the Migrator Plugin Active

After your migration is complete, **don't deactivate the FluentCart Migrator plugin** during your transition period. It provides a silent backward compatibility layer that keeps existing customers working seamlessly:

- **EDD Software Licensing API calls** continue to be intercepted and routed through FluentCart, so customers' installed software keeps validating without any change on their end.
- **PayPal Standard renewal notifications** are caught and processed correctly.
- **Stripe webhooks** for legacy orders are matched against the original charge IDs.
- **Legacy EDD URLs** (download links, renewal pages, account URLs in old emails) are redirected to the right FluentCart pages.

For the full explanation of why this layer exists and when it's safe to deactivate, see [Backward Compatibility](/guide/migration/backward-compatibility).

::: warning Don't delete your EDD data yet
Even after everything is verified and running, don't delete your EDD database tables in a rush. The Migrator never modifies them — they're just sitting there, taking up very little space, and they're your fallback if you ever need to reference original records. Leave them until you're fully confident, then run `wp fluent_cart_migrator edd_cleanup` when you're ready.
:::

---

## Your Migration Checklist

Use this as your final go-live checklist before opening the doors on your FluentCart store:

- [ ] Database backup taken
- [ ] FluentCart (and FluentCart Pro if using licensing) installed and active
- [ ] FluentCart Migrator plugin installed and active
- [ ] Migration wizard completed — all stages checked
- [ ] Products verified — titles, prices, variations, bundles, subscription intervals
- [ ] Orders spot-checked — amounts, line items, statuses, transaction IDs
- [ ] Subscriptions verified — statuses, billing intervals, renewal dates
- [ ] Licenses verified *(if applicable)* — keys, limits, site URLs, `--verify_license` clean
- [ ] Coupons verified — discount types, limits, expiration dates
- [ ] Customers spot-checked — names, emails, order history
- [ ] Payment gateways reconnected with the same Stripe/PayPal accounts
- [ ] Downloadable files confirmed and attached to products
- [ ] Email notification templates reviewed and customized
- [ ] Purchase buttons and checkout links updated across the site
- [ ] Easy Digital Downloads deactivated *(Migrator plugin stays active)*
- [ ] You're live on FluentCart! 🎉

---

## Need help?

- Stuck on a specific stage? Check the [Troubleshooting](/guide/migration/troubleshooting) page.
- Want to know exactly what transfers? See [What Gets Migrated](/guide/migration/what-is-migrated).
- Running on a large store? Switch to the [WP-CLI Reference](/guide/migration/edd-cli).
- Testing on staging and want to reset between runs? Enable [Developer Mode](/guide/migration/developer-mode).
- Customer reports a broken license post-migration? See [Backward Compatibility](/guide/migration/backward-compatibility).
