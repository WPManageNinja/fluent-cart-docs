# FluentCart Bricks Blocks

The **FluentCart Bricks Blocks** addon brings a full palette of FluentCart elements into the **Bricks** builder. Instead of dropping in a shortcode and hoping it fits, you get individual blocks for each part of your store, from a product's title and gallery right through to the cart and checkout. Drag in the pieces you want, style them with the Bricks controls you already know, and build your store pages exactly the way you picture them.

## What You Need

Before you install the addon, make sure of two things:

1. The **Bricks** theme is installed and active on your site. These blocks render inside the Bricks builder, so without the theme there is nowhere for them to appear.
2. Your FluentCart Pro license is verified. See [Licensing Settings](/guide/settings-configuration/licensing-settings) if you have not done this yet.

## Installing the Addon

The blocks ship as a separate addon, so you install it once from the FluentCart settings before it shows up in Bricks.

1. Navigate to **FluentCart Pro > Settings > Features & addon**.
2. Scroll to the **Plugin Addons** section.
3. Find the **FluentCart Bricks Blocks** card. Its description reads "Enable to get Bricks Builder elements for FluentCart. Requires the Bricks theme."
4. Click the **Install & Activate** button on the card.

![Screenshot of the Plugin Addons section with the FluentCart Bricks Blocks card and its Install & Activate button highlighted](/images/customization-and-themes/bricks-blocks/bricks-blocks-addon-install.webp)

FluentCart fetches the addon, installs it, and activates it for you. The card's status badge switches to **Active** when it finishes, and no upload or page reload is needed. For more on this installer, see [Features & Addons](/guide/settings-configuration/features-addons).

::: info
If the **Install & Activate** button is greyed out or replaced with a license prompt, your FluentCart Pro license either has not been verified or has lapsed. Verify it from **Settings > License Settings** and the installer becomes available again.
:::

## Finding the Blocks in Bricks

Once the addon is active, the blocks are ready to use straight away.

1. Open any page or template with the **Bricks** editor.
2. Click the plus icon (**+**) to open the elements panel.
3. Scroll to the **FluentCart** category.
4. Click any block to add it to your canvas, then style it using the Bricks controls on the left.

![Screenshot of the Bricks editor elements panel](/images/customization-and-themes/bricks-blocks/bricks-blocks-elements-panel.webp)

Every FluentCart block carries the FluentCart badge in its corner, so you can tell them apart from the built-in Bricks elements at a glance.

## The Available Blocks

The blocks are grouped below by what they do, rather than the order they appear in the panel, so you can find the right one quickly.

Most of these blocks let you choose which product they display. You either let the block pick up the product from the page it sits on, which is what you want inside a product template, or point it at a specific product using the **Query Type** and **Manual Product ID** controls, which is handy for a landing page featuring one item.

### Product Details

These blocks each render a single piece of a product, which makes them the building pieces of a custom single product template:

* **Product Title:** The product's name.
* **Product Info:** A combined block covering several product details at once. Toggle each part on or off with **Show Gallery**, **Show Title**, **Show Stock**, **Show Excerpt**, **Show Price**, and **Show Buy Section**, and set where the gallery thumbnails sit with **Thumbnail Position**.
* **Product Card:** A complete product summary, useful for custom grids and feature sections. **Card Elements** controls which parts appear, and **Price Format** and **Card Sizing** handle the presentation.
* **Product Excerpt:** The product's short description.
* **Product Content:** The product's full description.
* **Product Gallery:** The product's images.
* **Product SKU:** The product's SKU, with an optional label. Turn on **Show Label** and set **Custom Label** to print something like "Item code" in front of it. Leave a product's SKU blank and nothing renders, so you can hide it per product.
* **Product Package Description:** Shipping package details for physical products. Choose what to include with **Show Package Name**, **Show Dimensions**, **Show Product Weight**, and **Show Shipping Weight**.
* **Product Stock:** A stock indicator, such as "In Stock" or "Out of Stock".
* **Price Range:** The price, or the low-to-high span for a product with variations.

### Selling and Checkout

These blocks are the ones that actually take the money:

* **Add to Cart:** An add to cart button. Point it at a variation with **Product Variation** or **Manual Variant ID**, and set your own **Button Text**.
* **Buy Now:** Sends the customer straight to checkout, skipping the cart. Turn on **Enable Modal Checkout** to keep them on the page and open checkout in a popup instead.
* **Buy Section:** The complete purchase area, combining pricing and the buy controls.
* **Mini Cart:** A compact cart summary, well suited to a header. Pick a **Cart Icon** or supply your own icon URL, and use **Display total price** and **Show cart item count** to decide how much detail it shows.
* **Checkout:** The full checkout form. **Layout** plus **Form Column Width**, **Summary Column Width**, and **Column Gap** control the arrangement, **Form Elements** decides which fields appear, and **Ship to Different Address** controls the separate shipping address option.

### Browsing and Discovery

These blocks help customers find their way around your catalog:

