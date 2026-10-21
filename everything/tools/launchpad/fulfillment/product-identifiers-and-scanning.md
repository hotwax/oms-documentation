---
description: >-
  Separate product display preferences from barcode matching, inspect Fulfillment
  settings safely, and diagnose missing identifiers without bypassing scanning.
---

# Diagnose Product Identifiers And Scanning

Use this guide when a product displays the wrong identifier, a barcode is not recognized, or an identifier preference does not persist. A product's displayed label and the value used to match a scan are separate settings. Changing the displayed SKU does not automatically change which barcode is accepted.

## Version And Verification Boundary

The controls and scan-dialog behavior below are **source-verified at Fulfillment App v4.3.0**, published October 14, 2026. This is a standalone frontend release, not a frontend version pinned by the Maarg distribution manifest. The latest distribution checked on October 21 is Maarg v6.5.0, published October 19; its active manifest includes OMS v3.5.2, Poorti v3.5.1, maarg-util v4.5.2 and Shopify connector v4.5.2 in the production component set. Commented declarations were excluded. Neither publication nor distribution inclusion establishes installed versions.

The authorized demo reached sign-in only. Installed versions, identifier persistence, scanner input, shipment quantities and packing outcomes were not runtime-verified. No new screenshots are included. Do not extend the scan-dialog findings to Receiving, Cycle Count, other apps or other Fulfillment scanning screens without checking their implementation.

## Before You Start

- Confirm the affected Fulfillment app version, connected OMS environment, product store and facility. Two stores can display the same product differently.
- Have permission to inspect settings and product data. Disabled controls are not an invitation to change settings through another tool.
- Identify the affected product and variant, the printed label's identifier type, and the expected workflow. Do not confuse a product ID, internal name and a barcode value just because two values happen to match.
- Keep operational identifiers and screenshots in approved support channels. Do not include customer/order data or private connection details in public reports.
- For any configuration change, obtain the product-store owner's approval and an isolated verification plan first. Reading this guide is not authorization to change shared configuration or pack an order.

## Find And Distinguish The Controls

Open the Fulfillment app navigation menu and select **Settings**. Confirm the product store and facility in the **OMS** section before inspecting the following cards.

| Card / Field | What It Controls | What It Does Not Establish |
| --- | --- | --- |
| **Product Identifier > Primary** | Preferred main product label | Which input a barcode scan matches |
| **Product Identifier > Secondary** | Additional display label; **None** is available | A second accepted barcode or fallback scan type |
| **Preview Product Identifier** | Sample product rendering for the display preferences | Every product's data completeness or successful scanning |
| **Force scan > Barcode Identifier** | Identifier type used by the reviewed **Scan order items** dialog | That every product has a value for that type |
| **Force scan > Require scan** | The product-store force-scan setting | A repair for missing or duplicate identifiers |

These settings are stored for the selected **product store**, not merely as a personal display preference. Primary and Secondary update `PRDT_IDEN_PREF`; Barcode Identifier updates `BARCODE_IDEN_PREF`; Require scan updates `FULFILL_FORCE_SCAN`.

**Selections save immediately.** In the reviewed source, changing Primary, Secondary or Barcode Identifier triggers a save request without a separate Save dialog. Require scan also writes when toggled. Do not click through options while investigating. The success message is **Product Store setting updated successfully.** The failure message is **Failed to update Product Store setting.** If the result is uncertain, read the setting again before retrying.

Display options combine built-in fields, such as Product ID, Internal Name and Title, with good-identification types returned by OMS. The barcode selector uses the returned good-identification types, not all display fields. An unavailable option can reflect configuration, permissions or a failed lookup; it does not by itself prove the product is missing.

## Diagnose A Display Mismatch Without Changing Data

1. Record the selected Primary and Secondary values and the active product store. Compare the same variant in the affected screen, not a parent product or another store.
2. Inspect whether that product has a value for the selected identifier type. A configured preference cannot manufacture missing product data.
3. Distinguish fallback text from the selected value. The settings preview falls back to the product ID when the primary value is missing. The reviewed **Scan order items** dialog falls back to the order item's product name for its main display label. These different labels do not establish that they are different products.
4. Compare the saved configuration with a fresh read after reopening Settings. Preserve the selected values and any failure message before suggesting a change. A locally displayed selection alone is not proof of persistence.
5. If the setting does not load or save, escalate with the installed frontend version, selected store, affected field, timestamp and sanitized error summary. Do not edit environment configuration, create identifiers or resync products as a speculative fix.

A later source change addresses missing default identifier settings and additional cached display fields. That change was merged after v4.3.0 and was not part of the latest published frontend release at this review. Do not describe it as deployed, recommend a blind upgrade, or assume it explains a specific incident. An administrator should compare the installed build with the relevant fix before choosing a remedy.

## Diagnose A Scan Mismatch

The following behavior applies specifically to **Scan order items** in the reviewed release:

1. The dialog considers the current order's items excluding those with a rejection reason. A barcode elsewhere in the catalog is not sufficient to match this shipment's list.
2. For each item, the app reads the configured **Barcode Identifier** value. If no value is available, it falls back to that product's **internal name**, not the Primary or Secondary display preference.
3. Matching uses the received value directly. The reviewed comparison does not trim whitespace or normalize case. Preserve leading zeros; compare the actual scanner input with the expected value rather than converting it to a number.
4. A matching, not-yet-checked item is marked checked. An already-matched item can produce **Product is already scanned:**; no matching item produces **Scanned item is not present within the shipment:**. Neither message alone proves an inventory discrepancy.
5. The dialog tracks checked order-item rows. It is not evidence that each unit of a multi-quantity row was individually scanned. Do not infer quantity-level acceptance from a checkmark or the **Scanned successfully.** message.

For read-only diagnosis, compare the expected identifier type and value, product/variant membership and current checked state. If input differs, investigate the label or scanner configuration with its owner. If multiple products share the same value, stop and involve the product-data owner rather than guessing which item was accepted.

Do not use live scanning or the dialog's bottom save/pack control as a diagnostic test. Once the dialog's checks are satisfied, the control continues into the packing confirmation flow; it does not merely save scan progress. Do not disable Require scan, reject items, change quantities, repack or reship to clear a barcode problem. Any approved acceptance test must use an isolated fixture and verify the resulting shipment and quantities separately.

## Verify An Approved Correction

After the authorized owner makes a scoped correction:

- Reopen Settings for the same store and verify the saved values. Check other affected users/devices as appropriate; this is shared store configuration.
- Confirm that the intended variant has the intended identifier and that fallback text is not concealing missing data.
- Use an approved isolated fixture to verify display, expected matching, nonmatching input, repeated input and any multi-quantity behavior required by the workflow.
- Treat packing and shipment results as separate acceptance checks. A saved setting or successful scan does not establish shipment completion.
- If a save fails or the result is unknown, preserve evidence and re-read before retrying. Restoring the previous value is another configuration change, not a guaranteed rollback of work already performed.

Remaining work includes authenticated installed-version inspection, isolated persistence and scan acceptance, cross-app identifier behavior, multi-quantity handling and safe verification of later fixes. This guide supplies a diagnostic boundary, not a claim that those checks passed.
