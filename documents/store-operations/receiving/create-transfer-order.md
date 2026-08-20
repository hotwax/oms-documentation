# Create transfer order

Use the Receiving App to create a transfer order and move inventory from one facility to another.

## Before you begin

Review the following setup before creating a transfer order:

- **Permission:** The Create Transfer Order page requires the `APP_TRANSFERORDER_CREATE` permission. Any logged-in user with this permission can access the page.
- **Logged-in facility:** The facility you are logged into becomes the destination for the transfer order. Log in to the facility that will receive the inventory.
- **Product Store:** The selected Product Store determines which facilities and shipping methods are available. If an expected facility or carrier does not appear, check the Product Store configuration.
- **Facility associations:** Origin facilities are loaded from the selected Product Store. Only facilities associated with that store appear in the origin selection list.
- **Shipping method configuration:** Available carriers and shipment methods are loaded based on the selected Product Store. If no options appear, confirm that shipping methods are configured for the store.
- **Barcode settings:** If you plan to add items by scanning, check the barcode identifier type (SKU, UPC, etc.) on the [Settings](settings.md) page before you begin.

## Accessing the Create transfer order page

1. Log in to the Receiving App.
2. From the left-hand sidebar, select `Transfer Orders`.
3. Select the `Add (+)` icon at the bottom-right corner of the `Transfer Orders` page.
4. The `Create transfer order` page opens.

The page is divided into two sections:
- **Left panel:** Transfer order configuration (name, facility assignments, shipping method, and plan)
- **Right panel:** Product search and item list

## Field requirements

The following fields must be completed before the order can be created:

- Transfer name
- Product Store
- Origin facility
- Destination facility (set automatically from your logged-in facility)
- Carrier
- Shipment method
- At least one item with a quantity greater than zero

The following fields are optional:

- Ship date
- Delivery date

Default values:
- **Destination:** Set to your logged-in facility
- **Lifecycle:** `Receive only`
- **Carrier:** First available carrier for the selected Product Store
- **Shipment method:** First available method for the selected carrier

## Name the transfer order

- Enter a descriptive name in the `Transfer name` field at the top of the left panel.

## Assign facilities

The `Assign` card contains the following fields:

### Product Store

- Select the appropriate `Product Store` from the dropdown.
- If only one store exists, it is selected by default and displayed as a label.

### Origin

- Select `Assign` next to `Origin` to open the facility selection modal.
- Search for the origin facility by name.
- Select the facility and confirm.

### Destination

- The `Destination` facility is set to the current facility you are logged into.
- This field is read-only and cannot be changed from this page.

> The origin and destination facilities cannot be the same. If you select an origin that matches the destination, the app displays `Origin and destination facility can't be same`.

## Select shipping method

The `Shipping Method` card contains two fields:

### Carrier

- Select a shipping carrier from the `Carrier` dropdown.
- Available carriers are loaded based on the selected Product Store.
- The first available carrier is selected by default when the page loads.

### Method

- After selecting a carrier, choose a shipment method from the `Method` dropdown.
- Available methods depend on the carrier selected.
- If no shipment methods are configured for a carrier, the app displays `No shipment methods found`.

## Plan the transfer lifecycle

The `Plan` card defines how the transfer order is processed:

### Lifecycle

Select the appropriate lifecycle based on how the transfer is managed:

| Lifecycle | Fulfillment | Receipt | When to use |
| :--- | :--- | :--- | :--- |
| `Fulfill & Receive` | Origin store fulfills in the Fulfillment App | Destination store receives in the Receiving App | Store-to-store transfers managed entirely within HotWax Commerce. The origin store picks, packs, and ships; the destination store receives and accepts the inventory |
| `Fulfill only` | Origin store fulfills in the Fulfillment App | Receipt is handled outside HotWax Commerce | Store-to-warehouse or store-to-external-location transfers where the receiving step is managed by a separate system or process |
| `Receive only` | Fulfillment is handled outside HotWax Commerce | Destination store receives in the Receiving App | Warehouse-to-store transfers where an external system initiates the shipment and the store completes receipt in the Receiving App |

> `Receive only` is selected by default.

### Ship Date

- Select `Select date` next to `Ship Date`.
- Choose the estimated shipment date from the date picker and confirm.

### Delivery Date

