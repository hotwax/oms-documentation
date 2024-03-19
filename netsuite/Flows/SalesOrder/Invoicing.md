---
description: >-
  Learn how invoices are generated in NetSuite and HotWax Commerce, finalizing
  payment transactions and accounting entries for completed orders, contributing
  to accurate financial reporting in both syst
---

# Invoicing

Generating invoices in NetSuite for orders streamlines the financial processes. This step finalizes payment transactions and accounting entries for completed orders, contributing to accurate financial reporting. This step remains the same for orders whether items are fulfilled in NetSuite or not.

**Actions**

A scheduled SuiteScript in NetSuite identifies sales orders in "pending\_billing" status, which have corresponding customer deposits already created.

Upon generating the invoice, the status of the customer deposit is marked as "Fully Applied", and the invoice status changes to "PAID IN FULL," signifying payment reception and application to the invoice. This process also ensures all necessary accounting postings are handled in NetSuite.

This step has not external dependency on jobs running in HotWax Commerce.

**SuiteScript**

```
HC_SC_CreateSalesOrderInvoice
```

{% hint style="info" %}
The `HC_SC_CreateSalesOrderInvoice` SuiteScript also generates a CSV file highlighting erroneous records found during processing and uploads the file to the SFTP server. Simultaneously, an email alert is automatically triggered to designated personnel, helping them quickly pinpoint the source of the issue and accelerating troubleshooting.
{% endhint %}

**Overall sync progress**

This is the last step of the order sync. The order lifecycle has been completed.

* [x] Sync new orders from HotWax to NetSuite
  * [x] Sync customers
  * [x] Sync order line items
  * [x] Sync order ids
  * [x] Create customer deposit
* [x] Approve order in HotWax for fulfillment
* [x] HotWax brokering allocates orders
* [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
* [x] Sync order item fulfillment details from NetSuite to HotWax
* [x] Sync order item fulfillment details from HotWax to NetSuite
* [x] Invoice orders in NetSuite
