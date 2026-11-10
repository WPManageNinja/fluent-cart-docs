# Checkout Fields Settings

The Checkout Fields screen in **FluentCart** allows you to customize the form customers fill out when they complete a purchase. Here, you can **enable**, **disable**, or make fields **required** to ensure you collect all necessary customer and order details efficiently.

## Accessing Checkout Fields Settings

Go to your **WordPress dashboard**, then go to **FluentCart > Settings**, open **Store Settings** in the settings menu and select **Checkout Fields**.

## Configuration Options

The fields are grouped into **Basic Info**, **Business Details**, **Billing Address**, **Shipping Address** and **Agree Terms**, allowing you to control which fields appear during the checkout process.

### 1. Basic Info

This section includes essential fields for customer identification.

* **Full Name:** Shown by default and marked **System**. Enabling First Name and Last Name replaces it.
* **First Name:** Turn it on to split the name into first and last name. It is marked **System** and has no **Required** box. While **Last Name** is on, you can't turn First Name off.
* **Last Name:** Turn it on and tick **Required** to make it mandatory.
* **Email Address:** A system-required field used for order confirmations and communication. It is always required and can't be disabled.

### 2. Business Details

Use these fields if you sell to businesses. All of them are off by default.

* **Company:** The customer's company name.
* **VAT/GST/Tax Number:** A field for the customer's tax ID.
* **Legal Registration ID:** A company registration or business ID.
* **B2B Only Mode:** Available once at least one business field is on.

Normally, customers see an **I am purchasing as a business** toggle at checkout that reveals these fields. With **B2B Only Mode** on, the toggle is hidden and the business fields are always shown.

### 3. Billing Address

This section allows you to define the address fields required for billing purposes.

* **Country**: Displays the country field. It is enabled and required by default.
* **State**: Displays the state/province field. It is enabled and required by default.
* **Street Address:** Displays the primary address line. It is enabled and required by default.
* **Apt, suite, unit:** Displays an optional second address line for apartment numbers or other details.
* **City**: Displays the city field. It is enabled and required by default.
* **Post Code**: Displays the postal/zip code field. It is enabled and required by default.
* **Phone:** Off by default. Turn it on to collect the customer's phone number, and tick **Required** if you need it.

    ![Screenshot of Checkout Fields billing address settings](/images/settings-configuration/checkout-field/checkout-fields.webp)

### 4. Shipping Address

This section lets you configure the fields for the shipping address, which is crucial for physical products.

* **Full Name**: A system-required field to identify the recipient of the order.
* **Country**: Displays the country field for shipping.
* **State**: Displays the state/province field for shipping.
* **Street Address:** Displays the primary shipping address line.
* **Apt, suite, unit:** Displays an optional second shipping address line.
* **City**: Displays the city field for shipping.
* **Post Code**: Displays the postal/zip code field for shipping.
* **Phone:** Off by default. Turn it on to collect the recipient's phone number for delivery, and tick **Required** if you need it.

   ![Screenshot of Checkout Fields shipping address settings](/images/settings-configuration/checkout-field/shipping-address.webp)

### 5. Agree Terms

This section allows you to include legal agreements at checkout.

* **Agree Terms and Conditions:** Use the toggle to display a terms agreement checkbox on your checkout page.
* **Terms text:** Once the toggle is on, a text box lets you write the wording shown next to the checkbox. If you leave it empty, customers see "I agree to the terms and conditions."
* **Required:** If enabled, you can make this mandatory so customers must agree before completing their purchase.


## Saving Your Settings

After configuring the checkout fields, click the **Save** button at the bottom right of the screen to apply your changes.

## Important: Toggle vs. Required

Always understand the two options available for most fields:

* **Toggle Switch**: Use this to make a field visible or **hidden** on your checkout page.
* **Required Checkbox**: If a field is toggled on, checking this box forces the customer to fill it out before completing their purchase. If unchecked, the field is **optional**.
