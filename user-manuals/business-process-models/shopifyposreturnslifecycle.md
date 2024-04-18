# Shopify POS Returns Lifecycle

The Shopify POS Returns Lifecycle Business Process Model illustrates how in-store returns are managed between POS as RMS, ERP, and HotWax Commerce.

Some of our Shopify customers use the Shopify POS App to accept in-store returns. The app lets them check all of their store's orders in a single view, whether they were placed online or in person, review its details, and perform a refund or exchange.

## Customers Return in Store

Customers visit their preferred store to return their purchases. Upon arrival, they provide order details to the store associate.

## Look-up Specific Order

Store associates search the customer's order ID and once identified, they start processing the in-store return.

## Returns Processed

Store associates choose the item being returned, designate the restock location to facilitate inventory replenishment, and also specify the reason for the return. Finally, store associates complete the return process by processing the refunds to customers.

## Returns Created in Shopify POS

Once the refund process is completed in the Shopify POS, multiple actions take place:

- Returned inventory is restocked at the designated store location.
- A return under the order is created in Shopify POS with the returned item marked as “Returned”, and the payment status is updated as “Refunded”.

It's crucial to understand that in-store returns are instantaneous because the return request and receipt happen simultaneously, unlike web returns.

## POS Returns Downloaded from Shopify to HotWax Commerce

A scheduled job in HotWax Commerce downloads the return data from Shopify POS. These returns are downloaded in “Completed” status and the payment in “Refunded” status in HotWax Commerce.

HotWax Commerce also restocks the returned inventory because of the visibility into the specific location where the inventory is received.

## Synchronize POS Returns from HotWax Commerce to NetSuite

A scheduled job in HotWax Commerce synchronizes POS returns to NetSuite. This triggers multiple actions:

- A cash refund record is generated against the original cash sale.
- The returned inventory is automatically restocked.
- The link to the cash refund record is added to the original cash sale.
