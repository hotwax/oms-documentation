# Map Shopify POS Locations to HotWax Commerce Facilities

{% hint style='info' %}

When mapping locations, set up a Shopify location named eCom Inventory and link it to the Brokering queue (_NA_ in Hotwax). This ensures that unified inventory across retailers' facilities is updated to a single location in Shopify. When an order is placed on Shopify, inventory is reduced from eCom Inventory, and the order is sent to the HotWax Commerce Brokering queue for brokering to the optimized location for fulfillment.
{% endhint %}

On the Shopify Config Detail page for your store, follow these steps:

1. Scroll down to the `Shopify Location ID` section.

2. Click on `Add` to include new facilities.

3. Ensure accurate mapping of all Shopify POS locations to their corresponding store facilities in HotWax Commerce.

4. Copy the location ID of a facility from Shopify by extracting it from the URL of the facility detail page.

This process establishes a direct and efficient linkage between Shopify POS locations and their counterparts in HotWax Commerce, optimizing your inventory management system.

### How to extract Shopify POS Location ID from Shopify?

Follow these steps to seamlessly integrate Shopify POS locations with their corresponding store facilities in HotWax Commerce:

1. Navigate to the Administration side of your Shopify account.

2. In the settings menu, go to **Locations** and utilize the search function to locate the desired location. Select the location and open its detail page.

3. In the URL of the location detail page, find the location ID and copy it.

4. Paste the copied location ID in the OMS.

5. Repeat these steps for each Shopify POS location, ensuring accurate mapping between Shopify and HotWax Commerce facilities.

{% hint style='warning' %}
Ensure you have mapped default location in Shopify with Brokering queue i.e _NA_ in Hotwax
{% endhint %}

