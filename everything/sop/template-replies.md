# Templated Replies
## Order Imports from Shopify to HotWax

### Email Format Error: 

Order imports from Shopify to HotWax fail due to incorrect email format. In this scenario, we have to inform clients to correct the email addresses and re-import them.

#### For Single Order:

```
Hey team,

An order failed to import into OMS due to an error in the email address.

Order Id:

Please follow these steps to resolve this issue:

Update Email Address Associated with the Order:
1. Prioritize updating the email address directly associated with the order.
2. Once corrected, proceed with re-importing the order into the OMS.

If the initial step fails to resolve the issue, please change the customer email in the customer profile:
3. Go to the customer profile on Shopify.
4. Update the email address in the customer profile to reflect the correct information.
5. After updating, proceed with re-importing the order into the OMS.

Thank you.

```


#### For Multiple Orders:

```

Hey team,

A few orders failed to import into OMS due to an error in their email addresses.

List of orders:
1. (Order ID with Link)
2. (Order ID with Link)

Please follow these steps to resolve this issue:

Update Email Address Associated with the Orders:
1. Prioritize updating the email address directly associated with the orders.
2. Once corrected, proceed with re-importing the orders into the OMS.

If the initial step fails to resolve the issue, please change the customer email in the customer profile:
3. Go to the customer profile on Shopify.
4. Update the email address in the customer profile to reflect the correct information.
5. After updating, proceed with re-importing the orders into the OMS.

Thank you.

```


### Duplicate Customer Exists:
Order failed to import into the OMS due to an error in the email address. Despite confirming that both the customer email address and order email are accurate, the problem originates from Shopify. There a duplicate customer entry exists with an incorrect email address, causing the import error.

```
Hey <Person responsible for NetSuite>,

An order failed to import into OMS due to an error in the email address. We have verified that the customer email address and order email are correctly updated. 

However, the issue exists from Shopify, where a duplicate customer entry exists with an incorrect email address, leading to the error during import.

Order Id:

Please follow these steps to resolve this issue:

Delete the duplicate customer:
1. Verify the customer record with the correct email address.
2. On successful verification, delete the duplicate customer.
3. Proceed with re-importing the order into the OMS.

Thank you.

```

### Order Having Special Characters:
In this scenario when an order fails to import in OMs because the order has a special character (any emoji). we need to tell the client to manually import the order.

```

Hey team,

An order failed to import into OMS due to special characters in the order message field.

Order Id:

Please update the order in Shopify by removing any special characters and then proceed with importing into OMS.

Thank you.

```

## Orders do not sync with Netsuite:

### Customer Not Connected to Subsidiary in NetSuite
We noticed that the customer isn't connected to the subsidiary in Netsuite: we need to inform the client to add the customer to the Subsidiary
```
Hey <Person responsible for NetSuite>,

We have found a POS order that has yet to be synced with NetSuite. Upon reviewing the order,
we noticed that the customer associated with it is not linked to the Subsidiary (ID of the subsidiary) in NetSuite.
Please add this customer to the Subsidiary (ID of the subsidiary).

Thank you.
```

### All Order Attributes Are Present
We've identified an order with all the required attributes that haven't been created in NetSuite.

```
Hey <Person responsible for NetSuite>,

We've identified an order with all the required attributes that hasn't been created in NetSuite.
Could you please check the order and let us know if anything needs to be taken care of at our end?

Order Id:

Thank you.

```

### Location Not Connected to Subsidiary in NetSuite
We have a POS send a sales order in NetSuite where we can't add a location. 
Upon reviewing the order, we observed that the brokered location associated with it is not linked to Subsidiary 5 in NetSuite.
```

Hey <Person responsible for NetSuite\>, 

We have a POS send sales order in NetSuite where we can't add a location. Upon reviewing the order in HotWax, 
we observed that the brokered location (1020 Thalia Street) associated with it is not linked to Subsidiary 5 in NetSuite.
Kindly add this location to Subsidiary 5.

Thank you.

```

### Refreshing Unsynced POS Order for NetSuite

This scenario involves a point-of-sale (POS) order that hasn't been properly synchronized with NetSuite. 
The order is imported from Shopify in an unfulfilled status and in HotWax it is in a Created State.

#### For Single Order

