---
description: Compare a live routing group with saved variations and review simulation results without changing live orders.
---

# Simulate routing changes

{% hint style="warning" %}
Simulation is feature-gated and enabled per deployment. If you do not see the `Simulation` sheet or `Simulation history`, the feature is not available in your deployment. The core routing editor and its normal `Save` and `Discard` workflow remain available without simulation.
{% endhint %}

Use simulation to test a routing configuration against a snapshot of routing data. A simulation does not route live orders or change the live routing group.

{% hint style="warning" %}
Before enabling Simulation, an administrator must validate that the simulation service uses the same inventory-selection behavior as the production routing service, including substitute-product inventory, and supports variation deletion. Until that validation is complete, treat simulation comparisons as directional and keep the feature disabled for routing approvals.
{% endhint %}

## Understand the simulation sources

Choose the source you want to review in the `Simulation` sheet:

| Source | What it represents |
| --- | --- |
| `Baseline (live config)` | The saved live routing group. Save or discard any live edits before you run it. |
| Saved variation | A separate routing configuration created from the baseline or another saved variation. Editing or running it does not change the live configuration. |

Review `Branch from` before you create a variation. It shows whether the new variation will start from `Baseline` or the selected saved variation.

## Create a variation

1. Open `Order Routing`, then select a routing group.
2. Finish any live edits. Click `Save` to keep them, or use `Discard changes` and confirm `Discard`.
3. Expand the `Simulation` sheet.
4. Select `Baseline (live config)` or a saved variation as the source.
5. Enter a `Variation name`, then click `Create variation`.
6. Update routings, filters, sorting, or routing rules in the detail workspace.
7. Click `Update` in the `Simulation` sheet to save the variation.

The editor keeps variation edits in a working copy until you click `Update`. If you switch sources or click `Reset` with unsaved edits, review the `Discard unsaved changes?` prompt before continuing.

## Run a simulation

1. Select `Baseline (live config)` or a saved variation.
2. Click `Run`.
3. Click `Results` to follow the run or review the completed result.
4. Click `View saved result` when you want to open the stored result.

Update a changed variation before you run it. For the baseline, save or discard live edits first. The app blocks a run when the visible editor and the saved source do not match.

## Review simulation results

Use the available result views to compare routing behavior:

* Review `Baseline results` for the `Eligible`, `Brokered`, and `Queued` item counts for each routing.
* Review `Per-routing results` to compare the baseline with a saved variation. Select a routing row to inspect its result details.

A failed variation can leave partial results for the sources that completed. Read the failure message before using a partial result to compare configurations.

## Compare a safety-stock change

Use this example to assess whether a higher store safety-stock threshold changes the routing outcome. Start with a saved baseline where a store routing rule has `Safety stock` set to 10. In the `Simulation` sheet, select `Baseline (live config)`, create a variation, and change the same rule's `Safety stock` value to 15.

Use a representative snapshot that includes items with facility ATP close enough to the two thresholds to reveal a difference. Click `Update` to save the variation, run it, then compare the baseline and variation `Eligible`, `Brokered`, and `Queued` values in `Per-routing results`. Select the affected routing row to review facility assignments, queued orders, and per-order outcomes when that detail is available.

Raising safety stock can make fewer facilities eligible for those items. That can reduce brokered items or leave more items queued. Check the result rather than expecting a fixed count: the snapshot, other filters, fallback rules, inventory, and service behavior can all affect it. No difference is also a valid result when the snapshot does not exercise the changed threshold.

`Eligible` is a routing-entry count, not the number of facilities that passed the safety-stock filter. `Safety stock` is a pre-allocation facility threshold, not inventory guaranteed to remain after allocation.

For the broader test-and-refine workflow, see [Test and refine a strategy](use-cases.md#test-and-refine-a-strategy).

## Reset or discard a variation

Click `Reset` to leave the selected variation and return the editor to the baseline. This does not delete the saved variation.

Select a saved variation, then click `Discard` in its variation actions to request its removal from the active variation list. Confirm the prompt before continuing. Discarding a variation does not change the live baseline.

If the variation remains after the request, the simulation service deployed in your environment does not support variation deletion. Keep the variation and report its name and ID to your administrator.

## Review simulation history

Open `Simulation history` to review saved runs across routing groups.

1. Use the `Status` filter to show `All`, `Complete`, or `Failed` runs.
2. Review the `Baseline` or `Variation` badge, run type, brokered and attempted item counts, and run date.
3. Select a run to open `Saved simulation` and review its stored details.

Use a `Failed` record to read the saved failure information. Use a `Complete` record to reopen the result after the live run view is closed.
