# Purchase Order Sync

 When a Purchase Order is raised in Netsuite's ERP system, it needs to be seamlessly synchronized with HotWax Commerce, where the store associates employ an intuitive Receiving App by HotWax Commerce for the efficient receipt of inventory.

## Export purchase orders from NetSuite
Schedule SuiteScripts to export purchase orders
```
HC_generateCSV_OpenPurchaseOrders
```
SFTP location
<!-- to be added -->

## Import purchase orders into NetSuite
Schedule the import purchase order job from the pre-order page in the Job Manager application
```
Import purchase orders
IMP_ASN_PO_FEED
```

## Export received purchase orders from HotWax
Schedule a job in the integration layer to export received POs from the OMS and place them at an SFTP location for NetSuite to import

Check SFTP locations for received purchase orders
```
/home/{sftp-username}/netsuite/purchaseorder/receipt
```

## Import received purchase orders into NetSuite
Schedule the SuiteScript in NetSuite to consume this PO receipt feed and save it in NetSuite.
```
HC_imortPurchaseOrderReceipts
```