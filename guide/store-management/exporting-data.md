# Exporting Your Store Data

Sooner or later you'll need your store data outside of FluentCart: a spreadsheet for your accountant, a customer list for a mail campaign, or a full backup before a big change. FluentCart's **Data Export** tool lets you pull your orders, customers, subscriptions, and licenses into a CSV or JSON file in just a few clicks, without installing anything extra or waiting for an email to arrive.

Exports run right inside your browser. FluentCart fetches your records in small batches and writes each one into the file as it goes, so even a store with tens of thousands of orders exports smoothly without straining your server.

::: info
Data Export requires **FluentCart Pro**. You'll still see the export dialog on the free version, but it shows an upgrade notice in place of the export options.
:::

## What You Can Export

FluentCart gives you a dedicated export on each of its four main list screens. What comes out depends on where you start:

* **Orders:** Your order records, and optionally the line items, addresses, transactions, tax rows, and metadata attached to them.
* **Customers:** Customer profiles, and optionally their saved addresses and metadata.
* **Subscriptions:** Subscription records, and optionally their parent orders, transactions, licenses, and metadata.
* **Licenses:** License records, and optionally their activations, activated sites, orders, and metadata.

Products are not part of this tool. If you need to move product data in or out, use the [Bulk Product Import](/guide/product-types-creation/bulk-product-import) feature instead.

## Finding the Export Option

Before you export anything, it helps to know where the option lives. There is no standalone Export button on these screens. Every export sits inside the **More actions** dropdown in the top-right corner, and the menu item is named after whatever you're looking at.

From your WordPress dashboard, navigate to **FluentCart Pro** > **Orders**, then click **More actions** and select **Export Orders**.

![Screenshot of the Orders screen with the More actions menu open and Export Orders highlighted](/images/store-management/data-export/01-orders-more-actions.webp)

