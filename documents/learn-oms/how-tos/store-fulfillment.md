---
description: Learn how to configure Store Fulfillment when setting up HotWax Commerce
---

# How to configure Store Fulfillment with HotWax Commerce and Shopify

HotWax Commerce's intelligent Order Routing and efficient Store Fulfillment feature optimizes order processing for retailers. They can prioritize fulfillment based on proximity and inventory availability to ensure swift, cost-effective same-day, next-day delivery from the nearest retail fulfillment centers.

This document gives a sequential walkthrough of how to enable your facilities for store fulfillment and ensure orders are brokered according to your preference

## Create a Facility for Store Fulfillment Option

To facilitate Store Fulfillment operations retailers need to set up and configure facilities for store pickups where retailers can route orders for fulfillment

### Set up Facilities

1. Login to Launchpad with your user credential
2. Navigate to the `Facilities App` in the Launchpad.
   - The default tab that opens when you access the `Facilities App` is the `facilitie`s tab with a list of all existing facilities
3. Click on the `+` button at the bottom right corner to create a new facility.
4. Select the type of facility, whether the facility is a Warehouse or Store.
5. Add the name of the facility, internal IDs, and external IDs of the facility on the `Create Facility` page 
6. Click on the `Create Facility` button.

### Add Address and Facility Location

- Add the facility address, city, and the Zip code. Make sure to add the correct Zip codes as HotWax Commerce uses Zip Codes to identify the stores in proximity to the customers.
- Select country and state from the dropdown.
- Add the contact number and further add latitude and longitude details (Contact number and address are necessary for shipping label generation)

### Add Product Store

Facilities can have products from multiple brands which are configured as product stores in HotWax Commerce. If the retailer has multiple brands, retailers have to specify that the facility contains the product of which brand. This function enables users to link/delink a facility to one or multiple product stores.

1. Click the `Add` function under Product Store.
2. Select the store/s from the dropdown menu
3. Click the `Save` icon to save the changes.

## Fulfillment Configuration of Facilities

The [Facility groups](https://docs.hotwax.co/documents/system-admins/administration/facilities/manage-groups) are used to define the scope and functionality of the facility for omnichannel order management.

Facilities have the option to choose whether or not to participate in selling their inventory online. If a facility is capable of fulfilling orders and wants its inventory to be sold online, it has to be included in the Facility Group with the `CHANNEL_FAC_GRP` subtype. Retailers can create different facility groups for different sales channels under the `CHANNEL_FAC_GRP` subtype and add the respective facilities to that group. 

## Configure Online Fulfillment Capacity

Fulfillment capacity is defined on the basis of the number of orders a facility will be able to fulfill in a day. It is set up considering various resources such as facility size, staff, and footfall. Users can set up the maximum order limit that can be allocated to that facility through the `Online Order Fulfillment` card. Read our [user manual](https://docs.hotwax.co/documents/system-admins/administration/facilities/configure-fulfillment-capacity) to learn how to configure online fulfillment for a capacity.

## Configure Brokering for Facilities

To include a facility in brokering, it must be added to a facility group with the Brokering Group subtype. This ensures that when the facility group is included in the brokering run, all facilities in that group are available for brokering. For guidance on setting up and configuring brokering rules according to your preferences, refer to our [order brokering user manual](https://docs.hotwax.co/documents/retail-operations/orders/brokering).

## Setup Shipment Method from Facilities

In HotWax Commerce, the ability to add shipping carriers to facilities is essential for order fulfillment. Once a shipment gateway is set, adding carriers to facilities enables rate shopping and shipping label generation specifically for those carriers associated with the selected facility. This feature enhances workflow efficiency by allowing the HotWax Commerce Store Fulfillment App to intelligently select the most cost-effective shipping carrier for each order. Read our [user manual](https://docs.hotwax.co/documents/system-admins/fulfillment/shipping-methods/shippinggateways) to learn how to add shipping carriers to facilities.

Retailers need to turn the toggle on for the ‘Generate Shipping Label' in the `facility details` page to ensure that the shipping label is generated from the store.

## Manage Inventory

### Inventory Sync in HotWax Commerce

For a product to be available for store fulfillment, it must have inventory at the retail store (facility). HotWax Commerce offers automated and manual bulk inventory upload through CSV. HotWax Commerce gets inventory feed from ERP, WMS, or POS systems or manual uploads, to update the inventory in its system. The external system places the order on the SFTP location, HotWax Commerce processes these files, and updates the inventory in its system.

### Inventory Sync to Shopify

When the inventory is received, a product’s QOH and Online ATP are updated in HotWax Commerce. HotWax Commerce calculates the Physical Available to Promise (ATP) of a facility by considering various factors, such as safety stock, threshold, reserved quantity, and orders in the queue.

Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Exluded facilities' ATP)

For each store that allows online fulfillment, HotWax Commerce calculates the Online ATP that is available to sell and synchronize the inventory with Shopify through [Hard Sync and `Update recent inventory changes jobs.](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/inventory)

### Verify Store Fulfillment

Once you have set a facility for store fulfillment, you can verify that the orders are being brokered to that facility through the following steps:

1. Import the orders from Shopify through `Import Orders` job
2. Navigate to the `Facilities App` in the Launchpad.
3. Turn off the fulfillment from the Warehouse for the time being.
4. Wait for the brokering run, or go to the `Order Routing` App, click on the brokering run, and click on the `Run now` for brokering.
5. Login to HotWax Commerce and navigate to the `sales order` page using the hamburger menu.
6. Verify that the orders are brokered to the store based on the preferred inventory rules.
7. Navigate to the `Fulfillment App`, and select the facility where the order is brokered, from the settings page. Verify that the order is visible in the `Fulfillment App`.
8. Fulfill the order to verify that the shipping label is being generated from the store. If not, check our troubleshooting doc for the Shipping Label error.



