# Handling Rx product orders

## What are Rx product orders
Rx is a shorthand for “prescription”. If a product is an Rx product, it means that a certified personnel has to authorize the sale of the product to a customer. Krewe sells prescription lens glasses to its customers and to help them get their exact prescription, they have optometrists in their stores.

## Rx in Nashville Tennessee
Tennessee has a special regulation for prescription lenses, regulating that sales placed in store for a prescription lens be fulfilled by a facility within that state where an optometrist is present. This means that all orders placed in a Nashville retail location for a prescription lens must be fulfilled from a store within that state that has an optometrist instead of their warehouse in New Orleans.

## How orders are placed
When a store representative places an order for a prescription product, they enter the sale into Shopify POS with the inclusion of a unique identifier product. The store staff will only place the items related to the prescription order in the order, all other regular items will be placed in a separate order and fulfilled in the same fulfillment flows as other products.

## Order routing in HotWax
Before an order is approved and ready to be routed in HotWax Commerce, a scheduled job will identify orders that have a special “Nashville prescription” product and move those orders to facility 1818. A special workflow will automatically replenish this product’s inventory in the OMS to a generous surplus every morning to ensure order flow is never interrupted.

Simply placing the order at the facility does not reserve the facility's inventory to that order. Another scheduled job will use an API in the OMS to check if inventory for all items of an order are available, and if they are, the job will use another OMS API to actually reserve all the items of the order at that facility. If inventory for all order items is not available at the facility, the order will not be physically reserved at the facility.

A report will be scheduled for orders that are linked to the facility but do not have actual reservations. This will help identify orders that require inventory to be transferred to the store inorder to be fulfilled.


## Syncing to NetSuite
It is yet to be determined if this product should be included in the sync to NetSuite. Since the product is added during order capture and is visible in Shopify, syncing it to NetSuite would create simple reconciliation.



| NetSuite          | Shopify ID       |
|-------------------|------------------|
| ROUTE-1818-RX     | 6955059413079    |

## Reports

### 1818 Allocation Pending
Nashville POS unfulfilled orders are always allocated to 1818. The allocation pending report will show orders that are assigned to store 1818 but do not have sufficient inventory to begin fulfillment. Tracking orders and items on this report will help replenish inventory at the store to complete fulfillment.
