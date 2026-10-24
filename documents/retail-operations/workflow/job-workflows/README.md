---
description: Find job workflows by business process and open the configuration and run-history guides.
---

# Job Workflows

Use these guides to understand what a job does and how it fits into a business process.

| Process | Guide |
| --- | --- |
| Maintain the pre-order catalog, tags, promise dates, and release schedules | [Pre-Orders](pre-orders.md) |
| Import orders and maintain order-related information | [Orders](orders.md) |
| Process fulfillment and order notifications | [Fulfillment](fulfillment.md) |
| Import inventory and synchronize Shopify availability | [Inventory](inventory.md) |
| Synchronize products and maintain product information | [Products](products.md) |
| Process bulk files and other supporting jobs | [Miscellaneous](miscellaneous.md) |

## Find and inspect a job

1. Open the Job Manager app and confirm the active instance and Product Store.
2. Use [Catalog](../../../system-admin/administration/job-manager/jobs/catalog.md) to find the job.
3. Open [Job details](../../../system-admin/administration/job-manager/jobs/job-details.md) and review its service, parameters, schedule, and state.
4. Inspect [Run history](../../../system-admin/administration/job-manager/jobs/run-history.md) to confirm the latest outcome.

The [Job Parameters](parameters.md) reference explains common inputs. Use the selected job's parameter definitions and configured values when editing it; a parameter or default used by one job does not apply to every job.

If a job does not run or finishes with an error, follow [Job runs and schedules](../../../system-admin/administration/job-manager/troubleshooting/job-runs-and-schedules.md). For jobs that process files, also inspect [File imports](../../../system-admin/administration/job-manager/troubleshooting/file-imports.md).
