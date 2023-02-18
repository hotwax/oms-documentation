# Reset Inventory API

Syncs inventory from an external reference source to HotWax. After receiving the inventory file in CSV format, HotWax Commerce calculates the difference in inventory and matches its inventory levels exactly with CSV.  


| Parameter | Description | Required |
|-----------|-------------|----------|
| `facilityId` | HotWax Commerce internal facility Id. Generally the same as the facility Id in Shopify. | Yes |
| `externalFacilityId` | The Id of the facility in an external reference source. | No |
| `productId` | The internal Id of a product in HotWax Commerce. | No |
| `idType` | The type of the unique product identifier in the external reference source. Default is Shopify Product Id. | No |
| `idValue` | The value of the product idType in the external reference source. | Yes |
| `availableQty` | The available quantity of the product in the external reference source. This number will overwrite the current ATP level of the product in HotWax Commerce. | Yes |
| `locationSeqId` | The Id of the designated location in a facility in HotWax Commerce. | Yes |
| `comments` | Optional field to store additional information. | No |


## Example

| facilityId | idType | idValue | availableQty | locationSeqId |
|----------- |------- |-------- |------------- |-------------- | 
| DEMO_HC_STORE_1 | Shopify Product Id | 11434040-700 | 20 | TLTLTLLL01 |

[Reset inventory sample.csv](https://github.com/Dhiraj1405/oms-documentation/blob/BOPIS_API/Inventory/Samples/Reset%20inventory%20sample.csv)
