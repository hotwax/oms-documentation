---
description: >-
  Reconcile counted quantities, session submission, and Track progress before
  retrying, zeroing items, or creating a recount.
---

# Troubleshoot Cycle Count Submission And Progress

Use this guide when a session appears submitted but **Track progress** shows older quantities, unexpected uncounted products, or a count that is not ready for review. Local scans, synchronized session items, session status, whole-count submission, and inventory decisions are separate results.

The operating baseline is Cycle Count App v5.2.1. These checks are source-verified; they do not establish the installed version or a particular customer's root cause. For a CSV that has not created the expected count, start with [Cycle Count import troubleshooting](import-troubleshooting.md).

## Preserve The Counting Work First

- Confirm the OMS environment, facility, count ID and type, session IDs, affected products, and submission time with its time zone. A repeated count name is not a unique reference.
- Keep the original counting device and tab available. Preserve the visible entered quantities, product totals, unmatched items, messages, and session state privately before navigating or changing anything.
- Coordinate with the associate and count owner so another device does not continue the same session while its outcome is unresolved.
- Use an account already authorized for the relevant facility. In v5.2.1, the store Counts view and progress route use `COMMON_ADMIN`, `INV_COUNT_ADMIN`, or `INVCOUNT_APP_VIEW`; Assigned and Pending review require `COMMON_ADMIN` or `INV_COUNT_ADMIN`. Backend access must also permit the reads.

{% hint style="warning" %}
Do not clear local inventory data, browser storage, or the app to repair a stale progress screen. The released **Clear local inventory data** action removes this device's count records and scans as well as product caches. Do not sign out, reinstall, or move counting to another device before the original work is reconciled.
{% endhint %}

Opening a counting session is not a passive inspection: the released session page starts background aggregation/synchronization and can acquire an active-session lock. Do not open, reopen, force-release, or submit a session simply to test whether its data exists. Use an authorized review context for the checks below while preserving the original counting context.

## Identify Which Result Is Missing

| Observation | What it establishes | What still needs checking |
| --- | --- | --- |
| A scan or hand-entered quantity appears in the session | The counting screen has local work to show | Whether the corresponding session item reached OMS |
| **Session submitted successfully** or a **Submitted** session | The session status was updated in the reviewed flow | Whether all final item quantities synchronized and the progress view retrieved them |
| **Products counted** in Track progress | Number of rows in the loaded Counted list; directed Undirected rows are excluded | Units per product, contributing sessions, complete loading, and read freshness |
| **Count submitted for review** | The count reached the head-office review stage | Review decisions and their inventory effects |
| A closed count or exported CSV | A lifecycle/reporting result | Which variances were accepted and applied; closing or exporting does not prove every proposed variance changed inventory |

For example, three products totaling twelve units should not be compared as “3 versus 12 missing counts.” Compare the same product and session quantities first, then compare their sum for the count.

In the released session flow, requesting final synchronization and updating session status are separate operations. The source does not wait for confirmation of the final background item synchronization before showing the session-submission result. A success toast or an enabled next action is therefore insufficient evidence that every final quantity is saved in OMS. This source finding does not identify the cause of every delayed display.

## Open The Review View Without Resuming Counting

1. In an authorized review context, open **Counts** for the correct facility and find the exact count. An in-progress card offers **Review progress**, which opens **Track progress**. A Created count offers **Preview count**; do not select **Start counting** to diagnose existing work.
2. Confirm the count identity, type, start/due dates, and status. Read the **Sessions** list and each session's status. Do not select a session row during this read-only investigation, because it opens the counting session.
3. Wait for the progress/item loaders to finish. Record any **Something Went Wrong** or other loading error and the time of the read. Do not interpret a failed or partial list as an empty count.
4. Inspect **Counted**, **Uncounted**, and, for directed counts, **Undirected**. Use the same product identifiers as the associate's preserved entries. A missing name or image is not proof that a saved quantity is missing. Before a count has started, item preview also requires `PREVIEW_COUNT_ITEM`, `COMMON_ADMIN`, or `INV_COUNT_ADMIN`; an unavailable preview is not evidence of missing products.
5. Expand a counted product to inspect its contributing session quantities and update times. Compare the exact session and product with the original counting evidence. Use the displayed details only; editing, removing, skipping, or discarding a count is a separate action.
6. If the count has already been submitted for review, have an authorized reviewer locate it under **Pending review**. If already closed, use **Closed**. Do not create another count merely because it left the earlier view.

### Read The Fields In Context

| Field or tab | Interpretation and limit |
| --- | --- |
| Sessions | The contributing sessions and their current loaded status. **Voided** is different from **Submitted**; account for discarded work separately. |
| Products counted | Rows in the Counted list, excluding directed Undirected rows; not the session's unit total or proof that all devices synchronized. |
| Counted quantity / system quantity / variance | System quantity and variance visibility require `COMMON_ADMIN`, `INV_COUNT_ADMIN`, or `INV_CNT_VIEW_QOH`. Compare the same product and count scope. The reviewed rollup can display a dash for zero because of its display fallback; a dash alone does not prove the quantity is absent. |
| Session quantity and last-updated time | Help correlate a product with the associate's session. Record time zone separately and confirm the same session ID. |
| Uncounted, directed count | Requested products not represented as counted in the loaded review data. Resolve failed reads and synchronization uncertainty before treating them as physically absent. |
| Uncounted, hard count | Facility products returned by the inventory lookup that are not in the loaded counted set. This is not simply a list of failed scans or a new directed assignment. |
| Undirected | Products counted outside the requested directed list. They require a scope decision; discarding them is not a refresh operation. |

