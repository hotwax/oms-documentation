---
description: Understand the released Shopify POS cash-sale synchronization path to NetSuite.
---

# POS orders

The released connector can send eligible Shopify POS orders to NetSuite as cash sales. This is separate from the ordinary online sales-order feed.

## Eligibility

`generate_CreateOrderFeed_pos` uses the standard [create-order eligibility](README.md#create-order-eligibility) and preconfigures `includeShipmentMethod=POS_COMPLETED`.

The released template does not preset a sales-channel or order-status filter, and the service does not use a time cursor. `POS_COMPLETED` is the shipment-method scope for this feed, not proof that a specific sales channel or status was checked.

An order normally remains eligible until `NETSUITE_ORDER_ID` is imported. Validate duplicate prevention and the NetSuite script result before replaying a failed batch.

## Synchronization flow

1. Configure `generate_CreateOrderFeed_pos` with the deployment's SFTP remote, path, optional filters, batch size, and schedule.
2. Confirm the generated feed and any invalid-record output.
3. `HC_SC_ImportCashSale` imports the feed into NetSuite as cash-sale records.
4. `HC_MR_ExportedCashSaleCSV` exports the NetSuite internal IDs.
5. Import those IDs through `Order Identification`. The generic OMS configuration is `IMP_ORDER_IDENT`.

The job template is seeded paused and defaults to at most 500 orders per run. Its actual runtime cadence and SFTP path are deployment-specific.

## Verify a POS cash sale

Use the same Shopify order ID throughout the flow and retain:

- `generate_CreateOrderFeed_pos` Job Run ID and feed filename.
- NetSuite `HC_SC_ImportCashSale` execution and import result.
- NetSuite cash-sale internal ID.
- `HC_MR_ExportedCashSaleCSV` execution result.
- Terminal Order Identification import log and the resulting `NETSUITE_ORDER_ID`.

Do not infer success from a time window alone; this released flow has no last-run cursor.
