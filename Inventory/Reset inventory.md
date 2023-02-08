# Reset Inventory API

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

## Example

| FacilityId | IdType | IdValue | AvailableQty | LocationSeqId |
|----------- |------- |-------- |------------- |-------------- | 
| DEMO_HC_STORE_1 | Shopify Product Id | 11434040-700 | 20 | TLTLTLLL01 |

[Reset Inventory Sample CSV](https://github.com/Dhiraj1405/oms-documentation/edit/BOPIS_API/Inventory/Samples/Reset%20inventory%20sample.csv)
