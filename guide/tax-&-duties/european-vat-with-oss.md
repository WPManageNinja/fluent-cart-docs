# Configuring EU VAT with the OSS Method

The **One Stop Shop (OSS)** is a simplified system that allows businesses selling to multiple European Union (EU) countries to manage their VAT obligations through a single registration. If you have an OSS registration, FluentCart can automatically handle the complex task of applying the correct VAT rates for every EU country your customers purchase from.

This guide will show you how to set up and manage your OSS VAT collection in FluentCart.

### Who Should Use This Method?

This method is recommended for most businesses of any size that sell to customers in multiple EU countries and have a single OSS VAT number. It streamlines your tax reporting by allowing you to file one VAT return for all your cross-border EU sales.

### How to Configure Your OSS Registration

If you have already selected **"Collect using a One Stop Shop (OSS) registration"** from the main EU VAT setup wizard, you will be prompted to enter your registration details.

* **Country of OSS registration:** From the dropdown menu, select the EU country where you are officially registered for the OSS scheme.
* **VAT number:** Enter your official OSS VAT number.

Click **Save**.

Once you save these settings, FluentCart takes care of the rest. It will now automatically apply the correct, up-to-date VAT rates based on each customer's country, all managed under your single OSS registration.

### Managing Your OSS Configuration

After the initial setup, you will be taken to the main OSS management dashboard. Here, you can review your settings and make adjustments if needed.

#### Tax Overrides

FluentCart automatically uses the official standard, reduced, and zero tax rates for every country in the EU. However, in some rare situations, you may need to manually override these default rates for a specific country.

**Example Use Case:**
Imagine a country announces a temporary change to its "reduced" VAT rate from 9% to 7% for a promotional period, but the official databases used for automatic updates haven't caught up yet. You can use an override to apply the correct rate immediately.

1.  Click the **Add Override** button.
2.  A pop-up window will appear. Select the **Country** you want to override (e.g., Bulgaria).
3.  You will see the default rates for that country's tax classes (e.g., standard 20%, reduced 9%, zero 0%). You can now enter your own custom percentage for one or more of these classes.
4.  Click **Save Overrides**.

The country will now appear in the **"Tax Overrides"** list at the top of the page, indicating that it is using your custom rates instead of the defaults. You can **Edit** or **Delete** this override at any time using the action icons on the right.

#### Country Rates

This section provides a convenient, collapsible list of all the EU countries where you are collecting VAT. You can expand any country to view the specific standard, reduced, and zero tax rates that FluentCart is currently applying automatically. This is a great way to quickly verify the rates being used across the EU without having to look them up individually.