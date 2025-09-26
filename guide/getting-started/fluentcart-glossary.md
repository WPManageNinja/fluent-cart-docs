# Glossary

This glossary defines common terms used throughout the FluentCart documentation to help you understand key features and concepts.

**A**

* **Abandoned Cart:**
    A shopping cart where a customer has added products but has not completed the checkout process. FluentCart can track these for recovery and remarketing campaigns.

* **Activation Limit:**
    The maximum number of times a **License Key** can be used to activate a software product. This is set per **Variation** (e.g., a "Single Site" license has an activation limit of 1).

* **Add-on:**
    An optional extension that adds new features and capabilities to FluentCart Pro, such as Subscriptions or advanced licensing.

* **Advanced Filters:**
    A set of powerful tools in the admin dashboard for searching and segmenting records like orders or customers based on specific, detailed criteria.

* **Applied Coupon:**
    A record that tracks the use of a specific **Coupon** on an order, detailing the discount amount that was applied.

* **AWS S3 (Amazon Simple Storage Service):**
    A secure cloud storage service used by FluentCart for delivering digital products. This ensures that large files are delivered quickly and that access is controlled and secure.

**B**

* **Billing Address:**
    The address associated with a customer's payment method. It is used for payment verification and generating invoices.

**C**

* **Checkout:**
    The final stage of a purchase where customers provide payment information, shipping details, and confirm their order.

* **Checkout Action:**
    An automation that triggers during the checkout process. It is used to connect FluentCart to other services, such as adding a customer to a specific list in FluentCRM. Also referred to as a **Feed**.

* **Compare at price:**
    An optional, higher price shown with a strikethrough next to the actual selling price. This is used to visually indicate a sale or discount.

* **Coupon:**
    A promotional code that customers can enter at checkout to receive a discount, such as a fixed amount or a percentage off their order total.

* **Currency Settings:**
    The global settings that define the store's primary currency, symbol, formatting, and decimal precision for all product prices and reports.

* **Customer:**
    An individual who has made a purchase from your store. FluentCart creates and maintains a profile for each customer, tracking their contact information and order history.

* **Customer Lifetime Value (CLV):**
    A key metric available in FluentCart's analytics that shows the total revenue a business can reasonably expect from a single customer account throughout their entire relationship with your store.

**D**

* **Digital Product:**
    Any item sold as a downloadable file, such as an e-book, software, or template.

**E**

* **Email Credit Link:**
    A unique URL that can be embedded in emails. When a customer clicks this link, a specific credit or discount is automatically applied to their next purchase or added to their account.

* **Email Notification:**
    Automated emails sent from your store to customers or administrators to confirm actions like order placement, payment, or refunds.

**F**

* **Feed**
    In the context of **Checkout Actions:**, a feed is a single, configured automation that sends data from FluentCart to another service (like FluentCRM).

**G**

* **GDPR (General Data Protection Regulation):**
    A comprehensive data privacy regulation. FluentCart is built to be GDPR-compliant, ensuring that your customers' personal data is handled securely and with their consent.

**H**

* **Headless Commerce:**
    An e-commerce architecture where the front-end storefront (the "head") is decoupled from the back-end commerce engine (FluentCart). This allows for highly custom websites, mobile apps, or other front-ends to be built using the **REST API**.

* **Hybrid Product:**
  A single product listing that offers multiple types of the same item. For example, offering a book as a physical hardcover, a digital e-book, and a subscription to related content, all from one product page.

**I**

* **Inventory Management:**
    The process of tracking stock levels for **Physical Products**, including available quantities, units on hold for pending orders, and fulfilled units.

**L**

* **Labels:**
    Custom markers or tags that can be applied to orders or customers for internal organization. Labels help you filter and manage records efficiently (e.g., "VIP," "Follow-up Required").

* **License Activations:**
    The count of how many times a specific **License Key** has been used to activate a product. This is tracked against the **Activation Limit**.

