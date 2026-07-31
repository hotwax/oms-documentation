# Client Implementation Repo Reference

Reference for creating a new client implementation guide repo from call transcripts. Use this as a checklist and set of templates so an AI agent can draft consistent docs without manual typing.

## GitHub-only implementation drafts

- [JM Agency implementation overview](../jm-agency/README.md) — Internal
  draft; not included in GitBook navigation.

## Standard Layout

Prefer lowercase directory names, one folder per client.

```
client-slug/
  README.md                # Introduction (business model + retail domain)
  whyHotWax.md             # Business objectives and solutions
  SUMMARY.md               # Table of contents
  GLOSSARY.md              # Optional shared terms
  flows/                   # Core data and process flows
    products/README.md
    inventory/README.md
    sales-orders/README.md
    brokering/README.md
    returns/README.md
    transfer-orders/README.md
    product-store/README.md   # Platform-specific settings, optional
    go-live.md                # Launch readiness, optional
```

## Definition of Done (repo acceptance criteria)

Before considering a client repo “complete”, verify:

- `README.md` exists and only contains: intro + scope + navigation links (no deep workflow details).
- `SUMMARY.md` exists and links to every page you created.
- `whyHotWax.md` exists (even if it’s short for early discovery).
- For every in-scope workflow, there is a dedicated flow folder with a `README.md` under `flows/`.
- Large tables and reference lists (mappings, enums, reason codes) are split into dedicated pages, not embedded in a long README.

If a project is Phase 1 / limited scope, keep the full structure but mark non-applicable flows as “Out of scope for Phase X” (either by omitting them from `SUMMARY.md` or by creating a short stub page and clearly labeling it).

## Front Matter (GitBook)

Add YAML at the top when visuals or metadata matter. Omit fields if unknown.

```
---
description: Short, user-facing summary for the page
cover: .gitbook/assets/cover-file.jpeg
coverY: 0
layout:
  cover:
    visible: true
    size: full
noIndex: true              # Hide navigation pages (e.g., flow indexes)
---
```

## Core Pages

- `README.md` (Introduction)
  - Business Model: How products are sourced; sales channels (stores, ecom, marketplaces); fulfillment nodes.
  - Retail Domain: Category focus, target customer, positioning.
  - Operations Scale: Store count, DCs/3PLs, revenue/team size if stated.
  - Scope and navigation: 1–2 paragraphs describing what’s in/out, then link to relevant flow pages.
- `whyHotWax.md`
  - Omnichannel objectives.
  - Pain points/failed past initiatives.
  - How HotWax reconciles each challenge (feature or process with brief outcome).
- `SUMMARY.md`
  - Flat bullet list linking every page; mirrors folder structure so GitBook builds navigation.
- `GLOSSARY.md` (optional)
  - Canonical definitions for internal terms that appear in flows.

## Flow Pages (per data/process object)

Each flow page should be skimmable for lifecycle, mappings, and edge cases derived from the transcript.

- Standard sections:
  - Scope: What the flow covers and the systems involved.
  - Identifiers: Primary keys used (e.g., Shopify Product SKU, Order Name).
  - Sources/Destinations: Where data originates and lands.
  - Mappings: Fields that must align between systems; include enumerations (departments, payment/shipping methods, promo types).
  - Automations & Timing: Schedules/triggers, sync cadence, SLAs.
  - Exceptions: Edge cases, manual steps, retries, ownership.
  - Links: Pointers to existing SOPs or integration docs.

### When to create additional pages (beyond `README.md` in a flow)

Use the flow `README.md` as an index + lifecycle summary, and create additional pages when a topic becomes “reference material” that people will look up, copy, or maintain.

Create a new page when any of these are true:

- Large or changing mappings: tables/enumerations that will evolve (shipping methods, payment methods, departments, price levels).
- Separate ownership: the content is maintained by a different team (finance mappings, operations SOPs, agency-managed storefront behavior).
- Complex rules or edge cases: the topic has branching logic that would make the main README hard to scan (discount behavior, header location, exchanges).
- Repeatable SOP: there are step-by-step setup instructions someone will run again (store setup, product store settings, POS configuration).
- Needs “single source of truth”: the topic is referenced by multiple other pages (gift cards, cancellations, order types).

Keep each page atomic (one concept per page). If a section exceeds ~1–2 screens or contains a table that’s likely to change, split it.

