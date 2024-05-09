# Shipsi 

This document outlines the integrated workflow between Shipsi, a hyperlocal delivery solution, Shopify, an e-commerce platform, and our upcoming Order Management System (OMS). The focus is on the streamlined purchase-to-fulfillment journey for customers selecting Shipsi's same-day delivery option directly from Shopify stores.

## Shipsi Configuration

* **Shipsi Rules:** Delivery parameters will continue to be defined within the dedicated Shipsi app on Shopify.
* **Store Setup:** Store operating hours and communication preferences will remain configurable through the Shipsi app.

## Order Process

1. **Customer Selection:** During checkout on Shopify, customers choose Shipsi as their preferred delivery method.
2. **Store Notification:** Upon order confirmation, an automated notification (email or text) is sent to the store team, prompting them to prepare the order for pickup by a designated Shipsi driver.
3. **Fulfillment:** When the driver collects the order, it is marked as fulfilled within the Shopify Point-of-Sale (POS) system.
4. **Inventory Synchronization:**  Shipsi maintains real-time inventory levels by directly accessing data from Shopify.

## Current Fulfillment Process

1. **Fulfillment Location:**  Shipsi identifies the designated fulfillment location based on pre-configured settings.
2. **Email Notification:**  An email containing the order details is sent to the relevant store for fulfillment purposes.
3. **Celigo Integration:**  Stores are mapped to unique location identifiers within Celigo, a data integration platform.
4. **Shopify Order Data:**  The Shopify Order JSON file includes the associated Shipsi location ID under the "shipping_lines" field.  **(A sample JSON structure will be added)**
5. **Fulfillment Update:**  Once the driver completes delivery, Shipsi marks the order as fulfilled, and this update is reflected within Shopify.

## Proposed OMS Fulfillment Process

1. **OMS Fulfillment App:** Orders placed with the Shipsi delivery option are automatically displayed within the designated fulfillment application of the OMS.
2. **Store Fulfillment:**  Store associates utilize the OMS fulfillment app to mark orders as picked, packed, and shipped.
3. **Fulfillment Posting:**  The OMS records the order as fulfilled and transmits the pertinent data to NetSuite, the enterprise resource planning (ERP) system.
4. **Shopify Fulfillment:**  Shipsi maintains its role of marking orders as fulfilled within Shopify.

## Exclusions

* **Bespoke Edition Products:**  Products designated as "Bespoke Edition" will remain ineligible for fulfillment through Shipsi.

## Conclusion

This integrated approach between Shipsi, Shopify, and the upcoming OMS aims to streamline the purchase-to-fulfillment journey for customers selecting Shipsi's same-day delivery option. By leveraging automation and real-time data exchange, this collaboration enhances efficiency and customer satisfaction.
