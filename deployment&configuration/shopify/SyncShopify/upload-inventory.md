# Invnetory Sync from HotWax Commerce to Shopify

HotWax Commerce serves as the master of inventory availability. It seamlessly connects with various technology systems used by retailers, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are well synchronized. 

## Initial Inventory Sync in HotWax Commerce

HotWax commerce gets inventory feed from [ERP, WMS](https://docs.hotwax.co/user-guides/business-process-models/inventorylifecycle#inventory-transactions-in-erp-wms), or [POS systems](https://docs.hotwax.co/user-guides/business-process-models/inventorylifecycle#inventory-transactions-in-pos) to update the inventory in its system. The external system places the order on the SFTP location, HotWax commerce processes these files and updates the inventory in its system. For retailers who lack API-based integrations, HotWax Commerce also allows manual inventory upload through the [HotWax Commerce import inventory app](https://docs.hotwax.co/user-guides/inventory/inventory).

## Create Facility Groups to Sell Online

Retailers can [create facility groups](https://docs.hotwax.co/user-guides/administration/facilities/manage-groups) to choose which facility will participate in selling their inventory online. If a facility is capable of fulfilling online orders and wants its inventory to be sold online, it can be added to a facility group with the `CHANNEL FAC GROUP` subtype. Conversely, if the retailer decides not to sell a facility’s inventory online, it can be excluded from the group.
The facility group created with the `CHANNEL FAC GROUP` subtype will also be available as options in toggles in the `sell online card` on the `facility details` page which can be turned on to add the facility to the respective facility group.

## Online ATP computation

HotWax Commerce considers various factors, such as `safety stock`, `threshold`, `reserved quantity` (inventory allocated to sales orders but not fulfilled), orders in the `brokering queue` (orders that are captured but inventory is not allocated), and `excluded facilities`, before pushing `online ATP` on Shopify.

Let’s take a look at an example:

The product "blue shirt" from Brand ABC has been assigned plate number 100 QOH, and it has already received orders for 10 of them, and inventory is allocated for 5 sales orders. The Online ATP can be calculated using the following formula.
Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)

Given:
- Quantity on hand: 100 Units
- Reserved quantities: 5 Units
- Safety stock: 5 Units
- Threshold: 5 Units
- Orders in brokering queue: 5 Units
- Excluded facilities' ATP: 5 Units

Hence,

Online ATP = 100 - (5 + 5 + 5 + 5 + 5) = 100 - 25 = 75
HotWax Commerce will now push 75 units to Shopify as sellable inventory for online orders.

## Sync with Shopify

HotWax Commerce has two inventory synchronization jobs, `Hard Sync` and `Upload Recent Inventory Changes` to sync inventory changes on Shopify

#### Hard Sync job

For initial sync, a `Hard Sync` job needs to be scheduled to update all the product’s inventory on Shopify with a complete reset. Retailers can use `Hard Sync` jobs once a day to synchronize the inventory counts of all products from HotWax Commerce to Shopify.

#### Upload recent inventory changes

The existing inventory of a product in HotWax Commerce is affected by sales, returns,  transfers, inventory variances, and any changes or updates in safety stock or threshold values. `Upload recent inventory changes` in HotWax Commerce check the inventory records of products in HotWax Commerce and identify products that have undergone inventory changes since the last inventory synchronization to Shopify. `Upload recent inventory changes` job is scheduled to push the delta changes to Shopify.

#### Process uploads to eCommerce

All files transferred from HotWax Commerce to Shopify undergo processing via a job named `Process uploads to eCommerce`. Files transmitted from HotWax Commerce through the `Hard Sync` and `Upload recent inventory changes` jobs are directed to SFTP locations. Shopify sequentially retrieves these files from the SFTP location and executes the alterations via an API call. The `Process uploads to eCommerce` job is tasked with initiating API calls whenever a new file is prepared for processing by Shopify. Consequently, it is crucial to coordinate the scheduling of the `Process uploads to the eCommerce` job with that of the `Hard Sync` and `Upload recent inventory changes` jobs to ensure inventory changes on Shopify.

### Scheduling Hard Sync Job

For Initial inventory transfer and updating inventory for all the products from HotWax Commerce to Shopify

1. Visit job-manager.hotwax.io and log in with your user credentials.
2. Navigate to the `Inventory page` from the left menu.
3. Click on the `Hard Sync` job to open the job card.
4. Choose the desired run time from the dropdown or customize when the job will start running. You can also click on `Run Now` to instantly run the job one time.
5. For scheduling, select the desired frequency from the dropdown or customize. The recommended frequency for the `Hard sync` job is once a day.
6. Add custom parameters specifying the Facility's internal ID in the `facilityGroupId` parameter for example `FAC_GRP`is the internal ID for all facility groups with `CHANNEL_FAC_GRP` subtype.
7. Click on `save changes` to schedule the job.

### Schedule Upload Recent Inventory Changes Job

Schedule this job to upload the inventory changes for the products that have recently gone inventory changes to ensure that inventory changes happen in near real-time on Shopify.

1. Visit the `Job Manage`r App from the launchpad and log in with your user credentials.
2. Navigate to the `Inventory section` > `More Jobs`.
3. Click on the `Upload recent inventory changes` job to open the job card.
4. Choose the desired run time from the dropdown or customize when the job will start running. You can also click on `Run Now` to instantly run the job one time.
5. Schedule the job as per your desired frequency by selecting the time from the dropdown menu. The recommended frequency for the job is every 15 minutes.
6. Make sure to add the group ID `FAC_GRP` in the custom parameters.
7. Click on `Save Changes` to schedule the job.

### Verify Inventory Changes

1. Navigate to the Pipeline page in the `Job Manager` app, specifically the `Pending Jobs` section, to confirm that the job is scheduled as per the selected time.
2. Wait until the job is completed and reflects on the `completed` page.
3. Once the job finishes, log in to the HotWax Commerce Inventory page and look through some products and their variants inventory as a sample.
4. Afterward, login to the admin portal of Shopify and navigate to the `product` page.
5. Look for the same products and verify the inventory changes for all selected variants have been successfully imported into the system.

