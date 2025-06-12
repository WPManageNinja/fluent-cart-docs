 # Pages Setup

The **Pages Setup** screen in FluentCart lets you connect key store features to specific pages on your WordPress site. This ensures that customers can access the Shop, Cart, Checkout, Customer Profile, and other essential pages correctly.

## Accessing Pages Setup

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2.  Click on the **"Pages Setup"** tab.

    ![Screenshot of Pages Setup Tab](/guide/public/images/settings-configuration/pages-setup.png)

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
* **Select Checkout Page:** Assigns the page where customers enter their billing, shipping, and payment information to finalize their purchase.
    * **Required Shortcode:** `[fluent_cart_checkout]`
* **Select Custom Payment Page:** Assigns a dedicated page that can be used for custom payment links (e.g., for collecting additional payments on modified orders).
    * **Required Shortcode:** `[fluent_cart_custom_payment]`

## Saving Your Settings

After assigning all the necessary pages, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

:::warning Important: Use Shortcodes!
Always ensure that the specified shortcode is correctly embedded within the content editor of the WordPress page you select. Without the shortcode, the FluentCart functionality will not display on that page.
:::

