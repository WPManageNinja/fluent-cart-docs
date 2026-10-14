# Adding a Currency Switcher

Once you sell in more than one currency, your customers need an easy way to pick the one they want. The currency switcher gives them a small button, in your menu or anywhere on a page, that opens a list of your currencies and reloads the page with prices in the one they choose.

::: info
Multi Currency, and with it the currency switcher, is part of **FluentCart Pro** and is currently in **Beta**. Without Pro, the switcher does not appear and your store stays in its base currency. The Currency Switcher block also shows a Pro notice in the editor until Pro is active.
:::

The switcher looks like this:

* **The button** shows the currency in use: its flag, its code, and its sign, for example 🇺🇸 **USD $**, 🇧🇩 **BDT ৳**, or 🇦🇪 **AED د.إ**.
* **The list** opens when a customer clicks the button. Each currency shows its flag and full name, for example 🇬🇧 **British Pound (GBP)**, and the currency in use is ticked.
* **Choosing a currency** reloads the page with every price in that currency.

![Screenshot of a menu item showing the US flag with USD $](/images/customization-and-themes/currency-switcher/currency-switcher-menu-closed.webp)

![Screenshot of the currency list open with USD ticked and GBP, EUR, and BDT below it](/images/customization-and-themes/currency-switcher/currency-switcher-menu-open.webp)

## Before You Start

Before adding a switcher, make sure you have:

1. **FluentCart Pro** installed and active.
2. **Multi-currency turned on**, with **at least two currencies** offered. Go to **FluentCart > Settings > Multi Currency**, turn it on, and add the currencies you want to sell in. See [Multi Currency Settings](/guide/settings-configuration/multi-currency-settings) for the full setup.

::: info
If multi-currency is off, or only one currency is offered, the switcher hides itself. You don't need to remove it from your menu or pages.
:::

## Option 1: Classic Themes (Appearance > Menus)

Use this if your theme has **Appearance > Menus** in the dashboard. Most classic themes do, including Astra, GeneratePress, OceanWP, and Kadence.

### Step 1: Turn On the CSS Classes Field

1. Go to **Appearance > Menus**.
2. Click **Screen Options** at the top right of the page.
3. Tick **CSS Classes**.
4. Click **Screen Options** again to close it.

You only need to do this once.

### Step 2: Add the Menu Item

1. Under **Select a menu to edit**, choose the menu shown in your header and click **Select**.
2. On the left, open **Custom Links**.
3. Fill in the fields:
    * **URL:** `#`
    * **Link Text:** `Currency`. Any text works, because it is replaced by the flag and currency, for example 🇺🇸 **USD $**.
4. Click **Add to Menu**.

### Step 3: Make It a Currency Switcher

1. In the menu on the right, click the arrow next to your new **Currency** item to open it.
2. In **CSS Classes (optional)**, type exactly:

    ```
    fct-currency-switcher-toggle
    ```

3. Click **Save Menu**.

### Step 4: Check the Menu Location

At the bottom of the page, under **Menu Settings > Display location**, make sure the menu is ticked for your header location, often called **Primary Menu**.

Many themes use a separate menu on mobile. Astra calls it **Off-Canvas Menu** or **Mobile Menu**. Tick that location too, or add the same **Currency** item to your mobile menu, so phone visitors get the switcher as well.

Click **Save Menu**, then visit your site.

## Option 2: Block Themes (Site Editor)

Use this if your theme uses **Appearance > Editor** instead of **Appearance > Menus**, for example Twenty Twenty-Four or Twenty Twenty-Five.

1. Go to **Appearance > Editor** and open your **Header**.
2. Click the **Navigation** block, then click **+** to add an item and choose **Custom Link**.
3. Type `#` as the link and `Currency` as the text.
4. With the new item selected, open the **Settings** sidebar on the right, then open **Advanced**.
5. In **Additional CSS class(es)**, type:

    ```
    fct-currency-switcher-toggle
    ```

6. Click **Save**.

::: info
Some WordPress versions don't show **Additional CSS class(es)** for a menu link. If you don't see it, use the Button approach in Option 3 instead.
:::

## Option 3: Page Builders and Buttons

Any button or link can become a currency switcher. This works in Elementor, Bricks, Divi, and the WordPress **Buttons** block.

