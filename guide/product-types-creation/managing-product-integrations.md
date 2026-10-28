 # Managing Product Integrations (Product-Specific)

FluentCart allows you to connect individual products with relevant external services or FluentCart modules. This provides a flexible way to extend your product's functionality, streamline workflows, or integrate with third-party platforms directly from the product level.

## Accessing Product-Specific Integrations

Product-specific integration settings are found within the **Edit Product** screen for individual products.

1.  Navigate to **FluentCart Pro > Products** in your WordPress dashboard.
2.  [Edit an existing product](/guide/product-types-creation/product-list-overview) by clicking its name or the "Edit" action.
3.  On the **Edit Product** screen, click on the **"Integrations"** tab.

    ![Screenshot of Product Integrations Tab](/images/product-types-creation/managing-product-integration/Product-Integration.webp)

## Configuring Product Integrations

In the **Integrations** tab of a product’s settings, you can set up and manage automation feeds for that product. These feeds allow you to automatically run actions in other modules (like FluentCRM or FluentCommunity) whenever the product is purchased or triggered.

#### Integration Feed Management

This section displays a list of all existing automation feeds created for this product.

* **Status:** A simple toggle switch allows you to instantly turn any integration feed **On** or **Off** without deleting the setup.
* **Integration:** You will see the name and icon of the connected module (e.g., **FluentCRM** or **FluentCommunity**).
* **Title:** The feed name you gave it, so you can tell several feeds for the same service apart.
* **Triggers:** Triggers are specific events in FluentCart that start an automation for this product. Pick one or more events under **Event Trigger**: **Order Paid (Payment / Subscription)**, **Order Canceled**, **Order Refunded (Full)**, **Subscription Activated**, **Subscription Reactivated**, **Subscription Canceled**, **Subscription Renewed**, **Subscription End of Term (Completed)**, **Subscription Expired / End of Access Validity**, **Order Shipped**, or **Order Delivered**.

Use the edit and delete buttons at the end of each row to change or remove a feed.

#### Creating a New Integration Feed

Click **Add Integration** and pick a service from the dropdown. The list only includes integrations that are ready to use. For example, **FluentCRM**, **FluentCommunity**, **LearnDash**, and **LifterLMS** appear only when that plugin is active.

* [**FluentCRM**](/guide/integrations/fluentcrm-integration): **Add to Lists**, **Add to Tags**, **Remove From Lists**, **Remove From Tags**, plus an optional contact note and double opt-in.
* [**FluentCommunity**](/guide/integrations/fluentcommunity-integration): **Add to Spaces**, **Add to Courses**, **Remove From Spaces**, **Remove From Courses**.
* [**LearnDash**](/guide/integrations/learndash-integration) *(Pro)*: Enrol buyers in LearnDash courses.
* [**LifterLMS**](/guide/integrations/lifterlms-integration) *(Pro)*: Enrol buyers in LifterLMS courses.
* **WP User Create/Update** *(Pro)*: Create or update the buyer's WordPress user account and assign roles.
* [**Webhook**](/guide/integrations/webhook-integration) *(Pro)*: Send the order data to any URL.

If no integration is ready, the tab shows a message with a **Configure Modules** button instead of **Add Integration**. Activate the plugin you want to connect, or set it up under **FluentCart Pro > Integrations**, first.


