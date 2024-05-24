---
description: >-
  Discover how New Era Caps handles digital items like gift cards in their order
  fulfillment process.
---

# Digital Items

Digital items often require different handling than regular items because their fulfillment is not the same as actual physical items. Digital items such as a gift card, may be configured by retailers to be auto completed at order creation in Shopify or auto completed by the OMS during import if the product type is configured to “isDigital”.

Usually digital items are not included in brokered item feeds to WMS systems from the OMS since those products do not require fulfillment, but in New Era Caps flow, the WMS intermediates the data flow from the OMS to SAP. Due to this middleware role that the WMS plays, the OMS includes digital items in its feed to the WMS even though their fulfillment is not required, only to ensure that they are included in the order posted to SAP from the WMS.

Similar to how order level taxes function, the WMS feed will get preference over the BI/BW feed for digital items. This means that if any order is being shipped from both stores and warehouses, then digital items will be pushed through the WMS feed. But if no items are shipped from the WMS, then the items will be included in the BI/BW feed along with the store fulfilled items.

As of initial roll out, Flagship, New Era Caps Shopify agency, has said that no digital goods such as Gift Cards are currently sold on their Shopify, so no special handling to include digital goods in the WMS feed has been made. When digital goods begin sales on Shopify, conversations will be required between all technology stakeholders to ensure that they flow through as expected to SAP.
