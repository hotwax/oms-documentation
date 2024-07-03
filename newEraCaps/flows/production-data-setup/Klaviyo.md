# Klaviyo Integration

## Adding API Key in HotWax Commerce

``` xml
<SystemMessageRemote authHeaderName="Authorization" description="Klaviyo API Configuration" publicKey="Klaviyo-API-Key privateKey" sendServiceName="sendKlaviyoEmailV2" sendUrl="https://a.klaviyo.com/api/" systemMessageRemoteId="KLAVIYO-STORE" username="" messageAuthEnumId="" currentPassword=""/>

<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="endPoint.events" systemPropertyValue="events"/>

<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="endPoint.track" systemPropertyValue="track"/>

<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="revision" systemPropertyValue="2023-12-15" description="API version identified by this revision date (v2023-12-15) used for Klaviyo integration as of the specified release."/>

```

## Add Product Store Setting in HotWax Commerce

### Ready for pickup

```xml
<ProductStoreEmailSetting emailType="PRDS_READY_TO_PICKUP" fromAddress="integrations@hotwax.co" productStoreId="STORE" subject="Ready For Pickup Email" systemMessageRemoteId="KLAVIYO-STORE" templateContentId="READY_FOR_PICKUP"/>
```

### BOPIS Rejected

```xml
<ProductStoreEmailSetting emailType="PRDS_RJCTSTORPCK_ORD" fromAddress="integrations@hotwax.co" productStoreId="STORE" subject="Reject BOPIS Order Item" systemMessageRemoteId="KLAVIYO-STORE" templateContentId="REJECT_BOPIS_ORDER"/>
```

## Add Preconfigured Data for the Email

### Ready for pickup

<details>
<summary>XML structure for Ready to Pickup email</summary>

```xml
<DataResource dataResourceId="READY_FOR_PICKUP" dataResourceTypeId="ELECTRONIC_TEXT"  dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>
<Content contentId="READY_FOR_PICKUP" contentTypeId="DOCUMENT" contentName="Template for klaviyo ready for pickup email" dataResourceId="READY_FOR_PICKUP" statusId="CTNT_PUBLISHED"/>
<ElectronicText dataResourceId="READY_FOR_PICKUP">
	<textData>
		<![CDATA[<#assign shipment = EntityQuery.use(delegator).from("Shipment").where("shipmentId", shipmentId!).queryOne()!/><#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", shipment.primaryOrderId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryOne()!/><#assign originFacility = EntityQuery.use(delegator).from("Facility").where("facilityId", shipment.originFacilityId!).queryOne()!/><#assign postalAddress = EntityQuery.use(delegator).from("PostalAddressAndGeo").where("contactMechId", shipment.originContactMechId!).queryOne()!/><#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/><#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", shipment.partyIdTo!).queryOne()!/><#assign shipmentItems = EntityQuery.use(delegator).from("ShipmentItem").where("shipmentId", shipmentId!).queryList()!/><#assign shipGroupTotalItemAmount = CsrOrderHelper.getShipGroupItemsTotalWithItemAdjustments(delegator, orderId, primaryShipGroup)! /><#assign shipGroupTotal = CsrOrderHelper.getShipGroupTotal(delegator, orderId, primaryShipGroup)! /> {     "first_name": "${customer.firstName!}",     "last_name": "${customer.lastName!}",     "ship_from": {         "to_name": "${originFacility.facilityName!}",         "address1": "${postalAddress.address1!}",         "address2": "${postalAddress.address2!}",         "city": "${postalAddress.city!}",         "state_name": "${postalAddress.stateName!}",         "country_name": "${postalAddress.countryName!}"     },     "order_name": "${orderHeader.orderName!}",     "order_items": [         <#list shipmentItems as shipmentItem><#assign orderShipment = EntityQuery.use(delegator).from("OrderShipment").where("shipmentId", shipmentId!,"shipmentItemSeqId", shipmentItem.shipmentItemSeqId!,"shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryFirst()! /><#assign orderItem = EntityQuery.use(delegator).from("OrderItem").where("orderId", orderId!,"orderItemSeqId", orderShipment.orderItemSeqId!).queryOne()!/><#assign product = EntityQuery.use(delegator).from("Product").where("productId", shipmentItem.productId).queryOne()!/><#assign parentProduct = EntityQuery.use(delegator).from("ProductAssoc").where("productIdTo", product.productId, "productAssocTypeId", "PRODUCT_VARIANT").queryFirst()! /><#assign parentProductDetail = EntityQuery.use(delegator).from("Product").where("productId", parentProduct.productId).queryOne()!/><#assign productUrlVirtual = (ProductContentWrapper.getProductContentAsText(parentProductDetail, "IMAGE", locale, dispatcher, "string")) !/><#assign productUrlVariant = (ProductContentWrapper.getProductContentAsText(product, "IMAGE", locale, dispatcher, "string")) !/>             {                 "image_url_virtual": "${productUrlVirtual!}",                 "image_url_variant": "${productUrlVariant!}",                 "product_name": "${orderItem.itemDescription!} ${product.productName!}",                 "quantity": "${shipmentItem.quantity!}",                 "price": "${orderItem.unitPrice}"             }             <#if shipmentItem_has_next>,</#if></#list>     ],     "subtotal": "${shipGroupTotalItemAmount}",     "grand_total": "${shipGroupTotal!}" }]]>
	</textData>
</ElectronicText>
```
</details>

