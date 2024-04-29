# Payment Methods


This page contains the payment method mappings for Shopify <> HotWax <> NetSuite

In case a payment method in Shopify and HotWax is not mapped to a payment method in NetSuite, the integration layer will fall back to a `DEFAULT` payment method. As of April, this fallback payment method is mapped to “Shopify Payment” in NetSuite.

<details>

<summary>NetSuite Payment Methods Mapping</summary>

```xml
<IntegrationTypeMapping description="Afterpay" integrationMappingId="10002" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_AFTRPAY" mappingValue="21"/>
<IntegrationTypeMapping description="American Express" integrationMappingId="10003" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_AMEX" mappingValue="9"/>
<IntegrationTypeMapping description="COD" integrationMappingId="10004" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_CASH_ON_DEL" mappingValue="20"/>
<IntegrationTypeMapping description="Discover Card" integrationMappingId="10005" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_DISCOVER" mappingValue="10"/>
<IntegrationTypeMapping description="Klarna" integrationMappingId="10006" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_KLARNA" mappingValue="37"/>
<IntegrationTypeMapping description="Mastercard" integrationMappingId="10007" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_MASTERCARD" mappingValue="4"/>
<IntegrationTypeMapping description="Shopify Installments" integrationMappingId="10008" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_PAY_INSTALL" mappingValue="30"/>
<IntegrationTypeMapping description="VISA" integrationMappingId="10009" integrationTypeId="NETSUITE_PMT_MTHD" mappingKey="EXT_SHOP_VISA" mappingValue="7"/>
```

</details>



