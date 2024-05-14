---
description: Learn how to configure BOPIS when setting up HotWax Commerce
---

# How to configure BOPIS with HotWax Commerce and Shopify

BOPIS, or Buy Online, Pick Up In-Store, is a feature offered by HotWax Commerce that increases conversions on PDP by showing real-time inventory availability to customers for immediate pickup at their preferred stores so that they pick up their orders on the same day.

This document gives a sequential walkthrough of how to enable your facilities for BOPIS and ensure that the pickup facilities are available on Shopify PDP.

## Create a Facility for Store Pickup Options

To facilitate BOPIS operations, retailers need to [set up and configure facilities](../../facilities/) for store pickups where customers can collect their purchases by ordering online.

### Set up Facilities

1. Log in to Launchpad with your user credential.
2. Navigate to the `Facilities` App in the Launchpad.
3. The default tab that opens when you access the `Facilities` app is the `Facilities` tab with a list of all existing facilities.
4. Click on the `+` button at the bottom right corner to create a new facility.
5. Select the type of facility, whether the facility is a Warehouse or Store.
6. Add the name of the facility, internal IDs, and external IDs of the facility on the `Create Facility` page.
7. Click on the `Create Facility` button.

### Add Address and Facility Location

1. Add the facility address, city, and the Zip code.
2. Select country and state from the dropdown.
3. Add the contact number and further add `latitude and longitude` details (to ensure the exact geolocation of the facility).

{% hint style="info" %}
HotWax Commerce App uses ["storeLookup"](https://docs.hotwax.co/integration-resources/v/hotwax-commerce/journeys/introduction-buy-online-pickup-in-store/bopis-pdp-experience) API to display the distance of stores from a customer's current location. The API relies on the latitude and longitude coordinates of facilities to determine their proximity to the customer. Make sure that latitude and longitudes are added for both new and existing facilities.
{% endhint %}

### Add Product Store

Facilities can have products from multiple brands which are configured as product stores in HotWax Commerce. If the retailer has multiple brands, retailers have to specify that the facility is containing the product of which brand. This function enables users to link/delink a facility to one or multiple product stores.

1. Click the `Add` function under Product Store.
2. Select the store/s from the dropdown menu
3. Click the `Save` icon to save the changes.

## Fulfillment Configuration of Facilities

The Facility groups are used to define the scope and functionality of the facility for omnichannel order management. If a retailer wants to configure the fulfillment settings of facilities in bulk, they can add facilities to the[ group](../../facilities/manage-groups.md). `Pickup` is a default facilities group type to ensure that facilities are available to the customer on Shopify PDP as a pickup option. Only facilities that are added to this group will be available to the customer on Shopify PDP. Turning the toggle `on` when creating facilities or from the facility details page for `allow pickup` adds the facility to this facility group.

Facilities have the option to choose whether or not to participate in selling their inventory online. If a facility is capable of fulfilling orders and wants its inventory to be sold online, it has to be included in the `Online facility` group. Retailers can also turn the toggle on from 'sell online card' to add the facility to `Online facility` group. Similarly, if the facility supports HotWax Commerce Fulfillment app, then turn the toggle on of `Use Native Fulfillment App` or add the facility to `OMS Fulfillment group`.

## Manage BOPIS Inventory

### Inventory Sync in HotWax Commerce

For a product to be available for pickup at Shopify PDP, it must have inventory at the retail store (facility). HotWax Commerce offers automated and manual bulk [Inventory upload through CSV](import-app.inventory.md). Additionally HotWax commerce gets [inventory feed from ERP, WMS, or POS systems](business-process-models/inventorylifecycle.md), to update the inventory in its system. The external system places the order on the SFTP location HotWax commerce processes these files and updates the inventory in its system.

### ATP Computation

When the inventory is received, a product’s QOH and ATP is updated in HotWax Commerce. HotWax Commerce calculates Physical Available to Promise (ATP) of a facility by considering various factors, such as [safety stock, threshold, reserved quantity](GLOSSARY.md), and orders in the queue.

ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue)

For each store that allows BOPIS, HotWax Commerce uses the [checkInventory](https://docs.hotwax.co/integration-resources/v/hotwax-commerce/api-and-data-feeds/inventory/check-inventory) API to check the available to promise (ATP) inventory for the desired product. Display all the facilities with non-zero inventory numbers on the product detail page (PDP) for customers to select and place a BOPIS order.

## Configure Shopify BOPIS Scripts

Retailers can configure Shopify BOPIS scripts from the Shopify Shop page in HotWax Commerce, enabling PDP changes on Shopify. Retailers who install the HotWax Commerce Integration App gain access to PDP customization functionality as a default feature. By installing the default JavaScript (JS) and Cascading Style Sheets (CSS) scripts from the Shopify Shop page into HotWax Commerce, retailers can effortlessly start offering BOPIS to their customers.

### Steps to add scripts:

1. Login to HotWax Commerce.
2. Open the Hamburger menu and navigate to Shopify Shop Menu.
3. Click the Shop Id and go down to the Shopify Script section.
4. Click Add button and select BOPIS JS from the dropdown menu and press `Add`.
5. Ensure the `BOPIS JS` file is added successfully and is reflecting with its version.
6. Go to the Shopify Tag id column and click Add function.
7. Ensure the Shopify Tag id is added and reflected.
8. Now again click the `Add` button and select the `BOPIS CSS` from dropdown menu
9. Ensure that the `BOPIS CSS` is also added below. (Since the BOPIS CSS is already associated with BOPIS JS, adding Shopify Tag for BOPIS css is not required.)

This ensures seamless integration and reflects the modifications on the Shopify storefront instantly. Users can verify the pickup button at Shopify PDP and confirm that both the scripts are added successfully.

## Verify Pickup Button at Shopify

Once you have set up a facility for BOPIS, you can verify the BOPIS availability through the following steps:

1. Login to Launchpad.
2. Navigate to the `Facilities` App in the Launchpad.
3. Click on the `Group` and select `Pickup` group type.
4. Click on `Facilities` to view all the facilities which support Pickup.
5. Note down any facility.
6. Login to HotWax Commerce and navigate to the `Find Inventory` page using the hamburger menu.
7. Use `Facility` filter to view all the products and its inventory available on the selected facility. (Ensure that the selected facility is the same as selected from the Facility app, associated with the pickup group type.).
8. Search for the selected product on Shopify and navigate to the product display page.
9. Ensure the `Pickup` button is available for the product. Click on `Pickup` button to view the facilities available for pickup.

{% embed url="https://youtu.be/Ra7nEUeW5lc" %}
