# Flutterwave Integration 

Flutterwave is a powerful payment gateway that allows you to accept payments globally, with a strong focus on African markets. By connecting Flutterwave to your FluentCart store, your customers can pay securely using their Credit/Debit Cards, Bank Transfers, Mobile Money, USSD, M-Pesa, and more.

This step-by-step guide will walk you through everything you need to know to successfully integrate Flutterwave into your store.

## Step 1: Install and Activate Flutterwave

Before you can connect your account, you need to enable the Flutterwave module inside your FluentCart store.

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart > Settings** in the left-hand menu.
3. Click on the **Payment Settings** tab.
4. Scroll down the list of available payment methods until you find **Flutterwave**.
5. Click the **Manage** button next to it.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-1.webp)

6. You will see a prompt saying the add-on is not installed. Click the blue **Install & Activate** button. This will instantly install the free integration.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-2.webp)

7. Once activated, the Flutterwave settings panel will open automatically.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-3.webp)

## Step 2: Locate Your API Keys in Flutterwave

To link your store securely, you need special codes called "API Keys." You can get these directly from your Flutterwave account.

> **Note:** Flutterwave offers both Live keys (for taking real money) and Test keys (for making fake purchases to ensure your store works).

1. Open a new tab in your browser and log in to your [**Flutterwave Merchant Dashboard**](https://app.flutterwave.com/login).
2. In the left-hand menu, scroll down to the **Settings** section.
3. Under the Developers menu, click on **API keys**.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-4.webp)

4. Look for the section labeled **V3 API keys** (Make sure you are viewing the "Test API Keys" if you are setting up a test environment, or "Live API Keys" for your actual store).
5. You will see a **Public key**, **Secret key**, and **Encryption Key**.
6. Use the Copy buttons next to each key. Leave this browser tab open, as you will need it again.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-5.webp)


## Step 3: Connect the Keys to FluentCart

Now, switch back to your WordPress dashboard to paste the keys you just copied.

1. On the FluentCart Flutterwave Settings page, toggle the **Payment Activation** switch (at the top right) to turn it on.
2. Choose either the **Live credentials** or **Test credentials** tab, depending on which keys you copied from Flutterwave.
3. Paste your keys into the correct boxes:
    * **Test/Live Public Key**
    * **Test/Live Secret Key**
    * **Webhook Secret Hash:** This is a security feature. You need to create your own unique, secure password or phrase here (for example: `my_store_secure_hash_2026`). Write this exact phrase down or copy it, because you must give this exact same phrase to Flutterwave in the next step.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-6.webp)

## Step 4: Configure Webhooks (Crucial Step)

**What is a webhook?** A webhook is how Flutterwave "talks" to your store. When a customer finishes paying, Flutterwave uses the webhook to silently tell FluentCart, "The payment was successful, you can mark this order as Processing!" If you skip this step, orders will not update automatically.



1. Still on the FluentCart settings page, look right below the Secret Hash field. You will see a **Webhook URL** (it looks like a long web link starting with `http://...`). Click the small copy icon next to it.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-webhook.webp)

2. Go back to your open Flutterwave Dashboard tab.
3. In the left-hand menu under Developers, click on **Webhooks**.
4. Paste your copied link into the **URL** field.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-7.webp)

5. In the **Secret hash** field, type or paste the exact same password/phrase you created in Step 3.
6. Under **Webhook preferences**, it is highly recommended to check all of these boxes:
    * Receive webhook response in JSON format
    * Enable webhook retries
    * Enable v3 webhooks
    * Enable resend webhook from the dashboard
    * Add meta to webhook
7. *(Optional)* If you want FluentCart to know if a payment failed or was refunded, click **View** on "Webhook preferences with custom url" and paste the exact same Webhook URL into the **Enable webhook for failed transactions** and **Enable webhook for refunds** fields.
8. Click the orange **Save** button in Flutterwave.

![Flutterwave](/guide/public/images/payments-checkout/flutterwave/flutterwave-8.webp)

## Step 5: Save and Test Your Store

1. Return to your FluentCart Dashboard one last time.
2. Click the **Save Settings** button at the very bottom right corner.

You are all set! We highly recommend keeping your store in Test Mode first. Once confirmed, swap out your Test Keys for your Live Keys to start accepting real payments.

> **⚠️ Important: Server Configuration Required**
> 
> To ensure webhooks are delivered successfully, you may need to whitelist Flutterwave on your server.
> * Ensure your server firewall or security plugins allow incoming requests from Flutterwave.
> * If using a WAF (Web Application Firewall) or security plugin, whitelist Flutterwave's webhook domain.
> * Check your server error logs if webhooks are failing to reach your site.