# Orders Not Syncing with Netsuits

HotWax Commerce integrates with platforms like Shopify and NetSuite to manage orders, inventory, and customer data. Occasionally, synchronization issues may arise, causing data discrepancies and operational inefficiencies. This document outlines common scenarios for these issues, with detailed steps to identify, diagnose, and resolve them.

## Scenario 1: Order Missing the Metafield in OMS
If orders do not have all valid order attributes, they remain in “created” status and cannot sync with NetSuite.

### Verification
#### Check Metafield in Shopify:
1. Log in to HotWax Commerce.
2. Navigate to the order view page and click `ExternalID`. This will redirect you to the Shopify admin page.
3. On the Shopify order page, check the right side in the Tag section. Verify if the order has the necessary Metafield.

#### Check Metafield in HotWax Commerce OMS:
1. Log in to HotWax Commerce.
2. Go to the `order view page`
3. Check if the order has the Metafield in the order attribute section.

### Resolution
#### Order Metafield present in Shopify but Not in OMS:
1. Manually add the Metafield to the OMS.
2. Go to the order view page in OMS.
3. Locate the order attribute section.
4. Add the missing Metafield.

#### Order Metafield absent in Both Shopify and OMS:
1. Identify the cause of the missing Metafield.
2. Check Shopify settings to ensure Metafields are correctly applied to orders.
3. Verify if there are any issues with the order that prevents Metafield.

**Additional Resources:** Refer to the [order Attribute is Missing](https://docs.hotwax.co/documents/v/retail-operations/orders/order-management/troubleshooting/orderattributemissing) Troubleshooting document.

*Note:* Ensure the correct spelling when manually adding the Metafield in the OMS.

## Scenario 2: Missing NetSuite Customer ID
To successfully create a sales order in NetSuite, having the customer information pre-existing within NetSuite's database is a prerequisite. If the order contains a new customer who is not present in NetSuite, the system won't allow the order to be pushed.

### Verification
#### Go to the Order View Page:
1. Log in to HotWax Commerce.
2. Navigate to the order view page.

#### Check Customer ID:
1. Click on the customer name in the "Bill to" section.
2. You will be redirected to the customer page.
3. Check the identification section for the NetSuite Customer ID.

### Resolution
#### Customer ID Missing:
1. Check the [customer feed](https://docs.hotwax.co/documents/v/learn-netsuite/netsuite-deployment/prerequisites/sftplocations) for the order.
2. Navigate to the SFTP customer feed in NetSuite.
3. Verify if the order is present in the feed.
4. If the order is present in the feed, there may be an internal issue with NetSuite.
5. Contact NetSuite support for assistance.

## Scenario 3: Customer Names or Email ID Having Special Characters
If the customer's name or email ID contains special characters, it does not sync with NetSuite. Therefore, we need to remove the special characters. Once the name or email is updated, the next order feed will sync with the order in NetSuite.

### Verification
#### Go to the Order View Page:
1. Log in to HotWax Commerce.
2. Navigate to the order view page.

#### Check Customer Name and Email:
1. In the "Bill to" section, verify the customer's name contains any special characters.
2. Click on the customer name. Verify if the customer's email includes any special characters.

### Resolution
#### Special Characters Found:
1. Notify the client to adjust the customer name.
2. Provide instructions to the client on how to update the name.
3. The updated name will be included in the next customer feed.

## Scenario 4: The Payment Preferences Have Not Been Set
If an order doesn't have a payment preference, it cannot be synced with NetSuite. We need to check if the payment preference for that order is missing in HotWax but present in Shopify, or if the payment preference is missing in both Shopify and HotWax.

### Verification
#### If the Payment Details is Not Set in HotWax
1. Log in to HotWax Commerce.
2. Navigate to the order view page
3. In the “Payment Terms and Preferences” section, verify if preferences are set.
   Confirm if the payment information is available in Shopify by checking the [`Order JSON data imported`](https://docs.hotwax.co/documents/v/retail-operations/workflow/data-manager/troubleshooting/shopify-mdm) in OMS.  you can verify this on the Shopify order MDM

#### If the payment details are missing in both Shopify and HotWax.
1. Log in to HotWax Commerce.
2. Navigate to the order view page and click "ExternalID." This will redirect you to the Shopify admin page.
3. Append /transactions.json to the order URL.
4. Check if the Transaction is null.


#### Verify Transaction in Shopify:
1. Check the order in Shopify.
2. Append `/transactions.json` to the order URL.
3. Verify if the transaction data is present or identify any issues.

### Resolution
#### If the Payment Details is Not Set in HotWax
1. Check if the payment method is not set in Hotwax.
2. After the client makes the necessary changes, run the [`Import Order Update from Shopify`](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/orders#import-order-updates-from-shopify) job to sync the data.
3. Alternatively, you can manually add the payment preferences by clicking on the + “Payment Terms and Preferences” section.

##### If the Payment Details are Not Set in both Hotwax and Shopify.
1. Inform the client about the issue with the payment preferences.
2. After the client makes the necessary changes, run the [`Import Order Update from Shopify`](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/orders#import-order-updates-from-shopify) job to sync the data.
