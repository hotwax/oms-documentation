# SHIP-T Integration

## Merchants using shipping carriers like ShipT for last mile delivery want to ensure that their OMS supports required systemic integrations and real-time sync of fulfillment updates.

HotWax Commerce integrates with shipping carriers like ShipT to help in computing the estimated ship date on a ship group. HotWax Commerce communicates order details and the requested delivery date with ShipT and stores the delivery date confirmed by ShipT. Due to the real-time nature of ShipT deliveries HotWax Commerce also reads fulfillment updates from ShipT webhooks and updates customers instantly.

Traditional integrations with standard shipping companies like Fedex don’t require criteria-set like store operating hours, lead time and pickup deadlines when determining fulfillment SLA eligibility. Not storing granular fulfillment timeline details and communicating exact delivery deadlines to providers like ShipT leads to increased order cancellations from the carrier or delays in fulfillment to the customer. Fulfillment details are also broadcasted by ShipT using webhooks, due to the condensed nature of the fulfillment, which traditional fulfillment integrations don't support.

A specialized integration between HotWax Commerce OMS and ShipT fills in the gaps left by otherwise traditional shipping gateway integrations. When a customer selects same day or next day delivery, HotWax will automatically apply an expected delivery date to the order based on the selected method. After the order is pushed to ShipT, HotWax Commerce saves the delivery date confirmed by ShipT allowing retailers to notify customers of the actual expected ship date if it differs from what they requested. To keep customers posted with their order status from when the order is picked up from store, through delivery, HotWax Commerce will read fulfillment updates using webhooks and email customers with the tracking details. 

Merchants using ShipT as their shipping carrier for last mile deliveries will be able to implement additional criterias supported by HotWax Commerce, along with incoming webhook communication for order fulfillment updates.

### Testimony

*Internal quote*: HotWax now has a ready integration with ShipT. It is an excellent addition to the current integration ecosystem. Clients using ShipT as their shipping aggregator will now avail real-time fulfillment updates via webhooks.

*Customer quote*: We want to offer customers same-day delivery from ShipT. Can HotWax integrate with ShipT?

### FAQs

**Question 1: How is an order processed if it is only partially eligible for same or next day delivery?**

Answer: Currently, HotWax does not support split orders with ShipT. Therefore, shopping carts will be evaluated based on availability of all order items.

**Question 2: How will we communicate to ShipT about order cancellations?**

Answer: Orders cannot be canceled once they are under the processing status. Customers need to contact the support reps for order cancellations. CSRs would then contact ShipT to convey about the order cancellation requests.

**Question 3: If an order’s expected ship date differs from the delivery date confirmed by ShipT, how would we communicate to customers about changes?**

Answer: HotWax reads order updates from ShipT and triggers an email update to customers if there are any changes in the delivery dates confirmed by ShipT.

### Internal FAQs

**Question 1: Which ShipT updates will be supported using webhooks?**

Answer: HotWax reads fulfillment updates from ShipT webhooks for complete and canceled.


