# Customize Store with Bricks

FluentCart works with the powerful **Bricks** theme & page builder, giving you complete creative control over your store's design. Instead of being limited to standard layouts, this integration adds a full set of FluentCart elements directly into the Bricks editor, allowing you to build everything from custom shop pages to unique single product layouts with a simple drag-and-drop interface.

This guide will show you how to use FluentCart's dedicated elements within Bricks.

## Getting Started

The integration is automatic. As long as you have both **FluentCart** and the **Bricks theme** installed and active on your site, you will find the FluentCart elements ready to use inside the Bricks editor.

### Building Your Main Shop Page

The easiest way to display your products is by using the main **Products** element.

1.  Open any page with the Bricks editor.
2.  Click the plus icon (**+**) to add a new element.
3.  In the elements panel, scroll down to the **FluentCart** category and click the **Products** element.

![FluentCart Elements in Brick](/guide/public/images/customization-and-themes/bricks/bricks-1.webp)

This will instantly add a beautiful, fully functional grid of your products to the page.

#### Customizing the Products Element

The real power comes from the customization options. After adding the **Products** element click on the element name in the right-hand panel, you can use the settings in the left-hand panel to control exactly how it looks and what it displays.

* **Content Settings**
    * **Display:** Choose between **Grid** and **List** view, toggle the frontend **View Switcher**, and pick a **Pagination Type** (**Numbers** or **Scroll**). Set the number of **Columns**, the **Gap** between products, and how many **Products per page** are shown.
    * **Query:** This is a powerful feature that lets you choose which products to display. You can filter by **Product Type**, **Product Categories**, **Include** or **Exclude** specific products by name, restrict to **On sale Products only**, and choose whether to **Allow Out Of Stock** items. Perfect for creating custom pages that feature "New Arrivals" or "Best Sellers."
    * **Filter:** Add a customer-facing filter sidebar so shoppers can narrow the collection themselves. See [Customer-Facing Product Filters](#customer-facing-product-filters) below for the full list of filter controls.
    * **Fields:** This allows you to reorder the different parts of the product card. You can drag and drop the fields to change the order of the product image, title, price, and button.
* **Style Settings**
    Under the **Style** tab, you have full control over the visual design. You can customize the Layout, Typography, Borders, and more to perfectly match the look and feel of your brand.

![Elements options in Brick](/guide/public/images/customization-and-themes/bricks/bricks-3.webp)

### Grid vs. List View

The **Products** element supports two layouts that customers can switch between on the frontend:

* **Grid (default):** Products appear in a multi-column card layout — ideal for shop pages where the product image is the main attention-grabber.
* **List:** Products appear in a single-column row layout — better for catalogs where the title, description, and price need more room to breathe.

Two settings control this:

* **View Mode:** Sets the default layout when the page first loads. Pick **Grid** or **List**.
* **Show View Switcher:** Enabled by default. When on, customers see toggle buttons on the frontend that let them flip between Grid and List without reloading the page. Turn this off if you want to lock the layout to a single mode.

### Pagination Type

Choose how customers move through long product lists:

* **Numbers (default):** Classic numbered pagination at the bottom of the list. Best for SEO and predictable navigation.
* **Scroll:** Products load automatically as the customer scrolls. Best for long, browse-heavy collections.

### Customer-Facing Product Filters

The **Filter** group adds a filter sidebar to the frontend so shoppers can refine the collection on their own — without you needing to build separate landing pages for every category, brand, or price band.

* **Enable Filter:** The master switch. Turn this on to expose the filter sidebar; the rest of the filter controls below are hidden until this is enabled.
* **Enable Sort By:** On by default. Adds a sort dropdown so customers can reorder products by price, name, or date.
* **Live Filter:** When on, results update instantly as the customer changes a filter — no "Apply" button required.
* **Wildcard Filter:** When on, free-text searches match partial words (e.g. typing `shoe` matches `shoes`, `shoebox`, etc.).
* **Product Categories:** Add a category filter section to the sidebar. With **Display Name** you can rename the section (e.g. show "Shop by Category" instead of the default "Product Categories").
* **Product Brands:** Add a brand filter section. The **Display Name** field works the same way.
* **Price Range:** Add a price-range slider. The **Display Name** field lets you label it however suits your store (e.g. "Filter by Price").

Use these together to build a filtered shop experience that matches your customers' expectations — the filters work without a page reload when **Live Filter** is on, and they integrate with the **Sort By** dropdown for combined refinement.
