---
description: Troubleshooting guide for duplicate orders
---

# Order Duplication

## Objective

This document aims to provide a clear, concise, and solution-focused guide to diagnose and resolve issues related to order import duplications in HotWax Commerce. The desired outcome is to ensure the successful and error-free import of orders, avoiding duplicate jobs and ensuring smooth operations.

## Context

HotWax Commerce can face order import duplication issues, particularly when the system goes down during scheduled import jobs. If the system is down for a period during which multiple import jobs are scheduled, all pending jobs might run simultaneously upon the system's recovery, leading to duplicate order imports. This document outlines the scenarios where this issue might occur and provides step-by-step processes to diagnose and resolve these issues.

## Scenarios

1. **System Downtime with Scheduled Order Import Jobs**
   * The system goes down during scheduled order import jobs.
   * Upon recovery, all pending jobs run simultaneously.
   * Result: Duplicate orders are created.

## Preventive Measure

### Set the `Schedule Now` Parameter to False

To prevent simultaneous execution and duplicate orders, ensure the `Schedule Now` parameter is set to `False` when scheduling order import jobs. This setting ensures jobs run sequentially.

## Diagnostic and Resolution Steps

### Scenario 1: System Downtime with Scheduled Order Import Jobs

#### Initial Checks

1. **Verify if the Issue Exists**
   * Check the system logs to identify any periods of downtime.
   * Verify if multiple import jobs were scheduled during the downtime.
   * Identify if duplicate orders have been created by checking order statuses and attributes.

#### Example

* If the job runs every 5 minutes and the system is down for 10 minutes, verify that all pending jobs did not run at the same time upon recovery.

#### Diagnostic Steps

1.  **Identify and Remove Duplicate Orders**

    * **Verify Duplicate Orders**
      * If the system was down for a significant duration and meanwhile multiple jobs may run, retailers must manually identify duplicate orders by checking for identical Shopify IDs.
      * Identify orders stuck in the "Created" state, as only one order will have order attributes saved for approval.

    **Example**

    ```
    Order ID: 12345, Shopify ID: 98765 - Approved
    Order ID: 12346, Shopify ID: 98765 - Created
    ```
2. **Move Duplicate Orders to General Ops Parking**

* Open the relevant duplicate orders
* Navigate to the Items section and click on the `Move items to parking` text.
* Select `general ops parking` and click on `save` to move the item to general ops parking.

3. **Cancel Orders**

* Navigate to the `Sales Orders` page
* Filter by Facility: `General Ops Parking`.
* Identify the duplicate orders and click to open the `order details` page
* Click on the `Cancel` button on the top to cancel the orders

Ensure orders are not manually approved by the CSR and fulfillment is not started. If fulfillment of the order is started, manually reject the order before cancellation. { % endhint %\}



{% embed url="https://youtu.be/ovWVfOOvfmE" %}
