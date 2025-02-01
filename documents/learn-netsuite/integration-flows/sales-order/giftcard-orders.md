# Gift Card Orders

Gift cards are stored-value cards that carry a value determined at the time of the card's purchase. They are often given as gifts or rewards and are redeemable for products up to the value stored on the card.

Retailers set up both physical and digital gift cards in their eCommerce platform. Both physical and digital gift cards have a unique serial number or GC number that customers need to enter to redeem the card's value.

Learn more about [gift cards set up in eCommerce](https://docs.hotwax.co/documents/v/learn-shopify/products/how-are-products-downloaded-from-shopify-to-hotwax-commerce/giftcardsdownload)

**Physical Gift Cards:**

Physical gift cards are tangible cards that customers can buy online or in-store. These cards come with a unique serial number that customers can use to redeem the value stored in the card.

**Digital Gift Cards:**

Digital gift cards, also known as e-gift cards, are virtual equivalents of physical gift cards. Customers receive them via email or text message along with a unique serial number that they can use to redeem the value stored in the card.

A scheduled job in HotWax Commerce downloads both physical and digital gift card orders from the eCommerce platform like Shopify.

Learn more about [gift card orders synchronization to HotWax Commerce](https://docs.hotwax.co/documents/v/learn-shopify/orders/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/giftcardordersdownload)

## Workflow

## Physical Gift Cards

### Synchronize Physical Gift Card Orders from HotWax Commerce to NetSuite

The process of synchronizing physical gift card orders from HotWax Commerce to NetSuite remains straightforward like any other order item.

Upon downloading physical gift card orders, HotWax Commerce synchronizes them with NetSuite in the “Created” status. Once these orders are synchronized, they have their status as “Pending Fulfillment” in NetSuite. HotWax Commerce retrieves NetSuite sales order item line IDs and NetSuite sales order IDs. After that HotWax Commerce creates customer deposits in NetSuite in the “Undeposited” status, and approves physical gift card orders in HotWax Commerce.

Approved physical gift card order items are brokered in HotWax Commerce, upon allocation, HotWax Commerce begins syncing them to systems that are responsible for fulfillment of those gift card items.

{% hint style="info" %}
In our integration, physical gift card orders are handled similarly to regular orders. Therefore, the SFTP location, SuiteScripts, as well as the jobs within the HotWax Commerce Integration Platform and OMS, remains the same.
{% endhint %}

Learn more about [sales order synchronization between NetSuite and HotWax Commerce](OrderApproval.md)

### Fulfillment of Gift Cards in NetSuite

In the event where a fulfillment location where a gift card item is allocated uses NetSuite for fulfillment, usually a warehouse, then the HotWax Commerce syncs those items' allocation with NetSuite.

Item fulfillment records are created in NetSuite against the gift card order items.

As part of the fulfillment process, warehouse fulfillment teams assign a unique serial number to each gift card and load the corresponding value onto it. This ensures that when customers receive their orders, they can easily redeem the value by using the serial number provided on the gift card.

Once the gift card item is prepared and ready to be shipped, the corresponding item fulfillment record is marked as “Shipped” in NetSuite.

Fulfilled order status is updated in NetSuite from “Pending Fulfillment” to “Pending Billing”, subsequently, invoice is auto generated in NetSuite in the status “Paid”, and the customer deposit status is automatically updated from “Not Deposited” to “Fully Applied”.

Once the gift card order item is successfully fulfilled, it is synchronized from NetSuite to HotWax Commerce along with other fulfilled sales orders.

A scheduled job in HotWax Commerce marks physical gift card orders that are fulfilled in NetSuite as “Completed”.

{% hint style="info" %}
It’s crucial to note that the gift cards are not functional until they are activated in the eCommerce platform. The activation process in eCommerce is a necessary step to ensure that the gift cards are redeemable and fully functional upon receipt by customers.
{% endhint %}

Learn more about [synchronization of fulfillment data](Fulfillment.md)

### Activation of Gift Cards

A scheduled SuiteScript in NetSuite generates a CSV file containing gift card items, their assigned serial numbers, and values corresponding to the gift card orders. The generated CSV is then placed at an desginated SFTP location.

**SuiteScripts**

Export NetSuite gift card fulfillment details:

```
HC_MR_ExportedGiftCardFulfillmentCSV.js
```

**SFTP Location**

```
/home/{sftp-username}/netsuite/salesorder/giftcard-fulfillment
```

A scheduled job in HotWax Commerce Integration Platform reads the generated CSV file from the SFTP location, runs transformation and generates a JSON file with the relevant data required for the gift card activation, including, gift card items, their assigned serial numbers, corresponding values in NetSuite.

Finally, once the JSON is prepared, HotWax Commerce Integration Platform initiates gift card activation process in the eCommerce platform. Because most of our customers are using Shopify as their eCommerce platform, in this scenario HotWax Commerce Integration Platform calls Shopify API to activate the gift card.

{% hint style="info" %}
HotWax Commerce Integration Platform communicates directly with Shopify for gift card activation, without any intermediary involvement from the HotWax Commerce OMS.
{% endhint %}

**Job in HotWax Commerce**

Gift card activation:

```
poll_SystemMessageFileSftp_GiftCardActivationFeed
```

**Shopify API**

[Bulk data import GraphlQL API](https://shopify.dev/docs/api/usage/bulk-operations/imports) used along with [gift card create mutation](https://shopify.dev/docs/api/admin-graphql/2024-04/mutations/giftcardcreate)

<figure><img src="../../../.gitbook/assets/21.png" alt=""><figcaption><p>Physical Gift Card Activation</p></figcaption></figure>

Once the gift card is activated in eCommerce, customers can conveniently redeem it.

### Fulfillment of Gift Cards in HotWax Commerce

When a physical gift card item is allocated to stores for fulfillment, they show up in the HotWax Commerce `Fulfillment App`.

Similar to fulfilling physical gift card orders in NetSuite, as part of the fulfillment process, store associates assign a unique serial number to each gift card and load the corresponding value onto it.

Once gift card order items are successfully fulfilled in stores, a scheduled job in HotWax Commerce synchronizes fulfilled order data to NetSuite.

Upon synchronizing fulfilled orders data, the gift card order status in NetSuite is updated from “Pending Fulfillment” to “Pending Billing”, subsequently, invoice is auto generated in NetSuite in the status “Paid”, and the customer deposit status is automatically updated from “Not Deposited” to “Fully Applied”.

This marks the completion of physical gift card orders in NetSuite.

### Activation of Gift Cards

For store allocated orders, store associates initiate the gift card activation directly from the HotWax Fulfillment App.

HotWax Commerce automatically syncs these activation codes to Shopify, so that these gift cards can be activated and redeemed right after customers receive their orders. This activation step ensures that the gift card is fully functional and customers can use the unique serial number they received in their email to redeem the value stored in the gift card.

## Digital Gift Cards

Digital gift cards are already in the “Completed” status in HotWax Commerce. HotWax Commerce also synchronizes them with NetSuite so that customer deposits can be created against them and invoices can be generated.

{% hint style="success" %}
Digital gift cards are auto-activated and customers can directly redeem them by entering a unique serial number provided with the card.
{% endhint %}

<figure><img src="../../../.gitbook/assets/22.png" alt=""><figcaption><p>Digital Gift Card Order Sync from HotWax Commerce to NetSuite</p></figcaption></figure>

### Synchronize Digital Gift Card Orders from HotWax Commerce to NetSuite

A scheduled job in HotWax Commerce Integration Platform generates a CSV file of gift card orders that are in “Completed” status and do not have a NetSuite order item line IDs. This helps make sure that only relevant orders are synchronized to NetSuite and regular orders that are “Completed” in HotWax Commerce are not synchronized again to NetSuite.

A scheduled SuiteScript in NetSuite reads the CSV file from the SFTP location and creates gift card orders in the “Pending Fulfillment” status.

HotWax Commerce retrieves NetSuite sales order item line IDs, NetSuite sales order IDs, and creates customer deposits in NetSuite in the “Undeposited” status.

By default non inventory items like digital gift cards are configured to be not eligible for fulfillment in NetSuite. Therefore digital gift cards are automatically fulfilled in NetSuite and their status updated from “Pending Fulfillment” to “Pending Billing”.

Subsequently, invoice is auto generated in NetSuite in the status “Paid”, and the customer deposit status is automatically updated from “Not Deposited” to “Fully Applied”.

{% hint style="success" %}
When walk-in customers purchase a gift card from the store, it is treated as a regular POS order in HotWax Commerce. HotWax Commerce syncs those orders with NetSuite in the POS sales synchronization to NetSuite.
{% endhint %}

{% hint style="info" %}
**What happens when customers redeem their gift card to pay for a new order?**

When gift card payments are applied to an order, they are not processed like traditional transactions. Instead they impact the GL in NetSuite as "deferred revenue". In order to correctly post this payment to NetSuite, it is not sent as a customer deposit and instead posted as a "payment item" in the order when pushed to NetSuite.

If gift card payments were recorded as customer deposits, there could be a risk of double counting the revenue. This is because the revenue from gift card sales would already have been recorded when the gift cards were initially sold. Treating gift card payments as payment items avoids this double counting since they're simply offsetting existing revenue rather than creating new revenue.
{% endhint %}
