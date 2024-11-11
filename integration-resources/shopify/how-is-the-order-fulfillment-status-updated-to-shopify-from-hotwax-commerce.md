---
description: >-
  Optimize workflow by fulfilling orders in HotWax Commerce with the Fulfillment
  app or external systems like Warehouse Management Systems.
---

# Order Fulfillment

Once the order is routed to the fulfillment center in HotWax Commerce, it can be fulfilled using either the HotWax Commerce Fulfillment app or an external system such as a Warehouse Management System (WMS).

1. **Fulfillment by HotWax Commerce Fulfillment App**

HotWax Commerce provides a Fulfillment app that enables the picking, packing, and shipping of orders from stores. After shipping, the orders are marked as 'Completed' within HotWax Commerce. To update tracking details and mark orders as 'Fulfilled' or 'Partially Fulfilled' in Shopify, the "Completed Orders" job can be scheduled in HotWax Commerce, which calls a [Shopify API](https://shopify.dev/docs/api/admin-rest/2023-04/resources/fulfillment#post-fulfillments-fulfillment-id-update-tracking).

2. **Fulfillment By An External System**

For orders fulfilled by an external system, HotWax Commerce only receives the fulfillment status from the external system and marks the order as 'Completed'. Once the order is marked as completed in HotWax Commerce, it sends the tracking details (if they are provided by the external system) to Shopify and marks the orders 'Fulfilled' in Shopify.

In HotWax Commerce, users can schedule the 'Completed Orders' job to generate a file containing all orders that have been completed since the last upload. This file is then uploaded to an SFTP location. HotWax Commerce subsequently uses the API to send the fulfillment status of each completed order to Shopify. Shopify processes these requests and updates the order status to 'fulfilled'.

{% hint style="info" %}
It is recommended that this task be done every 30 minutes. During each run, it will collect all completed orders within the past 30 minutes. The time interval can be adjusted to meet the specific needs of the merchant.
{% endhint %}

<figure><img src=".gitbook/assets/Completed Orders (1).png" alt=""><figcaption><p><em>Fig. 1: Configuration of the completed orders job in the Job Manager App</em></p></figcaption></figure>

\\
