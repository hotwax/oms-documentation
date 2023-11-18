# Approve Orders

Scheduled jobs in HotWax Commerce validates order items and marks them "Approved" in a multi-step process.

## Add attributes
HotWax internally adds an order attribute, "NETSUITE_ORDER_EXPORTED", to these orders. 

A scheduled job in the integration layer exports these orders into a CSV
{% hint style="warning" %}
    To change this job's frequency, connect with the integration team.
{% endhint %}

SFTP file locations of orders where "NETSUITE_ORDER_EXPORTED" should be added.
```
/home/{sftp-username}/hotwax/ApproveOrderAttributes
/home/{sftp-username}/hotwax/ApproveOrderAttributes/archive
```

These files have to be imported into the system to add the attribute to the orders.
```
Import order attribute
FTP Config: MOD_ORD_ATTR
```

{% hint style="success" %}
The 'NETSUITE_ORDER_EXPORTED' attribute has now been added to orders.
{% endhint %}

A job checks for orders that have this attribute added to them and internally hands them off for approval in the OMS. This job is also in the NetSuite integration layer so it cannot be modified from the Job Manager app.

{% hint style="warning" %}
    To change this job's frequency, connect with the integration team.
{% endhint %}

SFTP file locations where a file of orders where all attributes are added
```
/home/{sftp-username}/hotwax/ApproveOrderAttributes
/home/{sftp-username}/hotwax/ApproveOrderAttributes/archive
```

This file is consumed by a job in HotWax which approves these orders on import.
```
Approve Sales Order
FTP Config: IMP_APR_SALES_ORD
```