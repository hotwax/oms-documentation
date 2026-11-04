---
description: >-
  Diagnose missing packing-slip PDFs and compare customer-letter amounts without
  changing orders, payments, shipments, or print templates.
---

# Packing Slip And Customer Letter Troubleshooting

Use this guide when a packing slip will not open, contains unexpected items, or shows amounts that differ from an order or payment record. Start with the existing document and shipment. Do not repack or ship an order just to reproduce a print problem.

## Version And Verification Scope

This procedure is **source-verified** against **Fulfillment App v4.3.0** and **Poorti v3.5.1**. The reviewed print action is labeled **Print Customer Letter**. Labels, access and configured documents can differ in other versions.

Maarg **v6.5.2**, published October 21, 2026, includes Poorti v3.5.1 in its production component set. The Fulfillment App is a separate frontend release. A published release or distribution manifest does not establish either installed version.

A read-only hosted-demo check on October 22 reached sign-in only. Installed versions, an actual PDF, live template contents and comparison outcomes remain unverified. No packing, shipping, printing, settings changes or operational writes were performed for this guide. No screenshot is presented as runtime evidence.

## Before You Start

Have:

- Read access to the correct store/facility and order in the Fulfillment App.
- The existing affected document and its generation time, if available.
- Authorized access to the corresponding order and payment information, or an owner who can provide a bounded comparison.
- An administrator who can identify the installed versions and effective print template without changing it.

Keep order/customer identifiers, addresses, payment details and raw documents in your approved private support channel. Use synthetic or redacted examples in public reports. Do not open an unrelated order or expose a full customer record to obtain an example.

## Find And Open The Existing Document

1. Open the **Fulfillment App** and confirm the selected facility.
2. Go to **Completed** and locate the existing order. Confirm its identity and shipment/package scope before comparing any figures.
3. Use **Print Customer Letter** on the completed order, or open its completed order detail and use the same action. The reviewed desktop detail page places it near **Ship order** and **Unpack**. Do not select those other actions.
4. The app requests a packing-slip PDF for the selected shipment and opens it in a new browser tab. A shipment can have multiple package pages; inspect all relevant pages.
5. Compare the newly generated document with the original. Record which document and generation time each observation refers to. A newly generated PDF is not proof of what was printed previously.

If the order is not available in **Completed**, do not change its state to make the action appear. Ask the authorized support owner to locate the existing shipment and approved document route.

### Understand The Controls And Messages

| Control Or Result | Meaning And Safe Next Step |
| --- | --- |
| **Print Customer Letter** | The reviewed action requests the PDF; it does not invoke packing, shipping or unpacking |
| Disabled print action | The reviewed UI disables it when shipment or package information is missing. Inspect the known shipment with the support owner; do not create a package as a diagnostic shortcut |
| **Unable to open as browser is blocking pop-ups.** | The PDF-opening step failed. Check the browser's popup indication and your organization's permitted site-specific popup setting; do not disable browser security globally |
| **Failed to print packing slip** | The request failed or the app rejected its result. Record the time, visible message and affected scope. It does not identify the backend cause |
| PDF opens but expected items or amounts are absent | Continue with scope and template checks below. This is different from a popup or request failure |

A visible PDF does not establish that its contents are correct. A print failure does not prove that an order, payment or shipment failed.

## Establish What The Document Is Designed To Show

The reviewed **standard Poorti v3.5.1 packing-slip template** shows package contents, product identifiers/names, quantities, shipping method/address, weight and an optional gift message. It **does not render item prices, discounts, tax, shipping charges or monetary totals**.

This applies to both the component template and its database-resource seed. The print screen normally renders a database-held template and supports an override. The installed database resource can differ from the tagged seed; a source file alone cannot establish the effective live template.

If your document includes monetary amounts:

1. Ask the authorized administrator to identify the effective template and its owner/version.
2. Confirm whether each amount represents an order, shipment, package, item, invoice or payment.
3. Ask which fields and adjustments feed each printed label. A label such as “Total” does not establish its calculation.
4. Keep the actual template and internal resource locations private. Do not replace the template or copy another store's configuration during diagnosis.