1. Add a **Button** (or a menu item in your builder's own menu widget).
2. Set its link to `#`.
3. Find the **CSS Classes** field, usually under **Advanced**, and type:

    ```
    fct-currency-switcher-toggle
    ```

4. Save and view the page.

## Option 4: Shortcode or Block

Use this when you want a ready-made switcher button instead of a menu item, for example in a page, a sidebar, or a header area that accepts shortcodes, such as Astra's **Header Builder > HTML** element.

Both the block and the shortcode show a small button with the flag and currency, for example 🇺🇸 **USD $**, and open the same currency list as the menu item. They also share the same options, for the button and for the list it opens.

### The Currency Switcher Block

In the block editor, click the **+** inserter, search for **Currency Switcher**, and add the block.

![Screenshot of the block inserter with the Currency Switcher block highlighted](/images/customization-and-themes/currency-switcher/currency-switcher-block-inserter.webp)

The block's preview in the editor shows the button as it will look on your site. Select the block to open its settings in the right-hand sidebar:

* **Switcher Settings:** Controls the button.
* **Dropdown List:** Controls the list that opens when a customer clicks the button.

![Screenshot of the Currency Switcher block selected in the editor with the Switcher Settings panel open](/images/customization-and-themes/currency-switcher/currency-switcher-block-settings.webp)

Each panel has the same four settings: **Display**, **Show sign**, **Show flag**, and **Flag position**.

![Screenshot of the Switcher Settings and Dropdown List panels](/images/customization-and-themes/currency-switcher/currency-switcher-block-dropdown-list.webp)

* **Display:** What each label shows. See the table below.
* **Show sign:** Adds or removes the currency sign, for example **GBP £** instead of **GBP**.
* **Show flag:** Shows or hides the country flag.
* **Flag position:** Puts the flag on the **Left** or **Right** of the label. This setting appears only while **Show flag** is on.

#### Display Choices

| Display | Button shows | List row shows | Shortcode value |
| --- | --- | --- | --- |
| **Name and code** | British Pound (GBP) | British Pound (GBP) | `name_code` |
| **Currency name** | British Pound | British Pound | `name` |
| **Code** | GBP | GBP | `code` |
| **Sign only** | £ | £ | `symbol` |
| **Flag only** | 🇬🇧 | 🇬🇧 | `flag` |

The defaults are **Code** with the sign for the button (**GBP £**) and **Name and code** for the list.

With **Sign only** and **Flag only**, the label is the sign or the flag by itself, so the settings that no longer apply are hidden. **Flag only** hides **Show sign**, **Show flag**, and **Flag position**. **Sign only** hides **Show sign**. Screen readers still read the currency's name for a flag-only label. A currency with no flag shows its code on the button, or its sign in a small box in the list.

### The Shortcode

Paste `[fluent_cart_currency_switcher]` where you want the button. With nothing added, it shows the default button and list. Add attributes to change them. The ones starting with `list_` control the list instead of the button.

| You want | Button | List |
| --- | --- | --- |
| Choose what is shown | `display="name_code"`, `"name"`, `"code"`, `"symbol"`, or `"flag"` | `list_display="name_code"`, `"name"`, `"code"`, `"symbol"`, or `"flag"` |
| Add the sign, for example **British Pound £** | `symbol="yes"` | `list_symbol="yes"` |
| Remove the sign, for example **GBP** instead of **GBP £** | `symbol="no"` | The list has no sign unless you add it |
| Hide the flag | `flag="no"` | `list_flag="no"` |
| Put the flag after the text, for example **GBP £** 🇬🇧 | `flag_position="right"` | `list_flag_position="right"` |

Write the values in lowercase, as shown. A value the switcher doesn't recognise, such as `display="Flag"`, is ignored and the default is used. The sign setting doesn't apply to `symbol` and `flag`, and the flag settings don't apply to `flag`.

A few combinations to start from:

| Looks like | Shortcode |
| --- | --- |
| A flag that opens a list of flags and names, like a language switcher | `[fluent_cart_currency_switcher display="flag" list_display="name"]` |
| **GBP** opening a list of codes without flags | `[fluent_cart_currency_switcher display="code" symbol="no" flag="no" list_display="code" list_flag="no"]` |
| A flag that opens a list of flags only | `[fluent_cart_currency_switcher display="flag" list_display="flag"]` |
| **GBP £** with the flag after it | `[fluent_cart_currency_switcher flag_position="right"]` |

![Screenshot of four switcher buttons: the default, flag only, code only, and the flag on the right](/images/customization-and-themes/currency-switcher/currency-switcher-buttons.webp)

The four buttons above are the default switcher, a flag-only button, a code-only button, and a button with the flag on the right. The second one opens a list of flags and currency names:

![Screenshot of the flag-only button opening a list of flags and currency names with the current currency ticked](/images/customization-and-themes/currency-switcher/currency-switcher-list-names.webp)

::: info
The list options apply only when the list is opened from that switcher. A menu item always opens the default list.
:::

## Show the Currency Somewhere Else

You can show the shopper's current currency anywhere, for example next to your prices or in a top bar. Add a **Custom HTML** block (or your builder's HTML widget) and paste one of these:

