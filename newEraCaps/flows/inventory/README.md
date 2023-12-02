# Inventory

## In Store Inventory

The Flagship middleware sends store inventory counts for products at retail locations to HotWax Commerce in a file based integration once a day. The Flagship middleware is responsible for converting the inventory file produced by Smaregi into a CSV format compatible with the native OMS Reset Inventory format.

Reset Inventory SFTP location:
```
/home/newera-uat-sftp/pos/morning_inventory_sync/staging/incoming
```

### POS Sales
Flagship middleware is also responsible for posting inventory adjustments into the OMS to account for POS sales orders recorded in Smaregi. Flagship will use the OMS’s REST API endpoint for updating inventory sold by POS sales because it allows them to post updates in near real time helping maintain store inventory accuracy in the OMS, and by extension Shopify, to avoid over selling online.

Update Inventory API
```
https://<host>/api/service/updateInventoryByIdentification
```

{% hint style="info" %}
**API Docs** for the [Update Invetory API][udpateInvAPI] are a great place to learn more about how to use this API.
{% endhint %}
​
### Store fulfilled inventory
As order items are fulfilled from stores, the OMS reduces inventory in Smaregi that was used for store fulfillment. Traditionally the OMS would feed a list of shipped orders to the POS to ensure that it can maintain an accurate count of inventory in its system. New Era Caps found that this duration could actually be too long and cause retail operational issues and instead will depleted inventory in Smaregi POS as soon as orders are packed.

**Packed order rejection**
Once an order is packed by a store representative, New Era Caps will not allow the order to be unlocked, hence preventing any rejection and enabling them to accurately deplete store inventory at that time.

## Warehouse Inventory
New Era Caps uses a manual inventory upload procedure because their warehouse services also services their B2B business which does not flow through the OMS. The merchandising team manually splits inventory between the two channels and then uploads the inventory allotted to B2C sales manually into the OMS.

## Posting inventory online
HotWax pushes available to sell inventory levels to Shopify. Because New Era Caps does not use Shopify POS in Japan, HotWax will not map store inventory to store facilities in Shopify even though until now they have had POS locations established on Shopify. 

All stores that participate in online sales will post their inventory to the consolidated inventory location on Shopify. During the add to cart experience New Era Caps will add a soft allocation to the order items that the customer has selected to have shipped from store to their house at a higher shipping fee.


<!-- page links -->

[updateInvAPI]: https://github.com/hotwax/oms-documentation/blob/oms1.0/Inventory/Update%20Inventory.md