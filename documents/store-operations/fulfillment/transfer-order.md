---
description: How to create transfer orders in HotWax Commerce
---

# Creating Transfer Orders in the Fulfillment App

Store associates can generate transfer orders directly within the `Fulfillment App`. This document provides step-by-step instructions for creating transfer orders.

### Accessing the Transfer Order Page

1. Open the **Fulfillment App**
2. On the **left-side panel**, locate and click **Transfer Orders**
   - This will display a list of all existing transfer orders

### Creating a New Transfer Order

1. On the **Transfer Orders** page, click the **Add (+)** button in the **bottom-right corner**. This will open the **Create Transfer Order** page

## Filling Out Transfer Order Details

### Assign Section (Top-Left Card)

- **Transfer Name**: Enter a name for the transfer order (e.g., "Spring Inventory Transfer")
- **Origin**: Automatically set to your current facility (e.g., *Staten Island*)
- **Destination**:
  1. Click the **Assign** button next to "Destination"
  2. In the pop-up modal, select the receiving facility
  3. Click **Save**

### Shipping Method Section (Middle-Left Card)

- **Carrier**:
  1. Click the dropdown under **Carrier**
  2. Select an option (e.g., *FEDEX*)
- **Method**:
  1. Click the dropdown under **Method**
  2. Select a shipping option (e.g., *Ground Economy*)

### Plan Section (Bottom-Left Card)

- **Lifecycle**: Choose the appropriate lifecycle based on the transfer type.
   1. **Store to Store:** Select Fulfill and Receive (managed entirely in the OMS)
   2. **Store to Warehouse:** Select Fulfill only (post-fulfillment handled by the WMS)
      
- **Ship Date**:
  1. Click the **SELECT DATE** field
  2. Choose the shipment date from the calendar
- **Delivery Date**:
  1. Click the **SELECT DATE** field
  2. Choose the estimated delivery date

## Adding Items to the Transfer Order

### Bulk Upload via CSV (Recommended for Multiple Items)

1. **Locate the CSV upload section** on the right side of the page, below the **Plan** card
2. Click **Import Items CSV** to upload your file
3. Click **Download Example** to get a sample CSV template
4. After uploading:
   - **Select Product Identifier**: Choose the identifier type (e.g., SKU)
   - **Map Columns**: Assign the correct CSV columns for *Identifier* and *Quantity*

### Manually Add Items

1. In the **Add Product** field, search by **SKU**
2. Tap **Scan** to use your barcode scanner
3. Click the **+ Add** button to include the item in the order

## Managing Item Quantities

After adding items, use the **bulk action buttons** above the item list:
- **Book ATP**: Allocates the maximum available stock for all items
- **Book QOH**: Books the full on-hand quantity for all items
- **Custom Quantity**: Enter a specific quantity for all items

### Actions for Individual Items

- **Edit Quantity**: Click the **ellipsis** on an item row and select an option
- **Remove Item**: Choose **Remove Item from Order** in the same menu

## Finalizing the Transfer Order

1. Double-check all details:
   - **Destination** facility
   - **Shipping Method**
   - **Dates** (Ship & Delivery)
   - **Items & Quantities**
2. Click the **✓ (Finalize)** button at the **bottom-right** of the page
3. The transfer order will now be created and will be ready for fulfillment. Please refer to this [user manual](https://docs.hotwax.co/documents/store-operations/inventory/transfer-order-management/transfer-order-fulfillment) for instructions on fulfilling transfer orders
