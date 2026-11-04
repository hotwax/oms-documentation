---
description: >-
  Manage Company rejection reasons, distinguish manual inventory reasons and
  NetSuite variance settings, and verify saved configuration before using it.
---

# Manage Rejection Reasons And Variance Sync

Use this guide when a reason is missing from an app, appears under the wrong workflow, or needs an approved change. A reason's name, its inventory effect, its availability to an app, and its inclusion in an integration are separate settings.

## Version, Access, And Preparation

The Company workflow is **source-verified at Company App v2.8.0**. Backend reason types and rejection semantics were checked at **OMS v3.5.2** and administration routes at **maarg-util v4.5.2**. These backend components are included in Maarg **v6.5.0**, published October 19, 2026. NetSuite selection was checked separately at connector **v3.5.2**, which the distribution declares as optional, outside its default production component set. Company is a separate frontend release. Publication and inclusion do not establish which versions are installed.

The authorized demo reached sign-in only. No reason creation, edit, deletion, group change, order rejection, inventory adjustment, or NetSuite delivery was exercised. This guide does not claim runtime acceptance or a tested rollback.

Before investigating:

- Confirm the Company App's connected OMS instance and app version. Compare the affected store and administrator environments; matching display names do not establish the same environment or reason ID.
- Use an account authorized to inspect the configuration. Access to a menu or API description does not establish write permission. Respect a denial and ask the administrator rather than switching tools to bypass it.
- Identify the exact reason ID, workflow, consuming app, and expected result. Record the existing type, name, description, sequence and relevant group memberships before proposing a change.
- Obtain the configuration owner's approval for the exact change and its affected apps. For inventory effects or NetSuite mapping, include the inventory/integration owner and an isolated verification plan.

## Choose The Correct Reason Family

| Requirement | Configuration To Inspect | Important Distinction |
| --- | --- | --- |
| Explain why an order cannot be fulfilled | Company **Rejection Reasons** | Rejection enums use a variance type and can be associated with Fulfillment or BOPIS |
| Explain a manually recorded inventory adjustment | The consuming app's manual-variance reason selection and OMS `IID_REASON` enums | A manual reason is not created by choosing a rejection variance type |
| Decide which manual variance reasons participate in NetSuite sync | Company **NetSuite > Inventory variances** | The checkbox controls membership in `IA_VAR_NETSUITE`; it does not create the reason or prove delivery |
| Direct a variance to a NetSuite transfer location | **Transfer inventory** on that NetSuite page | This is a location mapping, not a NetSuite adjustment-reason or account selector |

Use IDs, not similar labels, to compare records. For example, the reviewed seed data has separate manual-damage and rejection-damage reasons. Do not repurpose one enum across families simply to make a missing option appear. The legacy [OFBiz variance-reason import](../ofbiz/inventory/README.md) is not a Maarg import recipe.

## Inspect Rejection Reasons

1. Open the **Company App** and its navigation menu.
2. Under the menu's **Settings** heading, select **Rejection Reasons**. This is a sibling of the **Settings** page, not a control inside that page. The route is `/rejection-reasons`.
3. Select **Fulfillment**, **BOPIS**, or **Order Manager**.
4. Read the row's reason ID, name, description and variance-type chip. Do not drag a row, change a toggle, or select a different variance type during a read-only investigation.

The tabs share the same loaded rejection-reason list. The **Fulfillment** toggle represents association with `FF_REJ_RSN_GRP`; **BOPIS** uses `BOPIS_REJ_RSN_GRP`. The **Order Manager** tab has no enable/disable toggle in this release. Switching tabs does not create an app-specific copy of the name or variance type.

### Interpret The Variance Type

The reviewed OMS rejection service distinguishes these types:

| Type | Source-Verified Rejection Behavior |
| --- | --- |
| `REPORT_NO_VAR` | Skips recording an inventory variance after the order's reservation/reallocation work. It does not mean the order or its reservations remain unchanged |
| `REPORT_VAR` | For the order item, uses its rejected quantity; applicable kit components use their component-adjusted quantity |
| `REPORT_ALL_VAR` | Uses the product/facility inventory view's `lastInventoryCount`; records the variance only when that quantity is positive |

A recorded variance has a negative available-to-promise (ATP) delta; the rejection's net ATP effect also includes reservation/allocation changes. Quantity-on-hand (QOH) reduction depends on the service's `updateQOH` input, which defaults to false in this reviewed service. An app's caller and the installed backend determine the full outcome. **Do not promise that every rejection sets ATP and QOH to zero, or that “No variance” leaves all inventory-related state unchanged.**

