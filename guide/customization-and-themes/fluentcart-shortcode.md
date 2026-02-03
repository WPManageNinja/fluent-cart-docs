# FluentCart Shortcodes

Shortcodes are like "magic codes" that allow you to display your store's products, buttons, and pages anywhere on your WordPress site. Whether you are using a blog post, a custom landing page, or a sidebar, FluentCart shortcodes give you the flexibility to build your shop exactly how you want it.

### 1. The Product Catalog Shortcode (`[fluent_cart_products]`)

The `[fluent_cart_products]` shortcode is the easiest way to show a grid of products. It's perfect for your main shop page, a "Featured Products" section on your homepage, or a specific category gallery.

#### Basic Usage

To show your standard product list with default settings, simply use:

```text
[fluent_cart_products]
```

#### Advanced Usage (Example)

You can customize the grid by adding specific instructions inside the brackets. Here is a version that shows only 4 products with a sidebar filter:

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
| **per_page** | How many products to show on one page. | 12 | Any number (e.g., 4, 8, 20) |
| **enable_filter** | Show or hide the filter sidebar on the left/right. | true | true, false |
| **live_filter** | If "true," products update instantly as you click filters. | true | true, false |
| **paginator** | The style of the page navigation at the bottom. | numbers | numbers, load_more, none |
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

---

### How to Implement

1. **Copy the code:** Select the shortcode configuration that fits your needs.
2. **Paste into WordPress:** Open any Page or Post in the Block Editor.
3. **Use a Shortcode Block:** Add a **Shortcode** block and paste the code.
4. **Publish:** Update your page to see your custom product grid in action.

> **Tip:** Use the `per_page` attribute to create small "Featured Products" sections on your homepage by setting it to a low number like 3 or 4.
