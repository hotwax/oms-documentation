---
description: Learn about managing inventory item variances in OMS with JSON feed format.
---

# Inventory Item Variance

This feed is used to get the inventory variances logged for any products in OMS. The feed file format is JSON format. The feed file can be sent to external systems as is or can be transformed as per the format required by the external system.

## Technical implementation

This feed is generated in the integration layer using a Moqui component. The integration component connects with OMS transactional database and fetches the required details for the inventory variances for a product using certain database views. These views are generated using OMS entities, and logic is implemented in the Moqui services to get inventory variances, and prepare the JSON in a fixed format. This JSON is then kept on a directory on SFTP.

A Service Job can be scheduled that will prepare the feed file and keep it on SFTP.

The service fetches the inventory variances after the last run of the service. This service saves the last run time of the service and in the next run fetches the records after the last run time so that sam inventory variances are sent again.

### Configurable Parameters for the feed

The following configurable parameters are used for generating the inventory item variance feed.

1. daysBefore
   1. This is used to generate the feed for n previous days from today.
2. fromDate
   1. Used fetch records of Inventory Item Variance after a specific date.
   2. This parameter corresponds to the physicalInventoryDate of PhysicalInventory entity.
3. thruDate
   1. Used fetch records of Inventory Item Variance before a specific date.
   2. This parameter corresponds to the physicalInventoryDate of PhysicalInventory entity.
4. jobName
   1. The name of the scheduled job to fetch the last run time for preparing the feed.
5. parentFacilityTypeIds
   1. This is a list of parent facility type ids for generating feed.
   2. For generating the feed for a single parent facility type ids use values like - PHYSICAL\_STORE
   3. For generating the feed for multiple parent facility type ids use values like - PHYSICAL\_STORE,DISTRIBUTION\_CENTER
6. productStoreIds
   1. This is a list of product store ids for generating feed.
   2. For generating the feed for a single product store use values like - STORE\_A
   3. For generating the feed for multiple product stores use values like - STORE\_A, STORE\_B
7. skipLastRunTimeUpdate
   1. skip the LastRunTime update, mainly used while debugging.
8. systemMessageRemoteId
   1. The System Message Remote ID to send the Inventory Item Variance Feed.
9. systemMessageTypeId
   1. The System Message Type ID for generating Inventory Item Variance Feed.
10. varianceReasonIds
    1. This is a list of variance reason ids for generating the feed.
    2. For generating the feed for a single variance reason id use values like - VAR\_STOLEN
    3. For generating the feed for multiple product stores use values like - VAR\_STOLEN, VAR\_DAMAGED

## FTP location for Inventory Item Variance Feed

```
/home/${sftpUsername}/hotwax/InventoryItemVarianceFeed
```

## Sample Inventory Item Variance Feed JSON

```json
[ {
  "accountingQuantityTotal" : 1000,
  "availableToPromiseTotal" : 999,
  "availableToPromiseVar" : 1000,
  "changeByUserLoginId" : "user",
  "comments" : "VarianceAPI",
  "currencyUomId" : "USD",
  "datetimeReceived" : "2023-12-01T00:25:56-06:00",
  "facilityExternalId" : "114",
  "facilityId" : "WH",
  "facilityName" : "Test Warehouse",
  "facilityTypeId" : "WAREHOUSE",
  "inventoryItemId" : "16890",
  "inventoryItemTypeId" : "NON_SERIAL_INV_ITEM",
  "locationSeqId" : "TL07",
  "ownerPartyId" : "COMPANY",
  "parentFacilityTypeId" : "DISTRIBUTION_CENTER",
  "parentProductId" : "11806",
  "parentProductName" : "GIFT CARD",
  "partyId" : "USER",
  "physicalInventoryDate" : "2023-12-01T00:25:56-06:00",
  "physicalInventoryId" : "10611",
  "productId" : "15360",
  "productIdentifications" : [ {
    "fromDate" : "2023-11-30T06:03:49-06:00",
    "goodIdentificationTypeId" : "NETSUITE_PRODUCT_ID",
    "lastUpdatedStamp" : "2023-11-30T06:08:39-06:00",
    "productId" : "15360",
    "idValue" : "3115",
    "thruDate" : null
  } ],
  "productTypeId" : "GIFT_CARD",
  "quantityOnHandTotal" : 1000,
  "quantityOnHandVar" : 1000,
  "unitCost" : 0,
  "varianceDescription" : "Found",
  "varianceReasonId" : "VAR_FOUND"
} ]
```
