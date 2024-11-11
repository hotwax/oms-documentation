# Manage transfer order from Store to Store

Stores looking to transfer surplus inventory to another store in need of it work alongside the warehouse manager to create a store-to-store transfer order in NetSuite. This facilitates the transfer of inventory from one store location to another.

### Export Created Transfer Orders from NetSuite

Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as also a store. These transfer orders are automatically assigned a `Pending Fulfillment` status.

### Import Transfer Orders into HotWax Commerce

Once the store to store transfer orders are created and exported from NetSuite, they are imported into HotWax Commerce. `Import Transfer Order` job in HC imports the TO from SFTP. After importing, the created transfer orders are approved by the `Approve transfer orders` job in HC.

The process of approving transfer orders in HotWax Commerce and fulfilling them from the designated store location, exporting store fulfilled transfer order items from HotWax Commerce and finally importing them into NetSuite mirrors the store to warehouse transfer order flow.

### Generate Item Fulfillment Records in NetSuite

Once fulfilled transfer orders are imported into NetSuite, item fulfillment records are generated. These records signify that the destination store location can now start receiving the transfer order items.

A Map Reduce script runs a specific Saved Search to identify item fulfillment records in Shipped status, where both the source and destination locations are Store locations. Subsequently, the script compiles the relevant data into a CSV file, which is securely placed at an SFTP location.

### Receive Transfer Orders in HotWax Commerce

The process of importing item fulfillment records in HotWax Commerce, receiving inbound shipments in the store, exporting item receipts from HotWax Commerce, and importing item receipts into NetSuite mirrors the warehouse to store transfer order flow.

Following this approach, store associates at the destination store can efficiently receive inbound shipments at their store, synchronize the item receipts with NetSuite, and ultimately mark the completion of store to store transfer orders, with the transfer order status updating in NetSuite from `Pending Receipt` to `Received`.
