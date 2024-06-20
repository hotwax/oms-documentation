---
description: >-
  This document provides a detailed, sequential walkthrough on deploying a fresh
  instance of HotWax Commerce.
---

# How to configure HotWax Commerce when deploying new instance

This document offers a detailed guide for deploying HotWax Commerce tailored to meet the specific requirements of enterprise retailers

## Launch Machine

The HotWax Commerce support team initiates the launch of a machine to deploy a HotWax Commerce instance. This step establishes the foundational infrastructure for hosting and operating HotWax Commerce. The team configures the machine with precision, aligning it with client requirements for production or testing purposes.

## Initial Login

Once the instance is operational, retailers will get a login prompt. Each instance comes with a default user, which is omitted here for security purposes.

During initial login, you'll likely be prompted to reset your password for security purposes. Once you log in ensure that all menus within the Sidebar and EXIM screen have loaded correctly. It is recommended that you create new [users](../../system-admin/administration/users/createUser.md) and disable the default user.

## Add DBIC

`DBIC` (Doing Business in Countries) is a feature essential for tailoring HotWax Commerce to specific countries where the retailer has fulfillment locations. When a retailer utilizes one HotWax Commerce Instance to cater to different countries, it is crucial to include only the countries relevant to the specific instance. Read here to learn how to [add DBIC](../initial-setup/AddDBICs.md) in HotWax Commerce.

## Add Product Store

In HotWax Commerce, the `Product Store` represents a collection of configurations that can be applied to one or multiple Shopify stores. When a retailer deploys HotWax Commerce, the Product Store allows them to specify brand-specific configurations, such as default Inventory Facility, Order Brokering, Pre-Order Auto Releasing, Allow Split, etc. These settings allow retailers to configure HotWax Commerce for their unique business requirements.

When you deploy HotWax Commerce, one default product store is already created, which needs to be [configured](../product-store/README.md) as per requirement. However, if the retailer has multiple brands, each with a unique catalog, a [new product store](../product-store/add-more-product-stores.md) needs to be created for all the brands.

## Load Facility

Facilities are physical locations such as a warehouse, distribution center, or store where inventory is stored, managed, and processed. To establish facilities, it is necessary to create both the facilities and their internal locations within OMS. Typically, upon creating facilities, the associated locations are generated automatically. In cases where they are not generated, manual addition of location data is required. For an efficient bulk creation of facilities and their corresponding locations during the initial setup, it is advisable to utilize the [facilities CSV](../../learn-shopify/shopify-setup/MapLocations.md), or you can [create facilities](../administration/facilities/add-new-facilities.md) with our `Facility management application`.



{% embed url="https://youtu.be/EIilDUEtTM8" %}

## Create Facility Groups

In Hotwax commerce facility groups are used to define the scope and functionality of the facility for omnichannel order management. For instance, including a facility in the Online Facility group indicates that this facility will be available to sell its inventory to online channels. Facilities in the Pickup group will be available for BOPIS and Facilities under the Brokering subtype will be the facilities where orders can be brokered. You can learn how to add facilities and [manage facility groups](../administration/facilities/manage-groups.md) through our detailed document.

## Configure System Property Data

HotWax Commerce has default settings tailored for US retailers, For non-US retailers adjustments are needed to align with their business location. The System Property data encompasses a range of configurations that influence the fundamental settings governing how your instance operates. Ensuring accuracy in these configurations is essential. Read our document on [System Property Data]() to learn how you can configure system property data such as currency, country, and shipment Weight Units.

## Configure SFTP

