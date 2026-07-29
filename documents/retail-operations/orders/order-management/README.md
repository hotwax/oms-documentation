---
description: >-
  Use Order Manager to assess order flow, investigate exceptions, and complete
  order-management work.
---

# Order Manager

Order Manager brings order search, exception work, fulfillment queues, and order-level actions into one workspace. Use `Funnel` as the daily operating dashboard to assess workload, then open a queue for detailed work. Use search when you already know the order or customer.

## Before you start

1. Open [Settings](settings.md) and confirm the order management system (OMS) instance.
2. Open the menu and check the product store shown at the bottom.
3. If the menu provides a store selector, select the store you intend to work with.
4. Confirm that the page or queue you need appears in the menu.

The selected product store controls store-scoped data throughout the app. Changing it can reload counts and lists, so check the store again before comparing totals or acting on an order.

{% hint style="info" %}
Menu options and actions depend on your permissions. If an option in this guide is missing or an action fails, ask an administrator to check your Order Manager access. Do not use a direct page address to bypass a hidden menu option.
{% endhint %}

## Understand planning, tasks, and downstream release

Order Manager separates three related parts of fulfillment:

1. **OMS planning** brokers ship groups, allocates facilities, and protects inventory.
2. **Order tasks** record the exception work that must be completed. An order can have several independent tasks at the same time, and each task can apply to the complete order or a particular ship group.
3. **Downstream release** controls which safe, eligible ship groups become fulfillment work. A pick profile defines release eligibility and priority.

An open task is not a replacement for the order status. Depending on the task and workflow, the order can continue through internal planning while the affected work remains outside the downstream fulfillment release. Resolving one task does not resolve other tasks on the same order.

A pick profile is the business release policy. `Funnel` exposes its priority, batch size, and schedule; eligibility rules are configured elsewhere. External delivery, retries, and reconciliation are separate from this release decision and are not confirmed in Order Manager.

## Choose where to start

| What you need to do | Start here | Decision or next step |
| --- | --- | --- |
| Assess the current workload | [Funnel](funnel.md) | Compare fulfillment progress, exceptions, and facility workload. Open a linked queue when a card or row needs investigation. |
| Find a known order | [Find orders](find-sales-orders.md) | Search by an order or customer reference, then open the order or select eligible bulk actions. |
| Find a customer | [Find customers](find-customers.md) | Search for the correct party ID, then open [Customer details](view-customer-details.md). |
| Maintain a customer or review customer activity | [Customer details](view-customer-details.md) | Update contact or relationship data, resolve tasks, or open related orders and returns. |
| Create a Shopify order | [Create order](create-order.md) | Select the shop, customer, address, and items, then submit and verify the new order. |
| Investigate one order | [Order details](view-order-details.md) | Review items, ship groups, holds, communications, and the actions currently available for that order. |
| Confirm the OMS, store, or app preferences | [Settings](settings.md) | Verify the working context before changing store-scoped identifiers or user preferences. |
| Resolve exception work | A queue under `Blocked` | Review the task or exception, choose its supported outcome, and verify both the task and order afterward. |
| Work an order-processing stage | A queue under `In progress` | Narrow the list, inspect the order, and use a supported action when one is available. `Inflight` is currently an investigation-only queue. |

## Run the daily operating loop

1. Confirm the OMS instance and selected product store.
2. Open [Funnel](funnel.md) to identify the largest constraint: unbrokered work, exception tasks, facility pressure, or downstream-release backlog.
3. Open the linked queue and work the oldest or most urgent eligible records.
4. Open [Order details](view-order-details.md) when you need the complete order, ship group, and task context.
5. Return to `Funnel` and confirm that the queue, facility, or release-policy view reflects the expected result.

## Choose an exception queue

The menu groups actionable Order Tasks under `Blocked`. A task appearing here does not always mean that completing the task automatically resumes fulfillment. Use the task details and `Order details` to confirm what still needs to happen.

| Queue | Start here when |
| --- | --- |
| [Unfillable](unfillable-orders.md) | Routing could not assign one or more ship groups to a fulfillment facility. |
| [Swap](swap-orders.md) | An unavailable item needs a substitute or another task outcome. |
| [Bad address](bad-address-orders.md) | A shipping address needs review before the affected ship group can proceed. |
| [Fraud](fraud-orders.md) | A risk-review task needs a decision. |
| [Hold](hold-orders.md) | A manual or customer-request task needs investigation and a recorded resolution. |

## Choose a workflow queue

| Queue | Start here when |
| --- | --- |
| [Brokering queue](brokering-queue.md) | Created or approved orders are waiting in brokering virtual locations, including work returned after a facility rejection. |
| [Open orders](open-orders.md) | You need to inspect the current `Open` workload returned for the selected store. |
| [Inflight orders](inflight-orders.md) | You need to review the current `Inflight` workload and investigate orders that have not entered the supported picklist flow. |
| [Packed orders](packed-orders.md) | Packed shipments are ready for final review and, when appropriate, shipping. |

## Work an order list

Use this operating pattern on order search results and workflow queues:

1. Confirm the product store and any facility or date filters.
2. Compare the loaded count with the total count.
3. Read the allocation, order age, and delivery deadline before choosing an action.
4. Open `Order details` when you need to confirm one order's exact state.
5. Enter `Select` mode only when the same action applies to every chosen order.
6. Read the confirmation and result messages.
7. Refresh the list or reopen `Order details` to verify the outcome.

The header checkbox selects only the results currently loaded in the app. If you need the complete filtered population, scroll until the loaded count matches the total before selecting all.

{% hint style="warning" %}
Do not treat a success message as reconciliation for a bulk action. Some actions can complete for only part of the selection, and some messages count selected orders rather than changed items or shipments. Verify the affected records before retrying or moving to the next task.
{% endhint %}

`Inflight` is an exception to the action pattern. Its current `Add to picklist` control does not create a picklist. Use [Inflight orders](inflight-orders.md) only to investigate the listed work.

## Work an order task queue

Task queues show independent work records rather than allocation rows:

1. Confirm the product store and task filters.
2. Prioritize by task age, order age, risk, or other fields provided by that queue.
3. Read the task instructions and open the order when you need the complete context.
4. Complete the corrective work before resolving the task.
5. Select task cards only when the same supported outcome applies to each one.
6. Verify the task result and check for other open tasks on the order.

Selection in a task queue is based on task records. One order can therefore appear more than once and can remain in a queue after you resolve one of its tasks.

## Read counts correctly

Order Manager displays several kinds of totals:

* An **order count** represents orders.
* A **ship group count** represents ship groups within orders. One order can have more than one ship group.
* A **task count** represents open work records. One order can have more than one task.
* A menu badge shows the latest count loaded by the related page or `Funnel`. A missing badge means the app has not loaded that count yet, not that the count is zero.

Do not add or compare unlike counts as though they represent the same population.

## Handle loading and unexpected results

Order Manager uses loading, empty, and error messages, but individual pages handle failures differently:

* A progress indicator means the page is still loading or refreshing.
* An empty-state message can mean that no record matched the current filters. On some workflow pages, a failed request can produce the same empty state.
* An error message means the request failed. Use `Retry` when it appears.
* A loaded count that remains below the total can mean that more results are available or that loading another page failed.

For an unexpected zero, first confirm the product store and filters. Then clear unnecessary filters and reload the page. Compare the result with `Funnel` or the related menu badge before reporting that no work remains.
