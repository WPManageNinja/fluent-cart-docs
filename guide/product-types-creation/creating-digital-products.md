 # Creating Digital Products

This guide provides step-by-step instructions for adding a digital product to your FluentCart store.

A digital product is any file that customers can download after purchase, such as an e-book, software, music, or design template. FluentCart gives you all the tools to set up these items correctly.

In this guide, you will learn how to:

* Add product details and set a price.
* Upload the downloadable file for your customers.
* Manage different product variations if needed.

By the end, you will be able to confidently sell and manage any downloadable item.

## Steps to Create a New Digital Product

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left WordPress sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.

    ![Screenshot of Add Product Button](/guide/public/images/product-types-creation/creating-digital-product/Digital-product-1.png)

3.  This will open the **Add New Product** popup from where you have to give the product name and select the product type **Digital Product** then the **Edit Product** page will come.

    ![Screenshot of Product Edit Screen (Digital Product Example)](/guide/public/images/product-types-creation/creating-digital-product/Digital-product-3.png) 

### 1. Basic Product Information

* **Title:** Enter the main name of your digital product (e.g., "E-Book: Mastering FluentCart").
* **Short description:** Provide a brief, concise summary of the digital product.
* **Long Description:** Use the rich text editor to write a detailed description of your product, including its benefits and content.

### 2. Media

* **Featured Image:** Set a prominent image for your digital product (e.g., e-book cover, software icon).
* **Add Media:** Upload additional images or videos to showcase your product.

### 3. Product Organizer

Categorize and type your digital product for better organization.

* **Product Categories:**
    * Assign the product to relevant categories (e.g., "E-Books", "Software"). Click **"+ Add More Category"** to assign additional categories.
* **Product Types:**
    * Assign the product to one or more relevant product types. Ensure "Digital" is selected or added here. Click **"+ Add More Type"** to assign additional types.

### 4. Pricing & Variations

This section is where you will set the price for your digital product. FluentCart provides two main methods: **Simple** (for products with no variations) and **Simple Variations** (for products with different versions).

First, use the dropdown menu at the top right of the pricing section to select the pricing method that fits your product.


#### Option A: Simple Pricing

Choose this option when your product is a single item that does not have different versions. Within Simple Pricing, you can choose between two payment terms.

**1. One-Time Payment**

Select **One Time** from the "Select Payment Term" dropdown for products that customers purchase with a single payment.

* **Price:** Set the required selling price for the product.
* **Compare at price:** (Optional) Enter a higher original price to show a discount.
* **Manage profit/cost:** (Optional) Toggle this on to enter the item's cost for internal profit tracking.

**2. Subscription Payment**

Select **Subscription** for products that require recurring payments.

* **Installment Price:** The amount for each recurring payment.
* **Compare at price:** (Optional) A higher price to show a discount on each installment.
* **Interval:** The billing frequency, such as monthly or yearly.
* **Enable installment payment:** Check this box to set a fixed number of payments.
* **Installment Count:** The total number of payments the customer will make.
* **Total Price:** This automatically calculates the total cost based on the installment price and count.
* **Setup fee:** (Optional) Toggle this on to add a one-time initial fee.
* **Manage profit/cost:** (Optional) Toggle this to track your cost and profit margin on the subscription.

![Gif of Digital Product Edit Screen (Simple Pricing)](/guide/public/images/product-types-creation/creating-digital-product/simple-price.gif) 
---

#### Option B: Simple Variations

Choose this option when your product has multiple versions, like "Standard" and "Pro". This allows you to create a table of variations, each with its own pricing structure.

**1. Adding and Managing Variations in the Table**

* **To Add a New Variation:** Click the `+ Add more` button at the bottom to add a new row to the table.
* **To Configure a Variation:** To set the price and other details for a specific variation, click the pencil icon in the "Action" column. This will open a detailed configuration sidebar.
* **To Duplicate a Variation:** Click the three-dot icon in the "Action" column to get the option for duplicating the variation.

