---
description: >-
  Troubleshoot ADOC orders that remain unapproved because required customer or
  shipping-address information is missing.
---

# Order approval

ADOC approves an order only after it has a `CustomerId` and a `SHIP_TO_ADDRESS_UPDATED` attribute with the value `true`. Do not use generic risk-review outcomes to diagnose ADOC approval delays; the ADOC approval path is based on the required attributes and address-enrichment result.

## Check Shopify metafield import

1. In Job Manager, confirm that `Import Order Metafield` is enabled.
2. Confirm that its namespace is `HotwaxOrderDetails`.
3. In Shopify GraphQL MDM, filter the Shopify configuration by `Import Shopify Order Metafields` and check that the job completed for the affected order.
4. On the order, verify that the required attributes were imported, including `CustomerId` and the applicable geographic attribute: `municipio` or `canton`.

If a metafield was created after the configured import buffer, it may not be imported automatically. Correct the order attributes manually only when the source Shopify order has been verified.

## Check shipping-address enrichment

ADOC enriches the shipping address from `municipio` or `canton` using `CarrierGeoMapping`. A successful update creates `SHIP_TO_ADDRESS_UPDATED=true`.

1. Verify that the order has the expected `municipio` or `canton` value.
2. Verify that the value has a matching `CarrierGeoMapping` entry for the relevant carrier or the system default carrier.
3. Confirm that the shipping address was updated with the mapped geographic value.
4. Confirm that `SHIP_TO_ADDRESS_UPDATED` is present and has the value `true`.

If there is no mapping or the value is misspelled, correct the source value or mapping before rerunning the process. The enrichment process cannot safely infer an intended municipality or canton from a misspelling.

## Confirm approval

When `CustomerId` and `SHIP_TO_ADDRESS_UPDATED=true` are both present, the `Approve Orders` job can queue the order for approval. Confirm that the order moves from `Created` to `Approved` before it is released for fulfillment.

## Evidence note

This ADOC-specific procedure is based on the ADOC approval baseline and the verified carrier geographic mapping and address-enrichment implementation. It intentionally excludes generic OMS risk-review guidance because ADOC use of that flow is not established.
