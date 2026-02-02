# Returns and Exchanges

One Shopify order can now map to multiple orders in HotWax. When comparing the entirety of a Shopify order against a HotWax order it always needs to be compared against all linked orders in HotWax.

To ensure this one to many relationship is correctly supported throughout the system, HotWax will need to check all orders whenever checking orders for exchanges or returns. While exchanges is obvious, returns is equally important because the returned item could be for an item that was not on the original order or the “Primary Order” in HotWax. So it will be necessary to check all linked orders to ensure that the return is saved against the corresponding item in HotWax no matter which order it is in. To do this, returns will always be mapped into HotWax using the order line item ID which is unique for an item in an order even if the same SKU is ordered twice in separate lines.

The first time that an order is synced into HotWax, the order is created as the “Primary Order”. If a sync for “Exchanges” is enabled, the OMS will fetch all recently updated orders with returns in themes as well as any linked exchanges, exchange items will be imported into HotWax as a new order which is associated with the Primary Order as an exchange order.

Everytime exchanges are synced into HotWax, additional context from the Refunds and Transactions resource may be required to create a comprehensive view of the current state of the order. The returns information used to isolate exchange items will also be used to synchronously create returns for corresponding items in the OMS.

If the exchange item is for a lesser or greater value than the returned items a new transaction will be created in the Shopify order. Lesser will result in a refund and greater will result in additional payment being captured. Refunds will be saved against the primary order in HotWax since the refund is against the payment the customer gave on the original order. Greater exchanges will result in a new payment capture transaction, in that case the new payment will be saved against the new exchange order created since it is additional revenue captured against the item specifically in that order. To get these details, the transaction resource for each updated order may need to be fetched by HotWax.

Finances for exchanges:
The exchange order created for the new item is financially represented as being paid for by existing credit unless additional money was captured from the customer for the difference in price. The amount of credit applied to the order is computed by subtracting the amount captured from the exchange order’s total.

How the exchange order total is derived:
The new exchange order total is derived from the sum of charges listed in the order line item in the Shopify order JSON, this includes the taxes and discounts applied on that item. There are no global, order level, charges that the OMS has to pro-rate itself to determine item level impact.

Apply credit applied from previous order:
The amount of credit to carry from the “Primary Order” is not logged by Shopify since for Shopify it is all one order. Instead, after fetching all transactions from Shopify for the exchange order, the OMS will compute the difference between the exchange order total and the amount paid by the customer. Any amount that there is not a new transaction for will be considered credit applied from the Primary Order.

To apply this credit, a new payment type will be introduced called “Exchange Credit”. This credit is not real revenue.

(Exchange Order Total) - (Sum of exchange payments captured) = Credit from Primary Order

Refunding an exchange order:
When an item purchased as an exchange is returned, the refund for that item will be posted against the original order. 

Because the way Refund transaction is created in shopify POS makes it hard to trace back against which returned items the refund is generated. For example, an exchange order item is refunded along with an item from the original order. 
Therefore, refund will always be applied to the original order itself.
