---
description: Learn how HotWax Commerce updates Kit order fulfillment status to Shopify.
---

# Kit order fulfillment

### How the order fulfillment status of kit products and their components is updated to Shopify from HotWax Commerce

HotWax Commerce facilitates the fulfillment of kit products and their components, and provides real-time updates on Shopify with the following steps:

* The picklist includes details of all kit components, enabling pickers to gather and assemble the kit during the packing process.
* After the kit order is picked, packed, and shipped in HotWax Commerce, the respective order is marked as `Completed` within HotWax Commerce.
* Fulfillment status, including tracking details, is then synchronized to Shopify through the `poll_SystemMessageSftp_OMSFulfillmentFeed` job.

