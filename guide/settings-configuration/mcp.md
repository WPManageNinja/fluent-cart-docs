# Connecting AI Assistants (MCP)

FluentCart includes a built-in **MCP (Model Context Protocol)** server that lets AI assistants such as **Claude**, **Cursor**, and **Codex** connect securely to your store. Once connected, an assistant can read your store data and run everyday operator tasks (look up orders, check inventory, pull sales reports, and more) on your behalf, using the same permissions as the WordPress account it signs in with.

The feature ships **turned off**. You enable it, connect a client with a WordPress application password, and the assistant can then reach a curated set of FluentCart tools. The numbers it returns match what you see in your [Reports dashboard](/guide/reporting-analytics/reports-dashboard-overview), because both read from the same data.

## What You Need

Before you start, make sure you have the following in place:

* **WordPress 6.9 or newer.** MCP is built on the WordPress core **Abilities API**, which arrived in 6.9.
* **An MCP adapter.** FluentCart doesn't bundle one, so it uses whichever adapter is installed:
    * **FluentHub** *(recommended)*. The MCP card can install it for you, or you can download it manually.
    * The standalone **MCP Adapter** plugin works too.
* **A WordPress application password** for the account the assistant will sign in as.
* **An MCP-capable client** on your computer, such as Cursor, Claude Desktop, Claude Code, or Codex.

## Step 1: Open the MCP Card

The MCP setup lives alongside FluentCart's other optional features.

1. From your WordPress dashboard, go to **FluentCart Pro > Settings**.
2. Open the **Features & Addon** tab.
3. Find the **MCP for AI Agents** card and click **Configure**.

When MCP hasn't been set up yet, the card shows a **Setup Required** badge.

![Screenshot of the FluentCart Features & Addon page with the MCP for AI Agents card showing the Setup Required badge and the Configure button](/images/settings-configuration/mcp/fluentcart-mcp-1.webp)

## Step 2: Install the MCP Adapter

If no adapter is active yet, the **MCP Connection** panel asks you to install one before the endpoint can respond.

* Click **Download FluentHub** to install the recommended adapter, then activate it and reload the page.
* If you already have FluentHub or the standalone MCP Adapter active, FluentCart skips this step and you can move straight to enabling MCP.

![Screenshot of the MCP Connection panel showing the FluentHub is required notice with the Download FluentHub button](/images/settings-configuration/mcp/fluentcart-mcp-2.webp)

::: tip
FluentCart Pro can install FluentHub for you in one click. The tip inside the panel will point this out when it's available.
:::

## Step 3: Turn On MCP

With an adapter active, switch the **MCP for AI Agents** toggle **on**. The card badge changes to **Active**, the connection endpoint goes live immediately, and the **Configure** button now opens the full connection panel.

![Screenshot of the MCP for AI Agents card with the Active badge and the toggle switched on](/images/settings-configuration/mcp/fluentcart-mcp-3.webp)

## Step 4: Open the MCP Connection Panel

Click **Configure** to open the **MCP Connection** panel. This is your hub for connecting any client. From here you can see:

* **AI tools available** to connected agents (the current count is shown at the top).
* **Endpoint URL:** your store's MCP address, for example `https://your-store.com/wp-json/fluent-cart/mcp`. Use the **Copy** button to grab it.
* **Connect a client:** fields for your WordPress username and application password, plus a tab for each supported client (**Claude Code**, **Claude Desktop**, **Cursor**, **Codex**, and **Other**).
* **A ready-to-copy snippet** that updates as you fill in your details.

![Screenshot of the MCP Connection panel showing the endpoint URL, username and application password fields, client tabs, and the generated snippet](/images/settings-configuration/mcp/fluentcart-mcp-4.webp)

::: info
Your application password stays in your browser. It's only written into the snippet you copy, never saved on the server.
:::

## Step 5: Create a WordPress Application Password

The assistant authenticates as a real WordPress user, so it needs an application password (not your normal login password).

1. In the connection panel, click the **Create an application password** link. This opens your WordPress user profile.
2. Under **Application Passwords**, type a recognizable name in **New Application Password Name** (for example, `Cursor MCP`).
3. Click **Add Application Password**.

![Screenshot of the WordPress Application Passwords section with the New Application Password Name field and the Add Application Password button](/images/settings-configuration/mcp/fluentcart-mcp-5.webp)

WordPress generates the password once and shows it in a confirmation box. Click **Copy** and store it somewhere safe; you won't be able to view it again after you leave the page.

![Screenshot of the WordPress confirmation showing the newly generated application password with a Copy button](/images/settings-configuration/mcp/fluentcart-mcp-6.webp)

## Step 6: Generate Your Connection Snippet

Back in the **MCP Connection** panel:

1. Enter your WordPress **username** in the username field.
2. Paste the **application password** you just copied.
3. Select the tab for the client you're using (**Claude Code**, **Claude Desktop**, **Cursor**, **Codex**, or **Other**).
4. Click **Copy snippet**. FluentCart fills in your endpoint and a ready-to-use `Authorization: Basic` header for you.

