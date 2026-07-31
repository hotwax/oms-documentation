# Shopify product sync

Shopify product sync imports products and variants from Shopify into HotWax Commerce. The current flow uses a Shopify bulk query, a single `BulkQueryShopifyProductUpdates` system message, and the `SYNC_SHOPIFY_PRODUCT` Data Manager configuration.

Use the Company app to configure and run product sync when it is available. Use Job Manager and System Message views to verify or troubleshoot the same backend flow.

## Before you start

Verify the following configuration:

- The Shopify shop is enabled and linked to the correct HotWax Commerce Product Store.
- The Product Store has a product identifier configured.
- A `SystemMessageRemote` links the Shopify shop to the HotWax shop. Its `internalId` must match the `shopId` used by the product sync job.
- The remote has valid Shopify credentials and `SHOP_RW_ACCESS`. Shopify bulk queries use a GraphQL mutation to start the export, so read-only access is not sufficient.
- The current component seed and upgrade data have created the `BulkQueryShopifyProductUpdates` system message type and `SYNC_SHOPIFY_PRODUCT` Data Manager configuration.

## Configure product sync

### Use the Company app

1. Open the Company app and go to `Shopify`.
2. Select the Shopify connection.
3. Under `Configuration`, verify the Product Store, API credentials, and access scopes.
4. Under `Products and Inventory`, open `Product sync`.
5. Complete the readiness checks and configure the schedule.
6. Start the first full-catalog sync from the Product sync page.

If the Company app shows an upgrade notice, use the Product Sync Upgrade Assistant before configuring the current flow. The assistant checks legacy messages and configuration before it deactivates the older product sync.

### Verify the Shopify remote

The Company app creates and maintains the Shopify `SystemMessageRemote`. If you must provision the record through `Tools` > `Data Import` > `XML Text`, use a valid XML record such as the following example and replace every placeholder:

```xml
<moqui.service.message.SystemMessageRemote
    systemMessageRemoteId="SHOP_ID_REMOTE"
    description="Shopify product sync for Store Name"
    sendUrl="https://store-name.myshopify.com"
    sendSharedSecret="shpat_REPLACE_WITH_ACCESS_TOKEN"
    authHeaderName="X-Shopify-Access-Token"
    remoteId="SHOPIFY_NUMERIC_SHOP_ID"
    remoteIdType="SHOPIFY_SHOP_ID"
    internalId="SHOP_ID"
    internalIdType="HOTWAX_SHOP_ID"
    accessScopeEnumId="SHOP_RW_ACCESS"/>
```

Never commit or share a live Shopify access token.

| Field | Required value |
| --- | --- |
| `systemMessageRemoteId` | Unique identifier for the Shopify remote. |
| `sendUrl` | Shopify store domain. The connector adds the configured API version and GraphQL path. |
| `sendSharedSecret` | Shopify access token. |
| `authHeaderName` | `X-Shopify-Access-Token`. |
| `remoteId` | Shopify shop ID. |
| `internalId` | HotWax `shopId`; this value connects the sync job to the remote. |
| `accessScopeEnumId` | `SHOP_RW_ACCESS`. |

### Verify the service jobs

Product sync uses one shop-specific job and two shared jobs:

| Job | Scope | Purpose |
| --- | --- | --- |
| `sync_ShopifyProductUpdates_<shopId>` | One job per Shopify shop | Calls `co.hotwax.shopify.product.ShopifyProductServices.sync#ShopifyProductUpdates` and queues the product export request. It is cloned from the `sync_ShopifyProductUpdates` template and must have the correct `shopId` parameter. |
| `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` | Shared | Sends the oldest produced Shopify bulk query when no other Shopify bulk query is in progress. |
| `poll_ShopifyBulkOperationResult` | Shared | Checks Shopify for a completed bulk operation, downloads the JSON Lines file, and starts file consumption. |

Do not create shop-specific copies of the shared send and poll jobs.

## Understand the current flow

The current product sync has seven processing stages:

