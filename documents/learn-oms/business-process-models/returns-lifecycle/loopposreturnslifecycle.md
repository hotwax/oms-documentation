---
description: >-
  The In-Store Returns Lifecycle BPM illustrates how in-store returns are
  managed between RMS, POS, ERP, and HotWax Commerce.
---

# In-Store Returns with Loop

<figure><img src="../../.gitbook/assets/InstoreReturnsLoopbpm.png" alt=""><figcaption><p>In-store returns lifecycle business process model</p></figcaption></figure>

Customers who live near a brick-and-mortar store or those who prefer to get instant refunds opt for returning their purchases directly in-store.

To explain the POS Returns lifecycle, we've taken Loop POS App as the RMS, Shopify POS as POS, and NetSuite as the ERP system, while HotWax Commerce serves as the OMS.

## Customers Return in Store

Customers visit their preferred store to return their purchases. Upon arrival, they provide order details to the store associate, who then looks up the order using either the order number or the customer's name.

## Look-Up Specific Order

Store associates use the Loop POS App to search the customer's order. Once identified, they start processing the order return.

## Return Initiated

Store associates choose the item being returned, designate the restock location to facilitate inventory replenishment, and also specify the reason for the return. Upon completion of these steps, the order is ready to be returned.

## Refund Initiated

Store associates complete the return process by initiating the refunds to customers. Once refunds are processed from the Loop POS App, the return status is marked as <mark style="color:orange;">**"Processed"**</mark>.

## Returns Created in Shopify POS

Once the return process is completed in the Loop POS Returns App, multiple actions take place in Shopify and NetSuite, let’s understand them in detail:

* Loop creates a return under the order in Shopify POS.
* For a return under order, Loop marks the returned item as <mark style="color:orange;">**“Returned”**</mark>, updates the payment status as <mark style="color:orange;">**“Refunded”**</mark> and restocks the returned inventory in Shopify POS.
* Loop creates a cash refund record in NetSuite and also adds the associated cash sale ID in the memo so that the original order can be easily looked up. When cash refund records are created, inventory is automatically restocked in NetSuite.

{% hint style="success" %}
It's crucial to understand that in-store returns are instantaneous because the return request and receipt happen simultaneously. This is the reason why these in-store returns are initially processed and completed in Loop and subsequently sent to other systems like Shopify POS, NetSuite, and HotWax Commerce, unlike web returns.
{% endhint %}

## POS Returns Downloaded from Shopify POS to HotWax Commerce

A scheduled job in HotWax Commerce downloads the return data from Shopify POS. These returns are downloaded in <mark style="color:orange;">**“Completed”**</mark> status and the payment in <mark style="color:orange;">**“Refunded”**</mark> status in HotWax Commerce.

HotWax Commerce also restocks the returned inventory because of the visibility into the specific location where the inventory is received.

These POS returns are not synchronized to NetSuite again because this part has already been handled by Loop.

#### Why is Downloading POS Returns Crucial in HotWax Commerce? <a href="#why-is-downloading-returns-crucial-in-hotwax-commerce" id="why-is-downloading-returns-crucial-in-hotwax-commerce"></a>

To ensure data integrity, HotWax Commerce provides an auditing tool OReSA that automatically compares in-store return totals of the POS system with the ERP.

In case any inconsistencies are found, the returns audit dashboard provides a gap analysis report that highlights the monetary gaps in both systems.
