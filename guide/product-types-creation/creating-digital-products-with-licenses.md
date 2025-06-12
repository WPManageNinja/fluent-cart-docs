 # Creating Digital Products with Licenses

FluentCart excels at managing digital products that require license keys, such as software, plugins, or premium digital content with activation limits. This guide details how to set up these complex products, including their specific licensing rules, upgrade paths, and downloadable assets.

## Steps to Create a New Licensed Digital Product

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left  WordPress sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.

### 1. Create a Digital Product 

To create a product with a digital license in FluentCart, you must first create a digital product, then attach the downloadable asset to the product, and Finally, generate a license for it. Follow the [documentation](/guide/product-types-creation/creating-digital-products) on creating a digital product, then refer to the steps outlined below in this section for the subsequent process.


### 2. Basic Product Information

* **Title:** Enter the main name of your licensed digital product (e.g., "Fluent Forms - 50 Sites Yearly License").
* **Short description:** Provide a brief, concise summary of the product.
* **Long Description:** Use the rich text editor to write a detailed description of your product, including its features and benefits.

### 3. Media

* **Featured Image:** Set a prominent image for your product (e.g., software icon, product box art).
* **Add Media:** Upload additional images or videos.

### 4. Product Organizer

Categorize and type your product for better organization.

* **Product Categories:**
    * Assign the product to relevant categories (e.g., "Software"). Click **"+ Add More Category"** to assign additional categories.
* **Product Types:**
    * Assign the product to relevant product types. Ensure **"Digital"** and/or **"Subscription"** (if recurring license) are selected or added here. Click **"+ Add More Type"** to assign additional types.

### 5. Pricing & Variations

This section is crucial for defining the different license tiers and their pricing.

* **Type Selection:** When [configuring product variations](/guide/product-types-creation/creating-physical-products#pricing-variations), ensure **"Digital"** and/or **"Subscription"** (if it's a recurring license) is selected as the product type within the pricing modal for your variants.
* **Pricing Table:** You'll define each license tier as a variation (e.g., "Single Site Yearly License", "50 Sites Lifetime License").
    * **Image:** You can upload a specific image for each license variant.
    * **Title:** The name of the license tier.
    * **Price:** The selling price for this specific license variant.
    * **Compare at price:** (Optional) A higher, struck-through price.
    * **Payment Term:**
        * **"One Time"** for lifetime licenses.
        * **"Yearly"**, **"Monthly"**, **"Weekly"**, or **"Daily"** for subscription-based licenses.
    * **Setup Fee:** (Optional) An initial fee for subscriptions.
    * **Manage Profit/Cost:** Enter the **"Cost per item"** for each license variant to track profitability.


### 6. Downloadable Asset(s)

This section is where you manage the digital files associated with your licensed product.

* Click **"+ Add Asset"** to upload or link your software package, documentation, or other digital content.
* You can choose to link assets to **specific variants** (e.g., a "pro" version download for a higher-tier license) or leave it empty for all variants.
* See [Adding & Managing Downloadable Assets](/guide/product-types-creation/creating-digital-products#5-downloadable-assets) for detailed steps.

### 7. Product-Specific License Settings

This is the most critical section for licensed digital products, offering granular control over each license's behavior.

1.  On the Product Edit screen, click the **"License Settings"** tab.

    ![Screenshot of Product License Settings Tab](/guide/public/images/product-types-creation/creating-digital-product-license/License-Settings-1.png)

2.  **Enable Licensing for this product:** Ensure this checkbox is enabled to activate licensing for this product.

3.  **License Configuration Table (Per Variant):**
    * **Activation Limit:** For each license variant (e.g., "Single Site Yearly License"), set the number of times the license key can be activated (e.g., 1, 5, 50).
    * **License Validity:** Define the duration of the license for each variant:
        * Enter a number of **"Years"**.
        * Check **"Lifetime"** for an indefinite license.

4.  **Software/Plugin Specific Information:**
    * **Version Number:** Enter the current version of your digital product (e.g., "1.0.1").
    * **Description:** Provide a description related to the license or software.
    * **Is WP Plugin?:** Check this box if your product is a WordPress plugin.
    * **Readme URL (.txt file):** If it's a WordPress plugin, provide the URL to its `readme.txt` file for update checks.
    * **Update File:** This field typically displays the main downloadable asset used for software updates (e.g., `fluent-form-pro.zip`).
    * **Banner URL:** Provide a URL for a plugin banner image.
    * **Icon URL:** Provide a URL for a plugin icon image.
    * **Required PHP Version (optional):** Specify the minimum PHP version required for your product.
    * **Required WP Version (optional):** Specify the minimum WordPress version required for your product.
    * **License Key Prefix:** Define a custom prefix for license keys generated for this product (e.g., "ff-").


### 8. Managing Product Integrations (Product-Specific)

On the Product Edit screen, click the **"Integrations"** tab.

* Here you can connect this specific product to other FluentCart modules or third-party services that have a direct impact on its functionality, sales, or fulfillment.
* For example, you might integrate a specific product with **FluentCRM** to add customers who purchase this product to a particular list, or with **FluentForms** if product purchase triggers a form submission.

To learn more about managing product integrations, check out this [article](/guide/product-types-creation/managing-product-integrations).

### 9. Defining Upgrade Paths

On the Product Edit screen, click the **"Upgrade Paths"** tab.

* This powerful feature allows you to create seamless upgrade options for customers holding a license for this product.
* You can define paths from a **"From Plan"** (e.g., "Single Site Yearly License") to a **"To Plan"** (e.g., "5 Sites Yearly License" or "Single Site Lifetime License").
* Specify a **"Discount Amount"** and whether the upgrade is **"Prorated"** (meaning the customer gets credit for unused time on their old plan).

To learn more about upgrade paths, check out this [article](/guide/product-types-creation/defining-upgrade-paths).


## Publishing Your Licensed Digital Product

Once you have configured all the necessary details:

1.  Set the **Status** to **"Published"** in the "Publishing" section.
2.  Click the **"Update"** (or "Save") button on the top right to make your product live in your store.
