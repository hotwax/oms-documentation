# Iterable

This guide shows you how to integrate HotWax Commerce with Iterable, a popular marketing automation platform for Shopify. This integration automates email notifications to improve your customers' experience.

HotWax Commerce handles order processing and fulfillment, while Iterable takes care of sending personalized email notifications. You can configure email flows within HotWax Commerce to trigger based on specific events, like an order being ready for pickup.

**Follow the steps below to integrate with Iterable and start sending automated pickup notifications:**

## Connect HotWax Commerce and Iterable

To share any kind of information between these systems, they need to make a connection with each with the help of private access keys. An API key acts like a secure password, allowing authorized communication between HotWax Commerce and Iterable. Follow these steps to create one:

1. **Log in to Iterable** with your existing credentials.
2. **Navigate to Your Project:** Remember, API keys are project-specific. Ensure you're in the correct project for your HotWax connection.
3. **Find API Keys:** Look for the `Integrations` section in the main menu and hover over it. Select `API Keys` from the dropdown.
4. **Create a New Key:** Click on `New API Key` when the page opens.
   * **Give it a Name:** Choose a descriptive name to easily identify its purpose (e.g. "HotWax Commerce Integration").
   * **Select Key Type:** Choose "Server-side" as this key will be used by HotWax Commerce to share details. You can find more details about key types:[link to Iterable API Keys documentation](https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys).
5. **Generate the Key:** Click on `Create API Key`. A pop-up will appear displaying the generated key. **Important:** This key will only be displayed once. 
6. **Copy and Secure the Key:** Carefully copy the entire API key and store it securely in a password manager or other encrypted location. **Never share it publicly.**

**Remember:** Treat the API key like a password. Avoid sharing it and keep it confidential for secure communication between HotWax Commerce and Iterable.


## Adding API Key in HotWax Commerce

**Configure HotWax Commerce with Your Iterable API Key**

Once you have your API key from Iterable, follow these steps to integrate it with HotWax Commerce:

1. **Log in to HotWax Commerce:** Access your HotWax Commerce platform at `https://{instanceName}.io/webtools/control/EntityImport`.

2. **Import Configuration:**
   * In the `Complete XML document` section, paste the following XML snippet.
   * **Important:** Replace `YOUR_ITERABLE_API_KEY` with your actual API key from Iterable in the `publicKey` field.

**XML Configuration**

```xml
<SystemMessageRemote systemMessageRemoteId="ITERABLE" description="Iterable service configuration" sendUrl="https://app.iterable.com/api/workflows/triggerWorkflow" publicKey="YOUR_ITERABLE_API_KEY" authHeaderName="API-Key" sendServiceName="sendEmailRequest"/>
```

</details>

**The XML information contains the following details:**

| Attribute                       | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| SystemMessageRemote Description | Identifies the third-party system for actions.                |
| Send ServiceName                | The service name triggering the action.                       |
| Send Url                        | URL of the third-party system (Iterable in this case).         |
| Shared Secret                   | Private API key for HotWax Commerce to interact with Iterable. |
| System Message Remote ID        | Identification of the third-party system in HotWax Commerce.  |


## Add Product Store Setting in HotWax Commerce

Setting up product store email settings in HotWax Commerce allows you to define which email information triggers automated messages for specific marketing automation platforms. For example, you can configure settings to send "Ready for Pickup" email data in the format of `Iterable` for a particular product store. Follow these steps to Add Product Store Setting:

1. Visit `https://{instanceName}.io/webtools/control/EntityImport` to access the Entity Import interface.
2. In the `Complete XML document` section, add the following XML information:

```xml
<ProductStoreEmailSetting emailType="PRDS_READY_TO_PICKUP"  productStoreId="DD_STORE" subject="Ready To Pick-Up Notification" systemMessageRemoteId="ITERABLE" templateContentId="READY_TO_PICK_NOTI"/>

```

**The XML information contains the following details**

| Attribute             | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| productStoreId        | Enter the ID of the product store for which emails will be dispatched.            |
| emailType             | Specify the type of email (e.g., "PRDS_READY_TO_PICKUP" for "Ready for Pickup"). |
| subject               | Define the subject line for the email (`Ready For Pickup Email`).                   |
| systemMessageRemoteId | Use the Iterable remote ID created in the previous setup step.                       |
| templateContentId     | Input the ID of the "Ready for Pickup" template content in this instance.           |


## Add Preconfigured Data for the `Ready for Pickup` Email

Within Iterable, customized email templates are employed for `Ready to Pickup` notifications, where the content varies for each order. When a `Ready to Pickup` email needs to be dispatched, HotWax Commerce generates order-specific data and transfers it to Iterable. To enable this process, HotWax Commerce develops and updates individualized data templates for each order, facilitating accurate and personalized email notifications sent through Iterable.

