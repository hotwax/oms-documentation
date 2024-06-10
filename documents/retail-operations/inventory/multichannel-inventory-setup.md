---
description: >-
  Efficiently manage inventory across multiple sales channels with HotWax
  Commerce's Facilities App.
---

# Multichannel inventory setup

Managing inventory across multiple sales channels is crucial for retail brands to avoid overselling, and ensure efficient order fulfillment. HotWax Commerce addresses this challenge by introducing the capability to manage multiple Available-to-Promise (ATP) inventories for each sales channel. This feature allows retail brands to allocate separate inventories for different channels, minimizing the risk of penalties for delayed fulfillment or overselling.

With the `Facilities App` in HotWax Commerce, retail brands can create distinct `Sales Channel Groups` for each sales channel. Facilities like warehouses and retail stores can be assigned to specific groups, enabling brands to control which inventory from which location is available for sale on each channel. This capability streamlines inventory management, reduces operational complexity, and enhances workflow efficiency for retail brands operating in diverse sales environments.

**Step-by-Step Usage Instructions:**

1. **Access Facility Group Page:**
   * Log in to the `Facilities App` from the Launchpad.
   * Navigate to the `Facility Group` [page](../../system-admin/administration/facilities/manage-groups.md) within the `Facilities App`.
2. **Create New Group:**
   * Scroll to the bottom of the page and click on the `Create group` button to create a new group for the sales channel you want to set up inventory.
3. **Enter Group Details:**
   * Fill in the required details such as `Name`, `Internal ID of the Facility Group`, and `Description`.
   * Select the system group type as `Online Facility Group` to indicate that this facility group would be used to sell inventory on online channels. The facility groups with the `Online facility Groups` type are also visible in the `sell online` card on the `facility details` [page.](../../system-admin/administration/facilities/configure-fulfillment.md)
4. **Save Group:**
   * Click on the `+` icon to save the newly created inventory group.
5. **Quick Edit Facilities:**
   * Once the facility is created, click on the number displayed on the facility card corresponding to the created group.

<figure><img src="../.gitbook/assets/facilities.hotwax 8.png" alt=""><figcaption></figcaption></figure>

* Select `Quick Edit` to efficiently manage facilities associated with this group.

6. **Add Facilities:**

* Add all relevant facilities to the inventory group you want to include for selling inventory on the chosen channel.
* Facilities can also be added from the `Facility Details` page by turning on the toggle for that channel in the `sell online` card, which will automatically add that facility to the online facility group of that channel.

7. **Navigate to the Job Manager App:**

* Access the `Job Manager` app from the Launchpad.

8. **Select Channel:**

* Select the desired channel, such as Shopify or Amazon from the quick switcher located at the left bottom of the page.

9. **Schedule Inventory Synchronization Jobs:**

* HotWax Commerce has [two inventory synchronization jobs](../job-workflows/inventory.md) : `Hard Sync` and `Upload Recent Inventory Changes`.
* Schedule both jobs by specifying the Facility's internal ID in the `facilityGroupId` parameter.
* This ensures that the inventory for the chosen channel is updated according to the `facilities` added to the corresponding `facility group`.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_inventory.png" alt="" width="375"><figcaption><p>Sync Inventory</p></figcaption></figure>

By following these steps, users can efficiently set up multi-channel inventory management within HotWax Commerce, enabling seamless synchronization of inventory across various online sales channels.

{% hint style="info" %}
Whenever a new facility is added to an existing online facility group, the Hard Sync job needs to be scheduled to ensure that inventory of that facility is added to the ATP of that sales channel
{% endhint %}

***
