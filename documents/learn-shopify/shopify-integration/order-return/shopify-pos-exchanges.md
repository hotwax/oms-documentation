---
description: Learn how HotWax Commerce manages returns and exchange from Shopify POS.
---

# Shopify POS Exchanges

Many times customers visit their preferred store location to return or exchange their online order. Perhaps they received the wrong size, the item is defective, or they simply changed their mind. Shopify provides a streamlined process for returns and exchanges. Store associates can directly process returns using Shopify POS, specify the items customers wish to return and the reason for the return. If they'd like to exchange the item for a different product, Shopify allows them to select the new item directly within the return process.

With Exchanges V2, Shopify has streamlined the returns and exchange process for both customers and retailers. When there is an exchange order in Shopify POS, it creates a return for the items the customer doesn’t want and adds the new items the customer purchased in exchange to the order

This seems straightforward for the initial exchange process, as the transaction details and order information are consolidated within the original order. However, this approach creates complexities for ERP systems like NetSuite or other accounting systems that hold a repository of all the financial records.

Here's where the challenges arise:

- **Multiple Return Scenarios**: Customers may want to return items from their order, the exchanged item, or even a combination of both. Shopify will continue to update the same order with this new return information.
- **Accounting Discrepancies**: ERP systems rely on standardized financial data for GL accounting and posting. The consolidated order structure in Shopify, while user-friendly for returns processing, can lead to discrepancies for downstream systems trying to record the financial trail for each returned or exchanged item.

## How HotWax Commerce Helps Address These Challenges and Ensure Accurate Accounting for Your Business

Before delving into the details of how returns and exchanges are imported and stored in HotWax, these are the terms and concepts that are prerequisites.

1. Exchange Credit - Shopify exchange V2 no longer explicitly calculates exchange credit when customers purchase replacement items. Because exchange orders are still new orders in HotWax and other systems, an exchange credit is still calculated by HotWax during import of returns to balance accounting.
2. Exchange Payment - To make payments easy to reconcile, HotWax links all transactions to the original order in its system even for greater exchanges. These additional payments are then attributed to exchange orders internally using the Exchange Payment method to represent the additional captured payment.

    - **Exchange Credit**: This is the amount the customer has already paid for the original item being returned. It's used towards purchasing another item in the exchange order.
    - **Exchange Payment**: If the customer exchanges for an item of higher value, they pay the difference. This additional payment is known as exchange payment.

## Importing Returns and Exchanges

A scheduled job in the HotWax Commerce integration platform fetches all returns and exchanges from Shopify and bifurcates the data into two feeds, one for returns and another exchanges additions.

Exchange additions are imported into HotWax as new sales orders that are linked to the original sale as an exchange while returns are imported independently and linked to their corresponding HotWax order.

## Mapping Returns and Exchanges

To illustrate how returns and exchanges in the same order in Shopify are imported as separate exchange orders in HotWax while ensuring all orders and transactions are balanced, this document will cover the following scenarios

1. When the exchanged item is of greater value than the returned item.
2. When the exchanged item is of lesser value than the returned item.

Let's consider an example where a customer places an online order on Shopify for three items: Item A, Item B, and Item C, each priced at $10. This order, when imported into HotWax Commerce, will have a corresponding payment transaction of $30 (Shop Pay 1).

| **Order Items**  |
| ---------------- |
| A: $10           |
| B: $10           |
| C: $10           |
| **Transactions** |
| ShopPay1: $30    |

### Scenario 1: Exchanged Item of Greater Value

Now, suppose the customer returns Item A and opts for an exchange with Item D, valued at $20. In this scenario, item A was worth $10, while the exchanged item is worth $20. Therefore, the customer will need to pay an additional $10 for the exchange.

This additional payment will be recorded in Shopify under the same order. Now there are two transactions recorded on this order in Shopify: the initial transaction of $30 and a second transaction of $10 for the newly exchanged item.

| **Order Items**  | **Exchange Item** |
| ---------------- | ----------------- |
| A: ~~$10~~       | D: $20            |
| B: $10           |                   |
| C: $10           |                   |
| **Transactions** |                   |
| ShopPay1: $30    |                   |
| ShopPay2: $10    |                   |

