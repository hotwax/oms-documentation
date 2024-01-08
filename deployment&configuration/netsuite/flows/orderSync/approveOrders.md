# Approve Orders

Scheduled jobs in HotWax Commerce validates order items and marks them "Approved" in a multi-step process.

## Add attributes
HotWax internally adds an order attribute, "NETSUITE_ORDER_EXPORTED", to these orders. 

Schedule a job in the integration layer exports these orders into a CSV
{% hint style="warning" %}
    To change this job's frequency, connect with the integration team.
{% endhint %}

SFTP file locations of orders where "NETSUITE_ORDER_EXPORTED" should be added.
```
/home/{sftp-username}/hotwax/ApproveOrderAttributes
/home/{sftp-username}/hotwax/ApproveOrderAttributes/archive
```

Schedule the following Job from the Orders page in the Job Manager app to apply the order attributes to orders.
```
Import order attribute
FTP Config: MOD_ORD_ATTR
```

{% hint style="success" %}
The 'NETSUITE_ORDER_EXPORTED' attribute has now been added to orders.
{% endhint %}


## Approve Orders with Attributes

Schedule the job that checks for orders that have this attribute added to them and internally hands them off for approval in the OMS. 

This job is also in the NetSuite integration layer so it cannot be modified from the Job Manager app.

{% hint style="warning" %}
    To change this job's frequency, connect with the integration team.
{% endhint %}

SFTP locations where the file of validated orders is located
```
/home/{sftp-username}/hotwax/ApproveOrderAttributes
/home/{sftp-username}/hotwax/ApproveOrderAttributes/archive
```

Schedule a job in HotWax which consumes this file and approves orders in the file.
```
Approve Sales Order
FTP Config: IMP_APR_SALES_ORD
```
{% hint style="success" %}
Orders have now been approved and will be brokered for fulfillment.
{% endhint %}