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
* **Collection Method:** How payments are processed. Automatic means the payment will be charged to the customer's saved payment method without any action required from them.
* **Bills Count:** The number of successful payments that have been made for this subscription, including the initial purchase.
* **Payment Method:** The payment gateway used for the subscription (e.g., Stripe, PayPal).
* **Order ID:** The ID of the very first order that created this subscription.

### Filtering and Searching Subscriptions

As your subscriber base grows, finding specific subscriptions becomes essential. FluentCart provides powerful filtering tools to help you do just that.

#### Quick Status Filters

At the top of the list, you will find several tabs to quickly view subscriptions by their most common statuses.

* **Common Filters:** All, Active, Trialing, and Pending.
* **More views:** Click this dropdown to reveal additional status filters, including Intended, Expired, and Canceled. This is useful for quickly finding all customers who have churned.

#### Advanced Filter

For even more specific searches, you can use the **Advanced Filter** to build complex queries. Simply click the toggle to open the filter builder. You can add one or more rules to segment your subscriptions based on a wide range of properties, including:

* **Subscription properties** 
* **Billing Property** 
* **Transaction Property**
* **Products**
* **License Property**
* **Labels**

![Managing Subscription Advance Filter](/images/product-types-creation/managing-subscription/managing-subscription-2.webp)

You can combine multiple rules to create highly targeted lists of your subscribers.

### Viewing Individual Subscription Details

To get a complete 360-degree view of a single subscription, simply click on its **ID** or the **customer's name** in the main list. This will take you to the **Subscription Details** page, which provides a wealth of information.

This detailed view is broken down into several key sections:

* **Subscription Details:** This is the core information about the subscription itself, including the product name, billing cycle, start date, and next invoice date. It also includes important reference IDs from the payment gateway (like the subscription ID from Stripe or PayPal), which is crucial for any manual lookups or support requests.
* **Related Orders:** This section provides a complete financial history of the subscription. It lists every order associated with it, from the initial purchase to every successful renewal. You can quickly see the date, total amount, payment status, and type of each order.
* **Customer Information:** This sidebar gives you a quick overview of the customer, including their contact details, their total lifetime value (LTV), and a direct link to their full customer profile.
* **Labels:** Here, you can add internal labels to help you organize and segment your subscribers for your own reference (e.g., "VIP," "Early Adopter"). This is a great way to add internal notes and context to a subscriber's record.

### Subscription Cart Rules

To keep recurring billing predictable, FluentCart enforces two rules at the cart level whenever a customer tries to purchase a subscription:

* **One subscription per cart.** A customer cannot add more than one subscription to the cart at the same time. If they try to add a second subscription, they'll see the message *"Subscription items can't be combined with other products in the cart."*
* **Quantity is always one.** Subscriptions can't be purchased in bulk in a single transaction. Attempting to set quantity above one returns *"You cannot purchase more than one subscription at a time."*
* **No mixing with one-time products.** A subscription can't share a cart with one-time items, and vice versa. The same "Subscription items can't be combined…" message blocks the conflicting addition.

These rules run automatically — there is nothing for you to configure. Customers who need to buy a subscription **and** a one-time product simply place two separate orders.

### Reactivating a Cancelled Subscription

If a customer's subscription has been **cancelled**, **paused**, **expired**, **failing**, or **past due**, you can bring it back to life from the **Subscription Details** page. Look for the **Reactivate** action — when reactivation is available for a subscription, FluentCart shows it inline so you don't have to recreate the subscription from scratch.

Subscriptions that were cancelled because of a refund are **also reactivatable** in v1.3.27 and later. Previously a refund-driven cancellation locked the subscription out of reactivation; now the action is available, and FluentCart correctly recalculates the next billing date based on the most recent successful (non-refunded) charge. If every previous charge has already been fully refunded, the next renewal starts a fresh billing cycle.

When a subscription is reactivated, FluentCart fires the **`SubscriptionReactivated`** event. Integrations like FluentCRM, FluentCommunity, and email automations all listen for this event so the customer's tags, course access, and notifications resume in lockstep.

### Cancellation Notification to the Customer

Whenever a subscription is cancelled — by the customer from their dashboard or by you from the admin — FluentCart automatically sends the customer a cancellation email that includes the **access end date**.

This makes it clear when the customer's access actually ends, instead of leaving them to guess whether cancellation is immediate or runs through the paid period. For stores running memberships, courses, or licensed products, this helps reduce repeat "do I still have access?" support tickets after a cancellation.

You can enable, disable, or customise the body of this email from **FluentCart Pro > Settings > Email Configuration > Notifications**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for details.

![Managing Subscription Detailed View](/images/product-types-creation/managing-subscription/managing-subscription-3.webp)