| Stage | Processing |
| --- | --- |
| 1. Queue the request | `sync_ShopifyProductUpdates_<shopId>` creates a `BulkQueryShopifyProductUpdates` system message with status `SmsgProduced`. |
| 2. Send the request | `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` starts the Shopify bulk query and changes the message to `SmsgSent`. The Shopify bulk operation ID is stored in `remoteMessageId`. |
| 3. Confirm the operation | `poll_ShopifyBulkOperationResult` checks the operation. A `bulk_operations/finish` webhook can trigger the same result processor earlier. |
| 4. Prepare the data | `process#ShopifyBulkOperationResult` downloads the JSON Lines file, and `consume#ShopifyProductDataFile` transforms it into JSON and uploads it to Data Manager. |
| 5. Compute differences | Data Manager configuration `SYNC_SHOPIFY_PRODUCT` compares the incoming data with `ProductUpdateHistory`. |
| 6. Update the database | `co.hotwax.sob.product.ProductServices.sync#ShopifyProduct` creates or updates the affected products and variants. |
| 7. Save history | The import stores new hashes, snapshots, and difference data in `ProductUpdateHistory` for the next incremental sync. |

The system message normally moves through:

`SmsgProduced` → `SmsgSent` → `SmsgReceived` → `SmsgConsumed`

`SmsgConsumed` confirms that the result file was handed to Data Manager. Confirm the final import result in the `SYNC_SHOPIFY_PRODUCT` Data Manager log.

## Run and verify a sync

1. Open the Company app Product sync page for the Shopify connection.
2. Start the sync or wait for `sync_ShopifyProductUpdates_<shopId>` to run on its schedule.
3. In the System Message view, find the new `BulkQueryShopifyProductUpdates` message for the shop's `SystemMessageRemote`.
4. Verify that the message receives a `remoteMessageId` and advances from `SmsgProduced` to `SmsgSent`.
5. Verify that the message reaches `SmsgConsumed`.
6. Open the Data Manager logs and filter by configuration ID `SYNC_SHOPIFY_PRODUCT`.
7. Verify that the related log completes and review its processed, imported, and failed record counts.
8. Confirm the expected product or variant in HotWax Commerce and verify its `ProductUpdateHistory`.

## Troubleshoot by processing stage

| Symptom | Check |
| --- | --- |
| No system message is created | Verify the shop-specific job name and `shopId`, the Shopify shop mapping, and the remote's `internalId`. The queue service returns `No active SystemMessageRemote found for Shopify Shop [<shopId>]` when it cannot resolve the remote. |
| The message remains `SmsgProduced` | Verify that `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` is enabled. The sender stops when another Shopify bulk query is already `SmsgSent` and reports `Aborting, ShopifyBulkQuery Operation already in progress.` |
| The message remains `SmsgSent` | Verify that `poll_ShopifyBulkOperationResult` is enabled and inspect the latest Shopify operation status or system message error. |
| The bulk query cannot start | Verify `SHOP_RW_ACCESS`, the access token, and the store domain. Read-only access returns `Cannot post graphQL mutation, only read access is enabled`. |
| The system message is consumed but products are missing | Inspect the related `SYNC_SHOPIFY_PRODUCT` Data Manager log and failed-record file. System message completion does not prove that every Data Manager record imported successfully. |

## Migrate from the legacy flow

Older installations can contain the following product sync records:

- `BulkProductAndVariantsByIdQuery`
- `GenerateOMSUpdateProductsFeedNew`
- `ProductUpdatesFeedNew`
- `queue_BulkQuerySystemMessage_BulkProductAndVariantsById`
- `send_BulkProductAndVariantsByIdQueryProducedSystemMessages`
- `poll_BulkOperationResult_ShopifyBulkQuery`
- `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages`
- `consume_ProductUpdatesFeedNewReceivedSystemMessages`

These records belong to the legacy product feed and must not be presented as the current setup.

| Legacy record | Current replacement |
| --- | --- |
| `BulkProductAndVariantsByIdQuery` | `BulkQueryShopifyProductUpdates` |
| `queue_BulkQuerySystemMessage_BulkProductAndVariantsById` | `sync_ShopifyProductUpdates_<shopId>` |
| `send_BulkProductAndVariantsByIdQueryProducedSystemMessages` | `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` |
| `poll_BulkOperationResult_ShopifyBulkQuery` | `poll_ShopifyBulkOperationResult` |
| `GenerateOMSUpdateProductsFeedNew` and `ProductUpdatesFeedNew` | Direct file consumption through `SYNC_SHOPIFY_PRODUCT` |

Use the Product Sync Upgrade Assistant to inspect unfinished legacy messages and apply the supported migration. Do not delete shared legacy Shopify jobs or enable both pollers without first checking the other Shopify bulk-query types used by the tenant.
