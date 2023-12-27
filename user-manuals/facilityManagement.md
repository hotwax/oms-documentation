# Facility Management App

HotWax Commerce's Facility Management App is a seamless tool for retailers overseeing multiple storage locations like stores or warehouses. This application assists in managing facilities independently for fulfillment and Buy Online, Pickup In-Store (BOPIS) processes. Effective configuration and management of these facilities are essential for ensuring operational efficiency while delivering a seamless offline experience for customers. Users can easily create new facilities and manage fulfillment configurations of existing ones.

## Add New Facilities

Retailers can initiate facility setup in HotWax Commerce using a CSV import. However, if a new store is opened, it must be added to HotWax Commerce to ensure its participation in online fulfillment. The process of adding a new facility involves the following steps:
Navigate to the `facility management app` in the `Launchpad` and login to access the app.

**Note:** Only Users with Admin permissions can log in to the `facility management app`.

1. Select the `facilities` option on the homepage to view all the existing facilities and the option to create new facilities.

2. To create a new facility users need to click on the `+` button at the bottom right corner and then select the type of facility, whether the facility is a Warehouse or Store.

3. This will open a `create facility page` where users can add the name of the facility and add internal IDs and external IDs of the facility. Finally, click on the `Create facility` button.

4. On the next page, the user will get the option to add the facility address along with the exact geolocation of the facility. 
This geolocation helps in two ways:

- Efficient Brokering: At the time of order brokering, the brokering engine finds the nearest store from the customer’s location for fast delivery and lower shipping costs.
- BOPIS Convenience: Customers can choose their desired pickup locations for their orders by seeing distances to available facilities.

Note- Retailers can manually add the facility-associated latitude and longitude, or use the `Generate` icon to automatically generates latitude and longitude based on the provided address.

In the next step, users will get a configurations page from which users can specify the facility-specific configurations. Such as:


- Product Store: Users can specify which product stores are associated with that specific facility i.e. which brands are available for fulfillment from that facility.


- Sell Inventory Online: Retailers can configure whether the facility’s inventory should be available to sell on an e-commerce platform.


- Allow Pickup: Users can configure whether the facility has the capacity to manage BOPIS operations. 


- Use Native Fulfillment App: Finally, retailers can specify whether the facility uses HotWax Commerce’s native fulfillment app or third-party fulfillment apps.

Click `Save Configurations` to create the facility with the specified settings. Alternatively, users can choose to add configurations at a later time. Once facilities are added, users can manage and further modify these configurations within the Facility Management App as needed.

## Manage Existing facilities

Once the facilities are created, users can manage the facilities within the Facility Management App to ensure accurate online fulfillment

### Locate Facilities

Users need to navigate to the `Homepage`> `Find Facilities` page to manage the existing facilities. There are two ways to locate the facilities for which users need to manage the configurations:

1- To locate a specific facility, user can search the facility by name from the `search` functionality on the left.
2- Users can apply filters such as Product Store and facility Type to narrow down the list and find the facility manually.

### Linking Facility with External Systems

Before configuring any settings, it's crucial to establish a connection between the facility in HotWax Commerce and facilities in the external Systems such as e-commerce platforms, ERP systems, and third-party logistics systems for accurate fulfillment and inventory management. Users can map the HotWax Commerce facilities with external systems by following steps:

1. Access Facility Details: Users can click on the desired facility's name which will be redirected to the facility details page, providing a comprehensive overview of the chosen facility.

2. External Mapping: Scroll down to the `External Mapping` segment located at the bottom of the facility details page.

3. Map Facility to External System: Click on the `Add Map Facility to External System` button to initiate the mapping process.

5. Choose External System: In the modal that appears, choose the external system for which the user wants to create the mapping. 

6. Fill in Required details: 

- For Shopify: Choose the appropriate Shopify store from the dropdown menu and add the location ID of the facilities that can be obtained from the Shopify admin panel.

- For other Systems: Users can create mapping by adding the Mapping Name ( External system for which mapping needs to be done) and the Mapping Value (External ID of the Facility)

7. Save Mapping: Once the required information is filled in, click on the `save` button to save the configuration. This integration lays the groundwork for a cohesive connection between the facility in HotWax Commerce and facility in the external system, facilitating streamlined configuration and operational processes.

