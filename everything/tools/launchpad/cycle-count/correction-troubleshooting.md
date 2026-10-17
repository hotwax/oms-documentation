---
description: >-
  Identify the scope of a Cycle Count correction, check uncertain outcomes, and
  distinguish an additional session from a separate recount.
---

# Diagnose Cycle Count Corrections And Recounts

Use this guide when a count contains a wrong quantity or product, a session needs to be excluded, an assigned count was closed unexpectedly, or another count is needed. First establish which records changed. Editing a count, removing counted data, cancelling a run, and posting an inventory adjustment have different effects.

The workflow is source-verified against Cycle Count App v5.2.1 and Poorti v3.3.7. The latter is included in OMS distribution v6.3.13. Installed versions and live correction outcomes remain unverified. The checks below preserve evidence before an authorized operator chooses a bounded correction; they are not a general rollback procedure.

## Before You Start

- Confirm the environment, facility, count ID, product IDs, session IDs, and the intended correction with the count owner. A reused count name is not a unique identity.
- Use existing authorized access. The reviewed admin views accept `COMMON_ADMIN` or `INV_COUNT_ADMIN`; backend permission and the current record state also matter. Do not change roles to make an action appear.
- Preserve the original quantities, statuses, decision outcome, timestamps and any request error in approved private storage. Record whether an action was attempted and whether its result is known.
- Use admin details or scoped API reads for diagnosis. Opening an active store scanning session can acquire a lock, change session state and start synchronization; it is not a passive inspection screen.
- Coordinate with the people still counting or reviewing that run. Preserve unsaved device work; clearing storage or repeating a submission can destroy evidence or create another operation.
- In the app, find the count under `Assigned`, `Pending review`, or `Closed` and verify its facility and actual status. The Closed view can include cancelled counts.
- For support-level verification, open OMS **Developer > REST APIs** and use the [REST API Explorer](../../maarg/rest-api-explorer.md) to check the installed contracts. Paths below are relative to that verified API base.

For a CSV or upload-message problem, start with [Cycle Count Import And Recount Troubleshooting](import-troubleshooting.md). Cancelling an upload message is separate from changing an already-created count.

## 1. Identify What Needs Correction

| Situation | Evidence To Establish First | Correction Boundary |
| --- | --- | --- |
| The last save, submission or correction timed out | Existing count, session items, request time and any saved decision | An error does not prove that nothing changed. Reconcile before retrying. |
| An unreviewed product has the wrong quantity | Every item row for that product in the selected session, plus its aggregate across sessions | The review editor is not a guaranteed replacement of every underlying row. |
| A product was counted in the wrong session | Product/session identity and the records that contribute to the displayed total | Remove from count affects that product's returned item records in the selected session. |
| An assigned run should be abandoned | Run status, every session and any prior review decision | Assigned Close attempts cancellation and session voiding; it is different from closing a reviewed count. |
| More counting is needed within an In Progress run | Existing sessions, assigned products and how new quantities will contribute | New session adds another session to the same run. It does not replace earlier contributions. |
| A fresh physical recount is required | Approved product/facility scope, timing, selection rule and prior posting evidence | Create a separate approved count. A recount does not reverse an earlier adjustment. |

A saved `APPLIED` decision is a reason to investigate posted movements before changing anything further. Accepting an item can apply inventory before the whole count is closed. Neither rejecting another item nor changing a count's lifecycle is a compensating adjustment.

## 2. Read The Existing Records

An authorized support operator can use these read routes to separate the run, sessions, products and decisions:

| Read Route | What To Check |
| --- | --- |
| `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}` | Exact count, facility, type and lifecycle status. |
| `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}/sessions` | Every session ID and status, including voided sessions. |
| `GET inventory-cycle-count/cycleCounts/sessions/{inventoryCountImportId}/items` | Product rows and their `importItemSeqId`, quantity and saved system quantity. Scope by the verified product and facility. |
| `GET inventory-cycle-count/cycleCounts/workEfforts/{workEffortId}/reviews` | Aggregate review quantities and any decision context. |
| `GET inventory-cycle-count/varianceDecisions` | Saved decision for the exact `workEffortId`, `facilityId` and `productId`. |

Follow all relevant pages and check pagination headers. A short page, an empty failed request, or a filtered display does not establish that no record exists. Keep the item key `inventoryCountImportId` + `importItemSeqId`; inventory joins can repeat an item, so do not add repeated joined rows as separate counts.

