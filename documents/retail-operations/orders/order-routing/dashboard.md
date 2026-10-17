---
description: Use the Order Routing dashboard to see which routing rules allocate orders, how much work stores take on, and how much inventory safety stock and shipping controls keep away from the order routing engine.
---

# Read the order routing dashboard

The `Dashboard` is the first page of the **Order Routing Rules** app. It answers two questions every week:

* Is the routing logic sending orders where you intended?
* Is the inventory you set aside with sourcing rules costing you fulfillment?

The dashboard shows the product store selected in the app. Routing and shipping numbers cover complete weeks. Inventory numbers are a live view of right now.

## Choose what you want to know

Use this table to go straight to the part of the dashboard that answers your question, and to the setting you would change.

| Question | Where to look | What to do with the answer |
| --- | --- | --- |
| Did routing allocate more or fewer orders than last week? | `Orders brokered` | A sudden drop usually means a routing group didn't run or orders are waiting in a parking facility. Check the group's schedule and history in [Configure a routing group](routing-group-details.md). |
| How much of the order volume do stores fulfill? | `Routed to stores` | Compare the share with your store fulfillment target. If it's low, review the store rules' facility filters in [Configure routing rules](inventory-rules.md) and the safety stock that stores hold back. |
| Which routing rule does most of the work? | `Orders routed by rule` | Confirm that your first-choice rule allocates most orders. If a lower rule does, the rules above it may be filtering out too many facilities. |
| Is a fallback rule picking up more orders? | `Orders routed by rule`, the fallback rule's line | A rising fallback rule, such as a split-fulfillment or last-resort rule, means the rules before it fail more often. Check inventory and the facility filters on the earlier rules. |
| Are stores shipping the orders routing sends them? | `Routed to stores` with `Store-shipped units` | If store allocations rise but store-shipped units fall, stores are likely rejecting or holding orders. Review store rejections before changing routing logic. |
| Which stores ship the most? | `Store-shipped units`, `Top shipping stores` | Use the list to find stores that carry most of the shipping work, or stores that ship little despite holding inventory. |
| How much inventory can the order routing engine not use right now, and why? | `Inventory held back` | See whether safety stock or shipping exclusions hold back more. Change the larger one first. |
| Is safety stock taking too much store inventory? | `Store stock held as safety stock`, `Safety-stock share by store` | A high share, or a store far above the average, means safety stock is keeping sellable units away from online orders. Review [safety stock rules](../../inventory/available-to-promise/safety-stock-rules.md). |
| Which safety stock rule holds the units? | `Safety stock by reason` | Select the rule to open it and adjust its value or product scope. |
| Is any safety stock not explained by a current rule? | `Safety stock by reason`, `Unattributed safety stock` | These units are held by a minimum stock value that no active rule would set today. Run the safety stock rule group again, or find which rule or import set the value. |
| Does a threshold rule reduce what routing can use? | `Inventory held back`, `Threshold` | Threshold rules only limit online availability, so they never hold back units from routing. The row says so, and shows 0 when no threshold rules are set up. |

## Set the week range

Select `4 weeks`, `6 weeks`, or `12 weeks` at the top of the page. The dashboard shows that many complete weeks and leaves out the current, unfinished week.

* Weeks run from Monday to Sunday in UTC.
* Select a week in any chart or table to show that week's values in every weekly card.
* Point-of-sale orders and store pickup orders aren't counted in any routing or shipping number, because the order routing engine doesn't decide where they ship from.

## Review the headline numbers

Three of the four cards at the top summarize the selected week and show the change from the previous week with a small trend line. The fourth, `Store stock held as safety stock`, always shows the current value and doesn't change when you select another week, so don't compare it directly with a past week's routing numbers.

| Card | What it counts |
| --- | --- |
| `Orders brokered` | Orders that the order routing engine allocated to a store or warehouse during the week. An order counts once, even if it was split across rules. |
| `Routed to stores` | The share of those orders that had at least one item allocated to a store, and the number of orders. |
| `Store-shipped units` | Units shipped from stores during the week, based on the date each shipment was marked shipped. |
| `Store stock held as safety stock` | Units that safety stock holds at stores right now, as a share of the units the stores have available. |

## Review orders routed by rule

`Orders routed by rule` shows how many orders each routing rule allocated each week. Use it to see which rules do the work and whether that changes over time. `Store-shipped units` sits beside it, so you can compare what routing sends to stores with what stores ship.

* Select `Chart` to see one line per rule, or `Table` to see the weekly numbers.
* Select the colored dot next to a rule to highlight its line. The chart scales to that rule, so you can read rules with small volumes.
* Select a rule name to open the routing group with that routing and rule selected, ready to edit.
* Below each count, the percentage shows the rule's share of the week's orders brokered.

Each rule is listed as its routing name and rule name, for example `Standard Shipping : Priority 1 - Store Fulfillment`. Rules that allocate to stores are labeled `Store fulfillment`. Rules that allocate to warehouses are labeled `Warehouse fulfillment`.

{% hint style="info" %}
An order that was split across rules counts under every rule that allocated part of it. The rule counts can therefore add up to more than `Orders brokered`. The `Orders brokered, distinct` row in the table shows the true number of orders.
{% endhint %}

## Find which rule holds safety stock

`Safety stock by reason` splits the units held back at each store by what holds them. Each reason appears as a chip with its total units:

* Each active safety stock rule that set the units. Select the rule's chip to open it.
* `Unattributed safety stock`: units held by a minimum stock value that no current rule would set. This happens when products were tagged for an earlier rule, when a rule changed but hasn't run again, or when the value came from an import.
* `Shipping beyond safety stock`: extra units at stores that aren't allowed to ship the product.

Each store has one bar, and all bars use the same scale, so you can compare how much stores hold. The card shows the five stores that hold the most; select `Show all <number> stores` to see every store. A unit is credited to a rule only when that rule matches the store's facility group and the product's tags, is the last matching rule in the sequence, and its safety stock value equals the value saved for the product at that store.

## Check inventory held back

`Inventory held back` totals, across all locations of the product store, the units that the order routing engine can't use right now:

| Row | Meaning |
| --- | --- |
| `Available before controls` | Units available at the locations before safety stock and shipping controls. |
| `Safety-stock hold` | Units kept by safety stock. For each product at each location, this is the safety stock value or the units available, whichever is smaller. |
| `Shipping exclusion` | All units of products that a location isn't allowed to ship. |
| `Overlap` | Units held by both controls. They're counted once in the combined hold. |
| `Threshold` | Threshold rules for the product store. When none are set up, the row shows 0 and says so. When some are active, the row shows how many. They only affect online availability, not routing. Select the row to open threshold rules. |
| `Combined hold` | Safety-stock hold plus shipping exclusion, minus the overlap. |

The bar at the top shows the share of available units that remain eligible for routing.

## Compare safety stock across stores

`Safety-stock share by store` lists each store's safety-stock hold as a share of its available units, highest first. The bar is filled to the actual share. Stores above the average share of all stores are highlighted. The card shows the top five stores; select `Show all <number> stores` to see every store. `Top shipping stores` in `Store-shipped units` works the same way.

Use it to find stores where a rule meant for new arrivals or bulky items holds a larger part of the inventory than intended. Then review the rule's product tags and facility groups.
