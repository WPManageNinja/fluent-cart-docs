# FluentCart Shortcodes

Shortcodes are like "magic codes" that allow you to display your store's products, buttons, and pages anywhere on your WordPress site. Whether you are using a blog post, a custom landing page, or a sidebar, FluentCart shortcodes give you the flexibility to build your shop exactly how you want it.

### 1. The Product Catalog Shortcode (`[fluent_cart_products]`)

The `[fluent_cart_products]` shortcode is the easiest way to show a grid of products. It's perfect for your main shop page, a "Featured Products" section on your homepage, or a specific category gallery.

#### Basic Usage

To show your standard product list with default settings, simply use:

```text
[fluent_cart_products]
```

#### Filtering by Product IDs

You can show specific products by passing one or more product IDs. This is useful when you want to highlight a handpicked selection of items on a landing page or a promotional section.

```text
// Show a single product
[fluent_cart_products ids="433"]

// Show multiple products
[fluent_cart_products ids="344,346,347"]
```

To hide certain products from the list, use the `exclude_ids` parameter:

```text
// Exclude a single product
[fluent_cart_products exclude_ids="344"]

// Exclude multiple products
[fluent_cart_products exclude_ids="3595,3493"]
```

> **Note:** If you pass an ID that does not exist (e.g., `ids="999999"`), no products will be displayed.

#### Filtering by Category

You can narrow the product list down to one or more categories. Categories can be referenced by their **slug** or their **term ID** — whichever is more convenient.

```text
// Filter by a single category slug
[fluent_cart_products category="cloths"]

// Filter by multiple category slugs
[fluent_cart_products category="cloths,shoes"]

// Filter by a single category term ID
[fluent_cart_products category_id="9"]

// Filter by multiple category term IDs
[fluent_cart_products category_id="9,12"]

// Combine a slug and an ID together
[fluent_cart_products category="hoodies" category_id="8"]
```

Category filters also work seamlessly with pagination. For example, the following shortcode shows two products per page with numbered pagination, and the category filter persists when your visitors navigate between pages:

```text
[fluent_cart_products category="hoodies" per_page="2" paginator="numbers"]
```

> **Note:** If you pass a category slug that does not exist (e.g., `category="nonexistent-category-xyz"`), the filter is ignored and all products are shown.

#### Filtering by Product Type & Sale Status

Use the `product_type` parameter to display only a specific type of product, or use `on_sale` to showcase discounted items.

```text
// Simple products only
[fluent_cart_products product_type="simple"]

// Variation products only
[fluent_cart_products product_type="simple_variations"]

// Physical products only
[fluent_cart_products product_type="physical"]

// Digital products only
[fluent_cart_products product_type="digital"]

// Subscription products only
[fluent_cart_products product_type="subscription"]

// Only products currently on sale
[fluent_cart_products on_sale="yes"]
```

> **Tip:** Empty parameter values (e.g., `ids=""`, `category=""`, `product_type=""`) are safely ignored, so you don't have to worry about accidental blank values breaking your page.

#### Sorting Products

Control the order in which products appear using the `sort_by` parameter for common presets, or the `orderby` and `order` parameters for more granular control.

```text
// Sort by price, ascending (using orderby + order)
[fluent_cart_products orderby="price" order="ASC"]

// Price low to high
[fluent_cart_products sort_by="price-low"]

// Price high to low
[fluent_cart_products sort_by="price-high"]

// Alphabetical A–Z
[fluent_cart_products sort_by="name-asc"]

// Newest first
[fluent_cart_products sort_by="date-newest"]

// Oldest first
[fluent_cart_products sort_by="date-oldest"]
```

#### Layout & Display

Adjust the number of columns and the view mode to match the look and feel of your page.

```text
// Show products in a 3-column grid
[fluent_cart_products columns="3"]

// Limit to 6 products in a 3-column grid
[fluent_cart_products limit="6" columns="3"]

// 2-column grid view
[fluent_cart_products columns="2" view_mode="grid"]

// List view with 4 products per page and numbered pagination
[fluent_cart_products per_page="4" view_mode="list" paginator="numbers"]
```

#### Combining Parameters

The real power of the shortcode comes from mixing and matching parameters. Here are a few practical combinations:

```text
// Paginate through specific products, one per page
[fluent_cart_products ids="433,434" per_page="1" paginator="numbers"]

// Specific products in a custom 3-column layout
[fluent_cart_products ids="433,434,435" columns="3" per_page="3"]

// Category products, exclude one, newest first
[fluent_cart_products category="hoodies" exclude_ids="433" sort_by="date-newest"]

// Digital products in 3 columns, sorted by price, 6 per page
[fluent_cart_products product_type="digital" columns="3" sort_by="price-low" per_page="6"]
```

#### Advanced Usage (Filters & Sidebar)

