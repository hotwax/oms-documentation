---
description: >-
  Learn how HotWax Commerce synchronizes inventory from HotWax Commerce to
  Shopify.
---

# Initial Inventory Sync

HotWax Commerce serves as the master of inventory availability. It seamlessly connects with various technology systems used by retailers, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are well synchronized.

## Initial Inventory Sync in HotWax Commerce

HotWax Commerce gets [inventory feed](/documents/learn-hotwax-oms/business-process-models/inventory-lifecycle.md) from ERP, WMS, or POS systems to update the inventory in its system. The external system places the order on the SFTP location, HotWax Commerce processes these files and updates the inventory in its system. For retailers who lack API-based integrations, HotWax Commerce also allows manual inventory upload through the [HotWax Commerce import Inventory App](/documents/retail-operations/inventory/inventory-upload/README.md).

## Create Facility Groups to Sell Online

Retailers can [create facility groups](/documents/system-admin/administration/facilities/manage-groups.md) to choose which facility will participate in selling their inventory online. If a facility is capable of fulfilling online orders and wants its inventory to be sold online, it can be added to a facility group with the `CHANNEL FAC GROUP` subtype. Conversely, if the retailer decides not to sell a facility’s inventory online, it can be excluded from the group. The facility group created with the `CHANNEL FAC GROUP` subtype will also be available as options in toggles in the `sell online card` on the `facility details` page which can be turned on to add the facility to the respective facility group.

## Online ATP computation

HotWax Commerce considers various factors, such as `safety stock`, `threshold`, `reserved quantity` (inventory allocated to sales orders but not fulfilled), orders in the `brokering queue` (orders that are captured but inventory is not allocated), and `excluded facilities`, before pushing `online ATP` on Shopify.

Let’s take a look at an example:

The product "blue shirt" from Brand ABC has a quantity on hand (QOH) of 100 units, and it has already received orders for 10 units, and inventory is allocated for five sales orders. The Online ATP can be calculated using the following formula. Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Given:

* Quantity on hand: 100 Units
* Reserved quantities: 5 Units
* Safety stock: 5 Units
* Threshold: 5 Units
* Orders in brokering queue: 5 Units
* Excluded facilities' ATP: 5 Units

Hence,

Online ATP = 100 - (5 + 5 + 5 + 5 + 5) = 100-25 = 75 HotWax Commerce will now push 75 units to Shopify as sellable inventory for online orders.

## Sync with Shopify

HotWax Commerce has two inventory synchronization jobs, `Hard Sync` and `Upload Recent Inventory Changes` to sync inventory changes on Shopify

#### Hard Sync job

For initial sync, a `Hard Sync` job needs to be scheduled to update all the product’s inventory on Shopify with a complete reset. Retailers can use `Hard Sync` jobs once a day to synchronize the inventory counts of all products from HotWax Commerce to Shopify.

#### Upload recent inventory changes

The existing inventory of a product in HotWax Commerce is affected by sales, returns, transfers, inventory variances, and any changes or updates in safety stock or threshold values. `Upload recent inventory changes` in HotWax Commerce check the inventory records of products in HotWax Commerce and identify products that have undergone inventory changes since the last inventory synchronization to Shopify. `Upload recent inventory changes` job is scheduled to push the delta changes to Shopify.

#### Process uploads to eCommerce

All files transferred from HotWax Commerce to Shopify undergo processing via a job named `Process uploads to eCommerce`. Files transmitted from HotWax Commerce through the `Hard Sync` and `Upload recent inventory changes` jobs are directed to SFTP locations. Shopify sequentially retrieves these files from the SFTP location and executes the alterations via an API call. The `Process uploads to eCommerce` job is tasked with initiating API calls whenever a new file is prepared for processing by Shopify. Consequently, it is crucial to coordinate the scheduling of the `Process uploads to the eCommerce` job with that of the `Hard Sync` and `Upload recent inventory changes` jobs to ensure inventory changes on Shopify.

### Scheduling Hard Sync Job

For Initial inventory transfer and updating inventory for all the products from HotWax Commerce to Shopify

1. Open Job Manager from the HotWax Commerce Launchpad.
2. Open `Catalog`.
3. Search for `Hard Sync`.
4. Open the job.
5. Review its schedule and parameters.
6. Enter the facility group identifier in `facilityGroupId`, for example `FAC_GRP` when that is the configured group.
7. Save the required schedule, or select `Run Now` for one immediate execution.

### Schedule Upload Recent Inventory Changes Job

Schedule this job to upload the inventory changes for the products that have recently gone inventory changes to ensure that inventory changes happen in near real-time on Shopify.

1. Open `Catalog`.
2. Search for `Upload recent inventory changes`.
3. Open the job.
4. Review its schedule and parameters.
5. Enter the configured group identifier in the required parameter.
6. Save the required schedule, or select `Run Now` for one immediate execution.

### Verify Inventory Changes

1. Open `Run history` in Job Manager.
2. Find the job run and wait for it to finish.
3. Once the job finishes, log in to the HotWax Commerce Inventory page and look through some products and their variants inventory as a sample.
4. Afterward, login to the admin portal of Shopify and navigate to the `product` page.
5. Look for the same products and verify the inventory changes for all selected variants have been successfully imported into the system.

See [Manage a job](../../retail-operations/workflow/job-management/jobs/job-details.md) and [Investigate job runs](../../retail-operations/workflow/job-management/jobs/run-history.md).
