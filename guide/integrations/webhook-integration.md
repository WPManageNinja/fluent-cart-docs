# Webhook Integration

Webhooks are a powerful tool for developers and advanced users that allow you to send real-time data from your FluentCart store to external applications and services. When a specific event occurs in your store (like a new order), FluentCart can automatically send a notification containing relevant data to a URL you specify.

This is useful for creating custom integrations, connecting to services that aren't natively supported, or building your own data processing workflows. This guide will walk you through setting up a new webhook.

### Step 1: Navigate to Global Integartions

First, we need to go to the right screen in your WordPress dashboard.

1. Navigate to **FluentCart Pro → Settings**.
2. From the side menu, click on **Global Integrations**.

### Step 2: Add a New Webhook Integration

Here, you’ll see a page where all your connections will live. To get started, click the **Add Integration** button in the top right corner and choose **Webhook** from the dropdown list.

![Add Integration](/images/integrations/webhook/add-integration.webp)


### Step 3: Configure the Webhook

This is where you'll tell FluentCart what data to send, where to send it, and when.

 * **Integration Title:** Give your webhook a name that's easy to remember, like "Send New Sales to Slack" or "Sync Orders with Accounting."
 * **Request URL:** This is the most important part. Paste the unique URL from the other application where you want to send the data.
 * **Request Method:** This tells the receiving server what kind of action to perform. POST is the most common method for sending new data. You can also choose **GET**, **PUT**, **PATCH**, or **DELETE** for other advanced uses.
 * **Request Format:** Choose how your data will be structured. You have two options:
    * **JSON:** This is the modern standard for most web applications and is usually the best choice.
    * **Form Data:** Use this if the receiving service specifically requires data in this format.
 * **Request Headers (Optional):** Some services require a special key or code (like an API key) to accept data. You can add these here.
    * **No Headers:** Choose this if none are needed.
    * **With Headers:** Select this to add custom headers. Simply enter a **Header Name** and its corresponding **Header Value**. You can add more by clicking **+ Add more**.

 * **Request Body:** This is the actual information that will be sent.
    * **All Data:** The easiest option. This sends the complete set of default information related to the event.
    * **Selected Fields:** This gives you full control. You can choose exactly which pieces of data to send. For each field, you'll define a **Payload Key** (the name of the data field) and then select the specific Value you want to send from the dropdown.
 * **Event Trigger:** This is the "when." Click the **Select Event** box to choose the specific action in your store that will trigger this webhook. You can select one or more events.

Some of the available triggers include:
 * Order Paid (Payment / Subscription)
 * Order Canceled
 * Order Refunded (Full)
 * Subscription Activated
 * Subscription Renewed
 * Order Shipped
 * Order Delivered

This screen contains all the settings required to define what data is sent, where it's sent, and what triggers it.

![Configuring Webhook](/images/integrations/webhook/configuring-webhook.webp)

#### Step 4: Save and Activate the Webhook

* **Enable This Feed:** At the top right of the screen, ensure the toggle is switched on to make the webhook active.
* Click the **Create Webhook Feed** button at the bottom to save your configuration.

That's it! Your webhook is now live. Whenever the event you selected occurs, FluentCart will automatically send the data you configured to your URL.

### Managing Your Webhooks

After creating a webhook, it will appear in a list on the main Webhooks screen. This dashboard provides a clear overview of all your webhooks and allows you to manage them easily.

For each webhook, you can:

 * **See its Status:** The "Enabled" column shows if a webhook is active or not.
 * **Enable/Disable:** Use the toggle to quickly turn a webhook on or off without deleting it.
 * **Edit:** Click on the webhook's title or an edit icon to change its settings.
 * **Delete:** Use the trash can icon to permanently remove a webhook.

![Configuring Webhook](/images/integrations/webhook/managing-your-webhook.webp)

