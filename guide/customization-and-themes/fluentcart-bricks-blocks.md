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

![Screenshot of the Bricks editor elements panel showing the FluentCart category with blocks including Mini Cart, Add to Cart, Buy Now, Product Card, and Product Carousel](/images/customization-and-themes/bricks-blocks/bricks-blocks-elements-panel.webp)

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

* **Products:** A grid of your products, the quickest way to build a shop page.
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

## Building a Single Product Template

The product blocks come into their own when you pair them with a Bricks template, which lets you design the layout once and have every product follow it. FluentCart registers a dedicated **FluentCart - Product** template type in Bricks for exactly this. See [Customize Store with Bricks](/guide/customization-and-themes/customize-store-with-bricks) for the full walkthrough.

Your store's design is now entirely in your hands, block by block, without a line of code.
