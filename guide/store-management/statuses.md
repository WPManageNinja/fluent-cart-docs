### FluentCart status Overview

This document outlines the various status used throughout the FluentCart plugin. These status are essential for understanding the state of different entities, such as products, orders, and subscriptions.

#### 1. Product status

| Status | Description |
|---|---|
| `publish` | The product is live and visible. |
| `draft` | The product is a saved draft. |
| `private` | The product is live but only visible to specific users. |
| `future` | The product is scheduled to be published at a future date. |
| `trash` | The product has been trashed. |

#### 2. Order status

| Status | Description |
|---|---|
| `processing` | The order is being processed. |
| `completed` | The order has been fulfilled. |
| `on-hold` | The order is awaiting payment or action. |
| `canceled` | The order has been canceled. |
| `failed` | The payment for the order failed. |

#### 3. Payment status

| Status | Description |
|---|---|
| `pending` | Payment has been initiated but not completed. |
| `paid` | The payment has been successfully received. |
| `partially_paid` | A partial payment has been received. |
| `failed` | The payment attempt was unsuccessful. |
| `refunded` | The full amount has been refunded. |
| `partially_refunded` | A portion of the payment has been refunded. |
| `authorized` | A payment method has been authorized, but not yet captured. |

#### 4. Transaction status

| Status | Description |
|---|---|
| `succeeded` | The transaction was successful. |
| `pending` | The transaction is in process. |
| `refunded` | The transaction has been refunded. |
| `failed` | The transaction failed. |

#### 5. Subscription status

| Status | Description |
|---|---|
| `pending` | The subscription is waiting for activation. |
| `intended` | (Pre-pending state) |
| `trialing` | The subscription is in a trial period. |
| `active` | The subscription is currently active. |
| `canceled` | The subscription has been canceled. |
| `paused` | The subscription is temporarily paused. |
| `past_due` | A subscription payment is overdue. |
| `expired` | The subscription has expired. |
| `failing` | The subscription has a payment issue. |
| `expiring` | The subscription is nearing its expiration. |
| `completed` | The subscription has completed its term. |

#### 6. Shipping status

| Status | Description |
|---|---|
| `unshipped` | The order has not yet been shipped. |
| `shipped` | The order has been shipped. |
| `delivered` | The order has been delivered. |
| `unshippable` | The item cannot be shipped (e.g., a digital product). |

#### Customer status

| Status | Description |
|---|---|
| `active` | The customer is an active user. |
| `inactive` | The customer is an inactive user. |

#### Stock status

| Status | Description |
|---|---|
| `instock` | The product is in stock. |
| `outofstock` | The product is out of stock. |
| `onbackorder` | The product is on backorder. |

#### Billing Intervals

| Status | Description |
|---|---|
| `yearly` | Yearly billing interval. |
| `monthly` | Monthly billing interval. |
| `weekly` | Weekly billing interval. |
| `daily` | Daily billing interval. |

#### License status

| Status | Description |
|---|---|
| `active` | The license is active. |
| `disabled` | The license is disabled. |
| `expired` | The license has expired. |

#### Fulfillment Types

| Status | Description |
|---|---|
| `physical` | A physical product. |
| `digital` | A digital product. |

#### Order Types

| Status | Description |
|---|---|
| `payment` | A standard one-time payment order. |
| `subscription` | An order for a new subscription. |
| `renewal` | A renewal order for an existing subscription. |

#### Schedule status

| Status | Description |
|---|---|
| `pending` | A scheduled task is waiting to run. |
| `processing` | A scheduled task is currently running. |
| `completed` | A scheduled task has finished. |
| `failed` | A scheduled task failed to complete. |

#### Transaction Types

| Status | Description |
|---|---|
| `charge` | A standard payment charge. |
| `refund` | A refund transaction. |
| `dispute` | A payment dispute. |