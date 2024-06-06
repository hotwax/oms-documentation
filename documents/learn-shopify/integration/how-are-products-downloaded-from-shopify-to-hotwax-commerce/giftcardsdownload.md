# Gift Cards

Gift cards are stored-value cards that carry a value determined at the time of the card's purchase. They are often given as gifts or rewards and are redeemable for products up to the value stored on the card.

## Gift Cards in Shopify

Retailers set up both physical and digital gift cards in Shopify. Both physical and digital gift cards have a unique serial number or GC number that needs to be entered to redeem the card's value.

### Physical Gift Cards:

Physical gift cards are tangible cards that customers can buy online or in-store. These cards come with a unique serial number that customers can use to redeem the value stored in the card.

Let’s see what happens when customers place online orders for physical gift cards:

- **Preparation and Processing:** These cards are assigned a unique serial number and predefined value loaded onto them when they are processed and prepared for shipping.

- **Activation:** After processing, gift cards are activated in Shopify so that when customers receive their physical gift card, they can use the gift card serial number to redeem their purchase.

- **Inventory Management:** Physical gift cards have actual stock-keeping units and necessitate delivery to customers just like any other physical product. Oftentimes, retailers generate various variants of a gift card with different denominations, providing customers with a range of options to choose from.

### Digital Gift Cards:

Digital gift cards, also known as e-gift cards, are virtual equivalents of physical gift cards. Customers receive them via email or text message along with a unique serial number that they can use to redeem the value stored in the card.

- **Preparation and Processing:** Customers instantly receive digital cards upon purchase via email and therefore they are immediately fulfilled.

- **Activation:** Digital gift cards are auto-activated in Shopify.

- **Inventory Management:** Digital gift cards do not require physical inventory management as they are virtual products. Therefore, inventory tracking for digital gift cards is usually disabled on Shopify. This means they can be sold without limitations on quantity.

## Downloading Gift Cards from Shopify to HotWax Commerce

HotWax Commerce downloads physical and digital gift cards from Shopify in the same manner as other products with the `Import Products` job.

Learn more about [product synchronization from Shopify to HotWax Commerce](product-download.md)

The Product SKU serves as the primary identifier, which is mapped with the Product ID in HotWax Commerce. Consequently, if multiple gift cards in Shopify share the same SKU, they are associated with a common product ID in HotWax Commerce.

For example, consider a product named "Gift Card" in Shopify with three variants:

| SKU        | Product ID | Price |
|------------|------------|-------|
| 55000-000  | 1001       | $100  |
| 55000-000  | 1002       | $250  |
| 55000-000  | 1003       | $500  |

Upon downloading this product "Gift Card" from Shopify, it will be mapped in HotWax Commerce as follows:

| SKU        | Shopify Product ID | Shop ID  | HC Product ID |
|------------|--------------------|----------|---------------|
| 55000-000  | 1001               | NOTNAKED | HC2001        |
| 55000-000  | 1002               | NOTNAKED | HC2001        |
| 55000-000  | 1003               | NOTNAKED | HC2001        |
