---
title: See why an order moved and where stock is held
slug: product-updates/2026-10/routing-and-inventory-visibility
contentType: product-update
month: 2026-10
status: draft
coverageThrough: 2026-10-23
metaDescription: Connect order routing history, stock warnings, and routing diagnostics to investigate fulfillment decisions.
tagNames: [Product Update]
key: product-update:2026-10:routing-and-inventory-visibility
---

<!-- markdownlint-configure-file { "MD025": { "front_matter_title": "" } } -->

# See why an order moved and where stock is held

HotWax Commerce adds two complementary views of routing: the path of an individual order and the current inventory constraints across a store network.

**Availability:** Order Manager's Routing tab and facility-picker changes are listed in **v1.5.0**, published 15 October. The Order Routing dashboard merged on 19 October, after that app's **v2.5.0** release, and requires compatible OMS data documents. The dashboard is not established as part of v2.5.0.

## Follow an order's routing history

Open an order's **Routing** tab to see its ship groups move through locations. The graph labels moves such as allocation, rejection, parking, and return to the brokering queue. It identifies the rule, user, or system recorded for the move. Repeated routing attempts are grouped so the path stays readable.

Item cards connect that history to inventory details. A short-stock warning offers the existing Reject item and Move item actions. The facility picker pins the current location and keeps Save disabled until a different location is selected. It also warns when no facility in the product store can cover the selection.

```mermaid
%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#E8F0FE", "primaryTextColor": "#17324D", "primaryBorderColor": "#4275AF", "lineColor": "#52677B", "secondaryColor": "#E5F4ED", "tertiaryColor": "#FFF4DC", "fontFamily": "Arial", "fontSize": "16px"}, "flowchart": {"curve": "basis", "htmlLabels": false}}}%%
flowchart TD
  A[Order needs investigation] --> B[Open the Routing tab]
  B --> C[Follow recorded moves and their reasons]
  C --> D[Inspect the item and location inventory]
  D --> E{Is the item short?}
  E -->|No| F[Continue monitoring fulfillment]
  E -->|Yes| G[Review eligible facilities]
  G --> H{Does a different facility cover it?}
  H -->|Yes| I[Choose a location and review Move item]
  H -->|No| J[Review rejection or another operational action]
  classDef inspect fill:#FFF4DC,stroke:#AA7B24,color:#4B3715;
  class D,G,J inspect;
```

This is an investigation path; viewing the graph does not move an order. [Open the SVG diagram](../assets/routing-visibility.svg).

## Explain network constraints

The new Order Routing dashboard combines weekly routing activity, store-shipped units, current safety stock, and shipping exclusions. Analysts can drill from a routing rule into its editor and see stores holding the most safety stock.

Weekly charts use complete Monday-to-Sunday weeks in UTC. Safety stock is a current snapshot, not reconstructed weekly history. Where the stored buffer cannot be attributed to a matching rule, the dashboard labels it **Unattributed**. Pickup and point-of-sale orders are excluded from the weekly routing analysis.

The existing v2.5.0 release separately adds carrier postal-code filters and sorting to inventory rules.

Sources: [Order Manager #587](https://github.com/hotwax/order-manager/pull/587), [facility picker #589](https://github.com/hotwax/order-manager/pull/589), [v1.5.0](https://github.com/hotwax/order-manager/releases/tag/v1.5.0), [Order Routing #584](https://github.com/hotwax/order-routing/pull/584), and [v2.5.0](https://github.com/hotwax/order-routing/releases/tag/v2.5.0).

[October overview](../README.md) · [All release notes](../release-notes.md) · [Source ledger](../source-ledger.md)
