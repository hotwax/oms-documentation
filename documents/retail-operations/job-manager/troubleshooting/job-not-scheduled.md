# Job Scheduling Errors

## Objective:

If you observe that a process is not functioning correctly in Hotwax Commerce, for example, if orders are not being synchronized, this issue often stems from either the job not being scheduled at all or being incorrectly scheduled. Ensuring proper job scheduling is crucial to maintaining the smooth operation of processes like order synchronization within Hotwax Commerce. This document aims to provide a structured approach for identifying and resolving synchronization issues between HotWax Commerce and external systems due to job scheduling errors.

## Common Scenarios:

1. A job is not scheduled or is disabled, preventing expected data synchronization. For example, the operation team often forgets to schedule the `Process Bulk Imported Files` and expects the `Import Orders` Job will fetch all the orders from Shopify and start showing them in HotWax Commerce.
2. A job is not scheduled correctly, causing delays or affecting synchronization. For example, If you schedule a job with a frequency to run with a run-time value(date) of two days later when the job was supposed to run 15 minutes from now, then the job won’t start running in every 15 minutes until 2 days.

## Step-by-Step Troubleshooting Process:

#### Verify If Issue Exists:

1. **Identify the Exception:**
   * Check if a process is not working as expected by looking at the results. If you don't get your desired result within a specified time frame, it indicates an exception.
2. **Backtrack the Exception:**
   * Look into the results in HotWax Commerce OMS to identify the step or task that is not performed.
3. **Access Job Manager:**
   * Open Job Manager using your user credentials.
   * Navigate to the job causing the issue. For example, if the issue is related to order import(as we see in the above example), go to `Job Manager` > `Miscellaneous` > `Process bulk import files`.
4. **Analyze the Job:**
   * Check if the job is scheduled correctly.
   * Identify if the job is disabled or configured incorrectly.

Read here to [learn more](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows) about jobs in HotWax Commerce that can be scheduled as per the retailer’s preference.

#### Resolve the Issue:

1. **Schedule or Configure the Job:**
   * If the job is `Disabled`, schedule it by adding the runtime value and the frequency in which the job should run
   * If the job is configured incorrectly, update it as per your preference. Read here to [learn more](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-manager/job-details) about how to schedule a job in HotWax Commerce.
2. **Save the Changes:**
   * Make the necessary changes to the job.
   * Click on the `Save Changes` button to ensure they take effect.

### Additional Steps for Ensuring Proper Job Execution:

1. **Verify Job Schedule:**
   * Check the job schedule on the `pipeline` page to ensure the job is scheduled and running at the desired frequency and time.
2. **Monitor Job Execution:**
   * After scheduling or reconfiguring the job, monitor its execution to ensure it runs as expected.

By following these detailed steps, you can effectively troubleshoot and resolve synchronization issues between HotWax Commerce and Shopify caused by jobs not being scheduled or incorrectly scheduled. This ensures smooth job execution, minimizes system performance issues, and maintains accurate data management.



{% embed url="https://youtu.be/-ThjkFCQSWY" %}
