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
3. Type **FC** into the search box to filter the list down to the FluentCart modules.
4. Click any module to add it to your layout, then style it using the **Content**, **Design**, and **Advanced** tabs on the right.

![Screenshot of the Divi Insert Module dialog filtered to the FluentCart FC modules](/images/customization-and-themes/divi/divi-3.webp)

Every FluentCart module is prefixed with **FC** in its name, so you can tell them apart from the built-in Divi modules at a glance.

## The Available Modules

The modules are grouped below by what they do, rather than the order they appear in the search, so you can find the right one quickly. Every module is prefixed with **FC** in the builder.

### Browsing and Discovery

These modules help customers find their way around your catalog:

* **FC Products:** A grid of your products, the quickest way to build a shop page. This is the workhorse module, covered in detail under [Building Your Shop Page](#building-your-shop-page).
* **FC Product Carousel:** Your products in a sliding carousel, ideal for a "Featured" or "New Arrivals" strip on a landing page.
* **FC Product Categories List:** A list of your product categories, so shoppers can jump straight to the section they want.
* **FC Related Products:** Products related to the one being viewed, perfect for encouraging a second purchase on a single product layout.
* **FC Product Search:** A search field scoped to your products.
* **FC Media Carousel:** A carousel of product media, useful for showcasing imagery in a rich page section.

### Product Details

These modules render the pieces of a single product, which makes them the building blocks of a custom product layout:

* **FC Product Card:** A complete product summary, useful for custom grids and feature sections.
* **FC Product Info:** A combined module covering several product details at once, such as the gallery, title, price, and buy controls.

### Selling and Checkout

These modules are the ones that actually take the money:

* **FC Add to Cart:** An add to cart button you can place anywhere, with your own button text.
* **FC Buy Now:** Sends the customer straight to checkout, skipping the cart.
* **FC Mini Cart:** A compact cart summary, well suited to a header or a sticky bar.
* **FC Checkout Page:** The full checkout form, so you can design the checkout experience inside Divi.

### Store and Account

These modules cover the rest of the storefront:

* **FC Store Logo:** Your store's logo, with the option to link it back to the home page.
* **FC Customer Dashboard:** The full customer account area, where shoppers manage their orders, subscriptions, and downloads.
* **FC Customer Dashboard Button:** A link into the customer dashboard, handy in a header or menu.

## Building Your Shop Page

The easiest way to display your catalog is with the **FC Products** module. Add it to a row, then open its **Content** tab to control exactly what it shows and how it behaves. The Divi canvas shows a live preview, and filters, sorting, and pagination all work on the published page.

![Screenshot of the FC Products module showing a product grid with its settings panel open in Divi](/images/customization-and-themes/divi/divi-4.webp)

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

The single-product modules, such as **FC Product Info** and **FC Product Card**, come into their own inside Divi's **Theme Builder**. Build the layout once in a template, and each module pulls its content from the product being viewed, so every product page follows the same design without you rebuilding it product by product.

If you prefer other builders, FluentCart offers the same depth elsewhere: see [FluentCart Bricks Blocks](/guide/customization-and-themes/fluentcart-bricks-blocks) for the Bricks equivalent, [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets) for Elementor, and [Using Gutenberg Blocks](/guide/customization-and-themes/using-gutenberg-blocks) for the block editor.

Your store's design is now entirely in your hands, module by module, without a line of code.
