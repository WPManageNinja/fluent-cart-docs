# Stripe Settings

Stripe is a powerful and globally recognized payment platform that allows you to securely accept credit cards, debit cards, and various other payment methods through a single, seamless integration.

This guide will walk you through connecting your Stripe account to FluentCart to begin accepting payments.

## Step 1: Accessing Stripe Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab.
3.  Locate **Stripe** in the list of payment gateways and click the **Manage** button next to it.

#### Step 2: Connect Your Stripe Account

The Stripe settings page allows you to connect your store in both Test and Live modes. You must select the appropriate mode before initiating the connection.

* **Test Mode Warning:** If your store is currently in Test mode, a banner will remind you to switch to Live mode for real transactions.

* **Select Credentials Mode:**
    * **Test credentials:** Select this tab if you want to connect your Stripe account in Test Mode. This is perfect for testing your checkout flow without processing real payments.
    * **Live credentials:** Select this tab when you are ready to start accepting real payments from customers.

* **Connect with Stripe:** After selecting the appropriate tab (Test or Live), click the **Connect with stripe** button. This will redirect you to Stripe's website, where you will be prompted to log in and authorize the connection with FluentCart. This is a secure process that automatically syncs your account for the selected mode.


    ![Screenshot of Stripe Settings Page](/guide/public/images/payments-checkout/stripe-settings.png)

#### Step 3: Configure Webhooks

Webhooks are essential for the integration to function correctly. They allow Stripe to send real-time notifications to your store about payment events, such as successful charges, refunds, and subscription updates.

1.  **Copy Your Webhook URL:** On the FluentCart Stripe settings page, you will see your unique **Webhook URL**. Copy this URL to your clipboard.
2.  **Configure in Stripe:**
    * Log in to your Stripe account.
    * Navigate to **Developers > Webhooks**.
    * Click **Add endpoint**.
    * Paste the **Webhook URL** you copied from FluentCart into the **Endpoint URL** field.
    * Under **Select events to listen to**, click **Select events**.
    * Select the following specific events:
        * `checkout.session.completed`
        * `charge.refunded`
        * `charge.refund.updated`
        * `charge.succeeded`
        * `invoice.paid`
        * `invoice.payment_failed`
        * `customer.subscription.deleted`
        * `customer.subscription.updated`
    * Click **Add events**, and then click **Add endpoint** to save the configuration.

#### Step 4: Activate and Save

1.  **Payment Activation:** Back on the FluentCart Stripe settings page, ensure the **Payment Activation** toggle at the top right is switched on.
2.  **Save Settings:** Click the **Save Settings** button at the bottom to finalize the setup.

Your store is now configured to securely accept payments through Stripe.