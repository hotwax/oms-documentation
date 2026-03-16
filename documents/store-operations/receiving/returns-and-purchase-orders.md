---
description: >-
  Manage purchase orders and returns while
  keeping inventory counts accurate.
---

# Returns and purchase orders

The Receiving app also supports purchase-order receipts and return receipts. These flows share core actions such as barcode scanning, quantity entry, progress indicators, and inventory updates, but their screens are not identical to the transfer-order workflow.

## Purchase orders

Purchase orders are supplier-facing inventory orders that can be received directly in the app.

### Purchase orders list

The `Purchase Orders` page includes:

* A search bar.  
* `Open` and `Completed` filters.  
* Refresh and load-more controls.

Open purchase orders include records in `Created` or `Approved` status.

### Purchase order detail

The Purchase Order detail page shows:

* A scan field and camera-based scanning action while the order is still open.  
* Pending and completed item sections.  
* Item cards with product image, identifiers, facility location, `Qty`, `Receive All`, a progress bar, and received history.  
* `Receive` and `Receive And Close` actions.

Use `Receive` to create and receive inventory for the quantities entered while keeping the purchase order open for later receipts. Use `Receive And Close` when you are ready to close the remaining items on the purchase order.

Purchase orders support partial receiving across multiple receipts, so users can receive inventory in stages as shipments arrive.

## Returns

The `Returns` section is used to receive return shipments and add returned stock back into inventory when applicable.

### Returns list

The `Returns` page includes:

* A search bar.  
* `Open` and `Completed` filters.  
* Refresh and load-more controls.

Users can search returns by values such as return shipment ID, tracking code, external ID, HotWax order ID, or Shopify order name.

### Return detail

The Return detail page shows:

* Return header information and status.  
* A scan field and camera-based scanning while the return is still receivable.  
* Item cards with product image, identifiers, QOH, `Qty`, `Receive All`, and a progress bar against the returned quantity.  
* A floating action button to complete receiving when at least one quantity has been entered.

If the return is already completed or no longer receivable, the same field is used to search and highlight items instead of updating quantities.

## Related guides

* For transfer-order receiving, see [Transfer Orders](transfer-orders.md).
