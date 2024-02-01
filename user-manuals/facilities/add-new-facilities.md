# Add New Facilities

The process of adding a new facility involves the following steps: Navigate to the `Facilities App` in the `Launchpad` and login to access the app.

{% hint style="info" %}
Only Users with Admin permissions can log in to the `Facilities app`. Users in Administration security group have admin permissions.
{% endhint %}

1. Select the `Facilities` option on the homepage to view all the existing facilities.
2. To create a new facility users need to click on the `+` button at the bottom right corner and then select the type of facility, whether the facility is a Warehouse or Store.
3. This will open a `create facility page` where users can add the name of the facility and add internal IDs and external IDs of the facility. Finally, click on the `Create Facility` button.
4. On the next page, the user will get the option to add the facility address along with the exact geolocation of the facility. This geolocation helps in two ways:

* **Efficient Brokering:** At the time of order brokering, the brokering engine finds the nearest store from the customer’s location for fast delivery and lower shipping costs.
* **BOPIS Convenience:** Retailers can empower their customers with the capability to choose a pickup location or store by identifying the nearest store that has the required product for their order. \
  On Shopify PDP, customers choosing the "pickup today" option enter their current zip code to view a list of stores ranked from nearest to farthest.

{% hint style="info" %}
Admin user can manually add the facility-associated latitude and longitude, or use the `Generate` icon to automatically generate latitude and longitude based on the provided address.
{% endhint %}

5. In the next step, users will get a configurations page from which users can specify the facility-specific configurations. Such as:

* **Product Store:** User can specify the facilities available for fulfilling products of a certain brand.
* **Sell Inventory Online:** User can configure whether the facility’s inventory should be available to sell on an e-commerce platform.
* **Allow Pickup:** User can configure whether the store is equipped to handle BOPIS operations.
* **Use Native Fulfillment App:** Finally, user can specify whether the facility uses HotWax Commerce’s native fulfillment app or third-party fulfillment apps. \
  For Warehouses employing a Warehouse Management System (WMS) for fulfillment, retailers can turn off the toggle, signifying that HotWax's fulfillment app is not being utilised.

6. Click `Save Configurations` to create the facility with the specified settings. Alternatively, users can choose to add configurations at a later time. Once facilities are added, users can manage and further modify these configurations within the Facilities App as needed.
