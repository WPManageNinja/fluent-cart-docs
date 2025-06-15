# Setting Up Shipping Methods in FluentCart

Shipping methods define the options customers have for receiving their orders within a particular [shipping zone](/guide/shipping/configuring-shipping-zones.md). FluentCart offers various methods with flexible rate configurations.

## How to Add and Configure Shipping Methods

1.  **Select a Shipping Zone**:
    * Go to **FluentCart** > **Settings** > **Shipping** > **Shipping Zones**.
    * Click on the name of the shipping zone for which you want to add or manage methods.
    * Within the zone details, you will see a section for "Shipping Methods."


2.  **Add a New Shipping Method**:
    * Click the **"Add Shipping Method"** button within the chosen zone's settings.
    * A form will appear to configure the new method.

        ![Screenshot of Shipping Method](/guide/public/images/shipping/setting-up-shipping-method/shipping-method-1.png)


3.  **Configure Method Details**:

    * **Method Name**: Enter a user-friendly name for this shipping option (e.g., "Standard Delivery", "2-Day Express", "Local Pickup at Store").
    * **Method Type**: Choose one of the core types:
        * **Flat Rate**: A fixed cost applied to the order.
        * **Free Shipping**: Shipping cost is zero.
        * **Local Pickup**: Customers collect their order directly from a designated location.

    * **Amount**: Enter the numerical value for the cost. The interpretation of this value depends on the "Rate Type" you selected (e.g., `$5.00` for Fixed Amount, or `$2.00` if Per Item means $2 per item).

    * **Confugure Rate**: This determines how the base cost of this method is calculated:
        * **Per Order**: A single, fixed charge for the entire order, regardless of items or price.
        * **Per Item**: The cost is multiplied by the total number of items in the cart.
        * **Per Price (e.g., 10% of total price)**: The cost is a percentage of the total cart value.

    * **Class Aggregation**: This crucial setting applies only when your cart contains products from [different shipping classes](/guide/shipping/understanding-shipping-classes.md). It dictates how the individual shipping class costs are combined for this method.
        * **Sum all class costs**: The shipping cost for each distinct shipping class in the cart is calculated and then all these individual costs are added together.
        * **Take highest class cost**: Only the highest shipping cost among all the shipping classes present in the cart is applied.


        ![Screenshot of Shipping Method](/guide/public/images/shipping/setting-up-shipping-method/shipping-method-2.png)


4.  **Save the Shipping Method**:
    * Click the **"Save"** button to save your new shipping method to the selected zone.

You can add multiple shipping methods to each zone, offering your customers various shipping options. The order in which methods appear might affect customer choice, so consider ordering them logically.
