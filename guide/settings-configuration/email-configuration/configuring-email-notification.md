# Configuring Email Notifications

The **Notifications** section in FluentCart is where you manage all the automated transactional emails sent to both your customers and store administrators. Keeping everyone informed about order activity is crucial for a professional e-commerce experience and efficient store management.

This guide will walk you through how to enable, disable, and customize these important email notifications.

---

### Accessing the Notifications Screen

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2.  Click on the **Email Configuration** tab.
3.  From the sub-menu, select **Notifications**.

### Managing Your Notifications

On this screen, you will see a list of all available email notifications. For each one, you can see its **Notification Name**, the intended **Recipient** (Admin or Customer), and a **toggle** to enable or disable it.

#### Available Notifications:

The notifications are grouped below by what they cover.

**Orders and refunds**

* **Send mail to admin after New Order Paid:** Notifies the store admin when a new order has been successfully paid for.
* **Purchase receipt to customer:** Sends a receipt to the customer immediately after their order is placed.
* **Send mail to admin after New Order Placed (Offline Payment):** Alerts the admin when an order arrives through an offline payment method.
* **Order confirmation to customer (Offline Payment):** Confirms an offline-payment order to the customer.
* **Send mail to admin after a refund:** Informs the admin that a full or partial refund has been processed.
* **Send mail to customer after a refund:** Notifies the customer that a refund has been issued for their order.

**Shipping**

* **Send mail to customer when shipping status changed to shipped:** Informs the customer that their physical order has been shipped.
* **Send mail to customer when shipping status changed to delivered:** Confirms to the customer that their order has been marked as delivered.

**Subscription renewals**

* **Send mail to customer after a subscription renewed:** Confirms to the customer that their subscription renewal payment was successful.
* **Send mail to admin after a subscription renewed:** Alerts the admin that a subscription renewal payment has been made.
* **Send the renewal order to the customer when a renewal order is created:** Delivers the renewal order to the customer when FluentCart generates one for a store-managed subscription. This is the email carrying the **Pay Now** link.
* **Notify admin when a renewal order is created:** The admin-side copy of the same event.

**Automatic renewal charges**

These apply when your store charges saved payment methods automatically. See [Store Managed Subscriptions](/guide/product-types-creation/store-managed-subscriptions) for how that mode works.

* **Notify customer before an automatic renewal charge:** Tells the customer the amount and date of the upcoming automatic charge to their saved payment method, sent when the renewal order is created ahead of the due date.
* **Notify customer when an automatic renewal charge fails:** Sent when the saved payment method could not be charged. It includes the failure reason and a **Pay Now** link so the customer can settle it manually.
* **Notify admin when an automatic renewal charge fails:** The admin-side copy of the failed charge notice.

**Reminders and overdue notices**

* **Renewal due reminder to customer:** Sent before or on the renewal due date while payment is still pending.
* **Renewal due reminder copy to admin:** The admin-side copy of the due reminder.
* **Payment reminder to customer:** A general reminder about a pending payment.
* **Upcoming renewal reminder to customer:** Sent ahead of a subscription's auto-renewal date.
* **Upcoming renewal reminder copy to admin:** The admin-side copy of the upcoming renewal reminder.
* **Trial ending soon reminder to customer:** Sent before a trial period ends and converts to a paid subscription.
* **Trial ending soon reminder copy to admin:** The admin-side copy of the trial ending reminder.
* **Notify customer when subscription is past due:** Sent when a subscription is marked past due.
* **Notify admin when a subscription is past due:** The admin-side copy of the past due notice.

Reminder timing is configured separately. See [Reminders](/guide/settings-configuration/email-configuration/reminders) for the schedule controls.

**Subscription changes**

* **Send mail to customer when a subscription is canceled:** Notifies the customer that their subscription has been cancelled and includes the **access end date** so they know exactly when their access ends. This is especially important for stores running courses, memberships, or licensed products where billing and access are tied together.
* **Send mail to admin when a subscription is canceled:** The admin-side copy of the cancellation notice.
* **Notify customer when a billing period is skipped:** Sent when an admin skips the customer's next billing period. The internal reason and the name of the admin who skipped it are never included. This one is **off by default**.