::: info
If you don't see an export option in the **More actions** menu, your user role probably doesn't have permission to export that record type. See [Controlling Who Can Export](#controlling-who-can-export) further down this page.
:::

## Exporting Your Orders

Selecting **Export Orders** opens the export dialog, where you'll make three quick decisions before the file downloads.

![Screenshot of the Export Orders dialog showing Records to export, File format, and CSV column checkboxes](/images/store-management/data-export/02-export-orders-dialog.webp)

### Step 1: Choose Which Records to Export

The **Records to export** dropdown at the top decides how much of your data goes into the file:

* **Current page:** Only the records currently visible on screen. The count is shown in the option itself, so you always know what you're getting.
* **All items:** Every record of that type in your store. If you have a filter active, this option reads **(filter applied)** so it's clear the export respects it.
* **Selected:** Only the rows you've ticked in the list. This becomes available once you've selected at least one record.
* **Matching the current view:** Everything your active search or filter matches, not just the page you're looking at. This becomes available once a filter is active.

A little preparation here saves a lot of time. Filtering the list *before* you open the dialog gives you a smaller, more useful file and a much quicker export. If you only need last month's paid orders, filter for them first, then export.

### Step 2: Pick a File Format

Next, choose the kind of file you want. Both options are explained right on the cards:

* **CSV file:** Creates one row per record and opens cleanly in Excel, Numbers, and Google Sheets. This is the right choice for spreadsheets, accounting handoffs, and mailing lists.
* **JSON file:** Preserves the underlying data structure, including related records. Choose this for backups, migrations, or when a developer has asked you for the data.

### Step 3: Select Your Columns or Data Modules

What you see in this final section depends on the format you picked.

When **CSV file** is selected, you'll see a list of **CSV columns** with a running count at the top, such as *"17 of 21 selected"*. Tick the columns you want in your spreadsheet and untick the ones you don't. The **Select all** checkbox turns everything on or off at once. FluentCart pre-selects a sensible set, so you can often leave this alone.

Orders offer **21 columns** to choose from:

* **Order details:** Order ID, Invoice number, Order status, Payment status, Shipping status, Order type, Order date, Completed date
* **Money:** Currency, Subtotal, Discount total, Shipping total, Tax total, Total amount, Refund total
* **Everything else:** Items count, Payment method, Customer ID, Customer name, Customer email, Mode

When **JSON file** is selected, the list changes to **data modules** instead. Each module is a related group of records you can include or leave out, and every export has one required root module that's always present:

* **Orders** *(required)*: The core order rows.
* **Customers:** The customer linked to each order.
* **Order items:** The individual line items on each order.
* **Order addresses:** Billing and shipping addresses.
* **Transactions:** Payment and refund records.
* **Tax rates:** Tax rows applied to each order.
* **Order metadata:** Any extra data attached to an order.

### Step 4: Start the Export

Once you're happy with your choices, click **Export file** at the bottom of the dialog. A progress bar appears so you can watch the export run, and you can cancel at any point if you change your mind. When it finishes, the file lands on your computer.

Keep the browser tab open while an export is running. Closing or refreshing it cancels the export, though nothing in your store is affected and you're free to start again.

## Exporting Your Customers

Customer exports work exactly the same way. Navigate to **FluentCart Pro** > **Customers**, click **More actions**, and select **Export Customers**.

![Screenshot of the Customers screen with the More actions menu open and Export Customers highlighted](/images/store-management/data-export/03-customers-more-actions.webp)

The dialog offers **18 columns**, covering who the customer is and what they're worth to your store:

* **Identity:** Customer ID, First name, Last name, Full name, Email, Status
* **Purchase history:** Purchases, Lifetime value, Average order value, First purchase date, Last purchase date, Customer since
* **Location:** Country, State, City, Postcode
* **Linked accounts:** WordPress user ID, Contact ID

![Screenshot of the Export Customers dialog with CSV selected and the customer column checkboxes visible](/images/store-management/data-export/04-export-customers-dialog.webp)

Choosing **JSON file** here gives you three modules: **Customers** *(required)*, **Customer addresses**, and **Customer metadata**.

::: info
Pair this with the [Advanced Customer Filters](/guide/store-management/customers-management/using-advanced-customer-filters) to build a precise segment first, then export only those customers. It's the fastest way to get a targeted list out of FluentCart.
:::

## Exporting Your Subscriptions

For recurring revenue data, navigate to **FluentCart Pro** > **Subscriptions**, click **More actions**, and select **Export Subscriptions**.

![Screenshot of the Subscriptions screen with the More actions menu open and Export Subscriptions highlighted](/images/store-management/data-export/05-subscriptions-more-actions.webp)

Subscriptions carry the most detail of any export, with **27 columns** available:

* **The subscription:** Subscription ID, Status, Item name, Product ID, Variation ID, Quantity
* **The customer:** Customer ID, Customer name, Customer email, Original order ID
* **Billing terms:** Billing interval, Signup fee, Recurring amount, Recurring tax total, Recurring total, Billing cycles, Completed billings, Trial days
* **How it's collected:** Collection method, Payment method, Gateway subscription ID
* **Dates:** Next billing date, Trial end date, Expiration date, Canceled date, Created date, Updated date

![Screenshot of the Export Subscriptions dialog showing the available subscription columns](/images/store-management/data-export/06-export-subscriptions-dialog.webp)

The JSON modules here are **Subscriptions** *(required)*, **Customers**, **Original orders**, **Transactions**, **Subscription metadata**, and **Licenses**.

::: info
**Collection method** is worth including if you're auditing your recurring revenue. It tells you which subscriptions charge a saved card automatically and which ask the customer to pay each invoice. See [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions) for what the difference means.
:::

## Exporting Your Licenses

If you sell licensed software, navigate to **FluentCart Pro** > **Licenses**, click **More actions**, and select **Export Licenses**.

![Screenshot of the Licenses screen with the More actions menu open and Export Licenses highlighted](/images/store-management/data-export/07-licenses-more-actions.webp)

License exports offer **15 columns**:

* **The license:** License ID, License key, Status, Activation limit, Activation count, Expiration date
* **Who it belongs to:** Customer ID, Customer name, Customer email
* **What it came from:** Order ID, Subscription ID, Product ID, Variation ID
* **Dates:** Created date, Updated date

![Screenshot of the Export Licenses dialog showing Records to export, File format, and license columns](/images/store-management/data-export/08-export-licenses-dialog.webp)

The JSON modules are **Licenses** *(required)*, **Customers**, **Orders**, **Subscriptions**, **License activations**, **Activated sites**, and **License metadata**.

::: info
The Licenses screen and its export only appear while FluentCart's licensing module is active. If you don't sell licensed products, you won't see this option at all.
:::

## Understanding Your Exported File

FluentCart puts real care into making these files safe to open and share, and it's worth knowing what that means in practice.

### CSV files

Your CSV arrives ready for a spreadsheet app. Accented characters and non-Latin scripts display correctly, because FluentCart writes the file with the encoding marker spreadsheets look for. Commas, quotes, and line breaks inside your data are escaped properly, so a customer note containing a comma won't shift everything into the wrong column.

There's one protection that matters more than it sounds. Any value starting with `=`, `+`, `-`, or `@` is neutralized before your spreadsheet can treat it as a formula. Without this, a customer name or note beginning with one of those characters would be executed as a formula the moment the file opened.

Amounts are written as normal decimal currency values, so `$103.50` exports as `103.50` and is ready to total up.

### JSON files

JSON keeps the shape of your data intact, with each record carrying its root module and only the related modules you selected.

Sensitive material is deliberately left out. Authentication hashes are never written to the file, and nested credentials such as payment tokens and gateway secrets are replaced with `[REDACTED]`. You can hand a JSON export to a developer without handing over your store's keys.

::: info
An order or customer export is a complete copy of real customer data, including names, email addresses, and billing addresses. Store the file somewhere secure and delete it once you're finished. Your privacy obligations follow the file wherever it goes.
:::

## Exporting Large Amounts of Data

Big exports need no special handling, but a little background helps you plan.

FluentCart requests your records in batches and adjusts the batch size as it goes, based on how quickly your server responds. Each batch is written into the file before the next is requested, which keeps memory use flat whether you're exporting 200 records or 200,000.

Where the file gets written depends on your browser:

* **Chrome, Edge, and other Chromium browsers:** You're asked where to save the file up front, then each batch is written straight to disk. There's no practical size limit.
* **Safari, Firefox, and others:** The file is held in memory until the export finishes, with a limit of **64 MB**. The dialog tells you when you're in this mode.

If you're on Safari or Firefox and expect a very large file, you have two easy options. Either run the export in a Chromium browser, or split the job using filters and export one date range or one order status at a time.

## Controlling Who Can Export

Exporting is governed by its own set of permissions, kept separate from simply viewing records. Someone who can read your customer list cannot necessarily download a copy of it, which is exactly how it should be.

Four permissions control this, one per record type:

* **Export Orders**
* **Export Customers**
* **Export Subscriptions**
* **Export Licenses**

You assign them per role under **FluentCart Pro** > **Settings** > **Roles and Permissions**, just like any other permission. When a role doesn't have the matching one, the export option disappears from that screen's **More actions** menu, and the request is refused even if it's issued some other way. Removing the permission genuinely removes the ability, not just the button.

It's worth being deliberate here. Viewing one customer record at a time and downloading your entire customer database are very different levels of access, even for the same person. Grant export permissions only to the roles that truly need them. For the full walkthrough on building roles, see [Roles and Permissions](/guide/settings-configuration/roles-permissions/).

## Troubleshooting

A few things occasionally trip people up, and each has a simple fix.

* **There's no export option in the More actions menu:** Your role is missing the matching export permission. Check **Roles and Permissions** first, and make sure you're looking inside **More actions** rather than hunting for a separate button.
* **The dialog shows an upgrade notice:** Data Export is a FluentCart Pro feature. The dialog appears on the free version so you can see what it offers.
* **The export stopped partway through:** Closing or refreshing the tab cancels an export in progress. Just start it again. Exports only read your data, so nothing was changed.
* **The file is much bigger than expected:** JSON grows quickly when several modules are selected, since each one adds related rows for every record. Untick the modules you don't need, or switch to CSV.
* **The export failed with a size error:** A single record carrying an unusually large amount of metadata can exceed the response limit. FluentCart reports this rather than quietly cutting your data short. Untick the metadata module and run the export again.

With Data Export set up and the right permissions in place, your store's records are always a couple of clicks away from a spreadsheet, a backup, or your accountant's inbox.
