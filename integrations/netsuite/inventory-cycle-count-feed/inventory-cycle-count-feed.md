## Requirement

Prepare the Inventory Cycle Count Variance Feed CSV file format for NetSuite.

#### Sample Values

The Inventory Cycle Count Variance Feed should have the following details, which will be further consumed by the external system NetSuite:

| Reference No | Adjustment Account | Item | Adjust Qty By | Location | Date | Memo | Subsidiary | HC Inventory Adj |
|--------------|--------------------|------|---------------|----------|------|------|------------|------------------|
| 10010 | 927 | 42-04S | 5 | 254 | 05/23/2023 | Inventory cycle count by HotWax | 1 | 10010 |
| 10010 | 927 | 30-01S | \-5 | 254 | 05/23/2023 | Inventory cycle count by HotWax | 1 | 10010 |


### Properties
| NetSuite Field        | Type   | Description                                                       | Mapping from HC Entity                         |
|-----------------------|--------|-------------------------------------------------------------------|------------------------------------------------|
| Reference No.         | string | The reference number assigned to an inventory count import in the system. | InventoryCountImport.inventoryCountImportId |
| Adjustment Account    | string | The account for the inventory adjustment in the system.          | 1. The value for this field is prepared using the variable **default.adjustmentAccount** in NiFi. <br/> 2. Sample UAT value - 927 |
| Item                  | string | The name of the Product in the system.                            | Product.internalName <br/> Product.productName <br/> **NOTE:** Product using ProductAssoc to get the parent product |
| Adjust Qty By         | Number | The quantity of items to adjust the inventory in the system.     | InvCountImportVariance.varianceQuantityOnHand |
| Location              | string | The store or warehouse location where the inventory count import is being recorded within the system. | Facility.externalId   |
| Date                  | string | The date when inventory count import created in the system.      | InventoryCountImport.createdDate |
| Memo                  | string | The memo field is used to keep a log regarding the inventory count imported in the system. | 1. The value for this field is prepared using the variable **default.subsidiary** in NiFi. <br/> 2. Sample UAT value - 1 |
| Subsidiary            | string | The subsidiary associated with the inventory count import in the system. | 1. The value for this field is prepared using the variable **default.subsidiary** in NiFi. <br/> 2. Sample UAT value - Inventory cycle count by HotWax |
| HC Inventory Adj Id   | string | The Inventory Adjustment ID of HC.                                | InventoryCountImport.inventoryCountImportId |
