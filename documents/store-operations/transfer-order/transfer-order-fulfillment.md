---
description: How to fulfill transfer orders in HotWax Commerce
---

# Transfer Order Fulfillment

Use the Fulfillment App to fulfill Transfer Orders (TOs). Use the app for store-to-store and store-to-warehouse transfers; complete warehouse-to-store transfers in your Warehouse Management System (WMS). This guide covers locating a TO, picking and packing inventory, creating shipments, handling exceptions, and completing fulfillment.


{% embed url="https://drive.google.com/file/d/1nQKJm8V-y4kvYDvCaQIM1UUYcRACrLmK/view?usp=drive_link" %}
Inventory Transfer Fulfillment
{% endembed %}

## Fulfilling a TO

### Locate the TO
- Open the **Transfer Orders** page.
- Use the search bar to look up the TO by ID or name.
- You only see TOs where the origin facility matches your selected facility.


### Review TO details
Opening a TO displays:
- Item list with product name, image, SKU, and ordered quantity.
- Total number of items to fulfill.
- A progress bar that shows fulfillment progress per item.

This view helps you verify items before starting fulfillment.


### Print picklist
- Select **Print Picklist** to generate a packing checklist.
- For details, see [Transfer Order Picklist](picklist.md).


### Pick items
Pick items using one of three methods:
1. **Barcode scanner:** Scanning selects the item and increments the picked quantity.
2. **iPad camera:** Tap **Scan** to open the camera and scan the barcode.
3. **Enter SKU:** Enter the SKU in the **Scan Item** field.

Each scan or SKU entry adds one unit and updates the progress bar. You can also manually enter picked quantities once an item is selected.

> **Tip:** Use `Pick All` when you are picking the entire ordered quantity for an item.


### Create shipment
TOs may be fulfilled in multiple shipments or in a single shipment.

#### Fulfill in multiple shipments
If you are fulfilling multiple shipments, record only the items for the current shipment. The rest remain open until fulfilled later.
- Enter quantities for the items included in the current shipment.
- Tap **Create Shipment** and confirm by selecting **Create**.

#### Fulfill in single shipment
When the entire TO is fulfilled at once, all items are picked and shipped together.
- Tap **Pick All** for every item in the TO.
- Tap **Create Shipment** and confirm by selecting **Create**.

Once a shipment is created, the TO is marked as fulfilled and cannot be edited.


### Review shipment
After a shipment is created, the **Review shipment** page opens. Choose either to:
- Tap **Generate shipping label** to fetch carrier and tracking information automatically, or
- Enter the carrier and tracking code manually.


### Complete shipment
After entering the tracking code:
- Select **Complete Shipment**.
- Confirm by tapping **Ship**.


## Exception handling

### Rejecting an item in a TO
If an item cannot be fulfilled (missing inventory, damage, or incorrect listing), reject it. Rejecting any item rejects the entire TO and records an inventory variance so future orders plan against accurate stock.

Steps to reject an item:
- Open the **Report an Issue** dropdown next to the item.
{% hint style="info" %}
The **Report an Issue** dropdown is only available if no shipments have been created for the TO.
{% endhint %}
- Select a rejection reason (for example, Not in stock, Mismatch, or Damaged).
- Remaining items default to **No Variance** and the **Reject Items** button appears.
- Select **Reject Items** and confirm by tapping **Reject**.

After rejection, the TO moves to **Rejected Order Parking**, and inventory variance is logged based on the selected reason. For details on rejection reasons, see **Rejections**.


### Cancelling an item in a TO
You can cancel a specific item even if it has been partially fulfilled (for example, low stock, damaged inventory, or a cutoff). Cancelled items are no longer available for fulfillment in either app.

Steps to close an item:
- Tap **Close Items**.
- In the review dialog, select the checkboxes for the items to close, then tap the **Save** icon.
- When prompted, tap **Proceed** to confirm.

Closed items are removed from the TO in both the Fulfillment App and the Receiving App.
