# Add Facility Address

To ensure accurate facility management and fulfillment, it is crucial for the admin user to add address and latitude & longitude information. This foundational data not only facilitates seamless integration with external systems but also plays a vital role in optimizing logistical processes within HotWax Commerce. If the user has skipped adding this information initially, it can be added by following these steps:

1. On the `Find Facilities` page, find the facility you want to add an address to and tap on it. This will open the `Facility details` page.
2. Click on the `Add` button in the Address card which will open a pop-up menu. Users can add Address Line, City, Country, State and Zip codes for the facility here. 
3. After filling in the required details, click on the `Save` icon to save the facility address.
4. Users have the option to edit the address by clicking the `Edit` button below the address. Remember to save the edits using the `save` icon to update the address.

{% hint style="info" %}
HotWax Commerce employs zone-based routing to allocate the most suitable inventory for orders. This routing is based on zip codes, ensuring efficient order allocation. It's crucial to ensure that zip codes are added to each facility. Otherwise, orders won't be brokered to that facility for fulfillment.
{% endhint %}

{% embed url="https://youtu.be/gBCNHmIcy9E" %}
Video: Add Facility Address
{% endembed %}

## Set Shipping Name for Facility

The shipping name feature in HotWax Commerce offers retailers flexibility and branding opportunities. Unlike the facility name, which may be more generic, the shipping name can reflect the retailer's brand name for that facility. This customization enhances brand identity and ensures a consistent customer experience during order fulfillment. The Shipping Name can be set by following these steps:


1. Navigate to the `Find Facilities` page in the Facility application.
2. Utilize the search function within the `Find Facilities` page to locate the specific facility for which you want to set the shipping name.
3. Once you've identified the desired facility, click on the Facility Name to access its details and configurtaions.
4. Look for the section labeled `Address and Contact Details` within the `facility details` page. This section contains information related to the facility's address and contact details.
5. Click on `edit` to open up a new form and add the desired shipping name.
6. Alongside entering the shipping name, ensure that you input the correct `Zipcode` for the facility. This is crucial, as the Zipcode is required for setting the shipping name.
7.  After entering the shipping name and verifying the Zipcode, save the changes by clicking on the `save icon` to update the facility's details effectively.

{% embed url="https://youtu.be/gRkDyZT9jqs" %} Video: Set Shipping name {% endembed %}



## Add Latitude & Longitude


HotWax Commerce BOPIS PDP App enhances the Shopify Product Detail Page (PDP) experience for the customers by displaying the distance of stores from a customer's current location. This functionality is achieved through the utilization of the "storeLookup" API, which retrieves all available pickup locations within a specified radius from the customer's location. The API relies on the latitude and longitude coordinates of facilities to determine their proximity to the customer.

To add the latitude and longitude coordinates for a facility, follow these steps:

1. On the `Facility details` page, click on the `Add` Button in the Latitude & Longitude card. A pop-up menu will appear, allowing users to input latitude and longitude information.
2. Users can manually add the facility-associated latitude and longitude, or use the `Generate` icon located at the top right corner of the pop-up menu. This option automatically generates latitude and longitude based on the provided address.

{% embed url="https://youtu.be/SA6cVCSwagI" %}
Video: Add Latitude & Longitude
{% endembed %}
