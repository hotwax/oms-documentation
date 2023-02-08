# BOPIS-PDP 

## Store lookup API

The API allows to look up the stores accepting BOPIS orders near the customer’s location using the POST method.

### Request


#### Endpoint
https://< host >/api/storeLookup 

Example: Host: https://demo-oms.hotwax.io/api/storeLookup

#### Header
Content-Type: application/json

#### Body 
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

#### Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| viewSize  | The total number of results in the API response | No |
| filters   | Filter records based on the passed parameters | No |
| point     | The latitude-longitude of a specific location to find nearby stores | No |
| distance  | The distance from the passed latitude-longitude | No |
| sortBy    | Sort data based on the attribute, for example: "storeDistance asc" sorts results by distance | No |
| keyword   | Keyword search (only on storeName, storeCode, and externalId) | No |
| fieldsToSelect | The list of fields to select, all the fields can be filtered in response | No |

### Response

#### Status Code
HTTP/1.1 200 OK

#### Headers
Content-Type: application/json

#### Body

```
"response": {
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
"primaryFacilityGroupName": "Perry Ellis",
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
```

| Parameters | Description |
| --- | --- |
| Numfound | The number of results found |
| Docs | The array of results found |
| DocType | Reference index |
| Storecode | The ID of the facility (store) in HotWax |
| Identifier | DocType-Identifier |
| Country | Country |
| StoreType | The type of the store (Valid values: RETAIL, WAREHOUSE, RETAIL_STORE, OUTLET_WAREHOUSE, OUTLET_STORE,DISTRIBUTION_CENTER) |
| StoreName | Store Name |
| ExternalId | The Id of the store in the external reference source |
| PrimaryFacilityGroupId | The Id of the primary facility group |
| PrimaryFacilityGroupName |[The name of the primary facility group](https://github.com/hotwax/press-release-faq/blob/main/bopis/customer-experience/primary-facility-group.md) |
| PrimaryShopifyShopId | The Id of the primary Shopify Shop |
| Address1 | The address of the store |
| City | City |
| PostalCode | Postal Code |
| Country | Country |
| CountryCode | Country Code |
| StateCode | State Code |
| LatLon | The latitude and longitude of the facility |
| <day_of_week>_open | The opening time of the store on the day of a week |
| <day_of_week>_close | The closing time of the store on the day of a week |

