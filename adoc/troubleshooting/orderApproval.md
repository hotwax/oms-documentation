# Order Approval

ADOC uses a custom flow where certain orders are only approved after the address is validated and a government mandated Customer ID is present. After an order is imported, ADOC has a job enabled for importing order metafields, under the namespace “HotwaxOrderDetails”, from Shopify by an independent job as Order Attributes in HotWax Commerce.

## Sync metafields from Shopify

Ensure metafield import is enabled from the Orders page in the Job Manager app.
```Import Order Metafield```

Ensure that the namespace parameter of the job is set to
```HotwaxOrderDetails```

You can ensure that this job is running as expected by auditing the Shopify GraphQL MDM page.
```https://{instance-name}.hotwax.io/commerce/control/ShopifyGraphQLJob```

By default all GraphQL syncs will show here. 

To identify the exact GraphQL operations for importing order metafields:

1. Select the Shopify Config that you want to check sync from
2. Select `Import Shopify Order Metafields` from the GraphQL Config dropdown.
3. Click find to filter the results based on the selected criteria.

If the metafield sync is running as expected, on the order detail page these attributes should be present:
1. Customer ID
2. Municipio
3. SHIPTO_ADDRESS_UPDATED: true

The `SHIPTO_ADDRESS_UPDATED` order attribute is created after an order has been first validated for a registered Municipio order attribute value. If this attribute is not created, that means that the order does not have a valid Municipio attribute and one needs to be added.

Validate that the Order Item Attribute job for this is enabled.

Validate that the config ID is set correctly. The default config ID is: `IMP_ORDER_ITM_ATTR`

You can use the “Missing Order Attribute” report to identify orders where the OMS could not automatically correct the address of an order.

## Metafields created on Shopify but not imported into HotWax
Go to Shopify order details page > add /metafields.json in the url > verify the order creation and metafields input time.
Prerequisite: Metafields created after 30 minutes of order creation will not sync in OMS.
If you cannot wait for metafields to be imported or the job is not working as expected, order attributes can be created manually from the Order Detail page.
<add template values to be used by HotWax BA>
