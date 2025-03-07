---
description: >-
  Learn about the two-step order approval process at ADOC, ensuring orders are
  processed for fulfillment only if they meet specific criteria for updated
  customer information and shipping addresses.
---

# Order Approval

Order approval in ADOC involves a two-step process. Initially, the shipping address is updated through an API call, and subsequently, a new order attribute named “SHIPTO\_ADDRESS\_UPDATED” is generated with a value of “true” after the address update. Orders qualify for approval only if they possess order attributes for both a government mandated Customer ID and SHIPTO\_ADDRESS\_UPDATED. This two-criteria condition ensures that only orders with both updated customer information and shipping addresses are processed for fulfillment.

The municipio name in Shopify is stored as a Metafield upon order creation, which later becomes an order attribute in HotWax Commerce. To ensure accurate shipping, this order attribute must be transferred to both the City and Zipcode fields in the shipping address before sending it to the carrier.

## Enrich shipping address

HotWax updates the address by utilizing the. After a successful order address update is completed, a new order attribute “SHIP\_TO\_ADDRESS\_UPDATED” is added to orders with the corrected address.

Here is a step by step process of how HotWax validates if the address values stored in order attributes are valid before adding them to the shipping address of the order.

A schedule process identifies all orders that do not have the `SHIP_TO_ADDRESS_UPDATED` attribute.


## Approve Order

A scheduled process checks orders for two attributes:

1. 
2. “SHIP\_TO\_ADDRESS\_UPDATED”: (“true”)

All orders that have these attributes are queued to be approved by the “Approve Orders” job.

Job details:

```
Approve orders
ConfigId: IMP_APR_SALES_ORD
```
