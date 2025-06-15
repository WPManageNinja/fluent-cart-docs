# Understanding and Using Shipping Classes in FluentCart

Shipping classes allow you to group products with similar shipping characteristics. This is incredibly useful for applying specific shipping cost adjustments, regardless of the primary shipping method chosen. For example, you might have "Heavy Items" that always incur an extra fee, or "Fragile Goods" that require special handling costs.

## How to Add and Manage Shipping Classes

1.  **Navigate to Shipping Classes**:
    * From your WordPress dashboard, go to **FluentCart** > **Settings**.
    * Click on the **Shipping** tab.
    * Select the **Shipping Classes** sub-tab.


2.  **Add a New Shipping Class**:
    * Click the **"Add Shipping Class"** button.

            

    ![Screenshot of Shipping Classes](/guide/public/images/shipping/understanding-shipping-classes/shipping-classes-1.png)


3.  **Define Class Details**:
    * **Class Name**: Give your shipping class a descriptive name (e.g., "Bulky Items", "Digital Products").
    * **Cost**: Enter the numerical value for the additional cost associated with this class. This is an *adjustment* that will be added to the base shipping method cost.
    * **Cost Type**: This defines how the "Cost Adjustment" is applied:
        * **Percentage**: The "Cost Adjustment" will be applied by percentage.
        * **Fixed Amount**: The "Cost Adjustment" will be applied by a fix amount.
     * **Per Item**: Select this checkbox if you want the class to add per item charge if the buyer has multiple item of this product in the cart.

4.  **Save the Shipping Class**:
    * Click the **"Save"** or **"Add Class"** button.

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


 ![Screenshot of Shipping Classes](/guide/public/images/shipping/understanding-shipping-classes/shipping-classes-2.png)


**Important Notes**:
* The actual final shipping cost will combine the shipping method's base rate with these shipping class adjustments, and then apply the "Class Aggregation" rule defined in the shipping method.
