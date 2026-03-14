# How to set up BOPIS email notifications using Klaviyo

Integrating HotWax Commerce with Klaviyo enables your customers to receive timely, personalized updates for their Buy Online, Pick Up In-Store (BOPIS) orders. Klaviyo is a powerful marketing automation platform. When connected to HotWax Commerce, it automates critical notifications based on the order lifecycle.

This guide provides the steps to configure the following BOPIS emails:
1.  **Ready for Pickup:** Notifies the customer that their items are available at the store.
2.  **Order Complete:** Confirms that the customer has successfully picked up their order.
3.  **Reroute Emails:**
    *   **BOPIS Rejection:** Informs the customer that their original pickup store cannot fulfill the order and provides a link to select a new store.
    *   **New Location Confirmation:** Confirms the new pickup location after the customer selects it.
    *   **Re-Route Cancel Order Confirmation:** Notifies the customer that their re-routed BOPIS order has been cancelled.
    *   **Re-Route Shipment Confirmation:** Confirms that a re-routed order is being shipped to the store for pickup.
4.  **BOPIS Cancellation:** Notifies the customer that their BOPIS order has been cancelled.

## Understand the data flow

Before configuring the emails, it is helpful to understand how data moves from HotWax Commerce to Klaviyo.

1.  **Order Event:** An action occurs in HotWax Commerce (e.g., store associate clicks "Ready for Pickup" or "Reject").
2.  **Service Event Condition Action (SECA):** HotWax Commerce triggers the email service logic based on the event.
3.  **SystemMessage Creation:** A message is queued in the system to handle the outbound communication.
4.  **Template Generation:** HotWax Commerce uses a FreeMarker (`.ftl`) template to extract relevant order data (customer name, items, store address) and formats it into a JSON payload.
5.  **Integration Layer (Unigate/Klaviyo API):** The JSON payload is pushed to Klaviyo via the `sendKlaviyoEmailV2` API connection.
6.  **Klaviyo Flow:** Klaviyo receives the event, triggers the corresponding flow, and dispatches the styled email to the customer.

---

## 1. Klaviyo API Configuration

Before configuring individual emails, establish the Klaviyo API connection in HotWax Commerce.

> **Note:** Replace `{systemMessageRemoteId}` with your desired Klaviyo connection ID.

Import this OFBiz configuration to link HotWax to your Klaviyo account:

```xml
<SystemProperty systemResourceId="{systemMessageRemoteId}" systemPropertyId="endPoint.events" systemPropertyValue="events"/>

<SystemProperty systemResourceId="{systemMessageRemoteId}" systemPropertyId="revision" systemPropertyValue="2023-12-15" description="API version identified by this revision date (v2023-12-15) used for Klaviyo integration as of the specified release."/>

<SystemMessageRemote authHeaderName="Authorization" description="Klaviyo API Configuration" publicKey="Klaviyo-API-Key pk_YOUR_KEY" sendServiceName="sendKlaviyoEmailV2" sendUrl="https://a.klaviyo.com/api/" systemMessageRemoteId="{systemMessageRemoteId}"/>
```

---

## 2. Set up Ready for Pickup emails

When store associates pack a BOPIS order and mark it as ready, customers need to know they can head to the store.

> **Note:** Replace `{productStoreId}` with your actual product store ID and `{systemMessageRemoteId}` with your Klaviyo remote ID throughout all configuration steps.

### Step 2A: Moqui Trigger Configuration

Import the following XML to register the Moqui event triggers for the Ready for Pickup email:

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="SendReadyForPickupEmail" description="Send Ready for Pickup Email" sendServiceName="co.hotwax.orderledger.order.email.EmailServices.send#EmailRequest" sendPath="communication/email"/>

<org.apache.ofbiz.party.communication.CommunicationEventType communicationEventTypeId="SYS_MSG_EMAIL_COMM" parentTypeId="EMAIL_COMMUNICATION" hasTable="N" description="Email Communication as a part of SystemMessage flow" contactMechTypeId="EMAIL_ADDRESS"/>

