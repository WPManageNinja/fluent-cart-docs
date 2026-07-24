# Manual Subscriptions

FluentCart can bill your recurring products in two very different ways, and **Manual Subscriptions** is the mode where your store keeps control of the billing schedule instead of handing it to the payment gateway. Rather than letting Stripe or PayPal decide when to charge, FluentCart generates each renewal itself and invites the customer to pay, which is ideal for stores using offline payments, bank transfers, or gateways that do not support automatic recurring billing.

This guide explains how manual subscriptions work end to end. You will learn how FluentCart decides which billing mode a subscription uses, how a manual renewal moves from creation to payment to expiry, and what you can do from the admin to keep recurring revenue on track.

## How Subscription Billing Works in FluentCart

Every subscription answers one question: **who owns the billing schedule, the payment gateway or your store?** The answer is set once, at checkout, and it decides everything that happens afterward, from how a renewal arrives to who handles a failed payment.

FluentCart supports three collection methods, grouped under two billing models:

* **Gateway-Managed (Automatic):** The payment gateway owns the schedule. It creates its own recurring subscription (for example a Stripe or PayPal subscription) and charges the customer automatically. FluentCart simply mirrors the result when the gateway sends a notification.
* **Store-Managed (Manual):** Your store owns the schedule. FluentCart creates each renewal on its own timeline and the customer pays every renewal by hand through a **Pay Now** link.
* **Store-Managed with Auto-Charge:** The same store-owned schedule as Manual, with one addition. FluentCart saves the customer's card and attempts to charge it automatically for each renewal, so the customer does not have to pay by hand.

The table below sums up the practical difference between the three.

| | Gateway-Managed | Manual (Store-Managed) | Store-Managed + Auto-Charge |
|---|---|---|---|
| **Who bills the customer** | The payment gateway | Your store, customer pays by hand | Your store, saved card charged automatically |
| **How a renewal arrives** | A notification from the gateway | A renewal FluentCart generates on a schedule | A renewal FluentCart generates, then charges |
| **Renewal email with a Pay Now link** | No | Yes | No (the card is charged instead) |
| **Failed-payment handling** | The gateway's retry logic | FluentCart reminders, grace period, expiry | FluentCart retries, then reminders and expiry |
| **You can edit the recurring amount** | No | Yes | Yes |

::: info
Manual and Auto-Charge are the same engine. Auto-charge simply adds a saved card and an automatic payment attempt on top of the manual renewal flow. Everything in this guide about renewals, reminders, grace periods, and expiry applies to both.
:::

## Choosing Who Manages Subscriptions

Which model a subscription uses is controlled by a single store-wide setting, **Who manages subscriptions?**, plus the capabilities of the gateway the customer checks out with.

To configure it, navigate to **FluentCart Pro > Settings** in the left sidebar, open **Store Settings**, and select the **Subscriptions** tab. The **Who manages subscriptions?** panel shows your current mode and a **Change** button.

![Screenshot of the Who manages subscriptions setting showing Gateway Managed as the current mode](/images/product-types-creation/manual-subscription/manual-subscription-1.webp)

Follow these steps to switch to store-managed billing:

1.  Click the **Change** button. Because this is a store-wide billing decision that affects checkout, renewals, and which payment methods customers can use, FluentCart first shows a confirmation. It reminds you that the change **only affects new subscriptions**. Click **I understand, continue**.

    ![Screenshot of the confirmation dialog explaining the change only affects new subscriptions](/images/product-types-creation/manual-subscription/manual-subscription-2.webp)

2.  Choose how renewals are handled. Select **Store Managed (manual renewals)** to have FluentCart own the schedule and email a renewal order before each due date. The **Gateway Managed** option leaves recurring billing to the payment gateway.

    ![Screenshot of the Who manages subscriptions dialog with Gateway Managed and Store Managed options](/images/product-types-creation/manual-subscription/manual-subscription-3.webp)

3.  When **Store Managed** is selected, an extra option appears: **Automatically charge saved payment methods**. Leave it unchecked for plain manual renewals, where the customer pays each renewal by hand. Check it to have FluentCart save the customer's card and charge it automatically on each due date, which is **currently supported by Stripe** only. The dialog also lists exactly when renewal orders are created ahead of the due date. Click **Apply**.

    ![Screenshot of the dialog with Store Managed selected and the Automatically charge saved payment methods option](/images/product-types-creation/manual-subscription/manual-subscription-4.webp)

4.  Click **Save** on the settings page to apply the change. The panel now reflects your choice. Plain manual renewals show a **Store Managed · Manual Renewals** badge.

    ![Screenshot of the setting showing Store Managed Manual Renewals as the current mode](/images/product-types-creation/manual-subscription/manual-subscription-5.webp)

    If you enabled automatic charging, the panel shows a **Store Managed · Auto-Charge** badge instead, and the description notes that supported gateways charge the saved card while others fall back to pay-now renewal emails.

    ![Screenshot of the setting showing Store Managed Auto-Charge as the current mode](/images/product-types-creation/manual-subscription/manual-subscription-6.webp)

How the mode combines with the checkout gateway determines the final collection method:

| Mode | Automatic charging | Gateway at checkout | Result |
|---|---|---|---|
| Gateway Managed | (ignored) | Supports recurring billing (Stripe, PayPal, etc.) | Automatic |
| Gateway Managed | (ignored) | No recurring support (offline, bank transfer) | Manual |
| Store Managed | Off | Any gateway | Manual |
| Store Managed | On | Stripe | Auto-charge |
| Store Managed | On | Any other gateway | Manual |