You can also enable a sidebar filter and configure it with JSON-based settings. Here is a version that shows 4 products with a sidebar filter:

```text
[fluent_cart_products 
    per_page=4 
    live_filter='false' 
    enable_filter='true' 
    paginator='numbers' 
    custom_filters='{"enabled":true,"live_filter":true,"taxonomies":"product-categories,product-brands","price_range":"price_range"}' 
    filters='{"enabled":true,"sort_by":"name-desc"}'
]
```

#### Parameter Reference

| Parameter | Description | Default | Options |
| :--- | :--- | :--- | :--- |
| **ids** | Show only the products matching these IDs. Accepts a single ID or a comma-separated list. | — | Any valid product ID(s) (e.g., `433` or `344,346,347`) |
| **exclude_ids** | Hide specific products from the list. Accepts a single ID or a comma-separated list. | — | Any valid product ID(s) (e.g., `344` or `3595,3493`) |
| **category** | Filter products by one or more category slugs. | — | Comma-separated slugs (e.g., `cloths` or `cloths,shoes`) |
| **category_id** | Filter products by one or more category term IDs. | — | Comma-separated IDs (e.g., `9` or `9,12`) |
| **product_type** | Show only products of a specific type. | — | `simple`, `simple_variations`, `physical`, `digital`, `subscription` |
| **on_sale** | Show only products that are currently discounted. | — | `yes` |
| **sort_by** | A quick preset for sorting products. | — | `price-low`, `price-high`, `name-asc`, `date-newest`, `date-oldest` |
| **orderby** | The field to sort products by (use with `order`). | — | `price`, `name`, `date` |
| **order** | Sort direction (use with `orderby`). | — | `ASC`, `DESC` |
| **columns** | Number of columns in the product grid. | — | Any number (e.g., `2`, `3`, `4`) |
| **limit** | Maximum number of products to display. | — | Any number (e.g., `6`, `10`) |
| **view_mode** | Choose between a grid layout or a list layout. | `grid` | `grid`, `list` |
| **per_page** | How many products to show on one page. | 12 | Any number (e.g., 4, 8, 20) |
| **paginator** | The style of the page navigation at the bottom. | `numbers` | `numbers`, `load_more`, `scroll`, `none` |
| **enable_filter** | Show or hide the filter sidebar on the left/right. | `true` | `true`, `false` |
| **live_filter** | If "true," products update instantly as you click filters. | `true` | `true`, `false` |
| **custom_filters** | A list of settings to control category and price filters. | — | See JSON guide below |
| **filters** | Settings for how products are sorted (Name, Price, etc.). | — | See JSON guide below |

#### A Quick Look at Filter Settings (JSON)

**`custom_filters` object:**

* **enabled:** Set to `true` to show your custom category/brand filters.
* **live_filter:** Set to `true` for instant, "no-reload" updates.
* **taxonomies:** Tell the plugin what to show (e.g., `"product-categories,product-brands"`).
* **price_range:** Include a price slider by adding `"price_range"`.

**`filters` object:**

* **sort_by:** Choose how products appear first. Options include: `name-asc`, `name-desc`, `price-asc`, `price-desc`, or `date-desc`.

---

### 2. Checkout Button Shortcode (`[fluent_cart_checkout_button]`)

This shortcode creates a button that sends customers straight to the checkout page or opens a quick "Buy Now" popup. It is perfect for landing pages and promotions where you want to make buying as fast as possible.

#### Basic Usage

