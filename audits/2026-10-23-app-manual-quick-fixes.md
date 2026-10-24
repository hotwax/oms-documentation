# App manual gap scan — 23 October 2026

## Scope

Scanned 274 Markdown files on publishing base `56e456860f156e6d262b02cbb3d62ac9b0bf327c`: 55 Store Operations, 122 Retail Operations, and 97 System Admin files. Counts include each book's `SUMMARY.md`. The scan checked relative Markdown and HTML link targets, short or empty pages, and inclusion in book navigation. Targeted content review covered the findings below and their surrounding guides; this is not a feature-by-feature certification of every app manual.

## Fixes

| Gap | Change |
| --- | --- |
| Six linked landing pages contain only front matter or a heading | Add task-based entry points for BOPIS, inventory, pre-orders, OMS orders, user access, and Job Workflows. Link to the existing procedures and explain how to verify the outcome. |
| Fulfillment troubleshooting contains only an introduction | Add routes to access, order visibility, shipping labels, rejection, and language guidance. |
| Scanner setup exists but is absent from navigation and the counting workflow | Add it to the Cycle Count navigation and link it from the session guide. Explain the Enter suffix required to record a barcode and how to distinguish typed text from a recorded scan. |
| Picking permissions claim that no permission is required, then list an access permission | Document `PICKING_APP_VIEW`, the access-error message, and the existing access and picker-setup procedures. Add the page to User Permissions navigation. |
| Inventory logs confuse a delta with the final balance | Explain that releasing one reserved unit increases ATP by 1 and leaves QOH unchanged. Give a 9-to-10 ATP example and distinguish independent events. Remove the universal daily ERP import schedule claim. |
| Two Retail Operations navigation labels are misspelled | Correct Product Sync Issues and Inventory Import Methods. |

## Source checks

| Behavior | Evidence |
| --- | --- |
| Inventory Count processes a keyboard scan on Enter | [SessionCountDetail.vue at 65989d3](https://github.com/hotwax/inventory-count/blob/65989d34035e1a2dbea66992c64a2fb2d47df91c/src/views/SessionCountDetail.vue#L26): `@keyup.enter="handleScan"`; scanner button labels at lines 916–920. The inspected checkout was clean. |
| Socket Mobile pairing uses Basic Keyboard Mode for active text fields | [Socket Mobile S700/S720/S730/S740 manual](https://cdn.socketmobile.com/sitefinity-assets/docs/default-source/downloads/user-guides/s700-s720-s730-s740-user-guide.pdf?sfvrsn=32cbcfcb_12), iOS Basic Keyboard setup and pairing-reset instructions. No physical scanner test was performed. |
| Picking app access is configured as PICKING_APP_VIEW | [.env.example at 350c5ce](https://github.com/hotwax/picking/blob/350c5ce9483f5a75ae23bf866837d63d468fc8eb/.env.example), [Rules.ts](https://github.com/hotwax/picking/blob/350c5ce9483f5a75ae23bf866837d63d468fc8eb/src/authorization/Rules.ts), and [user login action](https://github.com/hotwax/picking/blob/350c5ce9483f5a75ae23bf866837d63d468fc8eb/src/store/modules/user/actions.ts#L25). The login check is conditional on the configured permission ID. |
| Reservation cancellation records an ATP increase | [OrderReservationServices.xml at 51153d5](https://github.com/hotwax/oms/blob/51153d52db91c6ebaccafcb6534eb9c3d91593e1/service/co/hotwax/oms/impl/OrderReservationServices.xml#L277) sets the ATP difference to the cancelled quantity. [InventoryServices.xml](https://github.com/hotwax/oms/blob/51153d52db91c6ebaccafcb6534eb9c3d91593e1/service/co/hotwax/oms/product/InventoryServices.xml#L45) defaults an omitted QOH difference to zero and adds differences to the existing balances. |

Landing-page links reuse the existing canonical procedures. Source pins establish the behavior documented here; they do not establish a customer's deployed version.

## Remaining work

| Priority | Gap | Recommended follow-through |
| --- | --- | --- |
| High | Older order-import troubleshooting mixes EXIM, fixed retry intervals, JSON editing, and a `scheduleNow=false` claim about sequential jobs. See `error-in-order-json.md`, `shopify-order-import-failure.md`, and `duplicate-orders.md` under order troubleshooting. | Audit these procedures against the connector and Data Manager configuration, then consolidate around the Company Order Sync and Job Manager recovery guides. Preserve scoped recovery and duplicate-order verification; do not copy generic retry or cancellation advice into the app manual. |
| Medium | The Job Parameters table presents shared names and defaults as a universal configuration reference. | Verify each field against its service definition and identify which job uses it. The Job Workflows landing page now directs readers to the selected job's own parameter definitions. |
| Medium | Fourteen content pages remain outside book navigation after the two verified additions. | Review and consolidate them before publishing. They include six older BOPIS pages, three report pages, the Picking guide, rejection-reason configuration, older transfer creation and transfer overview guides, and Ship to Store. A missing navigation entry alone does not prove a page should be exposed. |
| Medium | The hidden Picking workflow guide includes a Figma-named illustration and has no place in navigation. | Compare the workflow with the current app, capture its actual screens, and then decide its location in Store Operations. |

Eight additional pages outside navigation are intentional Job Manager compatibility pages that link to replacement guides. Keep those routes available without restoring them to the sidebar. The initial 24 files absent from navigation therefore comprise two pages fixed here, eight compatibility pages, and fourteen content candidates requiring review.

## Work already in open PRs

Checked the open documentation PRs before making these changes. Related work is already covered by [Order Routing dashboard #1926](https://github.com/hotwax/oms-documentation/pull/1926), [Products screenshots #1927](https://github.com/hotwax/oms-documentation/pull/1927), [Shopify integration guides #1946](https://github.com/hotwax/oms-documentation/pull/1946), and [NetSuite integration guides #1945](https://github.com/hotwax/oms-documentation/pull/1945). Their presence is not evidence that they are published.

## Validation

* Before: 869 relative link targets checked, none missing; six empty landing pages.
* After: 923 relative link targets checked, none missing; no empty landing pages by the same scan criteria.
* All five explicit section links in the changed manuals resolve to headings in their target files.
* Changed-file Markdownlint and `git diff --check` pass.
* Link checking excludes external HTTP targets and absolute site routes. GitBook preview checks are recorded with the PR checks.

The change is documentation only. Application tests and hardware pairing tests were not run.
