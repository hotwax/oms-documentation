---
description: Create a new transfer order in the Transfers App.
---

# Transfer Order Creation

Use the Transfers App to create a Transfer Order (TO) and move inventory between facilities.

## Create a new TO
1. Select the `Add (+)` icon on the `Transfer orders` page.
2. The `Create transfer order` page opens.

## Name the TO
- Enter a clear, searchable name in `Transfer name`.

## Assign store and facilities
- `Product Store`: The current product store is selected by default. Change it if needed.
- `Origin`: Select `Assign` and choose the shipping facility.
- `Destination`: Select `Assign` and choose the receiving facility.

## Select shipping method
- `Carrier`: Choose a shipping carrier.
- `Method`: Choose one of the methods available for that carrier.

## Plan the transfer lifecycle
- `Lifecycle`: Choose `Fulfill & Receive`, `Fulfill only`, or `Receive only`.
- `Ship Date`: Select the shipment date from the calendar.
- `Delivery Date`: Select the expected delivery date.

## Add items to the TO
Add items manually or through `Bulk upload`.

### Add items manually
- Search in `Add product`. The search uses SKU.
- Review the `Search result`.
- Select the `Add (+)` icon to add the product to the order.

When a product is added, the row shows the available `QOH` and a `Qty` field.

## Set item quantities
- Enter a value in `Qty` to set the ordered quantity for one item.
- Use `Book QoH` to copy on-hand quantity into `Qty`.
- Use `Book ATP` to copy available-to-promise quantity into `Qty`.
- Use `Custom Qty` to apply the same quantity to all selected items.
- Select the top checkbox to include all eligible items in a bulk action.

### Bulk upload via CSV
Use `Bulk upload` from the top-right corner of the `Create transfer order` page when you need to create many TOs or add many items.

1. Open `Bulk upload`.
2. Select `Download template` if you need a sample file.
3. Upload your CSV.
4. Map each app field to a column in your file.
5. Select `Submit`.

Required fields:
- `External Order ID`
- `Origin Facility ID`
- `Destination Facility ID`
- `SKU`
- `Quantity`

Optional fields:
- `Order Name`
- `Product Store ID`
- `Carrier Party ID`
- `Shipment Method Type ID`
- `Status Flow ID`
- `Ship Date`
- `Delivery Date`

The uploaded file can contain one row per item. Reuse the same `External Order ID` for multiple rows that belong to the same transfer order.

## Finalize the TO
1. Review the destination facility, shipping method, transfer dates, and item quantities.
2. Select the checkmark icon in the lower-right corner to create the TO.

After creation, you land on the Transfer Order Details page with the order in Created status.
