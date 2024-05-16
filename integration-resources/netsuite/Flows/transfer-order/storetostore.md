# Store to Store

Stores looking to transfer surplus inventory to another store in need of it work alongside the warehouse manager to create a store-to-store transfer order in NetSuite. This facilitates the transfer of inventory from one store location to another.

Now, let’s look at how store to store transfer orders are processed:

Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as also a store. These transfer orders are automatically assigned a `Pending Fulfillment` status.

These transfer orders are synchronized to HotWax Commerce so that they can be fulfilled from stores. Once transfer order items are shipped from stores, their status is updated from `Approved` to `Completed` and subsequently inventory count for the shipped items is reduced in HotWax Commerce.

The transfer order items shipped from the store are synchronized to NetSuite and the corresponding item fulfillment records are generated and marked `Shipped` in  NetSuite. This step also ensures that inventory counts for the corresponding items are automatically reduced in NetSuite and the transfer order status is updated from `Pending Fulfillment` to `Pending Receipt`.

These item fulfillment records are synchronized to HotWax Commerce and inbound shipments are automatically created so that the store can receive the transferred inventory. When the store associates verifies the inbound shipments and receives them, inventory counts for the corresponding items are automatically increased in HotWax Commerce.
 
Upon successful receipt of inventory, HotWax Commerce synchronizes item receipts with NetSuite. This ensures that the inventory count at store is accurately increased in NetSuite and the status of transfer orders status is updated from `Pending Receipt` to `Received`.

## Workflow

<figure><img src="../../.gitbook/assets/storetostore.png" alt=""><figcaption><p>Fulfilling store to store transfer order</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/storetostorereceiving.png" alt=""><figcaption><p>Receiving store to store transfer order</p></figcaption></figure>

### Create Transfer Orders in NetSuite

1.  **Export Created Transfer Orders from NetSuite:**

    Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as also a store. These transfer orders are automatically assigned a `Pending Fulfillment` status.

    At regular intervals, a Map Reduce script runs a specific Saved Search in NetSuite and identifies transfer orders with a `Pending Fulfillment` status that have a source location set as the `Store`. This script compiles the relevant data into a CSV file, which is then securely placed at an SFTP location.

**SuiteScript**

Export Transfer Orders to SFTP

```
HC_MR_ExportedStoreTransferOrderCSV.js
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/transferorder/csv
```

2.  **Import Transfer Orders into HotWax Commerce:**

    Once the store to store transfer orders are created and exported from NetSuite, they are imported into HotWax Commerce.

    The process of approving transfer orders in HotWax Commerce, fulfilling them from the designated store location, reducing inventory counts in HotWax Commerce for fulfilled transfer order items, exporting store fulfilled transfer order items from HotWax Commerce and finally importing them into NetSuite mirrors the [store to warehouse transfer order flow ](storetowarehouse.md)discussed earlier.

**Job in HotWax Commerce**

Import Transfer Orders from SFTP

```
Import Transfer Order
```

Approve Transfer Orders

```
Approve transfer orders
```

Export Fulfilled Transfer Order Items to SFTP

```
generate_TransferOrderFulfilledItemsFeed
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/transferorder/oms-fulfillment
```

**SuiteScript**

Import Fuflilled Transfer Order Items from SFTP

```
HC_SC_ImportTOItemFulfillment.js
```

3.  **Generate Item Fulfillment Records in NetSuite:**

    Once fulfilled transfer orders are imported into NetSuite, item fulfillment records are generated and are automatically marked “Shipped”. Whenever an item fulfillment record is marked “Shipped”, the inventory count for corresponding items is reduced in NetSuite. These records signify that the destination store location can now start receiving the transfer order items.

    A Map Reduce script runs a specific Saved Search to identify item fulfillment records in `Shipped` status, where both the source and destination locations are `Store` locations. Subsequently, the script compiles the relevant data into a CSV file, which is securely placed at an SFTP location.

**SuiteScript**

Export Item Fulfillment Records to SFTP

```
HC_MR_ExportedStoreTOFulfillmentCSV.jsd
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/transferorder/fulfillment
```

4.  **Receive Transfer Orders in HotWax Commerce:**

    The process of importing item fulfillment records in HotWax Commerce, receiving inbound shipments in the store, increasing inventory counts in HotWax Commerce against inbound shipments, exporting item receipts from HotWax Commerce, importing item receipts into NetSuite and finally increasing inventory count at store in NetSuite mirrors the [warehouse to store transfer order flow](warehousetostore.md) discussed earlier.

**Job in HotWax Commerce**

Import Item Fulfillment Records from SFTP

```
Import Inbound Shipment
```

Export Item Receipts to SFTP

```
generate_TransferOrderShipmentsReceiptFeed
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/transferorder/receipt
```

**SuiteScript**

Import Item Receipts from SFTP

```
HC_SC_ImportTOFulfillmentReceipts.js
```

Following this approach, store associates at the destination store can efficiently receive inbound shipments at their store, synchronize the item receipts with NetSuite, and ultimately mark the completion of store to store transfer orders, with the transfer order status updating in NetSuite from `Pending Receipt` to `Received`.

**Here's how transfer order fields are mapped in NetSuite and HotWax Commerce for store fulfillment:**

