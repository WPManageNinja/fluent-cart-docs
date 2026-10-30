# Connecting Shippo

Connecting Shippo takes three short steps: create an API token in your Shippo account, paste it into FluentCart, and register the tracking webhook so tracking updates reach your store. This guide walks you through each step and explains every field on the Shippo settings screen.

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

1. Go to **FluentCart Pro > Settings > Shipping**. The **Carriers** page opens.
2. Click **Manage** next to **Shippo**.

    ![Screenshot of the Carriers page with the Manage button for Shippo highlighted](/images/shipping/shippo/carriers-shippo-manage.webp)

3. In the **Connection** card, turn on **Enable Shippo**.
4. Under **Connection mode**, click the **Test** or **Live** card.
5. Paste your token into the **Test token** or **Live token** field that appears below the cards.
6. Click **Save settings** at the bottom of the page, or **Save** in the top-right corner.

When you save, FluentCart checks the token with Shippo before storing it, and loads the list of carriers on your Shippo account. After a successful save, the token is hidden. The field shows **Leave blank to keep the saved token (ending 5857)**, and the mode card shows a tag such as **Token ending 5857 · verified**. The **Connection** card header shows **Connected · Test mode** or **Connected · Live mode**.

![Screenshot of the Shippo Connection card after saving a test token](/images/shipping/shippo/shippo-settings-connection.webp)

If something is wrong, FluentCart shows an error and saves nothing. These are the messages you may see:

* **That is a live token. Paste it into Live Token.** You pasted a live token into the **Test token** field. Pasting a test token into **Live token** gives the matching message, **That is a test token. Paste it into Test Token.** Each mode has its own token field.
* **Enter your Shippo test token to enable Shippo in Test mode.** You turned on **Enable Shippo** without a token for the selected mode. In Live mode, the message asks for your live token instead.
* **Shippo rejected the API token. Check your test or live token.** Shippo did not accept the token, so double-check that you copied the whole token.
* **The Seller Phone in Shippo settings must contain 8 to 15 digits.** Correct the sender phone number or leave the field empty.
* **The Seller Email in Shippo settings must be a valid email address.** Correct the sender email address or leave the field empty.
* **The Preferred Carrier is not connected to this Shippo account.** The carrier you picked is not on the account of the token you are saving. Pick another carrier or **Cheapest of all carriers**.

## Shippo Settings Reference

The Shippo settings page is split into five cards: **Connection**, **Checkout rates**, **Labels**, **Sender**, and **Tracking updates**. Fields are saved together with **Save settings**. The buttons inside the status boxes, such as **Test connection** and **Register webhook in Shippo**, work differently: they run right away and do not need a save.

![Screenshot of the full Shippo settings page](/images/shipping/shippo/shippo-settings-overview.webp)

When **Enable Shippo** is off, a note says that checkout rates, labels and tracking updates stop until you turn it back on, and the other cards are dimmed.

### Connection

* **Enable Shippo:** Turns Shippo rates, labels, and tracking updates on for your store. It requires the token for the selected connection mode, so you cannot enable it without one.
* **Connection status:** Once Shippo is enabled, a status box shows whether FluentCart can reach your account. When connected, it lists the Shippo **Account**, the number of **Carriers** on it, and when it was last **Checked**. Click **Test connection** to check the saved token again. If Shippo refuses the token, the box turns red with **Shippo didn't accept the test token** (or live token) and the card header shows **Token rejected**.
* **Connection mode:** Two cards, **Live** (real labels, billed by Shippo) and **Test** (free labels that never ship). The active mode is marked **Active**. Each card has a tag showing whether a token is saved for it, for example **No live token saved** or **Token ending 5857 saved**. Rates, labels, and tracking all use the token of the selected mode.
* **Test token / Live token:** Your Shippo API token for the selected mode. Leave the field blank on later saves to keep the token you already stored. If you select a mode that has no token yet, a note asks you to add one before you save.

### Checkout Rates

* **Show Shippo rates at checkout:** Live Shippo rates appear next to your zone shipping methods. Every carrier that returns a rate is shown.

![Screenshot of the Checkout rates card with the Show Shippo rates at checkout toggle](/images/shipping/shippo/shippo-settings-checkout.webp)

### Labels

* **Buy labels from the order page:** Lets you quote and buy labels from the **Create shipment** form on an order. The fields below appear only while this toggle is on.
* **Preferred carrier:** Controls which rate is preselected when you quote a label. The **Create shipment** form ticks the service the customer paid for at checkout first. If there is none, it ticks this carrier's cheapest rate. If this carrier has no rate for the parcel, the cheapest rate overall is used. Leave it on **Cheapest of all carriers** (the default) to always start from the cheapest rate.
* **Units:** Read-only. Shows the weight and size units used for products and boxes that have no units of their own. They come from [Store Settings](/guide/settings-configuration/store-settings); click **Change** to edit them there.

![Screenshot of the Labels card with Preferred carrier and Units](/images/shipping/shippo/shippo-settings-labels.webp)

The **Preferred carrier** dropdown is searchable and lists the carriers on your Shippo account in two groups. **Your own accounts** holds carrier accounts you connected in Shippo yourself, such as your own UPS or FedEx account. **Shippo accounts** holds the carriers Shippo provides, each with its number of services. The footer shows how many carriers were found and when the list was updated. Click **Refresh list** after you add or remove a carrier in Shippo.

