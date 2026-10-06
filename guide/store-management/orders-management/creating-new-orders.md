 # Creating New Orders (Manually)

FluentCart allows you to manually create new orders directly from your WordPress admin dashboard. This feature is particularly useful for taking phone orders, creating custom invoices for clients, or managing specific sales scenarios outside of the standard checkout process.

## Steps to Create a New Order

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Orders** in the left sidebar.
2.  On the **Orders** screen, locate and click the **"Create Order"** button in the top right corner.


    ![Screenshot of Create Order Button](/images/store-management/creating-new-orders/create-order-button.webp) 


3.  This will open a new order creation interface. You will need to:
    * **Customer Information:** Choose an existing customer from your store or you may create new.
    * **Products:** Search for and add the products the customer is purchasing.
        * You can select product variants if applicable.
        * Specify the quantity for each product.
    * **Have a Coupon:** If a discount coupon applies to this manual order, you can enter and apply it here. Applying a coupon removes any manual discount already added to the order.
    * **Add Discount:** If you want to add a discount for the order instead of a coupon, click the **Add Discount** option to enter a discount value and an optional reason. This option is only available when no coupon is applied — see [Manual Discounts and Tax](#manual-discounts-and-tax) below.
    * **Add Shipping Cost:** Manually you can add shipping charges for physical products.
    * **Review Totals:** Ensure the order subtotal and total amount are correct after adding products and any discounts/shipping.
    * **Notes:** Click the **Notes** icon to add any private notes or comments relevant to the order.
    * **Labels:**  A section for assigning custom labels.

4.  **Choose Payment Method:** Select the payment method for this order. This might include:
    * Marking the order as "Paid" if payment was received offline (e.g., cash, bank transfer).
    * Generating a custom payment link to send to the customer for online payment.
    * Processing payment directly if you have integrated payment gateways.

5.  **Finalize Order:** Once all details are correct and the payment method is selected, click the **Save** button finalize the order.
![Screenshot of Create Order Button](/images/store-management/creating-new-orders/create-order-button2.webp) 

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

