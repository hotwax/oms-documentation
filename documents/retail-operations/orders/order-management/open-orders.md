---
description: Investigate the current Open workflow and verify order and allocation details.
---

# Open orders

Use `Open` to investigate orders returned by the current Open workflow for the selected product store.

{% hint style="info" %}
Order Manager does not expose one definitive entry or exit rule for this queue. `Funnel` links to it from the `Brokered` section, while the page's empty message refers to created or approved orders awaiting routing. Confirm an order's actual lifecycle and allocation state in [Order details](view-order-details.md) before acting.
{% endhint %}

## Confirm the store and scope

1. Confirm the product store shown in the menu.
2. A facility row in `Funnel` opens this page with that facility. The top workflow link supplies no facility or date. If the page was already open, it can retain an earlier facility filter, so confirm or clear the filter.
3. Decide which orders need investigation and open their details before taking an action.

Changing the product store reloads this queue with the new store.

## Find and prioritize orders

Search by order name, internal order ID, or external ID. Narrow the list with:

* `Priority`
* `Sales channel`
* `Facility`
* `Shipping method`
* `Order date from`
* `Order date through`

`Priority` distinguishes `High priority` from `Normal or no priority`. `Facility` lists physical facilities. The date range includes the complete `from` and `through` dates.

Filters apply as you change them; there is no `Apply` button. Search updates after a short delay. Use `Clear` to restore the default values.

Use the filters and row details based on the decision you need to make:

* Filter by `Facility` to review one fulfillment location.
* Combine `Shipping method` with the delivery deadline to find time-sensitive orders.
* Use `Priority`, order age, and estimated delivery date to decide what to inspect first.
* Search for a known ID before taking action on a specific customer order.

## Read the list

Each row shows:

* Customer name, order name, and internal order ID.
* A physical-facility chip and `X/Y items brokered`, where X is the number of item records assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date with an upcoming or overdue label. `No estimated delivery date` means that the row does not have one to display.

The row does not show an authoritative order status, queue reason, total, address, or visible priority flag. Open the order when any of those details affect your decision.

Use the allocation fraction only for orientation. If supporting item data fails to load, the row can fall back to an apparently complete `Y/Y` fraction.

Select a row to open [Order details](view-order-details.md). The current Open queue has no `Select` mode or bulk-action footer: its standalone cancellation action is hidden. Use the order's detail page for the actions available for its actual state.

## Cancel orders

The current app hides this cancellation control because OMS item cancellations do not yet propagate back to Shopify. Use the approved cancellation workflow for the sales channel and verify the resulting order in both systems.

## Interpret list states

The header shows loaded orders out of the total matching orders. More results append as you scroll.

`No open orders` can mean that the current store and filters returned no matches. A failed initial request can also leave the page showing the normal empty state, so an unexpected zero is not confirmation that the queue is empty. A failure while loading more results can leave the loaded count below the total without adding more rows.

Reload the page or change and reapply a filter before treating an unexpected empty or stalled result as a zero. If customer or facility details are missing, open `Order details` before acting on the incomplete row.
