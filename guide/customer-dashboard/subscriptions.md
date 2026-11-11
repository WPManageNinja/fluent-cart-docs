# Subscriptions

The **Subscription Plans** tab in your account dashboard is your central hub for viewing and managing all of your active and past recurring subscriptions. This is where you can track renewal dates, update your payment information, and access the complete history of your subscription payments.

### Viewing All Your Subscriptions

The main Subscription Plans page displays a clear, organized list of all your subscriptions.

For each subscription, you can quickly see:

* **Item:** The name of the product and its specific plan.
* **Status:** The current status of the subscription (e.g., Active) and its next renewal date.
* **Plan:** The recurring cost and billing frequency (e.g., "$79.00 per year, until cancel.").
* **Payment Method:** The saved payment method used for automatic renewals (e.g., the last four digits of a credit card).

![Screenshot of Subscription](/images/customer-dashboard/subscriptions/subscriptions-1.webp)


### Managing an Individual Subscription

To see the complete details for a specific plan, simply click on it in the list. This will take you to its detailed overview page.

This screen gives you a comprehensive look at every aspect of your subscription and provides several key actions.

#### Subscription Plan Details

This section provides a summary of the core details of your subscription.

* **Product and Plan Name:** The name of the product and the specific plan you are subscribed to.
* **Billing Terms:** The recurring cost and billing frequency.
* **Next Charge:** The date your next automatic renewal payment is scheduled.
* **Payment Method:** The current payment method on file for renewals.

#### Key Actions & Early Payments

Below the details, you will find several important links:

* **Pay Remaining Installments:** This feature is perfect for those who want to get ahead. Clicking this allows you to settle your remaining balance early, clearing your future obligations in one go.

>[!Note]
>**Pay Remaining Installments** appears for installment plans that still have payments left and are **Active** or **Trialing**, when the store has FluentCart Pro with early payment for installments enabled.

* **Update Payment Method:** Use this to securely swap out the credit card or account used for your renewals. For gateways like Stripe and PayPal, you can enter the new details right in the dashboard. For Paddle and other gateways that manage cards on their own site, a short notice tells you that you will be redirected to complete the update: click **Continue** and the gateway's secure card-update page opens in a new tab, where you can finish the change.

::: info
The **Update Payment Method** link depends on your plan, its billing, and the gateway, so you may not see it on every subscription.

* It is not offered on subscriptions that are **Canceled**, **Expired**, or **Completed**.
* With **PayPal**, an update creates a new PayPal subscription, so it is offered only while you still have paid days left in the current billing period. It is also not offered on a PayPal subscription that the store bills itself.
* Subscriptions billed by invoice, with no saved payment method to replace, don't show it. You pay each renewal from your renewal email instead.
:::
* **View Order:** This takes you directly to the original transaction in your **Purchase History**.
* **Connected License:** If your subscription includes software or access keys, you can view and copy your active license key right here.

::: info
Some subscriptions are billed manually by the store rather than charged automatically by the gateway. If yours is, you pay each renewal yourself using the **Pay Now** link sent with your renewal email, and you can use any available payment method. To understand how store billing works, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).
:::

#### Subscription Options

Depending on your plan and its status, you may also see these actions:

* **Upgrade Plan:** Appears when the store offers an upgrade path for your plan.
* **Renew Subscription Plan** or **Reactivate Subscription Plan:** If the subscription has expired or stopped, this button lets you restart it.
* **Subscription options:** This menu offers **Pause Subscription**, **Resume Subscription**, and **Cancel Subscription** when they apply.
    * **Pause:** Store-billed plans can be paused only while they are **Active** or **Trialing** with nothing overdue. Gateway-billed plans can be paused only when the payment gateway supports pausing.
    * **Cancel:** Not offered on installment plans. Cancelling asks you to confirm, and your access stays active until the current billing cycle ends.

#### Related Transactions

At the bottom of the page, you'll find a complete financial audit trail for your subscription. This table lists every transaction from your very first purchase to the most recent renewal. You can track the Date, Amount, and Status of each payment, and even download a **Receipt** for your records whenever you need one.

### What Happens When a Subscription Is Cancelled

When a subscription is cancelled, the customer automatically receives a cancellation email that includes the **access end date** — the exact date their access will end. This removes the guesswork around whether cancellation is immediate or continues through the paid period and gives the customer a clear timeline.

For stores running courses, memberships, or licensed products, this means buyers always know how much time is left on their plan after cancellation, without needing to contact support.


![Screenshot of Subscription](/images/customer-dashboard/subscriptions/subscriptions-2.webp)
