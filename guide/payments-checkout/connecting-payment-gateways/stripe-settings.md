# Stripe Settings

Stripe is a powerful platform that allows you to accept credit cards, debit cards, and various other payment methods globally through a single integration.

1.  Go to the **Payment Settings** option, locate **"Stripe"** and click the **"Manage"** button next to it.
2.  This will open the **Stripe Settings** screen.

    ![Screenshot of Stripe Settings Page](/guide/public/images/payments-checkout/stripe-settings.png)

3.  **Test Mode Warning:** If your store is in Test mode, a banner will remind you: "Your Store is in Test mode, Change Store's 'Order Mode' to 'Live' and update related settings to enable Live payment !!" This is crucial to switch to live mode for real transactions.
4.  **Connect Your Stripe Account:**
    * Enter your **Test credentials** and **Live credentials** (API keys) obtained from your Stripe Dashboard.
    * Click **"Connect with stripe"** to initiate the connection process with your Stripe account.
5.  **Configure Webhooks:** Webhooks are vital for FluentCart to receive real-time updates on your payments from Stripe.
    * **Webhook URL:** The exact URL you need to use will be displayed (e.g., `https://temp.xcloudon.com?fct_payment_listener=1&method=stripe`).
    * **Instructions:** Follow these steps to configure webhooks in your Stripe account:
        1.  Go to **Developers > Webhooks** in your Stripe account.
        2.  Under "Select events", choose **"Select all events"**.
        3.  Click **"Webhook endpoint"**.
        4.  Enter the **Webhook URL** provided by FluentCart into the **Endpoint URL** field to complete the setup.

6.  **Payment Activation:** In the top right corner of this page, ensure the Stripe **Payment Activation** option is "Active".
7.  Click the **"Save Settings"** button to apply your changes. 
