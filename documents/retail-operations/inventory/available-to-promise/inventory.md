---
description: Review location inventory, online available-to-promise inventory, and related sourcing configuration.
---

# Review inventory and online ATP

Use the `Inventory` page to review a product's location inventory or its online available-to-promise (ATP) inventory for a channel. Open `Sourcing` > `Inventory`. The `Inventory` menu item appears only when your deployment reports component release `v6.0.0` or later.

## Choose the scope

Choose a segment, then select the location or channel you want to review.

| Segment | Use it to |
| --- | --- |
| `Location` | Select one product-store facility and review ATP, quantity on hand (QOH), safety stock, pickup, and brokering configuration. |
| `Channel` | Select one inventory channel and review Online ATP, the channel threshold, pickup, and brokering configuration. |

`Channel` scope requires one linked configuration facility. If no configuration facility is linked, the page shows `No configuration facility linked` and offers `Add Config`. If the selected facility or channel is invalid, unavailable, or has more than one configuration facility, the page displays an error instead of choosing another scope.

## Find and open a product

1. Select a facility in `Location` scope or a channel in `Channel` scope.
2. Use `Search` to find the product you want to review.
3. Use the page controls to move through the product list.
4. Select a product row to open `Inventory Detail`.

On `Inventory Detail`, select feature chips to change the variant. Use `Change location` or `Change channel` to review the same product in another scope.

## Review and adjust location inventory

In `Location` scope, `Inventory Detail` shows QOH and ATP. QOH is the quantity on hand at the selected location. ATP is the quantity currently available to promise.

Review the configuration values before changing inventory:

* `Allow Brokering` controls whether the location can contribute inventory for brokering.
* `Allow Pickup` controls whether the location can support pickup.
* `Safety stock` holds back inventory at the location.
* `Days to Ship` records the location's shipping lead time.

Select `Adjust` to record an inventory variance. Choose a required `Reason`, select `Add` or `Remove`, and enter a non-negative `Variance`. Saving records the variance immediately; it is not a draft or working-copy action.

From the list, select one or more products and choose `Adjust config` to update configuration for the selected products. List selection applies only to the current loaded page. `Adjust inventory` is available in `Location` scope only, not in `Channel` scope.

## Explain channel Online ATP

In `Channel` scope, open the `Computation` segment to follow the Online ATP calculation in this order:

1. `Physical ATP`: Unreserved inventory across physical locations.
2. `Sellable in this channel`: ATP at facilities assigned to the channel. Inventory outside the channel contributes zero.
3. `Channel brokering`: When this is off, Online ATP is zero.
4. `Brokering disabled at facilities`: ATP at assigned facilities where brokering is off is subtracted.
5. `Safety stock`: Safety stock at contributing facilities is subtracted.
6. `Channel threshold`: The configuration-facility threshold is subtracted from the channel total.
7. `Promised in queues`: Open order-item demand still parked at virtual queue facilities is subtracted.
8. `Computed ATP`: The result is floored at zero.
9. `OMS Online ATP`: The authoritative value returned by the OMS.

The displayed calculation is:

```text
Computed ATP = channel ATP - brokering-disabled ATP - safety stock - channel threshold - promised queue demand
```

The result is zero when channel brokering is off. Otherwise, `Computed ATP` cannot be below zero.

`Inventory in channel` lists the facilities currently assigned to the channel. `Inventory outside channel` lists facilities with inventory that are not assigned to it. Select the add button beside an outside facility to add that facility to the channel. The added facility contributes to future channel calculations.

## Reconcile with Shopify

Open the `Reconciliation` segment in `Channel` scope. Channel aggregate inventory is pushed to the Shopify location mapped to the brokering queue for each connected shop. Compare `OMS Online ATP` with `Shopify ATP` for each mapped shop and location.

A blank Shopify value can mean that the product, location, or live Shopify read is unavailable. Review the inventory-item and location mappings before treating a blank value as zero.

Use `Inventory push history` to inspect each push run, including its status, timestamps, user, linked data logs, message, results, and errors. Select `Open in Job Manager` when you need deeper evidence for a run.

## Review location inventory history

In `Location` scope, `Inventory Detail` includes location inventory history. Use `Search by order name or ID` and movement-type filters to narrow the list. Select `All time`, 7-day, 30-day, 90-day, or custom date ranges. The page shows 20 rows at a time.

Each history row shows ATP and QOH changes. Expand a row to review the available business-impact and source details. Where available, use the link in the expanded row to open the record in its owning application.

On older OMS instances, facility inventory, reconciliation, Shopify reads, or job history can be unavailable, and the page displays an unavailable state for those areas. Location history has no separate unavailable state. If the history read fails, the page can show `No inventory logs found`, which is indistinguishable from a location with no returned history.

## Investigate an unexpected value

1. Confirm the product and the selected location or channel scope.
2. In location scope, compare QOH, ATP, safety stock, pickup, brokering, and recent inventory history.
3. In channel scope, follow every row of `Computation`.
4. Confirm channel membership and inspect `Inventory outside channel`.
5. Compare `OMS Online ATP` and `Shopify ATP`.
6. Review the latest successful inventory push.
7. Open the relevant configuration page before changing a value: [threshold rules](threshold-rules.md), [safety stock rules](safety-stock-rules.md), [store pickup rules](store-pickup-rules.md), [shipping rules](shipping-rule.md), [inventory channels](create-channels.md), [scheduled sourcing rules](schedule-atp-rules.md), or [sourcing use cases](use-cases.md).
