# Store Billing for Subscriptions

With **Store Billing**, your store owns the renewal schedule instead of the payment gateway. FluentCart creates each renewal invoice itself, then either emails the customer a **Pay Now** link or charges their saved card for them.

That makes recurring products work with any gateway you have enabled, including offline methods like bank transfer and cash on delivery, and it lets you change a subscriber's price, dates, or status whenever you need to.

## Two Ways to Bill a Subscription

Every subscription answers one question: **who owns the billing schedule?** The answer is set at checkout and decides everything that follows.

* **Gateway Billing:** The gateway owns the schedule. It creates its own recurring subscription and charges the customer each cycle. FluentCart mirrors whatever the gateway reports.
* **Store Billing:** Your store owns the schedule. FluentCart creates a renewal invoice and the customer pays it through a **Pay Now** link.
* **Store Billing with Auto-Charge:** The same store-owned schedule, except FluentCart charges the customer's saved payment method instead of asking them to pay.

| | Gateway Billing | Store Billing | Store Billing + Auto-Charge |
|---|---|---|---|
| **Who collects the money** | The gateway | The customer, from card or an emailed link | Your store, from the saved card |
| **Renewal email with Pay Now** | No | Yes | Will inform you about the payment |
| **If a payment fails** | The gateway's retry logic | Reminders, grace period, expiry | Automatic retries, then reminders and expiry |
| **You can change the amount** | No | Yes | Yes |

::: info
Store Billing and Auto-Charge run on the same engine. Auto-charge only adds a saved payment method and an automatic payment attempt, so everything below about renewals, reminders, grace periods, and expiry applies to both.
:::

## Turning On Store Billing

Go to **FluentCart Pro → Settings → Store Settings → Subscriptions**. The **Renewal Billing** panel shows the mode your store is on, when renewal invoices get created, and a **Change** button.

![Screenshot of the Renewal Billing setting showing Store Billing as the current mode](/images/product-types-creation/store-managed-subscription/store-managed-subscription-1.webp)

1.  Click **Change** and pick a mode:

    * **Gateway Billing** *(Recommended)*: Stripe, PayPal, and other subscription-ready gateways charge customers automatically each cycle.
    * **Store Billing:** Your store creates a renewal invoice before each due date, and customers pay through a link in the email.

    ![Screenshot of the Renewal Billing dialog with Gateway Billing and Store Billing options](/images/product-types-creation/store-managed-subscription/store-managed-subscription-2.webp)

2.  Selecting **Store Billing** reveals **Auto-charge saved payment methods**. Leave it off if you want customers to pay each invoice themselves. Turn it on to charge their saved payment method automatically on every due date, which **Stripe** and **PayPal** support. Expand **When are renewal orders created?** to see the schedule.

3.  Click **Apply**. The change saves right away, with no separate save step, and the badge updates to **Store Billing**.

    ![Screenshot of the setting showing Store Billing as the current mode after applying](/images/product-types-creation/store-managed-subscription/store-managed-subscription-3.webp)

    With auto-charge on, the badge reads **Store Billing · Auto-Charge** instead.

    ![Screenshot of the setting showing Store Billing Auto-Charge as the current mode](/images/product-types-creation/store-managed-subscription/store-managed-subscription-4.webp)

::: info
**Only new subscriptions are affected.** Existing subscriptions keep the billing method they started with, so you can switch modes without disrupting current subscribers.
:::

Your mode and the gateway the customer checks out with together decide how renewals actually get paid:

| Renewal Billing mode | Gateway at checkout | How the renewal gets paid |
|---|---|---|
| Gateway Billing | Stripe, PayPal, Paddle, Mollie, Square, and other subscription-ready gateways | The gateway charges the customer |
| Store Billing, auto-charge off | Any enabled gateway, offline methods included | The customer pays each invoice |
| Store Billing, auto-charge on | Stripe or PayPal | Your store charges the saved payment method |
| Store Billing, auto-charge on | Any other gateway | The customer pays each invoice |

## How a Renewal Works

FluentCart checks store-billed subscriptions every hour, so renewals run on their own. You never have to trigger one.

1. **The invoice is created before the due date,** giving the customer time to pay. How early depends on the billing interval.
2. **The customer receives a renewal email** with a **Pay Now** link tied to that invoice.
3. **They pay with any enabled gateway,** not only the one they signed up with.
4. **The next billing date moves forward** and the subscription stays active.

FluentCart never creates a second renewal while an open one is still waiting to be paid.

| Billing interval | Invoice created | Grace period after the due date |
|---|---|---|
| Daily | On the due date | 1 day |
| Weekly | 3 days early | 3 days |
| Monthly | 7 days early | 7 days |
| Quarterly, half-yearly, yearly | 15 days early | 15 days |

