# Transfer App

## Overview

The Transfers App enables operations and inventory teams to create, manage and track transfer orders between facilities. The app provides visibility into inventory movement across locations and eliminates the need to switch between eCommerce and ERP systems.

## Key Features

Along with creating and managing transfer orders, the Transfers App includes key features to help operations teams track and manage inventory movement between locations.

### Transfer Order List
View and manage all transfer orders in a single interface with details such as origin, destination, status, and creation date.

### Create Transfer Orders
The Create Transfer Order page allows operations teams to initiate new transfer orders to move inventory between locations using the “+” action button.

### Transfer Status Tracking
The Transfer Status Tracking helps to monitor the status of transfer orders, such as Approved or Cancelled, to track the progress of inventory movement.

### Filter Transfer Orders
Filters help narrow down transfer orders based on location, shipping method, lifecycle type, or status.

### Sorting and Grouping
The Sorting and Grouping allows operations teams to organize transfer orders by grouping or sorting them by attributes such as order item or created date.

### Location Visibility
Track where inventory is moving by viewing origin and destination locations for every transfer order.

### Bulk Transfer Order Upload
Bulk Upload allows operations teams to create multiple transfer orders or transfer orders containing many products at once by uploading a CSV file.

## Transfer Order

On this page, users can search and filter transfer orders, review transfer details, track their status, and create new transfer orders.

### Search and Filter Transfer Orders
To locate a specific transfer order (TO), users can use the search functionality or apply filters on the page.

#### Search Transfer Orders
Users can search for a transfer order from the top of the page. They can search for a transfer order by TO name.

#### Apply Filters to Transfer Orders

#### Steps to filter transfer orders

1. From the left menu, navigate to the `Location` or `Fulfillment` section.
2. Click the dropdown arrow next to the relevant filter name.
3. Choose the appropriate value from the dropdown list.

Here are the options to filter transfer orders:

**By Location:**
- **Product Store:** Use this filter to view transfer orders associated with a specific product store by selecting the desired store instead of the default All option.
- **Origin:** Use this filter to view transfer orders originating from a specific facility.
- **Destination:** Use this filter to view transfer orders headed to a specific facility.

Location filters help identify transfer orders based on their origin or destination facilities, making it easier to track product movement between locations.

**By Fulfillment:**
- **Method:** Use this filter to select different shipping methods and view the corresponding transfer orders.
- **Carrier:** Use this filter to view all transfer orders that are being shipped or will be shipped through a specific carrier, such as FedEx or UPS.
- **Type:** The Type filter helps identify transfer orders based on their lifecycle, such as Fulfill Only, Receive Only, or Fulfill and Receive only.
- **Status:** To view transfer orders based on their current status, such as `Approved`, `Cancelled`, `Created`, and `Completed`.

These filters make it easier to track shipping priorities, review carrier volumes and monitor transfer progress.

### Organize Orders by Attributes

At the top of the `Find Transfer Order` page, locate the `Group By` option.
Click the dropdown menu and select the relevant value from the list.

Transfer orders can be grouped using the following options:

- **Order Item:** By default, the Transfer Orders page displays transfer orders grouped by Order Item. It also provides key details such as the origin and destination facilities, total quantity ordered, received, shipped, and the current status of the transfer order.
- **Destination:** Grouping by destination shows transfer orders based on the receiving facility. It displays the total number of items ordered, shipped and received for each destination. After grouping by destination, click the dropdown on any destination line item to view all transfer orders for that destination.
- **Destination and Product:** This grouping shows products that are going to a specific destination facility. It helps to track which products are being sent to which destination provides the total quantity of product ordered, shipped, and received. After grouping by Destination and Product, users can click on the drop-down of the destination line item. This shows all transfer orders that include that product for a particular destination.
- **Origin:** Grouping by Origin helps users to view transfer orders based on the facility fulfilling the order. It displays the total number of items ordered, shipped, and received from each origin. After grouping, click the dropdown on any Origin line item to view all transfer orders going from that origin.
- **Origin and Product:** This grouping shows products that are being sent from a specific origin facility. It helps track which products are shipped from each location. Also, this provides the total quantity of product ordered, shipped, and received. After grouping by Origin and Product, the users can also see all transfer orders that include that product.

### Sort Orders by Date

Users can sort transfer orders by Created Date from the top-right corner of the page by clicking the arrow icon to toggle between ascending and descending order.

## Create a New Transfer Order

There are two ways to create a transfer order: manually or through bulk upload. Bulk upload allows multiple transfer orders to be created at once using a CSV file, while manual creation is used for creating individual transfer orders.

### Steps to Create a Transfer Order

