# Pre-order inventory on Shopify

## Merchants want to make sure they don't oversell when taking pre-orders because of gaps in scheduled jobs.

Calculating pre-orderable inventory directly in Shopify as pre-orders are captured on eCommerce helps retailers ensure that they oversell as little as possible. Customers that order multiple quantities of the same SKU can also be stopped from over ordering right from the product detail page, which often helps with B2B sellers.

HotWax Commerce maintains a pre-order catalog to ascertain qualified pre-orderable items. The algorithm ensures items that can be pre-ordered are added and items that should be removed are delisted every 15 minutes. HotWax Commerce doesn’t push actual on-order ATP to Shopify, instead it just syncs valid and invalid pre-order items using independent operations. While a merchant waits for exhausted pre-order items to be delisted, they may be overselling a sold out pre-order item because of the time lag in publishing the latest pre-order catalog to Shopify. Syncing the actual pre-orderable quantity is especially crucial in cases when order velocity is high. Overselling also dramatically increases workload on CSRs that have to find a way to appease customers when they cancel pre-orders.

HotWax Commerce will push actual on-order inventory levels to Shopify for every pre-order item allowing Shopify to stop accepting pre-orders when the pre-order inventory will exhaust. The functionality will make sure that customers may only order the exact amount that is available and not more.

Merchants already upload purchase orders to HotWax Commerce, so they will automatically receive this feature to push pre-orderable quantity from purchase orders and to Shopify. 

### Testimony

*Internal quote*: Pushing the pre-order inventory on Shopify will ensure HotWax’s clients don’t undersell or oversell their upcoming inventory.

*Customer quote*: How do we ensure that we don’t oversell our on-order inventory if HotWax lists and de-lists pre-order products at intervals?

To start using the feature, merchants can get in touch with an account manager at HotWax Commerce.

### FAQs

**Question 1: How can we use this feature if we do not manage POs?**

Answer:  No, pre-order quantity cannot be pushed to Shopify in absence of purchase orders. However, merchants may create No Buy POs or dummy POs in order to use this feature.

**Question 2: What happens to the ATP when a PO is canceled?**

Answer: When a PO is canceled, PO ATP would become 0 and the product will be automatically removed from the pre-order.

### Internal FAQs

**Question 1: Which APIs will push the on-order inventory to Shopify?**

Answer: The service syncShopifyVariantMetafields will push the inventory count to Shopify.

**Question 2:  Would we populate meta-fields on pre-order items to implement this feature?**

Answer: Yes, meta-fields will be populated via API calls to push inventory levels in Shopify.

**Question 3: If we store the ATP in a metafield, how do we keep track of sales and update the metafields?**

Answer: The ATP will be reduced in Shopify as and when new pre-orders will be received.

