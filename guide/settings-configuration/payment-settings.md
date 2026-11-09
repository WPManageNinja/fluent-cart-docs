# Payment Settings

The **Payment Settings** screen in FluentCart lets you set up how your store handles payments. You can configure payment gateways, customize checkout options, and manage transaction settings from this section.


## Accessing Payment Settings

1.  Go to **FluentCart > Settings** (shown as **FluentCart Pro** when Pro is active).
2.  Click **Payment Settings** in the settings menu on the left.

<!-- TODO(screenshots): payment-settings-tab.webp is outdated: it shows a "Disabled" badge and "Coming Soon!" rows. Retake the Payment Settings list showing the current Active/Inactive badges and the Manage buttons for all gateways. Update later. -->
![Screenshot of Payment Settings Tab](/images/settings-configuration/payment/payment-settings-tab.webp)

## Configuration Options

The **Payment Settings** page lists all integrated payment providers. Each gateway card displays the provider's logo, a brief description, and its status badge, **Active** or **Inactive**. Add-on gateways that aren't installed yet show no badge. Gateways that need Pro show a crown icon on their **Manage** button when Pro isn't active.

 * **Enable/Disable Gateways:** You can quickly identify which methods are live by the status badge next to the provider name.
 * **Manage Settings:** Click the **Manage** button on any gateway to enter its specific configuration page, where you connect your account or enter API keys on the **Live credentials** and **Test credentials** tabs, and set up webhooks. Which set is used depends on your store's **Store Mode** (**Store Settings > Store Setup**); gateways have no Test Mode switch of their own.
 * **Reorder Gateways:** Use the "three-line" drag icon on the left of each gateway to change the order in which they appear to customers on your checkout page.

### Customizing How a Gateway Appears at Checkout

On any gateway's settings page, click the pencil icon next to the gateway name to open **Checkout Customization**. You can set the following:

 * **Checkout Label:** The name customers see for this payment method at checkout.
 * **Checkout Logo:** The logo shown next to the payment method.
 * **Checkout Instructions:** Text shown in the payment section at checkout.
 * **Thank you page Instruction:** Text shown on the receipt after the order is placed.

Click **Update** to save your changes.

<!-- TODO(screenshots): new UI with no image. Capture the Checkout Customization screen (pencil icon on a gateway page) showing Checkout Label, Checkout Logo, Checkout Instructions and Thank you page Instruction. Update later. -->

## Available Payment Gateways

FluentCart supports a wide range of global and regional payment processors. Some come with FluentCart, some need FluentCart Pro, and others are add-ons you install separately.

### Included in FluentCart

 * **[Stripe](/guide/payments-checkout/connecting-payment-gateways/stripe-settings):** A comprehensive platform to accept credit cards, debit cards, and popular local payment methods worldwide with a single integration.
 * **[PayPal](/guide/payments-checkout/connecting-payment-gateways/paypal-settings):** One of the most trusted ways for customers to pay via their PayPal balance, linked bank accounts, or credit cards.
 * **[Cash on Delivery (COD)](/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings):** Allows your customers to complete their purchase online and pay with physical cash upon the arrival of their order.

### Require FluentCart Pro

 * **[Paddle](/guide/payments-checkout/connecting-payment-gateways/paddle-settings):** An all-in-one payment and tax solution (Merchant of Record) that handles global payments and compliance effortlessly.
 * **[Mollie](/guide/payments-checkout/connecting-payment-gateways/mollie-settings):** A flexible payment gateway, primarily used in Europe, for accepting cards and local payment methods.
 * **[Authorize.net](/guide/payments-checkout/connecting-payment-gateways/authorizenet-settings):** A highly reliable and established payment processor designed specifically for secure credit card and e-check transactions.

### Free Add-ons

 * **[Paystack](/guide/payments-checkout/connecting-payment-gateways/paystack-settings):** A modern payment gateway that helps businesses, particularly in Africa, accept payments from anyone, anywhere in the world via credit cards, bank transfers, and mobile money.
 * **[Razorpay](/guide/payments-checkout/connecting-payment-gateways/razorpay-settings):** The leading payment gateway for businesses in India, supporting UPI, Netbanking, Cards, and Wallets.
 * **[Flutterwave](/guide/payments-checkout/connecting-payment-gateways/flutterwave-settings):** A powerful solution for businesses to accept payments across Africa via Bank Transfer, Cards, and Mobile Money.
 * **[Mercado Pago](/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings):** A widely used payment solution in Latin America that allows you to accept credit cards, debit cards, and local payment methods across multiple countries.
 * **[SSLCommerz](/guide/payments-checkout/connecting-payment-gateways/sslcommerz-settings):** A popular payment gateway for accepting payments via cards, mobile banking, and internet banking.

### Add-ons That Require FluentCart Pro

 * **[Square](/guide/payments-checkout/connecting-payment-gateways/square-settings):** Securely accept credit and debit cards through an inline checkout.
 * **[Airwallex](/guide/payments-checkout/connecting-payment-gateways/airwallex-settings):** A global financial platform for accepting payments from customers worldwide, with webhook-synced refunds, disputes, and recurring subscriptions.



:::info Get Started or Create Account
For online payment gateways like Stripe and PayPal, you may need to "Get started or create a merchant account to accept payments" if you don't already have one. 
:::

