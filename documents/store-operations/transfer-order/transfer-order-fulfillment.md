---
description: How to fulfill transfer orders in HotWax commerce
---

# Transfer Order Fulfillment

When transferring inventory from a store to a warehouse or between stores, the HotWax Commerce Store Fulfillment App facilitates this transfer order fulfillment process. The application streamlines the movement of inventory within the retail network, ensuring efficient handling of stock transfers and accurate inventory tracking. In the case of warehouse-to-store, transfer orders are fulfilled in WMS.

## Transfer Order Fulfillment

Warehouse managers create transfer orders in NetSuite, specifying the source location as the designated store and the destination location as the warehouse. These transfer orders are automatically assigned a Pending Fulfillment status

A scheduled job Import Transfer Order in HotWax Commerce OMS reads the transfer orders CSV file from the SFTP location and downloads transfer orders in HotWax Commerce with a default Created status.

A scheduled job Approves transfer orders in HotWax Commerce OMS identifies all transfer orders in the Created status and automatically marks them as Approved.

Once approved, transfer orders are automatically reflected at the source location in the Store Fulfillment App so that store associates can create shipments and ship transfer order items. Here’s how store associates can fulfill transfer orders from the Fulfillment App:

1. Navigate to the `Transfer order page` in the `Fulfillment app`.
2. Use the search bar in the transfer order section to find the transfer order you want to create a shipment for.
3. Once you've located the desired transfer order, click on it to access its details page.
4. On the transfer order details page, you'll typically find two tabs: `Open` and `Completed`.
   * The `Open` tab displays items that have not yet been shipped.
   * The `Completed` tab displays items that have been shipped.

After processing a partial shipment of a transfer order item, it will be listed in the `completed tab`. Store associates have the option to ship the remaining items in the transfer order at a later time, and these remaining items will then be visible in the `Open tab`.

5. Store associates can scan barcodes or manually enter the quantity of items to be shipped in the Item cards.
6. Click on the "Create Shipment" button, located in the bottom right corner of the page.
7. On clicking the `create shipment button`, the user will land on the transfer shipment review page. Click on `generate shipping label` to fetch the tracking code and carrier information or you can manually add the shipping label information.
8. Click on the `arrow icon` located at the bottom right corner of the page to complete the shipment.

{% hint style="info" %}
Store associates are not allowed to insert more than the intended item quantities. The bar turns red if the user tries to overship item quantities
{% endhint %}

For more details on Transfer order lifecycle refer to this [document](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/transferorderlifecycle)

### Transfer Order Picklists

Store Associates can print transfer order picklists directly from the Fulfillment App. Store associates can quickly verify products, ensuring that transfer orders are processed efficiently and accurately. By minimizing discrepancies, this feature strengthens inventory management and enhances overall operational efficiency.

### Steps to Print Transfer Order Picklists in the Fulfillment App:

1. **Access the Fulfillment App**: Open the HotWax Commerce Fulfillment App on your device.
2. **Navigate to the Transfer Order Section**: Go to the `Transfer Order` section to view all `active` transfer orders.
3. **Select the Relevant Transfer Order**: Locate the specific transfer order that you need to process.
4. **Click on the Print Picklist Button**: Within the transfer order details, you’ll find a `Print Picklist` button. Click this `button` to generate a picklist for the order.
5. **Review and Print the Picklist**: The system will generate a detailed picklist showing all `items` to be transferred.

<figure><img src="../.gitbook/assets/Fulfillment 5 -  Print Transfer Order Picklist (1).png" alt=""><figcaption></figcaption></figure>