8. Edit and Remove: Users can further edit the external ID in case of any modification of the facility on the external system or click on the `remove` button to delete ecommerce the mapping.

### Rename facilities

Users can seamlessly rename facilities by clicking on the `Pencil` Icon near the facility's name. this will open a pop-up where users can edit the name and click on `apply` to save the name

### Add Facility Address

If the user has skipped adding address and latitude & longitude information during the facility setup, it can be seamlessly added by following these steps:

1. Click on the Add button in the Address card which will open a pop-up menu. Users can add Address Line, City, Country, State and Zip codes.
2. After filling in the required details, click on the `Save` icon to save the facility address.
3. Retailers have the option to edit the address by clicking the `edit` button below the address. Remember to save the edits using the `save` icon to update the address.

**Add Latitude & Longitude:**

1. Click on the `Add` Button in the Latitude & Longitude card on the facility details page. A pop-up menu will appear, allowing users to input latitude and longitude information.
2. Retailers can manually add the facility-associated latitude and longitude, or use the `Generate` icon located at the top right corner of the popup menu. This option automatically generates latitude and longitude based on the provided address.

### Manage Operating Hours

Users need to setup the operating hours of the facilities to show the information in the ecommerce PDP for BOPIS operations so that customers will know at what time they can visit the facility to collect their orders. Furthermore, adding operating hours is also essential to communicate to the shipping carriers about the store's timing.

1. Users can select the operating hours by clicking on any of the pre-existing calendars in the `Operating Hours` Card. Once the calendar is selected they can click on the `Add Operating hours` button.
2. Users can also create a custom calendar for the store by following steps:

- Click on the `Add Schedule` option to create a custom schedule. 
- A pop-up menu will appear, prompting users to add a schedule name, start time, and end time. Click on the `save` icon to save standard operating hours for the entire week.
- To establish different start and end times for specific days, toggle on the `Daily Timings` option. Select the start and end time for each day of the week. If no time is specified for a particular day, it will be considered closed for that day (e.g., Saturday and Sunday).
- Click the `save` icon to confirm and save the customized operating hours.

### Add Product Stores

Users managing multiple product stores in HotWax Commerce can mention the facility is associated with which product store. For facilities selling products from multiple product stores, users can specify the `Primary` Product store associated with the facility. Users can add the product store by following steps:

1. Click on the `Add` button within the product store card to initiate the process of adding a new product store.
2. A pop-up menu will appear, presenting a list of available product stores. Choose the relevant product store(s) that you want to associate with the selected facility.
3. After selecting the product store(s), click on the save icon to add them to the facility. The names of the selected product store(s) will now appear within the product store card.
4. Users have the option to designate a specific product store as the primary store or unlink a product store from the facility in the  selected product store overflow menu.

### Configure Online Fulfillment

The Fulfillment settings card on the facility details page allows users to quickly configure the facility-specific configure to manage the scope of participation in online fulfillment. Users can configure the following settings for the facility:

1. Sell Inventory Online: `Sell inventory online` function helps users to simply choose whether they want to sell inventory online for that facility. Stores or warehouses can temporarily choose to turn online fulfillment off for several reasons such as high footfall, natural calamities, lack of resources for fulfillment, etc. Hence in such situations stores and warehouses are turned off for online fulfillment to avoid order brokering. Users also have quick access to turn online fulfillment on/off on the find facilities page.

2. Allow Pickup: BOPIS operations require a staging area where customers can collect their orders. However, retailers can decide whether they have the capacity to fulfill BOPIS orders by simply toggling on/off the `allow pickup` settings to enable or disable BOPIS for the selected facility.

3. Use Native Fulfillment App: `Native fulfillment app` setting enables retailers to select whether the facility uses HotWax Commerce’s fulfillment app or any third-party fulfillment app.

4. Generate Shipping Labels: HotWax Commerce enables retailers to integrate with carrier partners so at the time of fulfillment via HotWax Commerce’s Fulfillment app, Shipping labels can be generated for this shipment process. Retailers opting not to integrate HotWax Commerce with the carrier partners and prefer to insert tracking ID in HotWax Commerce to update os Shopify can toggle off the `Generate Shipping Labels` settings.

