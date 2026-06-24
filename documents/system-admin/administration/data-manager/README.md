# Data Manager

The Data Manager allows users to audit data ingress and egress from the OMS while also being able to manually import and export data.

Getting to the Data Manager page:
1. Go to the Hamburger Menu
2. Select `MDM`

Key features and functionalities include:
1. **Manual Data Import and Export:** Manually import or extract data as needed.
2. **Multithreaded:** Import large amounts of data at high speeds to keep the OMS in sync with external systems.
3. **Error notifications:** Automatically get notified when an error occurs during import.
4. **Audit imported data:** Audit imported files as they were provided, ensuring traceability.

## MDM Under the Hood
Understanding the inner workings of the OMS MDM is essential to building scalable integrations, troubleshooting integrations, and amending corrupted data.

### Configurations
A data manager configuration represents the import settings for a type of data. For example, importing sales orders from Shopify, fulfillment from a 3PL, or inventory from a POS are all separate configurations because they are all importing different types of data.

The primary function of a configuration is defined by the import service configured in it. Looking at the examples above, here is how that would work:

| Config Name                       | Import service                 |
| --------------------------------- | ------------------------------ |
| Import orders from Shopify        | importShopifyOrders            |
| Import order fulfillment from 3PL | fulfillOrderItem               |
| Reset inventory from POS          | resetInventoryByIdentification |

Looking at this example, you'll notice that the Shopify order import service name is very specific to Shopify but the other two are generic OMS functions. This is because Shopify is a native integration of the OMS and has dedicated import services that handle Shopify's JSON structure unmodified and perform data transformation before actual ingestion internally.

Most configurations you'll find in the OMS will be for generic import services, not specific to any named system. This indicates that any transformation needed to align the data format with what the OMS can consume is done in a middleware platform.

A benefit of generic imports is that they can be used by multiple systems. For example, resetting inventory in the morning. Many retailers will connect the OMS to their POS and WMS to pull inventory and technically both are importing the same kind of data into the OMS with the same intent.

To better accommodate this kind of setup, all we'll need to do is rename the POS inventory import from before:

| Config Name                              | Import service                 |
| ---------------------------------------- | ------------------------------ |
| Import orders from Shopify               | importShopifyOrders            |
| Import order fulfillment from 3PL        | fulfillOrderItem               |
| Reset inventory ~~from POS~~             | resetInventoryByIdentification |

### Available Functions
The MDM becomes truly powerful once you understand that any service in the OMS can be turned into a data manager configuration.

Essentially, what happens when you assign an import service to an MDM, is that the OMS uses that service to loop through the file submitted to it row by row. When setting up an integration, enriching data in the OMS, or fixing corrupted data, this allows you to quickly turn any simple function into a bulk function with multithreading and transaction management.

To make the MDM more approachable for starters, we've identified the most commonly used configurations and organized them on the EXIM (Export Import) page. You can, however, see all configurations in the Data Manager Configurations page.

We aim to soon publish a more comprehensive list of available services in the MDM.

### Execution
The MDM processes imports across two dedicated thread pools — **Priority** and **Normal** — based on the priority configured for each configuration. When a file is submitted, the MDM runner places it into the appropriate pool's queue. You have three execution modes to choose from when setting up a configuration:

1. **Queued:** The default and recommended mode. Configurations in this mode respect the order (FIFO) within their assigned thread pool queue.
2. **Sync:** Files uploaded to a configuration set to execute in sync will be processed immediately by the OMS. Uploading large files to a configuration set to execute in sync will almost certainly be fatal because it will demand that the OMS route all required resources to process the file immediately. As a general rule, just don't use this setting unless very specifically instructed.
3. **Async:** Similar to sync, these configurations will not follow the queued order of their pool. Instead, an async import will process in the background when threads are available.

To understand how these work in practice, let's look at an example.

Here are the three configurations we have set up for import:

| Config                   | Import service                 | Execution mode |
| ------------------------ | ------------------------------ | -------------- |
| Import Shopify orders    | importShopifyOrders            | Queued         |
| Import order fulfillment | fulfillOrderItem               | Async          |
| Reset inventory          | resetInventoryByIdentification | Queued         |

Most retailers reset the inventory in the OMS every morning for all products at every location. At this time, there may be some customers placing orders on Shopify but probably no fulfillment is happening.

Here is an example MDM state at this point:

| Config                | Import service                 | Execution mode | Submitted time |
| --------------------- | ------------------------------ | -------------- | -------------- |
| Reset inventory       | resetInventoryByIdentification | Queued         | 4:00 am        |
| Import Shopify orders | importShopifyOrders            | Queued         | 4:15 am        |

All orders placed after the morning inventory file is submitted will not be processed in the OMS until the reset inventory file is finished processing. While this may seem problematic at first because orders are not being processed as they're being placed, the time of day when this operation happens is important to consider. Inventory update processing is happening somewhere between 12 a.m. - 4 a.m. during which no fulfillment operations are running; therefore, orders processing after the inventory file finishes does not actually hurt a retailer's fulfillment SLA.

#### MDM Runner and Thread Pools
The MDM uses a runner-based architecture with two dedicated worker pools:

- **Priority Pool:** Handles imports from configurations with a higher priority value. Each pool has a fixed number of threads and a bounded queue. When the active thread count equals the maximum pool size, the pool is shown in a warning state. If the queue is full, it is shown in a danger state.
- **Normal Pool:** Handles all other imports. Operates identically to the Priority Pool but is used for standard-priority configurations.

Each pool exposes live metrics on the Find Import page:
- **Threads:** Active threads, current pool size, and maximum pool size.
- **Queue:** Current queue depth and remaining capacity.
- **Last runner executed at:** The timestamp of the last MDM runner execution.

The thread pool a configuration is routed to is determined automatically based on its configured `Priority` value and is visible as the **Thread Pool** field on the configuration detail page.

#### Import Statuses
Each import log entry progresses through the following statuses:

| Status      | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| **Pending** | The file has been submitted and is waiting to be picked up by the MDM runner.                           |
| **Queued**  | The runner has picked up the file and placed it in the worker pool queue.                               |
| **Running** | The file is actively being processed by a worker thread.                                                |
| **Finished**| Processing completed successfully.                                                                      |
| **Failed**  | Processing completed but encountered a failure.                                                         |
| **Crashed** | The runner or worker thread terminated unexpectedly during processing.                                  |
| **Cancelled**| The import was manually cancelled by a user before or during processing.                               |

A `Pending` import can be cancelled by clicking the **X** button on the log entry before the runner picks it up.

#### File Storage and Retention

Understanding how the MDM stores files is important for managing server disk space and data privacy:

* **File Upload:** When a file is submitted (either manually via the UI or pulled via SFTP), it is immediately saved to the server's local storage (`runtime/datamanager/imported/{configId}/`) before any processing begins. The log entry is created in `Pending` status and linked to this file.
* **Error Files:** If an import finishes with failed records, the MDM generates a separate error file containing the failed rows and their error reasons. This error file is stored in the same directory as the original file.
* **Temporary Processing Files:** When multi-threading is enabled, the MDM splits the large file into smaller chunks. These chunks are stored in a temporary directory (`runtime/tmp/DM_{logId}/`) and are automatically deleted by the system once the import finishes.
* **Data Retention:** Files remain on the server disk as long as their corresponding Data Manager log entry exists. **Deleting a log entry from the UI permanently deletes the original file and any associated error files from the server's physical disk**, freeing up space.