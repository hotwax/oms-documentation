# Product Sync

This guide explains how to configure and run Shopify product sync jobs in HotWax Commerce.

---

The Shopify-to-HotWax product sync is an asynchronous, five-step process driven by a chain of system messages and service jobs.

1. `queue_BulkQuerySystemMessage_BulkProductAndVariantsById` creates a `BulkProductAndVariantsByIdQuery` system message that holds the product query criteria, such as specific IDs or date filters.
2. `send_BulkProductAndVariantsByIdQueryProducedSystemMessages` picks up that message and transmits a GraphQL bulk query to Shopify to start the export.
3. `poll_BulkOperationResult_ShopifyBulkQuery` polls Shopify until the bulk operation completes. It then downloads the resulting JSONL file and creates a `GenerateOMSUpdateProductsFeedNew` system message.
4. `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages` processes that message, transforms the raw JSONL data into a structured product diff, updates product history, and creates a `ProductUpdatesFeedNew` system message.
5. `consume_ProductUpdatesFeedNewReceivedSystemMessages` consumes that final message and creates or updates products and variants in HotWax Commerce.

## Product Sync Flow
<div align="center">

`queue_BulkQuerySystemMessage_BulkProductAndVariantsById` <br>
↓ <br>
`BulkProductAndVariantsByIdQuery` system message created <br>
↓ <br>
`send_BulkProductAndVariantsByIdQueryProducedSystemMessages` <br>
↓ <br>
GraphQL bulk query sent to Shopify <br>
↓ <br>
Shopify bulk operation running <br>
↓ <br>
`poll_BulkOperationResult_ShopifyBulkQuery` <br>
↓ <br>
JSONL file downloaded → `GenerateOMSUpdateProductsFeedNew` system message created <br>
↓ <br>
`send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages` <br>
↓ <br>
JSONL transformed, product history updated → `ProductUpdatesFeedNew` system message created <br>
↓ <br>
`consume_ProductUpdatesFeedNewReceivedSystemMessages` <br>
↓ <br>
Products and variants created or updated in HotWax Commerce

</div>

## System messages overview

| System message type | Created by | Processed by | Role |
| --- | --- | --- | --- |
| `BulkProductAndVariantsByIdQuery` | `queue_BulkQuerySystemMessage_BulkProductAndVariantsById` | `send_BulkProductAndVariantsByIdQueryProducedSystemMessages` | Holds the GraphQL bulk query request sent to Shopify. |
| `GenerateOMSUpdateProductsFeedNew` | `poll_BulkOperationResult_ShopifyBulkQuery` | `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages` | Triggers transformation of the downloaded JSONL file and updates product history. |
| `ProductUpdatesFeedNew` | `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages` | `consume_ProductUpdatesFeedNewReceivedSystemMessages` | Carries the final product diff to be applied in HotWax Commerce. |

## Configurations required to set up product sync

Before syncing products, you must configure the connection between Shopify and HotWax Commerce. This is done in the `SystemMessageRemote` entity.

## Configure SystemMessageRemote

Each Shopify store must be linked to a dedicated `SystemMessageRemote`. If you are setting up a Shopify shop from scratch, a remote is automatically created in HotWax. Verify that the remote has read-write access for that Shopify shop.

**Sample configuration**

```xml
<moqui.service.message.SystemMessageRemote
    systemMessageRemoteId="SHOP_CONFIG_OMS"  
    description="MyShopifyStore - Product Sync Connection."  
    sendUrl="https://{store-name}.myshopify.com/admin/api/${shopifyApiVersion}"  
    password="shpat_xxxxxxxxxxxxxx" <!-- Shopify Access Token -->  
    internalId="HW_SHOP_123" <!-- HotWax Shop ID -->  
    accessScopeEnumId="SHOP_RW_ACCESS"/>
```

**Key field breakdown**

| Field | Description |
| ---- | ---- |
| **systemMessageRemoteId:** | Unique shop ID for Shopify store. |
| **description:** | Readable identifier for your shop. |
| **sendUrl:** | Shopify Admin API URL. |
| **password:** | Shopify access token (`shpat_...`). |
| **internalId:** | HotWax shop ID. |
| **accessScopeEnumId:** | Access level, typically set to `SHOP_RW_ACCESS`. |

Enter this data in HotWax by navigating to `Tools` > `Data Import` > `XML Text`.

## Enter common data

