# Order Approval

ADOC uses a custom flow where certain orders are only approved after the address is validated and a government mandated Customer ID is present. After an order is imported, ADOC has a job enabled for importing order metafields, under the namespace “HotwaxOrderDetails”, from Shopify by an independent job as Order Attributes in HotWax Commerce.

## Sync Shopify order metafields
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
    Buffer time is set in minutes
{% endhint %}

To verify the sync is running as expected, use the Shopify GraphQL MDM. This page is located under MDM > EXIM > Shopify Jobs > Shopify GraphQL Job.

Shopify GrqphQL config
>Import Shopify Order Metafields.

