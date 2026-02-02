# Configurable routing

## Merchants want to independently set up multiple routing rules for brokering orders based on dynamic business requirements.

Merchants use configurable routing to create order fulfillment strategies best suited for their business. User configurable routing rules allows merchants to optimize fulfillment cost, inventory, and workload based on arbitrary order and fulfillment location parameters such as order total, SKUs, product category, or facility type, operating hours, or fulfillment capacity.

Hard-coded routing order brokering rules with confined attributes makes it difficult and time consuming to implement changes dynamically. Distinct objectives and priorities based on retailer specific needs mean that out-of-the-box routing rules don't align with every environment, resulting in higher operational costs and inefficient last-mile delivery. Merchants also usually have unique fulfillment strategies for different seasons, often aligned with calendar seasonality, and inability to continuously update their brokering workflow could lead to reduced fulfillment throughput.

Configurable routing brokers a set of orders to fulfill from a set of facilities. A brokering algorithm can have multiple, sequential, rule-sets with unique attributes and conditions which orders and facilities will be evaluated against. For unfillable orders that did not meet routing criterias under any rule-set, merchants can explicitly state what actions must be taken. Deep customization of brokering workflow will allow merchants to implement real-time revisions to their routing parameters without any external support.

Merchants using HotWax Commerce can create their set of order routing rules, schedule flow of brokering sequence, customize routing logics and outcomes using the Brokerking Rules Configure App or may also use predefined rules set by HotWax Commerce. 

### Testimony

*Internal quote*: Configurable routing has significantly upgraded HotWax’s brokering algorithm. Clients may now choose how they want to broker and route different groups orders at the list of their facilities.

*Customer quote*: We need an incredibly robust order routing engine that can be fully managed by us. This is incredibly important for us and while most features of your tool are front-end accessible (and most changes can be done by your team quickly), this still doesn’t meet our internal requirement to be able to fully manage this process ourselves. We want to route by price, by location, rate shop and decide what's cheaper to do here. If certain units are X miles from somebody, we may decide to change that variable. 

This is the huge part that we are trying to do and having the ability to make changes when required is an important part of that.

### FAQs

**Question 1: How many times can we schedule a brokering run?** 

Answer: Merchants can schedule as many brokering runs as they need based on their business needs.

**Question 2: Is there a limit on the number of parameters that we can set?**

Answer: Orders can be filtered based on all the attributes and tags on orders. Filtered orders then pass rule-sets defined for finding optimized fulfillment facilities. 

**Question 3: How will HotWax route orders to a group of facilities in a specific region?**

Answer: Merchant can pass their special logics indicating that all orders received must be first brokered at list of facilities in a certain region. For example, if a merchant has set the preference to attempt brokering at facilities of the “East coast” group, then orders will be routed to facilities in the east coast region.

**Question 4: What could be the possible outcomes for unfillable orders?**

Answer: Unfillable orders can have none or partial allocation based on the brokering rule set. Merchants may then select an action for unfillable orders as per their preferences, all unfillable orders can pass through the next rule set, an auto-cancel date or a tag can be applied, or all these orders can also be moved to a specified queue.

**Question 5: Can we automatically disable order splitting if order items are dependable?**

Answer: Yes, order splitting can be performed based on type of order items. If certain related products must be shipped together then merchants can specifically disable splitting on orders with those products by tagging that ship group with relevant tags. The brokering engine will use those tags to toggle order splitting.

**Question 6: What actions can we define for orders when only partial inventory is available?**

Answer: If only partial inventory is available, merchants can choose if they want to allocate inventory to partially available order items or consider it as an unfillable order, indicating an unsuccessful brokering attempt and then accordingly define actions for them.