---
description: >-
  Discover how HotWax Commerce manages restock returns for both online and
  in-store orders, ensuring accurate inventory management and syncing with
  Shopify.
---

# Restocking

## Restock Returns for Online Orders

HotWax Commerce operates with a specific inventory management approach for restocking online returns. When inventory is returned on Shopify, it provides an option to enable the restock returned inventory flag. However, HotWax Commerce does not automatically increase the inventory count in its system even if the restocked return flag is enabled on Shopify. This is because HotWax Commerce lacks visibility into the specific location where the inventory is received. Instead, inventory is updated only when the updated inventory count is received from Warehouse Management Systems (WMS) or Enterprise Resource Planning (ERP) systems.

## Restock Returns for In-Store Orders

Store associates can configure whether to accept the return of the product with or without restocking it, depending on the specific requirements set by the retailer. If the decision is to restock in-store order items immediately upon receipt, the inventory changes are updated in HotWax Commerce instantly. These inventory updates are then synced with Shopify through the `Upload recent inventory change` job from `HotWax Commerce Job Manager` app. To schedule the job follow these steps:

1. Log in to the `HotWax Commerce Job Manager App` from the launchpad.
2. Within the Job Manager app, go to the `Inventory` page.
3. Locate the `Upload recent inventory change` job within the `more jobs` section of the `inventory` page.
4. Click on the job title to open the job card.
5. Specify the job run time and preferred frequency based on your operational needs.
6. Click on `Save Changes` to schedule the job according to the defined run time and frequency.
