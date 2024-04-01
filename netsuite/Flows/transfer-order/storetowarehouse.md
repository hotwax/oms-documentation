# Store to Warehouse

Stores wishing to return excess or unsold inventory to the warehouse collaborate with the warehouse manager to generate a transfer order. This facilitates the transfer of inventory from the store location back to the warehouse.

Now, let’s look at how store to warehouse transfer orders are processed:

## Workflow

<figure><img src="../../.gitbook/assets/storetowarehouse.png" alt=""><figcaption><p>Store to warehouse transfer order</p></figcaption></figure>

### Create Transfer Orders in NetSuite

1.  **Export Created Transfer Orders from NetSuite:** Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as the warehouse. These transfer orders are automatically assigned a "Pending Fulfillment" status.

    At regular intervals, a Map Reduce script runs a specific Saved Search in NetSuite and identifies transfer orders with a "Pending Fulfillment" status that have a source location set as the “Store”. This script compiles the relevant data into a CSV file, which is then securely placed at an SFTP location.

**SuiteScript**

Export Transfer Orders to SFTP

```
HC_MR_ExportedStoreTransferOrderCSV.js
```

**SFTP Location**

```
```

2. **Import Transfer Orders into HotWax Commerce:** A scheduled job in HotWax Commerce OMS reads the transfer orders CSV file from the SFTP location and downloads transfer orders in HotWax Commerce with a default “Created” status.
3.  **Approve Transfer Orders:** A scheduled job in HotWax Commerce OMS identifies all transfer orders in the "Created" status and automatically marks them as “Approved”.

    {% hint style="success" %}
    **Why is transfer order approval necessary?**\
    Stores fulfill transfer orders using the Store Fulfillment App. These transfer orders are only reflected in the app after they have been approved in HotWax Commerce. Upon approval, HotWax Commerce also reduces the Available to Promise inventory for the transfer order items that will be fulfilled from the store.
    {% endhint %}

**Job in HotWax Commerce**

Import Transfer Orders from SFTP

```
```

Approve Transfer Orders

```
```

### Fulfill Transfer Orders using the Store Fulfillment App

Once approved, transfer orders are automatically reflected at the source location in the Store Fulfillment App so that store associates can create shipments and ship transfer order items.

* Store associates pick the transfer order items they want to fulfill from their store.
* After picking the items, store associates pack them and proceed to create shipments for each item.
* Once the shipment has been created, store associates fetch shipping labels from the carrier and the corresponding tracking codes.
* After all items are shipped, transfer orders status is automatically updated from "Approved" to "Shipped" in HotWax Commerce.

{% hint style="info" %}
Multiple shipments against a single transfer order can be created in the Store Fulfillment App. For example, if a transfer order contains multiple items, the store might choose to dispatch some items initially and fulfill the remaining ones later. In this event, the transfer order remains in the “Approved” status in HotWax Commerce and transitions to “Shipped” status when all items within the transfer order have been fulfilled.
{% endhint %}

4. **Export Fulfilled Transfer Orders Items from HotWax Commerce:** A scheduled job in HotWax Commerce Integration Platform generates a JSON file with all the transfer order items that are in the “Shipped” status and securely places the file in an SFTP location, making it accessible for NetSuite.

**Job in HotWax Commerce**

Export Fulfilled Transfer Order Items to SFTP

```
```

**SFTP Location**

```
```

5.  **Import Fulfilled Transfer Orders Items in NetSuite:** In NetSuite, a scheduled SuiteScript reads this JSON file containing fulfilled transfer order items from the SFTP location. The script iterates through each record, creates item fulfillment records, and reduces inventory count in NetSuite for items shipped from the store.

    Once item fulfillment records are created for each transfer order item, the status of the transfer order in NetSuite is automatically updated from "Pending Fulfillment" to "Pending Receipt."

**SuiteScripts**

Import Fuflilled Transfer Order Items from SFTP

```
HC_SC_ImportTOItemFulfillment.js
```

6. **Receive Transfer Orders in NetSuite:** Warehouse managers manually initiate the receiving process in NetSuite for the store transferred inventory upon its arrival at the warehouse.

### Automated Transfer Order Status Update

After the receiving process is completed, the transfer order is marked as "Received," indicating that all transfer order items have been successfully received at the warehouse. Additionally, the inventory count for the newly received inventory is updated in NetSuite.

### Update Inventory Count in HotWax Commerce

Inventory for transfer order items received in the warehouse is synchronized when HotWax Commerce performs its daily inventory sync from NetSuite.
