# Appearance Settings

The **Appearance** tab lets you control the colors of your FluentCart storefront without writing any CSS. Pick whether the shop, product pages, cart, and checkout keep FluentCart's built-in colors, borrow the palette of your active WordPress theme, or use colors you choose yourself, and watch a live preview update as you go.

## Accessing the Appearance Tab

1. From your WordPress dashboard, go to **FluentCart > Settings**.
2. In the left-hand menu, click **Store Settings**. The group expands.
3. Click **Appearance** to open the tab.

![Screenshot of the Appearance tab under Store Settings](/images/settings-configuration/appearance/appearance-tab.webp)

The screen has two halves. On the left, **Where colors come from** holds the three color sources and, when you choose to customize, the individual color pickers. On the right, the **Storefront preview** shows a mock product card, cart, and address form painted with whichever colors are currently selected, so you can judge a change before it touches the live store.

## Choosing Where Colors Come From

FluentCart's storefront styles are built on a small set of global colors. Every button, border, input, and panel across the shop, single product page, cart drawer, checkout, and customer dashboard reads from one of them, so changing a global here updates every page that uses it. The three cards at the top of the tab decide where those globals come from. Only one can be active at a time.

### 1. FluentCart's Own Colors

This is the default. The storefront keeps the colors FluentCart ships with, and nothing extra is written to your pages. Choose it when you are happy with the stock look, or when you want to undo any theming and return to a clean slate.

![Screenshot of the three color source cards with FluentCart's own colors selected](/images/settings-configuration/appearance/appearance-color-source.webp)

### 2. Inherit From the Active Theme

Select this card to rebuild the storefront palette from your active WordPress theme. FluentCart reads the colors the theme publishes, maps them onto the storefront's surfaces, text, accent, and button roles, and derives the in-between tones no theme declares on its own, such as hairlines, dividers, muted captions, hover tints, and placeholder text. Button text is chosen for contrast against the button color, so a pale brand color still produces readable buttons. If you later switch themes, the storefront follows the new theme automatically.

The card's description tells you how many palette colors your current theme provides. In the example below, Twenty Twenty-Five publishes seven, and the preview on the right immediately picks up the theme's black buttons and yellow accent.

![Screenshot of the Appearance tab with Inherit from the active theme selected and the preview showing the theme's colors](/images/settings-configuration/appearance/appearance-inherit-theme.webp)

::: info
Some themes, including Astra, Kadence, and GeneratePress, publish their palette as CSS variables rather than as fixed colors. FluentCart passes those straight through and your storefront renders them correctly, but the admin preview cannot resolve them, so it shows FluentCart's own colors in their place and tells you why. If a theme publishes nothing FluentCart can use, the storefront simply keeps its default colors.
:::

### 3. Customize

Select **Customize** to pick the colors yourself. The card expands to reveal twenty color pickers, grouped by what they control. Only the colors you actually set are written to the storefront; any picker you leave empty keeps FluentCart's default for that surface.

![Screenshot of the Customize card expanded with brand colors set and the preview updated to match](/images/settings-configuration/appearance/appearance-customize.webp)

The groups and what each color drives:

* **Text**
    * **Primary text:** Product titles, prices, and headings.
    * **Secondary text:** Descriptions, captions, and inactive navigation.
    * **Active text:** The selected step and active links in the checkout.
* **Backgrounds and borders**
    * **Primary background:** The brand color behind active states and selected controls.
    * **Secondary background:** The tinted panels behind the shop grid and checkout summary.
    * **Border:** Card outlines, input borders, and hairlines.
    * **Active border:** The outline on a selected variant or payment method.
    * **Secondary active border:** The softer active outline used inside the modal checkout.
    * **Divider:** The lighter rules between rows and sections.
    * **Card background:** The surface behind product cards and panels.
* **Buttons**
    * **Button background:** Place Order, Buy Now, and every primary action in the store.
    * **Button text:** The label color on those primary buttons.
    * **Secondary button background**, **Secondary button text**, **Secondary button border**, and **Secondary button hover:** Add to Cart and the other outlined buttons.
* **Form inputs**
    * **Input background**, **Input text**, **Placeholder text**, and **Disabled input background:** The fields on the checkout, address forms, and customer dashboard.

To set a color, click a picker's swatch to choose visually, or type a hex value such as `#00009F` directly into its text field. Either way the preview repaints as soon as the value is valid, so you can see a button or border change before saving. Click the **×** on a picker to clear that single color.

To start over, click the **Reset all colors** icon (the circular arrow) at the top right of the picker list. It empties every picker, which is the same as never having set one. Like every other change on this tab, the reset takes effect when you save.

![Screenshot of the Reset all colors button on the Customize card](/images/settings-configuration/appearance/appearance-reset-colors.webp)

## Saving Your Settings

Click **Save** at the top right of the screen to apply your changes. The storefront picks up the new colors on the next page load, including the modal checkout, and the settings persist until you change them again.

![Screenshot of the Save button on the Appearance tab](/images/settings-configuration/appearance/appearance-save.webp)

Here is the same product page before and after switching to **Customize** with a brand blue set for the button background, primary background, active text, and active border:

![Screenshot comparing a product page with FluentCart's own colors and with custom brand colors applied](/images/settings-configuration/appearance/appearance-storefront-before-after.webp)

::: info
The Appearance tab covers the global colors that the rest of the storefront cascades from. If you need to restyle a single element, or adjust spacing, radius, or typography, you can still override FluentCart's [CSS variables](/guide/customization-and-themes/advanced-customization-using-css) directly. Anything you set on this tab is written to the page as those same variables, so your custom CSS can build on top of it.
:::

When you accept card payments through the embedded [Stripe](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) checkout, its payment form picks up your input background, input text, and primary background colors too, so it doesn't look out of place next to the rest of your branded checkout.

Your storefront now reflects the colors you chose, and every page that shares them stays consistent.
