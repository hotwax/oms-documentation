---
description: >-
  Learn how Frank and Oak manages order approval using NetSuite workflows and
  Signify risk detection.
---

# Approval

To approve and order in Frank and Oak, along with the regular NetSuite approval workflow, they also manage risk detection on their orders. Risk detection is done by a platform called \[Signify]\[signifyHome]. This works as an app on Shopify and immediatley after order creation, tags orders that are verified as low fraud likelyhood. To ensure that Signify tags are not missed, there is a 5 minutes order import buffer in place that ensures orders are only imported after they become older than 5 minutes.

The OMS will run a batch job to check all orders for the Signify tag, which is saved as an order note in the OMS. The batch job will add an attribute to orders in the OMS that have the Signify order note. When evaluating orders for approval and further processing, orders will be required to have this attribute to qualify for approval.

| Order Note View     | Order Note Value  |
| ------------------- | ----------------- |
| OrderHeaderNoteView | signifyd approved |

| Attribute Key      | Attribute Value |
| ------------------ | --------------- |
| SIGNIFYD\_APPROVED | true            |

In the event that an order is not tagged by Signifiy from Shopify but it needs to be approved anyway, customer service will add the Signify attribute to orders manually to help them qualify for approval.
