# How does HotWax Commerce Manage Order Returns?

In the world of omnichannel retail, Shopify retailers offer their customers two distinct options for returning online products: Mail Returns and In-Store Returns. HotWax Commerce plays distinct roles in handling these two types of returns:

**Mail Returns:** Mail returns could be initiated by customers, or by the customer service representative (CSR) team in response to customer requests, which can be received through email or phone calls. Returns are created in Shopify and retailers often utilise third-party return management apps like Happy Returns, Loop Returns, or Returnly to facilitate the management of returns..&#x20;

Here, HotWax Commerce does not serve as a Return Management System. HotWax Commerce downloads the return data once the return process is successfully completed in Shopify. This downloaded information is seamlessly sent to the ERP systems for financial and accounting purposes without the need for direct integration between ERP and Return Management Systems. This streamlined integration is made possible by HotWax Commerce's built-in capabilities for seamless data transfer between Shopify and ERP systems. \
\
**In-store returns**: For in-store returns of online orders, retailers using Shopify POS can create and manage returns efficiently through the POS system. Shopify POS is well-equipped to handle in-store return requests for online orders, simplifying the process. For retailers using non-Shopify POS systems, HotWax Commerce provides the necessary tools and functionality to create and manage returns effectively through HotWax Commerce.

### How Does HotWax Commerce Import Returns from Shopify for Online Returns?

The process of importing returns from Shopify to HotWax Commerce typically involves the following steps:

* Retailers can schedule the "Import Order Returns" job in HotWax Commerce to efficiently manage the import of order returns. HotWax Commerce initiates this process by sending an API request to Shopify, specifically targeting orders with a "Refund" status in Shopify, provided they were created after the last job run. In response, Shopify returns detailed return data in JSON format, facilitating the integration of return information. The frequency at which the "Import Order Returns" job is executed can be configured, but a recommended time interval for this job is 6 hours.

Shopify allows the download of up to 250 returns per API call. To ensure data accuracy and prevent potential issues arising from multiple orders within a single return, HotWax Commerce restricts each API call to download a maximum of 100 returns.\


<figure><img src=".gitbook/assets/Order Returns.png" alt=""><figcaption><p>Fig.1(i): Import Order Returns in HotWax Commerce</p></figcaption></figure>

Retailers can subscribe to Shopify's real-time return updates webhooks from HotWax Commerce's Job Manager app. However, Shopify warns that these webhooks might not consistently deliver real-time data. For a more reliable method, Shopify advises setting up reconciliation jobs to periodically retrieve return data directly from the platform.

<figure><img src=".gitbook/assets/Order return webhook.png" alt=""><figcaption><p>Fig. 1(ii): Shopify Webhook for return events</p></figcaption></figure>

* Once the return information is downloaded, HotWax Commerce processes the JSON files by reading them from the file system. Through the 'Process Bulk Imported Files' job, refund records are meticulously created within HotWax Commerce's database. This process ensures that return data is accurately integrated into the system. In cases where data discrepancies or issues may arise, error logs are generated, allowing for subsequent analysis and corrections to be made.

{% hint style="info" %}
The refund total may differ from the actual sales total of the order. This variance can be attributed to scenarios where customers have paid shipping and handling charges on the order, which are sometimes excluded from the refund amount.
{% endhint %}

* HotWax Commerce operates with a specific inventory management approach for restocking online returns. When inventory is returned on Shopify, it provides an option to enable the restock returned inventory flag. However, HotWax Commerce does not automatically increase the inventory count in its system even if the restocked return flag is enabled on Shopify. This is because HotWax Commerce lacks visibility into the specific location where the inventory is received. Instead, inventory is updated only when the updated inventory count is received from Warehouse Management Systems (WMS) or Enterprise Resource Planning (ERP) systems.

### How Can Retailers take In-store returns for Online Orders?

Shopify retailers can efficiently manage in-store returns for online orders in two scenarios:

**When Using Shopify POS:** In this case, Shopify POS is already linked with Shopify e-commerce, providing access to online order IDs within the POS system. When in-store returns are created in Shopify POS for online orders, these return details are stored in Shopify. HotWax Commerce utilizes the 'Import Order Return' job, which works seamlessly for both Shopify e-commerce and Shopify POS, to download refund information and transfer transaction details to the ERP.&#x20;

