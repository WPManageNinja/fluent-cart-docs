# Migrating to FluentCart from Easy Digital Downloads

Moving your entire online store to a new platform might sound like a massive, stressful project — but with FluentCart, it doesn't have to be.

We built the **FluentCart Migrator** addon to act as your personal moving team. It automatically and securely transfers all of your hard-earned data — including products, orders, customers, subscriptions, and coupons — from **Easy Digital Downloads (EDD)** directly into your new FluentCart store. No spreadsheets, no manual data entry, and no coding required.

::: tip Your EDD Store Stays Safe
This tool only **copies** your data into FluentCart. Your original Easy Digital Downloads store, all its settings, and every piece of its data remain completely untouched throughout this entire process. You can run both side by side until you're fully ready to switch.
:::

Here is your comprehensive, stress-free guide to completing your migration.

---

## Before You Begin

Take two minutes to confirm these are in place before you start. Catching a missing piece now will save you from a mid-migration surprise.

- **Easy Digital Downloads 3.x** must be installed and active on your site — the Migrator reads directly from its data
- **FluentCart** must be installed and activated — [Get FluentCart](https://fluentcart.com)
- **FluentCart Pro** is required only if you use **EDD Software Licensing** (license keys, site activations, software updates). If you don't sell licensed software, the free version is enough
- **A database backup** — always take a full backup before any migration. It's your safety net, even though the Migrator never modifies your EDD data
- **WordPress admin access** on the site you're migrating

::: warning Back Up First
Even though the Migrator only reads from EDD and never touches your existing data, take a fresh database backup before you begin. It takes five minutes and gives you complete peace of mind.
:::

---

## What Gets Migrated

Before pressing Start, it's worth knowing exactly what's coming over — and confirming there are no surprises. The Migrator transfers your complete EDD store into FluentCart, preserving everything that matters.

**Products**
Every EDD download product, including titles, descriptions, and settings. Variable pricing options become FluentCart product variations. Bundles carry over with their child product associations. Subscription/recurring products come with their billing intervals (daily, weekly, monthly, quarterly, half-yearly, yearly) and signup fees intact.

**Orders & Payments**
All order records — completed, pending, processing, refunded, partially refunded, and revoked. Each order brings its line items, unit prices, quantities, tax amounts, applied discount codes, billing address, payment transaction details (including Stripe charge IDs and PayPal transaction IDs), refund records, and order notes.

**Subscriptions**
Active, cancelled, expired, completed, failing, and pending subscriptions all come across, including billing intervals, renewal dates, expiration dates, gateway subscription IDs (Stripe and PayPal), signup fees, and the full renewal order history linked to each parent subscription.

**Software Licenses** *(EDD Software Licensing users only)*
All license keys with their statuses (active, inactive, expired, disabled), activation limits, expiration dates, and every activated site URL — exactly as they were in EDD.

**Coupon Codes**
Every discount code, active or expired, with its type (percentage or flat), usage limits, start and expiration dates, product-specific restrictions, minimum purchase requirements, and recurring discount settings.

**Tax Rates**
All EDD tax configurations, including country and state-level rates.

**Customers**
Customer records with names, email addresses, WordPress user associations, and saved addresses. After migration, lifetime value, purchase count, and average order value are recalculated automatically for accuracy.

---

## Step 1: Install and Activate the Migrator Tool

Now that you're ready, let's install the migration tool. Think of it as a secure, temporary bridge between your existing EDD setup and your brand-new FluentCart store.

1. Log in to your account on the **FluentCart website** and download the **FluentCart Migrator** addon `.zip` file to your computer.
2. Open your **WordPress admin dashboard** and navigate to **Plugins > Add New** (or **Add New Plugin**).
3. Click the **Upload Plugin** button at the top of the screen.
4. Click **Choose File**, select the `.zip` file you just downloaded, then click **Install Now**.
5. Once the installation finishes, click the **Activate Plugin** button.



---

## Step 2: Access the Migration Dashboard

Now that the bridge is built, let's open the tool and get started.

1. Navigate to your **FluentCart** dashboard in the WordPress left sidebar.
2. Scroll down and click on the newly added **Migrator** option.

This will launch the easy-to-follow **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.


![Screenshot of the WordPress Upload Plugin screen with the Migrator .zip selected](/guide/public/images/migration/edd-migrator/edd-migrator-1.webp)



---

## Step 3: Select Your Migration Source

On the first screen of the wizard, FluentCart needs to know where it's pulling your data from.

The Migrator is smart — it automatically scans your website to detect which e-commerce plugins are installed. If you're running Easy Digital Downloads, you will see an **Easy Digital Downloads** card displaying a green **DETECTED** badge.

Click directly on that card to confirm: *"Yes, this is where my data lives."*

![Screenshot of the FluentCart sidebar with the Migrator option highlighted](/guide/public/images/migration/edd-migrator/edd-migrator-2.webp)



---

## Step 4: The Safety Check

Before moving a single piece of data, FluentCart runs a quick compatibility check.

In this step, the system verifies that your version of Easy Digital Downloads (for example, **EDD 3.x**) is fully compatible with the migration tool. This ensures everything transfers smoothly, without any formatting errors or data mismatches.

Once you see the **green confirmation box** indicating a successful compatibility check, click **Continue** to proceed.

![Screenshot of the Migration Source selection screen showing the EDD card with a green DETECTED badge](/guide/public/images/migration/edd-migrator/edd-migrator-3.webp)



---

## Step 5: The Pre-Flight Summary

This is one of the most reassuring parts of the process. Before the actual transfer begins, FluentCart takes a quick inventory of your existing EDD store and shows you exactly what it found.

You will see clear summary boxes displaying the total count of:

- **Products** — Your digital downloads and other items
- **Orders** — Your complete past purchase history
- **Transactions** — Individual payment records
- **Customers** — All buyer accounts
- **Subscriptions & Licenses** — Active recurring plans and issued software keys

Take a moment to compare these numbers against what you know is in your EDD store. If they look right, you're ready to go. Click **Continue to Configuration** when you're satisfied.

![Screenshot of the compatibility check screen showing a green success confirmation](/guide/public/images/migration/edd-migrator/edd-migrator-4.webp)



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

::: tip If the Migration Is Interrupted
No need to panic. The Migrator tracks its progress as it goes. If your browser closes, your session times out, or anything else interrupts the process, just return to the **Migrator** screen and start it again. It will automatically skip everything that already completed and pick up exactly where it left off.
:::

![Screenshot of the Pre-Flight Summary screen showing count boxes for Products, Orders, Transactions, Customers, and Subscriptions](/guide/public/images/migration/edd-migrator/edd-migrator-5.webp)


---

## Step 7: Migration Complete — Verify Before You Go Live

Once the progress bar reaches **100%**, you'll be greeted with a green checkmark and a **Migration Complete** screen. It displays a final breakdown of exactly how many items were successfully copied into FluentCart across every category.


![Screenshot of the Configuration screen showing Batch Size, Steps to Run checklist, and the Start Migration button](/guide/public/images/migration/edd-migrator/edd-migrator-6.webp)

Your data is in — but before you open your new store to the public, spend a few minutes verifying everything transferred accurately. You worked hard to build this store; it's worth the extra check.

**Verify Your Products**
Go to **FluentCart > Products**. Confirm the product count looks right, then click into a handful of items and check:
- Product titles and descriptions
- Pricing (single price or variations)
- Subscription billing intervals for recurring products
- Bundle child items

**Review Orders**
Go to **FluentCart > Orders** and open several recent orders. For each one, confirm:
- Order total amounts
- Line items and quantities
- Payment status (paid, refunded, etc.)
- Customer name and email
- Billing address
- Payment gateway and transaction ID

**Check Subscriptions**
Go to **FluentCart > Subscriptions** and spot-check a few. Verify the billing interval, renewal date, subscription start date, and that the status matches what was in EDD — active subscriptions show as active, cancelled ones as cancelled.

**Check Licenses** *(if applicable)*
Go to **FluentCart > Licenses** and confirm license keys transferred with their correct statuses, activation limits, active site URLs, and expiration dates.

**Verify Coupons**
Go to **FluentCart > Coupons** and confirm your discount codes are all present with correct amounts, usage limits, and expiration dates.

**Spot-Check Customer Records**
Go to **FluentCart > Customers**, open a few profiles, and confirm names, emails, and order history look right. Customer lifetime value and purchase counts are recalculated automatically after migration, so those numbers will be accurate.

::: tip Pick a Few Representative Orders to Check Thoroughly
For the best peace of mind, find one example of each scenario in your store and compare it field-by-field between EDD and FluentCart: a simple one-time purchase, a subscription order with renewals, an order with a coupon applied, a refunded order, and a license-based purchase.
:::

![Screenshot of the Migration Complete screen with a green checkmark and the final item count breakdown](/guide/public/images/migration/edd-migrator/edd-migrator-6.webp)

---

## A Few Things Still Need Your Attention

The Migrator handles your data automatically, but a small number of items need a quick manual setup before you're fully live. These are straightforward — none of them require technical expertise.

**1. Reconnect Your Payment Gateways**
The migration transfers all your transaction records, but gateway API credentials can't be migrated for security reasons — you need to connect them fresh in FluentCart. Go to **FluentCart > Settings > Payment Gateways** and add your Stripe API keys and PayPal credentials.

> **💡 Important:** Use the exact same Stripe and PayPal accounts you used with EDD. This ensures active subscriptions continue renewing correctly and all future webhooks route to the right place.

::: info
For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section of the documentation.
:::

**2. Attach Your Download Files to Products**
The migration creates all your product records in FluentCart, but the actual downloadable files need to be confirmed and attached inside each product. Go to **FluentCart > Products**, open each digital product, and verify the correct file is linked in the **Downloadable Asset(s)** section.

**3. Review Your Email Notifications**
FluentCart has its own email system with beautifully designed templates. Take a few minutes to review and customise your purchase receipt, subscription renewal, license expiration, and refund notification templates under **FluentCart > Settings > Email Configuration** to make sure they match your brand before customers start receiving them.

**4. Update Your Store's Purchase Buttons and Links**
If you're using EDD shortcodes or custom purchase buttons anywhere on your site (product pages, landing pages, blog posts), you'll need to replace them with FluentCart's purchase buttons or checkout blocks. Also update any menu links pointing to your EDD account or purchase history pages.

**5. Review Your Tax Settings**
Your EDD tax rates transfer over automatically, but take a moment to verify the tax calculation mode in **FluentCart > Settings** matches how you were running taxes in EDD.

---

## Keep the Migrator Plugin Active

This is an important one — **do not deactivate the FluentCart Migrator plugin** after your migration is complete, at least during your transition period.

The Migrator provides a silent backward compatibility layer that keeps several things working seamlessly for your existing customers:

- **EDD Software Licensing API calls** — If your customers' software or plugins make API calls to your site to verify licenses or check for updates, those calls use EDD's URL format. The Migrator intercepts them and routes them through FluentCart automatically. Your customers' software keeps working without any change on their end.
- **PayPal Standard subscriptions** — If you have active recurring PayPal Standard subscriptions, PayPal sends renewal notifications to EDD's old payment endpoint. The Migrator catches these and processes renewals correctly through FluentCart.
- **Legacy EDD renewal URLs** — Any old renewal links customers may have bookmarked or received by email are automatically redirected to the correct FluentCart page.

Once you've confirmed that all existing customers, subscriptions, and licenses are running smoothly through FluentCart, you can safely deactivate Easy Digital Downloads and its add-ons. The Migrator itself should stay active.

::: warning Don't Delete Your EDD Data Yet
Even after everything is verified and running, don't delete your EDD database tables in a rush. The Migrator never modifies them — they're just sitting there, taking up very little space, and they're your ultimate fallback if you ever need to reference original records. Leave them until you're fully confident.
:::

---

## Frequently Asked Questions

**Will my existing customers need to do anything?**
No, nothing at all. Their accounts, order history, subscriptions, and licenses all move over. They can log in with their existing WordPress credentials and find everything exactly where they expect it — now just inside FluentCart.

**Will active subscriptions keep renewing automatically?**
Yes. Subscription records migrate with their gateway subscription IDs (Stripe and PayPal). As long as you connect the same gateway accounts in FluentCart, renewals will continue processing without interruption. For PayPal Standard subscriptions specifically, the Migrator's built-in compatibility layer handles renewal payments automatically.

**Will my customers' software licenses keep working?**
Yes. The Migrator intercepts all EDD licensing API calls — license checks, activations, deactivations, and auto-update requests — and routes them through FluentCart. Your customers don't need to update their software or do anything at all.

**Does this migration modify or delete my EDD data?**
Never. The Migrator only reads from EDD's database tables. Your original data is never modified, moved, or deleted. You can verify the entire migration against your EDD store before you switch anything over.

**What if the migration is interrupted halfway through?**
Just start it again. The Migrator tracks its own progress, skips any steps that already completed, and resumes order migration from the exact batch where it stopped. You won't end up with duplicate data.

**How long does the migration take?**
It depends on your store's size. Smaller stores with a few hundred orders finish in a couple of minutes. Larger stores with tens of thousands of orders may take 15–45 minutes. The progress bar keeps you updated throughout the entire process.

---

## Your Migration Checklist

Use this as your final go-live checklist before you open the doors on your FluentCart store:

- [ ] Database backup taken
- [ ] FluentCart (and FluentCart Pro if using licensing) installed and active
- [ ] FluentCart Migrator plugin installed and active
- [ ] Migration wizard completed — all items checked
- [ ] Products verified — titles, prices, variations, bundles, subscription intervals
- [ ] Orders spot-checked — amounts, line items, statuses, transaction IDs
- [ ] Subscriptions verified — statuses, billing intervals, renewal dates
- [ ] Licenses verified *(if applicable)* — keys, activation limits, site URLs
- [ ] Coupons verified — discount types, limits, expiration dates
- [ ] Customers spot-checked — names, emails, order history
- [ ] Payment gateways reconnected with the same Stripe/PayPal accounts
- [ ] Downloadable files confirmed and attached to products
- [ ] Email notification templates reviewed and customised
- [ ] Purchase buttons and checkout links updated across the site
- [ ] Easy Digital Downloads deactivated *(Migrator plugin stays active)*
- [ ] You're live on FluentCart! 🎉
