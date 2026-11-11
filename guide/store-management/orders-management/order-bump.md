# Order Bump

The **Order Bump** feature in FluentCart allows you to present a last-minute, complementary product offer directly on the checkout page, in the cart drawer, and on the cart page. This simple, high-converting technique encourages customers to add an extra item to their cart before completing their purchase, significantly increasing your average order value (AOV).

::: info
Order Bump is a **FluentCart Pro** feature. The **Order Bump** menu item appears only while Pro is active and the module is switched on.
:::

## 1. Enabling the Order Bump Feature

Before you can create any order bumps, you must first activate the feature in your store settings.

1.  Open **FluentCart** in your WordPress dashboard.
2.  Click the **Settings** icon (the gear) at the top right of the FluentCart bar.
3.  Click **Features & addon** in the settings sidebar.
4.  Locate the **Order Bump** toggle and switch it on. The badge next to the name changes to **Active**.
5.  Click the **Save Settings** button to confirm the change.

![Screenshot of the Features & addon settings page with an arrow on the Order Bump toggle](/images/store-management/order-bump/order-bump-enable-feature.webp)

## 2. Creating a New Order Bump Offer

Once the feature is active, you can create and manage your offers.

1.  Open **FluentCart** in your WordPress dashboard.
2.  Click the **More** menu item in the top navigation bar.
3.  Click **Order Bump**. It sits with **Coupons** and **Dynamic Pricing** in the marketing group. This takes you to the Order Bumps management screen.

![Screenshot of the More menu in the FluentCart top bar with an arrow on Order Bump](/images/store-management/order-bump/order-bump-more-menu.webp)

4.  Click the **Add New** button on the top right to create a new offer. A pop-up window will appear where you define the initial details of your offer.

![Screenshot of the Order Bumps screen with an arrow on the Add New button](/images/store-management/order-bump/order-bump-list.webp)

5.  To start creating your new offer, define its core identity:

    * **Offer title:** Enter the headline customers will see above the product, for example "Add socks for $150". Make it attractive.
    * **Offer product:** Search for and select the product or variation you want to offer as the bump. Shoppers can add it with one click.

6.  Click the **Create** button.

![Screenshot of the Create New Order Bump pop-up with the Offer title and Offer product fields](/images/store-management/order-bump/order-bump-create-dialog.webp)

After clicking **Create**, you will be taken to the configuration screen to set up the rest of your order bump's rules.

## 3. Configuring the Order Bump Details

The configuration screen is split into sections. The left column holds the basics and the display rules. The right column holds the product, discount, and placement.

![Screenshot of the order bump configuration screen with Basic Info, Display Conditions, Promotional Product, Discount, and Placement sections](/images/store-management/order-bump/order-bump-edit-screen.webp)

#### A. Basic Info

* **Enable this Order Bump:** Tick this checkbox to make the offer active. Untick it to keep the bump as a **Draft** without deleting it.
* **Bump Title:** The headline that captures the customer's attention (e.g., "Get this magic offer in 50% discount").
* **Bump Description:** Add a short, exciting description or a compelling reason why the customer should take the offer. You can use HTML in this field.

#### B. Display Conditions

This is where you define exactly when and for whom this offer appears, using conditional logic.

* **Enable Conditions for this Order Bump:** Check this box to activate the conditional logic.
* **Adding Conditions:** You can stack multiple conditions using dropdown menus to create precise rules based on cart content and value:
    * **Cart Items:** Check whether a specific product (for example, **Fleece Jacket**) is set to **Exists** or **Not Exist** in the customer's cart.
    * **Items Subtotal:** Set a threshold for the cart value (for example, **Items Subtotal** is **Greater Than $30**). The operators are **Greater Than**, **Less Than**, **Equals**, and **Not Equals**. **Greater Than** and **Less Than** also match an exactly equal subtotal.
* **Add Condition:** Adds another row to the same group. Every row in a group must match (AND logic).
* **Add New Condition Group:** Sets up a separate, alternative set of rules (OR logic). The bump displays if *any* of the groups' conditions are met.

For example, to show an offer only on carts worth more than $30, tick **Enable Conditions for this Order Bump**, choose **Items Subtotal** in the first dropdown, keep **Greater Than** in the second, and enter `30` as the amount. Use **Cart Items** to pick one or more products or variations instead.

![Screenshot of the Display Conditions section with an Items Subtotal Greater Than 30 rule](/images/store-management/order-bump/order-bump-display-conditions.webp)

#### C. Promotional Product

* **Promotional Product:** Shows the product you picked when creating the bump, with its image and price. Click **Change** to offer a different product. This item is added to the customer's cart if they accept the offer. Both **Published** and **Private** products are available, so you can offer hidden, customer-specific, or invite-only items as a bump without making them publicly visible in your store.
* **Image (optional):** Pick a custom image for the offer. When you leave it empty, the offered product's own image is used.

#### D. Discount

* **Discount Amount:** Choose **Percentage** or **Fixed**, then enter the amount. The amount must be greater than 0. Saving a bump with an empty or zero discount shows the message **Enter a discount amount greater than 0.**
* **Enable Coupon Discount on top of offer discount:** This option determines if other global coupons applied to the main cart can also be stacked on top of the Order Bump discount.
* **Free shipping for this offer item:** If desired, you can enable free shipping specifically for the bump product.

#### E. Placement

The **Placement** section decides where on the page the offer shows. It displays a summary of the current choice (for example **Checkout: Under order notes** and **Cart drawer and Cart page: Off**) as a card you can click to open the placement preview.

