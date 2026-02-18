# Setting Up Shipping Methods

Shipping methods are the different delivery options you offer to customers within a specific [**shipping zone**](/guide/shipping/configuring-shipping-zones). FluentCart allows you to create flexible shipping options, from flat rates to free shipping, ensuring you can meet your customers' needs.

This guide will show you how to add and configure shipping methods for your shipping zones.

### How to Add a Shipping Method

Before you can add a method, you must have already created a shipping zone.

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings** > **Shipping Zones**.
2.  Click on the **Shipping Zones** sub-menu.
3.  Find the shipping zone you want to add a method to and click on its name to edit it.
4.  Inside the zone's settings, scroll down to the **Shipping Methods** section and click the **Add Shipping Method** button. You can also manage your existing shipping methods from this screen. To update a method's settings, click the Edit button located on the same row as its title.
5.  This will open a pop-up window where you can configure the details of your new shipping method.

![Screenshot of Shipping Method](/images/shipping/setting-up-shipping-method/shipping-method-1.webp)

### Configuring the Shipping Method

This is where you define how your shipping option will work.

* **Enable Shipping Method:** This toggle at the top of the pop-up acts as the master switch for this specific method. If it's disabled, the method will be saved but won't appear as an option for customers at checkout.
* **Method Title:** Enter a clear and user-friendly name for this shipping option (e.g., "Standard Shipping," "Express Delivery," "Local Pickup"). This is the name your customers will see at checkout.
* **State:** (Optional) If this shipping method should only be available for specific states or provinces within the shipping zone's country, you can select them here. Leave it blank to have the method apply to the entire country.
* **Method Type:** Choose the type of shipping method you want to offer:
    * **Flat Rate:** This is a fixed-cost shipping option. Use this to set a single rate for delivery.
    * **Free Shipping:** As the name suggests, this option is free for the customer. It's an excellent incentive to encourage sales.
    * **Local Pickup:** This allows customers to pick up their order directly from your physical store or a designated location, bypassing shipping costs entirely.
* **Amount:** If you selected "Flat Rate," enter the cost for this shipping method here (e.g., enter **10** for $10.00).

* **Configure Rate**

This setting determines how the "Flat Rate" cost is calculated if a customer has multiple items in their cart.

* **Per Order:** Applies a single, fixed charge for the entire order, no matter how many items are purchased. This is the most common setup.
* **Per Item:** The shipping cost is multiplied by the number of items in the cart. For example, if the cost is $2 and a customer buys 3 items, the total shipping cost will be $6.
* **Percentage:** The shipping cost is calculated as a percentage of the total order price. For example, a 10% rate on a $50 order would result in a $5 shipping fee.

* **Class Aggregation**

This advanced setting is for when a customer's cart contains products from different shipping classes (e.g., a small item and a bulky, oversized item). It tells FluentCart how to combine the shipping costs.

* **Combined Cost:** The shipping costs for each distinct shipping class in the cart are calculated and then added together to get the final total.
* **Highest Cost:** Only the single highest shipping cost among all the shipping classes present in the cart is applied.

::: info
The Configure Rate and Class Aggregation settings work together to give you precise control over your shipping fees. For a more detailed guide with advanced examples of how these calculations work, especially when a cart contains multiple items from different shipping classes, please see our documentation on [Advanced Shipping Calculations](/guide/shipping/advanced-shipping-calculations).
:::

* **Description:** 

You can add a short description for the shipping method. Depending on your theme, this might be displayed to the customer at checkout to provide more context (e.g., "Delivered in 3-5 business days").

 ![Screenshot of Shipping Method](/images/shipping/setting-up-shipping-method/shipping-method-2.webp)

Once you have configured all the details, click the **Save** button. Your new shipping method is now active and will be offered to customers in the selected shipping zone.