When setting up product sync initially, you must add this common XML data. This data configures system message types and jobs for the product update feed in HotWax Commerce. It defines how product updates are generated, transformed, and consumed. The enumerations link the producer and consumer message types, while the service jobs schedule the synchronization.

> [!NOTE]
> Add this common data only during the initial setup of product synchronization.

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="ProductUpdatesFeedNew"
    description="Product Updates Feed New"                               
    consumeServiceName="co.hotwax.orderledger.system.FeedServices.consume#UpdatedProductHistories"/>

<moqui.basic.Enumeration description="Products Updates Feed" enumId="ProductUpdatesFeedNew" enumTypeId="OMSMessageTypeEnum"/>


<moqui.service.message.SystemMessageType systemMessageTypeId="GenerateOMSUpdateProductsFeedNew"
    description="Generate OMS Products Feed"
    sendServiceName="co.hotwax.sob.system.FeedServices.generate#OMSFeedNew"
    consumeServiceName="co.hotwax.orderledger.system.FeedServices.transform#JsonLToJsonForUpdatedProducts">
</moqui.service.message.SystemMessageType>

<moqui.basic.Enumeration description="Generate OMS Update Products Feed" enumId="GenerateOMSUpdateProductsFeedNew" enumTypeId="SOBMessageTypeEnum" relatedEnumId="ProductUpdatesFeedNew" relatedEnumTypeId="OMSMessageTypeEnum"/>

<moqui.basic.Enumeration description="Bulk Product And Variants By Id Query" enumId="BulkProductAndVariantsByIdQuery" enumTypeId="ShopifyMessageTypeEnum" relatedEnumId="GenerateOMSUpdateProductsFeedNew" relatedEnumTypeId="ShopifyMessageTypeEnum"/>


<moqui.service.job.ServiceJob jobName="send_BulkProductAndVariantsByIdQueryProducedSystemMessages" description="Send All Bulk Product Variants By Id Query Produced SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages" cronExpression="0 1/15 * * * ?" paused="Y">
    <parameters parameterName="systemMessageTypeIds" parameterValue="BulkProductAndVariantsByIdQuery"/>
</moqui.service.job.ServiceJob>

<moqui.service.job.ServiceJob 
    jobName="send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages"
    description="Send Generate OMS Product Feed Produced SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages"
    cronExpression="0 11/15 * * * ?" paused="Y">

    <parameters parameterName="systemMessageTypeIds" 
                parameterValue="GenerateOMSUpdateProductsFeedNew"/>
</moqui.service.job.ServiceJob>

<moqui.service.job.ServiceJob 
    jobName="consume_ProductUpdatesFeedNewReceivedSystemMessages"
    description="Consume Product Updates Feed Received SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.consume#AllReceivedSystemMessages"
    cronExpression="0 16/15 * * * ?" paused="Y">

    <parameters parameterName="systemMessageTypeIds" 
                parameterValue="ProductUpdatesFeedNew"/>
</moqui.service.job.ServiceJob>
```

## Product sync jobs

## Queue Bulk Query System Message Bulk Product and Variant by Id Query 

**Purpose:**
This job starts the product synchronization process.

When the job runs, it creates a request asking Shopify for product and variant data. Instead of downloading the data immediately, the job simply creates a system message that contains the request.

This request uses Shopify’s Bulk GraphQL API, which allows many products to be fetched at once.

The created message is stored in the system and will later be picked up by another job that sends the request to Shopify.

**Manual steps:**

1. Navigate to Maarg: `Application` > `System` > `Service` > `Jobs` > `Service Job List`.
2. Search for `queue_BulkQuerySystemMessage_BulkProductAndVariantsById`.
3. Verify that parameters like `systemMessageRemote` and `systemMessageTypeId` are set.
4. Run the job.

**Sample XML data:**

```xml
<moqui.service.job.ServiceJob 
    jobName="queue_BulkQuerySystemMessage_BulkProductAndVariantsById"
    description="Queue bulk products query"
    serviceName="co.hotwax.shopify.system.ShopifySystemMessageServices.queue#BulkQuerySystemMessage"
    cronExpression="0 0/15 * * * ?"
    paused="Y"
    instanceOfProductId="QUEUE_UPD_PRD_FEED">

    <parameters parameterName="systemMessageTypeId" parameterValue="BulkProductAndVariantsByIdQuery"/>
    <parameters parameterName="systemMessageRemoteId" parameterValue="RMT_ID"/>
