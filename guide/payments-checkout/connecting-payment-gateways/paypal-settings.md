# PayPal Settings

PayPal provides a fast and secure way for customers to send and receive money or make online payments.

1.  Go to **FluentCart > Settings > Payment Settings**, find **PayPal** and click **Manage**.
2.  This will open the **PayPal Settings** screen.

::: info
Please note that you must have a PayPal Business or Merchant account to accept payments through this integration. The following step will prompt you to log in to this account.
:::

![Screenshot of PayPal Settings Page](/images/payments-checkout/paypal-settings.webp)

3.  **Test Mode Warning:** If your store is in Test mode, a banner reminds you to switch to Live before taking real payments. You change this under **Settings > Store Settings > Store Setup > Store Mode**.
4.  **Connect Your PayPal Account:**
    Here, you don't need any API keys. Just click on the **Connect with PayPal** button. You'll then be directed to "PayPal" to log in to your account. Once logged in, you will see that your PayPal account is successfully connected with your FluentCart store.
5.  **Brand name:** *(Optional)* Enter a name to show on the PayPal checkout popup instead of your PayPal business account's name, up to 127 characters. Leave it blank to show your business account's name as usual.
6.  **Payment Activation:** Switch on the **Payment Activation** toggle at the top right.
7.  Click the **"Save Settings"** button to apply your changes. 

## Letting Customers Save Their PayPal Account

PayPal is also supported by the **Saved Payment Methods** feature in **FluentCart Pro**, alongside Stripe. It lets logged-in customers keep a PayPal account on file and pay with it in a single step next time, without being redirected to PayPal again.

Your store never stores PayPal login details. PayPal keeps the account and returns a token, which is charged only for an order the customer places or a subscription they already signed up for. Customers opt in with the save checkbox at checkout. It is unticked unless you turn on **Pre-select it at checkout** in Cart & Checkout Settings. Customers can remove a saved PayPal account whenever they want, just like a saved card.

::: info
Saving a PayPal account requires your PayPal business account to be approved for vaulting. If it is not, FluentCart automatically stops offering the save option to customers at checkout and shows an admin notice explaining why.
:::

See [Payment Methods](/guide/customer-dashboard/payment-methods) for what your customers see once this is enabled, and [Cart & Checkout Settings](/guide/settings-configuration/cart-checkout-settings) to turn the feature on.
