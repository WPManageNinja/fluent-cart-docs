 # Defining Upgrade Paths

FluentCart's **Upgrade Paths** feature is a powerful tool for managing tiered products, especially for digital products with licenses and subscriptions. It allows you to create seamless and structured pathways for your customers to upgrade from a lower-tier product/license to a higher one, often by paying only the price difference or a prorated amount.

This streamlines the customer experience and encourages upsells, maximizing your store's lifetime value.

## Accessing Upgrade Paths

Upgrade path settings are found within the **Edit Product** screen for individual products that support tiered offerings (typically digital products with licenses or subscriptions).

::: info
Upgrade paths are a FluentCart Pro feature. They aren't available for bundle products yet, and the product needs at least two variations so there's something to upgrade to.
:::

1.  Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2.  [Edit an existing product](/guide/product-types-creation/product-list-overview) that has multiple license tiers (e.g., "Fluent Forms").
3.  On the **Edit Product** screen, click on the **"Upgrade Paths"** tab.

    ![Screenshot of Product Upgrade Paths Tab](/images/product-types-creation/define-upgrade-path/Upgrade-Paths-1.webp)

## Understanding and Adding Upgrade Paths

The "Upgrade Paths" tab displays a table where you define the upgrade logic.

### 1. Adding a New Upgrade Path

To create a path from one variation to another, follow these steps:

1.  Click **Add Path** below the table. The **Add Upgrade Path** panel opens.
2.  Configure the path:
    * **From Plan:** The variation the customer owns now (e.g., "Single Site Yearly License").
    * **To Plan(s):** One or more variations of the same product they can upgrade to (e.g., "5 Sites Yearly License" or "50 Sites Lifetime License"). Variations already targeted from this plan aren't listed.
    * **Prorate:** Tick this to credit the customer for what they already paid. For a subscription, the credit covers the unused days left in the current billing period. For a one-time purchase, it's the full amount they paid. No credit is given during a real free trial.
    * **Discount Amount:** A fixed amount in your store currency taken off the upgrade price. It's added on top of any prorate credit. The combined credit never exceeds the price of the new plan.

3.  Click **Save**. The path is saved straight away, so you don't need to update the product.

    ![Screenshot of Product Upgrade Paths Tab](/images/product-types-creation/define-upgrade-path/add-Upgrade-Paths.webp)

Each row in the table has an edit button and a delete button. The **Is Prorate** column shows **Yes** or **No**.

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

The button only appears on items that meet four conditions:

 - The item was bought as a one-time purchase, not as part of a subscription.
 - The order is paid, partially paid, or partially refunded (unpaid orders show no button).
 - The store has published an upgrade path for that exact product variation.
 - The item isn't part of a bundle.

![Upgrade Path](/images/product-types-creation/define-upgrade-path/popup-upgrade-4.webp)

### Each Purchase Can Be Upgraded Once

An order's value can be carried into an upgrade only once. If the customer tries to upgrade the same original order again, FluentCart stops them with *This order has already been upgraded.* They can upgrade further from their new plan.



