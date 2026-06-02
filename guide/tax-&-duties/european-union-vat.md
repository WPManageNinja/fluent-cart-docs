# Configuring European Union (EU) VAT

Selling to customers in the European Union requires careful handling of Value Added Tax (VAT). FluentCart's **EU VAT** screen consolidates everything you need to choose a collection method, register the countries you collect for, and manage per-country rates and labels — all from one page.

This guide walks through accessing the screen, the €10,000 micro-business threshold, the three collection methods (OSS, Home Country, Specific Country), the shared per-class rate management, and the customer-facing VAT number behaviour on receipts.

## Accessing EU VAT Settings

1. From your WordPress dashboard, go to **FluentCart → Settings**.
2. Click **Tax Settings → Rates**.
3. From the **Tax Regions** list, click **European Union**.

This opens the EU region detail page, where the **Collect VAT cross-border** card is your starting point.

![Screenshot of the EU VAT cross-border setup card]()

## EU Micro-Business Threshold

The EU sets a **€10,000 per year** threshold for total cross-border B2C sales (across all EU countries combined, excluding your home country). The threshold determines which collection method you can use:

* **Under €10,000/year** — you may charge your home country's VAT rate to all EU customers using the **Home Country Method**.
* **Over €10,000/year** — you must apply the destination country's VAT rate to each customer, typically via the **OSS Method** (or **Specific Country** registrations if you prefer).

If your sales cross the threshold mid-year, you'll need to switch methods. The cross-border card displays a micro-business alert with the threshold so you can see at a glance whether you still qualify. Switching is covered in [Switching or Stopping a Method](#switching-or-stopping-a-method) below.

## Choosing Your VAT Collection Method

The cross-border card offers three methods. Pick the one that matches how you're registered for VAT in the EU:

