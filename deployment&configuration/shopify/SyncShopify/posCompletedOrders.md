# POS Completed Orders

Orders created and fulfilled in Shopify POS as normal cash sales are imported into HotWax as completed orders. A scheduled process identifies all these orders and issues inventory against them to maintain an accurate inventory level for all retail locations. To identify these orders, these orders are imported with a special shipping method, “POS Completed”.

To enable inventory issuance for these orders, please contact the integration team.

When these orders are posted to NetSuite they are posted as Cash Sales. They follow all the same order mapping rules as other orders, such as order type, channel, etc.

<details>

<summary>Shipping Method for POS Completed Orders</summary>

```xml
<ShipmentMethodType shipmentMethodTypeId="POS_COMPLETED" description="POS Completed"/>
<CarrierShipmentMethod partyId="_NA_" roleTypeId="CARRIER" shipmentMethodTypeId="POS_COMPLETED" sequenceNumber="60" />
```
</details>


## Multi Shopify Instance

When setting up HotWax OMS with multiple Shopify stores, make sure to complete product sync configurations before enabling order sync. Without correct product sycning configuration, the orders from the additional product stores will not import correctly.

