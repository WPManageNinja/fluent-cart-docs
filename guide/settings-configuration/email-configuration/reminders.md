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

### Saving Your Changes

After configuring your reminder preferences, click the **Save** button in the top-right corner to apply your changes.
