# SSL Commerz Settings

SSL Commerz is a popular payment gateway that allows you to accept payments securely via cards, mobile banking, and internet banking. Integrating it with FluentCart gives your customers flexible local payment options, ensuring a smooth and reliable checkout experience.

This guide will walk you through installing the SSL Commerz add-on and connecting your account to FluentCart to begin accepting payments.

## Step 1: Accessing SSL Commerz Settings

Before configuring the gateway, you need to install the specific add-on for it.

1.  Download the [SSL Commerz add-on](https://fluentcart.com/fluentcart-addons/) from the FluentCart website.
2.  Go to your **WordPress dashboard → Plugins → Add New**, **upload** the plugin file, and **activate** it.
3.  Then, go to **FluentCart Pro → Settings → Payment Settings**.
4.  Locate **SSLCommerz** in the list and click the **Manage** button.

![SSL Commerz in Fluentcart](/guide/public/images/payments-checkout/ssl-commerz/manage-1.webp)

## Step 2: Getting Your Credentials

To connect your store, you need your unique Store ID and Secret Key directly from your merchant account.

 - Log in to your [SSL Commerz dashboard](https://merchant.sslcommerz.com/?request=dTFyQWlsb2dpbjp2aWV3dTFyQWk%3D&id=dTFyQWkxdTFyQWk%3D).
 - Navigate to the **My Stores** tab.
 - **Store ID:** Locate your specific ID in the table under the **Store ID** column.
 - **Store Secret Key:** In the same table, look for the **Store Name**; this value acts as your **Secret Key**.

**Copy** both of these values so you can **paste** them into your FluentCart payment settings.

![Get the Credentials](/guide/public/images/payments-checkout/ssl-commerz/copy-credential-2.webp)

## Step 3: Configuring SSL Commerz Settings

Once you are on the SSL Commerz settings page in FluentCart, you can enter your credentials and customize how the checkout behaves. It is recommended to start in the Test credentials tab to ensure everything works before moving to live payments.

 * **Test store ID:** **Paste** the **Store ID** you copied from your **SSL Commerz dashboard**.
 * **Test store secret key:** **Paste** the **Store Name (Secret Key)** you copied from your dashboard.
 * **Checkout Type:** Choose how the payment interface is displayed to the customer.
     * **Hosted Checkout (Redirect):** Sends the customer to the secure SSL Commerz website to complete the payment.
     * **Modal Checkout (Popup):** Opens a secure payment window directly on your checkout page so the customer never leaves your site.
 * **Modal Checkout Button Settings:** If you select the Modal Checkout, you can customize the Button Text, Button Color, Hover Color, and Text Color to match your brand's design.
 * **Payment Activation:** **Toggle** this switch at the top right to turn the SSL Commerz gateway on or off for your store.

![Activation](/guide/public/images/payments-checkout/ssl-commerz/payment-activation-3.webp)

## Step 4: Setting Up the IPN/Webhook URL

To ensure FluentCart receives automatic updates when a customer completes a payment, you need to configure the IPN (Instant Payment Notification).

 1. **Copy** the **IPN/Webhook URL** from your FluentCart SSL Commerz settings page.
 2. Log in to your SSL Commerz dashboard and go back to the **My Stores** tab.
 3. Click on the **IPN Settings** link located in the Action column for your specific store.
 4. A new settings window will appear. Check the box to **Enable HTTP Listener**.
 5. **Paste** the URL you copied from FluentCart into the provided input field.
 6. Click the **Save** button to finish the setup.

![Settings Up IBN/Webhook](/guide/public/images/payments-checkout/ssl-commerz/setup-webhook-4.webp)

## Step 5: Activate and Save

1.  **Payment Activation:** Back on the **FluentCart SSL Commerz settings** page, ensure the **Payment Activation** toggle at the top right is switched on.
2.  **Save Settings:** Click the **Save Settings** button at the bottom to finalize the setup.

Your store is now configured to securely accept payments through SSL Commerz. Giving customers the choice to pay via their preferred mobile wallet or bank transfer reduces checkout friction and helps lower cart abandonment rates.
