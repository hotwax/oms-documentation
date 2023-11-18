# Sync Order IDs
A job in the HotWax Commerce integration layer creates a CSV file of orders in "created" status that have not yet been sent to Netsuite. Because this job is not a native HotWax job, it is not schedulable in the HotWax Job Manager.

**SFTP Location for exported 'Created' orders with verified customers**
```
/home/{sftp-username}/netsuite/salesorder/export
```

### Import orders into NetSuite
Schedule SuiteScript
```
HC_importSalesOrders
```

### Export order line item IDs from NetSuite
Schedule SuiteScript
```
HC_MR_ExportedSalesOrderItemCSV
```

### Import order line item IDs into HotWax
Job
```
Order Item Attribute
FTP Config: IMP_ORDER_ITM_ATTR
```

### Export order IDs from NetSuite
SuiteScript
```
HC_MR_ExportedSalesOrderCSV
```

### Import order IDs into HotWax
Job
```
Order Identification
FTP Config: IMP_ORDER_IDENT
```