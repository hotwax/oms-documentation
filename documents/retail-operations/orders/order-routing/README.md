---
description: >-
  Use the Order Routing App to control sellable inventory and configure how
  orders are routed across fulfillment locations.
icon: gears
---

# Order Routing App

The **Order Routing App** brings inventory availability controls and order routing into one workspace. Use the sourcing tools to decide how much inventory can be sold and where it can be fulfilled. Use configurable routing to decide which fulfillment location should receive an order.

## Manage inventory availability

The sourcing tools were previously available in the Available to Promise App. They now live in the **Order Routing App**:

* [Sourcing and inventory availability](../../inventory/available-to-promise/README.md)
* [Inventory channels](../../inventory/available-to-promise/create-channels.md)
* [Threshold rules](../../inventory/available-to-promise/threshold-rules.md)
* [Safety stock rules](../../inventory/available-to-promise/safety-stock-rules.md)
* [Store pickup rules](../../inventory/available-to-promise/store-pickup-rules.md)
* [Shipping rules](../../inventory/available-to-promise/shipping-rule.md)
* [Product inventory](../../inventory/available-to-promise/inventory.md)
* [Schedule sourcing rules](../../inventory/available-to-promise/schedule-atp-rules.md)

<figure><img src="../../.gitbook/assets/order-routing-inventory.jpg" alt="Inventory page in the Order Routing App showing a product's ATP, QOH, safety stock, pickup, and brokering settings"><figcaption><p>Review product inventory and sourcing settings in the Order Routing App.</p></figcaption></figure>

## Route orders

Configurable order routing evaluates orders against sequential rules and chooses eligible fulfillment locations. The configuration has three levels:

1. A [brokering run](brokering-runs.md) controls when a group of routing configurations runs.
2. A [routing rule](routing-rules.md) identifies and prioritizes a batch of orders.
3. An [inventory rule](inventory-rules.md) filters and sorts eligible fulfillment locations for that batch.

Use [Test Drive](test-drive.md) to check a routing configuration with sample orders before activating it. The routing workspace is evolving, so this guide describes the configuration model instead of relying on the current menu layout.
