# Adding to Category:

Once a purchase order is created/imported into HotWax, loadPreorderCatalog service which runs every 15mins will add the item to the category depending on the category in the purchase order.

Once item is added to the category, pushSM service runs every 15mins will generate a file for Shopify to check the continue selling checkbox.

HotWax retains the file generated for Shopify in the log SFTP directory for a period of 30 days: /home/smprod-log-sftp/datamanager/report

# Removing from Category:

In following cases the item is removed from the category:

* Purchase order is canceled
* Item inventory is received and does not have a single sales order on the purchase order
* Promise date of the purchase order has arrived
* Sales order on the purchase order is released and inventory is available in hand

If any of the above cases is achieved, in that case loadPreorderCatalog service will remove the item from the category and pushSM service will generate an inactive record for the item to uncheck the  continued selling in Shopify.

