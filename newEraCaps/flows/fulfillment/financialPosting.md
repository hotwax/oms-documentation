---
description: >-
  Explore how New Era Caps Japan manages financial posting seamlessly across
  Shopify, BI/BW, and SAP systems.
---

# Financial Posting

Once orders are fulfilled, it is posted to three different systems, Shopify, BI/BW and SAP

### Shopify

The OMS’s native Shopify integration will post fulfillment to Shopify as order items are fulfilled from stores or warehouses.

### BI/BW

For order items that are fulfilled from stores, their financial posting is synced to New Era Cap’s BI/BW platform. BI/BW then processes this feed and handles the actual posting to SAP itself. While this feed is an item fulfillment feed, this will only be generated for completed orders, not partially completed orders. Posting upon order completion and not item completion is an important part of the order level charge posting that is detailed below.

### SAP

While BI/BW posts store fulfilled orders to SAP, order items fulfilled by the warehouse are synced to SAP by the WMS platform eliminating the need for the OMS to communicate directly with SAP.

### Posting Order Level Charges

Because parts of orders can be synced to SAP by both BI/BW and the WMS, there is an extra layer of logic housed in the integration layer of both platforms to ensure that order level charges such as shipping charges, taxes and more are not posted to SAP twice.

If any part of the order is synced to the WMS for fulfillment, it will always contain all the order level charges. In this case, BI/BW will never receive any order level charges of the order, only item level charges for the items fulfilled from stores. When no part of an order is brokered to the warehouse for fulfillment, the integration layer is able to determine that order level charges need to be included in the feed generated for BI/BW after the order is completed.