The type list is loaded from the deployed administration API. If the expected type is missing, inspect the installed type hierarchy and access before editing data. Do not select a different type merely to complete the form.

### Recognize List And Date Limits

Company requests up to **100 reasons**, **20 types**, and **200 memberships per rejection group**, without a subsequent-page loop in this workflow. A missing row is not proof that the enum or association does not exist.

A failed reason read can end at **No rejection reasons found**; a failed membership read can make toggles appear off. Establish a successful read before recreating a reason or changing an association.

The rejection page treats a membership with no `thruDate` as enabled. It does not evaluate the full effective-date interval in that display check. If memberships are scheduled or future-dated, verify `fromDate` and `thruDate` against the server's effective selection and timestamp instead of relying on the toggle alone.

## Make An Approved Rejection-Reason Change

These are configuration writes. Prepare the expected result and recovery plan first; do not reject a live order to test a reason.

### Create A Reason

1. Select the **+** button to open **Create rejection reason**.
2. Enter **Name**, review or supply the generated **ID**, and enter a useful **Description**.
3. Keep the ID within **20 characters** and confirm it is unique in the full backend list. Company can generate an ID from the name; that is not proof of uniqueness.
4. Choose the approved **Variance type** and read its description.
5. Select the confirmation button. Then reopen the list and verify the saved ID, text and type.
6. If required, separately associate the new reason with **Fulfillment** and/or **BOPIS** using the relevant toggle, then verify each membership. Creation alone does not add either association.

If the response is lost or unclear, look up the proposed ID before trying to create another reason. A success toast and the locally appended row are not independent persistence checks.

### Edit Text Or Variance Type

- Open the row's **… > Edit name and description**, change the approved text, and select **Save**. The ID is not edited in that dialog.
- To change the effect, open the **Variance type** chip and select the approved type. Choosing a different type submits the change immediately; there is no second page-level Save step.
- Reopen and verify the record after either action. Text and type belong to the shared reason, so review every consuming app and integration rather than treating the selected tab as the write scope.

### Enable, Disable, Or Reorder

- A Fulfillment/BOPIS toggle writes that group's membership immediately. Disabling sets a `thruDate`; it does not delete the reason. Enabling creates a membership using the reason's sequence.
- Dragging a row changes the local order and presents a toast with **Save**. Select **Save** only for an approved reorder. Leaving with an unsaved reorder presents **STAY/LEAVE** choices.
- Reordering saves individual reason-enum sequence values; it is not an atomic, per-app ordering transaction. Group membership sequence values are separate. Reopen the list and verify affected rows and the consuming app's order. A partial failure or success toast alone is insufficient evidence that every sequence persisted.

### Treat Remove Reason As Deletion

**… > Remove reason** opens a confirmation and calls DELETE on the shared master enumeration. This differs from disabling a Fulfillment/BOPIS membership. It is not an archive command or a guaranteed reversible retirement operation.

Do not use deletion to fix an empty list or hide one app's option. Existing memberships and business records can refer to the reason; the reviewed administration route does not provide a dedicated reference-cleanup or restoration workflow. Have the owner assess dependencies and the approved retirement procedure. A rejected delete must be investigated, not bypassed through direct entity or SQL deletion.

## Inspect NetSuite Variance Selection And Transfer Mapping

1. In Company, open **NetSuite**.
2. Under **Products and Inventory**, select **Inventory variances**. The entry requires a configured NetSuite Product Store; do not change the Product Store just to unlock the page.
3. Read the reason name and ID. This page loads **`IID_REASON`** enums from Company's reference-data cache, not the rejection-reason list above.
4. Inspect the checkbox and any **NetSuite transfer location** chip without changing them.

The checkbox represents currently effective membership in **`IA_VAR_NETSUITE`**. It is not a universal stock-event export gate: the reviewed NetSuite selection separately includes rejection-type rows as well as this manual-reason group. The reviewed cache is loaded specifically from that group, and the screen applies an effective-date check. Reads are cached: loading placeholders, a stale cache, or a failed refresh must not be interpreted as an empty backend configuration. When necessary, inspect **Settings > Data Fetch Status** and the relevant reference-data refresh state, then perform a bounded backend reread through the authorized support workflow.

The **Transfer inventory** button opens a dialog with **Transfer location**, whose placeholder is **NetSuite facility ID**. A saved mapping is displayed as a chip; selecting the chip opens it for editing. The page also directs facility-specific transfer-location setup to the facility configuration section. Confirm the integration's intended scope and location ID with its owner; this page does not verify that the destination location is valid in NetSuite.

### Change Only The Approved Setting

