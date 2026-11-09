# Dashboard Overview

This section provides an overview of the FluentCart **Admin Dashboard**, which is your control center for managing your e-commerce store.

:::info
For information on what your **customers** see when they log into their accounts, please refer to our [Customer Dashboard Overview](/guide/customer-dashboard/) documentation.
:::

The FluentCart Dashboard is the first screen you see when you log into your WordPress admin area and navigate to FluentCart. It provides a quick, at-a-glance overview of your store's performance and recent activities, helping you stay informed about your business operations.

### Quick Access Controls (Top Right)

In the top-right corner of the FluentCart dashboard, you’ll find three helpful shortcuts:

- **Search (⌘K / Ctrl+K)**  
  When someone clicks on the search panel, a popup will appear allowing them to search for products, orders, customers, or settings across FluentCart.

- **Theme Toggle**  
  Switch between **Light**, **Dark**, or **System** mode to match your preference.

- **Settings Shortcut**  
  Click the gear icon to go directly to FluentCart’s settings page for configuring store preferences, payments, emails, and more.

## Key Dashboard Sections

The dashboard is designed to give you instant insights into your store's health.

### 1. Welcome & Quick Actions

At the top of the main dashboard area, you'll find a welcome message and quick action buttons.


* **Add Product Button:** A quick-access button to create a new product, allowing you to quickly expand your inventory.

### 2. Getting Started

On the right side of the FluentCart dashboard, you’ll see the **Getting Started** panel. This helps you quickly set up your store by walking through the essential first steps. The panel is shown to administrators only.

The checklist includes:

- **Add Details to Store**  
  Add your store name and upload a store logo under **Settings > Store Setup**. The step is ticked off once both are saved.

- **Add Your First Product**  
  Create a product using the **Products → Add New** option to make your first item available for sale.

- **Setup Pages**  
  Generate key pages like Checkout, Cart, and Account in the settings.

- **Setup Payment Methods**  
  Turn on Stripe, PayPal, cash on delivery, or another gateway so you can start accepting payments.

#### Page Builder Steps

Up to three more steps appear only when they apply to your site, so you'll see them only if you build pages with one of the supported builders:

- **Install Bricks Addon**  
  Appears when the **Bricks** theme is active. It points you to the add-on that brings extra FluentCart elements into the Bricks editor, and ticks itself off once that add-on is installed. See [Customize Store with Bricks](/guide/customization-and-themes/customize-store-with-bricks).

- **Install Elementor Addon**  
  Appears when **Elementor** is active, and works the same way for FluentCart's Elementor widgets. See [Using Elementor Widgets](/guide/customization-and-themes/using-elementor-widgets).

- **Install Divi Addon**  
  Appears when a **Divi** theme is active, and works the same way for FluentCart's Divi modules. See [FluentCart Divi Modules](/guide/customization-and-themes/fluentcart-divi-modules).

:::info
As you complete each step, FluentCart will mark it off automatically. This guide disappears once your setup is complete.
:::

### 3. Store Key Metrics

This section of the dashboard provides a simple, at-a-glance overview of your store's most important performance indicators. It's designed to give you a quick snapshot of your business health every time you log in. The stats, the chart, **Recent Orders**, **Top Sold Products**, and the heat map are shown only to users with report access.

A small **Last 30 Days** label above the cards tells you the period. **Total Products** counts every product that isn't in the trash. **Orders**, **Revenue**, and **Refund** cover orders created in the last 30 days, leaving out on-hold and failed orders:

* **Orders:** The number of orders.
* **Revenue:** What you were paid, less refunds and tax.
* **Refund:** The total amount refunded on those orders.

Amounts are shown in your base currency.

### 4. Sales Growth Chart

This chart provides a clear, visual representation of your store's performance over time, helping you to spot trends, track growth, and understand your sales patterns.

By default, the chart displays two key metrics:

* **Revenue:** The total monetary value of sales for each day.
* **Orders:** The total number of orders received each day.

You can hover your mouse over any point on the chart to see a detailed breakdown of the exact Revenue and Order count for that specific day. This makes it easy to analyze your performance and see how your sales are progressing.

### 5. Recent Activities

This log sits in the right-hand sidebar, under the **Getting Started** panel. It shows a list of the newest important things that happened in your store, such as order updates, payments, and refunds, and serves as a quick audit trail for recent operations.

* **Example Activities:** Order Created, Payment Paid, Order Status Updated, Order Refunded, Shipping Status Updated, License Upgrade.

<!-- TODO(screenshots): dashboard-overview.webp is outdated: the 2.2.0 dashboard shows a "Last 30 Days" label above the stat cards; retake the full dashboard (stat cards with the label, Sales Growth chart, right sidebar with Getting Started and Recent Activities). Update later. -->
![Screenshot of Dashboard Overview - Getting Started](/images/getting-started/admin-dashboard/dashboard-overview.webp)

### 6. Recent Orders

A snapshot of your most recent customer orders, allowing for quick review.

* Displays the Order ID, Creation Date, Customer Name, Number of Items, and Total Amount for each order.
* Includes a **View All** link to navigate to the full [Orders Management](/guide/store-management/orders-management/) screen for detailed management.

### 7. Top Sold Products

This widget highlights your current best-sellers, helping you to instantly see which products are most popular with your customers. It's a valuable tool for understanding product trends and making decisions about inventory and marketing.

* Click the **View All** link to navigate to the **Products** section for more details of your products.

![Screenshot of Getting Started](/images/getting-started/admin-dashboard/order-heat-map.webp)

### 8. Order Heat Map

A world map that shades each country from **Low** to **High** by its number of orders. Hover over a country to see its order count.

The dashboard gives you a daily snapshot of your store, so you can spot what needs attention the moment you log in.

