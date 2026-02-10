# Repository Context Cache

<!-- REPO_SUMMARIES_START -->

## hotwax/receiving

### Description
HotWax Commerce receiving app.  It's a front-end application built with Ionic for managing the receiving process.

### Relations
Likely interacts with backend services for order and inventory management.  Uses Ionic framework.


## hotwax/bopis

### Description
HotWax BOPIS (Buy Online, Pick Up In Store) application. A store-ops UI for managing buy-online-pickup-in-store and ship-to-store fulfillment.

### Relations
Connects to an OMS (Order Management System) backend.  Part of a larger fulfillment ecosystem.

## hotwax/fulfillment

### Description
HotWax Fulfillment PWA for store and warehouse teams to execute order fulfillment workflows (picking, packing, shipping, transfer orders).

### Relations
Connects to HotWax Commerce services.  Part of a larger fulfillment ecosystem, likely related to BOPIS and other order processing apps.

## hotwax/inventory-count

### Description
HotWax Inventory/Cycle Count mobile + web application for physical counts, offline data capture, and synchronization with the OMS.

### Relations
Integrates with HotWax OMS for inventory accuracy.  Part of the overall inventory management system.

## hotwax/transfers

### Description
Transfers App.  Used for managing inventory transfers, likely between stores or warehouses.

### Relations
Uses Ionic framework. Likely interacts with inventory and fulfillment systems.

## hotwax/facilities

### Description
Facilities application.  The README is empty, so the purpose is unclear.

### Relations
Unknown.  May relate to store or warehouse management.

## hotwax/preorder

### Description
Preorder application. Uses Ionic framework.

### Relations
Uses Ionic framework.  The release page points to 'pickingapp', suggesting a relationship with that repository.

## hotwax/hotwax-maarg-util

### Description
Utility library for linking OFBiz and Moqui instances.

### Relations
Specifically designed to work with OFBiz and Moqui, suggesting these are core technologies in the HotWax ecosystem.

## hotwax/mantle-shopify-connector

### Description
Moqui runtime component integrating with Shopify admin APIs for OMS workflows.

### Relations
Integrates with Shopify. Uses Moqui framework.

## hotwax/oms

### Description
Order Management System.

### Relations
Central component, likely integrated with BOPIS, Fulfillment, Inventory Count, and other apps.

## hotwax/dxp-components

### Description
DXP Components for Vue applications. A component library for Vue-based frontends.

### Relations
Provides reusable UI components for other HotWax applications.

## hotwax/hotwax-shopify-oms-bridge

### Description
Bridge between Shopify and the HotWax OMS.

### Relations
Connects Shopify to the core OMS system.

## hotwax/hotwax-oms

### Description
Order Management System (Apache OFBiz based).

### Relations
Core OMS component, likely the backend for many other applications. Based on Apache OFBiz.

## hotwax/hotwax-poorti

### Description
Poorti application. The README is minimal, but it appears to be a GitLab project.

### Relations
Unknown.  May be a supporting application or tool.

## hotwax/job-manager

### Description
HotWax Commerce Job Manager App. Uses Ionic framework.

### Relations
Uses Ionic framework. Likely manages background tasks or processes within the HotWax ecosystem.

## hotwax/hotwax-ofbiz-oms-usl

### Description
Apache OFBiz data model as per Moqui entity definition.  Focuses on data integration with OFBiz.

### Relations
Integrates with OFBiz and Moqui.  Provides data mappings and configurations.

## hotwax/mantle-netsuite-connector

### Description
NetSuite Connector in Moqui.

### Relations
Integrates with NetSuite. Uses Moqui framework.

## hotwax/hotwax-unigate

### Description
Unigate application. The README is empty, so the purpose is unclear.

### Relations
Unknown.

## hotwax/OrderRouting

### Description
Order Routing application. Manages the flow of customer orders from sale to fulfillment.

### Relations
Likely integrates with OMS, Fulfillment, and potentially Shipping applications.
<!-- REPO_SUMMARIES_END -->
