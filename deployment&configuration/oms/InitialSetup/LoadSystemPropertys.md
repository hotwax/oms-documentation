# Load System Property Data

System Property data includes a variety of system level configurations that change the lower level configurations of how an instance runs. Double checking these is very important.

System Properties need to be added from the XML data import page in WebTools, the backend service application of HotWax Commerce.

```
<!-- Generally good defaults will work -->
<SystemProperty systemResourceId="general" systemPropertyId="ORGANIZATION_PARTY" systemPropertyValue="COMPANY" description="The default organizationPartyId for used in dropdowns and reports"/>

<SystemProperty systemResourceId="BuynowConfig" systemPropertyId="buynow.productStore.productStoreName" systemPropertyValue="Default product store"/>


<!-- Customized in case of non US customers -->
<SystemProperty systemResourceId="general" systemPropertyId="currency.uom.id.default" systemPropertyValue="British Pound" description="The default currency to use for prices, etc"/>

<SystemProperty systemResourceId="general" systemPropertyId="country.geo.id.default" systemPropertyValue="UK" description="The default country for drop downs, phone number validation etc"/>

<!-- Add shipment weight in Kg in UK while in US add lb -->
<SystemProperty systemResourceId="shipment" systemPropertyId="shipment.default.weight.uom" systemPropertyValue="WT_kg" description="The shipment weight to use for shipment, etc"/>

Or

<SystemProperty systemResourceId="shipment" systemPropertyId="shipment.default.weight.uom" systemPropertyValue="WT_lb" description="The shipment weight to use for shipment, etc"/>


<SystemProperty systemResourceId="shipment" systemPropertyId="shipment.default.dimension.uom" systemPropertyValue="LEN_in" description="The shipment dimension to use for shipment, etc"/>


<SystemProperty systemResourceId="BuynowCatalog" systemPropertyId="default.weight.uom" systemPropertyValue="WT_lb" description="The default weight to use for prices, etc"/>

<SystemProperty systemResourceId="DateTimeFormats" systemPropertyId="date.format.short" systemPropertyValue="MM-dd-yyyy"/>

<SystemProperty systemResourceId="DateTimeFormats" systemPropertyId="date.format.long" systemPropertyValue="MM-dd-yyyy hh:mm:ss a"/>

<SystemProperty systemResourceId="DateTimeFormats" systemPropertyId="date.format.default" systemPropertyValue="MM-dd-yyyy hh:mm a"/>


<!-- Backorder and Preorder settings -->
<SystemProperty systemResourceId="PreorderConfig" systemPropertyId="STORE.is.backorder.enabled" systemPropertyValue="Y" description="Flag to identify backorder setting for product store"/>

<SystemProperty systemResourceId="ShopifyServiceConfig" systemPropertyId="CONFIG.preorder.item.property.name" systemPropertyValue="Pre-Order"/>




<!-- Always customized -->
<SystemProperty systemResourceId="content" systemPropertyId="baseUrl" systemPropertyValue="https://{your-instance}.hotwax.io"/>

<SystemProperty systemPropertyId="content.url.prefix.secure" systemPropertyValue="https://{your-instance}.hotwax.io" systemResourceId="url"/>

<SystemProperty systemPropertyId="content.url.prefix.standard" systemPropertyValue="https://{your-instance}.hotwax.io" systemResourceId="url"/>

<!-- Data set for Import App -->
<SystemProperty systemResourceId="default.productstoreid" systemPropertyId="BuynowCatalog" systemPropertyValue="STORE"/>



<!-- Data set for FTP connection -->
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="ftp.server.hostname"  systemPropertyValue=""/>
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="ftp.server.username"  systemPropertyValue=""/>
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="ftp.server.password"  systemPropertyValue=""/>
<SystemProperty systemResourceId="FTP_CONFIG" systemPropertyId="ftp.server.port"  systemPropertyValue=""/>
```