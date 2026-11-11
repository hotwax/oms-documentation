---
description: >-
  Monitor Maarg imports, inspect record failures and logs, and assess
  cancellation or recovery without creating duplicate work.
---

# Data Manager Imports

Use `MDM > Imports > Find Import` to locate an import and understand what happened to it. Start with the log ID and configuration, then compare the status, exact record counts, error files, and business outcome. A `Finished` import can still contain failed records.

This guide covers Maarg 6.4.0 with `maarg-util` 4.4.0. Menu placement and access depend on the deployment. It complements [Data Manager Configuration](data-manager-configuration.md), which covers configuration settings, templates, and uploads.

{% hint style="info" %}
Behavior is verified against the 4.4.0 source. The import filter screenshot was inspected on an authorized demonstration instance running `maarg-util` 4.3.0. No import records or logs were opened, and no uploads, cancellations, deletions, or recovery workflows were executed for this guide. Those workflows are source-verified only.
{% endhint %}

## Before You Start

- Confirm the environment, configuration, expected file, and business process with the import owner.
- Use an account authorized to inspect the relevant imports and content. Additional access may be required for administrative actions.
- Have the approximate upload time and its time zone, log ID if known, expected record count, and expected business changes available.
- Keep investigations read-only until a specific recovery action is approved.

{% hint style="warning" %}
Uploaded files, error files, parameters, and logs may contain customer data, identifiers, internal paths, or service details. Download only when needed, retain them in approved storage, and redact them before sharing. Do not use production content in screenshots or documentation.
{% endhint %}

## Confirm Which Route Owns The File

Before treating a missing MDM log as a failure, confirm that the current integration creates an MDM import for this file. An older reset-inventory configuration or a familiar screen name does not establish which route is active now.

Ask the integration owner to identify the affected environment and facility scope, the supported intake location, the producer or polling job, the consuming service, and the history that records its result. If the route has changed, confirm the cutover time and whether the change applies to this facility or region. Do not assume another location uses the same route.

| Confirmed route | Evidence to follow |
| --- | --- |
| The file creates a Data Manager import | Find its current Config ID and log ID, then check input, counts, errors, and business results below |
| The file enters through a System Message | Find the message by type, remote, file reference, and time; follow its consumer and any resulting import or business record |
| An integration platform transforms or forwards the file first | Correlate the source file with the generated output, delivery result, and the destination's processing record |

Use [System Messages](system-messages.md) and [Service Jobs](service-jobs.md) for the stages the installed route actually uses. A successful polling or producer job does not establish that its downstream consumer finished. Keep source and transformed file references separate; their names, record counts, and timestamps can differ.

### When A Legacy Inventory Import Is Missing

1. Verify the environment, facility, inventory quantity basis, original file reference, expected processing time, and time zone.
2. Confirm whether the current route still uses the old import configuration. If it does, check filters, retention, and the run evidence described below.
3. If the route changed, locate its current processing history and correlate this file to its result. Do not conclude that all files failed because the old screen has no new entries.
4. Check the intended product/facility inventory result at the relevant time. Distinguish a target QOH or ATP quantity from a signed adjustment; later sales, receipts, reservations, or syncs can make the current value differ from the earlier input.
5. If the supported intake location or processing history is unknown, stop and ask the integration owner to confirm it. Do not invent a replacement job/configuration or use a manual upload as a diagnostic test.

A file in an archive folder is not sufficient completion evidence. In the reviewed standard Maarg SFTP path, the poller can move a file after saving incoming messages, while message consumption is asynchronous. Follow the consumer and its business result. See [SFTP file troubleshooting](../ofbiz/data-manager/sftp-issue.md) for transport-stage checks.

Do not rename or re-upload the file, rerun a polling job, reset a message, or post an inventory adjustment merely to make a legacy log appear. First establish whether any part already succeeded and obtain approval for the specific recovery scope.

**Source scope for this route check:** The November 7, 2026 review used maarg-util 4.3.6 and framework 4.1.4 from the latest published distribution, Maarg 6.3.24. Its MDM list selects import-type Data Manager logs; it is not a universal history of every inventory integration. This narrow check does not replace the 4.4.0 screen/action baseline elsewhere in this guide or establish a tenant's migrated upload location. The authorized demo reached sign-in only; no file, payload, import, or inventory operation was tested.

