# Shipping Methods
Shipping methods in Shopify are mapped directly to specific methods in HotWax, but NetSuite has certain shipping methods being reused to serve multiple methods in HotWax.
Krewe also adjusts these methods periodicially or during certain events such as sales. Because of this semi-frequent editing, they should have access to updating these mappings themselves.

## How they're setup in HotWax
Shipping methods are setup just like any other instance. The name of the shipping method is mapped to the name of the shipping method that is received from Shopify. This may not always be the value that is configured against it in NetSuite. Often times a single method in NetSuite may be servicing multiple shipping methods in Shopify.

When the shipping methods are configured, Shopify and HotWax are mapped 1:1 and the corresponding NetSuite shipping method is saved in the "Service Code" field of the shipping method. When a Shopify shipping method needs to be mapped to a different NetSuite shipping method, the value in the "Service Code" field needs to be updated in HotWax.

<!-- todo: identify the mappings that are actually used in production -->

## Mappings

| Shopify Value                             | HotWax ID             | Netsuite Value                             |
|-------------------------------------------|-----------------------|--------------------------------------------|
| Priority Shipping (3-5 Day)               | PRI_SHP_3DAY          | Priority Shipping (3-5 Day)                |
| FREE 2-Day Shipping                       | FRE_2_DAY_SHP         | 2-Day Shipping                             |
| FREE Standard Shipping (7-10 Days)        | FRE_STD_SHP_7DAY      | FREE Standard Shipping - Fedex Smartpost Select Lightweight |
| DHL api Express Worldwide                 | DHL_API_EXP_WW        | DHL Express Worldwide                      |
| FedEx International Priority®             | FDX_INT_PRI           | FedEx International Priority               |
| FedEx International Economy®              | FDX_INT_ECO           | FedEx International Economy                |
| Overnight Shipping                        | OVR_SHP               | FedEx Standard Overnight                   |
| FREE 2 Day Shipping                       | FRE_2DAY_SHP          | FedEx Home Delivery                        |
| FedEx 2Day                                | FDX_2DAY              | 2-Day Shipping                             |
| Standard Shipping                         | STD_SHP               | 2-Day Shipping                             |
| SecondDay                                 | SEC_DAY               | FREE FedEx 2-Day                           |
| Standard                                  | STANDARD              | 2-Day Shipping                             |
| EXPEDITED                                 | EXPEDITED             | 2-Day Shipping                             |
| SmartPost Standard Shipping (7-10 Days)   | SMP_STD_SHP_7DAY      | SmartPost Standard Shipping (7-10 Days)    |
| 2-Day Shipping                            | 2_DAY_SHP             | 2-Day Shipping                             |
| 2 Day Shipping                            | 2DAY_SHP              | 2-Day Shipping                             |
| 2-Day FedEx Shipping                      | 2_DAY_FDX_SHP         | 2-Day Shipping                             |
| FedEx International Priority Express      | FDX_INT_PRI_EXP       | FedEx International Priorit y              |
| FedEx International Connect Plus          | FDX_INT_CNT_PLS       | FedEx International Connect Plus           |
| FedEx Ground Shipping                     | FDX_INT_GRD_SHP       | FedEx Ground                               |
| 2-3 Day International Shipping            | 2DAY_INT_SHP          | FedEx International Connect Plus           |
| 2-5 Day International Shipping            | 5DAY_INT_SHP          | FedEx International Connect Plus           |
| 2 Day Shipping 67G                        | 2DAY_SHP_67G          | 2-Day Shipping 67G                         |
| 2 Day FedEx Shipping                      | 2DAY_FDX_SHP          | FedEx Home Delivery                        |
| 3-Day Shipping                            | 3_DAY_SHP             | 2-Day Shipping                             |
| 3 Day Shipping                            | 3DAY_SHP              | FedEx Home Delivery                        |
| Standard Ground Shipping                  | STD_GRD_SHP           | FedEx Home Delivery                        |
| Ground Shipping                           | GRD_SHP               | FedEx Home Delivery                        |
| Shipping                                  | SHP                   | USPS Shipping                              |

## XML Data

<details>
<!-- need to add service codes -->
<summary>Shipping Method for POS Completed Orders</summary>

```xml
<ShipmentMethodType shipmentMethodTypeId="POS_COMPLETED" description="POS Completed"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="POS_COMPLETED" sequenceNumber="60" />
```
</details>

<details>
<summary>Production Shipping Methods</summary>

