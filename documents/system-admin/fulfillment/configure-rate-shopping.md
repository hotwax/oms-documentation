---
description: >-
  This guide walks you through setting up rate shopping in HotWax Commerce.
---

# Configure Rate Shopping in HotWax Commerce

## Introduction

In Shopify, retailers can choose from various shipping methods, which are then presented to customers during checkout. Retailers may offer customers shipping based on Service Level Agreements (SLAs) such as standard shipping or specific shipment methods like FedEx Air or FedEx Ground. Customers select their preferred method, and charges are applied accordingly.

In HotWax Commerce, the shipping method mapping can be different based on the retailer's requirements.

## Mapping for Specified Shipping Methods

For retailers with agreements with carrier service providers, shipping method options are directly offered to customers. Customers can then choose their preferred shipping method, and charges are applied accordingly. In such scenarios, carrier providers automatically offer retailers the best shipping prices. In these instances, HotWax simplifies the process by only requiring the mapping of shipping methods from Shopify to HotWax for generating shipping labels. For instance, if a customer selects FedEx Two-Day Shipping on Shopify, this method would have been pre-mapped by the retailer, including rates, zones, and other pertinent information. When an order transitions from Shopify to HotWax, this shipping method seamlessly transfers over. 

### Carrier Shipment Method Mapping

Retailers need to create carrier and shipment methods in HotWax Commerce and ensure that product store shipment mapping is also completed for the existing shipment methods. Learn how to map carrier shipment methods [here](carrier-and-shipment-methods.md).

### Shopify Shop Carrier Shipment Mapping

Once shipping methods are created, retailers have to also map Shopify Shop carrier shipment methods to ensure all the shipment methods coming from Shopify are mapped with the respective carrier shipments. Follow these steps to map Shopify Shop carrier shipments:

1. **Login**: Login to your HotWax Commerce Instance and navigate to `Shopify Shop` from the Hamburger menu.
2. **Select Shop**: Select the `Shopify Shop` for which you want to create the mapping
3. **Navigate to Carrier Shipments**: Navigate to the `Shopify Shop carrier shipment` section
4. **Add Mapping**: Click on the `Add` button to open the shipment mapping form
5. **Select Carrier and Method**: Select `Carrier` and `Carrier shipment method` from the dropdown menu
6. **Add Shopify Shipment Method**: Add the `Shopify Shipment Method` name that will correspond to the above-selected shipment method.
7. **Save Mapping**: Click on the `Add` button to save the shipment method.

### Add Carrier Facility

