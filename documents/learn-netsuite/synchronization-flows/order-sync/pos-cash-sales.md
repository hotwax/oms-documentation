---
description: >-
  Discover the process of handling Point of Sale (POS) cash sales between HotWax
  and NetSuite.
---

# POS Cash Sales

Point of Sale (POS) orders are already in `Completed` status in the Order Management System (OMS). A feed file for these orders is prepared and kept on the Secure File Transfer Protocol (SFTP) server at `/home/{sftp-username}/netsuite/cashsale/export`. The `HC_SC_ImportCashSale` SuiteScript downloads the CSV file from the SFTP and creates sales records in NetSuite. To check whether the CSV file is successfully imported, go to `Customization > Import/Export > View CSV Records`. The `HC_MR_ExportedCashSaleCSV` script exports the CSV file with the NetSuite Internal ID and puts it on the SFTP. The `Order Identification` job in the OMS then consumes the CSV file from the SFTP to create Order Identification records.

* A feed file for these orders is prepared and kept on the SFTP server. SFTP path:

```
/home/{sftp-username}/netsuite/cashsale/export
```

SuiteScript to import completed cash sale records into NetSuite:

`HC_SC_ImportCashSale`

To check whether the CSV file is successfully imported in NetSuite:

`Customization > Import/Export > View CSV Records`

SuiteScript to export the NetSuite Internal ID of completed cash sales:

`HC_MR_ExportedCashSaleCSV`

Enable this job in the Job Manager to import the Order Identification records into the OMS:

`Order Identification`