To create a new transfer order, click the `+` icon located at the bottom-right corner of the `Transfer Orders` page. This opens the `Create Transfer Order` screen.

### Initiate a Transfer Manually

#### Name the Transfer Order
At the top left of the page, enter a unique name for the transfer order. This name helps to easily identify the TO later.

#### Assign Origin and Destination
1. Locate the `Assign` section in the left-hand menu.
2. Select the Product Store. If only one store exists, it will be selected by default.
3. Click the chip next to `Origin` and select the origin facility from the `Facility` modal.
4. Then, click `Assign` to select the destination facility.

#### Choose a Shipping Method
1. Locate the `Shipping Method` section below the `Assign` card.
2. Choose the `Carrier` by clicking the dropdown.
3. Choose the shipping method by clicking the dropdown.

#### Schedule Ship and Delivery Dates
1. Locate the `Plan` section in the left-hand menu.
2. Based on transfer type, select the appropriate lifecycle.
   - **Store to Store:** Select `Fulfill and Receive` (managed entirely in OMS).
   - **Store to Warehouse:** Select `Fulfill only` (post-fulfillment handled by WMS).
   - **Warehouse to Store:** Select `Receive only` (fulfillment initiated from WMS, receipt completed in OMS).
3. Set the `Ship Date` and click `Done`.
4. Set the `Delivery Date` and click `Done`.

#### Add Products to the TO
1. Search for the product using its SKU.
2. Once it appears on the right side, click the ‘+’ icon to add it to the TO.

Upon adding a product, you can see three options for quantity selection:

- **Book QOH (Quantity on Hand):** Use this when transferring the entire available stock from the origin facility.
- **Book ATP (Available to Promise):** Select this to transfer only the available (unallocated) quantity.
- **Book Custom Quantity:** Use this option to specify a custom quantity to transfer.

> [!NOTE]
> Use the check box in the top row to enable bulk edit for all added items.

#### Create Transfer Order
Click the checkmark icon in the bottom right corner to create the transfer order. This creates the transfer order in `Created` status, allowing users to add items or modify the quantity of ordered items before the transfer order is approved.

### Create Orders in Bulk via CSV

Bulk Upload allows users to create multiple transfer orders at once using a CSV file.

To create multiple transfer orders using bulk upload or transfer order containing large number of products, navigate to the `Bulk Upload` section and follow these steps:

#### Download the Template
Download the CSV template from the Upload menu on the Transfer Orders page. The template provides the correct structure and required fields needed to create transfer orders through bulk upload.

#### Prepare the CSV File

The following fields are required in the CSV and must contain valid data to successfully create transfer orders.

- **External Order ID:** A unique identifier for the transfer order to distinguish it from other orders in the system.
- **Origin Facility ID:** Use the ID of the facility from which the inventory will be shipped.
- **Destination Facility ID:** Use the ID of the facility where the inventory will be received.
- **SKU:** Enter the SKUs of the product that needs to be transferred.
- **Quantity:** Enter the number of units of the product that will be transferred.

The following optional fields can be included in the CSV to provide additional details for the transfer order.

- **Order Name:** Specify a name for the transfer order to make it easier to identify and reference.
- **Product Store ID:** Enter the ID of the product store associated with the transfer order. If left blank, the system may default to the current store.
- **Carrier Party ID:** Enter the ID of the carrier responsible for shipping the transfer order.
- **Shipment Method Type ID:** Specify the shipment method that will be used to transport the items.
- **Status Flow ID:** Enter the status flow that defines the lifecycle the transfer order will follow during processing.
- **Ship Date:** Enter the estimated date when the transfer order will be shipped from the origin facility in YYYY-MM-DD format.
- **Delivery Date:** Enter the estimated date when the transfer order is expected to arrive at the destination facility in YYYY-MM-DD format.

#### Upload the CSV File

After completing the file, save it in CSV format and upload it using the Upload option. Once the file is uploaded successfully, the system processes the entries and creates the corresponding transfer orders automatically.

This method eliminates the need to create transfer orders individually and significantly speeds up the process when managing large inventory transfers.

## Manage Order Details and Configurations

Once the transfer order is created, you are taken to the `Transfer Order Details` page. This page provides information about the selected transfer order and allows you to review, modify, and manage items before the transfer order is approved.

### Transfer Order Configurations

