# Advanced Customization with CSS Variables

FluentCart provides a powerful set of CSS variables that let you customize the appearance of your store without writing complex CSS or modifying theme files. Whether you want to change button colors, adjust text styles, or completely transform the look of your checkout, CSS variables make it easy to match your brand.

## Quick Start

The fastest way to customize your store is by using the WordPress Customizer:

1. Go to **Appearance → Customize → Additional CSS**
2. Add your custom CSS variables
3. Click **Publish**

For example, to change all primary buttons to blue:

```css
:root {
  --fct-btn-bg-color: #0066cc;
}
```

That's it! All buttons across your store will now use this color.

## How CSS Variables Work

CSS variables (also called custom properties) are values you can define once and reuse throughout your site. FluentCart uses variables for colors, spacing, borders, and more. By overriding these variables, you can customize your store's appearance without touching the original code.

### Where to Add CSS Variables

You can add CSS variables in three ways:

1. **WordPress Customizer** (Recommended): Appearance → Customize → Additional CSS
2. **Theme CSS File**: Add to your theme's `style.css`
3. **Page Builders**: Use the Custom CSS section in Elementor, Bricks, or other builders

## Global Color Variables

These variables affect multiple pages at once, making them perfect for store-wide changes.

### Button Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-btn-bg-color` | `#253241` | Primary button background |
| `--fct-btn-text-color` | `#ffffff` | Primary button text |
| `--fct-btn-border-color` | `#253241` | Primary button border |

### Text Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-primary-text-color` | `#2F3448` | Headings and important text |
| `--fct-secondary-text-color` | `#565865` | Descriptions and body text |

### Background Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-border-color` | `#d6dae1` | Input borders and dividers |
| `--fct-primary-bg-color` | `#4f46e5` | Primary backgrounds |
| `--fct-secondary-bg-color` | `#f9fafb` | Secondary backgrounds |

### Input Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-input-bg-color` | `#ffffff` | Input background |
| `--fct-input-text-color` | `#2F3448` | Input text |
| `--fct-input-border-color` | `#d6dae1` | Input border |

**Example: Making all buttons blue**

```css
:root {
  --fct-btn-bg-color: #0066cc;
  --fct-btn-border-color: #0066cc;
}
```

## Checkout Page Customization

The checkout page has its own set of variables for fine-tuned control.

### Checkout Buttons

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-checkout-btn-bg-color` | `--fct-checkout-primary-bg-color` | Place Order button |
| `--fct-checkout-btn-text-color` | `#ffffff` | Button text |

### Checkout Form Elements

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-checkout-input-bg-color` | `#ffffff` | Input background |
| `--fct-checkout-input-text-color` | `theme('colors.system.dark')` | Input text |
| `--fct-checkout-input-border-color` | `--fct-checkout-border-color` | Input border |

### Checkout Sections

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-checkout-summary-bg-color` | `#ffffff` | Order summary background |
| `--fct-checkout-payment-method-bg-color` | `#ffffff` | Payment methods background |
| `--fct-checkout-shipping-methods-bg` | `#ffffff` | Shipping methods background |

**Example: Green checkout buttons**

```css
.fct-checkout {
  --fct-checkout-btn-bg-color: #28a745;
}
```

## Product Card Customization

Product cards are used in the shop page, related products, and product grids.

### Card Styling

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-card-bg` | `#ffffff` | Card background |
| `--fct-card-border-color` | `#d6dae1` | Card border |

### Card Text

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-card-primary-text-color` | `#2F3448` | Product title |
| `--fct-card-text-color` | `#565865` | Product description |
| `--fct-heading-color` | `#2F3448` | Card headings |

### Card Buttons

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-card-btn-bg-color` | `#253241` | View Options button |
| `--fct-card-btn-text-color` | `#ffffff` | Button text |

**Example: Custom product card style**

```css
.fct-product-card {
  --fct-card-bg: #f9f9f9;
  --fct-card-border-color: #e0e0e0;
  --fct-card-btn-bg-color: #0066cc;
}
```

