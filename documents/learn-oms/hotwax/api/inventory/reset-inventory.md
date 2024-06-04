---
description: >-
  Learn how to sync inventory from an external reference source to HotWax
  Commerce with the 'Reset Inventory' feature.
---

# Reset Inventory

Syncs inventory from an external reference source to HotWax. After receiving the inventory file in CSV format, HotWax Commerce calculates the difference in inventory and matches its inventory levels exactly with CSV. CSV files can be imported in HotWax by two methods: using the EXIM menu in HotWax or saving the file at a designated SFTP location for HotWax to automatically download and process.

Sample path for SFTP method: `/home/<host_name>-sftp/staging/incoming`

## CSV example

Here's an example of the CSV file format:

| facilityId         | locationSeqId | idType | idValue       | availableQty |
| ------------------ | ------------- | ------ | ------------- | ------------ |
| DEMO\_HC\_STORE\_1 | TLTLTLLL01    | sku    | WH09-XL-Green | 20           |

## Parameters

The Reset Inventory API accepts the following parameters:

| Parameters           | Description                                                                                                                                                 | Required |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `facilityId`         | HotWax Commerce internal facility Id. Generally the same as the facility Id in Shopify.                                                                     | Yes      |
| `locationSeqId`      | The Id of the designated location in a facility in HotWax Commerce.                                                                                         | Yes      |
| `idType`             | The type of the unique product identifier in the external reference source. Default is `shopifyProductId`                                                   | No       |
| `idValue`            | The value of the product idType in the external reference source.                                                                                           | Yes      |
| `availableQty`       | The available quantity of the product in the external reference source. This number will overwrite the current ATP level of the product in HotWax Commerce. | Yes      |
| `externalFacilityId` | The Id of the facility in an external reference source.                                                                                                     | No       |
| `productId`          | The internal Id of a product in HotWax Commerce.                                                                                                            | No       |
| `comments`           | Optional field to store additional information.                                                                                                             | No       |

Note: `sku` `upca` and `shopifyProductId` are commonly used product Identifiers.

[Reset inventory sample.csv](https://github.com/Dhiraj1405/oms-documentation/blob/BOPIS\_API/Inventory/Samples/Reset%20inventory%20sample.csv)
