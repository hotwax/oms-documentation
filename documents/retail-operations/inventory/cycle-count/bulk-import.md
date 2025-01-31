---
description: >-
  Operations teams can now easily create and assign multiple cycle counts to
  different locations at once using the new bulk import feature.
---

# Creating Cycle Counts in Bulk

The **Bulk Import** functionality of HotWax Commerce’s `Cycle Count` app is designed to simplify the process of creating and assigning cycle counts for multiple products across multiple facilities. It allows users to create multiple cycle counts using a CSV upload which eliminates the need to create individual requests for each product or location. 

This reduces manual effort, minimizes errors, and enhances operational efficiency, especially for retailers with large store networks.

This guide explains how to create cycle counts in bulk

## Preparaing the CSV File 

The template of the CSV file is as follows:

| COUNT_NAME | FACILITY_ID | PRODUCT_SKU     | STATUS            | DUE_DATE    |
|------------|-------------|-----------------|-------------------|-------------|
| WEEK-3     | 49          | WP09-28-Black  | INV_COUNT_CREATED | 2024-11-31  |
| WEEK-3     | 49          | WSH07-28-Blue  | INV_COUNT_CREATED | 2024-11-31  |
| WEEK-2     | 159         | WP02-28-Purple | INV_COUNT_ASSIGNED| 2024-11-12  |
| WEEK-1     | 156         | WSH11-28-Orange| INV_COUNT_CREATED | 2024-10-31  |

HotWax Commerce’s Cycle Count app accepts five key fields:

1. **Count_Name**: The name of the inventory count.
    - This is a **required field**.
    - If multiple SKUs are part of the same count, repeat the count name. 
    - For example, if the user is naming a count "WEEK_3", it should be repeated for each SKU in that count.

2. **PRODUCT_SKU**: The SKU of the product requiring a cycle count.
    - This is a **required field**.

3. **Facility_ID**: The ID of the HotWax facility where the count will be assigned.
    - This is an **optional field**.
    - Blanks  the count in the 'Draft' status'.

4. **STATUS**: The status of the count.
    - This is an **optional field**.
    - The user must use:
      - `INV_COUNT_CREATED` to save the count as a draft and assign it later.
      - `INV_COUNT_ASSIGNED` to assign the count immediately.
    - Blanks create the count in the 'Draft' status'.

5. **DUE_DATE**: The due date of the count. 
    - This is an **optional field**.
    - The user must use the `yyyy/mm/dd` format.
    - Blanks create the count with no due date.

{% hint style="info" %}
- The above field names are only examples adn the user can customize the names of the fields. The app allows the flexibility to map the custom fields to the system's fields. Find how to do this in the next section.

- Count names can be repeated for different facilities. For exmaple, two facilities can have a count named week-1.

{% endhint %}

## Steps to Create Cycle Counts in Bulk:

 **1. Accessing the Cycle Count app**

* Navigate to the `Cycle Count` app from the HotWax Commerce's launchpad.
* Log in using credentials.

**2. Uploading the CSV file**

* IN the bottom right corner of the draft page, click the `+` button to initiate a new count.
* Two icons appear; Select the icon with multiple pages for a bulk import.
* On the `Draft Bulk` modal, click on the `Upload` button on the top-right to import the prepared CSV file.

**3. Mapping custom CSV fields to the systemic fields**

* Click the dropdown next to "Count name" and select your custom field for the count name.
* Repeat previous step for the other fields (Product SKU, Facility, Status, Due Date).

{% hint style="info" %}
The app allows the user to save the mappings by clicking on the `+ New mapping` button.
{% endhint %}

**4. Confirm and Upload**

* After mapping the fields, click the `Upload` button on the bottom of the screen.
* Confirm the `upload` in the popup window.

**5. Review uploaded files**

* Once uploaded, the file will appear at the bottom of the `Draft bulk` screen which can be downloaded. 
* The files will be processed within 10 minutes of the upload.

**6. Canceling Uploaded Counts**

* If the uploads have not been processed, users can cancel them by clicking the `trash-bin icon` next to the file.