When you add pages:

- Link them from the flow `README.md` as a short bullet list (“What’s in this section”).
- Add them to the client’s `SUMMARY.md` so they appear in navigation.

### Sales Orders: when to split into additional pages (with examples)

Create separate pages under `flows/sales-orders/` when the transcript includes any of these topics:

- Shipping methods (`shipping-methods.md`)
  - Use when there’s a Shopify → HotWax → ERP mapping table, carrier/service-code specifics, fallback/default behavior, or client-owned updates.
  - Example: “We rename shipping methods during promos and need to update mappings ourselves.”
- Payment methods (`payment-methods.md`)
  - Use when payment types differ by channel (POS vs ecom), need ERP-specific internal IDs, or there’s a default mapping.
  - Example: “If the payment type is unknown, post it as Shopify Payment in NetSuite.”
- Promotions and discounts (`promotions-and-discounts.md`)
  - Use when discount representation differs across systems (header vs line discounts), and the implementation standardizes on one approach.
  - Example: “Shopify prorates cart discounts, so everything is sent to NetSuite as item-level discount lines.”
- Price level / item price (`price-level.md` or `item-price.md`)
  - Use when ERP price levels, custom pricing, or channel-specific price treatment affects posting or reporting.
  - Example: “POS uses retail price level, ecom uses web price level, and employee orders use a separate level.”
- Departments / classes / subsidiaries (`departments.md`, `subsidiaries.md`)
  - Use when finance segmentation is required for ERP posting and has a defined mapping list.
  - Example: “POS orders must post to a different department than web orders.”
- Header location (`header-location.md`)
  - Use when a single “order-level location” is derived from line-level allocation or channel rules and is required for ERP posting/reporting.
  - Example: “If any item ships from a store, set header location to the fulfilling store; otherwise use the DC.”
- Order identifiers and reference IDs (`reference-ids.md` or `shopify-order-name.md`)
  - Use when order name/ID formatting matters for ERP posting, customer support, or reconciliation.
  - Example: “Use Shopify Order Name as the external reference across all systems.”
- Order types (`order-types.md`)
  - Use when the client has multiple commercial flows (pre-order vs in-stock, custom orders, repairs) that affect routing, allocation, or posting.
  - Example: “Pre-orders shouldn’t allocate until the PO is received.”
- POS orders and blanket customer (`pos-orders.md` or `blanket-customer.md`)
  - Use when POS orders have distinct handling: customer records, taxes, returns/exchanges linkage, or posting as cash sale.
  - Example: “All store walk-in orders use a blanket customer unless an email is captured.”
- Gift cards (`gift-cards.md`)
  - Use when gift card purchase and redemption impacts payment method mapping, returns/exchanges, or ERP posting.
  - Example: “Redemptions come through as a separate payment type that must map to a NetSuite Gift Card method.”
- Billing/shipping address rules (`billing-address.md`)
  - Use when address requirements differ by channel or there are known gaps (missing billing address, international formatting).
  - Example: “Shopify sometimes omits billing address for Shop Pay; use shipping as fallback.”
- Sales channels / account source (`sales-channels.md` or `account-source.md`)
  - Use when downstream systems require channel attribution and there’s a controlled mapping list.
  - Example: “Marketplace orders must post under a different sales channel for reporting.”
- Cancellations and edits (`order-cancellations.md`)
  - Use when cancellation sources vary (Shopify vs ERP vs OMS) or partial cancellations have special handling.
  - Example: “If an order is already allocated, cancel requires reallocation and inventory release.”
- Exchanges (`exchange-orders.md`)
  - Use when exchanges are their own lifecycle (new order created vs original adjusted), including financial treatment and inventory movement.
  - Example: “Exchanges are created as a new order linked to the original for reporting.”
- Reporting (`reports.md`)
  - Use when stakeholders rely on specific OMS/ERP reports for reconciliation, SLA tracking, or store performance.

## Common mistakes to prevent (agent guardrails)

Use these as hard constraints for AI-generated drafts:

- Don’t write everything into a single `README.md`. The client `README.md` is not the implementation document; it’s the entry point.
- Don’t hide workflows inside “Key Workflows” sections in `README.md`. Create `flows/<flow>/README.md` pages and put workflow details there.
- Don’t forget `SUMMARY.md`. If there is no `SUMMARY.md`, the repo is incomplete.
- Don’t mix “overview” and “reference tables” on the same page. Put tables/enums into their own files and link them.
- Don’t invent flows. If transcripts don’t mention a flow, either omit it or create a stub labeled “Out of scope” and list what would be needed to complete it.

