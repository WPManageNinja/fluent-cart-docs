---
title: Migrating from WooCommerce
description: Step-by-step walkthrough for migrating a WooCommerce store to FluentCart using the admin wizard. Covers installation, compatibility, the pre-migration overview, step selection, and verification.
---

# Migrating to FluentCart from WooCommerce

Moving an entire online store to a new platform might sound like a massive, stressful project — but with FluentCart it doesn't have to be.

The **FluentCart Migrator** addon acts as your personal moving team. It automatically and securely transfers all of your hard-earned data — products, categories, attributes, orders, customers, subscriptions, coupons, tax rates — from **WooCommerce** directly into your new FluentCart store. No spreadsheets, no CSV exports, no manual data entry.

::: tip Your WooCommerce store stays safe
This tool only **copies** your data into FluentCart. Your original WooCommerce store, all its settings, and every record stay completely untouched throughout this entire process. You can run both side-by-side until you're fully ready to switch.
:::

This page walks through the wizard step by step. For an alternative terminal-based workflow on large stores, see the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli). For a complete inventory of what does and doesn't transfer, see [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).

---

## Before You Begin

Take two minutes to confirm these are in place before you start. Catching a missing piece now saves a mid-migration surprise.

- **WooCommerce 3.0 or later** must be installed and active on your site. The Migrator reads through WooCommerce's CRUD API, which means it works the same whether your store uses **HPOS** (High-Performance Order Storage) or the legacy post tables.
- **At least one product** must exist in WooCommerce. The compatibility check refuses to run against an empty catalog.
- **FluentCart** must be installed and activated — [Get FluentCart](https://fluentcart.com).
- **WooCommerce Subscriptions** is only needed if you sell recurring products. If it isn't active, subscription counts read zero and every order migrates as a one-time payment.
- **A database backup** — always take a fresh backup before any migration. It's your safety net, even though the Migrator never modifies your WooCommerce data.
- **WordPress admin access** on the site you're migrating.

::: warning Back up first
Even though the Migrator only reads from WooCommerce and never touches your existing data, take a fresh database backup before you begin. It takes five minutes and gives you complete peace of mind.
:::

For a deeper rehearsal before touching production, run the migration on staging first with [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) enabled. That lets you reset and re-run as many times as needed.

---

## Step 1: Install and Activate the Migrator

Now that you're ready, install the migration tool. Think of it as a secure, temporary bridge between your existing WooCommerce setup and your new FluentCart store.

The quickest route is from inside FluentCart itself:

1. Go to **FluentCart → Settings → Features & addon**.
2. Scroll to the **Plugin Addons** panel.
3. Find **FluentCart Migrator** — *"Migrate your store data to FluentCart from other eCommerce platforms."*
4. Click **Download**, then activate the plugin when prompted.

![FluentCart Features and addon screen with the Download button next to FluentCart Migrator](/images/migration/woo-migrator/01-addon-download.webp)

You can also install it manually: download the addon `.zip` from the [FluentCart addons page](https://fluentcart.com/fluentcart-addons/), then go to **Plugins → Add New → Upload Plugin**, choose the file, click **Install Now**, and finally **Activate Plugin**.


## Step 2: Open the Migration Dashboard

Now that the bridge is built, open the tool.

1. Navigate to your **FluentCart** dashboard in the WordPress sidebar.
2. Click the newly added **Migrator** option.

This launches the **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.


## Step 3: Select WooCommerce as Your Source

The wizard auto-detects which eCommerce plugins are installed. If you're running WooCommerce, the **WooCommerce** card displays a green **DETECTED** badge.

Click the card to confirm: *yes, this is where my data lives.*

![Select Migration Source screen with Easy Digital Downloads and WooCommerce detected](/images/migration/woo-migrator/02-source-select.webp)

Easy Digital Downloads appears alongside it as a second supported source, and SureCart is visible as an upcoming one.


## Step 4: Compatibility Check

Before moving any data, the wizard runs a quick compatibility check.

This step verifies that your WooCommerce installation can be read by the migration tool. It confirms WooCommerce is active and reports the detected version. **WooCommerce 3.0 is the minimum** — that's the release that introduced the CRUD API the Migrator relies on. Older installations are blocked here with a clear message; upgrade WooCommerce first, then return to the wizard.

Once you see the **green confirmation box**, click **Continue**.

![Compatibility check screen showing WooCommerce detected with its version number](/images/migration/woo-migrator/03-compatibility.webp)


## Step 5: Pre-Migration Overview

This is one of the most reassuring parts of the process. Before the actual transfer begins, the wizard takes a quick inventory of your existing WooCommerce store and shows you exactly what it found.

You'll see clear summary cards displaying the total count of:

- **Products** — published, private, and draft products in your catalog
- **Orders** — your complete purchase history
- **Customers** — registered accounts with the `customer` or `subscriber` role
- **Transactions** — orders in a paid state (processing, completed, refunded)
- **Coupons** — published discount codes
- **Subscriptions** — shown only when WooCommerce Subscriptions is active

Below the counts, the wizard surfaces the **payment gateways** registered on your store and the **order statuses** present in your data, so you can confirm there are no surprises.

Compare these numbers against what you know is in your WooCommerce store. If they look right, proceed.

::: info Returning to a migration already in progress
If the wizard detects a previous run on this site, a **Previous migration detected** notice appears above the counts. Completed steps show a green **Completed** badge, the primary button changes to **Resume Migration**, and anything already done is skipped automatically.
:::


## Step 6: Choose Steps and Start the Migration

You're at the final setup screen. The **Migration Steps** panel lets you choose which stages to run:

- **Products** — the catalog, plus categories, attributes, variations, downloads, and a one-time store-settings sync
- **Tax Rates** — WooCommerce tax configuration and the rate map orders depend on
- **Coupons** — discount codes with their restrictions
- **Orders, Payments, Customers** — the main stage; also covers subscriptions when WooCommerce Subscriptions is active
- **Missing Customers** — appears only when you have registered customers who never placed an order
- **Recount & Verify** — rebuilds coupon usage, customer lifetime value, and subscription bill counts

Leave **all of them checked**. Unchecking any item means that data won't come over. Order matters and the wizard runs them in the correct sequence — products must exist before orders can reference them, and recount always runs last.

When ready, click **Start Migration**.

![Pre-Migration Overview with entity counts, migration step checkboxes, and the WP-CLI command panel](/images/migration/woo-migrator/04-overview-steps-cli.webp)

::: warning Keep this tab open
Don't close or refresh this browser tab while the migration is running. The progress screen needs an active connection to keep feeding batches to the server. Grab a coffee and let FluentCart do the heavy lifting.
:::

::: tip If the migration is interrupted
No need to panic. The Migrator tracks its progress as it goes — products resume from the last completed page, orders from the last completed batch. If your browser closes, your session times out, or anything else interrupts the process, return to the Migrator screen and start it again. It skips everything that already completed and picks up exactly where it stopped.
:::

::: info On the same screen: WP-CLI commands
The overview screen also surfaces the WP-CLI commands for each stage. For stores with thousands of orders, switching to the CLI is significantly faster and avoids browser timeouts entirely. See the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) for the full command surface.
:::


## Step 7: Migration Complete — Verify Before Going Live

Once every stage reports done, you'll see a green checkmark and a **WooCommerce Migration Completed** panel with the completion timestamp and a final breakdown of how many items were copied across each category.

![WooCommerce Migration Completed panel showing product and customer counts and a View FluentCart Dashboard button](/images/migration/woo-migrator/05-completion.webp)

If any individual orders failed during the run, an expandable **Error Log** section appears here listing each one. See [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) for how to read and act on those entries.

Your data is in. Before opening your new store to the public, spend a few minutes verifying the result.

**Verify Your Products**
Go to **FluentCart → Products**. Confirm the product count looks right, then open a handful of items and check titles, descriptions, categories, pricing, variations and their attribute terms, stock quantities, and downloadable files.

**Review Orders**
Go to **FluentCart → Orders** and open several recent ones. For each, confirm order totals, line items, tax, shipping, discounts, payment status, customer name and email, billing and shipping addresses, payment gateway, and transaction ID.

**Check Subscriptions**
Go to **FluentCart → Subscriptions** and spot-check a few. Verify billing interval, next renewal date, status, and — most importantly — the **collection method**. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for what that field means and why it matters.

**Verify Coupons**
Go to **FluentCart → Coupons** and confirm discount codes are present with correct amounts, usage limits, product and category restrictions, and expiration dates.

**Spot-Check Customers**
Go to **FluentCart → Customers**, open a few profiles, and confirm names, emails, addresses, and order history. Customer lifetime value and purchase counts are recalculated automatically during the recount stage, so those numbers will be accurate.

::: tip Pick representative orders to check thoroughly
For the best peace of mind, find one example of each scenario in your store and compare it field-by-field between WooCommerce and FluentCart: a simple one-time purchase, a variable-product order, an order with shipping and tax, an order with a coupon applied, a partially refunded order, and a subscription order with renewals.
:::

For a complete map of what transfers and what doesn't, see [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).

## A Few Things Still Need Your Attention

The Migrator handles your data automatically, but a small number of items need quick manual setup before you're fully live.

**1. Reconnect Your Payment Gateways**
Transaction records transfer, but gateway API credentials never do — for security reasons. Reconnect them fresh in FluentCart under **FluentCart → Settings → Payment Settings**.

> 💡 **Important:** Use the exact same Stripe and PayPal accounts you used with WooCommerce. FluentCart selects its API keys by order mode (test or live), so connecting a different account — or the wrong mode — leaves migrated charges unreachable.

::: info
For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section.
:::

**2. Set Up Shipping**
WooCommerce shipping zones, methods, and rate rules are not migrated — the two models differ too much for an automated mapping to be trustworthy. Historical shipping amounts on past orders come across intact, but you'll need to recreate your live shipping setup under **FluentCart → Settings → Shipping**. See the [Shipping](/guide/shipping/) section.

**3. Review Your Tax Settings**
Your WooCommerce tax configuration transfers and FluentCart tax rates are generated for the countries you taxed, but FluentCart's tax model is not a one-to-one copy of WooCommerce's. Open **FluentCart → Settings → Tax Settings** and confirm the rates and calculation behavior match your jurisdictional requirements.

**4. Review Your Email Notifications**
FluentCart has its own email system with its own templates. Review and customize your purchase receipt, subscription renewal, and refund notification templates under **FluentCart → Settings → Email Configuration** before customers start receiving them.

**5. Replace WooCommerce Shortcodes, Blocks, and Links**
Any `[woocommerce_cart]`, `[woocommerce_checkout]`, `[products]`, or add-to-cart shortcodes and blocks on your pages need replacing with FluentCart's equivalents. Also update menu items and links pointing to WooCommerce's My Account, Cart, and Checkout pages. See [Using Gutenberg Blocks](/guide/customization-and-themes/using-gutenberg-blocks).

**6. Confirm Downloadable Files**
Downloadable files stored on your own server are copied into FluentCart's storage during migration. Files hosted remotely (S3, a CDN, another domain) keep their original URL. Open each digital product and confirm the file is linked correctly under **Downloadable Asset(s)**.

::: warning Don't delete your WooCommerce data yet
Even after everything is verified and running, don't rush to remove WooCommerce or its database tables. The Migrator never modifies them — they're your fallback if you ever need to reference an original record. Leave them in place until you're fully confident in the new store.
:::

## Need help?

- Stuck on a specific stage? Check the [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) page.
- Want to know exactly what transfers? See [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).
- Selling subscriptions? Read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) before going live.
- Running on a large store? Switch to the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli).
- Testing on staging and want to reset between runs? Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode).
