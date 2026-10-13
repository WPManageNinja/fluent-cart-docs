# On-Page Checkout Form

The On-Page Checkout Form turns any page into a complete "choose and pay" page. Instead of sending shoppers to a product page, then the cart, then checkout, you place the checkout form right on your landing page and let them pick what they want to buy from a short list of products you choose.

It is a mode of the existing **Checkout Page** block, not a separate block. A checkout that you leave on its default settings behaves exactly as before.

::: info
The On-Page Checkout Form requires **FluentCart Pro**. In the free plugin, the Products panel in the editor shows an **Upgrade to Pro** notice. Any products you already configured are kept and start working again as soon as Pro is active.
:::

## When to Use It

This format works best when the page itself is the offer. Typical examples include:

* A pricing page where visitors choose a plan and pay without leaving the page.
* A landing page for a bundle, a course, or a software license with a few variations.
* A campaign page that sells one product with optional add-ons shoppers can tick.

## Setting Up the Checkout Form

You configure everything in the block editor, on the page where you want the form to appear. Let's start by adding the block.

1. Open the page in the block editor and click the **+** button to open the block inserter.
2. Search for **Checkout Page** and click the block to add it to your page.

![Screenshot of the block inserter with Checkout Page typed into the search field](/images/customization-and-themes/on-page-checkout-form/on-page-checkout-insert-block.webp)

3. Select the block, then open the block settings sidebar and find the **Products** panel.

![Screenshot of the Checkout Page block selected in the editor with the Products panel open in the sidebar](/images/customization-and-themes/on-page-checkout-form/on-page-checkout-block-settings.webp)

::: info
If your theme keeps page content in a narrow column, the selectable list can look cramped. Place the **Checkout Page** block inside a **Group** block set to **Wide width**, or use a full-width page template, so the form and the list have room to breathe.
:::

### Choosing the Checkout Source

The **Checkout Source** setting decides where the checkout gets its items.

* **Default Cart:** The checkout shows whatever is in the shopper's main cart, exactly as it works on a standard checkout page.
* **Custom Product:** The checkout shows a selectable list of the products you choose, and the shopper's main cart is ignored.

![Screenshot of the Products panel with Checkout Source set to Default Cart](/images/customization-and-themes/on-page-checkout-form/checkout-source-default-cart.webp)

If you switch back to **Default Cart** later, the products you picked are not deleted. You can park a selection and switch to it again whenever you like.

Set **Checkout Source** to **Custom Product** to continue.

### Choosing the Products

With **Custom Product** active, add the products you want to offer.

1. Click **Select Product** (or **Change Products** if you already added some) in the panel.
2. In the **Select Products** window, search for a product or expand it to see its variations. Each variation is a separate option in the list, so a product with three colors gives you three choices.
3. Tick the variations you want to offer and click **Add Items**.

![Screenshot of the Select Products window listing the store's products with the Add Items button](/images/customization-and-themes/on-page-checkout-form/checkout-product-picker.webp)

Each product you added appears in the panel with its price. Use the bin icon next to a product to remove it. You can offer up to 20 options in one form.

![Screenshot of the Products panel with Custom Product selected and three Zipper Hoodie colors added](/images/customization-and-themes/on-page-checkout-form/checkout-block-products-panel.webp)

### Selection Mode

**Selection Mode** decides how many options a shopper can buy at once.

* **Select one:** The options appear as radio buttons. The shopper picks a single option, which suits plan or tier selection.
* **Select many:** The options appear as checkboxes. The shopper can tick several options, which suits add-ons and bundles.

When you choose **Select many**, an extra setting appears:

* **Maximum Selectable Items:** How many options a shopper can tick at the same time, from 1 to 20. Every product you added is always shown. This setting only limits how many can be chosen together.

![Screenshot of the Products panel with Select many chosen and Maximum Selectable Items set to 2](/images/customization-and-themes/on-page-checkout-form/checkout-selection-mode-many.webp)

### Selector Heading

* **Selector Heading:** *(Optional)* The title shown above the list of options, for example "Choose your hoodie". The field shows "Choose your plan" as a placeholder example.

Update the page when you are done. The form is ready to use.

## Using the Shortcode

The same form works with the `[fluent_cart_checkout]` shortcode, which is handy in page builders, classic editor content, or any place where you cannot add a block. Add the product options to the shortcode and it behaves exactly like the **Checkout Page** block set to **Custom Product**.

```text
[fluent_cart_checkout variant_ids="185,186,187" selection_mode="multiple" max_items="2" selector_label="Choose your hoodie"]
```

* **variant_ids:** A comma-separated list of the variation IDs you want to offer, for example `185,186,187`. Adding this attribute switches the checkout to **Custom Product** automatically. *(Required)*
* **selection_mode:** `single` for radio buttons or `multiple` for checkboxes. If you leave it out, the form uses `single`.
* **max_items:** The most options a shopper can tick at once, from 1 to 20. It only applies when `selection_mode` is `multiple`.
* **selector_label:** The heading shown above the list of options.

A shortcode without `variant_ids` is a normal checkout page that shows the shopper's main cart. You can find a variation ID in the product settings, the same one you use with the other [FluentCart shortcodes](/guide/customization-and-themes/fluentcart-shortcode).

## What Shoppers See

On the live page, the shopper sees the list of options with their prices, followed by the usual checkout fields and your order summary. The first option is selected by default, so the summary always shows a price.

![Screenshot of a landing page with the On-Page Checkout Form showing three hoodie colors, the checkout fields, and the order summary](/images/customization-and-themes/on-page-checkout-form/on-page-checkout-form-frontend.webp)

When the shopper picks a different option, the form updates on the same page without a reload:

* The order summary, subtotal, and total recalculate.
* Shipping and tax recalculate for the new selection.
* The **Have a Coupon?** box stays available below the subtotal.

![Screenshot of the On-Page Checkout Form after the shopper selects the Orange option, with the subtotal and total updated to $12.00](/images/customization-and-themes/on-page-checkout-form/on-page-checkout-form-selection.webp)

With **Select many**, the shopper ticks as many options as the **Maximum Selectable Items** limit allows, and the total adds them together.

![Screenshot of the On-Page Checkout Form in Select many mode with the Red and Teal options ticked and a combined total of $26.40](/images/customization-and-themes/on-page-checkout-form/on-page-checkout-form-select-many.webp)

The shopper then completes the purchase with any active payment method, the same way as on the regular checkout page. The form keeps its selection in a separate cart that belongs only to that page. Items the shopper already has in their main cart are not shown in the form and are not changed by it, and a visitor who just scrolls past the block never creates a cart.

Your page now sells directly from the page itself, with no product page, cart, or separate checkout in between.
