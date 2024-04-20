# Concepts

I am trying to explain the core concepts of the product facility configuration management app that i am working on for our omnichannel oms product. This wills serve as the reader's in for the user manual of the app. The app is called "Available to Promisse". Here is the introductoin of the four concepts. Review this and give suggestions you have for reorganizing it.

There are four key concepts of inventory available to promise managment that are important to understand when dealing with omnichannel inventory.

The first two concepts are threshold and safety stock. Saftey stock in the OMS blocks a fixed specified amount of available inventory from being sold on an inventory channel. When safety stock is applied to a product at a global or "network" level instead of a specific facility, it's known as a `Threshold`. To apply safety stock at a global level, configure that a product's saftey stock at the "Configuration" type facility of an inventory facility group. If there are multiple configuration facilities added to an inventory facility group, then their safety stocks will be compounded.

The next two concepts are BOPIS, buy online pickup in store, and Shipping inventory. When configuring omnichannel rules for your inventory, not all products will always be available for BOPIS and Shipping, sometimes only offering one exclusivley or neither. To allow retailers to toggle inventory for products at each facility for both fulfillment options independently, each product has BOPIS and Shipping toggles at every facility it is stocked at. Similar to safety stock, global rules can be defined for products using the configuration facility. For example, if a product should not be allowed for pickup from any location, the it can be toggled off for BOPIS at the configuration facility of that inventory facility group.

The Available to Promise app helps create common rules to manage each of these configurations for products and then also explain inventory availability for any product based on the rules configured for it.