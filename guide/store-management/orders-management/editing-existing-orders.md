 # Editing Existing Orders

FluentCart provides robust functionality to edit an order even after it has been placed. This allows you to make necessary adjustments such as adding or removing products, changing quantities, applying coupons, or modifying shipping costs.


:::info When Editing Is Disabled
The **Edit** button is disabled, with an explanatory tooltip, whenever any of the following is true:

* The order has already been **paid** — *"Order cannot be edited once paid."*
* The order's status is **Completed**, **Archived**, or **Canceled** — *"Order cannot be edited once it is {status}."*
* The order is a **subscription** order — *"Subscription Order cannot be edited."*
:::

:::info Returning to Processing Status
If a Completed order needs editing, you can use the "Back to processing" option from the "More Actions" dropdown on the Order Details page to revert its status to Processing. This only reverts the order **status** — it does not change the order's payment status. If the order is already paid, editing stays disabled afterward; this action only restores editability for a completed order that isn't marked as paid.
:::

## Entering Edit Mode

1.  Navigate to the **[Order Details](/guide/store-management/orders-management/order-details-overview)** screen for the specific order you wish to edit.
2.  In the top right corner of the Order Details screen, click the **"Edit"** button.

    ![Screenshot of Order Details with Edit Button](/images/store-management/editing-existing-orders/order-details-edit-button.webp)

3.  The screen will transform into an editable interface, and the "Edit" button will change to **"Disable Editing"**.

    ![Screenshot of Order in Editing Mode](/images/store-management/editing-existing-orders/order-editing-mode.webp)

## Making Changes to an Order

Once in edit mode, you can perform various modifications to the order:

### 1. Adding Products

You can add new products to the existing order:

1.  In the "Order Items" section, locate the **"Search products"** field and the **"Browse"** button.
2.  Use the search field to find the product(s) you wish to add, or click "Browse" to view your product catalog.

    ![Screenshot of Add Product Search Field in Edit Mode](/images/store-management/editing-existing-orders/add-product-search-edit-mode.webp)

3.  A modal window will appear, listing your products. Select the desired products and their variations (if applicable) by checking the box next to them.
5.  Click **"Add Items"** to add them to the order.

 ![Screenshot of Add Items Modal](/images/store-management/editing-existing-orders/add-items-modal.webp)

### 2. Modifying Existing Order Items

For products already in the order:

* **Adjust Quantity:** Click the **"Adjust Quantity"** link below a product to change the number of units.
* **Remove Item:** Click the **"Remove Item"** link below a product to delete it from the order.

### 3. Applying Coupons

You can apply or modify coupon codes for the order:

1.  Locate the **"Have a Coupon?"** section in the financial summary area.
2.  Enter the coupon code in the provided field.
3.  Click **"Apply"**.

Applying a coupon removes any manual discount already added to the order — see [Adding a Manual Discount](#_5-adding-a-manual-discount) below.

### 4. Adding Shipping Costs

For physical products, you can manually add or adjust shipping costs:

1.  Locate the **"Add Shipping"** option in the financial summary area.
2.  Enter the desired shipping amount.

### 5. Adding a Manual Discount

You can apply an order-level discount instead of a coupon. This option is only available when no coupon is applied to the order:

1.  Locate the **"Add Discount"** option in the financial summary area.
2.  In the dialog, enter a **Discount value** and, optionally, a **Reason for discount** — customers can see this reason.
3.  Click **"Apply"**. The discount is staged on the order and saved along with your other changes when you click **"Disable Editing"**.

:::info Manual Discounts and Tax
A coupon and a manual discount can't be on the same order at the same time: the **Add Discount** option is hidden whenever a coupon is applied, and applying a coupon while a manual discount is set removes that discount. They also affect tax differently: coupons are applied at the product/line-item level and can reduce that item's taxable amount, while a manual discount is a single order-level amount subtracted from the subtotal — it does not reduce the product taxable base or recalculate product tax. For example, a €100 taxable product with €20 tax and a €10 manual discount still totals €110, with tax unchanged at €20. See [Manual Discounts and Tax](/guide/store-management/orders-management/creating-new-orders#manual-discounts-and-tax) for more detail.
:::

## Saving Your Changes

After making all necessary modifications:

1.  Click the **"Disable Editing"** button in the top right corner.
    * This action will save all your changes to the order.
    * If the order total has increased, you may be prompted to [collect additional payment](/guide/store-management/orders-management/collecting-payments-modified-orders).

