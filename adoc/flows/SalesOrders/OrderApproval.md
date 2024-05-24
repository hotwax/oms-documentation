---
description: >-
  Learn about the two-step order approval process at ADOC, ensuring orders are
  processed for fulfillment only if they meet specific criteria for updated
  customer information and shipping addresses.
---

# Order Approval

Order approval in ADOC involves a two-step process. Initially, the shipping address is updated through an API call, and subsequently, a new order attribute named “SHIPTO\_ADDRESS\_UPDATED” is generated with a value of “true” after the address update. Orders qualify for approval only if they possess order attributes for both a government mandated Customer ID and SHIPTO\_ADDRESS\_UPDATED. This two-criteria condition ensures that only orders with both updated customer information and shipping addresses are processed for fulfillment.

## Sync Shopify order metafields

After an order is imported, ADOC has a job enabled for importing order metafields, under the namespace “HotwaxOrderDetails”, from Shopify by an independent job as Order Attributes in HotWax Commerce.

A job in HotWax syncs order metafields from Shopify and saves them in HotWax as order attributes against that order.

```
Import Order Metafield
```

This job specifically checks order metafields under the following namespace.

```
HotwaxOrderDetails
```

This job also has an optional buffer parameter that can be used to skip orders created less than a certain duration ago. For example, setting the buffer time of 60 minutes will exclude orders that were created in the last 60 minutes.

{% hint style="info" %}
```
Buffer time is set in minutes
```
{% endhint %}

To verify the sync is running as expected, use the Shopify GraphQL MDM. This page is located under MDM > EXIM > Shopify Jobs > Shopify GraphQL Job.

Shopify GrqphQL config

> Import Shopify Order Metafields.

The municipio name in Shopify is stored as a Metafield upon order creation, which later becomes an order attribute in HotWax Commerce. To ensure accurate shipping, this order attribute must be transferred to both the City and Zipcode fields in the shipping address before sending it to the carrier.

## Enrich shipping address

HotWax updates the address by utilizing the `updatePostalAddressContactMech` API. After a successful order address update is completed, a new order attribute “SHIP\_TO\_ADDRESS\_UPDATED” is added to orders with the corrected address. This systematic approach ensures that the city information is correctly reflected in the shipping details provided to the carrier.

Here is a step by step process of how HotWax validates if the address values stored in order attributes are valid before adding them to the shipping address of the order.

A schedule process identifies all orders that do not have the `SHIP_TO_ADDRESS_UPDATED` attribute. The job then checks the order for either of the following attributes:

* Municipio
* Canton

It then checks the value of this attribute against the `CarrierGeoMapping` records. If the job is able to successfully identify a match in the `GeoName` column with the expected carrier ID, then it takes the matching value and adds it to the order’s postal address.

Once the job receives a successful response that the address has been updated in the OMS, the order ID is added to a file containing orders with successfully updated order attributes and the value of the new attribute that is to be added to them. After a batch of orders is complete, this file is imported by HotWax, and the orders have their attributes added to them. Now when a check for order approval is run in HotWax, it will verify that all the attributes are added to the order and then the order is approved for fulfillment.

### Handling values that do not have a valid carrier code mapping

We created a list of Municipios and Cantons where Shopify’s mapping was not aligned with what the shipping carriers were expecting. This meant that even though customers thought they were choosing the right value, behind the scenes on Shopify the ID of their selection was not what the actual carriers were expecting.

To resolve this we manually mapped all the wrong values against what the right values should be for all the countries, and then added those mappings to the `CarrierGeoMapping` table and set their carrier to the system default carrier. These records have the expected erroneous mapping in the `GeoName` column with the corrected value in the `CarrierGeoValue` column. Now that the value is corrected, when shipping labels are requested by HotWax to the carriers, it's able to send the correct carrier code.

If the job finds a matching value but the carrier is “NA”, otherwise known as the system default carrier, then it updates the postal address of the order with the data in the `CarrierGeoValue` column.

The process of address correction does not, however, offer a fix for CSRs misspelling municipio and canton names while creating orders. Because the error in spelling is not predictable, there is no way to auto-correct them using this mapping methodology.

{% hint style="info" %}
If an order cannot be automatically handled, it requires manual correction of its order attributes by a user for HotWax approval against this value.
{% endhint %}

## Approve Order

A scheduled process checks orders for two attributes:

1. “CustomerId”: (any value)
2. “SHIP\_TO\_ADDRESS\_UPDATED”: (“true”)

All orders that have these attributes are queued to be approved by the “Approve Orders” job.

Job details:

```
Approve orders
ConfigId: IMP_APR_SALES_ORD
```
