---
description: Create a new transfer order in the Transfers App.
---

# Transfer Order Creation

Use the Transfers App to create a Transfer Order (TO) and move inventory between facilities.

## Create a new TO
1. Select the **Add (+)** icon.
2. The Create Transfer Order page opens to capture order details.

## Name the TO
- Enter a clear, searchable name so the TO is easy to find later.

## Assign store and facilities
- **Product Store:** The available product store is selected by default; change it if needed.
- **Origin:** Select **Assign** next to Origin (or the preselected facility) and choose the shipping facility.
- **Destination:** Select **Assign** next to Destination and choose the receiving facility.

## Select shipping method
- **Carrier:** Choose a shipping carrier (for example, FedEx).
- **Method:** Choose a supported method for that carrier (for example, Standard, Same Day, or Next Day).

## Plan shipping and delivery dates
- **Ship Date:** Select the shipment date from the calendar.
- **Delivery Date:** Select the expected delivery date.

## Add items to the TO
Add items manually or by uploading a CSV.

### Bulk upload via CSV
Recommended for TOs with many items.
- In the **Import items CSV** section, download the sample file if needed.
- Upload the CSV containing SKUs and quantities.
- After upload, select the product identifier type and map the identifier and quantity columns.

### Manually add items
Recommended for TOs with only one or a few items.
- Search by SKU or another identifier.
- When the product appears, select the **Add (+)** icon.

## Set item quantities
Quantities can be set per item or in bulk.

### Per-item quantities
- Enter the quantity directly or use the stepper arrows.
- Use the ellipsis (⋮) menu to **Book QoH** (all on-hand stock) or **Book ATP** (available-to-promise stock).
- Select **Remove from order** in the same menu to delete an item.

### Bulk quantities
- Select the checkbox above the item list to select all items.
- Apply **Book QoH**, **Book ATP**, or **Custom Quantity** to update every item at once.

## Finalize the TO
1. Review the destination facility, shipping method, transfer dates, and item quantities.
2. Select the checkmark icon in the lower-right corner to create the TO.

After creation, you land on the Transfer Order Details page with the order in Created status.
