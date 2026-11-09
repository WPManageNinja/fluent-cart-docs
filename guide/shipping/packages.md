# Managing Packages

Packages in FluentCart let you define the physical boxes, envelopes, or soft packages you use to ship your products. By setting up your packaging ahead of time, FluentCart can accurately calculate shipping rates at checkout and pre-select the right package when you're fulfilling orders.

This guide walks you through adding, managing, and configuring your store's packages.

::: tip
You can also add a new package directly from the product editor. When configuring a physical product's shipping details — under the **Pricing** panel in the **Shipping** section — you'll find a **Package** dropdown. Open it and choose **+ Add new package** to create one without leaving the product page. The option is always available, not only when no packages exist.

The package you create will be saved to your store and available here in the Packages settings as well. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for more details.
:::

## Accessing Packages

To get started, navigate to **FluentCart** > **Settings** > **Shipping** > **Packages** from your WordPress dashboard.

You will see a list of all the packages you have already created. From here, you can add new packages or manage existing ones.

![Screenshot of Packages list](/images/shipping/packages/packages-1.webp)

## Adding a New Package

To add a new package, click the **Add Package** button in the top-right corner of the Packages screen. This will open the **Add package** modal where you can configure all the details for your new package.

![Screenshot of Add Package modal](/images/shipping/packages/packages-2.webp)

### Package Type

Choose the physical type of packaging you use:

* **Box** — A rigid, box-shaped container. Ideal for most standard shipments.
* **Envelope** — A flat mailer or padded envelope. Best suited for thin or lightweight items.
* **Soft package** — A flexible bag or poly mailer. Useful for clothing, soft goods, or compressible items.

### Dimensions & Weight

Enter the physical measurements of your empty package:

* **Length** — The longest dimension of the package.
* **Width** — The width of the package.
* **Height** — The height (or depth) of the package. Height is disabled for **Envelope** packages.
* **Weight (empty)** — The weight of the packaging itself when empty. It is added once for each box an order needs, both in weight-based shipping rates and in carrier quotes. A product with no weight of its own is still quoted in its box, at this empty weight.

Pick the dimension unit (**cm**, **mm**, **in** or **m**) and the weight unit (**kg**, **g**, **lbs** or **oz**) from the dropdowns. New packages start in cm and kg. You don't have to match your store's units: FluentCart converts the package weight to your store weight unit when it calculates rates.

For shipping methods priced **Per Weight**, the empty package weight is added to the products' weight. Products with no package assigned use your default package.

### Package Name

Give your package a clear, descriptive name (e.g., "Small Box," "Large Envelope," "Medium Poly Mailer"). This name is used internally to help you identify packages when assigning them to products or reviewing orders.

### Use as Default Package

Check **Use as default package** to make this package the store-wide default. The default package is used for any product that has no package assigned, both for Per Weight rate calculations and as the pre-selected package in the product editor.

::: info
Only one package can be the store default at a time. Setting a new package as the default will automatically remove the default designation from the previously selected package.
:::

Once you have filled in all the details, click **Add package** to save it. The button stays disabled until you enter a name, length and width, plus height for boxes and soft packages. Your new package will now appear in the Packages list.

## Managing Existing Packages

Each package in your list has a three-dot menu (**⋮**) on the right side. Click it to reveal the available actions:

![Screenshot of Package management options](/images/shipping/packages/packages-3.webp)

* **Edit** — Opens the package settings so you can update its name, type, dimensions, or weight. The modal's button reads **Update package**.
* **Set as default** — Marks this package as the store default, which is used for any product that has no package assigned. This option is hidden on the package that is already the default, which shows a **Store default** label.
* **Delete** — Permanently removes the package from your store. FluentCart asks you to confirm. Deleting a package cannot be undone.
