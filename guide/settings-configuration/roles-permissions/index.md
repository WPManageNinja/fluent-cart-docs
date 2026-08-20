# Roles & Permissions

The **Roles & Permissions** feature in FluentCart allows you to define and manage different user roles within your store's backend. This helps control who can access certain features and perform specific actions, ensuring security and proper task delegation among your team.

## Accessing Roles & Permissions

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2.  Click on the **"Roles And Permissions"** tab.

## Understanding Roles and Permissions

Here displays a list of users and their assigned FluentCart roles.

### 1. Roles List Table

The table provides an overview of existing role assignments:

* **User:** Displays the user's name and email address.
* **Role Title:** The name of the FluentCart role assigned to the user.
* **Roles:** A brief description of the permissions granted by that role.
* **Action Icons:** On the far right of each row, you'll see icons that let you quickly "edit" or "delete" roles & permission details.

    ![Screenshot of Roles and Permissions Tab](/images/settings-configuration/roles-permissions/roles-permissions-tab.webp)

### 2. Adding New Roles

You can assign existing WordPress users to predefined **FluentCart** roles directly from this display. 

* To add a new role, click the **"+ Add Role"** button at the top right of the screen. This will open a modal to [add a new role](/guide/settings-configuration/roles-permissions/adding-new-roles/index).

## Export Permissions

Exporting data is controlled separately from viewing it, so a staff member who can read your customer list cannot necessarily download a copy of it.

Four permissions govern this:

* **Export Orders**
* **Export Customers**
* **Export Subscriptions**
* **Export Licenses**

Grant them per role like any other permission. When a role lacks the matching permission, the **Export** button doesn't appear on that screen, and the export request is refused even if it's issued directly — so removing the permission removes the capability, not just the button.

::: tip Worth withholding by default
An order or customer export is a complete copy of your customer records — names, emails, billing addresses. Grant export permissions only to the roles that genuinely need them, even when those roles can already view the data on screen. Viewing a record at a time and downloading the entire database are very different levels of exposure.
:::

See [Exporting Your Store Data](/guide/store-management/exporting-data) for how the export itself works.

Managing roles and permissions this way helps make sure every team member has the right access to your FluentCart store.
