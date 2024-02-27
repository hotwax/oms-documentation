# Facility Group Page

In Hotwax commerce facility groups are used to define the scope and functionality of the facility for omnichannel order management. For instance, including a facility in the Pickup and Same Day Shipping groups indicates that the facility accommodates both Buy Online, Pickup In-Store (BOPIS), and same-day shipping orders. 

Users can find the Facility Groups by clicking on the `Group Card` in the `Facilities App`. In the Facility Group page, users can perform various functions such as:

### Searching a Group

Users can search for the groups from the search bar on the top left of the `Group details` page. Users can filter the groups by the system groups section below the search menu.

### Editing Existing Group

Users have the ability to perform various actions on a specific group by accessing the overflow menu associated with the group card. This includes renaming the `Group`, `Editing its description`, and `Deleting` the group.

### Manage Facilities in a Group

The number displayed in front of `Facilities` on the group card indicates the count of facilities linked to that group. Clicking on this number provides users with a list of all associated facilities. Users can efficiently manage facility associations in bulk within a designated group by utilizing the `Quick Edit` button. Clicking on the `Quick Edit` button opens a modal where checkboxes next to facilities can be marked for association. Click on the save icon to finalize the process, allowing hassle-free facility management within the group.

### Creating a New Group

There are some default groups already added when you deploy HotWax Commerce. However, retailers can create groups as per their requirements by scrolling to the end of the page and then clicking on the `Create Group` button. On clicking the `Create Group` button a pop-up window appears with the following fields-
- Name
- Internal ID
- System Group Type
- Description
After filling this information users need to click on the `+` icon button to create a new group.

## System Facility Group

These are default facilities groups, which are available when you deploy HotWax Commerce.

- **Pick up**
  - Facilities managing BOPIS orders often require a designated staging area to ensure efficient order processing. Furthermore, given the urgency of same-day customer pickups, immediate picking and packing are essential. Facilities that have the capabilities to fulfill BOPIS orders can be added in the group. Only facilities which are added in this group will be available to the customer on the BOPIS PDP app.

- **Online Facility Group**
  - Facilities have the option to choose whether or not to participate in selling their inventory online. If a facility is capable of fulfilling orders and wants its inventory to be sold online, it can be included in the Online facility group. Conversely, if a facility decides not to sell their inventory online, they can be excluded from the group. Retailers can have multiple online facility groups for different channels. If a retailer sells their inventory on different channels, for example, on Shopify and Amazon, they can have two Online Facility Groups, one for each Amazon and Shopify. The facilities which are added to the Shopify facility group would be available to sell their inventory only on Shopify and Vice Versa.

- **Generate Shipping Label**
  - Facilities qualified for HotWax Commerce shipping label generation are part of this group. If a facility relies on its third-party fulfillment app or if the shipping carrier used by the retailers lacks compatibility with Hotwax Commerce integration, the feature can be deactivated. Since the facility does not rely on HotWax commerce for the shipping label, clicking on the generated shipping label may result in an error, resulting in confusion for the store associates.

- **Same day Shipping**
  - Facilities that can fulfill orders on the same day are placed in the Same-day Shipping group. Fulfilling orders on the same day requires a faster turnaround time for the pick-pack-ship process. However, facilities facing any constraints preventing them from meeting this commitment can be excluded from the group so that same-day shipping orders won’t be brokered to these facilities.

- **OMS Fulfillment**
  - This group will encompass facilities that support the shipping of inventory for E-commerce orders. However, if a facility prefers to exclusively reserve its inventory for walk-in customers and does not wish to participate in e-commerce order fulfillment, it has the option to be removed from this group. No orders will be brokered to the facilities that are not part of the OMS fulfillment group.

{% hint style="info" %}
Users can see groups linked to specific facility in the facilities details page.
{% endhint %}
