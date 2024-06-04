---
description: >-
  The In-Store Exchanges Lifecycle BPM illustrates how in-store exchanges are
  managed between RMS, eCommerce, ERP, and HotWax Commerce.
---

# In-store exchanges with Loop

<figure><img src="../../.gitbook/assets/In-store exchanges loop bpm.png" alt=""><figcaption><p>In-store exchanges lifecycle business process model</p></figcaption></figure>

The process of returning an item mirrors the steps previously discussed in the [In-Store Returns Lifecycle Business Process Model](../returns-lifecycle/loopposreturnslifecycle.md). More specifically, customers visiting the store location, store associates looking up the customer’s order in the Loop POS App, and initiating the return process remains the same.

## Exchange processed

Often, customers opt to purchase alternative products by returning an item, especially when there are size-related concerns. In this scenario, while processing in-store return, store associates add new items that are being purchased as replacements for the returned item and complete the return process.

Once new exchange items are added, store associates initiate refunds against the returned item and then the return status is marked as <mark style="color:orange;">**"Processed"**</mark>.

## Return & exchange created in Shopify POS

Once the return process is completed in the Loop POS Returns App, multiple actions take place in Shopify and NetSuite, let’s understand them in detail:

* Loop creates a return under the order in Shopify POS and marks the returned item as <mark style="color:orange;">**“Returned”**</mark>, restocks the returned inventory and updates the payment status as <mark style="color:orange;">**“Refunded”**</mark>. In case of exchanges, Loop also creates a new <mark style="color:orange;">**“Fulfilled”**</mark> order in Shopify POS.
* Loop creates a cash refund record in NetSuite and also adds the associated cash sale ID in the memo so that the original order can be easily looked up. When cash refund records are created, returned inventory is automatically restocked in NetSuite.

## In-store returns downloaded from Shopify POS to HotWax Commerce

This process again mirrors the steps discussed in the [In-Store Return Lifecycle](../returns-lifecycle/loopposreturnslifecycle.md). The only additional step performed is creating a new exchange order.

* As discussed earlier, for exchanges, Loop creates a new exchange order in Shopify POS. Exchange orders that are created in Shopify POS are downloaded in HotWax Commerce just like regular POS sales. A scheduled job downloads exchanges from Shopify POS in the <mark style="color:orange;">**"Completed”**</mark> status and also reduces the inventory for the item sold as part of the exchange process.

## Synchronize new POS exchanges from HotWax Commerce to NetSuite

A scheduled job in HotWax Commerce synchronizes exchanges in the form of new POS sales to NetSuite and cash sale records are created in the <mark style="color:orange;">**“Deposited”**</mark> status. Once cash sale records are created, the inventory for the exchange item is automatically reduced in NetSuite.
