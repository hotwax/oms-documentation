# SetUp NetSuite FTP Locations
SFTP locations for all sync processes will automatically be created the first time a sync runs.

In case the locations are not created, here is a list of SFTP locations to verify.

1. Customer:
   - a) /home/{sftp-username}/netsuite/customer
   - b) /home/{sftp-username}/netsuite/customer/export/archive
   - c) /home/{sftp-username}/netsuite/customer/import/archive

2. InventoryAdjustment:
   - a) /home/{sftp-username}/netsuite/inventoryadjustment/csv
   - b) /home/{sftp-username}/netsuite/inventoryadjustment/archive

3. InventoryItem:
   - a) /home/{sftp-username}/netsuite/inventoryitem/csv/archive

4. Purchase Order:
   - a) /home/{sftp-username}/netsuite/purchaseorder/fulfillment/archive
   - b) /home/{sftp-username}/netsuite/purchaseorder/receipt/archive
   - c) /home/{sftp-username}/netsuite/purchaseorder/receipt/error

5. Sales Order:
   - a) /home/{sftp-username}/netsuite/salesorder/customerdeposit/archive
   - b) /home/{sftp-username}/netsuite/salesorder/export/archive
   - c) /home/{sftp-username}/netsuite/salesorder/import/fulfillment/archive
   - d) /home/{sftp-username}/netsuite/salesorder/import/fulfillment-nifi/archive
   - e) /home/{sftp-username}/netsuite/salesorder/import/orderidentification/archive
   - f) /home/{sftp-username}/netsuite/salesorder/import/orderitemattribute/archive
   - g) /home/{sftp-username}/netsuite/salesorder/update/archive
   - h) /home/{sftp-username}/netsuite/salesorder/invoice/error
   - i) /home/{sftp-username}/netsuite/salesorder/customerdeposit/error
   - j) /home/{sftp-username}/netsuite/salesorder/customerdeposit/archive

6. Transfer Order:
   - a) /home/{sftp-username}/netsuite/transferorder/fulfillment/archive
   - b) /home/{sftp-username}/netsuite/transferorder/fulfillment-nifi/archive
   - c) /home/{sftp-username}/netsuite/transferorder/receipt/archive
   - d) /home/{sftp-username}/netsuite/transferorder/receipt/error

7. Discount Item:
   - /home/{sftp-username}/netsuite/discountitem/delete/archive
   - /home/{sftp-username}/netsuite/discountitem/import/archive

8. Cash Sale:
   - /home/{sftp-username}/netsuite/cashsale/export/archive

9. Fulfilled Sales Orders:
   - /home/{sftp-username}/netsuite/fulfilledsalesorder/export/archive
   - /home/{sftp-username}/netsuite/fulfilledsalesorder/export/error