Do not apply a single assumed pricing formula to every customer letter. A shipping method such as a carrier/service name is not evidence of a shipping charge.

## Compare Like-For-Like Information

Create a small private comparison using the existing slip, the authorized order view and the relevant payment view. Record the source and time for each value. If a field is absent or its meaning is unknown, mark it **not established**, rather than treating it as zero.

| Comparison | What To Establish |
| --- | --- |
| Document scope | Same order and correct shipment/package(s), including all relevant PDF pages |
| Product and quantity | Same product/variant and units. Standard template rows are package-scoped; a whole-order quantity is not automatically the expected package quantity |
| Currency | Same currency and formatting. Do not compare bare numbers without their currency |
| Item amount | Unit price versus extended line amount; original versus discounted amount; tax-inclusive versus tax-exclusive representation |
| Promotions and discounts | Item-level versus order-level adjustment, and whether the actual template includes or allocates it |
| Shipping | Customer shipping charge, any shipping discount, and the scope of the printed amount. Keep carrier/service description separate |
| Tax and other charges | Which amounts are included, excluded or separately labeled in the actual template |
| Order versus payment | Order total is not interchangeable with authorized, captured, refunded or net-paid amounts. Establish which payment state and time are being compared |
| Later changes | Whether the order, payment or template changed between the original print and the comparison |

The standard template's product rows follow shipment-package contents. An omitted item may therefore require a package-scope check before any pricing investigation. Do not assume that an entire order must appear on every package page.

### Avoid Premature Explanations

- If shipping is confirmed as zero, do not explain a higher printed amount as shipping allocation without separate evidence.
- If an amount resembles a pre-discount subtotal, treat that as a hypothesis. Verify the effective template's field selection and discount handling before naming a cause.
- A mismatch does not by itself prove an overcharge, payment loss, import failure or product defect.
- Conversely, a correct payment record does not make a misleading customer-facing document acceptable. Preserve the discrepancy for the document owner to investigate.

## Decide The Next Safe Step

| Finding | Next Step |
| --- | --- |
| Wrong shipment/package scope | Locate the corresponding existing document and compare again; do not change the shipment |
| Only a popup-opening issue | Use the permitted browser setting for the trusted app and retry only the document action, if authorized |
| Repeated PDF request failure | Escalate the time, visible message and narrow shipment scope. Authorized support can follow [System Messages](../../maarg/system-messages.md) or [Service Jobs](../../maarg/service-jobs.md) only if the actual print route supplies a related record; do not assume every synchronous PDF request creates one |
| Missing shipment/package information | Ask support to inspect the existing records. Use [Entity Inspection](../../maarg/entity-inspection.md) only with the required access and exact known keys, without editing |
| Monetary mismatch in a configured letter | Route to the template/application owner with the field-by-field comparison; ask for the intended calculation and verified correction proposal |
| Different behavior across stores | Check effective versions, templates and document scope separately. Do not assume one store's template represents every store |

Do not edit order prices or discounts, issue a refund, cancel/repack/unpack/ship an order, regenerate carrier labels, replay an import, or change a template to force agreement. Those are separate consequential actions requiring an approved scope and verification plan.

## Escalation And Acceptance Checklist

Share only what the authorized support owner needs through a private channel:

- Environment and installed app/backend versions, if verified.
- Affected store/facility and exact order/shipment/package references, kept private.
- Original and comparison generation times with timezone.
- Redacted excerpts showing the relevant labels, quantities and amounts.
- Currency and the meaning/source of each compared amount.
- Effective template identity/version, if verified, and whether a customization is involved.
- Visible error or the precise mismatch; what is still unknown.
- Confirmation that no operational state or payment was changed during diagnosis.

Before accepting a proposed template correction, agree on its scope and test it in an approved isolated environment. Cover applicable no-discount and promotional cases, zero and nonzero shipping, tax presentation, split shipments/multiple packages, and partial/refunded payment states. Verify both the intended document wording/calculation and that order, shipment and payment records remain unchanged. Do not call the issue resolved merely because a PDF opens.

See [Order Fulfillment](../../order-flow/order-fulfillment.md) for the ordinary pick/pack/ship workflow. This troubleshooting guide does not authorize those operational actions.
