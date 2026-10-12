---
description: Control shipping eligibility and fulfillment capacity by product, facility, or channel.
---

# Configure shipping rules

Open `Sourcing` > `Shipping` to manage shipping across three tabs:

* `Product and facility`: Apply a product rule to facility groups.
* `Product and channel`: Apply a product rule to inventory channels.
* `Facility`: Set the fulfillment capacity for individual facilities.

## Set facility fulfillment capacity

Fulfillment capacity limits how many orders can be allocated to a facility. It does not change the facility available-to-promise inventory.

1. Select the `Facility` tab.
2. Find the facility card.
3. Select the capacity chip.
4. Choose a capacity:
   * `Unlimited Capacity`: Remove the order limit.
   * `No Capacity`: Set the limit to zero and block new allocations.
   * `Custom`: Enter a value greater than zero.
5. Select `Apply`.

A facility with a custom limit displays allocated orders against its capacity.

## Create a product and facility rule

Use this rule when selected products should have different shipping eligibility at a set of facilities.

1. Select the `Product and facility` tab.
2. Select `Create shipping rule` when the tab has no rules, or select the add button.
3. Enter a unique `Name`.
4. Turn `Shipping` on to allow shipping or off to block shipping.
5. Turn on `Select all facility groups`, or add at least one group under `Included`.
6. Add groups under `Excluded` to remove them from the included scope.
7. Select the button that shows the number of impacted facilities and confirm the resulting facility count.
8. Define the product scope under `Products by tags` and `Products by feature`.
9. Select the save button.

If no facility groups are available, select `Create facility group` or `Use an existing group` from the rule form.

## Create a product and channel rule

Use this rule when selected products should have different shipping eligibility on one or more inventory channels.

1. Select the `Product and channel` tab.
2. Select `Create shipping rule` when the tab has no rules, or select the add button.
3. Enter a unique `Name`.
4. Turn `Shipping` on to allow shipping or off to block shipping.
5. Select one or more channels, or turn on `Select all channels`.
6. Define the product scope with tags or product features.
7. Select the save button.

If no channels are available, select `Create channel` or `Manage channels` from the rule form.

## Review and prioritize rules

Expand a rule card to review its shipping setting, scope, and product filters.

* Change the `Shipping` toggle on the card for an immediate setting update.
* Select `Edit rule` to change the complete rule.
* Select the archive button to remove the rule from the active sequence.
* Expand `Archived` to restore a rule.

The last matching rule in the sequence sets the shipping value for a product and facility. Use the sequence button to reorder the rules, then select the save button.

For schedule controls, see [Schedule sourcing rules](schedule-atp-rules.md).
