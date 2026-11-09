# PDF Invoice Templates

When a customer buys something from your store, sending them a beautiful, branded PDF receipt leaves a lasting professional impression.

With the Fluent PDF feature, you can automatically generate and attach custom-designed PDF documents to your store's emails. Best of all, you don't need to know any code! FluentCart uses the familiar WordPress Block Editor (Gutenberg) to let you drag, drop, and design your PDFs exactly how you want them.

> **Important Note:** Please keep in mind that these PDF documents (Order Receipt, Renewal Receipt, Refund Notice, and Invoice) are only delivered to your customers via email.

::: info
PDF Templates need FluentCart Pro. Without Pro, the PDF Templates screen shows an upgrade notice.
:::

Here is your comprehensive guide to setting up and designing your first custom PDF template.

## Step 1: Install and Activate the Fluent PDF Addon

Before you can start designing, you need to turn the feature on. Fluent PDF is installed from WordPress.org with one click, so there is no ZIP to download or upload.

1. With FluentCart Pro active, navigate to **FluentCart Pro > Settings** in your WordPress dashboard.
2. In the left-hand menu, click on the **Features & addon** tab.
3. Scroll down to the bottom of the page to find the **Plugin Addons** section.
4. Locate the **Fluent PDF** card and click the dark **Install & Activate** button.

FluentCart installs and activates the plugin in a single step. The card switches to **Active** as soon as it's ready.

You can also install it from the PDF Templates screen: when Fluent PDF is missing, that screen shows **Fluent PDF Required** with an **Install & Activate** button.

![PDF Invoice](/images/store-management/pdf-invoice/pdf-1.webp)

## Step 2: Install Required Fonts

To make sure your PDFs generate perfectly and look great on any device (whether your customer opens it on an iPhone or a Windows PC), the system needs to download some specific font files.

1. After activating the addon, go to **Settings** of Fluent PDF.
2. Click on the **Settings** icon button.

![PDF Invoice](/images/store-management/pdf-invoice/pdf-2.webp)

3. You will see a "Font Setup Required" notice. Click the orange **Setup Fluent PDF** button.

![PDF Invoice](/images/store-management/pdf-invoice/pdf-3.webp)

