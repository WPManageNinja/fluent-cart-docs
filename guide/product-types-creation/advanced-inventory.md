# Advanced Inventory

**Advanced Inventory** is a FluentCart Pro workspace that lets you manage the stock of every product and variation from one central screen. Instead of opening products one by one, you can spot low stock at a glance, update many variations at once, and keep a clear record of every stock change.

If your stock moves often, or more than one person manages it, this is the module to build on top of the basic [Inventory Management](/guide/product-types-creation/inventory-management) fields.

## What Advanced Inventory Adds

* **A central Inventory screen:** Every stock-managed product and its variations in one list.
* **Quick views:** Switch between **All**, **Low Stock**, and **Out of Stock** items.
* **Inline stock edits:** Adjust a single variation's stock without opening the product.
* **Bulk updates:** Increase the stock of many variations, or set them all to an exact number.
* **Adjustment history:** Every change you make on the Inventory screen is logged with who made it, when, the old and new stock, and a reason.
* **Advanced Filter:** Narrow the list by price, stock, variations, taxonomies, and more.

## Enabling Advanced Inventory

Advanced Inventory builds on the core **Stock Management** feature, so you need to turn on both.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click the **Features & addon** tab from the left-hand menu.
3. Turn on the **Stock Management** switch. Its options expand below the description.
4. Tick **Enable Advanced Inventory** inside the **Stock Management** card.
5. Click **Save Settings**.

![Screenshot of the Features & addon settings page with Stock Management turned on and the Enable Advanced Inventory checkbox ticked](/images/product-types-creation/advanced-inventory/enable-advanced-inventory.webp)

**Enable Advanced Inventory** is a FluentCart Pro option. Without Pro, the checkbox is disabled and shows an **Upgrade to Pro** link.

Once both are on, an **Inventory** item appears under **Products**: in the WordPress sidebar as **↳ Inventory** directly below **Products**, and in the FluentCart top menu under the **Products** dropdown.

![Screenshot of the Products menu showing the Inventory link](/images/product-types-creation/advanced-inventory/inventory-menu.webp)

::: info
If Advanced Inventory is switched off, the **Inventory** link is hidden and new stock changes are no longer recorded in the history. Your existing stock levels stay untouched, and you can still manage stock from each product as described in [Inventory Management](/guide/product-types-creation/inventory-management).

If you open the Inventory screen while **Stock Management** is off, FluentCart shows a **Stock Management Inactive** notice with a link to the module settings. Without FluentCart Pro, the screen shows an upgrade notice instead.
:::

## Exploring the Inventory Screen

Navigate to **FluentCart Pro > Products > Inventory** to see every product that has inventory tracking turned on. Variable products are listed with each variation underneath, so you can see exactly which size or color is running low.

### Quick Views

Three tabs sit at the top of the list:

* **All:** Every product that has **Inventory Management** turned on, with its stock-tracked variations. Products without inventory tracking don't appear on this screen.
* **Low Stock:** Products with at least one tracked variation that has between 1 and 10 units available. The threshold of 10 is fixed; there is no setting for it.
* **Out of Stock:** Products with at least one tracked variation that has 0 units available.

The **Low Stock** tab is a handy daily checklist for restocking.

![Screenshot of the Inventory screen with the Low Stock tab selected](/images/product-types-creation/advanced-inventory/low-stock-tab.webp)

When a product has at least one matching variation, the product appears in the tab together with all of its variations, so you can compare them side by side.

![Screenshot of the Inventory screen with the Out of Stock tab selected](/images/product-types-creation/advanced-inventory/out-of-stock-tab.webp)

### Understanding the Columns

Each row is a product or one of its variations:

* **Products:** The product name, or the variation name beneath it.
* **SKU:** The variation's SKU, if you have set one.
* **Total Stock:** All units you hold for the variation. The field is read-only; click the adjuster icon next to it to change stock (see Updating Stock below).
* **Available:** Units that can still be sold. This is the total stock minus the units on hold and delivered.
* **On hold:** Units reserved by orders that are not completed yet.
* **Delivered:** Units already committed to completed orders.
* **History icon:** At the end of each variation row, opens its adjustment history.

### Expanding and Collapsing Products

Variations are shown by default. Click the arrow beside a product to collapse it, or use **Collapse All** at the top right to collapse every product at once (the button then changes to **Expand All**). A collapsed product row shows the combined totals of all its variations.

If a product has many variations, only the first few load at first. Click **Load More** under the list to show the rest.

### Filtering and Searching

Use the search icon to find a product by name, or a variation by its name or SKU. To go further, turn on **Advanced Filter**, click **Add**, and choose a condition from groups such as **Pricing**, **Stock**, **Order Property**, **Variations**, and **Taxonomies**. Click **+ OR** to add an alternative set of conditions, then click **Apply**. You can also click **Save as view** to keep a filter for later.

