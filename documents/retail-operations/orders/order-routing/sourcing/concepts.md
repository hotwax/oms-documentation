---
description: >-
  Understand the product, facility, and channel concepts used by sourcing rules
  in the Order Routing App.
---

# Sourcing concepts

## Available to promise and quantity on hand

Quantity on hand (QOH) is the physical quantity recorded at a facility. Available to promise (ATP) is the quantity that remains available for new orders after reservations and applicable inventory controls are considered.

The `Inventory` page shows ATP and QOH together so you can compare sellable and physical inventory for a product at a selected facility.

## Product tags and features

Product tags and features let one rule apply to a group of products. For example, a threshold rule can include products tagged `clearance`, while a shipping rule can exclude products with a bulky-item feature.

Rule forms provide `Included` and `Excluded` selectors for tags and features. The operator controls how multiple selections are matched:

* `OR` matches a product when any selected value applies.
* `AND` matches a product only when all selected values apply.

Leave both product selectors empty to apply a rule to all products in the selected channels or facility groups.

## Facility groups

A facility group collects locations that share the same sourcing policy. Safety stock, store pickup, and shipping rules use facility groups so you do not have to maintain the same rule for each store or warehouse.

Two group purposes are common:

* A pickup group identifies facilities that can fulfill store pickup orders.
* An inventory channel group identifies facilities whose inventory contributes to an online sales channel.

You can create or link a facility group from the rule form when the required group does not exist.

## Inventory channels

An inventory channel connects three pieces of sourcing configuration:

1. A channel facility group identifies the stores and warehouses that contribute inventory.
2. A configuration facility stores channel-level product settings such as thresholds.
3. A publish job sends the computed inventory to the connected sales channel on a schedule.

Create separate inventory channels when sales channels use different fulfillment networks. For example, a US storefront can publish warehouse inventory while a Canadian storefront publishes inventory from Canadian stores and warehouses.

See [Manage inventory channels](inventory-channels.md) for setup steps.
