# Sales Orders

The most common type of orders are normal ecommerce orders placed on Shopify by customers. Other than this there are “WhatsApp”, phone, and send sale orders that ADOC offers.

## CSR Orders
WhatsApp and phone orders are largely the same, in that they are entered into Shopify as draft orders. At the time of creating the order, the ADOC representative entering the order decides if the order is cash on delivery or if the customer will provide payment details up front. Custom fields like municpio, canton or customer ID are entered after the order is created as free text fields.

Having free text fields for CSRs to enter critical information such as municipio led to many orders being created with erroneous data. Invalid data specifically in the municipio field is problematic because it breaks the integration with the carrier and prevents labels from being generated.

In an effort to combat this, HotWax recommended that a custom draft order entry application be developed which includes an enumerated list of all the valid muncipios, cantons or distrio options for the CSR to simply select from. This eliminates the possibility of incorrect values being entered by the CSR and guarantees shipping label creation to a much greater extent.

## Send Sales
Send Sale orders created by Retail Pro and sent to Shopify. HotWax imports these orders from Shopify. These orders are identified as POS orders in the OMS using the source name mapping with the sales channel and OrderFacility attribute. The source name of the POS channel is unique on every Shopify store because Retail Pro is integrated using a custom app which generates its own unique source name. The easiest way to obtain the source name of POS orders on a Shopify store is to check the JSON of an order created by the custom app.

{% hint style="info" %}
The source name in the JSON can be found by searching for the keyword `source` in the JSON
{% endhint %}

This order is then processed and fulfilled as a normal order but it is not sent back to RetailPro for invoicing as it was already invoiced while placing the order.

HotWax Commerce does not import POS orders or any orders that matter from Retail Pro directly. Retail Pro will send POS order’s inventory variance for inventory adjustments into HotWax using the UpdateInventory API.