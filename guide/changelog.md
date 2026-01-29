# Changelog
Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in FluentCart.

## FluentCart v1.3.9
*Released on January 28, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds Mercado Pago gateway (one-time payments)
• Adds Ghost product checkout
• Adds Gutenberg block: Add to Cart
• Adds Shortcode [fluent_cart_checkout_button]
• Adds Shortcode [fluent_cart_add_to_cart_button]
```

```markdown [🚀 Improvements]
• Improves security
```

```markdown [🐞 Bug fixes]
• Fixes IPN issues for some third-party gateways
• Fixes Dashboard styling issues
```

:::

## FluentCart v1.3.8
*Released on January 23, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds Instant checkout feature
• Adds Product Button block (Guttenberg)
• Adds Product duplicate feature
• Adds Copy variation ID option in variation context menu
```

```markdown [🚀 Improvements]
• Improves JS file size optimization
```

```markdown [🐞 Bug fixes]
• Fixes S3 driver directory seperator issue
```

:::

## FluentCart v1.3.7
*Released on January 20, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds Support for frontend templates
• Adds Order UUID / hash filter
• Adds Stripe metadata hook
• Adds Hook for autocomplete digital orders (default enabled)
```

```markdown [🚀 Improvements]
• Improves Translation support for receipt page
• Improves Frontend loader UI
• Improves Cart item count sync between backend and UI badge
• Improves Stripe subscription price update event handling
• Improves Validation error handling and messaging
• Improves Retention report components
• Improves Checkout, product, and loader styles
• Improves Checkout field defaults and labels
• Improves Text change: "Half year" → "Six month"
```

```markdown [🐞 Bug fixes]
• Fixes Hide consent section for stripe subscription
• Fixes Security issue in license APIs
• Fixes Product variation IDs not updating in DownloadFile
• Fixes ShopApp block list view & pagination issue
• Fixes Cart icon in body setting not working
• Fixes GroupKey bug in reports
• Fixes License rendering issue on customer profile
• Fixes Checkout empty state issue
• Fixes Address validation message and input label mismatch
• Fixes Missing required symbol for "Full Name" in checkout
```

:::

## FluentCart v1.3.6
*Released on January 8, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Fixes FSE theme support
• Fixes Checkout Agree Terms and Conditions issue
• Fixes Product Min-Max pricing issue
• Fixes Buy now section position issue
• Fixes Shortcode issue in cart and checkout page
• Fixes Subscription related order issue
• Fixes Checkout page broken on Breakdance builder
```

:::

## FluentCart v1.3.5
*Released on January 6, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Cart Model caching issue fixed
```

:::

## FluentCart v1.3.4
*Released on January 6, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds Bundle products
• Adds Stripe hosted checkout
• Adds Stripe appearance customizations support
• Adds Razorpay payment gateway addon (onetime)
• Adds 100% recurring discount
• Adds Order reference to Stripe metadata
• Adds New currency Ghanaian Cedi (GHS)
• Adds Turnstile invisible captcha
• Adds Email notification for offline payment
• Adds Items information in stripe metadata
• Adds WP user creation
• Adds Subscription retention & Cohort report
```

```markdown [🚀 Improvements]
• Enhanced Development hooks to customize checkout button text
• Enhanced Translations for different modules
• Enhanced More development related hooks and modules
```

```markdown [🐞 Bug fixes]
• Fixes Double confirmation email issue
• Fixes Order bump with subscription products
• Fixes NO_SHIPPING for paypal subscription issue
• Fixes Amount precision issue for paypal
• Fixes Update button issue for affiliate in coupon
• Fixes Checkout missing company name store issue
• Fixes Conflicts with Divi-5 Builder issue
• Fixes Customer last purchase invalid date issue
• Fix Downloads handling for object-based order
• Fixes S3 empty file validation issue
• Fixes downloadable file issue and empty file visibility
• Fixes Get paypal plan api endpoints issue
• Fixes Variation View Image & Text issue for Gutenberg
```

:::

## FluentCart v1.3.2
*Released on December 2, 2025*

::: code-group

```markdown [✨ Newly Added]
• Adds Private Product Status
• Adds Authorize.net payment gateway (Pro)
• Adds Recurring discount coupon
• Adds Checkout block
• Adds Product variation customization hooks
• Adds Thank You page payment instructions
```

```markdown [🚀 Improvements]
• Updates Reports graph design
• Updates Gateway customization design
• Updates Addon gateway management for future updates
```

```markdown [🐞 Bug fixes]
• Fixes handling of zero-decimal currency for Stripe
• Fixes hookable customer profile menu & icon issue
• Fixes coupon priority issue
• Fixes coupon calculation issues
• Fixes report card design issue
• Fixes group key SQL security issue
• Fixes EU VAT renderer issue on initial load
• Fixes variation title not showing for bump product
• Fixes wrong Stripe canceled_at date
```

