# Order Grouping during fulfillment

## The Fulfillment App will automatically group orders sharing the same customer ID and shipping address to optimize fulfillment operations.

Order Grouping lets merchants club orders with the same customer ID and shipping address in a single shipment. Shipping all order items in one package rather than shipping each order separately helps merchants bring down the logistics costs and improve their fulfillment operations.

Since orders are received at different time intervals, the fulfillment team ends up preparing a new shipment for each order. Sending multiple shipments not only adds to merchant’s shipping expenses but also increases the efforts of fulfillment teams. 

If a customer has multiple orders brokered to the same facility, being shipped to the same address, the Fulfillment App will smartly group those order items into the same shipment. Collectively grouping orders lets merchants also reduce the number of packages for the customers.
 
Order Grouping feature will be automatically supported by HotWax Commerce Fulfillment App.

### Testimony
 
*Internal quote*: Merging multiple orders of a customer with the same delivery address will help HotWax’s clients save costs. Reducing the number of shipments will also help foster sustainability.
 
*Customer quote*: Our Daily Bread would like to merge orders shipping to the same destination on the same day. The goal is to reduce wasted packaging and give a better experience to customers.
 
### FAQs

**Question 1: Will the app club orders if a customer has placed two different orders, one with a pre-order item and other with a regular item, but they are brokered at the same time?**
 
Answer: Yes, if multiple orders are released and brokered to the same fulfillment center, the Fulfillment App will group those orders in a single package. Similarly, pre-order items and regular items can also be clubbed together if they are released at the same time.
 
**Question 2: If a customer has placed multiple orders in close intervals, but not all the items are available at the same facility. How will orders be grouped?**
 
Answer: The Fulfillment App will only club those orders that are brokered to a same facility.

### Internal FAQs

**Question 1: If a customer is placing multiple orders in short intervals, is there a way to make sure that they get brokered to the same facility?**

Answer: HotWax's brokering logic currently does not specifically support brokering orders with a common customer ID to the same facility. However, the configuration can be accommodated in the brokering algorithm.

**Question 2: Is there a set timeframe to ensure multiple orders received in that duration can be grouped together?**

Answer: If a customer’s multiple orders are picked up in the same brokering cycle and also gets allocated to the same facility then those orders will be sent in a single package.
