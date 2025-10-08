# Checkout Fields Settings

The Checkout Fields screen in **FluentCart** allows you to customize the form customers fill out when they complete a purchase. Here, you can **enable**, **disable**, or make fields **required** to ensure you collect all necessary customer and order details efficiently.

## Accessing Checkout Fields Settings

Go to your **WordPress dashboard**, then navigate to **FluentCart > Store Settings** in the side menu, and select the **Checkout Fields** section.

## Configuration Options

The settings are organized into three sections, allowing you to control which fields appear during the checkout process.

### 1. Basic Info

This section includes essential fields for customer identification.

* **Full Name**: A system-required field to capture the customer’s name. This field cannot be disabled.
* **Email Address**: A system-required field used for order confirmations and communication. This field cannot be disabled.
* **Company**: An optional field for collecting a customer's company name. You can enable it with the toggle and make it mandatory by checking the **Required** box.

### 2. Billing Address

This section allows you to define the address fields required for billing purposes.

* **Country**: Displays the country field. It is enabled and required by default.
* **State**: Displays the state/province field. It is enabled and required by default.
* **Address Line 1**: Displays the primary address line. It is enabled and required by default.
* **Address Line 2**: Displays an optional second address line for apartment numbers or other details.
* **City**: Displays the city field. It is enabled and required by default.
* **Post Code**: Displays the postal/zip code field. It is enabled and required by default.
* **Phone**: An optional field to collect the customer’s phone number.

    ![Screenshot of Additional Info Settings Tab](/images/settings-configuration/checkout-field/checkout-fields.webp)

### 3. Shipping Address

This section lets you configure the fields for the shipping address, which is crucial for physical products.

* **Full Name**: A system-required field to identify the recipient of the order.
* **Country**: Displays the country field for shipping.
* **State**: Displays the state/province field for shipping.
* **Address Line 1**: Displays the primary shipping address line.
* **Address Line 2**: Displays an optional second shipping address line.
* **City**: Displays the city field for shipping.
* **Post Code**: Displays the postal/zip code field for shipping.
* **Phone**: An optional field to collect the recipient’s phone number for delivery purposes.

   ![Screenshot of Additional Info Settings Tab](/images/settings-configuration/checkout-field/shipping-address.webp)

## Saving Your Settings

After configuring the checkout fields, click the **Save** button at the bottom right of the screen to apply your changes.

## Important: Toggle vs. Required

Always understand the two options available for most fields:

* **Toggle Switch**: Use this to make a field visible or **hidden** on your checkout page.
* **Required Checkbox**: If a field is toggled on, checking this box forces the customer to fill it out before completing their purchase. If unchecked, the field is **optional**.
```