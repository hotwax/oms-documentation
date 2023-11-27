# Gift Card
Gift cards often have fixed values, but store staff have the ability to override these values and create custom value cards as well. The flexibility of having custom amount gift cards means that a one to one mapping cannot be made for every possible value gift card, Krewe has a common SKU in NetSuite that should be added to orders with the custom value of the gift card item overridden on the item.

## How this works in HotWax
A custom mapping will be added in the integration table that will map all products that are of type “Gift Card” to a NetSuite internal ID. During order creation feed generation, the HotWax NetSuite integration will check order items for products that are gift cards based on the product type.

For all of these items, the integration layer will check the integration mapping table for a key of the same type and use the mapped value as the `Item ID` in the feed to NetSuite. The integration layer will also add the item value from the order as the `Amount` of the item. Lastly, the `Price Level` of the item must be set to `Custom` to ensure the actual gift card value from Shopify is communicated to NetSuite.

| Item           | 3115            |
| -------------- | --------------- |
| Amount         | Unit List Price |
| Price Level    | Custom          |

**Product Type**

```
<ProductType description="Gift Card" hasTable="N" isDigital="Y" isPhysical="N" parentTypeId="DIGITAL_GOOD" productTypeId="GIFT_CARD"/>
```

**NetSuite mapping**

```
<Enumeration description="Blanket Gift Card SKU in NetSuite" enumId="NETSUITE_GIFT_CARD" enumName="Netsuite Gift Card" enumTypeId="NETSUITE" sequenceId="1"/>

<IntegrationTypeMapping integrationTypeId="NETSUITE_GIFT_CARD" mappingKey="GIFT_CARD" mappingValue="3115" description="Gift Card"/>
```
