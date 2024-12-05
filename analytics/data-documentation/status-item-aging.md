# Understanding Status Item Aging in HotWax OMS

## Definition
In HotWax OMS, every process goes through certain stages in its lifecycle. Generally, there are four checkpoints in the lifecycle:

1. **Creation**: The initial stage where a process is created but still needs approval before it can move to the next stage. For example, an order that is created but cannot be brokered as it needs to be approved.
2. **Authorization**: Once approved, the process moves to this stage where it is ready and waiting to be processed. For instance, an order that is approved but not yet fulfilled.
3. **Completion/Terminal**: This stage means the process has finished, and no further action is needed. For example, when an order is either fulfilled (successful) or cancelled (failed).
4. **Post-Completion**: Sometimes even after a process is in the terminal stage, additional actions might be needed. For example, if a customer wants to return an order, the order enters this stage.

{% hint style="info" %} It is not necessary that a process goes through all of these checkpoints. For example, a service generally does not need any authorisation. Instead its equivalent stage is 'STATUS_PENDING'. {% endhint %}

To better manage these stages, we assign a numeric value to each stage according to their chronology. These numbers will be the "age" of the process. Thus, the farther the process is into its lifecycle, the greater is its age. As a convention, the ages of the above four mentioned stages - Creation, Authorization, Completion and Post-Completion - are defined as: 

| Stage            |    Age Value    |
|------------------|:---------------:|
| Creation         |        0        |
| Authorization    |        50       |
| Completion       |       100       |
| Post-Completion  |       110       |

Additionally, the Completion stage can have two outcomes:

| Stage               |    Age Value    |
|---------------------|:---------------:|
| Completed (success) |       100       |
| Completed (failure) |       101       |

There can also be events that occur between stages. For example, after a shipment is authorized, it might move to a "shipment packed" status. This is not the final stage because the shipment still needs to be sent out. Such an event would have an age value between 50 and 100, reflecting its position between Authorization and Completion.

## Purpose
The `StatusItem` table is frequently used to identify records with a specific status or objective. For instance, if the goal is to find all shipments that are authorized but have not yet been shipped, the query would need to check for shipments in statuses such as `SHIPMENT_APPROVED`, `SHIPMENT_PICKED`, or `SHIPMENT_PACKED`. However, when there are multiple statuses to check, these searches can become slow.

To optimize this process, a numeric column called "age" has been added to the `StatusItem` table. This column indicates the stage of an item's lifecycle. Referring to the example above, instead of checking for multiple statuses, the search can now filter for shipments where the "age" is greater than or equal to 50 but less than 100. This approach simplifies the logic and improves search performance.

## Different Types of Lifecycles and Their Status Ages

### 1) Inventory Count



  | Status         | Status ID            |    Age    |
  |----------------|----------------------|:---------:|
  | Created        | INV_COUNT_CREATED     |     0     |
  | Assigned       | INV_COUNT_ASSIGNED    |    30     |
  | Pending review | INV_COUNT_PENDING_REVIEW|  60     |
  | Completed      | INV_COUNT_COMPLETED   |    100    |
  | Rejected       | INV_COUNT_REJECTED    |    101    |



### 2) Order



  | Status   | Status ID       |    Age    |
  |----------|-----------------|:---------:|
  | Created  | ORDER_CREATED    |     0     |
  | Approved | ORDER_APPROVED   |    50     |
  | Completed| ORDER_COMPLETED  |    100    |
  | Cancelled| ORDER_CANCELLED  |    101    |



### 3) Order Item



  | Status   | Status ID        |    Age    |
  |----------|------------------|:---------:|
  | Created  | ITEM_CREATED      |     0     |
  | Approved | ITEM_APPROVED     |    50     |
  | Completed| ITEM_COMPLETED    |    100    |
  | Cancelled| ITEM_CANCELLED    |    101    |



### 4) Payment Preference



  | Status        | Status ID            |    Age    |
  |---------------|----------------------|:---------:|
  | Not received  | PAYMENT_NOT_RECEIVED  |     0     |
  | Not authorized| PAYMENT_NOT_AUTHORIZED|    10     |
  | Authorized    | PAYMENT_AUTHORIZED    |    50     |
  | Settled       | PAYMENT_SETTLED       |    100    |
  | Received      | PAYMENT_RECEIVED      |    100    |
  | Declined      | PAYMENT_DECLINED      |    101    |
  | Cancelled     | PAYMENT_CANCELLED     |    101    |
  | Refunded      | PAYMENT_REFUNDED      |    110    |



### 5) Pick Item



  | Status    | Status ID       |    Age    |
  |-----------|-----------------|:---------:|
  | Pending   | PICKITEM_PENDING |     0     |
  | Picked    | PICKITEM_PICKED  |    50     |
  | Completed | PICKITEM_COMPLETED|   100    |
  | Cancelled | PICKITEM_CANCELLED|   101    |



### 6) Picklist



  | Status   | Status ID       |    Age    |
  |----------|-----------------|:---------:|
  | Created  | PICKLIST_INPUT   |     0     |
  | Assigned | PICKLIST_ASSIGNED|    25     |
  | Printed  | PICKLIST_PRINTED |    50     |
  | Picked   | PICKLIST_PICKED  |    80     |
  | Completed| PICKLIST_COMPLETED|   100    |
  | Cancelled| PICKLIST_CANCELLED|   101    |



### 7) Return



  | Status     | Status ID       |    Age    |
  |------------|-----------------|:---------:|
  | Requested  | RETURN_REQUESTED |     0     |
  | Accepted   | RETURN_ACCEPTED  |    50     |
  | Received   | RETURN_RECEIVED  |    80     |
  | Completed  | RETURN_COMPLETED |    100    |
  | Rejected   | RETURN_REJECTED  |    101    |
  | Cancelled  | RETURN_CANCELLED |    101    |



### 8) Service



  | Status    | Status ID      |    Age    |
  |-----------|----------------|:---------:|
  | Draft     | SERVICE_DRAFT   |     0     |
  | Queue     | SERVICE_QUEUE   |    25     |
  | Pending   | SERVICE_PENDING |    50     |
  | Running   | SERVICE_RUNNING |    75     |
  | Finished  | SERVICE_FINISHED|    100    |
  | Crashed   | SERVICE_CRASHED |    101    |
  | Cancelled | SERVICE_CANCELLED|    101    |
  | Failed    | SERVICE_FAILED  |    101    |



### 9) Shipment


  | Status       | Status ID        |    Age    |
  |--------------|------------------|:---------:|
  | Created      | SHIPMENT_INPUT    |     0     |
  | Approved     | SHIPMENT_APPROVED |    50     |
  | Picked       | SHIPMENT_PICKED   |    60     |
  | Packed       | SHIPMENT_PACKED   |    80     |
  | Shipped      | SHIPMENT_SHIPPED  |    100    |
  | Canceled     | SHIPMENT_CANCELLED|    101    |



