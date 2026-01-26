# Instant Modal Checkout

FluentCart's **Instant Checkout** feature is designed to help you sell products faster by cutting out the middleman. Instead of forcing customers to go through a "Cart" page and then a "Checkout" page, this feature opens a secure payment window (a popup or "modal") right where the customer is.

By removing these extra steps, you make it much easier for customers to buy, which leads to fewer abandoned carts and more successful sales.

## How it Works

When Instant Checkout is active, clicking a **Buy Now** button won't take the customer to a new page. Instead:

1.  **A sleek payment window** pops up instantly.
2.  **The customer enters their details** and picks a payment method.
3.  **The purchase is completed** without ever leaving the product page.


![Instant Modal Checkout](/guide/public/images/store-management/instant-modal-checkout/fluentcart-instant-checkout.gif)

---

## Implementation Method 1: Using Custom Code (The Snippet Way)

If you want to enable this feature across your entire store or for all standard "Buy Now" buttons, you can use a unified code snippet. You can add this to your theme's `functions.php` file or use a plugin like **FluentSnippets**.

### Configuring the Feature

Copy and paste the following code to enable the modal and define your allowed payment methods:

```php
// 1. Enable the "Modal" (popup) checkout functionality
add_filter('fluent_cart/enable_modal_checkout', '__return_true');

// 2. Define which payment gateways appear in the popup
add_filter('fluent_cart/modal_checkout/filter_active_payment_methods', function($methods) {
    return ['stripe', 'paypal', 'offline_payment'];
}, 10, 1);
```


### Understanding the Parameters

- **`fluent_cart/enable_modal_checkout`**: This filter acts as a master switch. Returning `true` tells FluentCart to intercept "Buy Now" clicks and open the popup instead of redirecting to the checkout page.

- **`fluent_cart/modal_checkout/filter_active_payment_methods`**: This filter allows you to whitelist specific gateways for the popup.

- **`$methods`**: An array containing the default payment methods.

- **The Return Array `['stripe', 'paypal', 'offline_payment']`**: You can modify this list to include only the gateways you want. For example, if you only want Stripe, change it to `['stripe']`.

Once saved, your shop is ready for instant purchases!

![Instant Modal Checkout](/guide/public/images/store-management/instant-modal-checkout/fluentcart-instant-checkout-1.webp)

## Implementation Method 2: The Gutenberg Block (The No-Code Way)

If you prefer building your pages visually using the WordPress Block Editor (Gutenberg), you can enable Instant Checkout for specific buttons without touching any code.

### How to set it up:

1. **Edit your page**: Open the post or page where you want the button.

2. **Add the Block**: Click the (+) icon and search for the Product Button block.

3. **Open Settings**: Click on the button block you just added to select it. On the right side of your screen, you will see the Block Settings panel.

4. **Enable the Checkbox**: Look for the section labeled **Enable Instant Modal Checkout** and simply mark the checkbox.

5. **Select Product**: Select the product for the button by clicking on the **Select Product** button.

This specific button will now trigger the instant checkout popup for the product you've selected.


![Instant Modal Checkout](/guide/public/images/store-management/instant-modal-checkout/instant-chekout-modal.webp)

> ⚠️ **Important Reminder**  
> For Instant Checkout to work, you must first have your payment gateways (like Stripe or PayPal) set up and active. You can check this by going to **FluentCart Settings > Payment Settings**. If your gateways aren't active, the pop-up won't be able to process payments!