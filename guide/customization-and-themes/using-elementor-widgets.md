# Using Elementor Widgets

Making a successful online store needs two things: a great look and the right tools. If you use Elementor to build your website, FluentCart gives you a set of built-in widgets that fit perfectly with your designs.

With these widgets, you can drag and drop product lists, checkout forms, single-product layouts, search bars, and more anywhere on your site, without writing any code. And if you'd rather not start from scratch, the addon ships ready-made templates for every store page.

## Turn on the Elementor Widgets

FluentCart starts with only the basics to keep your site fast. To use the Elementor widgets, you need to turn them on first.

1. **Go to Settings:** In your WordPress dashboard, go to **FluentCart → Settings**.
2. **Open Features & Addons:** Click the **Features & addon** tab on the left.
3. **Find Plugin Addons:** Scroll to the bottom of the page to find the **Plugin Addons** section.
4. **Turn it On:** Find the **Elementor Blocks** card and click **Install & Activate**.

::: info
The Elementor Blocks add-on is available on **FluentCart Free** as well as Pro, and it installs in one click from the Plugin Addons section. It requires **Elementor 3.34 or later**.
:::

![Screenshot of the FluentCart widget category panel in the Elementor editor](/images/customization-and-themes/fluentcart-elementor-widgets/elementor-widget-1.webp)

Activating the addon gives you three things:

* **Two new widget categories** inside the Elementor editor — **FluentCart** for store-wide widgets and **FluentCart Product** for single-product widgets.
* **Eight ready-made page templates** in Elementor's template library, so you can start from a finished design instead of a blank canvas.
* **A FluentCart Product site part** in Elementor's Theme Builder, for designing one product layout that applies across your catalog *(requires Elementor Pro)*.

## How to Find Your Widgets in the Editor

When you open any page or template in Elementor:

1. Open the **Elements panel** (click the grid icon in the top-left corner).
2. Type **FluentCart** in the search bar, or scroll the panel until you find the FluentCart categories.

![Screenshot of the FluentCart widget category panel in the Elementor editor](/images/customization-and-themes/fluentcart-elementor-widgets/widget-for-fluentcart/fluentcart-elementor-1.webp)

FluentCart groups its Elementor widgets into two categories so you always know where to look:

* **FluentCart** — store-wide widgets you can drop on any page: product grids, carousels, mini cart, cart, checkout, order receipt, customer dashboard, search bar, store logo, related products, and the all-in-one Product Info block.
* **FluentCart Product** — focused widgets for single-product templates inside Elementor Pro's Theme Builder: title, gallery, price, stock, SKU, package description, excerpt, content, and buy section.

## Start From a Ready-Made Template

You don't have to build every store page from a blank canvas. Activating the addon also adds **eight ready-made FluentCart page templates** to Elementor's own template library. Each one is a complete, pre-designed layout built with the FluentCart widgets — insert it, swap in your own content, and your page is done.

| Template | What it designs |
|---|---|
| **FluentCart — Shop** | Your main shop page, with the product grid and filters |
| **FluentCart — Single Product** | A single product page layout |
| **FluentCart — Product Category** | A category listing page |
| **FluentCart — Cart** | The shopping cart page |
| **FluentCart — Checkout** | The checkout page |
| **FluentCart — Thank You** | The post-purchase order receipt page |
| **FluentCart — Customer Dashboard** | The customer account area |
| **FluentCart — Campaign Landing** | A promotional landing page for a single offer or campaign |

### Inserting a template

1. Create a page and click **Edit with Elementor**.
2. On the blank canvas, click the **folder icon** (**Add Template**).
3. Open the **My Templates** tab. The FluentCart templates are registered as **Page** templates and grouped under a **FluentCart** category, each with a preview image on its card.
4. Find the template you want — all eight are prefixed **FluentCart —** so they sort together — and click **Insert**.
5. Elementor asks whether to apply the template's page settings. Either answer works; choosing **Yes** keeps the design closest to the original.

Once inserted, everything is a normal Elementor layout. Edit any widget, delete sections you don't need, and restyle it to match your brand.

