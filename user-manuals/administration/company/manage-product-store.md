---
description: >-
  Efficiently manage your product store configurations with HotWax Order
  Management System.
---

# Manage Product Store

Product store management is a straightforward process accomplished through the Find Product Store and the Product store details page. Follow these steps to manage product store configurations:

1. Go to the Find Product Store page and select the Product store you want to manage to open the Product Store details page.

## Configurations

### Edit Product Store Name

{% hint style="info" %}
The scope is limited to the product store name, as the company name and product store ID cannot be changed once configured.
{% endhint %}

1. Navigate to the product card in the Product Store details page.
2. Locate and click on the 'Edit' button associated with the product store card. You may find this button labeled 'Edit.'
3. Once clicked, a dialog box will appear, allowing you to make changes to the product store name.
4. In the provided field, modify the product store name to your desired new name.
5. After making the necessary changes, click on `confirm` to save your edits.
6. Verify that the changes have been applied by checking the updated product store name.

### Manage Operational Countries

1. Select the `Operating Countries detail` button on the product card in the Product Store details page to open the dialog box.
2. Within the dialog box, you'll find a list of countries available for selection. If you need to add a new operating country, use the search functionality provided. You can search for countries by their GeoIDs, which may include country names.
3. To add a country, simply check the checkbox next to its name in the list. This indicates that the selected country will be included as an operating country forthe product store.
4. Conversely, if you need to remove a country, uncheck the checkbox next to its name. This will exclude the deselected country from the list of operating countries for the product store.
5. Once you've made the necessary changes, ensure to save selections. This might involve clicking on a 'Save' or 'Apply' button within the dialog box.
6. After saving, confirm that the operating countries for the product store have been updated accordingly.

### Administration

{% hint style="danger" %}
Administration settings require special permissions and, if mismanaged, can impact the workflow of OMS. Hence, it is recommended to not change these flows without approvals.
{% endhint %}

1. Navigate to the product card in the Product Store details page.
2. On the product card, locate the toggle switches for Order Reservations and Order Brokering.
   * **Order Reservations:** OMS serves as the definitive source for inventory information, and as such, this setting should consistently remain at its default value of Y without alteration.
   * **Order Brokering:** Disabling brokering hinders OMS from optimizing inventory allocation for orders, defeating its intended purpose. Therefore, this setting should always be maintained at its default value of Y and should not be modified.

### Orders

1. Navigate to the Order card in the Product Store details page.

**Import:**

* **Sales Order Prefix:** Specify any preferred prefix to be added to internal order IDs. To modify, locate the "Sales Order Prefix" field and enter your desired prefix.
* **Save Bill To Information:** Store billing information associated with orders in OMS. Ensure this option is toggled on if you want billing information to be saved automatically.

**Approval:**

* **Approve on Import:** Configure when no further order information is needed prior to order approval. Adjust the setting according to order workflow preferences.

**Returns:**

* **Creation Deadline Days:** Specify the number of days permitted for creating returns for in-store. Adjust this value based on your return policy and operational needs.

### Brokering

1. Navigate to the Brokering card in the Product Store details page.

**Soft Allocation:**

* **Preselected Facility Tag:** Orders tagged with this tag will undergo line item check for fulfillment facility selection. To set a preselected facility tag, navigate to the Soft allocation section in the Brokering card, and select the default tag or create a new tag if any.
* **Shipping Facility Tag:** This tag will hold the preselected fulfillment facility value. To assign a shipping facility tag, locate the relevant field in the Brokering card and select the default tag or create a new tag if any.

**Routing:**

* **Order Splitting:** Configure when no further order information is needed prior to order approval. Access this setting in the routing section of Brokering card, and adjust it according to your workflow requirements.
* **Minimum Shipment Threshold Value:** Set threshold values for order items to ensure efficient order splitting while mitigating the risk of losses due to low-value shipments. Navigate to the routing or order management settings, and specify the desired threshold value, tthe shipment value will pick the currency set in the product store, ensuring consistency in currency throughout the order management process.

### Fulfillment

**Notification:**

* **Send Notification to Shopify:** Enable this option to automatically update tracking information on Shopify when the order is marked fulfilled. To modify this setting, navigate to the notification settings section in the Fulfillment card, locate the `Send Notification to Shopify` option, and toggle it as needed.

**Cancelled:**

