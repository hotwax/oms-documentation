---
description: >-
  Use Job Manager to monitor operational health, manage service jobs, investigate
  file and message processing, and build data exports.
---

# Job Manager

Job Manager gives operations and technical teams one place to monitor scheduled work and investigate data processing in HotWax Commerce.

Open Job Manager from the HotWax Commerce Launchpad. Your account needs the `JOB_MANAGER_APP_VIEW` permission to enter the app.

## Choose a workspace

Use the app menu to open the workspace that matches your task:

| Workspace | Use it to |
| --- | --- |
| `Dashboard` | Review schedule health, queue activity, service diagnostics, file failures, and system message failures |
| `Catalog` | Find a service job and open its configuration |
| `Run history` | Investigate successful, failed, running, or terminated job runs |
| `File history` | Monitor files processed through master data management (MDM) configurations |
| `Manual uploads` | Upload a file through an available import configuration |
| `Message history` | Trace inbound and outbound system messages |
| `Message types` | Review or administer system message type definitions |
| `Remote systems` | Review or administer connected-system definitions |
| `Documents` | Build and run data documents |
| `Export history` | Investigate data document exports |
| `Settings` | Review the active instance, product store, time zone, app version, and data status |

## Start an investigation

1. Open `Dashboard`.
2. Review the health cards and diagnostics.
3. Select the count or action that matches the issue.
4. Use the filtered history or detail page to inspect the affected job, file, or message.
5. Record the identifier, status, time, and error before changing a schedule or configuration.

The Dashboard is an operational summary. Use the linked history and detail pages to confirm the underlying record before taking action.

## Work in the correct context

The app menu shows the active product store and time zone. Check this context before you run a job, upload a file, or interpret a timestamp.

Changing the product store refreshes supported job and file views. System messages do not use the product store as a global filter.

## Open the legacy app

Open `Settings`, then select `Go to Legacy App` when you need a workflow that is not available in the current app.

The app can also redirect to the legacy experience when the connected HotWax Commerce version does not meet the configured compatibility requirement. The compatibility threshold depends on the environment.

## Learn each workflow

- [Review the Dashboard](job-management/dashboard.md)
- [Find a job](job-management/jobs/catalog.md)
- [Investigate a job run](job-management/jobs/run-history.md)
- [Monitor imported files](job-management/mdm/file-history.md)
- [Trace system messages](job-management/system-messages/message-history.md)
- [Build a data document](job-management/data-documents/build-data-document.md)
- [Manage app settings](job-management/settings.md)
- [Troubleshoot Job Manager](job-management/troubleshooting/README.md)
