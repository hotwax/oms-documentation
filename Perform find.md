# Perform Find API

Fetches data from the Order Management System (OMS) entities. By making a GET request to this endpoint, you can retrieve the required data based on specific search criteria.

## Request

### Endpoint

`https://<host>/api/performFind`

Example: `https://demo-oms.hotwax.io/api/performFind`

### Header

Content-Type: application/json

### Example Params: 

https://demo-oms.hotwax.io/api/performFind?inputFields=<searchcondition>&entityName=<entityname>&fieldList=<fieldname>&fieldList=<fieldname>&viewSize=1

### Parameters

The following parameters can be sent in the request: 

| Parameter Name | Description | Required (Y/N) |
| -------------- | ----------- | -------------- |
| `inputFields` | Specifies search conditions for retrieving data from the OMS entities | Y |
| `fieldList` | Defines fields or attributes of the entities to include in the response | N |
| `entityName` | The specific entity type within the OMS from which you want to fetch data | Y |
| `noConditionFind` | Fetches all data from the specified entity without any specific conditions applied | N |
| `viewSize` | Determines the number of records or data items to be included in a single page of the response | N |
| `viewIndex` | The index to be included in the response | N |
| `distinct` | Returns only distinct (different) values. | N |
| `orderBy` | Sorts the result-set in ascending or descending order | N |
| `filterByDate` | Filter records based on fromDate and thruDate | N |
| `fromDateName` | Filter by date field name if field name is different from default fromDate field | N |
| `thruDateName` | Filter by date field name if field name is different from default thruDate field | N |

Note: If `noConditionFind` is 'Y' then 'inputFiels' parameter is optional.

## Response

### Status Code
HTTP/1.1 200 OK

### Headers
Content-Type: application/json

### Body

The response body will include the following data:

| Parameter Name | Description |
| -------------- | ----------- |
| `count` | Results count |
| `docs` | The array of results found |


#### Example 
```
{
  count: "1",
  docs: [
    {
      daysToCancelNonPay: 0,
      productStoreId: "STORE"
    }
  ]
}
 ```
