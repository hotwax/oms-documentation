# Data Manager

The Data Manager allows users audit data ingress and egress from the OMS while also being able to manually import and export data.

Getting to the Data Manager Configurations page:
1. Go to the Hamburger Menu
2. Select `Settings`
3. Click on `Data Manager Configurations`

Key features and functionalities include:
1. **Manual Data Import and Export:** Manually import or extract data as needed.
2. **Multithreaded:** Import large amounts of data at high speeds to keep the OMS in sync with external systems.
3. **Error notifications:** Automatically get notified when an error occurs during import.
4. **Audit imported data:** Audit imported files as they were provided, ensuring tracability.

## MDM Under the Hood
Understanding the inner workings of the OMS MDM is essential to building scalable integrations, troubleshooting integrations, and amending corrupted data.

### Configurations
A data manager configuration represents the import settings for a type of data. For example, importing sales orders from Shopify, fulfillment from a 3PL, or inventory from a POS are all separate configurations because they are all importing different types of data.

The primary function of a configuration is defined by the import and export services configured in it. Looking at the examples above, here is how that would work:

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
| Reset inventory ~~from POS~~ | resetInventoryByIdentification |

### Available Functions
The MDM becomes truly powerful once you understand that any service in the OMS can be turned into a data manager configuration.

Essentially, what happens when you assign an import service to an MDM, is that the OMS uses that service to loop through the file submitted to it row by row. When setting up an integration, enriching data in the OMS, or fixing corrupted data, this allows you to quickly turn any simple function into a bulk function with multithreading and transaction management.

To make the MDM more approachable for starters, we've identified the most commonly used configurations and organized them on the EXIM (Export Import) page. You can, however, see all configurations in the Data Manager Configurations page.

We aim to soon publish a more comprehensive list of available services in the MDM.
### Execution
The MDM is one unified import queue across all configurations. When a file is added to the MDM to be processed, the OMS looks at its execution mode to determine how to prioritize it. You have three options to choose from when setting up a configuration:

1. **Queued:** Queued configurations will respect the FIFO order of the entire MDM.
2. **Sync:** Files uploaded to a configuration set to execute in sync will be processed immediately by the OMS. Uploading large files to a configuration set to execute in-sync will almost certainly be fatal because it will demand that the OMS route all required resources to process the file immediately. As a general rule, just don't use this setting unless very specifically instructed.
3. **Async:** Similar to sync, these configurations will not follow the FIFO order that queued imports follow. Instead, an async import will process in the background when threads are available.

To understand how these work in practice lets look at an example.

Here are the three configurations we have setup for import

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

All orders placed after the morning inventory file is submitted will not be processed in the OMS until the reset inventory file is finished processing. While this may seem problematic at first because orders are not being processed as they're being placed, the time of day when this operation happens is important to consider. Inventory update processing is happening somewhere between 12 a.m. - 4 a.m. during which no fulfillment operations are running; therefore, orders processing after the inventory file finishes does not actually hurt a retailer’s fulfillment SLA.

#### Queue poller
All file import tasks enter the MDM queue in a `Pending` status. As the poller works its way through the queue, it transitions the current active file to a `Running` status. The frequency that the poller checks for pending files can be configured using the Process Bulk Imported Files job in the job manager app. Every time the poller runs, it registers all `Pending` items in the queue and will continue to run until all the pending files at the time of polling are finished processing.

During this time, other scheduled occurrences of the queue poller job, Process Bulk Imported Files, may take place, but since there is already an instance of the file processor active, it will cancel itself. In the job manager app, this may look like an error that needs to be resolved but is normal behavior.