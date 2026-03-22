---
description: >-
  The Packed Orders tab displays all orders that have been packed and are ready to be handed over to the customer. From this tab, store associates can view order details, print the packing slip, and send pickup reminder emails.
---

# Packed Orders Page

## Order Details Card
The order card in the `Packed` Orders page shows the same basic details as in the `Open` Orders page, like order ID, product info, and customer name. However, a few things are different here. Instead of a picklist, store staff can generate a packing slip using the `print` icon.

There is also a `mail` icon to resend the pickup email to the customer, and a `Handover` button that is used to mark the order as `completed` once the customer picks up the order.

When the `Handover` button is clicked, an alert appears to verify that the items are valid and the customer has received their order. Once the order is handed over, it moves to the `Completed` tab.

Store associates can record Proof of Delivery (POD) details for completed orders from the `Completed Orders` page.

## Order Details Page
The `Order Details` page in the `Packed` Orders page shows all the usual order information. At the top, there is a `mail` icon that lets store staff resend an email to notify the customer that their order is ready for pickup, a `watch` icon to view the order item rejection history, and a `print` icon to generate the packing slip.

The page also allows store associates to edit the assigned picker for an order. If tracking is enabled, you can update the picker for an order from the **Order Details** page. To do this, click on the **picker name chip** (identified by a person icon ![person icon](https://ionicframework.com/docs/ionicons/person-outline.svg)) to open the edit picker modal and update the assignment.
Once an order is packed and marked as Ready for Pickup, store staff will see the `Handover` and `Cancel Item` buttons on the Order Details page. At this stage, rejecting or unpacking items is no longer possible.

Selecting `Cancel Item` opens a pop-up displaying a list of cancellation reasons. When an item is cancelled, an email is sent to the customer.

Below this section, the [cancellation sync job](../../retail-operations/workflow/job-workflows/orders.md) status is shown. The behavior of cancellation and refund depends on the following settings:

- If both the `cancellation sync` job and the Shopify setting to process refunds are enabled, the cancellation and refund will be sent to Shopify.
- If the `cancellation sync` job is enabled but the Shopify refund setting is disabled, only the cancellation will be sent to Shopify.
- If the `cancellation sync` job is disabled, nothing is sent to Shopify, not the cancellation and not the refund, even if the Shopify refund setting is enabled.
- If both settings are disabled, no data is sent to Shopify.
