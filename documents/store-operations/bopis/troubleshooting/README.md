---
description: Find help with BOPIS notifications, order visibility, and app access.
---

# Troubleshoot BOPIS

Start by confirming the facility selected in `Settings` and the order's current status. An order can move from `Open` to `Packed` or `Completed` as fulfillment progresses.

| Problem | What to check |
| --- | --- |
| New-order notifications do not appear | Check device notification permission, topic registration, and the notification job in [Notification Error](notifications-error.md). |
| An order is missing from the current tab | Confirm the [selected facility](../settings-page.md#facility), then check [Open Orders](../open-orders-page.md), [Packed Orders](../packed-order-tab.md), and [Completed Orders](../completed-orders-tab.md). |
| An item cannot be fulfilled | Review the item and rejection scope in [Open Orders](../open-orders-page.md#reject-orders) before confirming a rejection. |
| The app or facility is unavailable to a user | Check the user's Security Groups, app permissions, and facility access in [Troubleshoot application access](../../../system-admin/administration/users/troubleshooting/application-access-issue.md). |

After correcting the cause, repeat the affected step and confirm the order or notification appears at the expected facility. Record the order ID, facility, and exact error if the problem remains.
