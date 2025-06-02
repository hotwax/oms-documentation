# Reindex Order after Solr Down Time

The order status discrepancy between the find Order page and vieworder page is likely due to an issue with Solr indexing, which can occur if the Solr instance is down when the order status is updated.

## **Steps to Resolve**

### **1. Access WebTools**

1. Go to the WebTools for your OMS instance using the provided sample link:\
   https://{instanceName}.hotwax.io/webtools/control/ServiceList

### **2. Run Service to update order indexing on Find Order page.**

To index the updated status of the order when the solr is down or by any reason the indexing is not done on the find order page we need to run **createOrdersIndexFromStatus** service.

1. Locate the service: **createOrdersIndexFromStatus**.
2. In the service input parameters, set the following:
   * **statusFromDate**: Specify the start date/time for the range.
   * **statusToDate**: Specify the end date/time for the range.
   * **persist** : `false`.
3. Execute the service.

{% hint style="info" %}
Time Format: `yyyy-MM-dd HH:mm:ss` Example: 2024-01-01 14:00:00
{% endhint %}

### **3. Run the Service to create orderItemShipGroup reservation**

If you want to create a reservation in the order item ship group inventory reservation entity, you need to run the **createOISGIRIndexes** service

4. Locate the service: **createOISGIRIndexes**.
5. In the service input parameters, set the following:
   * **reservedDateFrom**: Specify the start date/time for the range.
   * **reservedDateTo**: Specify the end date/time for the range.
   * **persist**: `false`.
6. Execute the service.

### **4. Verify Indexing in OMS**

1. In the OMS application, go to the `Find Order` section.
2. Use the previously noted order ID to search for the order.
3. Confirm the order appears with the updated status.
   * Check if the status changes are indexed correctly.
   * Verify that no errors occurred during the process.

{% hint style="info" %}
* If the order is not indexed:
  * Confirm that the statusFromDate and statusToDate parameters cover the time range of the status update.
  * Check the Service Engine logs for errors or warnings during the execution.
  * Verify that the Webtools status update was saved correctly.
* If errors persist, escalate the issue to the technical team with the following details:
  * Order ID.
  * Service Engine logs.
  * Time range used for indexing.
{% endhint %}
