# Gift Card Orders Fulfillment

Retailers we work with offer both physical and digital gift cards which have product type as “GIFT CARD” in Shopify. 

In HotWax Commerce gift cards have their product type set up as “GIFT_CARD”. In this set up, digital gift cards are configured for auto fulfillment directly in Shopify, while physical gift cards require the traditional fulfillment process. Here's how it works:

### Digital gift cards:

When customers order a digital gift card on Shopify, after the order is created, Shopify immediately auto fulfills the order, assigns a serial number to digital gift card, loads the value to activate the gift card and consequently, when HotWax Commerce downloads that order from Shopify, it is automatically marked as “Completed”.

Customers receive the gift card in their registered email along with the serial number that can be used to redeem the gift card.

### Physical gift cards:

Orders with physical gift cards are not auto-fulfilled in Shopify. Therefore, HotWax Commerce routes them through the traditional fulfillment process.

## Fulfillment of Gift Cards in Store

After physical gift cards are allocated, HotWax Commerce begins syncing them to systems that are responsible for fulfillment of those items. In the event where gift cards are allocated to a store for fulfillment, they show up in the HotWax Fulfillment App.

As part of the fulfillment process, store associates assign a unique serial number to each gift card and load the corresponding value onto it. This ensures that when customers receive their orders, they can easily redeem the value by using the serial number provided on the gift card.

Once the gift card order is fulfilled in the Fulfillment App, it is automatically marked as "Completed" in HotWax Commerce.

The fulfillment update for gift card orders, along with tracking details, is synchronized to Shopify using the `Completed Orders` job.

Learn more about [order fulfillment updates from HotWax Commerce to Shopify](how-is-the-order-fulfillment-status-updated-to-shopify-from-hotwax-commerce.md)

{% hint style="info" %}
It’s crucial to note that the gift cards are not functional until they are activated on Shopify. The activation process in Shopify is a necessary step to ensure that the gift cards are redeemable and fully functional upon receipt by customers.
{% endhint %}

{% hint style="success" %}
When walk-in customers purchase a gift card from the store, it is treated as a regular POS order in HotWax Commerce. Stores maintain blank gift cards and assign the value to them at the time of purchase. As a result, the SKU for in-store gift cards is consistent with those sold online.
{% endhint %}

### Activation of Gift Cards

Store associates initiate the gift card activation directly from the HotWax Fulfillment App. A scheduled job in HotWax Commerce automatically syncs these activation details to Shopify, so that these gift cards can be activated and redeemed right after customers receive their orders.

{% hint style="info" %}
Digital gift cards are auto-activated and customers can directly redeem them by entering a unique serial number provided with the card.
{% endhint %}

## Fulfillment of Gift Cards in Warehouse

When the fulfillment location where a gift card item is allocated leverages NetSuite for fulfillment, usually a warehouse, then the HotWax Commerce syncs those items' allocation with NetSuite.

Learn more about [fulfillment in NetSuite](https://docs.hotwax.co/documents/v/learn-netsuite/supported-integrations/salesorder/fulfillment)

### Activation of Gift Cards

Similar to how store associates assign serial numbers and load values onto gift cards in-store, warehouse fulfillment teams also undertake these tasks to prepare gift card orders for shipment.

HotWax Commerce Integration Platform retrieves gift card items, their assigned serial numbers, and corresponding values from NetSuite and generates a JSON file. Subsequently, it calls the Shopify API to request activation for the gift card.

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

Once the gift card is activated in Shopify, customers can conveniently redeem it.

The fulfillment update for gift card orders, along with tracking details, is synchronized to Shopify using the `Completed Orders` job.
