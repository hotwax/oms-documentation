---
description: >-
  Learn how the OMS syncs allocated items to systems for fulfillment, including
  NetSuite facilities for warehouse orders, ensuring accurate allocation and
  fulfillment processes.
---

# Order Allocation

After an order's items are allocated, the OMS begins syncing them to systems that are responsible for fulfillment of those items. When items are allocated to stores for fulfillment, they show up in the HotWax Store Fulfillment App.

If the facility where an item is allocated uses NetSuite for fulfillment, usually a warehouse, then the OMS syncs those items' allocation with NetSuite.

It's important to remember that if items are not allocated to a "NetSuite Facility" their allocation is not synced to NetSuite until after fulfillment is complete.

<figure><img src="../../.gitbook/assets/fulfillment in NetSuite.png" alt=""><figcaption><p>Items' allocations synced from HotWax Commerce to NetSuite</p></figcaption></figure>

**Actions**

1. A scheduled job within HotWax Commerce Integration Platform generates a CSV file containing order line items with their respective fulfillment locations and places this file at an SFTP location.

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/update
```

2. A SuiteScript in NetSuite reads this CSV file from the SFTP location and updates fulfillment locations in sales orders by using the task.CsvImportTask of N/task module.

**SuiteScripts**

Import NetSuite fulfillment item allocations:

```
HC_SC_UpdateSalesOrders
```

{% file src="../../.gitbook/assets/Brokered Order Items Sample Feed.csv" %}

* [x] Sync new orders from HotWax to NetSuite
  * [x] Sync customers
  * [x] Sync order line items
  * [x] Sync order ids
  * [x] Create customer deposit
* [x] Approve order in HotWax for fulfillment
* [x] HotWax brokering allocates orders
* [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
* [ ] Sync order item fulfillment details from NetSuite to HotWax
* [ ] Sync order item fulfillment details from HotWax to NetSuite
* [ ] Invoice orders in NetSuite

## Order Rejection from NetSuite

If a NetSuite fulfillment location cannot fulfill an order item that has been allocated to them, it is moved to a "Rejected Orders" facility. The "Rejected Orders" facility is an "undefined" type of facility, which means it is not mapped to a physical location. A SuiteScript periodically exports all the order items at this facility and places them at an SFTP location.

A scheduled job in HotWax Commerce imports this rejected order item feed and moves those items back to the brokering queue to be reallocated to a new facility.

**SuiteScripts**

```
HC_MR_ExportedRejectedSalesOrderItemCSV
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/rejectedorderitem
```

**Job in HotWax Commerce**

```
IMP_ORDER_ITM_RJCT
```

## Order Rejection from HotWax Commerce

If an order is rejected from the HotWax Store Fulfillment App with a valid inventory issue reason, then inventory delta's are also pushed to NetSuite. These are the valid inventory variance reasons to be pushed to NetSuite:

* VAR\_STOLEN
* VAR\_DAMANGED
* VAR\_FOUND

**SFTP Locations**

Inventory variance of actual vs programmatic:

```
/home/{sftp-username}/netsuite/inventoryadjustment/csv
```

**SuiteScripts**

```
HC_SC_ImportInventoryAdjustment
```
