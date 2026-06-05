# Table of contents

* [Introduction](README.md)

## Components

* [Available to Promise](components/available-to-promise/README.md)
  * ```yaml
    props:
      models: true
    type: builtin:openapi
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: available-to-promise
    ```
* [Fulfillment](components/fulfillment/README.md)
  * ```yaml
    props:
      models: true
    type: builtin:openapi
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: fulfillment
    ```
* [Inventory Count](components/inventory-count/README.md)
  * ```yaml
    props:
      models: true
    type: builtin:openapi
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: inventory-count
    ```
* [Order Routing](components/order-routing/README.md)
  * ```yaml
    props:
      models: true
    type: builtin:openapi
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: order-routing
    ```
* [Legacy OMS](components/legacy-oms/README.md)
  * ```yaml
    props:
      models: true
    type: builtin:openapi
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: legacy-oms
    ```

## HotWax Commerce API and Data feeds

* [Authentication](hotwax-commerce-api-and-data-feeds/initial-api-authentication.md)
* [Orders](hotwax-commerce-api-and-data-feeds/orders/README.md)
  * [Find Order](hotwax-commerce-api-and-data-feeds/orders/find-orders.md)
  * [Retrieve Orders](hotwax-commerce-api-and-data-feeds/orders/retrieve-order.md)
  * [Get Orders](hotwax-commerce-api-and-data-feeds/orders/get-orders.md)
  * [Created Orders](hotwax-commerce-api-and-data-feeds/orders/created-orders-feed.md)
  * [Order Adjustments](hotwax-commerce-api-and-data-feeds/orders/order-adjustments.md)
  * [Order Reconciliations](hotwax-commerce-api-and-data-feeds/orders/order-reconciliations.md)
* [Inventory](hotwax-commerce-api-and-data-feeds/inventory/README.md)
  * [Check Inventory](hotwax-commerce-api-and-data-feeds/inventory/check-inventory.md)
  * [BOPIS Check Inventory](hotwax-commerce-api-and-data-feeds/inventory/bopis-check-inventory.md)
  * [Shipping Check Inventory](hotwax-commerce-api-and-data-feeds/inventory/shipping-check-inventory.md)
  * [Reset Inventory](hotwax-commerce-api-and-data-feeds/inventory/reset-inventory.md)
  * [Update Inventory](hotwax-commerce-api-and-data-feeds/inventory/update-inventory.md)
  * [Get Online ATP of Products](hotwax-commerce-api-and-data-feeds/inventory/get-online-atp.md)
* [Brokering](hotwax-commerce-api-and-data-feeds/brokering/README.md)
  * [Brokered Order Items Feed](hotwax-commerce-api-and-data-feeds/brokering/brokered-order-items.md)
* [Inbound Shipment](hotwax-commerce-api-and-data-feeds/inbound-shipment/README.md)
  * [Import](hotwax-commerce-api-and-data-feeds/inbound-shipment/import.md)
* [Returns](hotwax-commerce-api-and-data-feeds/returns/README.md)
  * [Create Return](hotwax-commerce-api-and-data-feeds/returns/create-return.md)
  * [Returns Financial Feed](hotwax-commerce-api-and-data-feeds/returns/returns-financial-feed.md)
* [Facility](hotwax-commerce-api-and-data-feeds/facility/README.md)
  * [Post Code Lookup](hotwax-commerce-api-and-data-feeds/facility/postcode-lookup.md)
  * [Store Lookup](hotwax-commerce-api-and-data-feeds/facility/store-lookup.md)
* [Fulfillment](hotwax-commerce-api-and-data-feeds/fulfillment/README.md)
  * [Add Shipment Box](hotwax-commerce-api-and-data-feeds/fulfillment/add-shipment-box.md)
  * [Create Picklist](hotwax-commerce-api-and-data-feeds/fulfillment/create-picklist.md)
  * [In Progress Orders](hotwax-commerce-api-and-data-feeds/fulfillment/in-progress-orders.md)
  * [Outstanding Orders](hotwax-commerce-api-and-data-feeds/fulfillment/outstanding-orders.md)
  * [Packing Slip PDF](hotwax-commerce-api-and-data-feeds/fulfillment/packing-slip-pdf.md)
  * [Ready To Ship Items](hotwax-commerce-api-and-data-feeds/fulfillment/ready-to-ship-items.md)
  * [Reroute fulfillment APIs](hotwax-commerce-api-and-data-feeds/fulfillment/reroute-fulfillment-apis.md)
  * [Retry Shipping Label](hotwax-commerce-api-and-data-feeds/fulfillment/retry-shipping-label.md)
  * [Shipping Label and Packing Slip](hotwax-commerce-api-and-data-feeds/fulfillment/shipping-label-and-packing-slip.md)
  * [Shipping Label PDF](hotwax-commerce-api-and-data-feeds/fulfillment/shipping-label-pdf.md)
  * [Update Orders](hotwax-commerce-api-and-data-feeds/fulfillment/update-orders.md)
  * [Update and Import File](hotwax-commerce-api-and-data-feeds/fulfillment/update-and-import-file.md)
  * [Fulfilled Order Items Feed](hotwax-commerce-api-and-data-feeds/fulfillment/fulfilled-order-items-feed.md)
* [Appeasements](hotwax-commerce-api-and-data-feeds/appeasements/README.md)
  * [Appeasements Feed](hotwax-commerce-api-and-data-feeds/appeasements/appeasements-feed.md)
* [Miscellaneous](hotwax-commerce-api-and-data-feeds/miscellaneous/README.md)
  * [Perform Find](hotwax-commerce-api-and-data-feeds/miscellaneous/perform-find.md)

## Journeys

* [Buy Online Pickup In Store](journeys/buy-online-pickup-in-store/README.md)
  * [BOPIS PDP Experience](journeys/buy-online-pickup-in-store/bopis-pdp-experience.md)
  * [Ready For Pickup Notification](journeys/buy-online-pickup-in-store/ready-for-pickup-email.md)
* [Brokering and Allocation](journeys/brokering-and-allocation/README.md)
  * [Order Soft Allocation](journeys/brokering-and-allocation/soft-allocation.md)
* [Pre-Orders](journeys/pre-orders/README.md)
  * [Promise Date Change Notification](journeys/pre-orders/promise-date-change-notification.md)

## Sample Files

* [Fulfilled Orders Items](sample-files/fulfilled-orders-items-json.md)
* [Reset Inventory](sample-files/reset-inventory-csv.md)
* [Return](sample-files/return-feed-json.md)

## OMS Release Versions

* [OMS Versions](oms-release-versions/oms-release-versions/README.md)
  * [V7.0.0 Release](oms-release-versions/oms-release-versions/v7.0.0.md)
