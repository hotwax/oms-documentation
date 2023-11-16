# Inventory

Initial Inventory and a daily reset of invenotry is imported into HotWax Commerce from Retail Pro. While creating this integration there were some challenges that required additonal integration logic which is not usually needed for inventory reset syncs.

## Unfiltered product inventory
It's not uncommon for retailers' inventory system of record to have additional SKUs than just the ones that are published online for sales. When these systems send inventory reset files to other systems such as the OMS, they filter the inventory file to only include products that are relevant to that sales channel. So eCommerce channel inventory files will only include inventory for eCommerce products.

A limitation of Retail Pro at ADOC is that it does not filter out products that are published on Shopify, so the reset file it produces contains all the products ever created in ADOC resulting in a massive file which takes excessive amounts of time to process. To curb this limitation, HotWax filters this file against the products created in HotWax from Shopify. The new file only contains inventory by facility for products which are published online. This helps maintain system stability and increase processing speeds.

This reduces the file size from 300mb to 70-80kb


## Partially shipped orders
