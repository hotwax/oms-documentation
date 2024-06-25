---
description: >-
  Learn how to set multi-day filter in Tathya
---

# Set Multi-day Filter for Charts

The `Multi-day Filter` feature in Tathya provides retailers with flexible options to view reports on various frequencies beyond daily reports. This functionality is pivotal for retailers who must analyze their operations on different time scales, such as weekly or monthly data.

By allowing users to set custom date filters, Tathya enhances their ability to derive insights from the platform's reports for their decision-making processes. Whether it's monitoring performance over specific periods, identifying trends, or making strategic adjustments based on historical data, this feature streamlines users' workflows and amplifies efficiency in data analysis.

### Step-by-Step Usage Instructions:

1. Access the chart you wish to apply filters to within the `Tathya` Dashboard.
2. For existing charts, the date filter should be removed from the SQL query to ensure that when the user sets the filter view, the data is fetched dynamically for the chart.
3. To remove the date filter, click on the `options` overflow menu, and select the `edit chart` option. This will open a new page to edit the chart.
4. Click on the `options` menu in the `Chart Source` column located on the left and select `Edit dataset` from the options. 
5. This will open a new form, click on the lock icon to make changes, edit the query to remove the date filter, and save the changes. Finally, save the chart by clicking the save icon available at the top right.
6. Once the SQL query is updated, Look for the `Filter` icon positioned on the left side of the page. Click on it to open a sidebar, presenting options for filter configuration.
7. In the sidebar, click the `+ Add/Edit Filters` button. This action will open a new form where you can manage filters.
8. In the filter form, designate the filter type as `Time Range` and provide a descriptive name, such as `Date Filter,` to distinguish it.
9. Add relevant details such as a description for clarity and set the default filter value. For example, you can choose `Last Day` as the default value to automatically display data from the previous day when users access the chart.
10. Once all necessary details are configured, save the filter. The filter will now be available in the sidebar for selection.
11. With the filter created, choose the desired time range from the available options in the sidebar. This action will adjust the displayed data accordingly, enabling users to analyze information within the specified timeframe.

## Set Email Frequency

Setting email frequency in Tathya provides retailers with tailored email reports at their desired frequency, enabling them to efficiently monitor their daily or weekly performance and address any issues promptly. While Tathya offers various date filters for on-screen data viewing, this feature ensures that the time range for email reports remains independent.

### Step-by-Step Usage Instructions:

1. Navigate to the dashboard and choose the chart you wish to adjust. Click on the options icon at the top right corner of the chart.
2. From the options menu, select `Edit Chart.` This action will take you to a new page where you can modify the chart data.
3.  Locate the filter section in the editing interface's data column.
4. From the dropdown menu within the filter section, pick the `Error Date` column. This choice ensures that the email report focuses on error and discrepancy-related data.
5. Within the filter options, choose the time range filter and set it to display data for the desired frequency such as `Last Day.` This setting ensures the email report provides insights into the previous day's performance.
6. After configuring the filter settings, click on the `Update Chart` button to apply the changes to the chart.
7. Save your changes by clicking on the save icon. This action ensures that the configured time range for email reports is saved and applied consistently for future email communications.
