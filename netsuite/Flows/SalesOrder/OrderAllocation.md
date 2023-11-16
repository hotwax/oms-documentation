# Order Allocation

After an order's items are allocated, the OMS begins syncing them to systems that are responsible for fulfillment of those items. When items are allocated to stores for fulfillment, they show up in the HotWax Store Fulfillment application. If the facility where an item is allocated uses NetSuite for fulfillment, usually a warehouse, then the OMS syncs those items' allocation with NetSuite.

It's important to remember that if items are not allocated to a "NetSuite Facility" their allocation is not synced to NetSuite until after fulfillment is complete.

**Actions**

A job in HotWax Commerce generates a JSON file containing order line items and their respective fulfillment locations.

**SFTP Location**
```
/home/{sftp-username}/netsuite/salesorder/update
```
A SuiteScript in Netsuite reads the JSON file and updates fulfillment locations in sales orders by using the N/Record module. 

**SuiteScripts**

Import NetSuite fulfillment item allocations:
```
HC_SC_UpdateSalesOrders
```

- [x] Sync new orders from HotWax to NetSuite
  - [x] Sync customers
  - [x] Sync order line items
  - [x] Sync order ids
  - [x] Create customer deposit
- [x] Approve order in HotWax for fulfillment
- [x] HotWax brokering allocates orders
- [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
- [ ] Sync order item fulfillment details from NetSuite to HotWax
- [ ] Sync order item fulfillment details from HotWax to NetSuite
- [ ] Invoice orders in NetSuite

## Order Rejection from NetSuite
Upcoming

If a NetSuite fulfillment location cannot fulfill an order item that has been allocated to them, it is moved to a "Rejected Orders" facility. The "Rejected Orders" facility is an "undefined" type of facility, which means it is not mapped to a physical location. A SuiteScript periodically exports all the order items at this facility and places them at an SFTP location.

A scheduled job in HotWax Commerce imports this rejected order item feed and moves those items back to the brokering queue to be reallocated to a new facility.


If an order is rejected from the HotWax Store Fulfillment app with a valid inventory issue reason, then inventory delta's are also pushed to NetSuite.
These are the valid inventory variance reasons to be pushed to NetSuite:
- VAR_STOLEN
- VAR_DAMANGED
- VAR_FOUND

**SFTP Locations**

Inventory variance of actual vs progromatic:
```
/home/{sftp-username}/netsuite/inventoryadjustment/csv
```
