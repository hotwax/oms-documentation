---
description: >-
  Discover your guide for troubleshooting issues for order brokering due to
  inventory unavailability
---

# Inventory Unavailability

## Scenario 1: Inventory Not Available

Orders won't be brokered if the inventory is not available or if the inventory is less than the brokering threshold set in the inventory rule. Ensuring accurate inventory levels and thresholds is essential for efficient order brokering and fulfillment.

### Resolution Steps

1. Click on the `SKU` from the `sales order page` to view the product inventory details on the [`Product Inventory View` page.](../inventory-management/product-inventory-view.md)
2. Check the inventory availability across the facilities. Use the `facility` filter to check the inventory in individual facilities.
3. Verify if the inventory is available for that product. If the inventory is not available or is less than the brokering threshold, the order will move to the unfillable parking.

For example: If an item has a brokering threshold of 10 units but only 5 units are available across all facilities, the order will not be brokered and will move to unfillable parking.

Ensure that the order routing run for unfillable parking is scheduled. This ensures that all such orders are picked up in the next brokering cycle for inventory allocation.

## Scenario 2: Partially Unavailable

Retailers sometimes prefer not to split orders to minimize shipping costs. If only part of an order is available at one fulfillment location, the order won't be routed. If inventory is scattered across multiple facilities, you need to decide whether to split the order.

### Resolution Steps

1. If you decide to allow order splitting, navigate to the `Order Routing App`.
2. Navigate to the `brokering run` > `order batch` > `inventory rule`.
3. Check if `partial allocation` is allowed for that inventory run.
4. Turn the `partial allocation` toggle on if you want to enable order splitting.
5. Save the `inventory rule` configuration.

