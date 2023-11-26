# Order Invoicing

Once an order is fulfilled in HotWax, encompassing both BOPIS and shipping orders from eCommerce it is sent to Retail Pro for invoicing and further transmission to SAP for financial posting. POS send sale orders are excluded because those orders are already invoiced when they’re created in the POS. If HotWax invoiced them again after fulfillment, it would cause duplicate invoicing in RetailPro.

HotWax uses the OrderToInvoice API from RetailPro to sync all completed orders for invoicing. 
In cases of split orders, where an item is fulfilled from one store but invoiced at another, Retail Pro’s Inventory Transfer API is utilized to adjust inventory to effectively make it look like the entire order was shipped from one store.

**Here is a detailed breakdown of how multi-store invoicing works:**

The objective is to invoice the entire order from one store even if it’s fulfilled from multiple stores.

A two step process is employed to accomplish this, the first step is to invoice the entire order at the first shipping facility of the order, and then an inventory transfer from the other stores to the invoicing store. Let’s break down each of these steps into further detail.

## Invoice from the first shipping store
When an order is fulfilled from multiple stores, HotWax elects an `invoicing store` during invoicing based on the first store to ship items from the order. In other words, the store that ships first will become the store where the entire order will be invoiced in Retail Pro. Even if the inventory for the shipped product doesn’t technically exist at the `invoicing store`, Retail Pro allows HotWax to invoice items against negative inventory. The extra inventory that is invoiced from the `invoicing store` is then compensated for using automated inventory transfers.


## Inventory transfers to the invoicing store
HotWax uses the `Manual Slip` API endpoint in RetailPro to compensate for inventory that was invoiced from the `invoicing store` but was actually shipped from another store. The actual shipping store is used as the origin store for the inventory transfer and the invoicing store is used as the destination store when executing the inventory transfer. When the inventory transfer is complete, the inventory levels in RetailPro are once again accurate to what is available in HotWax.