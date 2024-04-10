# Return Lifecycle

The Return Lifecycle Business Process Model illustrates how returns are managed between RMS, eCommerce, ERP, and HotWax Commerce.

HotWax Commerce, being an Order Management System, forwards the responsibility of managing returns to specialized Return Management Systems. This means that most of the process in the return lifecycle will be handled by a third-party Return Management System (RMS).

HotWax Commerce simply downloads completed returns for auditing purposes, ensuring reconciliation of returns in both Shopify and NetSuite. To explain the return lifecycle, we've taken Loop as the RMS, Shopify as eCommerce platform, and NetSuite as the ERP system, while HotWax Commerce serves as the OMS.

## Returns Initiated in Loop

Loop lets customers directly initiate returns against their web orders. When customers complete their return process, a Return Merchandise Authorization (RMA) is created in Loop in the `Open` status.

## Creates Return on Order in Shopify

Loop updates the order details in Shopify reflecting that a return has been requested by the customer.

## Creates RMA in NetSuite

Many retailers use third-party integration apps like Novamodule to synchronize returns from Loop to NetSuite.

Loop generates the RMA in the `Pending Receipt` status in NetSuite using a third-party integration app. This gives the warehouse teams a heads-up that an order item will be coming back.

## Return Item Successfully Received in the Warehouse

Customers print the shipping label provided by loop and prepare the return package to ship their return items back to the retailer so that they can receive a refund.

When the return package reaches the warehouse, the warehouse teams initiate receiving of the return item against the RMA and the following actions take place:

- Item receipt records are created in NetSuite against the RMA, and the returned inventory is restocked.

- The status of RMA is updated from “Pending Receipt” to `Pending Refund`.

Now that the customer has shipped the return item back, its item receipt has been processed against the RMA in NetSuite, refunds should be processed to the customer.

## Creates Return Receipt Records in Loop

Item receipt records created in NetSuite are synchronized to Loop using a third-party integration app. Consequently, return receipt records are generated in Loop. This means that refunds can now be initiated to customers.

## Process Refunds

Processing refunds to the customers marks the completion of returns. During this process, multiple actions take place in Loop, NetSuite, and eCommerce. Let’s understand them:

- Return receipt records trigger the creation of refund records in Loop. Once refund records are created, Loop creates customer refund records in NetSuite using a third-party integration app. This marks the completion of RMA in NetSuite, with its status updating from `Pending Refund` to `Refunded`.

- The creation of refund records in Loop also marks the completion of RMA in Loop, with its status updating from `Open` to `Close`.

- Return receipt records in Loop triggers the refund process on Shopify and refunds are then issued to the customer. This marks the completion of return in Shopify, with the creation of payment records in `Refunded` status and the order status updated as `Returned`.

## Customer Receives Refund

Refunds issued from Shopify are received by the customer. This concludes the refund process.

## Returns downloaded in HotWax Commerce

When the return process is completed on Shopify, a scheduled job in HotWax Commerce downloads the return data. These returns are downloaded in “Completed” status and the payment in `Refunded` status in HotWax Commerce.

A scheduled job in HotWax Commerce performs a daily sync of inventory data from NetSuite, this ensures that inventory updates from any new receipts that are received in warehouses from returns or purchase orders are accurately synchronized in HotWax Commerce.

HotWax Commerce also performs regular inventory synchronization to Shopify by comparing the inventory totals between HotWax Commerce and Shopify. Following the comparison, HotWax Commerce updates Shopify with any differences in inventory numbers, ensuring that any changes in inventory in HotWax Commerce, such as increases resulting from returns, are accurately reflected on Shopify.

### Why is downloading returns crucial in HotWax Commerce?

To ensure data integrity, HotWax Commerce provides an auditing tool OReSA that automatically compares returns totals of the eCommerce platform with the ERP.

In case any inconsistencies are found, the returns audit dashboard provides a gap analysis report that highlights the monetary gaps in both systems.
