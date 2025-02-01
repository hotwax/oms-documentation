---
description: >-
  Discover how HotWax Commerce synchronizes POS sales to NetSuite, ensuring
  accurate inventory and accounting updates for a consolidated view of online
  and in-store sales.
---

# POS Orders

In a retail environment, POS (Point of Sale) transactions play a vital role, reflecting the real-time sales happening in physical stores. POS sales are posted to NetSuite to manage inventory and conduct relevant accounting. While many businesses integrate their POS systems directly with their ERP (Enterprise Resource Planning) systems, some retailers choose to centralize their sales data, routing all transactions through an Order Management System (OMS) to synchronize both online and in-store sales data with the ERP. This scenario focuses on this synchronization where HotWax Commerce acts as the intermediary to push POS sales to NetSuite.

## Different Approaches for Posting POS Sales to NetSuite

There are two primary ways to record POS sales in NetSuite: creating sales orders or directly creating [cash sales](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_N407231.html#Cash-Sale-Import) records. Creating sales orders necessitates additional steps such as creating customer deposits, fulfillment records, and invoices. Cash Sale transactions represent immediate sales with received payment, eliminating the need to create fulfillment records, unlike conventional sales orders.

We took the approach of directly creating cash sales for POS sales data in NetSuite due to its streamlined process, eliminating the need for intervention to create additional records and allowing for immediate completion of transactions.

## Workflow

The synchronization of POS sales from HotWax Commerce to NetSuite involves the creation of Cash Sale records in NetSuite, ensuring that sales data from physical stores is accurately reflected in the ERP system. By channeling all POS transactions through HotWax Commerce, retailers can leverage this integration to keep their inventory updated, perform relevant accounting postings, and maintain a consolidated view of both online and in-store sales within NetSuite.

<figure><img src="../../../.gitbook/assets/23.png" alt=""><figcaption><p>POS orders synced from HotWax Commerce to NetSuite</p></figcaption></figure>

### Sync POS orders to NetSuite

1. A job within HotWax Commerce Integration Platform identifies POS completed orders that need to be synced to NetSuite by checking the following conditions:

* Order Status: Completed.
* Sales Channel: POS\_Channel.
* Shipping Method: POS\_COMPLETED.

POS orders that match these criteria are exported to an SFTP location in a CSV file.

**SFTP Locations**

```
/home/{sftp-username}/netsuite/cashsale/export
```

{% hint style="warning" %}
**Time based sync** HotWax uses a time based cursor to track which orders have been synced. This means if sync fails for an order, it will not be automatically retried.
{% endhint %}

2. A Scheduled SuiteScript in NetSuite imports this CSV file from the SFTP server. The SuiteScript uses the CSV ImportTask function of the N/Task module to import the POS order details as Cash Sale records directly into NetSuite.

**SuiteScript**

```
HC_SC_ImportCashSale
```

#### Here's how POS order fields are mapped in HotWax Commerce and NetSuite

<table><thead><tr><th width="144.97101449275362">S.No.</th><th>Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>Shopify Order Name</td><td>PO #</td></tr><tr><td>2</td><td>NetSuite Order ID</td><td>POS Order Internal ID</td></tr><tr><td>3</td><td>Shopify Order ID</td><td>HC Shopify Order ID</td></tr><tr><td>4</td><td>Sales Channel</td><td>HC Sales Channel</td></tr><tr><td>5</td><td>Order Date</td><td>Date *</td></tr><tr><td>6</td><td>Bill To</td><td>Customer *</td></tr><tr><td>7</td><td>Product</td><td>Item</td></tr><tr><td>8</td><td>Qty</td><td>Quantity</td></tr><tr><td>9</td><td>Location</td><td>Location</td></tr></tbody></table>

{% tabs %}
{% tab title="POS Order Fields in HotWax Commerce" %}
<figure><img src="../../../.gitbook/assets/24.png" alt=""><figcaption><p>POS Order Fields Mapping in HotWax Commerce</p></figcaption></figure>
{% endtab %}

{% tab title="POS Order Fields in NetSuite" %}
<figure><img src="../../../.gitbook/assets/25.png" alt=""><figcaption><p>POS Order Fields Mapping in NetSuite</p></figcaption></figure>
{% endtab %}
{% endtabs %}

#### Here's how POS order fields are mapped in HotWax Commerce and NetSuite that remain hidden in the user interface but are included in the POS order CSV file

<table><thead><tr><th width="132.08771929824562">S.No.</th><th>Fields in HotWax Commerce</th><th>Fields in NetSuite</th></tr></thead><tbody><tr><td>1</td><td>Order Item Seq ID</td><td>External Order Line ID</td></tr><tr><td>2</td><td>Price Level NetSuite</td><td>Price Level</td></tr><tr><td>3</td><td>Tax Code</td><td>Tax Code</td></tr><tr><td>4</td><td>Product Promo ID</td><td>Discount Item</td></tr><tr><td>5</td><td>Product Store External ID</td><td>Subsidiary</td></tr></tbody></table>

{% hint style="info" %}
To sync POS orders from HotWax Commerce to NetSuite, a required field is the "Shipping Address." HotWax Commerce syncs the store's address in the "Ship To" field in NetSuite
{% endhint %}

{% hint style="danger" %}
"\*" denotes fields that are required to be sent to NetSuite for the POS order sync to work
{% endhint %}

### Synchronize NetSuite POS Order ID to HotWax Commerce

<figure><img src="../../../.gitbook/assets/26.png" alt=""><figcaption><p>POS order IDs synced from NetSuite to HotWax Commerce</p></figcaption></figure>

1. A MapReduce SuiteScript is utilized in NetSuite to export a CSV file to an SFTP location containing the internal NetSuite IDs corresponding to the processed POS orders.

**SuiteScript**

```
HC_MR_ExportedCashSaleCSV
```

**SFTP Locations**

```
/home/{sftp-username}/netsuite/salesorder/import/orderidentification
```

2. The Import Order Identification job within HotWax Commerce OMS then retrieves the exported CSV file from the SFTP server and creates Order Identification records in the OMS, linking the POS orders with their respective NetSuite internal IDs.

**Job in HotWax Commerce**

```
Order Identification
FTP Config: IMP_ORDER_IDENT
```
{% file src="../../../.gitbook/assets/POS Orders Sample Feed.csv" %}
