---
description: Configure backend master data management imports and understand queue behavior.
---

# Configure Data Manager

Data Manager configuration defines how files enter and leave the HotWax Commerce Order Management System. Use these administration pages to maintain import services, execution modes, templates, and queue behavior.

Use Job Manager for daily operations:

- [Upload a file manually](../job-manager/mdm/manual-uploads.md)
- [Monitor file processing](../job-manager/mdm/file-history.md)
- [Review file details](../job-manager/mdm/file-details.md)

## Open Data Manager configurations

1. Open the Order Management System.
2. Open the main menu.
3. Select `Settings`.
4. Select `Data Manager Configurations`.

The exact administration menu depends on the connected Order Management System version and your permissions.

## Understand a configuration

A Data Manager configuration represents one import or export contract. Separate configurations can use different:

- Import or export services
- File formats
- Execution modes
- Templates
- Priorities
- Notification behavior

For example, order imports, fulfillment updates, and inventory resets can each use a different service and data contract.

Most configurations use a generic HotWax Commerce service after middleware transforms the source data. A native integration can use a service designed for that system’s original payload.

## OMS runner and thread pools

The following behavior applies to the OMS Data Manager. Legacy OMS instances use a different bulk-file processor; confirm the connected backend before changing execution settings.

The OMS runner dispatches pending imports to two dedicated worker pools, `PRIORITY` and `NORMAL`. A configuration priority greater than `6` selects `PRIORITY`; `6` and below select `NORMAL`. An empty priority defaults to `5`.

| Execution mode | OMS runner behavior |
| --- | --- |
| `Queue` (`DMC_QUEUE`, also used when the mode is empty) | Processes files sequentially within each configuration, ordered by creation date |
| `Async` (`DMC_ASYNC`) | Submits files for concurrent processing when pool capacity is available |
| `Sync` (`DMC_SYNC`) | Remains an available configuration value, but the current OMS runner uses the same pool-processing branch as other non-queue values |

The OMS upload service creates a `Pending` import for the runner regardless of execution mode. Selecting `Sync` does not make this upload execute immediately in the submitting request.

Queued processing does not provide a global FIFO guarantee across configurations, even when they share a pool. An inventory reset and an order import using different configurations can run concurrently. Do not rely on queue mode alone to make one configuration wait for another.

The runner checks for work every `60` seconds by default. The `scheduled_mdm_check_time` setting controls this interval; a value of `0` or less disables the runner. After startup, recovery and scheduling begin after `mdm_reschedule_delay` seconds, which defaults to `120`.

On the OMS administration `Find Import` page, the MDM Runner panel displays each pool's active, current, and maximum thread counts, queue depth and remaining capacity, and the runner's last execution time. A saturated thread pool is highlighted as a warning; a full queue is highlighted as a danger state.

## OMS file storage and retention

Manual uploads use the configured `mantle.content.root`, defaulting to `runtime://datamanager`, with an `imported/{configId}/` subdirectory. The SFTP polling service stores downloaded files under `runtime://datamanager/imported/{configId}/` before creating imports. The log links to the stored content.

Failed records can produce a separate error file linked to the log. Download it while the log and file remain available. Multi-threaded CSV and JSON imports use temporary chunks under `runtime/tmp/DM_{logId}/`; the runner attempts to remove this directory during cleanup.

Logs and files are not retained indefinitely. The runner automatically purges terminal logs (`Finished`, `Failed`, `Crashed`, and `Cancelled`) whose creation date is older than `datamanager_purge_days`, which defaults to `30` days, and whose `runByInstanceId` matches the current instance. Cleanup is scheduled when there are no pending configurations and the normal activity counter is zero; the age threshold is not an exact deletion deadline.

Manual deletion and automatic purging use the same removal service. It removes the log, parameters, and content records and deletes referenced files that exist. A file is preserved if another `Pending`, `Queued`, or `Running` log references the same content location. Save required audit files before deletion or expiry.

## Configure with care

Before you change a configuration:

1. Record its current service, execution mode, and template.
2. Confirm every source that uses the configuration.
3. Test the change with approved non-production data.
4. Monitor the resulting file in Job Manager.
5. Restore the previous configuration when the test does not produce the expected contract.

See [Configuration options](configuration-options.md) and [Frequently used configurations](freq-used-configurations.md) for the available backend fields and examples.
