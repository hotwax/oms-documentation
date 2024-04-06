---
description: >-
  Shopify retailers now have the option to configure inventory computation to
  withhold physical inventory online for products with orders in Pre-Order
  status.
---

# Hold Physical Inventory

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2023/January%202023/Product%20Update/Feature%20Image/PU%202-%20Hold%20Physical%20Inventory.png" alt=""><figcaption></figcaption></figure>

Shopify retailers plan their inventory allocations between eCommerce and Brick and Mortar stores for Pre-Order products after receiving the Purchase Order inventory. When a Purchase Order arrives at a warehouse, Pre-Order inventory is first allocated to items in Pre-Order parking to fulfill pending Pre-Orders, any surplus inventory is pushed to eCommerce for new orders. When planning their inventory allocation, Shopify retailers prefer one of two inventory computation scenarios based on their offline presence:

**Scenario 1: Retailers with Only Online Shopify Stores (No Brick and Mortar stores)**

| Received Inventory | Orders in Pre-Order Parking | eCommerce ATP (Received Inventory - Orders in Pre-order Parking) |
| ------------------ | --------------------------- | ---------------------------------------------------------------- |
| 100                | 80                          | 20                                                               |

Retailers can take 20 regular eCommerce orders from the available inventory.

This inventory computation works well for pure-play digital D2C brands. But when a retailer also has brick-and-mortar stores, only some of the received inventory will be pushed online to keep some inventory reserved for walk-in customers.

**Scenario 2: Retailers with Brick and Mortar stores**

Suppose retailers have 1 Brick and Mortar store, they may want to allocate 10 inventory items to the store.

| Received Inventory | Orders in Pre-order Parking | Invnetory reserved for Brick and Mortar Stores | eCommerce ATP (Received Inventory- Orders in Pre-order Parking- Reserved Inventory) |
| ------------------ | --------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| 100                | 80                          | 10                                             | 10                                                                                  |

With its latest update, HotWax Commerce allows retailers to configure a “holdPreOrderPhysicalInventory” setting for inventory computation within the Order Management System.

* Shopify retailers with Brick and Mortar stores can enable “holdPreOrderPhysicalInventory” to ensure that the excess physical inventory count of the Pre-Orders is not pushed to eCommerce to allow retailers to reserve inventory for their Brick and Mortar Stores and push it online after enough inventory has been allocated to their physical store.
* Shopify retailers who only have eCommerce stores can disable the “holdPreOrderPhysicalInventory” setting so that the surplus Pre-Order inventory can be made available online to sell right after it is received at the warehouse.
