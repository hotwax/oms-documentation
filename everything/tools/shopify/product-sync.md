# Product Sync

This guide explains how to configure and run Shopify product sync jobs in HotWax Maarg.

---

The Shopify-to-OMS Product Synchronization Bulk Flow is an asynchronous, three-step process. First, the `queue_BulkQuerySystemMessage` job acts as the initiator, creating a system message that defines the criteria (such as specific IDs or date filters) for the products needed from Shopify.

Next, the `send_BulkProductAndVariantsByIdQuery` job acts as the dispatcher; it picks up these queued messages and transmits the required GraphQL bulk query to Shopify.

Finally, because Shopify processes this data asynchronously, the `poll_BulkOperationResult` job acts as the monitor and retriever. It repeatedly checks Shopify's status until the export is ready, at which point it downloads the resulting JSONL file and triggers the internal consumption service to parse and save the updated product and variant data into the HotWax OMS database.

## Product Sync Flow

<div align="center">

`queue_BulkQuerySystemMessage`  
↓  
System Message Created (`BulkProductAndVariantsByIdQuery`)  
↓  
`send_AllProducedSystemMessages`  
↓  
GraphQL Bulk Query Sent to Shopify  
↓  
Shopify Bulk Operation Started  
↓  
`poll_BulkOperationResult`  
↓  
JSONL File Downloaded  
↓  
Consume Service Processes Data  
↓  
Products and Variants Stored in OMS  

</div>

## Configurations required to set up product sync

Before syncing anything, you must tell HotWax where to connect and how. This is done by configuring some data in the `SystemMessageRemote` Entity. It acts like a bridge between your Shopify store and HotWax OMS.

## Configure SystemMessageRemote

Each Shopify store must be linked to a dedicated `SystemMessageRemote`. Below is the sample data to create the system message remote for the Shopify Shop.

In case you are setting up a Shopify shop from scratch, a remote is automatically created in the Maarg instance. Please verify that the remote has Read-Write access for that Shopify shop.

Here is the XML data to configure the Remote in Maarg.

**Sample Configuration**

```xml
<moqui.service.message.SystemMessageRemote
    systemMessageRemoteId="SHOP_CONFIG_OMS"  
    description="MyShopifyStore - Product Sync Connection."  
    sendUrl="https://{store-name}.myshopify.com/admin/api/${shopifyApiVersion}"  
    password="shpat_xxxxxxxxxxxxxx" <!-- Shopify Access Token -->  
    internalId="HW_SHOP_123" <!-- HotWax Shop ID -->  
    accessScopeEnumId="SHOP_RW_ACCESS"/>
```

**Key Field Breakdown**

| Field | Description |
| ---- | ---- |
| `systemMessageRemoteId` | Unique SHOP ID for Shopify Store (must be different per store). |
| `description` | A readable identifier for your shop. |
| `sendUrl` | Shopify Admin API URL. Replace placeholders with your store's domain and API version. |
| `password` | Shopify access token (`shpat_...`) – system-generated, fetched from Shopify Config Entity in Webtools. |
| `internalId` | HotWax Shop ID – manually created, found under the Shopify Shop page (hamburger menu in OMS). |
| `accessScopeEnumId` | Access level – typically set to `SHOP_RW_ACCESS` to allow both read/write operations. The exact value is in the Shopify Config Entity. |

This data will be entered in Maarg > Tools > Data Import > XML text.

## Enter common data

When setting up product sync initially, you also need to add this common XML data. This common data configures system message types and jobs for the product update feed in HotWax Commerce. It defines how product updates are generated, transformed, and consumed between SOB and OMS. The enumerations link the producer and consumer message types, while the service job schedules the sending of produced messages. This data is added to enable automated product update synchronization.

> [!NOTE]
> This common data should be added only during the initial setup of product synchronization.

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="ProductUpdatesFeedNew"
    description="Product Updates Feed New"                               
    consumeServiceName="co.hotwax.orderledger.system.FeedServices.consume#UpdatedProductHistories"/>

<moqui.basic.Enumeration description="Products Updates Feed" enumId="ProductUpdatesFeedNew" enumTypeId="OMSMessageTypeEnum"/>


