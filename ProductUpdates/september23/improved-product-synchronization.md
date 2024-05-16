---
description: >-
  Enhanced HotWax Commerce - Shopify product sync now ensures correct linking
  for deleted and recreated products under new parent products in Shopify.
---

# Improved Product Synchronization

<figure><img src="https://www.hotwax.co/hubfs/Improved%20product%20Synchronizatio.png" alt=""><figcaption><p>Improved Product Synchronization</p></figcaption></figure>

HotWax Commerce meticulously synchronizes all new products and updates from Shopify to guarantee precise inventory allocation for forthcoming sales orders. Retailers utilizing HotWax Commerce employ the Job Manager app to oversee tasks, ensuring accurate product synchronization. Through the Job Manager page, retailers have the capability to import newly added products from Shopify and synchronize product updates, allowing them to monitor any modifications or product deletions from Shopify effectively.

In HotWax Commerce, products are never entirely deleted and a through date is added to the products so that merchants always have access to audit the deleted products. However, a problem arises when retailers occasionally delete a product and create the product again with the same SKU as a variant for a new parent product in Shopify. For instance, a retailer may delete an SKU labeled “Brown Belt” in Shopify and subsequently list the “Brown Belt” SKU as a variant under the broader “Belt” product.

When HotWax Commerce downloads the products from Shopify, it previously used to check the SKUs to identify existing products in the system. However, since the deleted products’ SKU is still available in HotWax Commerce, the product is not downloaded to avoid duplication. Identifying this challenge, HotWax Commerce has optimized the product synchronization to also check the Shopify Product ID along with the SKU. Therefore, whenever a new product is created, HotWax Commerce checks the Shopify Product ID and the SKU and then downloads the product if it is not available in the system. Once the new product is downloaded in HotWax Commerce, all the open orders and product inventory of the deleted product is also linked to the new product. This improvement streamlines the product synchronization process and mitigates the risk of errors in inventory allocation due to product being unavailable in HotWax Commerce.
