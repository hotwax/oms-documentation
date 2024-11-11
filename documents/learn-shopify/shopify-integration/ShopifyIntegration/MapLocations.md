---
description: >-
  Learn how to efficiently set up facilities in HotWax Commerce for seamless
  integration with Shopify locations.
---

# Setup Facilities

When mapping locations, map the default Shopify location with the Brokering queue (_NA_ in Hotwax). This ensures that unified inventory across facilities is updated to a single location in Shopify. When an order is placed on Shopify, inventory is reduced from the default location, and the order is sent to the HotWax Commerce `Brokering queue` for brokering to the optimized location for fulfillment.

On the Shopify Config Detail page for your store, follow these steps:

1. Scroll down to the `Shopify Location ID` section.
2. Click on `Add` to include new facilities.
3. Select the Brokering queue from the facility dropdown and add the default Shopify location ID in the Shopify Location ID input.

{% hint style="info" %}
If you are using Shopify POS, you need to map the Shopify location ID with all the POS locations.
{% endhint %}

4. Click on `Add` to include new facilities, search for the facility from the dropdown, and add the Shopify location ID of the location from Shopify.
5. Follow this process for all facilities.

### How to extract Shopify POS Location ID from Shopify?

Follow these steps to seamlessly integrate Shopify POS locations with their corresponding store facilities in HotWax Commerce:

1. Navigate to the Administration side of your Shopify account.
2. In the settings menu, go to **Locations** and utilize the search function to locate the desired location. Select the location and open its detail page.
3. In the URL of the location detail page, find the location ID and copy it.
4. Paste the copied location ID in the OMS.
5. Repeat these steps for each Shopify POS location, ensuring accurate mapping between Shopify and HotWax Commerce facilities.

{% hint style="warning" %}
Ensure you have mapped default location in Shopify with Brokering queue i.e _NA_ in Hotwax
{% endhint %}
