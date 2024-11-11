# Shopify and HotWax Commerce Returns & Exchanges

Many times customers visit their preferred store location to return or exchange their online order. Perhaps they received the wrong size, the item is defective, or they simply changed their mind. Shopify provides a streamlined process for returns and exchanges. Store associates can directly process returns using Shopify POS, specify the items customers wish to return and the reason for the return. If they'd like to exchange the item for a different product, Shopify allows them to select the new item directly within the return process.

Shopify has streamlined the returns and exchange process for both customers and retailers. When there is an exchange order in Shopify POS,  it creates a return for the items the customer doesn’t want and adds the new items the customer purchased in exchange to the order

This seems straightforward for the initial exchange process, as the transaction details and order information are consolidated within the original order. However, this approach creates complexities for ERP systems like NetSuite or other accounting systems that hold a repository of all the financial records.

Here's where the challenges arise:

- **Multiple Return Scenarios**: Customers may want to return items from their order, the exchanged item, or even a combination of both. Shopify will continue to update the same order with this new return information.
- **Missing Transaction Details**: While Shopify reflects the exchange within the order itself, it doesn't inherently link all transaction details (refunds and additional captures) to specific return/exchange items. This makes it difficult for ERP systems to accurately attribute these financial transactions to the correct returned or exchanged items.
- **Accounting Discrepancies**: ERP systems rely on clear and accurate financial data for GL accounting and posting. The consolidated order structure in Shopify, while user-friendly for returns processing, can lead to discrepancies for downstream systems trying to record the financial trail for each returned or exchanged item.

## How HotWax Commerce Helps Address These Challenges and Ensure Accurate Accounting for Your Business

1. HotWax relies on unique payment methods like `Exchange Credit` and `Exchange Payment` to distinguish between the original item value and any additional charges associated with an exchange. This ensures accurate financial records in HotWax and eliminates confusion for integrated ERP systems. These attribution payment methods are internal to HotWax Commerce and are used to handle the attribution logic.

    - **Exchange Credit**: This is the amount the customer has already paid for the original item being returned. It's used towards purchasing another item in the exchange order.
    - **Exchange Payment**: If the customer exchanges for an item of higher value, they pay the difference. This additional payment is known as exchange payment.
    - **Exchange Refund**: After deducting any exchange payment, any remaining amount from the original payment is refunded to the customer for returned items.

2. HotWax Commerce connects the attribution payment method with the `Parent Payment Reference`, linking the exchange order to the Shopify transaction on the original order. This helps track Shopify transactions under one main order and manage financial credits or additional payments related to exchange orders, facilitating the movement of credits and capturing extra payments during exchanges.

3. HotWax keeps a unified transaction history to keep track of all Shopify transactions in the original order while managing financial attribution to exchange orders. This approach helps avoid cross-order transactions and ensures that all financial activities are accurately recorded and easily traceable. To balance out the payment transactions on the original order, HotWax negates the amount of the exchange order from the original order.

4. HotWax doesn't simply accept the consolidated order structure from Shopify. Instead, it separates returns and exchange items, creating distinct order records for each action. This provides a clear historical record for each return or exchange, simplifying financial tracking in HotWax and for any downstream ERP integrations.

## Importing Returns and Exchanges

HotWax Commerce uses a multi-step data fetching strategy to import refunds and exchange data from Shopify. A scheduled job in the HotWax Commerce integration platform fetches all returns and exchanges from Shopify and generates a returns and exchanges feed.

Another job in the HotWax Commerce integration platform reads and transforms this feed. The platform sorts the return and exchange orders, and then HotWax Commerce imports the returns and exchanges into the system.

The two independent jobs in HotWax Commerce then process these orders: the `Create Return Order` job imports the returns from the SFTP path, and the `Create Exchange Order` job imports the exchanges.

## Scenarios of Returns and Exchanges

To illustrate how returns and exchanges are managed, let's explore two common scenarios:

1. When the exchanged item is of greater value than the returned item.
2. When the exchanged item is of lesser value than the returned item.

Let's consider an example where a customer places an online order on Shopify for three items: Item A, Item B, and Item C, each priced at $10. This order, when imported into HotWax Commerce, will have a corresponding payment transaction of $30 (Shop Pay 1).

