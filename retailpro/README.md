---
description: >-
  Discover how HotWax Commerce integrates with Retail Pro Prism POS to enhance
  your retail operations.
---

# Introduction

In today's fast-paced retail world, making things easy for both shoppers and store owners is key. HotWax Commerce, an Omnichannel Order Management System, integrates with Retail Pro Prism POS to make sure retailers have the tools they need for effective omnichannel retailing strategies. This integration makes it possible for stores to offer a seamless shopping experience, blending in-store and online activities effortlessly.

## HotWax Commerce

HotWax Commerce is a cloud-based OMS that empowers retailers to sell more and deliver fast. It helps retailers to implement omnichannel strategies like Same-Day Buy Online Pick Up In Store (BOPIS), Buy Online Return In Store (BORIS), Ship From Store, and Pre-Orders.

## Retail Pro

Retail Pro Prism POS is a retail management software that offers intuitive POS functionalities including pricing and promotion management, replenishment and inventory management, customer and employee management, and store operations.

## Integration Strategy

A key aspect of this integration is the strategic decision to utilize Retail Pro Prism as an intermediary for data transfer. Leveraging Retail Pro Prism’s pre-built connections, we optimize the integration process and ensure a seamless flow of information.

Our client had a statutory requirement to submit sales and tax data to the government system. Retail Pro Prism doesn't inherently come with a pre-existing integration with government systems. However, our client, for whom we implemented HotWax Commerce, already had a pre-built connection with the government system, allowing transfer of daily sales and tax collected data to the government. In a strategic move, we decided not to duplicate efforts and, instead, use Retail Pro Prism's pre-built integrations to push data to government systems. So we push online orders to Retail pro from HotWax Commerce.

Typically, online orders that are fulfilled in HotWax Commerce are pushed directly to the ERP system for accounting purposes. However, our client already had a pre-built integration in place with their ERP system. Recognizing this established connection, our approach was to avoid redundant efforts and refrain from building a new integration with the ERP system. So this is one more reason that in our integration approach we push online orders to Retail Pro and Retail Pro sends this data to the ERP system for accounting purposes along with sending it to the government systems for tax reporting.

Similarly, the usual practice involves daily synchronization of inventory data from ERP systems to HotWax Commerce. In our approach, Retail Pro serves as the intermediary system, utilizing its pre-existing integration with ERP. All inventory received against purchase orders is managed within Retail Pro, making it the go-to source for inventory information. Consequently, the daily inventory file is synchronized from Retail Pro.

In this document we will delve into the intricacies of integrating HotWax Commerce with Retail Pro Prism and understand the data flow between these systems.
