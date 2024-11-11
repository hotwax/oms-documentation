# Klaviyo

The integration of HotWax Commerce and Klaviyo streamlines the automated notification process for Shopify retailers. Klaviyo, a marketing automation platform among Shopify retailers, integrates with HotWax Commerce. This collaboration empowers retailers to manage e-commerce operations and utilize Klaviyo for automated, personalized notifications.

HotWax Commerce takes the lead in order processing and fulfillment, ensuring effective customer communication through Klaviyo emails. Retailers can configure various flows within HotWax Commerce to notify customers about order updates, such as changes in delivery dates or methods. Notably, the platform provides out-of-the-box `Ready to Pickup` email triggers, enabling retailers to inform customers when their orders are ready for pickup. These email flows are customizable to meet specific retailer preferences. This user guide focuses on setting up `Ready to Pickup` emails through Klaviyo, showcasing the flexibility to tailor email flows according to individual client requirements.

Follow the steps provided in this guide to integrate with Klaviyo, enabling automated email notifications and improving the pickup experience for your customers:

## Generate API Key from Klaviyo

The API key is a secure passkey that validates and authorizes interactions between HotWax Commerce and Klaviyo. Follow these steps to generate API Key from Klaviyo:

1. **Login to your Klaviyo account** with your Klaviyo User Credentials.
2. **Navigate to API Keys:**
   * From the bottom left corner, click on `Account`
   * Go to `Settings` > `Account` > `API Keys`.
3. **Create a Private Key:**
   * Click on `Private Keys` and select `Create Private Keys`.
4. **Customize API Key:**
   * Provide a name for the API key to distinguish it.
   * Ensure full access to required API scopes by checking all applicable boxes for the following scopes:

| Type of Scope | Description                                               |
| ------------- | --------------------------------------------------------- |
| Accounts      | Access to account-level information and settings.         |
| Campaigns     | Manage and create marketing campaigns.                    |
| Catalogs      | Access and manage product catalogs.                       |
| Coupon Codes  | Manage coupon codes and their configurations.             |
| Coupons       | Create and handle coupon details.                         |
| Data Privacy  | Permissions related to data privacy and compliance.       |
| Events        | Track and manage events related to customer interactions. |
| Flows         | Manage automated flows and their configurations.          |
| Images        | Access and handle images within the platform.             |
| List          | Manage and organize contact lists.                        |
| Metrics       | Retrieve and analyze performance metrics and data.        |
| Profiles      | Access and manage customer profiles and their details.    |
| Push Tokens   | Handle push notification tokens for mobile marketing.     |
| Segments      | Create, manage, and utilize segments of contacts.         |
| Subscriptions | Manage subscription preferences and details.              |
| Tags          | Handle and categorize contacts with tags.                 |
| Templates     | Access and manage email and campaign templates.           |
| Webhooks      | Set up and manage webhooks for real-time data exchange.   |

5. **Generate the API Key:**
   * Click on the `Create` button to generate your customized API key.
6. **Copy and Store the Key:**
   * Once created, securely copy and store the API key in a safe location. Avoid sharing it publicly.

## Adding API Key in HotWax Commerce

After generating API keys in Klaviyo, it's crucial to integrate them into HotWax Commerce. This step ensures a secure and efficient connection between the platforms, facilitating streamlined communication and data exchange.

Set up API Key in HotWax Commerce:

1. Access the HotWax Commerce platform and navigate to: `https://{instanceName}.io/webtools/control/EntityImport`
2. In the `Complete XML document` section, add the below given XML information, replacing `privateket` in `publicKey=Klaviyo-API-Key privateKey` with the private key generated in Klaviyo:

<details>

<summary>XML Document</summary>

```xml
<SystemMessageRemote systemMessageRemoteId="KLAVIYO-STORE" description="Klaviyo API Configuration" sendUrl="https://a.klaviyo.com/api/" username="" messageAuthEnumId="" authHeaderName="Authorization" currentPassword="" publicKey="Klaviyo-API-Key privateKey"/>
```

```xml
<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="endPoint.events" systemPropertyValue="events"/>
```

```xml
<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="endPoint.track" systemPropertyValue="track"/>
```

