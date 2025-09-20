---
description: >-
  Explore how New Era Caps seamlessly integrates online and in-store inventory
  management with Shopify, facilitating options like BOPIS (Buy Online Pick-Up
  In Store) and Ship from Store.
---

# Omnichannel Orders

All stores that participate in online sales will post their inventory to their respective store locations in Shopify. New Era also supports mixed cart so cart items will be tagged with line item properties to identify if they are pickup or ship from store as well as the facility the customer chose for fulfillment.

## BOPIS

Flagship will provide a custom store pickup experience on the product detail page, allowing customers to select their preferred pickup location. Since New Era Caps already has a store inventory checking feature in place, Flagship will reuse that interface as much as possible and remap the inventory lookup to the OMS’s [checkInventory API](https://docs.hotwax.co/documents/integrate-with-hotwax/hotwax-commerce-api-and-data-feeds/inventory/check-inventory).

When customers choose a store for pickup, Flagship’s custom interface will add the necessary line item properties to the product. These properties are then parsed by the OMS when importing the order from Shopify to ensure accurate fulfillment.

## Ship from Store

Shipping products from stores is significantly more expensive for New Era Caps than shipping from their warehouse. However, if an item is not available at the warehouse, New Era Caps still wants to give customers the option to pay a higher fee and have the item shipped from a nearby store. This product detail page experience is developed by Flagship and leverages HotWax Commerce’s `Soft Allocation API`. Refer to this [manual](https://docs.hotwax.co/documents/retail-operations/orders/order-management/soft-allocation) for detailed instructions on how soft allocated orders are configured in HotWax.

Along with covering the extra cost of shipping from stores, New Era Caps also expects that displaying nearby store inventory with the option of free pickup but paid shipping will encourage more customers to choose in-store pickup rather than home delivery. 

**Determining if a product is out of stock at the warehouse**

HotWax Commerce pushes inventory to each store location on Shopify. To determine if a product is available to ship from the warehouse, Flagship will develop a custom product detail page experience that checks inventory at the warehouse using HotWax’s [checkInventory API](https://docs.hotwax.co/documents/integrate-with-hotwax/hotwax-commerce-api-and-data-feeds/inventory/check-inventory) when customers visit a product page. When a product is found to not be available at the warehouse, store inventory will be presented to the customer.

If a product is only available at stores, customers will also be shown the additional shipping charges that they’ll incur if they choose a store for delivery. During the add to cart experience Flagship will add a soft allocation to the order items that the customer has selected to have shipped from store to their house at a higher shipping fee. Because these items have been soft allocated to the store selected by the customer, they will not flow through regular brokering flows, instead they’ll be allocated to the store in the OMS right after import.
