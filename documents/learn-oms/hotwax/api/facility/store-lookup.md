---
description: >-
  Discover how the Store Lookup API facilitates finding stores accepting BOPIS
  orders near the customer's location using the POST method.
---

# Store Lookup

The API allows to look up the stores accepting BOPIS orders near the customer’s location using the POST method.

## Request

### Endpoint

`https://< host >/api/storeLookup`

Example: Host: https://demo-oms.hotwax.io/api/storeLookup

### Header

Content-Type: application/json

### Body

```
{
  "viewSize": 40,
  "filters": ["storeType: RETAIL_STORE"],
  "point": “lat,lon”,
  "distance": 50,
  "sortBy": "storeName asc",
  "keyword": "value",
  "fieldsToSelect": <values>
}
```

### Parameters

| Parameter        | Description                                                                                  | Required (Y/N) |
| ---------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `viewSize`       | The total number of results in the API response                                              | N              |
| `filter`         | Filter records based on the passed parameters                                                | N              |
| `point`          | The latitude-longitude of a specific location to find nearby stores                          | N              |
| `distance`       | The distance from the passed latitude-longitude                                              | N              |
| `sortBy`         | Sort data based on the attribute, for example: "storeDistance asc" sorts results by distance | N              |
| `keyword`        | Keyword search (only on storeName, storeCode, and externalId)                                | N              |
| `fieldsToSelect` | The list of fields to select, all the fields can be filtered in response                     | N              |

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body

```
"response": 
{
  "numFound": 1,
  "start": 0,
  "numFoundExact": true,
  "docs": [
   {
    "docType": "STORE",
    "storeCode": "524",
    "Identifier": "524",
    "docType-Identifier": "STORE-524-STORE-524",
    "storeType": "RETAIL_STORE",
    "storeName": "Orlando",
    "externalId": "524",
    "primaryFacilityGroupId": "10862657599",
    "primaryFacilityGroupName": "Not naked",
    "primaryShopifyShopId": "10862657599",
    "10862657599_pref": "true",
    "fac_grp_pref": "true",
    "address1": "8200 Vineland Ave.,",
    "city": "Orlando",
    "postalCode": "32821",
    "country": "United States",
    "countryCode": "USA",
    "state": "FlorIda",
    "stateCode": "FL",
    "latlon": "28.3873236,-81.4924445",
    "monday_open": "10:00:00",
    "monday_close": "21:00:00",
    "tuesday_open": "10:00:00",
    "tuesday_close": "21:00:00",
    "wednesday_open": "10:00:00",
    "thursday_open": "10:00:00",
    "thursday_close": "21:00:00",
    "frIday_open": "10:00:00",
    "frIday_close": "21:00:00",
    "saturday_open": "10:00:00",
    "saturday_close": "21:00:00",
    "sunday_open": "11:00:00",
    "sunday_close": "19:00:00",
    "updatedDatetime": "2023-01-31T05:52:08.794Z",
    "_version_": 1756516139717885953,
    "_root_": "STORE-524-STORE-524"
   }
  ]
 }
```

| Parameters                 | Description                                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numFound`                 | The number of results found                                                                                                                         |
| `docs`                     | The array of results found                                                                                                                          |
| `docType`                  | Reference index                                                                                                                                     |
| `storeCode`                | The ID of the facility (store) in HotWax                                                                                                            |
| `identifier`               | DocType-Identifier                                                                                                                                  |
| `country`                  | Country                                                                                                                                             |
| `storeType`                | The type of the store                                                                                                                               |
| `storeName`                | Store Name                                                                                                                                          |
| `externalId`               | The Id of the store in the external reference source                                                                                                |
| `primaryFacilityGroupId`   | The Id of the primary facility group                                                                                                                |
| `primaryFacilityGroupName` | [The name of the primary facility group](https://github.com/hotwax/press-release-faq/blob/main/bopis/customer-experience/primary-facility-group.md) |
| `primaryShopifyShopId`     | The Id of the primary Shopify Shop                                                                                                                  |
| `address1`                 | The address of the store                                                                                                                            |
| `city`                     | City                                                                                                                                                |
| `postalCode`               | Postal Code                                                                                                                                         |
| `country`                  | Country                                                                                                                                             |
| `countryCode`              | Country Code                                                                                                                                        |
| `stateCode`                | State Code                                                                                                                                          |
| `latLon`                   | The latitude and longitude of the facility                                                                                                          |
| `<day_of_week>_open`       | The opening time of the store on the day of a week                                                                                                  |
| `<day_of_week>_close`      | The closing time of the store on the day of a week                                                                                                  |

\
\\

## Note:

### Filters

Filter is a parameter that allows you to narrow down the results of a query or search to only include items that meet specific criteria. For storeLookup API, users can filter results for each parameter given in the response:

| Parameter Name             | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| `country`                  | Country                                              |
| `storeType`                | The type of the store                                |
| `storeName`                | Store Name                                           |
| `externalId`               | The Id of the store in the external reference source |
| `primaryFacilityGroupId`   | The Id of the primary facility group                 |
| `primaryFacilityGroupName` | The name of the primary facility group               |
| `primaryShopifyShopId`     | The Id of the primary Shopify Shop                   |
| `city`                     | City                                                 |
| `postalCode`               | Postal Code                                          |
| `countryCode`              | Country Code                                         |
| `stateCode`                | State Code                                           |
| `latlon`                   | The latitude and longitude of the facility           |

### Valid values of storeType

* RETAIL
* WAREHOUSE
* RETAIL\_STORE
* OUTLET\_WAREHOUSE
* OUTLET\_STORE
* DISTRIBUTION\_CENTER
