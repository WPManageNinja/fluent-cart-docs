# FluentCart Shortcodes

FluentCart provides a powerful and flexible shortcode that allows you to display your product catalog anywhere on your WordPress site. With complete control over the layout and functionality, you can seamlessly integrate your store's products into any page or post.

## The Product Catalog Shortcode

The `[fluent_cart_products]` shortcode is the primary way to display your products on any page. It allows you to create a custom shop experience by filtering products, setting pagination, and enabling advanced search features.

### Basic Usage

To display your default product grid, simply paste this into any page or post:
`[fluent_cart_products]`

### Advanced Usage
You can customize the grid by adding various parameters. Here is an example of a fully configured shortcode:

```
[fluent_cart_products 
    per_page=4 
    live_filter='false' 
    enable_filter='true' 
    paginator='numbers' 
    custom_filters='{"enabled":true,"live_filter":true,"taxonomies":"product-categories,product-brands","price_range":"price_range"}' 
    filters='{"enabled":true,"sort_by":"name-desc"}'
]
```

### Parameter Reference

| Parameter | Description | Default | Options |
| :--- | :--- | :--- | :--- |
| **per_page** | The number of products to show on a single page. | 12 | Any integer (e.g., 4, 8, 20) |
| **enable_filter** | Shows or hides the product filter sidebar. | true | true, false |
| **live_filter** | If enabled, products update instantly as filters are selected without reloading. | true | true, false |
| **paginator** | Sets the style of the product list navigation. | numbers | numbers, load_more, none |

#### The `custom_filters` Object
This parameter (formatted as JSON) controls the specific filter types shown in your sidebar:

* **enabled:** Set to `true` to activate custom filtering.
* **live_filter:** Enables instant results for these specific filters.
* **taxonomies:** Determines which categories or brands are shown. Use `product-categories` and `product-brands`.
* **price_range:** Enables the price slider filter.

#### The `filters` Object
This parameter controls the default ordering of the products:

* **sort_by:** Sets the initial sort order.
    * `name-asc` / `name-desc`: Sort by product title.
    * `price-asc` / `price-desc`: Sort by product price.
    * `date-desc`: Show newest products first.

### How to Implement

1.  **Copy the code:** Select the shortcode configuration that fits your needs.
2.  **Paste into WordPress:** Open any Page or Post in the Block Editor.
3.  **Use a Shortcode Block:** Add a **Shortcode** block and paste the code.
4.  **Publish:** Update your page to see your custom product grid in action.

> **Tip:** Use the `per_page` attribute to create small "Featured Products" sections on your homepage by setting it to a low number like 3 or 4.