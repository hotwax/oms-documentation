# Order Attribute is Missing

Shopify retailers can capture additional crucial order details through metafields. When HotWax Commerce enters a retailer’s Shopify ecosystem, it becomes the source of truth for all order-related information.

HotWax Commerce stores these metafields as order attributes enabling Shopify retailers to conveniently provide necessary order information to accounting systems for accurate financial reporting. For example, customer identification `CustomerID` and designated delivery location `Municipio` are crucial attributes for one of our clients.

If orders do not have all valid order attributes, the orders remain in “created” status and these orders can not proceed with the fulfillment process. By using the [`missing order attribute report`](https://docs.hotwax.co/learn-netsuite/supported-integrations/salesorder/reports#missing-order-attribute-report), you can find out which orders have a missing order attribute.

## Scenario 1: Order Missing Metafields in OMS

To ensure consistency between HotWax Commerce and Shopify, verify if an order has the Order Metafields in Shopify. Typically, the attributes will sync automatically later.

If an order in Shopify has meta fields that are missing in OMS, it could be due to one of the following:

`Import Order Metafield` Job Not Running: The job responsible for importing metafields might not be running. Ensure that this job is scheduled and operating correctly in HotWax Commerce

Check Job Scheduling in NiFi: Verify that the job responsible for importing metafields and placing them on SFTP is scheduled and functioning as expected in NiFi.

Verify SFTP Import in OMS: Ensure OMS is properly configured to import metafields from SFTP.

Manual addition of meta fields in OMS should be considered only if the above checks are confirmed and the issue persists.

Note: If manual addition is necessary, ensure correct spelling and format when adding tags in OMS.

## Scenario 2: Order Missing Metafields in both OMS and Shopify

If an order metafield is missing from Shopify and the OMS, it's crucial to investigate the root cause. This may involve identifying issues such as the metafield not being available due to order-related problems.

For example, if the `Riskified` or `Signified approved` tag is missing in Shopify, the order contains high or medium fraud risk. There is a high chance that you will receive a chargeback on this order.

In such cases, CSRs have to manually verify the orders and add the attribute in the Order Attribute section on the Order View page.

<figure><img src="../../.gitbook/assets/Add order Attribute 1.png" alt=""><figcaption></figcaption></figure>
