# Transfer Orders

Transfer orders are instrumental in the internal movement of inventory within an omnichannel retail environment. They are used to transfer inventory from warehouses to stores or between stores. This process is typically initiated when stores require additional inventory to meet customer demands. Retail merchandisers strategically plan inventory transfers, sourcing them either from centralized warehouses or from stores with an excess of stock that isn't selling.

Transfer Orders originate within NetSuite, but there is a distinction in how they are fulfilled. When a Transfer Order is initiated from a warehouse, NetSuite's fulfillment solution is employed to fulfill the Transfer Order, ensuring the correct allocation of inventory.

This scenario emphasizes the synchronization of Transfer Orders from NetSuite to HotWax Commerce for efficient inventory receiving processes in physical stores. Once items are received, Item Receipt records are imported back into NetSuite to mark Transfer Orders as "Received."

### Key Objectives

* Automate the synchronization of Transfer Orders from NetSuite to HotWax Commerce.
* Streamline the creation of Item Receipt records within HotWax Commerce when store associates receive inventory.
* Automate the update of Transfer Order statuses from "Pending Receipt" to "Received" in NetSuite after item receipt.

## Workflow

### Generate Transfer Orders in NetSuite

Transfer Orders are initiated within the NetSuite ERP system, facilitating the internal transfer of inventory from warehouses to stores or between stores.

<figure><img src="../../.gitbook/assets/sync to.png" alt=""><figcaption><p>Transfer Order Sync from NetSuite to HotWax Commerce</p></figcaption></figure>

### Export Transfer Orders from NetSuite

1. A Map Reduce Script script runs a specific Saved Search to identify Transfer Orders in "Pending" status within NetSuite. It compiles the relevant data into a CSV file, which is then securely placed in an SFTP location. The script runs periodically, typically every 15 minutes, to ensure it fetches only the latest and pending Transfer Orders from NetSuite, optimizing efficiency.

**SuiteScripts**

Generate Fulfilled Transfer Order file:

```
HC_generateCSV_FulfilledTransferOrders
```

### Import Transfer Orders into HotWax Commerce

2. In HotWax Commerce, a dedicated job monitors the SFTP location, regularly checking for new Transfer Order CSV files. This job utilizes the powerful APIs provided by HotWax Commerce's Export/Import tools to import these Transfer Orders. If HotWax is only being used for receiving transfer orders, the Transfer Order file produced by NetSuite is pre-processed to generate an inventory variance file that reduces inventory for transferred products from the origin facility.
3. After this variance file is produced, the pending receipt transfer order file is moved by HotWax to another internal FTP location where a scheduled job will process it to create "inbound shipments in the OMS at the destination facility."

**SFTP Locations**

NetSuite pending receipt Transfer Order file:

```
/home/{sftp-username}/netsuite/transferorder/fulfillment-nifi
```

Pre-processed Transfer Order file:

```
/home/{sftp-username}/netsuite/transferorder/fulfillment
/home/{sftp-username}/netsuite/transferorder/fulfillment/archive
```

Derived Origin Facility Inv Deduction:

```
/home/{sftp-username}/hotwax/InventoryDelta
/home/{sftp-username}/hotwax/InventoryDelta/archive
```

**Jobs in HotWax Commerce**

Import Pending Receipt Transfer Orders from SFTP:

```
Import fulfilled Transfer Orders from NetSuite
```

Import Inventory Deduction from Origin Facility from SFTP:

```
Add job name here
```

#### Here's how transfer orders fields are mapped in NetSuite and HotWax Commerce

<table><thead><tr><th width="112">S.No.</th><th width="244.44856661045532">Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Order #</td><td>Shipment Attribute</td></tr><tr><td>2</td><td>Transfer Order Internal ID</td><td>External ID</td></tr><tr><td>3</td><td>Items</td><td>SKU</td></tr><tr><td>4</td><td>Quantity</td><td>Ordered Quantity</td></tr><tr><td>5</td><td>Destination Location</td><td>Facility</td></tr><tr><td>6</td><td>Tracking #</td><td>Tracking ID</td></tr></tbody></table>

{% tabs %}
{% tab title="Transfer Order Fields in NetSuite" %}
<figure><img src="../../.gitbook/assets/TO mapping netsuite (2).png" alt=""><figcaption><p>Transfer Order Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}

{% tab title="Transfer Order Fields in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/HC TO mappings (1).png" alt=""><figcaption><p>Inbound Shipment Fields Mapping in HotWax Commerce "Inventory Receiving App"</p></figcaption></figure>
{% endtab %}
{% endtabs %}

#### Here's how transfer order fields are mapped in NetSuite and HotWax Commerce that remains hidden in the user interface but included in the transfer order CSV file

<table><thead><tr><th width="112">S.No.</th><th width="217.44856661045532">Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Line ID</td><td>Shipment Item External ID</td></tr><tr><td>2</td><td>From Location</td><td>Shipment Destination Facility ID</td></tr></tbody></table>

### Receiving Inventory in the Store

Store associates use the HotWax Commerce Receiving App to receive transferred inventory. The user-friendly interface of this app ensures a smooth and efficient receiving process, even for users with minimal training.

<figure><img src="../../.gitbook/assets/to received.png" alt=""><figcaption><p>Item Receipts Sync from HotWax Commerce to NetSuite</p></figcaption></figure>

### Export Item Receipts from HotWax Commerce

1. Item Receipt records are created within HotWax Commerce when Transfer Orders are received. These records are essential for updating inventory numbers and ensuring that the available stock is accurately represented. To maintain a comprehensive record, a designated job in HotWax Commerce exports the Item Receipts created within the system. Each Item Receipt is mapped to the corresponding Transfer Order, ensuring efficient reconciliation and further processing.
2. To facilitate the subsequent processing of this data, the JSON file is securely placed in an SFTP location, making it accessible for NetSuite.

**SFTP Locations**

Received Transfer Orders CSV

**SFTP Locations**

```
/home/{sftp-username}/hotwax/TransferOrdersReceipt
/home/{sftp-username}/hotwax/TransferOrdersReceipt/archive
```

Received Transfer Orders NetSuite JSON:

```
/home/{sftp-username}/netsuite/transferorder/receipt
```

### Import Item Receipts into NetSuite

3. In NetSuite, a scheduled Suite Script reads the JSON files containing Item Receipt data from the SFTP location. It iterates through each record and seamlessly creates new Item Receipt records within NetSuite. The script uses the versatile N/record module to ensure a smooth transition.

**SuiteScripts**

Import received Transfer Order file:

```
HC_MR_ExportedTransferOrderCSV
```

{% hint style="info" %}
The HC\_SC\_ImportTransferOrderReceipts SuiteScript also generates a CSV file highlighting erroneous records found during processing and uploads the file to the SFTP server. Simultaneously, an email alert is automatically triggered to designated personnel, helping them quickly pinpoint the source of the issue and accelerating troubleshooting.
{% endhint %}

### Automated Transfer Order Status Update

4. The synchronization process extends to the automated status update of the associated Transfer Orders. Upon successful creation of Item Receipt records, the status of the Transfer Orders in NetSuite is automatically changed from "Pending" to "Received."