The reviewed aggregate sums quantities across non-voided sessions. Compare saved item rows with that aggregate after a fresh read. Saved system quantities and current inventory quantities are different evidence; a missing saved quantity may also be filled later before synchronization. Do not reconstruct a correction from the current stock total alone.

## 3. Investigate Edit Count And Remove From Count

In `Pending review`, open the count, expand the relevant product, and inspect its individual session rows. Open the session row's more-options menu. In the checked app, `Edit Count` and `Remove from count` are offered only when that product has no recorded decision outcome.

### Edit Count

The editor displays a session-level counted total. In App v5.2.1, saving the edit sends the new total in the **first returned item row** for that product and session. It does not redistribute the total over every matching row.

For example, if two distinct underlying rows contain 3 and 2 units, writing an intended total of 4 into only the first row can leave 4 and 2 in the persisted rows. The displayed total immediately after saving is not sufficient proof of the saved aggregate.

Before using the editor, have support determine whether the selected product/session has one base item row or several. If there are several, or the row set is incomplete, stop and agree on a supported correction for the exact records. Do not repeatedly edit the display until it appears right.

After an approved edit, reload the saved item rows and the aggregate. Confirm the intended quantity, the unchanged contributions from other sessions, and that no unintended review decision or inventory movement occurred.

### Remove From Count

The confirmation title in the checked app says `Remove session from count`, but the request is built from the fetched item records for the **selected product in the selected session**. It does not delete the entire session or remove that product from every session.

Removal deletes counted item data; it is not the same as entering a physical count of zero. Other products in that session and contributions from other sessions require separate verification. The app's fetched row set must not be assumed to cover an unlimited number of matching items. It does not request subsequent pages. The checked framework processes array deletions individually, so a later failure need not undo rows already deleted.

Before an approved removal, identify and preserve the exact affected item keys. Afterwards, re-read the session header, remaining item rows and product aggregate. Confirm that only the intended contribution disappeared. If the response is uncertain or the result is partial, escalate with those keys instead of repeating removal or deleting records directly.

### Discard Or Re-open A Store Session

Store-session `Discard` changes the session to `SESSION_VOIDED`; the reviewed aggregate excludes voided sessions, but the saved item rows are not deleted by that status change. The app requests final synchronization before discarding, without an acknowledged server-completion barrier. A disappearance from review or discard toast therefore does not prove that all previous device work reached the server.

`Re-open session` changes a submitted session back to a counting state and attempts to lock it. It does not reverse a saved product decision or inventory movement. When either action has already been attempted, inspect the session header and saved rows through the read routes above, coordinate with the count owner, and resolve any unknown sync outcome before further counting.

## 4. Diagnose An Assigned Count Closed Unexpectedly

In the checked `Assigned` detail view, `Close` has cancellation behavior:

1. The app fetches session headers and attempts to mark the fetched sessions `SESSION_VOIDED`.
2. It then makes a separate update to set the run to `CYCLE_CNT_CNCL`.

This differs from `Close count` in Pending review, which completes the review lifecycle and can first accept or reject outstanding items. A button label or success toast is not enough to identify which operation occurred.

The two Assigned updates are separate requests. If one succeeds and the next fails, the records can disagree. The app's session fetch also does not prove that every page of sessions was included.

If Assigned Close was already attempted:

- Read the run's status and the full session list.
- Record which sessions are voided and which remain in another state.
- Check for any saved review decisions and their inventory history.
- Compare the actual state with the owner's intended cancellation.
- Escalate a mixed or uncertain result. Do not repeatedly press Close, manually reopen the status, or assume a cancelled count undid an earlier posting.

For an unattempted cancellation, obtain the owner's approval for the whole run and affected sessions, then have support verify the installed action and complete scope before execution. Cancellation is not a diagnostic test.

## 5. Choose Between An Additional Session And A Separate Recount

### Additional Counting In The Same Run

For an In Progress directed count with existing sessions, the reviewed app's `New session` path sorts the retrieved sessions by creation date and clones requested product identities from the oldest. It does not choose products from the current review selection, and the session lookup does not exclude voided sessions. The backend creates a new Created session linked to the **same** `workEffortId`, without copying counted quantities as new count results.

