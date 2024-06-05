---
description: >-
  Retailers now have the ability to link sales channels to order sources right
  from the Shopify Shop View page, enabling them to assess the sales
  effectiveness of each channel.
---

# Map Sales Channels with Order Source

Retailers receive orders through various channels, including eCommerce websites, social media platforms, online marketplaces, and point-of-sale (POS) systems. To streamline their business operations and evaluate their performance across these channels, retailers must accurately identify the sales channel for each order.

eCommerce platforms like Shopify are integrated with social media sales channels such as Facebook, and Instagram and Online marketplaces such as Amazon and orders from these channels are available in Shopify. HotWax Commerce downloads all the orders from Shopify. When retailers receive orders from alternative channels, e-commerce platforms like Shopify assign a key to these orders to identify the source of these orders. It's important to note that this key differs for each sales channel and for every Shopify Store. For instance, one Shopify store assigns a key, say 222111, to orders stemming from Facebook, and another Shopify store will assign a key say 111222 to orders stemming from Facebook.

So it's important to manage these keys and set up their values i.e. sales channels in HotWax Commerce so that when orders come in HotWax Commerce it can automatically read the keys and assign the sales channel by identifying the keys. If the key isn't set up, HotWax Commerce can't accurately identify the sales channel.

Here is what a key-value pair looks like:

| Key                   | Value               |
| --------------------- | ------------------- |
| POS                   | POS Channel         |
| WEB                   | WEB Channel         |
| 123456                | Instagram Channel   |
| 222111                | Facebook Channel    |
| sell-on-amazon        | Amazon Channel      |
| shopify\_draft\_order | Draft Sales Channel |

_Table 1: Keys and their association with values i.e., Sales Channels_

Previously, mapping these keys with values required assistance from the development team. This meant that if a retailer expanded their product offerings to a new channel, that channel would have a distinct key, necessitating coordination with the HotWax Commerce support team to add the new channel.

With the latest update, retailers can now easily set up sales channels with keys from the Shopify Shop page. This implies that every new order will automatically be categorized under the appropriate sales channel as defined by the retailer's mapping. Retailers can leverage HotWax Commerce BI Reports & Analytics to analyze product performance across various sales channels, optimizing their operations. Moreover, this enhancement grants retailers greater control over their sales channels and reduces their reliance on external support.
