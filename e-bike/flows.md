---
description: Learn about the flows in E-bike.
---

## Inventory
**E-Bikeshop primarily operates on a pre-order model without an ERP system.** Inventory data, encompassing both current stock and future purchase orders, is meticulously maintained in Excel spreadsheets. To integrate this information into the OMS, a manual upload process is executed via the system's import/export function (EXIM page).Post order reservation and purchase order calculations, the updated inventory data is synchronized with the eCommerce platform.

## Facilities
E-Bike operates from a single warehouse with three internal storage areas: Bulk, Primary Picking, and Retail Outlet. These locations are replicated within the OMS and Shopify systems as primary inventory hubs.

## Purchase Order
Purchase orders serve as the foundation for E-Bike's pre-order process. These purchase orders, typically with a one-year delivery timeline, are uploaded to the OMS via the EXIM page to influence pre-order computation.

## Pre-order

The `Auto Refresh Pre-sell Catalog` job, located in the Job Manager under the Pre-order page, automatically manages the addition and removal of pre-sell products by monitoring current stock levels and upcoming purchase orders. It updates HotWax's Pre-order/Backorder category accordingly. Since E-Bike handles pre-orders through the Backorder category, this job ensures that backorder-eligible items are correctly added to the Backorder category. 

Another job, `Sync Variant Details` in HotWax Commerce, located on the pre-order page, handles the synchronization of pre-order information to Shopify. This job automatically checks the `Continue Selling When Out of Stock` checkbox and adds the `HC: Backorder` tag to the product on Shopify. Additionally, it updates the promise date in the Shopify product meta field, which is then utilized by third-party systems, in this case Globo, to make Pre-order PDP changes.

Globo handles the addition of the pre-order button on Shopify product detail pages. The `Sync Variant Details job` in HotWax Commerce ensures that any changes in purchase order arrival dates are automatically reflected in the product's promise dates on Shopify. However, when arrival dates for multiple items change within purchase orders, the promise dates must first be updated in HotWax Commerce's pre-sell category. This update process is handled by the `Update Pre-Order Category Item Arrival Date` job.

## Order Processing

The `import order job` regularly syncs Shopify orders to the OMS. However, for E-Bike's high-value pre-order products, a unique order processing flow is required. Globo facilitates this by collecting an advance payment upon order placement and sending a subsequent payment link when the product is ready to ship. Once the full payment is received, the order status is manually updated by E-bike to 'Approved' from 'Created' status in the OMS, initiating the fulfillment process.Potential orders held in the backorder queue are manually released to the brokering queue. Once in the brokering queue, a brokering run is initiated, which then sends the orders to the appropriate facility for fulfillment.

**Order Updates**

In E-bike, it’s common for order items to be updated before fulfillment, such as adding new items or accessories or changing product SKUs. To handle these updates, HotWax Commerce uses the Import Order Updates from Shopify job to sync the information. When these changes occur, payment reauthorization is required for the difference in amount. Shopify sends a payment request email to the customer, and once the payment is made, Globo collects the full payment when the due date arrives.

**Mixed carts**

**E-bikes often include accessories that need to be shipped with the main product.** To ensure this, the system holds orders with both regular and pre-order items until everything is ready to ship. Orders with both in-stock and pre-order items are held until all products are ready to ship. This order holding behavior is configured within the product store setting named `Order Splitting`. 

## Fulfillment
**E-Bike operates a single warehouse and handles order fulfillment manually.** While integrated with HotWax Commerce for order management, the platform's fulfillment features, such as order picking, packing, and label generation, are not fully utilized. Orders are marked complete within HotWax Commerce after manual fulfillment, and this information is then synced to Shopify by HotWax.

