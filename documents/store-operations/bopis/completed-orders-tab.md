---
description: >-
  The Completed Orders page allows store staff to view and refer to all orders that have been successfully handed over to customers. 
---

# Completed Orders Page

## Order Details Card
The order card in the `Completed` page shows the same set of details found in the `Open` and `Packed` pages, such as the order ID, customer name, and product information.

To download the packing slip, store associates can click the `Print Customer Letter` button. The full `Order Details` page can be accessed by clicking the order card.

## Order Details Page
The `Order Details` page in the `Completed` Orders page shows all the main information related to the order. This includes the order ID, product details, customer name, contact details, shipping address, payment method, and payment status. There is a watch icon on the top right, which shows the order item rejection history.

A timeline on the right shows key events like when the order was `created`, `approved` for fulfillment, and `picked up`. Since the order is already completed, store staff can only view the details here. No further actions, like `cancellation` or `rejection`, can be taken from this page.

## Proof of Delivery (POD)

Store associates can record or view Proof of Delivery (POD) details for any completed order. This feature is enabled via the `HANDOVER_PROOF` product store setting.

To record POD details:
1. Locate the order on the `Completed` tab.
2. Click the `Proof of Delivery` button on the order card.
3. In the pop-up, enter the following details:
   - **Name**: Name of the person picking up the order.
   - **ID Number**: Identity proof number.
   - **Relation to Customer**: Relationship of the pickup person to the customer.
   - **Phone**: Contact number.
   - **Email**: Contact email.

If the person picking up the order is the same as the billing customer, you can use the `Same as customer` checkbox to pre-fill the details from the order's billing information.

Once saved, the details are recorded as a Handover Proof communication event, and a pickup notification email is sent to the customer. For orders with existing POD details, the button label changes to `View Proof of Delivery`.
