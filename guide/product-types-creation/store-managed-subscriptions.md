# Store Billing for Subscriptions

FluentCart can bill your recurring products in two very different ways, and **Store Billing** is the mode where your store keeps control of the billing schedule instead of handing it to the payment gateway. Rather than letting Stripe or PayPal decide when to charge, FluentCart creates a renewal invoice itself and invites the customer to pay, which is ideal for stores using offline payments, bank transfers, or gateways that do not support automatic recurring billing.

This guide explains how store billing works end to end. You will learn how FluentCart decides which billing mode a subscription uses, how a renewal invoice moves from creation to payment to expiry, and what you can do from the admin to keep recurring revenue on track.

## How Subscription Billing Works in FluentCart

Every subscription answers one question: **who owns the billing schedule, the payment gateway or your store?** The answer is set once, at checkout, and it decides everything that happens afterward, from how a renewal arrives to who handles a failed payment.

FluentCart supports three collection methods, grouped under two billing models:

* **Gateway Billing (Automatic):** The payment gateway owns the schedule. It creates its own recurring subscription (for example a Stripe or PayPal subscription) and charges the customer automatically. FluentCart simply mirrors the result when the gateway sends a notification.
* **Store Billing (Manual):** Your store owns the schedule. FluentCart creates a renewal invoice on its own timeline and the customer pays every renewal by hand through a **Pay Now** link.
* **Store Billing with Auto-Charge:** The same store-owned schedule as above, with one addition. FluentCart saves the customer's payment method and attempts to charge it automatically for each renewal, so the customer does not have to pay by hand.

The table below sums up the practical difference between the three.

| | Gateway Billing | Store Billing | Store Billing + Auto-Charge |
|---|---|---|---|
| **Who bills the customer** | The payment gateway | Your store, customer pays by hand | Your store, saved payment method charged automatically |
| **How a renewal arrives** | A notification from the gateway | An invoice FluentCart generates on a schedule | An invoice FluentCart generates, then charges |
| **Renewal email with a Pay Now link** | No | Yes | No (the payment method is charged instead) |
| **Failed-payment handling** | The gateway's retry logic | FluentCart reminders, grace period, expiry | FluentCart retries, then reminders and expiry |
| **You can edit the recurring amount** | No | Yes | Yes |

::: info
Store Billing and Auto-Charge are the same engine. Auto-charge simply adds a saved payment method and an automatic payment attempt on top of the invoicing flow. Everything in this guide about renewals, reminders, grace periods, and expiry applies to both.
:::

## Choosing How Renewals Are Billed

Which model a subscription uses is controlled by a single store-wide setting, **Renewal Billing**, plus the capabilities of the gateway the customer checks out with.

To configure it, navigate to **FluentCart Pro > Settings** in the left sidebar, open **Store Settings**, and select the **Subscriptions** tab. The **Renewal Billing** panel shows your current mode as a badge, a plain-language summary of what it does, the schedule FluentCart uses to create renewal invoices, and a **Change** button.

![Screenshot of the Renewal Billing setting showing Store Billing as the current mode](/images/product-types-creation/store-managed-subscription/store-managed-subscription-1.webp)

Follow these steps to switch to store billing:

1.  Click the **Change** button to open the **Renewal Billing** dialog, then choose one of the two modes:

    * **Gateway Billing** *(Recommended)*: Stripe, PayPal, and other subscription-ready gateways charge customers automatically each cycle.
    * **Store Billing:** Your store creates a renewal invoice before each due date, and customers pay via a link in the email.

    ![Screenshot of the Renewal Billing dialog with Gateway Billing and Store Billing options](/images/product-types-creation/store-managed-subscription/store-managed-subscription-2.webp)

2.  With **Store Billing** selected, an extra option appears inside its card: **Auto-charge saved payment methods**. Leave it unchecked for plain invoicing, where the customer pays each renewal by hand. Check it to have FluentCart charge the customer's saved payment method automatically on each renewal due date wherever the gateway supports it. The dialog notes which gateways qualify, currently **Stripe** and **PayPal**. Expand **When are renewal orders created?** to see the full schedule.