### Check Inventory Row Identity And Outcome

Use this check when an inventory row reports an invalid product/location, or finishes without the expected stock change. First confirm the installed consumer. The details below apply only to Poorti **3.6.0** services `co.hotwax.poorti.FulfillmentServices.reset#ProductFacilityInventory` and `co.hotwax.poorti.FulfillmentServices.adjust#InventoryDeltaByIdentification`, with the OMS **3.6.0** inventory lookup. A familiar file name or legacy reset screen does not establish that your route calls either service.

1. Open the confirmed MDM configuration and read **Import Service Name**, or have the integration owner identify the System Message consumer and any wrapper/transform. Compare the actual service input with the original file. Use [Data Manager Configuration](data-manager-configuration.md) for template and field-name checks; do not copy columns between services.
2. Confirm the quantity contract. The reset consumes an absolute `externalInventoryLevel` interpreted by `inventoryResetEnumId`; the adjustment consumes a signed `availableDelta`. The reset also requires its `resetDataResourceId` source reference and a valid reset type. Missing quantity is not zero. Do not fill a blank with zero merely to pass validation. For QOH, ATP and downstream Shopify quantity comparisons, use [Compare Inventory And Reservation Timing](../order-flow/inventory-comparison.md).
3. Check the exact identifiers supplied to that consumer:

| Input choice | Read-only check |
| --- | --- |
| Internal product ID | Verify the exact `productId` in this environment. When supplied, it takes precedence over the external identifier pair in the reviewed lookup. A displayed product name or matching-looking SKU is not an internal ID. |
| External product identifier | Reset uses `productIdentType` and `productIdentValue`; adjustment uses `idType` and `idValue`. Check the corresponding effective **GoodIdentification** type/value record, including its dates. Preserve leading zeros and the actual transformed value. If several products share that identity, escalate the ambiguity rather than choosing a product or deleting a mapping. |
| Internal or external facility | `facilityId` takes precedence. Otherwise `externalFacilityId` is matched to **Facility.externalId**. A facility name, Shopify location ID or another system's code is not interchangeable with that field. The reviewed lookup rejects virtual facilities. |
| Product/facility linkage | Inspect the existing relationship and inventory item with the owner. Missing linkage alone is not a universal validation failure: these services can create it. Do not execute their find-or-create lookup as a diagnostic read or manually add linkage just to clear an error. |

Read the first actual error and identify the stage that produced it. These checks do not guarantee that every invalid input receives the same message or that one corrected field resolves the remaining prerequisites.

#### Distinguish Skipped, Unchanged And Applied Rows

A non-error response does not prove that identity was validated or inventory changed. In the reviewed services:

| Observed input or result | What to verify |
| --- | --- |
| Reset to zero using external product identity, with no matching effective product | After its required-input and reset-type checks, the reset can return a skip message before facility lookup. This is not evidence that the facility mapping is valid or that a product was created. |
| Adjustment with `availableDelta` equal to zero | It returns `applied=false` with a zero-delta skip reason before product/facility identity checks. A zero-row test therefore cannot validate those mappings. |
| Resolved reset whose calculated QOH and ATP differences are both zero | It records **ExternalInventoryReset** history without adding an inventory-detail change. History presence alone does not establish a stock change. |
| Adjustment that reaches processing | Inspect the reported applied delta, `applied`, `skipReason` and `physicalInventoryId` when retained by the route. When negative-inventory protection applies, the requested reduction can be limited or skipped according to QOH; do not assume the requested amount was fully applied. |

Follow the route's retained result, import error content, reset or physical-inventory reference, and resulting inventory detail. If the UI does not expose a field, request an authorized read-only check rather than inventing another upload or API call. Keep skipped rows separate from validation failures, zero-difference resets and actual changes. Match the same product, facility, quantity basis and processing time; a later current balance can include other transactions.