```text
[fluent_cart_checkout_button variation_id="113" instant_checkout="yes"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **button_text** | Changes what the button says. Example: `button_text="Get it Now"`. (If left empty, it usually says "Checkout".) |
| **variation_id** | **(Very Important)** The ID of the specific item or size/color you want to sell. You must use the specific variation ID found in your product settings. |
| **target** | Decides where the link opens. Use `_self` for the same tab or `_blank` to open the checkout in a new window. |
| **instant_checkout** | If set to `yes`, the checkout will open in a popup modal. If set to `no`, it works like a normal link to the checkout page. |

#### Example Variations

* **Standard Link to Checkout:** `[fluent_cart_checkout_button button_text="Go to Checkout" target="_self"]`
* **One-Click "Instant" Purchase:** `[fluent_cart_checkout_button variation_id="113" instant_checkout="yes" button_text="Buy Now"]`

---

### 3. Add to Cart Button Shortcode (`[fluent_cart_add_to_cart_button]`)

This shortcode puts a simple "Add to Cart" button anywhere you want. Use this if you want customers to stay on the page and keep shopping after they click.

#### Basic Usage

```text
[fluent_cart_add_to_cart_button button_text="Add to Cart" variation_id="113"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **button_text** | The text displayed on the button (e.g., "Add to Bag", "Grab One"). |
| **variation_id** | The ID of the product or specific option you want added to the cart. |

---

### 4. Mini Cart Shortcode (`[fluent_cart_mini_cart]`)

The Mini Cart shortcode allows you to display a small, convenient cart summary. It is perfect for headers or sidebars, letting customers see how many items they have and the total price at a glance.

#### Basic Usage

```text
[fluent_cart_mini_cart cart_icon="bag" show_total_price="true"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **cart_icon** | Choose the style of your icon. Options: `cart`, `bag`, `bag-alt`. You can also use a custom SVG URL: `cart_icon="https://example.com/icon.svg"`. |
| **show_total_price** | Set to `true` to show the current total amount next to the icon. |
| **show_item_count** | Decides when to show the number of items: `always` (shows even if 0), `has_items` (only when cart has items), `never` (hides count). |
| **icon_color** / **price_color** / **product_count_color** | Use hex codes to match your site's branding (e.g., `icon_color="#cf2e2e"`). |
| **button_class** | Add a custom CSS class if you want to apply your own specific styling to the cart button. |

---

### 5. Product Categories Shortcode (`[fluent_cart_product_categories]`)

This shortcode helps your customers browse your store by showing a list or a dropdown of your product categories.

#### Basic Usage

```text
[fluent_cart_product_categories display_style="list" show_hierarchy="true"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **display_style** | Choose how the categories are presented: `list` (standard bulleted list) or `dropdown` (space-saving dropdown menu). |
| **show_hierarchy** | Set to `true` to show "parent" and "child" categories (indented). |
| **show_empty** | Set to `true` if you want to show categories even if they don't have any products yet. |
| **show_product_count** | Set to `true` to show the number of products next to each category name. |


### 6. Store Logo Shortcode (`[fluent_cart_store_logo]`)

Use this shortcode to display your store's branding logo anywhere on your site. It allows you to set a custom link and control the size of the image easily.

#### Basic Usage

```text
[fluent_cart_store_logo is_link="true" logo_url="https://yoursite.com/logo.png" max_width="200"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **logo_url** | (Required) The direct URL link to your logo image file. |
| **is_link** | Set to `true` to make the logo clickable (usually linking to your homepage). Set to `false` for a static image. |
| **link_target** | Choose `_self` to open in the same tab, or `_blank` to open the link in a new tab. |
| **max_width** | Sets the maximum width of the logo in pixels (e.g., `"300"`). |
| **max_height** | Sets the maximum height of the logo in pixels (e.g., `"200"`). |

---

### 7. Customer Dashboard Button (`[fluent_cart_customer_dashboard_button]`)

This shortcode adds a button or link that allows logged-in customers to access their "My Profile" or "My Orders" area. It is perfect for your site's header or footer menu.

#### Basic Usage

```text
[fluent_cart_customer_dashboard_button button_text="My Profile" display_type="link"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **button_text** | The text displayed on the link or button (e.g., "My Account", "Profile"). |
| **display_type** | Choose how it looks: `link` (simple text link) or `button` (styled button). |
| **show_icon** | Set to `true` to display a small user icon next to the text, or `false` to hide it. |
| **link_target** | Choose `_self` (same tab) or `_blank` (new tab). |

---

### 8. Product Title Shortcode (`[fluent_cart_product_title]`)

This shortcode allows you to display the name of a specific product anywhere on your page. This is extremely useful when building custom landing pages where you want to place the product name separately from the image or description.

#### Basic Usage

```text
[fluent_cart_product_title product_id="123" is_link="true"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **product_id** | (Required) The ID of the specific product you want to display the title for. |
| **is_link** | Set to `true` to make the title clickable (links to the product page). |
| **link_target** | Choose `_self` (same tab) or `_blank` (new tab). |
| **is_default** | Set to `true` to use default styling, or `false` to inherit the surrounding text style. |

---

### 9. Product Image Shortcode (`[fluent_cart_product_image]`)

Similar to the Product Title shortcode, this lets you display the featured image of a specific product. You can use this to create custom layouts by placing the image in one column and the details in another.

#### Basic Usage

```text
[fluent_cart_product_image product_id="123"]
```

#### Supported Attributes

| Attribute | Description |
| :--- | :--- |
| **product_id** | (Required) The ID of the specific product you want to display the image for. |
| **is_default** | Set to `false` to allow for custom sizing or styling via CSS, or `true` for standard output. |

---

### How to Implement

1. **Copy the code:** Select the shortcode configuration that fits your needs.
2. **Paste into WordPress:** Open any Page or Post in the Block Editor.
3. **Use a Shortcode Block:** Add a **Shortcode** block and paste the code.
4. **Publish:** Update your page to see your custom product grid in action.

> **Tip:** Use the `per_page` attribute to create small "Featured Products" sections on your homepage by setting it to a low number like 3 or 4.
