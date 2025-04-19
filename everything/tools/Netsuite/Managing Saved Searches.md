# Managing Saved Searches

The Saved Search feature allows you to create, access, and save custom searches, making it easy to find specific information and quickly access frequently used search criteria. This document explains how to create and manage saved searches.

To learn more about Saved Search from NetSuite, check out [Saved Search](https://docs.hotwax.co/documents/learn-netsuite/integration-tools-and-methodologies/savedsearch).

## Create a New Saved Search

### Steps:

1. Open the main menu. Go to the **Lists** section.
2. Select **Search** from the dropdown options.
3. Hover over **New** and select it to open the *New Saved Search* page.

## Choose Search Type

On the *New Saved Search* page, you will see multiple search types. Select the appropriate search type based on the data you require, for example:

| Search Type | Data Type        | Examples                             |
|-------------|------------------|--------------------------------------|
| Transaction | Financial Data   | Invoices, Payments, Sales Order, Purchase Orders |
| Entity      | Records of Business Relationships | Customer, Vendor, Employee |
| Item        | Inventory Data   | Inventory, Products, or Service Items |

Once you've selected your desired search type, follow these steps to create a new search:

1. **Search Title**  
   * Enter a title that is both clear and descriptive, making it easy for others to recognize the associated record type.

2. **Public Checkbox**  
   * If the Saved Search is useful for other users to retrieve data, make it **PUBLIC**.  
{% hint style="info" %}
Do not make it **PUBLIC** if an important process (like a SuiteScript that exports data externally) depends on it.
{% endhint %}

3. **Criteria Tab**  
   - Go to the *Criteria* tab to filter and customize your search.  
   - Select the *Standard* subtab to apply filters based on your search requirements.

   - **Set Description:**
       - After selecting a filter, click the icon to set the description.
       - A pop-up will appear with multiple options for defining how the field should be filtered.
       - Specify the description, then click **Set** to apply the changes.

   - **Insert or Remove a filter (Optional):**
       - To insert a filter: click **Insert** under a pre-existing filter.
       - To remove a filter: click **Remove** below that filter.

4. **Results Tab**
   - Go to the *Results* tab to select columns for the search results and set sort order.

   - **Apply Sorting (Optional):**
       - Set **Sort By** for the primary sorting field.
       - Use **Then By** for secondary and tertiary sorting fields.

   - **Add or Edit Field:**
       - Click **Add Row** to add a new field.
       - Select the appropriate field from the dropdown.
       - Click **OK** to confirm.

   - **Arrange the Column Order:**
       - Use **Move Up** or **Move Down** to change column order.
       - Use **Move to Top** or **Move to Bottom** for quick reordering.

5. **Save & Run the Search**
   - Click **Save** or **Save & Run** to apply changes.

6. **Preview and Download Results**
   - Use **Preview** to review or reset changes before finalizing.
   - At the top of the results page, click the **CSV**, **Excel**, or **PDF** icons to export.

## Access a Saved Search

To access specific data based on predefined filters and criteria:

### Steps:

1. **Navigate to Saved Searches**
   - From the main menu, select **Lists > Search > Saved Search**.
   - A page displaying all saved searches will appear.

2. **Adjust the View**
   - Modify the display of listed searches using the dropdown near the **View** button.

3. **Filter and Find a Saved Search**
   - Expand the Filters section by clicking **(+)**.
   - Use the **Type** filter to narrow the list by record type (e.g., “Transactions”).

4. **Edit and View Options**
   - Each saved search offers two options:
     - **Edit**: Modify the saved search (same steps as creating one).
     - **View**: Open the saved search without making changes.

Following these steps allows you to easily create and access saved searches for data retrieval.

To learn more, visit [Oracle's Documentation on Saved Searches](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N675442.html).


