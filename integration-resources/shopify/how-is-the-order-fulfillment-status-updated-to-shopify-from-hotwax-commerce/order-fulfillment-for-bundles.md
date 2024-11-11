---
description: >-
  Learn how HotWax Commerce seamlessly updates bundle order fulfillment status
  to Shopify.
---

# Order Fulfillment for Bundles

### How is the Order Fulfillment Status of the Bundle Updated to Shopify from HotWax Commerce?

HotWax Commerce helps in the fulfillment of the bundle and sending updates of the fulfillment of the bundle on Shopify using the following steps:\\

* The picklist has details of the components of the bundle so that the picker can pick the components of the bundle and create the bundle at the time of packing. Each component of the bundle is picked by the picker.
* Once the bundle is assembled, packed, and shipped in HotWax Commerce the bundle in the order of HotWax Commerce is marked as completed.
* The fulfillment update for the bundle, along with tracking details, is synchronized to Shopify using the [‘Completed Orders’](https://docs.hotwax.co/integration-resources-1/how-is-the-order-fulfillment-status-updated-to-shopify-from-hotwax-commerce) job.