```xml
<SystemProperty systemResourceId="KLAVIYO-STORE" systemPropertyId="revision" systemPropertyValue="2023-12-15" description="API version identified by this revision date (v2023-12-15) used for Klaviyo integration as of the specified release."/>
```



</details>

**The XML information contains the following details:**

| Attribute                       | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| SystemMessageRemote Description | Identifies the third-party system for actions.                |
| Send ServiceName                | The service name triggering the action.                       |
| Send Url                        | URL of the third-party system (Klaviyo in this case).         |
| Shared Secret                   | Private API key for HotWax Commerce to interact with Klaviyo. |
| System Message Remote ID        | Identification of the third-party system in HotWax Commerce.  |

You can verify the newly added entity here- \`https://{instanceName}.io/webtools/control/FindGeneric?entityName=SystemMessageRemote\`\`.

## Add Product Store Setting in HotWax Commerce

Setting up Product Store email settings in HotWax Commerce is crucial as it automates tailored communication, like the `Ready for Pickup` email for that product store. Follow these steps to Add Product Store Setting:

1. Visit `https://{instanceName}.io/webtools/control/EntityImport` to access the Entity Import interface.
2. In the `Complete XML document` section, add the following XML information:

```xml
<ProductStoreEmailSetting productStoreId="STORE" emailType="PRDS_READY_TO_PICKUP" subject="Ready For Pickup Email" systemMessageRemoteId="KLAVIYO-STORE" templateContentId="READY_FOR_PICKUP"/>

```

**The XML information contains the following details**

| Attribute             | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| productStoreId        | Enter the name of the product store for which emails will be dispatched.            |
| emailType             | Specify the type of email (e.g., "PRDS\_READY\_TO\_PICKUP" for "Ready for Pickup"). |
| subject               | Define the subject line for the email ("Ready For Pickup Email").                   |
| systemMessageRemoteId | Use the Klaviyo remote ID created in the previous setup step.                       |
| templateContentId     | Input the ID of the "Ready for Pickup" template content in this instance.           |

## Add Preconfigured Data for the "Ready for Pickup" Email

Within Klaviyo, customized email templates are employed for `Ready to Pickup` notifications, where the content varies for each order. When a `Ready to Pickup` email needs to be dispatched, HotWax Commerce generates order-specific data and transfers it to Klaviyo. To enable this process, HotWax Commerce develops and updates individualized data templates for each order, facilitating accurate and personalized email notifications sent through Klaviyo.

This configuration data is sent for

| Key           | Description                           |
| ------------- | ------------------------------------- |
| first\_name   | Customer's first name                 |
| last\_name    | Customer's last name                  |
| to\_name      | Name of the facility for origin       |
| address1      | Address line 1                        |
| address2      | Address line 2                        |
| city          | City                                  |
| state\_name   | State name                            |
| country\_name | Country name                          |
| order\_name   | Name of the order                     |
| order\_item   | List of shipment items                |
| image\_url    | URL of the product image              |
| product\_name | Description of the ordered product    |
| quantity      | Quantity of the ordered item          |
| subtotal      | Total amount of items in the shipment |
| grand\_total  | Grand total amount for the shipment   |

To create the `Ready for Pickup` email template in HotWax Commerce, the provided XML data file needs to be imported via the following link- `https://{instanceName}.io/webtools/control/EntityImport`

Here's the XML structure that generates the `Ready for Pickup` email template in HotWax Commerce:

<details>

<summary>XML structure for Ready to Pickup email</summary>

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



</details>

## Run Service to Create an Event on Klaviyo

In HotWax Commerce, when orders are packed and ready for pickup, Klaviyo triggers an email to customers containing their specific details. However, it's important to note that Klaviyo does not have a ready-to-pickup email event that can be triggered for action by default. Retailers need to run service named `createKlaviyoEvent` once before setting up the email flow in Klaviyo to ensure that this event is created in Klaviyo. This step is essential for the effective initiation of the email communication process.

1. **Access the Service List:** Go to `HotWax Commerce Service List` through this link- `https://<instanceName>.io/webtools/control/ServiceList`
2. **Locate `createKlaviyoEvent` Service:** Find the service named `createKlaviyoEvent` within the Service List interface. Click on the `createKlaviyoEvent` service to access its details.
3. **Run the Service:** Look for the `Run Service` button available against the service name and click on it. Finally, click on `Submit` to execute the service.

