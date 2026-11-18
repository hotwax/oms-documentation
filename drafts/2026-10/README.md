# October 2026 product updates

**Draft editorial package, 1–31 October 2026, Asia/Kolkata. Reviewed November 4; Company deployment evidence is dated October 25.**

This package brings together October's product changes, release references, and diagrams for review. Start with the [release notes](release-notes.md) for the full digest or choose a feature story below. The digest follows the app sections and action headings used in the published August and September notes; detailed release evidence stays in the reviewer appendix.

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
  A --> I[Company app versions]
  classDef catalog fill:#E8F0FE,stroke:#4275AF,color:#17324D;
  classDef operations fill:#E5F4ED,stroke:#2D8060,color:#173B2C;
  classDef preview fill:#F1EBFA,stroke:#7C5AA7,color:#392650;
  class B,C catalog;
  class D,E,F,G,I operations;
  class H preview;
```

Eight feature stories, with availability stated separately for each. [Open the SVG diagram](assets/october-overview.svg).

## Feature stories

| Update | Reader benefit | Availability summary |
| --- | --- | --- |
| [Company app version management](product-updates/company-app-version-management.md) | Control rollout timing, review releases, and return to a hosted earlier version. | Company v2.9.0 deployment verified October 25; refresh adoption requires AccxUI v1.12.0 in the running app. |
| [Product calendar and catalog control](product-updates/product-calendar-and-catalog-control.md) | Find products across the store and edit only the intended dates. | Merged; app release not established. |
| [Routing and inventory visibility](product-updates/routing-and-inventory-visibility.md) | Connect an order's path with inventory constraints. | Order Manager v1.5.0; network dashboard merged later in a separate app. |
| [Store receiving and counting](product-updates/store-receiving-and-counting.md) | Follow scans through saved receipts, count progress, and packed transfers. | Inventory Count v5.3.0; Packed in Fulfillment v4.2.3/v4.3.1; cancellation separately v4.2.4. Receiving work remains merged. |
| [Shopify transfer and fulfillment control](product-updates/shopify-transfer-and-fulfillment-control.md) | Investigate partial sync and understand recovery. | Company and connector releases plus later merged fixes. |
| [Returns and NetSuite reconciliation](product-updates/returns-and-netsuite-reconciliation.md) | Connect returned goods with ERP receipts and settlement. | Release-listed components with setup prerequisites. |
| [Job Manager operations](product-updates/job-manager-operations.md) | Compare Shopify processing, search run history, and build data documents. | Job Manager v3.5.0; System Tasks needs supported OMS 6.5.0 or later. Instance-wide history supports All and Failed. |
| [Pre-order workspace preview](product-updates/preorder-workspace-preview.md) | Review the new demand-to-supply workspace and import contract. | Preview; backend migration and hosted acceptance remain open. |

## Included assets

- One consolidated release-note draft and eight feature articles with titles, descriptions, stable slugs, and content keys.
- Eight editable Mermaid diagrams, embedded in Markdown, with matching `.mmd` sources and SVG exports under `assets/`. Text explains each diagram for readers using assistive technology.
- A [source ledger](source-ledger.md) with PR merge dates, immutable merge commits, release evidence, the version-reference table, known limits, and editorial exclusions.
- A [publication manifest](publish-manifest.json) with file paths and SHA-256 content hashes. Its draft metadata is descriptive, not an execution guard for the repository publisher.

## Scope and review

This is a curated product digest rather than a list of every engineering commit. It excludes customer incident details, tenant record IDs, credentials, security-fix mechanics, internal tooling, and duplicate maintenance backports. Raw investigation exports remain outside this public repository.

The collection used GitHub PRs, changed-file patches, release records, and targeted ancestry comparisons. It now covers the full October source window, including a paginated collection of the remaining 340 merged PRs and a month-end release refresh. This documentation revision did not rerun application QA or certify deployments. The Company evidence separately uses October 25 deployed UI and hosting verification, recorded in the source ledger. Private component links are retained for reviewers with access and should be replaced with approved public documentation before a customer-facing publication if needed.

The practical Company guide merged in [PR #1949](https://github.com/hotwax/oms-documentation/pull/1949) on October 25. Article links now open the guide on the documentation branch. Its public documentation URL could not be verified during this revision because the host returned HTTP 403; replace GitHub guide links with the verified live URL before customer-facing publication.

Before publication, confirm the app/backend combinations available to readers, resolve any claims still labeled Preview, and check the target publisher's Mermaid support. SVGs provide a portable diagram alternative. Full-month source coverage does not mean every feature has completed acceptance. Publication to a CMS or website is a separate action from this draft PR.
