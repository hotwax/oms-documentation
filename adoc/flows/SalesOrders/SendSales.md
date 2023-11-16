# Send Sales
Send Sale orders created by Retail Pro and sent to Shopify. HotWax will import these orders from Shopify. These orders are identified as POS orders in the OMS using the source name mapping with the sales channel and OrderFacility attribute.
This order is then processed and fulfilled as a normal order but it is not sent back to RetailPro for invoicing as it was already invoiced while placing the order.

HotWax Commerce will not import POS orders. Retail pro will send POS order’s inventory variance for inventory adjustments into HotWax using the UpdateInventory API.