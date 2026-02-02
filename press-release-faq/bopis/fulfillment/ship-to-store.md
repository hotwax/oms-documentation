# Ship to store
## Customers can place BOPIS orders that will be shipped to their selected pickup location even if inventory is not available for same-day pickup.
When a product is not available for same day pickup, customers can still place a BOPIS order and pick it up later when the inventory becomes available at the pickup location. After importing these orders, OMS will route them to a fulfillment location where inventory is available and ship them to the pickup location selected by the customer. Upon receiving the inventory at the pickup location, customers will get notified to pick up their orders.

Customers who live in apartment buildings often face delivery restrictions, forcing them to look for store pickup options. If a product is not available for same-day pickup due to stock outs, customers are forced to repeatedly check store inventory for pickup, encouraging cart abandonment and lost sales.

Allowing customers to place BOPIS orders without inventory constraint eliminates the frustration of constantly checking for same-day pickup availability. The OMS will process these orders as regular shipping orders and intelligently route the order to a fulfillment location where inventory is available and ship them to the pickup location selected by the customer. Once the order arrives at the store, store associates will change the status of orders in OMS to “scheduled” and notify customers to pick up their orders.

Retailers using HotWax Commerce can change their frontend experience for products which are unavailable for same day pick-up from 'Out of Stock' to 'Ship to store’ or ‘Pick up in two days’. In the backend, the checkInventory API will fetch all available BOPIS locations and for locations where product inventory is out of stock the PDP will display a pickup later option.


### FAQs

**Question 1: What will the product detail page (PDP) display when the customer searches for all available BOPIS locations and some pickup locations have inventory while others do not?**

Answer: Pickup locations with available inventory will display the "Pickup Today" option, while pickup locations without inventory will show "Ship to Store'' or "Pickup in Two Days" option. Regardless of the inventory availability, all pickup locations will be sorted alphabetically. 

**Question 2: Will the inventory count of a pickup location increase when a product is shipped there from another facility for pickup?**

Answer: No, the inventory count will not increase at the pickup location as it will not recieve any new inventory but a ready shipment which will go through pick-pack-ship status.

### Internal FAQs

**Question 1: How will HotWax OMS differentiate these orders from regular shipping orders and same day pickup orders?**

Answer: HotWax OMS will differentiate these orders by assigning a unique line item property "ship_to_store" that differentiates them from other order items.

**Question 2: What will be the status progression of these orders in HotWax?**

Answer: Orders will initially have a "created" status, which will change to "approved" once payment is received. After that, the order will be marked as "shipped" once it is shipped to the designated pickup location from the facility with inventory. When the pickup location receives the order, it will be marked as "scheduled," and the customer will be notified to collect their order. Finally, once the order has been handed over to the customer, the status will change to "delivered."
