---
description: Troubleshooting guide to resolve inventory synchronization errors
---

# Inventory Synchronization Errors

Inventory synchronization issues can occur at multiple stages, leading to discrepancies in stock levels across platforms. Accurate inventory synchronization is crucial to prevent underselling or overselling for retailers. This document aims to provide detailed steps to diagnose and resolve issues related to inventory synchronization between ERP systems, HotWax Commerce, and Shopify.

## Scenario 1: Partial File Processing Due to Connection Failure

During the process of importing an inventory file via SFTP, connection failures may occur, resulting in only a portion of the file being processed. This incomplete processing can lead to an invalid file status, causing discrepancies in inventory levels.

### Steps to Diagnose and Resolve

1. **Navigate to Your SFTP File Path**
   * Access your SFTP server using your preferred SFTP client such as Filezilla.
2. **Check the File with Import Date and Time**
   * Locate the file by its import date and time to identify the specific file that was partially processed.
3. **If the File is Failed, Reimport the File**
   * If the file is placed in the failed folder, re-upload the file to the SFTP server.
   * Ensure a stable connection during the reimport process to avoid partial processing.

## Scenario 2: Incorrect SFTP Location

The inventory file might be placed in an incorrect SFTP path, preventing HotWax Commerce from accessing and processing the file. This misplacement can result from user error or misconfiguration in the SFTP client or ERP system.

### Steps to Diagnose and Resolve

1. **Check the File Path and Location**
   * Verify the SFTP file path where the inventory file should be located.
2. **Consult the User Manual**
   * Refer to the [HotWax Commerce User Manual](https://docs.hotwax.co/documents/learn-netsuite/netsuite-deployment/sdfbundle/setupsftp) for detailed instructions on setting up the correct file path.

## Scenario 3: Shopify Job Not Running

Sometimes inventory synchronization to Shopify fails because of an issue on Shopify's end. This can happen when the scheduled job in Shopify is not running due to errors, maintenance, or other interruptions.

### Steps to Diagnose and Resolve

1. **Wait for the Shopify Job to Run**
   * Verify if there are any scheduled maintenance or downtime announcements from Shopify.
   * If the issue is temporary, wait for the job to resume.
2. **Monitor Shopify Job Status**
   * In Shopify, check the job logs and status updates for inventory synchronization tasks.

## Scenario 4: HotWax Commerce Job Not Running



HotWax Commerce relies on two main jobs for inventory synchronization to Shopify: `Update Recent Inventory Changes` and `Hard Sync Job.` These jobs might fail or may not be scheduled correctly, leading to synchronization issues.

### Steps to Diagnose and Resolve

1. **Ensure Jobs are Scheduled**
   * In HotWax Commerce, navigate to the `Inventory` page in the `Job Manager App`
   * Verify that [`Update Recent Inventory Changes`](../../job-workflows/inventory.md) and [`Hard Sync Job`](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/inventory) are scheduled as per your preferred frequency.
2. **Check Job Status**
   * Look into the job pipeline to ensure these jobs are not marked as failed.
   * Re-run the jobs if necessary.
3. **Ensure `Process Uploads to eCommerce` Job is Running**
   * Go to the `Miscellaneous` page in the `Job Manager App`.
   * Verify that the `Process Uploads to eCommerce` job is running to process all uploaded files to Shopify.



<figure><img src="../../.gitbook/assets/Inventory Scnchronization 1.png" alt="" width="375"><figcaption></figcaption></figure>

## Scenario 5: Insufficient Permissions on Shopify

If the Shopify shop does not have the necessary write permissions configured, synchronization attempts from HotWax Commerce will fail. This often happens if the access scope is mistakenly set to `Read Only.`

### Steps to Diagnose and Resolve

1. **Navigate to the Shopify Shop Page**
   * In HotWax Commerce, use the hamburger menu to go to the `Shopify Shop` page.
2. **Select the Relevant Shopify Shop**
   * Choose the specific Shopify shop where the issue is occurring.
3. **Check Access Scope in Shopify Config**
   * In the Shopify configuration section, verify the access scope settings.
4. **Update Access Scope**
   * If the access scope is set to `Read Only`, click on the `pencil icon` to edit the configuration.
   * Change the access scope to `Read and Write` permissions.



{% embed url="https://youtu.be/oL_BYAXZQZw" %}
