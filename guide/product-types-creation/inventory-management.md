# Inventory Management

Proper **inventory management** is essential for any e-commerce store, whether you sell physical goods or digital products with limited licenses. FluentCart's built-in stock management system makes it easy to track your inventory levels, prevent overselling, and get a clear view of how your products are moving.

This guide will show you how to enable and manage inventory for your products.

::: tip Need a central stock workspace, bulk updates, or an audit trail?
With the **Advanced Inventory** option (FluentCart Pro), you get a dedicated **Inventory** screen under **Products** with Low Stock and Out of Stock views, bulk stock updates, and a history of every stock change. See [Advanced Inventory](/guide/product-types-creation/advanced-inventory) to set it up.
:::

### Step 1: Enable the Stock Management Feature

Before you can manage inventory for individual products, you must first activate the main Stock Management feature for your entire store.

1.  From your WordPress dashboard, navigate to **FluentCart** > **Settings**.
2.  Click the **Features & addon** tab from the left-hand menu.
3.  You will see a list of available features. Find **Stock Management** and turn on the switch next to it.
4.  Click the **Save Settings** button.

![Screenshot of Stock Management Enable](/images/product-types-creation/inventory-management/stock-management.webp)

Stock Management is included in the free plugin and is off by default. Once this feature is active, the **Inventory Management** section will become available on the product edit screen for your individual products.

::: info Out-of-stock products on shop pages
While Stock Management is on, products that are out of stock are hidden from shop listings. To keep showing them, turn on **Allow Out Of Stock** in the shop block's **Default Filter** settings.
:::

---

### Step 2: Accessing and Managing Inventory for a Product

With the main feature enabled, you can now manage stock levels for each of your products.

1.  Navigate to **FluentCart** > **Products** in your WordPress dashboard.
2.  Find the product you want to manage and click on its name to open the product editor.
3.  Scroll down to the inventory card below **Pricing**.
4.  Turn on the **Inventory Management** switch in the card's header. New products start with it off, and the stock table stays hidden until you turn it on.
5.  For products with variations, you can also stop tracking stock for one variation: open it with the pencil icon and turn off the switch in its **Inventory** box, or use **Skip inventory** in the row's three-dot menu.

<!-- TODO(screenshots): new image needed: capture a variation's edit panel showing the Inventory box switch and the row's three-dot menu with Skip inventory. Update later. -->

#### Understanding the Inventory Metrics

The **Inventory Management** section gives you a clear, real-time overview of the stock status for each of your product's variations:

* **Title:** The name of the product variant.
* **SKU:** The variation's Stock Keeping Unit. You can edit it right in this table.
* **Total Stock:** The total quantity of this variant you have in your inventory.
* **Available:** The number of units that are currently available for customers to purchase.
* **On hold:** The number of units that are currently reserved in pending or processing orders. These units are not available for sale.
* **Delivered:** The total number of units that have been successfully sold and fulfilled.

![Screenshot of Inventory Management Section](/images/product-types-creation/inventory-management/inventory-management-section.webp) 

#### Adjusting Stock Levels

You can easily add or remove stock manually right from this screen.

1.  In the inventory table, find the variant you want to adjust.
2.  Click the adjuster icon inside its **Total Stock** field. A small panel opens.
3.  Enter the change in **Adjust by** (use a negative number to remove stock), or type the final count in **New Stock**. Each field updates the other.
4.  Click **Apply**. **Total Stock** and **Available** update and the change is saved right away.

    ![Screenshot of Adjust Stock Section](/images/product-types-creation/inventory-management/inventory-adjust-by.webp) 


:::tip Stock Management Best Practices
* Regularly check your inventory to prevent overselling or running out of popular products.
* For digital products with licenses, track your "Available" and "On hold" licenses carefully to ensure you have enough to issue.
* Integrate with external inventory systems if needed (though FluentCart provides robust native options).
:::