<moqui.basic.Enumeration enumId="SendReadyForPickupEmail" description="Send Ready for Pickup Email" enumTypeId="OMSMessageTypeEnum"/>

<moqui.basic.Enumeration enumId="READY_FOR_PICKUP" enumCode="READY_FOR_PICKUP" enumName="BOPIS Order Ready for Pickup" description="Ready to Pickup Item" enumTypeId="PRDS_EMAIL" relatedEnumId="SendReadyForPickupEmail"/>

<org.apache.ofbiz.product.store.ProductStoreEmailSetting emailType="1" productStoreId="{productStoreId}" subject="Ready For Pickup Email" systemMessageRemoteId="{systemMessageRemoteId}"/>
```

### Step 2B: OFBiz Template Configuration

Import the FreeMarker template that dynamically generates the JSON payload sent to Klaviyo:

```xml
<DataResource dataResourceId="READY_FOR_PICKUP" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="READY_FOR_PICKUP" contentTypeId="DOCUMENT" contentName="Template for klaviyo ready for pickup email" dataResourceId="READY_FOR_PICKUP" statusId="CTNT_PUBLISHED"/>

<ElectronicText dataResourceId="READY_FOR_PICKUP">
    <textData><![CDATA[
    <#assign shipment = EntityQuery.use(delegator).from("Shipment").where("shipmentId", shipmentId!).queryOne()!/>
    <#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", shipment.primaryOrderId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryOne()!/>
    <#assign originFacility = EntityQuery.use(delegator).from("Facility").where("facilityId", shipment.originFacilityId!).queryOne()!/>
    <#assign postalAddress = EntityQuery.use(delegator).from("PostalAddressAndGeo").where("contactMechId", shipment.originContactMechId!).queryOne()!/>
    <#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/>
    <#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", shipment.partyIdTo!).queryOne()!/>
    <#assign shipmentItems = EntityQuery.use(delegator).from("ShipmentItem").where("shipmentId", shipmentId!).queryList()!/>
    <#assign shipGroupTotalItemAmount = CsrOrderHelper.getShipGroupItemsTotalWithItemAdjustments(delegator, orderId, primaryShipGroup)! />
    <#assign shipGroupTotal = CsrOrderHelper.getShipGroupTotal(delegator, orderId, primaryShipGroup)! />
    {
      "first_name": "${customer.firstName!}",
      "last_name": "${customer.lastName!}",
      "ship_from": {
        "to_name": "${originFacility.facilityName!}",
        "address1": "${postalAddress.address1!}",
        "address2": "${postalAddress.address2!}",
        "city": "${postalAddress.city!}",
        "state_name": "${postalAddress.stateName!}",
        "country_name": "${postalAddress.countryName!}"
      },
      "order_name": "${orderHeader.orderName!}",
      "order_items": [
        <#list shipmentItems as shipmentItem>
          <#assign orderShipment = EntityQuery.use(delegator).from("OrderShipment").where("shipmentId", shipmentId!, "shipmentItemSeqId", shipmentItem.shipmentItemSeqId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryFirst()! />
          <#assign orderItem = EntityQuery.use(delegator).from("OrderItem").where("orderId", orderId!, "orderItemSeqId", orderShipment.orderItemSeqId!).queryOne()!/>
          <#assign product = EntityQuery.use(delegator).from("Product").where("productId", shipmentItem.productId).queryOne()!/>
          <#assign productUrl = (ProductContentWrapper.getProductContentAsText(product, "IMAGE", locale, dispatcher, "string")) !/>
          {
            "image_url": "${productUrl!}",
            "product_name": "${orderItem.itemDescription!} ${product.productName!}",
            "quantity": "${shipmentItem.quantity!}",
            "price": "${orderItem.unitPrice}"
          }<#if shipmentItem_has_next>,</#if>
        </#list>
      ],
      "subtotal": "${shipGroupTotalItemAmount}",
      "grand_total": "${shipGroupTotal!}"
    }
    ]]></textData>
