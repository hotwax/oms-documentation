---
description: >-
  Discover how ADOC manages its inventory, including initial imports and daily
  resets from Retail Pro, with additional integration logic to address
  challenges.
---

# Inventory

Initial Inventory and a daily reset of inventory is imported into HotWax Commerce from Retail Pro. However, managing inventory became challenging with the multi-store setup. To address this, Retail Pro now sends us inventory deltas for each product store. This integration presented some unique challenges that required additional logic beyond the standard inventory reset synchronization. While creating this integration there were some challenges that required additional integration logic.

## Unfiltered product inventory

It's not uncommon for retailers' inventory system of record to have additional SKUs than just the ones that are published online for sales. When these systems send inventory reset files to other systems such as the OMS, they filter the inventory file to only include products that are relevant to that sales channel. So eCommerce channel inventory files will only include inventory for eCommerce products.

A limitation of Retail Pro at ADOC is that it does not filter out products that are published on Shopify. As a result, the delta file includes all products with inventory changes from the past day. To address this, HotWax filters this file against the products created in HotWax from Shopify, ensuring that these products have valid UPCA. The resulting file includes only the inventory by facility for products that are published online. This approach helps maintain system stability and increases processing speeds.

This reduces the file size from 300mb to 70-80kb. If the filtered file contains more than 200,000 records, we split it into two parts.

**Sample Reset File CSV**

## Partially shipped orders

Because HotWax sends orders to Retail Pro for invoicing only when all items of an order are fulfilled, inventory is not reduced for partially fulfilled orders. This means that the reset inventory file from Retail Pro includes inventory that has already been shipped artificially increasing inventory in the OMS

To prevent shipped inventory from partially completed orders from being reintroduced into the OMS, the Retail Pro integration layer extracts all completed order items from orders with inventory updates in the recent inventory delta file. It focuses on orders that are not entirely completed and calculates the total inventory deductions not yet reported to Retail Pro. A file is then created with inventory variances for these products in the OMS.

{% hint style="warning" %}
The reset inventory file from Retail Pro is created for only those products whose inventory levels varied in the past day. Thus, deltas for only those order items from partially completed orders are included in the variance file which are present in the reset inventory file received from RetailPro that day. This ensures that the variance file does not excessively deduct inventory for order items from partially completed orders that are not included in the reset inventory file.
{% endhint %}

**Sample variance file**

| facilityId | idType | idValue       | availableDelta | locationSeqId | varianceReasonId | comments                                                                                    |
| ---------- | ------ | ------------- | -------------- | ------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| SVC21      | UPCA   | 2050000163913 | -1.0           | TLTLTLLL01    | VAR\_INTEGR      | Inventory Variance sent as part of Reset Inventory deduction for partially completed orders |

This file is consumed after the reset file to ensure that the variances are not overridden by the reset file. It’s also important to ensure that this file is not consumed without the reset file before it, if the variance file is imported without the reset file then inventory will be deducted for partially completed orders even though the surplus inventory was not imported.

## POS sales inventory

Retail Pro calls the [Update Inventory API](\(https:/github.com/hotwax/oms-documentation/blob/oms1.0/Inventory/Update%20Inventory.md\)) in HotWax Commerce to deduct inventory sold in store for products.

Because inventory for in store POS sales is deducted using API calls, actual POS orders are not imported into the OMS from Retail Pro.

## Inventory sync to Shopify

### Full Reset

After processing inventory rules like safety stock, threshold and product facility configurations a full inventory reset is synced to Shopify once a day from HotWax early in the morning after the reset inventory file from Retail Pro is processed.

### Frequent Delta Syncs

Throughout the day HotWax pushes inventory updates to Shopify every 15 minutes. These are necessary to keep Shopify up to date about in store sold inventory and avoid over selling. These changes are pushed to Shopify using the “Upload recent inventory change” job in the Job Manager.
