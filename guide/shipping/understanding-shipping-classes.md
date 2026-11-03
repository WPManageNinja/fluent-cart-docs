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
    * **Class Name**: Give your shipping class a descriptive name (e.g., "Bulky Items").
    * **Cost**: Enter the numerical value for the additional cost associated with this class. This is an *adjustment* that will be added to the base shipping method cost.
    * **Cost Type**: This defines how the "Cost Adjustment" is applied:
        * **Percentage**: The "**Cost Adjustment**" will be applied by percentage.
        * **Fixed Amount**: The "**Cost Adjustment**" will be applied by a fix amount.
     * **Apply to quantity**: Select this checkbox if you want the cost multiplied by the number of units in the cart that belong to this class. For example, a $5 class with 3 units adds $15. Leave it unchecked to charge the class once per order, however many products or units use it.

4.  **Save the Shipping Class**:
    * Click the **"Save"** or **"Add Class"** button.

     ![Screenshot of Shipping Classes](/images/shipping/understanding-shipping-classes/shipping-classes-2.webp)

## Assigning Shipping Classes to Products

Once you have created your shipping classes, you need to assign them to your products.

1.  **Edit a Product**:
    * Go to **FluentCart** > **Products**.
    * Edit an existing product or create a new one.

2.  **Select Shipping Class**:
    * On the product editing page, locate the **"Shipping Class"** dropdown or selector (usually under a "Shipping" or "Product Data" tab).
    * Choose the appropriate shipping class from the list.


3.  **Update Product**:
    * Save your product to apply the assigned shipping class.


**Important Notes**:
* The actual final shipping cost will combine the shipping method's base rate with these shipping class adjustments, and then apply the "Class Aggregation" rule defined in the shipping method.
* Class charges are grouped by class, not by cart line. If two different products share a **Fixed Amount** class and **Apply to quantity** is off, the class is charged once, not once for each product.
* A **Percentage** class with **Apply to quantity** off is charged once, as a percentage of the highest unit price among the products in that class.
* With **Highest Class** aggregation, FluentCart compares the total of each class and charges the largest one, instead of the most expensive single cart line.
