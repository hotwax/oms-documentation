# Kit Products

The Bundles app checks inventory levels at 10-minute intervals, reducing inventory for kit products if individual item inventory decreases.
Kit products have no physical inventory of their own, like NetSuite, the inventory calculations are based on the lowest common denominator between all individual components.

For multi-location inventory calculations, a kit products avaialbity is determined by the lowest common denominator of the kit comopnent inventory avaiable by facility. The computed inventory of a kit product at each facility is then summed to produce the final sellable inventory number.

During allocation, brokering is run on the kit components directly which actually have physical inventory at facilities. By default splitting is disabled for kit products in an order.

{% hint style="warning" %}
**Note** HotWax does not push kit product inventory to Shopify. Kit product inventory on Shopify is computed entirely by the Bundles app.
{% endhint %}

**Jobs to sync Kit Products from Shopify**

Import kit components from Shopify
```
Import kit product components
```

Enable this job to sync the Shopify
```
Import kit product metafields
```