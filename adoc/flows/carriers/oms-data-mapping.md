# Shipping Aggregator: OMS Data & Mapping Layer

This document details how data is extracted from the HotWax Commerce OMS and transformed into the generic format expected by the Maarg Aggregator.

## 1. Data Extraction (OMS Side)

The primary entry point in the OMS is `MoquiAggregatorRequestServices.java`. It gathers data from the following entities:

| Entity | Key Fields Extracted | Purpose |
| :--- | :--- | :--- |
| **Shipment** | `shipmentId`, `primaryOrderId`, `partyIdFrom`, `shipmentTypeId` | Base shipment identification and sender. |
| **OrderHeader** | `orderId`, `orderDate`, `orderTypeId`, `currencyUomId` | Order context and date of sale. |
| **OrderAttribute** | `attrName='customerId'`, `attrName='municipio_carrier_id'`, etc. | Carrier-specific identification for customers and locations. |
| **PostalAddress** | `address1`, `city`, `postalCode`, `stateProvinceGeoId`, `countryGeoId` | Origin and Destination addresses. |
| **Geo** | `geoCode` | Standardized Country and State codes. |
| **OrderPaymentPreference** | `paymentMethodTypeId`, `statusId` | Identifying COD (Cash on Delivery) requirements. |
| **ShipmentPackage** | `length`, `width`, `height`, `weight`, `weightUomId` | Parcel dimensions and weight. |
| **FacilityIdentification** | `idValue` (e.g., `TRML_EXP_WH_ID`) | External ID of the warehouse/store for the carrier. |

## 2. Transformation Layer (FTL Templates)

The data is mapped to JSON using FreeMarker templates in the plugin's `template/shipping/` directory.

### Example Mapping: `AggregatorLabelTemplate.json.ftl`

| Aggregator Field | Source (OMS) | Note |
| :--- | :--- | :--- |
| `shippingGatewayConfigId` | `ShippingGatewayConfig` ID | Determines the carrier routing in Maarg. |
| `dateOfSale` | `orderDate` | Format: YYYY-MM-DD. |
| `originAddress` | `shipperAddressDetail` | Fetched from the Facility's PRIMARY_LOCATION. |
| `destAddress` | `shipToAddress` | Fetched from the Shipment's destination address. |
| `parcels` | `ShipmentPackage` list | Includes weight, dimensions, and unit of measure. |
| `cod` | `OrderPaymentPreference` | Boolean: True if payment method is `EXT_SHOP_CASH_ON_DEL`. |
| `validShipmentTotal` | `OrderReadHelper.getOrderItemsTotal` | Total value for insurance/customs/COD. |
| `facilityIdentification` | `FacilityIdentification` | Usually `TRML_EXP_WH_ID` for Terminal Express. |

## 3. Communication Layer (REST)

The prepared JSON is sent via `POST` to the Maarg instance.
- **Endpoint**: Configured on the OMS side as a System Property or `PartyRelationshipSetting`.
- **Security**: Usually protected by Basic Auth or API Key as configured in the `ShippingAggregatorHelper`.

## 4. Response Handling (OMS Side)

Once Maarg returns a response, `MoquiAggregatorRequestServices.java` processes it:
1. **Tracking IDs**: Stored in `ShipmentPackageRouteSeg.trackingCode`.
2. **Label Images**:
    - If PDF: Stored in `PartyContent` or `ShipmentContent`.
    - If URL: Stored in `ShipmentPackageRouteSeg.labelImageUrl`.
3. **Status Updates**: Shipment is moved to `SHIPMENT_SHIPPED` or `SHIPMENT_PACKED`.
