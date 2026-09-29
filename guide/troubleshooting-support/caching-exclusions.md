# Caching and Optimization Exclusions

You don't need to disable caching across your whole website to use FluentCart. Keep caching on for your static and public pages, and add a few targeted exclusions so each shopper always sees their own cart and can finish checkout without errors.

This guide covers two different kinds of settings, and it helps to keep them apart:

* **Page cache exclusions:** Rules that stop your caching plugin, host, or CDN from saving and reusing a page's HTML. These are set by URL, cookie, or request.
* **Script optimization exclusions:** Rules that stop an optimization tool from minifying, combining, delaying, or deferring specific JavaScript files. These are set by script handle or file name, not by URL.

## Find Your Cart and Checkout Pages

Before adding any rules, confirm which pages your store uses. Go to **FluentCart Pro > Settings** and open the **[Pages Setup](/guide/settings-configuration/pages-setup)** tab. The **Cart Page** and **Checkout Page** selected there are the pages you'll exclude.

::: info
Use the actual URL of each assigned page. FluentCart creates `/cart/` and `/checkout/` by default, but WordPress may have given your page a different slug (for example `/checkout-2/`).
:::

## Page Cache Exclusions

Add the following rules in your caching plugin, hosting cache panel, or CDN. Look for options such as "Never cache URLs", "Exclude pages", "Never cache cookies", or "Bypass cache".

### 1. Exclude the Cart and Checkout Pages

Add your **Cart Page** and **Checkout Page** URLs to the "never cache" list. Both pages are built for the current shopper: they show that shopper's items, totals, applied coupons, and checkout details.

### 2. Don't Cache Checkout URLs Containing `fct_cart_hash`

Buy-now buttons, modal checkout, and some payment flows send the shopper to a checkout URL that identifies their cart, like this:

```text
/checkout/?fct_cart_hash=...
```

Exclude any URL containing:

```text
fct_cart_hash
```

Also make sure your cache doesn't ignore or strip this query string. FluentCart needs it to load the correct cart.

### 3. Don't Cache Cart Output on Other Pages

The cart drawer (the side cart and cart count) appears on every page of your store. Once a shopper adds a product, their cart items are included in the page itself, including product and shop pages. If those pages are served from a shared cache, the side cart and the checkout can disagree.

To keep public pages cached while protecting shoppers who have a cart, bypass the cache when this cookie is present:

```text
fct_cart_hash
```

FluentCart sets this cookie when a visitor adds their first product to the cart. Visitors without a cart still receive cached pages.

### 4. Bypass the Checkout AJAX Request

The cart, coupons, shipping options, and checkout summary update in the background through one AJAX request. Make sure requests where:

```text
action=fluent_cart_checkout_routes
```

are never cached. WordPress already marks `admin-ajax.php` responses as not cacheable, so most caching plugins skip them automatically. This rule matters mainly for server or CDN rules that cache everything, including query-string requests.

### 5. Keep Logged-In Users Uncached

Most caching tools skip logged-in users by default. Leave that setting on. A logged-in customer's cart and saved checkout addresses are tied to their account, so their pages should not come from a shared cache.

## Script Optimization Exclusions

These rules don't control page caching. They tell your optimization tool which FluentCart scripts to leave alone when it minifies, combines, delays, or defers JavaScript.

Most FluentCart scripts load as JavaScript modules (`type="module"`), and several of them load shared files at runtime. Combining them with other scripts or changing how they load can stop the cart or checkout from working.

Some tools ask for the **script handle** and others for the **file name**. The HTML element ID is the handle plus `-js` (for example, `fct-checkout` prints as `id="fct-checkout-js"`).

### Cart and Checkout Scripts

Exclude these on every store, since they run the cart and checkout.

| Handle | File | Loads on |
|---|---|---|
| `fluent-cart-app` | `FluentCartApp.js` | Every front-end page (cart drawer and add to cart) |
| `fluent-cart-fluentcart-toastify-notify-style` | `toastify-js-1.12.0.js` | Every front-end page (cart notifications) |
| `fct-checkout` | `FluentCartCheckout.js` | Checkout page, when the cart has items |
| `fct-orderbump` | `orderbump.js` | Checkout page, when the cart has items |

### Product and Shop Page Scripts

Exclude these if your optimization tool also processes product and shop pages. They handle variation selection, add-to-cart buttons, image zoom, and shop filters.

| Handle | File | Loads on |
|---|---|---|
| `fluent-cart-single-product-page` | `xzoom.js` | Single product pages (image zoom) |
| `fluent-cart-single-product-page_1` | `SingleProduct.js` | Single product pages (variations and add to cart) |
| `fluent-cart-single-product-page_2` | `Reviews2.js` | Single product pages (reviews) |
| `fluent-cart-product-card-js` | `product-card2.js` | Pages that show product cards |
| `fluent-cart-fluentcart-product-page-js` | `ShopApp.js` | Shop and product listing pages |
| `fluent-cart-fluentcart-product-filter-slider` | `nouislider-15.7.1.min.js` | Shop pages with the price filter |
| `fluentcart-single-product-js` | `SingleProduct.js` | Shop and product listing pages |
| `fluentcart-zoom-js` | `xzoom.js` | Shop and product listing pages |

### Other Scripts

These only apply in specific situations:

* **`fluentcart-customer-js`:** Loads only on the Customer Profile (account) page. Exclude it if that page misbehaves after optimization. It doesn't affect the cart or checkout.
* **`cloudflare-turnstile`:** Loads on the checkout only when the [Cloudflare Turnstile](/guide/integrations/cloudflare-turnstile-integration) integration is active and a site key is saved. If you don't use Turnstile, you can skip it.
* **Payment gateway scripts:** Scripts for payment methods such as Stripe load only on the checkout, and only for the methods you've enabled. FluentCart already marks them with `data-no-optimize="1"` and `data-cfasync="false"`, which many optimization tools respect automatically. If your tool ignores these attributes and the payment form doesn't appear, exclude your payment provider's scripts in the same way.

## Signs of a Caching Problem

The following symptoms usually point to a caching or optimization rule. After changing any rule, clear every cache layer (plugin, server, and CDN) before testing again.

* **The side cart shows the latest item, but checkout shows an older cart:** Check the cart and checkout page exclusions, the `fct_cart_hash` URL rule, and the `fct_cart_hash` cookie bypass.
* **The checkout URL contains `fct_cart_hash`, but the page looks outdated:** The checkout URL is being cached. Exclude URLs containing `fct_cart_hash`.
* **Coupons or the checkout summary behave differently in a private window:** This can mean a cached page or cached request is being served. Review the page cache exclusions above.
* **"Invalid nonce" errors when adding to cart or applying a coupon:** Pages carry a WordPress security token that expires after 12 to 24 hours by default. If your cache keeps pages longer than that, clear the cache or shorten how long pages stay cached.
* **The checkout form, order bump, or payment form doesn't load:** Check your browser console for JavaScript errors, then review the script optimization exclusions.

With these exclusions in place, your store keeps the speed of page caching while every shopper sees their own cart at checkout.
