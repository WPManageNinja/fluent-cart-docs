 # Defining Upgrade Paths

FluentCart's **Upgrade Paths** feature is a powerful tool for managing tiered products, especially for digital products with licenses and subscriptions. It allows you to create seamless and structured pathways for your customers to upgrade from a lower-tier product/license to a higher one, often by paying only the price difference or a prorated amount.

This streamlines the customer experience and encourages upsells, maximizing your store's lifetime value.

## Accessing Upgrade Paths

Upgrade path settings are found within the **Edit Product** screen for individual products that support tiered offerings (typically digital products with licenses or subscriptions).

1.  Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2.  [Edit an existing product](/guide/product-types-creation/product-list-overview) that has multiple license tiers (e.g., "Fluent Forms").
3.  On the **Edit Product** screen, click on the **"Upgrade Paths"** tab.

    ![Screenshot of Product Upgrade Paths Tab](/guide/public/images/product-types-creation/define-upgrade-path/Upgrade-Paths-1.png)

## Understanding and Adding Upgrade Paths

The "Upgrade Paths" tab displays a table where you define the upgrade logic.

### 1. Adding a New Upgrade Path

1.  Click the **"+ Add Path"** button at the bottom of the table.
2.  A new row will appear, allowing you to configure the upgrade details:
    * **From Plan:** Select the specific product plan or license variation that a customer currently owns and wishes to upgrade *from* (e.g., "Single Site Yearly License").
    * **To Plan:** Select the higher-tier product plan or license variation that the customer can upgrade *to* (e.g., "5 Sites Yearly License" or "50 Sites Lifetime License").
    * **Discount Amount:** This field specifies the discount applied to the "To Plan" price during the upgrade. This is typically the value of the "From Plan" or a specific monetary discount.
    * **Is Prorate:** Select "Yes" or "No".
        * **Yes (Prorated):** This means the customer will receive credit for the unused portion of their existing "From Plan" license/subscription. This credit is then applied towards the cost of the "To Plan," ensuring they only pay the difference. This is commonly used for subscriptions.
        * **No:** The upgrade will simply apply the "Discount Amount" without considering any remaining value from the old plan.

3.  After configuring the path, ensure you save your product settings by clicking the **"Save"** button on the bottom of the Edit screen.

    ![Screenshot of Product Upgrade Paths Tab](/guide/public/images/product-types-creation/define-upgrade-path/add-Upgrade-Paths.png)

### 2. Examples of Upgrade Paths

The table can display various configured paths, showing the flexibility of the system:

* **Yearly to Yearly:** Upgrade from a "Single Site Yearly License" to a "5 Sites Yearly License".
* **Yearly to Lifetime:** Upgrade from a "Single Site Yearly License" to a "Single Site Lifetime License" (often with prorated options).
* **Tier-to-Tier:** Moving from a lower tier to a higher tier within the same license type (e.g., 5 Sites Yearly to 50 Sites Yearly).

:::tip Streamlined Customer Experience
Defining clear upgrade paths simplifies the process for your customers, allowing them to easily scale their usage or commitment without complex manual intervention or needing to purchase a new product entirely.
:::

