---
description: >-
  Explore how retailers synchronize web returns from Shopify to NetSuite using
  Loop as middleware or HotWax Commerce as the Order Management System (OMS),
  ensuring efficient processing of returns across
---

# Returns

In omnichannel retailing, retailers provide customers with the options for online returns as well as in-store returns.

## Web Returns

For customers who favor the convenience of online shopping, initiating returns from the retailer's eCommerce website or app proves most suitable. This approach is particularly beneficial for those residing far from physical store locations or looking for the ease of requesting returns from their homes.

**Scenarios where web returns are accepted:**

* **Buy Online Return Online (BORO):** Customers initiate online returns for their eCommerce orders.
* **Endless Aisle Return Online (EARO):** Customers initiate online returns for their in-store ordered items which they received home delivery for.

Retailers we work with, use Shopify as their eCommerce platform, NetSuite as their ERP system, Loop as their RMS, and HotWax Commerce as their OMS. When synchronizing web returns to NetSuite, some opt to use Loop as middleware, while others leverage HotWax Commerce for this. Let's explore how these two distinct approaches work:

### Synchronizing Web Returns to NetSuite when Loop is used

**Initiate Returns in Shopify and NetSuite**

Loop being an RMS, lets customers directly initiate returns against their web orders. Once the return is initiated by the customer, Loop creates the return in Shopify.

To synchronize returns from Loop to NetSuite, many retailers use the Novamodule Integration App. When returns are created in Shopify, Loop simultaneously generates an RMA in NetSuite using the Novamodule Integration App, which gives the warehouse a heads-up that the order item will be coming back.

It's crucial to note that refunds against the RMA will only be processed once customers have shipped their order item, its receipt has been processed in the warehouse, item receipt records have been created in NetSuite and this information has been synchronized to Shopify.

**Process Refunds in Shopify**

Upon physically receiving the item against the RMA, item receipt records are created in NetSuite and the returned inventory is restocked. Loop reads these item receipt records and initiates a refund to the customer. This process marks the completion of returns in Shopify, with the order item marked as returned and payment as refunded. Loop also marks the order item as returned and the payment as refunded in NetSuite.

**Import Returns in HotWax Commerce**

A scheduled job in HotWax Commerce then proceeds to download returns from Shopify. Once downloaded, the order item is marked as returned, and payment as refunded. These returns are not synchronized from HotWax Commerce to NetSuite as they are already synced from Loop to NetSuite using the Novamodule Integration App.

**Export Item Receipts from NetSuite**

When downloading returns from Shopify, HotWax Commerce does not restock the inventory even if the restocking flag is enabled on Shopify because HotWax Commerce lacks visibility into the specific location where the inventory is received.

A scheduled SuiteScript in NetSuite retrieves item receipt records, generates a CSV file, and places this file at an SFTP location from where HotWax Commerce can read this data.

**Import Item Receipt Records in HotWax Commerce**

A job within HotWax Commerce OMS imports the item receipt records CSV file and restocks inventory for corresponding returns. This ensures that the restocked inventory is accurately updated at the facility in HotWax Commerce.

<figure><img src="../../../.gitbook/assets/27.png" alt=""><figcaption><p>Sync web returns to NetSuite using Loop</p></figcaption></figure>

### Synchronizing Web Returns to NetSuite when HotWax Commerce is used

The only difference in this approach is that instead of Novamodule, retailers use HotWax Commerce to synchronize returns to NetSuite.

The process of initiating returns using Loop in Shopify remains unchanged, even when HotWax Commerce is leveraged to synchronize returns to NetSuite. Loop lets customers directly initiate returns against their web orders. Once the return is initiated by the customer, Loop creates the return in Shopify.

**Import Returns in HotWax Commerce**

A scheduled job in HotWax Commerce is responsible for fetching web returns generated in Shopify.

These returns should then be synchronized to NetSuite for further processing. There are two methods for pushing web returns to NetSuite:

1. **Third-Party Integration Platform:** HotWax Commerce gives a feed of returns that a dev team of retailers can use and transform it as per the specification and file format expected by NetSuite or any third-party ERP system.
2. **HotWax Commerce Integration Platform:** Alternatively, HotWax Commerce Integration Platform offers integration with NetSuite where web returns can be synced to NetSuite.

**Export Returns from HotWax Commerce**

A scheduled job within HotWax Commerce Integration Platform transforms the returns feed as per the specification and file format expected by NetSuite, generates a CSV file, and places this file at an SFTP location.

**Import Returns in NetSuite**

A scheduled SuiteScript in NetSuite reads this CSV file from the SFTP location and generates an RMA.

**Export Item Receipt Records from NetSuite**