| **Order Items** |
| ----------- |                                            
| A: $10      |
| B: $10      |
| C: $10      |
| **Transactions** |
|  ShopPay1: $30

### Scenario 1: Exchanged Item of Greater Value

Now, suppose the customer returns Item A and opts for an exchange with Item D, valued at $20. In this scenario, the item A was worth $10, while the exchanged item is worth $20. Therefore, the customer will need to pay an additional $10 for the exchange.

This additional payment will be recorded in Shopify under the same order to ensure proper transaction reconciliation. Now there are two transactions recorded on this order in Shopify: the initial transaction of $30 and a second transaction of $10 for the newly exchanged item.

| **Order Items** | **Exchange Item** |
| ----------- |-----------------------|
| A: ~~$10~~  | D: $20                |
| B: $10      |
| C: $10      | 
| **Transactions** |                   |
|  ShopPay1: $30 |                     |
|  ShopPay2: $10 |                     |

The newly exchanged item in Shopify will be imported into HotWax Commerce as a new exchange order. The $10 (Shop Pay 2) payment for this exchanged item will be recorded on the original order, which includes Item A (returned), Item B, and Item C. Keeping transactions linked as they are in Shopify allows finance teams to easily reconcile their payouts from Shopify with payments on individual orders, as the transactions are logged directly without additional calculations.

Adding all Shopify transactions to the main order, however, inflates the payment captured on the original order. To handle this, HotWax Commerce creates balancing attribution transactions that serve as counterparts to the payments associated with exchange orders.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: $20        |
| B: $10      |               |
| C: $10      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | ExchangeCredit: $10<br>parentPaymentRef: ShopPay1 |
| ShopPay2: $10                   | ExchangeCapture: $10<br>parentPaymentRef: ShopPay2|
| ExchangeCredit: $10<br>Status: Refund<br>parentPaymentRef: ShopPay1 |  |
| ExchangeCredit: $10<br>Status: Refund<br>parentPaymentRef: ShopPay2 |  |

The two exchange credit transactions show that $10 from Shop Pay 1 and $10 from Shop Pay 2 were taken from the original order and applied to the exchange order. The purpose of the exchange credit transactions is to ensure the payments for the original order are balanced.

Here, a challenge is that Shopify doesn't specify how much credit is applied to new items. To address this, HotWax Commerce calculates this attribution. To determine the value of the payment carried over, we calculate it as follows:

**(Exchange Order Total)** - **(Sum of Exchange Payments Captured)** = **Credit from Original Order**

$20 - $10 = $10

With this handling, HotWax ensures accurate financial records in HotWax and eliminates confusion for integrated ERP systems.

### Additional Scenarios Handled by HotWax Commerce

#### Returning the Exchanged Item
In the event that the customer decides to return item D, an exchange item, they’d be receiving a refund of $20. When this return happens, Shopify will use a refund attribution algorithm that will find the largest payment transaction and attempt to refund the entire amount against it. This ensures that no unnecessary transactions are created and offers easy traceability within Shopify.

In this scenario, when a customer returns an exchanged item, according to the Shopify algorithm, the refund will be issued using the initial $30 transaction (Shop Pay 1), while the payment for the exchanged item is processed separately through a different transaction (Shop Pay 2).

#### Returning the Entire Order Including Exchanged Items:
In the event that the customer returns item D along with items B and C, Shopify links refund transactions to the original payment being refunded using a “parent ID”. Since HotWax Commerce has two different orders, it uses the Shopify transaction ID to identify which order the payment was captured on. This ensures that the refund is posted on the same order, maintaining traceability.

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$20~~        |
| B: ~~$10~~      |               |
| C: ~~$10~~      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | ExchangeCredit: $10<br>parentPaymentRef: ShopPay1 |
| ShopPay2: $10                   | ExchangeCapture: $10<br>parentPaymentRef: ShopPay2 |
| ShopPayRefund1: $30<br>Status: Refund<br>parentPaymentRef: ShopPay1 | ExchangeRefund: $20  |
| ShopPayRefund2: $10<br>Status: Refund<br>parentPaymentRef: ShopPay2 |  |

