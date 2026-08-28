import { defineConfig } from 'vitepress'
import { joinURL } from 'ufo'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { zoomablePlugin } from './theme/markdown-plugin-zoomable'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const FEATURED_IMAGES_DIR = join(REPO_ROOT, 'guide', 'public', 'images', 'featured')

const SITE_ORIGIN = 'https://docs.fluentcart.com'
const SITE_DESCRIPTION =
  'Comprehensive documentation for FluentCart - your all-in-one e-commerce solution.'

// Map a source file path to the URL the host actually serves.
// Cloudflare Pages 308-redirects a directory path to its trailing-slash form,
// so index.md pages MUST keep the trailing slash — a canonical or a breadcrumb
// @id pointing at the slash-less form points at a redirect.
const cleanUrlFor = (relPath) => {
  if (/(^|\/)index\.md$/.test(relPath)) {
    const dir = relPath.replace(/(^|\/)index\.md$/, '')
    return dir ? `${joinURL(SITE_ORIGIN, dir)}/` : `${SITE_ORIGIN}/`
  }
  return joinURL(SITE_ORIGIN, relPath.replace(/\.md$/, ''))
}

// Breadcrumb names come from the real H1 of each section's index.md, not from
// a de-slugged folder name, so "product-types-creation" reads as
// "Product Types & Creation". Returns null when a folder has no index.md —
// those levels are skipped rather than linked to a URL that 404s.
const sectionTitleCache = new Map()
const sectionIndexTitle = (dirRelPath) => {
  if (sectionTitleCache.has(dirRelPath)) return sectionTitleCache.get(dirRelPath)

  const indexFile = join(REPO_ROOT, dirRelPath, 'index.md')
  let title = null

  if (existsSync(indexFile)) {
    const heading = readFileSync(indexFile, 'utf-8').match(/^#\s+(.+?)\s*$/m)
    title = heading
      ? heading[1].replace(/[*`]/g, '').trim()
      : dirRelPath
          .split('/')
          .pop()
          .replace(/-/g, ' ')
          .replace(/\b[a-z]/g, (c) => c.toUpperCase())
  }

  sectionTitleCache.set(dirRelPath, title)
  return title
}

export default defineConfig({
  title: 'FluentCart Documentation',
  titleTemplate: ':title - FluentCart Documentation',
  description: SITE_DESCRIPTION,
  lang: 'en-US',
  cleanUrls: true,
  srcExclude: ['CLAUDE.md', 'README.md'],
  ignoreDeadLinks: true,
  showingLastUpdated: true,
  
  transformPageData: (pageData, { siteConfig }) => {
    // Initialize the "head" frontmatter if it doesn't exist.
    pageData.frontmatter.head ??= []

    const relativePath = pageData.relativePath
    const pageTitle = pageData.frontmatter.title || pageData.title
    const pageDescription =
      pageData.frontmatter.description || pageData.description || SITE_DESCRIPTION

    // Create the canonical URL
    const canonicalUrl = cleanUrlFor(relativePath)

    // Generate breadcrumb path.
    // Every @id must be a URL that resolves — a breadcrumb pointing at a 404
    // lets search engines pull the 404 page's title into the result snippet.
    const segments = relativePath.split('/')
    const fileName = segments.pop()
    const isIndexPage = fileName === 'index.md'
    // An index.md IS its own folder, so its folder is the leaf, not an ancestor.
    const ancestorDirs = isIndexPage ? segments.slice(0, -1) : segments

    const crumbs = [{ '@id': `${SITE_ORIGIN}/`, name: 'Documentation' }]

    for (let i = 0; i < ancestorDirs.length; i++) {
      const dirRelPath = ancestorDirs.slice(0, i + 1).join('/')
      const name = sectionIndexTitle(dirRelPath)
      // `guide/` and sections without an index.md have no page to link to.
      if (!name) continue
      crumbs.push({ '@id': cleanUrlFor(`${dirRelPath}/index.md`), name })
    }

    if (pageTitle && crumbs[crumbs.length - 1]['@id'] !== canonicalUrl) {
      crumbs.push({ '@id': canonicalUrl, name: pageTitle })
    }

    const breadcrumbs = crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': crumb
    }))

    // Create JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': pageTitle,
      'description': pageDescription,
      'url': canonicalUrl,
    }

    // A single-item trail (the home page) is not a breadcrumb — omit it.
    if (breadcrumbs.length > 1) {
      jsonLd.breadcrumb = {
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs
      }
    }

    if (pageData.lastUpdated) {
      jsonLd.dateModified = new Date(pageData.lastUpdated).toISOString()
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
          content: pageTitle,
        }
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: pageDescription,
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
          content: pageTitle,
        }
      ],
      [
        'meta',
        {
          name: 'twitter:description',
          content: pageDescription,
        }
      ]
    )

    // Only emit a modified time when there is one — an empty `content`
    // attribute is invalid and gets flagged by crawlers.
    if (pageData.lastUpdated) {
      pageData.frontmatter.head.push([
        'meta',
        {
          property: 'article:modified_time',
          content: new Date(pageData.lastUpdated).toISOString(),
        }
      ])
    }

    // Per-page og:image / twitter:image, if a generated featured image
    // exists for this page. Naming rule is duplicated (not imported) from
    // scripts/generate-featured-images.mjs buildNameParts() — see that
    // file's header for the full rationale — since config.mjs runs in a
    // context where importing the generator isn't worth the coupling.
    // Keep this block's logic in sync with buildNameParts() if that rule
    // ever changes:
    //   <section>--<page-slug>.png, where section = first path segment
    //   under guide/, slug = md filename without extension; a depth-1
    //   index.md (guide/<section>/index.md) uses slug "index"; a NESTED
    //   index.md folds the intervening folder names into the slug, e.g.
    //   guide/settings-configuration/roles-permissions/index.md ->
    //   settings-configuration--roles-permissions-index.png.
    // Pages without a matching generated file (e.g. changelog.md, and
    // anything outside guide/) fall through to the generic static
    // og:image fallback in the `head` config below (the static fallback
    // og:image in themeConfig head below) —
    // that fallback is intentionally kept and never removed.
    if (pageData.relativePath.startsWith('guide/')) {
      const guideRelPath = pageData.relativePath.slice('guide/'.length)
      const parts = guideRelPath.split('/')
      const section = parts[0]
      const rest = parts.slice(1)

      if (rest.length > 0) {
        const filename = rest[rest.length - 1].replace(/\.md$/, '')
        let slug
        if (filename === 'index') {
          if (rest.length === 1) {
            slug = 'index'
          } else {
            const parents = rest.slice(0, -1).join('-')
            slug = `${parents}-index`
          }
        } else {
          slug = filename
        }

        const featuredName = `${section}--${slug}.png`
        const featuredPath = join(FEATURED_IMAGES_DIR, featuredName)

        if (existsSync(featuredPath)) {
          const featuredUrl = `https://docs.fluentcart.com/images/featured/${featuredName}`
          pageData.frontmatter.head.push(
            [
              'meta',
              {
                property: 'og:image',
                content: featuredUrl,
              }
            ],
            [
              'meta',
              {
                name: 'twitter:image',
                content: featuredUrl,
              }
            ]
          )
        }
      }
    }
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
      // Open all links (internal and external) in a new tab
      const defaultLinkOpenRenderer = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const targetIndex = token.attrIndex('target')
        if (targetIndex < 0) {
          token.attrPush(['target', '_blank'])
        } else {
          token.attrs[targetIndex][1] = '_blank'
        }
        const relIndex = token.attrIndex('rel')
        const relValue = 'noopener noreferrer'
        if (relIndex < 0) {
          token.attrPush(['rel', relValue])
        } else {
          token.attrs[relIndex][1] = relValue
        }
        return defaultLinkOpenRenderer(tokens, idx, options, env, self)
      }
    }
  },
  vite: {
    publicDir: 'guide/public',
    build: {
      chunkSizeWarningLimit: 1000,
    }
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
      { text: 'User Docs', link: '/guide/getting-started/introduction-fluentcart' },
      { text: 'Dev Docs', link: 'https://dev.fluentcart.com/', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Website', link: 'https://fluentcart.com', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Changelog', link: '/guide/changelog' }
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
                { text: 'Advanced Variations', link: '/guide/product-types-creation/advanced-variations' },
                { text: 'Creating Licensed Product', link: '/guide/product-types-creation/creating-digital-products-with-licenses' },
                { text: 'Creating Product Bundles', link: '/guide/product-types-creation/creating-product-bundles' },
                { text: 'Bulk Product Import', link: '/guide/product-types-creation/bulk-product-import' },
                { text: 'Configuring Product Pricing', link: '/guide/product-types-creation/configuring-product-pricing' },
                { text: 'Per-Variation Tax Settings', link: '/guide/product-types-creation/per-variation-tax' },
                { text: 'Managing Product integrations (Product-Specific)', link: '/guide/product-types-creation/managing-product-integrations' },
                { text: 'Defining Upgrade Paths', link: '/guide/product-types-creation/defining-upgrade-paths' },
                { text: 'Product List Overview', link: '/guide/product-types-creation/product-list-overview' },
                { text: 'Managing Subscriptions', link: '/guide/product-types-creation/managing-subscriptions' },
                { text: 'Store Billing for Subscriptions', link: '/guide/product-types-creation/store-managed-subscriptions' },
                { text: 'Creating & Managing Product Categories', link: '/guide/product-types-creation/creating-managing-product-categories/'},
                { text: 'Creating & Managing Product Brands', link: '/guide/product-types-creation/creating-managing-product-brand' }
              ]
            },
            { text: 'Inventory Management', link: '/guide/product-types-creation/inventory-management' },
            { text: 'Advanced Inventory', link: '/guide/product-types-creation/advanced-inventory' }
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
                { text: 'Instant Modal Checkout', link: '/guide/store-management/orders-management/instant-modal-checkout' },
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
            { text: 'Exporting Your Store Data', link: '/guide/store-management/exporting-data' },
          ]
        },
        {
          text: 'Browsing History',
          collapsed: true,
          items: [
            { text: 'Browsing History Overview', link: '/guide/browsing-history/' }
          ]
        },
        {
          text: 'Payments & Checkout',
          collapsed: true,
          items: [
            {
              text: 'Configuring Payments Overview',
              link: '/guide/payments-checkout/index', // Link to its index.md
              items: [
                { text: 'Stripe Settings', link: '/guide/payments-checkout/connecting-payment-gateways/stripe-settings' },
                { text: 'PayPal Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paypal-settings' },
                { text: 'Paddle Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paddle-settings' },
                { text: 'Mollie Settings', link: '/guide/payments-checkout/connecting-payment-gateways/mollie-settings' },
                { text: 'Paystack Settings', link: '/guide/payments-checkout/connecting-payment-gateways/paystack-settings' },
                { text: 'Mercado Pago Settings', link: '/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings' },
                { text: 'Razorpay Settings', link: '/guide/payments-checkout/connecting-payment-gateways/razorpay-settings' },
                { text: 'Authorize.net Settings', link: '/guide/payments-checkout/connecting-payment-gateways/authorizenet-settings' },
                { text: 'Square Settings', link: '/guide/payments-checkout/connecting-payment-gateways/square-settings' },
                { text: 'Flutterwave Settings', link: '/guide/payments-checkout/connecting-payment-gateways/flutterwave-settings' },
                { text: 'Cash on Delivery (COD) Settings', link: '/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings' },
                { text: 'SSL Commerz Settings', link: '/guide/payments-checkout/connecting-payment-gateways/sslcommerz-settings' }
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
                { text: 'Managing Packages', link: '/guide/shipping/packages' },
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
              link: '/guide/tax-&-duties/tax-&-duties-overview',
              items: [
                { text: 'Tax Configuration', link: '/guide/tax-&-duties/configuration-and-classes' },
                { text: 'Setting Up Tax Rates', link: '/guide/tax-&-duties/tax-rates' },
                { text: 'European Union (EU) VAT', link: '/guide/tax-&-duties/european-union-vat' },
                { text: 'Tax Filing', link: '/guide/tax-&-duties/tax-filing' }
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
                { text: 'Purchase Confirmation & Invoice Receipt', link: '/guide/customer-dashboard/purchase-confirmation-invoice-receipt' },
                { text: 'Purchase History', link: '/guide/customer-dashboard/purchase-history' },
                { text: 'Managing Subscriptions', link: '/guide/customer-dashboard/subscriptions' },
                { text: 'Managing Licenses', link: '/guide/customer-dashboard/licenses' },
                { text: 'Digital Product Downloads', link: '/guide/customer-dashboard/downloads' },
                { text: 'Profile & Address Settings', link: '/guide/customer-dashboard/profile-management' },
                { text: 'Payment Methods', link: '/guide/customer-dashboard/payment-methods' }
              ]
            }
          ]
        },
        {
          text: 'Marketing & Sales Tools',
          link: '/guide/marketing-sales-tools/',
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
            { text: 'FluentBooking Integration', link: '/guide/integrations/fluentbooking-integration' },
            { text: 'Amazon S3 Integration', link: '/guide/integrations/amazon-s3-integration' },
            { text: 'FluentAffiliate Integration', link: '/guide/integrations/fluentaffiliate-integration' },
            { text: 'Cloudflare Turnstile Integration', link: '/guide/integrations/cloudflare-turnstile-integration' }
          ]
        },
        {
          text: 'Reporting & Analytics',
          link: '/guide/reporting-analytics/',
          collapsed: true,
          items: [
            { text: 'Reports Dashboard Overview', link: '/guide/reporting-analytics/reports-dashboard-overview' },
            { text: 'Sales Report', link: '/guide/reporting-analytics/sales-report' },
            { text: 'Orders Report', link: '/guide/reporting-analytics/orders-report' },
            { text: 'Revenue Report', link: '/guide/reporting-analytics/revenue-report' },
            { text: 'Refunds Report', link: '/guide/reporting-analytics/refunds-report' },
            { text: 'Subscription Report', link: '/guide/reporting-analytics/subscription-report' },
            {
              text: 'Subscription Reports',
              link: '/guide/reporting-analytics/subscription-report',
              items: [
                { text: 'Retention Report', link: '/guide/reporting-analytics/retention' },
                { text: 'Cohorts Report', link: '/guide/reporting-analytics/cohorts' },
                { text: 'Future Renewals Report', link: '/guide/reporting-analytics/future-renewals' },
              ]
            },
            { text: 'Product Report', link: '/guide/reporting-analytics/product-report' },
            { text: 'Customer Report', link: '/guide/reporting-analytics/customer-report' },
            { text: 'Order Sources Report', link: '/guide/reporting-analytics/order-sources-report' }
          ]
        },
        {
          text: 'Settings & Configuration',
          link: '/guide/settings-configuration/',
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
                { text: 'Reminders', link: '/guide/settings-configuration/email-configuration/reminders' },
                { text: 'Configuring Email Notification', link: '/guide/settings-configuration/email-configuration/configuring-email-notification' },
                { text: 'Store Digest', link: '/guide/settings-configuration/email-configuration/store-digest' },
                { text: 'PDF Invoice Templates', link: '/guide/settings-configuration/email-configuration/pdf-invoice' }
              ]
            },
            {
              text: 'Roles & Permissions',
              link: '/guide/settings-configuration/roles-permissions/', // Link to its index.md
              items: [
                { text: 'Adding New Roles', link: '/guide/settings-configuration/roles-permissions/adding-new-roles/' }
              ]
            },
            { text: 'Features & Addons', link: '/guide/settings-configuration/features-addons' },
            { text: 'Global Integrations', link: '/guide/settings-configuration/global-integrations' },
            { text: 'Storage Settings', link: '/guide/settings-configuration/storage-settings' },
            { text: 'AI Assistants (MCP)', link: '/guide/settings-configuration/mcp' },
            {
              text: 'Licensing',
              collapsed: true,
              items: [
                { text: 'Your License', link: '/guide/settings-configuration/licensing-settings' },
                { text: 'Customer Sites (Pro)', link: '/guide/settings-configuration/managing-licensing-sites' }
              ]
            },
            { text: 'Withdrawal (EU)', link: '/guide/settings-configuration/withdrawal-eu' }
          ]
        },
        {
          text: 'Storage',
          collapsed: true,
          items: [
            { text: 'Storage Overview', link: '/guide/storage/' },
            { text: 'Amazon S3', link: '/guide/storage/aws-s3' },
            { text: 'Cloudflare R2', link: '/guide/storage/cloudflare-r2' }
          ]
        },
        {
          text: 'Migration',
          collapsed: true,
          items: [
            { text: 'Migration Overview', link: '/guide/migration/' },
            {
              text: 'EDD',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/guide/migration/edd/' },
                { text: 'Wizard Walkthrough', link: '/guide/migration/edd/edd-migration' },
                { text: 'What Gets Migrated', link: '/guide/migration/edd/what-is-migrated' },
                { text: 'WP-CLI Reference', link: '/guide/migration/edd/edd-cli' },
                { text: 'Developer Mode', link: '/guide/migration/edd/developer-mode' },
                { text: 'Backward Compatibility', link: '/guide/migration/edd/backward-compatibility' },
                { text: 'Troubleshooting', link: '/guide/migration/edd/troubleshooting' }
              ]
            },
            {
              text: 'WooCommerce',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/guide/migration/woocommerce/' },
                { text: 'Wizard Walkthrough', link: '/guide/migration/woocommerce/woocommerce-migration' },
                { text: 'What Gets Migrated', link: '/guide/migration/woocommerce/woocommerce-what-is-migrated' },
                { text: 'Subscriptions & Renewals', link: '/guide/migration/woocommerce/subscription-renewals' },
                { text: 'WP-CLI Reference', link: '/guide/migration/woocommerce/woocommerce-cli' },
                { text: 'Developer Mode', link: '/guide/migration/woocommerce/woocommerce-developer-mode' },
                { text: 'Troubleshooting', link: '/guide/migration/woocommerce/woocommerce-troubleshooting' }
              ]
            }
          ]
        },
        {
          text: 'Customization and Themes',
          collapsed: true,
          items: [
            { text: 'Theme Compatibility', link: '/guide/customization-and-themes/theme-compatibility' },
            { text: 'Using Gutenberg Blocks', link: '/guide/customization-and-themes/using-gutenberg-blocks' },
            { text: 'Using Elementor Widgets', link: '/guide/customization-and-themes/using-elementor-widgets', items: [
              { text: 'FluentCart Widgets', link: '/guide/customization-and-themes/elementor-fluentcart-widgets' },
              { text: 'FluentCart Product Widgets', link: '/guide/customization-and-themes/elementor-product-widgets' },
            ]},
            { text: 'Layout and Template Customization (Block Editor)', link: '/guide/customization-and-themes/layout-template-customization' },
            { text: 'Customize Store with Bricks', link: '/guide/customization-and-themes/customize-store-with-bricks', items: [
              { text: 'FluentCart Bricks Blocks', link: '/guide/customization-and-themes/fluentcart-bricks-blocks' },
            ]},
            { text: 'FluentCart Divi Modules', link: '/guide/customization-and-themes/fluentcart-divi-modules' },
            { text: 'Advanced Customization with CSS Variables', link: '/guide/customization-and-themes/advanced-customization-using-css' },
            { text: 'Translating FluentCart', link: '/guide/customization-and-themes/translating-fluentcart' },
            { text: 'FluentCart Shortcodes', link: '/guide/customization-and-themes/fluentcart-shortcode' },
            { text: 'Code Snippets', link: '/guide/customization-and-themes/code-snippets' }
          ]
        },
        {
          text: 'Troubleshooting & Support',
          link: '/guide/troubleshooting-support/',
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
      dark: '/logo-full.png',
      light: '/logo-full-dark.svg',
    },
    siteTitle: false,
  },
  head: [
      ['link', { rel: 'icon', href: '/icon.webp' }],
      ['meta', { property: 'og:image', content: 'https://fluentcart.com/wp-content/uploads/2025/06/fluent-cart-featured.png' }],
      [
        'script',
        { type: 'module' },
        'import "https://cdn.jsdelivr.net/gh/fluent-docai/chat-widget@latest/chat-widget.js"; window.FluentBotChatWidget.injectWidget("d5e29b4b-0108-4885-98c8-d1cde76a5b70");'
      ]
  ]
})
