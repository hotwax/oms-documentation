# Database Configuration

Tathya is a data exploration and visualization platform that lets users connect to various data sources, explore data, and create interactive dashboards.

Tathya itself doesn't have a storage layer to store your data but instead pairs with your existing SQL-speaking database or data store. So, to be able to query and visualize data from Tathya, you first need to add the connection credentials of your database.

{% hint style="warning" %}
Skip this step if you want to create charts for a project that has a pre-configured database.
{% endhint %}

## Setup your database

Login into Tathya with your credentials, now on the homepage go to the top right corner, go to settings and click on the "Data" menu to access the data source configuration.

In the "Data" menu, select "Databases" to manage your database connections. Click on the "+" button to initiate the setup process.

From the resulting modal “connect a database”, select the type of database you are connecting to (e.g., MySQL, PostgreSQL, SQLite).

We usually use the MySQL database type, once selected in the next step you have to enter the essential connection details and credentials to establish a connection with the MySQL server.

The required MySQL credentials includes the following fields:

### Host

The "host" refers to the network address or hostname of the MySQL server where your database or data source is located. It is the address that Tathya will use to reach the database.

{% hint style="info" %}
For example, if the database is hosted on a MySQL server with the IP address 172.20.20.40, that would be the host.
{% endhint %}

### Port

The "port" is a specific endpoint on the host machine. The port number is essential for Tathya to know where to communicate with the database service.

{% hint style="info" %}
Different types of services use different default ports, the default port for MySQL is 3306.
{% endhint %}

### Database Name

The “database name” is the name of the specific MySQL database you want to connect to.

### Username and Password

The “username and password” are associated with the account you want to use for the connection.

### Display Name

The “display name” is how the database will display in Tathya.

Choose a descriptive name for the connection. For example, if a project were named Wasatch Ski, the display name should be “Wasatch Ski OMS”

{% hint style="info" %}
Database configuration details are usually maintained by the DevOps team so connect with them for any additional information.
{% endhint %}

{% hint style="success" %}
You're now ready to connect your database. Click “Connect” in the modal to proceed.
{% endhint %}