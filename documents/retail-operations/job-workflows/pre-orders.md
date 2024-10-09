---
description: >-
  Learn about the Import New Products job in HotWax Commerce. Keep your product
  catalog updated for accurate representation on your platform.
---

# Pre-Orders

## Jobs for Pre-Order Catalog Management in HotWax Commerce

#### Frequency for Pre-Order Jobs

All Pre-order jobs have a defined frequency of 15 minutes by default which can be modified and adjusted at any point of time as per the requirement. The user may have various options to modify the job, such as altering the run time, adjusting the frequency, and adding custom parameters if required, or can also cancel the job to reduce system load. Users can follow the given steps to execute any changes in the existing jobs to update the runtime and the scheduled frequency of the job whenever required.

**Runtime:** Time at which a job is scheduled particularly. **Scheduled Frequency:** A time duration for repeated occurrence.

1. Go to the Pipeline and search for the Job, by job name or related keyword.
2. Click on the Job Card to refer to the job detailed view.
3. Select the runtime function dropdown to change the run time from the dropdown or make custom changes.
4. Or change the scheduled frequency by choosing it from the dropdown or make a custom requirement.
5. Ensure to save the changes.
6. Users can add custom parameters to the jobs and schedule them accordingly.
7. Users can also “Skip” or “Cancel” the jobs from the same job detailed card.

### Pre-sell Catalog (Auto Refresh Presell Catalog)

**Job ID:** JOB\_REL\_PREODR\_CAT\
**Job Name:** Reset Preorder catalog Items

**Description:**\
The Pre-sell Catalog job automatically manages the addition or removal of pre-sell products from the HotWax Pre-order/Backorder category. This job checks for new products eligible for pre-order/backorder in the received feeds from ERP and adds them to the pre-order backorder catalog in HotWax Commerce based on specific eligibility criteria for product inventory, purchase orders, and order queues.

#### **Troubleshooting Use Case**

**Issue 1:** New or existing products do not appear as pre-orders or backorders.

**Possible Causes:**

* Item does not exist in the system
* PO status is canceled
* Item has Inventory in the system

**Resolution Steps:**

1. Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
2. The promise date of a PO item must be in the future, guaranteeing that purchase order items will arrive in the future, not from an old PO.
3. The current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
4. If the 'isNewProduct' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.

Products from purchase orders that don't meet these criteria won't be listed in HotWax Commerce's pre-order catalog. It's important to ensure that purchase order items adhere to these criteria for accurate listing.

**Issue 2:** Products are not removed from the pre-order or backorder category.

**Resolution Steps:**

1. Ensure all future inventory of pre-orders is received.
2. Ensure the Purchase Order status changes to “Canceled” or “Completed”.
3. Ensure the Purchase Order arrival date (promised fulfillment date) has passed.
4. There is no Return for any pre-order or backorder.

#### **Custom Parameters**

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | Daily Once    | 11:30:00:00 AM          |

<figure><img src="../.gitbook/assets/Pre-sell Catalog.png" alt="" width="375"><figcaption></figcaption></figure>

### Jobs for Synchronizing the Pre-Order Catalog with eCommerce

### Pre-sell on Shopify

1. **Job ID:** JOB\_PREORDER\_CAT\_SYC **Job Name:** Preorder catalog sync
2. **Job ID:** JOB\_ADD\_PREORD\_VRT **Job Name:** Bulk Upload to add preorder tags to products

**Description** These jobs facilitate updates to the Presell catalog on Shopify, encapsulating all pre-order-related changes, including promised delivery dates, product categories, and statuses. This file is placed on a dedicated SFTP location. These jobs set the pre-order or backorder category in the meta fields to add the suitable tag to the parent product on Shopify.

1. Tagging as **HC:Pre-order** or **HC:Backorder** can be easily managed by enabling the checkbox for the Add pre-order tags and Add backorder tags jobs, which helps to employ tags and meta fields to modify the Add to Cart button and display the expected delivery date on Shopify PDP.
2. It is essential to click checkboxes to schedule the Remove Pre-order tags and Remove Backorder tags jobs to eliminate the HC: Pre-order and HC: Backorder tags when a product is removed from the pre-order catalog.
3. Add Promise Date check box is also to be selected to enable setting the expected delivery dates on the product on Shopify PDP

#### Troubleshooting Use Case

**Issue 1:** The product is not updated as a pre-order or a backorder at Shopify and PDP

**Possible Causes:**

1. PO status is canceled
2. PO has a past expected delivery date.
3. Items have available inventory in the system.
4. The generated file is not processed by Shopify and is lying unread at the specified SFTP location

**Resolution Steps:**

1. Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
2. The promise date of a PO item must be in the future, guaranteeing that the purchase order item will arrive in the future, not from an old PO.
3. The current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
4. If the 'isNewProduct' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.
5. Item is associated with the pre-order or backorder category.
6. Ensure the file is read and processed from the SFTP location.

Products from purchase orders that don't meet these criteria won't be listed in Shopify’s pre-order catalog. Contact the Shopify team if your product is still not listed on Shopify.

#### Custom Parameters

| Parameter          | Type   | Description                                                                           | Default Value | Example Value           |
| ------------------ | ------ | ------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                   | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. | Daily Once    | 23:59:00:00 PM          |

<figure><img src="../.gitbook/assets/Sync upload preorder sync.png" alt="" width="375"><figcaption></figcaption></figure>

### Promise Date Changes (Update Pre-Order Category Item Arrival Date)

**Job ID:** JOB\_UL\_PRMS\_DTE **Job Name:** Update promise dates for pre-order products.

#### Description

#### Update Pre-Order Category Item Arrival Date

