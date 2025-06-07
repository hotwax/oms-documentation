# Pre-Order & Back-Order Product Sync Issues

## **Troubleshooting Use Case**

### **Issue 1:** New or existing products do not appear as pre-orders or backorders

**Possible Causes:**

* Item does not exist in the system
* PO status is canceled
* Item has Inventory in the system

**Resolution Steps:**

1. Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
2. The promise date of a PO item must be in the future, guaranteeing that purchase order items will arrive in the future, not from an old PO.
3. The current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
4. If the 'isNewProduct' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.

Products from purchase orders that don't meet these criteria won't be listed in HotWax Commerce's pre-order catalog. It's important to ensure that purchase order items adhere to these criteria for accurate listing.
___

### **Issue 2:** Products are not removed from the pre-order or backorder category

**Resolution Steps:**

1. Ensure all future inventory of pre-orders is received.
2. Ensure the Purchase Order status changes to “Canceled” or “Completed”.
3. Ensure the Purchase Order arrival date (promised fulfillment date) has passed.
4. There is no Return for any pre-order or backorder.

## Troubleshooting Use Case

### **Issue 1:** The product is not updated as a pre-order or a backorder at Shopify and PDP

**Possible Causes:**

1. PO status is canceled
2. PO has a past expected delivery date.
3. Items have available inventory in the system.
4. The generated file is not processed by Shopify and is lying unread at the specified SFTP location

**Resolution Steps:**

1. Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
2. The promise date of a PO item must be in the future, guaranteeing that the purchase order item will arrive in the future, not from an old PO.
3. The current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
4. If the 'isNewProduct' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.
5. Item is associated with the pre-order or backorder category.
6. Ensure the file is read and processed from the SFTP location.

## **Troubleshooting Use Case**

### **Issue 1:** The promise date of the Product is not updated on Shopify PDP

**Possible Causes:**

1. PO status is canceled
2. Item does not exist anymore in the pre-order or backorder category.
3. Item has Inventory in the system.
4. The generated file is not processed by Shopify and is lying unread at specified SFTP location

**Resolution Steps:**

1. Status of PO items must be created or approved.
2. The promise date of a PO item must be in the future.
3. Ensure the current inventory of the item must be 0.
4. Ensure that the file is processed by Shopify from the SFTP location

Products from purchase orders that don't meet these criteria won't be listed in Shopify’s pre-order catalog. Contact the Shopify team if your product is still not listed on Shopify.