</ElectronicText>
```

---

## 3. Set up Order Complete (Handover) emails

When a customer physically picks up their order from the store, the store associate completes the order in the HotWax Fulfillment App. This triggers the final confirmation email.

### Step 3A: Moqui Trigger Configuration

Import the Moqui trigger for the BOPIS handover event:

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="SendBOPISCompletionEmail" description="Send BOPIS Completion Email" sendServiceName="co.hotwax.orderledger.order.email.EmailServices.send#EmailRequest" sendPath="communication/email"/>

<moqui.basic.Enumeration enumId="SendBOPISCompletionEmail" description="Send BOPIS Completion Email" enumTypeId="OMSMessageTypeEnum"/>

<moqui.basic.Enumeration description="The BOPIS Order Completion Notification." enumCode="HANDOVER_BOPIS_ORDER" enumId="HANDOVER_BOPIS_ORDER" enumName="BOPIS Order Handover/Completion" enumTypeId="PRDS_EMAIL" relatedEnumId="SendBOPISCompletionEmail"/>

<org.apache.ofbiz.product.store.ProductStoreEmailSetting emailType="HANDOVER_BOPIS_ORDER" productStoreId="{productStoreId}" subject="Order Fulfilled (UAT)" systemMessageRemoteId="{systemMessageRemoteId}"/>
```

### Step 3B: OFBiz Template Configuration

Import the OFBiz configuration and FreeMarker template for the Order Complete email:

```xml
<ProductStoreEmailSetting productStoreId="{productStoreId}" emailType="PRDS_ODR_COMPLETE" fromAddress="integrations@hotwax.co" subject="Order Complete Email" systemMessageRemoteId="{systemMessageRemoteId}" templateContentId="PRDS_ORD_COMPLETED"/>

<Enumeration description="The Order Complete Notification is an email that gets sent to the customer after the Order has been successfully fulfilled." enumCode="ODR_COMPLETE" enumId="PRDS_ODR_COMPLETE" enumName="Order Complete" enumTypeId="PRDS_EMAIL"/>

<DataResource dataResourceId="PRDS_ORD_COMPLETED" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="PRDS_ORD_COMPLETED" contentName="Template for order Completed" contentTypeId="DOCUMENT" dataResourceId="PRDS_ORD_COMPLETED" statusId="CTNT_PUBLISHED"/>

<ElectronicText dataResourceId="PRDS_ORD_COMPLETED">
    <textData><![CDATA[
        <#assign shipment = EntityQuery.use(delegator).from("Shipment").where("shipmentId", shipmentId!).queryOne()!/>
        <#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", shipment.primaryOrderId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryOne()!/>
        <#assign originFacility = EntityQuery.use(delegator).from("Facility").where("facilityId", shipment.originFacilityId!).queryOne()!/>
        <#assign postalAddress = EntityQuery.use(delegator).from("PostalAddressAndGeo").where("contactMechId", shipment.originContactMechId!).queryOne()!/>
        <#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/>
        <#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", shipment.partyIdTo!).queryOne()!/>
        <#assign shipmentItems = EntityQuery.use(delegator).from("ShipmentItem").where("shipmentId", shipmentId!).queryList()!/>
        <#assign shipGroupTotalItemAmount = CsrOrderHelper.getShipGroupItemsTotalWithItemAdjustments(delegator, orderId, primaryShipGroup)! />
        <#assign shipGroupTotal = CsrOrderHelper.getShipGroupTotal(delegator, orderId, primaryShipGroup)! />
        {
            "first_name": "${customer.firstName!}",
            "last_name": "${customer.lastName!}",
            "ship_from": {
                "to_name": "${originFacility.facilityName!}",
                "address1": "${postalAddress.address1!}",
                "address2": "${postalAddress.address2!}",
                "city": "${postalAddress.city!}",
                "state_name": "${postalAddress.stateName!}",
                "country_name": "${postalAddress.countryName!}"
            },
            "order_name": "${orderHeader.orderName!}",
            "order_items": [
                <#list shipmentItems as shipmentItem>
                    <#assign orderShipment = EntityQuery.use(delegator).from("OrderShipment").where("shipmentId", shipmentId!, "shipmentItemSeqId", shipmentItem.shipmentItemSeqId!, "shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryFirst()! />
                    <#assign orderItem = EntityQuery.use(delegator).from("OrderItem").where("orderId", orderId!, "orderItemSeqId", orderShipment.orderItemSeqId!).queryOne()!/>
                    <#assign product = EntityQuery.use(delegator).from("Product").where("productId", shipmentItem.productId).queryOne()!/>
                    <#assign parentProduct = EntityQuery.use(delegator).from("ProductAssoc").where("productIdTo", product.productId, "productAssocTypeId", "PRODUCT_VARIANT").queryFirst()! />
                    <#assign parentProductDetail = EntityQuery.use(delegator).from("Product").where("productId", parentProduct.productId).queryOne()!/>
                    <#assign productUrlVirtual = (ProductContentWrapper.getProductContentAsText(parentProductDetail, "IMAGE", locale, dispatcher, "string")) !/>
                    <#assign productUrlVariant = (ProductContentWrapper.getProductContentAsText(product, "IMAGE", locale, dispatcher, "string")) !/>
                    {
                        "image_url_virtual": "${productUrlVirtual!}",
                        "image_url_variant": "${productUrlVariant!}",
                        "product_name": "${orderItem.itemDescription!} ${product.productName!}",
                        "quantity": "${shipmentItem.quantity!}",
                        "price": "${orderItem.unitPrice}"
                    }<#if shipmentItem_has_next>,</#if>
                </#list>
            ],
            "subtotal": "${shipGroupTotalItemAmount}",
            "grand_total": "${shipGroupTotal!}"
        }
    ]]></textData>
</ElectronicText>
```

