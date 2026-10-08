# Displaying Reviews on Your Store

Once reviews are enabled, your product pages start showing customer feedback on their own. If you build your own layouts, FluentCart also gives you six review blocks for the WordPress block editor and a shortcode for pages that are not built from blocks, so you can place the rating, the review list, and the **Write a Review** button exactly where they work best in your design.

## The Default Product Page

With the feature turned on, FluentCart adds a review section to your single product template automatically. You do not need to add anything for this to work.

![Screenshot of the rating summary and review list on a FluentCart product page](/images/store-management/product-reviews/review-section-storefront.webp)

Shoppers get two halves that work together:

* **The rating summary card** on the left shows the average score out of 5, the star row, how many reviews it is based on, and a bar for each star level so the spread is obvious at a glance. The **Write a Review** button sits at the bottom of the card.
* **The review list** on the right shows the reviews themselves, each with the reviewer's name, their star rating, how long ago they posted, a title, and their feedback.

Above the list, shoppers can narrow what they see with the filter chips: **All**, plus one chip per star level from **5** down to **1**. The dropdown on the right sorts the list, with four choices:

* **Newest** (the default)
* **Oldest**
* **Highest Rating**
* **Lowest Rating**

When a product has collected more reviews than your **Reviews Per Page** setting allows, the list pages through the rest.

::: info
FluentCart Pro adds two more filter chips: **With Photos** appears once photo reviews are enabled, and **Verified** narrows the list to purchase-verified reviews. Enabling helpful votes also adds a **Most Helpful** sort option. See [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes).
:::

## How Customers Write a Review

Clicking **Write a Review** opens a drawer that slides in from the side of the page. By default it shows the whole form at once, so the customer can fill it in from top to bottom:

* **How would you rate this product?:** A star selector *(Required)*. This field is left out entirely if you turned **Enable Star Ratings** off.
* **Review title:** A short summary, up to 80 characters *(Optional)*.
* **Your review:** The feedback itself, up to 1,500 characters *(Required)*.
* **Name and email:** Guests are also asked for their name and email address, and the email is marked private.
* **Photos:** Appears only when photo reviews are enabled, and the customer can leave it empty.

They finish with **Submit review**.

<!-- TODO(screenshot): the review drawer on the NotePlus product page. Needs FluentCart Pro's review assets built on cart.local, otherwise the Photos upload zone renders unstyled. -->

