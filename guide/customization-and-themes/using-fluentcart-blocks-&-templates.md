# Using FluentCart Blocks & Templates

FluentCart provides a powerful set of dedicated blocks for the WordPress block editor (Gutenberg), allowing you to build and customize your e-commerce pages with ease. Instead of being limited to predefined layouts, you can use these blocks to create a fully custom shop page, display specific products, and add e-commerce functionalities anywhere on your site.

This guide will walk you through the different methods you can use to design your shop, product, and checkout pages.

## Building with FluentCart Blocks

The easiest and most flexible way to build your store is with FluentCart's dedicated blocks. These act like building bricks, allowing you to add e-commerce features to any page or post in the WordPress editor.

### Accessing FluentCart Blocks

 1. From your WordPress dashboard, open any **page** or **post**.
 2. Click the **plus icon (+)** to open the block inserter.
 3. Scroll down to find the **FluentCart** and **FluentCart Buttons** categories, or simply search for the block you need.

   ![Screenshot of FluentCart Blocks](/images/customization-and-themes/using-fluentcart-blocks/accessing-fluentcart-blocks.webp)

### Understanding the Core Blocks

FluentCart provides a comprehensive suite of blocks designed to help you build everything from a high-converting main shop page to highly customized product landing pages. These blocks are modular, allowing you to drag and drop elements exactly where you need them.

#### Store-wide & Navigation Blocks

These blocks form the backbone of your store, handling how users browse products and manage their accounts.

* **Products:** The primary block for your shop. It displays a dynamic grid of products that you can filter by category, tag, or status.
* **Product Carousel:** A dynamic slider block that showcases your products in a rotating carousel. Perfect for "Featured" sections or "New Arrivals" on your homepage.
* **Product Search:** Adds a specialized search bar that searches exclusively within your FluentCart product catalog.
* **Mini Cart:** A compact cart widget for your header or sidebar. It allows shoppers to quickly peek at their items, view the total price, and see the item count without leaving their current page.
* **Product Categories List:** Displays a organized list of your product categories, making it easy for customers to navigate different departments of your store.
* **Customer Dashboard:** A dedicated block for the "My Account" area where customers can view orders, manage subscriptions, and update their profile.
* **Checkout Page:** The essential block that renders the secure checkout form for completing purchases.

#### Single Product Modular Blocks

Use these blocks to build custom layouts for individual products or landing pages. They automatically pull data from the product they are assigned to.

* **Product Card:** Displays a specific product in a visually appealing standalone card format.
* **Product Info:** Renders the core details of a product, such as the Title and Short Description.
* **Price Range:** Displays the price or price range (for variable products) with automatic currency formatting.
* **Excerpt:** Shows a brief snippet or summary of the product description.
* **Buy Section:** The functional hub of a product page, containing variation selectors (Size, Color), quantity input, and the "Add to Cart" button.
* **Stock:** Displays the current inventory status (e.g., "In Stock" or "Out of Stock") to provide clarity to shoppers.

#### Call to Action Blocks

These focused blocks are designed to be placed anywhere on your site to trigger an immediate purchase action.

* **Buy Now:** A direct action button that can be configured to trigger the Instant Checkout (modal) or lead directly to the checkout page for a specific product.
* **Add to Cart:** A standalone button that adds a specific product or variation to the customer's cart while keeping them on the same page.

#### Customizing Your Blocks

Every FluentCart block features a **Settings Sidebar** on the right side of the WordPress editor. For example:

* **Mini Cart Settings:** You can choose your preferred icon (Cart, Bag, etc.), toggle the "Total Price" display, and decide when to show the item count (Always, Only if items exist, or Never).
* **Product Categories Settings:** You can toggle the display style between a list or dropdown and choose to show or hide the product counts for each category.

> **Tip:** Use the Product Carousel block at the top of your homepage to highlight your best-selling items with high-quality imagery to grab attention immediately.


> **Note:** Each FluentCart block comes with its own customization settings. After adding a block, check the settings panel on the right to adjust design, alignment, behavior, and visibility.


## Advanced Layout Control: A Practical Example

The Products block is not just a static grid—it's a flexible container with smaller, nested blocks inside it. This allows you to completely change the layout of your product listings without any code.

### Example: Moving the Price Above the Image

Let's say you want to create a unique look for your shop by displaying the price before the product image.
 1. Add the Products block to your page.
 2. Select the block, and in the toolbar at the top of the editor, click the **List View** icon.
 3. In the **List View** panel, expand the Products block to see its nested structure. You will find blocks like **Product Image**, **Product Title**, and **Product Price**.
 4. Simply click and drag the **Product Price** block and move it above the **Product Image** block.

Just like that, you have changed the layout for every product in the grid. You can reorder, remove, or customize any of the inner blocks to create the perfect design for your store.

   ![Screenshot of List View](/images/customization-and-themes/using-fluentcart-blocks/list-view.webp)

## Customizing Core Layouts with Templates (for Block Themes)

If you are using a modern, block-based WordPress theme, you can edit FluentCart's core templates directly. This gives you control over the fundamental design of your product and archive pages.

### Accessing FluentCart Templates

 1. From your WordPress dashboard, go to **Appearance** > **Editor**.
 2. In the Site Editor, select **Templates**.
 3. Look for the FluentCart templates.
  * **Single Product:** This template controls the design of your individual product pages. Edit this to change the layout of the product title, image, description, and price for all products at once.
  * **Products by Category:** This template controls the design of your category pages (the pages that list all products in a category).

   ![Screenshot of FluentCart Templates](/images/customization-and-themes/using-fluentcart-blocks/fluentcart-templates.webp)

## Integrating with Page Builders Bricks

FluentCart's blocks are also fully compatible with popular page builder Bricks. This allows you to seamlessly integrate FluentCart's e-commerce power with the advanced design capabilities of Bricks.
You can use the FluentCart templates directly within the Bricks editor just as you would in the standard WordPress editor, giving you the best of both worlds. 

For other builders that may not have direct block support, FluentCart also provides shortcodes as a flexible way to add product grids and buttons to any design.

> [!TIP] 
>You can always return later to make changes. The Block Editor is flexible, so feel free to experiment without worrying about messing up your layout.

### Save Your Changes
When you’re done making changes, click the **Save** button at the top right. Your customized template will now be live on your site.