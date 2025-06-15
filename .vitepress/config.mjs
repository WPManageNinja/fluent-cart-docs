export default {
  ignoreDeadLinks: true,
  title: ' ',
  titleTemplate: ':title - FluentCart Documentation',
  showingLastUpdated: true,
  description: 'Comprehensive documentation for FluentCart - your all-in-one e-commerce solution.',
  base: '/',
  themeConfig: {
    outline: [2, 3],
    nav: [
      { text: 'User Docs', link: '/guide/' },
      { text: 'Dev Docs', link: '/developer/' },
      { text: 'Website', link: 'https://fluentcart.com', target: '_blank', rel: 'noopener' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: true,
          items: [
            { text: 'Installation & Activation', link: '/guide/getting-started/installation-activation' },
            { text: 'Initial Setup Wizard', link: '/guide/getting-started/initial-setup-wizard' },
            { text: 'Admin Dashboard', link: '/guide/getting-started/dashboard-overview' }
          ]
        },
        {
          text: 'Store Management',
          collapsed: true,
          items: [
            { text: 'Store Management Overview', link: '/guide/store-management/' },
            {
              text: 'Orders Management',
              link: '/guide/store-management/orders-management/', // Link to its index.md
              items: [
                { text: 'Viewing & Filtering Orders', link: '/guide/store-management/orders-management/viewing-filtering-orders' },
                { text: 'Creating New Orders', link: '/guide/store-management/orders-management/creating-new-orders' },
                { text: 'Order Details Overview', link: '/guide/store-management/orders-management/order-details-overview' },
                { text: 'Editing Existing Orders', link: '/guide/store-management/orders-management/editing-existing-orders' },
                { text: 'Processing Refunds', link: '/guide/store-management/orders-management/processing-refunds' },
                { text: 'Collecting Payments for Modified Orders', link: '/guide/store-management/orders-management/collecting-payments-modified-orders' },
                { text: 'Changing Order Statuses', link: '/guide/store-management/orders-management/changing-order-statuses' }
              ]
            },
            {
              text: 'Customers Management',
              link: '/guide/store-management/customers-management/', // Link to its index.md
              items: [
                { text: 'Viewing & Searching Customers', link: '/guide/store-management/customers-management/viewing-searching-customers' },
                { text: 'Using Advanced Customer Filters', link: '/guide/store-management/customers-management/using-advanced-customer-filters' },
                { text: 'Customer Details Overview', link: '/guide/store-management/customers-management/customer-details-overview' }
              ]
            },
            { text: 'Inventory Management', link: '/guide/store-management/inventory-management' }
          ]
        },
        {
          text: 'Product Types & Creation',
          collapsed: true,
          items: [
            {
              text: 'Creating & Managing Product Categories',
              link: '/guide/product-types-creation/creating-managing-product-categories/', // Link to its index.md
            },
            {
              text: 'Creating & Managing Product Types',
              link: '/guide/product-types-creation/creating-managing-product-types/', // Link to its index.md
            },
            { text: 'Creating Physical Products', link: '/guide/product-types-creation/creating-physical-products' },
            { text: 'Creating Digital Products', link: '/guide/product-types-creation/creating-digital-products' },
            { text: 'Creating Licensed Product', link: '/guide/product-types-creation/creating-digital-products-with-licenses' },
            { text: 'Managing Product Integrations (Product-Specific)', link: '/guide/product-types-creation/managing-product-integrations' },
            { text: 'Defining Upgrade Paths', link: '/guide/product-types-creation/defining-upgrade-paths' },
            { text: 'Product List Overview', link: '/guide/product-types-creation/product-list-overview' }
          ]
        },
        {
          text: 'Customer Dashboard', // Finalized main section title
          collapsed: true,
          items: [
            {
              text: 'Overview', // This becomes the parent for the dropdown
              link: '/guide/customer-dashboard/', // Link to the main overview page
              items: [ // These are the children that will show in the dropdown
                { text: 'Purchase History', link: '/guide/customer-dashboard/purchase-history' },
                { text: 'Managing Subscriptions', link: '/guide/customer-dashboard/subscriptions' },
                { text: 'Managing Licenses', link: '/guide/customer-dashboard/licenses' },
                { text: 'Digital Product Downloads', link: '/guide/customer-dashboard/downloads' },
                { text: 'Profile & Address Settings', link: '/guide/customer-dashboard/profile-management' }
              ]
            }
          ]
        },
        {
          text: 'Payments & Checkout',
          collapsed: true,
          items: [
            {
              text: 'Connecting Payment Gateways',
              link: '/guide/payments-checkout/connecting-payment-gateways/', // Link to its index.md
              items: [
                { text: 'Stripe Settings', link: '/guide/payments-checkout/connecting-payment-gateways/stripe-settings' },
                { text: 'PayPal Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paypal-settings' },
                { text: 'Cash on Delivery (COD) Settings', link: '/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings' }
              ]
            },
            { text: 'Checkout Actions & Integrations', link: '/guide/payments-checkout/checkout-actions-integrations' }
          ]
        },
        {
          text: 'Shipping', // Finalized main section title
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/guide/shipping/',
              items: [
                { text: 'Configuring Shipping Zones', link: '/guide/shipping/configuring-shipping-zones' },
                { text: 'Setting Up Shipping Methods', link: '/guide/shipping/setting-up-shipping-methods' },
                { text: 'Understanding Shipping Classes', link: '/guide/shipping/understanding-shipping-classes' },
                { text: 'Advanced Shipping Calculations', link: '/guide/shipping/advanced-shipping-calculations' },
              ]
            }
          ]
        },
        {
          text: 'Marketing & Sales Tools',
          collapsed: true,
          items: [
            {
              text: 'Creating & Managing Coupons',
              link: '/guide/marketing-sales-tools/creating-managing-coupons/', // Link to its index.md
              items: [
                { text: 'Adding Coupons', link: '/guide/marketing-sales-tools/creating-managing-coupons/adding-coupons/' }
              ]
            }
          ]
        },
        {
          text: 'Reporting & Analytics',
          collapsed: true,
          items: [
            { text: 'Reports Dashboard Overview', link: '/guide/reporting-analytics/reports-dashboard-overview' },
            { text: 'Orders Report', link: '/guide/reporting-analytics/orders-report' },
            { text: 'Revenue Report', link: '/guide/reporting-analytics/revenue-report' },
            { text: 'Refunds Report', link: '/guide/reporting-analytics/refunds-report' },
            { text: 'Subscription Report', link: '/guide/reporting-analytics/subscription-report' },
            { text: 'Product Report', link: '/guide/reporting-analytics/product-report' }
          ]
        },
        {
          text: 'Settings & Configuration',
          collapsed: true,
          items: [
            { text: 'General Settings (Store Setup)', link: '/guide/settings-configuration/general-settings' },
            { text: 'Pages Setup', link: '/guide/settings-configuration/pages-setup' },
            { text: 'Single Product & Order Setup', link: '/guide/settings-configuration/single-product-order-setup' },
            { text: 'Theme Setup', link: '/guide/settings-configuration/theme-setup' },
            { text: 'Additional Info Settings', link: '/guide/settings-configuration/additional-info-settings' },
            { text: 'Payment Settings Overview', link: '/guide/settings-configuration/payment-settings' },
            {
              text: 'Email Notifications',
              link: '/guide/settings-configuration/email-notifications/', // Link to its index.md
              items: [
                { text: 'Editing Email Templates', link: '/guide/settings-configuration/email-notifications/editing-email-templates' }
              ]
            },
            {
              text: 'Roles & Permissions',
              link: '/guide/settings-configuration/roles-permissions/', // Link to its index.md
              items: [
                { text: 'Adding New Roles', link: '/guide/settings-configuration/roles-permissions/adding-new-roles/' }
              ]
            },
            { text: 'Storage Settings', link: '/guide/settings-configuration/storage-settings' },
            { text: 'Licensing Settings (FluentCart Product License)', link: '/guide/settings-configuration/licensing-settings' }
          ]
        },
        {
          text: 'Troubleshooting & Support',
          collapsed: true,
          items: [
            { text: 'Understanding Logs', link: '/guide/troubleshooting-support/understanding-logs' },
            { text: 'Common Issues & FAQs', link: '/guide/troubleshooting-support/common-issues-faqs' },
            { text: 'How to Get Support', link: '/guide/troubleshooting-support/how-to-get-support' }
          ]
        }
      ]
    },
    logo: {
      dark: '/logo-full.svg',
      light: '/logo-full-dark.svg',
    },
  },
  head: [
      ['link', { rel: 'icon', href: '/icon.webp' }],
      ['meta', { property: 'og:image', content: 'https://fluentcart.com/wp-content/uploads/2025/06/fluent-cart-featured.png' }],
  ]
}
