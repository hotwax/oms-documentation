---
description: Review key fields and actions on the Transfer Order Details page.
---

# Transfer Order Details

The Transfer Order Details page shows the status, facility assignments, shipping configuration, and item-level progress for a Transfer Order (TO).

## TO overview
- The header shows the current TO status, order name, and lifecycle.
- A TO can move through `Created`, `Approved`, `Cancelled`, or `Completed`.

{% hint style="info" %}
Only TOs in `Approved` status are available for fulfillment in the Fulfillment App and receipt in the Receiving App.
{% endhint %}

## Origin facility and shipping info
The Origin card shows the shipping facility, address, `Carrier`, and `Method`.

- Select the open icon to view the facility in the `Facilities` app.
- Update `Carrier` and `Method` until the order reaches a finished state.

## Destination facility
The Destination card shows the receiving facility and address.

- Select the open icon to view the facility in the `Facilities` app.

## Timeline
- Review a chronological list of order events.
- The timeline can include status changes, shipments, and receipts.

## Summary
Use the `Summary` section to filter items inside the order:

- `All`
- `Pending Fulfillment`
- `Pending Receipt`
- `Completed`

If the order has receipt discrepancies, the page also shows discrepancy chips for:

- `Under shipped`
- `Under received`
- `Over received`

## Order actions
The footer shows the actions that are currently allowed for the order.

### Add items
Select `Add items` to add products to an existing TO.

You can add items only while the TO is in `Created` status.

### Approve
Select `Approve` to move the TO from `Created` to `Approved`.

### Close order
Select `Close order` to cancel the whole TO.

After approval, `Close order` is available only when inventory has not been impacted yet:

- In `Fulfill & Receive` and `Fulfill only`, cancellation is blocked after items are packed, shipped, or otherwise issued.
- In `Receive only`, cancellation is blocked after any quantity is received.

### Close fulfillment
Select `Close Fulfillment` to stop fulfillment for the remaining unshipped quantity.

- This action is available only on approved orders.
- It does not apply to `Receive only` orders.
- It is available only after inventory has already been impacted and at least one item is still pending fulfillment.

## Item-level actions
Select the More (⋮) icon on an item row to access item actions.

While the TO is in `Created`:

- `Edit ordered qty`
- `Remove item`

While the TO is in `Approved`, the available actions depend on item status:

- `Fulfill`: Opens the Fulfillment App for the origin facility.
- `Receive`: Opens the Receiving App for the destination facility.
- `Close fulfillment`: Cancels the remaining unfulfilled quantity and releases reservations.
- `Approve`: Approves newly added items that are still in `ITEM_CREATED`.
- `Cancel`: Cancels newly added items that are still in `ITEM_CREATED`.

## Item details
Each item row shows:

- Quantity ordered
- Quantity shipped
- Quantity received
- Current item status
- Discrepancy badges when applicable

## Bulk receive
Select `Bulk Receive` to receive multiple items at once.

- `Remaining issued quantity`: Receives the remaining shipped quantity.
- `Remaining ordered quantity`: Receives the remaining ordered quantity.
- `Close items with 0 receipt`: Completes the selected items with zero received quantity.

Items that are still pending fulfillment are skipped during `Bulk Receive`.

## Item statuses
Item statuses vary by lifecycle, but you typically see these queue states on the page:

- `Pending Fulfillment`
- `Pending Receipt`
- `Completed`

The page can also show discrepancy badges:

- `Under shipped`
- `Under received`
- `Over received`
