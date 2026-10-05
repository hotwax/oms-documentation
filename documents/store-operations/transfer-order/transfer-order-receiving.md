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
- **Enter an identifier:** Enter the configured product identifier in the **Scan items** input field and press Enter.

Each scan or identifier entry adds one unit and updates the progress bar. You can also enter received quantities manually once an item is selected.

> **Tip:** Use `Scan all` to fill an item’s remaining expected quantity only when those units physically arrived. With Receive by fulfillment enabled, expected quantities follow fulfilled units. Force scan settings can disable manual quantity entry and bulk scanning.

## Multiple receiving scenarios

Choose an action according to whether more inventory is expected. The [receiving decision diagram](../receiving/transfer-orders.md#choose-whether-to-save-or-complete) shows the handoff between entering quantities, saving a receipt, and completing the selected items.

### Receive items partially and keep the order open

- Record only the quantities that arrived.
- Tap `Save progress` and review the confirmation or any over-receiving discrepancies.
- Confirm the receipt. Fully received items close automatically; items still awaiting inventory remain open.

### Receive items partially, close specific items and keep the order open

When receiving a selected box, check its visible items and quantities before closing. `Receive and complete` receives and completes those items; hidden items remain open. The discrepancy checkboxes acknowledge quantity differences, rather than selecting which items to close.

If more units are expected for an item in that scope, use `Save progress` instead.

### Receive items partially and close the order

If no more units are expected, select the order's open items without a box filter. Enter the actual quantities, including `0` for items that did not arrive, then follow the closing steps below.

### Receive all items and close the order

Use `Scan all` for each fully received item when bulk scanning is available. Verify the quantities, then follow the closing steps below.

### Standard closing steps

1. Check whether a box is selected. With a box selected, only its visible items will close; without one, the action covers the order's open items.
2. Enter an actual received quantity for every item in that scope, including `0` for items that did not arrive.
3. Tap `Receive and complete`. If quantities are missing, the app shows the items that need an entry.
4. If quantities match expectations, review the closing confirmation and tap `Proceed`. If there are discrepancies, review and check every listed discrepancy, then tap `Complete transfer order`.

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

Receiving discrepancies are captured in the HotWax OMS system. Store managers can monitor the status of all transfer order receipts through the [Receiving Report](../../analytics/reports/inventory.md#receiving-report).

- Over-received items
- Under-received items
- Newly added items

For each item, the report lists the expected quantity, the received quantity, and the difference. You can open the report anytime or schedule it for delivery to specific users. Use it to reconcile receipts and keep inventory records accurate across systems.