## Product Buttons

FluentCart uses different button styles for "Add to Cart" and "Buy Now" actions.

### Add to Cart Button

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-add-to-cart-btn-bg-color` | `#ffffff` | Button background |
| `--fct-add-to-cart-btn-text-color` | `#2f3448` | Button text |
| `--fct-add-to-cart-btn-hover-bg-color` | `#f5f6f7` | Hover background |
| `--fct-add-to-cart-btn-border-color` | `#d6dae1` | Button border |

### Buy Now Button

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-direct-btn-bg-color` | `#253241` | Button background |
| `--fct-direct-btn-text-color` | `#ffffff` | Button text |

**Example: Custom button colors**

```css
:root {
  --fct-add-to-cart-btn-bg-color: #f0f0f0;
  --fct-add-to-cart-btn-text-color: #333;
  --fct-direct-btn-bg-color: #0066cc;
}
```

## Cart Drawer Customization

The cart drawer (slide-out cart) can be customized independently.

### Drawer Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-cart-drawer-bg` | `#ffffff` | Drawer background |
| `--fct-cart-drawer-border-color` | `#d6dae1` | Drawer border |
| `--fct-cart-drawer-primary-text-color` | `#2F3448` | Primary text |
| `--fct-cart-drawer-secondary-text-color` | `#565865` | Secondary text |

### Drawer Buttons

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-cart-drawer-btn-bg-color` | `#253241` | Action button |
| `--fct-cart-drawer-btn-text-color` | `#ffffff` | Button text |
| `--fct-cart-drawer-open-btn-bg-color` | `#253241` | Cart icon button |
| `--fct-view-cart-btn-bg-color` | `#253241` | View Cart button |

### Cart Badge

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-cart-drawer-badge-bg-color` | `#ef4444` | Badge background |
| `--fct-cart-drawer-badge-text-color` | `#ffffff` | Badge text |

**Example: Blue cart drawer**

```css
.fct-cart-drawer {
  --fct-cart-drawer-btn-bg-color: #0066cc;
  --fct-cart-drawer-badge-bg-color: #ff6b6b;
}
```

## Customer Dashboard Customization

The customer dashboard (account page) has its own color scheme.

### Dashboard Text

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-customer-dashboard-primary-text-color` | `#2F3448` | Primary text |
| `--fct-customer-dashboard-secondary-text-color` | `#565865` | Secondary text |
| `--fct-customer-dashboard-title-color` | `#1f2937` | Page title |
| `--fct-customer-dashboard-sub-title-color` | `#6b7280` | Section title |

### Dashboard Navigation

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-customer-dashboard-nav-text-color` | `#4b5563` | Nav item text |
| `--fct-customer-dashboard-nav-active-text-color` | `#4f46e5` | Active nav text |
| `--fct-customer-dashboard-nav-active-bg-color` | `#eef2ff` | Active nav background |
| `--fct-customer-dashboard-nav-active-bar-color` | `#4f46e5` | Active nav indicator |

### Dashboard Buttons

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-customer-dashboard-btn-bg-color` | `#4f46e5` | Action button |
| `--fct-customer-dashboard-btn-text-color` | `#ffffff` | Button text |
| `--fct-customer-dashboard-logout-btn-bg-color` | `#ef4444` | Logout button |

**Example: Blue dashboard theme**

```css
.fct-customer-dashboard {
  --fct-customer-dashboard-nav-active-bg-color: #0066cc;
  --fct-customer-dashboard-btn-bg-color: #0066cc;
}
```

## Shop Page Customization

Customize the main shop page appearance.

### Shop Text Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-shop-primary-text-color` | `#2F3448` | Primary text |
| `--fct-shop-secondary-text-color` | `#565865` | Secondary text |

### Shop Backgrounds

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-shop-primary-bg-color` | `#ffffff` | Primary background |
| `--fct-shop-secondary-bg-color` | `#f9fafb` | Secondary background |

