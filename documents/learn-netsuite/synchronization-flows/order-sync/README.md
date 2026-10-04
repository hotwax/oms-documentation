---
description: Documentation for Orders.
---

# Orders

HotWax Commerce synchronizes customers, order records, and NetSuite identifiers before the order is approved for fulfillment.

After fulfillment, a returned order follows the [NetSuite returns lifecycle](../../integration-flows/returns/README.md) based on its NetSuite transaction type. Returns against Sales Orders can include a `Return Authorization`, optional `Item Receipt`, and financial settlement. Depending on the configured record flow, returns against Cash Sales can use a `Cash Refund` instead of the RMA path.
