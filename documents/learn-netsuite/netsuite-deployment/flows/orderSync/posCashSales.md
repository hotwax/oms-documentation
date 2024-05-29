---
description: >-
  Discover the process of handling Point of Sale (POS) cash sales between HotWax
  and NetSuite.
---

# POS Cash Sales

The POS orders are already in “Completed” status in OMS. A feed file for these orders is prepared and kept on SFTP. SFTP path: /home/{sftpUserName}/netsuite/cashsale/export/archive “HC\_SC\_ImportCashSale” Suitescript will download the CSV file from SFTP and create sales records in NetSuite. To check whether the CSV file is successfully imported: Customisation>Import/Export>View CSV records “HC\_MR\_ExportedCashSalesCSV” will export the CSV file with NetSuite internal id value and put it on the SFTP. “Order Identification” job in OMS will consume the CSV file from SFTP and make Order Identification records in OMS.

* A feed file for these orders is prepared and kept on SFTP. SFTP path:

```
/home/{sftp-username}/netsuite/cashsale/export/archive
```

Suitescript to import completed Cash Sale records into NetSuite.

`HC_SC_ImportCashSale`

To check whether the CSV file is successfully imported in NetSuite

`Customisation > Import/Export > View CSV records`

SuiteScript to export the NetSuite Internal ID of completed Cash Sales

`HC_MR_ExportedCashSalesCSV`

Enable this job in the Job Manager to import the Order Identification records into the OMS.

`Order Identification`
