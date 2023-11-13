# POS Orders

In a retail environment, POS (Point of Sale) transactions play a vital role, reflecting the real-time sales happening in physical stores. POS sales are posted to Netsuite to manage inventory and conduct relevant accounting. While many businesses integrate their POS systems directly with their ERP (Enterprise Resource Planning) systems, some retailers choose to centralize their sales data, routing all transactions through an Order Management System (OMS) to synchronize both online and in-store sales data with the ERP. This scenario focuses on this synchronization where HotWax Commerce acts as the intermediary to push POS sales to Netsuite.

## Different Approaches for Posting POS Sales to Netsuite

There are two primary ways to record POS sales in Netsuite: creating sales orders or directly creating [cash sales][cashSale] records. Creating sales orders necessitates additional steps such as creating customer deposits, fulfillment records, and invoices. Cash Sale transactions represent immediate sales with received payment, eliminating the need to create fulfillment records, unlike conventional sales orders.

We took the approach of directly creating cash sales for POS sales data in Netsuite due to its streamlined process, eliminating the need for intervention to create additional records and allowing for immediate completion of transactions.


### Workflow

The synchronization of POS sales from HotWax Commerce to Netsuite involves the creation of Cash Sale records in Netsuite, ensuring that sales data from physical stores is accurately reflected in the ERP system. By channeling all POS transactions through HotWax Commerce, retailers can leverage this integration to keep their inventory updated, perform relevant accounting postings, and maintain a consolidated view of both online and in-store sales within Netsuite.


HotWax identifes POS completed orders that need to be synced to NetSuite by checking the following conditions. 
- Order Status: Completed.
- Sales Channel: POS_Channel.
- Shipping Method: POS_COMPLETED.


{% hint style="warning" %}
**Time based sync** HotWax uses a time based cursor to track which orders have been synced. This means if sync fails for an order, it will not be automatically retried.
{% endhint %}

1. CSV File Handling and Import to Netsuite
   
    a. A Scheduled Suite Script operates in Netsuite, fetching the CSV file from the SFTP server.
   
    b. The Suite Script uses the CSV ImportTask function of the N/Task module to import the POS order details as Cash Sale records directly into Netsuite.

2. Synchronize POS Order ID from Netsuite to HotWax Commerce
   
    a. Export Order IDs from Netsuite:
   
        i. A MapReduce SuiteScript is utilized in Netsuite to export the CSV file containing the internal NetSuite IDs corresponding to the processed POS orders.
   
        ii. This CSV file is placed on the SFTP server for further synchronization.
   
    b. POS Order Identification in HotWax Commerce:
   
        i. A job within HotWax Commerce retrieves the exported CSV file from the SFTP server.

        ii. The job processes the CSV file to create Order Identification records in the OMS, linking the POS orders with their respective internal Netsuite IDs.


<!-- page links -->
[cashSale]:https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N407231.html#Cash-Sale-Import