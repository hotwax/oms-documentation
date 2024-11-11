---
description: >-
  The Gift Card Orders Lifecycle BPM illustrates the process of fulfilling
  digital as well as physical gift card orders placed by customers on eCommerce.
---

# Gift card orders lifecycle

Gift cards are stored-value cards that carry a value determined at the time of the card's purchase. They are often given as gifts or rewards and are redeemable for products up to the value stored on the card.

To explain the Gift Card Orders Lifecycle BPM, we've opted NetSuite as the ERP system, Shopify for eCommerce, and HotWax Commerce for the OMS because most of our customers use this tech stack.

**What is the role of NetSuite?**

NetSuite serves as an ERP system and oftentimes also as an fulfillment solution in warehouse locations.

HotWax Commerce being an Order Management System downloads all orders, including gift cards orders from Shopify. Let’s first understand how are physical and digital gift cards different from each other:

**Physical Gift Cards:**

Physical gift cards are tangible cards that customers can buy online or in-store. These cards come with a unique serial number that customers can use to redeem the value stored in the card. Let’s see what happens when customers place online orders for physical gift cards:

**Preparation and processing:** These cards are assigned a unique serial number and predefined value loaded onto them when they are processed and prepared for shipping.

**Activation:** After processing, gift cards are activated in Shopify so that when customers receive their physical gift card, they can use the gift card serial number to redeem their purchase.

**Digital Gift Cards:**

Digital gift cards, also known as e-gift cards, are virtual equivalents of physical gift cards. Customers receive them via email or text message along with a unique serial number that they can use to redeem the value stored in the card.

**Preparation and processing:** Customers instantly receive digital cards upon purchase via email and therefore they are immediately fulfilled.

**Activation:** Digital gift cards are auto-activated in Shopify.

## Physical Gift Cards

<figure><img src="../.gitbook/assets/Physical gift card lifecycle bpm (1).png" alt=""><figcaption><p>Physical gift card orders lifecycle business process model</p></figcaption></figure>

### 1. Order creation

As discussed in the [Order Lifecycle BPM](orderlifecycle.md), a dedicated Import Orders job in HotWax Commerce downloads new orders from eCommerce platforms like Shopify. HotWax Commerce downloads physical gift card orders from Shopify in the same way like any other order item.

### 2. Order synchronization

The process of synchronizing physical gift card orders from HotWax Commerce to NetSuite remains straightforward like any other order item. A dedicated job in HotWax Commerce prepares and exports a feed of orders marked as <mark style="color:orange;">**"Created"**</mark> to NetSuite.

NetSuite's SuiteScript then consumes this order data and generates orders in the <mark style="color:orange;">**"Pending Fulfillment"**</mark> status.

### 3. Synchronize Orders ID and Item Line IDs to HotWax Commerce

HotWax Commerce ensures confirmation of successful order item synchronization with NetSuite. To achieve this, a dedicated job in HotWax Commerce downloads NetSuite's internal IDs, while another job downloads NetSuite's item line IDs. This process triggers multiple actions in HotWax Commerce and NetSuite:

* A scheduled job in HotWax Commerce also creates customer deposit records in <mark style="color:orange;">**“Undeposited”**</mark> status in NetSuite.
* A scheduled job in HotWax Commerce updates the order status from <mark style="color:orange;">**"Created"**</mark> to <mark style="color:orange;">**"Approved".**</mark>

As discussed in Order Lifecycle BPM, only orders with approved status are eligible to be brokered in HotWax Commerce and orders without approval remain in the <mark style="color:orange;">**"Created"**</mark> status.

Approved physical gift card order items are brokered in HotWax Commerce, upon allocation, HotWax Commerce begins syncing them to systems that are responsible for fulfillment of those gift card items.

### 4. Order Brokering in HotWax Commerce

Now that physical gift card orders have been approved, they are automatically sent to the `Brokering Queue` which serves as a waiting area for orders awaiting processing. Just like regular order items in this queue, gift card items are also analyzed and picked in the brokering run and subsequently the order routing engine allocates them to optimal fulfillment location.

In the event where a gift card order is routed to a warehouse fulfillment location, HotWax Commerce synchronizes allocation details to NetSuite.

When a gift card is allocated to stores for fulfillment, they automatically show up in the HotWax Commerce `Store Fulfillment App`.

### 5. Orders Allocated to Warehouse

A dedicated job in HotWax Commerce synchronizes gift card items with their respective fulfillment locations to NetSuite.

NetSuite’s SuiteScript consumes this feed and updates fulfillment location on corresponding gift card orders.

When the warehouse fulfillment team begins the fulfillment of a gift card, an item fulfillment record is created in NetSuite. As soon as the item is picked, packed and shipped multiple actions take place in NetSuite:

* The item fulfillment record is marked as <mark style="color:orange;">**“Shipped”**</mark>.
* The initial order status is updated from <mark style="color:orange;">**“Pending Fulfillment”**</mark> to <mark style="color:orange;">**“Pending Billing”**</mark>.
* Finally, once the invoice is auto generated, the order status is updated from <mark style="color:orange;">**“Pending Billing”**</mark> to <mark style="color:orange;">**“Billed”**</mark>.

### 6. Activation of Gift Cards

NetSuite’s script generates a feed containing gift card items, their assigned serial numbers, and values corresponding to the gift card orders.

A scheduled job in HotWax Commerce Integration Platform reads this feed, runs transformation and generates a JSON file with the relevant data required for the gift card activation, including, gift card items, their assigned serial numbers, corresponding values in NetSuite.

Finally, once the JSON is prepared, HotWax Commerce Integration Platform initiates the gift card activation process in the eCommerce platform. Because most of our customers are using Shopify as their eCommerce platform, in this scenario HotWax Commerce Integration Platform calls Shopify API to activate the gift card.

