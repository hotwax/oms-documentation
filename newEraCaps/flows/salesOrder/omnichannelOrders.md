---
description: >-
  Explore how New Era Caps seamlessly integrates online and in-store inventory
  management with Shopify, facilitating options like BOPIS (Buy Online Pick-Up
  In Store) and Ship from Store.
---

# Omnichannel Orders

All stores that participate in online sales will post their inventory to the consolidated inventory location on Shopify. New Era also supports mixed card so cart items will be tagged with line item properties to identify if they are pickup or ship from store as well as the facility the customer chose for fulfillment.

## BOPIS

Flagship will produce a custom experience on the product detail page for store pickup where customers can choose which location they want to pick up from. New Era Caps already has an existing store inventory checking experience on their product detail page, and Flagship will attempt to reuse that as much as possible and remap the inventory lookup to the OMS’s [checkInventory API](\(https:/docs.hotwax.co/integration-resources-1/v/hotwax-commerce/apis/inventory/check-inventory/\)/).

When customers select the store that they want to pick up their product at, Flagship’s custom interface ensures that line item properties are added to the item which the OMS will parse when importing the order from Shopify.

## Ship from Store

Shipping products from stores is significantly more expensive for New Era Caps than shipping from their warehouse. However, if an item is not available at the warehouse, New Era Caps still wants to allow customers a choice to pay more and get an item shipped from a nearby store using a product detail page experience developed by Flagship. For this experience, the product detail page utilizes HotWax Commerce's `Soft Allocation API`. Refer to this manual for detailed instructions on how soft allocted orders are configured in HotWax.

In addition to covering the additional cost of shipping from store, New Era Caps expects that by showing inventory for products at nearby stores with additional shipping fees but free pickup will encourage customers to simply come into stores for pickup rather than having items shipped to their home.

**Determining if a product is out of stock at the warehouse**

HotWax Commerce pushes a consolidated inventory level to Shopify that doesn’t segregate inventory by facility. To determine if a product is available to ship from the warehouse, Flagship will develop a custom product detail page experience that checks inventory at the warehouse using HotWax’s [checkInventory API](\(https:/docs.hotwax.co/integration-resources-1/v/hotwax-commerce/apis/inventory/check-inventory/\)/) when customers visit a product page. When a product is found to not be available at the warehouse, store inventory will be presented to the customer.

If a product is only available at stores, customers will also be shown the additional shipping charges that they’ll incur if they choose a store for delivery. During the add to cart experience Flagship will add a soft allocation to the order items that the customer has selected to have shipped from store to their house at a higher shipping fee. Because these items have been soft allocated to the store selected by the customer, they will not flow through regular brokering flows, instead they’ll be allocated to the store in the OMS right after import.
