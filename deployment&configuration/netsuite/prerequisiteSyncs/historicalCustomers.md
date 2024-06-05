---
description: >-
  Ensure seamless data integration by syncing historical customers between
  NetSuite and HotWax Commerce
---

# Historical Customers

Retailers that have been using NetSuite and Shopify prior to implementing HotWax Commerce already have a large database of customers already in NetSuite. HotWax has a historical customer sync with NetSuite that imports all customers from NetSuite along with their Shopify ID and saves them in HotWax. Now when a returning customer places an order on Shopify, HotWax will be able to link it to the existing customer based on their Shopify ID and then push their order to NetSuite using their existing NetSuite internal ID instead of creating a new customer.

**SuiteScript to generate a CSV of historical customers**

```
HC_SC_GenerateProductCSV
```

**SuiteScript to upload the historical customer CSV to an FTP location**

```
HC_SC_UploadProductCSV
```

**SFTP location**

```
/home/{sftp-username}/netsuite/historicalshopifycustomer/csv
```

**Job in HotWax to import the list of historical customers**

```
Import Historical Shopify Customer
FTP Config: IMP_HIS_SHOP_CUST
```