This configuration data is sent for

| Key           | Description                           |
| ------------- | ------------------------------------- |
| first_name   | Customer's first name                 |
| last_name    | Customer's last name                  |
| to_name      | Name of the facility for origin       |
| address1      | Address line 1                        |
| address2      | Address line 2                        |
| city          | City                                  |
| state_name   | State name                            |
| country_name | Country name                          |
| order_name   | Name of the order                     |
| order_item   | List of shipment items                |
| image_url    | URL of the product image              |
| product_name | Description of the ordered product    |
| quantity      | Quantity of the ordered item          |
| subtotal      | Total amount of items in the shipment |
| grand_total  | Grand total amount for the shipment   |

To create the `Ready for Pickup` email data template in HotWax Commerce, the provided XML data file needs to be imported via the following link- `https://{instanceName}.io/webtools/control/EntityImport`

Here's the XML structure that generates the `Ready for Pickup` email data template in HotWax Commerce:

To use this template with Iterable, insert your workflow ID within the electronic text. To generate WorkFlow Id read this document [here](https://docs.hotwax.co/integration-resources/v/marketing-automations-platform/iterable#add-preconfigured-data-for-the-ready-for-pickup-email).

```xml

<DataResource dataResourceId="READY_FOR_PICKUP" dataResourceTypeId="ELECTRONIC_TEXT"  dataTemplateTypeId="FTL" statusId="CTNT_PUBLISHED"/>

<Content contentId="READY_FOR_PICKUP" contentTypeId="DOCUMENT" contentName="Template for Iterable ready for pickup email" dataResourceId="READY_FOR_PICKUP" statusId="CTNT_PUBLISHED"/>

<ElectronicText dataResourceId="READY_FOR_PICKUP">
{
  "email": "${sendEmailTo!}",
  "workflowId": <workFlowID>,
  "dataFields": {
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
      {
        "image_url": "${productUrl!}",
        "product_name": "${orderItem.itemDescription!} ${product.productName!}",
        "quantity": "${shipmentItem.quantity!}",
        "price": "${orderItem.unitPrice}"
      },
      ... (additional order items)
    ],
    "subtotal": "${shipGroupTotalItemAmount}",
    "grand_total": "${shipGroupTotal!}"
  }
}
</ElectronicText>

```

## Trigger Automated `Ready to Pickup` Emails with Iterable

Here's how to set up a workflow in Iterable to automatically send personalized "Ready to Pickup" emails to your customers when an order is ready for collection in HotWax Commerce.

1. Log in to Iterable: Access your Iterable account with your login credentials.
2. Design Your Email Template:
   1. Navigate to "Content" and click the "Templates" tab. Here, you can create a new template or use an existing one that aligns with "Ready to Pickup" notifications. (Guide for creating templates: [link])
3. Build the Workflow:
   1. Go to "Messaging" and click the "Journeys" tab.
   2. Click "New Journey" to create a workflow from scratch. You can also learn more about creating workflows here.
   3. Name your workflow "Ready to Pickup" and set the Entry Source to "API call" with unlimited entries.
   4. Configure Email Action:
   5. Add an action step to your workflow that involves sending an email.
   6. Select the appropriate email template you created in step 2.

By following these steps, you'll create an automated workflow in Iterable that triggers "Ready to Pickup" emails based on HotWax Commerce events. Save the workflow Id to use it in HotWax data, which help you send the ready for pickup email. 


## Run Service to send email from on Iterable

In HotWax Commerce, when orders are packed and ready for pickup, Iterable triggers an email to customers containing their specific details. Retailers need to run service or can create a new job which should be regularly scheduled on service `sendReadyToPickupItemNotification` to trigger the workflow. This step is essential for the effective initiation of the email communication process.

1. **Access the Service List:** Go to `HotWax Commerce Service List` through this link- `https://<instanceName>.io/webtools/control/ServiceList`
2. **Locate `sendReadyToPickupItemNotification` Service:** Find the service named `sendReadyToPickupItemNotification` within the Service List interface. Click on the `sendReadyToPickupItemNotification` service to access its details.
3. **Run the Service:** Look for the `Run Service` button available against the service name and click on it. Finally, click on `Submit` to execute the service.

To ensure accurate email dispatch for this service, two essential parameters must be provided:

| Parameters     | Value                                                                               |
| -------------- | ----------------------------------------------------------------------------------- |
| shipmentId | The unique identification of the shipment in HotWax                                     |
| emailTypeId    | Specify the type of email (e.g., "PRDS_READY_TO_PICKUP" for "Ready for Pickup"). |
