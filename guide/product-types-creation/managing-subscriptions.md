# Managing Subscriptions

For any business selling recurring products or services, the **Subscriptions** dashboard is the central command center for managing your subscriber base and recurring revenue. This dashboard provides a complete, at-a-glance overview of all your subscriptions, allowing you to track their status, view key billing dates, and access detailed information for each customer.

## Accessing the Subscriptions Dashboard

1.  From your WordPress dashboard, navigate to **FluentCart Pro**.
2.  Click on **Subscriptions** in the top menu bar.

![Managing Subscription](/images/product-types-creation/managing-subscription/managing-subscription-1.webp)

This will take you to the main Subscriptions screen, which lists all of your store's active and past subscriptions.

### Understanding the Subscriptions List

The main dashboard is a powerful table that gives you a complete overview of every subscription in your store. Understanding these columns is key to effective subscription management.

* **ID:** The unique identification number for each subscription.
* **Customer:** The name of the customer who owns the subscription.
* **Product:** The specific subscription product the customer purchased.
* **Status:** The current state of the subscription. This is a critical indicator of its health (e.g., Active, Trialing, Canceled, Expired).
* **Billing:** The price and billing frequency of the subscription (e.g., "$99.00 per year, until cancel").
* **Created At:** The date the subscription was first initiated.
* **Next Billing Date:** The upcoming date when the next automatic renewal payment is scheduled to be processed.
* **Collection Method:** How payments are processed. **Automatic** means the payment gateway charges the customer's saved payment method on its own schedule without any action required from them. **Manual** means your store owns the billing schedule and the customer pays each renewal through a **Pay Now** link. **Auto-charge** means your store owns the schedule and charges the customer's saved payment method on each due date (Store Billing with auto-charge). To learn how store-owned billing works, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).
* **Bills Count:** The number of successful payments that have been made for this subscription, including the initial purchase.
* **Payment Method:** The payment gateway used for the subscription (e.g., Stripe, PayPal).
* **Order ID:** The ID of the very first order that created this subscription.