### Renewal Reminders

Reminder emails are **off by default**. Turn them on to nudge customers around the due date: one reminder on the due date, then overdue reminders **1, 3, and 7 days** after it.

You manage them from **FluentCart Pro → Settings → Email Configuration**. See [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification) for the full list of subscription emails.

### Past Due and Expiry

An unpaid renewal escalates in two stages instead of cancelling straight away:

* **Past Due:** The due date passes and the invoice is still unpaid. The customer keeps access, and reminders keep prompting them.
* **Expired:** The grace period for that interval runs out and the invoice is still unpaid. The subscription stops.

Because these are separate stages, customers always get the full grace window before they lose access. See [Understanding Statuses](/guide/store-management/understanding-statuses) for what each state means.

### A Late Payment Revives the Subscription

An expired subscription is not a dead end. If the customer pays the outstanding renewal afterward, FluentCart reactivates the subscription and puts it back on schedule. You do not need to recreate anything.

The next billing date is worked out sensibly too. Pay on or before the due date and the original schedule is kept, so billing dates never drift earlier. Pay late and the next cycle is measured from the payment date.

## When Auto-Charge Is On

Auto-charge keeps the whole invoicing flow and simply tries to pay each renewal for the customer first. At checkout, with the customer's consent, FluentCart saves their payment method so it can be reused later. After that, on every renewal:

* The invoice is created on the same schedule as plain Store Billing, but **no Pay Now email goes out**. There is no point asking someone to pay what is about to be charged.
* On the due date, FluentCart charges the saved payment method.
* If it succeeds, the renewal is settled and the subscription continues.
* If it is declined, FluentCart retries automatically within the grace period, sends a charge-failed notification, and falls back to the usual reminders and expiry if every attempt fails.

The charge-failed email defaults to the **first failure only**, so silent retries do not fill the customer's inbox.

You can follow the same story from the admin. The subscription's detail page shows **Automatic charge processing** while the provider confirms an attempt, and **Automatic charge failed** when one is declined, naming the attempt number, the reason, and when the next retry runs. A healthy subscription shows no banner at all.

::: info
**FluentCart never stores your customers' card details.** With the customer's consent, it saves a secure **token** from the payment gateway, such as **Stripe** or **PayPal**, and the gateway is what actually holds the card data. When a renewal is due, FluentCart simply sends that token back to the gateway to charge it. Customers change their card through **Update Payment Method** in their [customer dashboard](/guide/customer-dashboard/subscriptions).
:::

::: info
**Auto-charge needs Stripe or PayPal.** If a subscription moves to a gateway that cannot save and charge a payment method, for example when a customer pays a failed renewal with a different gateway, FluentCart quietly drops it back to plain **Store Billing** and resumes the Pay Now email. Manual invoicing is always the floor, and a subscription never switches to gateway billing on its own.
:::

## Managing Subscriptions from the Admin

Store billing gives you far more control than gateway billing, because your store owns the schedule. Everything happens on the subscription's detail page. For a general tour of that page, see [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

### Opening a Subscription

Go to **FluentCart Pro → Subscriptions** and click the one you want.

You can also open it from the order it came from. Under **FluentCart Pro → Orders**, open the order and click the product link in the **Subscription Plan** card on the right.

![Screenshot of an order detail page with the Subscription Plan card highlighted](/images/product-types-creation/store-managed-subscription/store-managed-subscription-5.webp)

### Reading the Details Panel

A badge beside **Subscription Details** tells you how the subscription is billed:

* **Manual:** Store billing. The customer pays each renewal themselves.
* **System:** Store billing with auto-charge. Your store charges the saved payment method.
* **Automatic:** Gateway billing. The gateway handles everything.

![Screenshot of a store-billed subscription showing the Manual badge and the actions menu](/images/product-types-creation/store-managed-subscription/store-managed-subscription-6.webp)

The fields worth knowing:

* **Billing Cycle:** The recurring terms, such as *$103.50 per year until cancel*.
* **Active Payment Gateway:** The gateway currently tied to the subscription.
* **Initial Purchase ID:** The order that started it.
* **Auto-cancellation:** The payment count after which it stops on its own, or `---` when it renews indefinitely.
* **Next renewal:** The amount due and the date it falls due.
* **Vendor Customer ID:** The customer's ID at the gateway, shown when the gateway stores one. Handy when you need to look them up in Stripe or PayPal.

**Related Orders** below lists the original order and every renewal since, with its payment status and order type. All the actions in this section live in the three-dot menu at the top-right, and the menu changes with the subscription's status.

### Editing a Subscription

Pick **Edit Subscription** to change the recurring terms. You can do this on store-billed subscriptions because your store, not the gateway, is the source of truth. Changes apply to **all future renewals**, not to invoices already generated.

