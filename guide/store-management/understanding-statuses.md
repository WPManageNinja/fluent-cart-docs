### FluentCart status Overview

This guide explains the different statuses you'll see throughout FluentCart. Statuses help you quickly understand the current state of your products, orders, payments, subscriptions, and more.

#### 1. Product status

These statuses describe the visibility of your products.

| Status | Description |
|---|---|
| `publish` | The product is live and visible. |
| `draft` | The product is a saved draft. |
| `private` | The product is live but only visible to specific users. |
| `future` | The product is scheduled to be published at a future date. |
| `trash` | The product has been moved to the trash and is not visible. |

#### 2. Order status

Order statuses help you follow an order from the time it’s placed until it’s finished.

| Status | Description |
|---|---|
| `processing` | The order is being processed. |
| `completed` | The order has been fulfilled. |
| `on-hold` | The order is awaiting payment or action. |
| `canceled` | The order has been canceled. |
| `failed` | The order could not be processed, usually due to a failed payment.  |

#### 3. Payment status

These statuses show the state of a payment transaction. 

| Status | Description |
|---|---|
| `pending` | Payment has been initiated but not completed. |
| `paid` | The payment has been successfully received. |
| `partially_paid` | A partial payment has been received. |
| `failed` | The payment attempt was unsuccessful. |
| `refunded` | The full payment has been returned to the customer. |
| `partially_refunded` | A portion of the payment has been refunded. |
| `authorized` | The payment has been approved by the provider but not yet charged (captured). |

#### 4. Transaction status

These statuses apply to individual transaction records. 

| Status | Description |
|---|---|
| `succeeded` | The transaction was successful. |
| `pending` | The transaction is in process. |
| `refunded` | The transaction has been refunded. |
| `failed` | The transaction failed. |
| `dispute_lost` | A payment dispute was opened and lost. |

#### 4. Transaction Types

These describe the nature of a transaction.  

| Status | Description |
|---|---|
| `charge` | A standard payment from a customer. |
| `refund` | A payment returned to a customer. |
| `dispute` | A transaction related to a payment dispute. |

#### 5. Subscription status

These statuses track the lifecycle of a customer subscription.

| Status | Description |
|---|---|
| `pending` | The subscription is created but waiting for the first payment to become active. |
| `intended` | An early state before a subscription becomes pending. |
| `trialing` | The subscription is in a trial period. |
| `active` | The subscription is currently active. |
| `canceled` | The subscription has been canceled. |
| `paused` | The subscription is temporarily paused. |
| `past_due` | A subscription payment is overdue. |
| `expired` | The subscription has reached its end date and is no longer active. |
| `failing` | The subscription has a payment issue. |
| `expiring` | The subscription is nearing its expiration. |
| `completed` | The subscription has completed its term. |

#### 6. Shipping status

These statuses track the fulfillment of physical goods. 

| Status | Description |
|---|---|
| `unshipped` | The order has not yet been shipped. |
| `shipped` | The order has been shipped. |
| `delivered` | The order has been delivered. |
| `unshippable` | The order does not require shipping (e.g., a digital product). |

#### Customer status

These statuses describe the state of a customer's account.

| Status | Description |
|---|---|
| `active` | The customer is an active user. |
| `inactive` | The customer is an inactive user. |

#### Stock status

These statuses indicate the availability of a product.

| Status | Description |
|---|---|
| `instock` | The product is in stock. |
| `outofstock` | The product is out of stock. |
| `onbackorder` | The product is out of stock but can be purchased and will be shipped when available. |

#### Billing Intervals

These define the recurring payment schedule for subscriptions. 

| Status | Description |
|---|---|
| `yearly` | Yearly billing interval. |
| `monthly` | Monthly billing interval. |
| `weekly` | Weekly billing interval. |
| `daily` | Daily billing interval. |

#### License status

These statuses are for products sold with license keys. 

| Status | Description |
|---|---|
| `active` | The license is active. |
| `disabled` | The license is disabled. |
| `expired` | The license has passed its expiration date. |

#### Fulfillment Types

These describe the type of product being sold.

| Status | Description |
|---|---|
| `physical` | A physical product that requires shipping. |
| `digital` | A downloadable or digital product that does not require shipping. |

#### Order Types

These describe the nature of an order.

| Status | Description |
|---|---|
| `payment` | A standard one-time payment order. |
| `subscription` | An order for a new subscription. |
| `renewal` | An automatic renewal payment for an existing subscription. |

#### Schedule status

These statuses apply to automated or scheduled tasks within FluentCart. 

| Status | Description |
|---|---|
| `pending` | A scheduled task is waiting to run. |
| `processing` | A scheduled task is currently running. |
| `completed` | A scheduled task has finished. |
| `failed` | The task did not complete successfully. |

