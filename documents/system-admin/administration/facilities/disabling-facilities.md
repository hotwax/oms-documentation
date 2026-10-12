# Disable a facility

Disable a facility by removing it from active inventory and fulfillment workflows. The facility record remains available for history.

## Before you start

Confirm that the facility has no orders that still require fulfillment and that the business has approved its removal from Product Stores, groups, and integrations.

## Disable operations

1. Open the **Company App**.
2. Go to `Facilities` > `Find`.
3. Select the facility.
4. Mark the facility `Permanently closed` when the closure is permanent.
5. Turn off each `Sell inventory online` group.
6. Set fulfillment capacity to `No capacity`.
7. Turn off `Allow pickup`.
8. Turn off `Use native fulfillment app`.
9. Turn off `Generate shipping labels`.
10. Unlink Product Stores that no longer use the facility.
11. Open `External mappings` and remove obsolete Shopify or custom mappings.
12. Open `Groups` and remove the facility from active routing and channel groups.

## Verify the result

Confirm that:

* The facility contributes no online inventory
* New orders bypass the facility
* Pickup and native fulfillment are off
* Product Store, group, and external mappings match the closure plan

Keep the facility record for historical orders and inventory records.
