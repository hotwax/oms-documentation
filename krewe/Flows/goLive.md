---
description: >-
  Discover the step-by-step guide to transitioning your OMS instance to
  production seamlessly.
---

# Go Live

This guide walks through the steps of turning on your OMS instance to production. Follow these steps in the sequence listed for smooth operations.

## Production activation steps

The first step is to do an initial import of orders from Shopify. For this step, identify the last order being fulfilled by the legacy flow. The `Since Order ID` will NOT be imported into HotWax Commerce. Input this order into the “Import in Bulk” job to import orders from Shopify initially.

### Import Orders in Bulk:

1. Open Job Manager.
2. Choose "Import Orders in Bulk."
3. Enter the last Internal Shopify Order ID already synced in HotWax Commerce OMS and visible on the “Sales Order” page.
4. Click "Run Import."

_Note: Run this job only once to import all open and unshipped orders up to the specified time._

### Import Orders from Shopify:

1. Open Job Manager.
2. Select "New Orders."
3. Schedule this job to run after 15 minutes and the frequency to every 15 minutes.
4. If needed, set a buffer time in minutes using the custom parameters of the job. This will configure the job to only import orders that are older than this duration.
5. Click "Save changes."

_Note: This job regularly imports recent orders from eCommerce. It focuses on importing orders that come in after the last order ID processed by the "Import Orders in Bulk" job. It’s important to set this job to run after 15 minutes of the last order ID being created to ensure that older orders are not imported._

## Scheduling Inventory Push to Shopify

Before proceeding with scheduling the inventory push to Shopify, enable Read/Write access for HotWax to Shopify. Follow these steps:

1. Go to the Shopify Shop Configuration page in the OMS.
2. Under the “Shopify Config” row, click on the edit icon at the end to open the edit modal.
3. Under the access scope section, select “read and write”.

### Hard Sync - Sync Inventory to Shopify from HotWax Commerce

On the inventory page in the Job Manager, perform the following steps:

1. Select Hard Sync.
2. Schedule this job to run every hour. This will ensure cycle counts and variances are pushed to Shopify.

## System Shutdown Procedure

If the client wishes to turn off the system, certain jobs should be disabled:

The first step to ensure a complete cutoff is to switch the Shopify Access Scope to “Read Access”. This will prevent the OMS from making any changes to Shopify.

* _Note: "No Access" is also a valid option but not a necessary length to go to._

### Jobs to Disable

To facilitate a controlled system shutdown, disable the following jobs:

* **Order Import from Shopify**
* **Hard Synce**

Scheduling these jobs as instructed will keep the system operational, ensuring timely data updates and synchronization.

## Disabling NetSuite Scripts

Most NetSuite Scripts will not impact operations if users are not generating receipts.

The most important script to disable is the script to import new orders into NetSuite from HotWax:

* **HC\_importSalesOrders**
* **HC\_importCashSales**

Additionally, all scripts that are prefixed with the letters “HC” can also be disabled for further precaution.