You'll also want to tell FluentCart to use these pages. After building them, assign each one under **FluentCart Pro → Settings → Pages Setup** so your store's shop, cart, checkout, and dashboard links point at your new designs. See [Pages Setup](/guide/settings-configuration/pages-setup) for the full walkthrough.

::: info The templates install themselves
The template set is seeded into Elementor's library automatically the first time an administrator loads the WordPress admin after activating the addon — there's no import step. Elementor must be active for seeding to happen, so if you activate the FluentCart addon first, the templates appear once Elementor is running.

The seeder tags the items it created and only ever touches those. Your own saved templates are never modified, renamed, or removed.
:::

::: warning Edit the page, not the library item
When a future addon update ships a revised layout, the seeder rewrites its own library items in place. Any changes you made to a seeded template *inside the library* would be overwritten.

This never affects your pages — inserting a template copies it onto the page, and that copy is yours. So insert first, then customize on the page. Treat the library items as read-only starting points.
:::

## Design Product Pages with Elementor Theme Builder

Beyond the page templates, the addon registers a **FluentCart Product** site part inside Elementor's **Theme Builder**. This is how you design one product layout and apply it across your whole catalog, instead of laying out each product by hand.

Go to **Templates → Theme Builder** and you'll find **FluentCart Product** listed alongside Header, Footer, Single Post, and the rest of the site parts.

![Screenshot of the Elementor Theme Builder site parts screen with FluentCart Product listed first](/images/customization-and-themes/fluentcart-elementor-widgets/elementor-theme-builder-site-parts.webp)

::: warning Requires Elementor Pro
Theme Builder is an Elementor Pro feature. The **FluentCart Product** site part only appears when Elementor Pro (or ProElements) is active. The widgets and the ready-made page templates above work on free Elementor.
:::

To build one:

1. Go to **Templates → Theme Builder** and click **FluentCart Product**.
2. Click the **+** to start a new template.
3. Build the layout using the [FluentCart Product widgets](/guide/customization-and-themes/elementor-product-widgets) — title, gallery, price, stock, SKU, excerpt, buy section, and more. The editor panel opens with the **FluentCart Product** category expanded, and the store-wide **FluentCart** category sits right below it. Set each widget's **Source** to **Current Product** so the template reads whichever product is being viewed.
4. Click **Publish** and set your **display conditions**.

### Display conditions

FluentCart adds its own conditions so your templates target the right pages:

* **FluentCart → All Products** — applies the template to every product page.
* **FluentCart → Products** — applies it to one specific product, so you can give a flagship product its own design.
* **Archive → FluentCart Product Archives** — applies an Archive template to FluentCart's category and brand pages.

::: tip Why FluentCart needs its own archive condition
Elementor Pro's built-in "Products Archive" condition only recognizes WooCommerce, so it never matches FluentCart's category and brand URLs. Use **FluentCart Product Archives** instead when building an Archive template for your store.
:::

You can create multiple product templates and assign each to different products or product types — the most specific matching condition wins.

### What happens to FluentCart's default layout

FluentCart normally renders its own product pages and its own category and brand archives. Once an Elementor template claims a page, FluentCart steps aside automatically — there's no setting to flip:

* Publish a **FluentCart Product** template whose conditions match a product, and FluentCart stops rendering its built-in product layout on that page so your Elementor design shows instead.
* Publish an **Archive** template using the **FluentCart Product Archives** condition, and FluentCart's fallback archive template defers to it on the pages it matches.

Products and archives your templates don't match keep FluentCart's default layout, so you can roll a custom design out to part of your catalog without redesigning everything at once. Unpublish or delete the template and the default layout comes straight back.

## Pick the Widget Group You Need

Jump straight to the group you want to learn about:

* [FluentCart Widgets for Elementor](/guide/customization-and-themes/elementor-fluentcart-widgets) — the 16 store-wide widgets you can use on any page.
* [FluentCart Product Widgets for Elementor](/guide/customization-and-themes/elementor-product-widgets) — the 9 Theme Builder widgets for single-product templates.
