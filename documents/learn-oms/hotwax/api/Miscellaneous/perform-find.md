# Perform Find API

Fetches data from the Order Management System (OMS) entities. By making a GET request to this endpoint, you can retrieve the required data based on specific search criteria.

## Request

### Endpoint

`https://<host>/api/performFind`

Example: `https://demo-oms.hotwax.io/api/performFind`

### Header

Content-Type: application/json

### Example Params: 

[https://demo-oms.hotwax.io/api/performFind?inputFields=<searchcondition>&entityName=<entityname>&fieldList=<fieldname>&fieldList=<fieldname>&viewSize=1](https://demo-oms.hotwax.io/api/performFind?inputFields=search_condition_value&entityName=entity_name_value&fieldList=field_name1&fieldList=field_name2&viewSize=1
)

### Parameters

The following parameters can be sent in the request: 

| Parameter Name | Description | Required (Y/N) |
| -------------- | ----------- | -------------- |
| `inputFields` | Specifies search conditions for retrieving data from the OMS entities | Yes |
| `fieldList` | Defines fields or attributes of the entities to include in the response | No |
| `entityName` | The specific entity type within the OMS from which you want to fetch data | Yes |
| `noConditionFind` | Fetches all data from the specified entity without any specific conditions applied | No |
| `viewSize` | Determines the number of records or data items to be included in a single page of the response | No |
| `viewIndex` | The index to be included in the response | No |
| `distinct` | Returns only distinct (different) values. | No |
| `orderBy` | Sorts the result-set in ascending or descending order | No |
| `filterByDate` | Filter records based on fromDate and thruDate | No |
| `fromDateName` | Filter by date field name if field name is different from default fromDate field | No |
| `thruDateName` | Filter by date field name if field name is different from default thruDate field | No |

Note: If `noConditionFind` is 'Y' then 'inputFields' parameter is optional.

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

To learn more about `performFind API`, watch this [video](https://www.youtube.com/watch?v=Rtikm1pCqMY)
