# Data manager

The Data Manager offering users the ability to audit data ingress and egress from the OMS while also being able to manually import and export data.

Getting to the Data Manager Configurations page:
1. Go to the Hamburger Menu
2. Select `Settings`
3. Click on `Data Manager Configurations`

Key features and functionalities include:
1. **Manual Data Import and Export:** Manually import or extract data as needed.
2. **Multithreaded:** Import large amounts of data at high speeds to keep the OMS in sync with external systems.
3. **Error notifications:** Automatically get notified when an error occures during import.
4. **Audit imported data:** Audit imported files as they were provided, ensuring tracability.

## MDM under the hood
Understanding the inner workings of the OMS MDM is essential to building scalable integrations, troubleshooting integrations and ammending corrupted data.

### Configurations
A data manager configuration represents the import settings for a type of data. For example, importing a sales orders from Shopify, fulfillment from a 3PL, or inventory from a POS are all seperate configurations because they are all importing something different.

The primary function of a configuration is defined by the import and export services configured in it. Looking at the examples from above here is how that would work:

| Config Name | Import service |
|-------------|----------------|
| Import orders from Shopify | importShopifyOrders |
| Import order fulfillment from 3PL | fulfillOrderItem |
| Reset inventory from POS | resetInventoryByIdentification |

Looking at this example, you'll notice that the Shopify order import service name is very specific to Shopify but the other two are generic OMS functions. This is because Shopify is a native integration of the OMS and has dedicated import services that Shopify's JSON structure unmodified and handle data transformation before actual ingestion internally.

Most configurations you'll find in the OMS will be for generic import services, not specific to any named system. This indicates that any transformation needed to align the data format with what the OMS can consume is done in a middleware platform.

A benefit of generic imports is that they can be used by multiple systems. For example, resetting inventory in the monrning. Many retailers will connect the OMS to their POS and WMS to pull inventory and techincially both of them are importing the same kind of data into the OMS with the same intent.

To better accomodate this kind of setup, all we'll need to do is rename the POS inventory import from before:

| Config Name | Import service |
|-------------|----------------|
| Import orders from Shopify | importShopifyOrders |
| Import order fulfillment from 3PL | fulfillOrderItem |
| Reset inventory (stirkethrough) from POS | resetInventoryByIdentification |

### Available functions
The MDM becomes really powerful once you understand that any service in the OMS can be turned into a data manager configuration.

Essentially what happens when you assign an import service to an MDM, is the OMS uses that service to loop through the file submitted to it row by row. When setting up an integration, enriching data in the OMS, or fixing corrupted data, this allows you to quickly turn any simple function into a bulk function with multi-threading and transaction managment.

To make the MDM more approachable for starters, we've identified the most commonly used configurations and organized them on the EXIM (Export Imort) page. You can see all configurations though in the Data Manager Configurations page.

We aim to soon publish a more comprehensive list of available servieces in the MDM.

### Execution
The MDM is one unified import queue across all configurations. When a file is added to the MDM to be processed, the OMS looks at it's execution mode to determine how to prioritize it. You have three options to choose from when setting up a configuration.

1. **Queued:** Queued configurations will respect the FIFO order of the entire MDM.
2. **Sync:** Files uploaded to a configuration set to execute in sync will be processed immediatly by the OMS. Uploading large files to a configuration set to excute in sync will almost certainly be fatal because it will demand the OMS route all required resources too process the file immedietly. As a general rule, just don't use this setting unless very specifically instructed.
3. **Async:** Similar to sync, these configurations will not follow the FIFO order that queued imports follow. Instead, an async import will process in the background when threads are available.

To understand how these work in practice lets look at an example.

Here are the three configurtions we have setup for import

| Config | Import service | Execution mode |
|--------|----------------|----------------|
| Import Shopify orders | importShopifyOrders | Queued |
| Import order fulfillment | fulfillOrderItem | Async |
| Reset inventory | resetInventoryByIdentification | Queued |

Most retailers reset the invenotry in the OMS every morning for all products at every location. At this time there may be some customers placing orders on Shopify but probably no fulfillment happening. 

Here is an example MDM state at this point:

| Config | Import service | Execution mode |
|--------|----------------|----------------|
| Import Shopify orders | importShopifyOrders | Queued |
| Import order fulfillment | fulfillOrderItem | Async |
| Reset inventory | resetInventoryByIdentification | Queued |