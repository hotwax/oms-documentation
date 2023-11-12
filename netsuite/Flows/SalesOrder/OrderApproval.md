# Order Approval
Orders that are in "Created" status in HotWax Commerce are pushed to Netsuite rather than orders that are in "Approved" status. It's important to note the rationale behind this decision.


Initially, we attempted to synchronize approved orders from HotWax Commerce to Netsuite. However, this posed challenges when dealing with orders that contained both available and unavailable inventory items for fulfillment. In such cases, only a partial order could be pushed to Netsuite, causing complications. If the order was partially fulfilled in Netsuite due to certain available items, a subsequent attempt to send the remaining items led to conflicts. Netsuite recognized the initial order as complete and did not accept the remaining partial order, causing system errors and duplication.


To circumvent such complexities and ensure a seamless process, a strategic shift was made. Orders, upon their creation within HotWax Commerce, are designated as "Created" status. It is at this phase that critical order information is captured and assembled into CSV files for transmission to Netsuite. By choosing the "Created" status for order synchronization, HotWax Commerce retains control of the integration process and its sequence of interactions with Netsuite, enhancing accuracy and mitigating errors that arose from attempts to synchronize orders in an "Approved" status.

## Synchronize Customers from HotWax Commerce to Netsuite
To successfully create a sales order in Netsuite, it is a prerequisite to have the customer information pre-existing within Netsuite's database. If the order contains a new customer not present in Netsuite, the system won't allow the order to be pushed. Therefore, it's vital to synchronize customer data from HotWax Commerce to Netsuite before order creation.

Actions:
A scheduled job in HotWax Commerce operates at defined intervals to generate a CSV file comprising customers who have not been synchronized to Netsuite. This job can be configured to run at regular intervals, typically set at an hourly frequency. Customers who haven't been synchronized within the last hour are included in this CSV file for synchronization with Netsuite.


A Scheduled Script in HotWax Commerce is responsible for downloading the CSV file of customers not yet synchronized and utilizes the ImportTask function of the N/Task module. This script processes and creates customer records within Netsuite, ensuring that the necessary customer information is available in Netsuite for order creation.


<!-- page links -->
