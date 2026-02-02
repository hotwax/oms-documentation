# Soft allocation brokering 

## Before placing an order on eCommerce, customers want to know how quickly they can receive it.

Soft allocation brokering allows customers to check in real time if a selected list of items, like their shopping cart, is eligible for same-day delivery. The feature determines if a product can be delivered within one day according to the customer’s zip code. A clear distinction stating whether items are available for same-day delivery or not, lets customers make a faster purchasing decision.

Merchants may unknowingly accept orders that do not meet the eligibility criteria for same-day delivery and therefore face higher order rejection rates from their shipping providers. As a result, false commitments, shipping delays or order cancellations make customers feel less confident about using same-day shipping. Merchants’ eCommerce usually reflect a static estimated ship date on the PDP irrespective of a customer’s location. Long shipping times, not personalized to customers’ location results in abandoned shopping carts.

When customers build a list on eCommerce, like a wishlist or shopping cart, soft allocation submits their list to HotWax Commerce for evaluation. Soft allocation will evaluate the list of submitted items and the proposed destination zip code against the criteria predefined by the retailers to validate same-day shipping eligibility in compliance with shipping carriers like Shipt, Shipssi. Evaluation will be done by proximity limits set by the shipping carrier in addition to configurable parameters like store operating hours, lead time and order splitting. This gating mechanism will stop disqualified orders from being sent to shipping providers as well as will convey customers actionable information.

HotWax Commerce will integrate with a merchant’s existing shipping carriers to align with their same-day delivery policy. Merchants that haven’t already done so, will also have to input latitude and longitude information for each of their participating fulfillment locations for soft allocation brokering to calculate accurate distance. Developer intervention will be needed to create a customized front-end experience in places like the micro cart. HotWax can provide frontend Shopify development or provide API details if the merchant has a Shopify agency of choice.

### Testimony

*Internal quote*: The soft allocation functionality will assist clients who offer same-day deliveries in accurately communicating to customers whether the list of items in their shopping cart is qualified for same-day delivery. 

*Customer quote*: How will HotWax evaluate if items in the shopping cart detail page should be available for same-day delivery or not?

To start using the feature, merchants can get in touch with an account manager at HotWax Commerce and learn more about the soft allocation brokering solution.

### FAQs

**Question 1: Can a customer check same-day delivery for multiple zip codes?**

Answer: Yes, customers can check if an item is available for same-day delivery by evaluating different zip codes one at a time.

**Question 2: What would happen when a cart has multiple items and only a few of them are available for same-day delivery?**

Answer: Soft allocation will evaluate all the items in the cart and display item wise same-day delivery eligibility for them. If order splitting is disabled, and some items are not eligible for same-day delivery, customers can edit and re-evaluate their cart’s items.

**Question 3: Can customers place orders beyond the store's operating hours?**

Answer: Yes, orders can be placed outside of a store’s operating hours. However, then the same day shipping method will not be displayed and next fastest delivery options will be shown for order items.

### Internal FAQs

**Question 1: Will there be a separate queue to broker orders eligible for same-day delivery?**

Answer: When the order is imported into HotWax Commerce, it will already have a ship from the location attached to it, so it will go straight to the fulfillment location without waiting for brokering.

**Question 2: Would our existing brokering algorithm work for soft allocation brokering? Or do we need to write/develop a new brokering algorithm?**