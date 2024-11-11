---
description: >-
  This document provides a step-by-step guide for setting up and managing
  inventory channels in HotWax Commerce to efficiently allocate ATP inventories
  across various sales platforms.
---

# Create channel

Retail brands sell products across various channels, including offline stores, marketplaces, social media, and their own websites. However, challenges arise when dealing with diverse platforms, each with its own set of rules and penalties. For instance, marketplaces like Amazon impose charges for delayed fulfillment or rejected orders. To mitigate risks and ensure efficient inventory management, retail brands often choose to allocate separate Available-to-Promise (ATP) inventories for each sales channel. This approach minimizes the likelihood of overselling across different channels.

In this user manual, we will learn how to set up channels, add facilities catering their inventory to those channels, and configure facilities or create new configuration facilities for the channels.

## Create a New Channel in HotWax Commerce

#### Accessing Available to Promise App

1. Go to the launchpad.
2. Log in with your credentials.
3. Click on the Available to Promise app.

#### Opening Inventory Channels

1. In the left-side menu bar, click on `Inventory Channels` to view all existing channels

#### Creating a New Channel

1. Click on the blue plus button at the bottom right of the page. A `Create Channel Group` window will appear.
2. Enter the name of the Inventory Channel. The ID will auto-populate with the same name as the channel.
3. Write a description for the channel to describe the intent and function for the channel.

## Configure the Channel Group

1. To create a new group level configuration, click on the `Create New` option in the dropdown menu of the group level configuration. A new configuration will be created and added to that channel.
2. To add an existing group, select the existing group from the dropdown menu.

For details on adding thresholds to the channel, refer to this [user guide](https://docs.hotwax.co/analytics/reports/reorder-limit#setting-reorder-limits).

## Link Facilities

#### Link Facilities to the Channel

1. Click on the `Options` button in the `Facilities` section. A `Link Facilities` window will open.
2. Check the checkboxes of the facilities you want to add to the channel.

#### Changing the Configuration Facility for the Channel

1. Click on the `Options` button in the `Config Facility` section to change the configuration facility.

#### Editing Group Title and Description

1. Click on the `Edit Group` blue text at the bottom left of the channel card.
2. Edit the title and description as needed.

{% embed url="https://youtu.be/7HdqT4wV_Hc" %}
Create channel
{% endembed %}

## Pushing Inventory

The ID of this channel can then be used to push the inventory to the specified marketplace. For instance, if you create a channel named `Amazon` and link four facilities to it, the ID of this channel will be associated with the job that pushes the inventory to Amazon. For more details on how to set up different inventory levels for different channels, read our detailed [user manual.](multichannel-inventory-setup.md)
