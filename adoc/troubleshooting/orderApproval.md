---
description: Troubleshoot ADOC country transformations, approval diagnostics, and OMS approval prerequisites for Shopify orders.
---

# Troubleshoot Order Approval

ADOC normally validates and approves eligible Shopify orders during real-time import. Start with the [Order Approval](../flows/SalesOrders/OrderApproval.md) flow to identify the rules for the country being investigated.

## Confirm the country importer

The `SYNC_SHOPIFY_ORDER` Data Manager configuration must use the service for the deployed country:

| Country | Expected service |
| --- | --- |
| Costa Rica | `sync#ShopifyOrderForAdocCR` |
| Guatemala | `sync#ShopifyOrderForAdocGT` |
| Honduras | `sync#ShopifyOrderForAdocHN` |
| Nicaragua | `sync#ShopifyOrderForAdocNI` |
| Panama | `sync#ShopifyOrderForAdocPA` |
| El Salvador | `sync#ShopifyOrderForAdocSV` |

Search the Maarg logs for the country service to confirm that the order reached the transformation:

```logql
{instance="adoc-<country>-maarg-hotwax-io"}
  |= "ShopifyOrderForAdoc"
```

Replace `<country>` with `cr`, `gt`, `hn`, `ni`, `pa`, or `sv`.

## Interpret diagnostic attributes

Check the order attributes and the country-specific Shopify note attributes. Attribute names are case-sensitive.

* `ATTRIBUTES_MISSING=true` means a CR, GT, HN, NI, or SV payload did not contain custom attributes. The standard country approval checks did not pass.
* `MISSING_ATTRIBUTES=true` means a PA payload is missing `distrito`, `corregimiento`, or `barrio`. The standard country approval checks did not pass.
* `DEPARTMENT_MISSING=true` means HN did not receive a department. This is a warning only and does not block approval.
* `DEPARTMENT_NOT_FOUND=true` means the HN department did not map to a state Geo. This is a warning only and does not block approval.
* `SHIPTO_ADDRESS_UPDATED=true` confirms that CR, GT, HN, NI, or SV copied its geographic value into the shipping city and postal code. PA does not use this attribute.
* `APPROVE_ORDER=true` means the standard country checks passed. It is diagnostic only; the current approval flow is controlled by `autoApprove`.

For CR, GT, HN, NI, and SV, verify the required `canton` or `municipio`. For PA, verify `distrito`, `corregimiento`, and `barrio`. When `taxCredit?` is explicitly `false`, also verify that `customerId` is present.

## Check the store pickup exception

A non-empty `_pickupstore` line-item attribute sets `autoApprove=Y` independently of the address checks. An order can therefore be approved for store pickup even when `APPROVE_ORDER` or `SHIPTO_ADDRESS_UPDATED` is absent. Empty `_pickupstore` attributes are discarded.

## Confirm the OMS approval result

After creating the sales order, the OMS calls `approve#Order`. If the order remains in `ORDER_CREATED` or `ORDER_HOLD`, check:

1. The product store has auto-approval enabled.
2. The order's `autoApprove` value is not `N`.
3. The payment method satisfies the store's approval-without-payment setting.
4. The Maarg and OMS logs do not contain an approval or allocation error for the order.

`APPROVE_ORDER=true` alone does not prove that the OMS approved the order. Confirm the final order status.

## Use privacy-safe Grafana checks

Use count queries for routine monitoring so that complete customer payloads are not returned:

```logql
sum by (instance) (
  count_over_time(
    {instance=~"adoc-(cr|gt|hn|ni|pa|sv)-maarg-hotwax-io"}
      |= "APPROVE_ORDER" [24h]
  )
)
```

For Honduras department warnings:

```logql
sum(
  count_over_time(
    {instance="adoc-hn-maarg-hotwax-io"}
      |~ "DEPARTMENT_(MISSING|NOT_FOUND)" [24h]
  )
)
```

The older NiFi metafield feed, `CarrierGeoMapping` address-correction batch, and `IMP_APR_SALES_ORD` scheduled approval job are not part of this standard Maarg import path.
