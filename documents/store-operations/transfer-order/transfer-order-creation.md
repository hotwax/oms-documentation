---
description: How to create transfer orders in HotWax Commerce
---

# Transfer Order Creation

Transfer orders let you move inventory between locations—stores, warehouses, or between stores, using HotWax’s **Fulfillment App**.

## Create Transfer Order

While inventory planners can create transfer orders in NetSuite, store and warehouse associates can manually create transfers directly from the Fulfillment App.

1. Open the **Fulfillment App**.
2. Go to **Transfer Orders**.
3. Tap the **+ (FAB)** button in the bottom-right corner.
4. In the **Create transfer order** modal:
   - Enter a **Transfer name**.
   - Search for and select the **Destination facility**.
5. Tap the **Save** icon to create the order and proceed to the item addition page.

## Key Fields & Actions

| Field                  | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| **Transfer Name**      | A descriptive name for the transfer order. Tap **Edit** to update.                            |
| **Destination**        | The location receiving the stock. Tap **Edit** to change.                                     |
| **Return to warehouse**| Toggle on to enable the **Fulfill Only** flow, or leave off for **Fulfill & Receive**.        |
| **Add items**          | Add products to the transfer using the **Scan** or **Search** segments.                       |

### Adding Items

- **Scan**: Use a barcode scanner to quickly add items. If the scanner loses focus, tap **Focus scanning**.
- **Search**: Find products by Parent name, SKU, or UPC.
- **Manual Match**: If a scanned barcode is not found, you can manually search for the product.

## Finalizing the Transfer

Once items are added, use the footer buttons to finalize the order:

- **Discard order**: Cancels the creation and returns to the Transfer Orders list.
- **Ship later**: Approves the order and saves it for later processing without immediate shipment.
- **Pack and ship order**: Approves the order, marks the items as packed, and generates a transfer shipment.
