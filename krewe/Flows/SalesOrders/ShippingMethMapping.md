# Shipping Methods
Shipping methods in Shopify are mapped directly to specific methods in HotWax, but NetSuite has certain shipping methods being reused to serve multiple methods in HotWax.
Krewe also adjusts these methods periodicially or during certain events such as sales. Because of this semi-frequent editing, they should have access to updating these mappings themselves.

## How they're setup in HotWax
Shipping methods are setup just like any other instance. The name of the shipping method is mapped to the name of the shipping method that is received from Shopify. This may not always be the value that is configured against it in NetSuite. Often times a single method in NetSuite may be servicing multiple shipping methods in Shopify.

To map these methods to NetSuite, they will be set up in the HotWax integration table, mapping the original carrier and shipment method combination to the corresponding method in NetSuite.

When syncing orders to NetSuite, the integration layer will check saved shipping method mappings for a value where
type field value is NetSuite
the mapped key matches shipment method type ID of the order ship group

The integration layer will then use the mapped value of this record and include it in the order creation feed to NetSuite.

Methods in Shopify are linked directly to one carrier as well, and the methods in NetSuite also have carrier’s linked to them internally. Because of this simple mapping, we are only storing the shipment method type in the integration layer. 

<!-- todo: identify the mappings that are actually used in production -->

## Mappings

| Shopify Value                             | HotWax ID             | Netsuite Value                             |
|-------------------------------------------|-----------------------|--------------------------------------------|
| FREE 2-Day Shipping                       | FRE_2_DAY_SHP         | 2-Day Shipping                             |
| Overnight Shipping                        | OVR_SHP               | FedEx Standard Overnight                   |
| FREE 2 Day Shipping                       | FRE_2DAY_SHP          | FedEx Home Delivery                        |
| 2-Day Shipping                            | 2_DAY_SHP             | 2-Day Shipping                             |
| 2 Day Shipping                            | 2DAY_SHP              | 2-Day Shipping                             |
| 2-Day FedEx Shipping                      | 2_DAY_FDX_SHP         | 2-Day Shipping                             |
| 2-3 Day International Shipping            | 2DAY_INT_SHP          | FedEx International Connect Plus           |
| 2-5 Day International Shipping            | 5DAY_INT_SHP          | FedEx International Connect Plus           |
| 2 Day Shipping 67G                        | 2DAY_SHP_67G          | 2-Day Shipping 67G                         |
| 2 Day FedEx Shipping                      | 2DAY_FDX_SHP          | FedEx Home Delivery                        |
| 3-Day Shipping                            | 3_DAY_SHP             | 2-Day Shipping                             |
| 3 Day Shipping                            | 3DAY_SHP              | FedEx Home Delivery                        |
| Ground Shipping                           | GRD_SHP               | FedEx Home Delivery                        |
| Free 3-Day Shipping                       | FREE_3_DAY            | USPS Shipping                              |
| Ground Economy Shipping                   | GRD_ECNMY             | FedEx Ground Economy                       |
| 3-Day Shipping PR                         | 3_DAY_SHP_PR          | USPS Shipping                              |

## XML Data

<details>
<summary>Production Shipping Methods</summary>