>[!Note]
>The cancellation email is sent automatically whenever a subscription moves to a cancelled state. The access end date is pulled from the subscription's paid-through period, so customers can see at a glance whether their access ends immediately or continues through the end of the current billing cycle.

#### Enabling or Disabling Notifications

To quickly activate or deactivate any notification, simply click the **toggle switch** in the "Enabled" column. The email will only be sent if the toggle is on.

![Email Notification](/images/settings-configuration/email-notifications/email-notification-1.webp)


### Customizing an Email Notification

To customize the content of a specific email, click the **pencil icon** on the right-hand side of its row. This will take you to the editor for that specific email template.

* **Enable this email notification!** This toggle at the top right serves the same purpose as the one on the main list, allowing you to activate or deactivate the email from within the editor.

#### Email Subject

This field controls the subject line of the email. You can personalize it by clicking the **shortcode icon {;}** on the right to insert dynamic information, such as the customer's name or the order ID.

#### Email Body Type

You have two options for the email's main content:

* **Default Body:** This is the standard, pre-written email content provided by FluentCart. It contains all the essential information for that specific notification and is ready to use out of the box.
* **Customized Body:** Select this option to take full control over the email's content. This is perfect for matching the email's design and tone to your brand's voice.

#### Customizing the Email Body

If you select **Customized Body**, a full rich text editor will appear.

* **Content Editor:** Use the editor to write your own text, apply formatting (like bold, italics, and lists), and structure the email exactly as you want it.
* **Shortcodes:** Just like with the subject line, you can use the **shortcode icon {;}** above the editor to insert dynamic placeholders for order, customer, and general store details. This allows you to create highly personalized and informative emails.
* **Visual/Code View:** You can switch between the **Visual** editor and the **Code** editor (for HTML) to achieve more advanced customizations.

![Email Notification Customization](/images/settings-configuration/email-notifications/email-notification-body.webp)

#### Package Merge Tags

For stores selling physical products, FluentCart exposes the package details of each ordered item as email merge tags. Use these to build custom order confirmations, packing notifications, or warehouse-facing receipts that show shoppers exactly what is shipping — without writing any code.

Place the cursor where the tag should appear, click the **shortcode icon `{;}`**, and select the tag from the **Package** group. The tag resolves per line item at send time.

<div v-pre>

| Merge Tag | Renders |
|-----------|---------|
| `\{\{item.package_name\}\}` | The package name assigned to the product (e.g., `Gift box`, `Medium Mailer`) |
| `\{\{item.package_type\}\}` | The package shape - `Box`, `Envelope`, or `Soft package` |
| `\{\{item.dimensions\}\}` | The package dimensions in `L x W x H unit` format (e.g., `1 x 1 x 1 in`) |
| `\{\{item.product_weight\}\}` | The product's own weight with its unit (e.g., `5 kg`) |
| `\{\{item.shipping_weight\}\}` | The total shipping weight - product weight plus empty-package weight (e.g., `6 kg`) |

</div>

**Default email body already includes package info**

If the notification uses the **Default Body**, package name, dimensions, product weight, and shipping weight are rendered automatically below each item line — no template changes needed. The values match what the customer saw on the product page and at checkout.

![Screenshot of an order confirmation email showing Package, Dimensions, Weight, and Shipping Weight under the order line](/images/settings-configuration/email-notifications/package-info-email.webp)

**Values are captured at checkout**

When the order is placed, FluentCart snapshots the package data onto the order item itself. The email renderer reads from that snapshot — never re-querying the live product — so even if you rename a package, change dimensions, or adjust weights months later, every historical email (resends, reprints, subscription renewals) still displays the values that were correct when the customer placed the order.

Once you are finished editing, click the **Update** button to save your changes. Your customized email will now be sent whenever its corresponding event is triggered.
