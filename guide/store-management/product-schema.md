# Product Schema for Search Results

FluentCart adds **Product schema** (JSON-LD structured data) to every product page automatically. It is a small block of hidden data that tells search engines like Google the product's name, price, availability, and ratings, so your listings can qualify for rich results such as price and star ratings under the search link.

There is nothing to switch on. The data is added to single product pages only, and it is built fresh each time a page loads, so a price change, a sold-out product, or a newly approved review shows up on the next visit.

## What the Schema Contains

Each product page carries one product entry with the details a shopper sees on the page:

* **Basics:** The product name, page link, featured image, and description. When a product has a single variation, its SKU is included too.
* **Brand:** The product's assigned [brands](/guide/product-types-creation/creating-managing-product-brand), when it has any.
* **Offers:** One offer for a single-variation product, or a price range with the lowest price, highest price, and number of options for a product with several variations. Each offer carries the store currency and its stock status, and only active variations are included. Stock status reflects real stock only when Stock Management is enabled. Otherwise every offer is shown as in stock.
* **Subscription billing:** For a subscription offer, the billing period (daily, weekly, monthly, and so on) and, for a plan with a fixed number of payments, the total length of the subscription.
* **Tax:** When tax is on, whether an offer's price already includes VAT, following the same setting and variation overrides your storefront prices use.
* **Aggregate rating:** The average star rating and the number of reviews. This appears once the product has approved reviews.
* **Reviews:** The individual reviews shown on the page, including the reviewer name, date, title, text, and star rating.

::: info
The rating and review parts follow your [review settings](/guide/store-management/product-reviews/review-settings). If **Enable Product Reviews** is off, reviews are disabled for that product, or **Show Reviews In Single Page** is off in your product page settings, only the basics and offers are added.
:::

## What Is Left Out

Search engines only accept information a visitor can actually see, so FluentCart holds back anything the page itself hides:

* Draft, pending, and password-protected products get no schema.
* Only approved reviews are included. Pending, spam, and trashed reviews never appear, and neither do store replies.
* Reviews without a star rating are included in the review count but not in the average, and they are not listed one by one.
* The list holds as many reviews as your **Reviews Per Page** setting shows, up to 20.

## Checking Your Product Pages

To confirm the schema is working, paste a product page link into Google's Rich Results Test and look for a **Product** entry with **Merchant listings** or **Review snippets**. Search engines decide on their own whether to show rich results, and it can take a while after a page is crawled.

If you use an SEO plugin that also outputs product schema, run the test once to make sure the page doesn't end up with two competing product entries.
