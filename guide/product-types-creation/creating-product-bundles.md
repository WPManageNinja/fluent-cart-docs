---
title: "Creating Product Bundles"
description: "A comprehensive guide on how to add and configure product bundles in FluentCart to sell multiple items as a single package."
---

# Creating Product Bundles

The **Bundles** feature in **FluentCart** allows you to group multiple products into a single bundle and sell them together as one offer. You can create bundles using digital products or physical products, making it easy to build starter packs, special deals, or upgrade offers.

Each product in a bundle still works independently, licenses, and fulfillment rules. This means you get the benefits of bundling without losing control over individual products.

In this guide, you’ll learn how to create, configure, and manage bundle products in FluentCart step by step.

## Steps to Create a New Product Bundle

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2.  On the Products screen, click the **"Add Product"** button at the top right.

    ![Screenshot of Add Product Button](/guide/public/images/product-types-creation/product-bundles/add-product-1.webp)

3.  This action will open a new **Add New Product** modal. 
    * Enter the **Bundle Title**. 
    * Select the product type, either **Physical Product** or **Digital Product**. 
    * Check the box labeled **Add as a Bundle** to combine multiple items into one package. 
4.  Click the **"Add Product"** button, and you will be redirected to the **"Edit Product"** page to configure all details.

    ![Screenshot of Add as a bundle](/guide/public/images/product-types-creation/product-bundles/add-as-a-bundle-2.webp)

### 1. Basic Product Information

* **Title:** Enter the main name of your bundle. This name appears on your shop page, in the cart, and at checkout.
* **Short description:** Write a brief summary of what the bundle includes. This provides customers with a quick overview near the product image or price.
* **Long Description:** This is the area for detailed information about the bundle's contents. FluentCart offers two ways to build this content:
    * **Using the Visual Builder (Recommended):** The Builder option uses the WordPress block editor (Gutenberg) to design rich product pages. Click **Show Content Editor** to add dynamic blocks such as images, videos, columns, and tables.
    * **Using the Classic Editor:** Provides a standard writing space with **Visual Mode** for standard typing and **Code Mode (HTML)** for advanced users.

### 2. Map Bundle Items

This section is unique to bundles and allows you to link the individual products that make up the package.

1.  Scroll down to the **Map bundle items** section.
2.  Under **Bundle Items**, use the dropdown to select the existing products you wish to include in this bundle.

> [!NOTE]
> Each bundled product retains its own identity under the hood, ensuring that reporting, downloads, and licenses continue to work correctly for each item in the bundle.

### 3. Media

* **Featured Image:** Set a prominent image that showcases all items included in the bundle.
* **Add Media:** Upload additional images or videos that show the bundled products from different angles or in use.

### 4. Product Taxonomies

This section helps you organize and tag your bundle for better storefront filtering.

* **[Product Categories:](/guide/product-types-creation/creating-managing-product-categories/index)** Assign the bundle to relevant categories (e.g., "Gift Sets"). You can select existing categories or click **+ Add Category** to create one instantly.
* **[Product Brand:](/guide/product-types-creation/creating-managing-product-brand):** Associate the bundle with a specific brand using the dropdown or the **+ Add Brand** button.

   ![Screenshot of Product Edit Screen (Physical Product Example)](/guide/public/images/product-types-creation/product-bundles/map-bundle-items-3.webp)

### 5. Pricing & Variations

A bundle is only as compelling as the deal it represents — and this section is where you make that deal concrete. Whether you're selling a single all-in-one package at one fixed price, or offering multiple tiers of bundles (a Starter Pack, a Professional Pack, and an Ultimate Pack, for instance), FluentCart gives you the same powerful pricing tools here as you'd have on any individual product.

Open the **Pricing** panel and look at the dropdown in the top right corner:

- **Simple** — One bundle, one price. The right choice when your bundle is a single, fixed package with no variations.
- **Simple Variations** — Multiple versions of the bundle, each with its own price, image, and stock level.

---

#### Simple Pricing (One Bundle, One Price)

Choose **Simple** when your bundle is a single, non-varying package — everything in the box for one price.

**Price** *(Required)*
The amount customers pay for the complete bundle. This is what shows on your store page, in the cart, and at checkout.

**Additional display prices** *(Collapsible section)*
Click the chevron to expand:

- **Compare at price** *(Optional)* — Enter the combined individual retail price of all bundled items here. FluentCart will display it with a strikethrough next to your bundle price, immediately showing customers how much they're saving by buying the bundle. This single field can be one of your most powerful conversion tools on a bundle page.

- **Calculate profit/cost** *(Toggle — Optional)* — Toggle on to track the total cost of goods in this bundle against your selling price. Three fields appear:
  - **Cost per item** — The combined cost of all items in the bundle
  - **Profit** — Auto-calculated (Price minus Cost)
  - **Margin** — Your profit as a percentage, also auto-calculated

> **💡 Pro Tip:** Use **Compare at price** to tell the story of the bundle's value instantly. If your bundle includes three products worth `$45`, `$30`, and `$25` individually, set the Compare at price to `$100` and your bundle price to `$69` — customers immediately understand the deal without reading a word.

