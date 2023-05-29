# Perform Find API

Fetches data from the Order Management System (OMS) entities. By making a GET request to this endpoint, you can retrieve the required data based on specific search criteria.

## Request

### Endpoint

`https://<host>/api/performfind`

Example: `https://demo-oms.hotwax.io/api/performfind`

### Header

Content-Type: application/json



### Parameters

The request should include the following parameters:

| Parameter Name | Description | Required (Y/N) |
| -------------- | ----------- | -------------- |
| `inputFields` | The parameters to specify search conditions for retrieving data from the OMS entities | Y |
| `fieldList` | The parameter that allows defining which fields or attributes of the entities to include in the response | N |
| `entityName` | The specific entity type within the OMS from which you want to fetch data | Y |
| `noConditionFind` | The parameter to fetch all data from the specified entity without any specific conditions applied | N |
| `viewSize` | The parameter that determines the number of records or data items to be included in a single page of the response | N |

Example Request: `https://demo-oms.hotwax.io/api/performfind?inputFields={...}&fieldList={...}&entityName={...}&noConditionFind={...}&viewSize={...}`

## Response

### Status Code

HTTP/1.1 200 OK

### Headers

### Params
```
{
  inputFields: 
  fieldList: 
  entityName: 
  noConditionFind: 
  viewSize: 
}
```
#### Example 
```
{
  inputFields: {"productStoreId":"STORE"}
  fieldList: productStoreId
  fieldList: daysToCancelNonPay
  entityName: ProductStore
  noConditionFind: Y
}
```

| Parameter Name | Description | Required (Y/N) |
| ------------ | --------------| -------------- |
| `inputFields` | The parameters to specify search conditions for retrieving data from the Order Management System (OMS) entities | Y |
| `fieldList` |The parameter allows to define which fields or attributes of the entities to include in the response  | N |
| `entityName` | The specific entity type within the OMS from which you want to fetch data | Y |
| `noConditionFind` | The parameter to fetch all data from the specified entity without any specific conditions applied. Default value is Y| N |
| `viewSize` | The parameter that determines the number of records or data items to be included in a single page of the response | N |


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