```xml
<ShipmentMethodType description="FREE 2-Day Shipping" shipmentMethodTypeId="FRE_2_DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2_DAY_SHP" sequenceNumber="63" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="FRE_2_DAY_SHP" shopifyShippingMethod="FREE 2-Day Shipping"/>

<ShipmentMethodType description="Overnight Shipping” shipmentMethodTypeId=”OVR_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="OVR_SHP" sequenceNumber="68" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="OVR_SHP" shopifyShippingMethod="Overnight Shipping"/>

<ShipmentMethodType description="FREE 2 Day Shipping” shipmentMethodTypeId=”FRE_2DAY_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2DAY_SHP" sequenceNumber="69" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="FRE_2DAY_SHP" shopifyShippingMethod="FREE 2 Day Shipping"/>

<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="EXPEDITED" sequenceNumber="74" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="EXPEDITED" shopifyShippingMethod="EXPEDITED"/>

<ShipmentMethodType description="2-Day Shipping” shipmentMethodTypeId=”2_DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_SHP" sequenceNumber="76" deliveryDays="3"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2_DAY_SHP" shopifyShippingMethod="2-Day Shipping"/>

<ShipmentMethodType description="2 Day Shipping” shipmentMethodTypeId=”2DAY_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_SHP" sequenceNumber="77" deliveryDays="1"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2DAY_SHP" shopifyShippingMethod="2 Day Shipping"/>

<ShipmentMethodType description="2-Day FedEx Shipping" shipmentMethodTypeId="2_DAY_FDX_SHP" parentTypeId="SECOND_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2_DAY_FDX_SHP" sequenceNumber="78" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2_DAY_FDX_SHP" shopifyShippingMethod="2-Day FedEx Shipping"/>

<ShipmentMethodType description="2-3 Day International Shipping” shipmentMethodTypeId=”2DAY_INT_SHP" parentTypeId="NEXT_DAY"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_INT_SHP” sequenceNumber="82" deliveryDays="2"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2DAY_INT_SHP” shopifyShippingMethod="2-3 Day International Shipping"/>

<ShipmentMethodType description="2-5 Day International Shipping” shipmentMethodTypeId=”5DAY_INT_SHP" parentTypeId="STANDARD"/>
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="5DAY_INT_SHP” sequenceNumber="83" deliveryDays="3"/>
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="5DAY_INT_SHP” shopifyShippingMethod="2-5 Day International Shipping"/>

<ShipmentMethodType description="2 Day Shipping 67G” shipmentMethodTypeId=”2DAY_SHP_67G" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_SHP_67G” sequenceNumber="82" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="2DAY_SHP_67G” shopifyShippingMethod="2 Day Shipping 67G"/>

<ShipmentMethodType description="2 Day FedEx Shipping” shipmentMethodTypeId=”2DAY_FDX_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="2DAY_FDX_SHP” sequenceNumber="83" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="2DAY_FDX_SHP” shopifyShippingMethod="2 Day FedEx Shipping"/>

<ShipmentMethodType description="3-Day Shipping” shipmentMethodTypeId=”3_DAY_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="3_DAY_SHP” sequenceNumber="84" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="3_DAY_SHP” shopifyShippingMethod="3-Day Shipping"/>

<ShipmentMethodType description="3 Day Shipping" shipmentMethodTypeId="3DAY_SHP" parentTypeId="NEXT_DAY"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="3DAY_SHP" sequenceNumber="85" deliveryDays="2" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="3DAY_SHP" shopifyShippingMethod="3 Day Shipping"/>

<ShipmentMethodType description="Ground Shipping” shipmentMethodTypeId=”GRD_SHP" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="GRD_SHP” sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GRD_SHP” shopifyShippingMethod=”Ground Shipping"/>

<ShipmentMethodType description="Free 3-Day Shipping” shipmentMethodTypeId=”FREE_3_DAY" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="FREE_3_DAY” sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="FREE_3_DAY” shopifyShippingMethod=”Ground Shipping"/>

<ShipmentMethodType description="Ground Economy Shipping” shipmentMethodTypeId=”GRD_ECNMY" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="GRD_ECNMY” sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="FEDEX" shipmentMethodTypeId="GRD_ECNMY” shopifyShippingMethod=”Ground Shipping"/>

<ShipmentMethodType description="3-Day Shipping PR” shipmentMethodTypeId=”3_DAY_SHP_PR" parentTypeId="STANDARD"/> 
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="3_DAY_SHP_PR” sequenceNumber="87" deliveryDays="3" /> 
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="USPS" shipmentMethodTypeId="3_DAY_SHP_PR” shopifyShippingMethod=”Ground Shipping"/>
```
</details>