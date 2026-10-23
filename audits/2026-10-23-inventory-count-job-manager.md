# Inventory Count and Job Manager arrived documentation audit

Snapshot date: **23 October 2026**. The source-system inventory contained **16 open Inventory Count PRs and 15 open Job Manager PRs**, including drafts and older proposals. Open does not mean selected for the next release.

Documentation base: `hotwax/oms-documentation`, `user-guides-pub`, commit `d691eacabb13a9cda499f734aa8e58ff24d6c89a`.

## Status refresh during preparation

The final source refresh found **15 open Inventory Count PRs and 13 open Job Manager PRs**. Three PRs in the initial inventory merged during this task; their head commits did not change:

| PR | Merged at UTC | Merge commit |
| --- | --- | --- |
| Inventory Count #1488 | 2026-10-23 15:29:58 | `79b5aee183f0560d99765ab6c0d01d5bf654e81f` |
| Job Manager #1125 | 2026-10-23 15:37:33 | `fad6e248d35c81ef2ec4c9c7aebd4eb7e5cb4361` |
| Job Manager #1123 | 2026-10-23 15:37:52 | `6b514d42b40a8735147f2d93e9e3d36ac823ca36` |

Merge status is confirmed by GitHub; deployment is not established by this audit. The coverage table retains all 31 PRs from the initial inventory.

## Prepared guides

- [Directed hand counting](../documents/store-operations/cycle-count/arrived-directed-hand-count.md)
- [Count administration and upload migration](../documents/retail-operations/inventory/cycle-count/arrived-count-administration.md)
- [Job Manager operations](../documents/system-admin/administration/job-manager/arrived-operations.md)
- [Data-document builder](../documents/system-admin/administration/job-manager/arrived-data-document-builder.md)

The guides are labeled Arrived and linked from the nearest existing manuals. The label reflects the requested editorial presentation; the dated source and deployment evidence remains recorded separately. Current released workflows remain available. No production execution, upload, approval, count submission, schedule change, merge, or deployment was performed.

## Source and screenshot method

PR metadata and complete diffs were read through authenticated GitHub access. Screens were rendered from detached worktrees at the exact PR heads below. Vue pages/components were not edited. A separate local Vite harness supplied synthetic products, jobs, files, users, API responses, and session state. Backend stores and transport boundaries were replaced with fixtures; a local-only connection policy prevented production API calls. Screenshots were captured through the in-app browser and visually inspected.

This demonstrates proposed UI and supports source-based instructions. It is not authenticated end-to-end QA, persistence proof, backend contract validation, integration compatibility approval, or release sign-off. The fixture wrapper supplies routing and omits the full app navigation shell. No merged combination of the independent PRs was fabricated.

The runtime reused Ionic/Vue dependencies and shared styles from local ACCXUI commit `44c1631b38a89db9973536ac56682e2b8f081514`. Synthetic service names beginning with `demo.` are not runnable configuration examples. The [capture manifest](2026-10-23-app-screenshot-manifest.json) records each image, exact source head, and SHA-256 hash.

## PR coverage

### Inventory Count