- **Sync inclusion:** Clicking the checkbox writes group membership immediately. Clearing it expires the membership. Verify the intended group, reason ID and effective dates after the write; do not assume an existing queued or exported record was cancelled.
- **Transfer location:** Enter the owner-approved destination in the dialog and select **Save**. This creates or updates the configured variance-transfer integration mapping keyed by the reason ID. Reopen the page and verify the saved value; the dialog can close even when the underlying save reports a failure.
- **Remove mapping:** The close icon on the chip calls mapping deletion immediately in this release. Do not click it as a way to dismiss or inspect the chip. Removing this mapping is distinct from clearing sync inclusion or deleting the reason.

Neither a checked reason nor a saved location proves that an adjustment or transfer reached NetSuite. Verify a separately approved test record through the configured processor, output and actual destination record. Do not replay a historical variance to test configuration, or change an account/adjustment-reason value by guessing at the transfer-location field. Facility-specific mapping precedence and the deployed integration's accounting behavior require their own verification.

## Diagnose A Missing Or Unexpected Reason Safely

| Symptom | Read-Only Check Before Any Retry |
| --- | --- |
| Reason appears in one app but not another | Compare environment, exact ID, family/type, app version, relevant membership and effective dates. A shared name is not identity |
| Reason is absent from Company's rejection list | Confirm successful reads, type hierarchy and the 100-row limit; manual `IID_REASON` enums belong to a different list |
| A new rejection reason is present but absent in a store app | Check the explicit Fulfillment/BOPIS association and the consuming app's refreshed selection. Do not create a second enum |
| Toggle appears off after a failed read | Establish the saved membership before clicking again; an off control is not proof that the association was removed |
| Order Manager offers no enable toggle | This is the reviewed page's behavior. Inspect the consumer's selection contract rather than assuming a hidden permission or inventing an Order Manager group |
| Reorder looks successful but later reverts | Reopen and compare every affected sequence; account for partial writes and separate group ordering |
| NetSuite reason or location appears stale | Check cache fetch status, exact reason/group/mapping keys and effective dates, then reread the saved configuration |
| Save timed out or an error appeared | Preserve the requested values and timestamp, inspect persisted state, and reconcile partial results before repeating the write |
| Deletion fails | Stop and investigate permissions and references; do not remove dependent history or bypass validation |

For a bounded backend check, use [REST API Explorer](../maarg/rest-api-explorer.md) to inspect the installed **admin** contract. The reviewed read routes include `GET /admin/enums`, `GET /admin/enumTypes`, and `GET /admin/enumGroups/{enumerationGroupId}/members`. Use the configured REST base path, exact reason/group filters and all required pages. Do not mistake an API description for a successful read or use its write controls during diagnosis. [Entity Inspection](../maarg/entity-inspection.md) explains full keys, relationship inspection and its editable-screen cautions.

For escalation, keep the app/backend versions, workflow, reason ID/type, exact group and dates, before/expected/observed values, request timestamp, read status and page/cache scope. Share only sanitized evidence through the approved support channel. Exclude customer/order identifiers, private URLs, connection details, authentication data and raw payloads from public documentation.

## Source And Verification References

- [Company v2.8.0 release](https://github.com/hotwax/company/releases/tag/v2.8.0), [menu](https://github.com/hotwax/company/blob/v2.8.0/src/components/common/Menu.vue) and [reason page](https://github.com/hotwax/company/blob/v2.8.0/src/views/RejectionReasons.vue)
- [Reason reads, membership writes and ordering](https://github.com/hotwax/company/blob/v2.8.0/src/composables/useRejectionReasons.ts), [create dialog](https://github.com/hotwax/company/blob/v2.8.0/src/components/rejection-reasons/CreateRejectionReasonModal.vue), [text edits](https://github.com/hotwax/company/blob/v2.8.0/src/components/rejection-reasons/EditRejectionReasonModal.vue), [type changes](https://github.com/hotwax/company/blob/v2.8.0/src/components/rejection-reasons/VarianceTypeActionsPopover.vue) and [deletion](https://github.com/hotwax/company/blob/v2.8.0/src/components/rejection-reasons/RejectReasonActionsPopover.vue)
- [NetSuite variance page](https://github.com/hotwax/company/blob/v2.8.0/src/views/InventoryVariances.vue), [mapping and membership helpers](https://github.com/hotwax/company/blob/v2.8.0/src/composables/useNetSuite.ts) and [reference-cache domains](https://github.com/hotwax/company/blob/v2.8.0/src/workers/domains/referenceDomains.ts)

Installed versions, permissions, saved/failed/partial changes, app visibility, actual inventory effects, dependency-safe retirement and downstream delivery remain runtime-unverified. No screenshot is presented as evidence of these outcomes.
