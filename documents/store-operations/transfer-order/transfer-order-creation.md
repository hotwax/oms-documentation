---
description: How to create transfer orders in HotWax Commerce
---

# Transfer Order Creation

Transfer orders let you move inventory between locations—stores, warehouses, or between stores, using HotWax’s `Fulfillment App`.

## Create Transfer Order

While inventory planners can create transfer orders in the Transfers app or external planning systems, store and warehouse associates can manually create transfers directly from the Fulfillment App.

1. Open the `Fulfillment App`.
2. Go to `Transfer Orders`.
3. Tap the `+ (FAB)` button in the bottom-right corner.
4. In the `Create transfer order` modal:
   - Enter a `Transfer name`.
   - Search for and select the `Destination facility`.
5. Tap the `Save` icon to create the order and proceed to the item addition page.

## Key Fields & Actions

| Field                  | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| **Order Name**         | A descriptive name for the transfer order. Tap `Edit` to update the default name.           |
| **Destination**        | The location receiving the stock. Tap `Edit` to choose a different receiving location.      |
| **Return to warehouse**| Toggle on to enable the `Fulfill Only` flow, or leave off for `Fulfill & Receive`.        |
| **Add Items**          | Use the `Scan` segment for barcodes or `Search` for SKU/name to add products to the transfer. Use `Upload` to add items in bulk via CSV. |

{% hint style="info" %}
Once you tap `Pack and ship order`, a shipment is created and the order moves to the `Shipped` status. If you tap `Ship later`, the order is approved and saved for later processing.
{% endhint %}

## Step-by-Step Guide

1. **Verify Order Name & Destination**  
   Review the default order name and destination facility. Tap `Edit` next to either field to make changes.
   
2. **Configure Fulfillment Flow**  
   - **Scan**: Use the barcode scanner for quick entry. Ensure the scanner is focused by tapping `Focus scanning`.
   - **Search**: Switch to the search segment to find products by SKU, name, or parent name.
   - **Upload**: If enabled, use the bulk upload feature to add items via CSV.

### Bulk upload via CSV

Use the `Upload` option from the `Add products` section when you need to add many items to a transfer order.

1. Select the `Upload` segment.
2. Upload your CSV file containing the shipment details.
3. Map each app field to a column in your file.
4. Select `Submit`.

**Required CSV fields:**
- `Product SKU`
- `Quantity`
          
4. **Finalize the Transfer**  
   - **Ship later**: Save the order and approve it without generating a shipment immediately.
   - **Pack and ship order**: Approve the order, pack the items, and generate a transfer shipment.
