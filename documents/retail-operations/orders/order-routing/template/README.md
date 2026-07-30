---
description: Adapt complete routing templates to your stores, queues, shipping methods, and fulfillment policies.
---

# Use routing templates

Use these templates when you need a complete routing design instead of a single routing recipe. Each template maps a business goal to routing groups, routings, and routing rules in the HotWax Commerce Omnichannel Order Management System (OMS).

| Template | Business goal |
| --- | --- |
| [Cross-border shipping](cross-border-shipping.md) | Route orders by country-specific shipping methods and facility eligibility. |
| [Inventory-based shipping](inventory-based-shipping.md) | Protect store inventory while prioritizing rejected and expedited orders. |

Before you apply a template:

1. Create the required [facility groups](../../../../system-admin/administration/facilities/manage-groups.md).
2. Confirm your queue, shipping method, and sales channel values.
3. Replace every example name and threshold with a value from your OMS.
4. Build the configuration in `Draft`.
5. Review and test the full routing group before you change it to `Active`.

Read [manage routing groups](../brokering-runs.md), [configure routings](../routing-rules.md), and [configure routing rules](../inventory-rules.md) for field-level instructions.
