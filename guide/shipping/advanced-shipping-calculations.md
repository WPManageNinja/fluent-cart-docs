# Advanced Shipping Calculations in FluentCart

Understanding how FluentCart calculates shipping costs, especially when combining different shipping methods and shipping classes, is key to setting up accurate rates. This guide clarifies the "Class Aggregation" logic.

## How Shipping Costs are Calculated at Checkout

When a customer proceeds to checkout, FluentCart dynamically calculates available shipping options based on their address and the contents of their cart.

The calculation follows these general steps:

1.  **Zone Matching**: The customer's shipping address is matched to an [applicable shipping zone](/guide/shipping/configuring-shipping-zones.md).
2.  **Method Selection**: All [shipping methods](/guide/shipping/setting-up-shipping-methods.md) configured for that zone become potential options.
3.  **Base Method Cost**: For each applicable method, its base cost is calculated based on its "Rate Type" (e.g., a fixed amount, total items, or total order value).
4.  **Shipping Class Contributions**: This is where the complexity comes in. For each product in the cart, its assigned [shipping class](/guide/shipping/understanding-shipping-classes.md) (if any) and its quantity are considered.
    * The "Cost Adjustment" for that shipping class is applied based on its "Cost Type" (`Per Item` or `Fixed Amount`).
    * These individual class contributions are then gathered.

5.  **Class Aggregation (Crucial Step)**: If the cart contains products from *multiple distinct shipping classes*, the `Class Aggregation` setting of the *chosen shipping method* dictates how these class contributions are combined into a single subtotal for shipping class adjustments.

    * **"Sum all class costs"**:
        * **Concept**: This option adds up the calculated cost for *each distinct shipping class* present in the cart.
        * **Scenario**: Your cart contains:
            * Product A: `Quantity: 2`, `Shipping Class: Heavy Items` (Cost Adjustment: $15, Type: Per Item)
            * Product B: `Quantity: 1`, `Shipping Class: Small Envelopes` (Cost Adjustment: $5, Type: Per Item)
            * Product C: `Quantity: 3`, `Shipping Class: Fragile Items` (Cost Adjustment: $4, Type: Fixed Amount)
        * **Calculation**:
            * Contribution from "Heavy Items" = $15 (per item) \* 2 items = $30
            * Contribution from "Small Envelopes" = $5 (per item) \* 1 item = $5
            * Contribution from "Fragile Items" = $4 (fixed amount, applied once for the class) = $4
        * **Total Aggregated Class Cost** = $30 (Heavy) + $5 (Small) + $4 (Fragile) = **$39**.

    * **"Take highest class cost"**:
        * **Concept**: This option applies only the highest individual shipping cost derived from any *distinct shipping class* present in the cart.
        * **Scenario**: Using the same cart as above:
            * Contribution from "Heavy Items" = $30
            * Contribution from "Small Envelopes" = $5
            * Contribution from "Fragile Items" = $4
        * **Total Aggregated Class Cost** = `MAX($30, $5, $4)` = **$30**.

6.  **Final Shipping Cost**: The `Base Method Cost` (from step 3) is then added to the `Aggregated Class Cost` (from step 5) to determine the final shipping price for that particular method.

By understanding these calculation types, you can fine-tune your shipping strategy to accurately reflect the costs of delivering diverse products to your customers.