These are mutating services, not validation tools. Do not submit zero rows to test identity, replace a reset with a delta, change the reset basis, create products/facilities, or replay a file during diagnosis. Before an approved correction, reconcile earlier attempts and partial effects, resolve the actual input or mapping cause, and agree on the precise affected scope. OMS processing and subsequent Shopify publication require separate evidence.

**Source scope:** This subsection was checked on November 11, 2026 against Poorti 3.6.0 and OMS 3.6.0, with maarg-util 4.6.2 for configuration/history displays and framework 4.2.2 for required numeric input validation. These are the source baselines selected by latest-published Maarg 6.6.3. Older sections retain their stated baselines. This does not establish an installed route, supported upload location, or runtime outcome. The authorized demo again reached sign-in only; no input was submitted or inventory changed.

## Find An Import

1. Open `MDM > Imports > Find Import`.
2. Open `Find Options`.
3. Search by `Log Id` when available. Otherwise combine `Config Id` with a creation-time range.
4. Add status, store, or instance filters only when they help distinguish the intended run.
5. Select `Find`, then select the matching log ID.

![Data Manager import filters on the demonstration instance running maarg-util 4.3.0](../../.gitbook/assets/maarg-mdm-import-filters.jpg)

The screenshot shows only the import filter dialog. No operational import records are shown.

The list is restricted to import-type logs and initially sorts newest creation time first. It is not a combined import/export history.

| Filter or control | Use |
| --- | --- |
| `Log Id` | Find a specific execution record |
| `Config Id` | Limit results to the configuration used for the upload |
| `Created Date` | Narrow by log creation time, useful when the upload time is known |
| `Start Date` | Narrow by processing start time; pending work may not have one |
| `Cancel Date Time` and `Finish Date Time` | Search the corresponding stored timestamps |
| `Status Id` | Select a configured Data Manager Log status; clear it to inspect other outcomes |
| `Product Store Id` | Select a product store when one is recorded on the log |
| `Run By Instance Id` | Isolate work assigned to a server node |
| Record-count ordering and page size | Bring larger or failed runs into view and adjust the number of displayed results |

Use the configuration link to open its settings in a separate tab. When a row has a parent log ID, investigate that relationship before considering another submission.

## Read The MDM Runner Dashboard

The `MDM Runner` panel is a snapshot of the server node handling the page request. Match its `Instance ID` to the import's `Run By Instance Id`; the panel is not a cluster-wide total.

| Dashboard value | Interpretation |
| --- | --- |
| `Priority Pool` and `Normal Pool` | Separate worker pools selected by configuration priority |
| Threads `Active`, `Cur`, `Max` | Active thread count, current pool size, and configured maximum. Active equals Max is highlighted as a warning |
| Queue `Cur`, `Rem` | Number of queued tasks and remaining queue capacity. Zero remaining capacity is highlighted; queued tasks exceeding remaining capacity are also highlighted |
| `Last Executed` | Last recorded runner execution time, displayed with the user's time zone |
| `Instance ID` | Identifier of the current server node |
| Last Purge `At` | Last recorded purge time on this runner |
| `Total Purged` | Runner counter since server startup, not an all-time audit total |

The pool queue counts tasks and can include chunks of an import; do not equate it with the number of files in the list. Saturation is a reason to assess workload and wait times, not proof of a failed import.

Blank pool values or `-` timestamps can mean that runner information is not available on this node. In the baseline, the runner has a startup delay and a configurable interval, and it can be disabled by configuration. Ask the operator to verify initialization, node identity, and runtime settings before diagnosing the runner as stopped. Do not restart the service as a first troubleshooting step.

## Inspect The Import Record

The `Data Manager Log` page brings together the execution record, parameters, and content files.

1. Confirm `Log Id`, `Config Id`, and any `Parent Log Id`.
2. Review creation, start, finish or cancellation timestamps and execution time.
3. Record `Run By Instance Id` and `Run Thread` for correlation with application logs.
4. Review `Created By Job Id` and `System Message Id` when populated. They provide context about the producer of the import; they do not prove that upstream or downstream work succeeded.
5. Compare `Total Record Count` and `Failed Record Count` with the expected input.
6. Review `Parameters`, then the relevant entries under `Content Files`.

