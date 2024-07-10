# Order Attribute is Missing in Oms

Shopify retailers can capture additional crucial order details through metafields. When HotWax Commerce enters a retailer’s Shopify ecosystem, it becomes the source of truth for all order-related information.

HotWax Commerce stores these metafields as order attributes enabling Shopify retailers to conveniently provide necessary order information to accounting systems for accurate financial reporting. For example, customer identification `CustomerID` and designated delivery location `Municipio` are crucial attributes for one of our clients.

If orders do not have all valid order attributes, the orders remain in “created” status and these orders can not proceed with the fulfillment process. By using the [`missing order attribute report`](https://docs.hotwax.co/learn-netsuite/supported-integrations/salesorder/reports#missing-order-attribute-report), you can find out which orders have a missing order attribute.

## Scenario 1: Order Missing Metafields in OMS

To ensure consistency between Hotwax Commerce and Shopify, we need to verify if an order has the Order Metafields in Shopify. If an order in Shopify has meta fields that are missing in the OMS, this might happen if the [`Import order Attribute`](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/orders#order-item-attribute) is not running or if the job runs before the meta field is added by Shopify. In such cases, the meta fields should be manually added as order attributes to the OMS in the order attribute section on the view order page.

For example, if the `CustomerID` is missing in OMS but available in Shopify, you need to map the `CustomerID` in OMS in the OrderAttribute section on the OrderView page.

**Note:** Ensure the correct spelling when manually adding the tag in the OMS.

## Scenario 2: Order Missing Metafields in both OMS and Shopify

If an order metafield is missing from Shopify and the OMS, it's crucial to investigate the root cause. This may involve identifying issues such as the metafield not being available due to order-related problems.

For example, if the `Riskified` or `Signified approved` tag is missing in Shopify, the order contains high or medium fraud risk. There is a high chance that you will receive a chargeback on this order.

In such cases, CSRs have to manually verify the orders and add the attribute in the Order Attribute section on the Order View page.
