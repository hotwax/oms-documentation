# Configuring BOPIS and Fulfillment Facilities in HotWax Commerce

HotWax Commerce allows retailers to independently manage fulfillment and Buy Online, Pickup In-Store (BOPIS) processes for their facilities. Properly configuring these settings is crucial to delivering the omnichannel experience that aligns with your brand. Here's a guide on how to configure these settings effectively:

## Managing Online Fulfillment

***Generic Steps***

1. Go to the Facilities app through Launchpad: [HotWax Launchpad](https://launchpad.hotwax.io/home)
2. On the home page, click on Facilities and choose the particular facility for which you wish to modify specifications


### Linking Facility with Shopify

Before adjusting any specifications, ensure the facility is mapped to its corresponding location on Shopify:

1. Navigate to the External Mapping segment.
2. Click on the `MAP FACILITY TO EXTERNAL SYSTEM` button.
3. Choose Shopify from the options.
4. In the modal that appears, fill in the required fields:
   - Select the Shopify store from the dropdown menu.
   - Insert the location ID of the store obtained from Shopify. You can find this information by accessing the admin panel, navigating to Settings > Location > Facility, and checking the URL endpoint.

This ensures a seamless integration between the facility and Shopify, laying the groundwork for streamlined configuration and operation.


### Publish Inventory Online

Enable the Sell Inventory Online setting in the Fulfillment Settings card.


### Toggle Order Allocation

Order allocation is controlled using the max order limit function.

1. Go to the Online Order Fulfillment card to configure the order limit.
2. The current limit is displayed at the bottom of the card.

***Order Limit Options***

**Unlimited:**
  - Allows the OMS to allocate as many orders as there is inventory.
  - Not recommended for stores to prevent overallocation.

**No Capacity:**
  - Sets the fulfillment capacity to zero, preventing any orders from being allocated.
  - If disabling fulfillment capacity, ensure online inventory is turned off to prevent overselling.

**Custom:**
  - Allows setting a specific order limit for the facility.
  - Use for stores to prevent overallocation based on the staff's capacity.

**Note:** When setting a custom limit, consider the facility's staff capacity to fulfill orders in a day. Unlimited is not recommended for stores, and No Capacity should be used cautiously.


### Enabling BOPIS for a Store

Toggle the Allow pickup option to enable BOPIS for the selected facility in the Fulfillment Setting card.


### Disabling BOPIS for a Store

Under the Fulfillment Settings card, disable the Allow pickup toggle.


### Designate a Primary Product Store for a Facility

1. Open the Overflow menu located within the product store card.
2. Select the Primary option from the popover that appears.
3. Adjust the Primary designation by following the specified steps for the facility you intend to set as the primary store.

**Note:** Refer to the provided [configuration guidelines ](https://github.com/hotwax/press-release-faq/blob/main/bopis/customer-experience/primary-facility-group.md)to understand when and how to apply this configuration effectively.

By configuring BOPIS and fulfillment settings appropriately, HotWax Commerce ensures a seamless omnichannel experience for your brand.
