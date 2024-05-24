---
description: >-
  Explore the intricacies of syncing Loop Exchange orders with NetSuite through
  HotWax, ensuring seamless integration and understanding of refund processes.
---

# Exchange Orders

During initial go live, Loop Exchange orders were imported into the OMS but were not synced to NetSuite due to a misunderstanding of the process of syncing exchanges to NetSuite.

The misunderstanding was that when a Loop Exchange order was created, Loop leveraged Celigo to actually apply the customer deposit created from refunding the original invoice to the new replacement order placed by the customer. This process of carrying the original payment to the new order is not currently supported by HotWax’s integration with NetSuite. Due to this limitation, exchange orders were initially excluded from the sync with NetSuite from HotWax and were instead pushed through Celigo manually by the Krewe team to ensure no existing processes were broken.

The actual process of syncing exchange orders from Loop and Shopify to NetSuite is far simpler. When an exchange is created in Loop, in store or online, Loop treats the new order in NetSuite and Shopify as entirely separate orders that are only linked to the original order through references in extended fields. When the customer completes their exchange process, Loop returns the selected items from the original order and issues a refund in NetSuite. Refunds in Shopify are intentionally not processed, because Loop uses the pending refund amount as a discount on the new order created as a replacement for the original order.

If the new order total is less than the pending refund amount, then the left over refund amount is processed as a refund on Shopify based on the customer's selected preference which could be either store credit or original payment method. In the event that the new order total exceeds the pending refund amount, the outstanding balance will be captured from the customer.

{% hint style="info" %}
The new exchange order has references to the original order stored in it in the form of an order note and an order not attribute. These can potentially be used by HotWax to link the return and exchange order to the original order but this is not required as part of the main implementation.
{% endhint %}

## How this works in HotWax

### Online exchanges

When a new exchange order created by a customer online is imported into the OMS, its mappings are no different than regular orders with a discount applied to them. This means that the OMS is also able to sync these orders to NetSuite just as it would sync a normal order with a discount item. References to the original order stored in Shopify notes are saved in the OMS as a note communication event and subsequently sent to NetSuite as a memo on the order.

### In Store Exchanges

Exchange orders placed in store on POS require an additional layer of special handling because they are a crossover between a traditional Cash Sale and a Sales Order. The traditional definition of a Cash Sale is an order placed on a POS channel that is completed upon creation. These orders are imported into the OMS as a POS channel order and a special shipping method “POS Completed” which helps segregate Cash Sales from Send Sales. When exchange orders are created in store their channel is mapped to “Loop Exchange” but are completed upon creation which, for the business, qualifies them as a Cash Sale.

In order to ensure that these orders are pushed to NetSuite as Cash Sales, these orders are mapped to the “POS Completed” shipping method when they’re imported into the OMS. To push them to NetSuite a separate feed is generated that identifies all Loop Exchange orders with a POS Completed Shipping method. To ensure orders are not sent twice, only orders without a NetSuite ID saved in HotWax are included in the push to NetSuite.

## XML Data

**Sales Channel**

```xml
<Enumeration description="Loop Exchange" enumCode="165" enumId="LOOP_EXCH" enumTypeId="ORDER_SALES_CHANNEL" />
```

**Shopify Mapping**

```xml
<ShopifyShopTypeMapping mappedKey="1662707" mappedTypeId="SHOPIFY_ORDER_SOURCE" mappedValue="LOOP_EXCH" shopId="SHOP"/>
```
