# Sync NetSuite Product ID

Syncing the NetSuite internal ID for products from NetSuite ensures that subsequent product dependent syncs like order, transfer shipment, and cycle counts are always successful. Trying to reliably use a well known name of products like SKU or UPC, often leads to conflicts with customizations of the CSV import forms in NetSuite. To avoid having to handle these custom identification formats for each deployment, HotWax syncs NetSuite’s internal product ID.

The POS orders are already in “Completed” status in OMS.
A feed file for these orders is prepared and kept on SFTP. SFTP path: /home/krewe-uat-sftp/netsuite/cashsale/export/archive
“HC_SC_ImportCashSale” Suitescript will download the CSV file from SFTP and create sales records in NetSuite. To check whether the CSV file is successfully imported: Customisation>Import/Export>View CSV records
“HC_MR_ExportedCashSalesCSV” will export the CSV file with NetSuite internal id value and put it on the SFTP.
“Order Identification” job in OMS will consume the CSV file from SFTP and make Order Identification records in OMS.

- A feed file for these orders is prepared and kept on SFTP. SFTP path: 
```
/home/{sftp-username}/netsuite/cashsale/export/archive
```

Suitescript to import completed Cash Sale records into NetSuite.

```HC_SC_ImportCashSale```

To check whether the CSV file is successfully imported in NetSuite

```Customisation > Import/Export > View CSV records```

SuiteScript to export the NetSuite Internal ID of completed Cash Sales

```HC_MR_ExportedCashSalesCSV```

Enable this job in the Job Manager to import the Order Identification records into the OMS.

```Order Identification``` 