* **Products:** A grid of your products, the quickest way to build a shop page. It carries the richest control set of any block, covered in [Products Block Controls](#products-block-controls) below.
* **Product Carousel:** Products in a sliding carousel. Set **Slides to Show**, **Space Between**, and **Autoplay** with its **Autoplay Speed**, then choose whether **Infinite Loop**, **Show Arrows**, and **Show Pagination** are on.
* **Product Categories:** A list of your product categories. **Display Style** sets the look, while **Show Product Count**, **Show Hierarchy**, and **Show Empty Categories** control what is listed.
* **Related Products:** Products related to the one being viewed. **Related By** matches on **Categories** or **Brands**, and you can set the **Heading Text**, **Order By**, **Columns**, and **Products Per Page**.
* **Product Search:** A search field scoped to your products, with an optional **Show Category Filter**. **Open In** sets where results land.

### Store and Account

These blocks cover the rest of the storefront:

* **Store Logo:** Your store's logo, with **Max Width** and **Max Height** controls. Turn on **Link to Home** to make it clickable.
* **Customer Dashboard:** The full customer account area.
* **Customer Dashboard Button:** A link into the customer dashboard, handy in a header or menu. Set the **Display Type** and **Button Text**, and optionally **Show Icon** or **Open in New Tab**.

::: info
A handful of these elements, including **Products**, **Product Title**, **Product Gallery**, and **Buy Section**, are built into FluentCart and appear in Bricks even without the addon. Installing the addon adds the other fifteen and completes the set, so you can build a whole store page without leaving the builder.
:::

## Products Block Controls

The **Products** block is the one you will reach for most, so it is worth knowing what it can do. Its controls are split across three groups in the Bricks panel.

### Query Controls

These settings determine which products appear and how the grid is arranged:

 * **View Mode & Switcher:** Choose between a grid or list layout, and optionally let visitors flip between them.

 * **Pagination & Columns:** Control how customers navigate long lists and define the grid spacing.

 * **Is main query:** Ties the block to the page's main WordPress query, which is essential when building a shop or archive template.

 * **Filtering Options:** Narrow the grid by specific product types, categories, on-sale status, or manually include/exclude items.


### Filter Controls

Turn on **Enable Filter** to provide your customers with a front-end filter panel alongside the product grid.

 * **Live Filter:** Updates results instantly as the customer changes a filter, without reloading the page.

 * **Wildcard Filter:** Broadens text matching so partial terms still return accurate results.

 * **Taxonomy toggles:** Choose exactly which taxonomies (like Categories or Brands) customers are allowed to filter by.

 * **Price Range & Sort By:** Adds sorting controls and a price slider to the panel.

### Default Filter

While the standard Filter group builds the panel your visitors touch, the Default Filter narrows the grid before anyone touches anything. This is ideal for building curated sections like "New in Outerwear" without hand-picking products.

 * **Enable Default Filter:** Turn this on to reveal the curated filter settings.

 * **Allow Out Of Stock:** Keeps out-of-stock products in the results instead of hiding them.

 * **Search:** Set a preset search term. The grid loads already filtered to this term, and it survives live-filter refreshes.

 * **Taxonomy selects:** Pick specific terms (like a single sub-category) that this block should be limited to.

::: info
The Default Filter is ignored when **Is main query** is enabled, as the shop template is already scoped by WordPress.
:::

![Screenshot of the Default Filter panel with Enable Default Filter switched on, alongside Allow Out Of Stock, Search, Product Categories, and Product Brands controls](/images/customization-and-themes/bricks-blocks/bricks-blocks-default-filter.webp)

### Sale Badge

Switch on **Show Sale Badge** to flag discounted products in the grid. FluentCart works out the discount for you and hides the badge on anything not currently on sale.

* **Badge Text:** What the badge says. Defaults to **Sale!**
* **Show discount percentage instead:** Swaps the fixed text for the live discount figure.
* **Percentage Text:** The template for that figure, using `{percent}` where the number should go. Defaults to `-{percent}%`, so a quarter off reads `-25%`.
* **Price Source:** Which price the discount is measured against. **Default Variant** uses the variant customers see first, while **Best Discount (All Variants)** advertises the biggest saving anywhere in the product.
* **Badge Shape:** **Badge** or **Ribbon**.
* **Position:** Which corner of the product image the badge sits in.

The matching **Sale Badge** group on the **Style** tab carries **Typography**, **Background Color**, and **Text Color**.


![Screenshot of the Sale Badge panel with Show Sale Badge switched on, alongside Badge Text, Price Source, Badge Shape, and Position controls](/images/customization-and-themes/bricks-blocks/bricks-blocks-sale-badge.webp)

### Sold Out Badge

**Show Sold Out Badge** marks products that have run out, so shoppers know before they click through.

* **Badge Text:** Defaults to **Out of Stock**.
* **Badge Shape:** **Badge** or **Ribbon**.
* **Position:** Which corner of the product image the badge sits in.

Styling works the same way, from the **Sold Out Badge** group on the **Style** tab.

::: info
Both badges are overlays anchored to the product image, and a discounted product can also be out of stock. Give the two badges different corners so they never land on the same spot.
:::

![Screenshot of the Sold Out Badge panel with Show Sold Out Badge switched on, alongside Badge Text, Badge Shape, and Position controls](/images/customization-and-themes/bricks-blocks/bricks-blocks-sold-out-badge.webp)

### Fields

* **Fields:** The list of merge tags that build the product card, such as `{fct_product_image:link}`, `{fct_product_title:linked}`, `{fct_product_excerpt}`, `{fct_product_price}`, and `{fct_product_button}`. Reorder, remove, or click **Add Field** to bring in another.
* **Link entire product:** Makes the whole product card clickable. It only takes effect if none of your product fields already contain a link.

![Screenshot of the Fields panel listing the product card's merge tag fields, the Add Field button, and the Link entire product toggle](/images/customization-and-themes/bricks-blocks/bricks-blocks-fields.webp)

## Building a Single Product Template

The product blocks come into their own when you pair them with a Bricks template, which lets you design the layout once and have every product follow it. FluentCart registers a dedicated **FluentCart - Product** template type in Bricks for exactly this. See [Customize Store with Bricks](/guide/customization-and-themes/customize-store-with-bricks) for the full walkthrough.

Your store's design is now entirely in your hands, block by block, without a line of code.
