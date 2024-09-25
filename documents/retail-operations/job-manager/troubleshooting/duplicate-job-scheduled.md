# Duplicate Jobs

## Objective:

This document provides a detailed guide to diagnose and resolve the exceptions caused by duplicated jobs in HotWax Commerce, which can lead to data duplication, data redundancy, and system performance issues. The goal is to ensure smooth job execution and accurate data management.

## Common Scenarios:

1. Overlapping jobs causing system performance issues.
2. Data duplication or redundancy due to duplicated jobs.
3. Interrupted job flow affecting the order life cycle.

#### Scenario: Overlapping Jobs Causing System Performance Issues

For example, In the Job Manager app, we have two jobs: `Approve Order`, which means, approves the orders that are in in `created` status after checking the requisite criteria, and `Approve Sales Order`, which acts as the same as `Approve Order` but has a different attribute (field) values. Let’s suppose we have scheduled the `approve orders` job every 5 minutes and `approve sales orders` every 15 minutes This collectively means we have two jobs: one is ready to run 5 minutes after the previous run, whereas the other is ready to run from now every 15 minutes. These two jobs will overlap every 15 minutes and may result in system performance issues. Additionally, the collision of these jobs may interrupt the job flow.

## Step-by-Step Troubleshooting Process:

#### Verify If Issue Exists:

1. **Track the Exception:**
   * Identify where the exception occurs or which step of the order life cycle is affected.
2. **Analyze Job Pattern:**
   * Determine if a process is running more than once within its scheduled frequency, indicating a duplicated job.

#### Diagnose the Issue:

1. **Access Job Manager:**
   * Open the Job Manager app in HotWax Commerce.
   * Navigate to the Job Manager > `Order` page (for the example provided). For example, If the duplicacy arises in another area like Brokering, navigate to the corresponding section, such as `Job Manager` > Brokering.
2. **Identify Duplicated Jobs:**
   * Traverse all jobs and identify those with overlapping schedules. For example, `Approve Order` is scheduled every 5 minutes, and `Approve Sales Order` is scheduled every 15 minutes.
   * Duplicated jobs can also be identified by disabling the job with the exception. If the job is disabled once and it is still visible as scheduled after refreshing the page, then the job was duplicated.

#### Resolve the Issue:

1. **Compare Jobs:**
   * Compare both jobs to understand their functionality and attributes.
2. **Disable Duplicated Job:**
   * Terminate or remove the duplicated job causing the exception and the one that is outdated.
   * Click on the job to open its details.
   * Click the `Disable` button to deactivate the job.
3. **Verify Job Termination:**
   * Navigate to the `pipeline` page and search for the disabled job to ensure the problematic job is successfully disabled.

By following these detailed steps, you can effectively troubleshoot and ensure a smooth job execution process, minimize system performance issues, and maintain accurate data management.



<figure><img src="../../.gitbook/assets/dupicate job (1).png" alt=""><figcaption></figcaption></figure>
