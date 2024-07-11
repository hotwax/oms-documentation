
# View Order Details

The comprehensive `Order View Page` within HotWax Commerce enhances user efficiency and facilitates streamlined order management. This page consolidates all essential information related to an order, providing users with a holistic view that encompasses key details such as billing and shipping information, order identification, payment terms, preferences, timelines, references, communications, and a detailed list of items. To access the `order view page`, simply click on the order ID on the `find sales order` page to view comprehensive details about the order.

HotWax Commerce offers the following features on the `Order View Page`:

### Overview Section

The overview section contains essential information related to billing and order processing. Here's a summary of each element:

1. **Bill To (To-Customer):** Indicates the customer who will be billed for the order.

2. **Bill From (Company, Channel, Product Store):** Specifies the origin details, including the company, sales channel, and product store associated with the transaction.

3. **Status:** Reflects the current status of the order, providing insights into its progress or completion.

4. **Order Date:** Records the date when the order was placed or initiated.

5. **External ID:** Identifier for external system.

6. **Subtotal:** Displays the total cost of items or services before additional adjustments.

7. **Total:** The overall cost of the order, which can be manually adjusted for discounts, promotions, replacements, and taxes.

This information provides a comprehensive overview of an order, facilitating effective management and customization of billing details.

### Order Identifications

The `Order Identifications` section displays key information related to Shopify orders. The four main components of this section are:

1. **Shopify Order ID:**
   - This is a unique identifier assigned by Shopify to each order. It serves as a reference point for tracking and managing orders within the Shopify platform. Additionally, users can conveniently view the order details directly on Shopify by clicking on the provided link associated with the Shopify order ID.

2. **Shopify Order Name:**
   - The order name in Shopify typically refers to a customizable name or title assigned to an order on Shopify for further order identification.

3. **Shopify Order Number:**
   - Shopify assigns a distinct numerical identifier to each order. It acts as another unique reference for orders, often used in communication and documentation.

4. **Order Attributes:**
   - Shopify retailers can capture additional crucial order details through metafields. Once customer IDs are verified, they are stored as order metafields in Shopify. When HotWax Commerce enters a retailer’s Shopify ecosystem, it becomes the source of truth for all order-related information. HotWax Commerce downloads order details along with customers’ IDs as order attributes and shares this information with the retailer's accounting system. All downloaded order attributes are visible under this section.
   - Users can also add Order Attributes by clicking the `Add Order Attribute +` button which will open up a new form. Add the attribute name, value and description and click on the Add button to save the order attribute. This function is vital if there are some issue in importing order attributes such as metafield being added after the order has been imported in HotWax Commerce.

### Payment Section

In the Payments Section, users can easily view the payment method and total payment value made by customers on the e-commerce platform. This data is then transmitted to the ERP system. Particularly for cash on delivery orders, this information is vital as store associates need to collect payment during fulfillment.

### Order Timeline

The timeline illustrates the progression of events from the initial order decision to the completion of the transaction, including the involvement of a broker as an intermediary. Here's a brief description of each term:

1. **Order Date:**
   - The date and time when the customer made a purchase.

2. **Entry Date:**
   - The date and time when the order information was officially recorded into HotWax Commerce.

3. **First Brokered:**
   - The first brokered refers to the initial timestamp when an item is allocated to a specific facility. This timestamp remains unchanged even if the item is subsequently rejected by the facility and redirected elsewhere. It serves as a fixed reference point for tracking the item's movement history within the system.

4. **Completed Date:**
   - The date and time when the order was fulfilled, and the goods or services were delivered or made available to the buyer.

**For Example:** 

| Event          | Date and Time       |
|----------------|---------------------|
| Order Date     | 03-08-2024 06:07 PM |
| Entry Date     | 03-08-2024 06:13 PM |
| First Brokered | 03-09-2024 01:00 AM |
| Completed Date | 03-11-2024 03:16 PM |

### References

In the HotWax Commerce platform, the `Reference Section` offers a centralized hub for users to access critical information related to picklist status, packing details, shipment information, and returns details. This feature provides quick and easy access to essential data. Users can click on the relevant item such as return ID, picklist ID, etc. to access the order details. Users can see the following details in this section:

- Click on the `Picklist Status` link to view the current status of picklists associated with orders.
- Click on the `Packing Details` link to view information regarding the packing process for orders. This includes details such as items packed, and any special instructions.
- Click on the `Shipment Information` link to access data related to order shipments. This may include tracking numbers, carrier information, and expected delivery dates.
- Click on the `Returns Details` section to review information about product returns initiated by customers for this order and the status of the return.

### Communications

The `Communications` feature in the HotWax Commerce platform acts as a central hub for users to interact with both the internal team and customers, providing updates on orders. With the capability to add notes and send personalized emails directly from this interface, users can efficiently communicate important updates or notifications to internal teams or customers. Whether it's informing customers about order changes, cancellations, or backorder notifications, or adding notes for the fulfillment team, this feature simplifies communication processes, minimizing misunderstandings and improving overall order management efficiency.

Click on the communication and select either email or notes to start the communication.