![Screenshot of the Advanced Filter panel with the Add menu open showing Pricing, Stock, Order Property, Variations, and Taxonomies](/images/product-types-creation/advanced-inventory/advanced-filter.webp)

## Updating Stock

### Updating a Single Variation

Now, let's adjust the stock of one variation directly from the list.

1. Find the variation in the list.
2. Click the adjuster icon on the right side of its **Total Stock** field. A small panel opens.
3. In the panel, enter the change in **Adjust by**, or type the final number in **New Stock**. The two fields stay in sync, so entering `-5` in **Adjust by** on a stock of `10` shows `5` in **New Stock**.
4. Choose a **Reason**.
5. Click **Apply**. The button stays disabled until you pick a reason. The row and its **Available** count update, and an entry is added to the adjustment history.

![Screenshot of the inline stock popup with Adjust by, New Stock, and Reason fields](/images/product-types-creation/advanced-inventory/inline-stock-adjust.webp)

If you choose **Other** as the reason, a text box appears where you must describe what happened. Stock can never go below `0`.

### Updating Multiple Variations

When you need to change many variations at once, such as after receiving a shipment, use the bulk update.

1. Tick the checkboxes beside the variations you want to change. Ticking a product's checkbox selects all of its variations.
2. Click **Update Stocks**, which appears next to **Collapse All** along with the number of selected items.

![Screenshot of the Inventory list with five items selected and the Update Stocks button highlighted](/images/product-types-creation/advanced-inventory/select-variants-update-stocks.webp)

In the **Update Stocks** window, choose how the number should be applied:

* **Increase Stock:** The amount you enter is added to each selected variation's current stock (for example, 10 + 5 = 15).

![Screenshot of the Update Stocks window in Increase Stock mode](/images/product-types-creation/advanced-inventory/bulk-increase-stock.webp)

* **Set Exact Stock:** The number you enter replaces the current stock of every selected variation. A warning reminds you that this replaces current inventory, and the list shows each change as `old → new`.

![Screenshot of the Update Stocks window in Set Exact Stock mode with a preview of old and new stock](/images/product-types-creation/advanced-inventory/bulk-set-exact-stock.webp)

The window lists every variation that will change, so you can review it before saving. Pick a **Reason** (and describe it if you choose **Other**), then click **Update Stocks** to finish. Each variation gets its own entry in the adjustment history.

::: tip
Use **Increase Stock** for routine restocking, and save **Set Exact Stock** for moments when you have a verified physical count.
:::

### Adjustment Reasons

Every stock change needs a reason. You can choose from:

* **Received Stock:** New stock arrived from a supplier or production.
* **Damage/Loss:** Units were damaged, expired, or lost.
* **Return/Refund:** Units came back from a customer.
* **Count Correction:** You are fixing the number after a stock count.
* **Inventory Transfer:** Stock moved between locations.
* **Other:** Anything else. A short description is required.

## Viewing the Adjustment History

To see what happened to a variation's stock, click the history icon at the end of its row.

![Screenshot of the Inventory list with the history icon highlighted on a variation row](/images/product-types-creation/advanced-inventory/history-icon.webp)

A **Stock Adjustment History** panel slides in from the right. Entries are listed newest first, and each one shows:

* The date, time, and the user who made the change.
* The reason as a colored label.
* The **Previous Stock** and **New Stock**.
* The **Change** in units, shown in red for a decrease.
* **Details:** The description you wrote, when the reason was **Other**.

![Screenshot of the Stock Adjustment History panel showing a change from 100 to 10 with the Inventory Transfer reason](/images/product-types-creation/advanced-inventory/stock-adjustment-history.webp)

The panel shows the 100 most recent changes for that variation, and entries cannot be edited or deleted. It is the place to check when numbers don't match what you expected.

::: info
Only changes made on the **Inventory** screen are recorded here. Stock you adjust from a product's edit page, and stock movements caused by orders and refunds, are not added to this history.
:::

## Permissions

Opening the **Inventory** screen and its history needs the **products/view** permission. Changing stock, single or bulk, needs **products/edit**. Roles without **products/view** don't see the **Inventory** menu entry. To adjust who can do what, see [Roles & Permissions](/guide/settings-configuration/roles-permissions/).

## Best Practices

* **Choose the most accurate reason:** A clear reason, or a short description under **Other**, makes the history easy to understand months later.
* **Prefer Increase Stock for routine changes:** It builds on the stock at the moment you save, rather than overwriting it.
* **Check the history before large bulk updates:** Open **Stock Adjustment History** for a few key variations so you know the starting counts if you need to reverse a change.
* **Check Low Stock regularly:** It shows what to reorder before items sell out.
* **Review the history when counts look off:** It shows who changed what and why.

Your store now has a central place to track, update, and audit stock for every product and variation.
