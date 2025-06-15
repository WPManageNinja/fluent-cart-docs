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

    ![Screenshot of Add Product Button](/guide/public/images/product-types-creation/Creating-Physical-Products/physical-product-1.png)
    

3.  This will open the **Add New Product** screen, where you'll need to enter the product name and choose the product type either Physical Product or Digital Product. Once selected, you'll be taken to the **Edit Product** page.

    ![Screenshot of Product Edit Screen (Physical Product Example)](/guide/public/images/product-types-creation/Creating-Physical-Products/physical-product-2.png)

### 1. Basic Product Information

* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers").
* **Short description:** Provide a brief, concise summary of the product.
* **Long Description:** Use the rich text editor to write a detailed description of your product. You can format text, add media, and switch to a "Visual Code" view for HTML editing.

### 2. Media

* **Featured Image:** Set a prominent image for your product.
* **Add Media:** Upload additional images or videos that showcase your product from different angles or in use.

### 3. Product Organizer

Categorize and type your product for better organization and filtering.

* **Product Categories:**
    * Assign the product to one or more relevant categories (e.g., "Mens Shoes"). You can [manage your categories](/guide/product-types-creation/creating-managing-product-categories/) from the FluentCart settings.
    * Click **"+ Add More Category"** to assign additional categories.
* **Product Types:**
    * Assign the product to one or more relevant product types. Ensure the relevant product type is selected or added here. You can [manage your product types](/guide/product-types-creation/creating-managing-product-types/) from the FluentCart settings.
    * Click **"+ Add More Type"** to assign additional types.

### 4. Pricing & Variations

This section is where you will set the price for your product. FluentCart offers two methods, depending on whether the product has different versions (like size or color) or is a single item.

First, use the dropdown menu at the top right of the pricing section to select either **Simple** or **Simple Variations**.

#### Simple (For Products with No Variations)

Choose this option when your product is a single item with only one price. For example, a book or a standard coffee mug.

You will see the following fields:

* **Price:** (Required) The main selling price for the product.
* **Compare at price:** (Optional) An original or higher price that will be shown with a strikethrough to indicate a sale.
* **Manage profit/cost:** (Optional) Toggle this on to enter the cost of the item. FluentCart will use this to calculate your profit and margin for internal tracking.

#### Simple Variations (For Products with Different Versions)

Choose this option when your product comes in different versions, such as t-shirts in various sizes and colors. This will allow you to set a different price, image, and stock level for each variation.

This will display a table where each row is a single variation.

* **Image:** Upload a specific image for each variation (e.g., a photo of the red shirt).
* **Title:** Name the variation clearly.
* **Price:** Set the specific price for this individual variation.
* **Compare at price:** (Optional) Set a sale price for this specific variation.
* **Action:** This column contains icons to manage each variation row.
    * **Edit Icon (Pencil):** Click this to edit the variation's details in-line.
    * **More Options (Three Dots):** Click this to open a menu with more options:
        * **Skip inventory:** Check this box if you do not want to track stock for this specific variation.
        * **Duplicate:** Click this to create an exact copy of this variation row.
        * **Direct Checkout:** Get a direct link to purchase this specific variation, bypassing the main product page.

To add another version of your product, click the **+ Add more** button to create a new row in the table.

### 5. Inventory Management

To track the stock for your product, first, make sure the **Inventory Management** toggle at the top of this section is enabled.

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

## Publishing Your Physical Product

Once you have configured all the necessary details:

1.  Set the **Status** to **"Published"** in the "Publishing" section.
2.  Click the **"Update"** (or "Save") button on the top right to make your product live in your store.
    * You can also click **"Preview"** to see how the product page will look before publishing.
