---
description: >-
 The Completed Orders page shows all orders that have been picked, packed, and are ready to ship. On this page, store associates can ship orders in bulk, unpack them if needed, download the manifest, and regenerate shipping labels if required.
---

# Completed Orders Page

## Filtering

Store associates can filter orders based on the carrier partner handling the delivery.  

- Selecting **FedEx** will show all orders with FedEx as the carrier.  
- Selecting **UPS** will show only the UPS orders.  
- They can also filter orders by **shipping method**.  

One carrier partner can be selected at a time, like FedEx, but more than one shipping method can be selected.  

For example:  
- If FedEx is selected along with both Standard and Next Day, the page displays all FedEx orders with those two shipping methods.  

If store associates do not want to see all packed orders at once, they can use the `result size` in the top right corner to select how many orders to view.  

For example:  
- If UPS is selected in the filter option and 5 is selected for the result size, then only 5 UPS orders will be shown.  
- This also applies when filtering by both carrier and shipping method.  

## Shipping Orders in Bulk

Store associates can ship orders in bulk using the `Ship` button.  

- This action applies only to the orders visible on the page, based on the selected carrier, shipping method, or the number of orders chosen through the result size.  
- For example, if 10 UPS orders are displayed, tapping the Ship button ships those 10 orders.  

When the `Ship` button is tapped, a confirmation message appears. The message tells how many orders will be shipped and reminds that shipped orders can’t be changed. The associate can either cancel or confirm the action.

Packed orders are also shipped automatically by a background job called `Ship Packed Orders`. When enabled, job checks for orders that are packed and have a tracking number, if applicable.

## Order Details Card

Store associates can also ship orders individually. Store associates can see orders that need to be shipped as well as the ones that have already been shipped. Each order appears as a card with key details.  

- **On the left**: Customer’s name along with the date and time of the order, product image, and product details like the SKU.  
- **In the middle**: Order ID  
- **On the right**: Shipment method, such as Standard or Next Day, and the tracking code if available.  

Each order card shows action buttons such as:  
- `Ship Now`  
- `Print Shipping Label` 
- `Print Customer Letter` (packing slip)  
- `Regenerate Shipping Label`  

When there is an issue with the shipping label, a `Shipping Label Error` button appears. Store associates can use the `Regenerate Shipping Label` button after fixing issues such as:

- No response from the carrier  
- Incorrect address  
- Switching the carrier  
- When the file does not open  

Once the issue is resolved, the shipping label can be regenerated.  

The `Unpack` button lets associates move the order back to the **In Progress** stage if changes are required. Shipped orders remain visible on the page for the rest of the day.

Once unpacked, the shipping label that was previously generated must be voided manually. If there is a change in the shipment, the label will get voided automatically
- If the label is not voided and there are changes to the order, a new shipping label will be generated automatically.
- If there are no changes and the label is not voided, the same label can be printed again.  

To view more information about an order, store associates need to tap on the order name. A pop-up will appear with the options to **Copy ID** and **View Order Details**. Tapping on **View Order Details** will redirect them to the Order Details page.  

## Manifest and Historical Manifest

The `Generate Manifest` and `View Historical Manifest` buttons appear at the bottom right of the page once a carrier partner is selected. Store associates can also select one or more shipment methods for that carrier partner to generate manifests for specific types of shipments.  

The `View Historical Manifest` option allows store associates to check manifests generated in the last seven days.  

Once the `Generate Manifest` button is tapped, the app uses the packed orders to create the manifest. Store associates do not need to fill in any shipment details. 

The app prints three copies:
1. One for the store  
2. One for the carrier  
3. One for the receiving location  

The manifest lists all items in the shipment. It includes quantity, weight, size, and customs details if required.  

This helps during carrier pickups, supports international shipping, and works as a record that the order was handed over. It also helps if something goes missing or gets damaged. The receiving location can use it to check the items that arrive.  

## Order Details Page

The Order Details Page shows all the important information related to an order in one place, making it easier for store teams to process and fulfill shipments.  

- Each product in the order is shown with its name, SKU, size, and quantity.  
- Store staff can tap the `Ship Order` button to start shipping.  
- They can use `Print Customer Letter` to download the packing slip.  
- If any changes have to be made, they can tap `Unpack`.  
- Below the product details, the delivery address and shipping method are shown.  

Associates can select the carrier and method, then tap `Generate Label` or enter the tracking code manually.  

There is a **Shipment Method** card that shows the carrier name, the shipping method, and the tracking code.  

Next to the tracking code, there’s a three-dot menu. When tapped, it shows two options:  
- **View Label** – opens the shipping label.  
- **Void Label** – cancels the label if changes are needed.
