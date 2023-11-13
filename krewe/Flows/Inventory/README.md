# Inventory

## Sync Inventory

The overal flow of inventory in Krewe is from NetSuite to HotWax and then to Shopify. With HotWax in the middle Krewe is able to take advantage of HotWax's Unified Inventory capabities.
There are some exception cases that are coverd in more detail in this and other linked documents.

### Kit Products
Krewe is using the Bundles app on Shopify to create and manage Kit Products. HotWax Commerce is pre-integrated with the kit component metafields capabilities of the app.
{% content-ref url="/KitProducts.md" %} Kit Product Details {% endcontent-ref %}

Inventory count variance
In the inventory cycle count app, users can update inventory counts and log variances for products. 
HotWax Commerce records these variances and pushes them to Netsuite. 
Netsuite imports the file to verify and adjust the inventory accordingly.

Purchase Order
Purchase order (PO) is created in NetSuite with vendor, product details, and expected receipt date. 
POs that are "Pending Receipts" are  imported into HotWax.
Stores use the HotWax Receiving app to receive purchase orders.
Receiving inbound purchase order shipments are exported to NetSuite, and the PO status is updated to "Received" if all items are received with the expected quantity.
In case of over receiving/under receiving:
HotWax Commerce OMS system will receive the actual shipment at the designated store, which includes an additional/less quantity. A report will be sent from HotWax Commerce to NetSuite, containing information about the expected and accepted quantities. This report will enable NetSuite to make the necessary adjustments within the source and destination locations manually.
