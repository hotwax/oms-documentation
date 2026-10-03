---
description: Investigate the current Open workflow and cancel verified orders.
---

# Open orders

Use `Open` to investigate orders returned by the current Open workflow for the selected product store.

{% hint style="info" %}
Order Manager does not expose one definitive entry or exit rule for this queue. `Funnel` links to it from the `Brokered` section, while the page's empty message refers to created or approved orders awaiting routing. Confirm an order's actual lifecycle and allocation state in [Order details](view-order-details.md) before acting.
{% endhint %}

## Confirm the store and scope

1. Confirm the product store shown in the menu.
2. A facility row in `Funnel` opens this page with that facility. The top workflow link supplies no facility or date. If the page was already open, it can retain an earlier facility filter, so confirm or clear the filter.
3. Decide which orders you need to investigate and whether cancellation is approved for every selected order.

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
* Search for a known ID before canceling a specific customer order.

## Read the list

Each row shows:

* Customer name, order name, and internal order ID.
* A physical-facility chip and `X/Y items brokered`, where X is the number of item records assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date with an upcoming or overdue label. `No estimated delivery date` means that the row does not have one to display.

The row does not show an authoritative order status, queue reason, total, address, or visible priority flag. Open the order when any of those details affect your decision.

Use the allocation fraction only for orientation. If supporting item data fails to load, the row can fall back to an apparently complete `Y/Y` fraction.

Select a row outside `Select` mode to open `Order details`. In `Select` mode, selecting a row adds or removes that order from the bulk selection.

## Select the correct scope

1. Select `Select`.
2. Choose individual orders, or use the header checkbox for all currently loaded results.
3. Compare the selected count with the work you intend to change.
4. Select `Done` to leave select mode and clear the selection.

The header checkbox does not select results that have not loaded. More results append as you scroll. Scroll until the loaded count matches the total before selecting the complete filtered population.

Selection is stored by order ID. If the list contains more than one row for an order, selecting that order still creates one selected-order entry.

## Cancel orders

Use `Cancel` only when every remaining eligible item in each selected order should be canceled.

{% hint style="warning" %}
Cancellation cannot be undone from this page. It cancels every item that is not already completed or canceled across all ship groups in each selected order. It does not target only the allocation or facility represented by the visible row.
{% endhint %}

1. Select `Select`.
2. Select the orders and verify the selected count.
3. Select `Cancel`.
4. Review the number of selected orders and select `Confirm`.
5. Wait for the result message and list refresh.
6. Retain the affected order IDs, then select `Done` if the page remains in select mode.
7. Use [Find orders](find-sales-orders.md) to open each affected order and confirm which items were canceled.

The success message counts selected orders, not canceled items. An order with no cancellable items can still be included in that count.

Cancellation requests run across the selection and can finish for only part of it. If one request fails, another selected order may already have changed. A failure does not refresh the list. Inspect every selected order and reload the queue before retrying so that you do not act on stale results.

## Interpret list states

The header shows loaded orders out of the total matching orders. More results append as you scroll.

`No open orders` can mean that the current store and filters returned no matches. A failed initial request can also leave the page showing the normal empty state, so an unexpected zero is not confirmation that the queue is empty. A failure while loading more results can leave the loaded count below the total without adding more rows.

Reload the page or change and reapply a filter before treating an unexpected empty or stalled result as a zero. If customer or facility details are missing, open `Order details` before acting on the incomplete row.
