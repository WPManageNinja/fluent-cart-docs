# Connecting Shippo

Connecting Shippo takes three short steps: create an API token in your Shippo account, paste it into FluentCart, and add the FluentCart webhook URL to Shippo so tracking updates reach your store. This guide walks you through each step and explains every field on the Shippo settings screen.

Before you begin, make sure the **Shipping For FluentCart** add-on is installed. If it is not, follow [Shipping Carriers](/guide/shipping/shipping-carriers) first.

::: info
Start in **Test** mode. Test tokens create free labels that are never shipped, so you can try rates, labels, and tracking without any cost. Switch to **Live** mode only when you are ready to ship real orders.
:::

## Step 1: Getting Your Shippo API Token

You need a [Shippo](https://goshippo.com) account. Once you are signed in to the Shippo dashboard, you can create a token.

1. Open the **Overview** page and click **API tokens**. You can also go to **API configuration > Developer keys** in the left-hand menu.

![Screenshot of the Shippo Overview page with the API tokens tile highlighted](/images/shipping/connecting-shippo/shippo-api-tokens.webp)

2. The **Developer keys** page has two sections: **Live keys** and **Test keys**.

![Screenshot of the Shippo Developer keys page with the Create new test key button highlighted](/images/shipping/connecting-shippo/shippo-developer-keys.webp)

### Creating a Test Key

Under **Test keys**, click **Create new test key**. You can have a maximum of two test keys at a time.

Shippo shows the **Test API key** in a popup. Click the copy icon beside the key and store it somewhere safe.

![Screenshot of the Shippo Test API key popup with the copy icon highlighted](/images/shipping/connecting-shippo/shippo-test-key.webp)

::: warning
The popup is the only time Shippo shows the full key. If you close it without copying the key, create a new one. Never share your token or publish it anywhere public.
:::

A test token starts with `shippo_test_`.

### Getting a Live Key

Under **Live keys**, click **Request live key**. Shippo asks you to contact their API experts to get a live key, and notes that most clients are integrated within one business day. A live token starts with `shippo_live_`.

## Step 2: Adding the Token to FluentCart

Now, let's link your Shippo account to your store.

1. Go to **FluentCart Pro > Settings > Shipping > Carriers**.
2. Click **Manage** next to **Shippo**.

    ![Screenshot of the Carriers page with the Manage button for Shippo highlighted](/images/shipping/shippo/carriers-shippo-manage.webp)

3. Turn on **Enable Shippo**.
4. Under **Connection Mode**, choose **Test** or **Live**.
5. Paste your token into the **Test Token** or **Live Token** field.
6. Turn on **Show Shippo Rates at Checkout** and **Enable Label Generation** to use those features.
7. Click **Save** in the top-right corner.

![Screenshot of the Shippo settings screen with the Test connection mode selected](/images/shipping/connecting-shippo/shippo-settings-top.webp)

When you save, FluentCart checks the token with Shippo before storing it. After a successful save, the token is hidden and the field shows only its last four characters, with a message such as **Saved, ending in 5857. Leave blank to keep it.** The selected mode also shows an **Active** badge.

![Screenshot of the Shippo settings after saving a test token](/images/shipping/connecting-shippo/shippo-token-saved.webp)

::: info
Each mode has its own token field. A live token pasted into **Test Token** (or a test token pasted into **Live Token**) is rejected with a message telling you which field to use.
:::

## Shippo Settings Reference

Here is what each field on the Shippo settings screen does. The screen is one form, so you can configure everything and click **Save** once.

![Screenshot of the full Shippo settings screen](/images/shipping/shippo/shippo-settings-overview.webp)

### Connection

* **Enable Shippo:** Turns the Shippo carrier on. It requires the API token for the selected connection mode, so you cannot enable it without one.
* **Connection Mode:** Choose **Live** (uses your live token, and labels are real and billed) or **Test** (uses your test token, and labels are free and not shipped). Rates, labels, and tracking all use the token of the selected mode.
* **Live Token / Test Token:** Your Shippo API token for that mode. Leave the field blank on later saves to keep the token you already stored.

![Screenshot of the Connection Mode options with the Test token field](/images/shipping/shippo/shippo-settings-connection.webp)

### Checkout Rates and Labels

* **Show Shippo Rates at Checkout:** Offers live Shippo rates alongside your zone shipping methods.

![Screenshot of the Show Shippo Rates at Checkout toggle](/images/shipping/shippo/shippo-settings-toggles.webp)

* **Enable Label Generation:** Lets you quote and buy labels from the **Create shipment** form on an order.

![Screenshot of the Enable Label Generation toggle](/images/shipping/shippo/shippo-settings-labels.webp)

### Label Details

* **Preferred Carrier** *(Optional)*: A Shippo carrier name, such as `usps` or `ups`. When you quote a label, that carrier's rate is preselected. If you leave it empty, the cheapest rate is preselected.

![Screenshot of the Preferred Carrier field](/images/shipping/shippo/shippo-settings-preferred-carrier.webp)

* **Unit of Measurement:** Choose **Metric (kg / cm)** or **Imperial (lb / in)**. These are fallback units, used when a product or box has none.
* **Seller Phone:** The sender phone number printed on labels. USPS requires it. When filled in, it must contain 8 to 15 digits.
* **Seller Email:** The sender email shown on labels. USPS requires it. When filled in, it must be a valid email address.

![Screenshot of the Seller Phone field](/images/shipping/shippo/shippo-settings-seller.webp)

### Webhook

* **Rotate Webhook Secret:** Turn this on and save to issue a new webhook URL. The old URL stops working, so paste the new one into Shippo.
* **Webhook URL:** Appears after your first save. Copy it with the **Copy** button.

![Screenshot of the Webhook URL field with the Copy button](/images/shipping/shippo/shippo-settings-webhook.webp)

### Setup Notices

FluentCart shows a notice on the Carriers page when something needs attention:

* **Missing token:** Shippo is enabled, but the selected mode has no token, so rates, labels, and tracking are off. Add the token or switch modes.
* **Incomplete store address:** Rates or labels are turned on, but your store address is missing a street address, city, postal code, or country. Click **Open Store Settings** to complete it.
* **Unsupported currency:** Shippo cannot quote rates in your store currency, so Shippo rates are not shown at checkout. Labels and tracking still work.

## Step 3: Adding the Webhook in Shippo

Shippo sends tracking changes to your store through a webhook, so shipment statuses update without you clicking anything. The webhook URL is generated by FluentCart.

1. In FluentCart, open the Shippo settings and scroll to the bottom. Click **Copy** next to **Webhook URL**.

![Screenshot of the Webhook URL field in the Shippo settings](/images/shipping/connecting-shippo/shippo-webhook-url.webp)

2. In your Shippo dashboard, go to **API configuration > Webhooks**.
3. Click **Create webhook**.

![Screenshot of the Shippo Webhooks page with the Create webhook button highlighted](/images/shipping/connecting-shippo/shippo-webhooks-empty.webp)

4. Set **Event Type** to the `track_updated` event. Do not leave it on **All Events**.
5. Set **Environment** to match your FluentCart **Connection Mode**: **Test** for Test mode, **Live** for Live mode.
6. Paste the copied URL into the **URL** field.
7. Click **Create**.

![Screenshot of the Shippo Create webhook popup with the URL field highlighted](/images/shipping/connecting-shippo/shippo-create-webhook.webp)

The webhook now appears in the list with an **Active** status.

![Screenshot of the Shippo Webhooks list showing an active webhook](/images/shipping/connecting-shippo/shippo-webhook-active.webp)

::: warning
Shippo marks every webhook event as Test or Live. FluentCart ignores events from the mode that does not match your **Connection Mode**, so a Test webhook will not update labels bought in Live mode, and the other way around. If you use both modes, create one webhook for each.
:::

::: info
The webhook URL contains a secret token, so treat it like a password. If it is ever exposed, turn on **Rotate Webhook Secret**, save, and add the new URL to Shippo. FluentCart rejects webhook calls that carry an invalid token.
:::

Your store is now connected to Shippo. Rates, labels, and tracking updates are ready to use.
