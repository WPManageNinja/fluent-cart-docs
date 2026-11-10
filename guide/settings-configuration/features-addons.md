# Features & Addons

The **Features & addon** section in FluentCart is the central hub for managing the plugin's modular functionality. This area allows you to activate or deactivate high-level modules, ensuring that your store's backend remains clean and optimized by only running the features you actually need.

## Accessing Features & addon

To manage your store's modules:

1.  Log in to your **WordPress Dashboard**.
2.  Navigate to **FluentCart > Settings** in the side menu.
3.  Select the **Features & addon** tab from the left-hand sidebar.

Only WordPress administrators (super admins) see the **Features & addon** tab.

![Features & Addons](/images/settings-configuration/feature-addon/features-addons-1.webp)

## Managing Available Modules

In this section, you will find toggles for core features. When a feature is toggled on, it will display an **Active** badge; otherwise, it will show as **Inactive**.

### 1. Cloudflare Turnstile

This module provides advanced security for your checkout page.

* **Function:** Protects your stores checkout page from spam and malicious bots using Cloudflare’s invisible reCAPTCHA technology.
* **Configuration:** Once enabled, you will be prompted to enter your **Turnstile Site Key** and **Turnstile Secret Key** to complete the integration. See [Cloudflare Turnstile Integration](/guide/integrations/cloudflare-turnstile-integration) for full setup and key configuration.

### 2. Product Licensing

This is the cornerstone for digital product sellers and software developers.

* **Function:** Enables the entire software licensing system.
* **When Active:** You can generate, manage, and sell license keys for products like software, plugins, or digital assets. See [Creating Licensed Product](/guide/product-types-creation/creating-digital-products-with-licenses) and [Managing Licenses](/guide/customer-dashboard/licenses) (customer-facing).
* **When Inactive:** All licensing-related fields and settings will be hidden from the product management screens.
* **Requirements:** FluentCart Pro. Without Pro, this card is not listed.

### 3. Stock Management

Allows you to maintain a clear overview of your physical or limited digital inventory.

* **Function:** Enables inventory tracking tools, allowing you to set stock levels and display "In Stock" or "Out of Stock" messages to customers. For details, see [Inventory Management](/guide/product-types-creation/inventory-management).
* **Advanced Inventory:** When Stock Management is active, the card shows an **Enable Advanced Inventory** checkbox (FluentCart Pro, off by default). Without Pro, the checkbox is disabled with an **Upgrade to Pro** link. Tick it and save to add **Inventory** under the **Products** menu, a dedicated workspace with cross-catalog stock views, bulk stock updates, and an auditable adjustment history. Every stock change is recorded with the user, timestamp, old and new values, and an adjustment reason. See [Advanced Inventory](/guide/product-types-creation/advanced-inventory) for the full workflow.
* **When Advanced Inventory Is Off:** The Inventory menu is hidden and no adjustment history is recorded. Per-product stock still works as usual.

### 4. Order Bump

A powerful tool for increasing your Average Order Value (AOV).

* **Function:** Allows you to offer relevant add-on products directly on the [checkout](/guide/settings-configuration/cart-checkout-settings) page, encouraging customers to add one more item to their purchase just before they pay. See [Order Bump](/guide/store-management/orders-management/order-bump) for creating and managing order bumps.
* **Requirements:** FluentCart Pro. Without Pro, this card is not listed.

### 5. Dynamic Pricing

Automatic discounts and fees based on rules you define.

* **Function:** Adds a **Dynamic Pricing** entry to the **More** menu, where you create rules that discount or add fees to line items, the checkout total, or shipping when a cart meets your conditions. See [Dynamic Pricing](/guide/marketing-sales-tools/dynamic-pricing) for creating and managing rules.
* **Requirements:** FluentCart Pro. The module ships off.
* **When Inactive:** The menu item is hidden and no rules are applied at checkout.

### 6. MCP for AI Agents

This module exposes a secure endpoint that lets AI assistants like Claude, Cursor, and Codex connect to your store.

* **Function:** Turns on the FluentCart MCP server so AI clients can read store data and run operator tasks, scoped to the connecting account's permissions.
* **Configuration:** Ships off. See [Connecting AI Assistants (MCP)](/guide/settings-configuration/mcp) for requirements, enabling, and client setup.

