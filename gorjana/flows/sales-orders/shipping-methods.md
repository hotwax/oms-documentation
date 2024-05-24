# Shipping Methods

## ShipHawk custom fields
When orders are fulfilled from NetSuite, they do not populate the native NetSuite carrier field. Instead, because Gorjana uses ShipHawk for packing and shipping, the actual carrier used is saved in ShipHawk's custom table in NetSuite.

## Shipping methods used

| Shipping methods        | NetSuite ID | Shopify ID             |
|-------------------------|-------------|------------------------|
| Digital (POS)           |             |                        |
| Store Pickup            |             |                        |
| Same Day                |             |                        |
| 2 Day                   | 16637       | Free 2 Day             |
| Overnight               |             |                        |
| Standard                | 2830        | Standard               |
| Standard International  | 17343       | Standard International |
| Express DDP             |             |                        |
| DDP                     |             |                        |

## XML Data

<details>

<summary>Shipping Methods</summary>

```xml
<!-- Shipment Method Types -->
<ShipmentMethodType description="Free 2 Day" shipmentMethodTypeId="FRE_2_DAY_SHP" parentTypeId=""/>
<ShipmentMethodType description="Standard International" shipmentMethodTypeId="STANDARD_ITNL" parentTypeId=""/>
<ShipmentMethodType description="Standard" shipmentMethodTypeId="STANDARD" parentTypeId=""/>

<!-- Carrier Shipment Methods -->
<CarrierShipmentMethod partyId="NA" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2_DAY_SHP" sequenceNumber="63" deliveryDays="2"/>
<CarrierShipmentMethod partyId="NA" roleTypeId="CARRIER" shipmentMethodTypeId="STANDARD" sequenceNumber="40" deliveryDays="4"/>
<CarrierShipmentMethod partyId="NA" roleTypeId="CARRIER" shipmentMethodTypeId="STANDARD_ITNL" sequenceNumber="63" deliveryDays="7"/>
```

</details>

<details>

<summary>Shopify Shipping Method Mappings</summary>

```xml
<ShopifyShopCarrierShipment shopId="10000" carrierPartyId="NA" shipmentMethodTypeId="FRE_2_DAY_SHP" shopifyShippingMethod="Free 2 Day"/>
<ShopifyShopCarrierShipment shopId="10000" carrierPartyId="NA" shipmentMethodTypeId="STANDARD_ITNL" shopifyShippingMethod="Standard International"/>
<ShopifyShopCarrierShipment shopId="10000" carrierPartyId="NA" shipmentMethodTypeId="STANDARD" shopifyShippingMethod="Standard"/>
```

</details>

<details>

<summary>NetSuite Shipping Method Mappings</summary>

```xml
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="FRE_2_DAY_SHP" mappingValue="16637" description="Free 2 Day"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="STANDARD_ITNL" mappingValue="17343" description="Standard International"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="STANDARD" mappingValue="2830" description="Standard"/>
```

</details>