# Changelog
Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in FluentCart.

## FluentCart v1.5.2
*Released on Jun 30, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds SSLCommerz payment gateway support
• Adds Product template type support for Bricks Builder
• Adds Inline variant selector in Advanced Variations group-edit summary bar
• Adds Per-variant checkboxes to scope bulk updates to selected variants only
• Adds Card update redirect flow for customer portal (Paddle and redirect-only gateways)
• Adds Dynamic extra settings fields extension point for Email Notifications
• Adds Filter fluent_cart/transaction/max_refundable_amount for gateway-level refund cap
• Improves Admin order builder to show labeled variation attributes
• Improves Tax breakdown with per-rate VAT lines across checkout, emails, PDF, and order views
• Improves EU VAT validation to work independently of reverse charge for domestic B2B
• Improves Subscription and order item names to show resolved variation attribute labels
• Improves Paddle multi currency handling
• Improves Labeled variation attributes consistently across Cart, Checkout, Customer dashboard, Emails, Invoices, PDF receipt, and admin order
```

```markdown [🐞 Bug fixes]
• Fixes Variation attribute label leaking into Authorize.Net and Mollie gateway names
• Fixes Duplicated variation titles in cart and checkout display
• Fixes Dark mode colors for alerts, inputs, icon buttons, and popover links
• Fixes Category block select border issue
• Fixes Stripe duplicate charges issue
```

:::::

## FluentCart v1.5.1
*Released on Jun 24, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Improves Advanced variations UI/UX
• Improves Inventory managements UI/UX
```

```markdown [🐞 Bug fixes]
• Fixes Schedule plugin audit issues recommended by WP Plugin Team
```

:::::

## FluentCart v1.5.0
*Released on Jun 23, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Advanced Variations with automatic combination generation, reusable attributes, swatches, smart variation selection, and bulk editing tools
• Adds Attribute Manager with reusable option sets, inline term creation, drag-and-drop sorting, and cross-tab synchronization
• Adds 8 built-in attribute sets including Color, Size, Material, Storage, Memory, Weight, Style, and Pattern
• Adds staged-save workflow with persistent save bar, discard support, and improved editing experience for complex products
• Adds guest-accessible payment links via the new {{order.payment_link}} smart code
• Adds fluent_cart/product_card/enqueue_assets hook for extending storefront product components
• Improves variation management performance, navigation, pricing tables, mobile responsiveness, admin layouts, and internationalization support
• Improves inventory integrations with enhanced stock change event handling
```

```markdown [🐞 Bug fixes]
• Fixes Variation editing, bulk update workflows, bundle synchronization, subscription stock switching, product search links, and PDF receipt tax display
• Fixes Security and stability issues with ongoing hardening across FluentCart Core and Pro
```

:::::

## FluentCart v1.4.2
*Released on Jun 18, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds EU/German withdrawal (Widerrufsbutton) compliance with public withdrawal page and two-step confirmation flow
• Adds Full order details, invoice numbers, and line items support for Authorize.net transactions
• Adds Paddle cross-currency handling support
```

```markdown [🐞 Bug fixes]
• Fixes Customer profile page issues when avatar requests are blocked by cookie banners
• Fixes Paddle currency detection during cross-currency validation
• Fixes Paddle and Authorize.net setup instructions and documentation
• Fixes Currency formatting consistency in the withdrawal admin table
• Fixes Security issues with ongoing audits and platform hardening
```

:::::

## FluentCart v1.4.1
*Released on Jun 12, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds MCP support 
• Adds Real-time cart sync across browser tabs
```

```markdown [🐞 Bug fixes]
• Fixes Duplicate database upgrade runs after plugin updates
```

:::::

## FluentCart v1.4.0
*Released on Jun 11, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds EU B2B reverse charge support across all order surfaces
• Adds Per-item tax rate breakdowns on checkout, admin, emails, PDFs, and receipts
• Adds Mixed-cart tax handling for inclusive and exclusive tax products
• Adds Per-variation tax inclusion overrides
• Adds Tax class selector for shipping overrides
• Adds City and postcode-based tax overrides
• Adds Country-specific EU VAT collection mode
• Adds Built-in tax rates for Africa, Americas, Asia, Europe, and Oceania
• Adds Tax enable/disable controls per country
• Adds Automatic tax calculation for admin-created orders
• Adds Tax setup step to the onboarding wizard
• Adds Separate price suffix labels for inclusive and exclusive taxes
• Adds Seller Tax ID in store settings
• Adds Reverse Charge (RC) badge on the Taxes admin page
• Adds `fluentcart_eu_vat_number_validate` filter for custom VAT validation
• Adds `fluent_cart/tax_collecting` filter for runtime tax control
• Adds `reset_tax` WP-CLI command
• Adds Store Digest emails with daily, weekly, and monthly schedules
• Adds Per-item coupon discounts in line meta with strikethrough display
• Adds B2B badges on admin and customer order pages
• Adds B2B purchase and reverse charge filters in orders table
• Adds Unit price rounding tooltip for 1-cent mismatches
• Adds Hash-based deep linking for settings sections
• Adds Configurable product list columns
• Adds `fluent_cart/show_admin_top_bar` filter
• Adds Bricks BuySection support with query-based product selection
• Adds Bricks product selection controls for Gallery, Content, Short Description, Stock, and Price Range elements
• Adds Bricks iframe embed support in Product Content element
• Adds Pricing Table product-per-row layout and configurable badges
• Adds Live settings propagation without page reloads
• Adds Automatic selection of the only available shipping method at checkout
• Adds Permission-based global search result visibility
```

