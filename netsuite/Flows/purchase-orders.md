# Purchase Orders

One of the critical aspects of managing an omnichannel retail business involves ensuring the accuracy and availability of inventory in physical stores. For retailers who utilize NetSuite as their ERP system and deploy HotWax Commerce's Order Management System, an efficient integration is required to synchronize purchase orders (POs) raised in NetSuite with the HotWax Commerce Order Management System. This synchronization is pivotal, as it allows in-store associates to effectively receive and manage inventory using the user-friendly HotWax Commerce in-store inventory management tools.

In this scenario, when a Purchase Order is raised in NetSuite's ERP system, it needs to be seamlessly synchronized with HotWax Commerce, where the store associates employ an intuitive [Receiving App](\(https:/www.hotwax.co/apps/inventory-receiving-app\)/) by HotWax Commerce for the efficient receipt of inventory.

## Key Objectives

* Automate the synchronization of Purchase Orders from NetSuite to HotWax Commerce.
* Streamline the creation of Item Receipt records within HotWax Commerce when store associates receive inventory.
* Automate the update of Purchase Order statuses from "Pending" to "Received" in NetSuite once items are received in HotWax Commerce.

## Workflow

### Generate Purchase Orders in NetSuite

The procurement process begins within the NetSuite ERP system, where Purchase Orders are generated to replenish inventory in physical stores. This step is integral to initiating the flow of inventory into the retail locations.

<figure><img src="../.gitbook/assets/Purchase order sync.png" alt=""><figcaption><p>Purchase Order sync from NetSuite to HotWax Commerce</p></figcaption></figure>

### Export Purchase Orders from NetSuite

1. To initiate the synchronization process, a Map Reduce Script, running a specific Saved Search, identifies Purchase Orders in "Pending" status within NetSuite. This script compiles the relevant Purchase Order data into a CSV file, which is then placed in an SFTP location. This Map Reduce script runs at regular intervals, typically every 15 minutes, ensuring that only the latest and pending Purchase Orders are fetched from NetSuite. It is meticulously designed to minimize the data transferred and processed, maintaining optimal efficiency.

**SuiteScript**

Create file of open purchase orders

```
HC_MR_ExportedPurchaseOrderCSV
```

**SFTP Locations**

```
/home/{sftp-username}/netsuite/purchaseorder/fulfillment
```

### Import Purchase Orders into HotWax Commerce

2. In HotWax Commerce, a designated job monitors the SFTP location, periodically checking for new Purchase Order CSV files. The job uses the robust APIs provided by HotWax Commerce's Export/Import tools to import these Purchase Orders.

**Job in HotWax Commerce**

```
Import purchase orders
IMP_ASN_PO_FEED
```

#### Here's how purchase order fields are mapped in NetSuite and HotWax Commerce

<table><thead><tr><th width="113">S.No.</th><th width="303.83249581239534">Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Purchase Order Internal ID</td><td>External ID</td></tr><tr><td>2</td><td>Item</td><td>SKU</td></tr><tr><td>3</td><td>Quantity</td><td>Qty</td></tr><tr><td>4</td><td>Location</td><td>Facility</td></tr><tr><td>5</td><td>Expected Receipt Date</td><td>Estimated Delivery Date</td></tr></tbody></table>

{% tabs %}
{% tab title="Purchase Order Fields in NetSuite" %}
<figure><img src="../.gitbook/assets/PO netsuite field mapping.png" alt=""><figcaption><p>Purchase Order Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}

{% tab title="Purchase Order Fields in HotWax Commerce" %}
<figure><img src="../.gitbook/assets/HC po field mapping (2).png" alt=""><figcaption><p>Purchase Order Fields Mapping in HotWax Commerce "Inventory Receiving App"</p></figcaption></figure>
{% endtab %}
{% endtabs %}

#### Here's how purchase order fields are mapped in NetSuite and HotWax Commerce that remains hidden in the user interface but included in the purchase order CSV file

<table><thead><tr><th width="113">S.No.</th><th width="300.83249581239534">Fields in NetSuite</th><th>Fields in HotWax Commerce</th></tr></thead><tbody><tr><td>1</td><td>Line ID</td><td>Order Item External ID</td></tr></tbody></table>

### Receiving Inventory in the Store

Once the Purchase Orders are synchronized, store associates use the Receiving App provided by HotWax Commerce to receive inventory. The intuitive interface of the Receiving App facilitates a seamless and efficient receiving process, even for users with minimal training.&#x20;

<figure><img src="../.gitbook/assets/PO received.png" alt=""><figcaption><p>Item Receipts Sync from HotWax Commerce to NetSuite</p></figcaption></figure>

1. Once the Purchase Orders (POs) are received by store associates using the HotWax Commerce Receiving App, the process involves the creation of Item Receipt records within HotWax Commerce. These records play a crucial role in increasing inventory numbers for the received products, ensuring that newly received inventory is readily available for eCommerce platforms to sell.

### Export Item Receipts from HotWax Commerce

2. To ensure a comprehensive and accurate record of the items received are synchronized back to NetSuite, HotWax Commerce employs a specific job to export Item Receipts created within the system. Each Item Receipt record is associated with its respective Purchase Order. The mapping between Item Receipts and Purchase Orders is critical for reconciliation and further processing. This job runs at defined intervals, typically on a schedule that aligns with the retailer's specific requirements. It gathers the Item Receipt data and creates a JSON file, capturing all the essential details.

Internal location where HotWax places CSV to convert it to NetSuite format

**SFTP Locations**

```
/home/{sftp-username}/hotwax/PurchaseOrdersReceipt
/home/{sftp-username}/hotwax/PurchaseOrdersReceipt/archive
```

To facilitate the subsequent processing of this data, the JSON file is securely placed in an SFTP location, making it accessible for NetSuite.

**SFTP Locations**

```
/home/{sftp-username}/netsuite/purchaseorder/receipt
```

### Import Item Receipts into NetSuite

3. In NetSuite, a scheduled script retrieves the JSON files with item receipt data from the SFTP location. It then goes through each record and generates new item receipt records within NetSuite. The script uses the N/record module because the CSV import task in NetSuite doesn't accommodate item receipt records, making the JSON file the method used to transmit receipts to NetSuite.

**SuiteScript**

```
HC_SC_ImportPurchaseOrderReceipts
```

{% hint style="info" %}
The HC\_SC\_ImportPurchaseOrderReceipts SuiteScript also generates a CSV file highlighting erroneous records found during processing and uploads the file to the SFTP server. Simultaneously, an email alert is automatically triggered to designated personnel, helping them quickly pinpoint the source of the issue and accelerating troubleshooting.
{% endhint %}

### Automated Purchase Order Status Update

4. The synchronization process doesn't stop at the creation of Item Receipts; it extends to automating the change in status for the associated Purchase Orders. Upon successful creation of Item Receipt records, the status of the respective Purchase Orders in NetSuite is automatically updated from "Pending" to "Received."
