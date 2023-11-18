# SetUp NetSuite FTP Locations
SFTP locations for all sync processes will automatically be created the first time a sync runs.

In case the locations are not created, here is a list of SFTP locations to verify.

1. Customer:
   - a) /home/<instanceName>-sftp/netsuite/customer
   - b) /home/<instanceName>-sftp/netsuite/customer/export/archive
   - c) /home/<instanceName>-sftp/netsuite/customer/import/archive

2. InventoryAdjustment:
   - a) /home/<instanceName>-sftp/netsuite/inventoryadjustment/csv
   - b) /home/<instanceName>-sftp/netsuite/inventoryadjustment/archive

3. InventoryItem:
   - a) /home/<instanceName>-sftp/netsuite/inventoryitem/csv/archive

4. Purchase Order:
   - a) /home/<instanceName>-sftp/netsuite/purchaseorder/fulfillment/archive
   - b) /home/<instanceName>-sftp/netsuite/purchaseorder/receipt/archive
   - c) /home/<instanceName>-sftp/netsuite/purchaseorder/receipt/error

5. Sales Order:
   - a) /home/<instanceName>-sftp/netsuite/salesorder/customerdeposit/archive
   - b) /home/<instanceName>-sftp/netsuite/salesorder/export/archive
   - c) /home/<instanceName>-sftp/netsuite/salesorder/import/fulfillment/archive
   - d) /home/<instanceName>-sftp/netsuite/salesorder/import/fulfillment-nifi/archive
   - e) /home/<instanceName>-sftp/netsuite/salesorder/import/orderidentification/archive
   - f) /home/<instanceName>-sftp/netsuite/salesorder/import/orderitemattribute/archive
   - g) /home/<instanceName>-sftp/netsuite/salesorder/update/archive
   - h) /home/<instanceName>-sftp/netsuite/salesorder/invoice/error
   - i) /home/<instanceName>-sftp/netsuite/salesorder/customerdeposit/error
   - j) /home/<instanceName>-sftp/netsuite/salesorder/customerdeposit/archive

6. Transfer Order:
   - a) /home/<instanceName>-sftp/netsuite/transferorder/fulfillment/archive
   - b) /home/<instanceName>-sftp/netsuite/transferorder/fulfillment-nifi/archive
   - c) /home/<instanceName>-sftp/netsuite/transferorder/receipt/archive
   - d) /home/<instanceName>-sftp/netsuite/transferorder/receipt/error

7. Discount Item:
   - /home/<instanceName>-sftp/netsuite/discountitem/delete/archive
   - /home/<instanceName>-sftp/netsuite/discountitem/import/archive

8. Cash Sale:
   - /home/<instanceName>-sftp/netsuite/cashsale/export/archive

9. Fulfilled Sales Orders:
   - /home/<instanceName>-sftp/netsuite/fulfilledsalesorder/export/archive
   - /home/<instanceName>-sftp/netsuite/fulfilledsalesorder/export/error