::: info Trialing after a coupon?
If a customer used a **one-time (non-recurring) coupon** on a subscription, the subscription shows as **Trialing** for its first billing cycle even though the customer has paid. This is how FluentCart applies a one-off discount without changing the recurring price at the gateway. The status becomes **Active** after the first full-price renewal. See [one-time coupons on subscriptions](/guide/marketing-sales-tools/creating-managing-coupons/adding-coupons/#what-happens-with-a-one-time-coupon-on-a-subscription).
:::

### Filtering and Searching Subscriptions

As your subscriber base grows, finding specific subscriptions becomes essential. FluentCart provides powerful filtering tools to help you do just that.

#### Quick Status Filters

At the top of the list, you will find several tabs to quickly view subscriptions by their most common statuses.

* **Common Filters:** All, Active, Trialing, and Pending.
* **More views:** Click this dropdown to reveal additional status filters, including Intended, Expired, and Canceled. This is useful for quickly finding all customers who have churned.

#### Advanced Filter

For even more specific searches, you can use the **Advanced Filter** to build complex queries. Simply click the toggle to open the filter builder. You can add one or more rules to segment your subscriptions based on a wide range of properties, including:

* **Subscription:** Subscription ID, Status, Order Items, Billing Interval, Payment Method, Created At, Next Billing Date, and Bill Count.
* **Transaction Property:** Transaction ID and payment method.
* **Products:** Filter by the products in the subscription.
* **License Property:** License key and License Status. This group appears only when FluentCart Pro is active and **Product Licensing** is enabled.
* **Labels:** Filter by the labels you have added to subscriptions.

<!-- TODO(screenshots): managing-subscription-2.webp is outdated: the filter menu still shows a "Billing Property" group that no longer exists and is missing the "Labels" group. Retake the open Advanced Filter group menu showing Subscription, Transaction Property, Products, License Property, and Labels. Update later. -->
![Managing Subscription Advance Filter](/images/product-types-creation/managing-subscription/managing-subscription-2.webp)

You can combine multiple rules to create highly targeted lists of your subscribers.

### Viewing Individual Subscription Details

To get a complete 360-degree view of a single subscription, simply click on its **ID** or the **customer's name** in the main list. This will take you to the **Subscription Details** page, which provides a wealth of information.

This detailed view is broken down into several key sections:

* **Subscription Details:** This is the core information about the subscription itself, including the product name, billing cycle, start date, and next invoice date. It also includes important reference IDs from the payment gateway (like the subscription ID from Stripe or PayPal), which is crucial for any manual lookups or support requests.
* **Related Orders:** This section provides a complete financial history of the subscription. It lists every order associated with it, from the initial purchase to every successful renewal. You can quickly see the date, total amount, payment status, and type of each order.
* **Customer Information:** This sidebar gives you a quick overview of the customer, including their contact details, their total lifetime value (LTV), and a direct link to their full customer profile.
* **Labels:** Here, you can add internal labels to help you organize and segment your subscribers for your own reference (e.g., "VIP," "Early Adopter"). This is a great way to add internal notes and context to a subscriber's record.
* **Related Licenses:** On licensed products (FluentCart Pro with Product Licensing on), the license keys issued for this subscription.
* **Activity:** A timeline of what happened to the subscription, such as renewals, pauses, skips, and edits.

### Subscription Actions

Every subscription carries a badge next to the **Subscription Details** heading telling you who owns its billing, and the actions available to you depend on that answer. Open the **more options** menu at the top right of the Subscription Details card to see everything you can do.

* **Sync from gateway:** Pulls the latest state straight from the payment gateway, with the gateway's name shown in the menu item. Use this when you suspect FluentCart and the gateway have drifted apart.
* **Edit Subscription:** Opens the subscription's terms for editing. See [Editing Subscription Terms](#editing-subscription-terms) below.
* **Pause Subscription:** Temporarily halts billing while keeping the subscription intact. On a store-billed subscription you can pause only while it is **Active** or **Trialing** and its next billing date is still in the future. A **Past Due** subscription can't be paused, so its open invoice stays payable. On a gateway-billed subscription, the item appears only if that gateway supports pausing.
* **Resume Subscription:** Restarts billing on a paused subscription. A store-billed subscription comes back as **Active** if its next billing date is still ahead, or as **Past Due** if that date has already passed.
* **Reactivate Subscription:** Brings a cancelled, expired, or past due store-billed subscription back to life. It requires FluentCart Pro and isn't shown for gateway-billed subscriptions. Those are reactivated by the customer, who goes through checkout again from their dashboard or the link in the cancellation email.
* **Cancel Subscription:** Ends the subscription. The customer receives a cancellation email that includes their access end date.
* **Send Renewal Reminder:** Emails the customer a reminder about their upcoming renewal. On a subscription that is still in a real free trial, the item reads **Send Trial End Reminder** instead. It only appears when reminders are turned on under [Reminders](/guide/settings-configuration/email-configuration/reminders) and the matching reminder email is enabled.
* **Create Renewal Now:** Generates the next renewal order ahead of schedule and emails it to the customer with a **Pay Now** link. On a subscription that charges saved payment methods automatically, this item instead reads **Charge Next Renewal Now** and creates the renewal *and* charges it in one step.
* **Skip Next Period:** Pushes the next billing date forward by one full cycle without charging the customer. FluentCart records who skipped it and shows "Billing resumes on the date shown" on the subscription.
* **Charge Now:** Immediately attempts to charge an open renewal against the saved payment method, rather than waiting for the scheduled attempt.
* **Edit Vendor IDs:** Corrects the gateway identifiers stored against the subscription. This one is off by default — see below.

#### Editing Vendor IDs

A subscription stores the gateway's own identifiers for itself and for the customer. FluentCart uses them to match renewals, webhooks, and payment methods to the right record.

Occasionally those identifiers need correcting by hand — most often after migrating a store, or when a subscription was rebuilt at the gateway and the stored ID no longer points anywhere. **Edit Vendor IDs** lets an administrator set them directly.

::: danger This is an opt-in repair tool, not a routine action
The menu item is hidden by default and there is no setting for it in the admin. A developer has to switch it on with a code snippet. Even then, it appears only on gateway-billed subscriptions that have a payment method and haven't **Completed**. It stays hidden because a wrong vendor ID silently breaks renewals: FluentCart charges or matches against something that isn't your customer's subscription. Nothing warns you — renewals simply stop working, or attach to the wrong record.

Only use it when you know the correct identifier from the gateway's own dashboard, and verify the subscription's next renewal afterwards.
:::

::: info
Menu items appear only when they apply. A gateway-billed subscription hides the store-owned actions (**Edit Subscription**, **Create Renewal Now**, **Skip Next Period**, **Charge Now**, and **Reactivate Subscription**), because the gateway owns that schedule rather than your store. **Sync from gateway** is shown only on gateway-billed subscriptions. To understand which mode a subscription is in, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).
:::

#### Editing Subscription Terms

Choosing **Edit Subscription** lets you correct the commercial terms of a running subscription without cancelling and recreating it. The dialog shows these fields in order:

* **Next Renewal Amount:** What the customer pays from the next renewal onward. It cannot be negative. If a renewal invoice is already open, it is updated to the new amount.
* **Billing Times:** How many payments the subscription runs for in total. `0` means it renews until cancelled. Otherwise the value can't be lower than the number of payments already made.
* **Billing Interval:** Daily, Weekly, Monthly, Quarterly, Half Yearly, or Yearly.
* **Status:** **Active**, **Paused**, **Trialing**, **Past Due**, **Expired**, or **Completed**. To cancel, use **Cancel Subscription** from the menu instead. Choosing **Paused** for a subscription that can't be paused is refused with *This subscription cannot be paused.*
* **Next Billing Date:** The date and time the next renewal falls due. Moving this date reschedules the whole cycle from that point.

Click **Save Changes**, then confirm with **Yes, Update**.

> **📝 Note:** Editing terms is available for store-billed subscriptions. When the payment gateway owns the billing schedule, the gateway is the source of truth for the amount and dates, so those values are changed on the gateway's side instead. **Edit Subscription** isn't offered once a subscription is **Canceled**, **Expired**, or **Completed**.

### Renewal and Payment History

The **Related Orders** section on the Subscription Details page is the financial record of the subscription. It lists the original purchase alongside every renewal order FluentCart has generated, so you can trace the full billing history in one place.

For each entry you can see the date, the total amount, the payment status, and the order type, which makes it straightforward to spot a renewal that was never paid. When an automatic charge attempt fails or a renewal is waiting on the customer, FluentCart also surfaces an alert at the top of the Subscription Details card explaining the current charge state.

::: info
If your store has **Saved Payment Methods** enabled, the card a customer marks as their default is what renewals draw on. When a renewal keeps failing, the quickest fix is often for the customer to add a fresh card and set it as their default from [Payment Methods](/guide/customer-dashboard/payment-methods) in their dashboard. A card that is actively paying for a subscription cannot be removed until that subscription is moved to another card, so renewals do not break silently.
:::

### Subscription Cart Rules

To keep recurring billing predictable, FluentCart enforces three rules at the cart level whenever a customer tries to purchase a subscription:

* **One subscription per cart.** A customer cannot add more than one subscription to the cart at the same time. If they try to add a second subscription, they'll see the message *"Subscription items can't be combined with other products in the cart."*
* **Quantity is always one.** Subscriptions can't be purchased in bulk in a single transaction. Attempting to set quantity above one returns *"You cannot purchase more than one subscription at a time."*
* **No mixing with one-time products.** A subscription can't share a cart with one-time items, and vice versa. The same "Subscription items can't be combined…" message blocks the conflicting addition.

These rules run automatically — there is nothing for you to configure. Customers who need to buy a subscription **and** a one-time product simply place two separate orders.

### Reactivating a Cancelled Subscription

If a store-billed subscription has been **cancelled**, has **expired**, or is **past due**, you can bring it back from the **Subscription Details** page. Open the **more options** menu and choose **Reactivate Subscription**. A **paused** subscription isn't reactivated; use **Resume Subscription** instead. Gateway-billed subscriptions are reactivated by the customer, who checks out again from their dashboard.

Subscriptions that were cancelled because of a refund are **also reactivatable** in v1.3.27 and later. Previously a refund-driven cancellation locked the subscription out of reactivation; now the action is available, and FluentCart correctly recalculates the next billing date based on the most recent successful (non-refunded) charge. If every previous charge has already been fully refunded, the next renewal starts a fresh billing cycle.

If the subscription is paid through **Stripe**, reactivating is also how a customer corrects a wrong billing address for future invoices. When the reactivation order is paid, FluentCart sends its billing address to the customer's Stripe record, so upcoming Stripe invoices use the new address. Address lines the customer left blank clear the old values. If Stripe cannot update the address, the reactivation still goes through, and ordinary purchases do not change the stored address.

When a subscription is reactivated, FluentCart fires the **`SubscriptionReactivated`** event. Integrations like FluentCRM, FluentCommunity, and email automations all listen for this event so the customer's tags, course access, and notifications resume in lockstep.

### Cancellation Notification to the Customer

Whenever a subscription is cancelled — by the customer from their dashboard or by you from the admin — FluentCart automatically sends the customer a cancellation email that includes the **access end date**.

This makes it clear when the customer's access actually ends, instead of leaving them to guess whether cancellation is immediate or runs through the paid period. For stores running memberships, courses, or licensed products, this helps reduce repeat "do I still have access?" support tickets after a cancellation.

You can enable, disable, or customise the body of this email from **FluentCart Pro > Settings > Email Configuration > Notifications**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for details.

<!-- TODO(screenshots): managing-subscription-3.webp is outdated: it does not show the Related Licenses and Activity cards now documented under Viewing Individual Subscription Details. Retake the Subscription Details page for a licensed subscription (Pro with Product Licensing on), scrolled to include Related Licenses and Activity. Update later. -->
![Managing Subscription Detailed View](/images/product-types-creation/managing-subscription/managing-subscription-3.webp)