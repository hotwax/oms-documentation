---
description: >-
  Use Order Manager to search orders, review the order funnel, work blocked
  order queues, and inspect customer and order details.
---

# Order management

Use Order Manager to monitor order flow and act on orders that need attention. The app opens on the **Funnel** page and includes dedicated queues for blocked and in-progress orders.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Funnel</strong></td><td>Review order volume, brokering progress, picked and packed progress, hold tasks, and facility performance.</td><td><a href="#funnel">Funnel</a></td></tr><tr><td><strong>Find order</strong></td><td>Search orders by order, external ID, customer, email, status, date, and channel.</td><td><a href="find-sales-orders.md">Find sales orders</a></td></tr><tr><td><strong>Find customers</strong></td><td>Search customers and open customer detail records when an order issue needs customer context.</td><td><a href="#find-customers">Find customers</a></td></tr><tr><td><strong>Blocked queues</strong></td><td>Work unfillable, bad address, fraud, and hold queues.</td><td><a href="#blocked-queues">Blocked queues</a></td></tr><tr><td><strong>In-progress queues</strong></td><td>Review open, inflight, and packed orders.</td><td><a href="#in-progress-queues">In-progress queues</a></td></tr><tr><td><strong>Settings</strong></td><td>Confirm app settings before working order queues.</td><td><a href="#settings">Settings</a></td></tr></tbody></table>

## Funnel

The Funnel page is the operational starting point for Order Manager. Use it to understand how many orders entered today, how far orders have progressed through brokering and packing, and which exception queues need attention.

The Funnel page includes:

* Product store selection.
* Today order count.
* Brokering status.
* Picked and packed progress.
* Open order count.
* Unfillable order count.
* Order hold task counts for substitute, bad address, and fraud work.
* Facility-level order volume and fulfillment metrics.

## Find customers

Use **Find customers** when an order issue needs customer context. Customer detail pages keep customer lookup separate from order lookup so support users can find contact and customer history without starting from an order ID.

## Blocked queues

Blocked queues group orders that need review before they can continue.

| Queue | Use it when |
| --- | --- |
| Unfillable | An order or item cannot be fulfilled from current inventory or routing results. |
| Bad address | The shipping address needs correction before fulfillment can continue. |
| Fraud | The order needs fraud review before release. |
| Hold | The order has a hold task or manual review requirement. |

## In-progress queues

In-progress queues show orders that are moving through fulfillment.

| Queue | Use it when |
| --- | --- |
| Open | Orders are ready for fulfillment work. |
| Inflight | Orders are already moving through the fulfillment process. |
| Packed | Orders have been picked and packed and are ready for the next fulfillment step. |

## Settings

Use **Settings** to confirm app configuration before working order queues. If order counts or queue results look wrong, confirm the current product store and OMS context before troubleshooting the order data.

## Screenshot gaps

This section needs updated screenshots from a clean test OMS. Capture the Funnel page with realistic order counts, queue cards, and facility names. Avoid screenshots that show placeholder numbers, private customer data, empty queues, browser chrome, or internal comments.