* **License Key:**
    A unique code generated and sold with a **Licensed Product** to verify a customer's purchase and control its usage according to the **Activation Limit** and validity period.

* **Licensed Product:**
    A type of **Digital Product** (usually software or a plugin) that requires a **License Key** for activation and use.

* **Logs:**
    A system-generated record of important actions, events, and errors within FluentCart. Logs are essential for troubleshooting and debugging issues.

**M**

* **Manual Order:**
    An order created directly from the admin dashboard by a store administrator on behalf of a customer.

**O**

* **Order:**
    A formal record of a customer's transaction. It includes all details of the purchase, such as products, pricing, customer information, and payment status.

* **Order Status:**
    The current stage of an **Order** in the fulfillment process (e.g., Pending, Completed, Refunded). Statuses can be updated manually or automatically by payment events.

**P**

* **Payment Gateway:**
    A third-party service that processes customer payment information to authorize and complete transactions. FluentCart includes built-in integrations for major gateways like Stripe and PayPal, and allows for custom integrations via **Webhooks**.

* **Physical Product:**
    A tangible item that must be physically shipped to a customer. Requires inventory tracking and shipping settings.

* **Product:**
    Any item, service, or download that you offer for sale in your store.

* **Product Category:**
    A method for organizing similar products into public-facing groups to help customers browse your store (e.g., "Men's Clothing," "Software," "Home Decor").

* **Product Status:**
    The current visibility and availability of a product in your store's backend.
    * **Draft:** The product is not visible to the public and is still being worked on.
    * **Published:** The product is live and available for purchase on your storefront.
    * **Archived:** (Coming Soon) A planned status to hide a product from the main store view without deleting it.

* **Product Type:**
    A flexible, custom classification system you create to group and manage products for your own internal needs (e.g., "Polo Shirts," "Limited Edition," "Brand Collabs").

* **Purchases:**
    A record of a completed transaction where a customer has successfully bought one or more products from your store.

**R**

* **Receipt Template:**
    A customizable layout for the email receipts sent to customers after a purchase. You can modify its structure and content to match your brand.

* **Refund:**
    The action of returning a partial or full payment amount to a customer. Refunds are processed directly from the **Order** details page.

* **Renewals:**
    The process by which a customer extends their subscription or license for another term, either manually or through an automatic recurring payment.

* **REST API (Representational State Transfer Application Programming Interface):**
    An interface that allows developers to interact with your store's data (like products, orders, and customers) programmatically. It is the core technology that enables **Headless Commerce** and custom integrations.

* **Roles & Permissions:**
    Settings within WordPress that control which user roles (e.g., Administrator, Shop Manager) have access to view or manage specific FluentCart features and data.

**S**

* **Shipping Address:**
    The physical address where a customer's order will be delivered. This is only required for **Physical Products**.

* **Shipping Class:**
    A way to group products with similar shipping characteristics (e.g., "Heavy Items," "Fragile") in order to apply specific shipping cost adjustments.

* **Shipping Method:**
    The specific service used to deliver physical products, such as Flat Rate, Free Shipping, or Local Pickup. Methods are applied to different **Shipping Zones**.

* **Shipping Zone:**
    A specific geographic region (e.g., a country, state, or group of zip codes) to which a unique set of **Shipping Methods** and rates apply.

* **Shortcode:**
    A small placeholder, enclosed in curly braces (e.g., `{order.id}`), used in email and document templates. FluentCart automatically replaces it with the corresponding dynamic information, such as a customer's name or order number.

* **Simple Pricing:**
    A pricing method used for products that have only one version and a single price. To learn more, read the price configuring documentation.

* **Simple Variations:**
    A pricing method for products that come in multiple versions. This allows each **Variation** to have its own unique price, image, stock level, or license rules. To learn more, read the price configuring documentation.

* **SKU (Stock Keeping Unit):**
    A unique alphanumeric code assigned to a product or a specific **Variation** to track inventory.
