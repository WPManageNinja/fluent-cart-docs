# FluentCart Review Widgets for Elementor

The Elementor addon adds six widgets for [product reviews](/guide/store-management/product-reviews/), so you can build the rating summary, the review list, and the **Write a Review** button visually instead of relying on the default product page. They mirror the [review blocks](/guide/store-management/product-reviews/displaying-reviews#the-review-blocks) available in the WordPress block editor, and they sit in the **FluentCart** category of the Elementor panel.

Before you can use them, make sure the Elementor Blocks addon is turned on. See [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets) for the activation steps. **Enable Product Reviews** also needs to be switched on in your [review settings](/guide/store-management/product-reviews/review-settings). While it is off, the widgets stay in the panel, but the editor canvas shows a note that the reviews module is switched off, and visitors see nothing. A product with reviews turned off shows a similar note in the editor.

## Adding a Review Widget

To place a review widget on a page or template:

1.  Open the page or template with **Edit with Elementor**.
2.  In the **Elements** panel, type `review` into **Search Widget...**.
3.  Drag the widget you want onto the canvas.

![Screenshot of the FluentCart review widgets in the Elementor widget search results](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-review-widgets-panel.webp)

Every widget here starts with the same **Source** setting in its **Content** tab:

* **Source:** Choose **Current Product** to show whichever product the page or template is displaying. This is the right choice inside a single product template. Choose **Custom** to pin the widget to one product.
* **Select Product:** Appears when **Source** is **Custom**. Pick the product to show.

When no product can be worked out, for example a **Current Product** widget on an ordinary page, the editor previews your newest published product. If no product can be found at all, the canvas shows a note asking you to select one. Visitors never see those notes.

::: info
Some options need FluentCart Pro. Without it they stay visible but locked, and they are marked **(Pro)**. Every widget is free to use.
:::

## 1. Product Reviews

The whole review section in one widget: the rating summary, the **Write a Review** button, and the review list. Use it when you want a complete section quickly, and reach for the separate widgets below when you want to place the pieces yourself.

### Choosing a Layout

Below the **Source** setting, the **Content** tab has a **Layout** section with the **Layout Preset** picker, a grid of cards with a small drawing of each layout. Use the tabs **All layouts**, **List**, **Grid**, **Photo**, and **Carousel** to narrow the choices, then click a card to apply it.

![Screenshot of the Layout Preset picker in the Product Reviews widget in Elementor](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-product-reviews-layout-picker.webp)

The eleven layouts are the same ones the block editor offers:

| Layout | Type | What it looks like |
|---|---|---|
| Classic | List | The summary beside the reviews, with the count, filter chips, sorting, and numbered pages. Free. |
| Minimal List | List | One review per row, with no header above the list and no dates. |
| Compact | List | Stars, a couple of lines, and a **Read more** link. No avatar, date, title, or photos. |
| Card Grid | Grid | Two cards to a row, with the filter and sorting above and page numbers like "Page 2 of 7". |
| Masonry | Grid | Three columns, each card as tall as its content. |
| Summary on Top | List | The average rating and star breakdown across the top, with the reviews underneath. |
| Photo Grid | Photo | Three cards to a row, each with the customer's photo across the top. Shows only reviews that have photos. |
| Photo Wall | Photo | Four photos to a row, with the stars, name, and date over each one. Shows only reviews that have photos. |
| Photo Strip | Photo | A slider band of customer photos, each opening in a lightbox. Meant to sit above a full list. |
| Carousel | Carousel | Two reviews at a time, with arrows over the cards and dots below. |
| Testimonials | Carousel | Each review as a quote with the reviewer's face, name, and stars beneath. Three at a time, changing automatically. |

A layout is a starting point, not a lock. Picking one writes its choices onto the widget's own settings, and from then on the widget only remembers those settings, not the layout's name. Change any setting afterwards and your change sticks. The picker shows a **Custom layout** status above the grid whenever the current settings match none of the eleven layouts. You can't choose **Custom layout** yourself. Pick a card to leave it.

Your own tuning survives a switch. **Columns**, **Reviews Per Page**, **Pagination Type**, **Default Sort**, and all of the slider settings carry over from one layout to the next if you set them yourself.

::: info
**Classic** is free. The other ten cards are greyed out and marked **Pro** until FluentCart Pro is active. Without Pro, the widget draws whatever the settings below say.
:::

### Content Settings

Below the picker, the **Content** tab is split into sections:

* **Rating Summary:** Turn the summary card **Show** or **Hide**. When it is shown, **Placement** puts it **Beside the reviews**, **Across the top**, or as **Only the Write a Review button**.
* **Write a Review Button:** **Open In** chooses **Drawer (slides in from the side)** or **Modal (centered on the screen)**. **Field Layout** chooses **Inline (all fields at once)** or **Steps (one at a time)**. Under **Button Text**, you can rewrite the three labels, **New Review**, **Edit Review**, and **Logged Out**, and leave a field blank to keep its default.
* **Review List:** **Minimum rating** hides lower-rated reviews entirely, from **All ratings** up to **5 stars only**. **Reviews with attachments only** lists just the reviews that have photos. **Words shown** cuts longer reviews down with a **Read more** link, and 0 shows them in full. **View Mode** offers **List**, **Grid (Pro)**, **Masonry (Pro)**, and **Slider (Pro)**. **Columns** sets how many reviews sit side by side, from 2 to 6, in the Grid, Masonry, and Slider views.
* **Review Card:** Switch each part of a review **Show** or **Hide**: **Reviewer Name**, **Review Date**, **Verified Purchase Badge**, **Store Reply**, **Avatar**, **Review Title**, **Review Text**, **Attachments**, **Variation**, **Footer (replies and votes)**, and **Meta Line**. Three more switches rearrange the card: **Attachments Above The Text**, **Stars Above The Name**, and **Verified Badge After The Variation**.
* **Attachments:** **Attachments Shown** sets how many photos a review displays, and the rest sit behind a **+** that opens them in the lightbox. **The + Counter** puts that **+** **On the last attachment**, **Beside the attachments**, or **Hidden**. **Attachment Height (px)** always applies. **Attachment Width (px)** is available while full width is off. **Full Width Attachments** gives each photo its own line, and once it is on, the Pro options **Attachment As Card Background** and **Flush To Card Edges** let a photo take over the card. **Flush To Card Edges** hides while **Attachment As Card Background** is on, and without FluentCart Pro both options show a **(Pro)** label and stay locked.
* **Slider:** Appears only when **View Mode** is **Slider**. **Show arrows** adds the previous and next arrows, with an **Arrow Size** of **Small**, **Medium**, or **Large**, and an **Arrow Placement** of **On the reviews**, **Beside the reviews**, or **Below the reviews**. **Show Pagination** adds indicators, in a **Pagination Type** of **Dots**, **Fraction**, **Progress Bar**, or **Segmented**. **Autoplay** can be **Disabled**, **Always**, or **On Hover**, with an **Autoplay Delay (ms)** when it is on, and **Infinite loop** lets the slider wrap around.
* **Header:** Show or hide the **Review Count**, the **Star Filter Chips**, and the **Sort Control**, and set the **Default Sort** to **Newest**, **Oldest**, **Highest Rating**, or **Lowest Rating**.
* **Pagination:** Appears for the List, Grid, and Masonry views. Choose a **Pagination Type** of **Numbers**, **Fraction**, or **Bullets**, and set **Reviews Per Page**. Leave it at 0 to follow your store-wide **Reviews Per Page** setting.

### Style Settings

The **Style** tab restyles each part: the **Rating Summary** card, the **Write a Review Button**, the **Review List** spacing, the **Header**, the **Review Card**, the **Reviewer**, the **Stars**, the **Review Content**, the **Photos & Actions**, and the **Pagination**. In the **Stars** section, **Filled Star Color** and **Empty Star Color** let the stars match your brand.

## 2. Product Review List

Only the list of reviews, with no summary and no button. Use it together with **Review Summary** and **Write a Review Button** to build a custom arrangement. It has no layout picker, but it shares the **View Mode**, **Columns**, slider, header, attachment, and pagination settings of the **Product Reviews** widget. **Review Count** in the header settings appears only when **Review Layout** is **Choose fields**.

Its extra strength is the **Review Row** section, which controls the review's fields one by one:

* **Review Layout:** **Standard** draws the row as FluentCart draws it everywhere else, with the avatar, name, stars, and badge on one line. **Choose fields** lets you pick and order the parts yourself, and it stacks each on its own line.
* **Fields:** Appears when **Review Layout** is **Choose fields**. Each item in the list is one part of the row, shown in the order you set, and the items are titled with short names such as `avatar` and `author_name`. Drag an item to reorder it, delete an item to hide that part, and add an item to bring one back. The parts are **Avatar**, **Reviewer Name**, **Verified Purchase Badge**, **Variation Reviewed**, **Star Rating**, **Date**, **Review Title**, **Review Text**, **Photos**, **Helpful Votes**, and **Store Reply**.
* **Show in each review:** With the **Standard** layout, switch **Reviewer Name**, **Date**, **Verified Purchase Badge**, and **Store Reply** on or off.

![Screenshot of the Review Row section of the Product Review List widget with the Choose fields layout](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-review-list-fields.webp)

With **Choose fields**, the **Pagination** section also gains **Show Pagination**, and an **Alignment** for the pager once that is on. The **Standard** layout always paginates once there is a second page.

In the **Style** tab, **Star Color** colors every star in the list, filled and empty alike, while **Filled Star Color** and **Empty Star Color** override one or the other.

## 3. Review Summary

The average rating, the total review count, and the bars that break reviews down from 5 stars to 1. Place it wherever a rating overview belongs.

* **Content Tab:** Only the **Source** settings.
* **Style Tab:** **Star Color**, plus typography and color for the average score and the total, and a color for the "out of five" text. Under **Breakdown Bars**, set the **Bar Color**, **Bar Track Color**, **Bar Height**, **Row Spacing**, and the bar label typography and color.

## 4. Review Form

The review form printed directly on the page, with no button and no drawer. Use it on a dedicated page for feedback, or under a product's description.

* **Content Tab:** **Source**, and **Field Layout**, either **Inline (all fields at once)** or **Steps (one at a time)**.
* **Style Tab:** **Star Color**, the question typography and color, and the spacing between fields. Under **Inputs**, style the typography, text color, background, border, radius, and padding. Under **Star Picker**, set the **Star Size**. Under **Submit Button**, style the typography, the normal and hover colors, the radius, and the padding.

![Screenshot of the Review Form widget settings in Elementor](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-review-form-widget.webp)

Which fields customers see, such as the guest details or the photo upload, follows your [review settings](/guide/store-management/product-reviews/review-settings).

## 5. Write a Review Button

A button that opens the review form in a drawer or a modal. Its text changes for a new reviewer, a returning reviewer, and a visitor who has to log in first.

* **Content Tab:** **Source**, **Open In** (**Drawer** or **Modal**), **Field Layout** (**Inline** or **Steps**), and the three **Button Text** labels, **New Review**, **Edit Review**, and **Logged Out**.
* **Style Tab:** Typography, the **Normal** and **Hover** colors, the border, the border radius, the padding, and the **Alignment**, from **Left** to **Full Width**.

![Screenshot of the Write a Review Button widget settings in Elementor](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-write-a-review-widget.webp)

## 6. Product Rating

A compact star rating with the review count in brackets, the same element you see on a product card. It is ideal beside a product title or inside a card template.

* **Content Tab:** **Source**, plus two visibility settings. **Minimum Reviews** hides the rating until the product has at least that many reviews, and 0 always shows it. **Minimum Average Rating** hides the rating unless the product averages at least that many stars, in half-star steps.
* **Style Tab:** **Star Color**, **Empty Star Color**, **Star Size**, **Star Spacing**, the typography and color of the review count, and the **Alignment**.

![Screenshot of the Product Rating widget settings in Elementor](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-product-rating-widget.webp)

## Ratings on Shop Cards

The [Products](/guide/customization-and-themes/elementor-fluentcart-widgets#_5-products) widget can also show a star rating on each product card. In the widget's **Product Card Layout** section, add an item to **Card Elements** and set its **Element** to **Rating**. The default cards do not include it. The rating appears only for products that have reviews, and only while **Show Rating in Shop** is on in your [Product Page settings](/guide/settings-configuration/product-page#_5-product-rating).

![Screenshot of the Rating element in the Card Elements list of the Products widget](/images/customization-and-themes/fluentcart-elementor-widgets/review-widgets/elementor-shop-card-rating.webp)

## Ready-Made Templates

The bundled templates already use these widgets. The **Single Product** template includes a **Product Reviews** widget after the product details, and the **Shop** template places a **Rating** under each product title. See [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets#start-from-a-ready-made-template) to insert them.

With the review widgets in place, your Elementor pages show the same trusted feedback as the rest of your store.