![Screenshot of the Edit Subscription dialog with renewal amount, billing times, interval, status, and next billing date](/images/product-types-creation/store-managed-subscription/store-managed-subscription-7.webp)

* **Next Renewal Amount:** What the customer pays from the next renewal onward. Use it to apply a price change or a negotiated rate.
* **Billing Times:** How many payments the subscription runs for. `0` means unlimited; `1` or more stops it after that many payments.
* **Billing Interval:** How often it renews. Changing it also changes how early invoices are created and how long the grace period lasts.
* **Status:** Choose **Active**, **Paused**, **Trialing**, **Past Due**, **Expired**, or **Completed**.
* **Next Billing Date:** The exact date and time the next renewal falls due. Push it out to give someone extra time, or pull it in to bill sooner.

![Screenshot of the Status dropdown showing Active, Paused, Trialing, Past Due, Expired, and Completed](/images/product-types-creation/store-managed-subscription/store-managed-subscription-8.webp)

Click **Save Changes** to apply.

::: info
Setting the status by hand overrides FluentCart's own lifecycle handling for that subscription. Use it to correct a state you know is wrong, not as a replacement for the normal renewal flow.
:::

### Creating a Renewal Early

**Create Renewal Now** generates the next invoice immediately instead of waiting for the scheduled window. It is handy when a customer asks to pay early or you need to reissue an invoice. FluentCart asks you to confirm first.

![Screenshot of the Create Renewal Now confirmation dialog](/images/product-types-creation/store-managed-subscription/store-managed-subscription-9.webp)

Click **Create Renewal**. The invoice appears at the top of **Related Orders** as **Pending / Renewal**, and the renewal email goes out.

![Screenshot of Related Orders showing a new pending renewal order](/images/product-types-creation/store-managed-subscription/store-managed-subscription-10.webp)

### Charging a Renewal on an Auto-Charge Subscription

An auto-charge subscription uses the same page with a few differences: the badge reads **System**, a **Vendor Customer ID** appears, and the menu offers **Charge Next Renewal Now** in place of **Create Renewal Now**.

![Screenshot of an auto-charge subscription showing the System badge and the actions menu with Charge Next Renewal Now](/images/product-types-creation/store-managed-subscription/store-managed-subscription-13.webp)

That action does both halves of a renewal at once: it creates the invoice and immediately attempts to charge the saved payment method. FluentCart confirms first and notes that one attempt runs right away, with a decline falling back to the automatic retries.

![Screenshot of the Charge Next Renewal Now confirmation dialog](/images/product-types-creation/store-managed-subscription/store-managed-subscription-14.webp)

Click **Create & Charge**. On success the renewal shows as **Paid / Renewal** in **Related Orders**, and **Next renewal** moves forward a full billing cycle.

![Screenshot of Related Orders showing a paid renewal order and the advanced next renewal date](/images/product-types-creation/store-managed-subscription/store-managed-subscription-15.webp)

If the attempt is declined, nothing is lost. The invoice stays open and the normal retry schedule takes over.

### Other Actions in the Menu

* **Pause Subscription:** Halt billing temporarily. The menu then offers **Resume Subscription**.
* **Cancel Subscription:** Stop the subscription and its schedule.
* **Reactivate Subscription:** Bring a cancelled, paused, or expired subscription back. It replaces the pause and cancel actions once a subscription is no longer running.
* **Skip Next Period:** Move the next billing date forward one cycle without charging, giving the customer a free period.
* **Send Renewal Reminder:** Email a reminder about the open renewal by hand. On a subscription still in its trial it reads **Send Trial End Reminder**.
* **Charge Now:** On an auto-charge subscription with an invoice already open, run one more attempt straight away. The confirmation names the card it will use.

## What Your Customers See

When a renewal is created, the customer gets an email with the renewal summary, the amount, the due date, and a **Pay Now** button. It also tells them they can pay early rather than wait for the due date.

![Screenshot of the renewal email showing the renewal summary and the Pay Now button](/images/product-types-creation/store-managed-subscription/store-managed-subscription-11.webp)

They can also handle it from their [customer dashboard](/guide/customer-dashboard/subscriptions) under **Subscription Plans**, which shows the billing terms, the next charge date, the payment method on file, and every related transaction with a downloadable receipt. **Update Payment Method** and **View Order** sit right below the plan details.

![Screenshot of the customer dashboard subscription plan overview](/images/product-types-creation/store-managed-subscription/store-managed-subscription-12.webp)

Paying early on an auto-charge subscription cancels the queued charge, so a renewal is never billed twice.

::: info
**A store-billed subscription cannot be switched to the gateway's own billing.** Both would then bill the same periods and double-charge the customer. Customers update the **card on file** instead.
:::