* **Auto Order Cancellations:** Configure the cancellation threshold for unfulfilled orders. To adjust this setting, navigate to the cancellation settings section in the fulfillment card, find the `Auto Order Cancellations` option, and and toggle it as needed.
* **Auto Cancellations Days:** Specify the number of days after which the order should be automatically marked as cancelled if not fulfilled. This setting can be adjusted in the cancellation settings section alongside the "Auto Order Cancellations" option.

### Store Pickup

* **Partial Order Rejection:** Specify whether to reject a BOPIS (Buy Online, Pickup In Store) order partially when any order item inventory is insufficient at the store. This setting can be found in the store pickup settings section. Navigate to this section in your dashboard, locate the `Partial Order Rejection` option, and toggle it as required.

### Inventory

**Inventory View:**

* **Show Systemic Inventory:** Enable this option to display the current physical quantity expected at locations while inventory counting. To adjust this setting, navigate to the inventory view settings in the Inventory card, locate the `Show Systemic Inventory` option, and toggle it accordingly.

**Pre-order Computation:**

* **Hold Pre-order Physical Inventory:** Configure the inventory computation in the OMS to withhold physical inventory from being made available online for products with orders in the pre-order queue. To adjust this setting, navigate to the pre-order computation settings in your dashboard, locate the "Hold Pre-order Physical Inventory" option, and toggle it as needed.
* **Pre-order Group:** Specify the facility group to be used for computing the pre-order catalog computation. To adjust this setting, navigate to the pre-order computation settings, find the "Pre-order Group" option, and select the appropriate facility group from the available options.

### Product

**Identifier:**

* **Global Identifier:** This identifier is utilized universally across your business operations. To modify or set the global identifier, navigate to the identifier settings section within your dashboard. Locate the "Global Identifier" option and adjust it according to your requirements.
* **Preferred Identifier View:** Opting for a preferred product identifier enables you to view products using your preferred identification across HotWax Commerce Apps. To set your preferred identifier view, access the identifier settings in your dashboard. Find the `Preferred Identifier View` option and select the desired product identifier from the available options.

### Reroute Fulfillment

Control what your customers are allowed to edit on their order when they are editing their order on Reroute Fulfillment. Configurations are:

1. Delivery method change
2. Shipment method allowed to switch to
3. Delivery address change
4. Pickup location change
5. Cancel order before fulfillment

### Manage Facility

Associating a product store with a facility allows the product store to add the facility for the brand. This configuration defines in OMS to make the facility available for order fulfillment related operations for the brand. A facility can be associated with multiple product store.

1. Navigate to the facility tab in the Product store details page.
2. Click on the `Add Facility` button.
3. Choose the facility you want to associate product store with from the Add Facility method dialog box.
4. Once you've configured the association between the product store and the facility, save your changes.

**Remove Facility mapping**

To remove an association between a product store and a shipping method, follow these steps:

1. Go to the Shipping Method tab.
2. Locate the shipping method that you want to disassociate from the product store.
3. Click on the overflow menu (typically represented by three vertical dots) next to the shipping method.
4. From the menu, select Remove Association option.
5. Confirm the action.

This will remove the association between the selected shipping method and the product store.

### Manage Shipping Method

The shipment method dictates how products are delivered from seller to buyer. During the fulfillment process, as packers prepare packages and request shipping labels, the HotWax Commerce Fulfillment App retrieves quotations for all configured shipping methods based on configurations done in this section. These configurations help the HotWax Commerce Store Fulfillment App intelligently select the least expensive shipping method, optimizing costs and ensuring timely delivery. Shipment methods need to be configured for the product store to specify which shipment methods are supported by the specific product store.

Before creating the Shipment method, we need to ensure carriers are available in HotWax Commerce.

To integrate a new shipment method into your product store within HotWax Commerce, follow these detailed steps:

1. Navigate to the Shipping method tab.
2. Click on the `Add Shipping method` button.
3. Choose your preferred carrier from the Add shipping method dialog box.
4. Select the specific shipment method offered by the chosen carrier (e.g., Next Day, Same Day, Standard) from the dropdown menu.
5. Choose the appropriate gateway configuration to facilitate the shipping process effectively.
6. Save your changes.

**Remove Shipping method**

To remove an association between a product store and a shipping method, follow these steps:

1. Go to the Shipping Method tab.
2. Locate the shipping method that you want to disassociate from the product store.
3. Click on the overflow menu (typically represented by three vertical dots) next to the shipping method.
4. From the menu, select Remove Association option.
5. Confirm the action.

This will remove the association between the selected shipping method and the product store.
