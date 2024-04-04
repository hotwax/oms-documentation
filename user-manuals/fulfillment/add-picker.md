---
description: >-
  Detailing the creation of pickers through either CSV import or the user management app for streamlined order processing in HotWax Commerce.
---
HotWax Commerce allows retailers to select pickers to streamline the process of picking orders from the shelves. As orders continuously flow in, efficient delegation of the picking items to pickers is crucial for timely processing. This delegation ensures that orders are processed promptly and accurately, contributing to customer satisfaction and retention. Furthermore, the feature facilitates incentive-based performance evaluation for pickers, motivating them to handle orders efficiently. 
Store managers can assign the picklist to store associates to pick orders from the fulfillment app. The generated picklists can be printed or displayed in the picking app. Only the users with the picker role will be visible to store associates when picking orders. Pickers can be created in two ways:

Adding Pickers in Bulk

1. Log in to HotWax Commerce and access the `Sales Dashboard`.
2. Navigate to the `MDM` > `EXIM` page through the Hamberger menu.
3. On the EXIM Page Choose Picker under the `relationship` headings from the options available under `Imports` section
4. This will open an import picker data setup page.
5. On the import picker data setup page, download the sample CSV template, fill it with the required details, save the file, and upload it back into the system.
{% embed url="https://youtu.be/3ZBxeYHPyeg" %}
Video: Reject outstanding orders in bulk
{% endembed %}

Following field need to be added in the CSV file

| Field             | Description                          |
|-------------------|--------------------------------------|
| external_party_id | ID of the external party             |
| Employee Id       | ID of the employee                   |
| first_name        | First name of the employee           |
| Last Name         | Last name of the employee            |
| facility_id       | ID of the associated facility       |
| Facility Associated | Name of the associated facility     |
| hiring_date       | Date of hiring the employee          |
| Hiring Date       | Date of hiring the employee          |
| status            | 'A' for Active or 'T' for terminated|
| termination_date  | Date of termination, if applicable  |
| Date of Termination if any | Date of termination, if applicable  |


Adding Individual Pickers

1. Navigate to the `user management app` of HotWax Commerce
2. Open the user you want to make a Picker or create a new user
3. Go to the Fulfilment card tap and click on “show as a picker”
4. Add the picker to the facility.
{% embed url="https://youtu.be/6BW4Hxi08N0" %}
Video: Reject outstanding orders in bulk
{% endembed %}

How to verify that pickers have been added or not: 

Navigate to Store Fulfillment Application: Go to the store fulfillment application within HotWax Commerce.

Open Orders Tab: Access the Orders tab within the store fulfillment application.

Select Orders for Processing: Locate the orders that need to be processed and select them.

Print Picklist: After selecting the desired orders, click on "Print Picklist" to generate the picking list.

Search for Picker: Search for the picker by name, Hotwax ID, or external ID. The picker's name should appear in the list menu for selection.
{% embed url="https://youtu.be/xseO7a2u4E4" %}
Video: Reject outstanding orders in bulk
{% endembed %}
