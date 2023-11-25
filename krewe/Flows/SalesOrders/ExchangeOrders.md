# Exchange Orders

Exchange orders are created in Krewe by Loop Exchanges, which also currently has a Celigo flow to post these exchange orders to NetSuite. Loop Exchanges uses its custom integration through Celigo to handle the intricate exchange and return accounting in NetSuite to ensure that the customer deposit created from the refund of the original order is mapped to the new exchange order in NetSuite as well as ensuring its fulfillment. These orders are expected to never require fulfillment as they are entirely handled in store, so they will enter the OMS as completed orders.

## How this works in HotWax
In order to avoid creating duplicate orders in NetSuite, the HotWax integration layer will exclude orders that are created by the Loop Exchanges app in its order feed to NetSuite. In order to filter specifically the orders created by Loop Exchanges, HotWax will map their order source ID that is included in orders from Shopify, to a new sales channel called “Loop Exchange”.
