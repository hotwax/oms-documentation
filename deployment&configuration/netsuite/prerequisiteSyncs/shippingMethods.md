# Shipping methods

When syncing orders to NetSuite it's very important to have the correct shipping methods mapped. If shipping methods are not mapped correctly the order import process may fail.

Oftentimes a single method in NetSuite may be servicing multiple shipping methods from eCommerce. When the shipping methods are configured, eCommerce and HotWax are mapped 1:1 and the corresponding NetSuite shipping method is saved in the "Service Code" field of the shipping method.

Depending on the NetSuite order import configuration, the ‘service code’ field should include either the method name or ID.

## Sample data:

**Shipping method:**
```
<ShipmentMethodType description="FREE 2-Day Shipping" shipmentMethodTypeId="FRE_2_DAY_SHP" parentTypeId="SECOND_DAY"/>
```
**Carrier and Shipment Method:**
```
<CarrierShipmentMethod partyId="FEDEX" roleTypeId="CARRIER" shipmentMethodTypeId="FRE_2_DAY_SHP" carrierServiceCode=”NetSuiteName” sequenceNumber="63" deliveryDays="2"/>
```
**Shopify and carrier shipment method mapping**
```
<ShopifyShopCarrierShipment shopId="SHOP" carrierPartyId="_NA_" shipmentMethodTypeId="FRE_2_DAY_SHP" shopifyShippingMethod="FREE 2-Day Shipping"/>
```
