---
description: Understand the released HotWax Commerce and NetSuite sales-order synchronization flow.
---

# Sales orders

HotWax Commerce sends eligible commerce orders to NetSuite for ERP processing while retaining responsibility for order approval, routing, and distributed fulfillment. Treat order creation in NetSuite, identifier return, OMS approval, allocation, and fulfillment as separate checkpoints.

{% hint style="warning" %}
The connector provides job templates and service metadata. Actual schedules, SFTP remotes and paths, enabled SuiteScripts, batch sizes, and approval rules are deployment-specific. Verify the running configuration before replaying a flow.
{% endhint %}

## Lifecycle

1. HotWax Commerce imports the commerce order.
2. Customer and product NetSuite identifiers are synchronized.
3. An OMS job creates the NetSuite sales-order feed.
4. NetSuite imports the feed and returns sales-order header and line identifiers.
5. HotWax Commerce imports those identifiers.
6. The order passes the deployment's OMS approval policy and becomes eligible for routing.
7. Allocation or completed fulfillment is sent to NetSuite according to which system owns fulfillment.
8. Fulfillment, invoicing, and payment processing continue in the configured systems.

Successful identifier return proves that NetSuite created the record. It does not, by itself, prove that the OMS approved, routed, or fulfilled the order.

POS cash sales follow a separate branch: `generate_CreateOrderFeed_pos` creates the feed, and `HC_MR_ExportedCashSaleCSV` returns the cash-sale identifier. Follow the [POS orders](pos-orders.md) flow instead of applying sales-order header and line steps to a cash sale.

## Create-order eligibility

The released create-order view selects a `SALES_ORDER` when it:

- Has a Shopify order ID.
- Has a customer with `NETSUITE_CUSTOMER_ID`.
- Has `NETSUITE_PRODUCT_ID` for every order item.
- Does not yet have `NETSUITE_ORDER_ID`.
- Is not in the connector's invalid-order set.

The released connector does not apply an order-status filter. Optional job parameters can further filter by date, shipment method, sales channel, mixed-cart behavior, and order age. Do not describe `Created` status as a universal prerequisite.

## Released job templates

| Template or service | Purpose |
| --- | --- |
| `generate_CustomerFeed` | Export customers that still need NetSuite identifiers. |
| `generate_CreateOrderFeed` | Export otherwise-eligible orders while excluding `POS_COMPLETED` shipment methods by default. |
| `generate_CreateOrderFeed_pos` | Export otherwise-eligible orders with `POS_COMPLETED` shipment methods. |
| `HC_importSalesOrders` | Surface the NetSuite sales-order import SuiteScript in the job catalog. |
| `HC_MR_ExportedSalesOrderCSV` | Export NetSuite sales-order header identifiers. |
| `HC_MR_ExportedSalesOrderItemCSV` | Export NetSuite sales-order line identifiers. |

The create-order templates are seeded paused, require an SFTP remote and file-path configuration, and default to at most 500 orders per run. Catalog metadata does not prove that the corresponding SuiteScript is installed, deployed, or scheduled in a NetSuite account.

For configuration and detailed checkpoints, see [Create sales orders and approve OMS orders](order-approval.md).

## Fulfillment ownership

- For NetSuite-managed facilities, [allocation](order-allocation.md) can be sent before fulfillment.
- For OMS-managed facilities, completed fulfillment is sent to NetSuite after the item ships.
- Shipped items from NetSuite can return to the OMS through the deployment's configured import stack.

See [Fulfillment synchronization](fulfillment.md) for the released connector jobs and boundaries.

## Monitor the flow

Use the [order synchronization checkpoints](reports.md) with the same Shopify order ID, HotWax Commerce order ID, and NetSuite internal ID. For failures, start with [Order Sync Failure](../../troubleshooting/order-do-not-sync.md) and [Failed SuiteScripts](../../troubleshooting/failed-suitescripts.md).