- **Carrier:** You can review and change the selected carrier. Once a carrier is selected, the available shipment methods configured for that carrier will appear below this section. You can also select or change the shipment method based on the available options.
- **Summary:** The `Summary` section provides a quick overview of the status of items included in the transfer order. This helps track the progress of fulfillment and receiving activities.
  - **All:** Displays the total number of items included in the transfer order.
  - **Pending Fulfillment:** Displays the number of items that still need to be fulfilled from the origin facility.
  - **Pending Receipt:** Displays the number of items that have been fulfilled but are yet to be received at the destination facility.
  - **Completed:** Displays the number of items that have been successfully fulfilled and received.
- **Item Actions:** Each item in the transfer order includes additional actions accessible through the more options menu (⋮).
  - **Edit Ordered Quantity:** Allows the quantity of the item in the transfer order to be modified before the order is approved.
  - **Remove Item:** Removes the selected item from the transfer order.
- **Add Items:** The `Add Items` button allows you to add additional products to the transfer order before it is approved.
- **Approve:** The `Approve` button finalizes the transfer order and moves it from `Created` status to the next stage in the transfer process, allowing fulfillment and receiving activities to begin.
- **Close Order:** Select `Close Order` to cancel the transfer order if it is no longer required. Once closed, the transfer order will not proceed to fulfillment or receiving, and no further actions can be performed on it.
- **View Facility Details:** Select the redirect icon on the facility card to open the facility in the `Facilities` app. This redirects to the `Facility Details` page, where additional facility information can be viewed and updated.

> [!NOTE]
> Transfer orders can also be configured to be automatically approved by the `Approve Transfer Orders` job at scheduled intervals.

## Execute Fulfillment and Receipt

Each item in the transfer order includes additional actions that can be accessed through the more options menu (⋮) next to the item. These actions help manage the fulfillment and receiving of individual items within the transfer order.

- **Fulfill:** Select `Fulfill` to begin the fulfillment process for the item at the origin facility. The user is redirected to the transfer order details page in the `Fulfillment` app where the user can fulfill the items of the transfer order.
- **Receive:** Select `Receive` to record the receipt of items at the destination facility once they arrive. The user is redirected to the transfer order details page in the `Receiving` app where the user can receive the items of the transfer order.
- **Close Fulfillment:** Select `Close Fulfillment` to stop fulfillment for the item if no quantity has been shipped. This action prevents fulfillment attempts for that item.

> [!NOTE]
> **Partially Shipped Items**
> When only a portion of the ordered quantity is fulfilled from the origin facility, the item is marked as `Under Shipped` and remains in `Pending Receipt` status.

### Item Status

Each item in a transfer order displays a status that indicates its progress in the transfer lifecycle. These statuses help users track fulfillment and receiving activities for individual items.

- **Pending Fulfillment:** This status indicates that the item has not yet been fulfilled from the origin facility. The ordered quantity is still awaiting shipment.
- **Pending Receipt:** This status indicates that the item has been fulfilled and shipped from the origin facility but has not yet been received at the destination facility.
- **Completed:** This status indicates that the item has been successfully fulfilled from the origin facility and fully received at the destination facility.
- **Under Shipped:** This status appears when the quantity fulfilled from the origin facility is less than the ordered quantity.
- **Over Received:** This status appears when the quantity received at the destination facility is greater than the quantity that was fulfilled or expected. This helps identify discrepancies during the receiving process.

## Receive Orders in Bulk

The `Bulk Receive` action allows you to receive multiple items in a transfer order at once, instead of receiving each item individually. This helps speed up the receiving process when multiple items arrive at the destination facility together.

To perform a bulk receive, select Bulk Receive on the Transfer Order Details page. A dialog box will appear showing the number of items and units that will be received. Users can choose how the items should be received using the following options:

- **Remaining Issued Quantity:** Receives the remaining quantity that was fulfilled and shipped from the origin facility.
- **Remaining Ordered Quantity:** Receives the remaining quantity based on the originally ordered quantity.
- **Close Items with 0 Receipt:** Closes items that have no received quantity, indicating that those items will be marked as cancelled.

After selecting the preferred option, click Proceed to complete the bulk receiving process.

> [!NOTE]
> Items that are still in Pending Fulfillment status will be skipped during the bulk receive action.

## Timeline

The Timeline displays a chronological record of key transfer order events, such as approval, shipment, receipt and completion along with their corresponding timestamps.

## Settings

The Settings page allows users to configure application preferences such as product store, product identifier and timezone used within the Transfers App.

### Product Store
A Product Store represents a brand or a set of products. If your OMS is connected to multiple eCommerce brands selling different product collections, you can have separate Product Stores in HotWax Commerce.

### Product Identifier
Users can choose primary and secondary product identifiers (such as product ID, product title, SKU, etc.) to view products with preferred identifiers in the app.

### Timezone
This option allows you to select an appropriate timezone for consistency and to optimize operations according to local time.