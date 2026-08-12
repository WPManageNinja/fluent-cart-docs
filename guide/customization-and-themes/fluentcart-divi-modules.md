# FluentCart Divi Modules

The **FluentCart Divi Modules** addon brings a full set of FluentCart building blocks into the **Divi** builder. Instead of dropping in a shortcode and hoping it fits your layout, you get a dedicated module for each part of your store, from a product grid and carousel right through to the cart, checkout, and customer dashboard. Drag in the pieces you want, style them with the Divi controls you already know, and build your store pages exactly the way you picture them.

This guide walks you through installing the addon, finding the modules inside Divi, and using them to build your shop.

## What You Need

Before you install the addon, make sure of two things:

1. **Divi 5.0 or newer** is installed and active on your site. These are native Divi 5 modules, so they render inside the Divi 5 builder and need that version to appear.
2. **FluentCart 1.3.4 or newer** is installed, and your FluentCart Pro license is verified. See [Licensing Settings](/guide/settings-configuration/licensing-settings) if you have not done this yet.

## Installing the Addon

The modules ship as a separate addon, so you install it once from the FluentCart settings before they show up in Divi.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings > Features & addon**.
2. Scroll to the **Plugin Addons** section.
3. Find the **FluentCart Divi Modules** card. Its description reads "Native Divi 5 modules for FluentCart products, cart, and checkout. Requires Divi 5.0+ and FluentCart 1.3.4+."
4. Click the **Install & Activate** button on the card.

![Screenshot of the Plugin Addons section with the FluentCart Divi Modules card and its Install & Activate button highlighted](/images/customization-and-themes/divi/divi-1.webp)

FluentCart fetches the addon, installs it, and activates it for you. No upload or manual download is needed. When it finishes, the card's status badge switches to **Active**.

![Screenshot of the FluentCart Divi Modules card showing the Active status badge](/images/customization-and-themes/divi/divi-2.webp)

For more on this one-click installer, see [Features & Addons](/guide/settings-configuration/features-addons).

::: info
If the **Install & Activate** button is greyed out or replaced with a license prompt, your FluentCart Pro license either has not been verified or has lapsed. Verify it from **Settings > License Settings** and the installer becomes available again.
:::

## Finding the Modules in Divi

Once the addon is active, the modules are ready to use straight away.

1. Open any page or Theme Builder template with the **Divi** builder.
2. Click the plus icon (**+**) to open the **Insert Module Or Row** dialog, and stay on the **New Module** tab.
3. Type **fluent** into the search box to filter the list down to the FluentCart modules.
4. Click any module to add it to your layout, then style it using the **Content**, **Design**, and **Advanced** tabs on the right.

![Screenshot of the Divi Insert Module dialog filtered to the FluentCart modules](/images/customization-and-themes/divi/divi-3.webp)

Every module is prefixed with **FluentCart** in its name, so you can tell them apart from the built-in Divi modules at a glance.

## The Available Modules

The modules are grouped below by what they do, rather than the order they appear in the search, so you can find the right one quickly. Every module is prefixed with **FluentCart** in the builder.

### Browsing and Discovery

These modules help customers find their way around your catalog:

