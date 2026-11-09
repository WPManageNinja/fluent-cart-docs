# Understanding and Using Shipping Classes

The most common use for a shipping class is to adjust the shipping cost for certain types of items. For example, you can create a:

* **Heavy Items** class to automatically add an extra fee to an order.
* **Fragile Goods** class to cover the cost of special handling and packaging.

This guide explains how to use Shipping Classes to group products with similar shipping needs, allowing you to apply special shipping rules to them.

## How to Add and Manage Shipping Classes

1.  **Navigate to Shipping Classes**:
    * From your WordPress dashboard, go to **FluentCart** > **Settings**.
    * Click on the **Shipping** tab.
    * Select the **Shipping Classes** sub-tab.


2.  **Add a New Shipping Class**:
    * Click the **"Add Shipping Class"** button.

    ![Screenshot of Shipping Classes](/images/shipping/understanding-shipping-classes/shipping-classes-1.webp)


3.  **Define Class Details**:
    * **Class Name**: A descriptive name (e.g., "Bulky Items").
    * **Description** *(optional)*: An internal note. Customers don't see it.
    * **Cost**: The extra shipping cost for products in this class. It is added on top of the shipping method's own rate.
    * **Cost Type**: How the Cost is applied:
        * **Fixed Amount**: Adds the Cost as a fixed amount.
        * **Percentage**: Adds the Cost as a percentage of the product's unit price.
    * **Apply to quantity**: Select this checkbox if you want the cost multiplied by the number of units in the cart that belong to this class. For example, a $5 class with 3 units adds $15. Leave it unchecked to charge the class once per order, however many products or units use it.

4.  **Save the Shipping Class**:
    * Click **Save**. When editing an existing class, the button reads **Update**.

    <!-- TODO(screenshots): shipping-classes-2.webp is outdated: the Add Shipping Class drawer now has a Description field between Class Name and Cost, and the Settings sidebar now shows Shipping > Carriers. Retake the drawer with all fields visible. Update later. -->
    ![Screenshot of Shipping Classes](/images/shipping/understanding-shipping-classes/shipping-classes-2.webp)

## Assigning Shipping Classes to Products

Once you have created your shipping classes, you need to assign them to your products.

1.  **Edit a Product**:
    * Go to **FluentCart** > **Products**.
    * Edit an existing product or create a new one.

2.  **Select Shipping Class**:
    * In the right-hand sidebar of the product editor, find the **Shipping Class** card. It only appears when the product has at least one physical variation.
    * Search for a class and select it, or click **Add Shipping Class** to create one without leaving the page. The class applies to the whole product, not to individual variations.


3.  **Update Product**:
    * Save your product to apply the assigned shipping class.


**Important Notes**:
* The actual final shipping cost will combine the shipping method's base rate with these shipping class adjustments, and then apply the "Class Aggregation" rule defined in the shipping method.
* Class charges are grouped by class, not by cart line. If two different products share a **Fixed Amount** class and **Apply to quantity** is off, the class is charged once, not once for each product.
* A **Percentage** class with **Apply to quantity** off is charged once, as a percentage of the highest unit price among the products in that class.
* With **Highest Cost** aggregation, FluentCart compares the total of each class and charges the largest one, instead of the most expensive single cart line.
* Shipping-class costs are never added to **Free Shipping** methods.
