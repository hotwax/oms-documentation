---
description: >-
  Use Order Manager to monitor order flow, find and create orders, and resolve
  orders that need operational attention.
---

# Order Manager

Order Manager gives retail operations teams one place to monitor order flow and act on orders that need attention. The app opens on `Funnel`, where you can review current workload before opening a queue or searching for a specific order.

The product store shown at the bottom of the menu controls store-scoped order data. If your account can access more than one product store, confirm the selected store before comparing counts or working a queue.

{% hint style="info" %}
Menu options depend on your permissions. If a page described in this guide is not visible, ask an administrator to confirm your Order Manager access.
{% endhint %}

## Start with the funnel

Use [Funnel](funnel.md) to review order volume, brokering progress, fulfillment progress, blocked work, and facility performance. Each count or queue row links to the corresponding work list when a detailed view is available.

## Find or create records

| Page | Use it to |
| --- | --- |
| [Find orders](find-sales-orders.md) | Search across orders, review delivery expectations and allocation context, and perform permitted bulk actions. |
| [Find customers](find-customers.md) | Search customer records by name, party ID, email, or phone. |
| [Create order](create-order.md) | Create a Shopify order by selecting a shop, customer, shipping address, and items. |
| [Order details](view-order-details.md) | Review one order, its items, ship groups, holds, communications, and available actions. |

## Work blocked orders

Blocked queues contain orders or tasks that need review before normal processing can continue.

| Queue | Use it to |
| --- | --- |
| [Unfillable](unfillable-orders.md) | Review orders that could not be brokered to a facility. |
| [Swap](swap-orders.md) | Replace unavailable items, adjust the suggested order, or park or cancel the order. |
| [Bad address](bad-address-orders.md) | Compare the original and suggested address, then release, park, or cancel the order. |
| [Fraud](fraud-orders.md) | Review payment and risk information, then resolve the task or cancel the order. |
| [Hold](hold-orders.md) | Review general order tasks and record a resolution. |

## Work orders in progress

| Queue | Use it to |
| --- | --- |
| [Brokering queue](brokering-queue.md) | Review approved or created orders waiting in virtual facilities. |
| [Open orders](open-orders.md) | Review the current open-order workload. |
| [Inflight orders](inflight-orders.md) | Review orders that have reached a fulfillment facility but are not yet on a picklist. |
| [Packed orders](packed-orders.md) | Review packed orders awaiting carrier pickup and ship eligible orders. |

## Understand page states

Order Manager distinguishes loading, empty, and error states:

* A progress indicator means the page is still loading or refreshing.
* An empty-state message means the request completed but no records matched the current filters.
* An error message means the request failed. Use `Retry` when the page offers it.

Do not treat a loading or error state as a zero count.