```markdown [🐞 Bug fixes]
• Fixes Tax calculations and display issues across reverse charge, mixed carts, shipping labels, tax breakdowns, rate badges, tooltips, and coupon calculations
• Fixes Subscription currency display in billing columns
• Fixes Zero-value renewal orders appearing after subscription reactivation
• Fixes Subscription expiry race conditions, orphaned metadata, and invalid next billing dates
• Fixes Canceled subscriptions incorrectly retaining grace periods
• Fixes Missing subscription links on renewal orders and parent order fallback handling
• Fixes Payment retries being incorrectly blocked
• Fixes Stripe refund retrieval when refund data is not included in charge objects
• Fixes Paddle renewal migrations, double submissions, cancellation overlays, receipt validation, and end-of-period cancellation emails (Pro)
• Fixes Mollie mixed-cart tax calculations before payment processing (Pro)
• Fixes Checkout address priority, state validation, B2B field preservation, and country detection
• Fixes Coupon strikethrough display in modal checkout
• Fixes Coupon null reference errors when no coupons are applied
• Fixes Order currency display using store currency instead of order currency
• Fixes Fulfillment type inheritance from product variations in admin orders
• Fixes Shipping method title display on admin order details
• Fixes PDF rendering for billing names, fee summaries, and seller identity information (Pro)
• Fixes SVG logo path warnings after ZIP installation
• Fixes Webhook failures caused by 301 redirects on subdirectory installs
• Fixes Turnstile fallback handling when auto-verification fails
• Fixes NULL value rounding issues in subscription reports
```

:::::

## FluentCart v1.3.28
*Released on May 14, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Elementor widgets: Search Bar, Store Logo, Dashboard Button, and Package Description
• Adds Draggable and reorderable summary sections in the Elementor Product Info widget
• Adds Elementor Popup support for Single Product variations, gallery, and quantity
• Adds Sort By toggle for the Bricks Products Collection element
```

```markdown [⚡ Improvements]
• Improves Elementor widget grouping under the "FluentCart Product" category
• Improves 1-column checkout layout rendering in Elementor templates
• Improves LearnDash course management support
• Improves Mollie payment list currency handling
• Improves Coupon failure messages at checkout
• Improves Bricks element grouping under the "FluentCart" category
• Improves Admin menu spacing on mobile
• Improves Decimal trimming logic for tax rate formatting
```

```markdown [🐞 Bug fixes]
• Fixes Elementor Single Product widgets syncing with active variations
• Fixes Buy button state updates for active variations
• Fixes Stock badge clearing for variations without stock data
• Fixes Stock label rendering as raw markup
• Fixes Empty Elementor product widgets leaving empty wrappers
• Fixes Product-template widget visibility outside Single Product documents
• Fixes Elementor Product Info rendering and Select2 change events
• Fixes Pricing Table shortcode and block rendering with `group_by` tabs
• Fixes Single Product shortcode rendering for variations, thumbnails, and quantity
• Fixes Product description rendering with third-party shortcodes and blocks
• Fixes FSE rendering for Customer Dashboard, Product Card, Product Search, and Pricing Table blocks
• Fixes Admin receipt access on records showing not-found pages
• Fixes Search Bar widget "Same Tab" behavior
• Fixes Enter key submitting the product title form
• Fixes Bricks Product Title rendering consistency
• Fixes French overseas territory VAT mapping issue
```

:::::

## FluentCart v1.3.27
*Released on May 8, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds List/Grid view switcher and advanced product filtering for Bricks
• Adds Copy Variation ID action for simple product pricing panel
• Adds Licensing Sites, Site pages, and advanced site filtering
• Adds SubscriptionReactivated event
```

