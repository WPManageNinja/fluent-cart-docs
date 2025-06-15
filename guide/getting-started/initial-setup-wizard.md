# Initial Setup Wizard

After successfully installing and activating FluentCart, a setup guide will usually appear.  This guide helps you configure the foundational settings of your store quickly and efficiently.

:::tip First-Time Setup
The setup wizard is designed to make your initial configuration smooth. If you skip it, you can always configure these settings later from the FluentCart **Settings** menu.
:::

## Steps of the Initial Setup Wizard

The FluentCart setup wizard guides you through the following crucial configurations to get your store up and running.

### 1. Store Details

The first step of the wizard prompts you to enter basic information about your store.

* **Shop Name:** Enter the public name of your online store.
* **Store Currency:** Select the primary currency for your store's transactions.
* **Shop Image/Logo:** Upload your brand's logo. FluentCart supports HEIC, WEBP, SVG, PNG, or JPG formats, with a recommended minimum width of 512 pixels.

Click **"Continue"** to proceed to the next step.

![Screenshot of Initial Setup Wizard - Store Details](/guide/public/images/getting-started/initial-setup-wizard-step1.png)

:::info Where to find later?
These settings can be accessed and modified anytime from **FluentCart Pro > Settings > Settings > Store Setup**.
:::

### 2. Page Setup

The second step of the wizard helps you assign core FluentCart functionalities to specific WordPress pages on your site. This ensures that customers can access the Shop, Cart, Checkout, and other essential pages correctly.

You have several options for setting up these pages:

* **Select Individual Pages:** Use the "Select" dropdown next to each page type to choose an an existing WordPress page from your site.
* **Create Pages (via `+` icon):** Click the **`+` icon** next to a page type. This will automatically create a new WordPress page for that specific function.
* **Generate All Pages:** Click the **"Generate All Pages"** button at the bottom. This will automatically create all necessary pages (Checkout, Cart, Receipt, Shop, Customer Profile, Custom Payment) with their respective FluentCart shortcodes embedded and assign them for you.

![Screenshot of Initial Setup Wizard - Page Setup](/guide/public/images/getting-started/initial-setup-wizard-step2.png)

:::warning Important Shortcodes
For each of these pages, you *must* ensure the correct FluentCart shortcode is embedded in the page content for the functionality to work. The wizard typically prompts you or automatically adds them.
* Shop Page: `[fluent_cart_products]`
* Customer Profile Page: `[fluent_cart_customer_profile]`
* Cart Page: `[fluent_cart_cart]`
* Receipt Page: `[fluent_cart_receipt]`
* Checkout Page: `[fluent_cart_checkout]`
* Custom Payment Page: `[fluent_cart_custom_payment]`
:::

:::info Where to find later?
These settings can be accessed and modified anytime from **FluentCart Pro > Settings > Store Settings > Pages Setup**.
:::

### 3. Product Setup

The third and final step of the wizard allows you to quickly get started with products in your store.

You have two main options:

* **Start From scratch:** Choose this option if you prefer to build your product catalog manually, adding each product individually after the wizard is complete.
* **Generate Dummy Content:** Select this to automatically import a set of sample products, categories, and other dummy data into your store. This is useful for quickly seeing how your store looks with content. 
The content will be uploaded in the background and may take a few seconds depending on your network. You might need to reload the page a few times to see the imported data appear in your product lists and reports.

Click the **"Save"** button to finalize the wizard setup.

![Screenshot of Initial Setup Wizard - Product Setup](/guide/public/images/getting-started/initial-setup-wizard-step3.png)

## Completing the Wizard & Next Steps for Your Business

Once you've gone through all the steps of the initial setup wizard, it will usually confirm everything is set up and take you to your FluentCart Dashboard.

This guide helps you start strong, but remember, making a full online store needs more than just these first steps. To make sure your business works well and easily, you will also need to:

* **Setup Payment Gateways:** Set up your preferred payment methods like Stripe, PayPal, or Cash on Delivery under **[Payment Settings](/guide/payments-checkout/connecting-payment-gateways/)**.
* **Add Your Products:** Begin creating your actual [physical products](/guide/product-types-creation/creating-physical-products), [digital products](/guide/product-types-creation/creating-digital-products), or [licensed digital products](/guide/product-types-creation/creating-digital-products-with-licenses).
* **Review Email Notifications:** Customize your [email templates](/guide/settings-configuration/email-notifications/editing-email-templates) to ensure customers receive branded and informative updates.
* **Explore Reports:** Utilize the [Reporting & Analytics](/guide/reporting-analytics/) section to monitor your store's performance.
* **Configure Integrations:** Connect FluentCart with other tools you use for CRM, marketing, or other business processes.

