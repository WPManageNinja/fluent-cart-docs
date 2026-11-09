# Creating New Orders (Manually)

FluentCart allows you to manually create new orders directly from your WordPress admin dashboard. This feature is particularly useful for taking phone orders, creating custom invoices for clients, or managing specific sales scenarios outside of the standard checkout process.

## Steps to Create a New Order

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Orders** in the left sidebar.
2.  On the **Orders** screen, locate and click the **"Create Order"** button in the top right corner.


    ![Screenshot of Create Order Button](/images/store-management/creating-new-orders/create-order-button.webp) 


3.  This will open a new order creation interface. You will need to:
    * **Customer Information:** Choose an existing customer from your store or you may create new.
    * **Order currency:** When [multi-currency](/guide/settings-configuration/multi-currency-settings) is enabled, an **Order currency** card appears above the products. Pick any enabled currency to create the order in it. For a currency other than your base currency, enter prices in that currency; the card shows the rate, for example *1 USD = 0.79 GBP*. FluentCart calculates and validates the final prices when you save, using the same rate and rounding rules as the storefront checkout. Coupons, shipping, and manual discounts are calculated in the order currency too. If the rate changed since you loaded the page, FluentCart recalculates the total and asks you to review it and save again.
    * **Products:** Use **Search products...** or **Browse** to add products, choose the variation, and set the quantity. You can also enter a **Custom Price** for a line.
    * **Have a Coupon:** If a discount coupon applies to this manual order, you can enter and apply it here. Applying a coupon removes any manual discount already added to the order.
    * **Add Discount:** If you want to add a discount for the order instead of a coupon, click the **Add Discount** option to enter a discount value and an optional reason. This option is only available when no coupon is applied — see [Manual Discounts and Tax](#manual-discounts-and-tax) below.
    * **Add Shipping Cost:** Manually you can add shipping charges for physical products.
    * **Review Totals:** Ensure the order subtotal and total amount are correct after adding products and any discounts/shipping.
    * **Notes:** Click the **Notes** icon to add any private notes or comments relevant to the order.
    * **Labels:**  A section for assigning custom labels.

4.  **Save the order:** Click **Save** in the **Unsaved Changes** bar at the top of the screen. FluentCart creates the order as unpaid and opens its Order Details screen.

    ![Screenshot of Create Order Button](/images/store-management/creating-new-orders/create-order-button2.webp) 

5.  **Collect the payment:** On the Order Details screen, open **Collect Payments** in the **Transaction Details** card and choose **Mark order as paid** (for cash, bank transfer, or any payment taken outside FluentCart), **Custom Payment Link** (to let the customer pay online), or **Send Payment Reminder**. See [Collecting Payments](/guide/store-management/orders-management/collecting-payments-modified-orders).

## Manual Discounts and Tax

A coupon and a manual discount can't be on the same order at the same time: the **Add Discount** option is hidden whenever a coupon is applied, and applying a coupon while a manual discount is set removes that discount.

Coupons and manual discounts also affect the order total differently:

* **Coupons** are applied at the product/line-item level, reducing each affected item's taxable amount before tax is calculated.
* **Manual discounts** are applied as a single order-level amount subtracted from the subtotal. They do not reduce the product taxable base or recalculate product tax — tax stays based on the full product amount.

**Example:**
| | Amount |
|---|---|
| Product Subtotal | €100 |
| Tax | €20 |
| Manual Discount | -€10 |
| **Total** | **€110** |

This is FluentCart's current calculation behavior — the €20 tax isn't reduced by the €10 manual discount, so it's worth accounting for when discounting a taxable order manually.

:::tip Manual Order Use Cases
Manual order creation is great for:
* Phone sales or direct sales.
* Creating quotes or invoices for custom services.
* Handling special customer requests or specific payment arrangements.
:::

