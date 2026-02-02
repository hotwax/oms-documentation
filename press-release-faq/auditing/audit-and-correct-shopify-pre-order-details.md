# Audit and correct Shopify pre-order details from HotWax

## Merchants want the ability to monitor and correct Shopify’s pre-order items details for all Shopify stores from HotWax Commerce.

Merchants can audit the pre-order status across all Shopify stores as well as take corrective actions directly in HotWax. Readily verifying information ensures expedited rectification in case any inaccurate pre-order details are identified.

Verifying pre-order items status is essential as merchants may lose potential sales if an item expected to be available on pre-order is displayed as out of stock on eCommerce. Monitoring pre-order items status on Shopify requires users to copy the pre-order product IDs, search in Shopify and then check attributes like inventory policy, pre-order tag and metafield for each pre-order item. Merchants operating multiple Shopify stores need to repeat the process across all Shopify stores for each pre-order item, which takes an extended time.

Auditing and correcting Shopify pre-order details from HotWax will allow users to quickly pin down the pre-order item’s status without having to navigate to Shopify each time. Validating Shopify pre-order item details corresponding to HotWax pre-order for all stores will help make sure that systems are running in sync. Centralized view of all details will also ensure systematic management of pre-order items in HotWax.

Merchants can audit and correct pre-order items details right from the view product page in HotWax. An API call will be initiated to load the pre-order status of an item across all the Shopify stores.

### Testimony

*Internal quote*: The feature allows for quickly monitoring of pre-order items’ statuses and also assists in keeping a vigilant check for clients.

*Customer quote*: We uploaded pre-order inventory for all our Naioca SKUs but only some are appearing as available for preorder on the front end. Checking in the back end they are all set up the same way.

On the US site, only the NAIOCA Skate Vintage White Suede Off-White Canvas Grey Logo Sneaker Women have continue selling ticked correctly, and that has the wrong date populated in the metafield.

On the INT site continue selling is correctly checked but date is wrong across the board.
Looking in HotWax I don't see any PO uploaded with a delivery date of 11/4, there is only the Naioca PO with the 11/3 delivery date in the system.

### FAQs

**Question 1: When pre-order details are corrected in HotWax, how will changes be synced in Shopify?**

Answer: Corrections in pre-order items details will be synced in Shopify via Rest API. 

**Question 2: In case of multiple Shopify stores, how will we audit pre-order items statuses?**

Answer: View product page will display pre-order item’s status for each Shopify config so the status can be validated for all the Shopify stores at once.

### Internal FAQs

**Question 1: Will HotWax identify the exact cause of pre-order item’s status variations?**

Answer: The product view page will display the most recent records of HotWax’s product category decision reason table. These details help users identify when and why a pre-order item has been added or removed from the pre–order category. GraphQL logs for the selected variant will also be shown for each Shopify store selling the product to help easily check recent relevant API calls from HotWax to list or delist the product for pre-order.


