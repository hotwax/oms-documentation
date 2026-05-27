---
description: >-
  Dive into the seamless synchronization of Transfer Orders between NetSuite and
  HotWax for streamlined inventory management.
---

# Transfer Orders

Follow these steps to enable the Transfer Order sync between NetSuite and HotWax for receiving in the HotWax Receiving app. To learn more about this integration, read the full NetSuite integration.

## Export transfer order from NetSuite

Schedule the Export Transfer Fulfilled Transfer Order SuiteScript in NetSuite

```
HC_MR_ExportedWHTOFulfillmentJson_v2
HC_MR_ExportedStoreTOFulfillmentJson_v2
```

Verify files are being placed onto this SFTP

```
/home/{sftp-username}/netsuite/transferorderv2/import/fulfillment-wh
/home/{sftp-username}/netsuite/transferorderv2/import/fulfillment-store
```

## Import the transfer order into HotWax

When fulfilled transfer orders are imported from NetSuite, they also require inventory deduction from the source location. This extra deduction is handled in the HotWax integration layer.

Schedule a job in the HotWax integration layer to consume this file and create a file for inventory deductions at the origin location of the fulfilled Transfer Order and also move the original file to an SFTP location for the OMS to consume

Inventory deduction from origin file SFTP location

```
/home/{sftp-username}/hotwax/InventoryDelta
/home/{sftp-username}/hotwax/InventoryDelta/archive
```

Inbound shipment at destination for receiving file SFTP location

```
/home/{sftp-username}/netsuite/transferorderv2/fulfillment
/home/{sftp-username}/netsuite/transferorderv2/fulfillment/archive
```

Schedule the import job for this file from the Inventory page in the Job Manager application

```
Import fulfilled Transfer Orders from NetSuite
FTP Configuration
```

{% hint style="success" %}
Transfer orders are now available to receive in the HotWax Receiving application.
{% endhint %}

## Export received transfer order from HotWax

Schedule a job in the HotWax integration layer to export a feed of received Transfer Orders to an SFTP location to be consumed by a SuiteScript in NetSuite

```
/home/{sftp-username}/netsuite/transferorderv2/export/receipt
```

## Report for over and under received

Schedule a report in Tathya for over and under received items
