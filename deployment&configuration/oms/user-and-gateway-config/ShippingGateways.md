# Shipping gateways

### Introduction

The HotWax Commerce Store Fulfillment App empowers retailers to efficiently fulfill online orders from their stores. HotWax Commerce seamlessly integrates with multiple Third-Party Logistics companies, commonly known as Carriers, to generate shipping labels based on store and customer addresses, as well as the weight and dimensions of shipment packages. Each Carrier provides a Shipping Gateway software system, enabling HotWax Commerce to request shipment quotations and labels during the fulfillment process.

To enable the integration with Carriers, retailers must set up their preferred carriers, define shipping methods, and configure the necessary settings for the shipment gateway. This document outlines a four-step process that guides you through the setup of carriers, shipping methods, and the integration with the shipment gateway, ensuring a streamlined and cost-effective fulfillment process for online orders.

### Load Carrier Data

1. Navigate to the `Settings` > `General`page in the hamburger menu of HotWax Commerce.
2. Locate and click on the option related to your carrier in the header. For instance, click on `Load Fedex Data` button to designate Fedex as your carrier.
3. After loading the data, a new menu option specific to the chosen carrier will be added to the hamburger menu. For example, if you load Fedex data, you will find a new page in `Settings` > `Fedex Carrier Setup.`

{% embed url="https://youtu.be/CY07Y2ggZOU" %}
Video: Load carrier data
{% endembed %}

### Add Shipment Gateway Configurations

After loading Carrier data into HotWax Commerce, the next critical step is to establish communication with shipping gateways. In this section, we'll explore the essential parameters needed to enable integration with FedEx and the same steps can be applied to other carriers.

To configure `Shipment Gateways` settings, users need to navigate to the `FedEx Carrier Setup` page. For adding new gateways, users should click the `Add` button under the `Shipment Gateway Configuration` section. This will open up`Shipment Gateway Configuration Form`, which comprises multiple fields. Not all of these fields are mandatory for configuration.

Below given fields are important and needs to be configured to enable the integration:

{% hint style="info" %}
Connect URL, Access Account Nbr, Access Meter Number, Access User Key, Access User Pwd are mandatory fields and shared by Fedex
{% endhint %}

* **Shipment Gateway Config Id** - Shipment Gateway Config Id is a unique identifier for each configuration. Choose your own unique ID and name it in a way that is easily recognizable later in the configuration process
* **Connect Url** - This is the endpoint or URL where HotWax Commerce will connect to the Shipping Gateway for getting shipping quotations and labels. It serves as the gateway for sending requests and receiving responses.
* **Connect Timeout** -Connect Timeout is the maximum time limit for establishing a connection with the Shipping Gateway. If the Shipping Gateway is unresponsive, HotWax Commerce will attempt to establish a connection, with the default timeout set to 60 seconds. You have the flexibility to set this value according to your specific needs. However, it's crucial to avoid excessively long timeouts, as they could potentially make HotWax Commerce busy or unresponsive during an extended connection process.
* **Access Account Nbr** - This is a unique identifier associated with FedEx. It is used to authenticate and link HotWax Commerce to your specific FedEx account, ensuring that the shipping requests are associated with the correct account.
* **Access Meter Number** - This is another identifier that helps FedEx track and manage the usage of their web services. It is specific to your FedEx account and is used for billing purposes.
* **Access User Key** - Access User Key, also known as the 'access key,' is a security credential that authenticates HotWax Commerce when making requests to the FedEx server. It ensures that only authorized systems can interact with FedEx's services.
* **Access User Pwd** - This is the password associated with the access key. Together with the access key, it provides a secure means of authentication, preventing unauthorized access to your FedEx account.
* **Label Image Type** - Label Image Type is a mandatory field that determines the format or type of the shipping label image generated and returned by FedEx. Choosing the correct type, such as PDF or PNG.

After completing all field entries, you can save the shipment gateway configurations by clicking the `Add` button within the form. If a user has entered any incorrect information in any field they can delete the configuration by clicking on the `Delete` icon in the last column and add a new shipping gateway configuration with the correct information. We will be soon releasing the edit feature to modify the configurations.

<figure><img src="../.gitbook/assets/demo-oms.hotwax.io_commerce_control_CarrierSetup_partyId=FEDEX.png" alt=""><figcaption><p>Image: Add Shipment Gateway Configuration</p></figcaption></figure>

### Add Shipment Methods