## Saving Your Changes

After toggling any feature on or off:

1.  Review your selections to ensure they match your store's requirements.
2.  Click the **Save Settings** button located at the bottom right of the screen.

> **Note:** Some features, like [Cloudflare Turnstile](/guide/integrations/cloudflare-turnstile-integration), may require additional configuration (such as API keys) immediately after activation to function correctly.

## Installing Plugin Addons (One-Click Installer)

Below the core feature toggles, the **Features & addon** page also has a **Plugin Addons** section. It lists addons such as **Elementor Blocks**, **FluentCart Bricks Blocks**, **FluentCart Divi Modules**, **Fluent PDF**, **FluentCart Migrator**, and **FluentCart Customer Rights**. You don't need to download a ZIP file, upload it through the WordPress plugin uploader, and then activate it. The whole flow takes a single click.

### Prerequisites

Before you use the one-click installer, make sure:

1.  **FluentCart Pro** is active. Without Pro, each card shows a **Download** button that opens the FluentCart add-ons page so you can download the plugin and install it yourself.
2.  Your server can make outbound HTTPS requests (this is the case on virtually every standard WordPress host).

### How to Install an Addon in One Click

1.  Navigate to **FluentCart Pro > Settings > Features & addon**.
2.  Scroll to the **Plugin Addons** section at the bottom of the page.
3.  Find the addon card for the addon you want to install (e.g., Fluent PDF).
4.  Click the **Install & Activate** button on the card.

FluentCart fetches the addon from the FluentCart CDN (Fluent PDF comes from WordPress.org), installs it, and activates it automatically. The card's status badge switches to **Active** as soon as the process finishes, so you can use the addon immediately, with no page reload or upload needed.

When an addon is installed but inactive, the card shows **Activate** instead.

### FluentCart Bricks Blocks

If you build your site with the **Bricks** theme, the **FluentCart Bricks Blocks** addon adds fifteen more FluentCart elements to the Bricks editor, covering the cart, checkout, product search, categories, and the customer dashboard.

The card appears in the **Plugin Addons** section like any other addon, and installs with the same single click:

1.  Navigate to **FluentCart Pro > Settings > Features & addon**.
2.  Scroll to the **Plugin Addons** section and find the **FluentCart Bricks Blocks** card.
3.  Click the **Install & Activate** button on the card.

::: info
This addon requires the **Bricks** theme to be installed and active. Without it, the elements have no editor to load into. See [FluentCart Bricks Blocks](/guide/customization-and-themes/fluentcart-bricks-blocks) for the full block list and workflow.
:::

### FluentCart Divi Modules

If you build your site with **Divi**, the **FluentCart Divi Modules** addon adds native Divi 5 modules for FluentCart to the Divi builder, covering your products, cart, checkout, and customer dashboard.

The card appears in the **Plugin Addons** section like any other addon, and installs with the same single click:

1.  Navigate to **FluentCart Pro > Settings > Features & addon**.
2.  Scroll to the **Plugin Addons** section and find the **FluentCart Divi Modules** card.
3.  Click the **Install & Activate** button on the card.

::: info
This addon requires **Divi 5.0+** and **FluentCart 1.3.4+**. See [FluentCart Divi Modules](/guide/customization-and-themes/fluentcart-divi-modules) for the full module list and workflow.
:::

### Shipping For FluentCart

The **Shipping For FluentCart** addon connects your store to Shippo, so you can show live carrier rates at checkout, buy shipping labels from the order screen, and track shipments.

The card appears in the **Plugin Addons** section like any other addon:

1.  Navigate to **FluentCart Pro > Settings > Features & addon**.
2.  Scroll to the **Plugin Addons** section and find the **Shipping For FluentCart** card.
3.  Click the **Install & Activate** button on the card.

If FluentCart Pro is not active on your site, the button reads **Download** instead. It does not install anything: it opens the FluentCart add-ons page in a new tab, and you install the plugin yourself. Once the addon is active, a settings icon on its card opens the **Carriers** page.

::: info
See [Shipping Carriers](/guide/shipping/shipping-carriers) for installing the addon, connecting your Shippo account, and managing shipments.
:::
