# Manage Facility Participation

Configuring the scope of participation of a facility in online fulfillment is made convenient through the `Sell inventory online` card on the facility details page. Retailers can now manage whether a facility will participate in inventory computation for a channel from the `Sell inventory online` card.

## Configure Fulfillment Settings

Users can configure the following settings for the facility:

*  **Allow Pickup:** BOPIS operations require a staging area where customers can collect their orders. However, users can decide whether they can fulfill BOPIS orders by simply toggling on/off the `Allow pickup` settings to enable or disable BOPIS for the selected facility. These settings also ensure that the facility is available for store pickup option on Shopify PDP. The facilities that do not allow store pickup won't be available for selection on the `BOPIS Fulfillment App`.
*   **Use Native Fulfillment App:** The `Use native fulfillment app` setting enables users to specify whether the facility uses HotWax Commerce’s fulfillment app or third-party fulfillment apps. For warehouses employing a Warehouse Management System (WMS) for fulfillment, retailers can turn off the toggle, signifying that HotWax Commerce's fulfillment app will not be utilized. If the fulfillment for that facility is being managed by a third-party fulfillment app then showing the facility option and the orders in the `HotWax Commerce Fulfillment App` can create confusion for the store associates.
*  **Generate Shipping Labels:** HotWax Commerce allows users to integrate with carrier partners so that at the time of fulfillment via HotWax Commerce’s Fulfillment app, shipping labels can be automatically generated for the shipment process. Retailers who opt not to integrate HotWax Commerce with their carrier partners and prefer to manually enter tracking IDs in HotWax Commerce to update on Shopify can toggle off the `Generate Shipping Labels` settings. If the generated shipping label is not toggled on for that facility then the user may face a shipping label error when generating shipping labels on the `Fulfillment` App.
*   **Days to Ship:** `Days to ship` are the minimum number of days the facility will take to ship the order post brokering. Enter the number of days to ship and click on the `Update Days To Ship` button to save the configuration for the facility. This ensures that if the facility takes more days to ship than the SLA, the orders won't be brokered to that facility.

<figure><img src="../.gitbook/assets/Fulfillment Settings.png" alt=""><figcaption><p>Image: Configure Online Fulfillment</p></figcaption></figure>

## Configure Inventory Computation

Retailers have the flexibility to sell their facilities' inventory across [various channels](inventory/multichannel-inventory-setup.md). Additionally, they may need to exclude the Available-to-Promise (ATP) of a specific facility from the total online ATP. For instance, if a facility is temporarily unavailable to fulfill online orders, the retailer may want to remove its inventory from the overall online ATP calculation. This configuration can be done through the following settings.

Users can enable the toggle for the sales channel of the facility to include its ATP, or they can disable the toggle to exclude its inventory from the calculation for the sales channels.

