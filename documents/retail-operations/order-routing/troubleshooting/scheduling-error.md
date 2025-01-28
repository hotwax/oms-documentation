---
description: Learn how to resolve brokering issues related to incorrect scheduling
---

# Scheduling Errors

### Scenario: The Brokering Engine Won't Run Due to Incorrect Scheduling

The brokering engine relies on correctly scheduled runs to process and route orders. If the scheduling is incorrect, the engine won't execute, leading to unprocessed orders and potential delays in order fulfillment.

### Resolution Steps

1. **Verify Brokering Schedule**
   1. Navigate to the Order Routing App.
   2. Click on the Brokering Run card you would like to run for routing.
   3. Verify the run time and the frequency to ensure they are set correctly.
2. **Check Inventory Rules**
   1. If the brokering run schedule is correct, proceed to check the inventory rules by clicking on the order batch you would like to run.
   2. Verify if the order batches are correctly sorted. The sorting should align with the expected order processing sequence.
3. **Verify Inventory Rule Configuration**
   1. Check the inventory rules by clicking on the inventory rule associated with the order batch.
   2. Verify if the order brokering facilities are correctly configured. Ensure the facilities to which the orders should be routed are specified accurately.
   3. Verify if the inventory sorting criteria are correctly set to prioritize the orders as needed.
4. **Confirm Status**
   1. Finally, verify the status of the inventory rule, order batch, and brokering run. Ensure that each status is set to "Active" and not in "Draft."

Read our [order routing](../) user manual to learn more

**Example**

**Incorrect Scheduling**: If the brokering run is set to execute at 3:00 PM daily but needs to run every hour, adjust the frequency to "Hourly" in the Brokering Run settings.



{% embed url="https://youtu.be/fRni_V6Yc3U" %}
