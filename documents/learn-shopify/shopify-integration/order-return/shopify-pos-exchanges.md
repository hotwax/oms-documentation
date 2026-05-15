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

Before delving into how returns and exchanges are imported, it’s important to understand two key concepts:

1. **Exchange Credit**: The amount already paid for the original item, applied toward the new item in an exchange.
2. **Exchange Payment**: The additional amount paid by the customer if the new item is more expensive than the original.

A scheduled job in HotWax Commerce fetches returns and exchanges from Shopify:

- Exchange additions are imported as new sales orders linked to the original sale.
- Returns are imported independently and linked to their corresponding HotWax order to balance totals.

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

Example: Customer returns Item A ($10) for Item D ($20). They pay an additional $10.

| **Order Items** | **Exchange Item** |
| --- | --- |
| A: ~~$10~~ | D: $20 |
| B: $10 | |
| C: $10 | |
| **Transactions** | |
| ShopPay 1: $30 | |
| ShopPay 2: $10 | |

#### Importing into HotWax

HotWax creates a new sales order for Item D linked to the original. It automatically:
1. **Calculates Credit**: (Exchange Total) - (New Payments) = $20 - $10 = $10.
2. **Records Transactions**: ShopPay 2 ($10) is linked to the new order. Balancing transactions (ExchangeCredit and ExchangePayment) ensure accounting stability.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: $20        |
| B: $10 | |
| C: $10 | |
| **Transactions** | |
| ShopPay 1: $30 | |
| ExchangeCredit: $10 (Refund on original) | ExchangeCredit: $10 (Settled on new) |
| ShopPay 2: $10 | |
| ExchangePayment: $10 (Refund on original) | ExchangePayment: $10 (Settled on new) |

### Additional Scenarios Handled by HotWax Commerce

#### Returning the Exchanged Item

In the event that the customer decides to return item D, an exchange item, they’d be receiving a refund of $20. When this return happens, Shopify will use a refund attribution algorithm that will find the largest payment transaction and attempt to refund the entire amount against it.

In this scenario, even though the payment for the exchanged item was processed through a different transaction (Shop Pay 2), Shopify issued the refund using the initial $30 transaction (Shop Pay 1).

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$20~~    |
| B: $10      |               |
| C: $10      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ExchangeCredit: $10 (Refund)                  | ExchangeCredit: $10 (Settled) |
| ShopPay2: $10                   |  |
| ExchangePayment: $10 (Refund) | ExchangePayment: $10 |
| ExchangeCredit: -$20 (Refund)  | ExchangeCredit: $20 (Refund) |
| ShopPay1: $20 (Refund)                 | |

#### Returning the Entire Order Including Exchanged Items

In the event that the customer returns item D along with items B and C, Shopify will create two refund transactions, one to refund ShopPay 1 and another to refund ShopPay 2.

Since HotWax Commerce has two different orders, it uses the Shopify transaction ID to identify which order the payment was captured on. This ensures that the refund is posted on the same order, maintaining traceability.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$20~~        |
| B: ~~$10~~      |               |
| C: ~~$10~~      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | |
| ExchangeCredit: $10 (Refund)                  | ExchangeCredit: $10 (Settled) |
| ShopPay2: $10                   |  |
| ExchangePayment: $10 (Refund) |ExchangePayment: $10  |
| ExchangeCredit: -$20 (Refund)                  | ExchangeCredit: $20 (Refund) |
| ShopPayRefund1: $30 (Refund) |  |
| ShopPayRefund2: $10 (Refund) |  |

In Shopify, all payment captures are against the same order, whether it be for originally purchased items or exchange items. Due to this mixing of transactions in Shopify, refunds are also processed fluidly, where an exchange item may be refunded against a payment captured when making an initial purchase.

### Refund Processing in Shopify and HotWax Commerce

**In Shopify**: The order is refunded through two payments: $30 and $10, totaling $40. When refunds are processed, Shopify allocates them across these payments.

**In HotWax**:
- **Original Order**: Has a total transaction record of $40 ($30 + $10) with $10 refunded to exchange credit.
- **Exchanged Order**: Customer was issued a $20 refund from a combination of the two refund transactions.

HotWax Commerce now needs to split these transactions across two sales orders in HotWax to match Shopify’s transaction records. There are two valid ways to allocate these amounts:

#### Method 1

Attribute the two $10 amounts to the exchanged order and attribute the $20 amount to the original order.

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

Both methods are valid but one or the other attribution model is not actually specified by Shopify. Therefore, instead of picking an attribution itself, HotWax Commerce simply marks the exchange order as fully refunded using an **Exchange Credit: Refunded** payment line and does not try to link specific Shopify refunds to particular return items.

### Scenario 2: Exchanged Item of Lesser Value

Example: Customer returns Item A ($10) for Item D ($5). They receive a $5 refund.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: $5        |
| B: $10      |               |
| C: $10      |               |
| **Transactions** | |
| ShopPay 1: $30 | |
| ShopPay 1: $5 (Refund) | |
| ExchangeCredit: $5 (Refund on original) | ExchangeCredit: $5 (Settled on new) |

If the customer later returns Item D along with B and C, they will receive a final refund of $25 (B: $10 + C: $10 + D: $5).

## Inventory Updates

HotWax automatically adjusts inventory for exchanges and returns:
- **Exchanges**: Inventory for the new item is decreased when the order syncs as `Completed`.
- **Returns**: Inventory for returned items is restocked at the specified facility if the restocking flag is enabled in the Shopify integration settings.
