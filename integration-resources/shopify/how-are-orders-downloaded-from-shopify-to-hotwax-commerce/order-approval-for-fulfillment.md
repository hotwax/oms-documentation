---
description: >-
  Learn about the order approval process for fulfillment in HotWax Commerce,
  that streamlines operations with efficient order management.
---

# Order Approval for Fulfillment

### Order Approval for Fulfillment in HotWax Commerce

After downloading, HotWax Commerce initially mark all the orders as ‘Created’. Orders can be auto-approved in HotWax commerce with a scheduled job called 'Approved Orders'. The job checks the approval status of Shopify orders based on parameters set by Shopify Merchants. For example, one of our clients Steve Madden uses the [Riskified app](https://www.riskified.com/) to check any fraudulent payment. In such cases, the Riskified app adds an ‘approved’ tag once all the security checks are done. The 'Approved Orders' job runs at a default frequency of 30 minutes and checks the ‘approved’ tag of the orders. If the orders have the ‘approved’ tag by riskified, the status of the job is changed to 'Approved'. Only orders with approved tags are eligible for fulfillment; orders without approval remain in 'Created' status until the next job. Similarly, other merchants can set their own set of criteria to ensure only ‘Approved’ orders are sent for fulfillment. Merchants also have the option to manually approve the orders in case of high order volumes.

<figure><img src="../.gitbook/assets/Approved orders.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Approved Orders” job in the Job Manager App</em></p></figcaption></figure>

{% hint style="info" %}
When an order includes a digital product, it will be marked complete once it is downloaded into HotWax Commerce because these products do not require physical fulfillment. Shopify will be notified that the order is fulfilled and will mark it as such.
{% endhint %}

###
