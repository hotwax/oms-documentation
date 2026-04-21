---
description: How to receive transfer orders in HotWax Commerce.
---

# Transfer Order Receiving

The Receiving App lets you receive inventory against Transfer Orders (TOs). You can receive items partially or fully as they arrive, with real-time updates. This guide covers locating a TO, receiving items, handling different receiving scenarios, and managing discrepancies.


## Receiving a TO

Follow these steps to receive a TO.

### Locate the TO
After signing in you land on the Transfer Orders page, with an Open tab listing TOs scheduled for your facility.
- Search by TO name or tracking code.
- Each entry shows the order status and creation timestamp.
- Only TOs for your destination facility appear.


### Review TO details
Opening a TO shows:
- Total number of items to receive.
- Item list with product name, image, SKU, and ordered quantity.
- A progress bar that indicates how much of each item has been received.

This view helps you verify items before starting the receiving process.


### Receive items
There are three ways to receive inventory:
- **Barcode scanner:** Scanning a barcode finds the matching item, selects it, and increases the received quantity.
- **iPad camera:** Tap `Scan` to open the camera and scan the item’s barcode.
- **Enter SKU:** Enter the SKU in the **Scan Item** input field.

Each scan or SKU entry adds one unit and updates the progress bar. You can also enter received quantities manually once an item is selected.

> **Tip:** Use `Receive All` to record the full ordered quantity for an item without scanning.


## Multiple receiving scenarios

TOs may be received partially or all at once.

### Receive items partially and keep the order open
- Record the quantities that arrived.
- Tap `Receive` to log the receipt and keep pending items open.

### Receive items partially, close specific items and keep the order open
If some items were canceled at the source:
- Use `Receive All` for items that fully arrived; enter partial quantities for the rest.
- Tap `Receive and Close`.
- In the review modal, select the checkboxes for items to close, then tap the Save icon.
- Confirm by tapping `Proceed`.

Closed items move to the Completed tab; remaining items stay under Open.

### Receive items partially and close the order
If no more items are expected:
- Use `Receive All` for fully arrived items; enter partial quantities for the rest.
- Tap `Receive and Close` and follow the closing steps.


### Receive all items and close the order
- Use `Receive All` for each item in the TO.
- Tap `Receive and Close` and follow the closing steps.


### Standard closing steps
In any scenario where you close items or an entire TO, the steps are the same:
1. Tap `Receive and Close`.
2. In the review modal, select the checkboxes for the items you want to close, then tap the Save icon.
3. In the confirmation pop-up, tap `Proceed`.

{% hint style="info" %}
Once you close items in a TO, you can’t receive them again. Make sure no more items are expected before closing.
{% endhint %}

---

## Receiving discrepancies

### Over receiving
If you receive more units than ordered, you can still record them. For example, if the TO is for 100 units but 110 units arrive, you can record all 110.
As you scan or enter items, the progress bar goes beyond the ordered quantity and turns red to show that over-receiving has occurred. This way, you can record the exact quantity received and continue without interruption.


### Under receiving
If fewer units arrive than ordered, you can finalize the TO with the received quantities. For example, if 100 units were ordered but only 80 arrive, you can record 80 and close the order.
This way, the process isn’t blocked even if the order is incomplete—for example, when items were mispicked, delayed, or not shipped.


### Receiving unexpected items
If items arrive that weren’t part of the TO, add them so inventory stays accurate. For example, a product might be packed by mistake or shipped as excess stock.

Steps to add and receive an unexpected item in a TO:
1. Open the TO and tap the (+) icon on the details page to add a product.
2. Search by SKU or name, then tap `Add to Transfer Order`.

The product appears on the TO Details page. Enter the quantity and continue with the standard receiving process so all items that arrive are recorded.

---

## Reporting discrepancies

All receiving discrepancies are captured in the HotWax OMS system. Store managers can monitor the status of all transfer order receipts through the [Receiving Report](../../analytics/reports/inventory.md#receiving-report).
- Over-received items
- Under-received items
- Newly added items

For each item, the report lists the expected quantity, the received quantity, and the difference. You can open the report anytime or schedule it for delivery to specific users. Use it to reconcile receipts and keep inventory records accurate across systems.
