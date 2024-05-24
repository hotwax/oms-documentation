---
description: >-
  Discover how HotWax Commerce seamlessly imports returns from Shopify for
  online returns.
---

# Import Returns from Shopify

### How Does HotWax Commerce Import Returns from Shopify for Online Returns?

The process of importing returns from Shopify to HotWax Commerce typically involves the following steps:

* Retailers can schedule the "Import Order Returns" job in HotWax Commerce to efficiently manage the import of order returns. HotWax Commerce initiates this process by sending an API request to Shopify, specifically targeting orders with a "Refund" status in Shopify, provided they were created after the last job run. In response, Shopify returns detailed return data in JSON format, facilitating the integration of return information. The frequency at which the "Import Order Returns" job is executed can be configured, but a recommended time interval for this job is 6 hours.

Shopify allows the download of up to 250 returns per API call. To ensure data accuracy and prevent potential issues arising from multiple orders within a single return, HotWax Commerce restricts each API call to download a maximum of 100 returns.

<figure><img src="../../.gitbook/assets/35.png" alt=""><figcaption><p>Fig.1(i): Import Order Returns in HotWax Commerce</p></figcaption></figure>

Retailers can subscribe to Shopify's real-time return updates webhooks from HotWax Commerce's Job Manager app. However, Shopify warns that these webhooks might not consistently deliver real-time data. For a more reliable method, Shopify advises setting up reconciliation jobs to periodically retrieve return data directly from the platform.

<figure><img src="../../.gitbook/assets/36.png" alt=""><figcaption><p>Fig. 1(ii): Shopify Webhook for return events</p></figcaption></figure>

* Once the return information is downloaded, HotWax Commerce processes the JSON files by reading them from the file system. Through the 'Process Bulk Imported Files' job, refund records are meticulously created within HotWax Commerce's database. This process ensures that return data is accurately integrated into the system. In cases where data discrepancies or issues may arise, error logs are generated, allowing for subsequent analysis and corrections to be made.

{% hint style="info" %}
The refund total may differ from the actual sales total of the order. This variance can be attributed to scenarios where customers have paid shipping and handling charges on the order, which are sometimes excluded from the refund amount.
{% endhint %}

* HotWax Commerce operates with a specific inventory management approach for restocking online returns. When inventory is returned on Shopify, it provides an option to enable the restock returned inventory flag. However, HotWax Commerce does not automatically increase the inventory count in its system even if the restocked return flag is enabled on Shopify. This is because HotWax Commerce lacks visibility into the specific location where the inventory is received. Instead, inventory is updated only when the updated inventory count is received from Warehouse Management Systems (WMS) or Enterprise Resource Planning (ERP) systems.
