# POS Exchanges Lifecycle

The POS Exchanges Lifecycle Business Process Model illustrates how in-store exchanges are managed between RMS, eCommerce, ERP, and HotWax Commerce.

The process of returning an item mirrors the steps previously discussed in the POS Returns Lifecycle Business Process Model. More specifically, customers visiting the store location, store associates looking up the customer’s order in the Loop POS App, and initiating the return process remains the same.

## Exchange Processed
  
   Often, customers opt to purchase alternative products by returning an item, especially when there are size-related concerns. In this scenario, while processing in-store return, store associates add new items that are being purchased as replacements for the returned item and complete the return process. Once new exchange items are added, store associates initiate refunds against the returned item and then the return status is marked as "Processed".

## Return & Exchange Created in Shopify POS

Once the return process is completed in the Loop POS Returns App, multiple actions take place in Shopify and NetSuite, let’s understand them in detail:

- Loop creates a return under the order in Shopify POS and marks the returned item as “Returned”, restocks the returned inventory and updates the payment status as “Refunded”. In case of exchanges, Loop also creates a new “Fulfilled” order in Shopify POS.
- Loop creates a cash refund record in NetSuite and also adds the associated cash sale ID in the memo so that the original order can be easily looked up. When cash refund records are created, returned inventory is automatically restocked in NetSuite.

## POS Returns Downloaded from Shopify POS to HotWax Commerce

This process again mirrors the steps discussed in the POS Return Lifecycle. The only additional step performed is creating a new exchange order.

- As discussed earlier, for exchanges, Loop creates a new exchange order in Shopify POS. Exchange orders that are created in Shopify POS are downloaded in HotWax Commerce just like regular POS sales. A scheduled job downloads exchanges from Shopify POS in the "Completed” status and also reduces the inventory for the item sold as part of the exchange process.

## Synchronize new POS Exchanges from HotWax Commerce to NetSuite

A scheduled job in HotWax Commerce synchronizes exchanges in the form of new POS sales to NetSuite and cash sale records are created in the “Deposited” status. Once cash sale records are created, the inventory for the exchange item is automatically reduced in NetSuite.