SFTP (Secure File Transfer Protocol) is used to secure file transfers between HotWax Commerce and another system. Configuring SFTP is crucial for smooth and secure data exchange within your system and HotWax Commerce. Read our documentation to learn how you can [configure SFTP](https://docs.hotwax.co/deployment-and-configurations/initial-setup/setupsftpconfigurations) for seamless data transfer.

## Add Solr Indexes

Solr, an open-source enterprise search platform, provides powerful search capabilities, making it indispensable for efficient data management. Configuring Solr indexing in HotWax Commerce is vital for enhancing data retrieval and search operations within the platform. You can [add data to the Solr Index](https://docs.hotwax.co/deployment-and-configurations/initial-setup/search-admin) through the steps given in the document.

## Add Shipping Gateways

HotWax Commerce's Store Fulfillment App empowers retailers to efficiently manage online order fulfillment from their stores. By integrating with multiple Third-Party Logistics companies, known as Carriers, HotWax Commerce enables the generation of shipping labels based on store and customer addresses, as well as package weight and dimensions. Each Carrier offers a Shipping Gateway software system, facilitating the request for shipment quotations and labels during the fulfillment process. [Read our document](https://docs.hotwax.co/deployment-and-configurations/user-and-gateway-configuration/shippinggateways) to learn how to set up shipping carriers, shipping methods, and integration with the shipment gateway, ensuring a streamlined and cost-effective order fulfillment process. Users are also required to add [shipping boxes](broken-reference) to ensure precise shipping cost calculation and accurate label generation.

{% embed url="https://youtu.be/hYXo7992SWQ" %}

{% embed url="https://youtu.be/B_-s6FOtlok" %}

## Install the HotWax commerce App

The HotWax Commerce integration app on Shopify facilitates the connection between Shopify stores and HotWax Commerce's Omnichannel Order Management System (OMS). This integration enhances operational efficiency and enables consistent customer experiences across multiple channels. Read our user manual to learn how to [install the HotWax Commerce App](https://docs.hotwax.co/deployment-and-configurations/v/shopify/setup-shopify-integration/shopifyintegration) for your Shopify Store.

## Configure Mappings between HotWax Commerce and Shopify

The HotWax Commerce integration layer maintains a structured repository of integration mappings between Shopify and HotWax Commerce, covering locations, payment methods, shipping methods, product types, and price levels. Some default mapping data needs to be included when connecting a Shopify store to ensure that data flows smoothly between both systems with correct mappings. If you're only using the default Shopify Shop ID, this data can be [imported directly](../../learn-shopify/shopify-setup/SetupMappings.md).

However, retailers can have multiple Shopify Shops based on their business scope. Therefore, it is imperative to map the integrations available in HotWax Commerce with different Shopify shops according to business requirements. Users need to periodically amend mappings to ensure alignment with the current operational landscape. Due to these semi-frequent adjustments, users require access to update these mappings themselves. Read our document to learn how to [manage integration mappings](../../learn-shopify/shopify-setup/SetupMappings.md) between HotWax Commerce and Shopify Shop directly from the UI without relying on external support.

## Sync Products

HotWax Commerce requires accurate product data to track inventory changes and ensure near real-time inventory counts on Shopify. It also facilitates order downloads and expedites the fulfillment process. Here’s how you can [import all the products](../../learn-shopify/integration/how-are-products-downloaded-from-shopify-to-hotwax-commerce/product-download.md) created in Shopify to HotWax Commerce.

## Sync Orders

HotWax Commerce ensures that order information is always updated to streamline the process of fulfilling orders. To integrate HotWax Commerce with Shopify, retailers are required to import all open sales orders from a particular time frame that HotWax Commerce must fulfill. Discover how to initiate the [initial order sync](../../learn-shopify/) process between HotWax Commerce and Shopify to seamlessly import open and unfulfilled orders. Orders are initially synced in HotWax Commerce in the `created` state but they are not sent for fulfillment until approved. So make sure [orders are approved](../../learn-shopify/integration/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-approval-for-fulfillment.md) as per the retailers’ requirements.

## Import Inventory

HotWax Commerce provides a unified view of inventory by seamlessly connecting with various technology systems used by retailers, including Enterprise Resource Planning (ERP), Point of Sale (POS), and Warehouse Management Systems (WMS). HotWax Commerce ensures that inventory updates from all these systems are synchronized to support various business scenarios. HotWax Commerce offers out-of-the-box integrations with systems such as [NetSuite](../../learn-netsuite/netsuite-integration/README.md) and [RetailPro](../retailpro/README.md) to sync inventory. Retailers can also [import inventory manually](../../retail-operations/inventory-management/inventory-upload.md) through a CSV file or contact the HotWax Commerce support team for possible integration with the systems in their tech stack.



{% embed url="https://www.loom.com/share/6a59fbfd1f0c45d3ac0abb52ee66a036?sid=0e45f285-0076-4548-b806-3d834d8ddbe8" %}

## Sync Inventory to Shopify

HotWax Commerce determines the "Available to Promise (ATP)" or the amount of inventory that can be sold and then sends it to Shopify. This makes HotWax Commerce the ultimate authority on inventory availability. Here’s how you can [upload inventory](https://docs.hotwax.co/deployment-and-configurations/v/shopify/flows/upload-inventory) from HotWax Commerce to Shopify.&#x20;

## Start Brokering Runs

Order routing allows the OMS to determine the best location to fulfill an order according to a set of criteria. The criteria are with respect to selecting which order (part of order) to broker and the criteria to find inventory. Merchants use configurable routing to create order fulfillment strategies best suited for their business. User configurable routing rules allow merchants to optimize fulfillment cost, inventory, and workload based on arbitrary order and fulfillment location parameters such as order total, SKUs, product category, facility type, operating hours, or fulfillment capacity. Read our comprehensive document to learn how to [schedule brokering runs](../../retail-operations/brokering/configurableRouting.md) for order routing.

## Create Users for Fulfillment

HotWax Commerce's Users application allows businesses to create and manage users within the HotWax Commerce Order Management System (OMS). By establishing user profiles, organizations can grant access to critical operations involving managing orders and fulfillment. Here’s how you can [create users](../administration/users/createUser.md) with store associate and [picker](../fulfillment/add-picker.md) roles to manage order fulfillment.



{% embed url="https://youtu.be/6BW4Hxi08N0" %}

## Checklist

* **Launch Machine**
* **Initial Login**

<!---->

* [ ] Log in to the instance.
* [ ] Reset the default password.
* [ ] Check Sidebar and EXIM screen for correct loading.

<!---->

* **Add DBIC**

<!---->

* [ ] Configure DBIC for specific countries relevant to the instance.

<!---->

* **Add Product Store**

<!---->

* [ ] Configure default product store as per requirement.
* [ ] Create new product stores for multiple brands if needed.

<!---->

* **Load Facility**

<!---->

* [ ] Utilize facilities CSV or Facility management application for efficient bulk creation.

<!---->

* **Create Facility Groups**

<!---->

* [ ] Define facility groups for omnichannel order management.
* [ ] Assign facilities to appropriate groups based on functionality.

<!---->

* **Configure System Property Data**

<!---->

* [ ] Adjust system property data for non-US retailers.
* [ ] Configure settings such as currency, country, and shipment weight units.

<!---->

* **Configure SFTP**

<!---->

* [ ] Set up SFTP for secure data transfer within the system.

<!---->

* **Add Solr Indexes**

<!---->

* [ ] Configure Solr indexing for efficient data retrieval and search operations.

<!---->

* **Add Shipping Gateways**

<!---->

* [ ] Configure shipping gateways for seamless integration with third-party logistics companies.
* [ ] Add shipping boxes for accurate shipping cost calculation and label generation.
* [ ] Install HotWax Commerce integration app on Shopify store

<!---->

* **Configure Mappings between HotWax Commerce and Shopify**

<!---->

* [ ] Manage integration mappings between HotWax Commerce and Shopify Shop.
* [ ] Ensure correct mappings for locations, payment methods, shipping methods, product types, and price levels.

<!---->

* **Sync Products**

<!---->

* [ ] Import products created in Shopify to HotWax Commerce.

<!---->

* **Sync Orders**

<!---->

* [ ] Initiate initial order sync process between HotWax Commerce and Shopify.

<!---->

* **Import Inventory**

<!---->

* [ ] Sync inventory from various technology systems or manually import through CSV.

<!---->

* **Sync Inventory to Shopify**

<!---->

* [ ] Upload inventory from HotWax Commerce to Shopify.

<!---->

* **Schedule Brokering**&#x20;

<!---->

* [ ] Schedule brokering runs for order routing.

<!---->

* **Create users for Fulfillment**

<!---->

* [ ] Set up user accounts for fulfillment operations.
* [ ] Create Pickers for picking order items
