# Unify pre-order backorder listing-delisting

## Listing-delisting operations for pre-order and backorder products should be synchronized.

HotWax now lists and delists pre-order and backorder products in a single API call, ensuring that a product is removed only if it is not on pre-order or backorder. Unified listing-delisting operations helps in correctly amending products transitioning from pre-order to backorder on Shopify.

When a product exits pre-order and enters the backorder category, HotWax may first list it for backorder on Shopify before delisting it from pre-order. Because of the pre-order delisting operation the inventory policy for the product gets disabled even though the product should be available for backorder. When a product is incorrectly delisted on Shopify, backorder products appear “out of stock” on the eCommerce PDP, which costs retailers potential sales.

Running listing-delisting from a unified API call will ensure the products are added and removed from pre-order or backorder accurately when transitioning from one category to the other. Synchronized operations also help in displaying up to date pre-order and backorder products on the eCommerce PDP.

To unify pre-order and backorder listing-delisting, retailers will need to disable their existing pre-order and backorder jobs and switch to the new jobs from the Job Manager App.

### Testimony

*Internal quote*: Running independent jobs for pre-order and backorder listing-delisting results in incorrectly modifying inventory policy for products in Shopify. A unified API call will help ensure that pre-order and backorder products on Shopify are updated correctly.

### FAQs

**Question 1: How will HotWax handle a scenario where a retailer unknowingly marks a PO’s “isNewStyle” field as “Y” even though the product is supposed to be on backorder?**

Answer: If a retailer accidentally marks a “Y” in the PO's "isNewStyle" field, the product is considered as a pre-order. Retailers can take the corrective action by marking “N” in the "isNewStyle" field. Since the product will be now eligible for backorder, HotWax will de-list the pre-order product on Shopify and will list it on backorder, ensuring accurate transitioning from pre-order to backorder.

### Internal FAQs

**Question 1: What data will be shown in the GraphQL logs for the new pre-order backorder listing-delisting job?** 

Answer:  Previously, there were separate jobs for pre-order and backorder listing-delisting, so multiple GraphQL files were created. Since HotWax now lists and delists pre-orders and backorders in a single API call, only one GraphQL file is generated. The data will include all the mutations pushed by HotWax pertaining to pre-orders and backorders, such as promise date, tag, last updated time, type of pre-order or backorder, and status.

