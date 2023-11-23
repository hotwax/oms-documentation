# Order Allocation and Fulfillment

If the facility where an item is allocated uses NetSuite for fulfillment, usually a warehouse, then the OMS syncs those items' allocation with NetSuite.

It's important to remember that if items are not allocated to a "NetSuite Facility" their allocation is not synced to NetSuite until after fulfillment is complete.


## Sync Allocation to NetSuite
Schedule a job in the HotWax Commerce integration layer to generate a fulfilled order item feed for NetSuite.

{% hint style="warning" %}
    To change this job's frequency, connect with the integration team.
{% endhint %}

**SFTP Location**
```
/home/{sftp-username}/netsuite/salesorder/update
```

Schedule a SuiteScript in Netsuite to consume the fulfilled order feed from HotWax.

**SuiteScript to import NetSuite fulfillment item allocations**
```
HC_SC_UpdateSalesOrders
```

<!-- Sync Order Rejection -->


## Sync Order Fulfillment from NetSuite

Schedule a SuiteScript for exporting fulfilled order items from NetSuite.
```
HC_MR_ExportedSalesOrderFulfillmentCSV
```

Enable a transformation job in the HotWax integration layer to convert the feed into the HotWax fulfilled order item format.

Schedule job to import fulfilled order items into HotWax
```
Order Item Fulfillment
FTP Config: IMP_ODR_ITM_FLFLMNT
```

{% hint style="success" %}
NetSuite fulfilled order items are now completed in Hotwax
{% endhint %}


## Sync Order Fulfillment to NetSuite

Enable jobs in the HotWax Integration layer to export a feed of fulfilled order items from HotWax.

Check fulfilled feed at SFTP location
```
/home/{sftp-username}/netsuite/fulfilledsalesorder/export
```

Schedule SuiteScript in NetSuite to consume fulfillment from HotWax
```
HC_SC_CreateItemFulfillment
```

{% hint style="success" %}
HotWax fulfilled order items are now completed in NetSuite
{% endhint %}
