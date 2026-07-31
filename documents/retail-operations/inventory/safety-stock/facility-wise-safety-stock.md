# Set facility-wise safety stock

Use a safety stock rule when the same inventory reserve should apply to a group of facilities.

1. Identify or create the facility groups that need a shared safety stock value. See [Manage facility groups](/documents/system-admin/administration/facilities/manage-groups.md).
2. Open the **Order Routing Rules** app, then go to `Sourcing` > `Safety stock`.
3. Select the add button and enter the rule `Name` and `Safety stock` value.
4. Turn on `Select all facility groups`, or add at least one group under `Included`. Add groups under `Excluded` only to remove them from the included scope.
5. Optional: Narrow the rule with product tags or product features.
6. Review the impacted facility count, then save the rule.
7. Run or schedule the safety stock computation.

The generated sourcing output must be imported and processed before the values apply in HotWax Commerce. See [Configure safety stock rules](../available-to-promise/safety-stock-rules.md) for the complete rule, sequence, and schedule workflow.
