# Bulk Push Pre-Order catalog to Shopify 

## Merchants want to be able to sync their existing pre-order catalog when launching a new Shopify store.

Merchants can bulk push their entire active pre-order product catalog to Shopify, regardless of when it was initially added. The ability to automatically push all pre-order items ensures that no pre-order listings are missing on a new Shopify store.

Configured pre-order jobs check the pre-order category every 15 minutes to identify recently added pre-order items. When connecting a new Shopify store, the pre-order job only updates the changes from the last 15 minutes in the pre-order category, however, items added for pre-orders more than 15 minutes prior to the launch of new Shopify eCommerce will not be synced. Due to the inability to sync the pre-order catalog, pre-order items will be displayed as out of stock items on eCommerce, resulting in lost sales. To solve the problem, merchants had to contact the HotWax Commerce support team which increased their dependency and resulted in delayed operations.

The job to push their entire pre-order catalog to Shopify will allow merchants to list all the pre-order items on a new site without any external support. When running a new Shopify eCommerce, merchants can ensure synchronization of the pre-order category in HotWax Commerce and listing-delisting of pre-orders on Shopify.

Merchants using HotWax Commerce can hard-sync their entire pre-order catalog by scheduling the job bulk push pre-order catalog to Shopify.

### Testimony

*Internal quote*: Syncing an existing pre-order catalog from HotWax to a new Shopify store has never been this easy.

*Customer quote*: We have launched our new Europe store, is it possible to sync our existing pre-order catalog for the new store? 

### FAQs

**Question 1: Can we bulk push the pre-order catalog for multiple Shopify stores at once?**

Answer: Users must select Shopify configs and schedule the bulk push pre-order catalog job for all the stores at once.

**Question 2: How much time would it take to sync the existing pre-order catalog on a new Shopify store?**

Answer: On an average it takes two minutes to process a catalog file, however it may take up to five minutes if the pre-order catalog size is larger than usual. Shopify lets HotWax Commerce know after it has finished processing a GraphQL file.

### Internal FAQs

**Question 1: Which service will be used to bulk push the entire pre-order catalog?**

Answer: The services uploadAddedPreorderItemsToShopify and addPreorderTagOnProducts will sync the existing pre-order catalog on Shopify. Additionally, the parameter “include all” must be marked “true” in order to bulk push the entire pre-order catalog from HotWax to Shopify.

**Question 2: Is the job only helpful when launching a new Shopify store or there could be more use cases?**

Answer: Users may also schedule the bulk push pre-order catalog job to handle cases of discrepancies.