</moqui.service.job.ServiceJob>
```

## Send Bulk Product And Variants By ID Query

**Purpose:**
Sends the queued GraphQL query to Shopify. This job picks up "produced" system messages of the type `BulkProductAndVariantsByIdQuery` and transmits them to Shopify to start the bulk operation.

**Manual steps:**

1. Navigate to Maarg: `Application` > `System` > `Service` > `Jobs` > `Service Job List`.
2. Search for `send_BulkProductAndVariantsByIdQueryProducedSystemMessages`.
3. Verify the `systemMessageTypeId` parameter.
4. Run the job.

**Sample XML data:**

```xml
<moqui.service.job.ServiceJob 
    jobName="send_BulkProductAndVariantsByIdQueryProducedSystemMessages"
    description="Send All Bulk Product Variants By Id Query Produced SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages"
    cronExpression="0 1/15 * * * ?" paused="Y">

    <parameters parameterName="systemMessageTypeIds" 
                parameterValue="BulkProductAndVariantsByIdQuery"/>
</moqui.service.job.ServiceJob>
```

## Poll Bulk Operation Result Shopify Bulk Query

**Purpose:**
Monitors the status of the bulk query operation in Shopify. Since Shopify processes these requests asynchronously, this job repeatedly checks for completion. Once the operation is complete, the job downloads the JSONL file containing the product data.

**Manual steps:**

1. Navigate to Maarg: `Application` > `System` > `Service` > `Jobs` > `Service Job List`.
2. Search for `poll_BulkOperationResult_ShopifyBulkQuery`.
3. Verify that parameters like `consumeSrmId` and `parentSystemMessageTypeId` are set.
4. Run the job.

**Sample XML data:**

```xml
<moqui.service.job.ServiceJob 
    jobName="poll_BulkOperationResult_ShopifyBulkQuery"
    description="Poll current bulk operation query result Shopify Shop."
    serviceName="co.hotwax.shopify.system.ShopifySystemMessageServices.poll#BulkOperationResult"
    cronExpression="0 6/15 * * * ?" paused="Y">

    <parameters parameterName="parentSystemMessageTypeId" 
                parameterValue="ShopifyBulkQuery"/>
</moqui.service.job.ServiceJob>
```

## Send Generate OMS Update Product Feed New Produced System Message

**Purpose:**
Processes `GenerateOMSUpdateProductsFeedNew` system messages created by `poll_BulkOperationResult_ShopifyBulkQuery`. This job reads the downloaded JSONL file, compares incoming product data against stored product history, and builds a structured diff of what has changed. Once processing is complete, it creates a `ProductUpdatesFeedNew` system message to trigger the final update in HotWax Commerce.

**Manual steps:**

1. Navigate to Maarg: `Application` > `System` > `Service` > `Jobs` > `Service Job List`.
2. Search for `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages`.
3. Verify the `systemMessageTypeId` parameter.
4. Run the job.

**Sample XML data:**

```xml
<moqui.service.job.ServiceJob 
    jobName="send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages"
    description="Send Generate OMS Product Feed Produced SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages"
    cronExpression="0 11/15 * * * ?" paused="Y">

    <parameters parameterName="systemMessageTypeIds" 
                parameterValue="GenerateOMSUpdateProductsFeedNew"/>
</moqui.service.job.ServiceJob>
```

## Consume Product Updates Feed New Received System Messages

**Purpose:**
Processes `ProductUpdatesFeedNew` system messages created by `send_GenerateOMSUpdateProductsFeedNewProducedSystemMessages`. This job reads the product diff built in the previous step and applies it in HotWax Commerce, creating new products or updating existing ones along with their variants.

**Manual steps:**

1. Navigate to Maarg: `Application` > `System` > `Service` > `Jobs` > `Service Job List`.
2. Search for `consume_ProductUpdatesFeedNewReceivedSystemMessages`.
3. Verify the `systemMessageTypeId` parameter.
4. Run the job.

**Sample XML data:**

```xml
<moqui.service.job.ServiceJob 
    jobName="consume_ProductUpdatesFeedNewReceivedSystemMessages"
    description="Consume Product Updates Feed Received SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.consume#AllReceivedSystemMessages"
    cronExpression="0 16/15 * * * ?" paused="Y">

    <parameters parameterName="systemMessageTypeIds" 
                parameterValue="ProductUpdatesFeedNew"/>
</moqui.service.job.ServiceJob>
```
