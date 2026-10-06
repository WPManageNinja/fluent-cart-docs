---
title: "Airwallex Settings"
description: "Learn how to connect Airwallex to FluentCart, create a scoped API key, configure webhooks, and start accepting payments at checkout."
---

# Airwallex Settings

Airwallex is a global financial platform that lets businesses accept payments from customers around the world. By connecting Airwallex with FluentCart, you can offer your customers a secure checkout experience with support for refunds, disputes, and recurring subscriptions, all kept in sync through webhooks.

This guide will walk you through every step of connecting your Airwallex account to FluentCart, from creating a scoped API key to configuring webhooks and activating the gateway.

::: info
Airwallex is a Pro feature. It is only available when **FluentCart Pro** is installed and active on your site.
:::

## Step 1: Accessing Airwallex Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab.
3.  Locate **Airwallex** in the list of payment gateways and click the **Manage** button next to it.

![Screenshot of Airwallex in FluentCart Payment Settings](/images/payments-checkout/airwallex/airwallex-payment-settings-1.webp)

## Step 2: Connect Your Airwallex Account

Once you open the Airwallex settings page, you can connect your store in both Test and Live modes. Choose the mode that matches your store's current **Order Mode** before you start entering credentials.

![Screenshot of the Airwallex settings page in FluentCart](/images/payments-checkout/airwallex/airwallex-3.webp)

* **Store Mode Notice:** At the top of the page, a message shows whether your store is currently in Test mode or Live mode. If your store is in Test mode, remember to switch to Live mode before accepting real transactions.

* **Select Credentials Mode:**
    * **Test credentials:** Select this tab to connect your Airwallex sandbox account and try the checkout without real money.
    * **Live credentials:** Select this tab when you are ready to accept real payments.

* **Credential fields:** Each tab asks for three values, which you will collect from Airwallex in the next steps:
    * **Client ID** *(Required)*
    * **API Key** *(Required)*
    * **Webhook Secret** *(Required)*

* **Webhook URL:** A unique URL generated for your store. You will paste it into Airwallex in Step 4. Click the copy icon next to it to copy it.

::: info
Your credentials are encrypted before they are stored in your database, so they are never saved as plain text.
:::

## Step 3: Create a Scoped API Key in Airwallex

FluentCart connects to Airwallex using a scoped API key. Now, let's create one inside your Airwallex account.

::: info
To test with fake payments, use your Airwallex **sandbox** account. For real payments, repeat these steps in your live Airwallex account and enter the values in the **Live credentials** tab.
:::

1.  Log in to your Airwallex account.
2.  From the left sidebar, click **Developer**.
3.  Open the **API keys** tab, then click the **New scoped key** button on the right.

![Screenshot of the Airwallex Developer page with the New scoped key button](/images/payments-checkout/airwallex/new-scope-key-4.webp)

4.  In the **Create scoped API key** screen, enter a recognizable name in the **API key name** field (e.g., `FluentCart`).
5.  Under **Global permissions**, review the resources and make sure **Webhooks** has both **Read** and **Write** access, since FluentCart relies on webhooks to receive payment updates.
6.  Click **Next**.

![Screenshot of naming the Airwallex scoped API key and setting global permissions](/images/payments-checkout/airwallex/api-key-name-5.webp)

7.  Under **Account permissions**, open the **Accounts** field and select the Airwallex account this key should work with.
8.  Review the resources listed below the account selection, then click **Next**.

![Screenshot of choosing the account and account permissions for the Airwallex API key](/images/payments-checkout/airwallex/choose-account-permission-6.webp)

9.  On the **Set IP whitelist** screen, you can optionally enter the IP addresses allowed to use this key. Whitelisting adds an extra layer of security by blocking requests from any other address. If you are unsure about your server's IP address, you can leave this empty.
10. Click **Create**.

![Screenshot of the Airwallex IP whitelist step with the Create button](/images/payments-checkout/airwallex/just-click-create-7.webp)

Airwallex now shows the **Save your scoped API key** screen with the new key and its details.

11. Click the **Copy** button next to the API key and store it somewhere safe for now. You will paste it into the **API Key** field in FluentCart later.
12. Under **API key details**, click the copy icon next to **Client ID** and copy it as well. You will paste it into the **Client ID** field in FluentCart later.

![Screenshot of copying the Airwallex API key and Client ID](/images/payments-checkout/airwallex/copy-api-and-client-id-8.webp)

::: warning
Airwallex shows the API key only once. Copy it before leaving this screen, because you will not be able to see it again. If you lose it, you will need to create a new key.
:::

## Step 4: Configure Webhooks

Webhooks let Airwallex send real-time updates to FluentCart, such as confirmed payments, refunds, disputes, and subscription changes. Without them, your orders will not update automatically.

1.  **Copy Your Webhook URL:** On the FluentCart Airwallex settings page, locate the **Webhook URL** and copy it.
2.  **Open Webhooks in Airwallex:** In your Airwallex account, go to **Developer** and open the **Webhooks** tab. Click **New webhook**.

