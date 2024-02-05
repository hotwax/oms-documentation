# Additional Configurations

Once you have established the connection, you can check the “Advance” tab to access additional settings. These allow you to fine-tune various aspects of the database connection.

The two important configurations here are **SQL Lab and Performance**:

## SQL lab
Enable “Expose database in SQL Lab” to make the database available in SQL Lab and Enable “Allow this database to be explored” to allow database exploration and interaction.

## Performance
Set the CHART CACHE TIMEOUT. This is a configuration parameter related to how Tathya caches (stores temporarily) the results of chart queries. Caching is a technique used to improve performance by storing and reusing previously fetched data.

{% hint style="info" %}
The recommendation is to configure the "CHART CACHE TIMEOUT" value to be at least 500 seconds (or 8 minutes) to prevent the display of outdated or repetitive data in your charts. This means that once a chart is generated and cached, it will be considered valid and displayed without re-querying the data for at least 500 seconds.
{% endhint %}

Save the configured settings to establish the connection between Tathya and your MySQL database.

Now, proceed to click on the "Test Connection" button to ensure that Tathya can successfully connect to your MySQL database. Address any issues that arise.

Once the test is successful, click "Save" to confirm the configuration and finalize the setup.

Now, you can use the configured MySQL database for data exploration in Tathya.

{% hint style="warning" %}
Databases are configured once for a project.
{% endhint %}