In Shopify, all payment captures are against the same order, whether it be for originally purchased items or exchange items. Due to this mixing of transactions in Shopify, refunds are also processed fluidly, where an exchange item may be refunded against a payment captured when making an initial purchase. The end result is that Shopify links the refund transaction to the capture transaction it is refunding, but the payment being refunded is not always the actual payment the customer made for the item being returned.

### Refund Processing in Shopify and HotWax Commerce

**Original Order** : Has a total payment of $40 in Shopify ($30 + $10).

**Exchanged Order** : Requires allocating $20 from the original order to ensure consistency in HotWax as in Shopify.

 **In Shopify** :The order is refunded through two payments: $30 and $10, totaling $40. When refunds are processed, Shopify allocates them across these payments.

**In HotWax Commerce:** HotWax needs to split these transactions to match Shopify’s transaction records. For the $40 refund, HotWax splits it into: $20, $10, $10.

There are two valid ways to allocate these amounts

#### Method 1

Attribute the two $10 amounts to the exchanged order and attribute the $20 amount to the original order

| Order Type        | Refund amount | Attribution  |
|-------------------|---------------|--------------|
| Original Order    | $20           | Shop Pay 1   |
| Exchange Order    | $10           | Shop Pay 1   |
| Exchange Order    | $10           | Shop Pay 2   |


#### Method 2
Attribute the $20 amount to the exchanged order and attribute the two $10 amounts to the original order.

| Order Type        | Refund amount | Attribution  |
|-------------------|---------------|--------------|
| Original Order    | $10           | Shop Pay 1   |
| Original Order    | $10           | Shop Pay 2   |
| Exchange Order    | $20           | Shop Pay 1   |

Both methods are valid but create ambiguity in automatically deciding how to allocate these values in HotWax. This ambiguity makes it challenging for HotWax to match refunds accurately with Shopify’s payment transactions.
Therefore, HotWax Commerce creates a record of the exchange refund attribution when the exchanged item is returned to balance the payments on both the original order and the exchange order. Importantly, the attribution refund transaction is not linked to a Shopify refund transaction since there are multiple correct ways of attributing refunds. The amount of the exchange refund will always be equal to the amount of the returned items in the exchange order.

### Scenario 2: Exchanged Item of Lesser Value

When a customer returns item A, valued at $10, and opts for an exchange with another item D priced at $5, they will receive a refund of $5 to compensate for the price difference between the two items.
In the event that the customer subsequently decides to return both the exchanged item and all the items from their original order, they will receive a total refund of $25, encompassing the combined value of all the returned items (Item B, Item C and Item D).

| Order Items | Exchange Item |
|-------------|---------------|
| A: ~~$10~~  | D: ~~$5~~       |
| B: ~~$10~~      |               |
| C: ~~$10~~      |               |
| **Transactions**                  |                                      |
| ShopPay1: $30                   | ExchangeCredit: $5<br>parentPaymentRef: ShopPay1 |
| ShopPay1 Refund1: $5                  ||
| ShopPay1Refund2: $25<br>Status: Refund<br>parentPaymentRef: ShopPay1 | ExchangeRefund: $5  |


In this case, there will be an attribution of $5 to the exchange order with the payment method as `Exchange Credit` and as there is no payment captured from the customer thus there will be no `Exchange Payment` on the exchange order.
By managing all these scenarios, HotWax Commerce ensures that all financial transactions are accurately recorded, facilitating seamless integration with ERP systems and providing a clear audit trail for returns and exchanges.

**How does HotWax Commerce ensure accurate inventory updates from Returns and Exchanges?**

When a customer returns an item in Shopify POS and exchanges it for another item, the inventory of the exchanged item is decreased in Shopify POS. Once this order syncs to HotWax Commerce in the completed status, HotWax automatically reduces the inventory for the exchanged item.
For items returned from the original order, Shopify POS sends the return data to HotWax Commerce, including the facility ID where the returned items are received. If the restocking flag is enabled, HotWax Commerce will restock the inventory at the specified facility based on the captured facility ID.
