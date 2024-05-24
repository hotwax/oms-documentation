
## Predict Spring order status mapping

**Predict Spring Status** | **HC Order Status** | **HC Item Statuses** | **Notes**
---|---|---|---
**NEW** | ORDER_CREATED | ITEM_CREATED | All items in the order are in the created state.
**PROCESSING** | ORDER_PROCESSING | (Not used in OMS) |  This status isn't actively used in the OMS (Order Management System).
**PARTIALLY_SHIPPED** | ORDER_APPROVED | ITEM_COMPLETED, ITEM_APPROVED, ITEM_CANCELED | Some items are completed, some are approved, and some might be canceled.
**COMPLETED** | ORDER_COMPLETED | ITEM_COMPLETED, ITEM_CANCELED | All items are either completed or canceled.
**PARTIALLY_REFUNDED** | ORDER_COMPLETED, ORDER_APPROVED | ITEM_COMPLETED, RETURN_COMPLETED | Some items have been returned, while others remain unreturned.
**RETURNED** | ORDER_COMPLETED | ITEM_COMPLETED, RETURN_COMPLETED | All items in the order have been returned.
**PARTIALLY_CANCELED** | ORDER_COMPLETED, ORDER_APPROVED | ITEM_COMPLETED, ITEM_CANCELED, ITEM_APPROVED | Some items are canceled, while others are completed or approved.
**CANCELED** | ORDER_CANCELED | ITEM_CANCELED | All items in the order are canceled.

**Key Points:**

* **Item-level Statuses Matter:**  The status of individual items within an order significantly impacts the overall order status in HC.
* **Partially Completed Orders:**  Statuses like "PARTIALLY_SHIPPED," "PARTIALLY_REFUNDED," and "PARTIALLY_CANCELED" reflect scenarios where only some items in an order have reached a final state.
* **Order vs. Item Statuses:** It's important to distinguish between the status of the entire order (e.g., "COMPLETED") and the status of individual items within that order (e.g., "ITEM_COMPLETED").