::: info
**Changing the mode only affects new subscriptions.** Flipping the setting never converts an existing subscription from one billing model to another. Existing gateway-managed subscriptions keep auto-charging, and existing store-managed ones keep generating renewals, so you can safely switch the store setting without disrupting your current subscribers.
:::

## How a Manual Subscription Renews

Once a manual subscription is active, FluentCart drives the whole renewal cycle on an hourly schedule. You do not have to trigger anything, and the customer is never charged without being asked.

Here is the lifecycle of a single renewal:

1. **The renewal is created ahead of the due date.** FluentCart generates the next renewal order a little before it is actually due, so the customer has time to pay. How far ahead depends on the billing interval (see the table below).
2. **The customer receives a renewal email.** The email includes a **Pay Now** link that opens a checkout bound to that specific renewal.
3. **The customer pays with any enabled gateway.** They are not locked to the gateway they originally used. A manual renewal can be paid with any active payment method in your store.
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

An expired manual subscription is not a dead end. If the customer pays the outstanding renewal after it has expired, FluentCart **revives the subscription** and puts it back on schedule automatically. There is no need to recreate it.

FluentCart is also smart about the next billing date. If the renewal is paid on or before its due date, the schedule is preserved exactly, so billing dates never drift earlier over time. If it is paid late, the next cycle is measured from the payment date instead.

## Store-Managed with Auto-Charge

When you enable **Automatically charge saved payment methods** under Store Managed mode, the panel switches to a **Store Managed · Auto-Charge** badge and FluentCart keeps everything about the manual renewal engine but tries to pay each renewal for the customer first.

At checkout, FluentCart saves the customer's card with their explicit consent. Then, for every renewal:

* The renewal is created on the same schedule as a manual subscription, but **no Pay Now email is sent**. The customer is not asked to pay something that is about to be charged for them.
* On the due date, FluentCart attempts to charge the saved card automatically.
* If the charge succeeds, the renewal is settled and the subscription continues, exactly as if the customer had paid.
* If the charge is declined, FluentCart automatically retries within the grace period, sends a charge-failed notification, and then falls back to the normal reminder and expiry flow if every attempt fails.

To avoid spamming customers, the charge-failed email defaults to the **first failure only**, so silent automatic retries do not generate an email each time.

::: info
**Auto-charge is currently supported by Stripe only.** If a store-managed subscription is later moved onto a gateway that cannot save and charge a card (for example, when a customer pays a failed renewal with a different gateway), FluentCart quietly steps the subscription down to plain **Manual Renewals** and resumes sending the Pay Now email. In store-managed mode, manual invoicing is always the floor. A subscription never falls back to gateway billing.
:::

## Managing Manual Subscriptions from the Admin

Store-managed subscriptions give you far more hands-on control than gateway-managed ones, because your store owns the schedule. From a subscription's detail page you can take the following actions. For where these live and how the detail page is organized, see [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

* **Edit the terms:** Change the recurring amount, interval, billing count, or next billing date. This is available only for store-managed subscriptions, since the gateway is not the source of truth.
* **Skip the next period:** Push the next billing date forward by one cycle without charging.
* **Pause and Resume:** Temporarily halt and later restart billing.
* **Charge Now:** For a subscription with automatic charging, immediately attempt to charge an existing open renewal instead of waiting for the scheduled attempt.
* **Charge Next Renewal Now:** Create the next renewal ahead of schedule. On a manual subscription this generates the renewal and sends the Pay Now email. On an automatic-charging subscription it creates the renewal and charges the saved card in one step.
* **Reactivate:** Bring a cancelled, paused, or expired subscription back to life.

Customers can also settle an open renewal themselves at any time using the **Pay Now** link from their emails or the [customer dashboard](/guide/customer-dashboard/subscriptions). Paying early on an automatic-charging subscription simply cancels the queued automatic attempt, so a renewal is never billed twice.

## Gateway Support at a Glance

Not every gateway can play every role. The essentials:

* **Automatic (Gateway-Managed)** works with gateways that support native recurring billing, including **Stripe**, **PayPal**, **Paddle**, **Mollie**, **Authorize.net**, **Square**, **Paystack**, **Flutterwave**, and **Razorpay**.
* **Manual (Store-Managed)** works with **any enabled gateway**, including offline methods like Cash on Delivery and bank transfer. Because the customer pays each renewal through a Pay Now link, no special recurring capability is required.
* **Automatic Charging** is supported by **Stripe only**, since it is the one gateway that can save a card and charge it off-session under FluentCart's own schedule.

For setup details on any individual gateway, see [Payment Settings](/guide/settings-configuration/payment-settings) and the [Connecting Payment Gateways](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) guides.

## A Few Things to Keep in Mind

* **Switching a store-managed subscription onto a gateway's own billing is intentionally not supported.** Doing so would let the gateway bill on its schedule while FluentCart also issues renewals for the same periods, resulting in a double charge. Customers change the **card on file** instead of switching billing models.
* **Renewals are never duplicated.** If an open renewal already exists, FluentCart will not create another one, whether the trigger is the hourly schedule or an admin action.
* **A queued automatic charge blocks expiry.** An automatic-charging subscription can never expire while a charge attempt is still armed, so it will not be cancelled out from under a pending payment.

With Manual Subscriptions, your store stays in full control of recurring billing, whether that means inviting customers to pay each renewal by hand or charging their saved card automatically on a schedule you own.
