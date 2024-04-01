---
description: >-
  Learn how OMS fulfilled order items are seamlessly integrated into NetSuite
  using Apache NiFi.
---

# OMS Fulfilled Order Items

This feed is used to create item fulfillment records in NetSuite for all those order items that will be fulfilled in OMS from the BOPIS app or Store fulfillment app.

### Implementation Flow

This feed flow uses below components in the integration layer

1.  Moqui - This is used to generate the generic OMS JSON feed to include all the fulfilled order items. So here we will not set any configurable parameters in the Service Job and it will be scheduled to run on a set frequency.

    **NOTE**

    1. This is done because from this generic feed, custom transformations will prepare feeds using FacilityGroupMember on order items.
    2. A fulfillment facility can be a part of either OMS Fulfilment or NetSuite Fulfillment Facility Group. Using the facility Group Member for the order item's facility, here in this case it will be OMS\_FULFILLMENT, to include only OMS fulfilled order items in this feed for NetSuite.
2. Apache NiFi - This is used to generate the feed format required by NetSuite.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Fulfilled Order Items Feed format into the NetSuite format using Jolt transform capabilities in-built in NiFi.
   3. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   4. Put the transformed feed file on SFTP.
      1. Put the file in the folder for NetSuite.
      2. Put the file in the folder for logging purpose in OMS.
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days.
3. SFTP - This is used as the medium to put/read the feed files.

#### NiFi Flow

In the NiFi flow set up to sync OMS Fulfilled Order Items, below processors are used.

1. **ListSFTP**
   1. This processor is used to read the OMS Fulfilled Order Items Feed file from the SFTP location.
2. **FetchSFTP**
   1. This processor is used to move the Fulfilled Order Items Feed file to the archive folder after reading from the source folder.
3. **JoltTransformJSON**
   1. This processor is used to transform the OMS Fulfilled Order Items Feed input JSON to NetSuite JSON format.
4. **RouteOnContent**
   1. This processor is used to filter out null files. The null files are created if the feed file of the current job run included all items fulfilled from external system, and so no eligible records to be sent to NetSuite for this feed.
5. **UpdateAttribute**
   1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.
6. **PutSftp**
   1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.

#### NetSuite OMS Fulfilled Order Items Feed Sample

In this JSON, each map represents an order which has item details for 1 fulfillment facility. This means if an order have 5 iems, then the order will be grouped as per each facilityId. So the first map will contain order level details and the list of 3 items fulfilled from a facility, while the second map will include order level details and the list of 2 items fulfilled from another facility.

```json
[{
  "order_id" : "25457579786966",
  "order_attributes" : [ {
    "attrDescription" : "Shopify User Id",
    "attrName" : "orderFacility",
    "attrValue" : null,
    "orderId" : "30245",
    "lastUpdatedStamp" : "2022-03-24T09:43:06-04:00"
  } ],
  "items" : [ {
    "line_id" : "123456789",
    "quantity" : 1,
    "location_id" : "155",
    "tags" : "#{defaultTags}"
  } ]
}, {
  "order_id" : "25457579786966",
  "order_attributes" : [ {
    "attrDescription" : "Shopify User Id",
    "attrName" : "orderFacility",
    "attrValue" : null,
    "orderId" : "30245",
    "lastUpdatedStamp" : "2022-03-24T09:43:06-04:00"
  } ],
  "items" : [ {
    "line_id" : "123456789",
    "quantity" : 1,
    "location_id" : "166",
    "tags" : "#{defaultTags}"
  } ]
} ]
```

### Special handling for Fulfilled Order Items Feed HotWax to NetSuite

1. **quantity**
   1. If the "shippedQuantity" doesn't exist in the input JSON, map the "Quantity" field with the "ItemQuantity" field.
   2. The "quantity" field is transmitted in string format, and this transformation has been implemented using Jolt.
2. **Exclude Kit components**
   * The Fulfilled Order Items Feed should include the marketing package type product instead of the kit components, to mark the order as completed on NetSuite.
   * This is handled using the 'orderItemExternalId' field, if the orderItemExternalId is null then that item will be excluded as it is a kit component.
   * **NOTE:** This exclusion is done because on the NetSuite, if the marketing package type product marked as completed then the respective components of that product will also be marked as completed.

### NetSuite Feed File details

#### FTP location

```
/home/${sftpUsername}/netsuite/fulfilledsalesorder/export
```

#### Sample Feed file Name format

```
KREWE_FulfilledOrderItemsFeed_2023-12-26-16_10_00_086.json
```

### Data model mapping

| NetSuite Field     | Type   | Description                                                   | OMS Fulfilled Order Item Feed Field                                                                  |
| ------------------ | ------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| order\_id          | string | NetSuite Order ID                                             | idValue from orderIdentifications\[n] for the orderIdentificationTypeId = NETSUITE\_ORDER\_ID        |
| order\_attributes  | list   | List of all Order Attributes                                  | orderAttributes\[n]                                                                                  |
| items.line\_id     | string | NetSuite Line Item ID                                         | shipments\[n].shipmentItems\[n].orderItemAttributes\[n].attrValue for attrName as NetSuiteItemLineId |
| items.quantity     | string | shipped quantity                                              | shipments\[n].shipmentItems\[n].shippedQuantity                                                      |
| items.location\_id | string | Facility External Id                                          | shipments\[n].shipmentItems\[n].facilityExternalId                                                   |
| items.tags         | string | Default value set in Jolt Transform Spec - "hotwax-fulfilled" |                                                                                                      |
