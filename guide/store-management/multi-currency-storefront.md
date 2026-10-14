# Multi-Currency in Your Store

When multi-currency is on, your customers browse, add to cart, and pay in the currency they chose, while every product stays priced in your base currency. This page explains what customers see, how prices stay fair during checkout, and what happens to the orders they place.

You set everything up under **FluentCart > Settings > Multi Currency**. See [Multi Currency Settings](/guide/settings-configuration/multi-currency-settings) for the rates and pricing rules this page refers to.

::: info
Multi Currency is a **Beta** feature and requires **FluentCart Pro**. If Pro is deactivated, the storefront and checkout go back to your base currency, and the currency switcher disappears. Orders already placed in another currency keep showing their own currency and amounts in your reports and order screens.
:::

## How Customers Choose a Currency

A customer can pick a currency in two ways:

* **The currency switcher:** A button in your menu or on a page that lists your currencies. See [Adding a Currency Switcher](/guide/customization-and-themes/currency-switcher) for how to add one.
* **A link:** Add `?currency=GBP` to the end of any store page address, for example `https://yourstore.com/shop/?currency=GBP`, to open it in that currency. This is handy for campaigns and for links aimed at a specific country.

FluentCart remembers the choice for 30 days, so a returning customer lands in the same currency. Customers can only choose currencies that are turned on and have a rate. If fewer than two currencies are available, the switcher stays hidden.

## What Customers See

Every price on the storefront follows the currency the customer chose. This includes the shop page, product pages, pricing tables, product filters, and the cart. The price shown is the price the cart charges, because both use the same conversion and pricing rules (adjustment, rounding, and charm pricing) you set for that currency.

![Screenshot of the same product shown in USD and then in GBP](/images/store-management/multi-currency/multi-currency-product-price.webp)

Switching currencies never compounds conversion errors. FluentCart always converts from the base price, so a customer who switches from GBP to EUR and back to GBP sees the original GBP price again.

::: info
Your product page's search engine data (Product schema) always stays in the base currency, whichever currency a visitor is browsing in.
:::

## The Cart and Checkout

A cart is priced in one currency at one locked rate. Everything on the checkout page follows that currency:

* **Products:** Each item is priced from its base price at the rate and pricing rules for that currency.
* **Coupons:** Fixed-amount coupons and a coupon's minimum purchase, maximum discount, and maximum purchase amounts are treated as base currency amounts and converted at the cart's rate.
* **Shipping:** Flat, per-class, and tiered shipping rates are converted too.
* **Tax:** Tax is recalculated whenever the cart is priced in a new currency.

![Screenshot of the checkout order summary showing prices in British pounds](/images/store-management/multi-currency/multi-currency-checkout.webp)

### Prices Stay Steady While Customers Pay

By default, a new rate is used at once: when you change a rate or its pricing rules, the next price a customer sees uses the new rate. If you want a cart to keep the price its customer was shown, set **Keep converted prices at the previous rate for up to** under **Rate changes** to a number of minutes. A cart priced before your change then keeps the previous rate for that long, so the price a customer saw is the price they pay. Once the time passes, the next change to the cart prices it again at the current rate. See [Multi Currency Settings](/guide/settings-configuration/multi-currency-settings) for the setting.

If something changes right before payment, FluentCart stops the order, reloads the checkout page with the new total, and shows a notice so the customer can review it before paying:

* **Prices were updated to today's exchange rate. Please review your order total before paying.** This appears when the rate or pricing rules changed after the checkout page loaded, or a held rate ran out, for example because the customer had the checkout open in another tab.
* **Your currency changed to GBP. Please review your order total before paying.** This appears when the customer switched currency in another tab after this page loaded. The notice names the currency the cart is now priced in.

### Payments

The payment gateway charges the customer in the currency of their cart. Make sure each gateway you use supports every currency you offer. Authorize.Net, for example, accepts only the currency of your Authorize.Net account.

## Orders, Renewals, and Upgrades

Every order keeps the currency and exchange rate it was placed at, so changing a rate later never rewrites past orders. Order items, the tax summary, subscription details, and the discount and refund dialogs on an order all show amounts in that order's own currency, even when it differs from your base currency. A subscription's renewals keep the same rate as the original order. When a customer upgrades a subscription through an [upgrade path](/guide/product-types-creation/defining-upgrade-paths), the new plan is priced in the subscription's own currency.

If you use **FluentCart Pro** features that show prices, they follow the customer's currency too:

* An [order bump](/guide/store-management/orders-management/order-bump) offer shows its price and saving in the customer's currency.
* The fixed amounts in [Dynamic Pricing](/guide/marketing-sales-tools/dynamic-pricing) rules are converted to the cart's currency.

## Reports in More Than One Currency

When your orders span several currencies, the Reports section lets you view one currency at a time or combine them all in your base currency. See [Reports Dashboard Overview](/guide/reporting-analytics/reports-dashboard-overview) for how it works.

## Working With Page Caching

FluentCart marks store pages as not cacheable for visitors who browse in a non-base currency, so a customer is not shown a saved page in the wrong currency. Visitors in your base currency still get your normal page caching. If your caching plugin or host keeps serving the wrong currency, exclude visitors with the `fct_currency` cookie from the cache.

Your customers can now shop and pay in the currency that suits them, with prices that stay consistent from the shop page to the receipt.