| You want to show | Paste this |
| --- | --- |
| Code and sign, for example `USD $` | `<span class="fct-current-currency"></span>` |
| Code only, for example `USD` | `<span class="fct-current-currency" data-currency-display="code"></span>` |
| Sign only, for example `$` | `<span class="fct-current-currency" data-currency-display="symbol"></span>` |
| Full name, for example `United States Dollar` | `<span class="fct-current-currency" data-currency-display="name"></span>` |

To add a button that says "Pay in $" and opens the switcher, paste this:

```html
<button type="button" data-fluent-cart-currency-switcher>
  Pay in <span data-fluent-cart-current-currency data-currency-display="symbol"></span>
</button>
```

### Hide the Flag on a Button

Buttons and links you add yourself show the flag in front of the currency, just like the menu item. To leave the flag out, add `data-currency-flag="hide"`:

```html
<button type="button" data-fluent-cart-currency-switcher data-currency-flag="hide">Currency</button>
```

This works on buttons and HTML you paste in. A menu item added through **Appearance > Menus** always shows the flag, because menu items only accept CSS classes.

The flag appears only in the switcher's own label. The `fct-current-currency` snippets above show text only, so the "Pay in $" button shows no flag.

## How the Switcher Behaves

* **Colors:** The list follows your store's styling from **FluentCart > Settings > Appearance**, so it matches the rest of your store. The ticked currency uses your store's accent color. If your Appearance setting leaves colors to your theme, the list uses plain light or dark colors that stay readable.
* **Flags:** The flags come from the same flag service FluentCart uses on its tax settings screens (flagcdn.com). A few currencies are shared by several countries and have no single flag: the Central and West African CFA francs (XAF, XOF), the East Caribbean dollar (XCD), and the CFP franc (XPF). These show their sign in a small box instead.
* **Order:** Your store's main currency is always first. The other currencies follow the order in **Settings > Multi Currency**.
* **Phones:** The list stays on the screen and opens under the menu item, even inside a mobile menu.
* **Keyboard:** Press **Enter** or **Space** to open the list, use the arrow keys to move through the currencies, and press **Esc** to close it.

## Troubleshooting

**The menu item still says "Currency".**
Check that the class is typed exactly as `fct-currency-switcher-toggle`, with no spaces or full stop. Also check that multi-currency is on with at least two currencies. If you use a caching plugin, clear its cache.

**The menu item disappeared.**
This is on purpose. The switcher hides itself when multi-currency is off or only one currency is offered. Add a second currency and it comes back.

**It works on desktop but not on my phone.**
Your theme probably uses a separate mobile menu. Add the same **Currency** item to that menu (see Step 4 of Option 1).

**Prices don't change after picking a currency.**
FluentCart marks pages as not cacheable for visitors browsing in a non-base currency. If a page caching plugin or your host's cache still serves a saved copy, ask it to skip caching for visitors who have the `fct_currency` cookie. Otherwise a visitor can be shown a saved page in another currency.

**A flag looks wrong or is missing.**
Each flag is chosen from the currency code, so a currency shared by several countries shows its sign instead of a flag. See **How the Switcher Behaves** above.

Your customers can now switch currencies from anywhere you place the switcher.
