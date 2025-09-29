# Setting Up Tax Rates

Once you have configured your main tax settings and created your tax classes, the next step is to define the specific tax rates for the regions where you sell your products. The **Rates** screen in FluentCart is where you manage these specific tax rates for different countries, states, and provinces.

## Accessing Tax Rates Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2.  Click on the **Tax & Duties** tab from the left-hand menu.
3.  Select the **Rates** sub-menu.

## Configuring Countries

Before you can add rates, you must specify which countries you will be collecting taxes in.

1.  On the **Existing Tax Rates** screen, click the **Configure Countries** button.
2.  A pop-up window will appear, listing all available countries grouped by continent.
3.  Select the checkbox next to each country where you need to apply tax rates.
4.  Click **Save**. The selected countries will now appear on the main Rates screen, ready for you to add specific tax rules.

> **Info:** To save you time, FluentCart comes with pre-configured default tax rates for many countries. After you select a country, you will often find that the standard tax rates have already been set up for you. You can then edit these default rates as needed.

### Managing Tax Rates for a Country

After adding a country, you can define the specific tax rates that apply to it.

1.  From the main **Rates** screen, find the country you wish to configure and click the **View** button or the number under the **Rates** column.
2.  This will take you to the tax rate management page for that specific country.

#### Tax ID

At the top of this page, you can enter your business's official **Tax ID** number for this specific country or region. This ID will be used to identify your business on invoices and other legal documents, which is often a requirement for tax compliance. Simply enter your ID and click **Save**.

#### Regional Settings

This is where you define the primary tax rates for the selected country. You can add multiple rates to handle different tax classes or regional requirements.

To add a new rate, click the **+ Add New Rate** button and fill in the following details:

* **Tax Label:** A descriptive name for the tax that your customers will see on their invoices (e.g., "VAT," "State Tax," "GST").
* **Rate (%):** The tax rate as a percentage (e.g., enter **20** for 20%).
* **Tax Class:** Assign this rate to one of the tax classes you created earlier (e.g., Standard, Reduced, Zero). This ensures the rate is only applied to the correct products.
* **Compound:** This is an advanced option for applying multiple taxes sequentially. If you enable this, the tax will be calculated on top of the subtotal plus any other taxes that have a lower priority.
* **Priority:** A number that determines the order in which multiple taxes are applied to a single order. Taxes with a lower priority number (e.g., 1) are applied before taxes with a higher number (e.g., 2).

#### Understanding Compound Taxes: A Practical Example

In some regions, you may need to apply one tax on top of another. This is called a **"compound tax."** Let's walk through a simple use case to understand how it works.

**Scenario:**

Imagine you are a Canadian store selling a product for $100. You need to apply two taxes:
* A 5% **GST** (Goods and Services Tax) which is a federal tax.
* A 7% **PST** (Provincial Sales Tax) which is a provincial tax and must be calculated *after* the GST has been added.

**Setup in FluentCart:**

You would create two tax rates:
* **GST:** Rate 5%, Priority 1, Compound **No**.
* **PST:** Rate 7%, Priority 2, Compound **Yes**.

**How FluentCart Calculates the Total:**

1.  First, it applies the Priority 1 tax (GST):
    $100 * 5% = $5.00. The price including the first tax is now $105.00.
2.  Next, it applies the Priority 2 tax (PST):
    Because PST is set to **Compound**, it is calculated on the new total from step 1: $105.00 * 7% = $7.35.

**Final Totals:**

* **Total Tax:** $5.00 (GST) + $7.35 (PST) = **$12.35**.
* **Final Order Total:** $100 (Product) + $12.35 (Total Tax) = **$112.35**.

By setting the PST to **"Compound"** and giving it a higher priority number, you ensure the calculation is performed correctly and in the right order.

### Shipping Tax Overrides

In some regions, the tax rate for shipping costs may be different from the tax rate for products. This section allows you to set a specific tax rate that will apply only to the shipping fees for specific provinces or states within the selected country.

1.  Click the **Add Tax Override** button.
2.  A pop-up window will appear. Configure the following:
    * **Tax Label:** A clear name for the shipping tax (e.g., "Provincial Shipping Tax").
    * **Shipping Tax Rate (%):** The specific tax rate that applies only to the shipping cost.
    * **For Province:** Select the state or province where this override rule should apply.
    * **Tax Class:** Select the tax class this override should apply to. This is useful if your shipping tax also needs to follow rules for standard, reduced, or zero-rated items.

This override gives you granular control to ensure maximum flexibility and accuracy, even in regions with complex shipping tax laws.

### Managing Rates with Action Buttons

For every rate you create in both the **Regional Settings** and **Shipping Tax Overrides** sections, you will see a set of action icons on the far right of the row. These allow you to easily manage your tax rules.

* **Edit (Pencil Icon):** Click this icon to open the settings for that specific rate, allowing you to make changes to the label, rate, tax class, or other options.
* **Delete (Trash Can Icon):** Click this icon to permanently remove the tax rate. A confirmation pop-up will appear to prevent accidental deletion.
