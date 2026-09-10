# Reminders

The **Reminders** section in FluentCart lets you control the automated reminder emails that are sent to customers before key subscription events such as an upcoming renewal or the end of a trial period. This helps reduce unexpected charges and keeps your customers informed ahead of time.

### Accessing Reminders

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Email Configuration** tab.
3. From the sub-menu, select **Reminders**.

### Enabling Reminder Emails

The first thing you will see on this page is the **Reminder Emails** toggle. By default, it is turned off.

![Reminders - Disabled State](/images/settings-configuration/email-notifications/reminders/reminders-1.webp)

Click the toggle to enable it. Once turned on, the full reminder configuration options will appear on the page.

> [!IMPORTANT]
> Enabling this toggle alone is not enough. For reminder emails to actually be delivered, the individual reminder notifications must also be enabled in **Email Notification Settings** under the **Scheduler / Reminder Actions** section.

### Configuring Subscription Reminders

Once Reminder Emails are enabled, you will see the **Subscription Reminders** section with two configurable reminder types.

![Reminders - Enabled with Configuration](/images/settings-configuration/email-notifications/reminders/reminders-2.webp)

#### Trial Ending

This reminder notifies customers before their trial period ends and billing begins.

* **Enable:** Check this box to activate the trial-ending reminder.
* **Days before trial ends:** Set how many days in advance the reminder is sent. The accepted range is **Min: 1, Max: 14**. The default is **3 days**.

#### Renewal Reminders

This reminder notifies customers before an upcoming subscription renewal charge.

* **Yearly *(Recommended)*:** Check to send a renewal reminder for yearly subscriptions. You can set the number of days before the billing date. The accepted range is **Min: 7, Max: 90**. The default is **30 days**.
* **Half Yearly:** Check to send a renewal reminder for half-yearly subscriptions.
* **Quarterly:** Check to send a renewal reminder for quarterly subscriptions.
* **Monthly:** Check to send a renewal reminder for monthly subscriptions.

You can enable reminders for one or more billing frequencies at the same time, each with its own lead time.

Reminders are especially useful for store-billed subscriptions, where the customer pays each renewal by hand rather than being charged automatically. To learn how those renewals are generated and billed, see [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).

### Configuring Invoice Reminders

The reminders above all fire *before* a renewal. The **Invoice Reminders** section handles what happens after one comes due and the customer still has not paid.

* **Enable:** Check this box to chase unpaid renewal invoices. It is on by default.
* **Days after due date:** A comma-separated list of days to send on, counted from the due date. The default is **1,3,7**, which sends one reminder the day after the invoice was due, another two days later, and a last one a week after the due date.

You can shorten, lengthen, or thin out that schedule freely. `1,3,5,10` gives you four nudges, and a single `3` gives you exactly one.

#### How the Three Stages Escalate

FluentCart does not send the same email three times. It reads your day list and maps each entry to one of three emails, so the tone rises the longer an invoice goes unpaid:

* **First overdue renewal reminder to customer:** Sent on the earliest day in your list. A gentle nudge.
* **Follow-up overdue renewal reminder to customer:** Sent on every day in between. A firmer reminder that the payment is still outstanding.
* **Final overdue renewal notice to customer:** Sent on the last day in your list. The closing warning before the subscription runs out of grace.

Because the mapping follows your list rather than fixed dates, a schedule of `2,14` sends only the first and final emails, while a single-day schedule sends the first one alone.

Each stage sends once per billing cycle, so a customer never receives the same reminder twice for the same invoice. Payment at any point stops the rest of the sequence.

> [!IMPORTANT]
> All three emails live in **Email Notification Settings** under **Scheduler / Reminder Actions**, where you can edit their subject lines and bodies or switch any stage off. Turning off the middle stage, for example, leaves you with a first reminder and a final notice and nothing in between.

### Saving Your Changes

After configuring your reminder preferences, click the **Save** button in the top-right corner to apply your changes.