In HotWax Commerce, the ability to add shipping carriers to facilities is essential for order fulfillment. Once a shipment gateway is set, adding carriers to facilities enables shipping label generation specifically for those carriers associated with the selected facility. To learn more about how to add a carrier party to the facility, read our [user manual](ShippingGateways.md#add-carrier-facility) 

Once the shipment method is saved and mapped, HotWax Commerce runs a carrier-specific API call to generate a shipping label based on the shipment method selected by the customer during checkout. Since all shipment methods are mapped, HotWax Commerce directly generates the shipping label based on the shipment method, shipping distance, and the box size from the carrier.

{% embed url="https://youtu.be/D7aoyRRIdMU" %} Shopify Shop Carrier Shipment Mapping {% endembed %}

## Mapping for SLA Based Shipment

For retailers without specific carrier integrations, offering customers the choice between standard and expedited delivery is common practice. Default delivery charges are applied for both options, but actual shipping costs may vary depending on the carrier and the chosen method. For example, if a customer selects Standard Shipping and the retailer charges $20, but the carrier offers Air Shipping for $30 and Ground Shipping for $10, it's crucial to select the most cost-effective option, such as Ground Shipping. HotWax Commerce facilitates this through rate shopping, querying different service levels, or shipping methods provided by carrier partners to find the best option for each shipment.

### Enabling Rate Shopping

Retailers who want to rate shop need to set up configurations for rate shopping for their product store. Follow these steps to enable rate shopping:

1. **Log in**: Access your HotWax Commerce Instance with your credentials.
2. **Navigate**: Go to Settings > Product Store Page from the dashboard.
3. **Select Store**: Choose the relevant product store where you want to enable rate shopping to proceed to the configurations page.
4. **Add Configuration**: Under the store settings section, click on the "Add" button to create a new configuration.
5. **Configure Rate Shopping**: From the dropdown menu, choose "Configuration for Rate Shopping" and set the value as "Y" to enable rate shopping.
6. **Save Configuration**: Click on the "Add" button to save the configuration changes. You will be able to see the `RATE_SHOPPING ` configuration in the setting type.

{% embed url="https://youtu.be/F8sxNrDd6N8" %} Enable Rate Shopping {% endembed %}

### Creating Shipping Methods in HotWax Commerce

Shipping methods are created and mapped with the carrier, product store, and facility in [regular manner](carrier-and-shipment-methods.md). For shipping based on SLA, retailers don’t have to map the Shopify shop carrier shipment methods.

### Setting Service Level Agreement

Setting Service Level Agreements (SLAs) within HotWax Commerce allows retailers to define precise delivery expectations for standard and expedited shipping, crucial for meeting customer needs and maintaining satisfaction. For example, it is possible that some retailers have a standard shipping policy to deliver in 7 days while for other retailers, the policy for standard shipping is 10 days. By mapping SLAs, users establish clear timelines, ensuring efficient order fulfillment and transparent communication with customers.

**Step-by-Step Usage Instructions:**

1. Visit the following page: https://{instance-name}.hotwax.io/commerce/control/CarrierSetup?partyId=\_NA\_ or modify the party ID to \_NA\_ from any carrier integrations page.
2. Go to the `Product Store Shipment Methods` section and click on `Configure shipment method.`
3. In the newly opened module, select the desired `product store`, `shipment gateway config ID`, and `shipment method type` from the dropdown menu.
4. Add the `delivery date` to specify the service level agreement for the selected shipment method.

{% embed url="https://youtu.be/AQiKK_bRmJE" %} Setting Service Level Agreement {% endembed %}

### Generating Shipping Labels with Rate Shopping

HotWax Commerce streamlines shipping label generation by automating the process based on order specifics like shipping method, box size, and delivery distance. Retailers need to associate carrier ID with the Facility to generate shipping labels with rate shopping. [Read here](ShippingGateways.md#add-carrier-facility) for more information.

The system initiates an API call in the background when a picklist is created, leveraging SLA data to fetch shipping methods and charges. This ensures efficient selection of the most cost-effective shipping method within the specified delivery timeframe, saving time and resources for retailers.

### Step-by-Step Usage Instructions

1. **Picklist Creation**: When a store manager creates a picklist in HotWax Commerce, the DoRateShopping/ service initiates in the background.
2. **API Call Execution**: This service triggers an API call to the endpoint of the shipping carrier or aggregator, based on the configuration.
3. **Fetching Shipping Methods**: The API call retrieves available shipping methods and associated charges, considering the specified SLA for order delivery. For example, if the SLA for order delivery is 7 days, the API call fetches all the shipping methods available to deliver the order in 5-7 days.
4. **Selection of Method**: HotWax Commerce automatically selects the most cost-effective shipping method from the fetched options, optimizing efficiency and cost for the retailer.
5. **Automatic Label Generation**: Upon selection, another API Call a shipping label is generated in the background, ready for store associates to print during the packing process.
6. **Regeneration on Packaging Change**: If store associates modify the default packaging, the shipping label needs to be regenerated, prompting rate shopping to occur again to ensure accurate and cost-effective shipping.


{% hint style="info" %}
HotWax Commerce only supports rate shopping for a single carrier. If the retailer wants cross-carrier rate shopping, they have to integrate with a shipping aggregator like EasyPost. In such cases, the API call hits the endpoint of the aggregator and fetches shipment method from all the integrated carriers before selecting the most cost-effective shipment method.
{% endhint %}


