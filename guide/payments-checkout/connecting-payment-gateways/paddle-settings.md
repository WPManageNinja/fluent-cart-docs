# Paddle Settings

Paddle is an all-in-one payment solution that simplifies selling globally by handling payments, sales tax, and compliance for you. By connecting Paddle with FluentCart, you can offer your customers a seamless checkout experience with a wide range of payment methods.

This guide will walk you through the entire process of connecting your Paddle account to FluentCart.

::: info
Paddle requires **FluentCart Pro**. Without Pro, the Paddle page in Payment Settings shows an upgrade prompt instead of the settings.
:::

## Step 1: Activate Paddle in FluentCart

 1. First, you need to enable **Paddle** as a payment method in your store.
 2. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
 3. Click on the **Payment Settings** tab.
 4. You will see a list of available payment gateways. Find Paddle and click the **Manage** button next to it.

This will take you to the main Paddle settings page, where you will configure the entire integration.

   ![Screenshot of Activate Paddle in FluentCart](/images/payments-checkout/paddle-payment/activate-paddle.webp)


## Step 2: Configure Paddle Settings

On this page, you need to provide your Paddle API credentials and customize the checkout experience.

First, enable the payment gateway by toggling the **Payment Activation** switch at the top right.
Here's a breakdown of the available settings:

* **Test/Live Credentials:** You can switch between Test credentials and Live credentials. It's recommended to start with the test mode to ensure everything is working correctly before accepting real payments.
* **Sandbox/Live API Key:** Enter your API Key from your Paddle dashboard.
* **Sandbox/Live Client Token / Public Key:** Enter your Client Token or Public Key from Paddle (optional; used for the on-page Paddle checkout).
* **Sandbox/Live Webhook Secret:** Enter your Webhook Secret Key. You'll get this when you set up the webhook in your Paddle account (see next step).

To find your API Keys and Client Token, log in to your [Paddle account](https://login.paddle.com/login) and navigate to the **Developer Tools → Authentication** section.

::: info
Paddle redirects customers to your receipt page after payment. If no valid receipt page is set (for example, it is a draft or deleted), the Paddle settings page shows a red warning with a link to **Store Settings > Pages Setup**.
:::

   ![Screenshot of Payment Activation](/images/payments-checkout/paddle-payment/payment-activation.webp)

#### Generating API Key

Once you log in to the Paddle Dashboard, open the **Developer Tools** dropdown list from the left sidebar, and click **Authentication**. Now, go to the **API keys** section and click the **+ New API key** button.

   ![Screenshot of API key](/images/payments-checkout/paddle-payment/api-key.webp)

Now, provide the **Name** and **Description** for your API key, click the **Save** button, and your desired API key will be generated.

Here, you can see the newly generated API Key. Now, press the **Copy key** button, and your desired **API Key** will be copied.

   ![Screenshot of Copy API key](/images/payments-checkout/paddle-payment/copy-api-key.webp)

#### Generating Client Token / Public Token

Now, go to the **Client-side tokens** section and click the **+ New client-side token** button.

Now, provide the **Name** and **Description** for your client token, click the **Save** button, and your desired client token will be generated.

   ![Screenshot of Client Token/ Public Token](/images/payments-checkout/paddle-payment/client-token.webp)

Here, you can see the newly generated Client Token. Now, click the **Three-dot icon** and press the **Copy Token** button.

   ![Screenshot of Copy Client Token/ Public Token](/images/payments-checkout/paddle-payment/copy-client-token.webp)

## Step 3: Set up Webhooks in Paddle

Webhooks are essential for FluentCart to receive real-time updates about transaction statuses, subscriptions, and other events from Paddle.

1.  **Copy the Webhook URL:** First, copy the **Webhook URL** provided on your FluentCart Paddle settings page.
2.  **Create a New Webhook in Paddle:** Log in to your Paddle dashboard. Navigate to **Developer Tools → Notifications**. Next, click on the **+ New destination** button.

   ![Screenshot of Notification](/images/payments-checkout/paddle-payment/new-destination.webp)

A modal will appear. **Paste** the URL you copied from FluentCart into the **Webhook URL** field.

3.  **Select Webhook Events:** In the webhook creation form, you need to select the events that Paddle will send to FluentCart. Check the boxes for the following events:
    * `transaction.completed`
    * `transaction.paid`
    * `transaction.payment_failed`
    * `adjustment.created`
    * `adjustment.updated`
    * `subscription.created`
    * `subscription.activated`
    * `subscription.updated`
    * `subscription.past_due`
    * `subscription.paused`
    * `subscription.resumed`
    * `subscription.canceled`

After selecting the events, save the webhook by clicking the **Save destination** button. Paddle will provide you with a **Webhook Secret**. Simply copy this webhook secret for future use.

   ![Screenshot of Events](/images/payments-checkout/paddle-payment/events.webp)

#### Add Webhook Secret to FluentCart:

Go back to your FluentCart **Paddle Settings** page in WordPress. Then, **paste** the **API Key**, **Client Token / Public Key** and **Webhook Secret** into their fields.

## Customization Options

You can also customize the appearance and text of the Paddle checkout button:

* **Tax Mode:** Paddle is the Merchant of Record, so it ignores FluentCart's tax rates and its tax-inclusive/exclusive setting. Only this option decides how Paddle taxes your prices:
    * **External** (default): Tax is added on top of your price, so the customer pays price plus VAT. Choose this if your prices exclude tax.
    * **Internal:** Your price already includes tax. Paddle deducts VAT from it, so you receive less than the listed price.
    * **Use Paddle Account Settings:** Follows the default in your Paddle dashboard, which is tax-inclusive on new Paddle accounts.
* **Paddle Checkout Theme:** Select a **Light** or **Dark** theme for the Paddle checkout modal.
* **Paddle Checkout Button Text:** Customize the text that appears on the payment button (e.g., "Pay with Card", "Proceed to Paddle").
* **Button Styling:** Adjust the **Button Color**, **Button Hover Color**, **Button Text Color**, and **Button Font Size** to match your store's design.
* **Disable Webhook Verification (Test purpose only):** Leave this unchecked. Webhook verification confirms that notifications really come from Paddle. Tick the box only while debugging in test mode, never on a live store.

<!-- TODO(screenshots): customization-options.webp is outdated: it lacks the Tax Mode notice box, shows the old "Disable Webhook Verification" label without "(Test purpose only)", and has a duplicated Theme/Button Text rendering glitch; retake the Paddle settings page. Update later. -->
   ![Screenshot of Customization](/images/payments-checkout/paddle-payment/customization-options.webp)

Once you have configured all the settings, click the **Save Settings** button. Your Paddle integration is now complete!


