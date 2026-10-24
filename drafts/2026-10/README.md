# October 2026 product updates

**Draft editorial package · 1–23 October 2026 · Asia/Kolkata**

This package brings together October's product changes, release references, and diagrams for review. Start with the [release notes](release-notes.md) for the full digest or choose a feature story below.

```mermaid
%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#E8F0FE", "primaryTextColor": "#17324D", "primaryBorderColor": "#4275AF", "lineColor": "#52677B", "secondaryColor": "#E5F4ED", "tertiaryColor": "#FFF4DC", "fontFamily": "Arial", "fontSize": "16px"}, "flowchart": {"curve": "basis", "htmlLabels": false}}}%%
flowchart LR
  A[October product updates] --> B[Catalog and product dates]
  A --> C[Routing and inventory visibility]
  A --> D[Store receiving and counts]
  A --> E[Shopify sync control]
  A --> F[Returns and NetSuite]
  A --> G[Job Manager operations]
  A --> H[Pre-order workspace preview]
  classDef catalog fill:#E8F0FE,stroke:#4275AF,color:#17324D;
  classDef operations fill:#E5F4ED,stroke:#2D8060,color:#173B2C;
  classDef preview fill:#F1EBFA,stroke:#7C5AA7,color:#392650;
  class B,C catalog;
  class D,E,F,G operations;
  class H preview;
```

Seven feature stories, with availability stated separately for each. [Open the SVG diagram](assets/october-overview.svg).

## Feature stories

| Update | Reader benefit | Availability summary |
| --- | --- | --- |
| [Product calendar and catalog control](product-updates/product-calendar-and-catalog-control.md) | Find products across the store and edit only the intended dates. | Merged; app release not established. |
| [Routing and inventory visibility](product-updates/routing-and-inventory-visibility.md) | Connect an order's path with inventory constraints. | Order Manager v1.5.0; network dashboard merged later in a separate app. |
| [Store receiving and counting](product-updates/store-receiving-and-counting.md) | Follow scans through saved receipts, count progress, and packed transfers. | Mixed: merged work plus Fulfillment v4.2 maintenance releases. |
| [Shopify transfer and fulfillment control](product-updates/shopify-transfer-and-fulfillment-control.md) | Investigate partial sync and understand recovery. | Company and connector releases plus later merged fixes. |
| [Returns and NetSuite reconciliation](product-updates/returns-and-netsuite-reconciliation.md) | Connect returned goods with ERP receipts and settlement. | Release-listed components with setup prerequisites. |
| [Job Manager operations](product-updates/job-manager-operations.md) | Compare Shopify completion with HotWax consumption. | Merged; System Tasks needs supported OMS 6.5.0 or later. |
| [Pre-order workspace preview](product-updates/preorder-workspace-preview.md) | Review the new demand-to-supply workspace and import contract. | Preview; backend migration and hosted acceptance remain open. |

## Included assets

- One consolidated release-note draft and seven feature articles with titles, descriptions, stable slugs, and content keys.
- Eight editable Mermaid diagrams, embedded in Markdown, with matching `.mmd` sources and SVG exports under `assets/`. Text explains each diagram for readers using assistive technology.
- A [source ledger](source-ledger.md) with PR merge dates, immutable merge commits, release evidence, known limits, and editorial exclusions.
- A [publication manifest](publish-manifest.json) with file paths and SHA-256 content hashes. Its draft metadata is descriptive, not an execution guard for the repository publisher.

## Scope and review

This is a curated product digest rather than a list of every engineering commit. It excludes customer incident details, tenant record IDs, credentials, security-fix mechanics, internal tooling, and duplicate maintenance backports. Raw investigation exports remain outside this public repository.

The collection used GitHub PRs, changed-file patches, release records, and targeted ancestry comparisons. Product behavior is grounded in those sources; this documentation task did not rerun application QA or certify deployments. Private component links are retained for reviewers with access and should be replaced with approved public documentation before a customer-facing publication if needed.

Before publishing the final October edition, include 24–31 October changes, refresh release and acceptance status, confirm which app/backend combinations are available to readers, and check the target publisher's Mermaid support. SVGs provide a portable diagram alternative. Publication to a CMS or website is a separate action from this draft PR.
