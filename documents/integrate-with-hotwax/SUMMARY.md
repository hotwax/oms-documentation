# Table of contents

* [Introduction](README.md)

## Components

* [Available to Promise](components/available-to-promise/README.md)
  * ```yaml
    type: builtin:openapi
    props:
      models: true
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: available-to-promise
    ```
* [Fulfillment](components/fulfillment/README.md)
  * ```yaml
    type: builtin:openapi
    props:
      models: true
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: fulfillment
    ```
* [Inventory Count](components/inventory-count/README.md)
  * ```yaml
    type: builtin:openapi
    props:
      models: true
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: inventory-count
    ```
* [Order Routing](components/order-routing/README.md)
  * ```yaml
    type: builtin:openapi
    props:
      models: true
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: order-routing
    ```
* [Legacy OMS](components/legacy-oms/README.md)
  * ```yaml
    type: builtin:openapi
    props:
      models: true
    dependencies:
      spec:
        ref:
          kind: openapi
          spec: legacy-oms
    ```

## HotWax Commerce API and Data feeds

* [Authentication](api/initial-api-authentication.md)
* [Orders](api/orders/README.md)
  * [Find Order](api/orders/find-orders.md)
  * [Retrieve Orders](api/orders/retrieve-order.md)
  * [Get Orders](api/orders/get-orders.md)
  * [Created Orders](api/orders/created-orders-feed.md)
  * [Order Adjustments](api/orders/order-adjustments.md)
  * [Order Reconciliations](api/orders/order-reconciliations.md)
* [Inventory](api/inventory/README.md)
  * [Check Inventory](api/inventory/check-inventory.md)
  * [BOPIS Check Inventory](api/inventory/bopis-check-inventory.md)
  * [Shipping Check Inventory](api/inventory/shipping-check-inventory.md)
  * [Reset Inventory](api/inventory/reset-inventory.md)
  * [Update Inventory](api/inventory/update-inventory.md)
  * [Get Online ATP of Products](api/inventory/get-online-atp.md)
* [Brokering](api/brokering/README.md)
  * [Brokered Order Items Feed](api/brokering/brokered-order-items.md)
* [Inbound Shipment](api/inbound-shipment/README.md)
  * [Import](api/inbound-shipment/import.md)
* [Returns](api/returns/README.md)
  * [Create Return](api/returns/create-return.md)
  * [Returns Financial Feed](api/returns/returns-financial-feed.md)
* [Facility](api/facility/README.md)
  * [Post Code Lookup](api/facility/postcode-lookup.md)
  * [Store Lookup](api/facility/store-lookup.md)
* [Fulfillment](api/fulfillment/README.md)
  * [Add Shipment Box](api/fulfillment/add-shipment-box.md)
  * [Create Picklist](api/fulfillment/create-picklist.md)
  * [In Progress Orders](api/fulfillment/in-progress-orders.md)
  * [Outstanding Orders](api/fulfillment/outstanding-orders.md)
  * [Packing Slip PDF](api/fulfillment/packing-slip-pdf.md)
  * [Ready To Ship Items](api/fulfillment/ready-to-ship-items.md)
  * [Retry Shipping Label](api/fulfillment/retry-shipping-label.md)
  * [Shipping Label and Packing Slip](api/fulfillment/shipping-label-and-packing-slip.md)
  * [Shipping Label PDF](api/fulfillment/shipping-label-pdf.md)
  * [Update Orders](api/fulfillment/update-orders.md)
  * [Update and Import File](api/fulfillment/update-and-import-file.md)
  * [Fulfilled Order Items Feed](api/fulfillment/fulfilled-order-items-feed.md)
* [Appeasements](api/appeasements/README.md)
  * [Appeasements Feed](api/appeasements/appeasements-feed.md)
* [Miscellaneous](api/miscellaneous/README.md)
  * [Perform Find](api/miscellaneous/perform-find.md)

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

* [OMS Versions](oms-release-versions/README.md)
  * [V7.0.0 Release](oms-release-versions/v7.0.0.md)
