# FluentCart Review Modules for Divi

The FluentCart Divi Modules addon includes six modules for [product reviews](/guide/store-management/product-reviews/), so you can build the rating summary, the review list, and the **Write a Review** button visually in the Divi 5 builder. They mirror the [review blocks](/guide/store-management/product-reviews/displaying-reviews#the-review-blocks) in the WordPress block editor, and like the rest of the [FluentCart Divi Modules](/guide/customization-and-themes/fluentcart-divi-modules), every one of them is prefixed with **FluentCart** in the builder.

The review modules arrived in version 1.1.0 of the addon. **Enable Product Reviews** also needs to be switched on in your [review settings](/guide/store-management/product-reviews/review-settings). While it is off, the modules stay available, but the builder shows a note that the Product Reviews module is switched off, and visitors see nothing. A product with reviews turned off shows a similar note.

## Adding a Review Module

To place a review module on a page or Theme Builder template:

1.  Open the page or template with the **Divi** builder.
2.  Click the plus icon (**+**) to open the **Insert Module Or Row** dialog, and type **review** into the search box.
3.  Click the module you want to add it to your layout.

<!-- TODO(screenshot): Divi Insert Module dialog filtered to the FluentCart review modules -->

Every review module starts with the same **Product** section in its **Content** tab:

* **Product Source:** Choose **Current product** to show whichever product the page or Theme Builder template is displaying. This is the right choice inside a Single Product template. Choose **A specific product** to pin the module to one product.
* **Select Product:** Appears when **Product Source** is **A specific product**. Click it to search for the product, and the panel shows the **Selected product** above the button, which then reads **Change Product**.

The Divi canvas draws a live preview of each module. Until a product can be worked out, it asks you to pick one in the module settings, and when the store has no reviews yet, it previews sample reviews so you can still style the module. Visitors never see those notes or the sample data.

::: info
Some options need FluentCart Pro. Without it they stay visible but disabled, with a **Pro** badge or a **(Pro)** label and the note "Available with FluentCart Pro." Every module is free to use.
:::

## 1. FluentCart Product Reviews

The whole review section in one module: the rating summary, the **Write a Review** button, and the review list. Use it when you want a complete section quickly, and reach for the separate modules below when you want to place the pieces yourself.

### Choosing a Layout

The **Layout** section holds the layout picker, a grid of cards with a small drawing of each layout. Use the tabs **All**, **Lists**, **Grids**, **Photos**, and **Carousels** to narrow the choices, then click a card to apply it.

<!-- TODO(screenshot): Layout picker in the FluentCart Product Reviews module -->

The eleven layouts are the same ones the block editor offers:

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

A layout applies the moment you click it. It writes its choices onto the module's own settings, and from then on the module only remembers those settings, not the layout's name, so any change you make afterwards sticks. When the current settings match none of the eleven layouts, the picker says so above the grid. Your own tuning survives a switch: the columns, page length, pagination, sort, and slider settings carry over to the next layout if you set them yourself.

::: info
**Classic** is free. The other ten cards are disabled and carry a **Pro** badge until FluentCart Pro is active.
:::

### Content Settings

Below the picker, the **Content** tab is split into sections:

* **Rating Summary & Header:** **Show Rating Summary** turns the summary card on or off. When it is on, **Summary Position** places it **Beside the reviews**, **Above the reviews**, or **Beside the write-a-review button**. **Show Rating Breakdown** shows or hides the per-star bars, leaving the average, the star row, and the count. **Show Review Count**, **Show Filter Chips**, and **Show Sorting** control the header above the list.
* **Review List:** **View Mode** offers **List**, **Grid**, **Masonry**, and **Slider**, and the last three need Pro. **Reviews Per Row** sets how many reviews sit side by side, from 2 to 6, in the Grid, Masonry, and Slider views (it reads **Reviews Per Slide** for the slider). **Reviews Per Page** sets the page length, and 0 follows your store-wide setting. **Pagination Type** chooses **Numbers**, **Fraction**, **Bullets**, or **None**. **Default Sort** starts the list on **Newest**, **Oldest**, **Highest Rating**, or **Lowest Rating**. **Minimum rating** hides lower-rated reviews, from **All ratings** up to **5 stars only**. **Only Reviews With Photos** lists just the reviews that have photos, and **Words shown** cuts longer reviews down, with 0 showing them in full.
* **Review Card:** Switch each part of a review on or off: **Show Avatar**, **Show Review Title**, **Show Review Text**, **Show Photos**, **Show Footer**, **Show Helpful Votes** (Pro), **Show Variation**, **Show Meta Row**, **Show Date**, **Show Reviewer Name**, **Show Store Reply**, and **Verified Purchase Badge** (shown only while the store's verified owner badge setting is on). Three more switches rearrange the card: **Photos Above The Text**, **Stars Above The Name**, and **Badge After The Name**.
* **Attachments:** Appears while **Show Photos** is on. **Attachments Shown** sets how many photos a review displays, with 0 showing them all. **Attachment Width (px)** and **Attachment Height (px)** size each photo. **The + Counter** puts the "+ more" count **On the last attachment**, **Beside the attachments**, or makes it **Hidden**. **Full Width Attachments** gives each photo its own line, and once it is on, the Pro options **Attachment As Card Background** and **Flush To Card Edges** let a photo take over the card.
* **Behavior:** Appears only when **View Mode** is **Slider**. **Autoplay** can be **Disabled**, **Always**, or **On Hover**, with an **Autoplay Delay (ms)** when it is on. **Show arrows** adds the previous and next arrows, with an **Arrow Size** of **Small**, **Medium**, or **Large** and an **Arrow Placement** of **On the reviews**, **Beside the reviews**, or **Below the reviews**. **Show pagination** adds indicators, in a **Pagination Type** of **Dots**, **Fraction**, **Progress Bar**, or **Segmented**. **Infinite loop** lets the slider wrap around.
* **Button Settings:** **Open In** chooses **Drawer (slides in from the side)** or **Modal (centered on the screen)**. **Field Layout** chooses **Inline (all fields at once)** or **Steps (one at a time)**.
* **Button Text:** Rewrite the three labels, **New Review** (default "Write a Review"), **Edit Review** (default "Edit your review"), and **Logged Out** (default "Log in to Review").

::: info
Grid, Masonry, and Slider need FluentCart Pro. Without it, the reviews show as a single list on the live page whichever view you pick.
:::

### Design Settings

The **Design** tab restyles each part in its own group, including **Grid / Slider Spacing**, **Stars** (the **Star Color**), **Empty Review Stars**, **Review Card**, **Write a Review Button**, **Avatar**, **Reviewer Name**, **Verified Badge**, **Review Title**, **Review Text**, **Review Date**, **Review Photo**, **Reply Button**, **Filter Chips**, **Sort Dropdown**, and **Pagination**, plus the summary groups for the **Average**, **Out of Five**, **Review Count**, and the breakdown bars.

## 2. FluentCart Review List

Only the header, the list of reviews, and the pager, with no summary and no button. Use it together with **Rating Summary with Review** and **Write a Review** to build a custom arrangement. It has no layout picker, but it shares the **Review List**, **Review Card**, **Attachments**, and **Behavior** sections of the **Product Reviews** module. Its **List Header** section holds **Show Review Count**, **Show Filter Chips**, and **Show Sorting**.

In the **Design** tab, it has the same list, card, and pagination groups as **Product Reviews**, without the summary and button groups.

## 3. FluentCart Rating Summary with Review

The average rating, the total review count, and the bars that break reviews down from 5 stars to 1, with an optional **Write a Review** button in the same card.

* **Content Tab:** The **Product** section, then **Rating Summary** with **Show Rating Breakdown**. Under **Button Settings**, **Show Write a Review Button** is on by default; turn it off to leave the summary card on its own. While it is on, **Open In**, **Field Layout**, and the **Button Text** labels work as they do in **Product Reviews**.
* **Design Tab:** **Stars**, **Average**, **Out of Five**, **Review Count**, **Bar Fill**, **Bar Track** (including the bar height), **Bar Rows**, **Bar Labels**, and **Write a Review Button**.

When the product has no approved reviews yet, the summary is empty.

## 4. FluentCart Review Form

The review form printed directly on the page, with no button and no drawer. Use it on a dedicated page for feedback, or under a product's description.

* **Content Tab:** The **Product** section, and a **Form** section with **Field Layout**, either **Inline (all fields at once)** or **Steps (one at a time)**. Steps walks the reviewer through the rating, the details, and the photos.
* **Design Tab:** **Stars**, **Labels**, **Question**, **Fields**, the star picker size and spacing, **Submit Button**, **Step Buttons**, and **Field Wrapper Spacing**.

Which fields customers see, such as the guest details or the photo upload, follows your review settings.

## 5. FluentCart Write a Review

A button that opens the review form in a drawer or a modal. Its text changes for a new reviewer, a returning reviewer, and a visitor who has to log in first.

* **Content Tab:** The **Product** section, **Button Settings** with **Open In** and **Field Layout**, and the three **Button Text** labels, **New Review**, **Edit Review**, and **Logged Out**.
* **Design Tab:** One **Button** group for the background, border, text, and spacing.

## 6. FluentCart Product Rating

A compact star rating with the review count in brackets, the same element you see on a product card. It is ideal beside a product title in a Single Product template.

* **Content Tab:** The **Product** section, plus a **Visibility** section. **Minimum Reviews** hides the rating until the product has at least that many reviews; 0 always shows it, including five empty stars on a product with none. **Minimum Average Rating** hides the rating unless the product averages at least that many stars, in half-star steps.
* **Design Tab:** **Rating Row**, **Stars** (size and spacing), **Filled Stars**, **Empty Stars**, and **Review Count**.

A product below your thresholds renders nothing, and the canvas tells you it is hidden. The rating also follows the store-wide **Product Rating** row in your [Product Page settings](/guide/settings-configuration/product-page#_5-product-rating). If ratings are switched off there, the builder shows a note telling you where to turn them back on.

## Ratings on Shop Cards

The **FluentCart Products** module can show a star rating on each product card too. Its **Content** tab has a **Product Rating** section, which appears while product reviews are enabled:

* **Show Rating:** On by default. Turn it off to hide the card ratings in this grid.
* **Minimum Reviews:** Hide a card's rating until the product has at least this many reviews.
* **Minimum Average Rating:** Hide a card's rating unless the product averages at least this many stars, in half-star steps.

The ratings appear only while **Show Rating in Shop** is on in your Product Page settings. If it is off, the section tells you the setting has no effect yet.

## The Single Product Template

The bundled **FluentCart — Single Product** layout in the [template library](/guide/customization-and-themes/fluentcart-divi-modules#using-the-bundled-template-library) now includes a **FluentCart Product Reviews** module after the product details.

Layouts already in your Divi library are never overwritten on their own. When a bundled layout has a newer version, the **Divi Library** screen offers an **Update to** action on that layout's row. Updating replaces your copy of the layout, so any changes you made to it are lost, while pages you built from a copy of it are not affected. If a bundled layout is missing from your library, the same screen offers an **Add missing layouts** button.

With the review modules in place, your Divi pages show the same trusted feedback as the rest of your store.
