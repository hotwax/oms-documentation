# Inventory

Initial Inventory and a daily reset of inventory is imported into HotWax Commerce from Retail Pro. While creating this integration there were some challenges that required additional integration logic which is not usually needed for inventory reset syncs.

## Unfiltered product inventory
It's not uncommon for retailers' inventory system of record to have additional SKUs than just the ones that are published online for sales. When these systems send inventory reset files to other systems such as the OMS, they filter the inventory file to only include products that are relevant to that sales channel. So eCommerce channel inventory files will only include inventory for eCommerce products.

A limitation of Retail Pro at ADOC is that it does not filter out products that are published on Shopify, so the reset file it produces contains all the products ever created in ADOC resulting in a massive file which takes excessive amounts of time to process. To curb this limitation, HotWax filters this file against the products created in HotWax from Shopify. The new file only contains inventory by facility for products which are published online. This helps maintain system stability and increase processing speeds.

This reduces the file size from 300mb to 70-80kb

**Sample Reset File CSV**

| facilityId | idType | idValue         | availableDelta | locationSeqId | varianceReasonId | comments                                                     |
|-------------|--------|-----------------|-----------------|---------------|-------------------|--------------------------------------------------------------|
| SVC21       | UPCA   | 2050000163913   | -1.0            | TLTLTLLL01    | VAR_INTEGR        | Inventory Variance sent as part of Reset Inventory deduction for partially completed orders |

## Partially shipped orders
Because HotWax sends orders to Retail Pro for invoicing only when all items of an order are fulfilled, inventory is not reduced for partially fulfilled orders. This means that the reset inventory file from Retail Pro includes inventory that has already been shipped artificially increasing inventory in the OMS

To make sure shipped inventory from partially completed orders is not reintroduced into the OMS, the Retail Pro integration layer extracts all completed order items from orders that have not been entirely completed and computes the total inventory deductions that have not been reported to Retail Pro yet. A file is then created with inventory variances for those products in the OMS.

{% hint style="warning" %}
The variance file is created for all order items from partially completed orders, even for products not included in the reset inventory file from Retail Pro. Due to this condition, it is vital that all products receive an inventory reset from Retail Pro to ensure that their inventory is not excessively deducted by the variance file.
{% endhint %}

This file is consumed after the reset file to ensure that the variances are not overridden by the reset file. It’s also important to ensure that this file is not consumed without the reset file before it, if the variance file is imported without the reset file then inventory will be deducted for partially completed orders even though the surplus inventory was not imported.
<!-- need to find a simpler way to write this^ -->

## POS sales inventory
Retail Pro calls the [Update Inventory API][updateInventoryDocs] in HotWax Commerce to deduct inventory sold in store for products.

Because inventory for in store POS sales is deducted using API calls, actual POS orders are not imported into the OMS from Retail Pro.

<!-- page links -->
[updateInventoryDocs]:(https://github.com/hotwax/oms-documentation/blob/oms1.0/Inventory/Update%20Inventory.md)


## Inventory sync to Shopify

### Full Reset
After processing inventory rules like safety stock, threshold and product facility configurations a full inventory reset is synced to Shopify once a day from HotWax early in the morning after the reset inventory file from Retail Pro is processed.

### Frequent Delta Syncs
Throughout the day HotWax pushes inventory updates to Shopify every 15 minutes. These are necessary to keep Shopify up to date about in store sold inventory and avoid over selling. These changes are pushed to Shopify using the “Upload recent inventory change” job in the Job Manager.