5. Days to Ship: `Days to` ship are the maximum number of days the facility will take to ship the order post brokering. Enter the days to ship and click on `Update Days To Ship` button to save the configurations for the facility.

### Configure Fulfillment Capacity

Fulfillment capacity is defined based on the number of orders a facility will be able to fulfill in a day. It is set up considering various resources such as facility size, staff, and footfall. Users can set up the maximum order limit that can be allocated to that facility through the `Online Order Fulfillment' Card. Users can manage the order capacity of the facility by following steps:

1. On the online order fulfillment card, a fulfillment capacity overflow menu on the right is presented. From the menu, retailers can define facility fulfillment capacity to take orders against it.

- Unlimited capacity: RRemoves the fulfillment capacity limit, allowing the facility to handle an unrestricted number of orders. This setting is not recommended for retail stores.
- No capacity: Sets the fulfillment capacity to 0, preventing any new orders from being brokered to the facility. The capacity is only set to 0 if the facility is unavailable to fulfill any upcoming orders and this should be used cautiously.
- Custom: Enter a custom number for the order fulfillment capacity. 

2. Click on "Apply" to save the capacity. Retailers can view the consumed capacity, out of the added fulfillment capacity in the card.

The ability to configure fulfillment capcity is also available in the `Find facility page` for quick access.

Users can also see the facility order count history by clicking on the View order count history button. This will help them in setting up the capacity based on their previous record.

### Manage facility Staff

This feature allows retailers to efficiently handle facility-specific staff, assigning role-specific permissions for accessing HotWax Commerce and other HotWax Commerce applications. Users can manage facility staff by the following steps:


**Add Staff Member**

1. Navigate to the Staff section available at the bottom of the page. Click on `Add Staff Member To Facility` button to open a staff pop-up menu.
2. In the `search` tab, users can either type the staff member's name and press enter or scroll down the list of staff to find the desired member.
3. The staff member's name and ID will be displayed, accompanied by a drop-down menu on the right.
4. Select the staff role from the drop-down menu and click the `save` icon to add the staff member to the facility.

The added staff members will be listed, showcasing:
- Name and ID
- Assigned role
- Date on which the staff member was added to the facility.

To remove a staff member from the facility, click on the `cross` button located on the right side of each staff member's name within the staff details section.

### Manage Locations

Users can specify the locations with the facilities such as Aisle, Section, Level or sequence which will help store associates to define an exact place where inventory can be kept when received and where the inventory can be picked from.

**Add Locations**

To add a new location within the facility, click on the `Add Locations To Facility` button to open a location pop-up menu.

Fill in the required information to add location to the facility.

1. Type: The location is divided into four types.

- Bulk - This area stores large quantities of inventory not intended for immediate picking or display. This is a long-term storage space for excess stock, or bulk materials.

- Pick/Primary - This is where the most frequently accessed items are stored. It's designed for efficient order fulfillment, with easy access for pickers and quick movement of goods.

- Receiving Bay - This is the designated area for incoming deliveries. It allows for unloading, inspection, and initial processing of new inventory before it's moved to its designated storage location.

- Staging - This area acts as a temporary holding space for goods in various stages of processing. It could be used for preparing orders for shipment, kitting products, or holding returns before processing.

2. Area: A designated section within a warehouse or store with a specific function, department, or purpose.

3. Aisle:  This is a designated walkway between sections within the warehouse or retail store. Aisles are numbered or named for easy navigation and identification.

4. Section: This further subdivides an area and usually refers to a specific range of product categories or brands. 

5. Level: This defines the vertical plane of the location, especially in multi-story warehouses. For a single-story building, "level" might not be used.

6. Sequence: This term is closely related to picking and usually refers to a specific order in which items need to be picked to optimize efficiency. It could be based on product location, order size, or customer priority.

Finally, Click on the `save` icon to save the location within the facility.

**Edit Locations**

1. To edit the location of the facility, click on the overflow menu presented towards the right of each location.

2. Select the `edit location` button and edit the required updates that need to be made.

3. Click on the `save` icon to update the location.

**Remove location**

1. To remove a location from the facility, click on the overflow menu presented towards the right of each location.
2. Click on the `remove location` button to remove location from the facility.


























