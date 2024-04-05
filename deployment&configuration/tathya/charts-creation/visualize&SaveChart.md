# View your Created Chart

You will now be redirected to the “Main Chart Panel” where your chart is ready to view.

{% hint style="info" %}
When creating charts using SQL queries, Tathya by default provides visualization in a “table” format, but you can customize it based on your requirement.
{% endhint %}

## Data Visualization

Navigate to the "data" tab. This is where you can transform the query results into a visual representation.

Here you will encounter two options under the "Data" tab, specifically under the "QUERY MODE" section: "Aggregate" and "Raw Records." These options determine how the data is processed and presented in the resulting chart. Let's delve into each option:

**Aggregate Mode** Aggregate mode is used when you want to perform aggregate functions (e.g., COUNT, SUM, AVG) on your dataset. It is suitable for summarizing and visualizing data at a higher level.

- **Aggregation Functions** Allows you to apply aggregation functions to your selected columns. For example, you can count the number of records, calculate the sum of a numeric column, or find the average.
  
Aggregate mode is commonly used when creating charts like bar charts, pie charts, or line charts where you want to visualize summarized information.

**Raw Records Mode** Raw Records mode is used when you want to retrieve individual, unaggregated records from your dataset. It provides a detailed view of each record.

- **No Aggregation Functions** Does not require the use of aggregation functions. The query retrieves raw, unprocessed records from the specified columns.

Raw Records mode is useful when you need a detailed, record-level view of the data. It's suitable for creating charts that display individual data points without summarization.

**How the Raw Mode works:**

- **Column Names** The column names in your SQL query result set become the headers or fields in the table. Each column in the result set is mapped to a corresponding column in the visualization.
  
- **Data Types** Tathya attempts to infer the data types of each column based on the values in the result set. This helps in appropriately formatting and displaying the data.

- **Automatic Table Creation** When you execute the query in "Raw Records" mode, Tathya automatically creates a table or chart with the mapped columns, displaying the individual records retrieved by the query.

- **Dynamic Mapping** The mapping is dynamic, meaning that if your SQL query result set structure changes (e.g., adding or removing columns), Tathya adjusts the mapping accordingly when you execute the query.

- **No Aggregation** Since "Raw Records" mode is focused on displaying individual records without aggregation, each row in the result set is treated as a separate data point.

## Configure Additional Chart Settings

You also have additional configurable options such as Filters, Ordering, and Row Limit.

- **Filters** Filters allow you to narrow down the rows displayed in your result set based on specific conditions. You can filter the data to show only rows that meet certain criteria.

- **Ordering** Ordering allows you to sort the result set based on one or more columns. You can specify the order (ascending or descending) for each column.

- **Row Limit** Row Limit allows you to control the number of rows displayed in the result set. This is particularly useful when dealing with large datasets, allowing you to view a manageable subset of the data.

{% hint style="info" %}
Be cautious when using row limits, especially when conducting analysis or reporting. Setting a too-low limit might lead to incomplete insights, and it's essential to balance performance considerations with the need for comprehensive data.
{% endhint %}

### Optimizing Queries for Specific Results

In your SQL queries, you can write specific details and conditions to retrieve data that matches your requirements without the need for additional filters in the chart.

For example, you can use the WHERE clause in your SQL queries to filter data at the database level before it even reaches Tathya. This can be more efficient as it reduces the amount of data transferred between the database and Tathya.

Similarly, you can use ORDER BY in your SQL queries to specify the sorting order of the results, and LIMIT to control the number of rows returned.

Writing precise and optimized SQL queries can streamline the data retrieval process, ensuring that the results align with your expectations without relying heavily on post-processing in the visualization chart.

Adjust other settings such as colors, labels, and tooltips as needed from the “Customize” option, present right next to the data tab.

{% hint style="info" %}
You can also choose the type of chart that best suits your data. (e.g. A Line Chart can be ideal for displaying trends over time, a Bar Chart can be useful for comparing values across different categories, a Pie Chart can be effective for illustrating parts of a whole.)
{% endhint %}

For example, if you choose a Line Chart, specify the columns you want on the x-axis and y-axis. the date might be on the x-axis, and total sales on the y-axis.

**Once you have made the required modifications, click on “Update chart”.**

# Save and Share your Chart

In the top-left corner, give your chart a descriptive name for easy identification within Tathya.

Navigate to the top-right corner and click on the "SAVE" button. A Save Chart panel will appear with the Chart Name field auto-populated.

After saving, find your chart in the Charts tab for quick access.

{% hint style="info" %}
## Additional Tips:

- Experiment with different chart types to find the most effective representation for your data.
  
- Utilize filters and additional SQL clauses for more refined queries and visualizations.

- Leverage Tathya’s advanced features like dashboard linking and custom CSS for enhanced customization.
{% endhint %}