4. You will be redirected to a setup page with a blue **Install Fonts** button. Click it. *(Don't worry—this is a quick, one-time process! You will never have to do this again).*

![PDF Invoice](/images/store-management/pdf-invoice/pdf-4.webp)

## Step 3: Choose a Template to Edit

Once your fonts are ready, navigate back to **Settings > Invoice & Packing > PDF Templates**. The gear icon on the active **Fluent PDF** card under **Features & addon** opens the same screen.

You will now see four built-in templates ready for your personal touch:

* **Order Receipt:** The classic receipt sent when a customer completes a new purchase.
* **Renewal Receipt:** Sent automatically when a customer's subscription successfully renews.
* **Refund Notice:** Sent as proof of a refund if an order is returned or canceled.
* **Invoice:** A standardized, formal invoice document for business transactions.

The four built-in templates carry a **Built-in** badge. To make your own, click **Add Template**, enter a **Template Name** (for example "Custom Invoice"), and click **Create**. You can delete custom templates, and in the editor, **Revert to Default** restores a built-in template to its original design.

All four default templates show the same two numbers at the top:

* **Order Number:** The order's unique 12-character code (for example `A7K2P9X4M1Q8`), the same number customers see in their account.
* **Receipt Number** (or **Invoice Number** on the Invoice): Your receipt prefix plus a running number, for example `INV-1001`. It is assigned when the order is paid, so this row stays blank on a document generated before payment.

When a customer downloads a receipt, the PDF file is named after the receipt number, such as `receipt-INV-1001.pdf`. For an order that is not paid yet, it uses the order number instead.

<!-- TODO(screenshot): The default Order Receipt PDF header showing the Order Number and Receipt Number rows. -->

Hover your mouse over the template you want to customize (for example, "Order Receipt") and click the blue **Edit Template** button that appears.

<!-- TODO(screenshots): pdf-5.webp is outdated: the sidebar shows PDF Templates and E-Invoice Settings under Email Configuration; they now sit under Invoice & Packing. Retake the PDF Templates screen with the Invoice & Packing group open, ideally showing the Add Template button. Update later. -->
![PDF Invoice](/images/store-management/pdf-invoice/pdf-5.webp)

## Step 4: Designing Your PDF (The Fun Part!)

Clicking edit will open the template in the standard WordPress Block Editor. If you have ever written a blog post in WordPress, you already know how to use this!

### 1. Drag and Drop Blocks
Click the **+ (Add Block)** icon in the top left corner to add new visual elements to your receipt. You can add:
* **Images:** Drag in an Image block to place your store's colorful logo at the top.
* **Headings & Paragraphs:** Add a friendly "Thank you for your purchase!" message at the bottom.
* **Dividers:** Add lines to separate different sections of the receipt neatly.

### 2. Using "Smart Tags" (Dynamic Data)
As you look at the default template, you will notice weird text wrapped in curly brackets, like <code v-pre>{{order.invoice_no}}</code>. 

These are Smart Tags (or shortcodes). Click the <span class="fc-toolbar-btn" v-pre><kbd>{{:}}</kbd></span> button to get these shortcodes. As if you can't type a specific customer's name into a template that goes to everyone, you use these tags as placeholders. When FluentCart creates the PDF, it instantly swaps these tags with the real customer's data!

Here are a few examples of how they work in action:

* **The Logo Tag:**
    * **What you type:** <code v-pre>{{settings.store_logo}}</code>
    * **What the customer sees:** Your actual uploaded store image logo.
* **The Order Number Tag:**
    * **What you type:** Order Number: <code v-pre>{{order.uuid}}</code>
    * **What the customer sees:** Order Number: A7K2P9X4M1Q8
* **The Receipt Number Tag:**
    * **What you type:** Receipt Number: <code v-pre>{{order.invoice_no|}}</code>
    * **What the customer sees:** Receipt Number: INV-0042
    * The bare pipe at the end keeps the value blank until the order is paid. Without it, <code v-pre>{{order.invoice_no}}</code> shows the order number for an unpaid order.
* **The Total Amount Tag:**
    * **What you type:** You paid a total of <code v-pre>{{order.total_amount_formatted}}</code> today.
    * **What the customer sees:** You paid a total of $45.00 today.
* **The Items Table Tag:**
    * **What you type:** <code v-pre>{{order.items_table}}</code>
    * **What the customer sees:** A perfectly formatted, multi-row table showing every single product they bought, the quantity, and the individual prices.

You can freely move these tags around, change their font size, or make them bold just like normal text!

#### Tax & EU VAT Smart Tags

If your store collects tax — especially EU VAT or any other reverse-charge regime — these dedicated tags drop the right values into the right place on every PDF receipt:

* <code v-pre>{{order.tax_breakdown}}</code> — Renders a tidy table of every tax line on the order (e.g. "VAT 19%", "Shipping Tax"). For reverse-charge orders, the amount column shows **Charge reversed** and an automatic footnote, *"\* Tax to be paid on reverse charge basis"*, is appended below the table.
* <code v-pre>{{order.store_vat_display}}</code> — The VAT number registered for the order's tax country (from your tax settings). It is empty when the order has no tax rate.
* <code v-pre>{{order.buyer_vat_display}}</code> — The buyer's VAT number, captured at checkout. Use this in B2B receipts that need both parties' tax IDs.
* <code v-pre>{{order.buyer_company_name}}</code> — The buyer's company name from the checkout form.
* <code v-pre>{{order.buyer_legal_registration_id}}</code> — The buyer's legal registration ID (e.g. company registration number).
* <code v-pre>{{order.buyer_reverse_charge_declaration}}</code> — A pre-formatted reverse-charge declaration sentence that appears only on B2B EU orders where reverse charge applies. Drop this anywhere in the template; it stays empty for orders that don't qualify.

Your seller details come from **Store Settings > Business Details**, and these tags place them on the PDF:

* <code v-pre>{{order.store_seller_name}}</code>: Your **Company Name**, or your store name if it is empty.
* <code v-pre>{{order.store_seller_vat_display}}</code>: Your **Seller VAT ID**.
* <code v-pre>{{order.store_legal_registration_display}}</code>: Your **Legal Registration ID**.
* <code v-pre>{{order.store_tax_display}}</code>: Your **Seller Tax ID**.

The Pro **Receipt Addresses** block includes a seller column built from these Business Details.

These tags work alongside the automatic VAT-in-billing-address behavior covered below. They don't conflict, so a complete B2B-ready PDF can include the buyer's VAT in the address, your seller VAT ID and registration details in the header, and a tax breakdown table in the totals section.

For ZUGFeRD / Factur-X e-invoices, configure **Settings > Invoice & Packing > E-Invoice Settings**. It holds your seller contact, bank details, and the **ZUGFeRD Profile**, while your Company Name and IDs come from Store Settings > Business Details.

#### Customer VAT Number on Receipts

If a customer provides a VAT number at checkout, FluentCart now automatically includes it inside the **billing address block** of every generated PDF (Order Receipt, Renewal Receipt, Refund Notice, and Invoice). You don't need to add a separate smart tag or modify the template — when the address renders, the VAT number is appended right under the customer's address line.

This makes FluentCart receipts drop-in ready for B2B customers in the EU, UK, and other VAT jurisdictions who need a properly formatted receipt for their own bookkeeping. If the customer has not provided a VAT number, the line is omitted automatically — so receipts for B2C buyers continue to look exactly the same.

>[!Note]
>VAT numbers are captured during checkout via the EU VAT field. To learn how to enable and configure VAT collection for your store, see [Configuring European Union (EU) VAT](/guide/tax-&-duties/european-union-vat).

![PDF Invoice](/images/store-management/pdf-invoice/pdf-6.webp)

## Step 5: Test and Save Your Masterpiece

Before you let this template go live to your real customers, you should always check your work.

1. Look at the bottom right corner of the editor screen.
2. Click the white **Test Download** button.
3. FluentCart will instantly generate a sample PDF and download it to your computer. Open it up and see how your logo, text, and smart tags look!
4. If everything looks perfect and professional, click the dark **Save Template** button next to it.

Emails have no PDF attached until you choose one. To send your template, open **Settings > Email Configuration > Notifications**, edit the email (for example **Purchase receipt to customer**), choose your template under **Attach PDF Template**, and click **Update**.

Your custom-designed PDF now goes out with every email you attached it to.
