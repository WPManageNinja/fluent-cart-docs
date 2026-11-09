# Webhook Integration

Webhooks are a powerful tool for developers and advanced users that allow you to send real-time data from your FluentCart store to external applications and services. When a specific event occurs in your store (like a new order), FluentCart can automatically send a notification containing relevant data to a URL you specify.

This is useful for creating custom integrations, connecting to services that aren't natively supported, or building your own data processing workflows. This guide will walk you through setting up a new webhook.

::: info
Webhooks are part of **FluentCart Pro**.
:::

### Step 1: Navigate to Integrations

First, you'll need to go to the correct screen in your WordPress dashboard.

 1. Navigate to **FluentCart Pro**.
 2. Click on **Integrations** from the sidebar menu.

### Step 2: Add a New Webhook Integration

On this page, you will see all of your global integration feeds. To get started, click the **Add Integration** button in the top right corner and choose **Webhook** from the dropdown list.

![Add Integration](/images/integrations/webhook/add-integration.webp)


### Step 3: Configure the Webhook

This is where you'll tell FluentCart what data to send, where to send it, and when.

 * **Integration Title:** Give your webhook a name that's easy to remember, like "Send New Sales to Slack" or "Sync Orders with Accounting."
 * **Request URL:** This is the most important part. Paste the URL the other application gave you for receiving webhooks. It must be a public `http://` or `https://` address. FluentCart rejects private, local, and loopback addresses (such as `localhost`, `127.0.0.1`, `10.x.x.x`, or `192.168.x.x`) when you save the feed, and checks again before each send. If a send is blocked, the reason is written to the order's activity log.
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

The available triggers are:
 * **Orders:** Order Paid (Payment / Subscription), Order Canceled, Order Refunded (Full)
 * **Subscriptions:** Subscription Activated, Subscription Reactivated, Subscription Canceled, Subscription Renewed, Subscription End of Term (Completed), Subscription Expired / End of Access Validity
 * **Shipping:** Order Shipped, Order Delivered

This screen contains all the settings required to define what data is sent, where it's sent, and what triggers it.

![Configuring Webhook](/images/integrations/webhook/configuring-webhook.webp)

### Step 4: Save and Activate the Webhook

Finally, switch the feed on and save it.

* **Enable this Integration:** At the top right of the screen, make sure this toggle is on to make the webhook active.
* Click the **Create Webhook Feed** button at the bottom to save your configuration.

That's it! Your webhook is now live. Whenever the event you selected occurs, FluentCart will automatically send the data you configured to your URL.

### Managing Your Webhooks

After you create a webhook, it appears in the **Global Integrations Feeds** table on the **Integrations** screen, alongside your other feeds. The table shows **Enabled**, **Integration**, **Title**, and **Triggers** for each feed.

For each webhook, you can:

 * **See its Status:** The **Enabled** column shows if a webhook is active or not.
 * **Enable/Disable:** Use the toggle to quickly turn a webhook on or off without deleting it.
 * **Edit:** Click on the webhook's title or an edit icon to change its settings.
 * **Delete:** Use the trash can icon to permanently remove a webhook.

To send a webhook only for one product, add it from that product's **Integrations** tab instead.

<!-- TODO(screenshots): managing-your-webhook.webp is outdated: it shows the old Settings sidebar "Global Integrations" layout. Retake the Global Integrations Feeds table on the Integrations screen with a webhook feed. Update later. -->
![Configuring Webhook](/images/integrations/webhook/managing-your-webhook.webp)

