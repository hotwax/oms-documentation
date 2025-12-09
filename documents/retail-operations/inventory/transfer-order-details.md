---
description: Review key fields and actions on the Transfer Order Details page.
---

# Transfer Order Details

The Transfer Order Details page shows the status, facility assignments, shipping configuration, and item-level progress for a Transfer Order (TO).

## TO overview
The top section displays the TO name and a status selector (Created, Approved, or Cancelled).

{% hint style="info" %}
Only TOs in Approved status are visible to the origin facility for fulfillment in the Fulfillment App and to the destination facility for receiving in the Receiving App.
{% endhint %}

## Origin facility and shipping info
The Origin card lists the facility name, address, carrier, and shipping method.

## Destination facility
The Destination card lists the receiving facility name and address.

## Timeline
A chronological log of events in the TO lifecycle, including creation and status changes.

## Item details
Each item appears as a separate card with:
- Quantity ordered
- Quantity shipped
- Quantity received

### Add items
Select **Add item to Transfer** to add products to an existing TO.

{% hint style="info" %}
You can add items only while the TO is in Created status. Once a TO is Approved, no additional items can be added.
{% endhint %}

## Item-level actions
Select the More (⋮) icon on an item card to access these actions:

- **Edit order quantity:** Update quantities if stock availability changes at the origin facility.
- **Fulfill:** Open the Fulfillment App to start fulfillment and monitor shipments.
- **Receive:** Open the Receiving App to start receiving and monitor receipt progress.
- **Complete Item:** Manually mark an item as completed when it needs to be closed out (for example, exceptions or partial transfers).
