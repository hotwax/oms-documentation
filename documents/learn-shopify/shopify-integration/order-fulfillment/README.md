---
description: >-
  Learn how HotWax Commerce fulfills orders and updates fulfillment status to
  Shopify.
---

# Order fulfillment

Once an order is routed to a fulfillment center in HotWax Commerce, it can be fulfilled using either the HotWax Commerce Fulfillment App or an external system such as a warehouse management system (WMS).

## Fulfillment by HotWax Commerce Fulfillment App

HotWax Commerce provides **[Fulfillment App](../../../store-operations/fulfillment/README.md)** that enables picking, packing, and shipping of orders from stores. After shipping, orders are marked as `Completed` within HotWax Commerce.

## Fulfillment by an external system

For orders fulfilled by an external system, HotWax Commerce receives the fulfillment status from that system and marks the order as `Completed`. Once an order is marked as completed, HotWax Commerce sends any tracking details to Shopify and marks the order as `Fulfilled`.

## Updating fulfillment status to Shopify

After orders are marked as `Completed` in HotWax Commerce, the fulfillment status and tracking details need to be sent to Shopify. Here is how the fulfillment update flow works:

### 1. Collecting completed orders
Users schedule the **`poll_SystemMessageSftp_OMSFulfillmentFeed`** job in HotWax Commerce. During each run, the job collects all orders that have been completed since the last upload.

{% hint style="info" %}
Run this job every 30 minutes. The interval can be adjusted to meet merchant needs.
{% endhint %}

### 2. Retrieving fulfillment orders from Shopify

For each completed order, HotWax Commerce calls the Shopify GraphQL API to retrieve the associated fulfillment orders. Shopify organizes fulfillment at the fulfillment-order level, so HotWax Commerce first fetches the fulfillment order ID and line item details using the `get#FulfillmentOrdersByOrderId` service.

### 3. Creating fulfillment on Shopify

HotWax Commerce then sends a GraphQL [`fulfillmentCreate` mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate) to Shopify. This mutation creates a fulfillment record on Shopify and marks the order as `Fulfilled` or `Partially Fulfilled`.

### 4. Shopify processes the fulfillment

Shopify processes the mutation and updates the order status to `Fulfilled`. If tracking details were included, they are also attached to the fulfillment record. Shopify returns a response confirming the fulfillment ID, status, and any errors.