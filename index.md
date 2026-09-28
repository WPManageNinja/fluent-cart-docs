---
title: User Guides & Developer Docs
tagline: User Guides & Developer Docs - FluentCart
sidebar: false
prev: false
next: false
editLink: false
pageClass: guide-home
layout: home
---

<div class="home-hero">
  <div class="hero-content">
    <h1>FluentCart Documentation</h1>
    <p class="hero-description">Everything you need to build and manage your online store with FluentCart</p>
  </div>
</div>

<div class="home-features">
  <a href="/guide/getting-started/installation-activation.html" class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>Getting Started</h3>
    <p>Learn the basics of FluentCart and set up your first store</p>
    <span class="feature-link">Get Started →</span>
  </a>

  <a href="/guide/store-management/" class="feature-card">
    <div class="feature-icon">🛍️</div>
    <h3>Store Management</h3>
    <p>Manage products, orders, and customers efficiently</p>
    <span class="feature-link">Learn More →</span>
  </a>

  <a href="/guide/product-types-creation/" class="feature-card">
    <div class="feature-icon">📦</div>
    <h3>Inventory & Products</h3>
    <p>Handle inventory and create different product types</p>
    <span class="feature-link">Explore →</span>
  </a>

  <a href="/guide/reporting-analytics/" class="feature-card">
    <div class="feature-icon">📊</div>
    <h3>Analytics & Reports</h3>
    <p>Track your store's performance and growth</p>
    <span class="feature-link">View Reports →</span>
  </a>

  <a href="/guide/customization-and-themes/theme-compatibility" class="feature-card">
    <div class="feature-icon">🎨</div>
    <h3>Customization and Themes</h3>
    <p>Adapt your storefront's look with themes, blocks, and custom code</p>
    <span class="feature-link">Customize →</span>
  </a>

  <a href="/guide/tax-&-duties/tax-&-duties-overview" class="feature-card">
    <div class="feature-icon">🧾</div>
    <h3>Tax & Duties</h3>
    <p>Configure tax rates, classes, and regional compliance</p>
    <span class="feature-link">Set Up Tax →</span>
  </a>
</div>

<style>
.home-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, var(--vp-c-bg-soft), var(--vp-c-bg));
  border-radius: 8px;
  margin: 2rem 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--vp-c-brand-1);
}

.hero-description {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.home-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.home-features .feature-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid var(--vp-c-border);
  color: inherit;
  text-decoration: none;
}

.home-features .feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  color: inherit;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.feature-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.feature-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: color 0.2s ease;
}

.feature-card:hover .feature-link {
  color: var(--vp-c-brand-2);
}

@media (max-width: 768px) {
  .home-features {
    grid-template-columns: 1fr;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.2rem;
  }
}
</style>
