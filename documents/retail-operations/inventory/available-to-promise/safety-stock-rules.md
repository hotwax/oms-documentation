---
description: Reserve facility-level inventory for selected products with safety stock rules.
---

# Configure safety stock rules

Safety stock reserves inventory at each affected facility so that quantity is not promised to online orders.

For example, if a facility has 100 units and a safety stock value of 10, the facility contributes at most 90 units before other deductions.

<!-- markdownlint-disable-next-line MD034 -->
{% embed url="https://drive.google.com/file/d/1ZVyzgP4IEKDQpXGusVvHfpAsj9ecdA09/view?usp=drive_link" %}
Attribute-Based Safety Stock
{% endembed %}

## Create a safety stock rule

1. Open `Sourcing` > `Safety stock`.
2. Select `Create safety stock rule` when the page has no rules, or select the add button.
3. Enter a unique `Name`.
4. Enter a non-negative `Safety stock` value.
5. Define the facility scope:
   * Turn on `Select all facility groups` to apply the rule to every available group.
   * Otherwise, select `Add` under `Included` and choose at least one facility group.
   * Add groups under `Excluded` to remove them from the included scope.
6. Select the button that shows the number of impacted facilities and confirm the resulting facility count.
7. Define the product scope under `Products by tags` and `Products by feature`.
8. Leave the product filters empty to apply the rule to all products in the facility scope.
9. Select the save button.

If no facility groups are available, select `Create facility group` or `Use an existing group` from the rule form.

## Review and edit rules

Expand a rule card to review its safety stock value, facility groups, and product filters.

* Select the safety stock value chip to change the value without opening the full form.
* Select `Edit rule` to change the name, facility scope, or product filters.
* Select the archive button to remove the rule from the active sequence.
* Expand `Archived` to restore an archived rule.

## Set rule priority

The last matching rule in the sequence sets the safety stock value for a product and facility.

Use the sequence button at the bottom of the page, drag broad rules before specific rules, then select the save button. For more detail, see [Schedule sourcing rules](schedule-atp-rules.md).
