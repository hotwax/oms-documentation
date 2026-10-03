# Manage parking queues

Parking queues are virtual facilities that hold orders outside an active fulfillment location. Use only the queues included in the order-routing design.

## Create a parking queue

1. Open the **Company App**.
2. Go to `Facilities` > `Parking`.
3. Click the create button.
4. Enter the name, internal ID, and description.
5. Save the parking queue.

## Rename a parking queue

1. Open the parking overflow menu.
2. Click `Rename`.
3. Enter the new name.
4. Save the change.

## Archive or restore a parking queue

1. Open the parking overflow menu.
2. Click `Archive`.
3. Confirm the action.

To restore a queue:

1. Open archived parking.
2. Find the queue.
3. Click the unarchive action.

Confirm that no active routing rule depends on a queue before archiving it.

## Understand common parking queues

| Queue | Purpose |
| --- | --- |
| Brokering queue | Holds orders until the next brokering run |
| Pre-order parking | Holds pre-orders until their inventory and release conditions are ready |
| Backorder parking | Holds orders waiting for replenishment |
| Configuration facility | Holds inventory reserved as a company-level threshold |
| General operations parking | Separates historical or non-operational imported orders |
| BOPIS rejected queue | Holds pickup orders rejected by the selected store |
| Unfillable hold parking | Holds unfillable orders outside the normal cancellation path |
| Unfillable parking | Holds orders for another brokering attempt |

The available queues and their automation depend on the tenant's routing configuration.