| PR | Exact head | Documentation disposition |
| --- | --- | --- |
| [#1488: Improve directed handcount with virtual lists and total quantity editing](https://github.com/hotwax/inventory-count/pull/1488) | `8a76b25990197507acbfd36b4cd7c9b9a8435517` | [Store guide](../documents/store-operations/cycle-count/arrived-directed-hand-count.md). Primary illustrated workflow: assigned products, editable totals, explicit zero, drafts, save/sync distinction. |
| [#1486: Refactor: Surface server errors in failure toasts and logs (hotwax/accxui#218)](https://github.com/hotwax/inventory-count/pull/1486) | `874b88591024a900e32f3046cd7ab108eae4f3c2` | [Store guide](../documents/store-operations/cycle-count/arrived-directed-hand-count.md). Specific server failure messages; no new navigation. |
| [#1483: Match count creation tag facets to countable variants](https://github.com/hotwax/inventory-count/pull/1483) | `e3f62006cb3501958b63cdb602250918bd7cbf39` | [Admin guide](../documents/retail-operations/inventory/cycle-count/arrived-count-administration.md). Countable-variant tag facets; separate tokenized tag-search issue remains outside scope. |
| [#1455: test(e2e): add cyclecount and transfer request automation scripts](https://github.com/hotwax/inventory-count/pull/1455) | `208dd73e415a6e6d28756a2d0024661e0fe19fc5` | Automation/test-only change; no operator instructions. |
| [#1444: fix: isolate variance data by facility](https://github.com/hotwax/inventory-count/pull/1444) | `64b33899ee418d1c6f9278af7c155510e5ae45b2` | [Store guide](../documents/store-operations/cycle-count/arrived-directed-hand-count.md). Facility-scoped variance state; source reviewed, no authenticated persistence test in this documentation task. |
| [#1438: Cycle count admin approval flow for the count created by store user](https://github.com/hotwax/inventory-count/pull/1438) | `7ce4406a411d13cf87cb62488c660e1eb1ead3f8` | [Admin guide](../documents/retail-operations/inventory/cycle-count/arrived-count-administration.md). Illustrated Draft approval; explicit INV_COUNT_APPROVAL and permission-dependent list behavior. |
| [#1437: Refactor/cyclecount e2e clean](https://github.com/hotwax/inventory-count/pull/1437) | `056dae06ca2dffebfd6982eabef8aa72e5510368` | E2E restructuring; no operator instructions. |
| [#1418: ⚡ Optimize background aggregation by eliminating N+1 queries](https://github.com/hotwax/inventory-count/pull/1418) | `5eb215c0a035546d681f3613c603c7d5d8005906` | Background aggregation optimization; no new operator action. |
| [#1408: Fixed: skip facility party api call for admin users](https://github.com/hotwax/inventory-count/pull/1408) | `46199434bc3ae73f4423fbdf51126f279542144d` | Skips unnecessary facility-party lookup for administrators; no new operator action. |
| [#1376: Improved:  Add direct item count input via alert in the session detail view and update localization.(#1318)](https://github.com/hotwax/inventory-count/pull/1376) | `4e2857184e275ebe8429141655dd158c210b33df` | [Store guide](../documents/store-operations/cycle-count/arrived-directed-hand-count.md). Alternative additive per-item count dialog; overlaps #1488. Kept separate, not combined with total-edit screenshots. |
| [#1367: Download error file](https://github.com/hotwax/inventory-count/pull/1367) | `691bccc66aed6cdd4cc51d9bd13c900604e728d6` | [Admin guide](../documents/retail-operations/inventory/cycle-count/arrived-count-administration.md). Error-file download for the older system-message flow; overlaps Data Manager migration #1327. |
| [#1335: Refactored Adapter API](https://github.com/hotwax/inventory-count/pull/1335) | `69026cb2db8e9f2d73d37c340c5a683f4ef4f33d` | Adapter/API restructuring. Do not invent a new end-user workflow; check integration compatibility when selecting the release. |
| [#1332: Merged Admin List and Detail Pages](https://github.com/hotwax/inventory-count/pull/1332) | `2cc669919083311bfb99aedc31ae8e75331f5f2b` | Older combined admin list/detail proposal. It reorganizes CycleCounts/CycleCountDetail and overlaps later navigation. Requires a selected release baseline before rewriting menu instructions. |
| [#1327: Upload Data Manager File for Cycle Count CSv](https://github.com/hotwax/inventory-count/pull/1327) | `8c316620e98cda87cf88949c6b1d52973c746016` | [Admin guide](../documents/retail-operations/inventory/cycle-count/arrived-count-administration.md). Illustrated Data Manager upload tracking, error files, pending-only cancellation request, recent-list limits. |
| [#1302: Implemented: support to highlist next and previous good scans(#1288)](https://github.com/hotwax/inventory-count/pull/1302) | `65c5e39c6a418ae2a5ad9b2b5d642dc46ba5fe15` | [Store guide](../documents/store-operations/cycle-count/arrived-directed-hand-count.md). Previous/next good-scan entries navigate to and briefly highlight the matching scan. |
| [#794: Added: Relogin embedded app user on token expiry and saved shopify app state in auth store(#793)](https://github.com/hotwax/inventory-count/pull/794) | `a20debef0cfc50d34cb9ee52e885360a4f0ac7fb` | Older embedded Shopify token-expiry relogin proposal from the legacy store architecture. Not represented as a current release instruction; reconcile with the chosen app baseline. |

### Job Manager

| PR | Exact head | Documentation disposition |
| --- | --- | --- |
| [#1127: Fixed: goToOms button to not be displayed in case of moqui only login](https://github.com/hotwax/job-manager/pull/1127) | `424f7d1e16e4f9ae2399193313483397f05fb615` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Hide Go to OMS for a Moqui-only login. |
| [#1125: Fix: Prevent Job filter clear button overlap](https://github.com/hotwax/job-manager/pull/1125) | `4ddd25a81901b9f254b20a59c99088f6e79d461d` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Long job-filter label truncation protects the clear control. |
| [#1123: Fix: Prevent invalid pagination in Service Job Run History (#1122)](https://github.com/hotwax/job-manager/pull/1123) | `3932a9ebaee4a61be1c1057e1fa72190526c7110` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Prevent invalid previous/next history-page requests. |
| [#1121: Fix: Surface server error messages in API failure toasts and logs (#218)](https://github.com/hotwax/job-manager/pull/1121) | `f8af0231785cc7c23606281ae297ff7df328fa54` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Surface server error details in failure notifications/logs. |
| [#1112: Data document builder: UX fixes, a page that loads only its own document, and conditions that run](https://github.com/hotwax/job-manager/pull/1112) | `57f85282470c5f6cf1679565d0206515da4af209` | [Builder guide](../documents/system-admin/administration/job-manager/arrived-data-document-builder.md). Illustrated metadata, unsaved/validation distinction, document loading, field picker, aliases, conditions, saved-definition preview. |
| [#1081: perf: lazy-load file history error payloads](https://github.com/hotwax/job-manager/pull/1081) | `ef9481bdab0d6fddbd3a41e67efb482b3d9acd0e` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). First-visit lazy Errors payload with cached result; dependent follow-up stack. |
| [#1079: perf: optimize dashboard projection logic and reactivity in Pipeline.vue](https://github.com/hotwax/job-manager/pull/1079) | `8bd36cce586bbe595d2f2481b77a51ed14175554` | Dashboard projection/reactivity refactor on #1071; no separate user procedure. |
| [#1078: Refactor JobDetail run history to use cancellation-safe composable](https://github.com/hotwax/job-manager/pull/1078) | `22dae286a5cd87173a974f67dd59ab643ff1a574` | Cancellation-safe run-history loading in #1071 stack; no separate user procedure. |
| [#1077: Refactor: Extract useVirtualWindow composable](https://github.com/hotwax/job-manager/pull/1077) | `f2231029ae0e95e269eb80f836cd49b0b1b5e1d9` | Extracts virtual-window logic in the follow-up stack; no separate user procedure. |
| [#1072: Improved: Used search job runs api to enhance the overall functionality of the Job Run History page.](https://github.com/hotwax/job-manager/pull/1072) | `73d959b0d67e6a476b8ed9b3bce4f3baae14592e` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Server-backed run search/filter totals/pagination; verify compatible endpoint when deploying alongside #1071. |
| [#1071: Improved: dashboard drill-downs, job detail parity, and removed obsolete bulk query chaining](https://github.com/hotwax/job-manager/pull/1071) | `ac998c8f0441f1da4327c1e2adfa7280c504c8e2` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Illustrated dashboard failure drill-downs, run identity, parameters, paused creation; removes obsolete message chaining. |
| [#1069: Parked: service name picker for job creation (blocked on #1068)](https://github.com/hotwax/job-manager/pull/1069) (draft) | `26a2b411f1865de787c3fd9a61fe6239492cd29b` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Draft and explicitly parked, blocked on #1068. Do not promise a service picker. |
| [#1065: Improved: job manager app view permission for accxui](https://github.com/hotwax/job-manager/pull/1065) | `8592abe97543735d53acf06d3acd4edf3586f096` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). ACCXUI entry permission becomes JOB_MANAGER_ACCXUI_APP_VIEW. |
| [#1048: feat: implement real-time websocket updates, cross-tab synchronization, and silent background sync](https://github.com/hotwax/job-manager/pull/1048) (draft) | `c08bddd226ef6f3a31a9652cf769bbc12686ec89` | [Operations guide](../documents/system-admin/administration/job-manager/arrived-operations.md). Draft websocket/cross-tab synchronization proposal; not promised as available. |
| [#963: Feat: Support drag-and-drop field reordering in Data Document Builder (#956)](https://github.com/hotwax/job-manager/pull/963) | `68ecd4810f106a1c40129bb0834d48255cf9fe72` | [Builder guide](../documents/system-admin/administration/job-manager/arrived-data-document-builder.md). Separate drag-reordering proposal; do not imply it is included in #1112 screenshots. |

## Dependency and overlap boundaries

- Inventory Count #1488 and #1376 offer different manual-entry semantics: total replacement versus additive per-item input. The illustrated guide selects #1488; this does not declare #1376 superseded or closed.
- Inventory Count #1327 changes the upload record system. #1367 applies to the older system-message route. Their IDs, cancellation states, and error download paths must not be mixed.
- Inventory Count #1438 is permission-gated. Its approval step cannot be described as mandatory for all users; list status filters branch on `INV_COUNT_APPROVAL`.
- Inventory Count #1332 and #794 are older structural/legacy proposals. A selected merge baseline is required before adapting the current menu and embedded-login documentation to them.
- Job Manager follow-ups are stacked: #1079 targets #1071's branch, #1078 targets #1079's branch, #1077 targets #1078's branch, and #1081 targets #1077's branch. Their dependent changes are not independent release units.
- Job Manager #1112 and #963 are separate heads. The metadata/condition screenshots do not establish that drag reordering is present.
- Job Manager #1069 and #1048 are drafts. The former is explicitly parked pending service discovery; neither is advertised as released.

## Primary code anchors

- [Hand-count entry label](https://github.com/hotwax/inventory-count/blob/8a76b25990197507acbfd36b4cd7c9b9a8435517/src/views/SessionCountDetail.vue#L80) - #1488.
- [Total save, local sync result, and leave choices](https://github.com/hotwax/inventory-count/blob/8a76b25990197507acbfd36b4cd7c9b9a8435517/src/components/DirectedHandCount.vue#L288) - #1488.
- [Local total-to-event persistence](https://github.com/hotwax/inventory-count/blob/8a76b25990197507acbfd36b4cd7c9b9a8435517/src/composables/useInventoryCountImport.ts#L340) - #1488.
- [Permission-dependent Assigned status filters](https://github.com/hotwax/inventory-count/blob/7ce4406a411d13cf87cb62488c660e1eb1ead3f8/src/views/Assigned.vue#L166) - #1438.
- [Created-to-Approved transition](https://github.com/hotwax/inventory-count/blob/7ce4406a411d13cf87cb62488c660e1eb1ead3f8/src/views/DraftDetail.vue#L938) - #1438.
- [Error-file download and cancellation request](https://github.com/hotwax/inventory-count/blob/8c316620e98cda87cf88949c6b1d52973c746016/src/views/BulkUpload.vue#L207) - #1327.
- [24-hour, 100-record Data Manager list](https://github.com/hotwax/inventory-count/blob/8c316620e98cda87cf88949c6b1d52973c746016/src/composables/useInventoryCountRun.ts#L204) - #1327.
- [Pinned run navigation](https://github.com/hotwax/job-manager/blob/ac998c8f0441f1da4327c1e2adfa7280c504c8e2/src/views/Pipeline.vue#L731) - #1071.
- [Paused creation and partial parameter-save failure](https://github.com/hotwax/job-manager/blob/ac998c8f0441f1da4327c1e2adfa7280c504c8e2/src/components/CreateJobModal.vue#L244) - #1071.
- [Metadata fields and help text](https://github.com/hotwax/job-manager/blob/57f85282470c5f6cf1679565d0206515da4af209/src/components/DataDocumentMetadata.vue#L70) - #1112.
- [Stored condition operator compatibility](https://github.com/hotwax/job-manager/blob/57f85282470c5f6cf1679565d0206515da4af209/src/utils/dataDocumentGraph.ts#L185) - #1112.

## Publication and validation boundary

Before relying on these workflows in a particular environment, confirm the deployed release contains the selected heads, reconcile overlaps, and verify the corresponding server APIs and permissions. Re-capture any screen whose merged UI differs. This documentation change does not approve those implementation PRs.

Validation passed: Markdownlint CLI2 0.14.0 on all 11 changed Markdown files (0 errors), 57 newly added local links resolved, 13 JPEGs decoded and matched their SHA-256 manifest, and `git diff --cached --check` passed. All 13 images were visually inspected. Repository-wide remote link checks may also inspect unrelated existing content; their result must be reported separately from the changed-file checks.
