---
description: Schedule sourcing rule groups, run them on demand, review history, and control rule priority.
---

# Schedule sourcing rules

Each sourcing rule category has its own schedule. Open `Threshold`, `Safety stock`, `Store pickup`, or `Shipping` from the `Sourcing` menu.

The `Schedule` card appears after the category or selected tab contains an active rule.

## Start a recurring schedule

1. Open the required sourcing rule page.
2. Review the `Schedule` card.
3. Select `Schedule`.
4. Confirm that the card shows the next run time instead of `Paused`.

The current rule schedule runs daily at midnight.

## Run rules now

Use `Run now` after creating or changing a rule when you do not want to wait for the recurring schedule.

1. Open the overflow menu on the `Schedule` card.
2. Select `Run now`.
3. Review the warning.
4. Select `Run now` again.

Running the schedule now creates an immediate copy. It does not replace the recurring schedule.

{% hint style="warning" %}
A recurring or immediate sourcing-rule run generates and uploads the product-facility CSV. It does not apply the generated values in HotWax Commerce by itself. Schedule `Import Product Facility`, followed by `Process Bulk Import Files`, to import and process the output. See [Import Product Facility](../../workflow/job-workflows/inventory.md#import-product-facility).
{% endhint %}

## Review execution history

1. Open the overflow menu on the `Schedule` card.
2. Select `History`.
3. Review the entries in `Execution history`.

## Disable a schedule

1. Open the overflow menu on the `Schedule` card.
2. Select `Disable`.
3. Confirm that the schedule card displays `Paused`.

Disabling a schedule stops future recurring runs. It does not remove the sourcing rules.

## Set rule priority

Rules run in list order. The last matching rule sets the final value for the same product and facility combination.

1. Select the sequence button at the bottom of the page.
2. Drag broad rules before specific rules.
3. Select the save button.

For example, place a five-unit threshold for all shirts before a 10-unit threshold for blue shirts. Products that match the blue-shirt rule receive the more specific value.

Create a broad base rule when a product needs a default value after it stops matching a specific rule.

## Archive a rule

Select the archive button on a rule card to remove it from the active sequence. Expand `Archived` to review or restore archived rules.
