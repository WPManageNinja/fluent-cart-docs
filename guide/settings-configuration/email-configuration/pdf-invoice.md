# PDF Invoice Templates

When a customer buys something from your store, sending them a beautiful, branded PDF receipt leaves a lasting professional impression.

With the Fluent PDF feature, you can automatically generate and attach custom-designed PDF documents to your store's emails. Best of all, you don't need to know any code! FluentCart uses the familiar WordPress Block Editor (Gutenberg) to let you drag, drop, and design your PDFs exactly how you want them.

> **Important Note:** Please keep in mind that these PDF documents (Order Receipt, Renewal Receipt, Refund Notice, and Invoice) are only delivered to your customers via email.

Here is your comprehensive guide to setting up and designing your first custom PDF template.

## Step 1: Install and Activate the Fluent PDF Addon

Before you can start designing, you need to turn the feature on.

1. Navigate to **FluentCart > Settings** in your WordPress dashboard.
2. In the left-hand menu, click on the **Features & addon** tab.
3. Scroll down to the bottom of the page to find the Plugin Addons section.
4. Locate the **Fluent PDF** card and click the dark **Install & Activate** button.

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

Once your fonts are ready, navigate back to **Settings > Email Configuration > PDF Templates**.

You will now see four built-in templates ready for your personal touch:

* **Order Receipt:** The classic receipt sent when a customer completes a new purchase.
* **Renewal Receipt:** Sent automatically when a customer's subscription successfully renews.
* **Refund Notice:** Sent as proof of a refund if an order is returned or canceled.
* **Invoice:** A standardized, formal invoice document for business transactions.

Hover your mouse over the template you want to customize (for example, "Order Receipt") and click the blue **Edit Template** button that appears.

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

* **The Logo Tag:** * **What you type:** <code v-pre>{{settings.store_logo}}</code>
    * **What the customer sees:** Your actual uploaded store image logo.
* **The Order Number Tag:**
    * **What you type:** Invoice Number: <code v-pre>{{order.invoice_no}}</code>
    * **What the customer sees:** Invoice Number: #INV-0042
* **The Total Amount Tag:**
    * **What you type:** You paid a total of <code v-pre>{{order.total_amount_formatted}}</code> today.
    * **What the customer sees:** You paid a total of $45.00 today.
* **The Items Table Tag:** * **What you type:** <code v-pre>{{order.items_table}}</code>
    * **What the customer sees:** A perfectly formatted, multi-row table showing every single product they bought, the quantity, and the individual prices.

You can freely move these tags around, change their font size, or make them bold just like normal text!

![PDF Invoice](/images/store-management/pdf-invoice/pdf-6.webp)

## Step 5: Test and Save Your Masterpiece

Before you let this template go live to your real customers, you should always check your work.

1. Look at the bottom right corner of the editor screen.
2. Click the white **Test Download** button.
3. FluentCart will instantly generate a sample PDF and download it to your computer. Open it up and see how your logo, text, and smart tags look!
4. If everything looks perfect and professional, click the dark **Save Template** button next to it.
You are done! Your custom-designed PDF is now active. The next time a customer buys something, FluentCart will automatically generate a PDF using your new design and attach it directly to their order email.