---

## 4. Set up Reroute emails

Sometimes, a store cannot fulfill a BOPIS order due to inventory issues. When a store associate rejects the order, it is added to the Store Pickup Rejected queue. This section covers the four separate email notifications that can be triggered depending on what the customer chooses next:

1.  **BOPIS Rejection Email:** Sent to inform the customer that their original store cannot fulfill the order. It includes a link to the Reroute App where the customer can decide what to do next.
2.  **New Pickup Location Confirmation Email:** Sent after the customer selects a new pickup location in the Reroute App.
3.  **Re-Route Cancel Order Confirmation Email:** Sent if the customer decides to cancel the order from the Reroute App.
4.  **Re-Route Shipment Confirmation Email:** Sent if the customer opts to have the item shipped to their original store.

### Step 4A: Moqui Trigger for BOPIS Rejection

Import the following XML to configure the Moqui trigger that fires when a store associate rejects a BOPIS order:

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="SendBOPISRejectionEmail" description="Send BOPIS Rejection Email" sendServiceName="co.hotwax.orderledger.order.email.EmailServices.send#EmailRequest" sendPath="communication/email"/>

<moqui.basic.Enumeration enumId="SendBOPISRejectionEmail" description="Send BOPIS Rejection Email" enumTypeId="OMSMessageTypeEnum"/>

<moqui.basic.Enumeration enumId="BOPIS_REJECTION" enumCode="BOPIS_REJECTION" enumName="BOPIS Order Rejection Email" description="BOPIS Rejection Email Notification" enumTypeId="PRDS_EMAIL" relatedEnumId="SendBOPISRejectionEmail"/>

