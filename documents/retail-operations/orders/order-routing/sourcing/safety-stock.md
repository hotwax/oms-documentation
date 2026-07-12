# Configure safety stock rules

Safety stock reserves a facility-level quantity so it is not promised to online orders. Use it to protect inventory for walk-in demand or absorb expected inventory variance.

For example, a safety stock value of 10 applied to a group of stores reserves 10 units per applicable product at each included store.

## Create a safety stock rule

1. Open the **Order Routing App**, then go to `Safety stock`.
2. Select the add button.
3. In `New safety stock rule`, enter a unique `Name` and a nonnegative `Safety stock` value.
4. Under `Facility Groups`, turn on `Select all facility groups` or add at least one group to `Included`.
5. Optional: Add groups to `Excluded` when a subset should not receive the safety stock value.
6. Optional: Narrow the rule with included or excluded product tags and features.
7. Review the impacted facility count when it is available.
8. Select the save button.

Leave the product selectors empty when the safety stock should apply to all products in the selected facility groups.

## Review and update safety stock rules

Each rule card shows its safety stock value, facility groups, and product selection. You can edit, archive, or reorder rules from the `Safety stock` page. Select the safety stock value on a card to update only the quantity.

Use the `Schedule` card to run the rules on a recurring schedule. Open its overflow menu to view `History`, select `Run now`, or `Disable` the schedule.
