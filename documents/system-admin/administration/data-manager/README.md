---
description: Configure backend master data management imports and understand queue behavior.
---

# Configure Data Manager

Data Manager configuration defines how files enter and leave the HotWax Commerce Order Management System. Use these administration pages to maintain import services, execution modes, templates, and queue behavior.

Use Job Manager for daily operations:

- [Upload a file manually](../../../retail-operations/workflow/job-management/mdm/manual-uploads.md)
- [Monitor file processing](../../../retail-operations/workflow/job-management/mdm/file-history.md)
- [Review file details](../../../retail-operations/workflow/job-management/mdm/file-details.md)

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

## Choose an execution mode

| Execution mode | Behavior |
| --- | --- |
| `Queued` | Waits in the shared queue and processes in queue order |
| `Async` | Processes in the background when resources are available without waiting for the shared queue |
| `Sync` | Processes immediately in the submitting request |

Use `Sync` only when the service owner has confirmed that the file size and operation are safe. Large synchronous imports can consume resources needed by other work.

## Understand the queue poller

Queued imports enter File History in a pending state. The configured bulk-file processing job finds pending files and starts processing them.

When one poller run is already processing the queue, a later scheduled run can stop without starting another processor. Check the run result and active file before treating this behavior as an error.

Use [Troubleshoot file imports](../../../retail-operations/workflow/job-management/troubleshooting/file-imports.md) to check the queue and processing job from Job Manager.

## Configure with care

Before you change a configuration:

1. Record its current service, execution mode, and template.
2. Confirm every source that uses the configuration.
3. Test the change with approved non-production data.
4. Monitor the resulting file in Job Manager.
5. Restore the previous configuration when the test does not produce the expected contract.

See [Configuration options](configuration-options.md) and [Frequently used configurations](freq-used-configurations.md) for the available backend fields and examples.
