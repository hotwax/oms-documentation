---
description: Learn about the flows in E-bike.
---

## Inventory
E-Bike operates mainly on pre-orders and they do not use any ERP system. E-Bike manually maintains its inventory through an Excel sheet and manually uploads it to HotWax commerce through the EXIM page. 

E-Bike usually accepts orders with a delivery timeline of over 1 year. Hence, the E-Bike’s POs are also mostly one year.

## Facilities
E-Bike operates with a single warehouse, which has three locations: Bulk, Pick-primary, and Retail.

## Purchase Order
E-Bike uploads purchase orders into HotWax Commerce using the EXIM page. The `Auto Refresh Pre-sell Catalog` job, found in the job manager under the pre-order page, automatically manages the addition or removal of pre-sell products in HotWax's Pre-order/Backorder category. Since E-Bike handles pre-orders through the Backorder category, this job ensures that the purchase order items are added to the Backorder category.

Another job, `Sync variant details` in HotWax Commerce on the pre-order page, facilitates updates to the Presell catalog on Shopify. It is important to check the `continue selling when out of stock` in Shopify so that these products will be eligible for pre-orders. HotWax Commerce checks this box and adds an `HC: Backorder` tag on this product. The promise date will also be added in the meta field in Shopify. 

Globo will then add the pre-order button on the Shopify product detail page. The `Sync Variant Details` job ensures that if there is any change in the purchase order arrival date, the promise dates of the product are also updated on Shopify. However, when there are changes in the arrival dates of multiple items in the purchase orders, the promise dates need to be first updated in the HotWax Commerce pre-sell category. These changes happen through the `Update Pre-Order Category Item Arrival Date` job.

## Order Import and Processing in HotWax Commerce
The `import order job` in the order page imports orders from Shopify. E-Bike manually changes the status of orders from `created` to `approved` once payment is collected. Given the premium nature of their goods, E-Bike also handles customization requests for already created orders.

These special requests are managed through the Shopify admin page, making it common for E-Bike to edit existing orders daily. Orders are reserved against upcoming PO inventory and are accepted until inventory arrives or the complete PO inventory is consumed. These orders are then held in the backorder queue and released to the brokering queue when the PO arrives, either manually or automatically.

For pre-order items, E-Bike uses the Globo Pre-order app, which assists in partial payment collection and handles PDP changes like promise dates and pre-order tags on Shopify. E-Bike does not take full upfront payments but collects a deposit of $199. Globo allows only one item per order for partial payment collection, so mixed cart orders are not taken at checkout. 

Additional items, if requested, are added later. When a new item is added to the order, payment reauthorization is needed. Shopify sends a payment request email to the customer, and the payment is made. Finally, Globo collects the full payment through draft orders when the due date arrives.

E-Bike manually makes changes to orders based on customer requests, such as adding new items or accessories or changing product SKUs. To accommodate these changes, HC provided a `Refresh Order` function to bring changes made to the order on Shopify in real-time into HC. 

However, refreshing an order in HC put the associated sales order in the system on hold. To address this, the `import order updates from Shopify` job is now used instead of Refresh Orders. 

In the case of the mixed cart orders, the normal order items will go into the brokering queue and the pre-order products will go into the back-order parking. The whole order will be allocated to the warehouse once the inventory for the pre-order item is received.

## Fulfillment
E-Bike operates with a single warehouse, so all orders are routed there. They do not fully utilize our Fulfillment app, and shipping labels are not generated in HotWax. Orders are manually completed in HotWax Commerce, after which HotWax syncs the fulfillment information to Shopify.
