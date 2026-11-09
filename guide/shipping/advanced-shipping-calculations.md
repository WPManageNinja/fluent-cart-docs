# Advanced Shipping Calculations

Understanding how FluentCart calculates shipping costs, especially when combining different shipping methods and shipping classes, is key to setting up accurate rates. This guide clarifies the "Class Aggregation" logic.

## How Shipping Costs are Calculated at Checkout

When a customer proceeds to checkout, FluentCart dynamically calculates available shipping options based on their address and the contents of their cart.

The calculation follows these general steps:

1.  **Zone Matching**: The customer's shipping address is matched to an [applicable shipping zone](/guide/shipping/configuring-shipping-zones).
2.  **Method Selection**: All [shipping methods](/guide/shipping/setting-up-shipping-methods) configured for that zone become potential options.

    ::: info
    Only physical items count. Carts with only digital products are not charged shipping. Items added through an order bump with **Free shipping for this offer item** turned on are left out of the shipping calculation.
    :::

3.  **Base Method Cost**: For each method, FluentCart calculates its base cost from its **Configure Rate** setting: **Per Order** (one charge), **Per Item** (Amount × physical item quantity), **Percentage** (a percentage of the physical items' subtotal after discounts) or **Per Weight** (the matching weight tier). Free Shipping methods always cost 0.
4.  **Shipping Class Contributions**: This is where the complexity comes in. For each product in the cart, its assigned [shipping class](/guide/shipping/understanding-shipping-classes) (if any) and its quantity are considered.
    * Each product's class cost is worked out from the class **Cost** and **Cost Type** (**Fixed Amount** or **Percentage** of the product's unit price). If **Apply to quantity** is checked, the cost is multiplied by the product's quantity.
    * These individual class contributions are then gathered per class, not per cart line. Products that share a class are charged together: a class without **Apply to quantity** is charged once, however many products in the cart use it.

5.  **Class Aggregation (Crucial Step)**: The chosen method's **Class Aggregation** setting decides how the class costs are combined:

    * **Combined Cost**:
        * **Concept**: This option adds up the calculated cost for *each shipping class* present in the cart.
        * **Scenario**: Your cart contains:
            * Product A: Quantity 2, Heavy Items (Cost $15, Fixed Amount, **Apply to quantity** on)
            * Product B: Quantity 1, Small Envelopes (Cost $5, Fixed Amount, **Apply to quantity** on)
            * Product C: Quantity 3, Fragile Items (Cost $4, Fixed Amount, **Apply to quantity** off)
        * **Calculation**:
            * Contribution from "Heavy Items" = $15 (per item) \* 2 items = $30
            * Contribution from "Small Envelopes" = $5 (per item) \* 1 item = $5
            * Contribution from "Fragile Items" = $4 (fixed amount, applied once for the class) = $4
        * **Total Aggregated Class Cost** = $30 (Heavy) + $5 (Small) + $4 (Fragile) = **$39**.

    * **Highest Cost**:
        * **Concept**: This option adds only the single highest class total among the shipping classes present in the cart.
        * **Scenario**: Using the same cart as above:
            * Contribution from "Heavy Items" = $30
            * Contribution from "Small Envelopes" = $5
            * Contribution from "Fragile Items" = $4
        * **Total Aggregated Class Cost** = `MAX($30, $5, $4)` = **$30**.

6.  **Final Shipping Cost**: The `Base Method Cost` (from step 3) is then added to the `Aggregated Class Cost` (from step 5) to determine the final shipping price for that particular method.

By understanding these calculation types, you can fine-tune your shipping strategy to accurately reflect the costs of delivering diverse products to your customers.