3.  Click **Apply**. The change saves straight away, with no separate save step, and FluentCart confirms with a **Renewal billing updated** message. The panel now shows a **Store Billing** badge and the schedule on which renewal invoices are created.

    ![Screenshot of the setting showing Store Billing as the current mode after applying](/images/product-types-creation/store-managed-subscription/store-managed-subscription-3.webp)

    If you enabled automatic charging, the badge reads **Store Billing · Auto-Charge** instead, and the summary confirms that your store creates renewal invoices and charges saved payment methods automatically.

    ![Screenshot of the setting showing Store Billing Auto-Charge as the current mode](/images/product-types-creation/store-managed-subscription/store-managed-subscription-4.webp)

::: info
**Changing the mode only affects new subscriptions.** The dialog states this directly: existing subscriptions keep their current billing method. Flipping the setting never converts a running subscription from one model to the other, so you can switch safely without disrupting current subscribers.
:::

How the mode combines with the checkout gateway determines the final collection method:

| Mode | Auto-charge | Gateway at checkout | Result |
|---|---|---|---|
| Gateway Billing | (not applicable) | Subscription-ready (Stripe, PayPal, etc.) | Automatic |
| Store Billing | Off | Any gateway | Manual invoice |
| Store Billing | On | Stripe or PayPal | Auto-charge |
| Store Billing | On | Any other gateway | Manual invoice |

## How a Store Billing Subscription Renews

Once a store-billed subscription is active, FluentCart drives the whole renewal cycle on an hourly schedule. You do not have to trigger anything, and the customer is never charged without being asked.

Here is the lifecycle of a single renewal:

1. **The renewal is created ahead of the due date.** FluentCart creates the next renewal invoice a little before it is actually due, so the customer has time to pay. How far ahead depends on the billing interval (see the table below).
2. **The customer receives a renewal email.** The email includes a **Pay Now** link that opens a checkout bound to that specific renewal.
3. **The customer pays with any enabled gateway.** They are not locked to the gateway they originally used. A renewal invoice can be paid with any active payment method in your store.
4. **The next billing date advances.** Once the renewal is paid, FluentCart schedules the following cycle and the subscription stays active.

The window for creating renewals early, and the grace period allowed after the due date, both scale with the billing interval:

| Billing interval | Renewal created before due date | Grace period after due date |
|---|---|---|
| Daily | On the due date | 1 day |
| Weekly | 3 days early | 3 days |
| Monthly | 7 days early | 7 days |
| Quarterly, half-yearly, yearly | 15 days early | 15 days |

FluentCart also protects against duplicates. It will never create a second renewal for a subscription that already has an open one waiting to be paid.

### Renewal Reminders

To reduce missed payments, FluentCart can send reminder emails around each renewal. Reminders are **off by default**, so you enable them when you want them.

When turned on, reminders are anchored to the renewal's due date: one reminder on the due date, followed by overdue reminders at **1, 3, and 7 days** past it. You manage these from **FluentCart Pro > Settings > Email Configuration**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for the full list of subscription emails.

### Grace Period, Past Due, and Expiry

If a renewal goes unpaid, FluentCart escalates it in clear stages rather than cancelling immediately:

* **Past Due:** Once the due date passes with the renewal still unpaid, the subscription moves to a **past due** state. The customer keeps access, and reminders continue to prompt them to pay.
* **Expired:** If the grace period for that interval elapses and the renewal is still unpaid, the subscription moves to **Expired** and the schedule stops.

Because past due and expiry are two separate stages, a customer always gets the full grace window to pay before losing access. To learn how each subscription state is displayed and what it means, see the [Understanding Statuses](/guide/store-management/understanding-statuses) guide.

### Reviving an Expired Subscription with a Late Payment

An expired store-billed subscription is not a dead end. If the customer pays the outstanding renewal after it has expired, FluentCart **revives the subscription** and puts it back on schedule automatically. There is no need to recreate it.

FluentCart is also smart about the next billing date. If the renewal is paid on or before its due date, the schedule is preserved exactly, so billing dates never drift earlier over time. If it is paid late, the next cycle is measured from the payment date instead.

## Store Billing with Auto-Charge