That is a way to prepare more counting within the existing run. It is not a separate run, a replacement of all earlier sessions, or an automatic selection of products that failed a variance threshold.

For a hard count, or a directed count with no existing sessions, this path creates an empty session header instead. The New session form asks for a name and area.

Before approving another session, compare its intended products with the source session and decide how existing quantities should contribute. Non-voided earlier contributions remain in the aggregate. Counting the same physical stock again in an additional session can therefore add it again rather than replace the first result.

After an approved creation, verify the new session ID, parent count, requested products and empty initial quantities before anyone starts. If the intended scope differs from the copied products, use the supported preparation agreed with the count owner.

### Separate Recount

When the purpose is a new physical verification, prepare a distinct approved count. For the app's `Create count` flow:

1. Enter the approved count name and facility, and choose Directed or Hard count.
2. Enter the required Due Date and optional Start Date; confirm the facility time zone.
3. Find and select the approved products. The header selection control covers loaded/visible products; `Select all` with the total count fetches the matching result set.
4. Use `Show selected only` to inspect the complete selection. Changing a search or filter does not clear previously selected products.
5. Confirm the intended count identity and product/facility scope before the approved submission.
6. Trace the resulting upload message and verify the created count using the [import and store-readiness checks](import-troubleshooting.md). The app builds a CSV and uploads it for processing; its creation toast does not prove that the count is already available.

For a prepared CSV, follow the same guide's [file and mapping checks](import-troubleshooting.md#prepare-the-file-and-mappings).

Record the original count and relevant decision IDs alongside the new count ID in the private operating record. Verify the new name, facility, type, product set, start/due times and time zone. Reusing a Created count's name can append to an existing import scope; changing a filename does not prevent duplication. The Create count duplicate check is bounded and treats lookup errors as no match, so absence of a warning is not proof of a unique name.

Agree the selection rule before generating the input: eligible original counts, product/facility identity, quantity or value thresholds, the valuation basis and currency, timing, missing-result handling and duplicate prevention. Available API results and session cloning do not establish a built-in automatic recount policy. Do not upload an exported results report unchanged as a new-count template.

A recount supplies new evidence. If the earlier decision already changed inventory, correction of that posting needs its own approved plan and downstream verification. Do not use a quantity-on-hand reset, derived-kit reset, or another acceptance as an improvised reversal.

## Completion And Escalation

A correction is complete only after a fresh read confirms the intended record scope and resulting quantities/statuses. Retain original and replacement IDs together. If an inventory adjustment was part of the approved plan, verify its exact movements and configured downstream delivery separately; a count screen alone does not confirm accounting or Shopify availability.

Escalate when multiple item rows make an edit ambiguous, a fetched list is incomplete, session and run statuses disagree, an earlier decision has already posted, another person may still be changing the count, or a request's outcome is unknown. Share only the necessary IDs, installed versions, action and time, redacted error, and expected-versus-actual comparison through the approved private support channel.

## Source And Verification Scope

Checked October 17, 2026:

- Cycle Count App [v5.2.1](https://github.com/hotwax/inventory-count/releases/tag/v5.2.1): [Pending Review detail](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/PendingReviewDetail.vue), [Assigned detail](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/AssignedDetail.vue), and [session requests](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/composables/useInventoryCountImport.ts), [progress and new sessions](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/CountProgressReview.vue), [store session](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/SessionCountDetail.vue), and [Create count](https://github.com/hotwax/inventory-count/blob/031fe43c6427005babad591379c6147aa303c7d6/src/views/CreateCycleCount.vue).
- Poorti v3.3.7: count/session routes, item identities, review aggregation and directed-session cloning. The relevant count definitions are unchanged from v3.3.6.
- Latest distribution by publication time: OMS distribution v6.3.13, published October 16 at 12:21:21 UTC. Its production suite includes Poorti v3.3.7, OMS v3.3.4 and Shopify connector v4.3.12; the production image selects framework v4.1.3. XML comments were excluded. Standalone OMS v3.5.1 was published separately and is not the OMS pin in this distribution. The app is deployed separately.

The read-only demo reached sign-in. No count, session, decision, inventory movement or correction was created or changed. Existing API Explorer and System Messages illustrations were inspected and do not demonstrate this workflow, so no screenshot is presented as correction proof. Installed permissions, actual response shapes, repeated-row edits, partial cancellations, session creation and downstream outcomes still require approved isolated acceptance.
