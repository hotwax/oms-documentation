---
description: Route a selected order through a saved routing group and review the result.
---

# Test a routing group

Use `Test drive` to route a selected order through a saved routing group and review the routing and routing rule that handled it.

{% hint style="danger" %}
Test Drive performs live HotWax Commerce Omnichannel Order Management System (OMS) inventory allocation. It is not a simulation. Reset every order that you route in Test Drive before you try another order or exit test mode.
{% endhint %}

{% hint style="danger" %}
Test Drive is disabled by default. The current backend implementation does not yet enforce the required authorization contract for its routing and reset operations. Keep the feature disabled until an administrator has secured and verified both operations. The app's enablement setting records an operator decision; it does not validate backend security at runtime.
{% endhint %}

## Check availability

The `Test drive` card appears when:

* your deployment has enabled the feature; and
* your user has the `ROUTING_TEST_DRIVE_VIEW` permission.

The `Test drive` button remains disabled while the routing group is new or has unsaved changes. After you open Test Drive, the page also requires facility reference data and a verified Test Drive session for the current user and product store.

If the card is not available or the page returns to the editor, contact your HotWax Commerce administrator. Do not use a scheduled or manual production run as a substitute for a controlled test.

## Prepare a test

1. Open the routing group that you want to test.
2. Save or discard every pending change.
3. Confirm that the routings and routing rules you expect to test have `Active` status.
4. Click `Test drive`.

The test workspace displays the routing group, its routings, and its routing rules.

## Select an order

1. Search by order ID, product ID, or customer name.
2. Click `Test Order` for the required order.
3. If the order has more than one ship group, select the ship group that you want to test.
4. Review the order items and shipping method.

The workspace highlights routings that match the order information available to Test Drive. Some filter checks depend on backend routing results, so treat the completed routing attempt as the source of truth.

## Route the order

1. Click `Broker Order`.
2. Wait for the operation to finish.
3. Review the highlighted routing and routing rule.
4. Review the routing decision message, allocated facility, available-to-promise (ATP) inventory, quantity on hand (QOH), and item status.

If the order does not qualify, review the routing status and order filters. If no inventory is found, review the routing rule's facility filters, sort options, and unavailable-item actions.

## Test a warehouse-to-store fallback

Use a controlled representative order with one item at quantity 1. Before the test, confirm that the warehouse group has no usable ATP for the item and an approved store has 12 ATP. Use a saved routing group where the first routing rule tries warehouses and sends unavailable items to `Next rule`, and the second rule tries stores with `Safety stock` set to 10.

After you click `Broker Order`, check the observed result:

* The expected routing is highlighted.
* The warehouse rule does not allocate the item.
* The store fallback rule is highlighted.
* The allocated facility is the approved store.
* The result shows the routing decision message, ATP, QOH, and item status.

The observed routing result remains the source of truth. Other active filters or backend behavior can change the result. Test Drive shows inventory for the allocated facility after routing. It does not compare the pre-routing balances of both candidates, so confirm those values separately before the test.

When the test is complete:

1. Select `Reset order`.
2. Confirm `Reset order` in the dialog.
3. Wait for the control to disappear before you try another order or exit.
4. Stop and record the existing diagnostic identifiers if reset fails.

For the broader test-and-refine workflow, see [Test and refine a strategy](use-cases.md#test-and-refine-a-strategy).

## Reset the tested order

1. Confirm that the displayed order and ship group are the ones you tested.
2. Click `Reset order`.
3. Read the confirmation message.
4. Click `Reset order` in the dialog.
5. Wait for the reset request to complete and confirm that the `Reset order` control disappears.

Do not click `Try another order` or `Exit test mode` until the reset completes. The app blocks navigation when it detects a Test Drive allocation that still requires a reset.

The disappearing control acknowledges the backend reset response. It does not independently read the current OMS allocation state.

{% hint style="warning" %}
If reset fails, stop testing and record the order ID, ship group sequence ID, allocated facility, routing group ID, and error message. Ask an OMS administrator to review the live allocation before you continue.
{% endhint %}
