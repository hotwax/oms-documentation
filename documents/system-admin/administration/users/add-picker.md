---
description: Configure an individual user as a picker and verify facility assignment.
---

# Create pickers

A picker must be visible for assignment in the fulfillment workflow and associated with the facility where the work occurs.

## Configure an individual picker

1. Open the **Company App**.
2. Go to `Users`.
3. Open the user or [create a new user](create-user.md).
4. Turn on `Show as a picker`.
5. Click `Add Facilities`.
6. Select every facility where the picker can receive work.
7. Save the user.

The assignment dialog lists only pickers associated with that facility.

## Verify the picker

1. Open the [Fulfillment App](../../../store-operations/fulfillment/).
2. Open an order or select orders in bulk.
3. Start the picker-assignment action.
4. Search by the picker name, HotWax ID, or external ID.
5. Confirm that the picker appears.

## Import pickers in bulk

Bulk picker creation is a Data Manager import, not a native Company task.

1. Open Data Manager in the OMS.
2. Find the Picker import configuration.
3. Download its current sample file.
4. Populate and validate the file.
5. Upload the file.
6. Review the import log.
7. Verify an imported picker in Company and the Fulfillment App.

Use the sample file from the target environment because required columns can change with the import configuration.