The key difference is that when in-store returns occur in Shopify POS, HotWax Commerce captures the facility ID where the returned inventory is received, alongside the refund information. Subsequently, HotWax Commerce manages the inventory restocking based on the facility ID.

**When Using Non-Shopify POS:** For retailers using non-Shopify POS systems, there is no inherent information about online orders, including online order IDs in the POS system. Consequently, creating returns against these online orders becomes a challenge. HotWax Commerce, as an Omnichannel Order Management system, retains records of online orders on Shopify. Therefore, in-store returns against online Shopify orders can be easily generated in HotWax Commerce.

### How can Retailers use HotWax Commerce for In-Store Returns when Using Non-Shopify POS?

Store associates can create In-store returns through HotWax Commerce by following the steps:

* Store associates can quickly find the relevant sales order by entering essential details such as the Shopify order ID, order name, or external ID on the Create Returns page.
* Store associates select the appropriate return facility where the returned items will be processed. They specify the reason for the return and the type of return for each item, such as refund, exchange, or store credit.
* After verifying the returned items and ensuring they meet return policy requirements, store associates create the return by entering their unique Employee ID.
* Once store associates create a return, the status of the ordered item is changed to “return requested” in HotWax Commerce. Subsequently, store managers have the authority to accept or reject these returns.
* Once returns are accepted, all the returned order details are seamlessly pushed to Shopify from HotWax Commerce through the ‘Refund’ Job. The 'Refund' job initiates an API request to Shopify to change the order status to “Returned” in real time. The recommended frequency for this job is 15 minutes to ensure prompt processing of customer refunds.

Store associates can configure whether to accept the return of the product with or without restocking it, depending on the specific requirements set by the retailer. If the decision is to restock in-store order items immediately upon receipt, the inventory changes are updated in HotWax Commerce instantly. These inventory updates are then synced with Shopify through the ['Upload recent inventory change’ job](https://docs.hotwax.co/integration-resources-1/v/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify).

### How Does HotWax Commerce Handle Appeasements?

Retailers often provide appeasements in various scenarios, such as:

* Appeasement for orders lost in shipment.
* Appeasement for a poor fulfilment experience.
* Appeasement due to customer dissatisfaction with the product

HotWax Commerce does not have a direct feature for retailers to create appeasements. Instead, Customer Service Representative (CSR) teams can create appeasements to address customer concerns in Shopify. When an appeasement is generated, HotWax Commerce downloads this information along with refund details. In appeasements, the order information contains a User ID and a transaction amount, but it does not contain any data on the order line item. HotWax Commerce syncs the appeasement information for reporting purposes.\
\
Retailers can offer appeasement through two methods:\
\
**A. Offering Another Product:** In this scenario, the original product remains marked as ‘completed’ in HotWax Commerce and ‘fulfilled’ in Shopify. However, a new order is generated with a 0 sales total in Shopify, which is downloaded in HotWax Commerce for fulfilment.\
\
**B. Offering Refunds Without Creating a Return:** Some retailers opt to provide a full or partial refund as compensation for post-sale satisfaction. In this case, the customer retains the product, and the order remains “fulfilled” in Shopify and ‘Completed’ in HotWax Commerce. When HotWax Commerce imports refunds, it imports the refunded amount to the customer and includes it in the order details for reporting to the ERP system.

### How Does HotWax Commerce Handle Exchanges?

Retailers have the flexibility to create exchanges both in-store and on Shopify. In HotWax Commerce, exchanges are recognized during the process of importing refunds from Shopify when the order information includes the user ID and order line item details but lacks the transaction amount.

Exchanges can fall into two main scenarios:

**Exchange of Same-Value Order Item:** In cases where the exchanged item has the same value as the original purchase, the initial order is marked as returned on Shopify. Simultaneously, another Order Item with a sales total of 0 is created in Shopify. This new order is downloaded in HotWax Commerce for fulfilment.

**Exchange with Different-Value Order Item:** When the exchanged item differs in value from the original purchase, a store associate or CSR team creates a gift card with a value matching the original item. Then, another order is generated, and the gift card is used as the preferred payment method. For items with a lower value, the customer can utilise the remaining balance for additional purchases. Conversely, for items with a higher value, customers can pay the difference using their preferred payment method.

\
\
\
