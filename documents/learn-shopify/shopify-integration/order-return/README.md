# Order Returns

Omnichannel Shopify retailers offer their customers two different options for returning online products: Mail Returns and In-Store Returns. Let's see how HotWax Commerce helps in handling these two types of returns:

**Mail Returns:** Mail returns could be initiated by customers, or by the Customer Service Representative (CSR) team in response to customer requests, which can be received through email or phone calls. Returns are created in Shopify and retailers often use third-party return management apps like Happy Returns, Loop Returns, or Returnly to facilitate the management of returns.

Here, HotWax Commerce does not serve as a Return Management System (RMS). HotWax Commerce downloads the return data once the return process is successfully completed in Shopify. This downloaded information is automatically sent to the ERP systems like NetSuite for financial and accounting purposes without the need for direct integration between ERP and RMS. This streamlined integration is made possible by HotWax Commerce's built-in capabilities for seamless data transfer between Shopify and ERP systems.

**In-store returns**: For in-store returns of online orders, retailers using Shopify POS can create and manage returns directly through the POS system. Shopify POS is well-equipped to handle in-store return requests for online orders, simplifying the process. For retailers using non-Shopify POS systems, HotWax Commerce provides the required functionality to create and manage returns effectively.

# Appeasements

Retailers often provide appeasements in various scenarios, such as:

* Orders lost in shipment.
* Poor fulfillment experience.
* Customer dissatisfaction with the product

When an appeasement is generated, HotWax Commerce downloads this information along with refund details. In appeasements, the order information contains the user User ID of the CSR member who issued it and a transaction amount, but it does not contain any returned line items.

Retailers can offer appeasement through two methods:

**A. Offering Refunds Without Creating a Return:** Some retailers opt to provide a full or partial refund as compensation for post-sale satisfaction. In this case, the customer retains the product, and the order remains `Fulfilled` in Shopify and `Completed` in HotWax Commerce. When HotWax Commerce imports refunds, it imports the refunded amount to the customer and includes it in the order details for reporting to ERP systems.

**B. Offering Another Product:** In this scenario, the original product is not returned by the customer. However, a new replacement order is generated with a 0 value order total in Shopify, which is downloaded in HotWax Commerce for fulfillment.
