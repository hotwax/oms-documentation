# Gift Cards

## Gift card sales

Gorjana currently sets the value for gift cards before they have been sold. They do this by mapping physical gift cards to an inventoried SKU in NetSuite with a predefined value such as $50 or $100 and when an order is received for a certain denomination gift card, they fulfill a physical card that already has that value loaded onto it. This allows them to circumvent to skip the gift card activation process in Shopify since all gift cards have already been activated before hand.

The down side of this implementation is that now they only have a set amount of each denomination gift card. From a financial standpoint, they also have created a corresponding liability in Shopify for the grand total of gift card inventory they hold at anypoint even before a customer has actually paid for it.

### Gift cards in store

Gift Cards sold in store are sold similar to how most retailers fulfill gift cards traditionally. Each store has an inventory of serialized gift cards without any value applied to them, in other words "blank gift cards". Each serialized gift card is only applied value once the customer purchases the card, with the order containing the same SKU as an online order fulfilled by warehouse.

Using the same product in Shopify to represent physical inventory when purchased online and abstracted inventory when purchased in store creates a challenge when syncing these orders to HotWax as well as to NetSuite.

## NetSuite inventory impact

### Online order fulfilled from warehouse
When an online order is fulfilled from warehouse, the product in the order created on Shopify maps directly to a single NetSuite SKU for a gift card of that value. Allocation and fulfillment is straightforward like any other order item.

### Online order fulfilled from store
Stores, in HotWax, will never hold inventory for the actual gift card product on the order. In the current model stores will never be able to fulfill an online order for a gift card causing a split and forcing the gift card to be fulfilled from the warehouse.

### POS sale posting to NetSuite
When a POS sale occures for a gift card, it will be posted to NetSuite as a sale for the blanket physical card that the store actually holds. This will allow Gorjana to actually track how much gift card inventory remains at stores and replenish when needed.

## Proposed model
While fully transitioning to a blanket gift card SKU sytem may not be feasible as part of the initial implemntation, it is strongly recommended for long term system simplicity.

### Gift card in Shopify
As a stop gap solution, it is recommended that all gift cards in Shopify be transistion to the same SKU value while remaining independent products. This will allow HotWax to see them and their inventory as one and fluidly sync store and warehouse gift card inventory to Shopify.

### Gift card in NetSuite
Given that the gift card process at warehouse cannot be transitioned, each denomination gift card will still remain seperate inventory in NetSuite. When syncing inventory to HotWax, the gift cards will be excluded from the regular reset and instead be shifted to a custom inventory export specifically for gift cards. In the new custom gift card export, all gift card product inventory will be summed into one, and synced into HotWax as a cumilitive inventory.

Hint: this solution assumes that gift card inventory accuracy is not important on Shopify eCom similar to how it is not in store.

### eCom order to NetSuite
Because HotWax will now perceive all gift card orders as orders for a single physical inventory, a special order item mapping will need to be put into place in the order export to NetSuite for eCom gift card orders. This mapping will map the denomination of the purchased gift card to a NetSuite product ID, allowing the order to still be posted for the correct product in NetSuite but be fulfilled from stores as well when inventory for other items on an order are not available at the warehouse.

## Gift card payments

When gift card payments are applied to an order, they are not processed like traditional transactions. Instead they impact the GL in NetSuite as "deffered revenue". In order to correctly post this payment to NetSuite, it should not be sent as a customer deposit, which would post it as a regular transaction and instead be posted as a "payment item" in the order when pushed to NetSuite.

## Understanding deffered revenue

Because the customer already paid Gorjana when the bought the gift card, when the apply the gift card as a payment method, Gorjana is not actually gaining new revenue and hence should not post a customer deposit for that gift card payment in NetSuite. Instead it will show up as a payment item so that when payouts from Shopify are reconciled with Customer Deposits in NetSuite, they match correctly.

Gift Card Payment Item NetSuite Product ID:

```
TBD
```