 # Creating Physical Products

This guide will walk you through the process of adding a new physical product to your FluentCart store. A physical product is any tangible item that you sell and ship to your customers.

We will cover every essential step to get your product ready for sale. You will learn how to configure all the necessary details, including:

* Product name, description, and images
* Pricing and sales information
* Inventory and stock levels
* Variations such as size or color

By the end of this guide, you will be able to confidently list and manage any physical product in your inventory.

## Steps to Create a New Physical Product

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.

    ![Screenshot of Add Product Button](/images/product-types-creation/Creating-Physical-Products/physical-product-1.webp)
    

3.  This will open the **Add New Product** screen, where you'll need to enter the product name and choose the product type either Physical Product or Digital Product. Once selected, you'll be taken to the **Edit Product** page.

    ![Screenshot of Product Edit Screen (Physical Product Example)](/images/product-types-creation/Creating-Physical-Products/physical-product-2.webp)

### 1. Basic Product Information

* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere: on your shop page, in the cart, and at checkout.
* **Short description:** Write a brief, simple summary of what the product is. This usually shows up quickly near the product picture or price, giving customers a quick, important overview.
* **Long Description:** This is the large area for all the detailed information, like features, materials, and how to use the product. FluentCart offers two great ways to build this content:

    ##### **Using the Visual Builder (Recommended for Dynamic Content)**

    The **Builder** option uses the powerful block editor built into WordPress (Gutenberg). This lets you design rich, visual, and highly effective product pages.

    1.  Click the **Builder** button, located next to the **Classic Editor** option.
    2.  Click **Show Content Editor** to open the design screen.
    3.  This screen gives you the opportunity to create dynamic descriptions by adding any available WordPress content blocks. For example, you can add:
        * **Images & Videos:** Show extra product media right within the description.
        * **Layouts:** Use columns to put text and pictures side-by-side for a clean look.
        * **Lists & Tables:** Clearly list specifications or sizes.

    By using the **Visual Builder**, you get the power to create beautiful product descriptions that help sell your products better and give customers a great shopping experience.

    ##### **Using the Classic Editor**

    The **Classic Editor** gives you a standard, quick writing space. Within this editor, you have two modes:

    * **Visual Mode:** This is the standard view where you type your description directly. You'll have formatting options above (like bold, italics, lists) and options to easily add media with your text.
    * **Code Mode (HTML):** This view is for advanced users who want to write the long description using raw **HTML codes**.

### 2. Media

* **Featured Image:** Set a prominent image for your product.
* **Add Media:** Upload additional images or videos that showcase your product from different angles or in use.

### 3. Product Organizer

Categorize and type your product for better organization and filtering.

### 3. Product Taxonomies

This section helps you organize and tag your product using WordPress taxonomies for better filtering and presentation on your storefront.

* **[Categories:](/guide/product-types-creation/creating-managing-product-categories/index.md)** Assign the product to one or more relevant **Categories** (e.g., "Men's Shoes"). You can select existing categories from the dropdown menu or click **+ Add Category** to create a new one instantly.
* **[Types:](/guide/product-types-creation/creating-managing-product-types/index.md)** Assign the product to one or more relevant product **Types**. You can select an existing type or click **+ Add Type** to create a new type if the relevant option is not listed.
* **[Brands:](/guide/product-types-creation/creating-managing-product-brand.md)** Use this field to associate the product with a specific **Brand**. Select the brand name from the dropdown menu or click **+ Add Brand** if the brand doesn't exist yet in your FluentCart settings.

By using these taxonomies, you ensure customers can easily find and filter your products on your shop pages.

### 4. Pricing & Variations

This section is where you will set the price for your product. FluentCart offers two methods, depending on whether the product has different versions (like size or color) or is a single item.

First, use the dropdown menu at the top right of the pricing section to select either **Simple** or **Simple Variations**.

#### Simple (For Products with No Variations)

Choose this option when your product is a single item with only one price. For example, a book or a standard coffee mug.

You will see the following fields:

* **Price:** (Required) The main selling price for the product.
* **Compare at price:** (Optional) An original or higher price that will be shown with a strikethrough to indicate a sale.
* **Manage profit/cost:** (Optional) Toggle this on to enter the cost of the item. FluentCart will use this to calculate your profit and margin for internal tracking.
* **Direct Checkout:** A unique URL that takes a customer directly to the checkout page with a specific product variation already added to their cart.

![Screenshot of Simple Price](/images/product-types-creation/Creating-Physical-Products/simple-price.gif)

::: info
To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing.md) guide.
:::

#### Simple Variations (For Products with Different Versions)

Choose this option when your product comes in different versions, such as t-shirts in various sizes and colors. This will allow you to set a different price, image, and stock level for each variation.

This will display a table where each row is a single variation.

* **Image:** Upload a specific image for each variation (e.g., a photo of the red shirt).
* **Title:** Name the variation clearly.
* **Price:** Set the specific price for this individual variation.
* **Compare at price:** (Optional) Set a sale price for this specific variation.
* **Action:** This column contains icons to manage each variation row.
    * **Edit Icon (Pencil):** Click this to edit the pricing variation's details.    
    * **More Options (Three Dots):** Click this to open a menu with more options:
        * **Skip inventory:** Check this box if you do not want to track stock for this specific variation.
        * **Duplicate:** Click this to create an exact copy of this variation row.
        * **Direct Checkout:** Get a direct link to purchase this specific variation, bypassing the main product page.

![Screenshot of Simple Variation](/images/product-types-creation/Creating-Physical-Products/simple-variation.gif)

To add another version of your product, click the **+ Add more** button to create a new row in the table.

### 5. Inventory Management

To track the stock for your product, first, make sure the [**Stock Management**](/guide/product-types-creation/inventory-management.md) feature is enabled from the settings section.

An inventory table will then be displayed, with a separate row for each product variation. This table helps you monitor your stock levels at a glance.

#### Understanding the Inventory Table

* **Title:** The name of the product or variation.
* **Total Stock:** The total number of units you have for this item, including those available, on hold, or delivered.
* **Available:** The number of units currently available for customers to purchase.
* **On hold:** Units that are part of a pending order but have not yet been shipped.
* **Delivered:** The total number of units that have been successfully sold and fulfilled.

#### How to Adjust Stock Levels

To manually update your stock count for any variation:

1.  Click the **adjustment icon** located inside the **Total Stock** field.
2.  A small window will pop up.
    * **Adjust by:** Enter a number to change the current stock. Use a positive number (like `50`) to add inventory or a negative number (like `-10`) to remove it.
    * **New Stock:** This field automatically previews the final stock total after your adjustment.
3.  Click the **Apply** button to save the new stock level.

### Shipping Class

You can assign a **Shipping Class** to any product to apply location-based shipping costs.

To add a shipping class:

1. Scroll to the **Shipping Class** section (right side of the product edit screen).
2. Select or create a shipping class (e.g., *NYC Zone*).
3. The defined shipping cost will automatically apply at checkout for that region.

Shipping classes work with **Shipping Zones** and **Shipping Methods** to control how and where you deliver products.

::: info
To learn more about how shipping classes work, see the [Understanding Shipping Classes](/guide/shipping/understanding-shipping-classes) guide.
:::


## Publishing Your Physical Product

Once you have configured all the necessary details:

1.  Set the **Status** to **"Published"** in the "Publishing" section.
2.  Click the **"Update"** (or "Save") button on the top right to make your product live in your store.
    * You can also click **"Preview"** to see how the product page will look before publishing.
