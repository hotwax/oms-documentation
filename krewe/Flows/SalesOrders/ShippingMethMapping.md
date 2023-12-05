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

If the shipping methods from Shopify are not mapped to a corresponding shipping method in HotWax they are defaulted to an out of the box “Standard” shipping method. To ensure orders still continue to flow to NetSuite we have added a default mapping for these methods in the integration table. Any order with a Standard shipping method is mapped to “Fedex Home Delivery” in NetSuite.

<!-- todo: identify the mappings that are actually used in production -->

## Mappings

| Shopify Shipping Method            | HotWax Shipment Method          | HotWax Description  | NetSuite Shipping Method       | FedEx Shipping Method             |
|------------------------------------|----------------------------------|--------------------------------------|--------------------------------|-----------------------------------|
| 2 Day FedEx Shipping               | FEDEX_HOME_DELIVERY              | FedEx Home Delivery                 | FedEx Home Delivery            | FedEx Home Delivery®               |
| 2 Day Shipping                     | 2_DAY_SHIPPING                   | 2-Day Shipping                       | 2-Day Shipping                 | FedEx 2Day®                        |
| 2-3 Day International Shipping     | INTERNATIONAL_CONNECT_PLUS       | FedEx International Connect Plus     | FedEx International Connect Plus | FedEx® International Connect Plus |
| 2-5 Day International Shipping     | INTERNATIONAL_CONNECT_PLUS       | FedEx International Connect Plus     | FedEx International Connect Plus | FedEx® International Connect Plus |
| 2-Day FedEx Shipping               | 2_DAY_SHIPPING                   | 2-Day Shipping                       | 2-Day Shipping                 | FedEx 2Day®                        |
| 2-Day Shipping                     | 2_DAY_SHIPPING                   | 2-Day Shipping                       | 2-Day Shipping                 | FedEx 2Day®                        |
| 2-Day Shipping 67G                  | 2_DAY_SHIPPING_67G               | 2-Day Shipping 67G                    | 2-Day Shipping 67G              | FedEx 2Day®                        |
| 3 Day Shipping                      | USPS_PRIORITY_MAIL                | USPS Shipping                      | USPS Shipping                  | USPS Priority Mail®                |
| 3-Day Express Saver                | EXPRESS_SAVER                    | FedEx Express Saver®                 | FedEx Express Saver®           | FedEx Express Saver®               |
| 3-Day Shipping                      | USPS_PRIORITY_MAIL                | USPS Shipping                      | USPS Shipping                  | USPS Priority Mail®                |
| 3-Day Shipping PR                   | USPS_PRIORITY_MAIL                | USPS Shipping                       | USPS Shipping                  | USPS Priority Mail®                |
| FedEx 2Day®                        | 2_DAY_SHIPPING                   | 2-Day Shipping                         | 2-Day Shipping                    | FedEx 2Day®                     |
| FedEx Ground Shipping               | GROUND                           | FedEx Ground                        | FedEx Ground                   | FedEx Ground®                      |
| FedEx International Connect Plus    | INTERNATIONAL_CONNECT_PLUS       | FedEx International Connect Plus     | FedEx International Connect Plus | FedEx® International Connect Plus |
| FedEx International Economy®        | INTERNATIONAL_ECONOMY            | FedEx International Economy®         | FedEx International Economy®   | FedEx International Economy®       |
| FedEx International Priority®       | INTERNATIONAL_PRIORITY           | FedEx International Priority®        | FedEx International Priority®  | FedEx International Priority®      |
| FREE 2 Day Shipping                 | FEDEX_HOME_DELIVERY              | FedEx Home Delivery                 | FedEx Home Delivery            | FedEx Home Delivery®               |
| FREE 2-Day Shipping                 | 2_DAY_SHIPPING                   | FREE 2-Day Shipping                   | 2-Day Shipping                 | FedEx 2Day®                        |
| Free 3-Day Shipping                 | USPS_PRIORITY_MAIL                | Free 3-Day Shipping                   | USPS Shipping                  | USPS Priority Mail®                |
| Ground Economy Shipping             | GROUND_ECONOMY                   | Ground Economy Shipping               | FedEx Ground Economy            | FedEx Ground® Economy              |
| Ground Shipping                     | GROUND                           | Ground Shipping                       | FedEx Home Delivery            | FedEx Home Delivery®               |
| Overnight Shipping                  | STANDARD_OVERNIGHT               | Overnight Shipping                    | Fedex Standard Overnight        | FedEx Standard Overnight®          |
| Standard Ground Shipping            | STANDARD_GROUND                  | Standard Ground Shipping               | FedEx Home Delivery            | FedEx Home Delivery®               |



## XML Data

<details>
<summary>Production Shipping Methods</summary>

