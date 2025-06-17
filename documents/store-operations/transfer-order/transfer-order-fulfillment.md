---
description: How to fulfill transfer orders in HotWax Commerce
---

# Transfer Order Fulfillment

Transfer orders from a store to a warehouse or between stores are fulfilled using HotWax's Fulfillment App. Warehouse-to-store transfers are fulfilled in WMS.

## Transfer Order Fulfillment

When inventory planners create transfer orders in NetSuite, they specify the source store and the destination warehouse. These transfer orders are automatically assigned a Pending Fulfillment status.

A scheduled `Import Transfer Order` job in HotWax Commerce OMS reads the transfer orders CSV file from the SFTP location and downloads transfer orders in HotWax Commerce with a Created status.

Another job automatically approves all `Created` transfer orders, moving them to Approved status.

`Approved` transfer orders appear in the Fulfillment App at the source store, ready for store associates to fulfill.

Here’s how store associates can fulfill transfer orders:

1. Go to the `Transfer Order` page in the `Fulfillment App`.
2. On the Transfer Order Details page, you'll see two tabs:
   * Open: shows items that haven't been shipped yet
   * Completed: shows items that have already been shipped
3. To print a picklist, click the `Print Picklist` button in the order details view. Review and print the list of items to be transferred.
4. Scan item barcodes or manually enter the quantity to fulfill transfer order items.
5. Click the Create Shipment button at the bottom right.
6. On the Shipment Review page:
   * Click Generate Shipping Label to auto-fetch tracking and carrier info, or
   * Manually enter shipping label details
7. Click on the `Arrow` icon at the bottom right corner to Complete the shipment.

{% hint style="info" %}
The progress bar turns red if item quantities are overshipped
{% endhint %}

<figure><img src="../.gitbook/assets/Fulfillment 5 -  Print Transfer Order Picklist (1).png" alt=""><figcaption></figcaption></figure>

For more details on transfer order lifecycle refer to this [document](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/transferorderlifecycle)