<moqui.service.message.SystemMessageType systemMessageTypeId="GenerateOMSUpdateProductsFeedNew"
    description="Generate OMS Products Feed"
    sendServiceName="co.hotwax.sob.system.FeedServices.generate#OMSFeedNew"
    consumeServiceName="co.hotwax.orderledger.system.FeedServices.transform#JsonLToJsonForUpdatedProducts">
    <!-- Add the SystemMessageTypeParameters to skip product import, applicable on the virtual product fields
    <parameters parameterName="vendor" parameterValue="recurate"/>
    -->
</moqui.service.message.SystemMessageType>

<moqui.basic.Enumeration description="Generate OMS Update Products Feed" enumId="GenerateOMSUpdateProductsFeedNew" enumTypeId="SOBMessageTypeEnum" relatedEnumId="ProductUpdatesFeedNew" relatedEnumTypeId="OMSMessageTypeEnum"/>

<moqui.service.job.ServiceJob jobName="send_BulkProductAndVariantsByIdQueryProducedSystemMessages" description="Send All Bulk Product Variants By Id Query Produced SystemMessages"
    serviceName="org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages" cronExpression="0 1/15 * * * ?" paused="Y">
    <parameters parameterName="systemMessageTypeIds" parameterValue="BulkProductAndVariantsByIdQuery"/>
</moqui.service.job.ServiceJob>
```

## Product Sync Jobs

## queue_BulkQuerySystemMessage_BulkProductAndVariantsByIdQuery

**Purpose**:
Initial sync of all products from Shopify in bulk. This job is responsible for queuing a bulk GraphQL query to Shopify to fetch product and variant information by their IDs or specific filters.

When executed, it calls the Moqui service `co.hotwax.shopify.system.ShopifySystemMessageServices.queue#BulkQuerySystemMessage` with the system message type `BulkProductAndVariantsByIdQuery`. It prepares a system message that later gets sent to Shopify to initiate a bulk operation for exporting product and variant data.

**Steps to run manually:**

1. Go to Maarg: Application > System > Service > Jobs > Service Job List
2. Search for `queue_BulkQuerySystemMessage_BulkProductAndVariantsByIdQuery`.
3. Make sure that parameters are set (e.g., “systemMessageRemote”, “systemMessageTypeId”, etc.).
4. Run the job.

**Sample XML data to create this job:**

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
    <parameters parameterName="filterQuery" parameterValue=""/>
    <parameters parameterName="fromDate" parameterValue=""/>
    <parameters parameterName="thruDate" parameterValue=""/>
    <parameters parameterName="fromDateLabel" parameterValue=""/>
    <parameters parameterName="thruDateLabel" parameterValue=""/>
</moqui.service.job.ServiceJob>
```

## send_BulkProductAndVariantsByIdQueryProducedSystemMessages

**Purpose**:
This job is responsible for picking up queued (or "produced") system messages of the type `BulkProductAndVariantsByIdQuery` and sending them to Shopify to execute the bulk query operation. When this job runs, it invokes the core Moqui framework service `org.moqui.impl.SystemMessageServices.send#AllProducedSystemMessages`. 

This service checks the database for any system messages that have been created (produced) with the `systemMessageTypeIds` matching `BulkProductAndVariantsByIdQuery` but have not yet been successfully transmitted. It then processes these messages and sends their payload to the remote System.

**Steps to run manually:**

1. Go to Maarg: Application > System > Service > Jobs > Service Job List.
2. Search for `send_BulkProductAndVariantsByIdQueryProducedSystemMessages`.
3. Make sure that parameters are set (e.g., “systemMessageTypeId”).

**Sample XML data to create this job:**

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

## Poll bulk operation results

**Purpose**:
This job is responsible for tracking the status of asynchronous bulk query operations that have been sent to Shopify (such as those of type `ShopifyBulkQuery` / `BulkProductAndVariantsByIdQuery`) and retrieving their results once they are completed.

Because Shopify's Bulk API operates asynchronously, sending a GraphQL bulk query does not return the data immediately; it returns an operation ID. The `poll_BulkOperationResult_ShopifyBulkQuery` job runs on a schedule to "poll" (repeatedly check) Shopify for the completion status of these active operations. Once Shopify indicates that the bulk operation is COMPLETED, this job downloads the resulting file containing the requested data and triggers the consumption service(`consume#BulkOperationResult`) to process it.

**Steps to run manually:**

1. Go to Maarg > Application > System > Service > Jobs > Service Job List.
2. Search for `poll_BulkOperationResult_ShopifyBulkQuery`.
3. Verify that parameters are set (e.g., `consumeSrmId`, `parentSystemMessageTypeId`).

**Sample XML data to create this job:**

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