:::

## FluentCart v1.3.0
*Released on November 19, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introducing Paystack Payment Gateway
• Added Quarterly and Half-Yearly subscription billing intervals
• Coupons now supports email based restrictions
• Introducing REST API Doc: https://dev.fluentcart.com/restapi/
• Added new hooks and filters for developers
```

```markdown [🚀 Improvements]
• Security: Performed a paid third-party security audit (Patchstack) as part of ongoing hardening efforts
• Improved Translation support for multiple languages
• Improved Reporting performance and data accuracy
• Refreshed the checkout page design and optimized payment method re-rendering
• Better Multi-Site Support
• Improvement on Invoicing & Taxes
```

```markdown [🐞 Bug fixes]
• Bug fixes and Improvements
```

:::

## FluentCart v1.2.6
*Released on October 30, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Coupon usage database issue fixed

:::

## FluentCart v1.2.5
*Released on October 29, 2025*

::: code-group

```markdown [✨ Newly Added]
• More currency formatting options
• Multiple tax rates on checkout
• Compound tax rates calculation
• Accessibility improvements
• Payment gateway reorder for checkout page
• EU tax home country override
• Date time and number translation
• UTM reports
• Accessibility on checkout
• Gateway logo and label customization
• Order_by filter to ShopAppBlock
• SortBy Filter to ShopAppBlock
• Product Price Block support to ProductInfoBlock
• Order_paid_done hook
• More context to fluent_cart/checkout/prepare_other_data hook
• Customization Hooks in Thank You page
• Customization Hooks in checkout page
• Button style support for ShopApp Block
• Link toggle and target option to Product Title Block
• Missing translation strings
• Mollie payment gateway
```

```markdown [🐞 Bug fixes]
• Missing currency sign for new currencies
• Currency formatting issue for old thousand separator
• Subscription details for pricing type simple
• Setup fee displaying when disabled
• Tax name for AU set as “ABN”
• Buy now button style issue
• Product Excerpt style not working
• Inventory validation issue on default variation first load
• Always showing ‘in-stock’ in ShopApp and Product Single
• Quantity 10k leads to broken empty state
• JS event not calling after removing the last item
• Billing and Shipping address webhook issue
• Payment validation error message not showing
• Selected product not saving in ProductGallery and BuySection blocks
• Broken product gallery block
• Report colors issue for comparison
• Report child page navigation
• Loader not showing in product Modal
• VAT not showing in receipt
```

:::

## FluentCart v1.2.4
*Released on October 22, 2025*

::: code-group

```markdown [✨ Newly Added]
• CSS variables on cart drawer/shop page
• Product name on admin create order items
• New hooks for single product and shop page products
• New hook (fluent_cart/hide_unnecessary_decimals)
• Total on cart drawer
```

```markdown [🚀 Improvements]
• Refactor class name on frontend page
```

```markdown [🐞 Bug fixes]
• Product compare at price issue
• Variation rearrange update issue
• Console error and shipping method issue
• Validation message issue when deleting an order
• Static dollar sign appearing in price range
• Free Shipping issue that destroyed cart
• Undefined property issue on product page
• Exception property issue
• Remove force POST request validation for IPN
• Translation strings issue for all modules
• Payment method not showing issue on stripe
```

:::

## FluentCart v1.2.2
*Released on October 16, 2025*

::: code-group

```markdown [✨ Newly Added]
• Shipping zone for whole world
• New currency support for BYN, IRR, MMK
• Shipping status to order summary (Frontend Customer Portal)
• Block icons and block preview
• Currency code and currency sign on pricing of product card
• Price format setting for product card block editor
• Clearable on tax and shipping class widget
• Pro notice on upgrade path
```

```markdown [🚀 Improvements]
• Product selection modal on product card 
  block editor instead of variation selection modal
```

```markdown [🐞 Bug fixes]
• Tax calculation issue based on store state settings
• Skip Inventory not working
• Issue with category parsing '&'
• Translation issue
• Item doesn't get deleted from the cart
• Css loading issue for blocks in template editor
• Report page navigation issue
• Single Product js issue
• Input rounded issue on store address which render under then country input
• Popover text breaking issue now it is word breaks
• Color issue on ProductInventory pro icon
```

:::

## FluentCart v1.2.1
*Released on October 5, 2025*

::: code-group

```markdown [✨ Newly Added]
• Custom Fields Plugins support for Products
• Terms & Conditions checkbox in the checkout page as settings
```

```markdown [🚀 Improvements]
• Reporting
```

```markdown [🐞 Bug fixes]
• Order Confirmation issue
• Custom Integration Renderer
```

:::

## FluentCart v1.2.0
*Released on October 14, 2025*

::: code-group

```markdown [🎉 Initial Release]
• Hello World!
• The first release of FluentCart is here!
```

:::

