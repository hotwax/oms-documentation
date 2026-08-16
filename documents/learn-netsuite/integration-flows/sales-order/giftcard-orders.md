---
description: Understand how physical and digital gift card lines qualify for NetSuite order creation.
---

# Gift card orders

Physical and digital gift card orders enter HotWax Commerce through the Shopify [gift card order](../../../learn-shopify/shopify-integration/orders/giftcards-download.md) flow. NetSuite creation then uses the released sales-order eligibility rather than a separate gift-card status rule.

## Product prerequisites

HotWax Commerce first resolves each Shopify gift card line to an OMS product.

- A physical gift card variant follows its normal Shopify-to-OMS product mapping.
- A gift card line without a Shopify variant uses the shop's `SHOPIFY_PRODUCT_TYPE` / `CUSTOM_GIFT_CARD` default product mapping.
- Every resolved product must have `NETSUITE_PRODUCT_ID`.

If any order item lacks `NETSUITE_PRODUCT_ID`, the connector places the entire order in its invalid-order set. The order is then absent from `EligibleOrders`; it does not export only the mapped lines.

## NetSuite record creation

Gift card orders use the standard [create-order eligibility](README.md#create-order-eligibility):

1. Synchronize the customer and product identifiers.
2. Generate the applicable order feed.
3. Confirm NetSuite record creation.
4. For a NetSuite sales order, return its header and line identifiers to HotWax Commerce.
5. Evaluate the deployment's OMS approval policy.

The released connector does not require `Created` status and does not define a separate Completed-status digital-gift-card export selected by missing NetSuite line IDs.

For a Shopify POS gift card purchase with `POS_COMPLETED` shipment method, follow the [POS cash-sale flow](pos-orders.md). Otherwise, follow [Create sales orders and approve OMS orders](order-approval.md).

## Fulfillment

- A physical gift card assigned to a NetSuite-managed facility follows the allocation and NetSuite fulfillment flow.
- A physical gift card assigned to an OMS-managed facility follows HotWax Commerce fulfillment and sends its completed fulfillment to NetSuite.
- A digital or other non-shipping line can already be `Completed` in HotWax Commerce, but it still needs the standard NetSuite identifiers and eligible order feed when the ERP record is required.

See [Fulfillment synchronization](fulfillment.md) for the released connector boundaries.

## Activation and accounting

Gift card activation, serial-number exchange, customer deposits, invoice generation, and gift-card payment accounting depend on the installed Shopify, middleware, and NetSuite configuration. The released NetSuite connector does not establish one universal activation feed, SFTP path, or invoice outcome for all deployments.

Before documenting or operating those steps, verify:

- Installed SuiteScript and deployment identifiers.
- Producer and consumer jobs.
- File format, remote, path, and archive behavior.
- Gift card product, tax, payment-item, and GL mappings.
- Retry and duplicate-prevention behavior.

## Verify a gift card order

Use one Shopify order ID and confirm the OMS product mapping, `NETSUITE_PRODUCT_ID` values, create-order Job Run, NetSuite internal ID, and final fulfillment owner. For a NetSuite sales order, confirm the returned header and line identifiers. For a `POS_COMPLETED` purchase, confirm the returned cash-sale identifier through the POS flow. If the order is missing from the feed, start with the full order's product eligibility rather than searching only for the gift card line.
