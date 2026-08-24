# Migration

The **FluentCart Migrator** moves your existing store data — products, orders, customers, subscriptions, licenses, and more straight into FluentCart, so you can launch with your full store history intact instead of rebuilding it by hand.

## What the FluentCart Migrator Does

The Migrator reads your data from a supported source platform and recreates it inside FluentCart in a single coordinated pass. Depending on the platform you're migrating from, this can include:

* **Products** including categories, attributes, and variations.
* **Customers** with their full purchase history preserved.
* **Orders** across every meaningful status.
* **Subscriptions** recurring billing records, kept active where supported.
* **Licenses** software licenses and their site activations.
* **Coupons and tax configuration.**

Your source store is only ever **read**, never modified, so it keeps running untouched while you migrate — you can run both stores side by side until you're ready to switch over.

## Activating the Migrator Addon

The Migrator ships as an addon, so you need to turn it on before it appears in your dashboard.

1. In your WordPress admin, go to **FluentCart → Settings → Features & addon**.
2. Scroll to the **Plugin Addons** list and find **FluentCart Migrator**.
3. Click **Install & Activate**.

![Screenshot of the Features & addon settings page with the FluentCart Migrator addon and its Install & Activate button highlighted](/images/migration/overview/activate-migrator-addon.webp)

## Finding the Migration Menu

Once the addon is active, a new **Migration** menu appears under the **FluentCart** section in your WordPress sidebar. Open it any time to start, resume, or review a migration.

## What's Inside the Migration Screen

The Migration screen opens with a **Select Migration Source** panel listing every platform the Migrator supports. FluentCart automatically scans your site and marks a platform **Detected** when it finds an active installation it can read from.

![Screenshot of the Select Migration Source screen showing Easy Digital Downloads and WooCommerce marked as Detected, with SureCart listed as Coming Soon](/images/migration/overview/select-migration-source.webp)

You'll pick your source platform here, and the Migrator carries you into a guided wizard from that point on.

::: info SureCart migration is coming soon
Currently, the Migrator supports moving your store from **Easy Digital Downloads** and **WooCommerce**. **SureCart** is listed on the screen too, but it's marked **Coming Soon** — support for it is on the way, so keep an eye on the [changelog](/guide/changelog) for updates.
:::

## Before You Start: Install and Activate the Source Platform

The Migrator needs a live copy of your old store to read from, so the source plugin — **Easy Digital Downloads** or **WooCommerce** — must be installed and active on the same site as FluentCart before you begin. If it isn't detected, install and activate it first, then return to the Migration screen.

## Continue With Your Platform's Migration Guide

Once your source platform is detected, head to the dedicated guide for a full walkthrough — the admin wizard, WP-CLI reference, what does and doesn't transfer, and troubleshooting:

* **[Migrating from Easy Digital Downloads](/guide/migration/edd/):** Move products, customers, orders, subscriptions, and software licenses from an EDD 3.x store into FluentCart.
* **[Migrating from WooCommerce](/guide/migration/woocommerce/):** Move your product catalog, customers, orders, WooCommerce Subscriptions records, coupons, and tax configuration from a WooCommerce store into FluentCart.

By mastering the tools within Migration, you can bring your entire store history into FluentCart with full data fidelity, verify the results on staging, and cut over to production with confidence.
