---
description: Diagnose routing rules that find no eligible inventory or allocate only part of an order.
---

# Troubleshoot inventory availability

A routing rule can find physical stock but still reject a facility. Routing evaluates available-to-promise (ATP) inventory after facility membership and the rule's inventory safeguards.

## Check the product inventory

1. Open the order in `Sales Orders`.
2. Select the SKU to open the [Product inventory view](../../../inventory/inventory-management/product-inventory-view.md).
3. Filter by the facility that should fulfill the item.
4. Compare ATP with the order quantity.
5. Check whether the facility is enabled for online fulfillment.

Quantity on hand does not prove that the quantity is available to route. Existing allocations, safety stock, and other ATP rules can reduce the quantity available for a new order.

## Check the routing rule

1. In the **Order Routing Rules** app, open the routing group.
2. Select the routing and routing rule that should allocate the order.
3. Confirm that the routing and routing rule have an active status.
4. Review the routing rule's `Filters`:
   * `Group` and excluded group
   * `Proximity`
   * `Safety stock`
   * `Week of Supply`
   * `Shipment threshold check`
   * `Turn off the facility order limit check`
5. Review `Sort` to confirm which eligible facility is attempted first.
6. Save any changes to the routing group's working copy.

## Check partial and unavailable-item actions

In the selected routing rule, review these actions:

* `Allow partial allocation` lets the rule allocate available items when the complete group cannot be allocated.
* `Partially allocate grouped items` lets grouped items split when partial allocation is enabled.
* `Next rule` passes unavailable items to the next active routing rule.
* `Queue` moves unavailable items to the selected queue instead of evaluating the next rule.
* `Clear auto cancel days` and `Auto cancel days` control the cancellation date applied to unavailable items.

If you do not want split fulfillment, leave partial allocation off and add a later routing rule that can try a broader facility group. If split fulfillment is allowed, review the [shipment threshold](../additional-settings.md#set-a-shipment-threshold) before lowering it.

When `Test drive` is available, use it to inspect filter mismatches and the selected routing rule. Test Drive changes the order, so reset the test order before leaving. See [Test a routing group](../test-drive.md).