Configuring the shipping options for your store is a pivotal step. Within the `Product Store Shipping Method` section, you can easily add specific shipping methods by clicking the `Configure Shipping Method` button. This action prompts a new form to appear on the screen, where configuration details must be entered. Upon clicking the `Add` button in the form, the new configurations will be established.

During the fulfillment process, as packers prepare packages and request shipping labels, the HotWax Commerce Fulfillment App retrieves quotations for all configured shipping methods based on configurations done in this section. These configurations help HotWax Commerce Store Fulfillment App intelligently select the least expensive shipping method, optimizing costs and ensuring timely delivery.

* **Product Store** - Choose the Store for which you want to add the shipping method.
* **Tracking Required** - This configuration provides flexibility in managing your fulfillment process based on specific tracking requirements and business rules. Set the value to 'Y' (Yes) to enforce a rule that fulfillment teams cannot complete the shipment without a tracking code. Alternatively, set the value to 'N' (No) to allow fulfillment teams to proceed even when the Carrier does not return a tracking code.
* **Shipment Gateway Config Id** - Choose the 'Shipment Gateway Config Id' that you recently created to associate it with the Product Store and Shipping Method. This identifier helps in specifying which shipping gateway to connect with when requesting shipping labels for the packages.
* **Shipment Method Type** - Choose the Shipping Method that you want to add.
* **Carrier Service Code** - "The 'Carrier Service Code' serves as a unique identifier for a specific shipping method offered by a carrier, such as FedEx. Shipping Gateways utilize this distinctive code to identify and distinguish various shipping methods. When you enter this code in the designated field, you are essentially mapping the shipping methods from HotWax Commerce to the corresponding services provided by the Shipping Gateway.

&#x20;      In essence, the 'Carrier Service Code' facilitates seamless communication between HotWax Commerce and the Shipping Gateway, ensuring accurate alignment of shipping methods for streamlined order fulfillment. Here are quick links to USPS and FEDEX service code for reference: [FedEx](https://www.google.com/url?sa=j&url=https%3A%2F%2Fdeveloper.fedex.com%2Fapi%2Fen-us%2Fguides%2Fapi-reference.html%23servicetypes&uct=1689741491&usg=scWBo6V4MkfoIZm4C8msbxS0lxQ.&opi=73833047&source=chat) and [UPS](https://www.ups.com/worldshiphelp/WSA/ENG/AppHelp/mergedProjects/CORE/Codes/UPS_Service_Codes.htm)

* **Delivery Days** - The 'Delivery Days' field represents the number of days committed by shipping methods for order delivery. This information is crucial for the HotWax Commerce Store Fulfillment App, particularly during the rate shopping process before obtaining shipping labels. The 'Delivery Days' field guides the app in shortlisting shipping methods eligible for rate shopping based on the specified delivery timeframe.

{% embed url="https://youtu.be/hYXo7992SWQ" %}
Add Shipping Method
{% endembed %}

If you wish to modify any settings within your shipment methods for a product store, you can do so by clicking either the `Edit` or `Delete` icons associated with the shipping method from the last column.

{% embed url="https://youtu.be/ez04EuWET1o" %}
Modify Shipping Method
{% endembed %}

### Add Shipment Box

Carriers offer a range of predefined boxes designed for shipping products of various sizes and weights. Retailers opting for predefined boxes enjoy the advantage of sending only the box type, eliminating the need to specify package dimensions when requesting shipping quotations and labels. To streamline your packing process, follow these steps:

1. Navigate to the `Carrier Shipment Box` section.
2. Click on the `Add` button to open up a new pop-up form. Users can add preferred boxes individually in the form. These will be the boxes available for selection by packers at the time of packing.
3. For each box, choose the Shipment box and Packaging code shared by Shipping Gateways. The Packaging code is crucial for the identification of various packaging boxes by Shipping Gateways.
4. Save the carrier shipment box by clicking on the `Add` button in the form.

{% embed url="https://youtu.be/xH577mujilk" %}
Video: Add Shipment Box
{% endembed %}

By performing these steps, you essentially map the Packaging box from HotWax Commerce to the corresponding packaging boxes recognized by the Shipping Gateway. These setup ensure that your packing process is efficient, and packers only see the relevant box types that you have added. Click on the `Delete` icon in the last column if you wish to remove any carrier box from view for packers.

{% embed url="https://youtu.be/9XefekAuxr8" %}
Video: Remove Shipment Box
{% endembed %}
