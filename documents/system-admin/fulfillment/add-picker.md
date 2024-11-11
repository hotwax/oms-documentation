---
description: >-
 Discover the process of creating pickers in HotWax Commerce through CSV import or the user management app.
---
HotWax Commerce allows retailers to select pickers to streamline the process of picking orders from the shelves. As orders continuously flow in, efficient delegation of the picking items to pickers is crucial for timely processing. This delegation ensures that orders are processed promptly and accurately, contributing to customer satisfaction and retention. Furthermore, the feature facilitates incentive-based performance evaluation for pickers, motivating them to handle orders efficiently. 
Store managers can assign the picklist to picker to pick orders from the fulfillment app. The generated picklists can be printed or displayed in the picking app. Only the users with the picker role will be visible to store managers when assigning orders. Pickers can be created in two ways:

**Adding Pickers in Bulk**

1. Log in to HotWax Commerce and Navigate to the `MDM` > `EXIM` page through the Hamberger menu.
2. On the `EXIM` Page Choose `Picker` under the `Relationship` headings from the options available under `Imports` section
3. This will open an `import picker data setup` page.
4. On the `import picker data setup` page, download the sample CSV template, fill it with the required details, save the file, and upload it back into the system.

**Following field need to be added in the CSV file:**

| Field             | Description                          |
|-------------------|--------------------------------------|
| external_party_id | ID of the external party             |
| employee_id       | ID of the employee                   |
| first_name        | First name of the employee           |
| last_name         | Last name of the employee            |
| facility_id       | ID of the associated facility       |
| facility_associated | Name of the associated facility    |
| hiring_date       | Date of hiring the employee          |
| status            | 'A' for Active or 'T' for terminated|
| termination_date  | Date of termination, if applicable  |

{% embed url="https://youtu.be/3ZBxeYHPyeg" %}
Video: Adding Pickers in Bulk
{% endembed %}


**Adding Individual Pickers**

1. Navigate to the `user management app` of HotWax Commerce
2. Open the user you want to make a `Picker` or [create a new user](users/create-users.md)
3. Go to the `Fulfilment card` tap and click on `show as a picker`
4. Click on add facilities button, this will open a new form. Select the facility for which you want to add the picker.
{% embed url="https://youtu.be/6BW4Hxi08N0" %}
Video: Adding Individual Pickers
{% endembed %}

**Verify Picker** 

1.Go to the `Store Fulfillment` app within HotWax Commerce.

2.Access the Orders tab within the store `Fulfillment` application.

3.Locate the order that need to be processed, or select [orders in bulk](../../store-operations/fulfillment/fulfillment.md)

4.After selecting the desired orders we can select to pick order option to assign the picker or click on `Print Picklist` to generate the picking list.

5.Search for Picker: Search for the picker by name, `Hotwax ID`, or `external ID`. The picker's name should appear in the list menu for selection.

{% embed url="https://youtu.be/xseO7a2u4E4" %}
Video: Verification of Pickers
{% endembed %}