### 7. Order item shipped

NetSuite's script exports item fulfillment records marked as <mark style="color:orange;">**"Shipped"**</mark>. A scheduled job in HotWax Commerce consumes this feed, and following actions take place:

* The fulfillment status of the corresponding gift card order item in HotWax Commerce is updated to <mark style="color:orange;">**"Shipped"**</mark>.
* The order status is automatically updated from <mark style="color:orange;">**"Approved"**</mark> to <mark style="color:orange;">**"Completed"**</mark> in HotWax Commerce.

### 5. Orders Allocated to Store

Now, let's see how are physical gift card orders fulfilled from stores.

Fulfillment teams at the store prepare gift card orders for shipment.

* Upon successful picking of a gift card item, the fulfillment status is changed to <mark style="color:orange;">**"Picked"**</mark>.
* Once the item has been packed, the fulfillment status is updated to <mark style="color:orange;">**"Packed"**</mark>.
* Similar to fulfilling physical gift card orders in NetSuite, as part of the fulfillment process, store associates assign a unique serial number to each gift card and load the corresponding value onto it. Finally, when the item is marked as shipped in the `Store Fulfillment App`, the fulfillment status is then updated to <mark style="color:orange;">**"Shipped"**</mark>.

### 6. Activation of Gift Cards

Most of our customers leverage Shopify POS at their store location. In this scenario, store associates directly apply a unique serial number and load the corresponding value onto the gift card in Shopify POS. This activation step ensures that the gift card is fully functional and customers can use the unique serial number they received in their email to redeem the value stored in the gift card.

### 7. Order item shipped

When all items of an order are marked <mark style="color:orange;">**“Shipped”**</mark> in the `Store Fulfillment App`, the order status is automatically updated from <mark style="color:orange;">**“Approved”**</mark> to <mark style="color:orange;">**“Completed”**</mark> in HotWax Commerce.

In HotWax Commerce, a scheduled job prepares and exports a feed containing gift card items marked as "Shipped". NetSuite’s script consumes these records and multiple actions take place:

* The item fulfillment record is created and marked as <mark style="color:orange;">**“Shipped”.**</mark>
* The initial order status is updated from “Pending Fulfillment” to <mark style="color:orange;">**“Pending Billing”**</mark>.
* Finally, once the invoice is auto generated, the order status is updated from <mark style="color:orange;">**“Pending Billing”**</mark> to <mark style="color:orange;">**“Billed”**</mark>.

This marks the completion of physical gift card orders in NetSuite.

### 8. Synchronize fulfillment updates to eCommerce

Once a gift card order reaches the <mark style="color:orange;">**"Completed"**</mark> status in HotWax Commerce, a scheduled job in HotWax Commerce sends the tracking details to Shopify and marks the gift card orders as <mark style="color:orange;">**“Fulfilled”**</mark>.

This process remains consistent regardless of whether the gift card order fulfillment is performed in NetSuite or the `Store Fulfillment App`.

{% hint style="success" %}
This marks the completion of the physical gift card order lifecycle.
{% endhint %}

## Digital gift cards

<figure><img src="../.gitbook/assets/digital gift cards.png" alt=""><figcaption><p>Digital gift card orders lifecycle business process model</p></figcaption></figure>

### 1. Order creation

When customers order a digital gift card on Shopify, after the order is created, Shopify immediately auto fulfills the order, assigns a serial number to digital gift card, loads the value to activate the gift card and consequently, when HotWax Commerce downloads that order from Shopify, it is automatically marked as <mark style="color:orange;">**“Completed”**</mark>.

{% hint style="info" %}
Digital gift cards are auto-activated and customers can directly redeem them by entering a unique serial number provided with the card.
{% endhint %}

### 2. Order synchronization

Digital gift cards are already in the <mark style="color:orange;">**“Completed”**</mark> status in HotWax Commerce. HotWax Commerce also synchronizes them with NetSuite so that customer deposits can be created against them and invoices can be generated.

* A scheduled job in HotWax Commerce Integration Platform generates a feed gift card orders that are in “Completed” status and do not have a NetSuite order item line IDs. This helps make sure that only relevant orders are synchronized to NetSuite and regular orders that are <mark style="color:orange;">**“Completed”**</mark> in HotWax Commerce are not synchronized again to NetSuite.
* NetSuite’s script reads this feed and creates gift card orders in the <mark style="color:orange;">**“Pending Fulfillment”**</mark> status.

### 3. Synchronize Orders ID and Item Line IDs to HotWax Commerce

A dedicated job in HotWax Commerce downloads NetSuite's internal IDs, while another job downloads NetSuite's item line IDs.

* Once NetSuite order ID and item line IDs are synced to HotWax Commerce, a scheduled job in HotWax Commerce creates customer deposits for corresponding gift card orders in the <mark style="color:orange;">**“Undeposited”**</mark> status in NetSuite.
* By default non inventory items like digital gift cards are configured to be not eligible for fulfillment in NetSuite. Therefore digital gift cards are automatically fulfilled in NetSuite and their status updated from <mark style="color:orange;">**“Pending Fulfillment”**</mark> to <mark style="color:orange;">**“Pending Billing”.**</mark>
* Subsequently, invoice is auto generated in NetSuite in the status <mark style="color:orange;">**“Paid”**</mark>, and the customer deposit status is automatically updated from <mark style="color:orange;">**“Not Deposited”**</mark> to <mark style="color:orange;">**“Fully Applied”.**</mark>

{% hint style="success" %}
This marks the completion of the digital gift card order lifecycle.
{% endhint %}

{% hint style="success" %}
It's crucial to note that both physical and digital gift cards, once activated on Shopify or Shopify POS, can be redeemed by customers either online or in-store.
{% endhint %}
