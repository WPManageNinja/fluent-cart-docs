# Using FluentCart Blocks & Templates

FluentCart provides a powerful set of dedicated blocks for the WordPress block editor (Gutenberg), allowing you to build and customize your e-commerce pages with ease. Instead of being limited to predefined layouts, you can use these blocks to create a fully custom shop page, display specific products, and add e-commerce functionalities anywhere on your site.

This guide will walk you through the different methods you can use to design your shop, product, and checkout pages.

## Building with FluentCart Blocks

The easiest and most flexible way to build your store is with FluentCart's dedicated blocks. These act like building bricks, allowing you to add e-commerce features to any page or post in the WordPress editor.

### Accessing FluentCart Blocks

 1. From your WordPress dashboard, open any **page** or **post**.
 2. Click the **plus icon (+)** to open the block inserter.
 3. Scroll down to find the **FluentCart** and **FluentCart Buttons** categories, or simply search for the block you need.

   ![Screenshot of FluentCart Blocks](/images/miscellaneous/using-fluentcart-blocks/accessing-fluentcart-blocks.webp)

## Understanding the Core Blocks

FluentCart provides a wide range of blocks to help you build everything from your main shop page to a custom product landing page.

* **Products:** This is the cornerstone block for building your shop. It displays a dynamic and fully customizable grid of your products. Use it to create your main `/shop` page, or place it on your homepage to feature new arrivals or best-sellers. In the block settings, you can filter which products appear based on categories, tags, and more.
* **Product Search:** This block adds a clean and simple search bar to your page. It's designed to search only within your FluentCart products, making it a powerful tool to help customers find exactly what they're looking for.
* **Customer Dashboard:** Use this block on a single page to create a dedicated **"My Account"** area. It automatically provides a secure dashboard where logged-in customers can view their purchase history, manage active subscriptions, download files, and update their personal details.
* **Checkout Page:** This block is essential for your store to function. Add it to a blank page to designate it as your official checkout page. It will automatically render the entire secure checkout form.
* **Product Card:** Perfect for highlighting a single item. This block displays one specific product in a visually appealing card format. It's ideal for featuring a "Product of the Week" on your homepage or embedding an item within a blog post review.
* **Product Gallery:** This block displays the image gallery for a specific product. It's designed to be used when you are building a custom product page layout and want to place the image gallery in a specific location.
* **Product Info:** This block displays the core information for a specific product, such as its title, short description, and price. Like the gallery, it's a modular block for building custom product pages.
* **Buy Section:** This block displays the complete purchasing section for a product, including its variation options (e.g., sizes, colors), quantity selector, and the "Add to Cart" button. It's another key component for creating custom product layouts.
* **Stock:** This block displays the current stock status for a specific product (e.g., "In Stock," "Out of Stock"). This is useful for adding scarcity and urgency to your custom product pages.

> [!NOTE]
>Every FluentCart blocks comes with its own set of customization options. After adding a block, be sure to check the block settings sidebar on the right to fine-tune its appearance and functionality.


## Advanced Layout Control: A Practical Example

The Products block is not just a static grid—it's a flexible container with smaller, nested blocks inside it. This allows you to completely change the layout of your product listings without any code.

### Example: Moving the Price Above the Image

Let's say you want to create a unique look for your shop by displaying the price before the product image.
 1. Add the Products block to your page.
 2. Select the block, and in the toolbar at the top of the editor, click the **List View** icon.
 3. In the **List View** panel, expand the Products block to see its nested structure. You will find blocks like **Product Image**, **Product Title**, and **Product Price**.
 4. Simply click and drag the **Product Price** block and move it above the **Product Image** block.

Just like that, you have changed the layout for every product in the grid. You can reorder, remove, or customize any of the inner blocks to create the perfect design for your store.

   ![Screenshot of List View](/images/miscellaneous/using-fluentcart-blocks/list-view.webp)

## Customizing Core Layouts with Templates (for Block Themes)

If you are using a modern, block-based WordPress theme, you can edit FluentCart's core templates directly. This gives you control over the fundamental design of your product and archive pages.

### Accessing FluentCart Templates

 1. From your WordPress dashboard, go to **Appearance** > **Editor**.
 2. In the Site Editor, select **Templates**.
 3. Look for the FluentCart templates.
  * **Single Product:** This template controls the design of your individual product pages. Edit this to change the layout of the product title, image, description, and price for all products at once.
  * **Products by Category:** This template controls the design of your category pages (the pages that list all products in a category).

   ![Screenshot of FluentCart Templates](/images/miscellaneous/using-fluentcart-blocks/fluentcart-templates.webp)

## Integrating with Page Builders Bricks

FluentCart's blocks are also fully compatible with popular page builder Bricks. This allows you to seamlessly integrate FluentCart's e-commerce power with the advanced design capabilities of Bricks.
You can use the FluentCart templates directly within the Bricks editor just as you would in the standard WordPress editor, giving you the best of both worlds. 

For other builders that may not have direct block support, FluentCart also provides shortcodes as a flexible way to add product grids and buttons to any design.

> [!TIP] 
>You can always return later to make changes. The Block Editor is flexible, so feel free to experiment without worrying about messing up your layout.

### Save Your Changes
When you’re done making changes, click the **Save** button at the top right. Your customized template will now be live on your site.