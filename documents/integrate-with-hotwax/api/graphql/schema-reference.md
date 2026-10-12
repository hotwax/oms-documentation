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
| `entityAuditLog` | [EntityAuditLog](#entityauditlog) | `auditHistorySeqId: ID` |
| `facility` | [Facility](#facility) | `externalId: String`, `facilityId: ID` |
| `inventoryItem` | [InventoryItem](#inventoryitem) | `inventoryItemId: ID` |
| `itemIssuance` | [ItemIssuance](#itemissuance) | `itemIssuanceId: ID` |
| `order` | [Order](#order) | `externalId: String`, `orderId: ID` |
| `orderByIdentification` | [Order](#order) | `idValue: String`, `identificationTypeId: String` |
| `party` | [Party](#party) | `externalId: String`, `partyId: ID` |
| `prodCatalog` | [ProdCatalog](#prodcatalog) | `prodCatalogId: ID` |
| `product` | [Product](#product) | `productId: ID` |
| `productByIdentification` | [Product](#product) | `idValue: String`, `identificationTypeId: String` |
| `productStore` | [ProductStore](#productstore) | `productStoreId: ID` |
| `return` | [Return](#return) | `externalId: String`, `returnId: ID` |
| `returnByIdentification` | [Return](#return) | `idValue: String`, `identificationTypeId: String` |
| `serviceJob` | [ServiceJob](#servicejob) | `jobName: ID` |
| `shipment` | [Shipment](#shipment) | `externalId: String`, `shipmentId: ID` |
| `shipmentReceipt` | [ShipmentReceipt](#shipmentreceipt) | `receiptId: ID` |
| `shopifyShop` | [ShopifyShop](#shopifyshop) | `shopId: ID` |
| `transferDiagnosticOrder` | [TransferDiagnosticOrder](#transferdiagnosticorder) | `orderId: ID` |
| `transferDiagnosticReceipt` | [TransferDiagnosticReceipt](#transferdiagnosticreceipt) | `receiptId: ID` |
| `transferDiagnosticShipment` | [TransferDiagnosticShipment](#transferdiagnosticshipment) | `externalId: String`, `shipmentId: ID` |
| `weightedAverageCost` | [ProductWeightedAverageCost](#productweightedaveragecost) | `asOfDate: String`, `facilityId: ID!`, `organizationPartyId: ID!`, `productId: ID!` |
| `weightedAverageCostHistory` | [ProductWeightedAverageCost](#productweightedaveragecost) | `facilityId: ID!`, `fromDate: String`, `organizationPartyId: ID!`, `pageSize: Int`, `productId: ID!`, `thruDate: String` |

Where a root accepts both an ID and an `externalId`, pass exactly one of them.

### Collection roots

Every collection root accepts `first`/`after` for forward paging, `last`/`before` for
backward paging, a `query:` filter string, and `sortKey` with `reverse`. A page size is
required and is capped at 100.

#### `entityAuditLogs`

Returns a paged collection of [EntityAuditLog](#entityauditlog).

| | |
| --- | --- |
| Search keys | `auditHistorySeqId`, `changedEntityName`, `changedFieldName`, `pkPrimaryValue`, `pkSecondaryValue`, `pkRestCombinedValue`, `changedByUserId`, `changedInVisitId`, `changedDate` |
| Sort keys | `AUDIT_HISTORY_SEQ_ID`, `CHANGED_DATE` |
| Sort enum | `EntityAuditLogSortKey` |

#### `facilities`

Returns a paged collection of [Facility](#facility).

| | |
| --- | --- |
| Search keys | `facilityId`, `facilityTypeId`, `externalId`, `parentFacilityId` |
| Sort keys | `FACILITY_ID`, `FACILITY_NAME` |
| Sort enum | `FacilitySortKey` |

#### `facilityCarrierShipments`

Returns a paged collection of [FacilityCarrierShipment](#facilitycarriershipment).

| | |
| --- | --- |
| Search keys | `facilityId`, `partyId`, `shipmentMethodTypeId` |
| Sort keys | `FACILITY_ID`, `PARTY_ID` |
| Sort enum | `FacilityCarrierShipmentSortKey` |

#### `facilityParties`

Returns a paged collection of [FacilityParty](#facilityparty).

| | |
| --- | --- |
| Search keys | `facilityId`, `partyId`, `roleTypeId` |
| Sort keys | `FACILITY_ID`, `PARTY_ID` |
| Sort enum | `FacilityPartySortKey` |

#### `goodIdentifications`

Returns a paged collection of [GoodIdentification](#goodidentification).

| | |
| --- | --- |
| Search keys | `productId`, `goodIdentificationTypeId`, `idValue` |
| Sort keys | `FROM_DATE` |
| Sort enum | `GoodIdentificationSortKey` |

#### `inventoryItemDetails`

Returns a paged collection of [InventoryItemDetail](#inventoryitemdetail).

| | |
| --- | --- |
| Search keys | `inventoryItemId`, `receiptId`, `itemIssuanceId`, `physicalInventoryId`, `resetItemId` |
| Sort keys | `INVENTORY_ITEM_ID` |
| Sort enum | `InventoryItemDetailSortKey` |

#### `inventoryItemVariances`

Returns a paged collection of [InventoryItemVariance](#inventoryitemvariance).

| | |
| --- | --- |
| Search keys | `inventoryItemId`, `physicalInventoryId`, `varianceReasonId` |
| Sort keys | `INVENTORY_ITEM_ID`, `PHYSICAL_INVENTORY_ID` |
| Sort enum | `InventoryItemVarianceSortKey` |

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

#### `inventoryReservations`

Returns a paged collection of [InventoryReservation](#inventoryreservation).

| | |
| --- | --- |
| Search keys | `orderId`, `inventoryItemId`, `shipmentId` |
| Sort keys | `INVENTORY_ITEM_ID`, `ORDER_ID` |
| Sort enum | `InventoryReservationSortKey` |

#### `itemIssuances`

Returns a paged collection of [ItemIssuance](#itemissuance).

| | |
| --- | --- |
| Search keys | `itemIssuanceId`, `orderId`, `returnId`, `shipmentId`, `inventoryItemId` |
| Sort keys | `ITEM_ISSUANCE_ID` |
| Sort enum | `ItemIssuanceSortKey` |

#### `orderItemAssocs`

Returns a paged collection of [OrderItemAssoc](#orderitemassoc).

| | |
| --- | --- |
| Search keys | `orderId`, `toOrderId`, `orderItemAssocTypeId` |
| Sort keys | `ORDER_ID`, `TO_ORDER_ID` |
| Sort enum | `OrderItemAssocSortKey` |

#### `orderItems`

Returns a paged collection of [OrderItem](#orderitem).

| | |
| --- | --- |
| Search keys | `orderId`, `externalId`, `productId`, `statusId`, `orderItemTypeId`, `shipmentId`, `syncStatusId` |
| Sort keys | `ORDER_ID`, `PRODUCT_ID` |
| Sort enum | `OrderItemSortKey` |

#### `orders`

Returns a paged collection of [Order](#order).

| | |
| --- | --- |
| Search keys | `orderId`, `externalId`, `orderName`, `statusId`, `orderTypeId`, `orderDate`, `productStoreId` |
| Sort keys | `GRAND_TOTAL`, `ORDER_DATE`, `ORDER_ID`, `ORDER_NAME` |
| Sort enum | `OrderSortKey` |

#### `parties`

Returns a paged collection of [Party](#party).

| | |
| --- | --- |
| Search keys | `partyId`, `externalId`, `firstName`, `lastName`, `roleTypeId` |
| Sort keys | `LAST_NAME`, `PARTY_ID` |
| Sort enum | `PartySortKey` |

#### `prodCatalogs`

Returns a paged collection of [ProdCatalog](#prodcatalog).

| | |
| --- | --- |
| Search keys | `prodCatalogId`, `catalogName` |
| Sort keys | `CATALOG_NAME`, `PROD_CATALOG_ID` |
| Sort enum | `ProdCatalogSortKey` |

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

#### `productIdentificationClashes`

Returns a paged collection of [ProductIdentificationClash](#productidentificationclash).

| | |
| --- | --- |
| Search keys | `goodIdentificationTypeId`, `productId`, `idValue` |
| Sort keys | `ID_VALUE`, `PRODUCT_ID` |
| Sort enum | `ProductIdentificationClashSortKey` |

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

#### `productStoreCatalogs`

Returns a paged collection of [ProductStoreCatalog](#productstorecatalog).

| | |
| --- | --- |
| Search keys | `productStoreId`, `prodCatalogId` |
| Sort keys | `FROM_DATE`, `SEQUENCE_NUM` |
| Sort enum | `ProductStoreCatalogSortKey` |

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
| Search keys | `productId`, `productTypeId`, `primaryProductCategoryId`, `brandName`, `internalName` |
| Sort keys | `PRODUCT_ID`, `PRODUCT_NAME` |
| Sort enum | `ProductSortKey` |

#### `returnAdjustments`

Returns a paged collection of [ReturnAdjustment](#returnadjustment).

| | |
| --- | --- |
| Search keys | `returnId`, `orderId`, `returnAdjustmentTypeId`, `returnTypeId`, `orderAdjustmentId` |
| Sort keys | `ORDER_ID`, `RETURN_ADJUSTMENT_ID`, `RETURN_ID` |
| Sort enum | `ReturnAdjustmentSortKey` |

#### `returnIdentifications`

Returns a paged collection of [ReturnIdentification](#returnidentification).

| | |
| --- | --- |
| Search keys | `idValue`, `returnIdentificationTypeId`, `returnId` |
| Sort keys | `FROM_DATE`, `RETURN_ID` |
| Sort enum | `ReturnIdentificationSortKey` |

#### `returnItems`

Returns a paged collection of [ReturnItem](#returnitem).

| | |
| --- | --- |
| Search keys | `returnId`, `orderId`, `productId`, `statusId`, `returnReasonId`, `returnTypeId`, `returnItemTypeId` |
| Sort keys | `ORDER_ID`, `RETURN_ID` |
| Sort enum | `ReturnItemSortKey` |

#### `returns`

Returns a paged collection of [Return](#return).

| | |
| --- | --- |
| Search keys | `returnId`, `externalId`, `statusId`, `fromPartyId`, `entryDate`, `productStoreId` |
| Sort keys | `RETURN_DATE`, `RETURN_ID`, `STATUS` |
| Sort enum | `ReturnSortKey` |

#### `serviceJobs`

Returns a paged collection of [ServiceJob](#servicejob).

| | |
| --- | --- |
| Search keys | `jobName`, `serviceName`, `paused` |
| Sort keys | `JOB_NAME` |
| Sort enum | `ServiceJobSortKey` |

#### `shipmentReceipts`

Returns a paged collection of [ShipmentReceipt](#shipmentreceipt).

| | |
| --- | --- |
| Search keys | `receiptId`, `orderId`, `returnId`, `shipmentId`, `inventoryItemId`, `productId` |
| Sort keys | `RECEIPT_ID` |
| Sort enum | `ShipmentReceiptSortKey` |

#### `shipments`

Returns a paged collection of [Shipment](#shipment).

| | |
| --- | --- |
| Search keys | `shipmentId`, `statusId`, `primaryOrderId`, `originFacilityId`, `shipmentMethodTypeId`, `estimatedShipDate` |
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

#### `transferDiagnosticOrderShipments`

Returns a paged collection of [TransferDiagnosticOrderShipment](#transferdiagnosticordershipment).

| | |
| --- | --- |
| Search keys | `orderId`, `shipmentId` |
| Sort keys | `ORDER_ID` |
| Sort enum | `TransferDiagnosticOrderShipmentSortKey` |

#### `transferDiagnosticReceipts`

Returns a paged collection of [TransferDiagnosticReceipt](#transferdiagnosticreceipt).

| | |
| --- | --- |
| Search keys | `receiptId`, `orderId`, `productId` |
| Sort keys | `RECEIPT_ID` |
| Sort enum | `TransferDiagnosticReceiptSortKey` |

#### `transferDiagnosticShipmentItems`

Returns a paged collection of [TransferDiagnosticShipmentItem](#transferdiagnosticshipmentitem).

| | |
| --- | --- |
| Search keys | `shipmentId` |
| Sort keys | `SHIPMENT_ID` |
| Sort enum | `TransferDiagnosticShipmentItemSortKey` |

#### `transferDiagnosticShipments`

Returns a paged collection of [TransferDiagnosticShipment](#transferdiagnosticshipment).

| | |
| --- | --- |
| Search keys | `shipmentId`, `externalId`, `primaryOrderId`, `statusId`, `destinationFacilityId` |
| Sort keys | `SHIPMENT_ID` |
| Sort enum | `TransferDiagnosticShipmentSortKey` |

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

### ContactMech

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `contactMechId` | `ID` | scalar | — |
| `contactMechTypeId` | `String` | scalar | — |
| `infoString` | `String` | scalar | — |

### EntityAuditLog

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `artifactStack` | `String` | scalar | — |
| `auditHistorySeqId` | `ID` | scalar | — |
| `changeReason` | `String` | scalar | — |
| `changedByUserId` | `String` | scalar | — |
| `changedDate` | `DateTime` | scalar | — |
| `changedEntityName` | `String` | scalar | — |
| `changedFieldName` | `String` | scalar | — |
| `changedInVisitId` | `String` | scalar | — |
| `newValueText` | `String` | scalar | — |
| `oldValueText` | `String` | scalar | — |
| `pkPrimaryValue` | `String` | scalar | — |
| `pkRestCombinedValue` | `String` | scalar | — |
| `pkSecondaryValue` | `String` | scalar | — |

### Facility

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `carrierShipmentMethods` | `[FacilityCarrierShipment!]!` | list | Bounded list of [FacilityCarrierShipment](#facilitycarriershipment); optional `first:`. |
| `externalId` | `String` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `facilityName` | `String` | scalar | — |
| `facilityType` | `FacilityType` | object | One [FacilityType](#facilitytype). |
| `facilityTypeId` | `String` | scalar | — |
| `parentFacilityId` | `String` | scalar | — |
| `parties` | `[FacilityParty!]!` | list | Bounded list of [FacilityParty](#facilityparty); optional `first:`. |

### FacilityCarrierShipment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `facilityId` | `ID` | scalar | — |
| `partyId` | `ID` | scalar | — |
| `roleTypeId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `ID` | scalar | — |

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

### FacilityParty

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `facilityId` | `ID` | scalar | — |
| `fromDate` | `DateTime` | scalar | — |
| `partyId` | `ID` | scalar | — |
| `roleTypeId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### FacilityType

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `description` | `String` | scalar | — |
| `facilityTypeId` | `ID` | scalar | — |
| `parentTypeId` | `String` | scalar | — |

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
| `details` | `InventoryItemDetail connection` | collection | Paged; requires `first:`. Nodes are [InventoryItemDetail](#inventoryitemdetail). |
| `expireDate` | `DateTime` | scalar | — |
| `facilityId` | `String` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `inventoryItemTypeId` | `String` | scalar | — |
| `locationSeqId` | `String` | scalar | — |
| `lotId` | `String` | scalar | — |
| `ownerPartyId` | `String` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantityOnHandTotal` | `Decimal` | scalar | — |
| `reservations` | `InventoryReservation connection` | collection | Paged; requires `first:`. Nodes are [InventoryReservation](#inventoryreservation). |
| `serialNumber` | `String` | scalar | — |
| `softIdentifier` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `unitCost` | `Decimal` | scalar | — |
| `variances` | `InventoryItemVariance connection` | collection | Paged; requires `first:`. Nodes are [InventoryItemVariance](#inventoryitemvariance). |

### InventoryItemDetail

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `accountingQuantityDiff` | `Decimal` | scalar | — |
| `availableToPromiseDiff` | `Decimal` | scalar | — |
| `description` | `String` | scalar | — |
| `effectiveDate` | `DateTime` | scalar | — |
| `inventoryItem` | `InventoryItem` | object | One [InventoryItem](#inventoryitem). |
| `inventoryItemDetailSeqId` | `ID` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `itemIssuanceId` | `String` | scalar | — |
| `lastAvailableToPromise` | `Decimal` | scalar | — |
| `lastQuantityOnHand` | `Decimal` | scalar | — |
| `order` | `Order` | object | One [Order](#order). |
| `orderId` | `String` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |
| `physicalInventoryId` | `String` | scalar | — |
| `quantityOnHandDiff` | `Decimal` | scalar | — |
| `reasonEnumId` | `String` | scalar | — |
| `receiptId` | `String` | scalar | — |
| `resetItemId` | `String` | scalar | — |
| `returnId` | `String` | scalar | — |
| `returnItemSeqId` | `String` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |
| `shipmentId` | `String` | scalar | — |
| `shipmentItemSeqId` | `String` | scalar | — |
| `unitCost` | `Decimal` | scalar | — |
| `workEffortId` | `String` | scalar | — |

### InventoryItemVariance

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `availableToPromiseVar` | `Decimal` | scalar | — |
| `changeByUserLoginId` | `String` | scalar | — |
| `comments` | `String` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `physicalInventory` | `PhysicalInventory` | object | One [PhysicalInventory](#physicalinventory). |
| `physicalInventoryId` | `ID` | scalar | — |
| `quantityOnHandVar` | `Decimal` | scalar | — |
| `reasonEnumId` | `String` | scalar | — |
| `varianceReasonId` | `ID` | scalar | — |

### InventoryLevel

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `allowBrokering` | `String` | scalar | — |
| `allowPickup` | `String` | scalar | — |
| `availableToPromise` | `Decimal` | scalar | — |
| `computedInventoryCount` | `Decimal` | scalar | — |
| `computedLastInventoryCount` | `Decimal` | scalar | — |
| `daysToShip` | `Int` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `lastInventoryCount` | `Decimal` | scalar | — |
| `maximumStock` | `Decimal` | scalar | — |
| `minimumStock` | `Decimal` | scalar | — |
| `productId` | `ID` | scalar | — |
| `quantityOnHand` | `Decimal` | scalar | — |
| `reorderPoint` | `Decimal` | scalar | — |
| `reorderQuantity` | `Decimal` | scalar | — |
| `salesVelocity` | `Decimal` | scalar | — |

### InventoryReservation

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `createdDatetime` | `DateTime` | scalar | — |
| `currentPromisedDate` | `DateTime` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `priority` | `String` | scalar | — |
| `promisedDatetime` | `DateTime` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `quantityNotAvailable` | `Decimal` | scalar | — |
| `reserveOrderEnumId` | `String` | scalar | — |
| `reservedDatetime` | `DateTime` | scalar | — |
| `sequenceId` | `Int` | scalar | — |
| `shipGroupSeqId` | `ID` | scalar | — |
| `shipmentId` | `ID` | scalar | — |

### ItemIssuance

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `cancelQuantity` | `Decimal` | scalar | — |
| `inventoryItemId` | `String` | scalar | — |
| `issuanceTypeId` | `String` | scalar | — |
| `issuedByUserLoginId` | `String` | scalar | — |
| `issuedDateTime` | `DateTime` | scalar | — |
| `itemIssuanceId` | `ID` | scalar | — |
| `order` | `Order` | object | One [Order](#order). |
| `orderId` | `String` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `returnId` | `String` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |
| `shipmentId` | `String` | scalar | — |
| `shipmentItemSeqId` | `String` | scalar | — |

### NoteData

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `noteDateTime` | `DateTime` | scalar | — |
| `noteId` | `ID` | scalar | — |
| `noteInfo` | `String` | scalar | — |
| `noteName` | `String` | scalar | — |
| `noteParty` | `String` | scalar | — |

### Order

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `adjustments` | `[OrderAdjustment!]!` | list | Bounded list of [OrderAdjustment](#orderadjustment); optional `first:`. |
| `billToCustomer` | `BillToCustomer` | object | One [BillToCustomer](#billtocustomer). |
| `contactMechs` | `[OrderContactMech!]!` | list | Bounded list of [OrderContactMech](#ordercontactmech); optional `first:`. |
| `currencyUomId` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |
| `grandTotal` | `Decimal` | scalar | — |
| `identifications` | `[OrderIdentification!]!` | list | Bounded list of [OrderIdentification](#orderidentification); optional `first:`. |
| `itemAssocs` | `OrderItemAssoc connection` | collection | Paged; requires `first:`. Nodes are [OrderItemAssoc](#orderitemassoc). |
| `lastUpdatedTxStamp` | `DateTime` | scalar | — |
| `notes` | `[OrderHeaderNote!]!` | list | Bounded list of [OrderHeaderNote](#orderheadernote); optional `first:`. |
| `orderDate` | `DateTime` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemCount` | `Int` | scalar | — |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `orderName` | `String` | scalar | — |
| `orderTypeId` | `String` | scalar | — |
| `paymentPreferences` | `[OrderPaymentPreference!]!` | list | Bounded list of [OrderPaymentPreference](#orderpaymentpreference); optional `first:`. |
| `productStoreId` | `String` | scalar | — |
| `returnItems` | `ReturnItem connection` | collection | Paged; requires `first:`. Nodes are [ReturnItem](#returnitem). |
| `shipGroups` | `ShipGroup connection` | collection | Paged; requires `first:`. Nodes are [ShipGroup](#shipgroup). |
| `shopifyOrder` | `ShopifyShopOrder` | object | One [ShopifyShopOrder](#shopifyshoporder). |
| `statusFlowId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `statuses` | `[OrderStatus!]!` | list | Bounded list of [OrderStatus](#orderstatus); optional `first:`. |

### OrderAdjustment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `amount` | `Decimal` | scalar | — |
| `comments` | `String` | scalar | — |
| `orderAdjustmentId` | `ID` | scalar | — |
| `orderAdjustmentTypeId` | `String` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |

### OrderContactMech

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `contactMech` | `ContactMech` | object | One [ContactMech](#contactmech). |
| `contactMechId` | `ID` | scalar | — |
| `contactMechPurposeTypeId` | `ID` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `postalAddress` | `PostalAddress` | object | One [PostalAddress](#postaladdress). |
| `telecomNumber` | `TelecomNumber` | object | One [TelecomNumber](#telecomnumber). |

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

### OrderHeaderNote

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `internalNote` | `String` | scalar | — |
| `note` | `NoteData` | object | One [NoteData](#notedata). |
| `noteId` | `ID` | scalar | — |
| `orderId` | `ID` | scalar | — |

### OrderIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `idValue` | `String` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderIdentificationTypeId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### OrderItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `adjustments` | `[OrderAdjustment!]!` | list | Bounded list of [OrderAdjustment](#orderadjustment); optional `first:`. |
| `assocs` | `OrderItemAssoc connection` | collection | Paged; requires `first:`. Nodes are [OrderItemAssoc](#orderitemassoc). |
| `autoCancelDate` | `DateTime` | scalar | — |
| `cancelQuantity` | `Decimal` | scalar | — |
| `estimatedDeliveryDate` | `DateTime` | scalar | — |
| `estimatedShipDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `itemDescription` | `String` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `orderItemTypeId` | `String` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantity` | `Int` | scalar | — |
| `reservations` | `InventoryReservation connection` | collection | Paged; requires `first:`. Nodes are [InventoryReservation](#inventoryreservation). |
| `shipGroupSeqId` | `String` | scalar | — |
| `shipmentId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `syncStatusId` | `String` | scalar | — |
| `unitAverageCost` | `Decimal` | scalar | — |
| `unitListPrice` | `Decimal` | scalar | — |
| `unitPrice` | `Decimal` | scalar | — |

### OrderItemAssoc

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `orderItemAssocTypeId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `shipGroupSeqId` | `ID` | scalar | — |
| `toOrderId` | `ID` | scalar | — |
| `toOrderItemSeqId` | `ID` | scalar | — |
| `toShipGroupSeqId` | `ID` | scalar | — |

### OrderPaymentPreference

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `createdDate` | `DateTime` | scalar | — |
| `finAccountId` | `String` | scalar | — |
| `manualAuthCode` | `String` | scalar | — |
| `manualRefNum` | `String` | scalar | — |
| `maxAmount` | `Decimal` | scalar | — |
| `needsNsfRetry` | `String` | scalar | — |
| `orderId` | `String` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |
| `orderPaymentPreferenceId` | `ID` | scalar | — |
| `paymentMethodId` | `String` | scalar | — |
| `paymentMethodTypeId` | `String` | scalar | — |
| `processAttempt` | `Int` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |
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

### PhysicalInventory

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `generalComments` | `String` | scalar | — |
| `partyId` | `ID` | scalar | — |
| `physicalInventoryDate` | `DateTime` | scalar | — |
| `physicalInventoryId` | `ID` | scalar | — |

### PostalAddress

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `address1` | `String` | scalar | — |
| `address2` | `String` | scalar | — |
| `attnName` | `String` | scalar | — |
| `city` | `String` | scalar | — |
| `contactMechId` | `ID` | scalar | — |
| `countryGeoId` | `String` | scalar | — |
| `postalCode` | `String` | scalar | — |
| `stateProvinceGeoId` | `String` | scalar | — |
| `toName` | `String` | scalar | — |

### ProdCatalog

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `catalogName` | `String` | scalar | — |
| `headerLogo` | `String` | scalar | — |
| `prodCatalogId` | `ID` | scalar | — |
| `styleSheet` | `String` | scalar | — |
| `useQuickAdd` | `String` | scalar | — |

### Product

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `assocs` | `ProductAssoc connection` | collection | Paged; requires `first:`. Nodes are [ProductAssoc](#productassoc). |
| `brandName` | `String` | scalar | — |
| `createdDate` | `DateTime` | scalar | — |
| `internalName` | `String` | scalar | — |
| `isVariant` | `String` | scalar | — |
| `isVirtual` | `String` | scalar | — |
| `lastModifiedDate` | `DateTime` | scalar | — |
| `primaryProductCategoryId` | `String` | scalar | — |
| `productId` | `ID` | scalar | — |
| `productName` | `String` | scalar | — |
| `productTypeId` | `String` | scalar | — |
| `returnable` | `String` | scalar | — |
| `salesDiscontinuationDate` | `DateTime` | scalar | — |
| `taxable` | `String` | scalar | — |
| `virtualVariantMethodEnum` | `String` | scalar | — |

### ProductAssoc

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `instruction` | `String` | scalar | — |
| `productAssocTypeId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `productIdTo` | `ID` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `reason` | `String` | scalar | — |
| `scrapFactor` | `Decimal` | scalar | — |
| `sequenceNum` | `Int` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

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

### ProductIdentificationClash

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `goodIdentificationTypeId` | `ID` | scalar | — |
| `idValue` | `String` | scalar | — |
| `otherFromDate` | `DateTime` | scalar | — |
| `otherProduct` | `Product` | object | One [Product](#product). |
| `otherProductId` | `ID` | scalar | — |
| `product` | `Product` | object | One [Product](#product). |
| `productId` | `ID` | scalar | — |
| `shopifyShopProducts` | `[ShopifyShopProduct!]!` | list | Bounded list of [ShopifyShopProduct](#shopifyshopproduct); optional `first:`. |

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
| `productStoreCatalogs` | `[ProductStoreCatalog!]!` | list | Bounded list of [ProductStoreCatalog](#productstorecatalog); optional `first:`. |
| `productStoreId` | `ID` | scalar | — |
| `storeName` | `String` | scalar | — |

### ProductStoreCatalog

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `catalog` | `ProdCatalog` | object | One [ProdCatalog](#prodcatalog). |
| `fromDate` | `DateTime` | scalar | — |
| `prodCatalogId` | `ID` | scalar | — |
| `productStoreId` | `ID` | scalar | — |
| `sequenceNum` | `Int` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### ProductWeightedAverageCost

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `facilityId` | `ID` | scalar | — |
| `fromDate` | `DateTime` | scalar | — |
| `organizationPartyId` | `ID` | scalar | — |
| `productAverageCostTypeId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |
| `weightedAverageCost` | `Decimal` | scalar | — |

### Return

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `adjustments` | `[ReturnAdjustment!]!` | list | Bounded list of [ReturnAdjustment](#returnadjustment); optional `first:`. |
| `currencyUomId` | `String` | scalar | — |
| `destinationFacilityId` | `String` | scalar | — |
| `entryDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `fromPartyId` | `String` | scalar | — |
| `identifications` | `[ReturnIdentification!]!` | list | Bounded list of [ReturnIdentification](#returnidentification); optional `first:`. |
| `needsInventoryReceive` | `String` | scalar | — |
| `productStoreId` | `String` | scalar | — |
| `responses` | `[ReturnItemResponse!]!` | list | Bounded list of [ReturnItemResponse](#returnitemresponse); optional `first:`. |
| `returnChannelEnumId` | `String` | scalar | — |
| `returnDate` | `DateTime` | scalar | — |
| `returnHeaderTypeId` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnItems` | `ReturnItem connection` | collection | Paged; requires `first:`. Nodes are [ReturnItem](#returnitem). |
| `shipmentReceipts` | `[ShipmentReceipt!]!` | list | Bounded list of [ShipmentReceipt](#shipmentreceipt); optional `first:`. |
| `statusId` | `String` | scalar | — |
| `statuses` | `[ReturnStatus!]!` | list | Bounded list of [ReturnStatus](#returnstatus); optional `first:`. |

### ReturnAdjustment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `amount` | `Decimal` | scalar | — |
| `correspondingProductId` | `String` | scalar | — |
| `description` | `String` | scalar | — |
| `exemptAmount` | `Decimal` | scalar | — |
| `orderAdjustmentId` | `ID` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `productPromoId` | `String` | scalar | — |
| `returnAdjustmentId` | `ID` | scalar | — |
| `returnAdjustmentTypeId` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnItemSeqId` | `ID` | scalar | — |
| `returnTypeId` | `String` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |
| `sourcePercentage` | `Decimal` | scalar | — |
| `taxAuthGeoId` | `String` | scalar | — |
| `taxAuthPartyId` | `String` | scalar | — |

### ReturnIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `fromDate` | `DateTime` | scalar | — |
| `idValue` | `String` | scalar | — |
| `return` | `Return` | object | One [Return](#return). |
| `returnId` | `ID` | scalar | — |
| `returnIdentificationTypeId` | `ID` | scalar | — |
| `thruDate` | `DateTime` | scalar | — |

### ReturnItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `description` | `String` | scalar | — |
| `expectedItemStatus` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `reason` | `String` | scalar | — |
| `receivedQuantity` | `Decimal` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnItemResponseId` | `String` | scalar | — |
| `returnItemSeqId` | `ID` | scalar | — |
| `returnItemTypeId` | `String` | scalar | — |
| `returnPrice` | `Decimal` | scalar | — |
| `returnQuantity` | `Decimal` | scalar | — |
| `returnReasonId` | `String` | scalar | — |
| `returnTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### ReturnItemResponse

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `comments` | `String` | scalar | — |
| `orderPaymentPreferenceId` | `String` | scalar | — |
| `paymentPreference` | `OrderPaymentPreference` | object | One [OrderPaymentPreference](#orderpaymentpreference). |
| `replacementOrderId` | `String` | scalar | — |
| `responseAmount` | `Decimal` | scalar | — |
| `responseDate` | `DateTime` | scalar | — |
| `responseReasonEnumId` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnItemResponseId` | `ID` | scalar | — |
| `returnItemSeqId` | `String` | scalar | — |

### ReturnStatus

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `changeByUserLoginId` | `String` | scalar | — |
| `returnId` | `ID` | scalar | — |
| `returnItemSeqId` | `String` | scalar | — |
| `returnStatusId` | `ID` | scalar | — |
| `statusDatetime` | `DateTime` | scalar | — |
| `statusId` | `String` | scalar | — |

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
| `facility` | `Facility` | object | One [Facility](#facility). |
| `facilityChangeHistory` | `OrderFacilityChange connection` | collection | Paged; requires `first:`. Nodes are [OrderFacilityChange](#orderfacilitychange). |
| `facilityId` | `String` | scalar | — |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `shipFromAddress` | `FacilityOriginAddress` | object | One [FacilityOriginAddress](#facilityoriginaddress). |
| `shipGroupSeqId` | `ID` | scalar | — |
| `shipToAddress` | `PostalAddress` | object | One [PostalAddress](#postaladdress). |
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
| `routeSegments` | `[ShipmentRouteSegment!]!` | list | Bounded list of [ShipmentRouteSegment](#shipmentroutesegment); optional `first:`. |
| `shipmentId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `shipmentTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### ShipmentMethodType

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `description` | `String` | scalar | — |
| `shipmentMethodTypeId` | `ID` | scalar | — |

### ShipmentPackageRouteSeg

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `gatewayMessage` | `String` | scalar | — |
| `gatewayStatus` | `String` | scalar | — |
| `labelImageUrl` | `String` | scalar | — |
| `labelPrinted` | `String` | scalar | — |
| `shipmentId` | `ID` | scalar | — |
| `shipmentPackageSeqId` | `ID` | scalar | — |
| `shipmentRouteSegmentId` | `ID` | scalar | — |
| `trackingCode` | `String` | scalar | — |

### ShipmentReceipt

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `datetimeReceived` | `DateTime` | scalar | — |
| `inventoryItemId` | `String` | scalar | — |
| `order` | `Order` | object | One [Order](#order). |
| `orderId` | `String` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantityAccepted` | `Decimal` | scalar | — |
| `quantityRejected` | `Decimal` | scalar | — |
| `receiptId` | `ID` | scalar | — |
| `receivedByUserLoginId` | `String` | scalar | — |
| `returnId` | `String` | scalar | — |
| `returnItemSeqId` | `String` | scalar | — |
| `shipmentId` | `String` | scalar | — |
| `shipmentItemSeqId` | `String` | scalar | — |

### ShipmentRouteSegment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `actualStartDate` | `DateTime` | scalar | — |
| `carrierPartyId` | `String` | scalar | — |
| `carrierServiceStatusId` | `String` | scalar | — |
| `destAddress` | `PostalAddress` | object | One [PostalAddress](#postaladdress). |
| `destContactMechId` | `String` | scalar | — |
| `destPhone` | `TelecomNumber` | object | One [TelecomNumber](#telecomnumber). |
| `destTelecomNumberId` | `String` | scalar | — |
| `lastUpdatedDate` | `DateTime` | scalar | — |
| `originFacilityId` | `String` | scalar | — |
| `packageSegments` | `[ShipmentPackageRouteSeg!]!` | list | Bounded list of [ShipmentPackageRouteSeg](#shipmentpackagerouteseg); optional `first:`. |
| `shipmentId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `shipmentRouteSegmentId` | `ID` | scalar | — |
| `trackingIdNumber` | `String` | scalar | — |

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

### ShopifyShopOrder

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `shop` | `ShopifyShop` | object | One [ShopifyShop](#shopifyshop). |
| `shopId` | `ID` | scalar | — |
| `shopifyOrderId` | `ID` | scalar | — |

### ShopifyShopProduct

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `productId` | `String` | scalar | — |
| `shopId` | `ID` | scalar | — |
| `shopifyInventoryItemId` | `String` | scalar | — |
| `shopifyProductId` | `ID` | scalar | — |

### TelecomNumber

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `areaCode` | `String` | scalar | — |
| `contactMechId` | `ID` | scalar | — |
| `contactNumber` | `String` | scalar | — |
| `countryCode` | `String` | scalar | — |

### TransferDiagnosticOrder

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `externalId` | `String` | scalar | — |
| `orderDate` | `DateTime` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItems` | `TransferDiagnosticOrderItem connection` | collection | Paged; requires `first:`. Nodes are [TransferDiagnosticOrderItem](#transferdiagnosticorderitem). |
| `orderName` | `String` | scalar | — |
| `orderTypeId` | `ID` | scalar | — |
| `statusFlowId` | `ID` | scalar | — |
| `statusId` | `ID` | scalar | — |
| `statuses` | `[TransferDiagnosticOrderStatus!]!` | list | Bounded list of [TransferDiagnosticOrderStatus](#transferdiagnosticorderstatus); optional `first:`. |

### TransferDiagnosticOrderItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `shipGroupSeqId` | `ID` | scalar | — |
| `statusId` | `ID` | scalar | — |

### TransferDiagnosticOrderShipment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `shipGroupSeqId` | `ID` | scalar | — |
| `shipment` | `TransferDiagnosticShipment` | object | One [TransferDiagnosticShipment](#transferdiagnosticshipment). |
| `shipmentId` | `ID` | scalar | — |
| `shipmentItemSeqId` | `ID` | scalar | — |

### TransferDiagnosticOrderStatus

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `changeReason` | `String` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `orderPaymentPreferenceId` | `ID` | scalar | — |
| `orderStatusId` | `ID` | scalar | — |
| `statusDatetime` | `DateTime` | scalar | — |
| `statusId` | `ID` | scalar | — |
| `statusUserLogin` | `ID` | scalar | — |

### TransferDiagnosticReceipt

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `datetimeReceived` | `DateTime` | scalar | — |
| `inventoryItemId` | `ID` | scalar | — |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `productId` | `ID` | scalar | — |
| `quantityAccepted` | `Decimal` | scalar | — |
| `quantityRejected` | `Decimal` | scalar | — |
| `receiptId` | `ID` | scalar | — |
| `receivedByUserLoginId` | `ID` | scalar | — |
| `shipmentId` | `ID` | scalar | — |
| `shipmentItemSeqId` | `ID` | scalar | — |

### TransferDiagnosticShipment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `createdDate` | `DateTime` | scalar | — |
| `destinationFacilityId` | `ID` | scalar | — |
| `estimatedShipDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `lastModifiedDate` | `DateTime` | scalar | — |
| `originFacilityId` | `ID` | scalar | — |
| `primaryOrderId` | `ID` | scalar | — |
| `primaryShipGroupSeqId` | `ID` | scalar | — |
| `shipmentId` | `ID` | scalar | — |
| `shipmentTypeId` | `ID` | scalar | — |
| `statusId` | `ID` | scalar | — |

### TransferDiagnosticShipmentItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `productId` | `ID` | scalar | — |
| `quantity` | `Decimal` | scalar | — |
| `shipmentContentDescription` | `String` | scalar | — |
| `shipmentId` | `ID` | scalar | — |
| `shipmentItemSeqId` | `ID` | scalar | — |

## Sort key enums

| Enum | Values |
| ---- | ------ |
| `EntityAuditLogSortKey` | `AUDIT_HISTORY_SEQ_ID`, `CHANGED_DATE` |
| `FacilityCarrierShipmentSortKey` | `FACILITY_ID`, `PARTY_ID` |
| `FacilityPartySortKey` | `FACILITY_ID`, `PARTY_ID` |
| `FacilitySortKey` | `FACILITY_ID`, `FACILITY_NAME` |
| `GoodIdentificationSortKey` | `FROM_DATE` |
| `InventoryItemDetailSortKey` | `INVENTORY_ITEM_ID` |
| `InventoryItemSortKey` | `INVENTORY_ITEM_ID` |
| `InventoryItemVarianceSortKey` | `INVENTORY_ITEM_ID`, `PHYSICAL_INVENTORY_ID` |
| `InventoryLevelSortKey` | `FACILITY_ID`, `PRODUCT_ID` |
| `InventoryReservationSortKey` | `INVENTORY_ITEM_ID`, `ORDER_ID` |
| `ItemIssuanceSortKey` | `ITEM_ISSUANCE_ID` |
| `OrderItemAssocSortKey` | `ORDER_ID`, `TO_ORDER_ID` |
| `OrderItemSortKey` | `ORDER_ID`, `PRODUCT_ID` |
| `OrderSortKey` | `GRAND_TOTAL`, `ORDER_DATE`, `ORDER_ID`, `ORDER_NAME` |
| `PartySortKey` | `LAST_NAME`, `PARTY_ID` |
| `ProdCatalogSortKey` | `CATALOG_NAME`, `PROD_CATALOG_ID` |
| `ProductAttributeSortKey` | `ATTR_NAME` |
| `ProductFeatureApplSortKey` | `SEQUENCE_NUM` |
| `ProductIdentificationClashSortKey` | `ID_VALUE`, `PRODUCT_ID` |
| `ProductKeywordSortKey` | `KEYWORD` |
| `ProductPriceSortKey` | `FROM_DATE` |
| `ProductSortKey` | `PRODUCT_ID`, `PRODUCT_NAME` |
| `ProductStoreCatalogSortKey` | `FROM_DATE`, `SEQUENCE_NUM` |
| `ProductStoreSortKey` | `PRODUCT_STORE_ID`, `STORE_NAME` |
| `ReturnAdjustmentSortKey` | `ORDER_ID`, `RETURN_ADJUSTMENT_ID`, `RETURN_ID` |
| `ReturnIdentificationSortKey` | `FROM_DATE`, `RETURN_ID` |
| `ReturnItemSortKey` | `ORDER_ID`, `RETURN_ID` |
| `ReturnSortKey` | `RETURN_DATE`, `RETURN_ID`, `STATUS` |
| `ServiceJobSortKey` | `JOB_NAME` |
| `ShipmentReceiptSortKey` | `RECEIPT_ID` |
| `ShipmentSortKey` | `SHIPMENT_ID`, `SHIPPED_DATE`, `STATUS` |
| `ShopifyShopProductSortKey` | `PRODUCT_ID` |
| `ShopifyShopSortKey` | `NAME`, `SHOP_ID` |
| `TransferDiagnosticOrderShipmentSortKey` | `ORDER_ID` |
| `TransferDiagnosticReceiptSortKey` | `RECEIPT_ID` |
| `TransferDiagnosticShipmentItemSortKey` | `SHIPMENT_ID` |
| `TransferDiagnosticShipmentSortKey` | `SHIPMENT_ID` |

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
