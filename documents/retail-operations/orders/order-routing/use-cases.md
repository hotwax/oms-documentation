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

## Choose a strategy

Use this table to find a recipe. A recipe helps you solve one routing decision. Use a template when several routing decisions must work together.

| Business goal | Suggested recipe | Complete template |
| --- | --- | --- |
| Route marketplace orders or select a work queue | [Route marketplace orders from warehouses](#route-marketplace-orders-from-warehouses), [retry rejected order items](#retry-rejected-order-items), or [escalate orders by promise date](#escalate-orders-by-promise-date) | [Inventory-based shipping](template/inventory-based-shipping.md) for rejected and expedited orders across stores |
| Use warehouses before stores | [Try warehouses before stores](#try-warehouses-before-stores) | None |
| Prefer nearby facilities | [Prefer nearby facilities](#prefer-nearby-facilities) | None |
| Prefer lower-cost stores | [Prefer stores with lower fulfillment cost](#prefer-stores-with-lower-fulfillment-cost) | None |
| Protect or rebalance store inventory | [Protect store inventory with safety stock](#protect-store-inventory-with-safety-stock) or [clear slow-moving store inventory](#clear-slow-moving-store-inventory) | [Inventory-based shipping](template/inventory-based-shipping.md) |
| Keep items together | [Keep grouped items together](#keep-grouped-items-together) | None |
| Change store participation for a peak period | [Reduce store routing during peak periods](#reduce-store-routing-during-peak-periods) | None |
| Route orders across countries | [Apply a complete template](#apply-a-complete-template) | [Cross-border shipping](template/cross-border-shipping.md) |

## Prepare HotWax Commerce

Complete the setup that applies to your strategy:

* [Create facility groups](../../../system-admin/administration/facilities/manage-groups.md) for warehouses, stores, or other eligible locations.
* [Map Shopify sales channels](../../../learn-shopify/setup-shopify/integration-mappings/sales-channel.md) before you filter orders by channel.
* [Map Shopify shipping methods](../../../learn-shopify/setup-shopify/integration-mappings/shipping-method.md) before you filter or sort orders by service level.
* Confirm the queue names used for new, rejected, and unfillable order items in your OMS.

{% hint style="warning" %}
Changes remain in a working copy until you click `Save`. Review the full routing group before you save and activate it.
{% endhint %}

## Select and prioritize orders

### Route marketplace orders from warehouses

Situation: A marketplace requires its orders to ship from warehouses, while direct-to-consumer orders can use the wider network. Use this recipe when the marketplace `Sales Channel` is mapped and the warehouse group is ready.

| Level | Configuration |
| --- | --- |
| [Routing group](routing-group-details.md) | Create `Marketplace order routing` and choose a schedule that matches the marketplace service-level agreement. |
| [Routing](routing-rules.md) | Filter by the marketplace `Sales Channel` and sort by `Order date` to process older orders first. |
| [Routing rule](inventory-rules.md) | Filter by the warehouse `Group`, sort by `Proximity`, and move unavailable items to the final exception `Queue`. |

Turn on `Allow partial allocation` only when the marketplace accepts split shipments.

Expected result: Marketplace items are attempted at warehouses and any unfillable items wait in the exception queue.

Validate: Use a known marketplace order to confirm that the routing selects its `Sales Channel`, then review the first run in `History`.

### Retry rejected order items

Situation: A rejected item becomes available again and should be retried before new orders. Use this recipe when the rejected-item `Queue` is distinct from the queue for new work.

| Level | Configuration |
| --- | --- |
| [Routing](routing-rules.md) | Create `Rejected order retry`, select the rejected-item `Queue`, and sort by `Order date` so the oldest items run first. |
| [Routing rule](inventory-rules.md) | Add the retry-eligible facilities. Use `Next rule` for each fallback, then move remaining items to the unfillable `Queue` in the final rule. |

Place this routing before the routing for new orders when both are in the same routing group.

Expected result: Older rejected items receive another allocation attempt before new items, and unresolved items move to the unfillable queue.

Validate: Confirm that a known rejected item is selected before a newer item and that the final rule sends any remainder to the expected queue.

### Escalate orders by promise date

Situation: An item promised soon needs an earlier allocation attempt. Use this recipe when items with a promise date within the next day need priority over the regular queue.

| Level | Configuration |
| --- | --- |
| [Routing](routing-rules.md) | Add an included `Promise date` filter with `Upcoming duration` set to `1`, then sort the matching items by the required business priority. The cutoff is the end of day in the routing server time zone. |
| [Routing rule](inventory-rules.md) | Turn on `Allow partial allocation`, because this filter processes items rather than whole ship groups. Use `Next rule` for an intermediate fallback and the unfillable `Queue` in the final rule. |

Do not use the excluded `Promise date` option. If you set `Auto cancel days` for unavailable items, HotWax calculates it from the routing server time when it processes those items.

Expected result: Items promised on or before the next-day cutoff are processed at item level, and items that remain unavailable reach the exception queue.

Validate: Test with an order whose promise date is within one day and confirm that it is selected while an order outside the cutoff is not.

### Reduce store routing during peak periods

Situation: Holiday volume should stay with warehouses first, but approved stores can absorb overflow. Use this recipe only for the peak period and when store capacity limits are current.

| Level | Configuration |
| --- | --- |
| [Routing group](routing-group-details.md) | Create a temporary group such as `Peak season routing` and schedule it for the peak period. |
| [Routing](routing-rules.md) | Select the online-order `Queue` or `Sales Channel` and sort by `Order date`. |
| [Routing rule](inventory-rules.md) | Try the warehouse `Group` first, then the approved store-overflow `Group`. Apply facility order limits and move remaining items to the final exception `Queue`. |

Do not keep an overlapping regular group active for the same order population. Move the regular group to `Draft` before you activate the peak-period group.

Expected result: Warehouses receive online volume first, and only approved stores receive overflow within their order limits.

Validate: Review the active-group schedule and the first `History` record to confirm that only the intended group processed the online queue.

## Choose fulfillment facilities

### Try warehouses before stores

Situation: Online orders should use central inventory before drawing down store stock. Use this recipe when both warehouse and store facility groups are current.

| Sequence | Facility selection | Sort | Unavailable items |
| --- | --- | --- | --- |
| [Routing rule 1](inventory-rules.md) | Select the warehouse `Group`. | `Proximity` | `Next rule` |
| [Routing rule 2](inventory-rules.md) | Select the store `Group`. | `Proximity` | `Queue` |

In the [routing configuration](routing-rules.md), filter by the relevant `Sales Channel` or `Queue`, then sort by `Order date`. In the last routing rule, select the unfillable queue used by your operations team.

Expected result: HotWax Commerce checks warehouses before stores and queues only the items that neither group can allocate.

Validate: Use one order that only a warehouse can fill and one that only an approved store can fill, then review the selected rule for each result.

### Prefer nearby facilities

Situation: Customers expect nearby fulfillment, but you still want a fallback when one location cannot fill the order. Use this recipe when facility and shipping-address coordinates are complete.

Use a 100-mile radius to prefer a nearby single shipment before expanding the search.

| Sequence | Filters | Allocation | Unavailable items |
| --- | --- | --- | --- |
| [Routing rule 1](inventory-rules.md) | Set `Proximity` to 100 miles. | Turn off `Allow partial allocation` for one nearby facility. | `Next rule` |
| [Routing rule 2](inventory-rules.md) | Use the same 100-mile `Proximity` limit. | Turn on `Allow partial allocation` for a split across nearby facilities. | `Next rule` |
| [Routing rule 3](inventory-rules.md) | Remove the `Proximity` filter. | Turn off `Allow partial allocation` for one facility anywhere. | `Next rule` |
| [Routing rule 4](inventory-rules.md) | Include all eligible locations. | Turn on `Allow partial allocation` for a split anywhere. | `Queue` |

Sort every routing rule by `Proximity`. This sequence first tries one nearby location, then a nearby split, then one location at any distance, and finally a split across all eligible locations.

To limit expensive split shipments, also configure the [shipment threshold](additional-settings.md).

Expected result: HotWax Commerce expands from a single nearby allocation to the broadest approved fallback only when needed.

Validate: Test an order that needs one nearby facility and another that needs the final split-anywhere rule, then compare the selected rules.

### Prefer stores with lower fulfillment cost

Situation: A retailer has fixed rent at an outlet store and wants online demand to use that capacity before higher-cost mall stores. Use this recipe when facility groups represent the business preference.

| Level | Configuration |
| --- | --- |
| [Routing rule](inventory-rules.md) | Select the preferred fixed-rent store `Group`, sort by `Inventory balance` or `Proximity`, and use `Next rule`. Add a second rule for the broader mall-store group and move remaining items to the final `Queue`. |

Facility group membership encodes the business preference. Review that membership when a lease, labor model, or store agreement changes.

Expected result: Eligible outlet stores receive the first allocation attempt before eligible mall stores.

Validate: Use an order that both groups can fill and confirm that the selected facility belongs to the preferred group.

## Protect and rebalance inventory

### Protect store inventory with safety stock

Situation: Stores need inventory for walk-in demand before they fulfill online orders. Use this recipe when a gradual reduction in protection is acceptable.

| Sequence | Filters | Operator | Sort | Unavailable items |
| --- | --- | --- | --- | --- |
| [Routing rule 1](inventory-rules.md) | Select the store `Group` and set `Safety stock` to 15. | `greater` | `Inventory balance` | `Next rule` |
| [Routing rule 2](inventory-rules.md) | Select the same `Group` and set `Safety stock` to 10. | `greater` | `Inventory balance` | `Next rule` |
| [Routing rule 3](inventory-rules.md) | Select the same `Group` and set `Safety stock` to 5. | `greater` | `Inventory balance` | `Queue` |

Each value is a strict pre-allocation eligibility threshold, not inventory guaranteed to remain after allocation. An item exactly equal to a threshold does not pass that rule and continues to the next configured rule or unavailable-item action. Turn on `Allow partial allocation` only in the last rule if your business accepts split shipments.

Expected result: Stores with more than 15 available units are considered first, then stores above 10 and five units, while less-protected inventory remains outside the routing path.

Validate: With the strict `greater` operator, test an item at a facility with exactly 15, 10, and five available units. Confirm that 15 skips rule 1 and reaches rule 2, 10 skips rule 2 and reaches rule 3, and five passes none of the thresholds and follows the final `Queue` action. You can also compare an item with 12 available units against an item with six available units to confirm the intermediate ladder steps.

### Keep grouped items together

Situation: A retailer sells eyeglass frames and lenses as a group, but can split sunglasses only when the customer accepts it. Use this recipe when grouped items should remain together as long as possible.

| Sequence | `Allow partial allocation` | `Partially allocate grouped items` | Unavailable items |
| --- | --- | --- | --- |
| [Routing rule 1](inventory-rules.md) | Off | Off | `Next rule` |
| [Routing rule 2](inventory-rules.md) | On | Off | `Next rule` |
| [Routing rule 3](inventory-rules.md) | On | On | `Queue` |

Sort each rule by `Proximity` when the nearest eligible facility should receive the first attempt.

Expected result: Frames and lenses stay together through the first two rules, while the final rule permits the broadest approved split, such as when sunglasses can ship separately.

Validate: Test a grouped order that one facility cannot fill completely and confirm that the group stays intact until the final rule.

### Clear slow-moving store inventory

Situation: Two stores have 20 units of the same item, but one sells 10 units per week and the other sells two. Use this recipe when the slower-selling store should be preferred for online fulfillment.

| Sequence | Filters | Sort | Unavailable items |
| --- | --- | --- | --- |
| [Routing rule 1](inventory-rules.md) | Select the eligible store `Group` and configure `Week of Supply`. | `Week of Supply` | `Next rule` |
| [Routing rule 2](inventory-rules.md) | Select a warehouse group or add a `Proximity` limit. | `Proximity` | `Queue` |

The store selling two units per week has deeper coverage than the store selling 10, even though both have 20 units. Read [the weeks of supply calculation guide](weeks-of-supply-routing.md) before you select the coverage value.

Expected result: HotWax Commerce prefers facilities with deeper inventory cover while retaining a warehouse or distance-based fallback.

Validate: Confirm that current sales velocity is available, then compare the selected facility for the two-store example.

## Test and refine a strategy

Use this safety-stock change story to evaluate a routing change before you activate it. Simulation, Circuit, and Test Drive are feature-gated, so follow only the steps available in your deployment. Test Drive remains disabled by default until an administrator has secured and verified its routing and reset operations.

1. Start with the saved baseline that uses a safety-stock value of 10. If `Simulation` is available, create a variation and change the safety-stock value to 15. Run both sources and compare the eligible and brokered results with queued items. A higher threshold can reduce eligible or brokered results and increase queued items.
2. If `Circuit` is available, it can propose the variation. Review its proposal in the routing group's working copy. You remain responsible for the change, so review every routing and rule, then click `Save` when you decide to apply the live configuration.
3. If `Test Drive` is available and approved for use in your deployment, select a representative order and confirm the selected routing rule. Reset the order after the test so its live allocation does not affect later work.
4. Open `History` after you save and activate the change. Review the first execution for the expected routing and exception-queue results.

Read [simulation guidance](simulation.md), [Circuit guidance](circuit.md), and [Test Drive guidance](test-drive.md) before you use an available feature.

## Apply a complete template

Use a template when you need a connected design of routing groups, routings, rules, queues, and activation steps. A recipe is more appropriate when you need to change one business decision in an existing routing group.

* [Inventory-based shipping](template/inventory-based-shipping.md) protects store inventory while prioritizing rejected and expedited orders.
* [Cross-border shipping](template/cross-border-shipping.md) separates country-specific orders and facility eligibility with one shared schedule.

## Activate and validate a strategy

1. Review the routing sequence and the routing rule sequence.
2. Confirm that every last routing rule moves unavailable items to the intended queue.
3. Change the routings and routing rules to `Active`.
4. Click `Save`.
5. Change the routing group to `Active`.
6. Use `Run now` only when the page shows no unsaved changes.
7. Open `History` and review the first execution.

If `Test drive` is available in your environment, [test the routing group](test-drive.md) with representative orders before its first scheduled execution.
