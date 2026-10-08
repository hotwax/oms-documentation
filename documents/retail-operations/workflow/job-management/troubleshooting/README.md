---
description: Choose the current Job Manager workflow for a job, file, message, or export issue.
---

# Troubleshoot Job Manager

Start with the identifier and current status of the affected record. Use the page that owns that record:

| Problem | Start here |
| --- | --- |
| A job did not run, failed, or has the wrong schedule | [Troubleshoot job runs and schedules](job-runs-and-schedules.md) |
| A file is pending, failed, or contains rejected records | [Troubleshoot file imports](file-imports.md) |
| An integration message failed or stopped | [Troubleshoot system messages](system-messages.md) |
| A data document export failed or did not arrive | [Troubleshoot data document exports](data-document-exports.md) |

## Capture evidence first

Record:

- Exact job, run, file, message, or export identifier
- Current status
- Instance, product store when applicable, and time zone
- Start and completion times
- First actionable error
- Parameters or configuration used

Do not rerun, resubmit, or change status until you confirm whether the original request is still processing.

## Refresh stale app data

Open `Settings` > `Data Fetch Status`. Refresh the affected data source, then return to the record.

Use `Refresh All` only when multiple reference-data areas are stale.
