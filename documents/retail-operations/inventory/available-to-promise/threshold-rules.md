---
description: Hold back channel-level inventory for selected products with threshold rules.
---

# Configure threshold rules

A threshold holds back inventory after HotWax Commerce combines the inventory contributed by a channel.

For example, suppose three facilities contribute 90, 90, and 40 available units to one inventory channel. The channel total is 220 units. A threshold of 10 leaves 210 units available before other deductions.

## Create a threshold rule

1. Open `Sourcing` > `Threshold`.
2. Select `Create threshold rule` when the page has no rules, or select the add button.
3. Enter a unique `Name`.
4. Enter a non-negative `Threshold` value.
5. Select one or more channels, or turn on `Select all channels`.
6. Define the product scope under `Products by tags` and `Products by feature`.
7. Leave the product filters empty to apply the rule to all products in the selected channels.
8. Select the save button.

If no channels are available, select `Create channel` or `Manage channels` from the rule form. See [Create inventory channels](create-channels.md) for the full setup.

## Review and edit rules

Expand a rule card to review its threshold value, channels, and product filters.

* Select the threshold value chip to change the value without opening the full form.
* Select `Edit rule` to change the name, channel scope, or product filters.
* Select the archive button to remove the rule from the active sequence.
* Expand `Archived` to restore an archived rule.

## Set rule priority

The last matching rule in the sequence sets the threshold value for a product and channel.

Place a broad base rule before its specific exceptions. Use the sequence button at the bottom of the page, drag the rules into position, then select the save button.

For schedule controls and execution history, see [Schedule sourcing rules](schedule-atp-rules.md).
