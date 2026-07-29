---
description: Build common order routing strategies with routing groups, routings, and routing rules.
---

# Build common routing strategies

Use these examples as starting points for your routing configuration. Replace the example queues, shipping methods, facility groups, distances, and schedules with values from your HotWax Commerce Omnichannel Order Management System (OMS).

A routing configuration has three levels:

1. Create a routing group and set its schedule.
2. Add routings that select and sequence orders.
3. Add routing rules that select facilities and define what happens to unavailable items.

Review [routing group configuration](routing-group-details.md), [routing configuration](routing-rules.md), and [routing rule configuration](inventory-rules.md) before you activate a new strategy.

## Prepare HotWax Commerce

Complete the setup that applies to your strategy:

* [Create facility groups](../../../system-admin/administration/facilities/manage-groups.md) for warehouses, stores, or other eligible locations.
* [Map Shopify sales channels](../../../learn-shopify/setup-shopify/integration-mappings/sales-channel.md) before you filter orders by channel.
* [Map Shopify shipping methods](../../../learn-shopify/setup-shopify/integration-mappings/shipping-method.md) before you filter or sort orders by service level.
* Confirm the queue names used for new, rejected, and unfillable order items in your OMS.

{% hint style="warning" %}
Changes remain in a working copy until you click `Save`. Review the full routing group before you save and activate it.
{% endhint %}

## Route marketplace orders from warehouses

Use a separate routing when marketplace orders must ship only from warehouses.

| Level | Configuration |
| --- | --- |
| Routing group | Create `Marketplace order routing` and choose a schedule that matches the marketplace service-level agreement. |
| Routing | Filter by `Sales Channel` to include the marketplace channels. Sort by `Order date` to process older orders first. |
| Routing rule | Filter by `Group` and select the warehouse group. Sort by `Proximity`. Under `Unavailable items`, select `Queue` and choose the queue used for manual review or retry. |

Turn on `Allow partial allocation` only when the marketplace accepts split shipments.

## Try warehouses before stores

Use two routing rules when online orders should try warehouses first and stores second.

| Sequence | Facility selection | Sort | Unavailable items |
| --- | --- | --- | --- |
| Routing rule 1 | Select the warehouse `Group`. | `Proximity` | `Next rule` |
| Routing rule 2 | Select the store `Group`. | `Proximity` | `Queue` |

In the routing, filter by the relevant `Sales Channel` or `Queue`, then sort by `Order date`. In the last routing rule, select the unfillable queue used by your operations team.

## Retry rejected order items

Create a dedicated routing when rejected items should be evaluated before new orders.

1. Add a routing and name it `Rejected order retry`.
2. Add a `Queue` filter and select the rejected item queue.
3. Sort by `Order date`.
4. Add routing rules for the locations that can receive a retry.
5. Select `Next rule` for each fallback rule.
6. Select `Queue` in the last routing rule and choose the unfillable queue.

Place this routing before routings that select new orders when both are in the same routing group.

## Prefer nearby facilities

Use a routing rule ladder to prefer a nearby single shipment before expanding the search.

| Sequence | Filters | Allocation | Unavailable items |
| --- | --- | --- | --- |
| Routing rule 1 | Set `Proximity` to the preferred radius. | Turn off `Allow partial allocation`. | `Next rule` |
| Routing rule 2 | Use the same `Proximity`. | Turn on `Allow partial allocation`. | `Next rule` |
| Routing rule 3 | Remove the `Proximity` filter. | Turn off `Allow partial allocation`. | `Next rule` |
| Routing rule 4 | Include all eligible locations. | Turn on `Allow partial allocation`. | `Queue` |

Sort every routing rule by `Proximity`. This sequence first tries one nearby location, then a nearby split, then one location at any distance, and finally a split across all eligible locations.

To limit expensive split shipments, also configure the [shipment threshold](additional-settings.md).

## Protect store safety stock

Use a safety stock ladder when stores must retain units for walk-in demand.

| Sequence | Filters | Sort | Unavailable items |
| --- | --- | --- | --- |
| Routing rule 1 | Select the store `Group` and set `Safety stock` to the preferred buffer. | `Inventory balance` | `Next rule` |
| Routing rule 2 | Select the same `Group` and use a lower `Safety stock` value. | `Inventory balance` | `Next rule` |
| Routing rule 3 | Select the same `Group` without a safety stock filter. | `Inventory balance` | `Queue` |

Turn on `Allow partial allocation` only in the last rule if your business accepts split shipments. This keeps the stronger inventory protection ahead of the broader fallback.

## Prefer stores with lower fulfillment cost

Create facility groups when a business attribute, such as a fixed-rent agreement, should affect facility priority.

1. Add a routing rule that selects the preferred store `Group`.
2. Sort by `Inventory balance` or `Proximity`, based on the business goal.
3. Set `Unavailable items` to `Next rule`.
4. Add a second routing rule that selects the broader store group.
5. Set the last rule to `Queue` when no eligible location can allocate the items.

Facility group membership controls which locations enter each step. Review that membership whenever store agreements change.

## Keep grouped items together

Use staged partial allocation when kits, gift sets, or other grouped items should stay together as long as possible.

| Sequence | `Allow partial allocation` | `Partially allocate grouped items` | Unavailable items |
| --- | --- | --- | --- |
| Routing rule 1 | Off | Off | `Next rule` |
| Routing rule 2 | On | Off | `Next rule` |
| Routing rule 3 | On | On | `Queue` |

Sort each routing rule by `Proximity` if the nearest eligible facility should receive the order first. The final rule permits the broadest split, so use it only when splitting grouped items is acceptable.

## Reduce store routing during peak periods

Create a temporary routing group when warehouses should handle most online volume during a holiday or other peak period.

1. Create a routing group such as `Peak season routing`.
2. Filter its routing by the online order `Queue` or `Sales Channel`.
3. Sort by `Order date`.
4. Add a first routing rule for the warehouse group.
5. Add a second routing rule for the stores approved as overflow locations.
6. Apply facility order limits if store capacity should cap routed volume.
7. Send remaining items to the appropriate queue from the last rule.

Move the regular routing group to `Draft` before you activate an overlapping peak-period group. This avoids processing the same order population with two schedules.

## Clear slow-moving store inventory

Use `Week of Supply` to prefer stores with deeper inventory cover without removing delivery and stock protections.

| Sequence | Filters | Sort | Unavailable items |
| --- | --- | --- | --- |
| Routing rule 1 | Select the eligible store `Group` and configure `Week of Supply`. | `Week of Supply` | `Next rule` |
| Routing rule 2 | Select a warehouse group or add a `Proximity` limit. | `Proximity` | `Queue` |

Read [weeks of supply routing](weeks-of-supply-routing.md) before you select the coverage value. Sales velocity must be current for this strategy to produce useful facility rankings.

## Activate and validate a strategy

1. Review the routing sequence and the routing rule sequence.
2. Confirm that every last routing rule moves unavailable items to the intended queue.
3. Change the routings and routing rules to `Active`.
4. Click `Save`.
5. Change the routing group to `Active`.
6. Use `Run now` only when the page shows no unsaved changes.
7. Open `History` and review the first execution.

If `Test drive` is available in your environment, [test the routing group](test-drive.md) with representative orders before its first scheduled execution.
