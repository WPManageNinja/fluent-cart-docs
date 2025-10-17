 # Creating Digital Products with Licenses

This guide provides a complete walkthrough for selling digital products that require a license key, such as software, plugins, or premium content.

Licensing helps you protect your digital items by controlling how they are used. By issuing a unique key to each customer, you can manage how many times your product can be activated and for how long the license is valid.

In this guide, you will learn how to:

* Create different license tiers with unique pricing (e.g., "Single Site License" or "50 Sites Lifetime").
* Attach the main downloadable file that your customers will receive.
* Set specific activation limits and license durations (like yearly or lifetime) for each tier.
* Create customer-friendly upgrade paths to allow moving between different license tiers.

Follow these steps to confidently configure all the necessary settings for your licensed digital products.

## Steps to Create a New Licensed Digital Product

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left  WordPress sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.

### 1. Create a Digital Product 

To create a product with a digital license in FluentCart, you must first create a digital product, then attach the downloadable asset to the product, and Finally, generate a license for it. 

> [!NOTE]
> You can learn more about creating a digital product by following the [Creating Digital Product](/guide/product-types-creation/creating-digital-products) guide. The following sections also cover the basic steps.



### 2. Basic Product Information

* **Title:** Enter the main name of your licensed digital product (e.g., "Fluent Forms - 50 Sites Yearly License").
* **Short description:** Provide a brief, concise summary of the product.
* **Long Description:** Use the rich text editor to write a detailed description of your product, including its features and benefits.

### 3. Media

* **Featured Image:** Set a prominent image for your product (e.g., software icon, product box art).
* **Add Media:** Upload additional images or videos.

### 4. Product Taxonomies

Categorize and type your product for better organization.

* **Product Categories:**
    Assign the product to relevant categories (e.g., "Software"). Click **"+ Add More Category"** to assign additional categories.

* **Product Brand:** 
    Assign the product to relevant brands. Click to **"+Add Brand”** to assign additional brands.

### 5. Pricing & Variations

This section is crucial for defining the different license tiers and their pricing.

* **Type Selection:** When [configuring product variations](/guide/product-types-creation/creating-digital-products.html#4-pricing-variatio), ensure **"Digital"** and/or **"Subscription"** (if it's a recurring license) is selected as the product type within the pricing modal for your variants.
* **Pricing Table:** You'll define each license tier as a variation (e.g., "Single Site Yearly License", "50 Sites Lifetime License").
    * **Image:** You can upload a specific image for each license variant.
    * **Title:** The name of the license tier.
    * **Price:** The selling price for this specific license variant.
    * **Compare at price:** (Optional) A higher, struck-through price.
    * **Payment Term:**
        * **"One Time"** for lifetime licenses.
        * **"Yearly"**, **"Monthly"**, **"Weekly"**, or **"Daily"** for subscription-based licenses.
    * **Setup Fee:** (Optional) An initial fee for subscriptions.
    * **Calculate Profit/Cost:** Enter the **"Cost per item"** for each license variant to track profitability.


### 6. Downloadable Asset(s)

This section is where you manage the digital files associated with your licensed product.

* Click **"+ Add Asset"** to upload or link your software package, documentation, or other digital content.
* You can choose to link assets to **specific variants** (e.g., a "pro" version download for a higher-tier license) or leave it empty for all variants.
* See [Adding & Managing Downloadable Assets](/guide/product-types-creation/creating-digital-products#5-downloadable-assets) for detailed steps.

### 7. Product-Specific License Settings

This is the most important section for licensed digital products, offering granular control over each license's behavior.

#### Enable License Add-on
Before you can set up licenses for a specific product, you need to make sure the main licensing feature is turned on for your entire store. This is a quick, one-time step.

1. Navigate to **FluentCart Pro** > **Settings** from the left WordPress sidebar.

2. Click on the **Features & Add-ons** tab.

3. Locate the **Product Licensing** option and click the **toggle** button to enable it.

4. Click the **Save Settings** button to apply the change.

    ![Screenshot of Enable License Add-on](/images/product-types-creation/creating-digital-product-license/license-add-on.webp)

#### Configure Product License Settings

Once the add-on is enabled, you can configure the license settings for each product. On the Product Edit screen, click the **License Settings** tab.

1.  On the Product Edit screen, click the **"License Settings"** tab.

    ![Screenshot of Product License Settings Tab](/images/product-types-creation/creating-digital-product-license/License-Settings-1.webp)

2.  **Enable Licensing for this product:** Ensure this checkbox is enabled to activate licensing for this product.

3.  **License Configuration Table (Per Variant):**
    * **Activation Limit:** For each license variant (e.g., "Single Site Annual License"), set the number of times the license key can be activated (e.g., 50, 100).

4.  **Software/Plugin Specific Information:**
    * **Version Number:** Enter the current version of your digital product (e.g., "1.0.1").
    * **License Key Prefix:** This adds a short prefix to every license key generated for this product. It's a great way to quickly identify keys from different products. For example, you could use ff- for Fluent Forms.
    * **Update File:** This field shows the main downloadable file that will be used for software updates.
    * **Changelog Description:** Here, you can write down what's new or what has changed in the latest version of your product. This information will be visible to your users.
    
5.  **Is WP Plugin?:** If the digital product you're selling is a WordPress plugin, check this box. This will reveal a few more fields specific to WordPress plugins.

     * **Changelog Page URL:** Enter the web address for your plugin's changelog.
     * **Banner URL:** Provide a link to a banner image for your plugin.
     * **Icon URL:** Provide a link to an icon image for your plugin.
     * **Required PHP Version (optional):** If your plugin needs a minimum version of PHP to work, you can specify it here.
     * **Required WP Version (optional):** Similarly, if your plugin requires a minimum WordPress version, enter it here.

After you've configured these settings, just click the **Update Settings** button to save your changes.

### 8. Managing Product Integrations (Product-Specific)

On the Product Edit screen, click the **"Integrations"** tab.

* Here you can connect this specific product to other FluentCart modules or third-party services that have a direct impact on its functionality, sales, or fulfillment.
* For example, you might integrate a specific product with **FluentCRM** to add customers who purchase this product to a particular list, or with **FluentForms** if product purchase triggers a form submission.

>To learn more about managing product integrations, see the [Managing Product Integrations](/guide/product-types-creation/managing-product-integrations) guide.

### 9. Defining Upgrade Paths

On the Product Edit screen, click the **"Upgrade Paths"** tab.

* This powerful feature allows you to create seamless upgrade options for customers holding a license for this product.
* You can define paths from a **"From Plan"** (e.g., "Single Site Yearly License") to a **"To Plan"** (e.g., "5 Sites Yearly License" or "Single Site Lifetime License").
* Specify a **"Discount Amount"** and whether the upgrade is **"Prorated"** (meaning the customer gets credit for unused time on their old plan).

>To learn more about upgrade paths, see the [Defining Upgrade Paths](/guide/product-types-creation/defining-upgrade-paths) guide.


## Publishing Your Licensed Digital Product

Once you have configured all the necessary details:

1.  Set the **Status** to **"Published"** in the "Publishing" section.
2.  Click the **"Update"** (or "Save") button on the top right to make your product live in your store.
