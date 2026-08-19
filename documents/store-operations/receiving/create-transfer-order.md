# Create transfer order

Use the Receiving App to create a transfer order and move inventory from one facility to another.

## Accessing the Create transfer order page

1. Log in to the Receiving App.
2. From the left-hand sidebar, select `Transfer Orders`.
3. Select the `Add (+)` icon at the bottom-right corner of the `Transfer Orders` page.
4. The `Create transfer order` page opens.

The page is divided into two sections:
- **Left panel:** Transfer order configuration (name, facility assignments, shipping method, and plan)
- **Right panel:** Product search and item list

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

> The origin and destination facilities cannot be the same. The app displays an error if you select an origin that matches the destination.

## Select shipping method

The `Shipping Method` card contains two fields:

### Carrier

- Select a shipping carrier from the `Carrier` dropdown.
- Available carriers are configured for your product store.

### Method

- After selecting a carrier, choose a shipment method from the `Method` dropdown.
- Available methods depend on the carrier selected.
- If no shipment methods are configured for a carrier, the app displays `No shipment methods found`.

## Plan the transfer lifecycle

The `Plan` card defines how the transfer order is processed:

### Lifecycle

Select the appropriate lifecycle based on how the transfer is managed:

| Lifecycle | When to use |
| :--- | :--- |
| `Fulfill & Receive` | Store-to-store transfers managed entirely within OMS |
| `Fulfill only` | Store-to-warehouse transfers where post-fulfillment is handled by an external WMS |
| `Receive only` | Warehouse-to-store transfers where fulfillment starts externally and receipt is completed in OMS |

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
3. Matching products appear below the search field.
4. Select `Add to Transfer` to add the product to the order.
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

1. Select the checkmark icon at the bottom right of the page.
2. The app validates the order. If any required field is missing or invalid, an error message appears.
3. On success, a message displays: `Order has been created and sent for admin approval`.
4. You are redirected to the `Transfer Orders` list page.

> The newly created transfer order appears in `Created` status. You can add items or edit quantities before the order is approved.