When you enable **Auto-charge saved payment methods** under Store Billing, the panel switches to a **Store Billing · Auto-Charge** badge and FluentCart keeps everything about the invoicing engine but tries to pay each renewal for the customer first.

At checkout, FluentCart saves the customer's payment method with their explicit consent. Then, for every renewal:

* The renewal invoice is created on the same schedule as plain Store Billing, but **no Pay Now email is sent**. The customer is not asked to pay something that is about to be charged for them.
* On the due date, FluentCart attempts to charge the saved payment method automatically.
* If the charge succeeds, the renewal is settled and the subscription continues, exactly as if the customer had paid.
* If the charge is declined, FluentCart automatically retries within the grace period, sends a charge-failed notification, and then falls back to the normal reminder and expiry flow if every attempt fails.

To avoid spamming customers, the charge-failed email defaults to the **first failure only**, so silent automatic retries do not generate an email each time.

::: info
**Auto-charge only applies on gateways that support it, currently Stripe and PayPal.** If a store-billed subscription is later moved onto a gateway that cannot save and charge a payment method (for example, when a customer pays a failed renewal with a different gateway), FluentCart quietly steps the subscription down to plain **Store Billing** and resumes sending the Pay Now email. Under Store Billing, manual invoicing is always the floor. A subscription never falls back to gateway billing.
:::

## Managing Store Billing Subscriptions from the Admin

Store-billed subscriptions give you far more hands-on control than gateway-billed ones, because your store owns the schedule. From a subscription's detail page you can take the following actions. For where these live and how the detail page is organized, see [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

* **Edit Subscription:** Change the recurring amount, billing interval, billing count, next billing date, or status. This is available for store-billed subscriptions, since the gateway is not the source of truth.
* **Skip Next Period:** Push the next billing date forward by one cycle without charging.
* **Pause Subscription** and **Resume Subscription:** Temporarily halt and later restart billing.
* **Charge Now:** For a subscription with automatic charging, immediately attempt to charge an existing open renewal instead of waiting for the scheduled attempt.
* **Create Renewal Now:** Generate the next renewal ahead of schedule and send the Pay Now email. On a subscription with automatic charging this action reads **Charge Next Renewal Now** instead, and it creates the renewal and charges the saved payment method in one step.
* **Reactivate Subscription:** Bring a cancelled, paused, or expired subscription back to life.

Customers can also settle an open renewal themselves at any time using the **Pay Now** link from their emails or the [customer dashboard](/guide/customer-dashboard/subscriptions). Paying early on an automatic-charging subscription simply cancels the queued automatic attempt, so a renewal is never billed twice.

## Gateway Support at a Glance

Not every gateway can play every role. The essentials:

* **Gateway Billing** works with gateways that support native recurring billing, including **Stripe**, **PayPal**, **Paddle**, **Mollie**, **Authorize.net**, **Square**, **Paystack**, **Flutterwave**, and **Razorpay**.
* **Store Billing** works with **any enabled gateway**, including offline methods like Cash on Delivery and bank transfer. Because the customer pays each renewal invoice through a Pay Now link, no special recurring capability is required.
* **Auto-charge** is supported by **Stripe** and **PayPal**, the gateways that can save a payment method and charge it off-session under FluentCart's own schedule. Every other gateway keeps plain invoicing.

For setup details on any individual gateway, see [Payment Settings](/guide/settings-configuration/payment-settings) and the [Connecting Payment Gateways](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) guides.

## A Few Things to Keep in Mind

* **Switching a store-billed subscription onto a gateway's own billing is intentionally not supported.** Doing so would let the gateway bill on its schedule while FluentCart also issues renewals for the same periods, resulting in a double charge. Customers change the **card on file** instead of switching billing models.
* **Renewals are never duplicated.** If an open renewal already exists, FluentCart will not create another one, whether the trigger is the hourly schedule or an admin action.
* **A queued automatic charge blocks expiry.** An automatic-charging subscription can never expire while a charge attempt is still armed, so it will not be cancelled out from under a pending payment.

With Store Billing, your store stays in full control of recurring billing, whether that means inviting customers to pay each renewal by hand or charging their saved payment method automatically on a schedule you own.
