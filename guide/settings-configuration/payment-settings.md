# Payment Settings

The **Payment Settings** screen in FluentCart lets you set up how your store handles payments. You can configure payment gateways, customize checkout options, and manage transaction settings from this section.


## Accessing Payment Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2.  Click on the **"Payment Settings"** tab.

    <!-- ![Screenshot of Payment Settings Tab](@mages/settings-configuration/payment-settings-tab.png) -->

## Configuration Options

### 1. Payment Gateways

* **Enable/Disable Gateways:** Toggle switches to activate or deactivate specific payment gateways.
* **Gateway Settings:** Configure API keys, test modes, and other gateway-specific settings.
* **Available Gateways:**
    * Stripe
    * PayPal
    * Cash on Delivery
    * Other integrated payment methods

### 2. Checkout Settings

* **Checkout Page:** Select which page will serve as your checkout page.
* **Checkout Fields:** Customize which fields appear during checkout.
* **Order Notes:** Enable/disable customer order notes.
* **Terms & Conditions:** Link to your terms and conditions page.

### 3. Transaction Settings

* **Currency:** Set your store's primary currency.
* **Currency Position:** Choose where the currency symbol appears (before or after the amount).
* **Decimal Separator:** Set the character used for decimal points.
* **Thousand Separator:** Set the character used for thousand separators.
* **Number of Decimals:** Set how many decimal places to display.

## Saving Your Settings

After making any changes to your Payment Settings, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

## Available Payment Gateways

On this screen, you will see a list of all available payment gateways. Each gateway is displayed with its activation status and a brief description. You can click the **"Manage"** button next to each to configure its specific settings. 

* **Stripe:** 
    * **Description:** Stripe's payments platform lets you accept credit cards, debit cards, and popular payment methods around the world all with a single integration. 
    * **Status:** Typically shown as "Active" if enabled. 
    * **Management:** Click "Manage" to access detailed [Stripe Settings](/payments-checkout/connecting-payment-gateways/stripe-settings) for configuration. 
* **PayPal:** 
    * **Description:** PayPal is the faster, safer way to send and receive money or make an online payment. 
    * **Status:** Typically shown as "Active" if enabled. 
    * **Management:** Click "Manage" to access detailed [PayPal Settings](/guide/payments-checkout/connecting-payment-gateways/paypal-settings) for configuration. 
* **Cash on Delivery (COD):** 
    * **Description:** Allows customers to pay with cash upon delivery of their order. 
    * **Status:** Typically shown as "Active" if enabled. 
    * **Management:** Click "Manage" to access [Cash on Delivery Settings](/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings) for configuration. 

:::info Get Started or Create Account
For online payment gateways like Stripe and PayPal, you may need to "Get started or create a merchant account to accept payments" if you don't already have one. 
:::

