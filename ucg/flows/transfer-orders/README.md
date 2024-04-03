---
description: >-
  Explore how Frank and Oak manages transfer orders, now modeled as full orders
  with multiple shipments, enhancing fulfillment processes.
---

# Transfer Orders

Frank and Oak will almost always ship transfer orders from their warehouses and stores in multiple shipments. This means that unlike until now, where transfer orders in NetSuite were mapped to simple shipments in HotWax, they are now modeled as a full order with multiple shipments. Modeling transfer orders from NetSuite as actual orders in the OMS will allow staff to not only fulfill orders in multiple shipments but also use the same fulfillment interface in the fulfillment application as they used to for shipping sales orders.

Inbound shipments for transfer orders will sync directly from NetSuite, and to support multiple shipments there, the OMS will now sync item fulfillments from NetSuite as inbound transfer shipments. This will allow the receiving store to receive the transfer shipment in exactly as many shipments as the warehouse sent out.

UCG has a unique integration with their WMS system which leverages the packages function in NetSuite to further dissect fulfillments into multiple tracking codes. Because packages themselves don’t directly have package content details, the WMS integration stores the item details in the comments section of the package.

Storing package content details in the comments section is not a real data storage schema and is therefore not supported by the OMS. It is yet to be decided which team will produce a compatible file for the OMS to consume as of 17th Jan
