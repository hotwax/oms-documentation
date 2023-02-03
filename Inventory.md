# Inventory
## Reset Inventory API

Syncs inventory from an external reference source to HotWax. After receiving the inventory file in CSV format, HotWax Commerce calculates the difference in inventory and matches its inventory levels exactly with CSV.  


| Parameter | Description | Required |
|-----------|-------------|----------|
| FacilityId | HotWax Commerce internal facility Id. Generally the same as the facility Id in Shopify. | Yes |
| ExternalFacilityId | The Id of the facility in an external reference source. | No |
| ProductId | The internal Id of a product in HotWax Commerce. | No |
| IdType | The type of the unique product identifier in the external reference source. Default is Shopify Product Id. | No |
| IdValue | The value of the product IdType in the external reference source. | Yes |
| AvailableQty | The available quantity of the product in the external reference source. This number will overwrite the current ATP level of the product in HotWax Commerce. | Yes |
| LocationSeqId | The Id of the designated location in a facility in HotWax Commerce. | Yes |
| Comments | Optional field to store additional information. | No |

### Sample

| FacilityId | IdType | IdValue | AvailableQty | LocationSeqId |
|----------- |------- |-------- |------------- |-------------- | 
| NEW_ERA_FUKUOKA | Shopify Product Id | 11434040-700 | 20 | TLTLTLLL01 |



## Check Inventory API

Get the stock details of the product on the specific locations. To get the stock details, you will need to call the `/checkInventory` endpoint with the GET method. 

### Request

#### End Point
https://<host>/api/checkInventory

Example: `https://demo-oms.hotwax.io/api/checkInventory`

#### Header
Content-Type: application/json


#### Params
```
{
"sku": "",
"productId": " ",
"facilityId": ""
}
```
Example Request: `https://demo-oms.hotwax.io/api/checkInventory?productId=10018&facilityId=Store_2&facilityId=Store_1`

| Parameters | Description | Required (Y/N) |
| --- | --- | --- |
| SKU | The SKU of the product | N |
| ProductId | HotWax Commerce internal product Id | Y |
| FacilityId | The HotWax Commerce facility Id where product inventory is located | N |

### Response

#### Status Code
HTTP/1.1 200 OK

#### Headers
Content-Type: application/json


#### Body
```
{
"count": "2",
"docs": [
{
"facilityId": "Store_1",
"atp": 0.000000
},
{
"facilityId": "Store_2",
"atp": 4.000000
}
]
}
```

| Parameters | Description |
| --- | --- |
| Count | Results count |
| Docs | The array of results found |
| FacilityId | The Id of the facility in HotWax |
| ATP | The available to promise inventory of the product |