**2. Configuring a Single Variation (Pencil Icon)**

After clicking the pencil icon, a sidebar appears where you can set up the pricing for that specific version. You must choose a payment term: **One Time** or **Subscription**.

**A. One-Time Payment for a Variation**

This option is for a variation that is sold for a single payment.

* **Title:** The name of the specific variation (e.g., "File Manager Pro").
* **Select Payment Term:** Choose **One Time** from the dropdown menu.
* **Price:** Set the selling price for this variation.
* **Compare at price:** An optional higher price to show a discount.
* **Manage profit/cost:** Toggle this on to enter the **Cost per item** and track the **Profit** and **Margin**.
* **Image:** Upload a specific image for this variation.

**B. Subscription Payment for a Variation**

This option is for a variation that is sold on a recurring payment basis.

* **Select Payment Term:** Choose **Subscription** from the dropdown menu.
* **Price:** The price for each recurring payment.
* **Compare at price:** An optional higher price to show a discount on the recurring payment.
* **Interval:** The billing frequency (e.g., Yearly).
* **Enable installment payment:** Check this to set a fixed number of payments.
* **Setup fee:** Toggle this on to add a one-time initial fee for the subscription.
* **Manage profit/cost:** Toggle this to track profit and margin.
* **Image:** Upload a unique image for this subscription variation.

   ![Gif of Digital Product Edit Screen (Simple VAriation)](/guide/public/images/product-types-creation/creating-digital-product/simple-variation2.gif) 

::: info
To learn more about variation pricing setups, see the [Configure Product Pricing](/guide/product-types-creation/configuring-product-pricing.md) guide.
:::

### 5. Downloadable Asset(s)

This crucial section is where you manage the actual digital files customers will receive.

* Initially, you'll see a list of any previously added assets.
* Click **"+ Add Asset"** to upload or link a new downloadable file.
    ![Screenshot of Add Downloadable Asset(s) Button](/guide/public/images/product-types-creation/creating-digital-product/Digital-product-5.png) 
* An **"Add Downloadable Asset(s)"** modal will appear.

    * **Choose variant:** (Optional) If your digital product has multiple variations, you can select which specific variant(s) this asset applies to. Leave empty for all variants.
    * **Choose File:** Click this button to upload a file from your local computer or select from existing files in your FluentCart storage.
        * This will open a **"Storage Drivers"** modal, showing options like **Local** storage (drag & drop or browse) or **S3** (if configured).
![Screenshot of Choose File Modal (Storage Drivers)](/guide/public/images/product-types-creation/creating-digital-product/Digital-product-6.png)
    * **File URL:** (Alternative) Provide a URL if your digital asset is hosted externally.
    * **File Name:** Enter a display name for the downloaded file. You can [edit this file name](/guide/product-types-creation/creating-digital-products#editing-uploaded-file-names) after upload if needed.
    * Click **"Save Asset"** to add the file to your product.

:::warning Important Note: Subscription Products
The "Add Items" modal when [editing orders](/guide/store-management/orders-management/editing-existing-orders) currently **does not support adding subscription products**. Subscription orders must be initiated as such.
:::

### Shipping Class

You can assign a **Shipping Class** to any product to apply location-based shipping costs.

To add a shipping class:

1. Scroll to the **Shipping Class** section (right side of the product edit screen).
2. Select or create a shipping class (e.g., *NYC Zone*).
3. The defined shipping cost will automatically apply at checkout for that region.

Shipping classes work with **Shipping Zones** and **Shipping Methods** to control how and where you deliver products.

> **Note:** Digital products typically don’t require shipping, but you can still assign a class if needed for special handling or hybrid products.

::: info
To learn more about how shipping classes work, see the [Understanding Shipping Classes](/guide/shipping/understanding-shipping-classes) guide.
:::

## Publishing Your Digital Product

Once you have configured all the necessary details:

1.  Set the **Status** to **"Published"** in the "Publishing" section.
2.  Click the **"Update"** (or "Save") button on the top right to make your digital product live in your store.


