# Manage user permissions and access control with CASL Ability package 

## Overview  

The CASL Ability package is a library designed to handle user permissions and access control. By utilizing CASL Ability, HotWax Commerce manages user permissions and access control within HotWax Commerce apps.  

## Use Cases 

### Case 1: Turn off facility fulfilment in the Fulfillment app  
In certain situations such as labor strikes or electricity outages, it may be necessary to temporarily disable facility fulfillment in the Fulfillment app. To address this, the Fulfillment app allows store managers, to turn off fulfillment. The CASL Ability package ensures that only store managers have access to this configuration.  

### Case 2: Configure re-route fulfilment apps permission from the BOPIS app  
The Reroute Fulfillment app provides customers with the flexibility to select alternate pickup stores or request delivery if a specific store is unable to fulfill their order. To facilitate this, the Fulfillment admin has the authority to configure various options for customers from the BOPIS app, including the ability to edit the delivery method, address, pick-up location, cancel orders, and choose the shipment method. By utilizing the CASL Ability package, access to these configurations is restricted solely to Fulfillment admins. 

### Case 3: Show on hand inventory in the Inventory count app
To facilitate users during the periodic cycle count, the Inventory Count app provides a feature called "Quantity on Hand" settings. This feature allows users to view the current quantity on hand (QOH) from HotWax OMS directly on the product detail page. To enable or disable this feature, the Fulfillment admin has the authority to toggle the configuration. By utilizing the CASL Ability package, access to this configuration is restricted solely to Fulfillment admins. 

### Usage

To use the CASL Ability package, refer to the [the official documentation](https://www.npmjs.com/package/@casl/ability) for detailed instructions and customization options. Make sure to check the compatibility of the package version with your application before integration.
