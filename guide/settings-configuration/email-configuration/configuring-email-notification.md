# Configuring Email Notifications

The **Notifications** section in FluentCart is where you manage all the automated transactional emails sent to both your customers and store administrators. Keeping everyone informed about order activity is crucial for a professional e-commerce experience and efficient store management.

This guide will walk you through how to enable, disable, and customize these important email notifications.

---

### Accessing the Notifications Screen

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2.  Click on the **Email Configuration** tab.
3.  From the sub-menu, select **Notifications**.

---

### Managing Your Notifications

On the Notifications screen, all available email notifications are organized into three clear sections. For each notification, you can see its **Notification Name**, the intended **Recipient** (Admin or Customer), and a **toggle** to enable or disable it.

---

#### Order Actions

This section contains all email notifications related to standard order activity. There are **8 notifications** available.

![Email Notifications - Order Actions](/images/settings-configuration/email-notifications/notification-1.webp)

* **Send mail to admin after New Order Paid:** Notifies the store admin when a new order has been successfully paid for.
* **Purchase receipt to customer:** Sends a receipt to the customer immediately after their order is placed.
* **Send mail to admin after a refund:** Informs the admin that a full or partial refund has been processed.
* **Send mail to customer after a refund:** Notifies the customer that a refund has been issued for their order.
* **Send mail to customer when shipping status changed to shipped:** Informs the customer that their physical order has been shipped.
* **Send mail to customer when shipping status changed to delivered:** Confirms to the customer that their order has been marked as delivered.
* **Send mail to admin after New Order Placed (Offline Payment):** Notifies the admin when an order is placed using an offline payment method. This notification is **auto-enabled for offline payments**.
* **Order confirmation to customer (Offline Payment):** Sends an order confirmation to the customer when they place an order using an offline payment method. This notification is also **auto-enabled for offline payments**.

---

#### Subscription Actions

This section covers all email notifications related to subscription lifecycle events. There are **4 notifications** available.

![Email Notifications - Subscription Actions and Scheduler](/images/settings-configuration/email-notifications/notification-2.webp)

* **Send mail to customer after a subscription renewed:** Confirms to the customer that their subscription renewal payment was successful.
* **Send mail to admin after a subscription renewed:** Alerts the admin that a subscription renewal payment has been made.
* **Send mail to customer when a subscription is canceled:** Notifies the customer that their subscription has been cancelled and includes the **access end date** so they know exactly when their access ends. This is especially important for stores running courses, memberships, or licensed products where billing and access are tied together.
* **Send mail to admin when a subscription is canceled:** Notifies the admin whenever a customer's subscription is cancelled.

> [!NOTE]
> The cancellation email is sent automatically whenever a subscription moves to a cancelled state. The access end date is pulled from the subscription's paid-through period, so customers can see at a glance whether their access ends immediately or continues through the end of the current billing cycle.

---

#### Scheduler / Reminder Actions

This section handles scheduled and reminder emails. There are **5 notifications** available. These notifications are controlled from the **Reminders** section — you can configure their triggers and schedules directly from [Reminder Settings](/settings-configuration/email-configuration/reminders).

* **Payment reminder to customer:** Reminds the customer about a pending payment. This notification runs **on demand**.
* **Upcoming renewal reminder to customer:** Sent to the customer before their subscription auto-renews.
* **Upcoming renewal reminder copy to admin:** Sends the admin a copy when an upcoming renewal reminder is sent to a customer.
* **Trial ending soon reminder to customer:** Sent to the customer before their trial period ends and converts to a paid subscription.
* **Trial ending soon reminder copy to admin:** Sends the admin a copy when a trial ending reminder is sent to a customer.

---

#### Enabling or Disabling Notifications

To quickly activate or deactivate any notification, simply click the **toggle switch** in the **Enabled** column next to it. The email will only be sent if the toggle is turned on.

---

### Customizing an Email Notification

To customize the content of a specific notification, click the **pencil icon** on the right-hand side of its row. This will open the editor for that particular email template.

![Email Notification Editor](/images/settings-configuration/email-notifications/notification-3.webp)

At the top of the editor, you will find an **Enable this email notification!** toggle. This serves the same purpose as the toggle on the main list — you can activate or deactivate the email directly from within the editor without having to go back.

#### Email Subject

This field controls the subject line of the email. You can personalize it by clicking the **shortcode icon `{;}`** on the right to insert dynamic information, such as the store name, customer's name, or the order ID.

#### Email Body Type

You have two options for the email's main content:

* **Default Body:** This is the standard, pre-written email content provided by FluentCart. It contains all the essential information for that specific notification and is ready to use out of the box.
* **Customized Body:** Select this option to take full control over the email's content. This is perfect for matching the email's design and tone to your brand's voice.

#### Customizing the Email Body

If you select **Customized Body**, a full rich text editor will appear.

* **Content Editor:** Use the editor to write your own text, apply formatting (like bold, italics, and lists), and structure the email exactly as you want it.
* **Shortcodes:** Just like with the subject line, you can use the **shortcode icon `{;}`** above the editor to insert dynamic placeholders for order, customer, and general store details. This allows you to create highly personalized and informative emails.
* **Visual/Code View:** You can switch between the **Visual** editor and the **Code** editor (for HTML) to achieve more advanced customizations.

---

#### Attach PDF Template

At the bottom of the notification editor, you will find the **Attach PDF Template** option. This lets you automatically attach a generated PDF document to the email.

![Attach PDF Template](/images/settings-configuration/email-notifications/notification-4.webp)

Click the dropdown to choose which PDF template to attach. The available options are:

* **Order Receipt** — attaches a receipt for the order.
* **Renewal Receipt** — attaches a receipt for a subscription renewal.
* **Refund Notice** — attaches a refund summary.
* **Invoice** — attaches a standard invoice for the order.

> [!TIP]
> Attaching a PDF invoice or receipt to your order confirmation emails gives customers a professional, printable record of their purchase without any extra steps.

---

Once you are finished editing, click the **Update** button to save your changes. Your customized email will now be sent whenever its corresponding event is triggered.
