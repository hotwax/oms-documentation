---
description: >-
  Learn how retailers can process in-store returns for online orders seamlessly
  with HotWax Commerce.
---

# In-Store Returns

### How Can Retailers take In-store returns for Online Orders?

Shopify retailers can efficiently manage in-store returns for online orders in two scenarios:

**When Using Shopify POS:** In this case, Shopify POS is already linked with Shopify e-commerce, providing access to online order IDs within the POS system. When in-store returns are created in Shopify POS for online orders, these return details are stored in Shopify. HotWax Commerce utilizes the 'Import Order Return' job, which works seamlessly for both Shopify e-commerce and Shopify POS, to download refund information and transfer transaction details to the ERP.

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
