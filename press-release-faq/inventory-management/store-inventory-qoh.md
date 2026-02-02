# In store rejection and auto cycle count

In store rejections need to be modified in two parts. Currently, rejection driven variance reasons affect both ATP and QoH equally, giving stores staff power over the physical inventory quantity at their location without approval from management. Such easy access can often cause store staff to make erroneous decisions and create large discrepancies in inventory. To keep inventory at stores accurate, store managers then manually use a rejections report to trigger recounts for products where the inventory discrepancy crosses a certain threshold.

## ATP Only Rejection
The first part of solving this problem is to ensure that store rejections only impact ATP and not QoH inventory. This allows stores to prevent more orders from being allocated to them for the same item. Rejections also ensure that they show up on store manager dashboards as having an inventory issue. 

The impact of rejection types, Report Variance, Report No Variance and Report All Variance, will be limited to the ATP of the product at that facility. With only ATP being suppressed by the rejection, QoH remains unchanged. Store managers can use the QoH to judge the truthfulness of the order rejection and easily problematic rejections.

To implement this change, the service called during rejection of in progress fulfillment orders, updateInpgrogressOrder, will accept a range of parameters that can be used by the fulfillment app based on the intended action for a given scenario. The parameters include:

Rejection Reason ID
Reject Entire Order (Y/N)
Reject All Orders (Y/N)
Impact QoH (Y/N)

For example, if the fulfillment user only wants to reject one order item and log a variance to reduce ATP for the rejected product at their facility, the app would submit:

Rejection Reason ID
Reject Entire Order (N)
Reject All Orders (N)
Impact QoH (N)

## Trigger Cycle Count

The Trigger Cycle Count feature automates cycle count requests at facilities following the rejection of an order item. This process ensures that inventory discrepancies are promptly addressed and reconciled.

### Process Overview

Trigger Cycle Count: Upon rejection of an order item, the system automatically initiates a cycle count request for the corresponding product at the facility.

Cycle Count Completion: Once the cycle count is completed and approved by authorized users, the counted value becomes the new QoH and ATP for the product at that facility, considering any existing order reservations.

Consideration for Reserved Orders: The new ATP value accounts for any orders reserved at the facility, ensuring accurate inventory allocation.

## Inventory Reset Mechanism
This feature introduces a new inventory reset mechanism to undo variances logged due to order rejections.

Reset Process:

Identify the absolute difference between the systemic QoH and counted values and log it as the QoH variance.
Compute the difference between the absolute value of the current ATP and the counted inventory submitted by the user.
Adjust for existing reservations to retain an accurate ATP.

## Delta Import by QoH

The final addition to this suite of inventory enhancements is a delta import feature that prioritizes QoH over ATP.

Delta Import Process:

The system imports deltas based on QoH, ensuring that adjustments reflect the true inventory state at facilities.
Reserved orders are always considered, even during inventory resets, to maintain accuracy in inventory management.
