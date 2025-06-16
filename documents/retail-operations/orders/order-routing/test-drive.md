# Test Drive

The Test Drive feature in the Order Routing App allows to test real orders against routing rules to understand how allocation decisions are made, without affecting fulfillment or inventory.

## What Can be Tested

- **Brokering Run**  
- **Routing Rule** 
- **Inventory Rule** 

## How It Works

Pick a routing run in the Order Routing App. Click test drive button on the test drive card. This opens a read-only view with all routings and rules in that group. You can’t make changes here. To leave, click exit test mode.

Use the search bar to find an order by ID, product name, customer name, or reference. Select an order to see basic details. You’ll see which routings match based on filters and rules.

Click **broker order** to simulate routing. You’ll see:
- Which routing and rules were used
- Fulfillment location
- Allocation reason
- Available To Promise (ATP)
- Quantity on Hand (QoH)

The allocation reason comes from the first item in the ship group and applies to the rest.

Want more info on a routing or rule? Click **details** button on that card. A panel opens with all the setup info. Changes you make are saved when you close the panel or click back.

## Testing a Single Routing

To test a single routing, open it and click **test**. The rules panel turns into a search bar. Pick an order. If it doesn’t match the routing filters, you’ll see a message. If it qualifies, click **broker order** to simulate routing. Each ship group shows the rule used. Click the **locate icon** to see which rule triggered the allocation.
