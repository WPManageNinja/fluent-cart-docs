---
title: "Creating Product Bundles"
description: "A comprehensive guide on how to add and configure product bundles in FluentCart to sell multiple items as a single package."
---

# Creating Product Bundles

The **Bundles** feature in **FluentCart** allows you to group multiple products into a single bundle and sell them together as one offer. You can create bundles using digital products or physical products, making it easy to build starter packs, special deals, or upgrade offers.

Each product in a bundle still works independently, licenses, and fulfillment rules. This means you get the benefits of bundling without losing control over individual products.

In this guide, you’ll learn how to create, configure, and manage bundle products in FluentCart step by step.

## Steps to Create a New Product Bundle

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2.  On the Products screen, click the **"Add Product"** button at the top right.

    ![Screenshot of Add Product Button](/guide/public/images/product-types-creation/product-bundles/add-product-1.webp)

3.  This action will open a new **Add New Product** modal. 
    * Enter the **Bundle Title**. 
    * Select the product type, either **Physical Product** or **Digital Product**. 
    * Check the box labeled **Add as a Bundle** to combine multiple items into one package. 
4.  Click the **"Add Product"** button, and you will be redirected to the **"Edit Product"** page to configure all details.

    ![Screenshot of Add as a bundle](/guide/public/images/product-types-creation/product-bundles/add-as-a-bundle-2.webp)

### 1. Basic Product Information

* **Title:** Enter the main name of your bundle. This name appears on your shop page, in the cart, and at checkout.
* **Short description:** Write a brief summary of what the bundle includes. This provides customers with a quick overview near the product image or price.
* **Long Description:** This is the area for detailed information about the bundle's contents. FluentCart offers two ways to build this content:
    * **Using the Visual Builder (Recommended):** The Builder option uses the WordPress block editor (Gutenberg) to design rich product pages. Click **Show Content Editor** to add dynamic blocks such as images, videos, columns, and tables.
    * **Using the Classic Editor:** Provides a standard writing space with **Visual Mode** for standard typing and **Code Mode (HTML)** for advanced users.

### 2. Map Bundle Items

This section is unique to bundles and allows you to link the individual products that make up the package.

1.  Scroll down to the **Map bundle items** section.
2.  Under **Bundle Items**, use the dropdown to select the existing products you wish to include in this bundle.

> [!NOTE]
> Each bundled product retains its own identity under the hood, ensuring that reporting, downloads, and licenses continue to work correctly for each item in the bundle.

### 3. Media

* **Featured Image:** Set a prominent image that showcases all items included in the bundle.
* **Add Media:** Upload additional images or videos that show the bundled products from different angles or in use.

### 4. Product Taxonomies

This section helps you organize and tag your bundle for better storefront filtering.

* **[Product Categories:](/guide/product-types-creation/creating-managing-product-categories/index.md)** Assign the bundle to relevant categories (e.g., "Gift Sets"). You can select existing categories or click **+ Add Category** to create one instantly.
* **[Product Brand:](/guide/product-types-creation/creating-managing-product-brand.md):** Associate the bundle with a specific brand using the dropdown or the **+ Add Brand** button.

   ![Screenshot of Product Edit Screen (Physical Product Example)](/guide/public/images/product-types-creation/product-bundles/map-bundle-items-3.webp)

### 5. Pricing & Variations

Set the price for your bundle using one of two methods:

### Simple (No Variations)

Choose this if the bundle is a single package with one price. You can set the **Price**, an optional **Compare at price** to show savings, and toggle **Manage profit/cost** for internal tracking.

::: info
To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing.md) guide.
:::

![Screenshot of Simple Price](/guide/public/images/product-types-creation/product-bundles/simple-price.gif)

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

![Screenshot of Simple Variation](/guide/public/images/product-types-creation/product-bundles/simple-variation.gif)

To add another version of your product, click the **+ Add more** button to create a new row in the table.




### 6. Inventory Management

To track stock, ensure **Stock Management** is enabled in your settings.

* **Inventory Table:** Displays **Total Stock**, **Available** units, and units **On hold** or **Delivered**.
* **Adjusting Stock:** Click the adjustment icon in the **Total Stock** field to add or remove inventory.

### 7. Shipping and Tax Classes

* **Shipping Class:** Assign a class to apply location-based shipping costs at checkout. This works with your defined Shipping Zones and Methods.
* **Tax Class:** Select a pre-configured tax class to automatically apply the correct tax rate to the bundle during checkout.



### 8. Publishing Settings

* **Status:** Set the product to **'Publish'** to make it live or **'Draft'** to keep it hidden while editing.
* **URL Slug:** This is the unique web address for the bundle. FluentCart creates this automatically, but you can edit it manually.
* **Limit purchases to 1 item per order:** Check this box if the bundle is an exclusive item or limited offer.

Once all details are configured, click the **"Update"** or **"Save"** button at the top right to make your bundle live.

---
