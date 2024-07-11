# Manage transfer order from Store to Warehouse

Stores wishing to return excess or unsold inventory to the warehouse collaborate with the warehouse manager to generate a transfer order. This facilitates the transfer of inventory from the store location back to the warehouse.

### Export Created Transfer Orders from NetSuite

Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as the warehouse. These transfer orders are automatically assigned a Pending Fulfillment status.

### Import Transfer Orders into HotWax Commerce

A scheduled job `Import Transfer Order` in HotWax Commerce OMS reads the transfer orders CSV file from the SFTP location and downloads transfer orders in HotWax Commerce with a default `Created` status.

### Approve Transfer Orders

A scheduled job `Approve transfer orders` in HotWax Commerce OMS identifies all transfer orders in the `Created` status and automatically marks them as `Approved`.

### Fulfill Transfer Orders using the Store Fulfillment App

Once approved, transfer orders are automatically reflected at the source location in the Store Fulfillment App so that store associates can create shipments and ship transfer order items. Here’s how store associates can fulfill transfer orders from the Fulfillment App:

1. Navigate to the `Transfer order` page in the `Fulfillment` app.
2. Use the search bar in the transfer order section to find the transfer order you want to create a shipment for.
3. Once you've located the desired transfer order, click on it to access its details page.
4. On the transfer order details page, you'll typically find two tabs: "Open" and "Completed."
    - The "Open" tab displays items that have not yet been shipped.
    - The "Completed" tab displays items that have been shipped.
5. Store associates can scan barcodes or manually enter the quantity of items to be shipped in the Item cards.
6. Click on the "Create Shipment" button, located in the bottom right corner of the page.
7. On clicking the `create shipment button`, the user will land on the transfer shipment review page. Click on `generate shipping label` to fetch the tracking code and carrier information or you can manually add the shipping label information
8. Click on the `arrow icon` located at the bottom right corner of the page to complete the shipment.

Once a partial ship transfer order item is processed, it will appear in the completed tab. No modifications can be made to the items after they have been shipped. However, adjustments can still be made to the transfer order itself.

Note: Store associates are not allowed to insert more than the intended item quantities. The bar turns red if the user tries to overship item quantities.

### Export Fulfilled Transfer Orders Items from HotWax Commerce

A scheduled job in HotWax Commerce Integration Platform generates a JSON file with all the transfer order items that are in the `Completed` status and securely places the file in an SFTP location, making it accessible for NetSuite.


### Import Fulfilled Transfer Orders Items in NetSuite

In NetSuite, a scheduled SuiteScript reads this JSON file containing fulfilled transfer order items from the SFTP location. The script iterates through each record, creates item fulfillment records, and reduces inventory count in NetSuite for items shipped from the store. Once item fulfillment records are created for each transfer order item, the status of the transfer order in NetSuite is automatically updated from `Pending Fulfillment` to `Pending Receipt`.


### Receive Transfer Orders in NetSuite

Warehouse managers manually initiate the receiving process in NetSuite for the store transferred inventory upon its arrival at the warehouse.