**SKU** *(Collapsible section)*
Assign a unique tracking code to this bundle (e.g., `BUNDLE-STARTER-01`). Click **Generate SKU** to auto-generate one. Accepts up to 30 characters.

**Direct Checkout** *(Link)*
Generates a unique URL that takes customers straight to checkout with this bundle pre-loaded. Great for promotional landing pages, email campaigns, or limited-time offers where you want to reduce every step between interest and purchase.

![Screenshot of Simple Price for Bundle](/guide/public/images/product-types-creation/product-bundles/simple-price.gif)

---

#### Simple Variations (Multiple Bundle Tiers)

When you offer different levels of bundling — for example, a Starter Pack (2 items), a Professional Pack (5 items), and an Ultimate Pack (everything) — **Simple Variations** lets you price and manage each tier independently.

Select **Simple Variations** from the pricing dropdown to activate this mode.

**The Variations Table**

Each row in the table represents one bundle tier:

- **⠿ (Drag handle)** — Drag to reorder. Put your best-value or most popular bundle tier at the top.
- **Image** — A thumbnail that represents this specific bundle tier. Click to upload or swap — use a photo that shows exactly what's in the box.
- **Title** — The name of this tier (e.g., `Starter Pack`, `Professional Pack`, `Ultimate Bundle`). Editable directly in the table.
- **Price** — The selling price for this bundle tier. Editable inline.
- **Compare at price** — The combined individual retail price, shown with a strikethrough. Editable inline.
- **Action** — A **pencil icon** to open the full tier editor, and a **three-dot icon** for quick options.

Click **+ Add more** at the bottom to add a new bundle tier. Fill in the title and price inline, then use the pencil icon for the rest.

The **three-dot icon** gives you:
- **Duplicate** — Copy this bundle tier as a starting point for a new one
- **Direct Checkout** — Generate a buy-now link that bypasses the product page entirely, sending customers straight to checkout for this specific tier
- **Delete** — Remove this bundle tier permanently
- **Skip inventory** — Exclude this tier from stock tracking if you don't need to limit how many bundles you sell

> **📝 Note:** Quick edits to **Title**, **Price**, and **Compare at price** can be made directly in the table rows. To set up images, inventory tracking, and SKUs per tier — click the pencil icon to open the full editor.

**Editing a Bundle Tier (Pencil Icon)**

Click the **pencil icon** on any tier to open the variation editor — a full-screen panel with a variation list on the left and the configuration area on the right.

Here you can set:

**Variation image**
Upload an image specific to this bundle tier — showing the actual items included helps customers decide which tier is right for them.

**Variation Title**
The name of this specific tier (e.g., `Starter Pack`, `Agency Bundle`).

**Price** *(Required)*
The selling price for this specific bundle tier.

**Additional display prices**
- **Compare at price** *(Optional)* — The combined retail value of everything in this tier, shown with a strikethrough.
- **Calculate profit/cost** *(Toggle — Optional)* — Track **Cost per item**, **Profit**, and **Margin** for this specific bundle tier.

**Inventory**
Toggle **Inventory** on if you want to limit how many of this bundle tier can be sold:
- **Total Stock** — Total units available for this tier. Click the edit icon to adjust.
- **Available** — Units currently available (read-only, auto-calculated)
- **On Hold** — Units reserved in pending orders (read-only)
- **Delivered** — Units fulfilled (read-only)

**SKU**
Expand the collapsible **SKU** section to assign a unique tracking code to this bundle tier (e.g., `BUNDLE-PRO-01`). Click **Generate SKU** to auto-generate one.

When you're done, click **Update** to save all your changes for this tier.

![Screenshot of Simple Variation for Bundle](/guide/public/images/product-types-creation/product-bundles/simple-variation.gif)

::: info
For the complete field-by-field reference on every pricing option — including subscription setup, installment plans, trial days, setup fees, and the Add Package walkthrough — see the [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) guide.
:::




### 6. Inventory Management

To track stock, ensure **Stock Management** is enabled in your settings.

* **Inventory Table:** Displays **Total Stock**, **Available** units, and units **On hold** or **Delivered**.
* **Adjusting Stock:** Click the adjustment icon in the **Total Stock** field to add or remove inventory.

### 7. Shipping and Tax Classes

* **Shipping Class:** Assign a class to apply location-based shipping costs at checkout. This works with your defined Shipping Zones and Methods.
* **Tax Class:** Select a pre-configured tax class to automatically apply the correct tax rate to the bundle during checkout.



### 8. Publishing Settings

* **Status:** Set the product to **'Publish'** to make it live or **'Draft'** to keep it hidden while editing.
* **URL Slug:** This is the unique web address for the bundle. FluentCart creates this automatically, but you can edit it manually.
* **Limit purchases to 1 item per order:** Check this box if the bundle is an exclusive item or limited offer.

Once all details are configured, click the **"Update"** or **"Save"** button at the top right to make your bundle live.

---
