---
description: Learn how HotWax Commerce synchronizes order updates from Shopify.
---

# Order Updates

### Synchronizing Order Updates

Sometimes customers or customer service representatives make changes to Shopify orders that need to be accurately reflected in HotWax Commerce to ensure the fulfillment process meets the customer's requirements. HotWax Commerce can update the following details from Shopify:

* Adding items to an order
* Removing items from an order
* Changing item quantities
* Refunded transactions

To ensure all order modifications are synced accurately, HotWax Commerce has an 'Import order updates from Shopify' job. This job checks the 'updated\_at' field of orders in Shopify and compares it to the last run time of the job. If the 'updated\_at' time is after the last run time, the job downloads all order details from Shopify, compares it to HotWax Commerce data, and updates any changed fields. The default frequency for the job is every hour, but merchants can change it through the Job Manager App to meet their requirements.

<figure><IMG src="../../.gitbook/assets/import-order-updates-job-config.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Import order updates from Shopify” job in the Job Manager App</em></p></figcaption></figure>

To know more about how HotWax Commerce synchronizes Order fulfillment updates with Shopify, [click here](../../). Read further to know how HotWax Commerce Manages [Presell orders](../preorders-and-backorders/) and [BOPIS Orders](../bopis-orders/).
