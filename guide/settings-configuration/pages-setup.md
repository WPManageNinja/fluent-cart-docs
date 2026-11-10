# Pages Setup

The **Pages Setup** screen in FluentCart lets you connect key store features to specific pages on your WordPress site. This ensures that customers can access the Shop, Cart, Checkout, Customer Profile, and other essential pages correctly.

## Accessing Pages Setup

Go to **FluentCart Pro > Settings > Store Settings > Pages Setup**.

## Assigning Core Pages

For each core FluentCart functionality, you need to select an existing WordPress page from the dropdown menu. Below each dropdown, FluentCart will display the specific **shortcode** that *must* be added to the content of the selected page for the functionality to work correctly.

* **Select Shop Page:** Assigns the main page where all your products will be displayed.
    * **Required Shortcode:** `[fluent_cart_products]`
* **Select Customer Profile Page:** Assigns the page where customers can view and manage their personal details, orders, and downloads. You can find detailed information on what your customers see and manage in the [Customer Dashboard](/guide/customer-dashboard/index) section.
    * **Required Shortcode:** `[fluent_cart_customer_profile]`
* **Select Cart Page:** Assigns the page that displays the customer's current shopping cart contents.
    * **Required Shortcode:** `[fluent_cart_cart]`
* **Select Receipt Page:** Assigns the page that displays the order summary immediately after a successful purchase.
    * **Required Shortcode:** `[fluent_cart_receipt]`
* **Select Order Review Page:** The page where customers review the products they bought, opened from the link in their order email. This option appears only while Product Reviews are switched on.
    * **Required Shortcode:** `[fluent_cart_order_review]`
* **Select Checkout Page:** Assigns the page where customers enter their billing, shipping, and payment information to finalize their purchase.
    * **Required Shortcode:** `[fluent_cart_checkout]`

Don't have the page yet? Click the **+** button next to a dropdown, enter a **Page Name**, and click **Create Page**. FluentCart creates the page with the right shortcode and selects it. When a page is selected, **Edit** and **Preview** links appear below the dropdown.

![Screenshot of Pages Setup Tab](/images/settings-configuration/pages-setup/pages-setup.webp)

## Saving Your Settings

After assigning all the necessary pages, click **Save** (at the bottom of the form or top right) to apply your configurations.

:::warning Important: Use Shortcodes!
Always ensure that the specified shortcode is correctly embedded within the content editor of the WordPress page you select. Without the shortcode, the FluentCart functionality will not display on that page.
:::

