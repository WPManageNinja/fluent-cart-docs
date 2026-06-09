# Store Digest

The **Store Digest** is a system email that summarises your store's activity and delivers it straight to your inbox on a schedule you choose. It gives you a quick performance snapshot without opening the dashboard, and the numbers in every digest match what you see in the [Reports dashboard](/guide/reporting-analytics/reports-dashboard-overview).

You can send a **Daily**, **Weekly**, or **Monthly** digest (or any combination), each on its own schedule and to the recipients you set.

### Accessing Store Digest

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Email Configuration** tab.
3. From the sub-menu, select **Store Digest**.

![Screenshot of the Store Digest Emails settings screen with the Recipients & General, Daily, Weekly, and Monthly digest sections](/images/settings-configuration/email-notifications/store-digest/store-digest-1.webp)

### Recipients & General

This top section controls who receives the digests and how quiet periods are handled.

* **Recipient email addresses:** The address (or addresses) every digest is sent to. Separate multiple addresses with commas. The default value <code v-pre>{{wp.admin_email}}</code> automatically resolves to your site's admin email, so digests work without any extra setup.
* **Empty periods (Send even when there was no activity):** Decides what happens when a period had no paid orders. When **off** (the default), the digest for that period is skipped, so you are not emailed about quiet stretches. When **on**, the digest is still sent and shows a short quiet-period note instead of metrics.

### Digest Schedules

Each digest covers a different time window and has its own **Enable** toggle, **Send time**, and **Send test email** button. By default, the **Weekly** digest is enabled, while **Daily** and **Monthly** are turned off.

#### Daily digest

Covers **yesterday's** performance and is sent every morning.

* **Enable:** Turn the daily digest on or off.
* **Send time:** The hour the digest is sent. The default is **08:00**.

#### Weekly digest

Covers the **previous 7 days** and is sent on the day you choose.

* **Enable:** Turn the weekly digest on or off (on by default).
* **Send time:** The hour the digest is sent. The default is **08:00**.
* **Day of week:** The day the weekly digest goes out. The default is **Monday**.

#### Monthly digest

Covers the **previous calendar month** and is always sent on the **1st**.

* **Enable:** Turn the monthly digest on or off.
* **Send time:** The hour the digest is sent on the 1st of each month. The default is **08:00**.

::: info
All send times use your **store timezone**, not the server time. Test emails are sent to your saved recipient addresses.
:::

### What's Inside a Digest Email

Every digest opens with your store name, the digest type, and the date range it covers. The body reports the same figures as your Reports dashboard for that period:

* **Headline metrics:** Gross Sales, Net Revenue, Orders, Items Sold, and Refunds, each with the change compared to the previous period.
* **Order breakdown:** One-time orders, new subscriptions, and renewals, with their counts and revenue.
* **Top products:** Your best-selling products for the period by units sold.
* **View full reports:** A button that opens the full [Reports dashboard](/guide/reporting-analytics/reports-dashboard-overview) inside your store.

If a period had no paid orders and you have **Empty periods** turned on, the digest shows a quiet-period message ("A quiet period, no orders to report.") in place of the metrics.

![Screenshot of an example weekly Store Digest email showing the date range, a quiet-period notice, and the View full reports button](/images/settings-configuration/email-notifications/store-digest/store-digest-2.webp)

### Sending a Test Email

Each digest has its own **Send test email** button. Use it to preview exactly what a recipient will receive before relying on the schedule. Test emails go to your saved recipient addresses and are always sent, even for a period with no activity, so you can confirm delivery at any time.

### Saving Your Changes

After adjusting recipients, schedules, or send times, click the **Save** button in the top-right corner to apply your changes.
