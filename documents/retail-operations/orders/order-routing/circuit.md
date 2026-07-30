---
description: Ask Circuit about a routing group and review proposed changes before saving them.
---

# Use Circuit

{% hint style="warning" %}
Circuit is feature-gated and may not be available in every deployment. The core routing-group editor and its manual `Save` and `Discard` workflow do not depend on Circuit. When Circuit is enabled, the routing-group detail page includes an embedded chat panel.
{% endhint %}

Use Circuit from the routing-group detail page. Circuit can answer a question about the selected routing or prepare an editable proposal. It does not replace the final save decision.

## Ask about the routing group list

Select the Circuit sparkle icon on the `Order Routing List` page to ask about the routing groups currently loaded for the selected product store. Its accessible label is `Open Circuit`. The list assistant can answer questions about group schedules, order filters, routing rules, queues, and allocation behavior.

The list assistant answers questions only. Open a routing group's detail page when you want Circuit to prepare an edit proposal.

## Start a conversation

1. Open `Order Routing`, then select a routing group.
2. Select the routing you want Circuit to use as context.
3. Use the chat-bubble icon to hide or show the chat. The chat opens automatically when Circuit is enabled.
4. Enter a prompt in `Your prompt here`, then send it.

Write the prompt as an inquiry or an edit request:

| Prompt type | Example | Result |
| --- | --- | --- |
| Inquiry | Which order filters apply to this routing? | Circuit answers in the conversation without changing the editor. |
| Edit | Add standard shipping to this routing's shipping method filter. | Circuit prepares a proposal and shows a reversible preview in the editor. |

Circuit determines the prompt type from your request. If the request is unclear, answer its question or send a more specific prompt.

## Review a proposed edit

An edit proposal appears in the routing canvas as a live preview. The preview changes the current working copy, but it is not saved yet.

1. Review each proposed configuration section and compare it with the visible routing canvas.
2. Choose `Accept` or `Discard` for each section. The preview updates to match your choices.
3. Click `Accept selected` to keep the accepted sections in the working copy.
4. Click `Reject all` to remove the complete proposal and return to the working copy from before the proposal.

`Reject all` removes only the current Circuit proposal. It preserves manual edits that existed before Circuit prepared the proposal.

{% hint style="warning" %}
`Accept selected` does not save the routing group. It closes the proposal review and leaves the accepted changes in the working copy.
{% endhint %}

## Review a selective proposal

Use a focused request when you want to keep only part of Circuit's proposal. For example, ask: `Use the West Coast Stores group and move unavailable items to the Review queue.` Replace the group and queue with labels available in your deployment.

Circuit can ask for clarification or structure the proposal differently. If `Filters` and `Unavailable items` appear as separate reviewable sections:

1. Keep `Filters` set to `Accept`.
2. Change `Unavailable items` to `Discard`.
3. Select `Accept selected`.
4. Confirm that the visible working copy contains only the accepted store-group filter.

`Accept selected` changes only the current working copy. It does not save it. For the live baseline, review the complete routing group, then click `Save` only when you are ready to write the accepted change. For a saved Simulation variation, select the variation before you send the prompt, then click `Update` instead of live `Save` after you accept the change.

If Circuit does not return both sections, revise the prompt instead of assuming that an omitted change was applied. Do not change the selected source while a proposal is pending.

For the broader test-and-refine workflow, see [Test and refine a strategy](use-cases.md#test-and-refine-a-strategy).

## Save or discard accepted changes

After you accept a proposal for the live routing group:

* Click `Save` to write the accepted working copy to the live routing group.
* Use `Discard changes`, then confirm `Discard`, to return the complete working copy to the last saved version.

If you leave with unsaved changes, review the `Unsaved changes` prompt. Choose `Stay` to continue editing or `Discard and leave` to leave without saving.

## Use Circuit with a simulation variation

Select a saved variation in the `Simulation` sheet before you ask Circuit to change that variation. Circuit then previews and accepts changes in the variation's working copy, not in the live baseline.

After you click `Accept selected`:

* Click `Update` in the `Simulation` sheet to save the variation.
* Click `Reset` to return to the baseline without saving the variation changes.

The live `Save` action is not shown while a variation is active. Switch back to `Baseline (live config)` before you use Circuit to edit the live routing group.

## Manage conversations

Use the conversation controls to separate tasks and reopen earlier messages:

* Click `New chat` to start a blank conversation for the current routing group.
* Select a thread under `Recent conversations` to reopen it from the start screen.
* Click `Threads` to open `Chat Threads`, select an earlier conversation, or delete a thread.

Starting or reopening a thread does not switch the routing group. Confirm the routing group and selected routing in the detail workspace before you request an edit.
