---
description: >-
  In HotWax Commerce, a Product Store serves as a representation of a company or
  brand, particularly useful for retailers managing multiple brands.
---

# Configure Product Store

## Configuration Steps:

1. **Log in to OMS:**
   * Access the OMS platform via [https://{instanceName}.hotwax.io/](https://{instancename}.hotwax.io/).
2. **Navigate to Store Settings:**
   * Open the Hamburger Menu
   * Go to Settings
   * Select Store
   * Choose the Demo store, as it is the default store configured by OMS and can be modified as needed.
3. **Adjust Configurations:**
   * Modify the configurations according to your requirements.

***

### Configurations are as follows:

#### Edits as needed

| Field                     | Description                                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product Store Name**    | This is the name of the company. If the company has multiple brands, this should be the name of one brand. Make sure to update this before proceeding.                                                        |
| **Currency**              | Fetch it from the organization’s Google form. Generally, it is USD.                                                                                                                                           |
| **Auto Approve Order**    | By default, its value is N. Based on the business rules whether auto-approval of orders needs to be enabled or disabled, its value can be set from the dropdown as Y or N.                                    |
| **Auto Cancel Days**      | The default value is 0, indicating no auto-cancel days should be applied. If needed, enter the total number of days after which an order should be auto-canceled if it remains unallocated.                   |
| **Sales Order ID Prefix** | This should be checked with the retailer if they have a preference. Adding a prefix to the internal ID helps visually separate purchase orders and sales orders.                                              |
| **Allow Split**           | By default, allow split is set to Y. If we need not allow the order split, its value can be set from the dropdown as Y or N. Based on this, the orders will be split, and multiple shipments will be created. |
| **Product Identifier**    | This setting changes which identification of a product to use as its primary internal name in HotWax Commerce.                                                                                                |
| **External ID**           | The ID of the store in the external system, generally a subsidiary in ERPs.                                                                                                                                   |

#### Do not edit these fields

| Field                   | Description                                                                                                                                                                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reserve Inventory**   | OMS serves as the definitive source for inventory information, and as such, this setting should consistently remain at its default value of `Y` without alteration.                                                                                             |
| **Enable Brokering**    | Disabling brokering hinders OMS from optimizing inventory allocation for orders, defeating its intended purpose. Therefore, this setting should always be maintained at its default value of `Y` and should not be modified.                                    |
| **Explode Order Items** | This setting changes if multi-quantity order items are exploded into single-quantity items. The default value for this setting is "Y" indicating that it is enabled, it should not be changed to "N", as many flows of the OMS are not tested for this setting. |
| **External ID**         | Most retailers will never need this. Adding it will not break any flows but since it is not part of the required data setup, it's recommended to leave it blank.                                                                                                |

***

### Add additional configurations

Apart from these default configurations, retailers can add new configurations specific to their product store by clicking `Add` in the store settings section. Here are the available store settings that retailers can add:

| Setting Code            | Setting Name                        | Value                                               | Description                                                                                                                                                           |
| ----------------------- | ----------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOPIS\_PART\_ODR\_REJ   | BOPIS Partial Order Rejection       | Y                                                   | Indicates whether store associates can partially reject "buy online, pick up in-store" (BOPIS) orders.                                                                |
| CUST\_ALLOW\_CNCL       | Customer Order Cancellation         | Y                                                   | Determines if customers can cancel orders on Shopify.                                                                                                                 |
| FULFILL\_NOTIF          | Fulfillment Notification            | Y                                                   | Enables the updating of tracking information on Shopify.                                                                                                              |
| PRDT\_IDEN\_PREF        | Product Identifier Preference       | {"primaryId": "SKU", "secondaryId": "internalName"} | Defines the preferred primary identifier used across the system.                                                                                                      |
| CUST\_DLVRADR\_UPDATE   | Customer Delivery Address Update    | Y                                                   | Allows updating the delivery address of customers.                                                                                                                    |
| CUST\_DLVRMTHD\_UPDATE  | Customer Delivery Method Update     | Y                                                   | Allows updating the delivery method chosen by customers.                                                                                                              |
| CUST\_PCKUP\_UPDATE     | Customer Pickup Address Update      | Y                                                   | Allows changing the pickup address for customers.                                                                                                                     |
| HOLD\_PRORD\_PHYCL\_INV | Hold Pre-ordered Physical Inventory | Y                                                   | If a pre-order queue exists, physical inventory will be considered as 0. The default value is true.                                                                   |
| INV\_CNT\_VIEW\_QOH     | Inventory Count View QOH            | Y                                                   | Enables users to see current Quantity On Hand (QOH) from HotWax OMS on the product detail page of the Inventory Count app, aiding users during periodic cycle counts. |
| ORD\_ITM\_PICKUP\_FAC   | Order Item Pickup Facility          | \_pickupstore                                       | Orders imported with this tag will have their line items checked for pre-selected facilities to pick up orders from.                                                  |
| PRE\_SLCTD\_FAC\_TAG    | Preselected Facility Tag            | HC\_PRE\_SELECTED\_FAC                              | Orders imported with this tag will have their line items checked for pre-selected facilities to fulfill them from.                                                    |
| RATE\_SHOPPING          | Rate Shopping Configuration         | Y                                                   | Configures rate shopping.                                                                                                                                             |
| RETURN\_DEADLINE\_DAYS  | Return Deadline Days                | 30                                                  | Sets the deadline allowed for customer returns.                                                                                                                       |
| SAVE\_BILL\_TO\_INF     | Save Billing Information            | Y                                                   | Saves customers' bill to information on orders from Shopify in HotWax.                                                                                                |
| RTN\_RSTCK\_FAC         | Return Restock Facility             | WH                                                  | Specifies the default location to restock return items.                                                                                                               |
| RF\_SHIPPING\_METHOD    | Rerouted Shipping Method            | SECOND\_DAY                                         | Sets the default shipping method for rerouted orders.                                                                                                                 |
| BRK\_SHPMNT\_THRESHOLD  | Brokering Shipment Threshold        | 50                                                  | Orders will split into separate shipgroups only if the total order item value exceeds this threshold.                                                                 |

{% embed url="https://youtu.be/X06G-GYjt-I" %}