## Check Freshness Before Choosing A Correction

Track progress requests count, session, and item data when the page is entered. It is not a continuously verified live ledger. In v5.2.1, re-entering can append items to existing page arrays, and failed reads can leave stale, partial, or empty results. Repeated navigation is not a reliable reconciliation method.

1. Preserve the current comparison and any errors. If you are already on Track progress, do not repeatedly leave and return to make the totals change.
2. Have an authorized support or inventory owner obtain a successful read of the existing OMS count, its sessions, and affected session items. Compare count ID, facility, session ID, product ID, saved quantity, session state, and update time. [Read-only entity inspection](../../maarg/entity-inspection.md) describes the general supported inspection process; use the installed schema and verified relationships without changing records.
3. Reconcile product-by-product and session-by-session. Account for other associates' sessions, zero counts, unmatched items, undirected items, and voided sessions. Do not use only the aggregate product counter or a single visible page. The server review totals include active non-voided sessions and exclude voided sessions; they are not restricted to Submitted sessions. In a directed count, Track progress treats zero as counted while the local session can group zero under Uncounted. Compare the saved quantities and scope rather than requiring those tab counts to match.
4. Classify the outcome below before the owner authorizes any further counting, synchronization recovery, or recount.

| Confirmed evidence | Safe next step |
| --- | --- |
| OMS session items match the preserved quantities, but the display differs | Investigate the review read/display. Do not repeat scans or add another session to reproduce quantities already saved. |
| Some saved quantities are missing or differ | Preserve the local work and exact differences. Have support identify the affected synchronization stage before choosing a bounded recovery. |
| A read failed, returned incomplete data, or cannot distinguish the prior attempt | Keep the outcome unresolved. Do not mark products out of stock, discard them, resubmit, or approve their variance to force progress. |
| Successful reads and the physical check establish a real counting error | Have the count owner authorize the specific correction for the current lifecycle state and verify its saved result before proceeding. |

Do not infer a full rollback from an error response, or successful synchronization from the absence of an error. A later app fix, merged pull request, or newer backend release does not establish that the fix is deployed with the original counting device.

## Interpret Submission Requirements Safely

The progress view checks permission to manage the count, an **In progress** count, session readiness, no remaining requested items, and completion of item loading. Submission permission in this release is `COMMON_ADMIN`, `INV_COUNT_ADMIN`, or `INV_COUNT_SUBMIT`.

Check the failed requirement and the underlying records. The released session-readiness calculation rejects Created and In Progress sessions but can pass when other states, including Voided, remain. Read each session's actual status rather than treating the checklist wording as proof that every session was submitted.

**Mark selected as Out of Stock** records zero quantities for selected uncounted products. Use it only after an authorized physical check confirms those products were not found and the earlier synchronization/read outcome is known. An unexpectedly populated Uncounted tab is not sufficient reason to zero it. Likewise, **Discard**, **Skip**, and session **Re-open** change count data or state; they are not read refreshes.

Whole-count **Submit for review** is separate from session Submit. Head-office **Accept** can apply a proposed inventory variance when its review request succeeds; **Reject** skips that proposed variance. Do not accept, reject, or close a count as a troubleshooting step, or assume that closing provides an extra approval gate for items already accepted. A correction after an applied variance requires an agreed inventory and integration reconciliation plan.

## Diagnostics And Escalation

If diagnostics results already exist, note their time and individual checks. A green **Run Diagnostics** result is not proof that this session's final quantities reached OMS: the reviewed checks cover local storage, identifiers, worker/configuration availability, and backend setup. They do not reconcile this count's product quantities end to end. Do not run diagnostics or clear device data as a substitute for that comparison.

Send only the necessary evidence through the approved private support channel:

- Installed app and backend versions, facility, browser/device, and incident time zone
- Count and session references, type, lifecycle state, and whether other associates were counting
- Representative product IDs and preserved local quantity versus successfully read OMS quantity
- Whether the mismatch is units, product-row count, missing items, or stale session status
- Exact displayed message, read-attempt time, and whether every relevant read succeeded
- Any review decision or downstream inventory change already made

Keep screenshots redacted. Do not publish customer names, user identifiers, operational exports, connection details, or logs. Once the original outcome is reconciled, use [export troubleshooting](export-troubleshooting.md) for a results file and [import troubleshooting](import-troubleshooting.md) for a separately approved recount upload. A recount does not reverse the original inventory decision.

## Verification Scope

Source checked for the October 13, 2026 upkeep batch:

- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1), including [session submission and synchronization](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/SessionCountDetail.vue), [Track progress](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/CountProgressReview.vue), [permissions](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/authorization/actions.ts), [Settings](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/Settings.vue), and [diagnostics](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/composables/useDiagnostics.ts).
- The modern OMS count/session and review contract was checked separately against Poorti v3.3.4. This does not establish an installed app/backend pairing.
- Distribution v5.5.27 was the latest publication, later on October 13 than v6.3.10. Their active production groups differ: v5.5.27 includes Poorti v2.4.6, OMS v2.4.15, and connector v3.5.9; v6.3.10 includes Poorti v3.3.4, OMS v3.3.3, and connector v4.3.9. Commented entries were excluded. Standalone Poorti v3.5.0, OMS v3.5.0, and connector v4.5.0 releases are not included in either manifest. The frontend is a separate release.

No authenticated runtime, count submission, diagnostic run, correction, inventory decision, or downstream result was exercised. The read-only demo reached sign-in. Screenshots are omitted because no suitable live progress example was verified. Confirm the installed build before relying on named controls or later synchronization fixes.
