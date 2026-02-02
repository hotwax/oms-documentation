# Hold pre-order physical inventory

## Holding pre-order physical inventory while computing a product’s online inventory should be configurable. 

Merchants often don’t plan their inventory allocations between eCommerce and brick and mortar stores for upcoming products on pre-order before inventory lands at their warehouse. If all physical inventory is automatically processed by the OMS and pushed to eCommerce for selling, brick and mortar stores may not receive adequate inventory for their season. The holdPreorderPhysicalInventory setting lets merchants configure inventory computation in the OMS to not make physical inventory available online for products with orders in the pre-order queue. Merchants that only sell on eCommerce, or segregate brick and mortar inventory before submitting it to the OMS, can choose to instead have excess inventory be available online for sale right away.

Since physical inventory is automatically processed by the OMS and made available on eCommerce for selling, merchants with brick and mortar stores are not able to allot sufficient stock for walk-ins. The inability to configure inventory computation in the OMS, leads to products remaining on pre-order as long as there are orders in the pre-order queue, which limits pure play digital merchants from accepting regular orders on their surplus in-hand inventory. As the product remains on pre-order, all new orders are committed to that product’s upcoming PO and, upon release, also reserve the in-hand inventory, resulting in double reservations for a single eCommerce order.

Enabling the holdPreorderPhysicalInventory setting will help merchants allocate their physical inventory between their eCommerce and brick and mortar stores. After inventory allocations are made, OMS will push the excess physical inventory count on eCommerce for regular orders. Shopify merchants that do not manage inventory allocations for brick and mortar stores may disable the holdPreorderPhysicalInventory setting. The ability to configure inventory computation in the OMS allows merchants to choose if they want to accept orders for the excess in-hand inventory, even if the pre-order queue is not allocated.

Merchants using HotWax Commerce will receive the feature to hold pre-order physical inventory. Merchants can configure the settings and choose whether or not they want to consider pre-order queue items for inventory computation.

### Testimony

*Internal quote*: HotWax’s clients operating brick and mortar and also those running only eCommerce stores will now have the ability to decide how they want to compute their online ATP, depending on their requirements.

*Customer quote*: This SKU has 70+ units in stock but Continue selling is checked on -- this shouldn't be checked on unless inventory is 0? 

This order is tagged as hotwax_backorder and the HotWax note was added, but it's not backorder, it was in stock.

### FAQs

**Question 1: If the exclude pre-order queue items setting is disabled, how does HotWax treat excess in-hand inventory?**

Answer: When the product store setting "holdPreorderPhysicalInventory" is disabled, Online ATP is not explicitly set to 0 and the pre-order queue behaves as a regular committed order queue, deducting inventory from physical ATP while computing online ATP. If there’s any excess in-hand inventory then HotWax OMS automatically processes and pushes the excess ATP to eCommerce for regular orders.

### Internal FAQs

**Question 1: If a product store is connected with multiple Shopify configs how will we display the setting for each config?**

Answer: Since the setting is configurable at the product store level, the setting will be common for all the connected Shopify configs.
