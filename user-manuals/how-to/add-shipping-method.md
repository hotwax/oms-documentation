---
description: >-
 Learn how to map the Shipping method in OMS to sync with Netsuite? 
---

### How to Map Shipping Method in OMS to Sync with Netsuite

To ensure seamless communication of shipping information across all systems, it's crucial to map shipping methods in OMS OMS with those in Shopify and Netsuite. Follow these three steps to ensure the sync works as expected:

1. **Creating a Shipment Method in OMS**

   Establishing the corresponding shipping methods in OMS is essential to provide OMS with the necessary options for handling shipping. These methods can then be effectively mapped with the shipping methods associated with incoming orders, ensuring seamless processing and fulfillment.

   - Log in to your user instance and navigate to `Settings` > `General Settings`.
   - Locate the shipment method section and click on `Add`, which will open up a form. Fill in the required fields:
     - Shipment Method Type ID: The shipment method type ID serves as the identifier for the shipping method within OMS. For instance, it could be represented as "EXPEDITED" for expedited shipping method.
     - Description: Write shipping method name in the description field.
   - After entering the necessary details, click on `Add` to save the shipping method in OMS.

2. **Associating Shipment Method to Product Store and Carrier**

   By associating each shipping method with the corresponding product store and carrier, OMS OMS gains precise information about which brands and carriers are related to specific shipping methods. For example, this linkage allows OMS to recognize that "Standard Shipping" is associated with the "Brand X" product store and "Carrier Y." Consequently, when an order with "Standard Shipping" is received for "Brand X," OMS knows to apply the appropriate shipping rules and rates specific to that brand and carrier combination. This level of detail ensures accurate shipping calculations and streamlined order processing tailored to each brand's requirements.

   - To configure the shipping options for your store, navigate to `Settings` > `Stores` and locate the Product Store Shipping Method section, you can add specific shipping methods by clicking the `Configure Shipping Method` button.
   - Product Store: Choose the Store for which you want to add the shipping method.
   - Tracking Required: This configuration provides flexibility in managing your fulfillment process based on specific tracking requirements and business rules.
   - Shipment Gateway Config Id: Choose the 'Shipment Gateway Config Id' to associate it with the Product Store and Shipping Method.
   - Shipment Method Type: Choose the Shipping Method that you want to add.
   - Carrier Service Code: "The 'Carrier Service Code' serves as a unique identifier for a specific shipping method offered by a carrier, such as FedEx.
   - Delivery Days: The 'Delivery Days' field represents the number of days committed by shipping methods for order delivery.

3. **Mapping between OMS and NetSuite**

   Mapping between HotWax Commerce and NetSuite involves establishing connections and defining data mappings to ensure seamless communication and accurate synchronization of orders, inventory, and other relevant information between the two platforms. This ensures that data transmitted between HotWax Commerce and NetSuite is correctly interpreted and processed, ultimately improving efficiency and accuracy in order fulfillment and inventory management processes.

   - Navigate to `Settings` and select the option `NetSuite` from the menu.
   - Locate the Netsuite Shipping Method section. Click on the `Add` and fill-in the mandatory details mentioned in the input fields.
     - Integration Mapping Key: The mapping ID present in OMS.
     - Integration Mapping Value: Corresponding value present in NetSuite.
     - Description: Briefly describe the method.

   Confirm establishing the new mapping by clicking on `Add`.