<org.apache.ofbiz.product.store.ProductStoreEmailSetting emailType="REJECT_BOPIS_ORDER" productStoreId="{productStoreId}" subject="BOPIS Rejection Email" systemMessageRemoteId="{systemMessageRemoteId}"/>
```

> **Note:** In Klaviyo's template editor, include a link to your Reroute App so the customer can take action.

### Step 4B: OFBiz Template for New Pickup Location Confirmation

After the customer selects a new pickup location in the Reroute App, import this OFBiz configuration to generate the confirmation email:

> **Note:** `PRDS_PICKUP_LOC_CNF` does not use a `systemMessageRemoteId` attribute — this is intentional. The template is called directly via OFBiz and does not route through the Unigate/SystemMessage layer.

```xml
<ProductStoreEmailSetting emailType="PRDS_PICKUP_LOC_CNF" fromAddress="integrations@hotwax.co" productStoreId="{productStoreId}" subject="New Pickup Location Confirmation Email" templateContentId="PICKUP_LOC_CNF"/>

<Enumeration description="New Pickup Location Confirmation" enumCode="PRDS_PICKUP_LOC_CNF" enumId="PRDS_PICKUP_LOC_CNF" enumTypeId="PRDS_EMAIL"/>

<DataResource dataResourceId="PICKUP_LOC_CNF" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="PICKUP_LOC_CNF" contentName="Template for klaviyo to send new pickup location confirmation email" contentTypeId="DOCUMENT" dataResourceId="PICKUP_LOC_CNF" statusId="CTNT_PUBLISHED" templateDataResourceId="PICKUP_LOC_CNF"/>
```

Import the FreeMarker template that generates the JSON payload with the new store details:

```xml
<ElectronicText dataResourceId="PICKUP_LOC_CNF">
    <textData><![CDATA[
        <#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", orderId!, "shipGroupSeqId", shipGroupSeqId!).queryOne()!/>
        <#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/>
        <#assign originFacility = EntityQuery.use(delegator).from("Facility").where("facilityId", primaryShipGroup.facilityId).cache(true).queryOne()!/>
        <#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", partyId!).cache(true).queryOne()!/>
        <#assign postalAddress = WarehouseHelper.getFacilityContactDetail(delegator, originFacility.facilityId, "POSTAL_ADDRESS", "PRIMARY_LOCATION", true)!/>
        <#assign orderItemDetails = EntityQuery.use(delegator).from("OrderItemAndProduct").where("orderId", orderId!, "shipGroupSeqId", shipGroupSeqId!).queryList()!/>
        {
            "first_name": "${customer.firstName!}",
            "last_name": "${customer.lastName!}",
            "ship_from": {
                "to_name": "${originFacility.facilityName!}",
                "address1": "${postalAddress.address1!}",
                "address2": "${postalAddress.address2!}",
                "city": "${postalAddress.city!}",
                "state_name": "${postalAddress.stateGeoName!}",
                "country_name": "${postalAddress.countryGeoName!}"
            },
            "order_name": "${orderHeader.orderName!}",
            "order_date": "${orderHeader.orderDate!}",
            "items": [
                <#list orderItemDetails as orderItemDetail>
                {
                    "product_name": "${orderItemDetail.productName!}",
                    "quantity": "${orderItemDetail.quantity!}",
                    "sku": "${orderItemDetail.internalName!}",
                    "unit_price": "${orderItemDetail.unitPrice!}",
                    "product_image_url": "${orderItemDetail.detailImageUrl!}"
                }<#if orderItemDetail?has_next>,</#if>
                </#list>
            ]
        }
    ]]></textData>
</ElectronicText>
```

### Step 4C: OFBiz Template for Re-Route Cancel Order Confirmation

If the customer decides to cancel their order from the Reroute App, import this configuration to generate the cancellation confirmation email:

```xml
<ProductStoreEmailSetting emailType="BOPIS_ORD_CANCL_CNF" fromAddress="integrations@hotwax.co" productStoreId="{productStoreId}" subject="Cancel pickup Order Confirmation Email" systemMessageRemoteId="{systemMessageRemoteId}" templateContentId="ORD_CANCL_CNF"/>

<Enumeration enumId="BOPIS_ORD_CANCL_CNF" description="Cancel pickup Order Confirmation" enumCode="BOPIS_ORD_CANCL_CNF" enumTypeId="PRDS_EMAIL"/>

