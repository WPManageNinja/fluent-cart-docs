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

### Hide Billing Fields for Zero-Total Checkouts

For a free webinar or another checkout where no payment is required, you can hide the billing-address fields when the cart total is zero. The second filter removes validation errors for the same fields so customers can complete checkout without entering a billing address.

```php
<?php

/**
 * Hide billing-address fields for zero-payment checkouts.
 */
add_filter(
    'fluent_cart/checkout_renderer/billing_fields',
    function ($fields, $data) {
        $cart = $data['cart'] ?? null;

        if ($cart && $cart->isZeroPayment()) {
            return [];
        }

        return $fields;
    },
    10,
    2
);

/**
 * Remove billing-address validation errors for zero-payment checkouts.
 */
add_filter(
    'fluent_cart/checkout/validate_data',
    function ($errors, $data) {
        $cart = $data['cart'] ?? null;

        if (!$cart || !$cart->isZeroPayment()) {
            return $errors;
        }

        $addressFields = [
            'billing_country',
            'billing_state',
            'billing_address_1',
            'billing_address_2',
            'billing_city',
            'billing_postcode',
            'billing_phone',
        ];

        foreach ($addressFields as $field) {
            unset($errors[$field]);
        }

        return $errors;
    },
    10,
    2
);
```

Both filters check `$cart->isZeroPayment()`, so billing fields and their validation remain unchanged for checkouts that require payment.

### Control Whether Stripe Is Asked to Store a Card

When a customer pays with Stripe, FluentCart decides whether to ask Stripe to keep the card on file for later. This filter lets you override that decision, which is useful if you want saved cards on subscription checkouts but never on plain one-time purchases.

The filter receives the current value and a context array containing `data` and `has_subscription`. Return `on_session` or `off_session` to have the card stored, or a falsy value to leave it unstored.

```php
<?php

/**
 * Only let Stripe store a card when the checkout includes a subscription.
 */
add_filter(
    'fluent_cart/stripe/client_setup_future_usage',
    function ($setupFutureUsage, $context) {
        if (empty($context['has_subscription'])) {
            return null;
        }

        return $setupFutureUsage;
    },
    10,
    2
);
```

::: info
Stripe rejects a payment when the value the card element was built with does not match the one sent at confirmation. Keep the logic here deterministic, so the same checkout always produces the same result, rather than depending on anything that can change between the two requests.
:::

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

## Product Pricing

### Add a Suffix Next to Prices

Use the `fluent_cart/product/price_suffix_atts` filter to print a short note after a price, such as "incl. VAT" or "per seat". Return your text and FluentCart renders it in a `fct_price_suffix` span next to the price.

```php
add_filter('fluent_cart/product/price_suffix_atts', function ($suffix, $context) {
    return 'incl. VAT';
}, 10, 2);
```

The `$context` array gives you `product`, `variant`, and `scope`, so you can vary the suffix by product or by where the price is being shown. Returning an empty string prints nothing.

::: info
If your tax settings already display a tax suffix, FluentCart sets one for you and your filter runs afterwards, so whatever you return wins. See [Tax Configuration and Classes](/guide/tax-&-duties/configuration-and-classes) for the built-in tax display options, which cover most stores without any code.
:::

## Attribution

### Preserving Campaign Attribution Across Multiple Sites

If your store spans more than one domain, for example a marketing site that sends buyers to a separate checkout domain, campaign attribution can break at the hand-off. The second site sees the first one as the referrer, so the original `utm_source` is lost and your reports credit the sale to your own site instead of the ad or newsletter that earned it.

Tell FluentCart which domains belong to you and it treats movement between them as internal navigation. Your own domains are never recorded as the referrer, and the original campaign values are carried across on the link.

```php
add_filter('fluent_cart/utm/internal_domains', function ($domains) {
    return ['shop.example.com', 'checkout.example.com'];
});
```

Add every domain in your network, including the checkout site. Matching covers the bare domain, its `www.` form, and any subdomain, so listing `example.com` also covers `shop.example.com`.

::: info
FluentCart applies no internal domains by default, so attribution behaves exactly as before until you add this snippet. Campaign values are stored in the visitor's browser for 30 days. The captured data then appears in your reports under marketing source, which you can read about in [Sales Report](/guide/reporting-analytics/sales-report).
:::