- Select `Select date` next to `Delivery Date`.
- Choose the expected delivery date from the date picker and confirm.

> The delivery date cannot be earlier than the ship date.

## Add items to the transfer order

The right panel provides two methods to add products: scan and search. Toggle between these modes using the segment control at the top of the `Add items` card.

### Add items by scanning

1. Select the barcode icon to switch to `Scan` mode.
2. Place your cursor in the `Scan barcode` input field.
3. Scan the product barcode using a connected scanner.
4. The scanned product appears below the input field with a confirmation icon.
5. If the product is already in the order, the app scrolls to the existing item instead of adding a duplicate.

The scanner input field displays one of three states:

- **Scanner ready:** The input field is focused. A green `start scanning` badge appears.
- **Scanner not focused:** A warning appears with a `Focus scanning` button. Select it to refocus the input field.
- **Product not found:** The scanned barcode does not match any product. A `Search` button appears to try a keyword search instead.

> The barcode scanning identifier (SKU, UPC, etc.) can be changed from the `Settings` page.

### Add items by searching

1. Select the search icon to switch to `Search` mode.
2. Enter a keyword in the `Search` field. Search supports parent product name, SKU, or UPC.
3. The app displays the first matching product below the search field. Each result shows the primary and secondary product identifiers configured for your store.
4. Select `Add to Transfer` to add the product to the order. The product is added with a quantity of zero.
5. If more results are available, select `View more results` to open a full product search modal.

> Once a product is added, a green checkmark icon replaces the `Add to Transfer` button.

## Set item quantities

After adding items, each product appears in the item list below the `Add items` card:

- Each row displays the product image, name, and identification details.
- Enter the transfer quantity in the `Qty` field for each item.
- All items must have a valid quantity greater than zero before the order can be created.

### Remove an item

- Select the trash icon on the right side of an item row to remove it from the order.

## Create the transfer order

Before selecting the submit button, review:
- Transfer name, Product Store, origin, and destination are set correctly.
- Carrier and shipment method are selected.
- Lifecycle, ship date, and delivery date are configured as needed.
- All items have a valid quantity greater than zero.

1. Select the checkmark icon at the bottom right of the page.
2. The app validates the order. If any required field is missing or invalid, an error message appears at the top of the screen.
3. On success, a message displays: `Order has been created and sent for admin approval`.
4. You are redirected to the `Transfer Orders` list page.

## Review and approve the transfer order

The newly created transfer order is saved in `Created` status. It does not appear in the Receiving App until it is approved.

1. Open the [Transfers App](../../retail-operations/inventory/transfers-app.md).
2. Find the order on the `Transfer orders` page. You can filter the list by `Created` status or search using the transfer order name.
3. Select the order to open the `Transfer order details` page.
4. Review the facilities, lifecycle, shipping method, dates, items, and ordered quantities.
5. While the order is in `Created` status, you can add items, edit ordered quantities, or remove items.
6. Select `Approve` when the order is ready to proceed.

After approval, the transfer order becomes available for the [fulfillment](../fulfillment/transfer-order.md) or [receiving](transfer-orders.md) actions defined by its lifecycle.

For detailed instructions, see [Find Transfer Orders](../../retail-operations/inventory/find-transfer-order.md) and [Transfer Order Details](../../retail-operations/inventory/transfer-order-details.md).

## Troubleshooting

| Issue | Error message | Resolution |
| :--- | :--- | :--- |
| No items added | `Please add at least one item in the order.` | Add at least one product using scan or search |
| Transfer name is empty | `Please give some valid transfer order name.` | Enter a name in the `Transfer name` field |
| Required field missing | `Please select all the required properties assigned to the order.` | Select a Product Store, origin, destination, carrier, and shipment method |
| Origin and destination are the same | `Origin and destination facility can't be same.` | Select a different origin facility |
| Item quantity is zero or invalid | `Order items must have a valid ordered quantity.` | Enter a quantity greater than zero for each item |
| Lifecycle not selected | `Please select transfer order lifecycle.` | Select a lifecycle from the `Plan` card |
| Order creation fails | `Failed to create order.` | Retry the action. If it continues to fail, contact your administrator or support with the error details |
| Expected facility not listed | — | Check the selected Product Store and its facility configuration |
| No shipping methods available | `No shipment methods found` | Configure shipment methods for the selected carrier in the Product Store settings |
