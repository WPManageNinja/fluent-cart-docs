# Authorize.net Settings

Authorize.net is one of the most trusted payment gateways, allowing you to securely accept credit cards, debit cards, and e-checks (ACH). Integrating it with FluentCart provides your customers with a professional and reliable checkout experience.

This guide provides a step-by-step walkthrough to connect your Authorize.net account, configure your checkout appearance, and set up webhooks for automated order processing.

::: info
Authorize.net requires **FluentCart Pro**.
:::

## Step 1: Accessing Authorize.net Settings

First, you need to locate the integration settings within your WordPress site.

1.  Navigate to **FluentCart Pro > Settings** from your WordPress sidebar.
2.  Select the **Payment Settings** tab from the sidebar.
3.  Scroll down to find **Authorize.net** and click the **Manage** button.

![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-1.webp)

## Step 2: Obtain API Credentials from Authorize.net

To connect your store, you need to retrieve four specific keys from your Authorize.net Merchant Interface.

1.  Log in to your [**Authorize.net Dashboard**](https://login.authorize.net/).
2.  Go to the **Account** tab in the main navigation.
3.  Click on **Account and API Settings** (located under the Account section).
4.  Select **API Credentials and Keys**.

![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-2.webp)


**Collect your Keys:**

* **API Login ID:** Copy the API Login ID displayed on this page.
* **Transaction Key:** Select "Generate New Transaction Key," click **Submit**, and copy the generated value.
* **Signature Key:** Select "Generate New Signature Key," click **Submit**, and copy it.
* **Public Client Key:** Click the "Generate New Public Client Key" button and copy the resulting string.

![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-3.webp)

## Step 3: Configure Credentials in FluentCart

Now, return to your WordPress site to input the credentials you just gathered.

1.  **Choose Your Mode:**
    * **Test credentials:** Use this tab first to perform test transactions without using real money.
    * **Live credentials:** Switch to this tab once you are ready to go live.
2.  **Enter the Keys:** Paste the **API Login ID**, **Transaction Key**, **Client Key**, and **Signature Key** into their respective fields.
3.  **Enable e-Check (ACH):** If you want customers to pay directly via their bank accounts, check the **Enable e-Check (ACH)** box.
4.  **Customize the Checkout UI:**
    * **Authorize.Net checkout Form Button Text:** Change the text on the button inside the Authorize.net popup (default placeholder "Pay now").
    * **Authorize.Net Checkout Form Header Text:** Set a custom title for the payment popup (default "Enter Payment Details").
    * **Fluent Cart Checkout Button Text:** This is the text for the main button on your checkout page (default "Place Order").
    * **Button Background Color** (default #0F4B8D) and **Button Hover Color** (default #0d3d75): Use the color pickers to match the buttons to your website's branding.
5.  **Enable Debug Logging:** Log Authorize.Net API interactions for troubleshooting.

![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-4.webp)

## Step 4: Configure Webhooks

Webhooks are critical for communication. They allow Authorize.net to notify FluentCart the moment a payment is successful, failed, or a subscription is renewed.

1.  **Copy the Webhook URL:** On the FluentCart Authorize.net settings page, locate the **Webhook URL**. It is your site's home URL (for example, `https://your-site.com/`). Click the copy icon.
2.  **Add Webhook in Authorize.net:**
    * In your Authorize.net dashboard, go to **Account > Webhook Notifications > Webhooks**.
    * Click the **+ Create a webhook notification** button.

![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-5.webp)

3.  **Fill in Webhook Details:**
    * **Name:** Give a name to your Webhook like "FluentCart Webhook."
    * **Endpoint URL:** Paste the URL you copied from FluentCart.
    * **Status:** Ensure this is set to **Active**.
4.  **Select Events:** Check the boxes for the following recommended events:
    * `net.authorize.payment.authcapture.created`
    * `net.authorize.payment.fraud.approved`
    * `net.authorize.payment.fraud.declined`
    * `net.authorize.payment.void.created`
    * `net.authorize.payment.refund.created`
    * `net.authorize.customer.subscription.cancelled`
    * `net.authorize.customer.subscription.terminated`
    * `net.authorize.customer.subscription.suspended`
    * `net.authorize.customer.subscription.failed`
    * `net.authorize.customer.subscription.updated`
    * `net.authorize.customer.subscription.expired`
    * `net.authorize.customer.subscription.expiring`
5.  Click **Save** to finalize.

<!-- TODO(screenshots): authorize-payment-method-6.webp is outdated: only 8 events are ticked; retake with the 4 added subscription events (Failed, Suspended, Terminated, Updated) also ticked, 12 in total. Update later. -->
![Authorize.net Settings](/images/payments-checkout/authorize.net/authorize-payment-method-6.webp)

## Step 5: Activation and Final Save

* **Payment Activation:** Look for the toggle at the top right of the FluentCart Authorize.net settings page. Switch it to **ON**.
* **Save Settings:** Click the **Save Settings** button at the bottom right.