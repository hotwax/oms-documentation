# Handling Rx product orders

## What are Rx product orders
Rx is a shorthand for “prescription”. If a product is an Rx product, it means that a certified personnel has to authorize the sale of the product to a customer. Krewe sells prescription lens glasses to its customers and to help them get their exact prescription, they have optometrists in their stores.

## Rx in Nashville Tennessee
Tennessee has a special regulation for prescription lenses, regulating that sales placed in store for a prescription lens be fulfilled by a facility within that state where an optometrist is present. This means that all orders placed in a Nashville retail location for a prescription lens must be fulfilled from a store within that state that has an optometrist instead of their warehouse in New Orleans.

## How orders are placed
When a store representative places an order for a prescription product, they enter the sale into Shopify POS with the inclusion of a unique identifier product. The store staff will only place the items related to the prescription order in the order, all other regular items will be placed in a separate order and fulfilled in the same fulfillment flows as other products.

## Order routing in HotWax
When the order is ready to be routed in HotWax Commerce, the routing engine will only find inventory for the “Nashville prescription” product at qualifying locations in Nashville. As of roll out in 2023 this is only one store, 1818. Due to order splitting being disabled, any order with this product will always be routed to stores that also have the special product’s inventory in the OMS. A special workflow will automatically replenish this product’s inventory in the OMS to a generous surplus every morning to ensure order flow is never interrupted.

## Syncing to NetSuite
It is yet to be determined if this product should be included in the sync to NetSuite. Since the product is added during order capture and is visible in Shopify, syncing it to NetSuite would create simple reconciliation.