<table data-full-width="false"><thead><tr><th width="157">S.No.	</th><th width="259">Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Internal ID</td><td>External ID</td></tr><tr><td>2</td><td>Transfer Order Name</td><td>Transfer Order Name</td></tr><tr><td>3</td><td>Date</td><td>Date</td></tr><tr><td>4</td><td>Item</td><td>Product</td></tr><tr><td>5</td><td>Quantity</td><td>Qty</td></tr><tr><td>6</td><td>Source Location</td><td>Ship From</td></tr><tr><td>7</td><td>Destination Location</td><td>Ship To</td></tr><tr><td>8</td><td>Shipping Address</td><td>Ship To Address</td></tr><tr><td>9</td><td>Shipping Method</td><td>Shipping Method</td></tr></tbody></table>

{% tabs %}
{% tab title="Transfer Order Fields in NetSuite" %}
<figure><img src="../../.gitbook/assets/store to store to NS.png" alt=""><figcaption><p>Transfer Order Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}

{% tab title="Transfer Order Fields in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/transfer order store to store.png" alt=""><figcaption><p>Transfer Order Fields Mapping in HotWax Commerce</p></figcaption></figure>
{% endtab %}
{% endtabs %}

<figure><img src="../../.gitbook/assets/store to store fulfillment app to.png" alt=""><figcaption><p>Transfer Order Items Fulfilled in HotWax Commerce "Store Fulfillment App"</p></figcaption></figure>

**Here's how transfer order fields are mapped in NetSuite and HotWax Commerce for receiving in store:**

<table data-full-width="false"><thead><tr><th width="157">S.No.	</th><th>Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Item Fulfillment Internal ID</td><td>External ID</td></tr><tr><td>2</td><td>Transfer Order Name</td><td>Transfer Order Name</td></tr><tr><td>3</td><td>Items</td><td>SKU</td></tr><tr><td>4</td><td>Quantity</td><td>Ordered Quantity</td></tr><tr><td>5</td><td>Destination Location</td><td>Facility</td></tr><tr><td>6</td><td>Tracking #</td><td>Tracking ID</td></tr></tbody></table>



{% tabs %}
{% tab title="Transfer Order Fields in NetSuite" %}
<figure><img src="../../.gitbook/assets/store to store transfer order netsuite.png" alt=""><figcaption><p>Fulfilled Transfer Order Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}

{% tab title="Transfer Order Fields in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/store to store receiving app to.png" alt=""><figcaption><p>Inbound Shipment Fields Mapping in HotWax Commerce "Inventory Receiving App"</p></figcaption></figure>
{% endtab %}
{% endtabs %}

<details>

<summary>Let's delve into the process with an example</summary>

Consider a scenario where a retailer operates two stores: Broadway and Times Square. The Broadway store is experiencing excess stock for a product, so the store manager requests a transfer of 100 quantities to Times Square store, which is experiencing low stock levels. In this event, a store-to-store transfer order is created for 100 quantities in NetSuite.

This transfer order has `Pending Fulfillment` status in NetSuite. A Map Reduce Script generates a CSV file containing details of the `Pending Fulfillment` transfer order that has the source location as a store and places it at an SFTP location.

A scheduled job in HotWax Commerce OMS reads this CSV file from the SFTP location and downloads the transfer order with a default `Created` status.

Following this, a scheduled job in HotWax Commerce OMS marks this transfer order as `Approved`. Upon approval, this transfer order is reflected in the Store Fulfillment App at the Broadway store, and the Available to Promise inventory for the transfer order item is reduced by 100 quantities.

Once the store associates create a shipment for this transfer order and ship the 100 quantities for the product from the Broadway store, the transfer order status automatically updates from `Approved` to `Completed` in HotWax Commerce.

Now, a scheduled job in HotWax Commerce Integration Platform generates a JSON file containing details of all these 100 fulfilled transfer order items and places the file at an SFTP location.

In NetSuite, a scheduled SuiteScript reads this JSON file containing a fulfilled transfer order item with 100 quantities from the SFTP location and creates an item fulfillment record of 100 quantities, reducing inventory count by 100 quantities in NetSuite at the Broadway store. Now the transfer order in NetSuite is updated from `Pending Fulfillment` to `Pending Receipt`.

A Map Reduce script generates a CSV file containing the item fulfillment record with 100 quantities in `Shipped` status, where both the source and destination locations are store locations and places it at an SFTP location.

A scheduled job in HotWax Commerce OMS reads the transfer order item fulfillment CSV file from the SFTP location and creates the inbound shipment of 100 quantities in the OMS at the destination Times Square store. Store associates can now receive this inbound shipment at their store using the Inventory Receiving App, and the inventory count will be increased by 100 quantities at the Times Square store in HotWax Commerce.

Following this, a scheduled job in HotWax Commerce Integration Platform generates a JSON file with the item receipt records and securely places the file in an SFTP location.

In NetSuite, a scheduled SuiteScript reads this JSON file containing item receipt records from the SFTP location and increases the quantities by 100 for the transfer order received at the Times Square store, and the transfer order status is updated from `Pending Receipt` to `Received`.

</details>

{% file src="../../.gitbook/assets/Transfer Order Fulfilled Items Feed.txt" %}

{% file src="../../.gitbook/assets/Transfer Order Receipt Feed.txt" %}
