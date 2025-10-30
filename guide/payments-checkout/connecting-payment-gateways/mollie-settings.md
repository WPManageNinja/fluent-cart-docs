# Mollie Settings

Mollie is a popular and flexible payment gateway, primarily used in Europe, that allows you to securely accept credit cards, debit cards, and various other local payment methods like ApplePay, and Bancontact.

This guide will walk you through every step of connecting your Mollie account to FluentCart.

### Step 1: Get Your API Keys from Mollie

First, you need to get your **API Key** from your Mollie dashboard. This key is like a password that allows your FluentCart store to securely communicate with Mollie.

1.  Log in to your [Mollie Dashboard](https://www.mollie.com/dashboard).
2.  In the top menu, click **Browse**. A dropdown menu will appear.
3.  Under the **Developers** heading, click on **API keys**.
4.  On this page, you will see your **Live API key** and your **Test API key**.

> **Info: Test Mode vs. Live Mode** It is highly recommended to start with your **Test API key**. This allows you to make test purchases on your store without using real money. Once you are sure the connection is working correctly, you can switch to your Live API key to begin accepting real payments.

![Mollie API Configuration](/guide/public/images/payments-checkout/mollie/mollie-2.webp)

For now, click the **Copy** button next to your **Test API key**.

![Mollie API Configuration](/guide/public/images/payments-checkout/mollie/mollie-3.webp)

### Step 2: Configure Mollie in FluentCart

Now that you have your test key, let's go back to your WordPress dashboard to paste it into FluentCart.

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2.  Click on the **Payment Settings** tab.
3.  You will see a list of available payment gateways. Find **Mollie** and click the **Manage** button.
4.  This will take you to the Mollie configuration page.

**Configure the Settings:**
* **Payment Activation:** First, ensure the **Payment Activation** toggle at the top right is switched **ON**. This makes Mollie available as an option at checkout.
* **Select Credentials Tab:** You will see two tabs: **Live credentials** and **Test credentials**. Click on the **Test credentials** tab.
* **Paste Your Key:** Paste the Test API key you copied from Mollie into the **Test API Key** field.
* **You can configure methods here:** From here you can directly visit to select Payment page of Mollie.
* **Save Settings:** Click the **Save Settings** button at the bottom of the page.

![Mollie API Configuration](/guide/public/images/payments-checkout/mollie/mollie-7.webp)

### Step 3: Go Live with Real Payments

When you are ready to start accepting real money, follow these simple steps to switch from Test to Live mode:

1.  Go back to your Mollie Dashboard and copy your **Live API key**.
2.  Return to your FluentCart Mollie settings (**FluentCart Pro > Settings > Payment Settings > Mollie**).
3.  Click on the **Live credentials** tab.
4.  Paste your **Live API key** into the **Live API key** field.
5.  Click **Save Settings**.
6.  Finally, make sure your store's main **Order Mode is set to Live** (`FluentCart Pro > Settings > Store Settings`).

Your Mollie integration is now live and ready to securely process payments for your store!