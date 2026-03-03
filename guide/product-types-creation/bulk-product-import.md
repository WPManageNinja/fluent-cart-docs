# Bulk Product Import

Imagine having to manually type out the titles, descriptions, prices, and SKUs for 500 different products. It would take days! If you are migrating your store from another platform or simply have a massive new inventory catalog to add, FluentCart's Bulk Product Insert feature is your best friend.

This tool allows you to upload hundreds or thousands of products all at once using a simple spreadsheet (CSV file).

What makes FluentCart's importer truly special is the **Staging Table**. Instead of blindly pushing your spreadsheet data live to your store and hoping for the best, FluentCart places everything into a safe, spreadsheet-like interface where you can review, edit, and tweak your data before making it visible to your customers.

Here is a comprehensive, step-by-step guide to mastering the bulk import process.

## Step 1: Access the Bulk Insert Tool

First, let's navigate to the right tool in your dashboard.

1. Log in to your **WordPress dashboard**.
2. In the left-hand menu, click on **FluentCart** and then select **Products**.
3. Look at the top right corner of your product list and click on the white **More actions** dropdown button.
4. Select **Bulk Product Insert** from the menu.

![Bulk Product Import](/guide/public/images/product-types-creation/bulk-product-import/product-import-1.webp)

## Step 2: Upload Your CSV File (Your Product Spreadsheet)

You will now be looking at a blank Bulk Insert page. This is where you will hand your data over to FluentCart.

1. Click the **Import** button located at the top right of the screen.

![Bulk Product Import](/guide/public/images/product-types-creation/bulk-product-import/product-import-2.webp)

2. A popup window will appear asking for your file.
3. Here upload your CSV file that is saved to your computer, simply drag and drop the file into the upload area, or click the **Browse/Upload Files** text to select it.

> **Note:** FluentCart can handle massive catalogs! The maximum file size allowed is a generous 300 MB.

> **Need a template?** If you are unsure how to format your spreadsheet, look at the bottom left of this popup and click **Download a Sample CSV File**. This gives you a perfectly formatted template you can fill out in Excel or Google Sheets!

![Bulk Product Import](/guide/public/images/product-types-creation/bulk-product-import/product-import-3.webp)

## Step 3: Map Your Columns (Connecting the Dots)

Because every spreadsheet is slightly different, FluentCart needs you to act as a translator. In this step, you are telling FluentCart which column in your spreadsheet matches which setting in your store.

Once your file uploads, the Map Columns screen will automatically appear.

* On the left side ("Products Fields"), you will see what FluentCart calls its settings (e.g., Post Title, Post Name, Post Content).
* On the right side ("CSV Headers"), you will see dropdown menus containing the column names from your uploaded spreadsheet.

Carefully match them up. For example:
* Map **Post Title** to your spreadsheet's **Name** or **Product Name** column.
* Map **Post Name** to your spreadsheet's **SKU** column.
* Map **Post Content** to your spreadsheet's **Description** column.

> **Helpful Tip:** FluentCart is smart! If your spreadsheet headers have common names (like "Price" or "Name"), the system will automatically try to match them for you. Just double-check its work.

When everything looks correctly matched, click the **Add Products** button at the bottom of the window.

![Bulk Product Import](/guide/public/images/product-types-creation/bulk-product-import/product-import-4.webp)

## Step 4: The Staging Table (Your Safe Review Zone)

This is where the magic happens. Instead of making your products live immediately, FluentCart loads all your imported data into a massive, interactive table. Do not worry—at this stage, your products are not live in your store yet!

Think of this as a final rehearsal. You can use this table to quickly review and fix any data before it goes public:

* **Lightning-Fast Inline Editing:** Notice a typo in a product name? Want to round up a price? You don't need to open a new page. Just click directly into any cell (like Title, Price, or Stock) and type your correction instantly.
* **Customize Your View:** If the table feels cluttered, click the Columns icon (the small book icon at the top right of the table). A menu will drop down allowing you to check or uncheck the fields you want to see. You can hide things like Interval or Trial Days if you aren't selling subscriptions, and focus on SKU, Price, and Stock.
* **Manage Variations Easily:** If you imported products with different sizes or colors (variable products), you will see them neatly nested under the main product. Forgot a size? Just click the **+ Add Variant** text directly in the table to create a new row for it instantly.
* **Clean Up Mistakes (Row Actions):** If a product got imported by mistake, simply check the box next to its name on the far left, and click the red **Delete** button at the top. You can also use the **Duplicate** button to quickly copy a product setup.
* **Pin Actions:** If you have many columns and need to scroll horizontally, check the **Pin Actions** box at the top right. This freezes your action buttons so they are always visible, no matter how far you scroll.


![Bulk Product Import](/guide/public/images/product-types-creation/bulk-product-import/product-import-5.webp)

## Step 5: Save and Publish (Going Live!)

Take your time reviewing the staging table. Check that your prices are accurate, your SKUs are in place, and your product types (Physical vs. Digital) are correct.

Once you are 100% satisfied that your data is perfect:
1. Click the dark **Save All Products** button located at the top right of the screen.
2. A progress bar will appear as FluentCart processes the data.

Congratulations! FluentCart has now officially added all of those products and variations to your live store catalog. Your customers can now find and purchase them!

---

> **Pro Tip for Future Edits:** This tool isn't just for adding new products. If you ever need to make massive changes to products that are already in your store (for example, if you want to drop the price of 50 different t-shirts for a weekend sale), go back to the "More actions" menu and select **Bulk Product Edit**. It brings up this exact same staging table for your existing catalog, letting you make hundreds of price changes in seconds!