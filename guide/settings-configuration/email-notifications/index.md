# Email Notifications

The **Email Notifications** screen is the central hub for managing all automated emails sent from your FluentCart store. From here, you can control both the global sender identity and the individual transactional emails that are sent to customers and administrators.

#### Accessing Email Settings

1.  From your WordPress dashboard, navigate to **FluentCart > Settings > Email Notifications** in the left sidebar.

This page is divided into two main sections:

* **Mailing Settings:** Allows you to configure the global "From" name, email address, and a universal footer for all outgoing emails.
* **Email Notifications List:** A comprehensive list of all automated emails (e.g., for new orders or refunds) that you can enable, disable, or customize individually.

---

### Mailing Settings

The **Mailing Settings** section allows you to configure the global sender details and a universal footer for all automated emails sent from your FluentCart store. Properly configuring these settings ensures brand consistency and improves email deliverability.

* **From Name:** Enter the name you want your customers to see as the sender (e.g., "Your Store Name").
* **From Email:** Provide the official email address from which the emails will be sent. Ensure this is a valid, configured email address on your domain to prevent emails from going to spam.
* **Reply to Name (Optional):** If you want replies to be addressed to a different name, enter it here. If left blank, it will default to the "From Name".
* **Reply to email (optional):** If you want to receive customer replies at a different email address (like `sucom`), enter it here. This routes replies to a specific inbox instead of the "From Email".
* **Email Footer:** Use the rich text editor to create a footer that will be appended to all outgoing emails. It is highly recommended to include your business name and address for compliance. You can also use the **Add ShortCodes** dropdown to insert dynamic content.

 ![Screenshot of Mailing Settings](/guide/public/images/settings-configuration/email-notifications/email-notifications-mailing.png)

After configuring these details, click the **Save Settings** button to apply your changes globally.

---

### Email Notifications List

The **Email Notifications List** contains all the transactional emails FluentCart can send automatically based on specific triggers, such as new orders or refunds. From this panel, you can enable, disable, and customize each individual email template.


#### Enabling or Disabling a Notification

To activate or deactivate an email notification, click the toggle switch located in its row. The notification is enabled when the toggle is on (blue).

#### Editing an Email Template

To customize the content of any email:

1.  Locate the notification you wish to edit from the list.
2.  Click the **pencil icon** on the right side of its row.
3.  This will open the template editor for that specific email, where you can modify the email subject, body content, and use placeholders (shortcodes) to include dynamic information like customer names or order details.

#### Available Notifications

The following is a list of the default notifications you can manage:

* Send mail to admin after order created.
* Send mail to admin after order updated.
* Send mail to admin after payment paid.
* Send mail to customer after order created.
* Send mail to customer after order updated.
* Send mail to customer after payment paid.
* Send mail to customer after refund.
* Send mail to user after user created.

![Screenshot of Mailing Settings](/guide/public/images/settings-configuration/email-notifications/email-notification.png)

By managing these email notifications well, you can improve communication with customers and keep your team informed about important store activities.

### Troubleshooting Email Issues

If emails are not being delivered, the issue is typically with your server's mail function, not the plugin itself. For reliable delivery, it is highly recommended to use a dedicated **SMTP** service, which can be configured with a free plugin like [FluentSMTP](https://fluentsmtp.com).

Before further testing, quickly verify these common settings:

* **Enable the Notification:** In the **Email Notifications List**, ensure the specific email you're expecting is toggled on.

* **Use a Domain Email:** Your **From Email** in **Mailing Settings** must be a real address from your domain (e.g., `you@yourstore.com`), not a free address like `@gmail.com`.

* **Check Spam Folders:** Ask customers to check their spam/junk folders and mark your emails as "Not Spam."

* **Test for Conflicts:** As a final step, temporarily deactivate other plugins and switch to a default theme to check for a software conflict.