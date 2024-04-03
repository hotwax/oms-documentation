---
description: >-
 Learn how to map the Shipping method in OMS to sync with Netsuite? 
---

### How to Map Shipping Method in OMS to Sync with Netsuite

To ensure seamless communication of shipping information across all systems, it's crucial to map shipping methods in OMS with those in Shopify and Netsuite. Follow these three steps to ensure the sync works as expected:

- Creating a Shipment Method in OMS.
- Associating Shipment Method to Product Store and Carrier.
- Mapping between OMS and NetSuite.


A. **Creating a Shipment Method in OMS**

Establishing the corresponding shipping methods in OMS is essential to provide OMS with the necessary options for handling shipping. These methods can then be effectively mapped with the shipping methods associated with incoming orders, ensuring seamless processing and fulfillment.

1. Log in to your user instance and navigate to `Settings` > `General Settings`.
2. Locate the shipment method section and click on `Add`, which will open up a form. Fill in the required fields:
     
     | Field Name             | Field Description                                    | Example Value   |
     |------------------------|------------------------------------------------------|-----------------|
     | Shipment Method Type ID| Identifier for the shipping method within OMS.       | EXPEDITED       |
     | Description            | Shipping method name.                                | Express Shipping|

3. After entering the necessary details, click on `Add` to save the shipping method in OMS.

B. **Associating Shipment Method to Product Store and Carrier**

By associating each shipping method with the corresponding product store and carrier, OMS gains precise information about which brands and carriers are related to specific shipping methods. For example, this linkage allows OMS to recognize that "Standard Shipping" is associated with the "product store X" and "Carrier Y." Consequently, when an order with "Standard Shipping" is received for "product store X," OMS knows to apply the appropriate shipping rules and rates specific to that brand and carrier combination. This level of detail ensures accurate shipping calculations and streamlined order processing tailored to each brand's requirements.

1. To configure the shipping options for your store, navigate to `Settings` > `Stores` and locate the Product Store Shipping Method section, you can add specific shipping methods by clicking the `Configure Shipping Method` button.
   
| Field Name                 | Field Description                                                | Example Value                  |
|----------------------------|------------------------------------------------------------------|--------------------------------|
| Product Store*             | Store selection for adding the shipping method.                  | Not Naked                      |
| Tracking Required*         | Indicates whether tracking is required for the shipping method.  | Y/N                            |
| Shipment Gateway Config Id | Identifier associated with the Product Store and Shipping Method.| UPS config                     |
| Shipment Method Type*      | Selection of the shipping method.                                | Standard                       |
| Carrier Service Code       | Unique identifier for a specific shipping method by a carrier.   | FEDEX_STANDARD_SHIPPING        |
| Delivery Days              | Number of days committed by shipping methods for order delivery. | 3                              |

 **Note:** Fields marked with asterisks are required field.

C. **Mapping between OMS and NetSuite**

   Mapping between HotWax Commerce and NetSuite involves establishing connections and defining data mappings to ensure seamless communication and accurate synchronization of orders, inventory, and other relevant information between the two platforms. This ensures that data transmitted between HotWax Commerce and NetSuite is correctly interpreted and processed, ultimately improving efficiency and accuracy in order fulfillment and inventory management processes.

1. Navigate to `Settings` and select the option `NetSuite` from the menu.
2. Locate the Netsuite Shipping Method section. Click on the `Add` and fill-in the mandatory details mentioned in the input fields.

   | Field                      | Description                                    | Example Value                       |
   |----------------------------|------------------------------------------------|-------------------------------------|
   | Integration Mapping Key*   | The mapping ID present in OMS.                 | STANDARD                            |
   | Integration Mapping Value* | Corresponding value present in NetSuite.       | STANDARD_UPS                        |  
   | Description*               | Briefly describe the method.                   | NetSuite shipping method standard   |

**Note:** Fields marked with asterisks are required field.

   Confirm establishing the new mapping by clicking on `Add`.