Note: add image of Shopify order view screen at this state

#### Importing exchange items into HotWax

The item purchased in exchange for a return on Shopify will be imported into HotWax Commerce as a new sales order. The new order will be linked to the original order as an exchange. HotWax will automatically calculate how much credit is being carried over from the return and apply it to the new exchange order to balance order totals and transactions of the new order.

**Importing transactions**
To manage easy reconciliation with Shopify, HotWax first records the additional payment for the exchange order, $10 (Shop Pay 2), on the original order.

Adding exchange transactions to the main order, however, inflates the payment captured on the original order. To handle this, HotWax Commerce creates balancing attribution transactions that serve as counterparts to the payments associated with exchange orders.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: $20        |
| B: $10      |               |
| C: $10      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ExchangeCredit: $10<br>Status: Refund|ExchangeCredit: $10 <br>Status: Settled  |
| ShopPay2: $10                   | |
| ExchangePayment: $10<br>Status: Refund<br>parentPaymentRef: ShopPay2 | ExchangePayment: $10<br>parentPaymentRef: ShopPay2 |

The two exchange attribution transactions show that $10 the return and $10 from Shop Pay 2 were applied to the exchange order. Creating refunds on the original order and additions on the exchange order manages easy traceability of all events on a single order as well as attributions to exchange orders.

Note: add image of HotWax OPP section at this state

Shopify doesn't explicitly specify how much credit is applied to new items from returned items. To determine the value of the payment carried over, HotWax Commerce does the following calculation:

**(Exchange Order Total)** - **(Sum of Exchange Payments Captured)** = **Credit from Original Order**

$20 - $10 = $10

With this handling, HotWax ensures accurate financial records in HotWax and eliminates confusion for integrated ERP systems.

### Additional Scenarios Handled by HotWax Commerce

#### Returning the Exchanged Item

In the event that the customer decides to return item D, an exchange item, they’d be receiving a refund of $20. When this return happens, Shopify will use a refund attribution algorithm that will find the largest payment transaction and attempt to refund the entire amount against it. This approach splits the refund transactions as little as possible for the best customer experience.

In this scenario, when a customer returns an exchanged item, according to the Shopify algorithm, the refund will be issued using the initial $30 transaction (Shop Pay 1), even though the payment for the exchanged item was processed through a different transaction (Shop Pay 2).

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$20~~    |
| B: $10      |               |
| C: $10      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ExchangeCredit: $10 <br>Status: Refund                  | ExchangeCredit: $10 <br>Status: Settled |
| ShopPay2: $10                   |  |
| ExchangePayment: $10 <br>Status: Refund<br>parentPaymentRef: ShopPay2 | ExchangePayment: $10<br>parentPaymentRef: ShopPay2 |
| ExchangeCredit: -$20 <br>Status: Refund  | ExchangeCredit: $20 <br>Status: Refund |
| ShopPay1: $20 <br>Status: Refund                 | |

Note: add image of what the OPP panel looks like at this point in HotWax

#### Returning the Entire Order Including Exchanged Items

In the event that the customer returns item D along with items B and C, Shopify will create two refund transactions, one to refund ShopPay1 and another to refund ShopPay2.

 links refund transactions to the original payment being refunded using a “parent ID”. Since HotWax Commerce has two different orders, it uses the Shopify transaction ID to identify which order the payment was captured on. This ensures that the refund is posted on the same order, maintaining traceability.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$20~~        |
| B: ~~$10~~      |               |
| C: ~~$10~~      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ExchangeCredit: $10 <br>Status: Refund                  | ExchangeCredit: $10 <br>Status: Settled |
| ShopPay2: $10                   |  |
| ExchangePayment: $10<br>Status: Refund<br>parentPaymentRef: ShopPay2 |ExchangePayment: $10<br>parentPaymentRef: ShopPay2  |
| ExchangeCredit: -$20 <br>Status: Refund                  | ExchangeCredit: $20 <br>Status: Refund |
| ShopPayRefund1: $30<br>Status: Refund<br>parentPaymentRef: ShopPay1 |  |
| ShopPayRefund2: $10<br>Status: Refund<br>parentPaymentRef: ShopPay2 |  |

