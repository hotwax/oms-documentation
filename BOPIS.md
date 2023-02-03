# Inventory
## Reset Inventory API

*Short description*
Syncs inventory from an external reference source to HotWax. After receiving the inventory file in CSV format, HotWax Commerce calculates the difference in inventory and matches its inventory levels exactly with CSV.  

## Parameters

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

## Sample

| FacilityId | IdType | IdValue | AvailableQty | LocationSeqId |
|----------- |------- |-------- |------------- |-------------- | 
| NEW_ERA_FUKUOKA | Shopify Product Id | 11434040-700 | 20 | TLTLTLLL01 |
