---
description: >-
  Safely manage customer data in compliance with GDPR regulations using HotWax
  Commerce's secure deletion feature.
---

# Delete customers

The GDPR bill passed by the European Union has brought changes in how businesses handle customer data. One aspect is the "right to be forgotten," also known as the "right to erasure," allowing individuals to request the deletion of their data if it's no longer necessary or if there's no compelling reason for its continued processing.

In the context of HotWax Commerce, where customer information is stored after order fulfillment for future use such as returns or accounting, compliance with GDPR's right to erasure is vital. HotWax Commerce provides a feature to delete customer details securely.

By implementing this feature, HotWax Commerce users can manage customer data in accordance with GDPR requirements. It ensures compliance and fosters trust with customers by demonstrating a commitment to data privacy and protection. Moreover, it streamlines data management processes, contributing to workflow efficiency.

## Steps to Delete Customer Data from UI

### Search for Customer Email ID:
1. Navigate to the `Sales Order` page.
2. Enter the customer's email ID in the search bar.

### Select and Delete the Customer:
1. From the search results, select an order associated with the customer.
2. Click on the customer’s name in the `Bill To` section.
3. On the customer page, click the `Delete Customer` button at the top.
4. The customer will be deleted from the OMS.

### Verify Customer Deletion:
1. Return to the `Sales Order` page.
2. Search for the customer's email ID.
    - If no orders are displayed, the customer has been successfully deleted.
    - If the customer name is still displayed, proceed to the next step.

### Reindex Orders:
1. For each order visible:
    - Open the order associated with the email ID.
    - Click the `Reindex` button at the top of the order details page.
2. Verify successful reindexing by searching the email ID again on the `Sales Order` page.
    - If no orders are displayed, the reindexing is successful.
    - If orders are still present, proceed to the next step.

### Run `createOrderIndex` Service:
1. Open `Webtools` and click the `Service Engine` button.
2. Search for and open the `createOrderIndex` service.
3. Click the `Schedule Job` button.
4. For each order visible:
    - Enter the order ID as the job ID and click `Submit`.
5. Verify customer deletion by searching the email ID on the `Find Sales Order` page.


## Step-by-Step Usage Instructions

### Log into your HotWax Commerce webtools instance
   * Visit the HotWax Commerce webtools portal and log in using your credentials.

### Navigate to the Service Engine
   * Once logged in, locate and click on the `Service Engine` tab. This is where you can access various services which you can schedule in HotWax Commerce.

### Search for the Service Named `deleteCustomerDetails`
   * In the `Service Engine`, locate the service titled `deleteCustomerDetails`. This service is specifically designed to delete customer information in compliance with GDPR regulations.

### Schedule the Service by Adding the PartyID of the Customer
   * After selecting the `deleteCustomerDetails` service, you will be prompted to schedule it. Provide the `PartyID` of the customer whose data you wish to delete. This ensures that the deletion process targets the correct customer information.
     
### Execute the Service:
   * Once you've added the `PartyID`, proceed to execute the service. This action triggers the deletion process, securely removing the specified customer's details from the system.
### Verify Deletion

   * After the service has been executed, verify that the customer's details have been successfully deleted. You should see placeholders such as 'deleted' in place of the customer's name, address, and email, with 'NA-NA' replacing the phone number.

By following these steps, HotWax Commerce users can comply with GDPR regulations regarding the right to erasure while maintaining data management practices within the platform.