<DataResource dataResourceId="ORD_CANCL_CNF" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="ORD_CANCL_CNF" contentName="Template for klaviyo to send Cancel pickup Order Confirmation Email" contentTypeId="DOCUMENT" dataResourceId="ORD_CANCL_CNF" statusId="CTNT_PUBLISHED" templateDataResourceId="ORD_CANCL_CNF"/>
```

Import the FreeMarker template that generates the JSON payload for the cancellation email:

```xml
<ElectronicText dataResourceId="ORD_CANCL_CNF">
    <textData><![CDATA[
        <#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/>
        <#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", partyId!).queryOne()!/>
        <#assign orderItemDetails = EntityQuery.use(delegator).from("OrderItemAndProduct").where("orderId", orderId!, "shipGroupSeqId", shipGroupSeqId!).queryList()!/>
        {
            "first_name": "${customer.firstName!}",
            "last_name": "${customer.lastName!}",
            "order_name": "${orderHeader.orderName!}",
            "order_date": "${orderHeader.orderDate!}",
            "items": [
                <#list orderItemDetails as orderItemDetail>
                {
                    "product_name": "${orderItemDetail.productName!}",
                    "quantity": "${orderItemDetail.quantity!}",
                    "sku": "${orderItemDetail.internalName!}",
                    "unit_price": "${orderItemDetail.unitPrice!}",
                    "product_image_url": "${orderItemDetail.detailImageUrl!}"
                }<#if orderItemDetail?has_next>,</#if>
                </#list>
            ]
        }
    ]]></textData>
</ElectronicText>
```

### Step 4D: OFBiz Template for Re-Route Shipment Confirmation

If the customer opts to have the item shipped to the store instead of choosing a different pickup location, import this configuration:

```xml
<ProductStoreEmailSetting emailType="BOPIS_ORD_SHIP_CNF" fromAddress="integrations@hotwax.co" productStoreId="{productStoreId}" subject="Ship pickup Order Confirmation Email" systemMessageRemoteId="{systemMessageRemoteId}" templateContentId="ORD_SHIP_CNF"/>

<Enumeration enumId="BOPIS_ORD_SHIP_CNF" description="Ship pickup Order Confirmation" enumCode="BOPIS_ORD_SHIP_CNF" enumTypeId="PRDS_EMAIL"/>

<DataResource dataResourceId="ORD_SHIP_CNF" dataResourceTypeId="ELECTRONIC_TEXT" dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="ORD_SHIP_CNF" contentName="Template for klaviyo to send Ship pickup Order Confirmation Email" contentTypeId="DOCUMENT" dataResourceId="ORD_SHIP_CNF" statusId="CTNT_PUBLISHED" templateDataResourceId="ORD_SHIP_CNF"/>
```

Import the FreeMarker template that generates the JSON payload with the shipment details:

```xml
<ElectronicText dataResourceId="ORD_SHIP_CNF">
    <textData><![CDATA[
        <#assign primaryShipGroup = EntityQuery.use(delegator).from("OrderItemShipGroup").where("orderId", orderId!, "shipGroupSeqId", shipGroupSeqId!).queryOne()!/>
        <#assign orderHeader = EntityQuery.use(delegator).from("OrderHeader").where("orderId", orderId!).queryOne()!/>
        <#assign customer = EntityQuery.use(delegator).from("Person").where("partyId", partyId!).queryOne()!/>
        <#assign postalAddress = EntityQuery.use(delegator).from("PostalAddressAndGeo").where("contactMechId", primaryShipGroup.getString("contactMechId")).queryOne()!/>
        <#assign orderItemDetails = EntityQuery.use(delegator).from("OrderItemAndProduct").where("orderId", orderId!, "shipGroupSeqId", shipGroupSeqId!).queryList()!/>
        {
            "first_name": "${customer.firstName!}",
            "last_name": "${customer.lastName!}",
            "ship_to": {
                "address1": "${postalAddress.address1!}",
                "address2": "${postalAddress.address2!}",
                "city": "${postalAddress.city!}",
                "state_name": "${postalAddress.stateName!}",
                "country_name": "${postalAddress.countryName!}"
            },
            "order_name": "${orderHeader.orderName!}",
            "order_date": "${orderHeader.orderDate!}",
            "shipment_method": "${(primaryShipGroup.getRelatedOne("ShipmentMethodType", true).get("description", locale))!(primaryShipGroup.shipmentMethodTypeId)}",
            "items": [
                <#list orderItemDetails as orderItemDetail>
                {
                    "product_name": "${orderItemDetail.productName!}",
                    "quantity": "${orderItemDetail.quantity!}",
                    "sku": "${orderItemDetail.internalName!}",
                    "unit_price": "${orderItemDetail.unitPrice!}",
                    "product_image_url": "${orderItemDetail.detailImageUrl!}"
                }<#if orderItemDetail?has_next>,</#if>
                </#list>
            ]
        }
    ]]></textData>
