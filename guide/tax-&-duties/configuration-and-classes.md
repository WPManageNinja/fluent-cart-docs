# Configuring Tax Settings & Classes

FluentCart’s tax management system is designed to be both powerful and easy to use, helping you apply accurate tax calculations at checkout and stay compliant with regional laws. This guide covers the main tax settings, options for EU VAT, and how to use **Tax Classes** to manage different tax rates for your products.

## Accessing Tax & Duties Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2.  Click on the **Tax & Duties** tab from the left-hand menu.
3.  Select the **Configuration & Classes** sub-menu.

## Tax Configuration

This section contains the fundamental rules that determine how taxes are calculated across your entire store. Getting these settings right is the first step to ensuring your tax calculations are accurate.

* **Enable Tax:** This is the master switch for your store's tax system. If your business is not required to collect taxes, you can leave this disabled. When enabled, FluentCart will begin applying your tax rules at checkout.
* **Prices entered with tax:** This crucial setting tells FluentCart whether the prices you’ve set for your products already include tax.
    * **Included:** Choose this if your product prices are **tax-inclusive (gross pricing)**. This is common in regions like the EU, where prices shown to customers must be the final amount.
    * **Excluded:** Choose this if your product prices are **tax-exclusive (net pricing)**. FluentCart will calculate and add the tax on top of the product price at checkout. This is common in regions like the US.
* **Calculate Tax Based On:** Tax rates often depend on a customer's location. This setting determines which address FluentCart uses for its calculations.
    * **Options:** You can choose **Customer Shipping Address**, **Customer Billing Address**, or **Store Base Address**. For digital products, the billing address is often used, while for physical goods, the shipping address is typically required.
* **Tax Rounding:**
    This setting controls how FluentCart handles decimal points during tax calculations. Since tax calculations can often result in numbers with many decimal places, this option determines how that number is rounded to the final cent. For example, a calculated tax of $10.4990 would be automatically rounded up to $10.50.
    * **For each item line:** This option calculates and rounds the tax for each product separately before adding them up to get the final tax total. This method is often required for strict accounting accuracy on a per-item basis.
    * **At subtotal level:** This option calculates the tax on the entire order's subtotal and then rounds the final result just once. This often results in a final order total that looks cleaner and is easier for customers to understand.

### EU VAT Settings

This section is specifically for handling European Union VAT regulations for your business-to-business (B2B) sales.

* **Enable EU VAT Number:** When enabled, this adds a VAT number field to your checkout page for customers in the EU. B2B customers can enter their valid VAT ID to have the VAT removed from their order, a process known as a **"reverse charge."**
* **Local Reverse Charge:** In some specific cases, reverse charge rules can apply even if the business customer is in your own country. Enabling this feature will ensure FluentCart handles these transactions correctly by removing the VAT and marking the order appropriately.
::: info
The EU VAT settings are designed to automate the reverse-charge mechanism for B2B sales, helping you stay compliant with complex international tax laws.
:::

![Configuration and Classes](/guide/public/images/tax/configuration-classes/configuration-classes-1.png)

### Managing Tax Classes

**Tax Classes** are the best way to manage different tax rates for different types of products. This is essential if you sell items that are not all taxed at the same rate (e.g., standard-rate electronics vs. zero-rated books). Tax Classes allow you to group these products to ensure the correct tax is applied every time.

#### Default Tax Classes

FluentCart includes a few common classes to get you started:

* **Standard:** The default tax class for most products.
* **Reduced:** For items that have a lower tax rate.
* **Zero:** For tax-exempt products.

![Configuration and Classes](/guide/public/images/tax/configuration-classes/configuration-classes-2.png)

#### Adding a New Tax Class

You can create custom classes to better organize your products and handle complex tax rules.

1.  In the **Existing Tax Classes** section, click the **Add Tax Class** button.
2.  Fill in the details:
    * **Tax Class Name:** A clear name, like "Digital Services" or "Clothing."
    * **Priority:** A number (0-10) that determines the order in which tax classes are applied. **Higher numbers have a higher priority** and will be applied first. This is useful for creating override rules.
    * **Product Category (Optional):** You can link this tax class directly to one or more product categories. Any product in the selected category will automatically use this tax class.
    * **Description:** An internal note for your reference.

![Configuration and Classes](/guide/public/images/tax/configuration-classes/configuration-classes-3.png)

#### Example Use Case

Imagine you sell clothing that has a standard tax rate, but you are running a special promotion on a specific category of t-shirts that should be tax-exempt.

1.  You would create a new tax class called **"T-Shirt Promo - Zero Rate."**
2.  You would set its **Priority** to 10 (the highest).
3.  You would link it to the **"Promotional T-Shirts"** product category.

Your general clothing items would remain in the **Standard** tax class (which has a lower priority, e.g., 0). Now, because of the high priority, any t-shirt in the "Promotional T-Shirts" category will be tax-exempt, while all other clothing will correctly use the standard tax rate.