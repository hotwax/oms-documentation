---
description: Configure and verify NetSuite sales-order creation without conflating it with OMS approval.
---

# Create sales orders and approve OMS orders

NetSuite record creation and HotWax Commerce approval are related operational stages, but they are not the same event. A returned `NETSUITE_ORDER_ID` proves that NetSuite created the order. The OMS still evaluates its configured approval policy before the order can proceed to routing.

## Synchronize the customer prerequisite

An order is not eligible for the released create-order feed until its customer has `NETSUITE_CUSTOMER_ID`. The customer feed selects parties with the `CUSTOMER` role and `SHOPIFY_CUST_ID` but no `NETSUITE_CUSTOMER_ID`.

1. Configure `generate_CustomerFeed` with `systemMessageTypeId`, `systemMessageRemoteId`, batch size, and schedule. The template is seeded paused.
2. In NetSuite, `HC_SC_ImportCustomer` imports the customer feed.
3. `HC_MR_ExportedCustomerCSV` exports the NetSuite identifiers.
4. Import the returned identifiers into HotWax Commerce. The generic OMS catalog provides `Party Identification` with configuration `IMP_PARTY_IDENT`, but the actual file path and schedule must be verified for the deployment.

For a migration where NetSuite already contains Shopify customers, complete the historical customer-identification import before enabling new customer export. Without it, HotWax Commerce can export a customer that already exists in NetSuite, creating a duplicate-record risk that depends on the NetSuite import mapping.

## Generate the create-order feed

Use one of these OMS templates:

| Job template | Default scope |
| --- | --- |
| `generate_CreateOrderFeed` | Eligible orders excluding `POS_COMPLETED` shipment methods. |
| `generate_CreateOrderFeed_pos` | Eligible orders with `POS_COMPLETED` shipment methods. |

Both templates are seeded paused. Set the SFTP `systemMessageRemoteId` and `filePathPattern`, review the optional filters, and configure the schedule before activation. Their released default query limit is 500 orders per run.

The released feed does not apply a `Created`-status condition. It requires the identifiers and eligibility described on the [Sales orders](README.md#create-order-eligibility) page.

{% hint style="info" %}
The released service does not implement a separate 25,000-row or 1,000-order pagination rule. Validate the configured batch size against typical line counts and NetSuite import limits.
{% endhint %}

### Feed validation and mapping

- Base validation requires date, country, and customer. A deployment-specific transformation can require more fields.
- The released feed includes item unit price.
- Taxable lines use the deployment's `NETSUITE_TAX_CODE` default mapping. Other lines fall back to `-Not Taxable-`.
- Invalid records are separated under the configured feed path, including `required_fields_missing` and `partial_payment` output where applicable.

Do not hard-code an SFTP path from an example tenant. The service builds its remote path from the job's configured `filePathPattern`.

## Create the order in NetSuite

`HC_importSalesOrders` consumes the configured sales-order feed in NetSuite. Confirm that the script is installed and deployed, then use the NetSuite script execution and CSV import status as the record-creation checkpoint.

If NetSuite rejects a record, correct the source mapping or required value before rerunning it. A successful OMS feed Job Run alone does not prove that NetSuite accepted the record.

## Return the NetSuite identifiers

After record creation:

1. `HC_MR_ExportedSalesOrderCSV` exports the sales-order header identifiers.
2. `HC_MR_ExportedSalesOrderItemCSV` exports the line identifiers.
3. HotWax Commerce imports the header identifier through `Order Identification`. The generic configuration is `IMP_ORDER_IDENT`.
4. HotWax Commerce imports line identifiers through `Order Item Attribute`. The generic configuration is `IMP_ORDER_ITM_ATTR`.

Verify the terminal import result and confirm the expected identifiers on the exact OMS order and line items.

## Evaluate OMS approval

The released NetSuite connector does not define `NETSUITE_ORDER_EXPORTED` as a universal approval requirement, nor does it automatically prove approval when identifiers return.

Generic OMS UDM defines `Approve Sales Order` with configuration `IMP_APR_SALES_ORD`, which can import IDs selected by an external ERP, fraud, or attribute policy. Verify whether the deployment configures and schedules it. Other deployments can use the standard OMS Product Store, payment, and risk checks. Document and verify the policy actually configured for the retailer.

Once the order is `Approved`, it can enter routing. A store-pickup order already has its pickup facility, but it can still be subject to approval and other operational checks.

For a gate-by-gate review, see [Troubleshoot order approval](../../../retail-operations/orders/order-management/troubleshooting/order-approval.md).

## Optional customer-deposit processing

Customer-deposit processing is a separate financial flow and must not be used as proof of OMS approval. The released connector exposes `HC_MR_CreateCustomerDeposit` and `HC_SC_CreateCustomerDepositAndRefund`. Confirm which process is installed and required for the deployment before scheduling it.

For a missing deposit, see [Missing Customer Deposit](../../troubleshooting/missing-customer-deposit.md).

## End-to-end verification

Retain these identifiers for one order:

- Create-order feed Job Run ID and generated filename.
- SFTP remote and configured path.
- NetSuite script deployment and execution result.
- NetSuite sales-order internal ID.
- Header and line identifier import log IDs and terminal results.
- Final OMS status and the specific approval policy that produced it.

Use [Order synchronization checkpoints](reports.md) to isolate the first missing stage.
