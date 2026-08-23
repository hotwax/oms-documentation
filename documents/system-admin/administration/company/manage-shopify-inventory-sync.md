---
description: Monitor and reconcile inventory published from HotWax Commerce to Shopify.
---

# Monitor Shopify inventory sync

Use the `Inventory sync` dashboard in the Company App to monitor inventory published from HotWax Commerce to Shopify. The dashboard separates physical-location quantity on hand from aggregate-channel available-to-promise inventory, so you can investigate the correct path before changing a schedule or running a reset.

This guide covers outbound inventory updates after a Shopify connection is set up. It does not import starting inventory from Shopify. For the one-time inbound quantity-on-hand seed, follow [Chapter 8 of Set up HotWax Commerce with Shopify](product-store-onboarding.md#8-seed-starting-inventory-from-shopify).

## Understand the two inventory paths

HotWax Commerce can publish inventory to Shopify in two ways:

| Inventory path | Shopify target | Control | Reconciliation job |
| --- | --- | --- | --- |
| Physical-location inventory | A Shopify location mapped to one HotWax facility | `Real-time inventory push for this shop` | `Reset physical location QOH` |
| Aggregate-channel inventory | One Shopify location that represents a group of facilities | `Inventory channel event updates` and its event sources | `Reset aggregate ATP` for the affected channel |

Quantity on hand (QOH) is the physical count at a location. Available-to-promise (ATP) is the quantity available for new orders after HotWax Commerce applies reservations and sourcing rules. Do not use a physical QOH reset to repair an aggregate ATP target, or an aggregate ATP reset to repair a physical-location target.

See [Understand sourcing concepts](../../../retail-operations/inventory/available-to-promise/concepts.md) for the rules that determine which facilities contribute to a channel.

## Open the inventory sync dashboard

1. Open the **Company App** from the HotWax Commerce Launchpad.
2. Select `Shopify` from the menu.
3. Select the Shopify connection that you want to monitor.
4. Select `Inventory sync` under `Products & Inventory`.

Before you rely on the dashboard, open `Access scopes` on the connection and confirm both write gates:

* Under `Connection access`, confirm `SHOP_RW_ACCESS`. Do not select `SHOP_READ_WRITE_ACCESS`; it has the same description but does not satisfy the current service gate.
* Under `Granted OAuth scopes`, refresh the Shopify scopes and confirm `write_inventory` for the approved connection profile.

Resolve either missing gate through the approved Shopify connection flow before you publish or reset inventory.

## Read the dashboard

Start with the queue and job-health cards. They answer two different questions: what is waiting, and what should move it.

### Review the aggregate event queue

The `Aggregate event queue` card shows:

* `Aggregate events pending batching`: Calculated adjustments that are not assigned to a System Message
* `Batches pending delivery`: System Messages that are waiting to send, retrying, or in an error state
* `Next batch send`: The next active publisher schedule
* `Oldest unbatched event`: The earliest calculated adjustment still waiting for a batch

The pending-event count represents inventory event-detail rows. One receipt, reservation, or configuration change can create rows for multiple channels or Shopify inventory items, so do not interpret this number as a count of business events or products.

`Next batch send` is the earliest active channel-publisher run that the dashboard can find. It does not confirm that every channel has a publisher, that the produced-message sender is active, or that Shopify has received a batch.

Select an event or batch row to open inventory event history.

{% hint style="warning" %}
When the page displays `Inventory data could not be loaded from the OMS`, the counts are unavailable, not confirmed zero. Retry the load before you conclude that nothing is pending.
{% endhint %}

### Review inventory sync jobs

The `Inventory sync jobs` card shows each supported job as `Active`, `Paused`, or `Not configured`. It also shows the latest cached run and next active schedule.

| Job | Scope | Purpose |
| --- | --- | --- |
| `Publish and send event batches` | One inventory channel | Batches calculated aggregate adjustments for delivery |
| `Process effective-dated inventory changes` | OMS-wide | Processes inventory changes that become effective at a later time |
| `Reset physical location QOH` | One Shopify connection | Reconciles every mapped physical Shopify location with HotWax QOH |
| `Reset aggregate ATP` | One inventory channel | Replaces the target location quantity with the channel's current ATP |
| `Send produced inventory batches` | OMS-wide, when available | Sends produced Shopify inventory-adjustment System Messages |
| `Discard unbatched events` | One selected channel, manual only, when available | Cancels pending events that must not be sent |
| `Purge old inventory events` | OMS-wide, when available | Removes old ledger details according to the connector retention policy |

The jobs displayed depend on the installed Company and Shopify connector releases. `Process effective-dated inventory changes` and `Purge old inventory events` are connector-seeded jobs. If either is missing, treat it as a deployment gap. Do not copy a job definition from another instance.

Inspect the individual rows before you use the rollup as a health verdict. A manual recovery job can be intentionally paused and have no schedule while the automatic publication pipeline remains healthy.

Select a configured job to review its internal name, service, active state, schedule, parameters, recent runs, and edit history. Select `Run now` only after you confirm the job scope and verify that an earlier run is not active.

A completed run means that the job has an end time and did not report an error. It does not prove that Shopify now matches HotWax Commerce. After a reset or recovery run, compare representative item quantities at the affected Shopify target.

If the dashboard offers `Set up`, the app creates the missing job in a paused state. Open the new job and verify its parameters and schedule. Activate only jobs approved for scheduled execution. Keep `Discard unbatched events` paused and unscheduled.

Some Company versions allow supported job parameters to be edited in the job modal. Keep `inventoryChannelId` unchanged for a channel publisher or reset job because that value defines which channel the job belongs to.

Editable job parameters; dedicated sender, discard, and purge rows; per-channel publisher and reset controls; and the `Inventory channel` history filter require a Company build newer than v2.2.1. In v2.2.1, review the deployed jobs in Job Manager and use the Shopify target filter in event history.

### Configure a channel publisher safely

Keep the `publish_PendingShopifyInventoryAdjustments` template paused. Each inventory channel needs its own cloned publisher job. Before you activate a clone, confirm:

* `inventoryChannelId` identifies the intended channel.
* `maxChangeCount` is `100`, unless the implementation plan specifies another tested batch size.
* `staleSendingMinutes` is `60`, unless the implementation plan specifies another recovery window.
* The schedule belongs to this channel and does not overlap an unintended publisher.

A newly created clone is paused. Activate it only after its channel, parameters, and schedule are correct; do not activate the template itself.

### Configure the produced-message sender safely

When the sender's `systemMessageTypeIds` value is blank, that job sends all supported System Message types. It is a shared sender, not an inventory-only sender. Do not change or replace a shared sender as an inventory recovery action.

Some Company versions can show the sender as both `Active` and `Set up`: an active shared sender exists, but a dedicated inventory sender does not. A dedicated inventory sender is created paused and should use:

* A five-minute schedule
* `systemMessageTypeIds` set to `ShopifyInventoryAdjustment`
* `mode` set to `sync`

Review the shared delivery design with the deployment owner before activating a dedicated sender, so the same messages are not targeted by unintended schedules.

### Verify reset job scope

App-created reset jobs start paused. Use these defaults to audit a newly created job; preserve an approved deployment-specific schedule when it intentionally differs.

* The physical QOH reset runs hourly by default. Its parameters must include `systemMessageTypeId=ResetInventoryQoh`, the selected shop's `systemMessageRemoteId`, and `runAsBatch=true`. Together, these values define its Shopify connection scope.
* Each aggregate ATP reset runs every four hours by default. Its protected `inventoryChannelId` must identify exactly one inventory channel.

Do not copy a physical reset between connections or an aggregate reset between channels by changing only the job name. Verify the scope parameters first.

### Discard unbatched events safely

`Discard unbatched events` is one OMS-wide manual recovery job that acts on one selected channel per run. Keep it paused and without a schedule. Never activate or schedule it.

When obsolete unbatched events must be removed:

1. Open the discard job and select the intended `inventoryChannelId`.
2. Enter and review the reason.
3. Select `Save`.
4. After the modal closes, reopen the job and verify the stored channel and reason.
5. Select `Run now` once.
6. Run a full aggregate ATP reset for that channel.

{% hint style="danger" %}
`Run now` does not save draft parameters. If you select it before `Save`, the job runs with its previously stored channel and reason. Reopen and verify the saved values before every discard run.
{% endhint %}

### Review recent resets and batches

The lower dashboard sections show:

* Recent full physical-location QOH reset runs
* Recent full aggregate ATP reset runs
* Aggregate event batches and their Shopify targets

Each run card shows its run identifier, start time, parameters, scope, result, and whether the job reported an error. Select `View all runs` to search one job's history by run, service, user, parameters, result, and status.

The job modal previews only the five most recent runs and ten edit-history records. Use `View all runs` when the required execution is not in that preview.

The job-run page loads at most the 500 most recent runs. When it reaches that limit, it displays a warning rather than presenting the results as complete history.

## Set up an aggregate inventory channel

An aggregate inventory channel maps one channel facility group to one Shopify location. Eligible inventory from the facilities in the group contributes to that target after the channel's brokering, safety-stock, threshold, and demand rules are applied.

Before you begin:

* Create and review the channel facility group in `Sourcing` > `Channels`.
* Confirm the facilities that belong to the group.
* Create or select a Shopify location intended only for aggregate inventory.
* Do not use a Shopify location that already represents a physical HotWax facility.

Follow these steps:

1. Open the `Inventory sync` dashboard.
2. Select `Set up channel`.
3. Select a facility group. The app lists only groups of type `CHANNEL_FAC_GROUP` and shows their store, warehouse, configuration, and other facility counts.
4. Review every facility count. A facility with an uncommon type can still contribute inventory and appears in `other`.
5. Select `Next`.
6. Select the Shopify aggregate location.
7. Select `Create channel`.

The location list excludes locations that already back a physical HotWax facility or another active inventory channel. A location mapped to the `_NA_` placeholder can appear as `Suggested` because it is not assigned to a physical facility. Use `_NA_` only for an intentionally unassigned aggregate target, not as the mapping for a real store or warehouse.

After the channel is created, the app attempts to create its aggregate reset and event-publisher jobs and the connection's physical reset job. These jobs are created paused.

{% hint style="warning" %}
If the channel is created but one or more jobs fail, do not create the channel again. Return to the dashboard and use `Set up` for each missing job. Run a full aggregate ATP reset before you rely on incremental events for the new channel.
{% endhint %}

## Edit or expire a channel

Select a channel from the `Inventory channels` section to manage it.

The Shopify shop and facility group are fixed because they define the channel's identity. You can update the description and choose another eligible aggregate location. When the channel row or edit dialog displays reset scheduling, use it to open the same channel-scoped reset job shown in `Inventory sync jobs`.

### Move an aggregate target

1. Select the channel.
2. Select the new Shopify aggregate location.
3. Confirm that no other active inventory channel uses the new target. The edit dialog does not exclude every target claimed by another channel.
4. Review the warning.
5. Save the change.
6. Run a full aggregate ATP reset for the channel.
7. Confirm that the old target is cleared and the new target contains the current channel ATP.

The Company warning states that inventory placed by the channel should be cleared from the old target. Saving the edit records the new target, while the connector performs the inventory clearing. Verify both Shopify locations after the save and reset. If the old target remains stocked, do not reuse it; record the channel and location identifiers and escalate the failed clear. Incremental events alone do not seed the complete quantity at the new location.

### Expire a channel

1. Open the channel's publisher and aggregate reset jobs in Company or Job Manager and record their internal job names.
2. Pause both jobs and save each change.
3. Verify that neither job has an active run.
4. Review event history for the channel. If it has unbatched events or a batch awaiting delivery, stop and follow the approved channel-decommission plan before you expire it.
5. Select the channel.
6. Select `Expire` under `Stop using this channel`.
7. Review the target and channel.
8. Select `Expire channel`.

Expiration is intended to stop aggregation into the target and clear the inventory that the channel placed there. Verify the Shopify target after expiration. HotWax Commerce retains the mapping so historical events remain attributable to the expired channel.

Expiration removes the channel from the active channel rows, but the Company page does not show it pausing or deleting the channel's publisher and reset jobs. Use the recorded job names to find those jobs in Job Manager and confirm that they remain paused. If the Shopify target is not cleared, record the channel and location identifiers and escalate before assigning the location elsewhere.

## Manage real-time inventory controls

The dashboard contains three controls with different scopes. Review the scope and recovery action before changing one.

| Control | Scope | What happens when it is off | Recovery after it is turned on |
| --- | --- | --- | --- |
| `Real-time inventory push for this shop` | The selected Shopify connection | Physical inventory changes for that shop are skipped. No backlog is created. | Run `Reset physical location QOH`. |
| `Inventory channel event updates` | Every Shopify connection on the OMS | The aggregate event feed changes from real-time push to manual processing. | Reconcile aggregate ATP, enable the feed, then restart every OMS node. |
| An individual `Event source` | One class of aggregate inventory change across the OMS | That class of event is not recorded. No backlog is created. | Turn the source on, then run full aggregate ATP resets for affected channels. |

{% hint style="danger" %}
Changes made while the shop-specific push or an individual event source is off do not create a backlog and will not replay later. Reconcile affected targets with the correct full reset before you rely on real-time updates again.
{% endhint %}

When you enable `Inventory channel event updates`, restart every OMS node so that Moqui registers the real-time feed. When you switch it to manual, new real-time events can continue for up to 15 minutes while the cached feed configuration expires.

### Review event sources

Event sources determine which OMS changes create aggregate inventory events. The supported sources cover:

* Shipment receipts
* Point-of-sale item issuances
* Physical inventory changes and external inventory resets
* Reservation creation and release
* Product-facility and product-store facility configuration changes
* Facility-group membership changes
* Inventory-channel configuration changes

If a source displays `Not loaded on this OMS`, the connector's seed data is missing. The toggle cannot create the missing source. Record the source name and ask the deployment owner to load the matching connector seed data.

## Audit aggregate inventory events

Open inventory event history from an aggregate queue row or select `Event history` in the batch section.

Use search and the available filters to narrow the history by:

* Event key or event type
* Shopify inventory item identifier
* Shopify target
* Batch identifier
* Event status
* Newest-first or oldest-first order

Builds newer than v2.2.1 provide an `Inventory channel` filter. In v2.2.1, use the Shopify target filter or search by the channel label or target.

The ledger identifies a Shopify inventory item, not an OMS product record. Use the displayed Shopify inventory item identifier when you compare the event with Shopify.

Choose `All events` to review each adjustment or `Grouped by batch` to review the System Message that carries a set of adjustments.

### Read event states

| State | Meaning | Next check |
| --- | --- | --- |
| `Unbatched` | The adjustment is calculated but has no System Message | Check the channel publisher and its next run. |
| `No change` | The calculation produced no adjustment | Open the event and review the calculation comment. |
| `Error` | The event could not be calculated or assigned | Open the event, record its key, and review the error context. |
| Assigned to a batch | The event follows the System Message delivery state | Open the batch and review its status and errors. |

Open an event to review its key, status, Shopify inventory item, inventory channel, Shopify target, adjustment, batch, and calculation comment.

The history page is an operational monitor, not a permanent archive. It normally loads a recent window of up to 500 ledger records and also retains pending events and unresolved batches. Use exported or backend records when an investigation requires older history.

### Investigate and resend a failed batch

1. Open `Grouped by batch`.
2. Select the failed batch.
3. Record the System Message identifier, target, status, and delivery errors.
4. Review the included event keys and net adjustments.
5. Correct the connection, access, or data problem that caused the failure.
6. Select `Resend` once.
7. Refresh the batch and confirm its new delivery state. Do not use an unchanged error list as proof that no new attempt occurred.

The app resends the same frozen payload and idempotency key. Review the resulting Shopify and System Message states before another retry. Repeated retries without correcting the cause still create noise and delay recovery.

The batch dialog fetches up to 50 delivery errors and can retain that cached set after the dialog or page is reopened. Use backend System Message error records to inspect the newest attempt, more than 50 errors, or older error history.

Select `Message text` when the technical team needs the stored System Message payload. If the dialog says that the payload is still loading, refresh or reopen it before treating the displayed content as exact. Keep credentials and customer data out of screenshots and tickets.

## Audit common inventory discrepancies

### One physical Shopify location is stale

1. Confirm that the Shopify location maps to the intended HotWax facility.
2. Confirm that `Real-time inventory push for this shop` is enabled.
3. Review `Reset physical location QOH`, including its active state, schedule, parameters, and latest run.
4. Compare sample HotWax QOH values with the same Shopify physical location.
5. Run the physical QOH reset only after you confirm its connection scope.

### One aggregate Shopify location is stale

1. Confirm that the inventory channel maps the intended facility group to the intended Shopify target.
2. Review the channel's facility membership and sourcing rules.
3. Confirm that `Inventory channel event updates` and the relevant event source are active.
4. Check the oldest unbatched event and the channel publisher.
5. Check pending batches and the produced-message sender when it is displayed.
6. Open failed batches and record their System Message errors.
7. Run the channel's full aggregate ATP reset when events were skipped or the target moved.

### Events remain unbatched

1. Filter history to `Unbatched` and the affected channel.
2. Record the oldest event time.
3. Review the channel publisher's active state, next run, and recent runs.
4. Use `Set up` when the publisher is not configured.
5. Activate and schedule a newly created publisher after you verify its `inventoryChannelId`.

### Batches remain produced or enter an error state

1. Open the batch and record its System Message identifier.
2. Review `Delivery errors` and `Message text`.
3. Check the inventory-batch sender when it is displayed, or the deployed System Message sender in Job Manager.
4. Confirm Shopify write access and the target location.
5. Correct the cause, then resend the batch once.

### One kind of inventory change never appears

1. Identify the missing business event, such as receipt, reservation, point-of-sale issuance, or configuration change.
2. Find the matching event source.
3. Distinguish `off` from `Not loaded on this OMS`.
4. Enable a loaded source or ask the deployment owner to load missing connector seed data.
5. Run full aggregate ATP resets for affected channels because missed changes are not replayed.

Contact the technical team with the Shopify connection, inventory channel, target location, event key, System Message identifier, job-run identifier, timestamps, and the first recorded error when the same discrepancy returns after reconciliation.
