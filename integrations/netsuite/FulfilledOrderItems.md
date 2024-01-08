# Fulfilled Order Items Feed HotWax to NetSuite

## Requirement

1. Feed for Fulfilled Order Items Feed HotWax to NetSuite.
2. After order items is Completed, HotWax will send Fulfilled Order Items Feed file HotWax to NetSuite to sync fulfilled orders.

## Implementation Flow

NiFi is being used to read the HotWax Fulfilled Order Items Feed for Completed Orders kept at SFTP, and transform the
feed using Jolt to prepare the required Fulfilled Order Items Feed JSON format to be consumed by NetSuite.

#### NiFi Flow
1. **ListSFTP processor**
    1. The ListSFTP processor is used to read the Fulfilled Order Items Feed file from the SFTP location,
       which is kept by HotWax.
2. **FetchSFTP Processor**
    1. The FetchSFTP processor is used to move the Fulfilled Order Items Feed file to the archive folder.
3. **JoltTransformJSON Processor**
    1. The JoltTransformJSON Processor is used to transform the HC Fulfilled Order Items Feed input JSON to NetSuite JSON format.
4. **RouteOnContent Processor**
    1. The RouteOnContent Processor is used to filter out null files.
6. **UpdateAttribute Processor**
    1. The UpdateAttribute Processor is used to update the Fulfilled Order Items JSON File name to Krewe Fulfilled Order Items Feed JSON file's.
7. **PutSftp Processor**
    1. The PutSFTP Processor is used to put the Fulfilled Order Items Feed JSON file to the final destination.

### Mapping of the Fulfilled Order Items Feed

| Field  | Type    | Description | HC Ecom Store Fulfilled Order Items Feed Mapping                                                                                                     |
|--------|---------|-----|------------------------------------------------------------------------------------------------------------------------|
| order_id  | string  | OrderIdentification Id value for the orderIdentificationTypeId = NETSUITE_ORDER_ID | OrderIdentification[n]                                                                                             |
| order_attributes  | list  | List of OrderAttribute list| orderAttributes[n]                                                                                              |
| items.line_id | string  | OrderItemAttribute attr value for the attrName = NetsuiteItemLineId  | shipments[n].shipmentItems[n].orderItemAttributes[n].                                                                                       |
| items.quantity | string  |shipped quantity  | shipments[n].shipmentItems[n].shippedQuantity                                                                                             |
| items.location_id | string  |Facility External Id |shipments[n].shipmentItems[n].facilityExternalId                                                                                               |
| items.tags | string  | Default value set in Jolt Transform Spec - "hotwax-fulfilled"|                                                                                         |

### Sample Scenario

1. Fulfilled Order Items Feed for NetSuite
    - In this transformation, we will take care of the scenario
        1. For NetSuite, the scenario is that we have Facility Groups for 'OMS_FULFILLMENT' and NetSuite Fulfillment and we need to send only HC OMS fulfilled order items to NetSuite,
           and so for this the Facility Group check will be used in transformations to send only the required items.
        2.  In scenarios where we have orders with 5 items, where 3 items are marked as completed from facility A and 2 items from facility B, we need to create a mapping structure.
            This structure will group the Order_Id and the corresponding facilityId. The first map will contain order-level details and a list of 3 items, while the second map will include order-level details and a list of 2 items.

### Special handling for Fulfilled Order Items Feed HotWax to NetSuite

1. **quantity**
    1. If the "shippedQuantity" doesn't exist in the input JSON, map the "Quantity" field with the "ItemQuantity" field.
    2. The "quantity" field is transmitted in string format, and this transformation has been implemented using Jolt.

2. Exclude Kit components
    - The Fulfilled Order Items Feed should include the marketing package type product instead of the kit components, to mark the order as completed on the external system NetSuite.
    - This is handled using the 'orderItemExternalId' field, if the orderItemExternalId is null then that item will be excluded as it is a kit component.
    - **NOTE:** This exclusion is done because on the NetSuite, if the marketing package type product marked as completed then the respective components
      of that product will also be marked as completed.