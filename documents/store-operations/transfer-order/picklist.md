---
description:- This document describes the Picklist Functionality for Store Transfer Fulfillment, providing a streamlined approach for store associates to efficiently pack items while accurately tracking them in HotWax.
---

# Picklist for Store Transfer Fulfillment

When packing items for a Transfer Order, store associates face two key challenges:
1. Associates are required to pack items into boxes while simultaneously entering the details into HotWax (OMS). This leads to confusion and mistakes if the packing process is not properly tracked.
2. If items are packed without updating HotWax in real-time, associates might forget which items have been packed into which boxes, causing issues when they try to generate shipping labels later.

To address these challenges, a Picklist Document feature has been implemented, allowing store associates to generate a PDF document that lists all open items in the Transfer Order. This feature serves as a physical tracking sheet during the packing process. This streamlined workflow allows associates to complete one task at a time: first packing and tracking with the picklist, and then performing data entry in HotWax. This approach reduces confusion and errors, leading to improved accuracy and minimized delays in operations.

The picklist includes the following fields:
| Field                  | Description                                               |
|------------------------|-----------------------------------------------------------|
| No.                    | Serial number of the item.                                |
| Product Description     | A brief description of the product.                      |
| Qty Ordered            | The quantity of the item that was ordered.                |
| Qty Picked             | The quantity of the item picked for packing.              |
| Box Number             | The box in which the item has been packed.                |

## How to Use the Picklist Document

Follow these steps to use the picklist functionality and refer to this document on the detailed process of transfer order fulfillment.

#### 1. Generate the Picklist Document:
- After opening the TO in the transfer order section of the fulfillment app, click on the `Picklist` button on the bottom right corner of the page next to the `Create Shipment` Button.
- A PDF document will be generated, listing all open items in the TO.
- Print the picklist or keep it available for reference.

#### 2. Pack Items Using the Picklist:
- As you pack the items into boxes, use the picklist to mark which items are going into which boxes.
- Fill in the `Qty Picked` and `Box Number` fields on the picklist as you pack.

#### 3. Enter Data into HotWax:
- Once packing is complete, refer to the picklist and enter the packed items into HotWax.
- For each box, select the items that were packed, then click Create Shipment.
- Generate the shipping label for each box based on the items packed.

### 4. Complete the Process:
- Continue using the picklist for any additional boxes or items in the TO.
- Once all shipments are created and labels generated, the process is complete.
