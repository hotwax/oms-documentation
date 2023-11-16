# Order Approval

Orders are imported in “created” status in the OMS and then through a combination of checks and attributes they’re approved for fulfillment.

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