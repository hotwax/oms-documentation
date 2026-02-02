# Check order items for pre-selected fulfillment facilities

## Abstracting the logic to identify when the OMS acknowledges item level fulfillment facilities enables retailers to dynamically implement changes to their business operations.

Retailers can easily configure if they want to honor line item properties for soft allocated orders with pre-selected fulfillment locations as well as for BOPIS orders with customer selected pick-up locations. Retailers will also be able to label the line item properties based on their preferences without worrying about syntax compatibility with the OMS.

Inflexibility in configuring when to honor line items based on different shipping methods presents several operational challenges for retailers. Soft allocated and pick-up items in a shopping cart have the fulfillment locations pre-selected for them. Hardcoded conditions in the OMS priorities line item level selected fulfillment locations based on the Shopify shipping method selected by the customer. Tightly coupled logics make it difficult for retailers to configure which carrier shipping method to use pre-selected item fulfillment locations with. Updating line items at checkout depending on the customer's selected shipping method requires developer intervention and isn’t configurable by business users. Not being able to use custom labels for line item properties adds further complexity when integrating with other third party systems, leading to a continued dependency on the support team, which not only delays the implementation time but also increases expenses and maintenance over time.

Retailers can effectively manage their operational processes for soft allocated and pick-up orders with predefined fulfillment locations by leveraging Shopify flows. In cases where the line items and the selected shipping method align, a specific tag will be assigned to the order and the OMS will only acknowledge the line items for these orders. Abstracting the logic provides a higher level of flexibility for when to prioritize soft-allocations, enabling retailers to configure their business operations and make amendments as needed, without relying on the HotWax Commerce support team.

HotWax Commerce will create sample flows in Shopify to add condition-based tags on the orders which retailers can further configure as their needs evolve. Additionally, retailers can modify their product store settings to update their line item properties.

### Testimony

*Internal quote*

*Customer quote*
