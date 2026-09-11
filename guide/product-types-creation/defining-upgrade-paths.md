 # Defining Upgrade Paths

FluentCart's **Upgrade Paths** feature is a powerful tool for managing tiered products, especially for digital products with licenses and subscriptions. It allows you to create seamless and structured pathways for your customers to upgrade from a lower-tier product/license to a higher one, often by paying only the price difference or a prorated amount.

This streamlines the customer experience and encourages upsells, maximizing your store's lifetime value.

## Accessing Upgrade Paths

Upgrade path settings are found within the **Edit Product** screen for individual products that support tiered offerings (typically digital products with licenses or subscriptions).

1.  Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2.  [Edit an existing product](/guide/product-types-creation/product-list-overview) that has multiple license tiers (e.g., "Fluent Forms").
3.  On the **Edit Product** screen, click on the **"Upgrade Paths"** tab.

    ![Screenshot of Product Upgrade Paths Tab](/images/product-types-creation/define-upgrade-path/Upgrade-Paths-1.webp)

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

    ![Screenshot of Product Upgrade Paths Tab](/images/product-types-creation/define-upgrade-path/add-Upgrade-Paths.webp)

## The Customer Upgrade Experience

Once your upgrade paths are set up, the actual upgrade process is entirely self-serve and effortless for your customers. The process varies slightly depending on whether they are upgrading a **subscription** or a **one-time purchase**.

### Upgrading Subscriptions and Licenses

 * **Access the Dashboard:** Your customer logs into their account and clicks on the **Subscription Plans** (or Licenses) tab to see active purchases.  

 * **View Plan Details:** They select the specific plan they want to upgrade.

 * **Click to Upgrade:** Right below their current billing terms, they click the **Upgrade Plan** button.

 * **Choose a New Package:** An **Upgrade** options popup appears where they can review available higher-tier plans and click **Upgrade**.

 * **Instant Checkout:** They are taken directly to the checkout page, where the order summary automatically calculates their new cost with any prorated discounts applied.


![Upgrade Path](/images/product-types-creation/define-upgrade-path/customer-upgrade-path.webp)

### Upgrading One-Time Purchases

When you publish a path for a product sold as a one-time purchase, the customer handles the upgrade from their order receipt.

 * **Access Purchase History:** The customer navigates to the **Purchase History** tab and opens the order containing the item.

 * **Click to Upgrade:** An **Upgrade Plan** button appears directly beside the qualified item on the order details page.

![Upgrade Path](/images/product-types-creation/define-upgrade-path/upgrade-3.webp)

 * **Choose a New Package:** Clicking the button opens the **Upgrade** options window, allowing them to select a new package and proceed to checkout to pay the difference.

### Conditions for One-Time Upgrades

The button only appears on items that qualify based on three specific conditions:

 - The item was bought as a one-time purchase, not as part of a subscription.
 - The order is paid, partially paid, or partially refunded (unpaid orders show no button).
 - The store has published an upgrade path for that exact product variation.

![Upgrade Path](/images/product-types-creation/define-upgrade-path/popup-upgrade-4.webp)



