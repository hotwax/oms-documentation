# User Guide for HotWax Commerce and Klaviyo Integration

The integration of HotWax Commerce and Klaviyo streamlines the automated notification process for Shopify retailers. Klaviyo, a marketing automation platform among Shopify retailers, integrates with HotWax Commerce. This collaboration empowers retailers to manage e-commerce operations and utilize Klaviyo for automated, personalized notifications.

HotWax Commerce takes the lead in order processing and fulfillment, ensuring effective customer communication through Klaviyo emails. Retailers can configure various flows within HotWax Commerce to notify customers about order updates, such as changes in delivery dates or methods. Notably, the platform provides out-of-the-box `Ready to Pickup` email triggers, enabling retailers to inform customers when their orders are ready for pickup. These email flows are customizable to meet specific retailer preferences. This user guide focuses on setting up `Ready to Pickup` emails through Klaviyo, showcasing the flexibility to tailor email flows according to individual client requirements.

Follow the steps provided in this guide to integrate with Klaviyo, enabling automated email notifications and improving the pickup experience for your customers:

## Generate API Key

The API key is a secure passkey that validates and authorizes interactions between HotWax Commerce and Klaviyo. Follow these steps to generate API Key from Klaviyo:

1. **Login to your Klaviyo account** with your Klaviyo User Credentials.
2. **Navigate to API Keys:**
   - From the bottom left corner, click on `Account`
   - Go to `Settings` > `Account` > `API Keys`.
3. **Create a Private Key:**
   - Click on `Private Keys` and select `Create Private Keys`.
4. **Customize API Key:**
   - Provide a name for the API key to distinguish it.
   - Ensure full access to required API scopes by checking all applicable boxes for the following scopes:

| Type of Scope    | Description                                        |
|------------------|----------------------------------------------------|
| Accounts         | Access to account-level information and settings.   |
| Campaigns        | Manage and create marketing campaigns.              |
| Catalogs         | Access and manage product catalogs.                 |
| Coupon Codes     | Manage coupon codes and their configurations.       |
| Coupons          | Create and handle coupon details.                   |
| Data Privacy     | Permissions related to data privacy and compliance. |
| Events           | Track and manage events related to customer interactions. |
| Flows            | Manage automated flows and their configurations.    |
| Images           | Access and handle images within the platform.       |
| List             | Manage and organize contact lists.                  |
| Metrics          | Retrieve and analyze performance metrics and data.  |
| Profiles         | Access and manage customer profiles and their details. |
| Push Tokens      | Handle push notification tokens for mobile marketing. |
| Segments         | Create, manage, and utilize segments of contacts.    |
| Subscriptions    | Manage subscription preferences and details.         |
| Tags             | Handle and categorize contacts with tags.           |
| Templates        | Access and manage email and campaign templates.     |
| Webhooks         | Set up and manage webhooks for real-time data exchange. |


5. **Generate the API Key:**
   - Click on the `Create` button to generate your customized API key.
6. **Copy and Store the Key:**
   - Once created, securely copy and store the API key in a safe location. Avoid sharing it publicly.


## Adding API Key in HotWax Commerce

After generating API keys in Klaviyo, it's crucial to integrate them into HotWax Commerce. This step ensures a secure and efficient connection between the platforms, facilitating streamlined communication and data exchange.

Set up API Key in HotWax Commerce:

1. Access the HotWax Commerce platform and navigate to: `https://<instanceName>.io/webtools/control/EntityImport`

2. In the `Complete XML document` section, add the below given XML information, replacing `{Key}` in `sharedSecret="{Key}` with the private key generated in Klaviyo:

```xml
<SystemMessageRemote description="Send Klaviyo Email" sendServiceName="sendKlaviyoEmail" sendUrl="https://a.klaviyo.com/api/track" sharedSecret="{Key}" systemMessageRemoteId="KLAVIYO-STORE"/>

```
**The XML information contains the following details:**

| Attribute                   | Description                                                 |
|-----------------------------|-------------------------------------------------------------|
| SystemMessageRemote Description | Identifies the third-party system for actions.            |
| Send ServiceName            | The service name triggering the action.                      |
| Send Url                    | URL of the third-party system (Klaviyo in this case).        |
| Shared Secret               | Private API key for HotWax Commerce to interact with Klaviyo.|
| System Message Remote ID    | Identification of the third-party system in HotWax Commerce.|

You can verify the newly added entity here- `https://<instanceName>.io/webtools/control/FindGeneric?entityName=SystemMessageRemote``.


## Add Product Store Setting in HotWax Commerce

Setting up Product Store email settings in HotWax Commerce is crucial as it automates tailored communication, like the `Ready for Pickup` email for that product store. Follow these steps to Add Product Store Setting:

1. Visit `https://<instanceName>.io/webtools/control/EntityImport` to access the Entity Import interface.

2. In the `Complete XML document` section, add the following XML information:

```xml
<ProductStoreEmailSetting productStoreId="STORE" emailType="PRDS_READY_TO_PICKUP" subject="Ready For Pickup Email" systemMessageRemoteId="KLAVIYO-STORE" templateContentId="READY_FOR_PICKUP"/>

```

**The XML information contains the following details**

