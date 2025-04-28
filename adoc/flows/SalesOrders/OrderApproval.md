---
description: >-
  Learn about the two-step order approval process at ADOC, ensuring orders are
  processed for fulfillment only if they meet specific criteria for updated
  customer information and shipping addresses.
---

# Order Approval Overview

Order approval in ADOC involves a two-step process. Initially, the shipping address is updated through a groovy script, and subsequently, new order attributes named `“SHIPTO\_ADDRESS\_UPDATED”` and `"APPROVE\_ORDER"` are generated with a value of `'true'` after the address update. Orders qualify for approval only if they possess the `“APPROVE\_ORDER”` order attribute as `‘true’`. This condition ensures that only orders with updated shipping addresses are processed for fulfillment.

The municipio or canton name in Shopify is stored as note attributes, which later become order attributes in HotWax Commerce. To ensure accurate shipping, these order attributes must be updated into both the City and Zipcode fields of the shipping address before sending it to the carrier.

## Enrich shipping address

Orders in Hotwax are imported from Shopify in real-time via webhook, the shopify connector listens to webhook in real time and processes the Order's JSON before importing that order into OMS. HotWax updates the address by using the `OrderTransformation.groovy` service in Shopify connector.

Here is the step-by-step process by which HotWax verifies the necessary information to update the shipping address and adds the required attributes for order approval.
1. **Looking for Specific Attributes**: The script looks for specific attributes in the order.
   - **taxCredit**: A flag that tells whether the customer is getting a tax credit.
   - **municipio/canton**: (for ADOC Costa Rica): The local area or city where the order is being shipped.
   - **customerId**: A unique identifier for the customer, necessary when tax credit is not present. If both tax credit and customerId are not found, the order does not qualify for further approval checks.
   - **department**: (mandatory for ADOC Honduras): The state or region.
If any of these necessary attributes are missing, an "ATTRIBUTE\_MISSING" attribute is added with the value 'true', and no other attributes are added to note attributes, nor is the shipping address updated.
In ADOC HN, if this attribute is missing from the note attributes in order JSON then we add a `"DEPARTMENT\_NOT\_FOUND"` attribute with value 'true',  if found then the department’s geo code is updated in the `province_code` of shipping_address in order JSON. Note that whether the department is present in the note attributes or not, the `“SHIPTO\_ADDRESS\_UPDATED”` and `“APPROVE\_ORDER”` attributes will be added in either case.

2. **Update the Shipping Address**  
If all the required information is present, then the city and zip code are updated with the value of `municipio/canton` in the shipping address. 
In ADOC HN, the department name’s corresponding geo location ID is updated in the State/Province Geo ID in Shipping Address in OMS.

3. **Added necessary attributes for approval**  
If all necessary attributes are present and the shipping address is successfully updated, new order attributes are generated:  
    - `"SHIPTO\_ADDRESS\_UPDATED"` with a value of `'true'`,
    - `"APPROVE\_ORDER"` with a value of `'true'`.
With this payload, the order is created in OMS, ready to be approved.


## Approve Order

A scheduled process identifies orders with the `"APPROVE\_ORDER"` attribute set to `'true’`.

All orders that have these attributes are queued to be approved by the `Approve Orders` job.

Job details:

```
Approve orders
Config ID: IMP_APR_SALES_ORD
Service Name: approveSalesOrder
```
