# Compliance Settings

The **Compliance** tab holds settings that affect how customer accounts behave for privacy and security purposes. It controls whether customers must confirm their email address before using their account, and whether a new customer is signed in automatically the moment their account is created.

## Accessing Compliance Settings

To open the compliance settings:

1. From your WordPress dashboard, navigate to **FluentCart > Settings**.
2. Select the **Compliance** tab from the left-hand sidebar.

![Screenshot of the Compliance tab in FluentCart settings](/images/settings-configuration/compliance-settings/compliance-settings.webp)

## Configuring Compliance Settings

### 1. Customer Email Verification

This setting decides whether customers have to prove they own their email address before FluentCart lets them into their account data.

![Screenshot of the Customer email verification options](/images/settings-configuration/compliance-settings/compliance-email-verification.webp)

* **Required:** Customers must confirm their email address before they can open their customer portal or use their saved checkout addresses. Confirming, through an emailed link or a password reset, also brings in any purchases they made earlier as a guest with that address.
* **Not required:** This is the default. Customers skip the confirmation step, and no confirmation emails are sent. New checkout accounts are linked to their purchases immediately, and earlier guest purchases with the same email attach automatically when the customer opens their dashboard.

::: info
Turning verification on is the stricter choice, since it stops someone from reaching the order history behind an email address they don't control. Leave it off if you prefer a smoother experience for returning customers.
:::

### 2. Login After Account Creation

FluentCart creates a customer account either when someone registers directly or when a guest checkout completes and account creation is turned on. This setting decides what happens to that customer right after.

![Screenshot of the Login after account creation options](/images/settings-configuration/compliance-settings/compliance-login-after-account.webp)

* **Log in automatically:** This is the default. The customer is signed in immediately. After registering directly, they land on their profile page.
* **Let customers log in:** After registering directly, the customer sees a message telling them to check their email, set a password, and log in themselves before they can use the account.

::: info
Requiring a customer to set their own password before first login is a common compliance requirement, since it proves they, and not whoever happened to check out, control the account. If **Customer email verification** is set to **Required**, that confirmation still applies whichever login option you pick.
:::

## Saving Your Settings

After making changes, click the **Save** button at the top right of the page, or press **Cmd+S** (**Ctrl+S** on Windows).

Your store now follows your own rules for how customers confirm and access their accounts.
