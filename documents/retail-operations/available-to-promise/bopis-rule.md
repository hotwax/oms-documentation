---
description: >-
  This page explains how retailers use store pickup rules in HotWax Commerce to
  suppress product availability across facilities and sales channels.
---

# Store Pickup Rules

As discussed in previous sections, to enable store pickup for a facility, it is essential that the facility is added to the **PICKUP facility group**. By default, store pickup is enabled for all products at facilities that are part of this group. If a facility is already included in the **PICKUP group**, rules only need to be created if the retailer wishes to suppress specific products from being available for in-store pickup.

In HotWax Commerce, retailers can create different types of store pickup rules:

* Configure which facilities will participate in in-store pickup.
* Configure which products will be suppressed for store pickup from which inventory channel.
* Configure which products will be suppressed for store pickup from which facility.

In this user manual, we will set up different types of configurations. For the remainder of the setup, we will use the example of a Canadian retailer that has five retail locations, including three retail stores and two warehouses. They want to suppress store pickup for a specific product: a **Blue Medium-sized shirt from the NotNaked brand**. Let’s see how retailers can configure store pickup rules for this scenario.

## Add Facility to Pickup Group

As previously discussed, retailers must add facilities that can offer store pickup to the **PICKUP group** in HotWax Commerce. Retailers can do this through the `Facilities App`, though the `ATP app` provides centralized control to add store pickup facilities.

For example, let’s assume the retailer wants to enable store pickup at their three stores, but not at their warehouses.

Here's how you can set up the Store Pickup rule Using the ATP App:

**Navigate to the Store Pickup Page:**\
Go to the `Store Pickup` page within the `ATP App`.

**Access the Facilities Tab:**\
Click on the `Facility Tab` to view the complete list of all your facilities (both warehouses and stores).

**Toggle Store Pickup for Stores:**\
For the three stores where you want to enable store pickup, turn on the toggle next to each store's name.

**Finalize Setup:**\
Once toggled on, these stores will automatically be added to the **PICKUP facility group**. All products available at these stores will now be eligible for in-store pickup.

{% embed url="https://youtu.be/pncQUSEJw9U" %}
Adding Facility to Pickup Group
{% endembed %}



## Suppress Store Pickup from Channel/ Configuration Facility

In this scenario, let’s assume the retailer wants to suppress store pickup from their US stores channel, allowing only customers in canada to pickup their orders from stores. Here’s how the retailer can set up this rule through the ATP app:

Here's how you can suppress store pickup from Channel:

**Create Rule:**\
Navigate to the `Store Pickup` page within the `ATP App` and go to the `Product And Channel` tab. Click on the `Add` button to create a new rule.

**Rule Name:**\
Enter a descriptive name for the rule, such as "Suppress Store Pickup for US Stores," to easily identify its purpose later.

**Rule Configuration:**\
After naming the rule, configure it by turning off the toggle for **Store Pickup**. This ensures that the selected products will be suppressed for store pickup from the designated channel.

**Selecting Channel/ Configuration facility:**\
Next, choose the relevant **channel configuration facility**, as all network rules for the products are governed by these configuration facilities. Since we are suppressing store pickup for the **US Shopify store**, select the **US Config Facility** from the channel options. This ensures the rule applies specifically to this channel.\
If you want to suppress store pickup for **all channels**, turn on the toggle to select all channels.

**Selecting Products:**\
If you want to suppress store pickup for **all products**, there is no need to change any settings for including or excluding products.\
However, if you want to suppress store pickup for a specific product while keeping other products available for pickup, you can select products by **tags** or **features**. For example, let’s assume you want to suppress store pickup for the **Blue Shirt (Size M)**, which has the product tags "Shirt" and "Blue Shirt."

* **Tags:** Click the `Add` button in the **Include** section and select the "Shirt" or "Blue Shirt" tag from your product catalog.
* **Features:** Alternatively, use product filters to include "Color: Blue" and "Size: M" to narrow the rule to this specific product variant.