| Attribute               | Description                                                            |
|-------------------------|------------------------------------------------------------------------|
| productStoreId          | Enter the name of the product store for which emails will be dispatched.|
| emailType               | Specify the type of email (e.g., "PRDS_READY_TO_PICKUP" for "Ready for Pickup").|
| subject                 | Define the subject line for the email ("Ready For Pickup Email").        |
| systemMessageRemoteId   | Use the Klaviyo remote ID created in the previous setup step.           |
| templateContentId       | Input the ID of the "Ready for Pickup" template content in this instance.|


## Add Preconfigured Data for the "Ready for Pickup" Email

Within Klaviyo, customized email templates are employed for `Ready to Pickup` notifications, where the content varies for each order. When a `Ready to Pickup` email needs to be dispatched, HotWax Commerce generates order-specific data and transfers it to Klaviyo. To enable this process, HotWax Commerce develops and updates individualized data templates for each order, facilitating accurate and personalized email notifications sent through Klaviyo.

| Key             | Description                                   |
|-----------------|-----------------------------------------------|
| first_name      | Customer's first name                          |
| last_name       | Customer's last name                           |
| to_name         | Name of the facility for origin                |
| address1        | Address line 1                                |
| address2        | Address line 2                                |
| city            | City                                          |
| state_name      | State name                                    |
| country_name    | Country name                                  |
| order_name      | Name of the order                              |
| order_item      | List of shipment items                         |
| image_url       | URL of the product image                      |
| product_name    | Description of the ordered product             |
| quantity        | Quantity of the ordered item                   |
| subtotal        | Total amount of items in the shipment          |
| grand_total     | Grand total amount for the shipment           |



To create the `Ready for Pickup` email template in HotWax Commerce, the provided XML data file needs to be imported via the following link- `https://<instanceName>.io/webtools/control/EntityImport`

Here's the XML structure that generates the `Ready for Pickup` email template in HotWax Commerce:

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

## Run Service to Create an Event on Klaviyo

In HotWax Commerce, when orders are packed and ready for pickup, Klaviyo triggers an email to customers containing their specific details. However, it's important to note that Klaviyo does not have a ready-to-pickup email event that can be triggered for action by default. Retailers need to run this service once before setting up the email flow in Klaviyo to ensure that this event is created in Klaviyo. This step is essential for the effective initiation of the email communication process.

1. **Access the Service List:** Go to `HotWax Commerce Service List` through this link- `https://<instanceName>.io/webtools/control/ServiceList`
2. **Locate `createKlaviyoEvent` Service:** Find the service named `createKlaviyoEvent'` within the Service List interface. Click on the `createKlaviyoEvent` service to access its details.
3. **Run the Service:** Look for the `Run Service` button available against the service name and click on it. Finally, click on `Submit` to execute the service.


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

## Create a Flow on Klaviyo

Once you have configured the necessary settings and templates in HotWax Commerce, the next step is to create a corresponding flow and template email in Klaviyo to trigger the `Ready for Pickup` email of the retailer’s choice with the specific details for the customer. This feature focuses on Klaviyo's response when a specific trigger, such as the `Ready for Pickup` event in HotWax Commerce, occurs. It manages the generation and dispatch of tailored `Ready for Pickup` emails to customers via Klaviyo, initiated by specific actions, like clicking the `Ready to Pick Up` button within HotWax Commerce.

Follow these steps to create the email flow in Klaviyo:

1. **Log in to Klaviyo:** Access your Klaviyo account using your credentials.

2. **Navigate to Flows:** Once logged in, locate and click on the `Flows` tab within the Klaviyo dashboard. This section is where you manage automated workflows.

3. **Create a New Flow:** Click on the `create flow` button. For the ready-to-pick-up flow, create a new one from scratch.
   - Choose the `Create from Scratch` option to begin a new flow.
   - Name the flow something like `Ready for Pickup` and click on `Create Flow`.

4. **Set Trigger Event:** Choose the trigger event that will initiate the flow, specifically the `Ready for Pickup` event associated with actions like clicking the `Ready to Pick Up` button in HotWax Commerce.
   - If this trigger isn’t available, ensure that the event has been properly set up or run the necessary service in HotWax Commerce.

5. **Configure Action:** Add an action step to the flow that involves sending an email. Look for the action that corresponds to sending emails.

6. **Choose Email Template:** Select an existing email template that aligns with the `Ready for Pickup` scenario. Alternatively, create a new email template specifically tailored for these notifications.
   - If creating a new template, consider elements like subject line, body content, and any dynamic data placeholders for customer-specific details.

7. **Customize Email Settings:** Adjust the email settings, including the sender information, subject line, and the dynamic content that should be populated based on specific customer order details.
   - Ensure placeholders for dynamic data (such as customer names and order details) are correctly configured to pull the relevant information.

8. **Test the Flow:** Before activating the flow, utilize Klaviyo's testing tools to simulate the trigger event and ensure that the email is sent as expected.
   - Verify that the dynamic data populates correctly in the test emails, ensuring the personalized touch for each recipient.

9. **Activate the Flow:** Once satisfied with the configuration and testing, activate the flow to make it live.
   - Klaviyo will now automatically trigger the `Ready for Pickup`` email based on the defined conditions whenever the corresponding event occurs in HotWax Commerce.

