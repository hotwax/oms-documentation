---
description: Guide to verify job frequency in HotWax and NiFi.
---

# Verify Job Frequencies

In HotWax Commerce, two types of services handle data processing: Order Management System (OMS) jobs and NiFi jobs. Understanding the runtime and scheduled frequency of these jobs is crucial for maintaining smooth operations. 

## Checking OMS Job Frequencies

OMS jobs manage core functions such as product, order and inventory data imports and exports. When these jobs do not run as scheduled, it can disrupt operations and cause data inconsistencies.

1. **Verify Job Existence:**
   - Navigate to the `Job Manager` app in HotWax Commerce.
   - Go to the relevant page (e.g., Orders, Inventory).
   - Locate the job by its name and description.

2. **Check Job Schedule:**
   - Identify the schedule of the job listed against its name.
   - Click on the job card to view job details.

3. **Review Job History:**
   - Click on the `history` text to ensure the job is running at the scheduled frequency.


## Checking Napita Job Frequencies

Napita jobs manage data flows and data transformations between HotWax Commerce and External Systems. When these jobs do not run as scheduled, it can affect data synchronization and integration.

1. **Open Relevant Napita Instance:**
   - Access the Napita instance associated with your HotWax Commerce OMS.

2. **Navigate to Parent Processor Group:**
   - Find the parent processor group for your OMS instance.
   - Drill down through the processor groups to locate relevant processors.

3. **Locate Relevant Processor Groups:**
   - Enter the processor groups until you find the relevant processors with flowfiles.

4. **Check Processor Scheduling:**
   - Identify the first processor with the scheduling expression.
   - Note the cron-driven expression for the first processor.

4. **Convert and Verify Cron Expression:**
   - Use a [cron expression generator](https://www.freeformatter.com/cron-expression-generator-quartz.html) or ChatGPT to convert the cron format and verify the schedule.

5. **Review Processor Settings:**
   - Ensure each processor is set to the correct schedule.
   - Verify that subsequent processord are time-driven and have the appropriate schedule after concurrent tasks.

#### Common Issues and Fixes:
- **Incorrect Cron Expression:**
  - Verify and correct the cron expression using a converter tool.
  - Ensure the expression matches the desired schedule.

- **Processor Scheduling Errors:**
  - Check each processor's scheduling settings.
  - Adjust schedules to ensure proper timing and concurrency.

By following this guide, you should be able to diagnose and resolve job frequency issues within HotWax Commerce, ensuring smooth and efficient data processing.
