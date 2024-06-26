---
description: >-
  Learn how invoices are generated in NetSuite and HotWax Commerce, finalizing
  payment transactions and accounting entries for completed orders, contributing
  to accurate financial reporting in both syst
---

# Invoicing

Generating invoices in NetSuite for orders streamlines the financial processes. This step finalizes payment transactions and accounting entries for completed orders, contributing to accurate financial reporting. This step remains the same for orders whether items are fulfilled in NetSuite or not.

**Actions**

A scheduled SuiteScript in NetSuite identifies sales orders in "Pending\_Billing" status, which have corresponding customer deposits already created.

Upon generating the invoice, the status of the customer deposit status is updated from "Undeposited" to "Fully Applied", and the invoice is marked as "PAID IN FULL," signifying payment reception and application to the invoice. This process also ensures all necessary accounting postings are handled in NetSuite.

This step has no external dependency on jobs running in HotWax Commerce.

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

## Order Cancellations

eCommerce platforms like Shopify lets customers cancel orders if they have not yet been fulfilled. Customers can initiate cancellations themselves, or they may request CSRs to cancel their orders. In either case, when an order is canceled on the eCommerce platform, it is marked as "Canceled".

HotWax Commerce runs a scheduled job every 15 minutes to synchronize order cancellations from the eCommerce platform. Upon the successful synchronization of cancellations from eCommerce, the order status is marked as "Canceled", and the payment status is set to "Refunded" in HotWax Commerce. Subsequently, when an order is marked as "Canceled" in HotWax Commerce, this cancellation update is synchronized with NetSuite to close the corresponding order in NetSuite.

<figure><img src="../../../.gitbook/assets/19.png" alt=""><figcaption><p>Cancellations synced from HotWax Commerce to NetSuite</p></figcaption></figure>

**Actions**

1. A scheduled job in HotWax Commerce Integration Platform runs every 15 minutes and identifies order items that have been canceled in HotWax Commerce. Subsequently, generates a JSON file comprising the canceled order items and places this file at a designated SFTP location.

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/update
```

2. A SuiteScript in NetSuite reads the JSON file from the SFTP location and updates the order status from "Pending Fulfillment" to "Closed" for the affected orders.

**SuiteScript**

```
HC_SC_UpdateSalesOrders
```

When orders are created in NetSuite, corresponding customer deposits are also generated. In cases where an order is canceled, HotWax Commerce initiates a customer refund against the customer deposit in NetSuite to ensure accurate accounting and posting. If only a few items within a order are canceled, the refund is created only for the amount corresponding to the canceled items.

<figure><img src="../../../.gitbook/assets/20.png" alt=""><figcaption><p>Customer refund record created in NetSuite</p></figcaption></figure>

**Actions**

1. Another scheduled job in HotWax Commerce Integration Platform checks the refunded amount due to order cancellations, generates a JSON file containing this information and places the file at a designated SFTP location.

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/customer-refund
```

2. A SuiteScript in NetSuite reads this file and generates a customer refund against the customer deposit. Upon the creation of the customer refund record, the status of the customer deposit is automatically updated from "Not Deposited" to "Fully Applied".

**SuiteScript**

```
 HC_SC_CreateCustomerRefund.js
```
