---
description: >-
  This page explains how retailers use product tags and facility groups in
  HotWax Commerce to manage inventory and order fulfillment across multiple
  sales channels, including setting up Available-to-Pro
---

# Concepts

## Product Tags

Product tags are labels or keywords that retailers use to categorize and organize their products. These tags can help classify products based on various attributes such as type, season, brand, or other custom criteria. For example, a retailer might use tags like `summer collection`, `new arrivals`, or `clearance` to manage and track specific groups of products easily. Tags simplify inventory management and allow retailers to quickly identify and apply specific rules to products across their catalog.

In HotWax Commerce, product tags play a crucial role in creating Available to Promise (ATP) rules. Instead of manually configuring ATP settings for each product individually, especially for large catalogs, HotWax Commerce leverages product tags to streamline the process. Since retailers typically use product tags in Shopify to manage their product listings, HotWax Commerce syncs these tags from Shopify and uses them to apply ATP rules efficiently.

For example, a retailer may want to ensure that products tagged as `clearance` are not available for store fulfillment, or that `new arrivals` have specific safety stock thresholds across all stores. By using tags, retailers can configure these rules once and apply them consistently to all products that share the same tag, saving time and ensuring accurate inventory management across channels.

## Facility Groups

Facility groups are collections of multiple facilities organized together for specific business purposes, enabling businesses to manage and utilize their facilities more effectively. A common use of facility groups is to define which facilities participate in online order fulfillment. For instance, warehouses are typically involved in fulfilling online orders, and in an omnichannel setup, stores can also participate in this process. However, not all facilities are involved in store-based fulfillment. By using facility groups, businesses can clearly specify which stores and warehouses handle online order fulfillment. Two types of facility groups are commonly used when syncing inventory with Shopify or other online sales channels.

#### Pickup Group

Facilities that fulfill `BOPIS` (Buy Online, Pick Up In Store) orders require a designated staging area for efficient processing, as same-day pickups demand immediate picking and packing. Only facilities capable of handling `BOPIS` orders should be included in this group.

In HotWax Commerce, each facility group has a type, and business rules are tied to the group type. For `BOPIS`, a default **`PICKUP`** facility group is pre-configured when you start setting up HotWax Commerce and you don't need to create this group. Retailers must add all facilities they want to enable for `BOPIS` to this group. Once included, these facilities will be available as pickup options for customers on the Shopify product detail page (`PDP`).

Facilities can be added to this group in multiple ways:

* From the `Group` page of the `Facility App`
* You can also add the facilities to this group by turning on the toggle for `Allow Pickup` in the `Fulfillment settings` card on the `Facility Details` page in the `Facilities App`.
* Alternatively, for a more centralized experience, you can add the facilities to this facility group from the `Facilities` tab of the `Store Pickup` page in the `ATP App`.

{% hint style="info" %}
All facilities in this group can be viewed on the `Facility Groups` page in the `Facilities App` or through the `Facilities` tab of the `Store Pickup` page in the `ATP App`.
{% endhint %}

#### Channel Facility Groups

This facility group is created to determine whether a facility will participate in selling its inventory online. If a facility is capable of fulfilling online orders and wants to sell its inventory online, it can be added to a facility group with the **`CHANNEL FAC GROUP`** type. If a facility does not want to sell its inventory online, it can be excluded from the group. When calculating the unified online `ATP` for a Shopify store or any online sales channel, only the inventory of facilities in this group will be considered.

Unlinke `PICKUP` group, the facility group of type **`CHANNEL FAC GROUP`** is not by default available in HotWax Commerce, so it must be created either through the `Facilities App` on the `Facility Group` page or via the `Inventory Channel` page in the `ATP App`.

Once the Facility Group is created, the facilities can be added to this group in multiple ways:

* From the `Group` page of the `Facilities App`
* You can add individual facilities by turning on the `Sell Inventory Toggle` in the `Facility Details` page of the `Facilities App`.
* Alternatively, for a more centralized experience, you can add facilities from the `Channels` tab on the `Inventory Channel` page of the `ATP App`.

{% hint style="info" %}
Facility groups created in the `Facilities App` with the **`CHANNEL FAC GROUP`** type will be visible on the `Inventory Channels` page, and vice versa.
{% endhint %}

{% hint style="info" %}
Each facility group for online fulfillment can be linked to a Shopify store. The `Publish` tab on the `Inventory Channel` page of the `ATP App` allows you to specify the inventory of which facility group will be synced to which Shopify store.
{% endhint %}

## Inventory Channels

Suppose a retailer sells inventory across different channels, such as different Shopify Stores and third-party marketplaces. In that case, they need to create separate **Inventory Channels** in HotWax Commerce to manage the availability and fulfillment of inventory for each channel. Each **Inventory Channel** is tailored to a specific sales channel, ensuring that inventory is accurately tracked and synchronized to specific sales channel.

### Components of an Inventory Channel

In HotWax Commerce, when you create an inventory channel, internally it creates two componenets:

1. **Facility Group**: This is the Channel facility Group that we previously discussed. This channel defines the inventory of which facilities will be pushed to which inventory channel.
2. **Configuration Facility**: This virtual facility enables network-level Product ATP (Available-to-Promise) configurations, including setting thresholds and suppressing products from store pickup and shipping.

These components work together to ensure that inventory is allocated and managed according to the specific needs of each sales channel. You will gain a deeper understanding of how these components work when creating safety stock and threshold rules and suppressing products for store pickup and shipping from facilities and channels.

### Facility Groups and Online Sales Participation of Facilities

As previously mentioned, the "CHANNEL FAC GROUP" is used to configure which facilities will participate in selling their inventory online. When calculating the unified online ATP for a Shopify store or any other online sales channel, only the inventory from facilities within this specific group is considered. This setup enables retailers to control which facilities are responsible for fulfilling orders for specific channels.

For instance, a Canadian retailer may operate 2 Shopify stores—one for the US and one for Canada. The retailer also has a mix of 3 physical stores and 2 warehouses all located in Canada. Each Shopify store requires different inventory sources for order fulfillment:

* The US Shopify store is fulfilled exclusively from 2 warehouses located in Canada.
* The Canada Shopify store fulfills orders from both 2 warehouses and 3 physical stores in Canada.

If both Shopify stores were using all warehouses and stores for fulfillment, a single facility group would be sufficient. However, since in this case inventory source for both the Shopify stores is different, separate facility groups must be created for each: one for the US Shopify store, including only the 2 warehouses, and another for the Canada Shopify store, including all 5 facilities.

This configuration ensures that the correct inventory from the appropriate facilities is available for each online sales channel, optimizing inventory synchronization and reducing the risk of overselling or inventory discrepancies.

### Configuration Facility and Network-Level Product Settings

The Configuration Facility is a virtual facility designed to manage product-level threshold  across the network. It is also useful when creating store-pickup and shipping rules, allowing retailers to suppress the fulfillment of certain products from specific channels or locations. Not every product in the catalog should be available for shipping or BOPIS from stores. For example, special product launches or exclusive items may only be sold in-store. Retailers can disable store fulfillment or online inventory for select products from chosen channels and locations, providing granular control. This network-level approach ensures that orders are allocated efficiently and strategically across all relevant sales channels.

For more detailed instructions on how to create multiple Channel Facility Groups and Configuration Facilities in HotWax Commerce, please refer to our detailed [user manual](create-channel.md).
