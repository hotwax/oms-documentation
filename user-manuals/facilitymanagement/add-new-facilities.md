# Add New Facilities

Retailers can initiate facility setup in HotWax Commerce using a CSV import. However, if a new store is opened, it must be added to HotWax Commerce to ensure its participation in online fulfillment. The process of adding a new facility involves the following steps: Navigate to the `facility management app` in the `Launchpad` and login to access the app.

{% hint style="info" %}
Only Users with Admin permissions can log in to the `facility management app`.
{% endhint %}

1. Select the `facilities` option on the homepage to view all the existing facilities.
2. To create a new facility users need to click on the `+` button at the bottom right corner and then select the type of facility, whether the facility is a Warehouse or Store.
3. This will open a `create facility page` where users can add the name of the facility and add internal IDs and external IDs of the facility. Finally, click on the `Create facility` button.
4. On the next page, the user will get the option to add the facility address along with the exact geolocation of the facility. This geolocation helps in two ways:

* **Efficient Brokering:** At the time of order brokering, the brokering engine finds the nearest store from the customer’s location for fast delivery and lower shipping costs.
* **BOPIS Convenience:** Retailers can empower their customers with the capability to choose a pickup location or store by identifying the nearest store that has the required product for their order.

{% hint style="info" %}
Retailers can manually add the facility-associated latitude and longitude, or use the `Generate` icon to automatically generate latitude and longitude based on the provided address.
{% endhint %}

In the next step, users will get a configurations page from which users can specify the facility-specific configurations. Such as:

* **Product Store:** Retailers can specify which facilities are associated with a particular product store, meaning they can define the facilities available for fulfilling products of a certain brand.
* **Sell Inventory Online:** Retailers can configure whether the facility’s inventory should be available to sell on an e-commerce platform.
* **Allow Pickup:** Retailers can configure whether the store is equipped to handle BOPIS operations.
* **Use Native Fulfillment App:** Finally, retailers can specify whether the facility uses HotWax Commerce’s native fulfillment app or third-party fulfillment apps. \
  For Warehouses employing a Warehouse Management System (WMS) for fulfillment, retailers can turn off the toggle, signifying that HotWax's fulfillment app is not being utilised.

Click `Save Configurations` to create the facility with the specified settings. Alternatively, users can choose to add configurations at a later time. Once facilities are added, users can manage and further modify these configurations within the Facility Management App as needed.
