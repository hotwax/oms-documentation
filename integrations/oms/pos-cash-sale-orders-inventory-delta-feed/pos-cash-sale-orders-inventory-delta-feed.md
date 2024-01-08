## Deduct Inventory in HotWax for In-Store POS Orders

### Requirement
Prepare the Inventory Variance CSV file format which will be used to update the product inventory in HotWax for POS In-Store orders that are in the completed status.

This is a sample JSON containing records of a Deduct Inventory in HotWax for In-Store POS Orders feed-

| facilityId | idType | idValue | availableDelta | locationSeqId | varianceReasonId | comments |
| ---------- | ------ | ------- | -------------- | ------------- | ---------------- | -------- |
| STORE_1818 | SKU | RX12-03 | -1.000000 | TLTLTLLL01 | VAR_INTEGR | Inventory Variance sent as part of Inventory Delta Feed for POS In-Store type of orders |
| STORE_1818 | SKU | 19-08S | -1.000000 | TLTLTLLL01 | VAR_INTEGR | Inventory Variance sent as part of Inventory Delta Feed for POS In-Store type of orders |

### Implementation Flow
This flow will be implemented in NiFi.
1. Using SQL, fetch the product inventory for In-Store POS orders that are in the completed status.
2. This inventory information will be kept in the CSV file format for HC.
3. HC will have a scheduled job to read this file and update the inventory in the system.

### NiFi Flow
1. The below processors are used to prepare the NiFi flow:
    1. **ExecuteSQLRecord**
        1. This processor is used to fetch the product inventory for In-Store POS orders.

    2. **UpdateAttribute**
        1. This processor is used to update the file name of the Inventory Delta Feed.

    3. **PutSFTP**
        1. This processor is used to keep the Inventory Delta feed file on the SFTP location designated for HC.

### Prepared Fields for Inventory Delta Feed
| Field Name| Type | Description | Mapping from HC Entity |
|--------|------|-------------|------------------------|
| facilityId | string | The facility ID of the external system. | OrderItemShipGroup.orderFacilityId |
| idType | string | The product identification type in the system. | GoodIdentification.goodIdentificationTypeId <br/> **NOTE:** <br/>1. To prepare the value of idType, used the value SKU of goodIdentificationTypeId as a product identifier the reason being, for external system NetSuite the identifier of product is SKU.<br/> 2. Based on the value of idType, the inventory of that product will be updated in HC. |
| idValue | string | The product identification value in the system. | GoodIdentification.idValue <br/> **NOTE:** Get the idValue, if the goodIdentificationTypeId is SKU. |
| availableDelta | number | This field is correspond to the quantity which will be used to update the inventory variance of the product in the system. <br/> <br/> **NOTE:** 1. The quantity will be deducted or added as per incoming value. <br/> 2. If the value is positive then the inventory variance of the product will be increased as per the incoming value. <br/> 3.If the value is negative then the inventory variance of the product will be deducted as per the incoming value. | OrderItem.quantity <br/> **NOTE:** The total quantity of the product associated with the In-Store POS orders available in system. |
| locationSeqId | string | The loacation Seq ID of the facility for the product in the system. | **TLTLTLLL01** is the default value of the location Seq ID. |
| varianceReasonId | string | The variance reason ID for the inventory variance recorded in HC. | **VAR_INTEGR** is the default value of the variance reason ID. <br/> **NOTE:** The value VAR_INTEGR for the variance reason ID is being used when the inventory variances of the product sent in HC, as a part of integrations of HC with the external systems. |
| comments | string | This field is used to record the reason of inventory variance created or deducted for the product in the system. | **Inventory Variance sent as part of Inventory Delta Feed for POS In-Store type of orders**    <br/> The above comment is used to prepare the value of the comments field. |