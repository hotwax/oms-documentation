# Sync NetSuite Product ID

Syncing the NetSuite internal ID for products from NetSuite ensures that subsequent product dependent syncs like order, transfer shipment, and cycle counts are always successful. Trying to reliably use a well known name of products like SKU or UPC, often leads to conflicts with customizations of the CSV import forms in NetSuite. To avoid having to handle these custom identification formats for each deployment, HotWax syncs NetSuite’s internal product ID.

**To get NetSuite’s internal product ID, it requires a schedule suite script to export product ID**

```
SuiteScript name: HC_SC_GenerateProductCSV.js
```

**A schedule suite script will then put this export product IDs on the SFTP location for OMS to consume**

```
SuiteScript name: HC_SC_GenerateProductCSV.js

SFTP Location: /home/{sftp-username}/netsuite/product/csv
```

**To import product in OMS, a import job need to be configured in OMS with recommended frequency 1 hour**
```
Config ID: IMP_PROD_IDENT

Job name: Product Identification
```