![Screenshot of the MCP Connection panel with the application password filled in and the Copy snippet button highlighted](/images/settings-configuration/mcp/fluentcart-mcp-7.webp)

::: info
The authorization value is the word `Basic` followed by the base64 encoding of `your-username:your-application-password`. The panel builds this for you automatically, so you rarely need to encode anything by hand.
:::

## Step 7: Add the Connection to Your Client

Every client connects to the same endpoint over HTTP using Basic authentication. Pick the snippet that matches your tool.

### Cursor

Add the copied snippet to your `mcp.json` file. It looks like this:

```json
{
  "mcpServers": {
    "fluent-cart": {
      "url": "https://your-store.com/wp-json/fluent-cart/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Basic <your-generated-token>"
      }
    }
  }
}
```

![Screenshot of an mcp.json file in Cursor containing the fluent-cart MCP server block with the URL and Authorization header](/images/settings-configuration/mcp/fluentcart-mcp-9.webp)

Once saved, Cursor lists **fluent-cart** under **Settings > Tools & MCPs**, with its tools enabled and ready to use.

![Screenshot of the Cursor Tools and MCPs settings showing the fluent-cart server installed with its tools enabled](/images/settings-configuration/mcp/fluentcart-mcp-8.webp)

### Claude Code

Run the generated command in the terminal where Claude Code is installed. It uses the `claude mcp add` command with the `http` transport, your endpoint, and the `Authorization` header:

```bash
claude mcp add \
  --transport http \
  fluent-cart https://your-store.com/wp-json/fluent-cart/mcp \
  --header "Authorization: Basic <your-generated-token>"
```

### Claude Desktop

Paste the generated `mcpServers` block into your Claude Desktop config (**Settings > Developer > Edit Config**), then restart Claude Desktop.

### Codex

Add a custom MCP server using **Streamable HTTP** transport, your endpoint URL, and the `Authorization` header from the snippet.

### Any Other Client

Any MCP client that speaks Streamable HTTP can connect with the same endpoint URL and a Basic auth header.

## Step 8: Confirm the Connection Works

Once your client is connected, ask the assistant a simple question about your store to confirm everything is wired up correctly. For example, prompt it for the most recently added product. The assistant will call the FluentCart tools and return live data, such as the product's status, type, price range, and per-variation stock.

![Screenshot of an AI assistant using FluentCart MCP tools to return details for the most recently added product, including its variations and stock](/images/settings-configuration/mcp/fluentcart-mcp-10.webp)

## What AI Assistants Can Access

When MCP is on, FluentCart hands the assistant a focused toolkit. **Most tools are read-only and never change anything.** The few that do make changes are clearly separated and always run with the connected account's permissions, so an assistant can only do what that account is allowed to do.

### What an assistant can look up

These are read-only. Ask in plain language and the assistant pulls the answer from your live store data.

* **Your store at a glance:** store details, currency, and headline stats such as recent orders, revenue, customers, and active subscriptions.
* **Orders:** search and filter orders, open a single order's full money breakdown, and review its activity history (status changes, payments, refunds, notes, and emails sent).
* **Customers:** find customers by name, email, location, or lifetime value, and open a full profile with order and subscription history.
* **Products & inventory:** search products, see full product detail with per-variation stock, and get a "what needs restocking?" view.
* **Subscriptions:** search subscriptions and open one to see its billing schedule and renewal history.
* **Coupons:** list coupons with their usage counts and validity windows.
* **Reports & analytics:** sales summaries with period-over-period comparison, revenue trends over time, best-selling products, refund metrics, and flexible breakdowns by order, product, customer, or marketing source (UTM attribution).

### Actions an assistant can take

These change your data, so they always respect what the connected account is permitted to do.

* **Orders:** change the order or shipping status, add an internal staff note, or refund an order.
* **Customers:** create a new customer or update an existing one.
* **Subscriptions:** cancel a subscription.
* **Coupons:** create, update, or deactivate a coupon.
* **Labels:** add or remove labels on an order, customer, or subscription.

::: tip Built-in safety for refunds and cancellations
Refunding an order and canceling a subscription are **two-step actions**. The assistant must first run a preview, then confirm before anything actually happens, which makes accidental refunds or cancellations effectively impossible. Live (real-money) refunds also require your explicit approval, while test-mode refunds run freely.
:::

FluentCart Pro can add further tools on top of this set.

## Security & Permissions

* **Off by default.** Nothing is exposed until you enable the toggle.
* **Authenticated and scoped.** Every request goes through WordPress authentication, a FluentCart role check, and a per-tool permission check. An assistant can only do what the connected account is allowed to do, so a read-only account cannot make changes.
* **Use least privilege.** Connect with a dedicated account that has only the access the assistant needs.
* **Revoke any time.** Delete the application password to cut off a single client, or turn the **MCP for AI Agents** toggle off to disable the endpoint entirely.