```xml
<ShipmentMethodType description="FREE 2-Day Shipping" shipmentMethodTypeId="FRE_2_DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2_DAY_SHP" sequenceNumber="63" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="FRE_2_DAY_SHP" shopifyShippingMethod="FREE 2-Day Shipping"/>

<ShipmentMethodType description="Overnight Shipping" shipmentMethodTypeId="OVR_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="OVR_SHP" sequenceNumber="68" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="OVR_SHP" shopifyShippingMethod="Overnight Shipping"/>

<ShipmentMethodType description="FREE 2 Day Shipping" shipmentMethodTypeId="FRE_2DAY_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2DAY_SHP" sequenceNumber="69" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="FRE_2DAY_SHP" shopifyShippingMethod="FREE 2 Day Shipping"/>

<ShipmentMethodType description="Expedited shipping" shipmentMethodTypeId="EXPEDITED" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="EXPEDITED" sequenceNumber="74" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="EXPEDITED" shopifyShippingMethod="EXPEDITED"/>

<ShipmentMethodType description="2-Day Shipping" shipmentMethodTypeId="2_DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHP" sequenceNumber="76" deliveryDays="3"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2_DAY_SHP" shopifyShippingMethod="2-Day Shipping"/>

<ShipmentMethodType description="2 Day Shipping" shipmentMethodTypeId="2DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_SHP" sequenceNumber="77" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2DAY_SHP" shopifyShippingMethod="2 Day Shipping"/>

<ShipmentMethodType description="2-Day FedEx Shipping" shipmentMethodTypeId="2_DAY_FDX_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_FDX_SHP" sequenceNumber="78" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_FDX_SHP" shopifyShippingMethod="2-Day FedEx Shipping"/>

<ShipmentMethodType description="2-3 Day International Shipping" shipmentMethodTypeId="2DAY_INT_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_INT_SHP" sequenceNumber="82" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2DAY_INT_SHP" shopifyShippingMethod="2-3 Day International Shipping"/>

<ShipmentMethodType description="2-5 Day International Shipping" shipmentMethodTypeId="5DAY_INT_SHP" parentTypeId="STANDARD"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="5DAY_INT_SHP" sequenceNumber="83" deliveryDays="3"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="5DAY_INT_SHP" shopifyShippingMethod="2-5 Day International Shipping"/>

<ShipmentMethodType description="2 Day Shipping 67G" shipmentMethodTypeId="2DAY_SHP_67G" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_SHP_67G" sequenceNumber="82" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2DAY_SHP_67G" shopifyShippingMethod="2 Day Shipping 67G"/>

<ShipmentMethodType description="2 Day FedEx Shipping" shipmentMethodTypeId="2DAY_FDX_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_FDX_SHP" sequenceNumber="83" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2DAY_FDX_SHP" shopifyShippingMethod="2 Day FedEx Shipping"/>

<ShipmentMethodType description="3-Day Shipping" shipmentMethodTypeId="3_DAY_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="USPS" roleTypeId="CARRIER" shipmentMethodTypeId="3_DAY_SHP" sequenceNumber="84" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="3_DAY_SHP" shopifyShippingMethod="3-Day Shipping"/>

<ShipmentMethodType description="3 Day Shipping" shipmentMethodTypeId="3DAY_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="3DAY_SHP" sequenceNumber="85" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="3DAY_SHP" shopifyShippingMethod="3 Day Shipping"/>

<ShipmentMethodType description="Ground Shipping" shipmentMethodTypeId="GRD_SHP" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="GRD_SHP" sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GRD_SHP" shopifyShippingMethod="Ground Shipping"/>

<ShipmentMethodType description="Ground Economy Shipping" shipmentMethodTypeId="GRD_ECNMY" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="GRD_ECNMY" sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GRD_ECNMY" shopifyShippingMethod="Ground Economy Shipping"/>

<ShipmentMethodType description="3-Day Shipping PR" shipmentMethodTypeId="3_DAY_SHP_PR" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="USPS" roleTypeId="CARRIER" shipmentMethodTypeId="3_DAY_SHP_PR" sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="3_DAY_SHP_PR" shopifyShippingMethod="3-Day Shipping PR"/>
```
</details>

Putting this data here, need to move netsuite setup
```
<EnumerationType description="Netsuite Integration Type Mapping" enumTypeId="NETSUITE" hasTable="N"/>
<Enumeration description="Shipping methods mapping between HotWax and Netsuite" enumId="NETSUITE_SHP_MTHD" enumName="Netsuite Shipping Method" enumTypeId="NETSUITE" sequenceId="1"/>
```

<details>
<summary>NetSuite Shipping Method Mappings</summary>
  
```xml
<IntegrationTypeMapping integrationMappingId="1" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="FRE_2_DAY_SHP" mappingValue="2-Day Shipping" />
<IntegrationTypeMapping integrationMappingId="2" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="OVR_SHP" mappingValue="FedEx Standard Overnight" />
<IntegrationTypeMapping integrationMappingId="3" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="FRE_2DAY_SHP" mappingValue="FedEx Home Delivery" />
<IntegrationTypeMapping integrationMappingId="4" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2_DAY_SHP" mappingValue="2-Day Shipping" />
<IntegrationTypeMapping integrationMappingId="5" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2DAY_SHP" mappingValue="2-Day Shipping" />
<IntegrationTypeMapping integrationMappingId="6" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2_DAY_FDX_SHP" mappingValue="2-Day Shipping" />
<IntegrationTypeMapping integrationMappingId="7" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2DAY_INT_SHP" mappingValue="FedEx International Connect Plus" />
<IntegrationTypeMapping integrationMappingId="8" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="5DAY_INT_SHP" mappingValue="FedEx International Connect Plus" />
<IntegrationTypeMapping integrationMappingId="9" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2DAY_SHP_67G" mappingValue="2-Day Shipping 67G" />
<IntegrationTypeMapping integrationMappingId="10" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2DAY_FDX_SHP" mappingValue="FedEx Home Delivery" />
<IntegrationTypeMapping integrationMappingId="11" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="3_DAY_SHP" mappingValue="2-Day Shipping" />
<IntegrationTypeMapping integrationMappingId="12" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="3DAY_SHP" mappingValue="FedEx Home Delivery" />
<IntegrationTypeMapping integrationMappingId="13" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="GRD_SHP" mappingValue="FedEx Home Delivery" />
<IntegrationTypeMapping integrationMappingId="14" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="FREE_3_DAY" mappingValue="USPS Shipping" />
<IntegrationTypeMapping integrationMappingId="15" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="GRD_ECNMY" mappingValue="FedEx Ground Economy" />
<IntegrationTypeMapping integrationMappingId="16" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="3_DAY_SHP_PR" mappingValue="USPS Shipping" />
<IntegrationTypeMapping integrationMappingId="17" integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="STANDARD" mappingValue="FedEx Home Delivery" />
```
</details>
