# Product Card Layouts, Swatches, and Attribute Filters

Shoppers should be able to compare, filter, and choose options without opening every product. FluentCart's product cards now offer four ready-made layouts, swatches that show a product's options right on the card, and attribute filters that narrow the shop by options such as Color and Size.

These features work in the Gutenberg blocks, the Bricks elements, and the Elementor widgets. The names of the controls differ slightly between builders, and each builder's own page covers its panels in detail. This page explains what the features do.

## Card Layouts

A card layout builds the whole product card for you: the image, badges, title, rating, price, swatches, and buttons. You pick one layout and the card follows it.

* **Classic:** A full-width button under the product details. Works with any theme.

![Screenshot of two product cards in the Classic layout with swatches and a full-width Add To Cart button](/images/customization-and-themes/card-layouts/card-layout-classic.webp)

* **Compact:** Price and button share one row. Good for four or more columns.

![Screenshot of two product cards in the Compact layout with the price and Add To Cart button on one row](/images/customization-and-themes/card-layouts/card-layout-compact.webp)

* **Floating:** The details float over a tall image. Best for photo-led shops.

![Screenshot of two product cards in the Floating layout with the details card overlapping the image](/images/customization-and-themes/card-layouts/card-layout-floating.webp)

* **Framed:** The details sit in an inset tile. Best for products with many options.

![Screenshot of two product cards in the Framed layout with the details inside an inset tile and a Quick View button beside Add To Cart](/images/customization-and-themes/card-layouts/card-layout-framed.webp)

You can use layouts in four places:

* **Products:** The shop grid.
* **Related Products:** The row of related items on a product page.
* **Product Carousel:** Products in a sliding row.
* **Product Card:** A single product you pick yourself.

::: info
**Floating** is a grid-only layout. When it is selected, the Products block and element hide the grid and list switch, because the layout only works as a grid.
:::

Each layout comes with its own swatch and Quick View arrangement, so the card looks right the moment you select it. Classic keeps the full set of card settings of the block, element, or widget you are using. In the page builders, a layout takes over the card, including its badges, swatches, and Quick View.

### Shop Page and Category Pages on New Stores

On a store set up from this release on, the **Shop** page is created with a Products block that already uses the **Classic** layout card, with swatches, rating, and Quick View, along with the Grid/List and Sort controls and the filters. On a block theme, the product category template gets the same card, plus the Sort control and the brand and price filters. The category filter is left out there, since the page is already one category. Existing stores keep their current Shop page and category template, so nothing changes until you edit them.

### Masonry Grid

**Masonry grid** is a switch, not a layout. It staggers the cards so each image keeps its own height, which suits photos in mixed shapes. It works with every layout in the **Products** and **Related Products** blocks, elements, and widgets. A carousel is a single row, so it has no Masonry option.

In the Bricks element and the Elementor widget, the switch is labeled **Masonry grid**.

## Quick View on the Card

**Quick View** opens a product's buy section in a pop-up, so customers can pick options and add to cart without leaving the grid. You choose where its button sits:

* **On the image:** The button overlays the product image. In the Bricks layout settings you can also pick which corner of the image it uses, and bottom middle is the default.
* **After the button:** It sits beside **Add To Cart** at the bottom of the card.

Each layout starts with its own placement. In the shortcodes, the `quick_view` attribute sets it.

## Swatches on the Card

Swatches show a product's options on the card, and the shopper can pick one there instead of opening the product first. They cover two kinds of products:

* **Attribute products:** Products with attributes such as Color and Size. The card shows one row per attribute.
* **List products:** Products with a plain list of variations, such as pack sizes. The card shows one row of their names.

The swatch settings let you control what the card shows:

* **Which Attributes to Show:** Pick the attributes to display, in the order you want. Leave it empty to show every attribute.
* **Also show attributes not listed here:** Add any other attribute a product has after the ones you picked.
* **Never Show These Attributes:** Keep chosen attributes off the card even when the option above is on.
* **Show Up To:** How many options show in a row before the rest collapse into a count such as "+2" or "+3". **Show All** displays every option instead. The Bricks layout settings let you pick any number from 1 to 12.
* **Show Label:** Print the attribute name, for example Color, above the row.
* **Show the Selected Choice:** Print the option the shopper picked, for example COLOR · BLACK, after the row label or below the options.
* **Sold-out Options:** Leave sold-out options as they are (**No Change**), strike them through (**Cross Out**), or remove them (**Hide**). This applies to both attribute and list products.

## Attribute Filters

Attribute filters add Color, Size, and your other attributes to the shop's filter panel, so shoppers can narrow the list by the options they care about.

1. Open the Products block, element, or widget and turn on its filter.
2. Turn on **Attribute Filters**. The switch only appears when your store has at least one attribute.
3. Under **Attributes**, choose which attributes to offer. Each one is listed with how many values it has.
4. Turn on **Show counts** to display how many products match each value, and **Show empty** to display values that no product uses.

You can offer up to 10 attributes in one Products block, element, or widget, and the storefront shows the first ones you pick.

![Screenshot of the shop's Filters panel showing product categories and a Size attribute filter with a value count]({B}attribute-filters.webp)

## Where to Set This Up

* [Using Gutenberg Blocks](/guide/customization-and-themes/using-gutenberg-blocks)
* [FluentCart Bricks Blocks](/guide/customization-and-themes/fluentcart-bricks-blocks)
* [FluentCart Widgets for Elementor](/guide/customization-and-themes/elementor-fluentcart-widgets)

