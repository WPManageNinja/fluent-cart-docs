# Editing Email Templates

FluentCart offers flexible customization for each automated email notification. You can adjust the content, subject lines, and recipients to match your brand’s tone and meet your specific communication needs.

## Accessing the Email Template Editor

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings > Email Notifications**.
2.  On the **Email Notifications** section, locate the specific email you wish to edit and click the **"Edit"** link in its row.

    ![Screenshot of Edit Notification Link](/guide/public/images/settings-configuration/email-notifications/edit-notification-link.png) 


3.  This will open the **Edit Notification** screen, where you can customize the selected email template.

    ![Screenshot of Edit Notification Screen](/guide/public/images/settings-configuration/email-notifications/edit-notification-screen.png)

## Customizing Email Notification Settings

### 1. General Settings

* **Notification Name:** Displays the descriptive name of the email notification you are currently editing.
* **Enabled Toggle:** A toggle switch is available in the top right corner to enable or disable each specific email notification as needed.

### 2. Triggering Events

* **Select Notification Event:** This section allows you to define or modify the event(s) that trigger this email. You can select multiple events if the email should be sent under various conditions.
    * Common event options include: "After Order Created", "After Order Updated", "After Payment Paid", "After User Created", and "After Refund made".

### 3. Recipient & Sender Configuration

* **Send Mail To\*:** This crucial section defines who will receive the email. You can select from various predefined roles or email addresses:
    * Use the "Select" dropdown for general recipients.
    * You can specify `{wp.admin_email}` to send to the WordPress administrator's email.
    * Options like "Customer Email" or "User Email" are available for customer-facing notifications.
* **Cc:** (Carbon Copy) An optional field to add additional email addresses that should receive a copy of this notification.
* **Mail From\*:** Configure the sender's email address for this notification. By default, it might use `{wp.admin_email}`.

### 4. Email Content Customization

This section includes a powerful editor that lets you customize the subject line and body content of your email.

* **Mail Subject\*:** Enter the subject line for the email. You can use dynamic shortcodes here to include order or customer-specific information (e.g., "Order Created").
* **Template Editor Area:** The main content area where you compose the email body.
    * **"Add ShortCodes" Dropdown:** A central feature that allows you to easily insert dynamic data into your email. This ensures that information like order IDs, customer names, or payment summaries are automatically populated.
        * Examples of shortcodes include: `{settings.store_logo}`, `{order.billing.first_name}`, `{order.id}`, `{order.updated_at}`, `{order.customer.full_name}`, `{order.customer.email}`, `{order.payment_summary}`, `{order.payment_receipt}`, `{order.customer_dashboard_link}`, `{order.uuid}`, and `{order.rate}`.
    * **"Paragraph" Dropdown:** Provides basic text formatting options.
    * **"Visual Code" Button:** Allows you to toggle between a visual editor (rich text) and a code editor (likely HTML/CSS) for advanced template customization.

## Saving Your Template Changes

Once you’ve made all the necessary changes to the email notification, click the **"Save Settings"** or **Update** button at the bottom right to apply and save your updates.