The list abbreviates large record counts; hover text and the detail page expose the exact values. Counts may be populated at completion rather than continuously. A zero or blank count during processing is not sufficient evidence that no records have changed.

`Total Record Count` is the count processed/read by the loader, including failed records. For a cancelled run it may cover only the processed portion. Do not treat it as an independently verified count of every record in the original file or as a count of committed business changes.

### Parameters

Use the list's parameter `View` action or the detail page's `Parameters` section to inspect saved name/value pairs. Examples include an approved `groupBy` value or inputs supplied by the process that created the import.

The parameter dialog reports `No parameters found.` when no separate parameter records exist. This alone does not make the import invalid; the input file can supply its data.

### Status History

Select the status/history control on the detail page to review recorded status changes, newest first. The history shows the new status, change time, and recorded user. It is based on audit entries for the log's status field. `No status history found.` means no matching audit entries were returned; it is not evidence that the import never ran.

### Content Files

The list shows the newest uploaded-file and error-file content entry for each log. The detail page lists all associated content entries, newest first, including their type, file name, storage location, size, and date.

- `Uploaded file` is the input associated with the import.
- `Error file` contains record-level error output when one was generated. CSV output includes error-message information; JSON output can include `_ERROR_MESSAGE_`.
- `Log file` is diagnostic execution output.

Use the download control only for the evidence you need. An error file is diagnostic material, not automatically a valid recovery input. Compare it with the original records, correct the underlying cause, and rebuild an approved input using the current service contract. Do not blindly re-upload it.

## Interpret Statuses With The Evidence

| Status | Meaning and next check |
| --- | --- |
| `Pending` | Available for the runner to pick up. Check configuration, earlier work, and runner availability before treating it as stalled |
| `Queued` | Dispatched or reserved for processing. It may be waiting for earlier files or worker capacity |
| `Running` | Processing has started. Correlate timestamps, node, thread, and log output |
| `Finished` | Processing reached its normal finish path. Check failed-record count, errors, expected count, and business results before calling it successful |
| `Failed` | Processing encountered a failure path. Read the diagnostic log; previously processed records may already have committed |
| `Crashed` | Work was identified as interrupted during startup recovery. Look for a newer child log before taking any recovery action |
| `Cancel Requested` | A running import has been asked to stop. It is still active until processing observes the request and terminates |
| `Cancelled` | The import was cancelled before processing or stopped after some processing. This does not roll back earlier changes |

Record-level service failures can be collected while processing continues, and the run can finish with a nonzero failed count. Each record is submitted through its own service transaction in the baseline; a file is not an all-or-nothing transaction. Counts and statuses must be reconciled with the actual business records.

## Read The Execution Log

1. Use the row's log-file icon or `View Log` on the detail page.
2. Review the first useful error in context and correlate it with the affected records and service.
3. If available, select `Download full log file` when the displayed tail is insufficient.

The inline viewer reads the per-import log on the current node. It displays at most the latest 2,000 lines and also applies a byte limit, so it may show less of the history than expected. Error, warning, information, and debug lines receive visual emphasis. A truncation notice means earlier output is not visible.

`Log file not available for log ...` can result from a different execution node, retention, missing storage, or a file that has not been created. It does not establish success or failure. Check the record's content entries and executing instance with the operator. A content record or download icon also does not guarantee that the underlying file is still present.

## Investigate A Failure Or Delay

1. **Preserve the identity of the run.** Record the environment, log ID, configuration, file name, timestamps and time zone, status, exact counts, node, and any parent ID.
2. **Check for related work.** Look for another import of the same file or a newer child log. Verify whether an upstream job or system message already produced another attempt.
3. **Locate the failure stage.** Pending or Queued points first to dispatch and capacity checks. Running with no visible progress requires node and log checks. Finished with failures requires record-level validation. Failed requires the exception context.
4. **Compare input and service.** Verify required fields, identifier formats, referenced records, and the configuration's current service. Review parameters and grouping where relevant.
5. **Reconcile partial effects.** Determine which business records changed, which did not, and whether external calls or downstream activity occurred. Do this before deciding the scope of any replacement input.
6. **Choose a bounded recovery.** Obtain the owner's approval for the corrected records and target environment, validate a representative sample, and confirm that replay is safe. Retain the original log ID as context for the recovery record.
7. **Verify the outcome.** Check the new run's terminal status, exact counts, error content, and expected business state. A second upload or a cleared error message is not the completion criterion.

