---
description: >-
  Learn about the order approval process for fulfillment in HotWax Commerce,
  that streamlines operations with efficient order management.
---

# Order Approval for Fulfillment

## Order Approval for Fulfillment in HotWax Commerce

### Overview

In HotWax Commerce, all orders are initially marked as ‘Created’ after being downloaded. Orders can be auto-approved with a scheduled job called 'Approve Orders.' This job checks the approval status of Shopify orders based on parameters set by Shopify merchants.

### Approve Orders Job&#x20;

Orders need to be verified and approved before they can be fulfilled. Without a systematic approval process, invalid or fraudulent orders could proceed to fulfillment, leading to potential issues. The 'Approved Orders' job runs at a default frequency of 30 minutes and checks the ‘approved’ tag of the orders.

#### Example Scenario: Fraud Detection with Riskified

For example, the Riskified app, used by clients like Steve Madden, adds an ‘approved’ tag once all security checks are done. After this processing is over, HotWax will sync these orders initially labeling them as 'Created'. The `checkRiskifiedTagAndApproveOrders` job then changes the status of orders with the ‘approved’ tag to 'Approved'. Only these orders are eligible for fulfillment.&#x20;

<figure><img src="../../.gitbook/assets/21.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Approved Orders” job in the Job Manager App</em></p></figcaption></figure>

{% hint style="info" %}
Any digital items are marked as 'Fulfilled' in Shopify. On import into HotWax Commerce, these items are automatically marked as completed.
{% endhint %}
