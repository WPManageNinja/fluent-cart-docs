import { defineConfig } from 'vitepress'
import { joinURL, withoutTrailingSlash } from 'ufo'
import { zoomablePlugin } from './theme/markdown-plugin-zoomable'

export default defineConfig({
  title: 'FluentCart Documentation',
  titleTemplate: ':title - FluentCart Documentation',
  description: 'Comprehensive documentation for FluentCart - your all-in-one e-commerce solution.',
  lang: 'en-US',
  cleanUrls: true,
  ignoreDeadLinks: true,
  showingLastUpdated: true,
  
  transformPageData: (pageData, { siteConfig }) => {
    // Initialize the "head" frontmatter if it doesn't exist.
    pageData.frontmatter.head ??= []

    // Create the canonical URL
    const canonicalUrl = joinURL(
      'https://docs.fluentcart.com',
      withoutTrailingSlash(pageData.filePath.replace(/(index)?\.md$/, ''))
    )

    // Generate breadcrumb path
    const pathSegments = pageData.relativePath.split('/')
    const breadcrumbs = pathSegments.map((segment, index) => {
      const path = pathSegments.slice(0, index + 1).join('/')
      return {
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@id': joinURL('https://docs.fluentcart.com', path),
          'name': segment.replace(/(index)?\.md$/, '').replace(/-/g, ' ').replace(/^[a-z]/, c => c.toUpperCase())
        }
      }
    })

    // Create JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': pageData.frontmatter.title || pageData.title,
      'description': pageData.frontmatter.description || pageData.description,
      'url': canonicalUrl,
      'dateModified': pageData.lastUpdated,
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs
      }
    }

    // Add JSON-LD script
    pageData.frontmatter.head.push([
      'script',
      {
        type: 'application/ld+json',
      },
      JSON.stringify(jsonLd)
    ])

    // Add canonical URL
    pageData.frontmatter.head.push([
      'link',
      {
        rel: 'canonical',
        href: canonicalUrl,
      }
    ])

    // Add OpenGraph and Twitter meta tags
    pageData.frontmatter.head.push(
      [
        'meta',
        {
          property: 'og:url',
          content: canonicalUrl,
        }
      ],
      [
        'meta',
        {
          property: 'og:type',
          content: 'article',
        }
      ],
      [
        'meta',
        {
          property: 'og:title',
          content: pageData.frontmatter.title || pageData.title,
        }
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: pageData.frontmatter.description || pageData.description,
        }
      ],
      [
        'meta',
        {
          property: 'article:modified_time',
          content: pageData.lastUpdated,
        }
      ],
      [
        'meta',
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        }
      ],
      [
        'meta',
        {
          name: 'twitter:title',
          content: pageData.frontmatter.title || pageData.title,
        }
      ],
      [
        'meta',
        {
          name: 'twitter:description',
          content: pageData.frontmatter.description || pageData.description,
        }
      ]
    )
  },
  
  base: '/',
  sitemap: {
    hostname: 'https://docs.fluentcart.com',
    lastmodDateOnly: false,
    transformItems: (items) => {
      return items.map(item => ({
        url: item.url,
        lastmod: item.lastmod
      }))
    }
  },
  
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin)
    }
  },
  vite: {
    publicDir: 'guide/public',
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search Documentation',
            buttonAriaLabel: 'Search Documentation'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    outline: [2, 3],
    nav: [
      { text: 'User Docs', link: '/guide/getting-started/introduction-fluentcart.md' },
      { text: 'Dev Docs', link: 'https://dev.fluentcart.com/' },
      { text: 'Website', link: 'https://fluentcart.com', target: '_blank', rel: 'noopener' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: true,
          items: [
            { text: 'Introduction to  FluentCart', link: '/guide/getting-started/introduction-fluentcart' },
            { text: 'Installation & Activation', link: '/guide/getting-started/installation-activation' },
            { text: 'Initial Setup Wizard', link: '/guide/getting-started/initial-setup-wizard' },
            { text: 'Admin Dashboard', link: '/guide/getting-started/dashboard-overview' },
            { text: 'FluentCart Glossary', link: '/guide/getting-started/fluentcart-glossary' }
          ]
        },
        {
          text: 'Product Types & Creation',
          collapsed: true,
          items: [
            {
              text: 'Product Overview', // This becomes the parent for the dropdown
              link: '/guide/product-types-creation/', // Link to the main overview page
              items: [
                { text: 'Creating Physical Products', link: '/guide/product-types-creation/creating-physical-products' },
                { text: 'Creating Digital Products', link: '/guide/product-types-creation/creating-digital-products' },
                { text: 'Creating Licensed Product', link: '/guide/product-types-creation/creating-digital-products-with-licenses' },
                { text: 'Configuring Product Pricing', link: '/guide/product-types-creation/configuring-product-pricing' },
                { text: 'Managing Product integrations (Product-Specific)', link: '/guide/product-types-creation/managing-product-integrations' },
                { text: 'Defining Upgrade Paths', link: '/guide/product-types-creation/defining-upgrade-paths' },
                { text: 'Product List Overview', link: '/guide/product-types-creation/product-list-overview' },
                { text: 'Managing Subscriptions', link: '/guide/product-types-creation/managing-subscriptions' },
                { text: 'Creating & Managing Product Categories', link: '/guide/product-types-creation/creating-managing-product-categories/'},
                { text: 'Creating & Managing Product Brands',link: '/guide/product-types-creation/creating-managing-product-brand/'}
              ]
            },
            { text: 'Inventory Management', link: '/guide/product-types-creation/inventory-management' }
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
                { text: 'Order Bump', link: '/guide/store-management/orders-management/order-bump' },
                { text: 'Changing Order Statuses', link: '/guide/store-management/orders-management/changing-order-statuses' },
                { text: 'Understanding Statuses', link: '/guide/store-management/understanding-statuses' }
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
          ]
        },
        {
          text: 'Payments & Checkout',
          collapsed: true,
          items: [
            {
              text: 'Configuring Payments Overview',
              link: '/guide/payments-checkout/index.md', // Link to its index.md
              items: [
                { text: 'Stripe Settings', link: '/guide/payments-checkout/connecting-payment-gateways/stripe-settings' },
                { text: 'PayPal Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paypal-settings' },
                { text: 'Paddle Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paddle-settings' },
                { text: 'Cash on Delivery (COD) Settings', link: '/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings' }
              ]
            }
          ]
        },
        {
          text: 'Shipping', // Finalized main section title
          collapsed: true,
          items: [
            {
              text: 'Shipping Overview',
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
          text: 'Tax & Duties', // Finalized main section title
          collapsed: true,
          items: [
            {
              text: 'Tax & Duties Overview',
              link: '/guide/tax-&-duties/tax-&-duties-overview.md',
              items: [
                { text: 'Configuring Tax & Classes', link: '/guide/tax-&-duties/configuration-and-classes.md' },
                { text: 'Setting Up Tax Rates', link: '/guide/tax-&-duties/tax-rates.md' },
                { text: 'Tax Filing', link: '/guide/tax-&-duties/tax-filing.md' }

              ]
            },
            {
              text: 'European Union (EU) VAT',
              link: '/guide/tax-&-duties/european-union-vat.md', 
              items: [
                { text: 'European Union VAT with the OSS Method', link: '/guide/tax-&-duties/european-vat-with-oss.md' },
                { text: 'European Union VAT with a Home Country Registration', link: '/guide/tax-&-duties/european-vat-home-country.md' },
                { text: 'European Union VAT with Specific Country Rates', link: '/guide/tax-&-duties/european-vat-specific-country.md' },
              ]
            },
          ]
        },
        {
          text: 'Customer Dashboard', // Finalized main section title
          collapsed: true,
          items: [
            {
              text: 'Customer Dashboard Overview', // This becomes the parent for the dropdown
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
          text: 'Integrations',
          collapsed: true,
          items: [
            { text: 'Integrations Overview', link: '/guide/integrations/integration-overview' },
            { text: 'LearnDash Integration', link: '/guide/integrations/learndash-integration' },
            { text: 'LifterLMS Integration', link: '/guide/integrations/lifterlms-integration' },
            { text: 'Webhook Integrations', link: '/guide/integrations/webhook-integration' },
            { text: 'FluentCRM Integration', link: '/guide/integrations/fluentcrm-integration' },
            { text: 'Fluent Support Integration', link: '/guide/integrations/fluentsupport-integration' },
            { text: 'FluentCommunity Integration', link: '/guide/integrations/fluentcommunity-integration' },
            { text: 'Amazon S3 Integration', link: '/guide/integrations/amazon-s3-integration' },
            { text: 'FlunetAffiliate Integration', link: '/guide/integrations/fluentaffiliate-integration.md' }
          ]
        },
        {
          text: 'Reporting & Analytics',
          collapsed: true,
          items: [
            { text: 'Reports Dashboard Overview', link: '/guide/reporting-analytics/reports-dashboard-overview' },
            { text: 'Sales Report', link: '/guide/reporting-analytics/sales-report' },
            { text: 'Orders Report', link: '/guide/reporting-analytics/orders-report' },
            { text: 'Revenue Report', link: '/guide/reporting-analytics/revenue-report' },
            { text: 'Refunds Report', link: '/guide/reporting-analytics/refunds-report' },
            { text: 'Subscription Report', link: '/guide/reporting-analytics/subscription-report' },
            { text: 'Product Report', link: '/guide/reporting-analytics/product-report' },
            { text: 'Customer Report', link: '/guide/reporting-analytics/customer-report' }
          ]
        },
        {
          text: 'Settings & Configuration',
          collapsed: true,
          items: [
            { text: 'Store Settings', link: '/guide/settings-configuration/store-settings',   
              items: [
                { text: 'Pages Setup', link: '/guide/settings-configuration/pages-setup' },
                { text: 'Product Page Settings', link: '/guide/settings-configuration/product-page' },
                { text: 'Cart & Checkout Settings', link: '/guide/settings-configuration/cart-checkout-settings' },
                { text: 'Checkout Fields', link: '/guide/settings-configuration/checkout-fields' }
              ]},
            { text: 'Payment Settings Overview', link: '/guide/settings-configuration/payment-settings' },
            { text: 'Invoice & Packing Settings', link: '/guide/settings-configuration/invoice-packing-settings' },
            {
              text: 'Email Configuration',
              link: '/guide/settings-configuration/email-configuration/', // Link to its index.md
              items: [
                { text: 'Mailing Settings', link: '/guide/settings-configuration/email-configuration/mailing-settings' },
                { text: 'Configuring Email Notification', link: '/guide/settings-configuration/email-configuration/configuring-email-notification' }
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
            { text: 'Features & Addons', link: '/guide/settings-configuration/features-addons' },
            { text: 'Licensing Settings (FluentCart License)', link: '/guide/settings-configuration/licensing-settings' }
          ]
        },
        {
          text: 'Miscellaneous',
          collapsed: true,
          items: [
            { text: 'Using FluentCart Blocks & Templates', link: '/guide/miscellaneous/using-fluentcart-blocks-&-templates.md' },
            { text: 'Theme Compatibility', link: '/guide/miscellaneous/theme-compatibility.md' },
            { text: 'Translating FluentCart', link: '/guide/miscellaneous/translating-fluentcart.md' },
            { text: 'Customize Store with Bricks', link: '/guide/miscellaneous/customize-store-with-bricks.md' }
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
        },
        {
          text: 'Changelog',
          collapsed: true,
          items: [
            { text: 'Changelog', link: '/guide/changelog/changelog.md' }
          ]
        }
      ]
    },
    logo: {
      dark: '/logo-full.png',
      light: '/logo-full-dark.svg',
    },
    siteTitle: false,
  },
  head: [
      ['link', { rel: 'icon', href: '/icon.webp' }],
      ['meta', { property: 'og:image', content: 'https://fluentcart.com/wp-content/uploads/2025/06/fluent-cart-featured.png' }],
  ]
})
