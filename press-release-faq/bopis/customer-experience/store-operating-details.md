# Store operating details 

## Merchants need to explicitly display day specific store’s operating hours and a defined lead time to help communicate accurate fulfillment timelines with customers.

Configuring granular store operating details will allow merchants to record holidays, store’s operating hours per-day for the week and state a lead time on order pick-up. Executing a granular control will let merchants display precise information on eCommerce and set fair customer expectations for their pickup orders.

A store's hours of operations may differ from day to day throughout the week, but only showing static information on PDP may create misleading same day BOPIS expectations. Customers usually anticipate BOPIS orders to be fulfilled the same day, but orders placed just before a store closes cannot be fulfilled the same day since orders need lead time to be prepared for pick-up. Inability to express accurate store operating details to customers results in disappointing BOPIS experience.

Displaying day-specific store’s operating hours and estimated lead time on eCommerce lets merchants convey exact fulfillment schedules for BOPIS orders. Customers will be motivated to buy quickly after checking the available time frame for same-day delivery on PDP and an estimated store pick-up time on the checkout page. Clearly defining whether items are available for same-day pickup or not, allows merchants to manage customer expectations.

Merchants will be required to communicate their list of holidays and every store’s opening-closing schedule for the week. Additionally, merchants will also need to set their projected lead time, that their staff need to prepare orders, on the BOPIS shipping method. HotWax Commerce will then fetch and save a store’s operating details to provide the intended BOPIS front-end experience.

### Testimony

*Internal quote*: Customers will be able to see same-day pick-up availability on the client’s eCommerce PDP itself, this will help them reduce cart abandonment and order cancellations.

*Customer quote*: Store hours on PDP should appear for all week days on storefront. As Store hours can be collapsed by the default and allow the user to expand/collapse by clicking on "store hours'. 

To start using the solution, merchants can get in touch with an account manager at HotWax Commerce and get their store operating details uploaded into HotWax Commerce.

### FAQs

**Question 1: Would the BOPIS orders received at the closing time be fulfilled the next day?**

Answer: Yes, since the pick-up time will be based on a store’s operating hours and lead time, customers placing orders just before the closing time would know if the item can still be picked up the same day or not. In case, an item is not available for same-day pick-up, a next-day pick-up option will be shown on PDP.

### Internal FAQs

**Question 1: Based on a store’s operating hours, if a BOPIS order cannot be fulfilled same-day, how will HotWax deliver PDP experience?** 

Answer: The storeLookup API will fetch day-wise store operating hours and cut off time, the BOPIS PDP App will read this data and accordingly display the pick-up options.

**Question 2: If a client uses Google My Business, can we integrate and migrate store operating details from there?**

Answer: At present, HotWax does not support day-wise operating hours from Google My Business. However, an integration with Google My Business can be initiated to sync store operating details from there.

**Question 3: Do we have a predefined list of holidays that we can by default offer our clients?**

Answer: HotWax will create and save the temporal expressions based on a merchant’s list of holidays, indicating which day of a month or year will be a holiday.
