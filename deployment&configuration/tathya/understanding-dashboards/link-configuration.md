## Link Configuration Feature in Tathya

The Link Configuration feature in Tathya offers users the ability to embed clickable links within charts generated in Superset, facilitating seamless redirection from the Dashboard page. Users can navigate to relevant pages within the HotWax Commerce platform directly from the Superset Dashboard, eliminating the need to switch between multiple tabs or applications. This saves time and improves overall productivity. Users can set up link configuration in two ways:

### Method 1: Using the Raw Records Section in Charts

1. **Locate and Edit the Chart:**
   - Locate the chart in which you want to configure the links. Click on the ellipses on the right of the chart and select Edit chart.

2. **Set Query Modes and Configure Columns:**
   - Select the Query Modes as Raw Record in the Data section. Navigate to the Columns Section to configure the columns of your chart in Superset.

3. **Add a New Column:**
   - Click on the Add Column option to initiate the creation of a new column.

4. **Customize Link with Custom SQL:**
   - Upon clicking, you'll encounter a model with three sections: saved-columns, Simple columns, and Custom SQL. Click on Custom SQL and paste the link specifying the targeted link and the source column. For example, if you want to create a link for facility ID, you need to create the link similar to this:

    ```sql
    CONCAT('<a href="',
           CONCAT("https://{Instance-name}.hotwax.io/commerce/control/Page ", facility_id)
           ,'" target="_blank">', facility_id, '</a>')
    ```

   - The CONCAT Function is used to generate HTML code for creating a hyperlink dynamically based on the facility_id for the above example. The concat function follows the following pattern:
     - `<a href="`: Static part of the anchor tag indicating the start of a hyperlink.
     - `CONCAT("https://{{instance_name}}/commerce/control/ViewFacility?facilityId=", facility_id)`: Dynamically generates a URL by concatenating a static URL template with the facility_id. here facility_id is a column name which is included in link.
     - `'" target="_blank">`: Static part of the anchor tag specifying that the link should open in a new tab or window.
     - `facility_id`: Value inserted into the anchor tag as visible text.
     - `</a>`: Static part of the anchor tag indicating the end of the hyperlink.

5. **Edit Column Header:**
   - Afterward, you can edit the header, which serves as the label for your column.

### Method 2: Using Aggregates Section in Charts

1. **Set Query Mode and Configure Columns:**
   - Select the Query Mode as Aggregate in the Data section. Navigate to the Columns Section to configure the columns of your chart in Superset.

2. **Add a New Column:**
   - Navigate to the Metrics Section and Click on the Add Column option to initiate the creation of a new column.

3. **Customize Link with Custom SQL:**
   - Upon clicking, you'll encounter a model with three sections: Saved-columns, Simple columns, and Custom SQL. Click on Custom SQL and paste the SQL specifying the targeted link and the source column.

4. **Edit Column Header:**
   - Edit the header, which serves as the label for your column in the chart.

By following these steps, users can effectively configure the Link Configuration feature within Tathya, enhancing their data visualization capabilities and workflow efficiency.
