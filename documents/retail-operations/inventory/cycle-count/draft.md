---
description: Review a draft cycle count, adjust its products and dates, and approve it for counting.
---

# Review and approve a draft count

Use `Draft` to review a planned cycle count before counting begins. You can check its facility, dates, and products, then approve the count.

## Required permission

Your account needs `INV_COUNT_APPROVAL` to use the draft approval workflow. An administrator role alone does not provide this permission.

With this permission, counts in `Created` status appear in `Draft`; `Assigned` and the store count list show `Approved` and `In progress` counts. Without this permission, those lists show `Created` and `In progress` counts.

## Review the count details

1. Open `Draft` and select the count.
2. Confirm the count name and facility.
3. Select `Edit` to change the name if needed.
4. Review the start date and due date. Use the date controls to adjust them.

## Review the products

Use `Add items` to scan or search for products to include in the count. To remove products, select their rows and choose `Remove items`.

![Draft count with facility, dates, assigned products, Add items controls, and Approved action](../../.gitbook/assets/inventory-count/draft-count-approval.jpg)

*Review the count details and product list before selecting Approved.*

## Approve the count

1. Select `Approved` when the count is ready.
2. Wait for the `Cycle Count Approved Successfully` message.
3. Open `Assigned` to find the count in `Approved` status.

Approval changes the count from `Created` to `Approved`. The `Close` action is separate and does not approve the draft.

Draft approval reviews the planned count. After the store completes counting, use [Pending review](pending-review.md) to review inventory variances.
