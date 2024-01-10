# Shipping Method Mapping between HotWax Commerce and NetSuite

The shipping method mapping between HotWax Commerce and NetSuite ensures that the shipping methods selected in Shopify correspond accurately to their counterparts in both HotWax Commerce and NetSuite. HotWax Commerce facilitates the mapping of shipping methods chosen from Shopify, providing accurate information to NetSuite. This process establishes coherence across platforms, maintaining consistency in order processing and fulfillment workflows. 

## Creating a Shipping Method in HotWax Commerce:

Shipping methods that are supported by the retailer needs to be created in HotWax Commerce to ensure that the shipping information is sent to the Shipping carrier. Shipping methods can be created by following these steps:

1. Log in to your user instance and navigate to `Settings` > `General Settings`.

2. Locate the `shipment method` section and click on the `Add` button, which will open up a form.

3. Fill in the required fields:
   - **Shipment Method Type ID:** The name used to identify the shipping method within HotWax Commerce.
   - **Description:** A concise explanation of the shipping method's intended purpose.

4. After entering the necessary details, click on the `Add` button to save the shipping method in HotWax Commerce.

## Mapping Shipping Methods between HotWax Commerce and NetSuite:

Once shipping methods are created, they need to be mapped with NetSuite to provide accurate information for order processing and fulfillment. Follow these steps to map the shipping methods:

1. Access NetSuite Integration Page: Go to `Settings` > `NetSuite Integration`.

 {% hint style="info" %}
   If the page is not visible, navigate to the `General Settings` page and click on `Add NetSuite Data` button at the top.
   {% endhint %}

2. Locate Shipping Methods Mapping: Look for the `Shipping Methods Mapping between HotWax and NetSuite` section.

3. Initiate Mapping: Click on the "Add" button, opening a form to create shipping method mapping.

4. Fill Mandatory Details:
   - **Shipping Methods Key:** The shipping methods created in HotWax Commerce.
   - **Shipping Methods Value:** Corresponding values present in NetSuite.
   - **Description:** Briefly describe the shipping method.

5. Save Mapping: Click on the `Add` button to establish mappings between HotWax Commerce and NetSuite. This ensures that whenever a shipping method is selected in HotWax Commerce, NetSuite will recognize the appropriate method based on the mapped key and value.
