### Configuring Email Notifications

The **Notifications** section in FluentCart is where you manage all the automated transactional emails that are sent to both your customers and store administrators. Keeping your customers informed about their order status is crucial for a professional e-commerce experience.

This guide will walk you through how to manage, edit, and customize these important email notifications.

#### Step 1: Navigate to the Notifications Screen

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Email Configuration** tab.
3.  From the sub-menu, select **Notifications**.

#### Step 2: Manage Your Notifications

On this screen, you will see a list of all available email notifications.

**Available Notifications**

Here is a list of the default email notifications that you can manage within FluentCart:

* **Send mail to admin after order created:** Notifies the store admin that a new order has been placed.
* **Send mail to customer after order created:** Confirms to the customer that their order has been successfully received.
* **Send mail to admin after order updated:** Informs the admin of any changes made to an existing order.
* **Send mail to customer after order updated:** Notifies the customer of any updates to their order.
* **Send mail to admin after payment paid:** Alerts the admin that a payment has been successfully processed.
* **Send mail to customer after payment paid:** Confirms to the customer that their payment has been received.
* **Send mail to customer after refund:** Informs the customer that a refund has been processed for their order.
* **Send mail to user after user created:** Welcomes a new user who has created an account on your store.

For each notification in the list, you can see its **Name**, the intended **Recipient** (Admin, Customer, or User), and two management options on the right:

* **Enable/Disable Toggle:** Use this switch to quickly activate or deactivate any notification. The email will only be sent if the toggle is enabled.
* **Edit Icon (Pencil):** Click this icon to open the editor and customize the content of that specific email.

![Email Notification](/guide/public/images/settings-configuration/email-notifications/email-notification-1.png)

#### Step 3: Edit an Individual Notification

Clicking the **pencil icon** will take you to the editor for that specific email template. Here, you can tailor the subject and body of the email to match your brand's voice and style.

**1. Basic Settings**

* **Enable this email notification:** This toggle at the top right serves the same purpose as the one on the main list, allowing you to activate or deactivate the email from within the editor.
* **Email Subject:** Edit the subject line of the email here. You can also use the **shortcode** button to the right to insert dynamic information, like the order ID, directly into the subject.

**2. Choose an Email Body Type**

You have two options for the email's content:

* **Default Body:** This is the standard, pre-written email content provided by FluentCart. It contains all the essential information for that specific notification.
* **Customized Body:** Select this option to create your own email content from scratch or to modify the default template.

**3. Customize the Email Body**

If you select **Customized Body**, a full rich text editor will appear.

* **Content Editor:** Use the editor to write your own text, apply formatting, and structure the email exactly as you want it.
* **Shortcodes:** Use the **shortcode** button above the editor to insert dynamic placeholders for order and customer details, such as `{order.id}` or `{order.customer.full_name}`.
* **Visual/Code View:** Switch between the **Visual** editor and the **Code** editor to work directly with the HTML for more advanced customizations.

![Email Notification](/guide/public/images/settings-configuration/email-notifications/email-notification-2.png)

#### Step 4: Save Your Changes

Once you are finished editing the notification, click the **Update** button to save your changes. Your customized email will now be sent whenever its corresponding event is triggered.