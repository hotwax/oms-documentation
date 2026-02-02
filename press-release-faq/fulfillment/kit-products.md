# Kit products

## The OMS should support kit products for retailers who sell bundle products on Shopify.

Retailers that use the Bundles App, list kit products on their Shopify eCommerce as bundle offerings. Kit products do not have their own physical inventory and instead represent a collection of multiple sellable products. When an order with a kit product is imported into the OMS, its components are added into the order and sent to a separate ship group, ensuring items that make up a kit product are delivered together. Since fulfillment teams will pick, pack, and ship the kit product’s components, each component will be marked as shipped in the OMS, updating status for the kit product to complete in HotWax and fulfilled in Shopify.

Since a kit product only represents its components and has no physical inventory, the OMS will not broker orders with kit products until its components that actually have inventory are reflected in the order. Not fulfilling orders as per the schedule results in a poor customer experience, increased customer complaints and adds to CSRs workload.

HotWax can automatically identify orders imported with a kit product and then add its components into the order. The ability to explicitly include components in an order that make a kit product will ensure kit order items get brokered and fulfilled. Syncing statuses for kit order items in the OMS and Shopify will make sure that customers have updated shipping information about their orders.

The Bundle’s App creates kit products and populates metafields for the kit components in Shopify. When an order with a kit product is imported in the OMS, HotWax maps the kit product by reading its metafields and then adds its components into the order.

### Testimony

*Internal quote*: Since HotWax now supports kit products, clients may now present bundle offerings for their customers and sync their kit products in HotWax. 

*Customer quote*: A bundle product has multiple variant components. The goal is to create a set of products that have been grouped together in a logical way by the seller to allow customers to purchase them together. 

### FAQs

**Question 1: What would a shopping cart with a kit product look like?**

Answer: Customers adding kit products to their shopping cart will see it as a single item in their shopping cart.

### Internal FAQs

**Question 1: What will happen when a kit product’s component is not in stock?**

Answer:  The kit product’s inventory is computed on the basis lowest denominations in Shopify. Since all the components that make a kit product must be available in-stock, if a component is not in stock then the complete bundle offering will be considered as out of stock.

