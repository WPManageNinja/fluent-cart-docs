 # Editing Existing Orders

FluentCart provides robust functionality to edit an order even after it has been placed. This allows you to make necessary adjustments such as adding or removing products, changing quantities, applying coupons, or modifying shipping costs.

## Entering Edit Mode

1.  Navigate to the **[Order Details](/guide/store-management/orders-management/order-details-overview)** screen for the specific order you wish to edit.
2.  In the top right corner of the Order Details screen, click the **"Edit"** button.

    ![Screenshot of Order Details with Edit Button](/guide/public/images/store-management/order-details-edit-button.png)

3.  The screen will transform into an editable interface, and the "Edit" button will change to **"Disable Editing"**.

    ![Screenshot of Order in Editing Mode](/guide/public/images/store-management/order-editing-mode.png)

## Making Changes to an Order

Once in edit mode, you can perform various modifications to the order:

### 1. Adding Products

You can add new products to the existing order:

1.  In the "Order Items" section, locate the **"Search products"** field and the **"Browse"** button.
2.  Use the search field to find the product(s) you wish to add, or click "Browse" to view your product catalog.
    ![Screenshot of Add Product Search Field in Edit Mode](/guide/public/images/store-management/add-product-search-edit-mode.png)
3.  A modal window will appear, listing your products. Select the desired products and their variations (if applicable) by checking the box next to them.
5.  Click **"Add Items"** to add them to the order.

 ![Screenshot of Add Items Modal](/guide/public/images/store-management/add-items-modal.png)

:::warning Important Note: Subscription Products
Currently, **subscription products cannot be added** to an existing order through this "Add Items" modal. Subscription orders must be initiated as such.
:::

### 2. Modifying Existing Order Items

For products already in the order:

* **Adjust Quantity:** Click the **"Adjust Quantity"** link below a product to change the number of units.
* **Remove Item:** Click the **"Remove Item"** link below a product to delete it from the order.

### 3. Applying Coupons

You can apply or modify coupon codes for the order:

1.  Locate the **"Have a Coupon?"** section in the financial summary area.
2.  Enter the coupon code in the provided field.
3.  Click **"Apply"**.

### 4. Adding Shipping Costs

For physical products, you can manually add or adjust shipping costs:

1.  Locate the **"Add Shipping"** option in the financial summary area.
2.  Enter the desired shipping amount.

## Saving Your Changes

After making all necessary modifications:

1.  Click the **"Disable Editing"** button in the top right corner.
    * This action will save all your changes to the order.
    * If the order total has increased, you may be prompted to [collect additional payment](/guide/store-management/orders-management/collecting-payments-modified-orders).

:::info Returning to Processing Status
If an order was marked as "Completed" but needs editing, you can use the "Back to processing" option from the "More Actions" dropdown on the Order Details page to revert its status and enable editing.
:::