When there are any changes in the arrival dates of the multiple items in the purchase orders, the promise dates need to be first updated in the HotWax Commerce pre-sell category. The Sync Variant Details job ensures that the expected date changes in the purchase order arrival date, and the promise dates of the product are also updated on Shopify. These changes happen through the Update Pre-Order Category Item Arrival Date job which creates a file and processes all the updated date changes in the HotWax Commerce category, after this, the Sync Variant Details updates the changes on Shopify.

**Troubleshooting Use Case**

**Issue 1:** The promise date of the Product is not updated on Shopify PDP.

**Possible Causes:**

1. PO status is canceled
2. Item does not exist anymore in the pre-order or backorder category.
3. Item has Inventory in the system.
4. The generated file is not processed by Shopify and is lying unread at specified SFTP location

**Resolution Steps:**

1. Status of PO items must be created or approved.
2. The promise date of a PO item must be in the future.
3. Ensure the current inventory of the item must be 0.
4. Ensure that the file is processed by Shopify from the SFTP location

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | 15 Minutes    | Every 15 minutes        |

### Jobs for Sales Orders with Pre-Order Items

To ensure accurate representation of pre-order information when pre-orders are downloaded alongside regular orders, specific notes or tags are included in incoming sales orders for easy identification of pre-orders. The job is scheduled by selecting the respective checkboxes while configuring the Pre-sell on the Shopify job from the Job Manager application.

Users are allowed to select multiple checkboxes to schedule various jobs in HotWax Commerce for managing sales orders with pre-order items more efficiently.

#### Add Pre-order/Backorder Tags

**Description:** These jobs assign pre-order/backorder tags to orders containing pre-selling items. This simplifies identification for the operations team. The job is scheduled by selecting the respective checkbox against the Add Pre-Order Tag or Add Backorder Tag. By default, the frequency will be scheduled just as specified for the Pre-sell on the Shopify job.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | 15 Minutes    | Every 15 Minutes        |

#### Add Promise Date

**Description:** These jobs will assign promise dates to sales orders, mirroring the dates provided to customers upon order placement for pre-order or backorder items. This job, when activated via checkbox, appends promise date notes to sales orders. By default, the frequency will be scheduled just as specified for the Pre-sell on the Shopify job.

#### Update Promise Date

**Description:** There might be multiple purchase Orders uploaded in HotWax Commerce. Once the active PO is exhausted, the subsequent PO gets active with a new arrival date. Sometimes, a new PO is introduced with an early arrival date, while the Item already has a specified promise date at Shopify PDP. In cases where promise dates change due to shifts in the arrival date of purchase orders, updates to the promise dates in sales orders are necessary. The Update promise date job updates the promise date notes of the sales orders. This job, when activated via checkbox, adds notes to the impacted order items on Shopify for changes in promise dates. By default, the frequency will be scheduled just as specified for the Pre-sell on the Shopify job.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | 15 Minutes    | Every 15 Minutes        |

#### Adjust ATP on Early PO in Bulk

**Description:** The ATP available on the purchase orders needs to be handled when exhausted or shifted from one PO to the other PO. Merchandisers frequently handle multiple Purchase Orders for identical SKUs. Sometimes, they might upload a new Purchase Order with an earlier promised date, even if there's an existing Purchase Order for the same SKU in the system. In such cases, re-allocating sales orders from the initial Purchase Order to the latest one with an earlier date becomes vital. This ensures that customers who place pre-orders first are given priority, guaranteeing timely delivery. The task automatically adjusts Purchase Order ATP allocations and reallocates pre-orders accordingly. To schedule this, users need to enable and set up the Adjust ATP on Early PO in Bulk by selecting the checkbox available in the More Jobs section.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | Every Hour    | Hourly                  |

### Promise Date Changes

#### Auto Sync Date to order

**Description:** Merchants can change the promise dates in sales orders if there are any changes in the promise date due to arrival date changes in Purchase orders through this job. This job can be scheduled by checking the box against the job name Auto Sync Date to order, available in the job card Promise Date Changes. The frequency can be set as required from the available dropdown or can be customized.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | Every Hour    | Hourly                  |

#### Email Customers

**Description:** To efficiently manage customer expectations regarding changes in promised dates, activating the Email customers checkbox initiates a job that triggers automatic emails to customers. This action ensures customers are informed whenever there's a modification in the promised date since the job notifies customers of any changed promise dates for their orders.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 1:15 PM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | 15 Minutes    | Every 15 Minutes        |

## Release Pre-orders

**Description:** HotWax Commerce facilitates users to automatically handle the release and brokering of Shopify Pre-Orders, ensuring fulfillment from the most suitable location without requiring manual intervention. HC strategically organizes all pre-orders in a dedicated queue until their physical inventory is received. This approach ensures that brokering processes are not initiated for orders lacking available inventory. Once the pre-order inventory arrives, HotWax Commerce transfers all orders from the pre-order queue to the brokering queue. This allows the system's engine to efficiently match the most suitable inventory with specific orders for fulfillment.

### Auto Releasing

**Daily Job**

**Description:** Merchandisers can schedule this job through the Job Manager Application from the Pre Order Page by enabling the Run Daily checkbox in the auto-releasing card. This automated process releases pre-orders where the shipping date has arrived and inventory is available in HotWax Commerce for release.

| Parameter          | Type   | Description                                                                                                                | Default Value | Example Value           |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| RunTime            | String | Specifies the Runtime scheduled for a job, which can be customized.                                                        | null          | April 17, 2024, 7:15 AM |
| Schedule Frequency | String | Schedules frequency from the dropdown as every 5 minutes, Hourly, Daily, Weekly, etc. which can be customized as required. | Daily Once    | Every Day               |

<figure><img src="../.gitbook/assets/Update promise Date for pre-order product.png" alt="" width="375"><figcaption></figcaption></figure>
