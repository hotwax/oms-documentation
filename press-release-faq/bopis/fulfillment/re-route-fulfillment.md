# Re-route fulfillment

## BOPIS customers should have alternative options in case the store where they requested pickup is unable to fulfill their order.

Re-route fulfillment will allow retailer to offer their customers alternate fulfillment options when they are unable to fulfill a pickup order from the originally selected location by the customer. After a fulfillment team member rejects an item from their BOPIS dashboard, the customer will be presented with option to pickup elsewhere or get the item shipped to them. This is far more convenient for customers that want the product and don't simply want to cancel their order if a product cannot be picked up as they originally intended. Retailers that offer this to their customers will save sales that would otherwise be lost due to inventory discrepancy.

Most BOPIS solutions do not offer alternate fulfillment options to customers when an item is rejected from fulfillment, which means that if the pickup inventory is sold to a walk-in customer, damaged, or simply missing, the store has to cancel the pickup item and call the customer to work out alternate fulfillment options. Canceling and placing a new order is a burdensome, clumsy process because it cancels otherwise secured revenue and then also requires that the customer agree to purchase the item again (often times in the form of a Draft Order in Shopify).

Once an order item is rejected by a store, a mail will be triggered from the email platform of choice to the ordering customer. The email will include a description of their order being rejected along with a link to view alternate fulfillment options for their order. The re-routing interface will give customers an option to see details of their order items and options to pickup at another store or get the item shipped to an address of their choice. If the customer chooses to get the item shipped, it will be sent to the brokering queue and routed to a fulfillment location the next time brokering runs.

Retailers that want to start using this function will need to connect with HotWax support to set up a new template in their email platform of choice. HotWax will add the dynamic data variables in that template and the retailer can choose to design the template themselves or have HotWax do that for them as well. If a retailer doesn’t use brokering the order will be sent to the default fulfillment location set up for that product store.

### Testimony

*Internal quote*: The re-route fulfillment feature allows HotWax's clients to save the sale and fulfill orders in the event of order rejections from a particular store.

*Customer quote*: This feature will definitely be a great addition. Looking forward to it.

To start using this feature, retailers should start using the reject order function and connect with HotWax Support to setup their mail template to customers.

### FAQs

**Question 1: Does the customer have the option to cancel their order?**

Answer: Yes the customer can choose to cancel their order from the re-route interface. That cancelation will be pushed to Shopify if cancelation sync is enabled.

**Question 2: Is the customer charged for shipping?**

Answer: The customer will not be charged for shipping since the method is being applied in the OMS and HotWax Commerce doesn't handle billing. If retailers want to charge customers for shipping they can setup a workflow in HotWax to move the order to "Created" status and then request payment from the customer in Shopify.

**Question 3: Can the customer view their order in Shopify from this email?**

Answer: I don't expect that we will be able to provide a direct link to the users order in Shopify. Though it would be helpful for them if they want to cancel their order.

### Internal FAQs

**Question 1: How do we authenticate the link to let the user open and edit their order details?**

Answer: We will need to find a way to store a key or token in the URL of the order similar to how Shopify generates an order view link.

**Question 2: What techonlogy are we going to build the interface in?**

Answer: The re-route fulfillment app will be built in Ionic and hosted publicly. When users arrive via their link it will load up their order details.