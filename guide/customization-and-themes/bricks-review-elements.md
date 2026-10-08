# FluentCart Review Elements for Bricks

The FluentCart Bricks Blocks addon includes six elements for [product reviews](/guide/store-management/product-reviews/), so you can build the rating summary, the review list, and the **Write a Review** button right inside the Bricks builder. They mirror the [review blocks](/guide/store-management/product-reviews/displaying-reviews#the-review-blocks) in the WordPress block editor, and they sit in the **FluentCart** category of the Bricks elements panel with the rest of the [FluentCart Bricks Blocks](/guide/customization-and-themes/fluentcart-bricks-blocks).

The review elements arrived in version 1.1.0 of the addon. **Enable Product Reviews** also needs to be switched on in your [review settings](/guide/store-management/product-reviews/review-settings). While it is off, the elements stay in the panel, but the canvas shows a note that the Product Reviews module is switched off, and visitors see nothing. A product with reviews turned off shows a similar note in the builder.

## Adding a Review Element

To place a review element on a page or template:

1.  Open the page or template with the **Bricks** editor.
2.  Click the plus icon (**+**) to open the elements panel, and type `review` into the search field.
3.  Click or drag the element you want onto the canvas.

![Screenshot of the Bricks elements panel filtered to the review elements](/images/customization-and-themes/bricks-review-elements/bricks-review-elements-panel.webp)

Every review element starts with the same **Product** group in its **Content** tab:

* **Product Source:** Choose **Current product** to show whichever product the page, template, or query loop is displaying. This is the right choice inside a single product template. Choose **A specific product** to pin the element to one product.
* **Product:** Appears when **Product Source** is **A specific product**. Pick the product from the searchable list.
* **Manual Product ID:** Appears when **Product Source** is **A specific product** and no product is picked above. Type a product ID, or use Bricks dynamic data such as `{post_id}` or a custom field.

When no product can be worked out, for example a **Current product** element on an ordinary page, the builder previews a product that already has approved reviews. If no product can be found at all, the canvas asks you to select a product or use the element on a product page or in a query loop. Visitors never see those notes.

::: info
Some options need FluentCart Pro. Without it they stay in the list with a **(Pro)** label, and the element falls back to the free behavior. Every element is free to use.
:::

## 1. Product Reviews

The whole review section in one element: the rating summary, the **Write a Review** button, and the review list. Use it when you want a complete section quickly, and reach for the separate elements below when you want to place the pieces yourself.

### Choosing a Layout

The **Layout** group holds the **Layout Preset** dropdown. It lists eleven ready-made layouts, the same ones the block editor offers, plus **None (use the settings below)**:

| Layout | What it looks like |
|---|---|
| Classic | The summary beside the reviews, with the count, filter chips, sorting, and numbered pages. Free. |
| Minimal List | One review per row, with no header above the list and no dates. |
| Compact | Stars, a couple of lines, and a **Read more** link. No avatar, date, title, or photos. |
| Card Grid | Two cards to a row, with the filter and sorting above and page numbers like "Page 2 of 7". |
| Masonry | Three columns, each card as tall as its content. |
| Summary on Top | The average rating and star breakdown across the top, with the reviews underneath. |
| Photo Grid | Three cards to a row, each with the customer's photo across the top. Shows only reviews that have photos. |
| Photo Wall | Four photos to a row, with the stars, name, and date over each one. Shows only reviews that have photos. |
| Photo Strip | A slider band of customer photos, each opening in a lightbox. Meant to sit above a full list. |
| Carousel | Two reviews at a time, with arrows over the cards and dots below. |
| Testimonials | Each review as a quote with the reviewer's face, name, and stars beneath. Three at a time, changing automatically. |

Picking a layout previews it on the canvas straight away. To make it stick, click **Apply Layout**, which appears once a preset is chosen. Bricks saves the page, writes the layout's choices into the element's own settings, and reloads them in the panel.

![Screenshot of the Layout Preset dropdown in the Product Reviews element](/images/customization-and-themes/bricks-review-elements/bricks-review-layout-picker.webp)

A layout is a starting point, not a lock. After it is applied, every setting below is yours to change, and your changes win. Your own tuning also survives a switch: **Columns**, **Reviews Per Page**, **Pagination**, **Default Sort**, and the slider settings carry over to the next layout if you set them yourself.

::: info
**Classic** is free. The other ten layouts are marked **(Pro)** until FluentCart Pro is active, and without Pro the section simply follows the settings below.
:::

### Content Settings

Below the layout, the **Content** tab is split into groups:

* **Rating Summary:** **Show Rating Summary** turns the summary card on or off. When it is on, **Summary Position** places it **Beside the reviews**, **Above the reviews**, or as **Button only**, and **Show Rating Breakdown** shows or hides the bars that split reviews from 5 stars to 1.
* **Write a Review Button:** **Open In** chooses **Drawer (slides in from the side)** or **Modal (centered on the screen)**. **Field Layout** chooses **Inline (all fields at once)** or **Steps (one at a time)**. Under **Button Text**, you can rewrite the three labels, **New Review**, **Edit Review**, and **Logged Out**. Leave a field blank to keep the store default.
* **Review List:** **View Mode** offers **List**, **Grid (Pro)**, **Masonry (Pro)**, and **Slider (Pro)**. **Columns** sets how many reviews sit side by side, from 2 to 4, in the Grid, Masonry, and Slider views. For Grid and Masonry, **Columns On This Breakpoint** fixes the count on the breakpoint you are editing; leave it empty and the columns drop on their own on smaller screens. **Reviews Per Page** sets the page length, and 0 follows your store-wide setting. **Pagination** chooses **Numbers**, **Fraction**, **Bullets**, or **None** (not shown for the Slider view). **Default Sort** starts the list on **Newest**, **Oldest**, **Highest Rating**, or **Lowest Rating**. **Minimum Rating** hides lower-rated reviews, from **All ratings** up to **5 stars only**. **Only Reviews With Photos** lists just the reviews that have photos, and **Review Text Word Limit** cuts longer reviews down, with 0 showing them in full.
* **Header:** Show or hide the **Review Count**, the **Filter Chips**, and the **Sort Dropdown** above the list.
* **Review Card:** Switch each part of a review on or off: **Avatar**, **Reviewer Name**, **Date**, **Verified Purchase Badge**, **Variation Reviewed**, **Review Title**, **Review Text**, **Photos**, **Meta Line**, **Footer**, **Store Reply Button**, and **Helpful Votes** (Pro, and shown only while helpful votes are on in your review settings). Three more switches rearrange the card: **Photos Before Text**, **Rating Above Reviewer**, and **Verified Badge After Date**.
* **Attachments:** **Photos Shown Before "+ More"** sets how many photos a review displays, with 0 showing them all. The **"+ More" Tile** sits **Over the last photo**, **As its own tile**, or is **Hidden**. **Full Width Attachments** gives each photo its own line, and once it is on, the Pro options **Attachment As Card Background** and **Flush To Card Edges** let a photo take over the card. **Flush To Card Edges** hides while **Attachment As Card Background** is on.
* **Slider:** Appears only when **View Mode** is **Slider**. **Show Arrows** adds the previous and next arrows. **Show Indicator** adds an **Indicator Style** of **Bullets**, **Fraction**, **Progress bar**, or **Segmented**. **Autoplay** can be **Off**, **On**, or **On, paused on hover**, with an **Autoplay Delay (ms)** when it is on, and **Loop** lets the slider wrap around.

::: info
Grid, Masonry, and Slider need FluentCart Pro. Without it, the reviews show as a single column whichever view you pick.
:::

### Style Settings

The **Style** tab restyles each part in its own group: **Rating Summary** (card, average, bars, and bar labels), **Write a Review Button**, **Review Card**, **Reviewer & Date**, **Review Title & Text**, **Stars** (including **Filled Star Color** and **Empty Star Color**), **Photos** (with **Photo Width (px)** and **Photo Height (px)**), **Store Reply Button**, **Count, Chips & Sort**, **Pagination**, and **Slider Arrows**. The **Slider Arrows** group, shown for the Slider view, also sets the **Arrow Size** (**Small**, **Medium**, or **Large**) and the **Arrow Position** (**Over the slides**, **Outside the slides**, or **Below the slides**).

## 2. Review List

Only the list of reviews, with no summary and no button. Use it together with **Rating Summary** and **Write a Review** to build a custom arrangement. It has no layout preset, but it shares the **Review List**, **Header**, **Review Card**, **Attachments**, and **Slider** groups of the **Product Reviews** element, and the same **Style** groups for the list.

Its extra strength is the **Review Row** group, which controls the review's fields one by one:

* **Review Row:** **Standard** draws the row as FluentCart draws it everywhere else, shaped by the **Review Card** switches. **Custom (pick and order the fields)** builds each review from the **Fields** list instead.
* **Fields:** Appears when **Review Row** is **Custom**. Each item is one part of the review, shown in the order you set. Drag an item to reorder it, delete an item to hide that part, and add an item to bring one back. The parts are **Avatar**, **Reviewer Name**, **Verified Purchase Badge**, **Variation Reviewed**, **Star Rating**, **Date**, **Review Title**, **Review Text**, **Photos**, **Helpful Votes**, and **Store Reply**.

<!-- TODO(screenshot): Review Row group of the Review List element with the Custom row and Fields list -->

When the product has no approved reviews yet, the builder shows a note in place of the list.

## 3. Rating Summary

The average rating, the total review count, and the bars that break reviews down from 5 stars to 1. Place it wherever a rating overview belongs.

* **Content Tab:** The **Product** group, plus a **Summary** group with **Show Rating Breakdown** and **Show Write a Review Button**. Turning the button on adds it below the summary in the same card and reveals a **Write a Review Button** group with the same **Open In**, **Field Layout**, and **Button Text** settings as the other elements.
* **Style Tab:** **Card** (background, border, padding, divider color), **Average & Total** (typography and **Star Size**), **Breakdown Bars** (**Bar Color**, **Track Color**, **Bar Height**, **Space Between Rows**, and label typography), and **Write a Review Button** when the button is on.

## 4. Review Form

The review form printed directly on the page, with no button and no drawer. Use it on a dedicated page for feedback, or under a product's description.

* **Content Tab:** The **Product** group, and a **Form** group with **Field Layout**, either **Inline (all fields at once)** or **Steps (one at a time)**. Steps walks the reviewer through the rating, the details, and the photos.
* **Style Tab:** **Labels & Spacing** (label and step question typography, **Space Between Fields**), **Inputs** (typography, background, border, padding), **Star Picker** (**Star Size** and **Star Color**), and **Submit Button** (typography, normal and hover colors, border, padding).

Which fields customers see, such as the guest details or the photo upload, follows your review settings. When the current visitor isn't allowed to review the product, the form isn't shown, and the builder points you to the review permission setting.

## 5. Write a Review

A button that opens the review form in a drawer or a modal. Its text changes for a new reviewer, a returning reviewer, and a visitor who has to log in first.

* **Content Tab:** The **Product** group, and **Button Settings** with **Open In** (**Drawer** or **Modal**), **Field Layout** (**Inline** or **Steps**), and the three **Button Text** labels, **New Review** (default "Write a Review"), **Edit Review** (default "Edit your review"), and **Logged Out** (default "Log in to Review").
* **Style Tab:** In the **Button** group: typography, background, border, padding, the hover text, background, and border colors, and the **Alignment**.

## 6. Product Rating

A compact star rating with the review count in brackets, the same element you see on a product card. It is ideal beside a product title or inside a query loop of products.

* **Content Tab:** The **Product** group, plus a **Visibility** group. **Minimum Reviews** hides the rating until the product has at least that many reviews; 0 always shows it, including five empty stars on a product with none. **Minimum Average Rating** hides the rating unless the product averages at least that many stars, in half-star steps.
* **Style Tab:** **Rating Row** (typography, alignment, the gap between stars and count, padding), **Stars** (**Star Size**, **Gap Between Stars**, **Filled Star Color**, **Empty Star Color**), and **Review Count** (typography and margin).

The rating also follows the store-wide **Product Rating** row in your [Product Page settings](/guide/settings-configuration/product-page#_5-product-rating). If ratings are switched off there, the builder shows a note telling you where to turn them back on.

With the review elements in place, your Bricks pages show the same trusted feedback as the rest of your store.