![Screenshot of the Airwallex Webhooks tab with the New webhook button](/images/payments-checkout/airwallex/new-webhook-9.webp)

3.  **Enter the Webhook Details:** In the **Create webhook** screen, fill in the following:
    * **Name:** Give it a recognizable name like `FluentCart`.
    * **Notification URL:** Paste the **Webhook URL** you copied from FluentCart.
    * **API version:** Leave this set to the current API version.
4.  **Select the Important Events:** Subscribe to the events FluentCart needs. These are the same events listed under **Select these events** on the FluentCart Airwallex settings page:

The events recommended by FluentCart are briefly explained below:

* **payment_intent.succeeded:** The customer's payment went through successfully, and the order can be marked as paid.
* **payment_intent.cancelled:** A payment was cancelled before it was completed.
* **refund.accepted:** A refund request was accepted by Airwallex.
* **refund.settled:** A refund was completed and the money was returned to the customer.
* **refund.failed:** A refund could not be processed.
* **payment_dispute.requires_response:** A customer opened a dispute and a response is needed.
* **payment_dispute.pending_closure:** A dispute is waiting to be closed.
* **payment_dispute.won:** The dispute was resolved in your favor.
* **payment_dispute.lost:** The dispute was resolved in the customer's favor.
* **subscription.created:** A new subscription was created.
* **subscription.active:** A subscription became active.
* **subscription.unpaid:** A subscription payment is overdue or unpaid.
* **subscription.modified:** A subscription was changed (e.g., upgraded or downgraded).
* **subscription.cancelled:** A subscription was cancelled.
* **invoice.payment.paid:** A subscription invoice was paid by the customer.

Under **Payment Intent**, check **payment_intent.succeeded** and **payment_intent.cancelled**.

![Screenshot of the Airwallex Create webhook screen with Payment Intent events selected](/images/payments-checkout/airwallex/create-webhook-and-choose-event-10.webp)

Scroll down to **Refund** and check **refund.accepted**, **refund.settled**, and **refund.failed**.

![Screenshot of selecting Refund events in Airwallex](/images/payments-checkout/airwallex/refund-event-11.webp)

Next, scroll to **Subscription** and check **subscription.created**, **subscription.active**, **subscription.unpaid**, **subscription.cancelled**, and **subscription.modified**.

![Screenshot of selecting Subscription events in Airwallex](/images/payments-checkout/airwallex/subscription-events-12.webp)

Under **Account events**, make sure the account you want to track is selected in the **Accounts** field, and open the **Payments** category to find the remaining payment events.

![Screenshot of the Account events section in the Airwallex webhook form](/images/payments-checkout/airwallex/accounts-events-13.webp)

Finally, find **Invoice** in the list and check **invoice.payment.paid**.

![Screenshot of selecting the invoice.payment.paid event in Airwallex](/images/payments-checkout/airwallex/invoice-events-14.webp)

5.  Click **Create** at the bottom right to save the webhook.
6.  **Copy the Webhook Secret:** Open the webhook you just created in Airwallex and copy its **signing secret**.

::: info
Create one webhook endpoint per environment. Use a separate webhook for your sandbox (Test) account and another for your live account, and paste each secret into the matching credentials tab.
:::

## Step 5: Activate and Save

Now, let's bring everything together in FluentCart.

1.  **Paste Your Credentials:** Back on the FluentCart Airwallex settings page, select the **Test credentials** tab (or **Live credentials** for a live account) and fill in the fields:
    * **Client ID:** Paste the Client ID you copied in Step 3.
    * **API Key:** Paste the API key you copied in Step 3.
    * **Webhook Secret:** Paste the signing secret you copied in Step 4.
2.  **Payment Activation:** Switch the **Payment Activation** toggle at the top right to **ON**.
3.  **Save Settings:** Click the **Save Settings** button at the bottom of the page.

![Screenshot of pasting all Airwallex credentials and enabling Payment Activation in FluentCart](/images/payments-checkout/airwallex/paste-all-cerdentials-15.webp)

Once saved, **Airwallex** appears as a payment option on your checkout page.

![Screenshot of Airwallex on the FluentCart checkout page](/images/payments-checkout/airwallex/checkout-preview-16.webp)

We recommend placing a test order in Test mode to confirm everything works before going live.

## Step 6: Go Live with Real Payments

When you're ready to accept real payments, follow these steps to switch from Test to Live mode:

1.  Log in to your live Airwallex account and repeat **Step 3** to get your live **Client ID** and **API Key**.
2.  Repeat **Step 4** in your live account to create a webhook and copy its **signing secret**.
3.  In FluentCart, open the Airwallex settings page and select the **Live credentials** tab.
4.  Paste the live **Client ID**, **API Key**, and **Webhook Secret**, then click **Save Settings**.
5.  Finally, make sure your store's **Order Mode** is set to **Live** under **FluentCart Pro > Settings > Store Settings**.

Your store is now configured to securely accept payments through Airwallex.