These screens do not expose a general Retry or Reprocess action. Do not emulate one by editing database statuses, restarting the server, or repeatedly uploading the same file.

## Cancel An Import When Approved

**Source-verified procedure.** Cancellation controls are in the configuration detail page's `Data Manager Logs` section.

1. Open the configuration and locate the exact log ID.
2. Refresh and verify its current status.
3. For `Pending` or `Queued`, select `Cancel` and confirm the dialog. The action requests the Cancelled status and records a cancellation time.
4. For `Running`, select `Request Cancel` and confirm the dialog. The action records `Cancel Requested`; the screen shows that stopping is pending.
5. Continue checking the log and business effects until its outcome is clear. Escalate if cancellation remains requested without progress.

The runner cooperatively checks cancellation rather than terminating an in-flight service call. In this baseline the CSV and JSON loaders check at 10,000-record boundaries; chunks can be active concurrently. A short import or one near completion may finish before it observes the request. Do not promise immediate stopping, and do not use deletion as a substitute for cancellation.

## Account For Automatic Crash Recovery

**Source-verified background behavior.** On startup, an enabled runner waits for its configured initialization delay. It then examines logs that were Running or Queued for the same instance ID. It marks those original logs Crashed and creates new Pending child logs linked through `Parent Log Id`, copying their import parameters and uploaded-file references.

Before a manual recovery, find those child records and verify whether they are Pending, Queued, Running, or already complete. The relationship is visible on a child's details and in the lists. A parent marked Crashed does not mean that processing will remain stopped.

The recovery path can process the input again, so prior side effects and duplicate protection matter. Restarting a node or uploading another copy is not a safe default response to a stalled-looking import. Have the operator and service owner agree on one recovery path.

## Retain Evidence Before Cleanup

**Source-verified destructive behavior.** The configuration log list has a delete control. Its service removes the log, parameter records, and content records, and can delete their underlying files. It is not an undo-import action and does not reverse business data changes.

Do not delete active work, a Cancel Requested import, or evidence needed to investigate an incident. Review parent/child relationships and retention requirements before an approved cleanup. The service has limited checks for content referenced by other active logs; those checks are not a guarantee that every related record or diagnostic need is protected.

Automatic retention also applies. In this baseline the runner selects older terminal-state logs for its own instance, based on creation date; the default age is 30 days and is configurable. Preserve required evidence under your organization's policy rather than relying on the history being permanent. The dashboard's purge counter is operational information, not confirmation that every associated file was successfully deleted.

## Troubleshooting

| Symptom | Next check |
| --- | --- |
| Known import is missing | First confirm that the active route creates an MDM import here. Then check environment, filters, retention, and approved cleanup; use the route's own history if it bypasses this configuration |
| Pending despite available-looking capacity | Confirm the runner node and initialization, configuration mode, and earlier queued/running work for that configuration |
| Finished with failed records | Inspect error content and the full log, reconcile partial updates, and prepare only the approved recovery scope |
| Failed with zero displayed records | Do not assume nothing changed. Counts may not have been finalized; verify logs and business records |
| No error-file icon | Failure may have occurred before record-level error output was generated. Read the diagnostic log and content list |
| Missing completion time in the list | Open details and status history. The list renders finish time for Finished and cancellation time for Cancelled/Crashed; other terminal statuses can have a blank completion display |
| Cancel Requested persists | Check the executing node and active service work. Cancellation is cooperative and may wait for a check boundary |
| Crashed parent and a new Pending log | Investigate automatic startup recovery before any manual replay |
| Download fails | Confirm that the content still exists in the configured storage and that you have access; an old metadata record is not proof of a retained file |

When escalating, send the log/configuration IDs, versions, timestamps with time zone, counts, executing instance, parent/child IDs, and a redacted error summary through an approved channel. Include the expected business outcome and the checks already performed. Share raw input or logs only when authorized and necessary.