To ensure accurate email dispatch for this service, two essential parameters must be provided:

| Parameters     | Value                                                                               |
| -------------- | ----------------------------------------------------------------------------------- |
| productStoreId | Enter the name of the product store for which emails will be dispatched.            |
| emailType      | Specify the type of email (e.g., "PRDS\_READY\_TO\_PICKUP" for "Ready for Pickup"). |

## Create a Flow on Klaviyo

Once you have configured the necessary settings and templates in HotWax Commerce, the next step is to create a corresponding flow and template email in Klaviyo to trigger the `Ready for Pickup` email of the retailer’s choice with the specific details for the customer. This feature focuses on Klaviyo's response when a specific trigger, such as the `Ready for Pickup` event in HotWax Commerce, occurs. It manages the generation and dispatch of tailored `Ready for Pickup` emails to customers via Klaviyo, initiated by specific actions, like clicking the `Ready to Pick Up` button within HotWax Commerce.

Follow these steps to create the email flow in Klaviyo:

1. **Log in to Klaviyo:** Access your Klaviyo account using your credentials.
2. **Navigate to Flows:** Once logged in, locate and click on the `Flows` tab within the Klaviyo dashboard. This section is where you manage automated workflows.
3. **Create a New Flow:** Click on the `create flow` button. For the ready-to-pick-up flow, create a new one from scratch.
   * Choose the `Create from Scratch` option to begin a new flow.
   * Name the flow something like `Ready for Pickup` and click on `Create Flow`.
4. **Set Trigger Event:** Choose the trigger event that will initiate the flow, specifically the `Ready for Pickup` event associated with actions like clicking the `Ready to Pick Up` button in HotWax Commerce.
   * If this trigger isn’t available, ensure that the event has been properly set up or run the necessary service in HotWax Commerce.
5. **Configure Action:** Add an action step to the flow that involves sending an email. Look for the action that corresponds to sending emails.
6. **Choose Email Template:** Select an existing email template that aligns with the `Ready for Pickup` scenario. Alternatively, create a new email template specifically tailored for these notifications.
   * If creating a new template, consider elements like subject line, body content, and any dynamic data placeholders for customer-specific details. Here's an HTML template for the Ready to Pickup Notifications that you can use for your product store.

<details>

