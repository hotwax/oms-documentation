# Warehouse to Store Transfer Orders

Let’s first look at how warehouse to store transfer orders are processed:

Transfer orders originate in NetSuite, but there is a distinction in how they are fulfilled. When a transfer order is initiated from a warehouse, NetSuite's fulfillment solution is employed to fulfill the transfer order, ensuring the correct allocation of inventory.

Warehouse managers create transfer orders in NetSuite, and then the corresponding item fulfillment records are generated. Each transfer order can result in either a single item fulfillment record or multiple records, depending on the scenario:

- **Single item fulfillment record:** This happens when all products in a transfer order are fulfilled simultaneously, resulting in the creation of a single shipment and, consequently, a single item fulfillment record.

- **Multiple item fulfillment record:** This happens when products in a transfer order are fulfilled separately, leading to the creation of multiple shipments due to some products being shipped later and, consequently, multiple item fulfillment records.

- **Multiple item fulfillment records for a single product:** This happens when a transfer order is created for a single product, but its quantity is shipped in multiple shipments and, consequently, multiple item fulfillment records.

Whenever an item fulfillment record is marked as "Shipped" in NetSuite, it means that the corresponding items have been dispatched from the warehouse and are in transit to the store. HotWax Commerce synchronizes any new item fulfillment record that is marked “Shipped” in NetSuite so that in-store inventory can be received against them.

## Workflow

### Fulfilling Transfer Order Items

1. **Export Transfer Order Item Fulfillment Records from NetSuite:** A Map Reduce script runs a specific Saved Search to identify transfer order item fulfillment records in "Shipped" status, that have the source location as the warehouse and destination location set as the store. It compiles the relevant data into a CSV file, which is then securely placed in an SFTP location. The script runs periodically, typically every 15 minutes, to ensure it fetches only the latest shipped transfer order item fulfillment records from NetSuite, optimizing efficiency.

**SuiteScripts**

Export Item Fulfillment Records to SFTP

```
HC_MR_ExportedWHTOFulfillmentCSV.js
```

**SFTP Location**

```

```

2. **Import Transfer Order Item Fulfillment Records in HotWax Commerce:** A scheduled job in HotWax Commerce OMS reads the transfer order item fulfillment CSV file from the SFTP location and creates inbound shipments in the OMS at the destination facility.

**Job in HotWax Commerce**

Import Item Fulfillment Records from SFTP

```

```

### Receiving Inventory in the Store

Store associates leverage HotWax Commerce Inventory Receiving App to receive transferred inventory. The user-friendly interface of this app ensures a smooth and efficient receiving process, even for users with minimal training.

Inbound shipments that have been created are automatically reflected in the Inventory Receiving App, allowing store associates to receive them in store. Upon receiving them, item receipt records are generated in HotWax Commerce. Subsequently, the inventory counts for the items received in the store are promptly increased in HotWax Commerce.

3. **Export Item Receipts from HotWax Commerce:** To maintain a comprehensive record and accurately update inventory count for items received at the store in NetSuite, a scheduled job in HotWax Commerce Integration Platform generates a JSON file with the item receipt records and securely places the file in an SFTP location, making it accessible for NetSuite.

4. **Import Item Receipts into NetSuite:** In NetSuite, a scheduled SuiteScript reads this JSON file containing item receipt records from the SFTP location. The script iterates through each record, creates new item receipt records, and updates inventory count in NetSuite. The script uses the versatile N/record module to ensure a smooth transition.

**Job in HotWax Commerce**

Export Item Receipts to SFTP

```

```

**SFTP Location**

```

```

**SuiteScripts**

Import Item Receipts from SFTP

```
HC_SC_ImportTOFulfillmentReceipts.js
```

### Automated Transfer Order Status Update

Once all the transfer order item fulfillment records have been successfully received in-store and their item receipt records have been synchronized with NetSuite, the transfer order status is updated from “Pending Receipt” to “Received”.
