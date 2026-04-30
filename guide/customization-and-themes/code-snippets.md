# Code Snippets

Here you'll find ready-to-use code snippets for FluentCart. These snippets help you customize and extend your store's functionality. Simply copy the code and add it to your theme's `functions.php` file or use a code snippets plugin.

## Checkout

### Hide Unnecessary Decimals

By default, FluentCart displays prices with decimal places (e.g., $10.00). If you prefer cleaner pricing without unnecessary decimals (e.g., $10 instead of $10.00), use this snippet.

<GistEmbed id="377042dacea4f547fe606210cadc971e" />

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
