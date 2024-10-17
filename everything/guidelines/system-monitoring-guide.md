# System Monitoring Guide

By actively monitoring our systems, we can quickly detect potential issues and address them before they become more serious problems. Continuous system monitoring allows us to track performance, identify irregularities, and resolve bottlenecks in real-time. System monitoring helps minimize downtime, enhance user experience, and prevent disruptions to business processes.

## Key Monitoring Tasks

### 1. Client Dashboard Monitoring (Order Sync, Inventory, Fulfillment)

Monitoring the Client's Operational Dashboard is important to ensure the system works correctly. This involves checking if orders are being imported accurately, identifying orders that have been approved but not fulfilled for an extended period, and tracking the number of orders that have gone into unfillable parking.

**Frequency:** 3 times a day (9 AM, 3 PM, 8 PM)

#### Steps:

**Order Sync Dashboard:**
- Check all [order sync dashboards](https://tathya.hotwax.io/superset/dashboard/p/L3gjNbbjmVR/) on Tathya to ensure no orders were missed during import.
- Verify that no order has been in the [`created`](https://docs.hotwax.co/documents/retail-operations/orders/order-management/troubleshooting/order-approval) state for more than 3 hours.

**Inventory and Fulfillment Dashboards:**
- Ensure there are no [unexpected errors](https://docs.hotwax.co/everything/tathya/data-discrepancies) in the charts.
- To know more about reports [click here](https://docs.hotwax.co/analytics).
{% hint style="info" %} We need to check these dashboards for all clients. {% endhint %}

---

### 2. Job Monitoring

We need to monitor jobs because it can create issues if a job takes more than 45 minutes. Additionally, if an instance goes down while a job is running, it can get stuck in a running status. It is also important to identify and troubleshoot the reason if a job fails frequently.

**Frequency:** 3 times a day (9 AM, 3 PM, 8 PM)

#### Scenario: If the Job is Stuck in Running Status

##### Steps:
- Update the status of the job from running to failed by editing the information from the web tools. The status ID is from the job sandbox.
- Note that the reset inventory file from external systems may take longer but should not exceed 45 minutes.

#### Scenario: If the Job Continuously Fails
- Check if any job has failed multiple times.
- Determine the reason for failure, especially if it is uncommon, and [troubleshoot](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-manager/troubleshooting) accordingly.

---

### 3. Reset Inventory File Processing

Reset inventory files come from an external system and set the inventory for products in the OMS. Resetting the inventory is essential to maintain an accurate inventory count.

**Frequency:** Daily, primarily checked at 3 PM

#### File Location:

- **WMS/ERP Systems:**  
  Navigate to `Hamburger Menu -> MDM -> EXIM -> Imports -> Warehouse -> RESET INVENTORY`.
  
- **Shopify:**  
  Navigate to `Hamburger Menu -> MDM -> EXIM -> Shopify Jobs -> MDM -> Shopify Inventory Sync MDM`.

#### Steps:

**File Reception:**
- Confirm whether the reset inventory file has been received from the external system.
- Check for invalid file formats or records. If the file is invalid, report the issue to the client.

**File Timing:**  
Ensure all inventory files are processed by the following times:

| Instance | Process by Time |
|----------|-----------------|
| KREWE    | 1 PM            |
| UCG      | 3 PM            |
| ADOC     | 3 PM            |
| NEWERA   | 10 PM / 9 AM    |

- If the file has not been received by the above timings:
  - Verify that the file has been placed at the [SFTP location](https://docs.hotwax.co/documents/v/retail-operations/inventory/troubleshooting/inventory-synchronization).
  - If the file is not found, contact the client to inquire about the delay.
  - If the file is found, wait till it processes.

---

### 4. Data Manager Logs Monitoring

The Data Manager Logs record details of file processing from external systems, including log ID, user, import time, imported file, error records, and the file's processing start and end times.

**Frequency:** Daily

#### Steps:

**Pending and Running Files:**
- Reports have been set up for each client on Tathya.
- Check logs for all clients to ensure no files are pending or running for too long.

**Failed Files:**
- Investigate any file failures.
- [Troubleshoot](https://docs.hotwax.co/documents/v/retail-operations/workflow/data-manager/troubleshooting) and report any uncommon failures.

---

## Handling and Escalating Issues

When encountering an issue, the first step is to attempt resolution independently using available knowledge, tools, and resources. If the problem persists, escalate it by consulting with your mentor. For new issues, document the troubleshooting process and create a ticket for tracking the troubleshooting steps. Also, create a ticket in the OMS Backlog if any development work is needed for the issue.

Always inform the client as soon as an issue arises, letting them know that it is being investigated (e.g., "We have identified an issue and are looking into it"). Once the issue is resolved, update the client with the outcome. If the issue is critical, also explain the cause to keep them informed (e.g., "The issue occurred due to...").
