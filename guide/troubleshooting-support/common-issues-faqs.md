 # Common Issues & FAQs

This section provides solutions to frequently encountered issues and answers to common questions about FluentCart. If you're experiencing a problem, check this guide first before reaching out for direct support.

## Frequently Asked Questions


### Q: Why are my PayPal/Stripe payments not going through in Live mode?

**A:**
* **Check API Credentials:** Ensure you have entered your **Live credentials** (API keys/secrets) correctly in **FluentCart Pro > Settings > Payment Settings > [Stripe Settings](/guide/payments-checkout/connecting-payment-gateways/stripe-settings)** or **[PayPal Settings](/guide/payments-checkout/connecting-payment-gateways/paypal-settings)**.
* **Switch Order Mode to 'Live':** Make sure your FluentCart store's "Order Mode" is set to "Live" (this setting is typically found under **FluentCart Pro > Settings > Store Settings > Store Setup**). Payments will not process in Live mode if your store is still configured for "Test" mode.
* **Configure Webhooks (for Stripe):** For Stripe, it's critical that you have correctly configured the Webhook URL in your Stripe Dashboard as instructed in the [Stripe Settings](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) documentation.

### Q: My digital product downloads are not working, or files are missing.

**A:**
* **Verify Downloadable Assets:** In the **Product Edit** screen for your digital product, go to the "Downloadable Asset(s)" section and confirm that the correct files are uploaded or linked.
* **Check Storage Settings:** Ensure your [Storage Settings](/guide/settings-configuration/storage-settings) (Local or S3) are correctly configured and accessible. If using S3, verify your bucket credentials and permissions.
* **File Permissions:** On your server (for local storage), ensure the directories containing your digital files have the correct read/write permissions.

### Q: A customer can't access their license key or software updates.

**A:**
* **Check Order Status:** Ensure the customer's order for the licensed product is marked as "Completed" and fully paid.
* **Verify License Status:** On the [License Details screen](/guide/product-types-creation/creating-digital-products-with-licenses#product-specific-license-settings) for that customer's license, ensure its status is "Active" and the "Activation Limit" has not been exceeded.
* **License Key Activation:** Guide the customer to activate their license key on their site if it's for a WordPress plugin, as outlined in the plugin's instructions.
* **FluentCart License Activation:** Ensure *your* FluentCart plugin license is active in [FluentCart Pro > Settings > Licensing](/guide/settings-configuration/licensing-settings) to receive updates.

## General Troubleshooting Tips

* **Check System Status:** Look for a "System Status" or "Health Check" tool within FluentCart (if available) or WordPress that can provide diagnostic information.
* **Deactivate Conflicts:** Temporarily deactivate other plugins one by one to check for conflicts that might be causing unexpected behavior.
* **Review Logs:** Utilize the [Understanding Logs](/guide/troubleshooting-support/understanding-logs) guide to check for any related "Warning" or "Failed" entries.

