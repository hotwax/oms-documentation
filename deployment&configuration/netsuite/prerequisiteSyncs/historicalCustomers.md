# Historical Cutomers

Retailers that have been using NetSuite and Shopify prior to implementing HotWax Commerce already have a large database of customers already in NetSuite. During the deployment of HotWax, which becomes responsible for syncing orders and related information between eCommerce, such as Shopify and NetSuite, it is vital to sync customers with NetSuite before beginning any form of order sync with Shopify.

Running normally, HotWax creates customers automatically when new customers are detected on order import from Shopify. It then creates those customers in NetSuite if HotWax doesn’t have a NetSuite identification record for those customers. In a scenario where NetSuite already has historical customers created in it’s system, introducing HotWax with just its regular customer sync job would create duplicates for all historical customers in NetSuite if they’re linked to an order synced by HotWax.

To avoid this, HotWax has a historical customer sync with NetSuite that imports all customers from NetSuite along with their Shopify ID and saves them in HotWax. Now when a returning customer places an order on Shopify, HotWax will be able to link it to the existing customer based on their Shopify ID and then push their order to NetSuite using their existing NetSuite internal ID instead of creating a new customer.

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