```xml
<!-- Shipment Method Types -->
<ShipmentMethodType shipmentMethodTypeId="FEDEX_HOME_DELIVERY" description="FedEx Home Delivery" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="2_DAY_SHIPPING" description="2-Day Shipping" parentTypeId="SECOND_DAY"/>
<ShipmentMethodType shipmentMethodTypeId="2_DAY_SHIPPING_67G" description="2-Day Shipping 67G" parentTypeId="SECOND_DAY"/>
<ShipmentMethodType shipmentMethodTypeId="INTL_CONNECT_PLUS" description="FedEx International Connect Plus" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="GROUND_ECONOMY" description="FedEx Ground Economy" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="GROUND" description="FedEx Ground" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="STANDARD_OVERNIGHT" description="FedEx Standard Overnight" parentTypeId="NEXT_DAY"/>
<ShipmentMethodType shipmentMethodTypeId="EXPRESS_SAVER" description="FedEx Express Saver®" parentTypeId="THIRD_DAY"/>
<ShipmentMethodType shipmentMethodTypeId="INTL_ECONOMY" description="FedEx International Economy®" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="INTL_PRIORITY" description="FedEx International Priority®" parentTypeId="STANDARD"/>
<ShipmentMethodType shipmentMethodTypeId="USPS_PRIORITY" description="USPS Shipping" parentTypeId="STANDARD"/>
<!-- Add more ShipmentMethodType entries as needed -->

<!-- Carrier Shipment Methods -->
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FEDEX_HOME_DELIVERY" carrierServiceCode="GROUND_HOME_DELIVERY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHIPPING" carrierServiceCode="FEDEX_2_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHIPPING_67G" carrierServiceCode="FEDEX_2_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_CONNECT_PLUS" carrierServiceCode="FEDEX_CARGO_INTERNATIONAL_PREMIUM"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="GROUND_ECONOMY" carrierServiceCode="SMART_POST"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="GROUND" carrierServiceCode="FEDEX_GROUND"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="STANDARD_OVERNIGHT" carrierServiceCode="STANDARD_OVERNIGHT"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="EXPRESS_SAVER" carrierServiceCode="FEDEX_EXPRESS_SAVER"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_ECONOMY" carrierServiceCode="INTERNATIONAL_ECONOMY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_PRIORITY" carrierServiceCode="FEDEX_INTERNATIONAL_PRIORITY"/>
<CarrierShipmentMethod partyId="USPS" roleTypeId="CARRIER" shipmentMethodTypeId="USPS_PRIORITY" carrierServiceCode="PRIORITY_OVERNIGHT"/>
<!-- Add more CarrierShipmentMethod entries as needed -->
```
</details>

<details>
<summary>Shopify Mapping</summary>

```xml
<!-- ShopifyShopCarrierShipment entries -->
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="2 Day FedEx Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="2 Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="INTL_CONNECT_PLUS" shopifyShippingMethod="2-3 Day International Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="INTL_CONNECT_PLUS" shopifyShippingMethod="2-5 Day International Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="2-Day FedEx Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="2-Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="2-Day Shipping 67G"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="USPS_PRIORITY" shopifyShippingMethod="3 Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="EXPRESS_SAVER" shopifyShippingMethod="3-Day Express Saver"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="USPS_PRIORITY" shopifyShippingMethod="3-Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="USPS_PRIORITY" shopifyShippingMethod="3-Day Shipping PR"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="FedEx 2Day®"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GROUND" shopifyShippingMethod="FedEx Ground Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="INTL_CONNECT_PLUS" shopifyShippingMethod="FedEx International Connect Plus"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="INTL_ECONOMY" shopifyShippingMethod="FedEx International Economy®"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="INTL_PRIORITY" shopifyShippingMethod="FedEx International Priority®"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="FEDEX_HOME_DELIVERY" shopifyShippingMethod="FREE 2 Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2_DAY_SHIPPING" shopifyShippingMethod="FREE 2-Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="USPS_PRIORITY" shopifyShippingMethod="Free 3-Day Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GROUND_ECONOMY" shopifyShippingMethod="Ground Economy Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GROUND" shopifyShippingMethod="Ground Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="STANDARD_OVERNIGHT" shopifyShippingMethod="Overnight Shipping"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GROUND" shopifyShippingMethod="Standard Ground Shipping"/>
```
</details>


<details>
<summary>NetSuite Shipping Method Mappings</summary>
  
```xml
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="FEDEX_HOME_DELIVERY" mappingValue="4236" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2_DAY_SHIPPING" mappingValue="711" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="INTL_CONNECT_PLUS" mappingValue="38045" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="2_DAY_SHIPPING_67G" mappingValue="38980" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="USPS_PRIORITY" mappingValue="28394" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="EXPRESS_SAVER" mappingValue="39610" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="GROUND" mappingValue="4164" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="INTERNATIONAL_ECONOMY" mappingValue="4366" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="INTERNATIONAL_PRIORITY" mappingValue="4367" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="GROUND_ECONOMY" mappingValue="39920" />
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="STANDARD_OVERNIGHT" mappingValue="27483" />
<!-- fallback shipping method -->
<IntegrationTypeMapping integrationTypeId="NETSUITE_SHP_MTHD" mappingKey="STANDARD" mappingValue="4236" />
```
</details>

<details>
<summary>Product Store Shipment Methods in HotWax</summary>
  
```xml
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="FEDEX_HOME_DELIVERY" roleTypeId="CARRIER" shipmentMethodTypeId="FEDEX_HOME_DELIVERY"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="2_DAY_SHIPPING" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHIPPING"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="2_DAY_SHIPPING_67G" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHIPPING_67G"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="INTL_CONNECT_PLUS" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_CONNECT_PLUS"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="GROUND_ECONOMY" roleTypeId="CARRIER" shipmentMethodTypeId="GROUND_ECONOMY"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="GROUND" roleTypeId="CARRIER" shipmentMethodTypeId="GROUND"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="STANDARD_OVERNIGHT" roleTypeId="CARRIER" shipmentMethodTypeId="STANDARD_OVERNIGHT"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="EXPRESS_SAVER" roleTypeId="CARRIER" shipmentMethodTypeId="EXPRESS_SAVER"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="INTL_ECONOMY" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_ECONOMY"/>
<ProductStoreShipmentMeth partyId="FEDEX" productStoreId="STORE" productStoreShipMethId="INTL_PRIORITY" roleTypeId="CARRIER" shipmentMethodTypeId="INTL_PRIORITY"/>
<ProductStoreShipmentMeth partyId="USPS" productStoreId="STORE" productStoreShipMethId="USPS_PRIORITY" roleTypeId="CARRIER" shipmentMethodTypeId="USPS_PRIORITY"/>
```
</details>
