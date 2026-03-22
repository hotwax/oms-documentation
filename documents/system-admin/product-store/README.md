---
description: >-
  In HotWax Commerce, a Product Store serves as a representation of a company or
  brand, particularly useful for retailers managing multiple brands.
---

# Configure Product Store

## Configuration Steps

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

### Configurations are as follows

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

Apart from these default configurations, retailers can add new configurations specific to their product store by clicking `Add` in the store settings section. 

For a comprehensive list of all available configurations, their descriptions, and their impact on the system, please refer to the [Product Store Settings Master List](product-store-settings.md).

{% embed url="https://youtu.be/X06G-GYjt-I" %}

