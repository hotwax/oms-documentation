---
description: Configure facility capacity and shipment-value safeguards for order routing.
---

# Additional routing settings

Use fulfillment capacity and shipment thresholds to control when a routing rule can allocate an order.

## Set fulfillment capacity

Fulfillment capacity limits how many orders a facility can receive during the daily allocation count. This setting does not reduce the facility's available-to-promise (ATP) inventory.

1. Open the **Order Routing Rules** app.
2. Go to `Sourcing` > `Shipping`.
3. Select the `Facility` tab.
4. Find the facility and click its capacity chip. The chip shows `Unlimited`, `0`, or the current custom limit.
5. Select a capacity:
   * `Unlimited Capacity`: Remove the allocation limit.
   * `No Capacity`: Set the limit to zero and prevent new allocations to the facility.
   * `Custom`: Enter a value greater than zero.
6. Click `Apply`.

When a facility reaches its capacity, routing evaluates another eligible facility. If no eligible facility remains, the routing rule applies its configured unavailable-item action.

{% hint style="warning" %}
A routing rule can be configured to ignore the facility order limit. If a facility receives orders after reaching its capacity, review the selected routing rule's filters for this override.
{% endhint %}

You can also manage this value from the facility's `Online Order Fulfillment` card. See [Set fulfillment capacity](../../../system-admin/administration/facilities/manage-facility-details.md#set-fulfillment-capacity).

## Set a shipment threshold

The `Shipment threshold check` filter prevents low-value split or partial allocations. The threshold uses the order currency.

1. Go to `Routing` > `Order Routing`.
2. Open the routing group.
3. Select the routing and routing rule.
4. In `Filters`, click `Add filters`.
5. Select `Shipment threshold check` and enter the minimum shipment value.
6. Save the routing group's working copy.

The check applies when routing would split items across facilities or leave some items unavailable. Each proposed facility allocation and any unavailable remainder must meet the threshold. A complete allocation from one facility does not use this check.

HotWax calculates each checked portion as:

```text
item quantity * unit price + item-level adjustments
```

The calculation does not add header-level shipping, tax, or order adjustments. It includes any adjustment tied to an item. The threshold uses the order currency.

For example, with a threshold of 100:

* A complete allocation worth 80 from one facility can proceed.
* A split into allocations worth 80 and 160 does not proceed because the first allocation is below 100.
* A split into allocations worth 160 and 160 can proceed.
* A partial allocation worth 160 with an unavailable remainder worth 80 does not proceed.

Pair this filter with the routing rule's `Partially available` and `Unavailable items` actions. See [Configure routing rules](inventory-rules.md).