## Reprompt snippet (for generating a new client repo from transcripts)

Paste this into your agent prompt to enforce structure:

```
Create or update a client folder using the standard multi-file structure.

Hard requirements:
1) Create `SUMMARY.md` and include links to every page you create.
2) Keep `README.md` limited to: Introduction, Scope, and links to flow pages (no detailed workflows).
3) Create `whyHotWax.md`.
4) For each in-scope workflow mentioned in transcripts, create a dedicated folder under `flows/` with a `README.md`.
5) If you include mappings/enumerations/tables, put each table in its own page (e.g., `shipping-methods.md`) and link it from the flow `README.md`.

Deliverable format:
- First output the target file tree.
- Then output each file’s contents under a clear filename heading.
```

- Products (`flows/products/README.md`)
  - Product identifiers, variants/bundles, attributes needed for routing or presentation.
  - Setup SOPs (from gorjana style) and any service/kit rules.

- Inventory (`flows/inventory/README.md`)
  - Inventory sources (DC, stores, 3PL), safety stock logic, kit/assembly computation.
  - Receiving and cycle count behaviors; device/scanner usage if mentioned.

- Sales Orders (`flows/sales-orders/README.md`)
  - Order sources (POS, ecom, marketplaces), payment methods, shipping methods, promo handling.
  - Header location logic, price level, gift cards, exchange/returns linkage.

- Brokering (`flows/brokering/README.md`)
  - Routing objectives (nearby ship, reduce splits, prioritize product types).
  - Allocation rules, facilities eligible, fallback/reallocation flows.

- Returns (`flows/returns/README.md`)
  - Return reasons, dispositions, refund/exchange policies, happiness guarantees.

- Transfer Orders (`flows/transfer-orders/README.md`)
  - Creation triggers, over/under receiving rules, fulfillment and receiving steps.

- Product Store / Platform Settings (`flows/product-store/README.md`)
  - Client-specific platform toggles that must be set before syncs (e.g., product identifier selection).

- Go Live (`flows/go-live.md`)
  - Cutover checklist, data backfill steps, blackout windows, owners.

## Data Architecture Page

Add a page (e.g., `flows/data-architecture.md`) that summarizes lifecycle for: Products, Inventory, Sales Orders (warehouse/ship-from-store/pickup), Purchase Orders, and Transfer Orders. Focus on origin → processing → destination; avoid API/job specifics unless critical.

## Transcript-to-Doc Workflow

1. Capture entities: store counts, DCs/3PLs, channels, key identifiers, platform names, and any percentages/SLAs quoted.
2. Map pain points to solutions: For every challenge stated, attach the HotWax capability or process that addresses it.
3. List enumerations: departments, payment/shipping methods, promo types, facilities, order types; place them under the relevant flow.
4. Extract edge cases: manual reviews, reallocation rules, special product handling (repairs, custom orders).
5. Note ownership: who executes (HotWax, client IT, agency) for fulfillment, pickup, integrations, and training.
6. Write in the requested tone: professional, concise, functional; avoid metaphors and unnecessary jargon.

## Ready-to-Use Templates

**Introduction (`README.md`)**
```
# Introduction

## Business Model
<from transcript: sourcing, channels, fulfillment nodes>

## Retail Domain
<category focus, target market, positioning>

## Operations Scale
<store count, DCs/3PLs, revenue/team details if available>
```

**Why HotWax (`whyHotWax.md`)**
```
# Why HotWax Commerce

## Objectives
- <omnichannel goal 1>
- <omnichannel goal 2>

## Challenges
- <pain point 1 + impact>
- <pain point 2 + impact>

## Solutions
- <HotWax capability -> challenge resolved, measurable outcome if stated>
```

**Flow Page**
```
# <Flow Name>

## Scope
<systems and process covered>

## Identifiers
- <primary keys and formats>

## Sources and Destinations
- Source: <system> -> Destination: <system> (<trigger/timing>)

## Mappings
- <field or enumeration mapping>

## Automations and Timing
- <schedules, SLAs, retry logic>

## Exceptions
- <edge cases and manual steps>

## Links
- <integration or SOP references>
```