<summary>HTML doc for Ready to Pickup template</summary>

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title>
</title>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css" data-inliner="ignore">
.mj-outlook-group-fix { width:100% !important; }
</style>
<![endif]-->
<style>a:link {color:#197bbd;font-weight:normal;text-decoration:underline;font-style:normal}
a:visited {color:#197bbd;font-weight:normal;text-decoration:underline;font-style:normal}
a:active {color:#197bbd;font-weight:normal;text-decoration:underline;font-style:normal}
a:hover {color:#197bbd;font-weight:normal;text-decoration:underline;font-style:normal}</style><style>#outlook a {
padding: 0
}
body {
margin: 0;
padding: 0;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%
}
table, td {
border-collapse: collapse;
mso-table-lspace: 0;
mso-table-rspace: 0
}
img {
border: 0;
line-height: 100%;
outline: none;
text-decoration: none;
-ms-interpolation-mode: bicubic
}
p {
display: block;
margin: 13px 0
}
@media only screen and (min-width: 480px) {
.mj-column-per-100 {
width: 100% !important;
max-width: 100%
}
}
.moz-text-html .mj-column-per-100 {
width: 100% !important;
max-width: 100%
}
@media only screen and (max-width: 480px) {
div.kl-row.colstack div.kl-column {
display: block !important;
width: 100% !important
}
}
.hlb-subblk td {
word-break: normal
}
@media only screen and (max-width: 480px) {
.hlb-wrapper .hlb-block-settings-content {
padding: 9px !important
}
.hlb-logo {
padding-bottom: 9px !important
}
.r2-tbl {
width: 100%
}
.r2-tbl .lnk {
width: 100%
}
.r2-tbl .hlb-subblk:last-child {
padding-right: 0 !important
}
.r2-tbl .hlb-subblk {
padding-right: 10px !important
}
.kl-hlb-stack {
display: block !important;
width: 100% !important;
padding-right: 0 !important
}
.kl-hlb-stack.vspc {
margin-bottom: 9px
}
.kl-hlb-wrap {
display: inline-block !important;
width: auto !important
}
.kl-hlb-no-wrap {
display: table-cell !important
}
.kl-hlb-wrap.nospc.nospc {
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
.component-wrapper .mob-no-spc {
padding-left: 0 !important;
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
.kl-text {
padding-right: 18px !important;
padding-left: 18px !important
}
}
@media only screen and (max-width: 480px) {
.kl-table-subblock.use-legacy-mobile-padding {
padding-left: 9px !important;
padding-right: 9px !important
}
}
@media only screen and (max-width: 480px) {
td.kl-img-base-auto-width {
width: 100% !important
}
}
@media only screen and (max-width: 480px) {
table.mj-full-width-mobile {
width: 100% !important
}
td.mj-full-width-mobile {
width: auto !important
}
}
img {
border: 0;
height: auto;
line-height: 100%;
outline: none;
text-decoration: none;
max-width: 100%
}
.root-container {
background-repeat: repeat !important;
background-size: auto !important;
background-position: left top !important
}
.root-container-spacing {
padding-top: 50px !important;
padding-bottom: 20px !important;
font-size: 0 !important
}
.content-padding {
padding-left: 0 !important;
padding-right: 0 !important
}
.content-padding.first {
padding-top: 0 !important
}
.content-padding.last {
padding-bottom: 0 !important
}
@media only screen and (max-width: 480px) {
td.mobile-only {
display: table-cell !important
}
div.mobile-only {
display: block !important
}
table.mobile-only {
display: table !important
}
.desktop-only {
display: none !important
}
}
@media only screen and (max-width: 480px) {
.table-mobile-only {
display: table-cell !important;
max-height: none !important
}
.table-mobile-only.block {
display: block !important
}
.table-mobile-only.inline-block {
display: inline-block !important
}
.table-desktop-only {
max-height: 0 !important;
display: none !important;
mso-hide: all !important;
overflow: hidden !important
}
}
p {
margin-left: 0;
margin-right: 0;
margin-top: 0;
margin-bottom: 0;
padding-bottom: 1em
}
@media only screen and (max-width: 480px) {
.kl-text > div, .kl-table-subblock div, .kl-split-subblock > div {
font-size: 14px !important;
line-height: 1.3 !important
}
}
h1 {
color: #222427;
font-family: "Helvetica Neue", Arial;
font-size: 40px;
font-style: normal;
font-weight: normal;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 20px;
text-align: left
}
@media only screen and (max-width: 480px) {
h1 {
font-size: 40px !important;
line-height: 1.1 !important
}
}
h2 {
color: #222427;
font-family: "Helvetica Neue", Arial;
font-size: 32px;
font-style: normal;
font-weight: bold;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 16px;
text-align: left
}
@media only screen and (max-width: 480px) {
h2 {
font-size: 32px !important;
line-height: 1.1 !important
}
}
h3 {
color: #222427;
font-family: "Helvetica Neue", Arial;
font-size: 24px;
font-style: normal;
font-weight: bold;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 12px;
text-align: left
}
@media only screen and (max-width: 480px) {
h3 {
font-size: 24px !important;
line-height: 1.1 !important
}
}
h4 {
color: #222427;
font-family: "Helvetica Neue", Arial;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 9px;
text-align: left
}
@media only screen and (max-width: 480px) {
h4 {
font-size: 18px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
.root-container {
width: 100% !important
}
.root-container-spacing {
padding: 10px !important
}
.content-padding {
padding-left: 0 !important;
padding-right: 0 !important
}
.content-padding.first {
padding-top: 0 !important
}
.content-padding.last {
padding-bottom: 0 !important
}
.component-wrapper {
padding-left: 0 !important;
padding-right: 0 !important
}
}</style></head>
<body style="word-spacing:normal;background-color:#f7f7f7;">
<div class="root-container" id="bodyTable" style="background-color:#f7f7f7;">
<div class="root-container-spacing">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section" role="presentation" style="width:100%;">
<tbody>
<tr>
<td>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0px 0px 0px 0px;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0px 0px 0px 0px;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
<div class="content-padding first">
<!--[if true]><table border="0" cellpadding="0" cellspacing="0" width="600" style="width:600px;direction:ltr"><tr><![endif]-->
<div class="kl-row colstack" style="display:table;table-layout:fixed;width:100%;">
<!--[if true]><td style="vertical-align:top;width:600px;"><![endif]-->
<div class="kl-column" style="display:table-cell;vertical-align:top;width:100%;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper hlb-wrapper" style="font-size:0px;text-align:left;direction:ltr;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" width="100%">
<tbody>
<tr>
<td class="hlb-block-settings-content" style="vertical-align:top;padding-top:32px;padding-right:20px;padding-bottom:8px;padding-left:20px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="top" class="kl-header-link-bar" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:0;" width="100%">
<tbody>
<tr>
<td align="center" class="hlb-logo" style="display:table-cell;width:100%;padding-bottom:10px;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<!--[if true]><td style="width:120px;" bgcolor="transparent"><![endif]-->
<!--[if !true]><!--><td style="width:120px;"><!--<![endif]-->
<img src="{Image-link}" style="display:block;outline:none;text-decoration:none;height:auto;width:100%;background-color:transparent;" width="120"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!--[if true]></td><![endif]-->
</div>
<!--[if true]></tr></table><![endif]-->
</div>
<!--[if mso | IE]></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section" role="presentation" style="width:100%;">
<tbody>
<tr>
<td>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;border-radius:0px 0px 0px 0px;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;border-radius:0px 0px 0px 0px;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
<div class="content-padding">
<!--[if true]><table border="0" cellpadding="0" cellspacing="0" width="600" style="width:600px;direction:ltr"><tr><![endif]-->
<div class="kl-row colstack" style="display:table;table-layout:fixed;width:100%;">
<!--[if true]><td style="vertical-align:top;width:600px;"><![endif]-->
<div class="kl-column" style="display:table-cell;vertical-align:top;width:100%;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-text" style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
<div style="font-family:'Helvetica Neue',Arial;font-size:14px;font-style:normal;font-weight:400;letter-spacing:0px;line-height:1.3;text-align:left;color:#222427;"><div>
<div><span>
<p class="p1" style="padding-bottom:0"><span class="s1">Hello </span>{{ event.first_name }} {{ event.last_name }},</p>
</span></div>
<div><span> </span><span> </span></div>
<div><span>
<h2>
</h2><p class="p1"><span class="s1" style="font-weight: bold; font-size: 32px;">Your order is ready for pickup:</span></p>
<h4>
<p class="p1" style="padding-bottom:0"><span class="s1">Withdrawal information:</span></p>
<p class="p1" style="padding-bottom:0"><span style="font-weight: 400; font-size: 14px;">{{ event.ship_from.to_name }}</span></p>
</span>
<div><span style="font-weight: 400;">
<p class="p1">{{ event.ship_from.address1 }}</p>
<p class="p1">{{ event.ship_from.address2 }}</p>
<p class="p1">{{ event.ship_from.city }}</p>
<p class="p1">{{ event.ship_from.state_name }}</p>
<br/></span></div>
<div><strong>
<p class="p1" style="padding-bottom:0"><span class="s1">Note:</span> <span class="s1" style="font-weight: 400;">Present the confirmation of your order sent by email when you collect your order</span></p>
<span><br/></span><hr/><span>
<h2>
<p class="p1" style="padding-bottom:0"><span class="s1" style="font-weight: bold; font-size: 32px;">Summary of your order.</span></p>
<p class="p1" style="padding-bottom:0"><span class="s1">Shopify order number:</span><strong style="font-size: 24px;">{{event.order_name}}</strong></p>
</span><span>
<div> </div>
<div> </div>
<div> </div>
</span></div>
</div></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!--[if true]></td><![endif]-->
</div>
<!--[if true]></tr></table><![endif]-->
</div>
<!--[if mso | IE]></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section" role="presentation" style="width:100%;">
<tbody>
<tr>
<td>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0px 0px 0px 0px;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0px 0px 0px 0px;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
<div class="content-padding">
<!--[if true]><table border="0" cellpadding="0" cellspacing="0" width="600" style="width:600px;direction:ltr"><tr><![endif]-->
<div class="kl-row colstack" style="display:table;table-layout:fixed;width:100%;">
<!--[if true]><td style="vertical-align:top;width:600px;"><![endif]-->
<div class="kl-column" style="display:table-cell;vertical-align:top;width:100%;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-table" style="font-size:0px;padding:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;" width="100%">

<div data-gb-custom-block data-tag="if">

<thead>
<tr>
<th class="kl-table-subblock" style="width:auto;overflow:hidden;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:Arial;font-size:14px;font-weight:700;letter-spacing:0px;line-height:1.3;text-align:left;color:#222222;"></div>
</th>
<th class="kl-table-subblock" style="width:auto;overflow:hidden;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:Arial;font-size:14px;font-weight:700;letter-spacing:0px;line-height:1.3;text-align:left;color:#222222;">Product Name</div>
</th>
<th class="kl-table-subblock" style="width:auto;overflow:hidden;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:Arial;font-size:14px;font-weight:700;letter-spacing:0px;line-height:1.3;text-align:left;color:#222222;">Quantity</div>
</th>
<th class="kl-table-subblock" style="width:auto;overflow:hidden;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:Arial;font-size:14px;font-weight:700;letter-spacing:0px;line-height:1.3;text-align:left;color:#222222;">Price</div>
</th>
</tr>
</thead>
<tbody>

<div data-gb-custom-block data-tag="for">

<tr>
<td class="kl-table-subblock" style="width:auto;overflow:hidden;vertical-align:top;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
<td align="left" class="" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="border:0;padding:0;width:600px;" valign="top">
<img alt="" style="display:block;outline:none;text-decoration:none;height:auto;font-size:13px;width:100%;" title="" width="600"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</table>
</td>
<td class="kl-table-subblock" style="width:auto;overflow:hidden;vertical-align:top;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:'Helvetica Neue',Arial;font-size:14px;font-style:normal;font-weight:400;letter-spacing:0px;line-height:1.3;text-align:left;color:#222427;"><div>{{ items.product }}</div></div>
</td>
<td class="kl-table-subblock" style="width:auto;overflow:hidden;vertical-align:top;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:'Helvetica Neue',Arial;font-size:14px;font-style:normal;font-weight:400;letter-spacing:0px;line-height:1.3;text-align:left;color:#222427;"><div>{{ items.quantity }}</div></div>
</td>
<td class="kl-table-subblock" style="width:auto;overflow:hidden;vertical-align:top;padding-top:4px;padding-right:0px;padding-bottom:4px;padding-left:0px;">
<div style="font-family:'Helvetica Neue',Arial;font-size:14px;font-style:normal;font-weight:400;letter-spacing:0px;line-height:1.3;text-align:left;color:#222427;"><div>{{ items.price }}</div></div>
</td>
</tr>

</div>

</tbody>

<div data-gb-custom-block data-tag="else"></div>

<tbody>
</tbody>

</div>

</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!--[if true]></td><![endif]-->
</div>
<!--[if true]></tr></table><![endif]-->
</div>
<!--[if mso | IE]></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;width:100%;" width="100%">
<tbody>
<tr>
<td align="center" class="klBranding" style="font-size:0px;padding:25px 0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td style="width:122px;">
<a href="https://www.klaviyo.com/?utm_medium=freebie&amp;utm_source=brand&amp;utm_term=YidwsB" style="color:#197bbd; font-style:normal; font-weight:normal; text-decoration:underline" target="_blank">
<img alt="Powered by Klaviyo" height="50" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/branding/klaviyo-branding-option-0.png" style="border:0;display:block;outline:none;text-decoration:none;height:50px;width:100%;font-size:13px;" width="122"/>
</a>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</div>
</div>
</body>
</html>
```

Replace {image link} with the link of your desired image file

</details>

7. **Customize Email Settings:** Adjust the email settings, including the sender information, subject line, and the dynamic content that should be populated based on specific customer order details.
   * Ensure placeholders for dynamic data (such as customer names and order details) are correctly configured to pull the relevant information.
8. **Test the Flow:** Before activating the flow, utilize Klaviyo's testing tools to simulate the trigger event and ensure that the email is sent as expected.
   * Verify that the dynamic data populates correctly in the test emails, ensuring the personalized touch for each recipient.
9. **Activate the Flow:** Once satisfied with the configuration and testing, activate the flow to make it live.
   * Klaviyo will now automatically trigger the \`Ready for Pickup\`\` email based on the defined conditions whenever the corresponding event occurs in HotWax Commerce.