```

Hey <Person responsible for NetSuite>,

We've identified a POS order that hasn't been synced with NetSuite. Upon investigation, we found that this order was imported from Shopify in an unfulfilled status.
In HotWax, the order remains created, whereas in Shopify, it's marked as fulfilled.

To synchronize it with NetSuite, you can refresh this order by clicking the refresh button on the View Sales Order page.
This action will create a new version of the order and cancel the current one. Once a new version is generated, the order should sync as expected.

Let me know if you need further assistance.

Thank you.

```

#### For Multiple Orders

```

We've identified POS orders that haven't been synced with NetSuite. Upon investigation, we found that these orders were imported from Shopify in an unfulfilled status.
In HotWax, the orders remain created, whereas in Shopify, they're marked as fulfilled.

To synchronize them with NetSuite, you can refresh these orders by clicking the refresh button on the View Sales Order page.
This action will create a new version of the orders and cancel the current ones.
Once a new version is generated, the orders should sync as expected.

Order Id:

Let me know if you need further assistance.

Thank you.

```

### Customer's Name Has a Special Character

```

Hey <Person responsible for NetSuite\>,

We have identified an issue with orders where customers' names contain special characters, causing the sync to NetSuite to fail.
Please edit these customer names so they can sync with NetSuite.

Attached are the Orders and Customer links for reference:
1. Order and customer
2. Order and customer

Thank you.

```

### Physical Gift Card with Custom Denominations

There are issues with Shopify orders involving Custom Denomination Gift Card products not mapped to their parent products in Shopify, causing synchronization issues with Netsuite.

#### For Single Order

```

Hey Team,

We've identified an issue with a Shopify order in HotWax involving a Custom Denomination Gift Card product.
Unfortunately, this product isn't mapped to its parent product in Shopify, causing a lack of SKU-level relations.
Consequently, when the order is imported into HotWax, the system can't recognize the product, leading to synchronization issues with Netsuite.

To address this issue, we recommend manually adding inventory for this product at the warehouse and associating them with a Netsuite ID.
This step will enable the order to flow to Netsuite, resolving the synchronization issue.

If you have any questions or require further assistance, please let us know.

```

#### For Multiple Orders

```

Hey Team,

We've identified an issue with Shopify orders in HotWax involving Custom Denominations Gift Card products.
Unfortunately, these products aren't mapped to their parent products in Shopify, causing a lack of SKU-level relations.
Consequently, when the orders are imported into HotWax, the system can't recognize the products, leading to synchronization issues with Netsuite.

To address this issue, we recommend manually adding inventory for these products at the warehouse and associating them with Netsuite IDs.
This step will enable the orders to flow seamlessly to Netsuite, resolving the synchronization issue.

If you have any questions or require further assistance, please let us know.

```

## Instance Down - Notification

When an instance experiences downtime or is intentionally taken down for maintenance checks, we can utilize this notification template.

```
**Notification:** We have scheduled maintenance planned for today between (Time) to (Time) IST.
Once the update is done, we will conduct a sanity test to ensure that everything is functioning as expected.
```

## No Instant Solution, Requires Debugging Time

In this scenario, as the solution cannot be delivered instantly and requires time to identify the root cause of the issue, we will keep the client updated on the progress.

```
Hey <name of the person who pointed out this issue>,

Thank you for bringing this to our attention. We have initiated an internal ticket to investigate and identify the root cause.
We will keep you updated on our progress.

Thank you.
```

## Failed to Act: Due to Data Discrepancies

When a client encounters an issue that can be resolved by adjusting or updating data in the OMS.

```

Hey Team,

There was a data discrepancy that prevented this action. We have addressed and resolved the issue, and now it should work as expected.

Thank you.
```

## Invalid CSV Format for Reset Inventory File

When we get the reset inventory files from adoc in an invalid CSV format.

```
Hey Team,

The inventory reset for (county name) today isn't in the expected CSV format. Could you please upload the correct CSV file to SFTP again?

Thank you.
```

## Order Indexing Issue on the Search Page

When we search for an order that is not visible because it is not indexed on the search page, we need to communicate this with the client.

```
Hey team,

The orders were not indexed in our search server previously. We have now indexed them, and
they are visible in the search results. You can confirm this at your end

Thank you
```
