# Manage Existing Facilities

After the creation of facilities, retailers need to utilize the `Facilities` app to manage facility information. This includes tasks such as renaming facilities, updating facilities' addresses, updating fulfillment settings, or updating external mappings.

### Search Facilities

Retailers can locate and manage specific facilities by clicking the `Facilities` button on the homepage.
There are two ways to locate the facilities:
1. While looking for a specific facility, the user can search for the facility by facility name from the `Search facilities` search bar on the top left corner of the page.
2. To manually narrow down the list of facilities, users can apply the `Product Store` and `Type` filters. These filters allow users to view facilities linked to a specific product store or facility type.
For example, if a retailer has multiple product stores, the dropdown menu in the `product store` filter will present all the product stores from which the user can select any specific product store to access the facilities associated with the particular product store. Similarly, if a user is seeking a specific type of facility, they can use the type filter to view all the facilities of any particular type.

{% embed url="https://youtu.be/v3AOhHhjZO4" %}
Video: Locate Facilities
{% endembed %}

### Manage Configurations from the Facilities home page : 

- **Configure Fulfillment Capacity** : 

- **Configure Online Fulfillment** : 


### Rename Facilities

For any facility name updates made, the user can rename facilities by clicking on the `Edit` button near the facility's name. This will open a pop-up where users can edit the name and click on `Apply` to save the name.

{% embed url="https://youtu.be/twdlWgNTsTc" %}
Video: Rename Facilities
{% endembed %}

### Change Facility Type

Users can now change the facility type of a facility from the facility details page to provide flexibility and accommodate changes in business requirements.

{% embed url="https://youtu.be/1Z4Y6QVThFc" %}
Video: Change Facility Type
{% endembed %}

### Create Facility Log-ins

Users can create facility logins that can be used by the staff of the respective facility by clicking on the retail/warehouse login card through the following steps:

1. Click on the `Add` Button in the login card
2. This will open up a new form. Add the Facility user name, password, and a reset password link
3. Click on the save icon to save the facility login.

### Linking Facility with External Systems

Before configuring any settings, it's crucial to establish a connection between the facilities within HotWax Commerce and external systems like e-commerce platforms, ERP systems, and third-party logistics systems. Each facility in HotWax Commerce manages inventory; and the Available To Promise (ATP) is also controlled by retailers through ERP integration, ensuring accurate fulfillment and inventory management across the system. Users can map the HotWax Commerce facilities with external systems using the following steps:

1. **Access Facility Details:** Users can click on the desired facility's name which will redirect them to the facility details page, providing a comprehensive overview of the chosen facility.
2. **External Mapping:** Scroll down to the `External Mappings` tab located at the bottom of the facility details page.
3. **Map Facility to an External System:** Click on the `Map Facility to an External System` button to initiate the mapping process.
4. **Choose External System:** In the menu that appears, choose the external system for which a mapping has to be created.
5. **Fill in Required details:**

      * _For Shopify:_ Choose the appropriate Shopify store from the dropdown menu and add the location ID of the facility that can be obtained from the URL of that specific location in the Shopify admin panel.
      * _For Custom Mapping:_ Users can create custom mapping by selecting the `Custom` option from the menu, adding the `Mapping ID`, `Mapping Name` (external system for which mapping needs to be done), and the Mapping Value (External ID of the facility).

<figure><img src="../../.gitbook/assets/Screenshot 2024-02-29 at 10.58.39 AM.png" alt=""><figcaption><p>Image: Location ID on Shopify</p></figcaption></figure>

6. **Save Mapping:** Once the required information is filled in, click on the `save` icon to save the configuration. This integration lays the groundwork for a cohesive connection between the facility in HotWax Commerce and the facility in the external system, facilitating streamlined configuration and operational processes.
7. **Edit and Remove:** Users can further edit the external ID in case of any modification of the facility on the external system using the `Edit` button or remove any mapping by clicking on the `Remove` button.
