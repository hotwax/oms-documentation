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
  Source: moqui-gql graphql/OmsSchema.gql.xml @ 0d2dd1b
-->

Generated from the schema definition in `moqui-gql graphql/OmsSchema.gql.xml @ 0d2dd1b`.
This page is produced by a script from the schema itself, so it lists what the API serves
today rather than what was planned. For how to read and page these objects, start with the
[GraphQL API overview](README.md) and [query examples](queries.md).

## Query roots

### Single-record roots

| Root | Returns | Arguments |
| ---- | ------- | --------- |
| `order` | [Order](#order) | `orderId: ID`, `externalId: String` |
| `orderByIdentification` | [Order](#order) | `identificationTypeId: String`, `idValue: String` |
| `party` | [Party](#party) | `partyId: ID`, `externalId: String` |
| `shipment` | [Shipment](#shipment) | `shipmentId: ID`, `externalId: String` |
| `return` | [Return](#return) | `returnId: ID`, `externalId: String` |
| `product` | [Product](#product) | `productId: ID` |
| `facility` | [Facility](#facility) | `facilityId: ID`, `externalId: String` |

Where a root accepts both an ID and an `externalId`, pass exactly one of them.

### Collection roots

Every collection root accepts `first`/`after` for forward paging, `last`/`before` for
backward paging, a `query:` filter string, and `sortKey` with `reverse`. A page size is
required and is capped at 100.

#### `orders`

Returns a paged collection of [Order](#order).

| | |
| --- | --- |
| Search keys | `orderId`, `externalId`, `orderName`, `statusId`, `orderDate`, `productStoreId` |
| Sort keys | `ORDER_DATE`, `ORDER_NAME`, `GRAND_TOTAL`, `ORDER_ID` |
| Sort enum | `OrderSortKey` |

#### `parties`

Returns a paged collection of [Party](#party).

| | |
| --- | --- |
| Search keys | `partyId`, `externalId`, `firstName`, `lastName`, `roleTypeId` |
| Sort keys | `PARTY_ID`, `LAST_NAME` |
| Sort enum | `PartySortKey` |

#### `shipments`

Returns a paged collection of [Shipment](#shipment).

| | |
| --- | --- |
| Search keys | `shipmentId`, `statusId`, `originFacilityId`, `shipmentMethodTypeId`, `estimatedShipDate` |
| Sort keys | `SHIPPED_DATE`, `STATUS`, `SHIPMENT_ID` |
| Sort enum | `ShipmentSortKey` |

#### `returns`

Returns a paged collection of [Return](#return).

| | |
| --- | --- |
| Search keys | `returnId`, `statusId`, `fromPartyId`, `entryDate` |
| Sort keys | `RETURN_DATE`, `STATUS`, `RETURN_ID` |
| Sort enum | `ReturnSortKey` |

#### `inventoryLevels`

Returns a paged collection of [InventoryLevel](#inventorylevel).

| | |
| --- | --- |
| Search keys | `productId`, `facilityId` |
| Sort keys | `PRODUCT_ID`, `FACILITY_ID` |
| Sort enum | `InventoryLevelSortKey` |

#### `products`

Returns a paged collection of [Product](#product).

| | |
| --- | --- |
| Search keys | `productId`, `productTypeId`, `primaryProductCategoryId`, `brandName` |
| Sort keys | `PRODUCT_NAME`, `PRODUCT_ID` |
| Sort enum | `ProductSortKey` |

#### `facilities`

Returns a paged collection of [Facility](#facility).

| | |
| --- | --- |
| Search keys | `facilityId`, `facilityTypeId`, `externalId`, `parentFacilityId` |
| Sort keys | `FACILITY_NAME`, `FACILITY_ID` |
| Sort enum | `FacilitySortKey` |

## Objects

Scalar fields are plain values. An **object** field returns one related record. A
**collection** field is a paged connection and needs its own `first:`. A **list** field
returns a bounded array with no cursors.

### BillToCustomer

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `partyId` | `ID` | scalar | — |
| `firstName` | `String` | scalar | — |
| `lastName` | `String` | scalar | — |

### Facility

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `facilityId` | `ID` | scalar | — |
| `facilityName` | `String` | scalar | — |
| `facilityTypeId` | `String` | scalar | — |
| `parentFacilityId` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |

### FacilityOriginAddress

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `facilityId` | `ID` | scalar | — |
| `address1` | `String` | scalar | — |
| `address2` | `String` | scalar | — |
| `city` | `String` | scalar | — |
| `postalCode` | `String` | scalar | — |
| `stateProvinceGeoId` | `String` | scalar | — |
| `countryGeoId` | `String` | scalar | — |
| `latitude` | `Decimal` | scalar | — |
| `longitude` | `Decimal` | scalar | — |

### InventoryLevel

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `productId` | `ID` | scalar | — |
| `facilityId` | `ID` | scalar | — |
| `availableToPromise` | `Decimal` | scalar | — |
| `quantityOnHand` | `Decimal` | scalar | — |

### Order

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `orderName` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `orderDate` | `DateTime` | scalar | — |
| `grandTotal` | `Decimal` | scalar | — |
| `currencyUomId` | `String` | scalar | — |
| `productStoreId` | `String` | scalar | — |
| `orderItemCount` | `Int` | scalar | — |
| `billToCustomer` | `BillToCustomer` | object | One [BillToCustomer](#billtocustomer). |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `identifications` | `[OrderIdentification!]!` | list | Bounded list of [OrderIdentification](#orderidentification); optional `first:`. |
| `shipGroups` | `ShipGroup connection` | collection | Paged; requires `first:`. Nodes are [ShipGroup](#shipgroup). |
| `statuses` | `[OrderStatus!]!` | list | Bounded list of [OrderStatus](#orderstatus); optional `first:`. |
| `adjustments` | `[OrderAdjustment!]!` | list | Bounded list of [OrderAdjustment](#orderadjustment); optional `first:`. |
| `paymentPreferences` | `[OrderPaymentPreference!]!` | list | Bounded list of [OrderPaymentPreference](#orderpaymentpreference); optional `first:`. |

### OrderAdjustment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderAdjustmentId` | `ID` | scalar | — |
| `orderAdjustmentTypeId` | `String` | scalar | — |
| `amount` | `Decimal` | scalar | — |
| `comments` | `String` | scalar | — |

### OrderFacilityChange

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderFacilityChangeId` | `ID` | scalar | — |
| `shipGroupSeqId` | `String` | scalar | — |
| `fromFacilityId` | `String` | scalar | — |
| `facilityId` | `String` | scalar | — |
| `changeDatetime` | `DateTime` | scalar | — |
| `changeReasonEnumId` | `String` | scalar | — |
| `comments` | `String` | scalar | — |

### OrderIdentification

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderIdentificationTypeId` | `ID` | scalar | — |
| `idValue` | `String` | scalar | — |

### OrderItem

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderId` | `ID` | scalar | — |
| `orderItemSeqId` | `ID` | scalar | — |
| `productId` | `String` | scalar | — |
| `quantity` | `Int` | scalar | — |
| `unitPrice` | `Decimal` | scalar | — |
| `statusId` | `String` | scalar | — |

### OrderPaymentPreference

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `orderPaymentPreferenceId` | `ID` | scalar | — |
| `paymentMethodTypeId` | `String` | scalar | — |
| `maxAmount` | `Decimal` | scalar | — |
| `statusId` | `String` | scalar | — |

### OrderStatus

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `statusId` | `ID` | scalar | — |
| `statusDatetime` | `DateTime` | scalar | — |
| `orderItemSeqId` | `String` | scalar | — |

### Party

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `partyId` | `ID` | scalar | — |
| `partyTypeId` | `String` | scalar | — |
| `roleTypeId` | `String` | scalar | — |
| `firstName` | `String` | scalar | — |
| `lastName` | `String` | scalar | — |
| `externalId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |

### Product

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `productId` | `ID` | scalar | — |
| `productName` | `String` | scalar | — |
| `productTypeId` | `String` | scalar | — |
| `primaryProductCategoryId` | `String` | scalar | — |
| `brandName` | `String` | scalar | — |

### Return

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `returnId` | `ID` | scalar | — |
| `statusId` | `String` | scalar | — |
| `returnHeaderTypeId` | `String` | scalar | — |
| `fromPartyId` | `String` | scalar | — |
| `entryDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |
| `currencyUomId` | `String` | scalar | — |

### ShipGroup

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `shipGroupSeqId` | `ID` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `carrierPartyId` | `String` | scalar | — |
| `facilityId` | `String` | scalar | — |
| `contactMechId` | `String` | scalar | — |
| `orderItems` | `OrderItem connection` | collection | Paged; requires `first:`. Nodes are [OrderItem](#orderitem). |
| `shipFromAddress` | `FacilityOriginAddress` | object | One [FacilityOriginAddress](#facilityoriginaddress). |
| `shippingMethod` | `ShipmentMethodType` | object | One [ShipmentMethodType](#shipmentmethodtype). |
| `facilityChangeHistory` | `OrderFacilityChange connection` | collection | Paged; requires `first:`. Nodes are [OrderFacilityChange](#orderfacilitychange). |

### Shipment

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `shipmentId` | `ID` | scalar | — |
| `shipmentTypeId` | `String` | scalar | — |
| `statusId` | `String` | scalar | — |
| `primaryOrderId` | `String` | scalar | — |
| `originFacilityId` | `String` | scalar | — |
| `destinationFacilityId` | `String` | scalar | — |
| `shipmentMethodTypeId` | `String` | scalar | — |
| `estimatedShipDate` | `DateTime` | scalar | — |
| `externalId` | `String` | scalar | — |

### ShipmentMethodType

| Field | Type | Kind | Notes |
| ----- | ---- | ---- | ----- |
| `shipmentMethodTypeId` | `ID` | scalar | — |
| `description` | `String` | scalar | — |

## Sort key enums

| Enum | Values |
| ---- | ------ |
| `FacilitySortKey` | `FACILITY_NAME`, `FACILITY_ID` |
| `InventoryLevelSortKey` | `PRODUCT_ID`, `FACILITY_ID` |
| `OrderSortKey` | `ORDER_DATE`, `ORDER_NAME`, `GRAND_TOTAL`, `ORDER_ID` |
| `PartySortKey` | `PARTY_ID`, `LAST_NAME` |
| `ProductSortKey` | `PRODUCT_NAME`, `PRODUCT_ID` |
| `ReturnSortKey` | `RETURN_DATE`, `STATUS`, `RETURN_ID` |
| `ShipmentSortKey` | `SHIPPED_DATE`, `STATUS`, `SHIPMENT_ID` |

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