### Shop Buttons

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-shop-btn-bg-color` | `#253241` | Filter/Sort buttons |
| `--fct-shop-btn-text-color` | `#ffffff` | Button text |

### Shop Pagination

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-shop-paginator-bg` | `#ffffff` | Pagination background |
| `--fct-shop-paginator-items-color` | `#4b5563` | Page number color |
| `--fct-shop-paginator-items-active-bg` | `#4f46e5` | Active page background |
| `--fct-shop-paginator-items-active-color` | `#ffffff` | Active page text |
| `--fct-shop-paginator-items-hover-bg` | `#f3f4f6` | Hover background |

**Example: Custom shop theme**

```css
.fct-shop-app {
  --fct-shop-btn-bg-color: #0066cc;
  --fct-shop-paginator-items-active-bg: #0066cc;
}
```

## Single Product Page Customization

Customize individual product pages.

### Product Page Text

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-single-product-primary-text-color` | `theme('colors.system.dark')` | Primary text |
| `--fct-single-product-secondary-text-color` | `theme('colors.system.mid')` | Secondary text |

### Product Page Borders

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-single-product-border-color` | `theme('colors.gray.outline')` | Element borders |
| `--fct-single-product-active-border-color` | `theme('colors.primary.500')` | Active borders |

### Quantity Selector

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fct-single-product-qty-bg` | `#eaecf0` | Quantity input background |
| `--fct-single-product-qty-text-color` | `#2F3448` | Quantity text |

**Example: Custom product page**

```css
.fct-single-product-page {
  --fct-single-product-qty-bg: #f0f0f0;
  --fct-single-product-border-color: #e0e0e0;
}
```

## Common Customization Examples

Here are some frequently requested customizations:

### Change All Buttons to Blue

```css
:root {
  --fct-btn-bg-color: #0066cc;
  --fct-btn-border-color: #0066cc;
}
```

### Update Product Card Style

```css
.fct-product-card {
  --fct-card-bg: #fafafa;
  --fct-card-border-color: #e0e0e0;
  --fct-card-btn-bg-color: #0066cc;
}
```

### Style the Checkout Page

```css
.fct-checkout {
  --fct-checkout-btn-bg-color: #28a745;
  --fct-checkout-primary-bg-color: #28a745;
}
```

### Customize the Cart Drawer

```css
.fct-cart-drawer {
  --fct-cart-drawer-btn-bg-color: #0066cc;
  --fct-cart-drawer-badge-bg-color: #ff6b6b;
}
```

### Update the Customer Dashboard

```css
.fct-customer-dashboard {
  --fct-customer-dashboard-nav-active-bg-color: #0066cc;
  --fct-customer-dashboard-nav-active-text-color: #ffffff;
}
```

## Tips for Best Results

1. **Start Global**: Use `:root` for store-wide changes before targeting specific pages
2. **Be Specific**: Target specific pages (like `.fct-checkout`) when you need granular control
3. **Test Thoroughly**: Check multiple pages after making changes to ensure consistency
4. **Use Browser DevTools**: Inspect elements to discover which variables affect specific elements
5. **Keep It Simple**: Only override the variables you need—most have sensible defaults

## Important Notes

- All CSS variables have fallback values built-in, so your store will still work if a variable is missing
- Variables can inherit from parent variables automatically
- Third-party library variables (like Swiper or Toastify) are not included in this guide
- For the most up-to-date list of variables, check the `/resources/public/` directory in FluentCart

## Getting Help

If you need help with CSS variables or encounter issues:

1. Check the [Troubleshooting & Support](/guide/troubleshooting-support/common-issues-faqs) section
2. Use browser DevTools to inspect elements and identify variables
3. Visit our [support forums](https://fluentcart.com/support) for community help
4. Contact our support team for advanced customization assistance

> **Note**: CSS customizations are theme-independent and will persist even if you switch themes, as long as FluentCart remains active.
