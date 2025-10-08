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
* **Triggers:** Triggers are specific events in FluentCart that start an automation for this product. You can choose the exact point in the customer journey, like when an order is paid, refunded, shipped, or when a subscription changes status, to run your integration feed.

#### Creating a New Integration Feed

Click the **Add Integration** button to set up a new automation rule. You will be given options to connect to installed Fluent products:

* [**FluentCRM Integration:**](/guide/integrations/fluentcrm-integration.md) This allows you to automatically manage the customer who buys this product in FluentCRM. You can configure actions such as **Adding a user to a specific list**, **Removing a user from a list**, **Applying a Tag**, or **Removing a Tag**, based on the purchase.
* [**FluentCommunity Integration:**](/guide/integrations/fluentcommunity-integration.md) This allows you to automatically manage user access to your community or courses. You can set actions such as **Adding a user to a specific Space** or **Course**, or **Removing a user from a Space** or **Course**.