</ElectronicText>
```

---

## 5. Set up BOPIS Cancellation emails

If a standard BOPIS order needs to be completely cancelled outside the Reroute app flow, this Moqui trigger fires the cancellation notification to the customer.

### Moqui Trigger Configuration

Import the following XML to register the cancellation email trigger:

```xml
<moqui.service.message.SystemMessageType systemMessageTypeId="SendBOPISCancellationEmail" description="Send BOPIS Cancellation Email" sendServiceName="co.hotwax.orderledger.order.email.EmailServices.send#EmailRequest" sendPath="communication/email"/>

<moqui.basic.Enumeration description="The BOPIS Order Cancellation Notification." enumCode="CANCEL_BOPIS_ORDER" enumId="CANCEL_BOPIS_ORDER" enumName="BOPIS Order Cancellation" enumTypeId="PRDS_EMAIL" relatedEnumId="SendBOPISCancellationEmail"/>

<moqui.basic.Enumeration enumId="BOPIS_CANCELLATION" enumCode="BOPIS_CANCELLATION" enumName="BOPIS Order Cancellation Email" description="BOPIS Cancellation Email Notification" enumTypeId="PRDS_EMAIL" relatedEnumId="SendBOPISCancellationEmail"/>

<org.apache.ofbiz.product.store.ProductStoreEmailSetting emailType="BOPIS_CANCELLATION" productStoreId="{productStoreId}" subject="BOPIS Cancellation Email" systemMessageRemoteId="{systemMessageRemoteId}"/>
```

---

## 6. Finalize the setup in Klaviyo

Once you import the configuration data into HotWax Commerce, you must create the corresponding flows inside Klaviyo.

1.  **Run the Initialization Service:** Klaviyo relies on dynamic events (like `Ready for Pickup` or `Order Complete`). Run the `createKlaviyoEvent` service once in HotWax Commerce to register these triggers in Klaviyo before setting up your flows.
    *   Navigate to the Service List page.
    *   Locate the `createKlaviyoEvent` service and click **Run Service**.
    *   Input your `productStoreId` and the specific `emailType` (e.g., `PRDS_READY_TO_PICKUP`, `REJECT_BOPIS_ORDER`). Run this for each email type you wish to set up.
2.  **Create the Klaviyo Flow:**
    *   Log into Klaviyo and go to **Flows**.
    *   Click **Create Flow** from scratch.
    *   Select the specific trigger event (e.g., the newly registered `Ready for Pickup` event).
    *   Add an email action to the flow. Use the drag-and-drop builder to design the customer-facing email.
    *   Use the available dynamic variables (like `{{ event.first_name }}`) to personalize the content. Ensure that for the **BOPIS Rejection** email, you include the custom order link pointing to your Reroute App.
3.  **Test and Activate:** Test the flow within Klaviyo to ensure the variables map correctly and the email renders properly before setting the flow live.