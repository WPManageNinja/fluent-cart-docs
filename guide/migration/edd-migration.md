# Migrating to FluentCart from Easy Digital Downloads

Moving your entire online store to a new platform might sound like a massive, stressful project — but with FluentCart, it doesn't have to be.

We built the **FluentCart Migrator** addon to act as your personal moving team. It automatically and securely transfers all of your hard-earned data — including products, orders, customers, subscriptions, and coupons — from **Easy Digital Downloads (EDD)** directly into your new FluentCart store. No spreadsheets, no manual data entry, and no coding required.

::: tip Your EDD Store Stays Safe
This tool only **copies** your data into FluentCart. Your original Easy Digital Downloads store, all its settings, and every piece of its data remain completely untouched throughout this entire process. You can run both side by side until you're fully ready to switch.
:::

Here is your comprehensive, stress-free guide to completing your migration.

---

## Step 1: Install and Activate the Migrator Tool

Before we can start moving your store's data, we need to install the migration tool. Think of it as a secure, temporary bridge between your existing EDD setup and your brand-new FluentCart store.

1. Log in to your account on the **FluentCart website** and download the **FluentCart Migrator** addon `.zip` file to your computer.
2. Open your **WordPress admin dashboard** and navigate to **Plugins > Add New** (or **Add New Plugin**).
3. Click the **Upload Plugin** button at the top of the screen.
4. Click **Choose File**, select the `.zip` file you just downloaded, then click **Install Now**.
5. Once the installation finishes, click the **Activate Plugin** button.

![Screenshot of the WordPress Upload Plugin screen with the Migrator .zip selected](/images/migration/edd-migration/step-1-install.webp)

---

## Step 2: Access the Migration Dashboard

Now that the bridge is built, let's open the tool and get started.

1. Navigate to your **FluentCart** dashboard in the WordPress left sidebar.
2. Scroll down and click on the newly added **Migrator** option.

This will launch the easy-to-follow **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.

![Screenshot of the FluentCart sidebar with the Migrator option highlighted](/images/migration/edd-migration/step-2-dashboard.webp)

---

## Step 3: Select Your Migration Source

On the first screen of the wizard, FluentCart needs to know where it's pulling your data from.

The Migrator is smart — it automatically scans your website to detect which e-commerce plugins are installed. If you're running Easy Digital Downloads, you will see an **Easy Digital Downloads** card displaying a green **DETECTED** badge.

Click directly on that card to confirm: *"Yes, this is where my data lives."*

![Screenshot of the Migration Source selection screen showing the EDD card with a green DETECTED badge](/images/migration/edd-migration/step-3-select-source.webp)

---

## Step 4: The Safety Check

Before moving a single piece of data, FluentCart runs a quick compatibility check.

In this step, the system verifies that your version of Easy Digital Downloads (for example, **EDD 3.x**) is fully compatible with the migration tool. This ensures everything transfers smoothly, without any formatting errors or data mismatches.

Once you see the **green confirmation box** indicating a successful compatibility check, click **Continue** to proceed.

![Screenshot of the compatibility check screen showing a green success confirmation](/images/migration/edd-migration/step-4-compatibility.webp)

---

## Step 5: The Pre-Flight Summary

This is one of the most reassuring parts of the process. Before the actual transfer begins, FluentCart takes a quick inventory of your existing EDD store and shows you exactly what it found.

You will see clear summary boxes displaying the total count of:

- **Products** — Your digital downloads and other items
- **Orders** — Your complete past purchase history
- **Transactions** — Individual payment records
- **Customers** — All buyer accounts
- **Subscriptions & Licenses** — Active recurring plans and issued software keys

Take a moment to review these numbers. If they look accurate compared to what you know is in your EDD store, you're ready to go. Click **Continue to Configuration** when you're satisfied.

![Screenshot of the Pre-Flight Summary screen showing count boxes for Products, Orders, Transactions, Customers, and Subscriptions](/images/migration/edd-migration/step-5-summary.webp)

---

## Step 6: Configure and Start the Migration

You're at the final setup screen. This step lets you fine-tune how the migration runs behind the scenes before you kick it off.

**Batch Size**
Think of this as how many "boxes" the mover carries in one trip. It controls how many records (orders, products, etc.) the server processes at a time. We strongly recommend leaving this at the **default setting of 100**. If your server is underpowered and the migration stalls, you can lower it to `50` or even `10` to reduce the load per cycle.

**Steps to Run**
You'll see a checklist of data types to include in the migration:
- **Products**
- **Coupons**
- **Payments / Orders**
- **Recount Stats**

Leave **all of these checked**. Unchecking any item means that data won't come over — and you don't want to leave anything important behind.

Take a deep breath, then click the **Start Migration** button.

::: warning Keep This Tab Open
Do **not** close or refresh this browser tab while the migration is running. The progress bar needs an active connection to process your data. Grab a cup of coffee and let FluentCart do the heavy lifting — it'll take care of everything.
:::

![Screenshot of the Configuration screen showing Batch Size, Steps to Run checklist, and the Start Migration button](/images/migration/edd-migration/step-6-configure.webp)

---

## Step 7: Migration Complete — What's Next?

Once the progress bar reaches **100%**, you'll be greeted with a green checkmark and a **Migration Complete** screen. It displays a final breakdown of exactly how many items were successfully copied into FluentCart across every category.

Your data is in — but before you open your new store to the public, take a few minutes to verify everything looks right:

**Verify Your Products**
Navigate to **FluentCart > Products** and click into a handful of items. Confirm that titles, prices, descriptions, and downloadable files all transferred accurately.

**Review Recent Orders**
Spot-check a few of your most recent orders to make sure customer purchase history came through correctly.

**Connect Your Payment Gateways**
Easy Digital Downloads and FluentCart use different payment integrations. Head to **FluentCart > Settings > Payment Settings** to connect your Stripe, PayPal, or other payment accounts so you're ready to accept payments from day one.

::: info
For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section of the documentation.
:::

When you're ready, click the **View FluentCart Dashboard** button at the bottom of the screen to exit the Migrator and start exploring your fully migrated store.

![Screenshot of the Migration Complete screen with a green checkmark and the final item count breakdown](/images/migration/edd-migration/step-7-complete.webp)
