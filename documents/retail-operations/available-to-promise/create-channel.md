# Create Channels

Retail brands often sell products across various sales channels such as offline stores, marketplaces, social media, and their own websites. However, managing inventory across these different platforms can be challenging, as each sales channel has its own set of rules and penalties. For instance, marketplaces like Amazon impose charges for delayed fulfillment or rejected orders. To prevent overselling and efficiently manage inventory, many brands allocate separate Available-to-Promise (ATP) inventories for each sales channel.

This section explains how to set up inventory channels, link facilities to those channels, and configure product inventory for each channel.

## Create an Inventory Channel

In HotWax Commerce, Inventory Channels combine Facility Groups and Configuration Facilities. Follow these steps to create a new inventory channel:

1. **Access the Inventory Channels Page**:
   * From the left-side menu bar of the ATP app, go to the `Inventory Channels` page to view existing channels.
2. **Create a New Channel**:
   * Click the blue `plus` button at the bottom-right of the page to open the `Create Channel Group` window.
   * Enter a name for the new Inventory Channel. The channel ID will automatically populate with the same name.
   * Write a description of the channel to explain its purpose, such as "Inventory channel facility group to publish ATP on Shopify."

### Add Inventory Channel Configuration Facility

The Configuration Facility is a virtual facility that plays a critical role when managing product-level ATP configurations at a network-wide scale. Therefore when configuring network-level product ATP rules, you need to add a channel-level configuration facility:

1. **Create a New Configuration Facility**:
   * Click on the `Create New` option in the dropdown menu under the group-level configuration to create a new configuration for the channel.
2. **Select an Existing Virtual Facility**:
   * When you setup HotWax Commerce, you already get one configuration facility by default. If you are adding such an existing virtual facility, you can choose it from the dropdown menu.

{% embed url="https://youtu.be/3EnQHxa7R2c" %}
Inventory Channel Creation
{% endembed %}



### Link Facilities to the Inventory Channel

To link facilities to an inventory channel:

1. **Open the Facilities Section**:
   * Click the `Options` button in the `Facilities` section to open the `Link Facilities` window.
2. **Select the Facilities for ATP Computation**:
   * Check the boxes for the facilities you want to include in the ATP computation for that channel. This action will add the facilities to the channel facility group as discussed in the concepts.

**Example**:\
If a Canadian retailer has two Shopify stores—one in the US and another in Canada—and they want to compute ATP for the US store using only their warehouses, they would link the warehouses to the inventory channel. This would link the facilities to the relevant facility group that includes only the warehouses.

{% embed url="https://youtu.be/YgAS-Bi5Prg" %}
Linking Facility
{% endembed %}



## Publishing ATP to a Sales Channel

Retailers managing multiple online sales channels must decide which facility group will publish its inventory to which channel. This setup ensures that only selected facilities' inventory will be made available on the defined sales channels. Follow the steps below to publish inventory to your Shopify store using the Available-to-Promise (`ATP`) app.

### Steps to Publish Inventory:

1. **Access the `ATP` App** Navigate to the `ATP` app within HotWax Commerce and locate the `Inventory Channel` page.
2. **Go to the `Publish` Tab** Once on the `Inventory Channel` page, click on the `Publish` tab to proceed. The `publish` tab has a list of all the Shopify shops connected with the product store. When you download the HotWax Commerce integration App for a Shopify Store, it automatically creates a Shopify shop in HotWax OMS. This Shopify shop is the representative of all the Shopify Stores for that specific brand. For example, since the retailer is selling the NotNaked Brand in both the US and Canada, both the US Shopify Store and Canada Shopify Store will be listed here.
3. **Select Run Time and Frequency** Here, you can choose the `Run Time` and the `Frequency` (daily, weekly, etc.) to push inventory updates to Shopify. This setting helps define when the inventory will be published.
4. **Choose the Inventory Channel** From the dropdown menu, select the inventory channel from which you want to publish. This corresponds to the facility group whose inventory will be pushed to the Shopify store.
5. **Save and Schedule the Job** After selecting the appropriate options, click `Save Changes` to finalize the settings. This will schedule the inventory publishing job as per the selected time and frequency.



