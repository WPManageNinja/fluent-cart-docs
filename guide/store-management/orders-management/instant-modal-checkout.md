# Instant Modal Checkout

FluentCart's **Instant Checkout** feature is designed to help you sell products faster by cutting out the middleman. Instead of forcing customers to go through a "Cart" page and then a "Checkout" page, this feature opens a secure payment window (a popup or "modal") right where the customer is.

By removing these extra steps, you make it much easier for customers to buy, which leads to fewer abandoned carts and more successful sales.

Watch this quick video to see Instant Modal Checkout in action and learn how to set it up:

<YouTubeEmbed id="PVsZItwalCg" />

## How it Works

When Instant Checkout is active, clicking a **Buy Now** button won't take the customer to a new page. Instead:

1.  **A sleek payment window** pops up instantly.
2.  **The customer enters their details** and picks a payment method.
3.  **The purchase is completed** without ever leaving the product page.

::: warning Before You Start
Instant Checkout requires at least one active payment gateway (like Stripe or PayPal). Verify yours under **FluentCart > Settings > [Payment Settings](/guide/payments-checkout/)**. The popup cannot process payments without an active gateway.
:::

## Implementation Method 1: Using Custom Code (The Snippet Way)

If you want to enable this feature for all the standard **Buy Now** buttons FluentCart renders on your single product pages and product cards, you can use a unified code snippet. You can add this to your theme's `functions.php` file or use a plugin like **FluentSnippets**.

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

- **`fluent_cart/enable_modal_checkout`**: This filter is the switch for FluentCart's own **Buy Now** buttons (on single product pages and product cards). Returning `true` tells FluentCart to intercept those clicks and open the popup instead of redirecting to the checkout page. Buttons added via the Gutenberg block, shortcode, or page-builder widgets (Methods 2 to 4) have their own per-button toggle and don't need this snippet.

- **`fluent_cart/modal_checkout/filter_active_payment_methods`**: This filter lets you limit which gateways appear in the popup. It works as an **allow-list**: return an array of the gateway slugs you want to show. If you return an empty array (the default), all of your active gateways are shown.

- **The Return Array `['stripe', 'paypal', 'offline_payment']`**: Modify this list to include only the gateways you want. For example, if you only want Stripe, change it to `['stripe']`. Other valid slugs include `square`, `razorpay`, `paystack`, `mollie`, `paddle`, `sslcommerz`, `airwallex`, `mercado_pago`, `flutterwave`, and `authorize_dot_net`.

Once saved, your shop is ready for instant purchases!

::: info Using Bricks Builder?
FluentCart's [Bricks buttons](/guide/customization-and-themes/fluentcart-bricks-blocks) follow this global snippet. They have no per-button modal toggle, so this method is the only way to enable Instant Checkout for them.
:::

![Screenshot of the instant modal checkout popup opened from a Buy Now button](/images/store-management/instant-modal-checkout/fluentcart-instant-checkout-1.webp)

## Implementation Method 2: The Gutenberg Block (The No-Code Way)

If you prefer building your pages visually using the WordPress Block Editor (Gutenberg), you can enable Instant Checkout for specific buttons without touching any code. To learn more about the block itself, see the [Gutenberg blocks guide](/guide/customization-and-themes/using-gutenberg-blocks).

### How to set it up:

1. **Edit your page**: Open the post or page where you want the button.

2. **Add the Block**: Click the (+) icon and search for FluentCart's **Buy Now** block.

3. **Open Settings**: Click on the button block you just added to select it. On the right side of your screen, you will see the Block Settings panel.

4. **Enable the Checkbox**: Look for the section labeled **Enable Instant Modal Checkout** and simply mark the checkbox.

5. **Select Product**: Select the product for the button by clicking on the **Select Product** button.

This specific button will now trigger the instant checkout popup for the product you've selected.


![Screenshot of the Enable Instant Modal Checkout option in the Buy Now block settings](/images/store-management/instant-modal-checkout/instant-chekout-modal.webp)

## Implementation Method 3: The Shortcode

If you're placing buttons in a page builder, widget area, or anywhere shortcodes are supported, add the `instant_checkout="yes"` attribute to the checkout button shortcode:

```
[fluent_cart_checkout_button variation_id="113" instant_checkout="yes" button_text="Buy Now"]
```

Replace `113` with the variation ID of your product. The `variation_id` attribute is required, and the button won't render without it. The `instant_checkout` attribute also accepts `1`, `true`, or `on`, and you can optionally add `target` and `class` attributes. For all available attributes, see the [FluentCart shortcodes guide](/guide/customization-and-themes/fluentcart-shortcode).

## Implementation Method 4: The Elementor Widget

If you build your pages with Elementor, FluentCart's **Buy Now Button** widget can trigger the instant checkout popup as well, no code needed. In the widget's **Content Tab**, set **Enable Modal Checkout** to **Yes**. See the [Elementor widgets guide](/guide/customization-and-themes/using-elementor-widgets) for setup details.

Using **Divi** instead? FluentCart's Buy Now module for Divi has the same **Enable Modal Checkout** option. See the [Divi modules guide](/guide/customization-and-themes/fluentcart-divi-modules) for details.

---

Whichever method you choose, your customers can now complete their purchase in seconds, right where they clicked **Buy Now**.
