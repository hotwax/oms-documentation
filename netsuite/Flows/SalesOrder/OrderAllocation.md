# Order Allocation

After an order's items are allocated, the OMS begins syncing them to systems that are responsible for fulfillment of those items. When items are allocated to stores for fulfillment, they show up in the HotWax Store Fulfillment application. If the facility where the item an item is allocated uses NetSuite for fulfillment, usually a warehouse, then the OMS syncs those items' allocation with NetSuite.

It's important to remember that if items are not allocated to a "NetSuite Facility" their allocation is not synced to NetSuite until after fulfillment is complete.

**Actions**

A job in HotWax Commerce generates a JSON file containing order line items and their respective fulfillment locations.

A SuiteScript in Netsuite reads the JSON file and updates fulfillment locations in sales orders by using the N/Record module. 

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