```markdown [🐞 Bug fixes]
• Fixes Order bump free-shipping checkbox issue
• Fixes Missing shortcode variables in PDF receipt emails
• Fixes Long file names overflowing receipt page download buttons
• Fixes Cart allowing mixed or multiple subscriptions
• Fixes Offline subscriptions with 100% recurring coupons issue when Subscription Activated
• Fixes Subscription reactivation after refunds
• Fixes PayPal IPN subscription handling
• Fixes Redundant admin table search requests
• Fixes Amount formatting and customer profile display in Site Detail view (Pro)
• Fixes PHP warnings from deleted/invalid store pages
• Fixes Admin menu active state style bleeding
• Fixes Bricks Builder dynamic tag name mismatch
• Fixes Authorize.net subscription issue
```

```markdown [🚀 Improvements]
• Improves Animation experience for table filters
• Improves Bricks Builder pagination rendering and performance
• Improves Product Pricing edit UX
```

:::::

## FluentCart v1.3.26
*Released on May 5, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Square Payment gateway
• Adds Private products support in discounts, coupons, and order bumps
• Adds Subscription setup fee to receipts and emails
```

```markdown [🐞 Bug fixes]
• Fixes Order/invoice dates showing previous day in profiles
• Fixes Coupon expiration timezone mismatch
• Fixes Duplicate success toast on product update
• Fixes Email preview created_at DateTime issue
• Fixes Safari chevron icon visibility issue
• Fixes Menu button and dropdown styling issues
• Fixes LearnDash course expiry resolution for users
```

```markdown [🚀 Improvements]
• Improves button feedback with visual indicators only
```

:::::

## FluentCart v1.3.23
*Released on April 28, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Subscription access end date in cancellation emails
• Adds Learndash: User specific course expiration respect to subscription/license
• Adds VAT numbers in PDF receipt address field
• Adds One click Licensed addon installer in addon page
```

```markdown [🐞 Bug fixes]
• Fixes Parse download token with ported site urls issue
• Fixes fee_total missing column issue for version upgrades
• Fixes Missing checkout info label in gateway settings
• Fixes Advance filter merge relation issue
• Fixes Timezone resolution against deprecated PHP 8.4 aliases
• Fixes Licenses package download issue for portes site urls
• Fixes Empty state rendering in dark mode for reports and dashboard
• Fixes Supports for comma decimal separator in product variant cost
• Fixes Use singular form for subscription interval units
• Fixes Close editor modal when navigating from iframe links
• Fixes Verify stock module active before inventory menu
• Fixes License status incorrectly shown as "Expired" during grace period.
• Fixes PDF custom template deletion faild issue
• Fixes Customer address update/delete permission issue
• Fixes Regular security audits and ongoing enhancements
• Fixes Activity title's route not working
```

```markdown [🚀 Improvements]
• Enhanced Paddle - allows all default emails, modifiable via filter hook
• Enhanced Adjust product-card and single-product styles
```

:::::

## FluentCart v1.3.21
*Released on April 22, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Cloudflare R2 storage
• Adds Public access management in S3
```

```markdown [🐞 Bug fixes]
• Fixes PDF template block styling issue
• Fixes Warning for orderId null in checkout issue
• Fixes PayPal checkout security to ensure pricing integrity
• Fixes SKU duplicate issue in product variation creation
• Fixes Provider badge not displaying correctly on files
• Fixes S3 file deletion behavior
```

:::::

## FluentCart v1.3.20
*Released on April 21, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds EDD migrator
```

```markdown [🐞 Bug fixes]
• Fixes Products SKU index naming consistency issue
• Fixes Allow multiple variations without SKU issue
• Fixes Bundle product title with variation title visibility in checkout
• Fixes Block editor CSS loading inside the editor iframe issue
• Fixes Related Products block inspector layout and image overflow issues
• Fixes Invoice and Packing sub-menus issue
```

:::::