* **Checkout placement:** Choose where the offer sits on the checkout page. The options are **Default** (under the order notes), **Above Customer Details**, **Below Customer Details**, **Above Order Summary**, **Below Order Summary**, **Above Payment Gateways**, **Below Payment Gateways**, and **Disabled on checkout**. Offers with the same position are shown together.
* **Cart drawer and Cart page:** Turn this on to also offer the item in the cart drawer and on the cart page. It is off by default.
* **Priority:** When several order bumps qualify, the bump with the **higher** priority number is shown first.

Click the placement summary to open the **Placement preview**, a sample checkout where you choose the spot:

1.  Pick a spot from the **Checkout Placement** dropdown in the sidebar, or drag the offer card straight to a slot on the sample checkout.

    ![Screenshot of the Placement preview with the Checkout Placement dropdown open showing the placement options](/images/store-management/order-bump/order-bump-placement-options.webp)

    The offer moves to the new spot right away, so you can see exactly where customers will find it.

    ![Screenshot of the Placement preview with the offer moved below the payment gateways](/images/store-management/order-bump/order-bump-placement-moved.webp)

2.  To hide the offer on checkout, drop it in the **Hidden on checkout** area. This is the same as choosing **Disabled on checkout**.
3.  Tick **Show in cart drawer and cart page** in the sidebar to also offer the item in the cart. Once it is on, click the cart button to preview the cart drawer, or use the **Checkout** and **Cart page** switch at the top to preview the cart page.

    ![Screenshot of the Placement preview showing the offer in the cart drawer under Add to your order](/images/store-management/order-bump/order-bump-placement-cart-drawer.webp)

    The cart page preview shows the same offer under **Add to your order**.

    ![Screenshot of the Placement preview showing the offer on the cart page](/images/store-management/order-bump/order-bump-placement-cart-page.webp)

4.  Click **Use this placement** to copy your choice into the form. **Reset** brings back the values the form had when you opened the preview.

Nothing is saved until you update the bump, so finish with the **Update** step below.

After configuring all the details, click **Update** in the **Unsaved Changes** bar at the top of the page (or press Cmd+S / Ctrl+S). The offer goes live only if **Enable this Order Bump** is ticked.

## 4. Managing and Viewing Order Bumps

On the main **Order Bumps** screen, you can manage all your existing offers:

* **Status Tags:** Quickly see which offers are **All**, **Active**, or **Draft** (saved but not enabled).
* **Search, columns and sorting:** Use the search icon to find a bump by title or description, the columns icon to show or hide the **Title**, **Status**, and **Date** columns, and the sort icon to change the order of the list.
* **Table columns:** Each row shows the bump's **ID**, **Bump Title**, the **Offer** (product image, name, and variation), the **Price** (regular and offer price), the **Discount** (type and value), where it **Shows on**, its **Priority**, and its **Status**.
* **Shows on:** Small tags tell you where the offer appears, for example **Checkout · below order summary** plus a **Cart** tag when it is also offered in the cart drawer and cart page. A dash means the offer is hidden everywhere.
* **Status switch:** Use the switch in the **Status** column to turn a bump on or off without opening it.
* **Deleted product hint:** If the offered product was deleted, the row shows a hint. Open the bump and choose another product to make the offer work again.
* **Action Menu:** The vertical ellipsis (`...`) icon provides the **Delete** option for an existing bump.
* **Design:** The **Design** button at the top right opens the [card designs](/guide/store-management/orders-management/order-bump-design) page, where you choose how the offers look.

![Screenshot of the Order Bumps screen with an arrow on the Design button](/images/store-management/order-bump/order-bump-list-design.webp)

### What Customers See

Once active, the offers appear on your store's checkout page at the placement you chose, and in the cart drawer and cart page when you turned that option on. The card layout depends on the [design you choose](/guide/store-management/orders-management/order-bump-design), and the default is the **Classic Card**. In the Classic layout, each offer shows as its own card with:

* The product image (your custom image, then the variation's image, then the product's featured image, then your store's placeholder).
* Your **Bump Title** as a badge, followed by the product name and, when it differs, the variation name.
* The price. When the offer has a discount, the original price is struck through beside the discounted price, with the amount saved (for example **Save $4.75**).
* Your description, when you added one. The narrow cart drawer leaves the description out.
* A checkbox labeled **Grab it for** followed by the offer price. Ticking it adds the item to the cart, and unticking it removes the item again.

![Screenshot of an order bump card on the checkout page with the image, bump title badge, product and variation, struck-through price with the amount saved, and the Grab it for checkbox](/images/store-management/order-bump/order-bump-checkout-card.webp)

When you give different bumps different placements, each one shows at its own spot. In this example, one offer sits above the order summary and another sits below it.

![Screenshot of the checkout page with one order bump above the order summary and another below it](/images/store-management/order-bump/order-bump-checkout-positions.webp)

A few rules decide which offers appear:

* Checkout shows at most **five** bumps at a time. The cart drawer and the cart page each show two idle offers at a time, and an offer the customer already added always keeps its card so it can be removed.
* A bump is hidden when its product is already in the customer's cart, and a subscription bump is hidden when the cart already contains a subscription.
* A bump set to **Disabled on checkout** is not offered at checkout, but it still shows in the cart drawer and cart page when **Cart drawer and Cart page** is on.
* Bumps don't show on checkouts that can't take extra items, such as a custom payment link or a renewal payment.

::: info
Some integrations lock the checkout to a single item, for example a booking that must not be swapped or removed. Bumps stay hidden on those locked checkouts unless the integration explicitly opts in to them, in which case the customer can still accept a matching offer alongside the locked item. Developers can find the `fluent_cart/cart/accepts_additional_items` hook that controls this at [dev.fluentcart.com](https://dev.fluentcart.com/).
:::
