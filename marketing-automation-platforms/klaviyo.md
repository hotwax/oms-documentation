 # 1. Introduction

This guide provides a detailed overview of the integration process between Klaviyo and HotWax Commerce. The integration empowers HotWax to automate customer email notifications for various scenarios, such as updating customers about their orders when they are ready for pickup or when there are changes in the promised delivery date. Given that HotWax takes charge of order management post-ecommerce, it ensures the availability of the most current and accurate information, facilitating prompt and effective customer communication.

# Configuration

## a. API Key Generation

1. Log in to your Klaviyo account.
2. Navigate to the Account menu > Settings > Account > API keys > Private keys.
3. Click on `Create Private API key` to generate a private API key for HotWax Commerce integration with full access for the specified API scopes:
   - Accounts
   - Campaigns
   - Catalogs
   - Coupon Codes
   - Coupons
   - Data Privacy
   - Events
   - Flows
   - Images
   - List
   - Metrics
   - Profiles
   - Push Tokens
   - Segments
   - Subscriptions
   - Tags
   - Templates
   - Webhooks

## Add API key to set up integration in HotWax.

To set up the API key in OMS, go to this page: `https://<instanceName>.io/webtools/control/EntityImport`. 
Follow the instructions on the page, and make sure to add the API key in the `key` variable.

```xml
<SystemMessageRemote description="Send Klaviyo Email" sendServiceName="sendKlaviyoEmail" sendUrl="https://a.klaviyo.com/api/track" sharedSecret="{key}" systemMessageRemoteId="KLAVIYO-STORE"/>
```

## Add Product store setting in HotWax

Once the data is successfully imported, define the Product Store email setting you would like to use in HotWax. In this scenario, the data provided is for the "Ready for Pickup" email. It is configured as follows:

```xml
<ProductStoreEmailSetting productStoreId="STORE" emailType="PRDS_READY_TO_PICKUP" subject="Ready For Pickup Email" systemMessageRemoteId="KLAVIYO-STORE" templateContentId="READY_FOR_PICKUP"/>
```

## Add preconfigured data for the "Ready for Pickup" email:

After setup, import the following data to help Klaviyo integration data mapping in HotWax: 

```xml
    <DataResource dataResourceId="READY_FOR_PICKUP" dataResourceTypeId="ELECTRONIC_TEXT"  dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>
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
		    "country_name":"${postalAddress.countryName!}"
		  },
		  "order_name": "${orderHeader.orderName!}",
		  "order_items": [
		    <#list shipmentItems as shipmentItem>
		      <#assign orderShipment = EntityQuery.use(delegator).from("OrderShipment").where("shipmentId", shipmentId!,"shipmentItemSeqId", shipmentItem.shipmentItemSeqId!,"shipGroupSeqId", shipment.primaryShipGroupSeqId!).queryFirst()! />
		      <#assign orderItem = EntityQuery.use(delegator).from("OrderItem").where("orderId", orderId!,"orderItemSeqId", orderShipment.orderItemSeqId!).queryOne()!/>
		      <#assign product = EntityQuery.use(delegator).from("Product").where("productId", shipmentItem.productId).queryOne()!/>
		      <#assign productUrl = (ProductContentWrapper.getProductContentAsText(product, "IMAGE", locale, dispatcher, "string")) !/>
		      {
		  	"image_url": "${productUrl!}",
		  	"product_name": "${orderItem.itemDescription!} ${product.productName!}",
		  	"quantity": "${shipmentItem.quantity!}",
		  	"price": "${orderItem.unitPrice}"
		      } <#if shipmentItem_has_next>,</#if>
		    </#list>
		  ],
		  "subtotal":"${shipGroupTotalItemAmount}",
		  "grand_total": "${shipGroupTotal!}"
		}
        ]]></textData>
    </ElectronicText>
</ElectronicText>
```

## Run service to create an Event on Klaviyo

Run the `createKlaviyoEvent` service to create an event on Klaviyo. To do this, go to: https://<instanceName>.hotwax.io/webtools/control/ServiceList.

Find the service with the name `createKlaviyoEvent`, click on it, and select Run Service.

<!-- Add parameters here -->

Click `Submit`

## Create a Flow on Klaviyo

Once you have configured the necessary settings and templates in HotWax Commerce, the next step is to create a corresponding flow on Klaviyo to trigger the "Ready for Pickup" email. Follow the detailed steps below:

1. **Log in to your Klaviyo Account:**
   - Open your web browser and navigate to Klaviyo's login page.
   - Enter your credentials to access your Klaviyo account.

2. **Navigate to Flows:**
   - In the Klaviyo dashboard, locate and click on the "Flows" tab. This section is where you manage automated workflows.

3. **Create a New Flow:**
   - Look for an option to create a new flow or automation from the page labeled as `Flow`.

4. **Set the Trigger Event:**
   - Choose the trigger event that will initiate the flow. In this case, set the trigger event as "Ready for Pickup."

5. **Set Email Trigger:**
   - Add an action step to send an email as part of the flow.
   - Choose the email template that corresponds to the "Ready for Pickup" scenario. This template should match the one you set up in HotWax Commerce.

6. **Configure Email Settings:**
   - Customize the email settings, including the sender information, subject line, and any dynamic content that should be populated based on customer data.

7. **Test the Flow:**
   - Before activating the flow, use Klaviyo's testing tools to simulate the trigger event and ensure that the email is sent as expected.
   - Verify that the dynamic data, such as customer names and order details, are correctly populated in the test emails.

8. **Activate the Flow:**
   - Once you are satisfied with the configuration and testing, activate the flow to make it live.
   - Klaviyo will now automatically trigger the "Ready for Pickup" email based on the defined conditions.


By following these steps, you ensure that Klaviyo is set up to seamlessly respond to the "Ready for Pickup" event triggered by HotWax Commerce, providing a cohesive and automated customer communication experience.