### BOPIS Rejected
 
<details>
<summary>XML structure for BOPIS Rejceted email</summary>

```xml
<DataResource dataResourceId="REJECT_BOPIS_ORDER" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>
<Content contentId="REJECT_BOPIS_ORDER" contentName="Template for klaviyo reject BOPIS order email" contentTypeId="DOCUMENT" dataResourceId="REJECT_BOPIS_ORDER" statusId="CTNT_PUBLISHED"/> 
	<ElectronicText dataResourceId="REJECT_BOPIS_ORDER">
	<textData>
		<![CDATA[<#assign shipment = EntityQuery.use(delegator).from("Shipment").where("shipmentId", shipmentId!).queryOne()!/><#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", shipment.primaryOrderId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryOne()!/><#assign originFacility = EntityQuery.use(delegator).from("Facility").where("facilityId", shipment.originFacilityId!).queryOne()!/><#assign postalAddress = EntityQuery.use(delegator).from("PostalAddressAndGeo").where("contactMechId", shipment.originContactMechId!).queryOne()!/><#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/><#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", shipment.partyIdTo!).queryOne()!/><#assign shipmentItems = EntityQuery.use(delegator).from("ShipmentItem").where("shipmentId", shipmentId!).queryList()!/><#assign shipGroupTotalItemAmount = CsrOrderHelper.getShipGroupItemsTotalWithItemAdjustments(delegator, orderId, primaryShipGroup)! /><#assign shipGroupTotal = CsrOrderHelper.getShipGroupTotal(delegator, orderId, primaryShipGroup)! /> {     "first_name": "${customer.firstName!}",     "last_name": "${customer.lastName!}",     "ship_from": {         "to_name": "${originFacility.facilityName!}",         "address1": "${postalAddress.address1!}",         "address2": "${postalAddress.address2!}",         "city": "${postalAddress.city!}",         "state_name": "${postalAddress.stateName!}",         "country_name": "${postalAddress.countryName!}"     },     "order_name": "${orderHeader.orderName!}",     "order_items": [         <#list shipmentItems as shipmentItem><#assign orderShipment = EntityQuery.use(delegator).from("OrderShipment").where("shipmentId", shipmentId!,"shipmentItemSeqId", shipmentItem.shipmentItemSeqId!,"shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryFirst()! /><#assign orderItem = EntityQuery.use(delegator).from("OrderItem").where("orderId", orderId!,"orderItemSeqId", orderShipment.orderItemSeqId!).queryOne()!/><#assign product = EntityQuery.use(delegator).from("Product").where("productId", shipmentItem.productId).queryOne()!/><#assign parentProduct = EntityQuery.use(delegator).from("ProductAssoc").where("productIdTo", product.productId, "productAssocTypeId", "PRODUCT_VARIANT").queryFirst()! /><#assign parentProductDetail = EntityQuery.use(delegator).from("Product").where("productId", parentProduct.productId).queryOne()!/><#assign productUrlVirtual = (ProductContentWrapper.getProductContentAsText(parentProductDetail, "IMAGE", locale, dispatcher, "string")) !/><#assign productUrlVariant = (ProductContentWrapper.getProductContentAsText(product, "IMAGE", locale, dispatcher, "string")) !/>             {                 "image_url_virtual": "${productUrlVirtual!}",                 "image_url_variant": "${productUrlVariant!}",                 "product_name": "${orderItem.itemDescription!} ${product.productName!}",                 "quantity": "${shipmentItem.quantity!}",                 "price": "${orderItem.unitPrice}"             }             <#if shipmentItem_has_next>,</#if></#list>     ],     "subtotal": "${shipGroupTotalItemAmount}",     "grand_total": "${shipGroupTotal!}" }]]>
	</textData>
</ElectronicText>
```
</details>