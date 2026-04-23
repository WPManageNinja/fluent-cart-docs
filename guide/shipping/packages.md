# Managing Packages

Packages in FluentCart let you define the physical boxes, envelopes, or soft packages you use to ship your products. By setting up your packaging ahead of time, FluentCart can accurately calculate shipping rates at checkout and pre-select the right package when you're fulfilling orders.

This guide walks you through adding, managing, and configuring your store's packages.

::: tip
You can also add a new package directly from the product editor. When configuring a physical product's shipping details — under the **Pricing** panel in the **Shipping** section — you'll find a **Package** dropdown. If no packages have been created yet, simply open that dropdown and select the option to add a new one without leaving the product page. 

The package you create will be saved to your store and available here in the Packages settings as well. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for more details.
:::

## Accessing Packages

To get started, navigate to **FluentCart Pro** > **Settings** > **Shipping** > **Packages** from your WordPress dashboard.

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
* **Height** — The height (or depth) of the package.
* **Weight (empty)** — The weight of the packaging itself when empty.

You can set the unit for dimensions (e.g., **in**, **cm**) and the unit for weight (e.g., **kg**, **lb**) using the dropdowns next to each field. Make sure these match the units configured in your store settings.

### Package Name

Give your package a clear, descriptive name (e.g., "Small Box," "Large Envelope," "Medium Poly Mailer"). This name is used internally to help you identify packages when assigning them to products or reviewing orders.

### Use as Default Package

Check **Use as default package** to make this package the store-wide default. The default package is used to calculate shipping rates at checkout and is pre-selected when assigning packages to products.

::: info
Only one package can be the store default at a time. Setting a new package as the default will automatically remove the default designation from the previously selected package.
:::

Once you have filled in all the details, click **Add package** to save it. Your new package will now appear in the Packages list.

## Managing Existing Packages

Each package in your list has a three-dot menu (**⋮**) on the right side. Click it to reveal the available actions:

![Screenshot of Package management options](/images/shipping/packages/packages-3.webp)

* **Edit** — Opens the package settings so you can update its name, type, dimensions, or weight.
* **Set as default** — Marks this package as the store default, which will be used for shipping rate calculations at checkout.
* **Delete** — Permanently removes the package from your store. Deleting a package cannot be undone.