Note: Is there an exchange credit added to the original order for the amount refunded on another order?

In Shopify, all payment captures are against the same order, whether it be for originally purchased items or exchange items. Due to this mixing of transactions in Shopify, refunds are also processed fluidly, where an exchange item may be refunded against a payment captured when making an initial purchase. The end result is that Shopify links the refund transaction to the capture transaction it is refunding, but the payment being refunded is not always the actual payment the customer made for the item being returned.

### Refund Processing in Shopify and HotWax Commerce

 **In Shopify** :The order is refunded through two payments: $30 and $10, totaling $40. When refunds are processed, Shopify allocates them across these payments.

**In HotWax:**

**Original Order** : Has a total transaction record of $40 ($30 + $10) with $10 refunded to exchange credit.

**Exchanged Order** : Customer was issued a $20 refund from a combination of the two refund transactions.

HotWax Commerce now needs to split these transactions across two sales orders in HotWax to match Shopify’s transaction records.

There are two valid ways to allocate these amounts

#### Method 1

Attribute the two $10 amounts to the exchanged order and attribute the $20 amount to the original order

| Order Type     | Refund amount | Attribution |
| -------------- | ------------- | ----------- |
| Original Order | $20           | Shop Pay 1  |
| Exchange Order | $10           | Shop Pay 1  |
| Exchange Order | $10           | Shop Pay 2  |

#### Method 2

Attribute the $20 amount to the exchanged order and attribute the two $10 amounts to the original order.

| Order Type     | Refund amount | Attribution |
| -------------- | ------------- | ----------- |
| Original Order | $10           | Shop Pay 1  |
| Original Order | $10           | Shop Pay 2  |
| Exchange Order | $20           | Shop Pay 1  |

Both methods are valid but one or the other attribution model is not actually specified by Shopify.
Therefore, instead of picking an attribution itself, HotWax Commerce simply marks the exchange order as fully refunded using an 'Exchange Credit: Refunded' payment line and does not try to link specific Shopify refunds to particular return items.

### Scenario 2: Exchanged Item of Lesser Value

When a customer returns item A, valued at $10, and opts for an exchange with another item D priced at $5, they will receive a refund of $5 to compensate for the price difference between the two items. In this case, there will be an attribution of $5 to the exchange order with the payment method as `Exchange Credit` and as there is no payment captured from the customer.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: $5        |
| B: $10      |               |
| C: $10      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ShopPay1: $5<br> Status: Refund    | |
| ExchangeCredit: $5 <br> Status: Refund| ExchangeCredit: $5 <br> Status: Settled |

In the event that the customer subsequently decides to return both the exchanged item and all the items from their original order, they will receive a total refund of $25, encompassing the combined value of all the returned items (Item B, Item C and Item D).

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$5~~       |
| B: ~~$10~~      |               |
| C: ~~$10~~      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ShopPay1: $5<br> Status: Refund    |  |
| ExchangeCredit: $5 <br> Status: Refund| ExchangeCredit: $5 <br> Status: Settled|
| ExchangeCredit: -$5 <br>Status: Refund                  | ExchangeCredit: $5 <br> Status: Refund |
| ShopPay1: $25<br>Status: Refund<br>parentPaymentRef: ShopPay1 |   |

**How does HotWax Commerce ensure accurate inventory updates from Returns and Exchanges?**

When a customer returns an item in Shopify POS and exchanges it for another item, the inventory of the exchanged item is decreased in Shopify POS. Once this order syncs to HotWax Commerce in the completed status, HotWax automatically reduces the inventory for the exchanged item. For items returned from the original order, Shopify POS sends the return data to HotWax Commerce, including the facility ID where the returned items are received. If the restocking flag is enabled, HotWax Commerce will restock the inventory at the specified facility based on the captured facility ID.
