# In-store Sale Process:

Upon initiating an in-store sale, PredictSpring generates an order, which is subsequently retrieved by Mule via a webhook. Mule then forwards the order details in JSON format to the HotWax Nifi endpoint.

Within the Nifi environment, the order JSON undergoes storage and transformation to align with the HotWax createSalesOrder API format. Subsequently, the processed order is transmitted to HotWax via createSalesOrder API.

The order in HotWax attains a completed status, signifying that the customer has already picked up the item.


# SendSale Orders Process:

Similarly, for SendSale orders, PredictSpring triggers the creation of an order, which is subsequently retrieved by Mule via a webhook. Mule then transmits the order details, formatted as JSON, to the HotWax Nifi endpoint.

Within the Nifi environment, the order JSON undergoes storage and transformation to align with the HotWax createSalesOrder API format. Subsequently, the processed order is transmitted to HotWax via createSalesOrder API.

In the HotWax system, the order is established with an approved status, indicating that the payment has been received from the customer. The item(s) are subsequently shipped from the facility, with inventory in hand.

# Inventory Update:

Inventory adjustments are exclusive to in-store sales within the HotWax system. As customers pick up items, the corresponding inventory is reduced both in PredictSpring and HotWax.

Upon receipt of an in-store sale order, Nifi generates a store inventory variance feed for HotWax. This feed reflects the changes in inventory, ensuring synchronization between PredictSpring and HotWax as items are picked and their quantities are updated.

# Order Lookup:

As HotWax stores both e-commerce and in-store orders (including in-store sales and sendsales), it serves as the order master for PredictSpring. This allows PredictSpring to efficiently locate the order when a customer visits the store to return an item or order.

Store Manager will lookup an order in HotWax via getOrder API using - Shopify order id, POS order id

In response PredictSpring receives comprehensive order details:
* Order status, total amount, subtotal amount (excluding tax, shipping and discount)
* A detailed product list comprising item-specific information such as size, color, individual and subtotal costs, discounts,  taxes, and fulfillment type, indicating whether the order was fulfilled in-store or through an alternate facility. 
* Additionally, the order source is provided, indicating whether it originated from the web or from an in-store transaction.

The Store Manager will initiate the return process within PredictSpring for the item(s) listed in the productList.


# Create Return:

When initiating an in-store return, PredictSpring updates the order JSON by adding return items to the returnProductList. This updated JSON is then accessed by Mule through a webhook. 

Subsequently, Mule forwards the order and returns details in JSON format to the HotWax Nifi endpoint.

Within the Nifi environment, the order JSON undergoes storage and transformation to match the format required by the HotWax createReturn API. After processing, the return is sent to HotWax using the createReturn API.

For in-store order returns, the status is automatically set to completed to prevent the system from attempting to push the return to Shopify as the order does not exist in Shopify.

For e-commerce order returns, the status is set to received, and the bulkRefundReceivedReturn function pushes the return refund details to Shopify. Once the refund ID is received from Shopify, the return status is updated to completed.