## FluentCart v1.3.19
*Released on April 20, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds New UI for variation editing
• Adds Packaging support and weight attributes for products
• Adds Search support in product list via simple filters
• Adds fluent_cart/product_url_with_front filter for post types register
```

```markdown [🐞 Bug fixes]
• Fixes Pricing format in price input fields
• Fixes Saved view conflicts with filters
```

:::::

## FluentCart v1.3.18
*Released on April 15, 2026*

::::: code-group

```markdown [✨ Newly Added]
• Adds Filter hooks to manage specific emails
• Adds Permission checks for the "Save as Views" filter
```

```markdown [🚀 Improvements]
• Improves PDF download functionality on the receipt page
• Improves Turnstile CAPTCHA handling
```

```markdown [🐞 Bug fixes]
• Fixes Loading animation issue across all pages
• Fixes License expiration handling issue
• Fixes Mollie subscription issues
• Fixes Paddle email notification compliance issue
• Fixes Deprecated timezone alias handling in OrderParser
• Fixes Issue where empty SKU string instead of null
• Fixes Modal checkout visibility toggle issue
• Fixes Typos and other issues in payment gateway settings
• Fixes PDF template preview issue
```

:::::

## FluentCart v1.3.17
*Released on April 07, 2026*

:::: code-group

```markdown [✨ Newly Added]
• Adds Fees API for custom fees in checkout
• Adds Add filterable frontend asset loading context for cart bundle
• Adds Shipping method new options Include,Exclude countries
• Adds Delete all test order action inside More option (All orders page)
• Adds Visual PDF Invoice Customizer
• Adds E-Invoice (ZUGFeRD / Factur-X) with EN 16931 profiling
```

```markdown [🚀 Improvements]
• Enhanced Development Hooks / Filter experience
```

```markdown [🐞 Bug fixes]
• Fixes Stock not updated after test order deletion
• Fixes Product duplicate not working in bulk edit page
• Fixes Downloadable file edit issue
• Fixes And Improves Turnstile
• Fixes Decimal value not allowed in shipping fee
• Fixes Handles Paddle recovery link
• Fixes Checkout Summary block consolidated into a single block
• Fixes Added restrictions to product child blocks
• Fixes Pagination showing stale page number after changing per_page
• Fixes Paddle discount issue
```

::::

## FluentCart v1.3.15
*Released on March 13, 2026*

:::: code-group

```markdown [✨ Newly Added]
• Adds Schedule reminder email for payment and subscriptions
• Adds Email preview for default template
• Adds Email editor Gutenberg
• Adds Email for Subscription cancel
• Adds Subscription activity logs in subscription page
```

```markdown [🚀 Improvements]
• Enhanced EU VAT reverse experience in checkout
```

```markdown [🐞 Bug fixes]
• Fixes CRM integration missing fields phone, postcode, state
• Fixes Custom checkout discount calculation issue
• Fixes Address validation issue
• Fixes Customer first_name and last_name change update WP user data
• Fixes Order payment calculation issue on amount updates
• Fixes Timezone issue for customer email
• Fixes Modal checkout issue with billing field
• Fixes Report product thumbnail issue
```

::::

## FluentCart v1.3.14
*Released on March 04, 2026*

:::: code-group

```markdown [✨ Newly Added]
• Adds Flutterwave for FluentCart
• Adds Early Payment for installment
• Adds Bulk product import
• Adds Customizable product shortcodes
• Adds Sale badge Gutenberg block
• Adds Out of Stock badge Gutenberg block
• Adds Product description Gutenberg block
• Adds Product image CDN support
```

```markdown [🐞 Bug fixes]
• Fixes Coupon per user limit issue
• Fixes Modal checkout cart not found issue
```

::::

## FluentCart v1.3.13
*Released on February 26, 2026*

:::: code-group

```markdown [✨ Newly Added]
• Adds SKU Gutenberg block
```

```markdown [🐞 Bug fixes]
• Fixes SKU sanitization issue
• Fixes Manual payment checkout instruction issue
• Fixes Payment method settings customization issue
• Fixes Zero decimal amount issue for Japanese currency
```

::::

## FluentCart v1.3.12
*Released on February 26, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Fixes caching issue during new version upgrades
```

:::

## FluentCart v1.3.11
*Released on February 25, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds GB Blocks: Related Products, Customer Dashboard Button, Store Logo
• Adds Media Carousel Block
• Adds Elementor Widgets: Checkout, Add to Cart, Buy Now Button, Mini Cart, Products, Product Carousel, Product Categories List
• Adds Razorpay Subscription Supports
• Adds Product SKU feature
• Adds Customer LTV recalculation action
• Adds Sync order statuses action
• Adds Test Data Cleanup Tool
• Adds First Name & Last Name Field Settings
```

```markdown [🚀 Improvements]
• Improves Inventory Manager Free (Previously Pro)
• Improves New Settings UI
• Schedules security audit for all modules
```

```markdown [🐞 Bug fixes]
• Fixes Gallery Image Overflow Issue
• Fixes Subscription validity expire events issue
• Fixes Minor issues
```

:::


## FluentCart v1.3.10
*Released on February 04, 2026*

::: code-group

```markdown [✨ Newly Added]
• Adds FSE Block Theme Support
• Adds Blocks & shortcodes: Mini cart, Product Carousel, title, image
• Adds Shortcode product categories
```

```markdown [🚀 Improvements]
• Improves Guttenberg Blocks into latest version (v3)
```

```markdown [🐞 Bug fixes]
• Fixes Missing tax breakdown on renewal email
• Fixes Missing VAT info on renewal order
• Fixes Dark-light theme conflict for addons promo
• Fixes Modal checkout responsive issue
```

:::

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

