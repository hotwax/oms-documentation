---
description: Troubleshooting Guide for orders stuck in created status
---

# Order Approval Errors

In HotWax Commerce, all orders are initially marked as "Created" after being downloaded. Orders can be auto-approved using a scheduled job called `Approve Orders`, which checks the approval status of Shopify orders based on parameters set by Shopify merchants. The job runs at a default frequency of 30 minutes and approves orders once all necessary details and required references are established.

Clients may have varying approval processes, such as requiring customer IDs or payment verification tags. If the job is stuck in the "Created' status", it could be due to missing or incorrect order attributes.

## Scenario 1: Missing Order Attribute

Orders may not get approved if essential attributes are missing. For instance, some clients may require specific information such as a customer ID or Municipio ID. If these attributes are missing, the approval job cannot verify and approve the order, causing it to remain in the 'Created' status. For detailed instructions on how to add missing order attributes, refer to our [troubleshooting documentation](orderAttributeMissing.md)



<figure><img src="../../.gitbook/assets/Add order Attribute 1.png" alt="" width="563"><figcaption></figcaption></figure>

## Scenario 2: Incorrect Order Attribute

Another common issue is the presence of incorrect order attributes. This could mean that the required information is either incomplete or inaccurately entered, which can prevent the order from being approved. For example, incorrect municipio ID can lead to approval failures.