Similarly, you can also exclude products by using the **Exclude** section with tags and features.

**Saving Configuration:**\
Once you’ve completed the product selection, click the `Save` button at the bottom-right of the screen. This will finalize the rule and ensure that the **Blue Shirt (Size M)** is no longer available for store pickup on the Shopify channel.

{% embed url="https://youtu.be/aB89cidOftc" %}
\
Suppress Store Pickup from Channel/ Configuration Facility
{% endembed %}



## Suppress Store Pickup from Facility Rule

In this scenario, the retailer wants to suppress store pickup for the **Blue Shirt (Size M)** from their warehouse facilities while allowing **store pickup** for the **Blue Shirt** from their retail stores.

Here's how you can suppress Store Pickup from a Facility:

**Create Rule:**\
Navigate to the `Pickup` page within the `ATP App` and select the `Product and Facility` tab. Click the `Add` button to create a new rule. This rule will allow the retailer to suppress store pickup for specific products at certain facilities while maintaining availability at other locations.

**Rule Name:**\
Enter a descriptive name for the rule, such as "Suppress Store Pickup for Blue Shirt (Size M) from Warehouses," so it’s easy to identify later.

**Rule Configuration:**\
To suppress store pickup for this product at the specified facilities, turn off the toggle for **Store Pickup**. This ensures that the **Blue Shirt (Size M)** will no longer be available for in-store pickup at the selected locations.

**Selecting Facilities:**\
Pickup rules apply to facility groups since retailers can have numerous facilities, and managing store pickup can be a dynamic process. To make this easier, it is recommended to create a **facility group** for the warehouses when setting up HotWax Commerce. Creating different facility groups based on **Facility Types** (e.g., warehouses vs. retail stores) is useful not only for store pickup but also for order routing.

If you want to create a custom facility group, you can do so through the `Facility App`.\
Once the facility group is created, navigate to the `ATP rule configuration` page. Click the `Add` button in the **Include** section of the facilities and add the relevant facility group. You can also use the **Exclude** feature to exclude specific facilities or select **All Facilities** if you want to suppress fulfillment of the product from all locations.

**Selecting Products:**\
If you want to suppress store pickup for **all products** at this facility, there is no need to include specific products. However, since we want to suppress pickup for only the **Blue Shirt (Size M)**, you can do this using **tags** or **features**.

* **Tags:** Click the `Add` button in the **Include** section and select the "Shirt" or "Blue Shirt" tag from your product catalog.
* **Features:** Alternatively, use product filters to include "Color: Blue" and "Size: M" to narrow the rule to this specific product variant.

Similarly, you can exclude products by using the **Exclude** section with tags and features.

**Saving Configuration:**\
Once you have configured the rule, selected the facilities, and chosen the product, click the `Save` button at the bottom-right of the page. This finalizes the rule, ensuring that the **Blue Shirt (Size M)** is suppressed for pickup from warehouse locations, while keeping store pickup available for other products and at other locations.

{% embed url="https://youtu.be/vIHXkGLo_KQ" %}
\
Suppress Store Pickup from Facility Rule
{% endembed %}



## Schedule Store Pickup Rule

Retailers can manage the scheduling of the ATP computation job responsible for the store pickup rule from the store pickup page. By default, ATP computation jobs are scheduled to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day.

However, if you have created a new rule and want to compute ATP immediately, you can run a job once by selecting the relevant option from the job's overflow menu.

Once the Store Pickup rules are create, they will be visible as rule cards in the Product and Channel or Product and Facility page as per the created rule. Each rule card provides an overview of configurations and product facility selections. Retailers can click the "Edit rule" button to modify rule configurations. The rule configuration can be adjusted by toggling the store pickup on or off.

{% embed url="https://youtu.be/X-IQvwTn_SU" %}
\
Schedule Store Pickup Rule
{% endembed %}