If you would rather walk customers through the form one step at a time, set **Field Layout** to **Steps (one at a time)** on the [Write a Review](#_5-write-a-review) or [Review Form](#_6-review-form) block. The form then shows the rating, the details, and the photos on separate steps, and the customer moves through them with **Back** and **Next**.

Customers can come back and revise what they wrote. The button changes to **Edit your review** for anyone who has already reviewed that product.

::: info
Editing an approved review sends it back to your **Pending** queue, unless **Auto-approve Reviews** is on. This stops a review from being approved as praise and then quietly rewritten into something else.
:::

## The Review Blocks

For custom layouts, the block editor gives you smaller pieces you can arrange yourself. This is useful when you want the star rating up next to the product title, or a full review section on your home page.

### Accessing the Review Blocks

To add a review block to any page, post, or template:

1.  From your WordPress dashboard, open the **page**, **post**, or **template** you want to edit.
2.  Click the **plus icon (+)** to open the block inserter.
3.  Scroll to the **FluentCart** category, or search for the block by name.
4.  Place the block where you want it in your layout.

![Screenshot of the FluentCart review blocks in the WordPress block inserter](/images/store-management/product-reviews/review-blocks-inserter.webp)

::: info
The review blocks only exist while the **Reviews** feature is switched on in your [review settings](/guide/store-management/product-reviews/review-settings). The blocks themselves are free. FluentCart Pro unlocks some of the layouts and view modes described below.
:::

### Choosing Which Product a Block Shows

Every review block that you place on its own starts with a **Product** panel, and it is the first thing to get right:

![Screenshot of the Product panel in a review block's settings with the Custom query type](/images/store-management/product-reviews/review-block-product-panel.webp)

* **Query type > Default:** The block picks up whichever product is being viewed. Use this on a single product template, where the block should adapt to each product automatically.
* **Query type > Custom:** The block always shows one specific product. A **Select Product** button appears so you can choose it. Use this on a landing page, your home page, or anywhere outside a product template.

Blocks placed inside a **Product Reviews** container do not show this panel. The container owns the product, and everything inside follows it.

### 1. Product Reviews

This is the complete package, and the quickest way to add a full review section to a custom layout. It holds the rating summary, the review list, and the **Write a Review** button, and it follows one product.

![Screenshot of the Product Reviews block selected in the WordPress block editor with the layout presets open](/images/store-management/product-reviews/product-reviews-block.webp)

The block is a container. Open the **List View** and you will find a **Rating Summary with Review** block and a **Review List** block inside it, so you can restyle either half, move them around, or drop your own blocks in beside them.

In the **Layout** panel, choose a **Layout preset** to rebuild the whole section from a ready-made arrangement. Use the tabs **All layouts**, **List**, **Grid**, **Carousel**, and **Photo** to narrow the choices. Picking a preset replaces whatever is currently arranged inside the container, and the panel shows **Custom layout** whenever you have rearranged the blocks by hand.

| Layout | Type | What it looks like |
|---|---|---|
| Classic | List | The summary card on the left and the list on the right, with the count, filter chips, sorting, and numbered pages. Free. |
| Minimal List | List | One review per row, with no header above the list and no dates. |
| Compact | List | Stars, a couple of lines, and a **Read more** link. No avatar, date, title, photos, or reply and votes footer. |
| Card Grid | Grid | Two cards to a row, with the filter and sorting above and page numbers like "Page 2 of 7". |
| Masonry | Grid | Three columns, each card as tall as its content. |
| Summary on Top | List | The average rating and star breakdown across the top, with the reviews underneath. |
| Photo Grid | Photo | Three cards to a row, each with the customer's photo across the top. Shows only reviews that have photos. |
| Photo Wall | Photo | Four photos to a row, with the stars, name, and date over the foot of each. Shows only reviews that have photos. |
| Photo Strip | Photo | A slider band of customer photos, each opening in a lightbox. Meant to sit above a full list. |
| Carousel | Carousel | Two reviews at a time, with arrows over the cards and dots below. |
| Testimonials | Carousel | Each review as a quote with the reviewer's face, name, and stars beneath. Three at a time, changing automatically. |

::: info
**Classic** is free. Every other layout needs FluentCart Pro, and choosing one without Pro shows a notice instead of applying it.
:::

### 2. Rating Summary with Review

The rating summary card on its own: the average score, the star breakdown, and a **Write a Review** button underneath. Reach for this when you want the summary and the call to action in one place, and the reviews themselves somewhere else on the page.

![Screenshot of the Rating Summary with Review block in the WordPress block editor](/images/store-management/product-reviews/rating-summary-with-review-block.webp)

* **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
* **Star Color:** Inside the card sits a **Rating Summary** block with its own **Star Color** panel, so the stars can match your brand instead of the default amber.

### 3. Review List

The customer reviews on their own, with filtering, sorting, and pagination but no summary card. Pair it with **Rating Summary with Review** when your design wants the two separated.

![Screenshot of the Review List block showing its View Mode settings in the editor](/images/store-management/product-reviews/review-list-block.webp)

The **Layout** panel controls how the reviews are arranged:

* **View Mode:** Choose **List**, **Grid**, **Masonry**, or **Slider**. **List** is free. The other three need FluentCart Pro, and without Pro the list stays a single column.
* **Reviews Per Row** (Grid and Masonry) or **Reviews Per Slide** (Slider): From 2 to 4. Narrow screens always show one at a time.

When you pick **Slider**, an extra **Behavior** panel appears:

* **Autoplay:** **Disabled**, **Always**, or **On Hover**. When autoplay is on, **Autoplay Delay (ms)** sets the time between slides.
* **Show arrows:** Turns the previous and next arrows on or off. **Arrow Size** offers **Small**, **Medium**, and **Large**, and **Arrow Placement** puts them **On the reviews**, **Beside the reviews**, or **Below the reviews**.
* **Show pagination:** Adds slider indicators, with a **Pagination Type** of **Dots**, **Fraction**, **Progress Bar**, or **Segmented**.
* **Infinite loop:** Lets the slider wrap around from the last review to the first.

#### What Each Part of the List Shows

The list is built from smaller blocks, so you can remove, reorder, and restyle each part. Open the **List View** to see them:

* **Review Count:** The "N Reviews" heading.
* **Review Filter:** The star filter chips.
* **Review Sorting:** The sort dropdown. Its **Default Sort** can be **Newest**, **Oldest**, **Highest Rating**, or **Lowest Rating**.
* **Review Pagination:** The pager. Choose **Numbers**, **Fraction**, or **Bullets**, and set **Reviews Per Page** from 1 to 50. Use **Use the store setting** to follow your store-wide **Reviews Per Page** setting again.
* **Review Item:** The card that repeats for every review. Its **Minimum rating** setting hides lower-rated reviews from the list entirely, from **All ratings** up to **5 stars only**, and the count and pages follow. Only the first **Review Item** in a list is used.

Inside a **Review Item** you can arrange the individual fields by adding, removing, or moving these blocks: **Review Author Avatar**, **Review Author Name**, **Review Rating**, **Review Verified Badge**, **Review Variation Title**, **Review Date**, **Review Title**, **Review Content**, **Review Photos**, **Review Votes**, and **Review Reply**. A field disappears from the card when you remove its block.

A few of them carry their own settings:

* **Review Rating:** A **Star Color** panel, with **Reset to default** to go back to the store's color.
* **Review Content:** **Words shown**, from 0 to 200. At 0 the whole review shows. Any other number cuts longer reviews down to that many words with a **Read more** link.
* **Review Photos:** An **Attachments** panel. **Attachments Shown** sets how many photos a review displays, and the rest sit behind a **+** that opens them in the lightbox. Choose where the **+** counter sits, then either set an **Attachment Width** and **Attachment Height** for the tiles or switch on **Full Width Attachments** to give each photo its own line. With full width on, the Pro options **Attachment As Card Background** and **Flush To Card Edges** let a photo take over the card.

### 4. Product Rating

The star rating on its own, as a compact inline element, with the number of reviews in brackets next to it. Ideal beside a product title, inside a card, or anywhere a full review section would be too much.

![Screenshot of the Product Rating block and its Visibility settings panel](/images/store-management/product-reviews/product-rating-block.webp)

* **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
* **Minimum Reviews:** Hides the rating until the product has at least this many reviews. Leave it at 0 to always show it, including five empty stars on a product with no reviews.
* **Minimum Average Rating:** Hides the rating unless the product averages at least this many stars. Half stars are allowed, and 0 shows every rating.

### 5. Write a Review

A single button that opens the review submission form. Place it anywhere you want to invite feedback.

![Screenshot of the Write a Review block showing its Button Settings and Button Text panels](/images/store-management/product-reviews/write-a-review-block.webp)

The **Button Settings** panel decides what happens when a customer clicks it:

* **Open In:** Choose **Drawer (slides in from the side)**, which is the default, or **Modal (centered on the screen)**.
* **Field Layout:** Choose **Inline (all fields at once)**, the default, or **Steps (one at a time)** to walk the reviewer through rating, details, and photos.

The button changes its label depending on who is looking at it, and the **Button Text** panel lets you write all three versions yourself:

* **New Review:** Shown when the visitor has not reviewed this product yet. The default is **Write a Review**.
* **Edit Review:** Shown when the visitor already has a review for this product. The default is **Edit your review**.
* **Logged Out:** Shown when a visitor must log in before reviewing. The default is **Log in to Review**.

::: info
The **Logged Out** label only ever appears if your **Who can leave reviews?** setting requires an account. On a store set to **Anyone**, guests go straight to the review form.
:::

### 6. Review Form

The review form printed directly on the page, with no button and no drawer. Use it on a dedicated "leave a review" page, or under your product description when you want the form always in view.

![Screenshot of the Review Form block and its Form Settings panel](/images/store-management/product-reviews/review-form-block.webp)

* **Product:** Choose **Default** to follow the current product, or **Custom** to pin the block to one product.
* **Field Layout:** Choose **Inline (all fields at once)** or **Steps (one at a time)**, exactly as on the **Write a Review** block.

## The Reviews Shortcode

Pages that are not built from blocks, such as a page made with a page builder or the classic editor, can show the same section with a shortcode. It draws the same reviews as the **Review List** block, so a page built with the shortcode and a page built with blocks look alike.

```
[fluent_cart_product_reviews]
```

On a product page, with no attributes, it shows the current product's reviews. Anywhere else, add the product's ID with the `id` attribute, which you can find in the product's list row next to its name:

```
[fluent_cart_product_reviews id="741" view_mode="grid" columns="3" per_page="6"]
```

Yes or no values accept `yes`, `no`, `true`, `false`, `1`, `0`, `on`, or `off`. An unrecognized value is ignored and the default applies.

::: info
Like the blocks, the shortcode only works while the **Reviews** feature is on. The `grid`, `masonry`, and `slider` view modes and the `media_backdrop` and `media_flush` attributes need FluentCart Pro. Without Pro the shortcode shows a single-column list.
:::

### Product and Layout

| Attribute | Values | Default |
|---|---|---|
| `id` | A published product's ID | The current product |
| `view_mode` | `list`, `grid`, `masonry`, `slider` | `list` |
| `columns` | 2 to 4, for grid, masonry, and slider | `2` |
| `per_page` | 1 to 100 | Your store's **Reviews Per Page** setting |
| `pagination` | `numbers`, `fraction`, `bullets` (the list pager, not the slider indicators) | `numbers` |
| `max_words` | 1 to 500, words shown before **Read more** | The whole review |
| `summary` | `yes` or `no`, the rating summary card | `yes` |
| `summary_position` | `side`, `top`, `cta` (only the **Write a Review** button) | `side` |
| `count` | `yes` or `no`, the "N Reviews" line | `yes` |
| `filter` | `yes` or `no`, the star chips | `yes` |
| `sorting` | `yes` or `no`, the sort dropdown | `yes` |
| `sort_by` | `created_at`, `rating` | `created_at` |
| `sort_order` | `ASC`, `DESC` | `DESC` |
| `photos` | `only`, to list just the reviews that have photos | All reviews |
| `star_color` | A hex color such as `#00009F` | `#f59e0b` |

### What Each Review Shows

Each of these takes `yes` or `no` and defaults to `yes`.

| Attribute | Shows or hides |
|---|---|
| `avatar` | The reviewer's avatar |
| `reviewer_name` | The reviewer's name |
| `date` | The review date |
| `title` | The review's title |
| `text` | The review text |
| `show_photos` | The photos attached to a review |
| `variation` | The variation chip next to the name |
| `meta` | The line of details under the name |
| `footer` | The row holding the store reply and helpful votes |
| `replies` | The **View Reply** button |
| `verified_badge` | The verified badge. When you leave it out, your store-wide **Show 'Verified Owner' Badge** setting decides. |

Three more attributes rearrange a card, and they default to `no`: `photos_first` puts the photos above the text, `rating_first` puts the stars above the name, and `badge_last` moves the verified badge after the variation.

### Photos

| Attribute | Values | Default |
|---|---|---|
| `media_visible` | How many photos to show, with the rest behind a **+**. Capped at the photo limit per review in your settings | `0` (show all) |
| `media_width`, `media_height` | Photo tile size in pixels, from 16 to 400 | `0` (the default tile size) |
| `media_full_width` | `yes` or `no`, one photo per line across the review | `no` |
| `media_more` | Where the **+** counter goes: `overlay` (on the last photo), `tile` (beside the photos), or `none` (hidden) | `overlay` |
| `media_backdrop` | `yes` or `no`, Pro: the first photo fills the card | `no` |
| `media_flush` | `yes` or `no`, Pro: the photo becomes the top of the card | `no` |

### Slider

These apply only when `view_mode` is `slider`.

| Attribute | Values | Default |
|---|---|---|
| `arrows` | `yes` or `no` | `yes` |
| `arrow_size` | `sm`, `md`, `lg` | `md` |
| `arrow_position` | `overlap`, `outside`, `bottom` | `overlap` |
| `autoplay` | `no`, `yes`, `hover` (not `true` or `1`) | `no` |
| `autoplay_delay` | 300 to 10000 milliseconds | `3000` |
| `infinite` | `yes` or `no` | `no` |
| `slider_pagination` | `yes` or `no`, to show slider indicators | `no` |
| `slider_pagination_type` | `bullets`, `fraction`, `progressbar`, `segmented` | `bullets` |

## What Shoppers See

Only approved reviews ever appear on your storefront. Pending, spam, and trashed reviews stay hidden, and they are left out of the average rating and the star breakdown too. Your replies appear underneath the reviews they answer, so customers can see that you responded.

If you build with a page builder instead, the same pieces are available as [review widgets for Elementor](/guide/customization-and-themes/elementor-review-widgets), [review elements for Bricks](/guide/customization-and-themes/bricks-review-elements), and [review modules for Divi](/guide/customization-and-themes/divi-review-modules).

Your reviews are now working for you on the storefront, showing real feedback exactly where shoppers make their decision.
