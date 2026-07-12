# Configure shipping rules

Shipping rules control whether selected products can be shipped from selected facilities or sold through selected inventory channels.

The `Shipping` page has three tabs:

* `Product and facility` applies a rule to facility groups.
* `Product and channel` applies a rule to inventory channels.
* `Facility` shows facilities that can ship orders.

## Create a product and facility rule

1. Open the **Order Routing App**, then go to `Shipping`.
2. Select the `Product and facility` tab and select the add button.
3. Enter a unique `Name`.
4. Turn `Shipping` on to allow shipping or off to suppress shipping.
5. Turn on `Select all facility groups` or add at least one group to `Included`.
6. Optional: Add groups to `Excluded`.
7. Optional: Narrow the rule with included or excluded product tags and features.
8. Review the impacted facilities in `Preview`, then save the rule.

## Create a product and channel rule

1. Select the `Product and channel` tab and select the add button.
2. Enter a unique `Name` and set the `Shipping` toggle.
3. Turn on `Select all channels` or select at least one inventory channel.
4. Optional: Narrow the rule with product tags and features.
5. Review `Preview`, then save the rule.

## Review facility availability

Open the `Facility` tab to review facilities that can ship orders for the selected product store. Facility configuration comes from the order management system and appears here after the facilities are available to the app.

## Update and run rules

Rule cards show the shipping setting, facility groups or channels, and product selection. Use the toggle on a card for a quick availability change, or select `Edit rule` to change the full configuration. You can also archive or reorder rules.

Use the `Schedule` card to run shipping rules. Open its overflow menu to view `History`, select `Run now`, or `Disable` the schedule.
