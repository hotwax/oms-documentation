---
description: Protect store inventory while prioritizing rejected and expedited orders across a store network.
---

# Preserve store inventory while routing orders

Use this template when stores fulfill online orders but must retain inventory for walk-in demand. The example prioritizes rejected and expedited orders, then relaxes the safety stock requirement in stages.

The design uses two routing groups:

| Routing group | Purpose | Example schedule |
| --- | --- | --- |
| `Regular store routing` | Process new and rejected order items. | Every 15 minutes |
| `Unfillable store retry` | Recheck order items after inventory has had time to change. | Every 6 hours |

Replace the schedules, queues, shipping methods, and safety stock values with settings approved for your HotWax Commerce Omnichannel Order Management System (OMS).

## Prepare the configuration

1. [Create a facility group](../../../../system-admin/administration/facilities/manage-groups.md) that contains every store eligible for online fulfillment.
2. [Map the Shopify shipping methods](../../../../learn-shopify/setup-shopify/integration-mappings/shipping-method.md) used for standard and expedited orders.
3. Confirm the queues used for new, rejected, and unfillable order items.
4. Confirm the inventory buffers that stores must retain.

## Build the routing rule ladder

Use the same five routing rules in each routing described in this template.

| Sequence | Filters | Sort | `Allow partial allocation` | Unavailable items |
| --- | --- | --- | --- | --- |
| Routing rule 1 | Select the eligible store `Group`. Set `Safety stock` to 15. | `Inventory balance` | Off | `Next rule` |
| Routing rule 2 | Select the same `Group`. Set `Safety stock` to 10. | `Inventory balance` | Off | `Next rule` |
| Routing rule 3 | Select the same `Group`. Set `Safety stock` to 5. | `Inventory balance` | Off | `Next rule` |
| Routing rule 4 | Select the same `Group`. Do not add a safety stock filter. | `Inventory balance` | Off | `Next rule` |
| Routing rule 5 | Select the same `Group`. Do not add a safety stock filter. | `Inventory balance` | On | `Queue` |

Select the target queue in routing rule 5. The ladder first protects the largest store buffer, then broadens facility eligibility, and permits a split only as the final attempt.

{% hint style="info" %}
The numbers in this template are examples. Set `Safety stock` from your store demand, replenishment frequency, and inventory policy.
{% endhint %}

## Configure regular store routing

Create `Regular store routing`, set its schedule, and keep it in `Draft`. Add the routings in this sequence:

| Sequence | Routing | Filters | Sort |
| --- | --- | --- | --- |
| 1 | `Rejected expedited orders` | Select the rejected item `Queue`. Include next-day, two-day, and three-day values in `Shipping method`. | `Shipping method`, then `Order date` |
| 2 | `Rejected standard orders` | Select the rejected item `Queue`. Include the standard value in `Shipping method`. | `Order date` |
| 3 | `Expedited orders` | Select the new order item `Queue`. Include next-day, two-day, and three-day values in `Shipping method`. | `Shipping method`, then `Order date` |
| 4 | `Standard orders` | Select the new order item `Queue`. Include the standard value in `Shipping method`. | `Order date` |

Add the five-rule ladder to every routing. Check the shipping method sort order so the fastest service appears first.

## Configure the unfillable retry

Create `Unfillable store retry` with a less frequent schedule. Add these routings:

| Sequence | Routing | Filters | Sort |
| --- | --- | --- | --- |
| 1 | `Unfillable expedited orders` | Select the unfillable `Queue`. Include next-day, two-day, and three-day values in `Shipping method`. | `Shipping method`, then `Order date` |
| 2 | `Unfillable standard orders` | Select the unfillable `Queue`. Include the standard value in `Shipping method`. | `Order date` |

Add the five-rule ladder to both routings. In the last routing rule, return unavailable items to the queue used by your retry policy.

## Activate and validate the groups

1. Review the order of the routings in both groups.
2. Review the five routing rules in every routing.
3. Confirm that the last rule targets the intended queue.
4. Change the routings and routing rules to `Active`.
5. Click `Save` in each routing group.
6. Change each saved routing group to `Active`.
7. Test one standard order, one expedited order, and one rejected order through [Test drive](../test-drive.md), if the feature is available.
8. Open `History` after the first scheduled execution and review the result.

If store demand varies by location, add [weeks of supply](../weeks-of-supply-routing.md) to the first routing rule instead of relying only on a fixed safety stock value.
