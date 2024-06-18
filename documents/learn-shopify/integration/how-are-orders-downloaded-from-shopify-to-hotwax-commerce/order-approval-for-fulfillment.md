---
description: >-
  Learn about the order approval process for fulfillment in HotWax Commerce,
  that streamlines operations with efficient order management.
---

# Order Approval for Fulfillment

## Order Approval for Fulfillment in HotWax Commerce

### Overview

In HotWax Commerce, all orders are initially marked as ‘Created’ after being downloaded. Orders can be auto-approved with a scheduled job called 'Approved Orders.' This job checks the approval status of Shopify orders based on parameters set by Shopify merchants.

### Approved Orders Job

Orders need to be verified and approved before they can be fulfilled. Without a systematic approval process, invalid or fraudulent orders could proceed to fulfillment, leading to potential issues.

The 'Approved Orders' job runs at a default frequency of 30 minutes and checks the ‘approved’ tag of the orders. For example, the Riskified app, used by clients like Steve Madden, adds an ‘approved’ tag once all security checks are done. The 'Approved Orders' job then changes the status of orders with the ‘approved’ tag to 'Approved'. Only these orders are eligible for fulfillment. Orders without the approval tag remain in 'Created' status until the next job run. Merchants can set their own criteria to ensure only ‘Approved’ orders are sent for fulfillment. They also have the option to manually approve orders in case of high order volumes.

### Example Scenario

* The 'Approved Orders' job runs every 30 minutes.
* Riskified app adds an ‘approved’ tag after security checks.

1. The job running at 1:00 will check orders and mark those with the ‘approved’ tag as 'Approved'.
2. Orders without the ‘approved’ tag will remain in 'Created' status until the next job at 1:30.

This process ensures only approved orders proceed to fulfillment, maintaining order accuracy and security.

<figure><img src="../../.gitbook/assets/21.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Approved Orders” job in the Job Manager App</em></p></figcaption></figure>

{% hint style="info" %}
When an order includes a digital product, it will be marked complete once it is downloaded into HotWax Commerce because these products do not require physical fulfillment. Shopify will be notified that the order is fulfilled and will mark it as such.
{% endhint %}
