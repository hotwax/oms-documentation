---
description: Verify packed-order scope and submit loaded shipments for shipping.
---

# Packed orders

Use `Packed` to review orders returned by the current Packed workflow and submit verified shipments for shipping.

The page describes these orders as packed and awaiting carrier pickup, while `Funnel` labels the same workflow link `Packed and shipped`. `Order details` does not show the hidden shipment IDs submitted by this bulk action. Verify the shipment ID, packing state, and tracking details in the [Fulfillment app Completed Orders page](../../../store-operations/fulfillment/completed-orders.md) before using it.

## Confirm the store and scope

1. Confirm the product store shown in the menu.
2. A facility row in `Funnel` opens this page with that facility. The top workflow link supplies no facility or date. If the page was already open, it can retain an earlier facility filter, so confirm or clear the filter.
3. Use the Fulfillment app to confirm the shipment ID, facility, packing state, tracking details, and carrier-handoff readiness for each intended order.
4. Confirm that you are authorized to submit every intended shipment for shipping.

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

Use `Facility` to isolate one pickup location. Combine priority, relative age, shipping method, and estimated delivery date to decide which orders need attention first.

## Read the list

Each row shows:

* Customer name, order name, and internal order ID.
* A physical-facility chip and `X/Y items brokered`, where X is the number of item records assigned to physical facilities and Y is the total item-record count available to the row.
* Carrier and shipping method, with sales channel underneath.
* Order date and relative age.
* Estimated delivery date with an upcoming or overdue label.

The row does not expose enough shipment detail to prove that the intended package is ready. Use `Order details` for order context and the Fulfillment app for shipment-level verification.

Use the allocation fraction only for orientation. If supporting item data fails to load, the row can fall back to an apparently complete `Y/Y` fraction.

## Select the correct scope

1. Select `Select`.
2. Choose individual orders, or use the header checkbox for all currently loaded results.
3. Compare the selected count with the orders you intend to change.
4. Select `Done` to leave select mode and clear the selection.

The header checkbox does not select results that have not loaded. Scroll until the loaded count matches the total before selecting the complete filtered population.

Selection is stored by order ID. The shipping action submits every unique shipment ID found in the currently loaded Packed rows for each selected order. If an order has multiple loaded shipment records, selecting that order can submit more than one shipment.

## Ship orders

{% hint style="warning" %}
`Ship orders` starts immediately and does not show a confirmation dialog. Select it once only after you have verified the scope, then wait for the request and list refresh to finish.
{% endhint %}

1. Select `Select`.
2. Select the verified orders and compare the selected count with your intended scope.
3. Reopen the Fulfillment app Completed Orders page for any order whose shipment scope is unclear.
4. Select `Ship orders` once.
5. Wait for the result message and list refresh.
6. In the Fulfillment app, confirm the state of every shipment you expected to submit.

If none of the selected orders has a shipment ID in the loaded rows, the action fails before sending a shipping request. If some selected orders have shipment IDs and others do not, the action can submit the identified shipments without identifying the omitted orders.

The success message counts selected orders, not the number of submitted or successfully shipped shipments. A resolved bulk request clears the selection and reloads the page, but the response is not reconciled per shipment. Treat each shipment's state in the Fulfillment app, not the message or disappearance from the queue, as confirmation.

If the request fails, the selection remains and the list does not refresh. Do not select `Ship orders` again until you have reloaded the queue and checked every intended shipment; the service may have completed work that the generic failure message does not identify.

## Interpret list states

The header shows loaded orders out of the total matching orders. More results append as you scroll.

`No packed orders` can mean that the current store and filters returned no matches. A failed initial request can also leave the normal empty state visible. A failure while loading more results can leave the loaded count below the total, and missing customer or facility data can leave a row incomplete.

Reload the page or change and reapply a filter before treating an unexpected empty, stalled, or incomplete result as authoritative.
