# Happiness Guarenteed

Happiness Guarantee (HG) is the equivalent of Blind Returns where inventory is accepted back at a store without linking back to an order. This document details the flow of information from the creation of the return to the reconciliation.

## Create HG Return

The creation of happiness guaranteed starts from the HotWax create return screen. The following changes will need to be made:

1. **Rename Screen Title:** 
   - Rename the screen title to “Happiness Guaranteed”.

2. **Return Type:**
   - Set the return type to always be “Return from Customer”, and hide all other reasons.

3. **Facility Selection:**
   - Auto-select the facility based on the user logged in.

4. **Customer Information:**
   - Hardcode the customer information to a blanket “NA” default customer to remove extra steps.

5. **Currency Option:**
   - (Optional) Hide the currency option from the UI and always default to USD.

## Add items to return

After creation of the return, the returned item will be added to it.

When adding items, the following changes will need to be made:

1. **Selected Product Display:**
   - Display the SKU instead of the variant name for selected products.

2. **Return Types:**
   - Limit return types to only show “Exact Replacement” or “Store Credit”.

3. **Return Reasons:**
   - Restrict return reasons to the options shared by gorjana, regardless of the return type.

4. **Price Auto-population:**
   - Auto-populate the price field with the product price in HotWax. 
   - Note: HotWax is not the true source of product price and may be inaccurate. This field is not required to be accurate on the return in HotWax since it is not used for reconciliation. It also has a default value so that the user does not have to enter it.

## Accept and Receive Return

The accept and receive steps of the current process are designed to work for ship-to-warehouse returns. However, for the Happiness Guaranteed (HG) flows, these steps may need to be removed from the flow to offer a better and seamless experience for store staff.

Since neither of the HG flows require a true return receiving workflow, as the inventory is never resold, the ideal approach would be to allow the user to move the return from “created” to “completed” after the process of adding items is completed.

Additionally, a custom script will need to be added to create inventory variances at the facility when a replacement is issued to the customer. This variance will be logged with the same reason selected by store staff when adding the item to the return.

## Issuing Store Credit

After completion of the process, the staff will be able to copy the internal ID of the return from HotWax by using the “click to copy” function found on all document headers. This ID will then be posted to Shopify manually when creating a gift card to allow for reconciliation.

To make the experience easier, a popup can be added which can be triggered on a button click which shows the return total and the return id together making it easier for the store staff to copy and paste into Shopify.


## Sync to NetSuite

A scheduled sync from HotWax will sync adjustments or transfers to NetSuite corresponding to the HG returns created in HotWax.

Each return reason will be mapped to a facility in NetSuite. This mapping will live in the NetSuite mapping page, where the HotWax reason internal ID is mapped to a NetSuite facility ID.

- Return items with type “Store Credit” will create a positive inventory adjustment in NetSuite at the facility mapped to the selected return reason.

- Return items with type “Replacement” will create an inventory transfer from the physical facility to the facility mapped to the return reason.
