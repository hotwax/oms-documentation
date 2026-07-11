---
description: ADOC's Retail Pro invoicing flow after all order items are packed.
---

# Order invoicing

For ADOC eCommerce orders, HotWax Commerce sends an order to Retail Pro for invoicing after every order item has been packed. This replaces the previous trigger that waited until the order had been marked as shipped.

## When an order becomes eligible

An order becomes eligible for the Retail Pro invoicing flow when all of its items are in the packed state. The shipment can still be awaiting its handoff or shipment update; that later update is not the invoicing trigger.

{% hint style="info" %}
This flow applies to ADOC eCommerce orders. POS send-sale orders are not part of this flow because they are invoiced when they are created in Retail Pro.
{% endhint %}

## Retail Pro processing

HotWax Commerce uses Retail Pro's OrderToInvoice API to create the invoice. For an order fulfilled from more than one store, one store is used as the invoicing store and Retail Pro inventory transfers reconcile stock from the other shipping stores.

## What changed

| Previous flow | Current flow |
| --- | --- |
| Send the order for invoicing after it was packed and marked as shipped. | Send the order for invoicing after all order items are packed. |

This change moves the invoicing trigger earlier in the fulfillment lifecycle. It does not change how a shipment is subsequently handed over or marked as shipped.