| Method | Who it's for | Jump to |
|---|---|---|
| **OSS (One Stop Shop)** | Cross-border sellers with one OSS registration covering all EU member states. | [OSS Method](#oss-method) |
| **Home Country Registration** | EU-based micro-businesses under the €10k threshold, charging home-country VAT to all EU customers. | [Home Country Method](#home-country-method) |
| **Specific Country Registrations** | Sellers with individual VAT registrations in one or more specific EU countries. | [Specific Country Method](#specific-country-method) |

The shared mechanics — per-class tabs, per-country labels, rate inputs, custom classes, Reset to default, save — work identically across all three methods. They're covered once in [Managing Per-Class Rates and Labels](#managing-per-class-rates-and-labels).

---

## OSS Method

The **One Stop Shop (OSS)** is a simplified EU scheme that lets businesses selling across multiple member states manage VAT through a single registration. If you've registered for OSS, FluentCart applies each EU customer's destination VAT rate automatically and groups everything under your one OSS number for reporting.

### Who Should Use This Method?

This method is recommended for most cross-border EU sellers — businesses of any size that have a single OSS VAT number and want to file one consolidated EU VAT return.

If your cross-border B2C sales are under €10,000/year, the simpler [Home Country Method](#home-country-method) may suit you better.

### Configuring Your OSS Registration

From the cross-border card, select **Collect using a One Stop Shop (OSS) registration**. The registration form appears inline.

* **Country of OSS registration:** From the dropdown, select the EU country where you are registered for the OSS scheme.
* **VAT number:** Enter your official OSS VAT number.

Click **Configure** (or **Save** on later edits) to apply.

![Screenshot of the OSS registration form]()

Once saved, FluentCart applies the correct destination-country VAT rate to every EU sale automatically, all reported under your single OSS registration. Rates and labels are managed from the **Destination country rates** table beneath the card — see [Managing Per-Class Rates and Labels](#managing-per-class-rates-and-labels).

---

## Home Country Method

This method is for small EU-based businesses below the €10,000 cross-border threshold. Instead of charging each EU customer their own country's VAT rate, you charge **your home country's rate** to everyone in the EU. It's the simplest setup if you qualify.

### Who Should Use This Method?

You should select this option if:

* Your business is based in an EU member state.
* Your total cross-border B2C sales to *other* EU countries are under **€10,000 per year**.

If your sales cross that threshold mid-year, EU rules require you to switch to a destination-based method — typically [OSS](#oss-method) or [Specific Country Registrations](#specific-country-method).

### Configuring Your Home Country Registration

From the cross-border card, choose **Collect using your home country registration**. The registration form appears inline.

* **Country of registration:** From the dropdown, select your home EU member state.
* **VAT number:** Enter your local VAT registration number.

Click **Configure** (or **Save** on edits) to apply.

![Screenshot of the home country registration form]()

### How It Works at Checkout

With this method active, FluentCart applies your **home country's VAT rate** to every EU customer's order, regardless of where they're buying from. For example, if your business is registered in Austria and a customer from Germany makes a purchase, the order is taxed at the Austrian rate — not the German one.

If you've enabled **Local Reverse Charge** on the [Tax Configuration page](/guide/tax-&-duties/configuration-and-classes#vat-reverse-charge-settings), the **Tax-Inclusive Price Mode** setting (Fixed vs Dynamic) controls how reverse-charged B2B orders are invoiced.

---

## Specific Country Method

This method is for businesses individually registered for VAT in one or more EU countries. You manage each registration separately and FluentCart applies the matching country's rates to customers there. The specific-country list lives **inline inside the cross-border card** — no separate management page.

### Who Should Use This Method?

You should select this option if:

* You are registered for VAT in one or more EU countries individually.
* You don't use the simplified OSS scheme or the home-country micro-business method.

Larger sellers and businesses with specific legal or contractual reasons to maintain country-level registrations typically use this method.

### Adding a Country Registration

1. From the cross-border card, choose **Collect using specific country registrations**.
2. Click **Configure** (or **Collect in another country** if you already have one or more registrations set up).
3. From the country dropdown, pick the EU country you're registered in.
4. Enter the registration details for that country:
   * **VAT Number** — your registration number in that country.
   * **Per-class rates** — for each tax class, enter the rate (see [Managing Per-Class Rates and Labels](#managing-per-class-rates-and-labels)).
   * **Per-class Tax Label** — the customer-facing label for each class in this country.
5. Click **Save** to add the registration. The country appears in the inline list.

![Screenshot of the country registration form]()

::: info
At least one of the per-class rates must be greater than 0% — FluentCart blocks saving a registration where every rate is zero, to prevent accidentally registering with no working rate.
:::

### Adding Another Country

After the first registration is saved, the cross-border card shows a **Collect in another country** action. Click it to repeat the form for the next country. There's no hard limit — register in as many countries as you maintain real registrations for.

### Editing or Deleting a Registration

Each row in the inline registration list has action icons:

* **Edit (pencil)** — re-opens the form with the country's current values for amendment.
* **Delete (trash)** — removes the registration. If the class assignments inside this registration are used elsewhere (other registrations, product/variation assignments), FluentCart shows a confirmation warning before the delete completes.

---

## Managing Per-Class Rates and Labels

All three methods share the same rate-management UI in the **Destination country rates** table. This section covers the mechanics once.

![Screenshot of the destination country rates table with per-class tabs and Tax Label inputs]()

### Per-Class Tabs

Rates are organised by tax class. Tabs above the rate table let you switch between **Standard**, **Reduced**, **Zero**, and any custom classes you've added.

* Click a class tab to view that class's per-country rates.
* Click the **+** button to add another class — a small dropdown lets you choose **Zero** or **Custom Class…**.
* An **×** on a tab removes that class from the current setup; the **Standard** class is always present.

### Per-Country Tax Label

Each country row carries its own **Tax Label** input. The label is what customers see on the checkout breakdown and on their receipt — set it to the locally-recognised term:

* Germany Standard → `MwSt`
* Italy Standard → `IVA`
* Netherlands Standard → `BTW`
* Sweden Reduced → `Moms (reducerad)`

Per-class labels mean Germany's Standard row can read `MwSt` while its Reduced row reads `MwSt (ermäßigt)`.

### Per-Country Rate

The **Rate (%)** column holds the percentage. FluentCart pre-fills rates from its database — verify them against current law before going live.

### Per-Class Add and Delete

Adding a class to a registration uses the **+** button described above. Deleting a class uses the **×** on its tab.

::: info
**Global-delete warning.** If a class you're about to delete is in use anywhere else (other registrations, product/variation assignments, override rules), FluentCart shows a warning before the delete completes. Read it carefully — removing an in-use class affects every place that referenced it.
:::

### Reset to Default

The **Reset to default** button restores the plugin's shipped rates for the active class. Useful if you've experimented and want to start over, but there's no undo — your custom rates for that class are lost.

### Saving

Click **Save Rates** to persist changes for the active class. Switch tabs and save again on each class you've edited.

---

## Tax Overrides on EU Regions

In rare cases you'll need to charge a different rate for a specific scope inside an EU country — a particular product category, a different shipping rate to a region, or a temporary promotional rate. The **Tax Overrides** section below the rate table handles that on EU regions the same way it does for any other region.

See [Tax Overrides on the Setting Up Tax Rates page](/guide/tax-&-duties/tax-rates#tax-overrides) for the full walkthrough — override type (Products or Shipping), country, optional city, optional postcode with range syntax, and rate.

---

## Switching or Stopping a Method

### Stop Collecting

Click **Stop collecting** at the top of the cross-border card to clear the current method. The card re-shows the initial setup prompt so you can pick again from scratch.

### Switch to a Different Method

Stopping the current method and selecting a new one is the workflow for switching — for example, when your cross-border sales cross the €10,000 threshold and you need to move from **Home Country** to **OSS**.

Saved registrations from the previous method are cleared when you save the new method's configuration, so export anything you need first.

---

## Customer VAT Numbers on PDF Receipts

When a customer enters a VAT number at checkout, FluentCart renders that VAT number directly inside the **billing address block** of every generated PDF receipt (Order Receipt, Renewal Receipt, Refund Notice, and Invoice).

This makes FluentCart receipts drop-in ready for B2B buyers in the EU, UK, and other VAT jurisdictions who need a properly formatted receipt for their own bookkeeping — no custom template work or manual workaround needed. For B2C orders where no VAT number is provided, receipts continue to look exactly the same.

See [PDF Invoice Templates](/guide/settings-configuration/email-configuration/pdf-invoice) for the full PDF setup, and [Tax Configuration → VAT Reverse Charge Settings](/guide/tax-&-duties/configuration-and-classes#vat-reverse-charge-settings) for the reverse-charge behaviour that drives those receipt lines.
