# Bulk Import BOPIS Orders

## Problem:

When importing active orders, particularly BOPIS (Buy Online, Pickup In Store) orders, it may not be possible to import them in their current status. For BOPIS orders, their shipment needs to be created and marked as packed for those that are ready for pickup. Additionally, fulfilled orders require a status update to reflect completion. This guide will help you manage the import process for both BOPIS and fulfilled orders.

## Error Identification:

The primary issue when importing active orders is that their current status may not allow direct import. For BOPIS orders, the system requires that the shipment be created and marked as packed for those ready for pickup, while fulfilled orders require additional updates. Errors can arise if these processes are not followed.

### Common Errors:

* Missing mandatory fields in the CSV file
* Incorrect order ID, shipment ID, or FacilityID
* Duplicate entries for shipment
* Invalid shipment status

## Cause Analysis:

* **BOPIS orders** – BOPIS orders ready for pickup must have their shipment created and marked as packed using `IMP_QCK_SHIP_ENT_GRP`.
* **Fulfilled orders** – For orders that are fulfilled, both the shipping group and the shipment status need to be updated using `IMP_QCK_SHIP_ENT_GRP` and `IMP_UPT_SHIPMENT`.
* **Missing or invalid fields** – Ensure that all required fields such as order ID, `shipGroupSeqId`, FacilityID for shipping groups, and shipmentID for shipments are present and correctly formatted.

## Solution:

#### Step 1: Login to OMS

Access the OMS platform using your credentials.

#### Step 2: Navigate to Data Manager Config

* If the EXIM link is not visible for these imports, navigate to **Settings**.
* Click on **Data Manager Config**.
* In the search bar, enter `IMP_QCK_SHIP_ENT_GRP` to create or `IMP_UPT_SHIPMENT` for updating shipments.

#### Step 3: Import All BOPIS Orders

* After locating `IMP_QCK_SHIP_ENT_GRP`, upload your CSV file containing the following required fields:
  * **orderid** – The ID of the order associated with the shipping group.
  * **shipGroupSeqId** – The sequential identifier of the shipping group within the order.
  * **FacilityID** – The facility where the shipping group will be fulfilled.
* Validate the data in the CSV to ensure all mandatory fields are present and correctly formatted.

#### Step 4: Update Shipment Status for Fulfilled BOPIS orders

* For `IMP_UPT_SHIPMENT`, upload your CSV file containing the following required fields:
  * **shipmentID** – The unique identifier of the shipment.
  * **StatusID** – The current status of the shipment (ensure that this follows the system’s defined statuses).
* Ensure that the shipment details in the CSV are accurate and consistent with the shipment data already present in the system.

#### Step 5: Handling Errors

* If errors occur during the import process, review the system logs to identify the specific issues.
* Common issues may relate to missing fields, invalid IDs, or mismatched statuses.
* Adjust your CSV file accordingly based on the error messages and re-upload the corrected file.

1. Re-upload the corrected CSV file to complete the import.

#### Step 6: Post-Import Validation

* After completing the import, verify that the shipment and shipping group data has been successfully added to the system:
  * Navigate to the **Shipment Management** and **Shipping Group Management** sections in OMS.
  * Check that all imported entries are present and that their details are correct.

If you are unable to find `IMP_QCK_SHIP_ENT_GRP` or `IMP_UPT_SHIPMENT` when searching in Data Manager Config, this may indicate that the services are not yet set up in the system. In this case, you will need to create the appropriate data manually or consult with your system administrator to ensure the configurations are properly set up. Once the services are created, you can proceed with the import using the steps outlined above.
