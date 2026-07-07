# Code Snippets

Here you'll find ready-to-use code snippets for FluentCart. These snippets help you customize and extend your store's functionality. Simply copy the code and add it to your theme's `functions.php` file or use a code snippets plugin.

## Checkout

### Hide Unnecessary Decimals

By default, FluentCart displays prices with decimal places (e.g., $10.00). If you prefer cleaner pricing without unnecessary decimals (e.g., $10 instead of $10.00), use this snippet.

```php
<?php

add_filter('fluent_cart/hide_unnecessary_decimals', '__return_true');
```

This filter removes trailing zeros from prices, so `$10.00` becomes `$10` while `$10.50` stays as `$10.50`.

### Display Custom Line Item Metadata on Checkout

Use the `fluent_cart/cart/line_item/line_meta` action to print custom metadata under each cart item in the checkout order summary. This hook runs after the product title, variant title, and child variant details are rendered, but before the line item price.

```php
add_action('fluent_cart/cart/line_item/line_meta', function ($data) {
    $item = $data['item'] ?? [];

    if (empty($item['line_meta']) || !is_array($item['line_meta'])) {
        return;
    }

    $giftMessage = $item['line_meta']['gift_message'] ?? '';

    if (!$giftMessage) {
        return;
    }

    echo '<div class="fct-custom-line-meta">';
    echo '<small>' . esc_html__('Gift message:', 'your-textdomain') . ' ' . esc_html($giftMessage) . '</small>';
    echo '</div>';
}, 10, 1);
```

The callback receives one `$data` array with the current line item rendering context:

```php
$data = [
    'item'    => $item,     // Cart item data. This is the main value to use.
    'cart'    => $cart,     // Current cart model when available, otherwise null.
    'product' => $product,  // Reserved for product data; currently may be null.
    'variant' => $variant,  // Reserved for variation data; currently may be null.
];
```

The `item` value is the reliable source for line item details. Use `$data['item']['line_meta']` when you need to show per-item details such as gift messages, engraving text, license information, booking dates, or other custom options stored with the line item.

## Customer Profile

### Add a Custom Menu Item to the Customer Profile

Use the `addCustomerDashboardEndpoint()` method to add a custom menu item to the FluentCart customer profile dashboard.

```php
<?php

add_action('init', function () {
    \FluentCart\Api\FluentCartGeneralApi::getInstance()->addCustomerDashboardEndpoint(
        'support', [
            'title' => __('Customer Support', 'fluent-cart-pro'),
            // 'render_callback' => function () {
            //     echo 'Put your text';
            // },
            'icon_svg' => '<svg style="padding: 2px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg>',
            'page_id' => 178,
        ]
    );
});
```

If you use `render_callback`, FluentCart will display the callback output for the menu item. If you want to show a specific WordPress page instead, skip the `render_callback` method and provide the `page_id`.