Upon physically receiving the order item shipped by the customer at the warehouse, item receipt records are generated in NetSuite against the RMA, and inventory is restocked. Subsequently, a scheduled SuiteScript retrieves these records, generates a CSV file, and places this file at an SFTP location from where HotWax Commerce can read this data.

**Import Item Receipt Records in HotWax Commerce**

A job within HotWax Commerce OMS imports the item receipt records CSV file and restocks inventory for corresponding returns.

**Export Item Receipt Records from HotWax Commerce**

Once the order item has been received, refunds should be issued to the customer.

To facilitate this, a scheduled job in HotWax Commerce is responsible for synchronizing the item receipt records to Shopify. Once Shopify receives this information, it proceeds to issue the refund to the customer and marks the corresponding order item as returned and payment refunded.

**Automated Status Updates**

Once returns are completed in Shopify, a scheduled job in HotWax Commerce also marks the order item as returned and updates the payment by marking it as refunded. Subsequently, the order item is marked returned and the payment as refunded in NetSuite.

<figure><img src="../../../.gitbook/assets/28.png" alt=""><figcaption><p>Sync web returns to NetSuite using HotWax Commerce</p></figcaption></figure>

## POS Returns

Customers who live near a brick-and-mortar store or those who prefer to get instant refunds opt for returning their purchases directly in-store.

**Scenarios where POS returns are accepted:**

* **Buy In-Store Return In-Store (BISRIS):** Customers return their in-store purchases to a nearby store location.
* **Buy Online Return In-Store (BORIS):** Customers directly return their online purchases to a nearby store location.
* **Endless Aisle Return In-Store (EARIS):** Customers return orders made through an endless aisle feature, such as items ordered in-store for home delivery, to a nearby store location.

Retailers we work with, use Shopify POS as their POS system, NetSuite as their ERP system, Loop as their RMS, and HotWax Commerce as their OMS. Some retailers initiate in-store returns using the Loop Returns POS App, while others opt to use their Shopify POS system. Let's explore how these two distinct approaches work:

### Synchronizing POS Returns to NetSuite when Loop POS is used

Loop Returns POS App provides an intuitive interface to create POS returns.

When it comes to in-store returns, because customers return their order items directly at the store location, the receiving of the order item and the processing of refunds happen simultaneously.

**Create Returns in Shopify and NetSuite**

Once the POS returns are accepted and completed in Loop, it syncs them with both Shopify POS and NetSuite.

Loop creates returns in Shopify POS, marks the order item as returned and payment as refunded. Subsequently, the inventory is restocked against the received order item.

Loop with Novamodule also directly creates a Cash Sale return in NetSuite, marks the order item as returned, payment as refunded and generates item receipt records. Subsequently, the inventory is restocked against the created item receipt.

**Import POS Returns in HotWax Commerce**

A scheduled job in HotWax Commerce downloads these returns from Shopify POS, including the facility ID where the returned items are received. Subsequently, HotWax Commerce marks the item as returned and payment as refunded. If the restocking flag is enabled, HotWax Commerce also restocks the inventory based on the provided facility ID.

As POS returns are already synced to NetSuite by Loop, they are not synced again by HotWax commerce.

<figure><img src="../../../.gitbook/assets/29.png" alt=""><figcaption><p>Sync POS returns to NetSuite using Loop</p></figcaption></figure>

### Synchronizing POS Returns to NetSuite when Shopify POS is used
Leveraging Shopify POS for in-store returns ensures that store associates are not required to navigate through a separate interface to handle them.

### Import POS Returns in HotWax Commerce

When POS returns are accepted within the store and completed, a scheduled job in the HotWax Commerce integration platform fetches all returns and exchanges from Shopify and generates a returns and exchanges feed. Another job reads and transforms this feed, sorting returns and exchange orders into different folders on the SFTP server.

Two independent jobs in HotWax Commerce process these orders:

- The `Create Return Order` job downloads the returns from the SFTP path.
- The `Create Exchange Order` job downloads the exchanges.

### Export POS Returns from HotWax Commerce

A scheduled job in the HotWax Commerce Integration Platform generates a CSV file of POS returns and places this file at an SFTP location.

### Import POS Returns in NetSuite

A scheduled SuiteScript in NetSuite reads this CSV file from the SFTP location, and generates a Return Merchandise Authorization (RMA) to track the returned items. Following this, a credit memo is generated to record the financial transaction associated with the refund. The credit memo details the total amount to be refunded to the customer.

### Handling of Multiple Scenarios

When returning an item a customer can also opt to take the exchange item against it. The exchange item may be of higher value than the original item or may be of lesser value. Learn more about how HotWax commerce handles exchanges on an order.

<figure><img src="../../../.gitbook/assets/30.png" alt=""><figcaption><p>Sync POS returns to NetSuite using HotWax Commerce</p></figcaption></figure>
