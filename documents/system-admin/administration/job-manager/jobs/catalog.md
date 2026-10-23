---
description: Find service jobs, create a job, and review its configuration before enabling it.
---

# Find and create jobs

Open `Jobs` > `Catalog` to find service jobs available in the active HotWax Commerce instance.

<figure><img src="../../../.gitbook/assets/job-manager/job-catalog-filters.png" alt="Catalog search, category, and status filters"><figcaption><p>Use catalog filters to narrow the available jobs.</p></figcaption></figure>

## Search the catalog

Enter a job name, product identifier, or service name in `Search jobs`. Matching text is highlighted on each result.

Use the category chips to narrow the list:

1. Select a primary category.
2. Select a subcategory when the second row appears.
3. Select a status.

The catalog provides these status filters:

| Status | Meaning |
| --- | --- |
| `Scheduled` | The job has an active schedule |
| `Paused` | The job schedule is paused |
| `No schedule` | The job does not have a cron expression |
| `Draft` | The job definition is not available for normal execution |

Select `All` or clear the search to reset a filter.

## Read a job card

Each card can show:

- Job name
- Product identifier
- Service name
- Category
- Enabled, paused, unscheduled, or draft state
- Human-readable schedule

Select the card to open the job.

## Check the active product store

The selected product store can affect the jobs returned by the catalog. Check the product store in the app menu before you conclude that a job is missing.

## Create a job

1. Open `Catalog` and select the create action.
2. Enter a unique `Name` and a description.
3. Enter the exact `Service` name for the job.
4. Enter the `Cron Expression` if the job needs a schedule, and review its human-readable description.
5. Select `Next` and review the service parameters. Supply the required inputs; optional inputs can remain blank.
6. Select `Create`.

![Create Job form with Name, Description, Service, and Cron Expression](../../../.gitbook/assets/job-manager/create-job.jpg)

*Use the service name configured for your instance. The values shown are examples.*

The job starts paused. Open its details, verify the parameters and schedule, and resume the schedule when it is ready. Add the category from the job detail page.

If `Job created, but its parameters could not be saved` appears, the job already exists. Open it and correct its parameters before enabling it. Repeating creation can produce an unnecessary additional job.

## Continue to job details

Open [Manage a job](job-details.md) to review technical details, schedule, parameters, and history.
