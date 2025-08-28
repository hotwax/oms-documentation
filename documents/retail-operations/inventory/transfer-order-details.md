# Transfer order details

The Transfer Order Details page displays all key information for a specific TO. You can review order status, assigned facilities, shipping configuration, and item-level transfer progress.


## TO overview
The top-left section of the page displays the name of the TO. A status selector is also available, allowing updates to the order’s current state, such as created, approved or canceled.  

{% hint style="info" %}
Only TOs in Approved status are visible to the origin facility for fulfillment in the Fulfillment App, and to the destination facility for receiving in the Receiving App.
{% endhint %}

## Origin facility and shipping Info
The Origin facility card displays the facility name and address. It also shows the selected carrier and shipping method.


## Destination facility
The Destination facility card displays the facility name and full address, showing where the TO is scheduled to be received.


## Timeline
The Timeline shows a chronological record of all major events in a TO’s lifecycle, starting with its creation. It records progress updates and status changes throughout the transfer process.


## Item details
The Items section, located at the bottom of the page, lists all items included in the TO. Each item appears as a separate card with these fields:
- Quantity ordered  
- Quantity shipped  
- Quantity received  


### Add items
To add an item to an existing TO, click `Add item to Transfer` button.  

{% hint style="info" %}
You can only add items while the TO is in Created status. Once a TO is Approved, no additional items can be added.
{% endhint %}

## Available Actions on Item Cards
Click More (⋮) icon on an item card to access these actions:

- **Edit order quantity**  
  Update the quantity for that item in the TO.  
  **Use Case:** Use this if stock availability changes after the order is created and you need to adjust quantities at the origin facility.  

- **Fulfill**  
  Opens the Fulfillment App for the origin facility, where you can start fulfillment and monitor shipment progress.  

- **Receive**  
  Opens the Receiving App for the destination facility, where you can start receiving and monitor receipt progress.  

- **Complete Item**  
  Manually marks an item in the TO as completed.
  > **Use Case:** Use this when an item needs to be manually closed out, such as during exceptions, discrepancies, or partial transfers where automatic completion does not apply.
