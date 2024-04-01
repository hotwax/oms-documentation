---
description: >-
  Efficiently manage store-fulfilled order items with OMS integration,
  generating M3-compatible feeds through Moqui and Apache NiFi.
---

# Store Fulfilled Order Items

The order items brokered to warehouses are sent to M3 for fulfillment and so M3 has the information about the fulfilment of these orders.

The orders brokered to Stores are fulfilled using OMS fulfillment application. These orders need to be sent to M3, so that the orders could be reconciled and used for financial postings.

## Implementation Flow

This feed flow uses below components in the integration layer

1. Moqui - This is used to generate the generic Fulfilled Order Items Feed JSON based on the configured parameters.
   1. A Service Job will be set up with below parameters. This job will fetch the required fulfilled order items and put the OMS Store Fulfilled Order Items JSON feed file on a folder in SFTP.
      1. parentFacilityTypeIds - PHYSICAL\_STORE
      2. productStoreIds -
      3. sinceDate - \<Add date if some historical fulfilled orders need to be skipped eg.2023-08-31 08:00:00>
2. Apache NiFi - This is used to generate the feed format required by M3.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Store Fulfilled Order Items Feed format into the M3 format using Jolt transform capabilities in-built in NiFi.
   3. Perform updates on some fields before keeping file for M3.
      1. StartShip - this is set to current time as per the timezone configured in OMS
      2. StopShip - this is set to current time as per the timezone configured in OMS
   4. Convert the JSON into the final CSV to be share with M3
   5. Generate the file name by appending the current time as per the timezone configured in OMS
      1. This helps in identifying the time at which feed is being kept for M3
   6. Put the CSV file on SFTP
      1. Put the file in the folder for M3
      2. Put the file in the folder for logging purpose in OMS
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days
3. SFTP - This is used as the medium to put/read the feed files.

## M3 Feed File details

### FTP location

```
/home/${sftpUsername}/reports/StoreFulfilled
```

### Sample Feed file Name format

```
DVUS_StoreFulfilledOrderUpload_2023-12-28-22_15_02_792.csv
```

### M3 Store Fulfilled Order Items Feed Sample

| Brand | OrderNo    | OrderDate | StartShip | StopShip | Buyer | Customer | SalesRepName | SalesRep | AltSalesRep | Currency | OrderTotal | StyleName | Style | UPC          | ColorName | ColorCode | Size | Quantity | Price | Terms | ShipAddress1   | ShipAddress2 | ShipAddress3 | ShipAddress4 | ShipCity     | ShipState | ShipZip | ShipCountry | ShipCode | BillAddress1 | BillAddress2 | BillAddress3 | BillAddress4 | BillCity | BillState | BillZip | BillCountry | Picked Up Store | BillCode | CustomerPO | Filter | OrderTags | Facility | DiscountedPrice | Shipping | Taxes | Ship Via | Service Level | WH | Reason Code | Shipping Tax | OrderId       | LineItemId     | Payment Method |
| ----- | ---------- | --------- | --------- | -------- | ----- | -------- | ------------ | -------- | ----------- | -------- | ---------- | --------- | ----- | ------------ | --------- | --------- | ---- | -------- | ----- | ----- | -------------- | ------------ | ------------ | ------------ | ------------ | --------- | ------- | ----------- | -------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ------- | ----------- | --------------- | -------- | ---------- | ------ | --------- | -------- | --------------- | -------- | ----- | -------- | ------------- | -- | ----------- | ------------ | ------------- | -------------- | -------------- |
| DV    | DV#1000000 | 20231223  | 20231228  | 20231228 |       | VM902    |              |          | RT          | USD      | 120.0      |           | ANISA | 197076120180 |           |           |      | 1        | 120.0 |       | 11 Kottinger   | APT 2        |              |              | PLEASANTON   | CA        | 94566   | US          |          |              |              |              |              |          |           |         |             |                 | 254      |            | RT     | 108.0     | 0.0      | 11.07           |          |       | RTS      |               |    |             | 0.0          | 5297741168000 | 13318971654210 | Amex           |
| DV    | DV#1000001 | 20231222  | 20231228  | 20231228 |       | VM902    |              |          | RT          | USD      | 159.9      |           | HAZE  | 197076138765 |           |           |      | 1        | 159.9 |       | 9 20th street  | Unit e       |              |              | Santa monica | CA        | 90403   | US          |          |              |              |              |              |          |           |         |             |                 | 254      |            | RT     | 159.9     | 0.0      | 0.0             |          |       | RTS      |               |    |             | 0.0          | 5297186996000 | 13317716115522 | Mastercard     |
| DV    | DV#1000002 | 20231222  | 20231228  | 20231228 |       | VM902    |              |          | RT          | USD      | 125.0      |           | ZINA  | 197076083645 |           |           |      | 1        | 125.0 |       | 10 Vista Drive |              |              |              | Haymarket    | VA        | 20169   | US          |          |              |              |              |              |          |           |         |             |                 | 254      |            | RT     | 125.0     | 0.0      | 7.51            |          |       | RTS      |               |    |             | 0.0          | 5297180672000 | 13317701173314 | Visa           |
| DV    | DV#1000003 | 20231223  | 20231228  | 20231228 |       | VM902    |              |          | RT          | USD      | 240.0      |           | ROCKY | 197076113823 |           |           |      | 1        | 240.0 |       | 8 East Street  |              |              |              | Bel Aire     | KS        | 67226   | US          |          |              |              |              |              |          |           |         |             |                 | 254      |            | RT     | 216.0     | 0.0      | 16.2            |          |       | RTS      |               |    |             | 0.0          | 5298059640000 | 13319870873666 | Afterpay       |
