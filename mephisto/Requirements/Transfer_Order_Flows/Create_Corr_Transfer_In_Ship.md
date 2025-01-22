# Transfer Order Processing Workflow

## Overview
This document highlights how Transfer Orders (TOs) will be managed after a recommendation has been accepted within HotWax OMS. Most of these processes already exist. Specifically, we will create the corresponding `OUT_TRANSFER` and `IN_TRANSFER` shipments for accepted TOs.

### Step-by-Step Process

1. **Creating and Accepting Transfer Orders**
   - After Transfer Order recommendations are generated, the merchandising team reviews and accepts the needed TOs.
   - The merchandising team will create CSV file and upload them into HotWax using EXIM.
   - Once the file is uplaoded an existing job within HotWax OMS creates the corresponding TOs.
   - **Note**: More detail is required on this process.

2. **Fulfilling Transfer Orders**
   - The store fulfills these accepted Transfer Orders and creates shipments for them with `"shipmentTypeId": "OUT_TRANSFER"`.
   - This process already exists in HotWax OMS.
   - **Note**: More detail is required on this process.

3. **Scheduled Job for Outgoing Transfers**
   - A scheduled job will be created to pull all new `"OUT_TRANSFER"` shipments in the `"PURCH_SHIP_SHIPPED"` status.
   - These shipments will be placed at an SFTP location for further processing.
   - **Note**: The format of this file needs to be identified. Ideally, it should match the format used by the existing jobs. This is JSON
   - **Note**: This job may be helpful here `generate_TransferOrderFulfilledItemsFeed"`

4. **Using NiFi to Create Incoming Transfers**
   - A NiFi flow will be created to process the files placed at the SFTP location.
   - For each `"OUT_TRANSFER"`, NiFi will generate the corresponding `"IN_TRANSFER"` and place it back at the SFTP location.

5. **Upload the new Incoming Transfers**
   - The file created by NiFi will be uploaded into OMS using configID: `IMP_SHIPMENT` and job: `createIncomingShipment` 

### JOLT Transformation for Incoming Transfers
The following JOLT transformation is used create the new `"IN_TRANSFER"` shipment:

```json
[
  {
    "operation": "shift",
    "spec": {
      "*": "&", // Copy everything
      "shipmentId": null, // Remove shipmentId
      "estimatedReadyDate": null, // Remove estimatedReadyDate
      "externalId": null // Remove externalId
    }
  },
  {
    "operation": "modify-overwrite-beta",
    "spec": {
      "shipmentTypeId": "IN_TRANSFER", // Create new IN_TRANSFER
      "statusId": "PURCH_SHIP_SHIPPED" // Set status to PURCH_SHIP_SHIPPED
    }
  }
]
```

**Note**: The `OUT_TRANSFER` and the `IN_TRANSFER` are linked to the same order and shipment package, therefore most of the data will remain the same.

This JOLT transformation is designed based on the requirements for [creating incoming shipments](https://docs.google.com/document/d/1hOK8CAYw2TpBYudrHVOrFc5EbcPQAns2xB-VaRLDlZU/edit?usp=sharing) (`createincomingshipment`).