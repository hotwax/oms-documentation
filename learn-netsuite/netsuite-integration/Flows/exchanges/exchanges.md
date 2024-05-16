---
description: >-
  Explore how retailers handle exchanges, ensuring smooth operations across
  Shopify, NetSuite, Loop, and HotWax Commerce.
---

# Exchanges

Retailers often use different return options, such as store credit, replacement, refund, and exchange, to accommodate varying customer requests and preferences.

In the context of returns, an exchange refers to a transaction in which a customer returns a purchased item and, instead of receiving a refund or store credit, opts to swap the returned item for a different product. This lets the customer exchange the initially purchased item for another one.

Exchanges can be handled in various ways by different retailers, each employing unique processes.

## Different Approaches for Handling Exchanges

1.  **Zero Amount Exchange Orders:**

    Retailers can process exchange orders by creating an exchange order with a zero amount, where the order item total is equal to the item total of the original order. So in this case no amount needs to be refunded to the customer.
2.  **Store Credit:**

    Retailers can issue a store credit to a customer for the amount that is equal to the returned order item, and use this store credit against the new exchanged item.
3.  **Integrated Platform Approach:**

    Many retailers use platforms where eCommerce, OMS, Return Management System (RMS), and Accounting can be managed in one single platform. In such cases, they can easily unlink the payment reference from the original order and apply it to the exchanged order.
4.  **Separate Systems:**

    Many retailers also use a separate Return Management System along with independent eCommerce, OMS, and Accounting Systems.

    For example, customers we have worked with, use Shopify as their eCommerce platform, NetSuite as their ERP system, Loop as their RMS, and HotWax Commerce as their OMS.

    **In this setup here is how exchanges work:**

    As returns are initiated in Loop, it is also responsible for creating exchange orders in Shopify, whether they take place in-store or online. Loop treats the new order in Shopify as an entirely separate order that is only linked to the original order through references in extended fields.

    When the customer completes their exchange process, Loop marks the original order as returned in both Shopify and NetSuite. Additionally, marks payment as refunded in NetSuite. Refunds in Shopify are intentionally not processed, because Loop uses the pending refund amount as a `discount` on the new order created as a replacement for the original order.

    If the new order total is less than the pending refund amount, then the leftover refund amount is processed as a refund on Shopify based on the customer's selected preference which could be either store credit or the original payment method. In the event that the new order total exceeds the pending refund amount, the outstanding balance will be captured from the customer.

## Data Flow

### Synchronize Web Exchanges to NetSuite

Exchange orders that are created in Shopify are imported into HotWax Commerce just like regular sales orders. Given that exchanges are created by Loop in Shopify, they are assigned the sales channel `Loop Exchange` within Shopify. Consequently, all exchange orders imported into HotWax Commerce have a `Loop Exchange` sales channel as well.

When it comes to pushing sales order data from HotWax Commerce to NetSuite, the handling of all web orders remains consistent irrespective of the sales channel they originate from. The generated order feed from HotWax commerce is also generic, similar to that of regular orders. This means that HotWax can synchronize web exchange orders to NetSuite in the same manner it synchronizes regular orders.

