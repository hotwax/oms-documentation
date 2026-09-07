---
description: >-
  Every object, field, edge, search key, and sort key the HotWax Commerce OMS
  GraphQL API currently serves.
---

# Schema reference

<!-- markdownlint-disable MD024 -->
<!--
  GENERATED FILE - do not edit by hand.
  Regenerate with: node src/graphql/generate-schema-reference.mjs --instance <url>
  Source: https://dev-maarg.hotwax.io/rest/s1/graphql/sdl
-->

Generated from the SDL published at `/rest/s1/graphql/sdl` by `https://dev-maarg.hotwax.io/rest/s1/graphql/sdl`.
This page is produced by a script from the schema itself, so it lists what the API serves
today rather than what was planned. For how to read and page these objects, start with the
[GraphQL API overview](README.md) and [query examples](queries.md).

## Query roots

### Single-record roots

| Root | Returns | Arguments |
| ---- | ------- | --------- |
| `facility` | [Facility](#facility) | `externalId: String`, `facilityId: ID` |
| `inventoryItem` | [InventoryItem](#inventoryitem) | `inventoryItemId: ID` |
| `order` | [Order](#order) | `externalId: String`, `orderId: ID` |
| `orderByIdentification` | [Order](#order) | `idValue: String`, `identificationTypeId: String` |
| `party` | [Party](#party) | `externalId: String`, `partyId: ID` |
| `product` | [Product](#product) | `productId: ID` |
| `productStore` | [ProductStore](#productstore) | `productStoreId: ID` |
| `return` | [Return](#return) | `externalId: String`, `returnId: ID` |
| `returnByIdentification` | [Return](#return) | `idValue: String`, `identificationTypeId: String` |
| `serviceJob` | [ServiceJob](#servicejob) | `jobName: ID` |
| `shipment` | [Shipment](#shipment) | `externalId: String`, `shipmentId: ID` |
| `shopifyShop` | [ShopifyShop](#shopifyshop) | `shopId: ID` |

Where a root accepts both an ID and an `externalId`, pass exactly one of them.

### Collection roots

Every collection root accepts `first`/`after` for forward paging, `last`/`before` for
backward paging, a `query:` filter string, and `sortKey` with `reverse`. A page size is
required and is capped at 100.

#### `facilities`

Returns a paged collection of [Facility](#facility).

| | |
| --- | --- |
| Search keys | `facilityId`, `facilityTypeId`, `externalId`, `parentFacilityId` |
| Sort keys | `FACILITY_ID`, `FACILITY_NAME` |
| Sort enum | `FacilitySortKey` |

#### `goodIdentifications`

Returns a paged collection of [GoodIdentification](#goodidentification).

| | |
| --- | --- |
| Search keys | `productId`, `goodIdentificationTypeId`, `idValue` |
| Sort keys | `FROM_DATE` |
| Sort enum | `GoodIdentificationSortKey` |

#### `inventoryItems`

Returns a paged collection of [InventoryItem](#inventoryitem).

| | |
| --- | --- |
| Search keys | `inventoryItemId`, `productId`, `facilityId`, `statusId`, `serialNumber` |
| Sort keys | `INVENTORY_ITEM_ID` |
| Sort enum | `InventoryItemSortKey` |

#### `inventoryLevels`

Returns a paged collection of [InventoryLevel](#inventorylevel).

| | |
| --- | --- |
| Search keys | `productId`, `facilityId` |
| Sort keys | `FACILITY_ID`, `PRODUCT_ID` |
| Sort enum | `InventoryLevelSortKey` |

#### `orders`

Returns a paged collection of [Order](#order).

| | |
| --- | --- |
| Search keys | `orderId`, `externalId`, `orderName`, `statusId`, `orderDate`, `productStoreId` |
| Sort keys | `GRAND_TOTAL`, `ORDER_DATE`, `ORDER_ID`, `ORDER_NAME` |
| Sort enum | `OrderSortKey` |

#### `parties`

Returns a paged collection of [Party](#party).

| | |
| --- | --- |
| Search keys | `partyId`, `externalId`, `firstName`, `lastName`, `roleTypeId` |
| Sort keys | `LAST_NAME`, `PARTY_ID` |
| Sort enum | `PartySortKey` |

#### `productAttributes`

Returns a paged collection of [ProductAttribute](#productattribute).

| | |
| --- | --- |
| Search keys | `productId`, `attrName`, `attrType` |
| Sort keys | `ATTR_NAME` |
| Sort enum | `ProductAttributeSortKey` |

#### `productFeatureAppls`

Returns a paged collection of [ProductFeatureAppl](#productfeatureappl).

| | |
| --- | --- |
| Search keys | `productId`, `productFeatureApplTypeId` |
| Sort keys | `SEQUENCE_NUM` |
| Sort enum | `ProductFeatureApplSortKey` |

#### `productKeywords`

Returns a paged collection of [ProductKeyword](#productkeyword).

| | |
| --- | --- |
| Search keys | `productId`, `keywordTypeId`, `statusId` |
| Sort keys | `KEYWORD` |
| Sort enum | `ProductKeywordSortKey` |

#### `productPrices`

Returns a paged collection of [ProductPrice](#productprice).

| | |
| --- | --- |
| Search keys | `productId`, `productPriceTypeId`, `productPricePurposeId` |
| Sort keys | `FROM_DATE` |
| Sort enum | `ProductPriceSortKey` |

#### `productStores`

Returns a paged collection of [ProductStore](#productstore).

| | |
| --- | --- |
| Search keys | `productStoreId`, `storeName`, `inventoryFacilityId` |
| Sort keys | `PRODUCT_STORE_ID`, `STORE_NAME` |
| Sort enum | `ProductStoreSortKey` |

#### `products`

Returns a paged collection of [Product](#product).

| | |
| --- | --- |
| Search keys | `productId`, `productTypeId`, `primaryProductCategoryId`, `brandName` |
| Sort keys | `PRODUCT_ID`, `PRODUCT_NAME` |
| Sort enum | `ProductSortKey` |

#### `returns`

Returns a paged collection of [Return](#return).

| | |
| --- | --- |
| Search keys | `returnId`, `statusId`, `fromPartyId`, `entryDate` |
| Sort keys | `RETURN_DATE`, `RETURN_ID`, `STATUS` |
| Sort enum | `ReturnSortKey` |

#### `serviceJobs`

Returns a paged collection of [ServiceJob](#servicejob).

| | |
| --- | --- |
| Search keys | `jobName`, `serviceName`, `paused` |
| Sort keys | `JOB_NAME` |
| Sort enum | `ServiceJobSortKey` |

#### `shipments`

Returns a paged collection of [Shipment](#shipment).

| | |
| --- | --- |
| Search keys | `shipmentId`, `statusId`, `originFacilityId`, `shipmentMethodTypeId`, `estimatedShipDate` |
| Sort keys | `SHIPMENT_ID`, `SHIPPED_DATE`, `STATUS` |
| Sort enum | `ShipmentSortKey` |

#### `shopifyShopProducts`

Returns a paged collection of [ShopifyShopProduct](#shopifyshopproduct).

| | |
| --- | --- |
| Search keys | `shopId`, `productId`, `shopifyProductId` |
| Sort keys | `PRODUCT_ID` |
| Sort enum | `ShopifyShopProductSortKey` |

#### `shopifyShops`

Returns a paged collection of [ShopifyShop](#shopifyshop).

| | |
| --- | --- |
| Search keys | `shopId`, `myshopifyDomain`, `productStoreId`, `isEnabled` |
| Sort keys | `NAME`, `SHOP_ID` |
| Sort enum | `ShopifyShopSortKey` |

## Objects

Scalar fields are plain values. An **object** field returns one related record. A
**collection** field is a paged connection and needs its own `first:`. A **list** field
returns a bounded array with no cursors.

### BillToCustomer

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `firstName` | `String` | scalar | — |
| `lastName` | `String` | scalar | — |
| `partyId` | `ID` | scalar | — |

### Facility

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `externalId` | `String` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `facilityName` | `String` | scalar | — |
| `facilityTypeId` | `String` | scalar | — |
| `parentFacilityId` | `String` | scalar | — |

### FacilityOriginAddress

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `address1` | `String` | scalar | — |
| `address2` | `String` | scalar | — |
| `city` | `String` | scalar | — |
| `countryGeoId` | `String` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `latitude` | `Decimal` | scalar | — |
| `longitude` | `Decimal` | scalar | — |
| `postalCode` | `String` | scalar | — |
| `stateProvinceGeoId` | `String` | scalar | — |

### GoodIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `goodIdentificationTypeId` | `String` | scalar | — |
| `idValue` | `String` | scalar | — |
| `productId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### InventoryItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `accountingQuantityTotal` | `Decimal` | scalar | — |
| `availableToPromiseTotal` | `Decimal` | scalar | — |
| `currencyUomId` | `String` | scalar | — |
| `datetimeReceived` | `DateTime` | scalar | — |
| `expireDate` | `DateTime` | scalar | — |
| `facilityId` | `String` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `inventoryItemTypeId` | `String` | scalar | — |
| `locationSeqId` | `String` | scalar | — |
| `lotId` | `String` | scalar | — |
| `ownerPartyId` | `String` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantityOnHandTotal` | `Decimal` | scalar | — |
| `serialNumber` | `String` | scalar | — |
| `softIdentifier` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `unitCost` | `Decimal` | scalar | — |

### InventoryLevel

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `availableToPromise` | `Decimal` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `quantityOnHand` | `Decimal` | scalar | — |

### Order

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `adjustments` | `[OrderAdjustment!]!` | list | Bounded list of [OrderAdjustment](#orderadjustment); optional `first:`. |
| `billToCustomer` | `BillToCustomer` | object | One [BillToCustomer](#billtocustomer). |
| `currencyUomId` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |
| `grandTotal` | `Decimal` | scalar | — |
| `identifications` | `[OrderIdentification!]!` | list | Bounded list of [OrderIdentification](#orderidentification); optional `first:`. |
| `orderDate` | `DateTime` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemCount` | `Int` | scalar | — |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `orderName` | `String` | scalar | — |
| `paymentPreferences` | `[OrderPaymentPreference!]!` | list | Bounded list of [OrderPaymentPreference](#orderpaymentpreference); optional `first:`. |
| `productStoreId` | `String` | scalar | — |
| `shipGroups` | `ShipGroup connection` | collection | Paged; requires `first:`. Nodes are [ShipGroup](#shipgroup). |
| `statusId` | `String` | scalar | — |
| `statuses` | `[OrderStatus!]!` | list | Bounded list of [OrderStatus](#orderstatus); optional `first:`. |

### OrderAdjustment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `amount` | `Decimal` | scalar | — |
| `comments` | `String` | scalar | — |
| `orderAdjustmentId` | `ID` | scalar | — |
| `orderAdjustmentTypeId` | `String` | scalar | — |

### OrderFacilityChange

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `changeDatetime` | `DateTime` | scalar | — |
| `changeReasonEnumId` | `String` | scalar | — |
| `comments` | `String` | scalar | — |
| `facilityId` | `String` | scalar | — |
| `fromFacilityId` | `String` | scalar | — |
| `orderFacilityChangeId` | `ID` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |

### OrderIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `idValue` | `String` | scalar | — |
| `orderIdentificationTypeId` | `ID` | scalar | — |

### OrderItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `externalId` | `String` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantity` | `Int` | scalar | — |
| `statusId` | `String` | scalar | — |
| `unitPrice` | `Decimal` | scalar | — |

### OrderPaymentPreference

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `maxAmount` | `Decimal` | scalar | — |
| `orderPaymentPreferenceId` | `ID` | scalar | — |
| `paymentMethodTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### OrderStatus

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderItemSeqId` | `String` | scalar | — |
| `statusDatetime` | `DateTime` | scalar | — |
| `statusId` | `ID` | scalar | — |

### Party

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `externalId` | `String` | scalar | — |
| `firstName` | `String` | scalar | — |
| `lastName` | `String` | scalar | — |
| `partyId` | `ID` | scalar | — |
| `partyTypeId` | `String` | scalar | — |
| `roleTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### Product

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `brandName` | `String` | scalar | — |
| `primaryProductCategoryId` | `String` | scalar | — |
| `productId` | `ID` | scalar | — |
| `productName` | `String` | scalar | — |
| `productTypeId` | `String` | scalar | — |

### ProductAttribute

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `attrName` | `String` | scalar | — |
| `attrType` | `String` | scalar | — |
| `attrValue` | `String` | scalar | — |
| `productId` | `ID` | scalar | — |

### ProductFeature

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `description` | `String` | scalar | — |
| `productFeatureId` | `ID` | scalar | — |
| `productFeatureTypeId` | `String` | scalar | — |

### ProductFeatureAppl

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `feature` | `ProductFeature` | object | One [ProductFeature](#productfeature). |
| `productFeatureApplTypeId` | `String` | scalar | — |
| `productFeatureId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `sequenceNum` | `Int` | scalar | — |

### ProductKeyword

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `keyword` | `String` | scalar | — |
| `keywordTypeId` | `String` | scalar | — |
| `productId` | `ID` | scalar | — |
| `statusId` | `String` | scalar | — |

### ProductPrice

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `currencyUomId` | `String` | scalar | — |
| `fromDate` | `DateTime` | scalar | — |
| `price` | `Decimal` | scalar | — |
| `productId` | `ID` | scalar | — |
| `productPricePurposeId` | `String` | scalar | — |
| `productPriceTypeId` | `String` | scalar | — |
| `productStoreGroupId` | `String` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### ProductStore

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `allowSplit` | `String` | scalar | — |
| `autoApproveOrder` | `String` | scalar | — |
| `companyName` | `String` | scalar | — |
| `defaultCurrencyUomId` | `String` | scalar | — |
| `defaultLocaleString` | `String` | scalar | — |
| `defaultSalesChannelEnumId` | `String` | scalar | — |
| `defaultTimeZoneString` | `String` | scalar | — |
| `explodeOrderItems` | `String` | scalar | — |
| `inventoryFacilityId` | `String` | scalar | — |
| `payToPartyId` | `String` | scalar | — |
| `primaryStoreGroupId` | `String` | scalar | — |
| `productIdentifierEnumId` | `String` | scalar | — |
| `productStoreId` | `ID` | scalar | — |
| `storeName` | `String` | scalar | — |

### Return

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `currencyUomId` | `String` | scalar | — |
| `entryDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `fromPartyId` | `String` | scalar | — |
| `identifications` | `[ReturnIdentification!]!` | list | Bounded list of [ReturnIdentification](#returnidentification); optional `first:`. |
| `returnHeaderTypeId` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `statusId` | `String` | scalar | — |

### ReturnIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `idValue` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnIdentificationTypeId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### ServiceJob

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `cronExpression` | `String` | scalar | — |
| `description` | `String` | scalar | — |
| `fromDate` | `DateTime` | scalar | — |
| `jobName` | `ID` | scalar | — |
| `parameters` | `[ServiceJobParameter!]!` | list | Bounded list of [ServiceJobParameter](#servicejobparameter); optional `first:`. |
| `paused` | `String` | scalar | — |
| `priority` | `Int` | scalar | — |
| `repeatCount` | `Int` | scalar | — |
| `runs` | `[ServiceJobRun!]!` | list | Bounded list of [ServiceJobRun](#servicejobrun); optional `first:`. |
| `serviceName` | `String` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### ServiceJobParameter

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `jobName` | `ID` | scalar | — |
| `parameterName` | `String` | scalar | — |
| `parameterValue` | `String` | scalar | — |

### ServiceJobRun

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `endTime` | `DateTime` | scalar | — |
| `errors` | `String` | scalar | — |
| `hasError` | `String` | scalar | — |
| `jobName` | `String` | scalar | — |
| `jobRunId` | `ID` | scalar | — |
| `messages` | `String` | scalar | — |
| `startTime` | `DateTime` | scalar | — |
| `userId` | `String` | scalar | — |

### ShipGroup

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `carrierPartyId` | `String` | scalar | — |
| `contactMechId` | `String` | scalar | — |
| `facilityChangeHistory` | `OrderFacilityChange connection` | collection | Paged; requires `first:`. Nodes are [OrderFacilityChange](#orderfacilitychange). |
| `facilityId` | `String` | scalar | — |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `shipFromAddress` | `FacilityOriginAddress` | object | One [FacilityOriginAddress](#facilityoriginaddress). |
| `shipGroupSeqId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `shippingMethod` | `ShipmentMethodType` | object | One [ShipmentMethodType](#shipmentmethodtype). |

### Shipment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `destinationFacilityId` | `String` | scalar | — |
| `estimatedShipDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `originFacilityId` | `String` | scalar | — |
| `primaryOrderId` | `String` | scalar | — |
| `shipmentId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `shipmentTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### ShipmentMethodType

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `description` | `String` | scalar | — |
| `shipmentMethodTypeId` | `ID` | scalar | — |

### ShopifyShop

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `countryCode` | `String` | scalar | — |
| `currency` | `String` | scalar | — |
| `domain` | `String` | scalar | — |
| `email` | `String` | scalar | — |
| `isEnabled` | `String` | scalar | — |
| `myshopifyDomain` | `String` | scalar | — |
| `name` | `String` | scalar | — |
| `phone` | `String` | scalar | — |
| `planName` | `String` | scalar | — |
| `primaryLocationId` | `String` | scalar | — |
| `productStore` | `ProductStore` | object | One [ProductStore](#productstore). |
| `productStoreId` | `String` | scalar | — |
| `realTimeInventoryPush` | `String` | scalar | — |
| `shopId` | `ID` | scalar | — |
| `shopOwner` | `String` | scalar | — |
| `shopifyShopId` | `String` | scalar | — |
| `timezone` | `String` | scalar | — |
| `weightUnit` | `String` | scalar | — |

### ShopifyShopProduct

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `productId` | `String` | scalar | — |
| `shopId` | `ID` | scalar | — |
| `shopifyInventoryItemId` | `String` | scalar | — |
| `shopifyProductId` | `ID` | scalar | — |

## Sort key enums

| Enum | Values |
| ---- | ------ |
| `FacilitySortKey` | `FACILITY_ID`, `FACILITY_NAME` |
| `GoodIdentificationSortKey` | `FROM_DATE` |
| `InventoryItemSortKey` | `INVENTORY_ITEM_ID` |
| `InventoryLevelSortKey` | `FACILITY_ID`, `PRODUCT_ID` |
| `OrderSortKey` | `GRAND_TOTAL`, `ORDER_DATE`, `ORDER_ID`, `ORDER_NAME` |
| `PartySortKey` | `LAST_NAME`, `PARTY_ID` |
| `ProductAttributeSortKey` | `ATTR_NAME` |
| `ProductFeatureApplSortKey` | `SEQUENCE_NUM` |
| `ProductKeywordSortKey` | `KEYWORD` |
| `ProductPriceSortKey` | `FROM_DATE` |
| `ProductSortKey` | `PRODUCT_ID`, `PRODUCT_NAME` |
| `ProductStoreSortKey` | `PRODUCT_STORE_ID`, `STORE_NAME` |
| `ReturnSortKey` | `RETURN_DATE`, `RETURN_ID`, `STATUS` |
| `ServiceJobSortKey` | `JOB_NAME` |
| `ShipmentSortKey` | `SHIPMENT_ID`, `SHIPPED_DATE`, `STATUS` |
| `ShopifyShopProductSortKey` | `PRODUCT_ID` |
| `ShopifyShopSortKey` | `NAME`, `SHOP_ID` |

## Custom scalars

| Scalar | Serialized as |
| ------ | ------------- |
| `DateTime` | ISO-8601 timestamp, e.g. 2026-05-14T09:32:00Z |
| `Decimal` | Arbitrary-precision decimal serialized as a string, e.g. "129.00". |

## Pagination envelope

Every collection returns the same wrapper.

```graphql
<Type>Connection {
  edges { cursor node { ... } }
  pageInfo { hasNextPage hasPreviousPage startCursor endCursor }
}
```