* **FluentCart Products:** A grid of your products, the quickest way to build a shop page. This is the workhorse module, covered in detail under [Building Your Shop Page](#building-your-shop-page).
* **FluentCart Product Carousel:** Your products in a sliding carousel, ideal for a "Featured" or "New Arrivals" strip on a landing page.
* **FluentCart Product Categories List:** A list of your product categories, so shoppers can jump straight to the section they want.
* **FluentCart Related Products:** Products related to the one being viewed, perfect for encouraging a second purchase on a single product layout.
* **FluentCart Product Search:** A search field scoped to your products.
* **FluentCart Media Carousel:** A carousel of product media, useful for showcasing imagery in a rich page section.
* **FluentCart Archive Header:** Shows the queried category or brand's name and description on an archive page, matching what FluentCart's own archive pages show. Pair it with **FluentCart Products** in a Theme Builder archive layout, where the products module automatically scopes to the same category or brand.

### Product Details

These modules render the pieces of a single product, which makes them the building blocks of a custom product layout:

* **FluentCart Product Card:** A complete product summary, useful for custom grids and feature sections.
* **FluentCart Product Info:** A combined module covering several product details at once, such as the gallery, title, price, and buy controls.

### Selling and Checkout

These modules are the ones that actually take the money:

* **FluentCart Add to Cart:** An add to cart button you can place anywhere, with your own button text.
* **FluentCart Buy Now:** Sends the customer straight to checkout, skipping the cart.
* **FluentCart Mini Cart:** A compact cart summary, well suited to a header or a sticky bar.
* **FluentCart Cart:** The full cart page, with item rows, quantity steppers, totals, and the checkout button, so you can design the cart experience inside Divi.
* **FluentCart Checkout Page:** The full checkout form, so you can design the checkout experience inside Divi.
* **FluentCart Receipt:** The post-purchase thank-you page a customer lands on after paying, showing their order details.

### Store and Account

These modules cover the rest of the storefront:

* **FluentCart Store Logo:** Your store's logo, with the option to link it back to the home page.
* **FluentCart Customer Dashboard:** The full customer account area, where shoppers manage their orders, subscriptions, and downloads.
* **FluentCart Customer Dashboard Button:** A link into the customer dashboard, handy in a header or menu.

## Building Your Shop Page

The easiest way to display your catalog is with the **FluentCart Products** module. Add it to a row, then open its **Content** tab to control exactly what it shows and how it behaves. The Divi canvas shows a live preview, and filters, sorting, and pagination all work on the published page.

![Screenshot of the FluentCart Products module showing a product grid with its settings panel open in Divi](/images/customization-and-themes/divi/divi-4.webp)

The **Content** tab groups the settings into a few clear sections:

* **Paginator**
    * **View:** Choose how customers move through long lists. **Scroll** loads more products as they scroll, while **Numbers** shows classic numbered pagination.
    * **Per Page/Scroll:** Set how many products load at a time (for example, 10).
* **Product Grid Option**
    * **View Mode:** Pick the default layout, either **Grid** for an image-led card layout or **List** for a roomier single-column layout.
    * **Price Format:** Show a single **Starts From** price or a low-to-high **Range** for products with variations.
    * **Product Per Row:** Set how many products sit side by side in grid view (for example, 4).
    * **Sort By:** Choose the default order, such as **Newest first**.
* **Filter Option**
    * **Enable Filter:** Turn on a customer-facing filter sidebar so shoppers can narrow the collection themselves, without you needing to build a separate page for every category or price band.
* **Default Filter**
    * **Enable Filtering:** Apply a preset filter to the module so it always shows a specific slice of your catalog, ideal for a curated "Best Sellers" or "On Sale" section.
* **Badges:** Control the sale and status badges shown on each product card.
* **Link:** Set a **Module Link URL** to make the module link out to a destination of your choice.

Beyond the **Content** tab, the **Design** and **Advanced** tabs give you Divi's full styling control over spacing, typography, borders, and responsive behavior, so the grid matches the rest of your page.

::: info
The Divi canvas renders a **preview** of your products. Interactive behavior, including filtering, sorting, and pagination, runs on the live public page rather than inside the builder, so always check the frontend to see it in action.
:::

## Using the Modules in Theme Builder Templates

The single-product modules, such as **FluentCart Product Info** and **FluentCart Product Card**, come into their own inside Divi's **Theme Builder**. Build the layout once in a template, and each module pulls its content from the product being viewed, so every product page follows the same design without you rebuilding it product by product.

## Using the Bundled Template Library

The addon also seeds eight ready-made page layouts straight into Divi's own library, so you can start from a finished design instead of building one from scratch.

1. Open the **Load From Library** dialog in the Divi builder.
2. Switch to the **Your Saved Layouts** tab.
3. Under **My Library** you will see the layouts prefixed **FluentCart —**, for example **FluentCart — Single Product** or **FluentCart — Checkout**.
4. Click a layout to load it into your page.

![Screenshot of the Divi Load From Library dialog showing the eight bundled FluentCart layouts under Your Saved Layouts](/images/customization-and-themes/divi/divi-5.webp)

The bundled layouts cover **Single Product**, **Shop**, **Product Category**, **Cart**, **Checkout**, **Thank You** (the receipt page), **Customer Dashboard**, and **Campaign Landing**. Each one is built from the FluentCart modules above, so you can drop it in as-is or use it as a starting point and swap in your own sections.

Each layout is also filed under a matching **category**, so you can narrow the list using the **Categories** checkboxes on the left: **Account**, **Campaign**, **Cart**, **Category**, **Checkout**, **Product**, **Receipt**, and **Shop**.

## Adding Product Data to Any Text Field

Beyond the dedicated modules, the addon plugs FluentCart product data into Divi 5's own **Dynamic Content** picker, the small icon next to any text-based field. That means you can pull a product's title, price, or description into a plain **Heading**, **Text**, **Blurb**, **Button**, or **Image** module, not only the FluentCart-specific ones.

1. Open the field on any Divi module that supports Dynamic Content (its icon sits beside the field).
2. Choose **FluentCart Product** from the group list.
3. Pick a token, such as **Product Price** or **Product Featured Image**.

Available tokens: Product Title, Product Price, Product SKU, Product Short Description, Product Description, Product Stock Status, Product ID, Product Permalink, Product Featured Image, Product Categories, and Product Brands.

These tokens resolve per product, so they are most useful inside a Theme Builder **Single Product** template, where each token automatically reflects whichever product a shopper is viewing.

If you prefer other builders, FluentCart offers the same depth elsewhere: see [FluentCart Bricks Blocks](/guide/customization-and-themes/fluentcart-bricks-blocks) for the Bricks equivalent, [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets) for Elementor, and [Using Gutenberg Blocks](/guide/customization-and-themes/using-gutenberg-blocks) for the block editor.

Your store's design is now entirely in your hands, module by module, without a line of code.