![Screenshot of the Preferred carrier dropdown with carrier groups and the Refresh list link](/images/shipping/shippo/shippo-settings-preferred-carrier.webp)

The **Labels** card can also show two warnings:

* **Products without a unit:** "X products have a weight but no unit. They are treated as kg, the store unit." Click **Review them** to open your products and set a unit.
* **Earlier Shippo units:** If you picked a unit system in an earlier version of the Shippo settings and it differs from Store Settings, Shippo keeps using it for products without units, and a warning tells you which units each side uses.

### Sender

The **Sender** card holds the details printed on every label. Its fields appear only while **Buy labels from the order page** is on.

* **Ships from:** Read-only. Your store name and address from Store Settings. Shippo ships from this address. Click **Edit in Store Settings** to change it.
* **Phone** *(required for USPS)*: The number carriers call if a parcel has a problem. When filled in, it must contain 8 to 15 digits. While it is empty, a warning reminds you that USPS refuses labels without a sender phone.
* **Email:** The sender email on labels. It is filled from your store's admin email; change it if labels need another address.

![Screenshot of the Sender card with Ships from, Phone and Email](/images/shipping/shippo/shippo-settings-sender.webp)

### Tracking Updates

This card connects Shippo's tracking webhook to your store. Its header shows **Webhook registered**, **Not registered**, or **Missing in Shippo**. The webhook buttons run right away and do not need **Save settings**. Setting up the webhook is covered in the next step.

### Setup Notices

When something needs attention, the **Carriers** list shows a **Needs attention** badge next to Shippo, and the Shippo settings page shows the details at the top:

* **Missing token:** "Shippo is enabled in Test mode but has no test token, so rates, labels and tracking are off. Add the test token or switch to Live." In Live mode, the notice asks for the live token instead.
* **Incomplete store address:** "Shippo ships from your store address, which is incomplete. Rates and labels will fail until you add:" followed by the missing fields, such as the street address or postal code. Click **Open Store Settings** to complete it.
* **Unsupported currency:** "Shippo cannot quote rates in" your store currency, "so Shippo rates are not shown at checkout. Labels and tracking still work."

## Step 3: Turning On Tracking Updates

Shippo sends tracking changes to your store through a webhook, so shipment statuses update without you clicking anything. FluentCart can add this webhook to your Shippo account for you.

1. Save a token first (Step 2). The webhook buttons need a saved token for the selected mode.
2. In the **Tracking updates** card, click **Register webhook in Shippo**.

![Screenshot of the Tracking updates card with the Register webhook in Shippo button](/images/shipping/shippo/shippo-settings-tracking.webp)

FluentCart creates a `track_updated` webhook in your Shippo account for the current connection mode (Test or Live). When it succeeds, you see **Webhook registered in Shippo**, the card header shows **Webhook registered**, and the status box lists the **Event**, the **Mode**, and the time of the **Last update** Shippo sent.

Once the webhook is registered, the status box offers three actions:

* **Check status:** Asks Shippo whether the webhook still exists and is active. If someone deleted it in the Shippo dashboard, the box turns red with **The webhook was removed from your Shippo account** and a **Register again** button.
* **Re-register:** Registers the webhook again with the current URL. FluentCart updates the existing webhook instead of adding a second one.
* **Rotate secret:** Issues a new secret for the webhook URL. FluentCart asks you to confirm, because the current URL stops working right away. It then sends the new URL to Shippo for you, so tracking keeps working. Use it if the URL was ever exposed.

If Shippo refuses the webhook, the box shows **Shippo didn't accept the webhook** with Shippo's reason and a **Try again** button, and the manual steps below open automatically.

### Adding the Webhook Manually

If you prefer to add the webhook yourself, or the automatic registration fails, expand **Set it up in Shippo yourself** in the **Tracking updates** card. It shows your webhook URL with the secret masked, a **Show** button to reveal it, a **Copy** button, and the steps to follow.

1. Click **Copy** to copy the webhook URL.
2. In your Shippo dashboard, go to **API configuration > Webhooks**.
3. Click **Create webhook**.

![Screenshot of the Shippo Webhooks page with the Create webhook button highlighted](/images/shipping/connecting-shippo/shippo-webhooks-empty.webp)

4. Set **Event Type** to the `track_updated` event. Do not leave it on **All Events**.
5. Set **Environment** to match your FluentCart **Connection mode**: **Test** for Test mode, **Live** for Live mode.
6. Paste the copied URL into the **URL** field.
7. Click **Create**.

![Screenshot of the Shippo Create webhook popup with the URL field highlighted](/images/shipping/connecting-shippo/shippo-create-webhook.webp)

The webhook now appears in the list with an **Active** status.

![Screenshot of the Shippo Webhooks list showing an active webhook](/images/shipping/connecting-shippo/shippo-webhook-active.webp)

::: warning
Shippo marks every webhook event as Test or Live. FluentCart compares that with the mode each label was bought in, so a Test event only updates labels bought in Test mode, and a Live event only updates Live labels. Switching your **Connection mode** later does not affect tracking for labels you already bought. If you use both modes, register one webhook for each: select the other mode, save, and click **Register webhook in Shippo** again.
:::

::: info
The webhook URL contains a secret token, so treat it like a password. If it is ever exposed, click **Rotate secret** in the **Tracking updates** card. FluentCart rejects webhook calls that carry an invalid token.
:::

Your store is now connected to Shippo. Rates, labels, and tracking updates are ready to use.