More specifically, for all web exchange orders, the sync for Customers, Sales Order Item Line IDs, Sales Order IDs, Order Allocation, and Fulfillment remains consistent between [HotWax Commerce and NetSuite](https://docs.hotwax.co/integration-resources/v/netsuite-integration/supported-integrations/salesorder/orderapproval).

<figure><img src="../../.gitbook/assets/exchange orders flow.png" alt=""><figcaption><p>Sync web exchanges to NetSuite</p></figcaption></figure>

However, there are certain distinctions to note:

* References to the original order stored in Shopify notes are saved in HotWax Commerce as a `communication event` and subsequently sent to NetSuite as a `memo` on the order.
* Exchange orders have a discount code labeled `loop-discount` applied to them. This discount code is also present in NetSuite. Consequently, HotWax Commerce ensures that the exchange order is synchronized to NetSuite with this exact code, with the discount amount shared as the `Rate.`
* All exchange orders have a discount code applied to them. When the amount of the exchange order item is the same as that of the original order item, the value of the exchange order becomes zero due to the applied discount. In these instances, there is no need to create customer deposits in NetSuite. In the event the value of an exchange order item exceeds the value of the original order item, customer deposits should be created in NetSuite to reflect the authorized payments.

Since our current customers are not capturing additional payments for exchanges in Shopify, payment preferences are not being created in HotWax, and subsequently, customer deposits are not being generated in NetSuite.

In the event, payments are captured in Shopify and payment records are created in HotWax Commerce, customer deposits should also be created in NetSuite.

#### Restocking Item from the Original Order

Exchanges involve returning a purchased item for a different product. Therefore, it’s crucial to restock the inventory from the original order.

Upon physically receiving the returned inventory from the original order, NetSuite generates item receipt records and updates the inventory count accordingly. Subsequently, HotWax Commerce synchronizes these item receipt records from NetSuite and accurately updates the inventory count.

### Synchronize POS Exchanges to NetSuite

Exchange orders that are created in Shopify POS are imported into HotWax Commerce just like regular POS sales. Given that POS exchanges are created by Loop in Shopify, they are assigned the sales channel `Loop Exchange` within Shopify. Consequently, all POS exchanges imported into HotWax Commerce have a `Loop Exchange` sales channel as well.

POS exchange sales are similar to other POS sales as both transactions are recorded within the physical store.

When POS sales are downloaded in HotWax Commerce, POS sales have a `Completed` order status, the sales channel is set to `POS\_Channel`, and the shipping method is set to `POS\_COMPLETED`.

While, in the case of POS exchange sales, although they also have a `Completed` order status, their sales channel is `Loop Exchange.` Due to this distinction, HotWax Commerce is unable to assign their shipping method as POS\_COMPLETED. Instead, it is designated as `Two-Day Shipping` as default.

| Attribute       | POS Sales      | POS Exchange Sales |
| --------------- | -------------- | ------------------ |
| Order Status    | Completed      | Completed          |
| Sales Channel   | POS\_Channel   | Loop Exchange      |
| Shipping Method | POS\_COMPLETED | Two-Day Shipping   |

Because of these distinctions between POS sales and POS exchange sales, HotWax Commerce generates a separate feed to sync POS exchange orders to NetSuite.

**How HotWax Commerce identifies POS exchange sales to sync to NetSuite:**

* The order status is `Completed`
* The sales channel is `Loop Exchange`
* The NetSuite order identification is absent. This condition also helps make sure that in-store exchange orders are segregated from web exchange orders and these orders are not sent to NetSuite twice.

As previously discussed, the [synchronization of POS sales from HotWax Commerce to NetSuite](https://docs.hotwax.co/integration-resources/v/netsuite-integration/supported-integrations/salesorder/posorders) involves the creation of Cash Sale records. All the eligible POS exchange sales are then synchronized to NetSuite just like any other POS sales and Cash Sales are created in NetSuite for POS exchange sales.

#### Restocking Item from the Original Order

When an item from the original order is returned on Shopify POS, HotWax Commerce downloads the return data, including the facility ID where the returned items are received. If the restocking flag is enabled, HotWax Commerce also restocks the inventory based on the captured facility ID.

<figure><img src="../../.gitbook/assets/in-store exchange orders flow.png" alt=""><figcaption><p>Sync POS exchanges to NetSutie</p></figcaption></figure>

{% hint style="info" %}
In our integration, web exchange orders are handled similarly to regular orders, while POS exchange sales are handled similarly to POS sales. Therefore, the SFTP location, SuiteScripts, as well as the jobs within the HotWax Commerce Integration Platform and OMS, remain unchanged.
{% endhint %}
