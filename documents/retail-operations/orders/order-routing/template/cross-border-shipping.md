---
description: Route Canadian and United States orders through different facility groups with a shared schedule.
---

# Route orders across Canada and the United States

Use this template for a Canada-based retailer that ships Canadian orders from a warehouse or stores but restricts United States orders to the central warehouse.

This example uses shipping methods to identify the destination market:

* `US Standard` for United States orders
* `Canada Standard` for Canadian orders

Replace these names with the shipping methods configured in your HotWax Commerce Omnichannel Order Management System (OMS).

## Prepare the configuration

1. [Map the Shopify shipping methods](../../../../learn-shopify/setup-shopify/integration-mappings/shipping-method.md) to distinct United States and Canadian methods.
2. [Create facility groups](../../../../system-admin/administration/facilities/manage-groups.md) for the central warehouse and eligible Canadian stores.
3. Confirm the queues used for new, rejected, and unfillable order items.
4. Decide whether the business permits partial allocation in each market.

## Create the routing group

1. Click `New routing group`.
2. Name the group `North America standard routing`.
3. Add a description that records the country and facility restrictions.
4. Set the schedule to every 15 minutes, or choose an interval that matches your order volume.
5. Keep the group in `Draft` while you configure its routings.

## Add the United States routing

Place this routing first because United States orders have the narrower facility choice.

1. Click `New` in the `Routings` column.
2. Name the routing `United States standard orders`.
3. Add a `Queue` filter and select the queues that should be evaluated.
4. Add a `Shipping method` filter and select `US Standard`.
5. Sort by `Order date`.

Add one routing rule:

| Setting | Value |
| --- | --- |
| `Group` | Central warehouse |
| `Sort` | `Proximity` |
| `Allow partial allocation` | Use the retailer policy for United States orders. |
| `Unavailable items` | Select `Queue`, then choose the unfillable queue. |

The group filter prevents retail stores from receiving United States orders.

## Add the Canada routing

1. Add a second routing named `Canada standard orders`.
2. Add the same `Queue` filters used for eligible Canadian order items.
3. Add a `Shipping method` filter and select `Canada Standard`.
4. Sort by `Order date`.

Add the following routing rules in order:

| Sequence | `Group` | Sort | `Allow partial allocation` | Unavailable items |
| --- | --- | --- | --- | --- |
| Routing rule 1 | Central warehouse | `Proximity` | Off | `Next rule` |
| Routing rule 2 | Canadian stores | `Proximity` | Off | `Next rule` |
| Routing rule 3 | Central warehouse | `Proximity` | On | `Next rule` |
| Routing rule 4 | Canadian stores | `Proximity` | On | `Queue` |

Select the unfillable queue in the last routing rule. This sequence tries a single warehouse shipment, then a single store shipment, before it permits split allocation.

## Activate and validate the group

1. Review both routing filters to confirm that an order cannot match the wrong market.
2. Confirm that the United States routing appears before the Canada routing.
3. Confirm the four-rule fallback sequence in the Canada routing.
4. Change the routings and routing rules to `Active`.
5. Click `Save`.
6. Change the saved routing group to `Active`.
7. Run representative United States and Canadian orders through [Test drive](../test-drive.md), if the feature is available.
8. Open `History` after the first execution and review the result.

{% hint style="warning" %}
This routing configuration controls facility selection. Carrier service, transit time, and customs processing still determine whether an order meets its delivery promise.
{% endhint %}
