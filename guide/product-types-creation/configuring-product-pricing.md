# Configuring Product Pricing & Variations

This guide provides a comprehensive walkthrough of the **Pricing** section in FluentCart. Here, you can define how your products are priced, offering everything from simple one-time payments to complex subscriptions with multiple variations.

To begin, navigate to the product you wish to configure and locate the **Pricing** section. You will need to select a pricing method from the dropdown menu at the top right: **Simple** or **Simple Variations**.

## Option 1: Simple Pricing

Choose this method for products that are sold as a single item without any variations like size, color, or license tier. Within Simple Pricing, you can offer two distinct payment terms.

#### A. One-Time Payment

Select **One Time** from the "Select Payment Term" dropdown for products that customers will purchase with a single payment.

* **Price:** The required selling price for the product.

* **Compare at price:** (Optional) A higher original price that will be displayed with a strikethrough to indicate a sale.

* **Calculate profit/cost:** (Optional) Enable this toggle to enter the **Cost per item**. FluentCart will use this to automatically calculate and display the **Profit** and **Margin**.

  ![Screenshot of Product Types List Page](/guide/public/images/product-types-creation/product-pricing/one-time-payment.png)

#### B. Subscription Payment

Select **Subscription** for products that require recurring payments.

* **Installment Price:** The amount charged for each recurring payment.

* **Compare at price:** (Optional) A higher price to show a discount on each installment.

* **Interval:** The billing frequency (e.g., Yearly, Monthly, Daily).

* **Enable installment payment:** Check this box to set a fixed number of payments.

  * **Installment Count:** The total number of payments the customer will make.

  * **Total Price:** This field automatically calculates the total cost.

* **Setup fee:** (Optional) Enable this to add a one-time initial fee that is charged at the beginning of the subscription.

* **Calculate profit/cost:** (Optional) Toggle this on to track the cost and profit margin for the subscription.

  ![Screenshot of Product Types List Page](/guide/public/images/product-types-creation/product-pricing/subscription-payment.png)

## Option 2: Simple Variations

Choose this method for products that come in multiple versions, such as different sizes for a t-shirt or different license tiers for software. This method allows you to create a table of variations, each with its own unique pricing.

#### Managing Variations in the Table

* **Add a Variation:** Click the **+ Add more** button to add a new, blank variation row.

* **Configure a Variation:** Click the **pencil icon** in the "Action" column to open a sidebar where you can configure the pricing for that specific variation.

* **More Actions:** Click the **three-dot icon** to access additional options like **Duplicate**, get a **Direct Checkout** link, **Delete** the variation, or **Skip inventory** option. 

  ![Screenshot of Product Types pricing Page](/guide/public/images/product-types-creation/product-pricing/simple-variation.png)

#### Configuring an Individual Variation

After clicking the pencil icon, a sidebar appears where you can configure the pricing for that specific version. Just like with Simple Pricing, each variation can be set as either a **One-Time** or **Subscription** payment.

**A. One-Time Payment for a Variation**

* **Title & Type:** Verify the variation's **Title** and **Type**.

* **Select Payment Term:** Choose **One Time**.

* **Price:** Set the unique selling price for this specific variation.

* **Compare at price:** (Optional) Enter a sale price for this variation.

* **Calculate profit/cost:** (Optional) Track the cost and profit for this variation.

* **Image:** Upload a unique image for this variation.

**B. Subscription Payment for a Variation**

* **Title & Type:** Verify the variation's details.

* **Select Payment Term:** Choose **Subscription**.

* **Installment Price:** Set the recurring price for this subscription variation.

* **Compare at price:** (Optional) Set a sale price for the recurring payment.

* **Interval:** Select the billing frequency.

* **Enable installment payment:** (Optional) Check to set a fixed number of payments.

* **Setup fee:** (Optional) Add a one-time initial fee for this subscription variation.

* **Calculate profit/cost:** (Optional) Track the cost and profit.

* **Image:** Upload a unique image for this variation.

  ![Screenshot of Product Types pricing Page](/guide/public/images/product-types-creation/product-pricing/configure-indivisual-payment.png)

After configuring a variation, click the **Update Price** button to save its settings.