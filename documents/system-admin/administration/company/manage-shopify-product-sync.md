# Product Sync UI Guide (Shopify to HotWax Commerce)

## Introduction

This guide explains how to use the Product Sync dashboard in the HotWax Commerce Launch Pad. The dashboard allows you to monitor and control the flow of product data from Shopify into HotWax Commerce. You’ll learn how to access the dashboard, interpret the status cards, use on‑demand sync tools and troubleshoot errors.  
Note: The screenshots and examples in this guide are taken from a development environment. Production environments may hide the debug controls shown in some images.

## Accessing the Product Sync dashboard

1. Log in to Launch Pad. Open launchpad.hotwax.io in your browser and sign in with your HotWax Commerce credentials.  
2. Navigate to Shopify connections. On the left navigation panel, select Shopify. The Shopify connections page lists your configured stores.  
3. Open your store’s connection details. Locate the row for your Shopify store (e.g., KREWE). Click anywhere in the row to open the connection details page[\[1\]](https://company-dev.hotwax.io/shopify).  
4. Open the Product sync card. In the Products and Inventory section, find the Product sync card. If your instance is already upgraded, the card shows a line graph and details about the last sync[\[2\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP). Click the card to open the Product sync dashboard.

### Setup and upgrade states

If you see one of the following cards instead of the Product sync card, your shop is not yet ready for the new sync:

* Setup new product sync – the shop is compatible but product sync hasn’t been started yet. A blue badge says “Setup required”[\[3\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP).  
* Upgrade required for new product sync – the backend version is too low; upgrade to v5.1.0 or newer before switching[\[4\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP).  
* Upgrade to new product sync – the instance is compatible; a green “Ready” badge invites you to migrate from the old sync[\[5\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP).  
* Disable old product sync – the new sync is running but the old sync still has artefacts; a red “Teardown needed” badge reminds you to remove the legacy sync[\[6\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP).

These states are typically only visible in development or when upgrading. Follow on‑screen instructions or contact your system administrator to complete setup. Once the new sync is enabled, the Product sync card becomes available.

## Navigating the Product Sync dashboard

The Product Sync dashboard contains several cards that provide status information and tools for managing the sync. Each card is described below.

### Summary

The Summary card shows a quick overview of the sync status:

* Last sync: The date and time of the most recent sync run.  
* Updates synced: Number of product updates processed in the last run.  
* Next sync time: Schedule for the next automatic sync (e.g., every hour). If the sync is paused, the status shows Paused[\[7\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).  
* Un‑synced updates: Count of Shopify updates waiting to be imported.  
* Product store: The name of your product store.

A small lightning icon indicates whether the sync is active, and a ⋮ menu in the top‑right offers two options:

* Reschedule – change the next scheduled sync run.  
* Resume – resume a paused sync[\[8\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).

### Track sync progress

This card monitors each step in the pipeline that imports Shopify products into HotWax Commerce. Each row represents a stage:

| Stage | Description and status |
| :---- | :---- |
| System message | A system message is generated when the sync begins. The row shows its identifier and whether it has been Consumed[\[7\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). Clicking the row opens a modal with details about the message ID and the GraphQL mutation used for the sync[\[9\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). |
| Shopify bulk operation | Shopify performs a bulk API operation to export product data. The card lists the bulk operation ID, the number of objects exported and its status (Complete). A detailed modal shows the bulk operation status, counts and duration[\[10\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). |
| HotWax bulk import | HotWax Commerce imports the products. The status may be Complete or Skipped if no data was received[\[7\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). A modal labelled Data Manager Log displays import log details[\[11\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). |

Use these steps to verify that each stage of the pipeline finished successfully. If a stage is stuck, contact your technical team for assistance.

### Product sync jobs

This section lists internal jobs that move product updates through the sync pipeline:

* Queue update requests: Queues pending product updates. The status might show “Paused”. Clicking the row opens a modal with a list of queued requests. In the modal you’ll see a \+ icon which developers can use to manually enqueue updates; this is typically not needed for day‑to‑day use[\[12\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).  
* Send update request: Sends queued updates to Shopify. The row shows the last run time and outcome. A modal provides more details.  
* Import completed requests: Imports product updates that have been processed by Shopify. The last run time and status are displayed.

These jobs are usually scheduled automatically. Use the dashboard to ensure they are running and to view logs if necessary.

### Pipeline metrics

The Pipeline card summarises the current workload:

* Pending update requests: Number of requests waiting to be sent.  
* Current Shopify request status: Status of any active Shopify bulk operation (e.g., Idle).  
* Update files to process: Number of update files waiting to be imported.  
* Error records: Count of errors within the last 24 hours[\[7\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).

If you notice an unusually high number of pending requests or error records, investigate using the tools described below.

### Custom request tools

Use the custom request section to override the scheduled sync and run targeted operations:

| Tool | Purpose |
| :---- | :---- |
| Sync specific products | Quickly sync individual products or variants. Open the modal, search for SKUs, product names or Shopify IDs, select the items and click Sync selected products[\[13\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). |
| Replay sync from a certain time | Reprocess all updates from a specific date/time. Use the date/time picker to select when to start the replay and click Start replay sync[\[14\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). This is useful if a past import failed and you need to re‑import recent updates. |
| Re‑sync entire catalog | Re‑import every product and variant from Shopify. The modal displays how many products and variants will be imported (e.g., 0 unsynced updates, 12 objects). Click Start full catalog re‑sync to begin[\[15\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). Use caution: a full re‑sync can take time and may queue many updates. |

### Recently synced updates

The Recently synced product updates card lists recently synced products so you can audit what changed. In the development environment this section may be empty[\[16\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync). As updates occur, you will see product names and timestamps here.

### Error details

Errors encountered during product sync are parsed and presented as cards in the Parsed error details section. Each card contains:

* Product name (internal name and variant).  
* Product ID.  
* Error description – e.g., timeout waiting for record lock[\[17\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).

The header shows how many error cards are currently displayed (e.g., “100 of 935 failed objects”). Use the following tools to manage errors:

* Search fields: Two search boxes allow you to filter by internal product name or by ID/Name/Handle. Enter a search term and press Enter to filter the list[\[17\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync).  
* Refresh icon: Click the circular arrow to refresh the error list and retrieve additional items.

Reviewing error cards helps you identify products that failed to import. After investigating the root cause (e.g., data validation issues), you can correct the problem and re‑sync the product using Sync specific products.

### Viewing sync history

The Track sync progress card focuses on the current or most recent run, but you can view past runs from the Product sync history page. To open the history view, click the clock icon in the top‑right corner of the Track sync progress card on the dashboard. This opens a new page that lists all previous product sync runs[\[18\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history).

#### Filters and sorting

At the top of the history page you can filter and sort the list of runs:

* System message status – a drop‑down menu lets you filter runs by the status of their system message. Options include Produced, Sent, Received, Consumed, Confirmed, Error and All statuses[\[19\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history). Use this to quickly find runs that encountered errors.  
* Sort – another drop‑down lets you sort runs by Newest first or Oldest first[\[20\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history).  
* Created after / Created before – date‑time filters that open a calendar/time picker. Select a start or end time to narrow the history to a specific range[\[21\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history).

#### Understanding the run list

Below the filters you’ll see a chronological list of sync runs. Each row shows the system message ID, the created date and time, and the statuses of the Shopify bulk operation and HotWax bulk import stages. Status chips are colour‑coded: green for Complete or Finished, amber for Skipped, and red for errors (an exclamation mark icon appears beside runs with errors)[\[22\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history). For example, runs M321902 and M321904 show Complete and Finished statuses, while run M321901 shows Finished with errors in red.

#### Expanding a run for details

Clicking any run expands it to reveal three sections:

1. System message – displays the message ID and status. Click Message text to view the GraphQL mutation that produced the run[\[23\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history).  
2. Shopify bulk operation – shows the Shopify bulk operation ID, the object count and root object count. Use View query to see the GraphQL query used for the bulk operation[\[23\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history).  
3. Bulk import – for completed imports, this section lists the total record count and failed record count. In runs with errors, the failed record count is highlighted in red[\[24\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history). A run where the bulk import was skipped will show N/A instead of counts.

Reviewing the sync history helps you trace when errors occurred and identify runs that may need to be reprocessed. Use the filters to locate problematic runs, view the queries used, and cross‑reference them with the Parsed error details section for troubleshooting.

## Best practices for using Product sync

* Monitor unsynced updates and error counts. If unsynced updates grow or errors increase, check the pipeline and jobs for issues.  
* Use on‑demand sync tools judiciously. The Sync specific products and Replay sync tools help resolve individual problems quickly. Reserve Re‑sync entire catalog for situations where the entire catalog has to be reimported.  
* Review pipeline steps for failures. The Track sync progress card indicates exactly where the pipeline may have failed (system message, Shopify bulk export or HotWax import). Use the detail modals for troubleshooting.  
* Keep your backend up‑to‑date. Upgrade HotWax Commerce to the recommended version before enabling the new product sync.  
* Disable legacy sync after migration. Once the new sync is running, ensure the old sync is disabled to prevent duplicate records[\[6\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP).

## Conclusion

The HotWax Commerce product sync dashboard provides powerful tools to monitor and manage the flow of products from Shopify into your product store. By following the steps in this guide, you can access the dashboard, interpret its status indicators, run targeted sync requests and troubleshoot errors. With regular monitoring and the occasional targeted sync, you can keep your product data up‑to‑date and avoid common synchronization issues.  
---

[\[1\]](https://company-dev.hotwax.io/shopify) Company \- HotWax Commerce  
[https://company-dev.hotwax.io/shopify](https://company-dev.hotwax.io/shopify)  
[\[2\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP) [\[3\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP) [\[4\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP) [\[5\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP) [\[6\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP) Company \- HotWax Commerce  
[https://company-dev.hotwax.io/shopify-connection-details/SHOP](https://company-dev.hotwax.io/shopify-connection-details/SHOP)  
[\[7\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[8\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[9\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[10\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[11\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[12\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[13\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[14\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[15\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[16\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) [\[17\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync) Company \- HotWax Commerce  
[https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync)  
[\[18\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[19\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[20\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[21\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[22\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[23\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) [\[24\]](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history) Company \- HotWax Commerce  
[https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history](https://company-dev.hotwax.io/shopify-connection-details/SHOP/product-sync/history)