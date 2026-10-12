---
description: Manage the sourcing rules that contribute to online available-to-promise inventory.
---

# Manage available-to-promise inventory

Use the `Sourcing` section of the **Order Routing Rules** app to manage the rules that contribute to available-to-promise (ATP) inventory. The unified app replaces the former standalone ATP app.

Open the required page from `Sourcing`:

* `Threshold`: Hold a quantity back from online availability.
* `Safety stock`: Maintain safety stock rules by product and facility scope.
* `Store pickup`: Control which inventory is available for pickup.
* `Shipping`: Control which inventory is available for shipping.
* `Channels`: Manage inventory channels and their assignments.
* `Inventory`: Review product inventory and facility-level details.

The `Inventory` menu item appears only when the deployment reports component release `v6.0.0` or later.

## Understand online available-to-promise inventory

HotWax Commerce combines inventory from enterprise resource planning (ERP), point of sale (POS), warehouse management system (WMS), and other connected systems. The online ATP calculation can account for:

* quantity on hand (QOH);
* reserved quantities;
* safety stock;
* inventory thresholds;
* orders waiting in the routing queue; and
* inventory at facilities excluded from online fulfillment.

A simplified calculation is:

$$
\text{Online ATP} = \text{QOH} - (\text{Reserved} + \text{Safety stock} + \text{Threshold} + \text{Queued demand} + \text{Excluded ATP})
$$

For example, start with 100 units of QOH and subtract 5 units for each of the five deductions:

$$
100 - (5 + 5 + 5 + 5 + 5) = 75
$$

HotWax Commerce can publish 75 units as online ATP for this example.

## Apply sourcing rules at scale

Build sourcing rules with product tags, product categories, facility types, or facility groups instead of maintaining every product and facility combination individually. Review rule priority and scope when more than one rule can apply to the same inventory.

## Choose by business goal

Start with the outcome you need, then use a scenario to choose the right rule.

| Business goal | Start here |
| --- | --- |
| Protect online inventory with a threshold or safety stock | [Protect sellable inventory](use-cases.md#protect-sellable-inventory) |
| Control shipping or pickup eligibility | [Control where products sell](use-cases.md#control-where-products-sell) |
| Publish different inventory through sales channels | [Publish inventory by channel](use-cases.md#publish-inventory-by-channel) |
| Investigate inventory values | [Review inventory](inventory.md). The `Inventory` menu item requires component release `v6.0.0` or later. |
| Schedule, run, and verify sourcing-rule output | [Verify sourcing changes](use-cases.md#verify-sourcing-changes) |

Continue with the sourcing setting you want to configure:

* [Configure thresholds](threshold-rules.md)
* [Configure safety stock](safety-stock-rules.md)
* [Configure store pickup](store-pickup-rules.md)
* [Configure shipping](shipping-rule.md)
* [Manage inventory channels](create-channels.md)
* [Understand sourcing concepts](concepts.md)
* [Schedule sourcing rules](schedule-atp-rules.md)
* [Apply sourcing rule use cases](use-cases.md)
* [Review inventory](inventory.md)
